module Callable
  extend ActiveSupport::Concern

  included do
    def self.call(*args, **kwargs)
      new(*args, **kwargs).call
    end
  end

  def call
    raise NotImplementedError, "#{self.class} must implement #call method"
  end
end
