class CreateEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :entries do |t|
      t.integer :user_id, null:false, foreign_key:true
      t.integer :project_id, null:false, foreign_key:true

      t.timestamps
    end
  end
end
