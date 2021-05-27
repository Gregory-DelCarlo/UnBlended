@ratings.each do |rating|
    json.set! rating[:id] do
        json.ratings rating[:ratings]
    end
end