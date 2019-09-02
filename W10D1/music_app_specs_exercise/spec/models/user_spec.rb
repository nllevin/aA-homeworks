require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { User.create(email: 'niles@kitty.com', password: 'hunter2') }

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6).allow_nil }

  describe '#is_password?' do
    it 'checks for the correct password' do
      expect(user.is_password?('hunter12')).to be false
      expect(user.is_password?('hunter2')).to be true
    end
  end

  describe '#reset_session_token!' do
    it 'changes the session token in the database' do
      old_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).not_to eq(old_session_token)
    end

    it 'returns the new token' do
      expect(user.reset_session_token!).to eq(user.session_token)
    end
  end

  describe '::find_by_credentials' do
    before(:each) { user }

    it 'finds the user' do
      expect(User.find_by_credentials('niles@kitty.com','hunter2')).to eq(user)
    end
    
    it 'returns nil if username or password are incorrect' do
      expect(User.find_by_credentials('niles@kitty.com','hunter12')).to be nil
    end
  end
end
