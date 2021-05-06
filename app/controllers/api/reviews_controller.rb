class Api::ReviewsController < ApplicationController
    def create 
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        @reviews = Review.filtered(params[:type], params[:id])
    end

    def show
        @review = Review.find(params[:id])
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if Integer(params[:userId]) == @review.user_id
            if @review.destroy
                render :show
            else
                render json: @review.errors.full_messages, status: 422
            end
        else
            render json: ['Sorry you can only delete this review if you are the owner']
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body, :location, :whiskey_id, :user_id)
    end
end
