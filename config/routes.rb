Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts do
    resources :comments, only: [:create, :destroy]
  end
  
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

  #from amazon-app:
  get('/', {to: 'posts#index', as: 'root'})
  # get('/about_us', {to: 'welcome#about'})
  # get('/contact_us', {to: 'contact_us#new'})
  # post('/contact_us/submit', {to: 'contact_us#create'})   

end
