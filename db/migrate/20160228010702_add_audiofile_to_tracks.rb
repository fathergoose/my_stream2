class AddAudiofileToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :audiofile, :string, null: false
    remove_column :tracks, :path
  end
end
