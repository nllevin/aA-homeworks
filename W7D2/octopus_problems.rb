require 'byebug'

## Big O-ctopus and Biggest Fish
# A Very Hungry Octopus wants to eat the longest fish in an array of fish.

fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# longest fish => "fiiiissshhhhhh"

# sluggish octopus takes O(n^2) time to find the longest fish
def sluggish_octopus(fishes)
  longest_fish = nil

  fishes.each do |fish_1|
    is_longest = true

    fishes.each do |fish_2|
      is_longest = false unless fish_1.length >= fish_2.length
    end

    longest_fish = fish_1 if is_longest
  end

  longest_fish
end

p sluggish_octopus(fishes)

# dominant octopus takes O(n log n) time to find the longest fish
def dominant_octopus(fishes)
  merge_sort(fishes).last
end

def merge_sort(arr)
  return arr.dup if arr.length <= 1

  mid_idx = arr.length / 2

  sorted_left = merge_sort(arr.take(mid_idx))
  sorted_right = merge_sort(arr.drop(mid_idx))

  merge(sorted_left, sorted_right)
end

def merge(left, right)
  merged = []
  until left.empty? || right.empty?
    if left[0].length <= right[0].length
      merged << left.shift
    else
      merged << right.shift
    end
  end
  merged + left + right
end

p dominant_octopus(fishes)

# clever octopus takes O(n) time to find the longest fish

def clever_octopus(fishes)
  fishes.inject do |long_fish, curr_fish| 
    long_fish.length > curr_fish.length ? long_fish : curr_fish
  end
end

p clever_octopus(fishes)


## Dancing Octopus
# Full of fish, the Octopus attempts Dance Dance Revolution. The game has tiles in the following directions:

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

# To play the game, the octopus must step on a tile with her corresponding tentacle. 
# We can assume that the octopus's eight tentacles are numbered and correspond to the tile direction indices.

# slow_dance takes O(n) time to find a tile's index

def slow_dance(target_tile, tiles_array)
  tiles_array.each_with_index { |tile, idx| return idx if tile == target_tile }
end

p slow_dance("up", tiles_array) # => 0
p slow_dance("right-down", tiles_array) # => 3

# constant_dance takes O(1) time

new_tiles_data_structure = {}
tiles_array.each_with_index { |tile, idx| new_tiles_data_structure[tile] = idx }

def constant_dance(target_tile, tiles_hash)
  tiles_hash[target_tile]
end

p constant_dance("up", new_tiles_data_structure) # => 0
p constant_dance("right-down", new_tiles_data_structure) # => 3