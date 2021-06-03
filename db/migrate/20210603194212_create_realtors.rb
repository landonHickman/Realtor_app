class CreateRealtors < ActiveRecord::Migration[6.1]
  def change
    create_table :realtors do |t|
      t.string :name
      t.boolean :lincense
      t.integer :rating

      t.timestamps
    end
  end
end
