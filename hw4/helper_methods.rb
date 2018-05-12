module HelperMethods

    def titleize string 
        word_array = string.split(' ')
    
        def excluded? word
            excluded_words = ['in', 'the', 'of', 'and', 'or', 'from']    
            return true if ( excluded_words.include? word ) 
            false
        end
        new_array = []
        word_array.each_with_index {|word, index|
        new_array.push (excluded? word)&& index > 0 ? word : word.downcase.capitalize } 
        new_array.join(' ')
    end
end


class ExtendingClass
    extend HelperMethods
end

class IncludingClass
    include HelperMethods
end

string1 = 'of mice AND Men'
string2 = 'the lord of the rings'
string3 = 'the wind in the WILLOWS '

include_demo = IncludingClass.new
exclude_demo = ExtendingClass.new

#the following will work
puts include_demo.titleize string1
puts ExtendingClass.titleize string2

#the following won't work

#puts IncludingClass.titleize string3
#puts exclude_demo.titleize string3 
