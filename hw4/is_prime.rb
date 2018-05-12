def is_prime n
    return false if n == 0
    return false if n == 1
    for i in 2..Math.sqrt(n).to_i do 
        return false if n % i == 0 
    end
    true
end

## demonstration loop
1001.times do |i| 
    print i, ' '
    puts (is_prime i) ? "Prime" : ""
end