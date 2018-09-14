class CreatePerson < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :firstname
      t.string :lastname
      t.string :password
      t.string :email
      t.string :interest
      t.integer :phone

      t.timestamps
    end
  end
end
