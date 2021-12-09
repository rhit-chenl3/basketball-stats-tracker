class TeamsController < ApplicationController
    def index
        render json: Team.all
    end

    def show

    end
    
    def create
        team = @current_user.teams.create!(team_params)
        render json: team, status: :created
    end
    
    def update

    end

    def destroy

    end

    private

    def team_params
        params.permit(:name)
    end
end
