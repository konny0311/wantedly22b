class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
    @company = @project.company
    @users = @company.users
    @projects = @company.projects.where("id != #{params[:id]}").limit(4)
    @feeds = Feed.where("company_id = #{@company.id}").limit(4)
    @address = CGI.escape("#{@company.address}")
    # @employments = Employment.where('id = project.company_id').limit(4)
  end
end
