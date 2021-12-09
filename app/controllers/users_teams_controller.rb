class UsersTeamsController < ApplicationController
    def index
        render json: UsersTeam.all
    end
 
    def show
 
    end
   
    def create
        team = @current_user.user_teams.create!(team_params)
        render json: team, status: :created
    end
   
    def update
 
    end
 
    def destroy
 
    end
 
    private
 
    def team_params
        params.permit(:name, :player_id, :user_id)
    end
end
