class Track < ActiveRecord::Base
  mount_uploaders :audiofile, AudiofileUploader

  def url
    audiofile.url
  end

end
