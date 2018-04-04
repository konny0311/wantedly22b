class User < ApplicationRecord
  has_many :supports
  has_many :entries
  has_many :employments
  has_many :companies, through: :employments
end
