// a = (14 – month) / 12
// y = year – a
// m = month + 12 * a – 2
  
  // yulian d = (5 + Day + y + y/4 + 31*m/12) mod 7
  // grigorian d = (Day + y + y/4 - y/100 + y/400 + 31*m/12) mod 7

  export class DayOfWeek {

    constructor (year, month, day){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    calculateDate(){
        let yearNumber = parseInt (this.year);
        let monthNumber = parseInt (this.month);
        let dayNumber = parseInt (this.day);
        let a = parseInt((14 - monthNumber) / 12)
        let y = yearNumber - a
        let m = monthNumber + 12 * a - 2
        let cal2 = (dayNumber + y + parseInt(y/4) - parseInt(y/100) + parseInt(y/400) + parseInt(31*m/12))
        let cal = (dayNumber + y + parseInt(y/4) - parseInt(y/100) + parseInt(y/400) + parseInt(31*m/12)) % 7



        if (this.year.length > 4 || monthNumber > 12 || dayNumber  > 31) {
            return "This is not valid date";
        } else if (this.year[0] === "0" || this.month[0] === "0" || this.day[0] === "0" ){
            return "This is not valid date";
        } else {
        } return parseInt(cal) 
    }    

  }