Rails.application.routes.draw do
  devise_for :users, :path => '', :path_names => {
    :sign_in => "login",
    :sign_out => "logout",
    :sign_up => "register"
  }
  get 'contact' => 'pages#contact'
  get 'country' => 'pages#country'
  resources :offers
  root 'offers#index'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
