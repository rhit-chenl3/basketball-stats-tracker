class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :jersey_number, :points, :assists, :rebounds, :turnovers, :fouls, :blocks, :steals, :fga, :fgm, :"3pta", :"3ptm", :min_played
  has_one :team
end
