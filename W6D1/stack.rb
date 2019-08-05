class Stack
    def initialize
        @elements = []
    end

    def push(ele)
        @elements.push(ele)
    end

    def pop
        @elements.pop
    end

    def peek
        @elements.last
    end
end