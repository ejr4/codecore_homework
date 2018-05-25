PASSWORD = "password"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all


10.times.each do
    
    name = Faker::Name.last_name
  
    User.create(
      name: name,
      email: "#{name.downcase}.@nasa.gov",
      password: PASSWORD
    )
  end
  
  users = User.all

50.times.each do
    post =Post.create(
        title: Faker::HitchhikersGuideToTheGalaxy.specie, 
        body: Faker::HitchhikersGuideToTheGalaxy.quote
    )
    if post.valid?
        rand(0..7).times.each do
            comment = Comment.create(
            body: Faker::Dune.quote,
            post: post 
            )
        end
    end


end