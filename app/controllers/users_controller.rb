class UsersController < ApplicationController

  # GET /uers or /users.json
  def index
    @users = User.all
  end

end
