class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :main_user, null: false
      t.integer :friended_user, null: false
      t.timestamps
    end

    add_index :friends, [:main_user, :friended_user], unique: true
  end
end
