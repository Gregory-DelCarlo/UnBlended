Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :index]
    resource  :session, only: [:create, :destroy]
    resources :whiskeys, only: [:create, :index, :show, :update, :destroy]
    resources :distilleries, only: [:index, :show]
    resources :reviews, only: [:index, :show, :create, :destroy, :update]
    resources :friends, only: [:index, :create]

    get '/single_drink_rating', :to => 'reviews#single_drink_rating'
    get '/all_drink_ratings', :to => 'reviews#all_drink_ratings'
    delete '/friends', :to => 'friends#destroy'
    
  end
end
