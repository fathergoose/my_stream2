Rails.application.routes.draw do

  scope '/api' do
    resources :tracks, except: [:new, :edit]
  end

end
