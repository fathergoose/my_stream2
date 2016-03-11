class Track < ActiveRecord::Base
  mount_uploader :audiofile, AudiofileUploader
  belongs_to :album
  belongs_to :artist

  before_destroy :clean

  def url
    audiofile.url
  end

  def set_tags
    AudioInfo.open(path) do |info|
      update(
        artist: info.artist,
        album: info.album,
        title: info.title,
        track_number: info.tracknum
      )
    end
  end
      

private


  def clean
    audiofile.remove!
    FileUtils.remove_dir(
      "#{Rails.root}/public/uploads/track/audiofile/#{id}",
      force: true
    )
  end

  def path
    audiofile.path
  end

end
