class Api::BuyersController < ApplicationController
  before_action :set_buyer, only: [:show, :update, :destroy]
  before_action :set_home

  def index
    #not sure why i need to pass home here db works without it.
    render json: {home: @home, buyer: @home.buyers}
  end

  def show
    render json: @buyer
  end

  def create
    # have to reference home so it know where to add it to
    @buyer = @home.buyers.new(buyer_params)
    if(@buyer.save)
      render json: @buyer
    else
      render json: @buyer.errors, status: :unprocessable_entity
    end
  end

  def update
    if(@buyer.update(buyer_params))
      render json: @buyer
    else
      render json: @buyer.errors, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @buyer.destroy
  end

  private

  def buyer_params
    params.require(:buyer).permit(:name, :age, :funds)
  end

  def set_home
    @home = Home.find(params[:home_id])
  end

  def set_buyer
    @buyer = Buyer.find(params[:id])
  end
end
