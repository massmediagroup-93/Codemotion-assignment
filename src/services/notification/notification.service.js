import { store } from 'react-notifications-component'

export default class NotificationService {
  static show({ type, message, title }) {
    store.addNotification({
      type,
      title,
      message,
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated animate__zoomIn'],
      animationOut: ['animate__animated animate__zoomOut'],
      dismiss: {
        duration: 5000,
        pauseOnHover: true,
        showIcon: true,
      },
    })
  }

  static success({ message, title }) {
    NotificationService.show({ type: 'success', message, title })
  }

  static error({ message, title }) {
    NotificationService.show({ type: 'danger', message, title })
  }

  static warning({ message, title }) {
    NotificationService.show({ type: 'warning', message, title })
  }

  static info({ message, title }) {
    NotificationService.show({ type: 'info', message, title })
  }
}
