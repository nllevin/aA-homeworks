class Queue
    def initialize
        @elements = []
    end

    def enqueue(ele)
        @elements.push(ele)
        ele
    end

    def dequeue
        @elements.shift
    end

    def peek
        @elements.first
    end
end