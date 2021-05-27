@ratings.each do |rating|
    json.set! rating[:id], rating[:rating]
end