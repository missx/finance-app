import moment from 'moment';

/**
 * Gets today's date 
 * with format YYYY-MM-DD
 * @return date as String
 */
getTodaysDate = () => {
    let now = moment().format("YYYY-MM-DD");
    return now.toString();
}

/**
 * Add or substract years from date
 * @param date (String) Date to be added or substracted
 * @param numberOfYrs (Number) Nr of years to substract or add
 * @param adding (boolean) if adding true, if substracting false
 * @return date as String
 */
addOrSubtractYears = (date, numberOfYrs, adding) => {
    
    let dateObj = moment(date, 'YYYY-MM-DD');
    if (adding) {
        return dateObj.add(numberOfYrs, 'years').toString();
    } else {
        return dateObj.subtract(numberOfYrs, 'years').toString();
    }
}

/**
 * Returns the name of the month according to its number
 * @param numberOfMonth (int)
 * @return string
 */
getNameOfMonthAccordingToNumber = (numberOfMonth) => {
    let nameOfMonth = '';
    switch (numberOfMonth) {
        case 0:
            nameOfMonth = 'January';
            break;
        case 1:
            nameOfMonth = 'February';
            break;
        case 2:
            nameOfMonth = 'March';
            break;
        case 3:
            nameOfMonth = 'April';
            break;
        case 4:
            nameOfMonth = 'May';
            break;
        case 5:
            nameOfMonth = 'June';
            break;
        case 6:
            nameOfMonth = 'July';
            break;
        case 7:
            nameOfMonth = 'August';
            break;
        case 8:
            nameOfMonth = 'September';
            break;
        case 9:
            nameOfMonth = 'October';
            break;
        case 10:
            nameOfMonth = 'November';
            break;
        case 11:
            nameOfMonth = 'December';
            break;
        default:
            nameOfMonth = '';
    }
    return nameOfMonth;
}

export default dateUtils = {
    'getTodaysDate': getTodaysDate,
    'addOrSubtractYears': addOrSubtractYears,
    'getNameOfMonthAccordingToNumber': getNameOfMonthAccordingToNumber
}