class NotificationJob
  include Sidekiq::Job

  # def perform(*args)
  def perform(event)
    event = JSON.parse(event)

    puts "\n\n\n\n\n"
    puts "=========="
    puts event['title']
    puts "=========="
    puts "\n\n\n\n\n"

    return 0
  end
end