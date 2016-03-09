Rails.application.routes.draw do

  scope '/api' do
    resources :tracks, except: [:new, :edit]
  end

  if Rails.env.development?
    get '/music' => redirect('/uploads')
  end


end
