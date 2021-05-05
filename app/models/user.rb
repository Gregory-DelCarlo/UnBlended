class User < ApplicationRecord
    # validations for User table
    validates :username, :password_digest, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    # make sure user has a session token
    after_initialize :ensure_session_token

    #for use in views
    attr_reader :password


#------------------------------USER AUTH-------------------------------

    def self.find_by_credentials(username, password)
        # try to find user
        user = User.find_by(username: username)
        # if the user is found and the password matches 
        if user && user.is_password?(password)
            user  # return the user from the database
        else
            nil
        end
    end

    def is_password?(password)
        #returns unhashed password and calls BCrypt comparator
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    # overwrites setter
    def password=(password)
        # sets password_digest to hashed version of user password
        self.password_digest = BCrypt::Password.create(password)
        # sets instance variable password equal to user input password
        @password = password
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
    end


    #---------------------------Associations-----------------------------

    has_may :reviews,
        primary_key: id,
        foreign_key: :user_id,
        class_name: :Review

end
