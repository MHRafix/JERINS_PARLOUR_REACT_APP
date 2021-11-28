import { initializeApp } from "firebase/app";
import fireBaseConfig from "./Firebase.Config";

const firebaseInitialization = () => {
    initializeApp(fireBaseConfig);
}

export default firebaseInitialization;