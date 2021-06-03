Rails.application.routes.draw do
  namespace :api do
    get 'buyers/index'
    get 'buyers/show'
    get 'buyers/create'
    get 'buyers/update'
    get 'buyers/destroy'
  end
  namespace :api do
    get 'homes/index'
    get 'homes/show'
    get 'homes/create'
    get 'homes/update'
    get 'homes/destroy'
  end
  namespace :api do
    get 'realtors/index'
    get 'realtors/show'
    get 'realtors/create'
    get 'realtors/update'
    get 'realtors/destroy'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/tests', to: 'tests#index'
  end
end
