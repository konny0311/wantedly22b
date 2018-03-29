class SupportsController < ApplicationController
  def create
    @support = Support.create(user_id: current_user.id, project_id: params[:id])
    @supports = Support.where(project_id: params[:id])
    if @support.save
      respond_to do |format|
        format.html {redirect_to 'projects#show'}
        format.json
  end

  def destroy
    support = Support.find_by(user_id: current_user.id, project_id: params[:id])
    support.destroy
    @supports = Support.where(project_id: params[:id])
  end
end
