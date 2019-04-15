Rails.application.routes.draw do
  devise_for :admin_users
  devise_for :users

  resource :home, controller: :home
end
