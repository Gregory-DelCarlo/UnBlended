class Review < ApplicationRecord
    validates :whiskey_id, :user_id, presence: true


    def self.filtered(type, id)
        if type == 'Drink'
            Review.where(whiskey_id: id)
        elsif type == 'Friends'
            user = User.find(id)
            friends = user.friends.map {|friend| friend.friended_user }
            Review.where(user_id: friends)
        elsif type == 'Distillery'
            drinksObj = Drink.where(distillery: id)
            ids = drinksObj.map { |drink| drink.id }
            Review.where(whiskey_id: ids)
        elsif type == 'All'
            Review.all()
        end
    end

    def self.get_drink_ratings(id)
        ratings = Review.where(whiskey_id: id).pluck(:rating)
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
