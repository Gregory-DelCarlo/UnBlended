class AddDistilleryEstablished < ActiveRecord::Migration[5.2]
  def change
    add_column :distilleries, :established, :string, null: false
  end
end
