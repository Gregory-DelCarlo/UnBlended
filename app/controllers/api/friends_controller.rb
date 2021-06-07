class Api::FriendsController < ApplicationController
    def create
        user = User.find(params[:user2])
        friend1 = Friend.new({main_user: params[:user1], friended_user: params[:user2]})
        friend2 = Friend.new({main_user: params[:user2], friended_user: params[:user1]})
        if friend1.save && friend2.save
          render json: ["Success"]
        else 
          render json: friend1.errors.full_messages, status: 422
        end
      end
  
      def index
        @user = User.find(params[:id])
        @friends = @user.friends
  
        render :index
      end

      def destroy
        friend1 = Friend.find_by(main_user: params[:user1])
        friend2 = Friend.find_by(main_user: params[:user2])

        if friend1.destroy! && friend2.destroy!
            render json: ["success"]
        else
            render friend1.errors.full_messages
        end

      end
  
end
