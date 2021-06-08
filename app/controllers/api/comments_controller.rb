class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def index
        @comments = {}
        # if testing in postman you need to add split to the end of the params
        # postman can only send string params
        ids = params[:ids]

        ids.each do |id|
            comments = Review.review_comments(id)
            @comments[id] = comments
        end

        render json: @comments
    end

    def show
        @comments = {params[:reviewId] => Review.review_comments(params[:reviewId])}

        render json: @comments
    end

    def update
        @comment = Comment.find(params[:id])

        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @comment = Comment.find(params[:id])

        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :review_id, :user_id)
    end
end
