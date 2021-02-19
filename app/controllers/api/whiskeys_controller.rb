class Api::WhiskeysController < ApplicationController
     # no need for a new page becuase that is handled in the front end
     def create
        @whiskey = Whiskey.new(whiskey_params)

        if @whiskey.save
            render :show
        else
            render json: @whiskey.errors.full_messages, status: 422
        end
    end

    def index
        @whiskey = Whiskey.all
    end

    def show
        @whiskey = Whiskey.find(params[:id])
    end

    def update
        @whiskey = Whiskey.find(params[:id])

        if @whiskey.update(whiskey_params)
            render :show 
        else
            render json: @whiskey.errors.full_messages, status: 422
        end
    end

    def destroy
        @whiskey = Whiskey.find(params[:id])

        if @whiskey.destroy
            redirect_to '/drinks'
        else
            render json: @whiskey.errors.full_messages, status: 422
        end
    end

    private
    def whiskey_params
        params.require(:whiskey).permit(:name, :type, :abv, :proof, :description, :distillery_id)
    end
end
