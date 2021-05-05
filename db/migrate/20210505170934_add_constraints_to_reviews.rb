class AddConstraintsToReviews < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :whiskey_id, :integer, null: false
    change_column :reviews, :user_id, :integer, null: false
  end
end
