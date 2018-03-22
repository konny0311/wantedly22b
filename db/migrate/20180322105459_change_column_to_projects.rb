class ChangeColumnToProjects < ActiveRecord::Migration[5.0]
  def change
    change_column :projects, :job_type, :string, null:false, index:true
  end
end
