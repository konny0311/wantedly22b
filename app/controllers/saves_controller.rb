class SavesController < ApplicationController
  def create
    @save = Save.new(user_id: 1, project_id:params[:project_id])
    if @save.save
      respond_to do |format|
        format.html{redirect_to 'projects#show'}
        format.json
      end
    else
      flash.now[:alert] = '保存できませんでした'
      redirect_to 'projects#show'
    end
  end

  def destroy
    save = Entry.find_by(user_id: 1, project_id: params[:id])
    save.destroy!
  end
end
