class ChangeColumnsInTracks < ActiveRecord::Migration
  def change
    remove_column :tracks, :artist, :integer
    remove_column :tracks, :album, :integer
    add_column :tracks, :artist, :string
    add_column :tracks, :album, :string
  end
end
