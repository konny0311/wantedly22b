class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, null:false
      t.string :email, null:false, unique:true
      t.string :password, null:false
      t.string :catchcopy
      t.string :profile
      t.string :future
      t.string :gender
      t.string :birthday
      t.string :cover_image
      t.string :profile_image
      t.integer :tel
      t.integer :company_id, foreign_key:true
      t.timestamps
    end
  end
end
