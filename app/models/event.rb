class Event < ApplicationRecord
  validates_presence_of(:title, :notify_at)
end