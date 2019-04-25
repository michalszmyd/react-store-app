class CreateUsersProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :users_products do |t|
      t.references :user, foreign_key: true, null: false
      t.references :product, foreign_key: true, null: false
      t.integer :quantity, null: false, default: 1

      t.timestamps
    end
  end
end
