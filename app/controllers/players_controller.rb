class PlayersController < ApplicationController
    def index
        render json: Player.all
    end

    def show

    end
    
    def create
        player = @current_user.teams.players.create!(params)
        render json: team, status: :created
    end
    
    def update

    end

    def destroy

    end

    private

    def params
        params.permit(:name, :jersey_num, :points, :assists, :rebounds, :turnovers, :fouls, :blocks, :steals, :fg_a, :fg_m, :threept_a, :threept_m, :min_played)
    end
end
