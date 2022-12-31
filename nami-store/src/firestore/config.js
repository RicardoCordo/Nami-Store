import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPo5No8FYQvS8S8Xv6bYGLAmjm71E202Q",
  authDomain: "nami-store.firebaseapp.com",
  projectId: "nami-store",
  storageBucket: "nami-store.appspot.com",
  messagingSenderId: "94274496851",
  appId: "1:94274496851:web:669de7cde8836dc44459a6"
};


const app = initializeApp(firebaseConfig);

export const initFirestireApp = () => {
  return app

}