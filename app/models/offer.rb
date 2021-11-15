class Offer < ApplicationRecord
    has_one_attached :image, :dependent => :destroy

  validates :name, presence: true
  validates :description, presence: true
  validates :phone, presence: true
  validates :location, presence: true
  validates :meals, presence: true
  validates :host, presence: true
  validates :price, presence: true, :numericality => { :greater_than_or_equal_to => 1 }
  validates :stars, presence: true, :inclusion => 1..5
  validates :cleanliness, presence: true, :inclusion => 0..100
  validates :food, presence: true, :inclusion => 0..100
  validates :atmosphere, presence: true, :inclusion => 0..100

  def get_rating(offer)
    (offer.cleanliness + offer.food + offer.atmosphere) / 3
  end

end
