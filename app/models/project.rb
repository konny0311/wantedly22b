class Project < ApplicationRecord
  belongs_to :company
  has_many :messages
end
