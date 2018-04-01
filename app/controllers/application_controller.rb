class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
  	devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :gender, :birthday_year, :birthday_month, :birthday_day])
  	devise_parameter_sanitizer.permit(:sign_in, keys: [:name, :gender, :birthday_year, :birthday_month, :birthday_day])
  end	
end
