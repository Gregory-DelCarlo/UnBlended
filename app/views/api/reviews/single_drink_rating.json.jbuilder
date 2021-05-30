json.set! @id do
    json.avg @rating
    json.total @ratings.length
end