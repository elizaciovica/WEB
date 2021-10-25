Rails.application.routes.draw do
  get 'contact' => 'pages#contact'
  resources :offers
  root 'offers#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
