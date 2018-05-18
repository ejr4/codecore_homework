class PostsController < ApplicationController
    before_action :post_find, only: [:show, :edit, :update, :destroy]
    def index
        @posts = Post.all.order(created_at: :desc)
    end
    def new
        @post = Post.new
    end
    def show
        #@post = Post.find(params[:id]) #replaced by post_find?
        #render json: params
        #redirect_to post_path(@post)
        @comment = Comment.new 
        @comments = @post.comments.order(created_at: :desc)
    end
    def create 
        @post = Post.new post_params
        if @post.save
            redirect_to post_path @post.id
        else
            render :new 
        end

    end
    def update
        if @post.update post_params 
            redirect_to post_path @post.id
        else
            render :edit
        end
    end
    def edit
    end
    
    def destroy
        #post_find
        @post.destroy
        redirect_to posts_path
    end
    private
    def post_params
        params.require(:post).permit(:title, :body, )
    end
    def post_find
        @post = Post.find(params[:id])
    end
end
