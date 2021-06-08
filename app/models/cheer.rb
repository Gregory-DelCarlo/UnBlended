class Cheer < ApplicationRecord
    # need constraints and method to return a specifc reviews' cheers
    # has one review and has one user
    validates :user_id, :review_id, presence: true

    belongs_to :review,
        primary_key: :id,
        foreign_key: :review_id,
        class_name: :Review

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
