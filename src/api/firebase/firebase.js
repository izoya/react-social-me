import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {firebaseConfig} from '~/config/firebase';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDB = firebase.database();
