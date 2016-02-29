class RemoveIdAttrsFromTracks < ActiveRecord::Migration
  def change
    change_table :tracks do |t|
      t.rename :artist_id, :artist
      t.rename :album_id, :album
      t.rename :quality_id, :quality
    end
  end
end
