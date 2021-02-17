class Distillery < ApplicationRecord
    validates :name, :lat, :long, :established, :city, :state, presence: true
    validates :name, uniqueness: true

    has_many :whiskeys,
        primary_key: :id,
        foreign_key: :distillery_id,
        class_name: :Whiskey

end
