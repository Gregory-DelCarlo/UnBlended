class CreateCheers < ActiveRecord::Migration[5.2]
  def change
    create_table :cheers do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false
      t.timestamps
    end

    add_index :cheers, [:user_id, :review_id], unique: true
  end
end
