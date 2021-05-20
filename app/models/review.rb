class Review < ApplicationRecord
    validates :whiskey_id, :user_id, presence: true


    def self.filtered(type, id)
        if type == 'Drink'
            Review.where(whiskey_id: id)
        elsif type == 'Friends'
            Review.where(user_id: id)
        elsif type == 'All'
            Review.all()
        end
    end

    belongs_to :whiskey,
        primary_key: :id,
        foreign_key: :whiskey_id,
        class_name: :Whiskey

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
