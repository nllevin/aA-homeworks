require 'colorize'

class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length, @game_over, @seq = 1, false, []
  end

  def play
    system("clear")
    puts "Let's play Simon!"
    puts "Are you ready?"
    sleep(1)
    take_turn until game_over
    game_over_message
    sleep(2)
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless game_over
      round_success_message
      self.sequence_length += 1
    end
    sleep(1)
  end

  def show_sequence
    add_random_color
    seq.each do |color|
      system("clear")
      puts "Watch carefully"
      sleep(0.3)
      puts
      puts color.colorize(color.to_sym)
      puts
      sleep(0.8)
    end
  end

  def require_sequence
    seq.each do |color|
      system("clear")
      puts "Enter the first letter of the next color in the sequence (r, b, g, y)"
      unless color[0] == gets.chomp.downcase
        self.game_over = true
        break
      end
      sleep(0.5)
    end
  end

  def add_random_color
    seq <<  COLORS.sample
  end

  def round_success_message
    puts "Well done! Moving on..."
  end

  def game_over_message
    puts "Wah wah, you lose"
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
    play
  end
end

if __FILE__ == $PROGRAM_NAME
  game = Simon.new
  game.play
end
