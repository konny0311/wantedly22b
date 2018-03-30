Rails.application.routes.draw do

  root 'projects#index'
  resources :users
  resources :projects, only: [:index, :show] do
    resources :supports, only: [:create, :destroy]
    resources :entries, only: [:create, :destroy]
  end
end
