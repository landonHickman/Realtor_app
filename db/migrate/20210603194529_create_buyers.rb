class CreateBuyers < ActiveRecord::Migration[6.1]
  def change
    create_table :buyers do |t|
      t.string :name
      t.integer :age
      t.float :funds
      t.belongs_to :home, null: false, foreign_key: true

      t.timestamps
    end
  end
end
