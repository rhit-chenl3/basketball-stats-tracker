class PlayersController < ApplicationController
    def index
        render json: Player.all
    end

    def show

    end
    
    def create
        player = @current_user.players.create!(team_params)
        render json: player, status: :created
    end
    
    def update

    end

    def destroy

    end

    private

    def team_params
        params.permit(:name, :jersey_num, :points, :assists, :rebounds, :turnovers, :fouls, :blocks, :steals, :fg_a, :fg_m, :threept_a, :threept_m, :min_played, :picture_url)
    end
end
