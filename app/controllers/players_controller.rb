class PlayersController < ApplicationController
    
    def index
        render json: Player.all
    end

    def show

    end
    
    def create
        player = @current_user.players.create!(player_params)
        render json: player, status: :created
    end
    
    def update
        player = Player.find_by(id: params[:id])
        player.update(player_params)
        render json: player, status: :ok
    end

    def destroy
        player = Player.find_by(id: params[:id])
        player.destroy
        head :no_content
    end

    private
    
    def player_params
        params.permit(:name, :jersey_num, :points, :assists, :rebounds, :turnovers, :fouls, :blocks, :steals, :fg_a, :fg_m, :threept_a, :threept_m, :min_played, :picture_url)
    end

end
