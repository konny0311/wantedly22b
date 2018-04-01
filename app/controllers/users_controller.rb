class UsersController < ApplicationController

 def edit
 end

 def update
   if current_user.update(user_params)
   	 
   else
     render :edit
   end
 end


 private

 def user_params
   params.require(:user).permit(:name, :email, :gender, :birthday_year, :birthday_month, :birthday_day)    	 
 end
end
