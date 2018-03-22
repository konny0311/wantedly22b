class AddColumnToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :requirement, :text, null:false
  end
end
