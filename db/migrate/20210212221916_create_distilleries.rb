class CreateDistilleries < ActiveRecord::Migration[5.2]
  def change
    create_table :distilleries do |t|
      t.string :name, null: false, unique: true
      t.float :lat, null: false, unique: true
      t.float :long, null: false, unique: true
      t.text :description
      t.timestamps
    end

    add_index :distilleries, :name, unique: true
  end
end
