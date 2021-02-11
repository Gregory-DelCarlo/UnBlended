# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

users = [
    { 
        username: "user1",
        password: "123456",
        location: "San Francisco"
    },
    { 
        username: "user2",
        password: "123456",
        location: "New York"
    },
    { 
        username: "user3",
        password: "123456",
        location: "Chicago"
    },
    { 
        username: "user4",
        password: "123456",
        location: "Montana"
    },
    { 
        username: "Chad",
        password: "supersecretpassword!",
        location: "Your Moms"
    }
]

User.create(users)

User.create({
    username: "ultra",
    password: "123456",
    location: "Earth"
 })