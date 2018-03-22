class AddColumnToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :company_id, :integer, null: false, index: true, foreign_key: true
  end
end
