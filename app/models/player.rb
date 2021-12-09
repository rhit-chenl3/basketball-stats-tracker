class Player < ApplicationRecord
  belongs_to :team

  validates :name, presence: true
  validates :jersey_num, presence: true
end
