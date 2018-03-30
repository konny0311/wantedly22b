class SavesController < ApplicationController
  def create
    @save = Save.create(user_id: 1, project_id:params[:project_id])
    if @save.save
      respond_to do |format|
        format.html{redirect_to 'projects#show'}
        format.json
      end
    end
  end

  def destroy
    save = Entry.find_by(user_id: 1, project_id: params[:id])
    save.destroy
  end
end
