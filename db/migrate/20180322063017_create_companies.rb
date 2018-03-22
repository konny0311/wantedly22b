class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name, null:false, index:true
      t.string :url, null:false, unique:true
      t.string :logo, null:false, unique:true
      t.string :business_type, null:false
      t.string :image
      t.text :what_content, null:false
      t.text :why_content, null:false
      t.text :how_content, null:false
      t.string :founder, null:false
      t.string :catchcopy, null:false
      t.string :cover_image
      t.text :profile, null:false


      t.timestamps
    end
  end
end
