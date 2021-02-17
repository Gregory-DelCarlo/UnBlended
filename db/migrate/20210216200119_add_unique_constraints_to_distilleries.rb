class AddUniqueConstraintsToDistilleries < ActiveRecord::Migration[5.2]
  def change
    change_column :distilleries, :name, :string, null: false, unique: true
  end
end
