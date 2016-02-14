class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title
      t.integer :artist_id
      t.integer :album_id
      t.integer :track_number
      t.integer :quality_id
      t.string :path, null: false
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
