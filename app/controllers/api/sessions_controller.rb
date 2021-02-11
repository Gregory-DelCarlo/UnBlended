class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        # debugger 
        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ["Incorrect credentials Sir"], status: 401
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: [ "no current user" ], status: 401
        end
    end
end
