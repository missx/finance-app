import * as firebase from 'firebase';
import uuidv1 from 'uuid/v1';

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

    let id = uuidv1();

    db.ref('expenses/' + id).set({
        date: data.date,
        title: data.title,
        price : data.price
    });
}

/**
 * Gets all expenses
 * @return list of objects
 */
getAllExpenses = () => {
    let expenses;
     db.ref('expenses').once('value').then(function(snapshot) {
        expenses = snapshot.val(); 
        console.log(expenses);
    });
    return expenses;
}

export default firebaseMethods = {
    'saveExpense': saveExpense,
    'getAllExpenses': getAllExpenses
}