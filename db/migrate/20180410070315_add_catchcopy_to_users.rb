class AddCatchcopyToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :catchcopy, :string
    add_reference :users, :company, foreign_key: true
  end
end
