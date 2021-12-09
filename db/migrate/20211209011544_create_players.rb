class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.belongs_to :team, null: false, foreign_key: true
      t.string :name
      t.string :picture_url
      t.integer :jersey_num
      t.integer :points
      t.integer :assists
      t.integer :rebounds
      t.integer :turnovers
      t.integer :fouls
      t.integer :blocks
      t.integer :steals
      t.integer :fg_a
      t.integer :fg_m
      t.integer :threept_a
      t.integer :threept_m
      t.integer :min_played

      t.timestamps
    end
  end
end
