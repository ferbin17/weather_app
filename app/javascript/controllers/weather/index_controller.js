import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["weatherDetails", "weatherDisplay", "addressForm"]

  toggleWeatherDisplay() {    
    this.weatherDisplayTarget.classList.toggle("hidden")
    this.addressFormTarget.classList.toggle("hidden")
  }

  submitAddress(event) {
    event.preventDefault()
    
    const formData = new FormData(event.target)
    const address = formData.get('address')
    
    if (!address || address.trim() === '') {
      alert('Please enter a address')
      return
    }

    this._fetchWeather({ address })
  }

  toggleUnit(event) {
    event.preventDefault()
    const { checked } = event.target
    const unit = checked ? "fahrenheit" : "celsius"
    const address = document.querySelector('#current-address')?.value

    this._fetchWeather({ unit, address })
  }

  _fetchWeather({ address, unit }) {
    const payload = { weather: { address: address || '', unit: unit || undefined } }
  
    fetch('/weather/show', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/html'
      }
    })
    .then(response => {
      response.json().then(data => {
        this.weatherDetailsTarget.innerHTML = data.html
      })
     })
  }
} 