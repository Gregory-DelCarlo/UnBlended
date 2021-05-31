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

ActiveRecord::Schema.define(version: 2021_05_31_064729) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "cheers", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "review_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id", "user_id"], name: "index_cheers_on_review_id_and_user_id", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.text "body", null: false
    t.integer "review_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_comments_on_review_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "distilleries", force: :cascade do |t|
    t.string "name", null: false
    t.float "lat", null: false
    t.float "long", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "established", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.index ["name"], name: "index_distilleries_on_name", unique: true
  end

  create_table "friends", force: :cascade do |t|
    t.integer "main_user", null: false
    t.integer "friended_user", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["main_user", "friended_user"], name: "index_friends_on_main_user_and_friended_user", unique: true
  end

  create_table "liked_whiskeys", force: :cascade do |t|
    t.integer "drink_id", null: false
    t.integer "list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["drink_id", "list_id"], name: "index_liked_whiskeys_on_drink_id_and_list_id", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.float "rating"
    t.text "body"
    t.string "location"
    t.integer "whiskey_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
    t.index ["whiskey_id"], name: "index_reviews_on_whiskey_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "session_token", null: false
    t.index ["password_digest"], name: "index_users_on_password_digest"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "whiskey_lists", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_whiskey_lists_on_user_id"
  end

  create_table "whiskeys", force: :cascade do |t|
    t.string "name", null: false
    t.string "type", null: false
    t.float "abv", null: false
    t.integer "proof", null: false
    t.text "description"
    t.integer "distillery_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["distillery_id", "name"], name: "index_whiskeys_on_distillery_id_and_name", unique: true
    t.index ["distillery_id"], name: "index_whiskeys_on_distillery_id"
    t.index ["name"], name: "index_whiskeys_on_name", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
