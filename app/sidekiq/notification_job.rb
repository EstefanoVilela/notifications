class NotificationJob
  include Sidekiq::Job

  # def perform(*args)
  def perform(event)
    event = JSON.parse(event)

    puts "==================== Notification Job ===================="
    ActionCable.server.broadcast('notification_channel', event['title'])
    puts "evento notificado"
    puts "==================== Notification Job ===================="

    return 0
  end
end