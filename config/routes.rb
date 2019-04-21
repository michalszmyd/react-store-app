Rails.application.routes.draw do
  devise_for :admin_users

  resource :home, controller: :home

  root to: 'home#show'

  namespace :api do
    resources :products, only: %i[index show]
    resources :users, only: :create
  end

  get '*path' => 'home#show', constraints: { format: :html }
  devise_for :users, path: 'api/users', skip: :registrations, controllers: { sessions: 'api/sessions' }
end
