class AddColumnsToOffers < ActiveRecord::Migration[6.1]
  def change
    add_column :offers, :location, :string
    add_column :offers, :phone, :string
    add_column :offers, :meals, :string
    add_column :offers, :host, :string
    add_column :offers, :stars, :integer
    add_column :offers, :rating, :integer
    add_column :offers, :cleanliness, :integer
    add_column :offers, :atmosphere, :integer
    add_column :offers, :food, :integer
  end
end
  