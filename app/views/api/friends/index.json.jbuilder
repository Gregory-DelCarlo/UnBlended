friend_ids = []

@friends.each do |friend|
    friend_ids << friend.friended_user
end

json.set! @user.id, friend_ids
