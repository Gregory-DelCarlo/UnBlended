class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.float :rating
      t.text :body
      t.string :location
      t.integer :whiskey_id
      t.integer :user_id
      t.timestamps
    end

    add_index :reviews, :whiskey_id 
    add_index :reviews, :user_id
  end
end
