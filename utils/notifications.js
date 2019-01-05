import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const FLASHCARDS_NOTIFICATIONS_STORAGE_KEY = `flashcards:notifications`;

/*
  * This notifications code is based on the local notification tutorial on Udacity's React NanoDegree
*/

export function clearLocalNotification() {
  return AsyncStorage.removeItem(FLASHCARDS_NOTIFICATIONS_STORAGE_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createLocalNotification() {
  return {
    title: 'Have you studied today? 😃',
    body: 'Test yourself using your flashcards!',
    ios: {
      sound: false,
    },
    android: {
      sound: false,
      vibrate: true,
    }
  }
}

export function setUpLocalNotification() {
  // Check that we haven't already set a nofication - will antagonise user if they keep getting them
  AsyncStorage.getItem(FLASHCARDS_NOTIFICATIONS_STORAGE_KEY)
    .then(JSON.parse)
    .then((existingNotificationsData) => {
      if(existingNotificationsData === null) {
        // As no notification has been set up, use Expo Permissions API to ask user for permission to set up a notification
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if(status === 'granted') {
              // https://docs.expo.io/versions/latest/sdk/notifications
              Notifications.cancelAllScheduledNotificationsAsync()
              // Set first notification to go out tomorrow at 5.30pm
              let timeForFirstNotification = new Date();
              timeForFirstNotification.setDate(timeForFirstNotification.getDate() + 1);
              timeForFirstNotification.setHours(16);
              timeForFirstNotification.setMinutes(40);

              /*
                * Schedule a local notification for some time in the future
                * Format is Expo.Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions)
              */
              Notifications.scheduleLocalNotificationAsync(
                createLocalNotification(),
                {
                  time: timeForFirstNotification,
                  repeat: 'day',
                }
              )

              // Finally register in AsyncStorage that we have set up this notification
              AsyncStorage.setItem(FLASHCARDS_NOTIFICATIONS_STORAGE_KEY, JSON.stringify(true));
            }
          })
      }
    })
}

