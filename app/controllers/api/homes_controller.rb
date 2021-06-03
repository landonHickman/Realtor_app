class Api::HomesController < ApplicationController
  before_action :set_home, only: [:show, :update, :destroy]

  def index
    render json: Home.all
  end

  def show
    render json: @home
  end

  def create
    @home = Home.new(home_params)
    if(@home.save)
      render json: @home
    else
      render json: @home.errors, status: :unprocessable_entity
    end
  end

  def update
    if(@home.update(home_params))
      render json: @home
    else
      render json: @home.errors, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @home.destroy
  end

  private

  def home_params
    params.require(:home).permit(:address, :city, :image, :price)
  end

  def set_home
    @home = Home.find(params[:id])
  end
end
