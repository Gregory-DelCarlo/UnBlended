@whiskey.each do |whiskey|
    # debugger
    json.set! whiskey.id do 
        json.partial! 'whiskey', whiskey: whiskey
    end
end