class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :jersey_num, :points, :assists, :rebounds, :turnovers, :fouls, :blocks, :steals, :fg_a, :fg_m, :threept_a, :threept_m, :min_played
  has_one :team
  has_one :user
end
