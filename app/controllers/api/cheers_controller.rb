class Api::CheersController < ApplicationController
    def toggle_cheers
        cheer_exists = Cheer.where(review_id: params[:reviewId], user_id: params[:userId])
        if cheer_exists.length != 0
            if cheer_exists[0].destroy!
                render json: ['Removed cheers']
            else 
                render cheer.errors.full_messages
            end
        else
            cheer = Cheer.new({review_id: params[:reviewId], user_id: params[:userId]})
            cheer.save!
            render json: {cheer.review_id => cheer.user_id}
        end
    end

    def index
        @cheers = {}
        ids = params[:ids]

        ids.each do |id|
            cheers = Review.review_cheers(id)
            @cheers[id] = cheers
        end

        render json: @cheers
    end

    def show
        @cheers = {params[:reviewId] => Review.review_cheers(params[:reviewId])}

        render json: @cheers
    end
end
