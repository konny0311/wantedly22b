# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180322063017) do

  create_table "companies", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",                        null: false
    t.string   "url",                         null: false
    t.string   "logo",                        null: false
    t.string   "business_type",               null: false
    t.string   "image"
    t.text     "what_content",  limit: 65535, null: false
    t.text     "why_content",   limit: 65535, null: false
    t.text     "how_content",   limit: 65535, null: false
    t.string   "founder",                     null: false
    t.string   "catchcopy",                   null: false
    t.string   "cover_image"
    t.text     "profile",       limit: 65535, null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["name"], name: "index_companies_on_name", using: :btree
  end

  create_table "projects", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "title",                    null: false
    t.text     "content",    limit: 65535, null: false
    t.string   "job_title",                null: false
    t.integer  "job_type",                 null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.integer  "company_id",               null: false
    t.index ["job_type"], name: "index_projects_on_job_type", using: :btree
    t.index ["title"], name: "index_projects_on_title", using: :btree
  end

end
