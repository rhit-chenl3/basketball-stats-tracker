class TeamsController < ApplicationController
    def index
        render json: Team.all
    end

    def show

    end
    
    def create
        team = @current_user.teams.create!(params)
        render json: team, status: :created
    end
    
    def update

    end

    def destroy

    end

    private

    def params
        params.permit(:name)
    end
end
