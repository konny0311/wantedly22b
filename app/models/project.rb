class Project < ApplicationRecord
  belongs_to :company
  has_many :messages
  has_many :supports
  def support_user(user_id)
    supports.find_by(user_id: user_id)
  end
end
