rails g scaffold events title notify_at:datetime --no-helper --no-assets --no-test-framework

## Sidekiq
$ rails g sidekiq:job notification
$ bundle exec sidekiq