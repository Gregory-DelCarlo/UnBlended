class AddIndexToNameAndDistilleryForWhiskey < ActiveRecord::Migration[5.2]
  def change
    add_index :whiskeys, [:distillery_id, :name], unique: true
  end
end
