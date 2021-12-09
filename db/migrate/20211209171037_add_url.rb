class AddUrl < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :picture_url, :string
  end
end
