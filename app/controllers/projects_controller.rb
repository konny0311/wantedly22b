class ProjectsController < ApplicationController

  def index
  end

  def show
    @project = Project.find(params[:id])
    @company = @project.company
    @projects = Project.where("company_id = #{@company.id} && id != #{params[:id]}").limit(4)
    @feeds = Feed.where("company_id = #{@company.id}").limit(4)
    @address = CGI.escape("#{@company.address}")
    # @employments = Employment.where('id = project.company_id').limit(4)
  end
end
