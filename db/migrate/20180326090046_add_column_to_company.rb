class AddColumnToCompany < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :address, :text, null:false
  end
end
