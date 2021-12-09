class UsersTeams < ApplicationRecord
    belongs_to :user
    has_many :players
    has_many :players, through: :teams
    validates :name, presence: true
end
