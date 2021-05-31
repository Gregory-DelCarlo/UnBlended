class FixCheersIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :cheers, [:user_id, :review_id]
    add_index :cheers, [:review_id, :user_id], unique: true
  end
end
