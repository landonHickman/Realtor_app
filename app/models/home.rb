class Home < ApplicationRecord
  has_many :buyers, dependent: :destroy
end
