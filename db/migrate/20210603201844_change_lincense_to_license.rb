class ChangeLincenseToLicense < ActiveRecord::Migration[6.1]
  def change
    rename_column :realtors, :lincense, :license
  end
end
