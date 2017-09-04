import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyDR_Sp3rE6_BGr6cwGkQJE4oQ9dwvNxBoc",
	authDomain: "finance-app-4a5b0.firebaseapp.com",
	databaseURL: "https://finance-app-4a5b0.firebaseio.com",
	projectId: "finance-app-4a5b0",
	storageBucket: "finance-app-4a5b0.appspot.com",
messagingSenderId: "100418400779"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();

/**
 * Saves an expense in the database
 * @param data (Object)
 */
saveExpense = (data) => {
    db.ref('expenses').set({
        date: data.date,
        title: data.title,
        price : data.price
    });
}

export default firebaseMethods = {
    'saveExpense': saveExpense
}