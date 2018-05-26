class CommentsController < ApplicationController
    before_action :authenticate_user!
    before_action :find_comment, only: [:destroy]
    before_action :authorize_user!, only: [:destroy] 
    def create
        @comment = Comment.new comment_params
        @post = Post.find(params[:post_id])
        #@comment = Comment.new(comment_params)
        @comment.post = @post
        @comment.user = current_user
        if @comment.save
            redirect_to post_path(@comment.post.id)
        else 
            @comments = @post.comments.order(created_at: :desc)
            render "posts/show"
        end
    end
    ##
    
    ##
    def destroy
        # @comment = Comment.find params[:id]
        @comment.destroy
        redirect_to post_path(@comment.post.id)
    end

    private
    def comment_params
        params.require(:comment).permit(:body )
    end
    def find_comment
        @comment = Comment.find params[:id]
    end
    def authorize_user!
        unless can?(:manage, @comment)
            flash[:alert] = "Permission denied"
            redirect_to post_path(@comment.post)
        end
    end
end
