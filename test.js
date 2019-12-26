function dayOfProgrammer(year) {
    let isLeapYear;
    if(year >= 1700 && year <= 1917) {
        isLeapYear = year % 4 === 0;
    } else {
        isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ;
        
    }
    let dataDateMonth = 243;
    if(isLeapYear) {
        dataDateMonth = 244;
    }

    if(year === 1918) {
        dataDateMonth = 243 - 14 + 1;
    }

    const date = 256 - dataDateMonth;
    return `${date.toString()}.09.${year}`
}

console.log(dayOfProgrammer(2700))