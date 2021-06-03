class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.string :address
      t.string :city
      t.string :image
      t.float :price

      t.timestamps
    end
  end
end
