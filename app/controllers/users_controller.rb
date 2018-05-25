class UsersController < ApplicationController
    before_action :user_find, only: [:edit, :update, :destroy]
    def new
        @user = User.new
    end
    def edit 
    end
    def update
        # byebug
        if (new_password != new_password_confirmation)
            flash[:alert] = "passwords must match"
            render :edit
        else
            if @user.update(:password => new_password)
                redirect_to root_path
            else
                render :edit
            end
        end 

    end
    def create
        @user = User.new user_params
    
        if @user.save
        
          session[:user_id] = @user.id
    
          flash[:notice] = "Thank you, #{@user.name}, for signing up!"
          redirect_to root_path
        else
          render :new
        end
    end
    
      private
      def user_params
        params.require(:user).permit(
          :name, :email, :password, :password_confirmation
        )
      end
      def user_find
        @user = User.find(params[:id])
      end
      def new_password
        params[:user][:new_password]
      end
        def new_password_confirmation 
            params[:user][:new_password_confirmation]
      end
end
