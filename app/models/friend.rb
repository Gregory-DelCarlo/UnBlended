class Friend < ApplicationRecord
    # constraints and a user's friends
    validates :main_user, :friended_user, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :main_user,
        class_name: :User
end
