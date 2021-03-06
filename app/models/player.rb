class Player < ApplicationRecord
  # belongs_to :team
  belongs_to :user

  validates :name, presence: true
  validates :jersey_num, presence: true
end
