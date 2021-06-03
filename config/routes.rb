Rails.application.routes.draw do
  namespace :api do
    resources :realtors
    resources :homes do
      resources :buyers
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
