class EntriesController < ApplicationController

  def create
    @entry = Entry.create(user_id: 1, project_id:params[:project_id])
    if @entry.save
      respond_to do |format|
        format.html{redirect_to 'projects#show'}
        format.json
      end
    end
  end

  def destroy
    entry = Entry.find_by(user_id: 1, project_id: params[:id])
    entry.destroy
  end
end
