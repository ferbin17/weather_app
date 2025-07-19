# Pry configuration for enhanced debugging

# Enable syntax highlighting
Pry.config.color = true

# Set the default prompt using the correct API
Pry.config.prompt = Pry::Prompt[:default]

# Add useful shortcuts
Pry.config.commands.alias_command "c", "continue"
Pry.config.commands.alias_command "n", "next"
Pry.config.commands.alias_command "s", "step"
Pry.config.commands.alias_command "w", "whereami"

# Load Rails environment helpers
if defined?(Rails)
  # Add Rails-specific helpers
  Pry.config.commands.command "routes" do
    Rails.application.routes.routes.each do |route|
      puts "#{route.verb} #{route.path.spec}"
    end
  end

  Pry.config.commands.command "models" do
    puts ActiveRecord::Base.descendants.map(&:name)
  end
end

# Better error handling
Pry.config.exception_handler = proc do |output, exception, _pry|
  output.puts "Exception: #{exception.class}: #{exception.message}"
  output.puts exception.backtrace.first(5).join("\n")
end
