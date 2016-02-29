class Track < ActiveRecord::Base
  mount_uploader :audiofile, AudiofileUploader

  before_destroy :clean

  def url
    audiofile.url
  end

  def tags
    AudioInfo.open(audiofile.path) do |info|
    end
  end
      

# private


  def clean
    audiofile.remove!
    FileUtils.remove_dir(
      "#{Rails.root}/public/uploads/track/audiofile/#{id}",
      force: true
    )
  end

end
