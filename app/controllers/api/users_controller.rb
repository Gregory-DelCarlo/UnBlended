
class Api::UsersController < ApplicationController

    def create
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 401
      end
    end

    def index 
      @users = User.all
    end

    def show
      @user = User.find(params[:id])

      if @user
        render :show
      else
        render json: ["No user under that name"]
      end
    end

    private

    def user_params
      params.require(:user).permit(:username, :password, :location)
    end
    
end
