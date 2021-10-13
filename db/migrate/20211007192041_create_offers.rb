class CreateOffers < ActiveRecord::Migration[6.1]
  def change
    create_table :offers do |t|
      t.string :name
      t.string :description
      t.float :price
      t.blob :image

      t.timestamps
    end
  end
end
