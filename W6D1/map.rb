class Map
    def initialize
        @kv_pairs = []
    end

    def set(key, value)
        @kv_pairs.each do |pair|
            if pair[0] == key
                pair[1] = value
                return pair
            end
        end
        @kv_pairs << [key, value]
    end

    def get(key)
        @kv_pairs.each do |pair|
            return pair[1] if pair[0] == key
        end
        nil
    end

    def delete(key)
        @kv_pairs.each do |pair|
            if pair[0] == key
                @kv_pairs.delete(pair)
                return pair
            end
        end 
        nil
    end

    def show
        str_forms = @kv_pairs.map { |pair| "#{pair[0]}=>#{pair[1]}" }
        puts "{#{str_forms.join(", ")}}"
    end
end