class Track < ActiveRecord::Base
  mount_uploader :audiofile, AudiofileUploader

  def url
    audiofile.url
  end

end
