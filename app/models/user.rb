class User < ApplicationRecord
    has_many :teams
    has_many :players
  
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
