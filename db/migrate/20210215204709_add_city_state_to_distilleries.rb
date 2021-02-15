class AddCityStateToDistilleries < ActiveRecord::Migration[5.2]
  def change
    add_column :distilleries, :city, :string, null: false
    add_column :distilleries, :state, :string, null: false
  end
end
