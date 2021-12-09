class CreateUsersTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :users_teams do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :player_id
      t.string :name
      t.timestamps
    end
  end
end
