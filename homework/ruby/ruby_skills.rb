#Challenge 1
# a = true
# b = false
# puts a == b
# puts a != b

#Challenge 2
# a = "Nil"
# puts "#{a} was here"
# puts a.classg

#Challenge 3
# d = 4
# puts d
# e = 4.5
# puts e
# d = e
# puts d

# Challenge 4
# christine = "Hi, I'm Christine"
# likesTo = "long walks on the beach, kinda."
# tims = christine + " and I like " + likesTo
# puts tims
# g = "2"
# gToNumber = 2
# puts g + gToNumber
# puts g.to_i + gToNumber

# # Challenge 5
# puts "Gimme an integer"
# input = gets.chomp.to_i
# puts input * 2

# puts "Gimme your first name"
# first_name = gets.chomp
# puts "What do you like to do?"
# activity = gets.chomp
# puts first_name + " likes to " + activity

#Challenge 6
# myFirstArray = []
# myFirstArray = ["a", "b", "c", "d", "e", 1, 2, 3, 4]
# puts myFirstArray[myFirstArray.length - 1]
# puts myFirstArray[0]
# myFirstArray[1] = "Joe"
# myFirstArray[2] = 3
# myFirstArray.push(true)
# puts myFirstArray[3].class

# Challenge 7
# myFavoriteAnimals = {
#     "Edgar" => "Donkey",
#     "Bill" => "Dog",
#     "Chris" => "cat",
#     "Susan" => "lizard",
#     "Becky" => "gerbil"
# }

# myFavoriteAnimals["Edgar"] = "Bear"

# favoriteMovie = {}
# favoriteMovie["movie"] = "Caddyshack"

#Challenge 8
# firstRange = (1..10)
# firstRange = firstRange.to_a

# secondRange = (1...1000)
# secondRange = secondRange.to_a

# for number in firstRange do
#     puts number.class
#     puts number.to_s.class
# end

# x = 0
# while x < 50 do
#     puts secondRange[x]
#     x += 1
# end

# newArray = []
# firstRange.each_with_index do |number, index|
#     if index.even?
#         newArray.push(number * 2)
#     end
# end
# puts newArray

# firstRange.map do |number|
#     if number % 2 ==0
#         number = number.to_s
#     end
# end


# Challenge 9
nat_nums = (1...1000)
total = 0
nat_nums.each do |num|
    if num % 3 == 0 || num % 5 == 0
        total += num
    end
end
puts total
