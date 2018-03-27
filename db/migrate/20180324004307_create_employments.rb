class CreateEmployments < ActiveRecord::Migration[5.0]
  def change
    create_table :employments do |t|
      t.integer :user_id, null:false, foreign_key:true
      t.integer :company_id, null:false, foreign_key:true
      t.string  :position
      t.boolean  :full_time, null:false
      t.text    :detail
      t.date    :start_date, null:false
      t.date    :left_date

      t.timestamps
    end
  end
end
