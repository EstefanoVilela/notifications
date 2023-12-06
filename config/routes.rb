Rails.application.routes.draw do
  resources :events, except: [:show]
  root "events#index"
end