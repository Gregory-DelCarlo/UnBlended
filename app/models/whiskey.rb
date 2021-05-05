class Whiskey < ApplicationRecord
    validates :name, :type, :abv, :proof, :distillery_id, presence: true
    # validates [:distillery_id, :name], uniqueness: true


    # disabled inheritance column to properly store whiskey type
    self.inheritance_column = :_type_disabled



    # assosciations
    has_one_attached :photo

    belongs_to :distillery, 
        primary_key: :id,
        foreign_key: :distillery_id,
        class_name: :Distillery

    has_many :reviews,
        primary_key: id,
        foreign_key: :whiskey_id,
        class_name: :Review
    
    
end
