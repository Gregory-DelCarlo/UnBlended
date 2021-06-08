class Comment < ApplicationRecord
    #constraints and a specifc reviews' comments
    # has one review and has one user
    validates :body, :user_id, :review_id, presence: true

    belongs_to :review,
        primary_key: :id,
        foreign_key: :review_id,
        class_name: :Review
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
