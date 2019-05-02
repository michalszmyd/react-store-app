class CreateProductsCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :products_categories do |t|
      t.references :product, foreign_key: true, null: false
      t.references :category, foreign_key: true, null: false

      t.timestamps
    end
  end
end
