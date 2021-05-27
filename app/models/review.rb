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

    def self.get_drink_rating(id)
        ratings = Review.where(whiskey_id: id).pluck(:rating)
        if ratings.length != 0
            avg = ratings.sum / ratings.length
            avg.round(2)
        else
            0
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
