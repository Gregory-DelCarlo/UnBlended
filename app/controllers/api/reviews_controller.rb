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

    def single_drink_rating
        @ratings = Review.get_drink_ratings(params[:id])
        @rating = get_rating_avg(@ratings)
        @id = params[:id]
        render :single_drink_rating
    end

    def all_drink_ratings
        drinks = Whiskey.all
        @ratings = []
        
        drinks.each do |drink|
            drink_ratings = Review.get_drink_ratings(drink.id)
            avg = get_rating_avg(drink_ratings)
            @ratings << {id: drink.id, rating: avg}
        end

        render :all_drink_ratings
    end

    private

    def get_rating_avg(ratings)
        if ratings.length != 0
            avg = ratings.sum / ratings.length
            avg.round(2)
        else
            0
        end
    end

    def review_params
        params.require(:review).permit(:rating, :body, :location, :whiskey_id, :user_id)
    end
end
