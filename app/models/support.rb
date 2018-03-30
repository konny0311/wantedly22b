class Support < ApplicationRecord
  belongs_to :user
  belongs_to :project, counter_cache: :supports_count
end
