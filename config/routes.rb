Rails.application.routes.draw do
  namespace :v1 do
    namespace :api do




      # auth routes
      get "/current-user", to: "users#get_current_user"
      post "/signup", to: "users#create"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"




    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
