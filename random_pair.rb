def pair(names)
    unless names.is_a?(Array)
        return false
    end
    unless names[0].is_a?(String)
        return false
    end

    list = []
    first_names = []
    last_names = []

    names.each do |n|
        name = n.split(" ")
        first_names << name[0]
        if name.length > 1
            last_names << name[1]
        end
    end

    first_names.shuffle!
    last_names.shuffle!

    x = first_names.length
    y = last_names.length

    if x > y && (x - y) % 2 == 0
        count = (x - y) / 2
        while count > 0 
            temp = first_names.pop
            last_names << temp
            count -=1
        end
    elsif x > y && (x - y) % 2 != 0
        count = (x - y) / 2
        while count > 0
            temp = first_names.pop
            last_names << temp
            count -=1
        end
    end

    last_names.each_with_index do |v, i|
        list << [first_names[i], v]
    end

    a = first_names.length
    b = last_names.length
    
    if a == (b + 1)
        temp = first_names.pop
        list << temp
    end

    if list[-1].is_a?(String)
        oddball = ""
        oddball += list[-1]
        list.delete_at(-1)
        list[-1] << oddball
    end

    list
end