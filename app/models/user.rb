class User < ApplicationRecord
  has_many :supports
  has_many :entries
end
