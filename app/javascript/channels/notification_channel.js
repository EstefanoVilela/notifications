import consumer from "channels/consumer"

consumer.subscriptions.create("NotificationChannel", {
  connected() {
    console.log("connected");
  },

  disconnected() {
    console.log("disconnected");
  },

  received(data) {
    console.log({ data });
  }
});
