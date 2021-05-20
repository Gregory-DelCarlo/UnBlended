json.id whiskey.id
json.name whiskey.name
json.type whiskey.type
json.abv whiskey.abv
json.proof whiskey.proof
json.description whiskey.description
json.distillery whiskey.distillery_id
if whiskey.photo.attached?
    json.photo url_for(whiskey.photo)
else 
    json.photo ''
end
