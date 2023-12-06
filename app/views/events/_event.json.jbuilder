json.extract! event, :id, :title, :notify_at, :created_at, :updated_at
json.url event_url(event, format: :json)
