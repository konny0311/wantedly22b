class CreateFeeds < ActiveRecord::Migration[5.0]
  def change
    create_table :feeds do |t|
      t.text :title, null:false
      t.text :content, null:false
      t.integer :user_id, null:false, foreign_key:true
      t.integer :company_id, null:false, foreign_key:true
      t.timestamps
    end
  end
end
