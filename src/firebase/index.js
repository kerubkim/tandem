import firebase from "./clientApp";

export default {
    signIn: () => {
        firebase.auth().signInAnonymously();
    }
}
