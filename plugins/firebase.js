import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCLwvPCngdsdtDMyPYKGGHSZZ4Z8F7ZUXo",
    authDomain: "fb-auth-nuxt-sample.firebaseapp.com",
    databaseURL: "https://fb-auth-nuxt-sample.firebaseio.com",
    projectId: "fb-auth-nuxt-sample",
    storageBucket: "fb-auth-nuxt-sample.appspot.com",
    messagingSenderId: "320766240033"
  })
}

export default firebase