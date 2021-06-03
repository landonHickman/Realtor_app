# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Test.destroy_all
Realtor.destroy_all
Home.destroy_all

img = ['https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=', 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/9/16/0/IO_Tongue-and-Groove_Beech-Street_3.jpg.rend.hgtvcom.616.411.suffix/1568648112267.jpeg', 'https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg', 'https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/01/30/xxx-home-swap-1749-16_9.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp' ]

Realtor.create(name: 'Todd', license: true, rating: 4)
Realtor.create(name: 'Andrea', license: false, rating: 0)
Realtor.create(name: 'Jared', license: true, rating: 3)
Realtor.create(name: 'Selene', license: false, rating: 5)

4.times do
  home = Home.create(address: Faker::Address.street_name, city: Faker::Address.city, image: img.sample, price: Faker::Number.decimal(l_digits: 6, r_digits: 2))

  4.times do
    home.buyers.create(name: Faker::Name.name, age: Faker::Number.number(digits: 2), funds: Faker::Number.decimal(l_digits: 6, r_digits: 2))
  end
end

puts "seeded Realtor #{Realtor.all.size} times"
puts "seeded Home #{Home.all.size} times"
puts "seeded Buyer #{Buyer.all.size} times"