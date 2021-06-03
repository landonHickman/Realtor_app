class Api::RealtorsController < ApplicationController
  before_action :set_realtor, only: [:show, :update, :destroy]

  def index
    render json: Realtor.all
  end

  def show
    render json: @realtor
  end

  def create
    @realtor = Realtor.new(realtor_params)
    if(@realtor.save)
      render json: @realtor
    else
      render json: @realtor.errors, status: :unprocessable_entity
    end
  end

  def update
    if(@realtor.update(realtor_params))
      render json: @realtor
    else
      render json: @realtor.errors, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @realtor.destroy
  end

  private

  def realtor_params
    params.require(:realtor).permit(:name, :license, :rating)
  end

  def set_realtor
    @realtor = Realtor.find(params[:id])
  end
end
