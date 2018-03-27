class AddColumnToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :supports_count, :integer
  end
end
