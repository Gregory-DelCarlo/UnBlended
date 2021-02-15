class CreateWhiskeys < ActiveRecord::Migration[5.2]
  def change
    create_table :whiskeys do |t|
      t.string :name, null: false, unique: true
      t.string :type, null: false
      t.float :abv, null: false
      t.integer :proof, null: false
      t.text :description
      t.integer :distillery_id, null: false
      t.timestamps
    end

    add_index :whiskeys, :name, unique: true
    add_index :whiskeys, :distillery_id
  end
end
