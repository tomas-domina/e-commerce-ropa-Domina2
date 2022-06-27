import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4HYITwkqM9ZxGuLyjOog2939ZQRUPDSc",
  authDomain: "ecommerce-ropa-domina.firebaseapp.com",
  projectId: "ecommerce-ropa-domina",
  storageBucket: "ecommerce-ropa-domina.appspot.com",
  messagingSenderId: "742078382646",
  appId: "1:742078382646:web:e3b5d5d3cae3997c954e97",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
