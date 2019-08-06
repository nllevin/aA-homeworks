require "Set"

class GraphNode
	attr_reader :value
	attr_accessor :neighbors

	def initialize(value)
		@value = value
		@neighbors = []
	end
end

def bfs(starting_node, target_value)
	queue = [starting_node]
	visited = Set.new

	until queue.empty?
		current_node = queue.shift
		return current_node if current_node.value == target_value
		
		visited.add(current_node)
		current_node.neighbors.each do |neighbor|
			queue << neighbor unless visited.include?(neighbor)
		end
	end

	nil
end

if __FILE__ == $PROGRAM_NAME
	a = GraphNode.new('a')
	b = GraphNode.new('b')
	c = GraphNode.new('c')
	d = GraphNode.new('d')
	e = GraphNode.new('e')
	f = GraphNode.new('f')
	a.neighbors = [b, c, e]
	c.neighbors = [b, d]
	e.neighbors = [a]
	f.neighbors = [e]

	p bfs(a, "b")
	p bfs(a, "f")
end