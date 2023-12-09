import consumer from "channels/consumer"

consumer.subscriptions.create("NotificationChannel", {
  connected() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Conectado y con permiso para notificaciones.');
        } else {
          console.warn('Conectado y sin permiso para notificaciones.');
        }
      });
    } else {
      console.log('Las notificaciones push no son compatibles en este navegador.');
    }
  },

  disconnected() {
    console.log("disconnected");
  },

  received(title) {
    if (Notification.permission === 'granted') {
      const options = {
        body: title,
        // icon: 'ruta/a/la/imagen.png'
      };

      const notificacion = new Notification('Aviso!', options);

      notificacion.onclick = function () {
        console.log('La notificación fue clicada.');
      };
    }
  }
});
