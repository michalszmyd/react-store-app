Rails.application.routes.draw do
  devise_for :admin_users

  resource :home, controller: :home

  root to: 'home#show'

  namespace :api do
    resources :products, only: %i[index show]
    resources :users_products, only: %i[index create destroy]
    resources :users, only: :create
    resources :categories, only: :index
  end

  get '*path' => 'home#show', constraints: ->(req) { req.format == :html }
  devise_for :users, path: 'api/users', skip: :registrations, controllers: { sessions: 'api/sessions' }
  devise_scope :user do
    get 'api/csrf_token', to: 'api/sessions#csrf_token'
  end
end
