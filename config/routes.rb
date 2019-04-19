Rails.application.routes.draw do
  devise_for :admin_users
  devise_for :users

  resource :home, controller: :home

  root to: 'home#show'

  namespace :api do
    resources :products, only: %i[index show]
  end

  get '*url' => 'home#show', constraints: { format: :html }
end
