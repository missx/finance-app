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

export default dateUtils = {
    'getTodaysDate': getTodaysDate,
    'addOrSubtractYears': addOrSubtractYears
}