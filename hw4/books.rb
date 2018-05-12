class Book
    def initialize (title = "Blank Book")
        @title = title 
        @chapters = []
    end
    attr_accessor :title

    def chapters
        if @chapters.empty? 
            puts "Your book: #{@title} has no chapters"
        else
            puts "Your book: #{@title} has #{@chapters.length} chapters:"
            @chapters.each_with_index do |chapter, index|
                puts "#{index +1}.  #{chapter}"
            end
        end
    end
    def add_chapter chapter_name
        @chapters << chapter_name
    end
end


# demonstration
c = Book.new("Eric's Booky Wook")
puts ''
c.chapters
puts ''
puts '(adding chapters)'
puts ''
c.add_chapter("Black and White are All I See")
c.add_chapter("Red and Yellow Then Came to Be, Reaching Out to Me")
c.chapters