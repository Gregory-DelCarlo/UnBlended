class CreateLikedWhiskeys < ActiveRecord::Migration[5.2]
  def change
    create_table :liked_whiskeys do |t|
      t.integer :drink_id, null: false
      t.integer :list_id, null: false
      t.timestamps
    end

    add_index :liked_whiskeys, [:drink_id, :list_id], unique: true
  end
end
