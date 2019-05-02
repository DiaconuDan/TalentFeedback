import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { config } from "./config";

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => {
    this.auth.signOut();
  };

  feedbacks = () => this.db.collection("feedbacks");
}

export default Firebase;
