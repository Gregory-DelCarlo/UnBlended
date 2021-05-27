@ratings.each do |rating|
    json.set! rating[:id] do
        json.array! rating[:ratings]
    end
end