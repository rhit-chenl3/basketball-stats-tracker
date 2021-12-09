# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts"lets get rid of the old stuff first"
Player.destroy_all
Team.destroy_all
Player.reset_pk_sequence
Team.reset_pk_sequence
puts "Lets get started"
Boston_Celtics = Team.create(name:"Boston Celtics")
Brooklyn_Nets =Team.create(name:"Brooklyn Nets")
New_York_Knicks =Team.create(name:"New York Knicks")
Philadelphia_76ers =Team.create(name:"Philadelphia 76ers")
Toronto_Raptors =Team.create(name:"Toronto Raptors")
Chicago_Bulls =Team.create(name:"Chicago Bulls")
Miami_Heat =Team.create(name:"Miami Heat")
Golden_State_Warriors =Team.create(name:"Golden State Warriors")
Los_Angeles_Lakers =Team.create(name:"Los Angeles Lakers")
puts "We have teams!"
Jaylen_Brown=Player.create(team_id:Boston_Celtics.id,name:"Jaylen Brown",jersey_num:7,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0)
Bruno_Fernando=Player.create(team_id:Boston_Celtics.id,name:"Bruno Fernando",jersey_num:28,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0)
Enes_Freedom=Player.create(team_id:Boston_Celtics.id,name:"Enes_Freedom",jersey_num:13,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0)
Sam_Hauser=Player.create(team_id:Boston_Celtics.id,name:"Sam Hauser",jersey_num:30,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0)
Juancho_Hernangomez=Player.create(team_id:Boston_Celtics.id,name:"Juancho Hernangomez",jersey_num:41,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0)
Al_Horford=Player.create(team_id:Boston_Celtics.id,name:"Al Horford",jersey_num:42,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0)
Blake_Griffin=Player.create(team_id:Brooklyn_Nets.id,name:"Blake Griffin",jersey_num:2,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0,picture_url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3989.png&h=80&w=110&scale=crop")
Kyrie_Irving=Player.create(team_id:Brooklyn_Nets.id,name:"Kyrie Irving",jersey_num:11,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0,picture_url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png&h=80&w=110&scale=crop")
James_Harden=Player.create(team_id:Brooklyn_Nets.id,name:"James Harden",jersey_num:13,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0,picture_url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&h=80&w=110&scale=crop")
Kevin_Durant=Player.create(team_id:Brooklyn_Nets.id,name:"Kevin Durant",jersey_num:7,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0,picture_url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&h=80&w=110&scale=crop")
Jevon_Carter=Player.create(team_id:Brooklyn_Nets.id,name:"Jevon Carter",jersey_num:0,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0,picture_url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133635.png&h=80&w=110&scale=crop")
puts "Done seeding"
# =Player.create!(team_id:Boston_Celtics.id,name:,jersey_num:,points:0,assists:0,rebounds:0,turnovers:0,fouls:0,blocks:0,steals:0,fg_a:0,fg_m:0,threept_a:0,threept_m:0,min_played:0)