class ApplicationController < ActionController::Base
  protect_from_forgery


  before_filter do
    @current_action = action_name
    @current_controller = controller_name
  end

end
