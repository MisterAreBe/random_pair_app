def pair(names)
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

    last_names.each_with_index do |n, i|
        list << [first_names[i], n]
    end

    unless first_names.count <= last_names.count
        temp = first_names.pop
        list << temp
    end

    list
end