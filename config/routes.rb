Rails.application.routes.draw do
  resources :users
  root 'projects#index'
  resources :projects, only: [:index, :show] do
    resources :supports, only: [:create, :destroy]
  end
end
