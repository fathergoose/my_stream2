class Album < ActiveRecord::Base
  has_many :tracks
  validates :title, presence: true
end
