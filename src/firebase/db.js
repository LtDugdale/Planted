import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.collection("users").doc(id).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');