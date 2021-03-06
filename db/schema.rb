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

ActiveRecord::Schema.define(version: 20180330110136) do

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
    t.text     "address",       limit: 65535, null: false
    t.index ["name"], name: "index_companies_on_name", using: :btree
  end

  create_table "employments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id",                  null: false
    t.integer  "company_id",               null: false
    t.string   "position"
    t.boolean  "full_time",                null: false
    t.text     "detail",     limit: 65535
    t.date     "start_date",               null: false
    t.date     "left_date"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "entries", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id",    null: false
    t.integer  "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "feeds", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text     "title",      limit: 65535, null: false
    t.text     "content",    limit: 65535, null: false
    t.integer  "user_id",                  null: false
    t.integer  "company_id",               null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "projects", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "title",                        null: false
    t.text     "content",        limit: 65535, null: false
    t.string   "job_title",                    null: false
    t.string   "job_type",                     null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "company_id",                   null: false
    t.text     "requirement",    limit: 65535, null: false
    t.integer  "supports_count"
    t.index ["job_type"], name: "index_projects_on_job_type", using: :btree
    t.index ["title"], name: "index_projects_on_title", using: :btree
  end

  create_table "saves", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id",    null: false
    t.integer  "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "supports", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id",    null: false
    t.integer  "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",          null: false
    t.string   "email",         null: false
    t.string   "password",      null: false
    t.string   "catchcopy"
    t.string   "profile"
    t.string   "future"
    t.string   "gender"
    t.string   "birthday"
    t.string   "cover_image"
    t.string   "profile_image"
    t.integer  "tel"
    t.integer  "company_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

end
