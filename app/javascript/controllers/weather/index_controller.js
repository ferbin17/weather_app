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

    fetch('weather/show', {
      method: 'POST',
      body: JSON.stringify({ address }),
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