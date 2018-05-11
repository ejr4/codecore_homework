module Is_prime

    def say
        p " I am say func"
    end

    
    
end

def test_meth n
    n*3
end

def say_out
    p "I am say out func"
end

def is_prime n
    for i in 2..Math.sqrt(n).to_i do 
        return false if n % i == 0 
    end
    true
end