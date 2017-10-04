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
 * Saves a category
 * @param category (String)
 * @return firebase reference
 */
saveNewCategory = (category) => {

    return new Promise((resolve, reject) => {
        let currentCategories = [];
        try {
            db.ref('categories/' + category).set({
                category: category
            }, (err) => {
                if (err) {
                    reject(false);
                } else {
                    resolve(true);                    
                }
            });
        } catch(err) {
            reject(err);
        }
    });
}

/**
 * Gets all expenses
 * @return list of objects
 */
getAllExpenses = () => {
    let expenses = [];
    
    return new Promise((resolve, reject) => {
        try {
            db.ref('expenses').once('value').then(function(snapshot) {
                snapshot.forEach(childSnap => {
                    expenses.push(childSnap.val());
                });
                resolve(expenses);
            });
        } catch (err) {
            reject(err);
        }
    });
}

/**
 * Get all categories
 * @return Promise with list of Strings (categories)
 */
getCategories = () => {
    let categories = [];
    
    return new Promise((resolve, reject) => {
        try {
            db.ref('categories').once('value').then(function(snapshot) {
                snapshot.forEach(childSnap => {
 console.log("childSnap ", childSnap);
                    categories.push(childSnap.key);
                });
                resolve(categories);
            });
        } catch (err) {
            reject(err);
        }
    });
}

/**
 * Removes a category
 * @param cat (String)
 * @return Promise indicating success
 */
removeCategory = (cat) => {
    let catFromDB;
    
    return new Promise((resolve, reject) => {
        try {
            db.ref('categories/' + cat).remove().then(() => {
                resolve(true);                  
            });
        } catch (err) {
            reject(err);                    
        }
    });
}

export default firebaseMethods = {
    'saveExpense': saveExpense,
    'saveNewCategory': saveNewCategory,
    'getAllExpenses': getAllExpenses,
    'getCategories': getCategories,
    'removeCategory': removeCategory
}