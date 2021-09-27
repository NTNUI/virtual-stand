import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
const config = {
  apiKey: 'AIzaSyCPPEGelSnT13pcuDLVhPrsYLHeTWLGUPY',
  authDomain: 'virtual-stand.firebaseapp.com',
  databaseURL: 'https://virtual-stand.firebaseio.com',
  projectId: 'virtual-stand',
  storageBucket: 'virtual-stand.appspot.com',
  messagingSenderId: '364503990307',
  appId: '1:364503990307:web:9744b07e54a0a49e56b196',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default firebase;
