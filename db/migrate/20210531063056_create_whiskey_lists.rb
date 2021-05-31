class CreateWhiskeyLists < ActiveRecord::Migration[5.2]
  def change
    create_table :whiskey_lists do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :whiskey_lists, :user_id
  end
end
