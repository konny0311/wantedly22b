class Company < ApplicationRecord
  has_many :projects
  has_many :feeds
  has_many :users, through: :employments
end
