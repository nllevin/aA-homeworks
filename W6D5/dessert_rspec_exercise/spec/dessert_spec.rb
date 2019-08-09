require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  subject(:brownies) { Dessert.new("brownies", 36, chef) }

  describe "#initialize" do
    it "sets a type" do
      expect(brownies.type).to eq("brownies")
    end

    it "sets a quantity" do
      expect(brownies.quantity).to eq(36)
    end

    it "starts ingredients as an empty array" do
      expect(brownies.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("brownies", "three dozen", chef) }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      brownies.add_ingredient("flour")
      expect(brownies.ingredients).to eq(["flour"])
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      expect(brownies.ingredients).to receive(:shuffle!)
      brownies.mix!
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      brownies.eat(12)
      expect(brownies.quantity).to eq(24)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { brownies.eat(999) }.to raise_error(/not enough/)
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Emeril")
      expect(brownies.serve).to include("Emeril")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(brownies)
      brownies.make_more
    end
  end
end
