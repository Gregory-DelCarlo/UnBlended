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
            ids = Drink.where(distillery: id).pluck(id)
            Review.where(whiskey_id: ids)
        elsif type == 'All'
            Review.all()
        end
    end

    def self.get_drink_ratings(id)
        ratings = Review.where(whiskey_id: id).pluck(:rating)
    end

    def self.review_cheers(id)
        review = Review.find(id)
        cheers = []
        review.cheers.each do |cheer|
            cheers << cheer.user_id
        end
        cheers
    end

    def self.review_comments(id)
        review = Review.find(id)
        
        review.comments
    end

    belongs_to :whiskey,
        primary_key: :id,
        foreign_key: :whiskey_id,
        class_name: :Whiskey

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :cheers,
        primary_key: :id,
        foreign_key: :review_id,
        class_name: :Cheer
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :review_id,
        class_name: :Comment
end
