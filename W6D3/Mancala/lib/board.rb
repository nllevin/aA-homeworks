require 'byebug'

class Board
  attr_accessor :cups
  attr_reader :name1, :name2

  def initialize(name1, name2)
    @name1, @name2 = name1, name2
    @cups = Array.new(14) do |cup| 
      [6, 13].include?(cup) ? [] : Array.new(4, :stone)
    end
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' unless start_pos.between?(0, 13)
    raise 'Starting cup is empty' if cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = cups[start_pos].dup
    opp_store = (current_player_name == name1 ? 13 : 6)
    cups[start_pos] = []

    curr_pos = start_pos
    until stones.empty?
      curr_pos = (curr_pos + 1) % 14
      cups[curr_pos] << stones.pop unless curr_pos == opp_store
    end

    render
    next_turn(curr_pos)
  end

  def next_turn(ending_cup_idx)
    if [6, 13].include?(ending_cup_idx)
      :prompt
    elsif cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    (0..5).all? { |i| cups[i].empty? } || (7..12).all? { |i| cups[i].empty? }
  end

  def winner
    case cups[6] <=> cups[13]
    when -1
      name2
    when 0
      :draw
    when 1
      name1
    end
  end
end
