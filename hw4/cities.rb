major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"], ON: ["Toronto", "Ottawa", "Hamilton", "Beardmore", "Nipigon"]}

def city_list city_hash

    def city_string city_array
        city_string = city_array.slice(0,city_array.length-1).join(', ')
        city_string += ' and ' + city_array.last.to_s
    end

    city_hash.each_pair do |province, cities|
        puts "#{province} has #{cities.length} main cities: #{city_string cities}."
    end   
end

city_list major_cities