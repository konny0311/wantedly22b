class SupportsController < ApplicationController
  def create
    @support = Support.create(user_id: 1, project_id: params[:project_id])
    if @support.save
      respond_to do |format|
        format.html {redirect_to 'projects#show'}
        format.json
      end
    end
  end

  def destroy
    support = Support.find_by(user_id: 1, project_id: params[:id])
    support.destroy
  end
end
