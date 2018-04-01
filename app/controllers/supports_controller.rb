class SupportsController < ApplicationController
  def create
    @support = Support.new(user_id: 1, project_id: params[:project_id])
    if @support.save
      respond_to do |format|
        format.html {redirect_to 'projects#show'}
        format.json
      end
    else
      flash.now[:alert] = '応援できませんでした'
      redirect_to 'projects#show'
    end
  end

  def destroy
    support = Support.find_by(user_id: 1, project_id: params[:id])
    support.destroy!
  end
end
