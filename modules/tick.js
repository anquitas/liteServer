//##  META INFORMATION
// AUTHOR: anquitas
// GITHUB: https://github.com/anquitas
// ABOUT: to make time related calculations for fcc timestamp microservice
// NOTE: you can use this module as you want but please dont remove the meta information


const ONE_UNIX_DAY = 86400000


// ## time validation --- --- --- --- --- --- --- --- --- ---
const is_unixT = (entry) => { //checks if the given entry is a valid unix time in miliseconds
  return !isNaN(Number(entry)) && entry.length === 13 // check if its a number, check if its 13 digits in length
}

const is_utcT =  (entry) => { //checks if the given entry is a valid utc time in miliseconds
  return new Date (entry).toUTCString() !== "Invalid Date"
}





// ## returning object containg time info --- --- --- --- --- --- --- --- --- ---
const from_unix = (entry) => {  // returns the object contaning time info from unix time string
  return { // when given in unix format the time string should be cast into number type
    unix: new Date(Number(entry)).getTime(), // unix time from unix time
    utc: new Date(Number(entry)).toUTCString() // utc time from unix time
  }
}

const from_utc = (entry) => {
  return { // utc time string can be directly passed as string 
    unix: new Date(entry).getTime(), // unix time from utc time
    utc: new Date(entry).toUTCString() // utc time from utc time
  }
}





// ## returning current time object --- --- --- --- --- --- --- --- --- ---
const current_time = _ => {
  return {
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  }
}

const current_time_lite = () => {
  const date = new Date();
  return date.toISOString().slice(0, 10); // Slices out the YYYY-MM-DD part
}






// ## valid format check --- --- --- --- --- --- --- --- --- ---

const unix_check = (entry) => { // used in testing
  return is_unixT(entry) ? from_unix(entry) : {error: "Invalid Date" }
}

const utc_check = (entry) => { // used in testing
  return is_utcT(entry) ? from_utc(entry) : {error: "Invalid Date" }
}






// ## MVP method of the module --- --- --- --- --- --- --- --- --- ---
const check_time =  (entry) => {
  if (is_unixT(entry)) // if given argument is unix time
    return from_unix(entry) // return the relevent object
  if (is_utcT(entry)) // if given argument is utc time
    return from_utc(entry) // return the relevent object
  return {error: "Invalid Date" } // default case if it is invalid time
} 





// ## calculating days passed between 2 dates --- --- --- --- --- --- --- --- --- ---

const day_diff = (day1, day2) => {
  const diff = check_time(day2).unix - check_time(day1).unix
  console.log('day2: ', check_time(day2).unix)
  console.log('day1: ', check_time(day1).unix)
  console.log('diff: ', diff)
  console.log('days: ', diff / ONE_UNIX_DAY)
  return Math.floor(diff / ONE_UNIX_DAY)
}





// ## testing area --- --- --- --- --- --- --- --- --- ---
console.log(current_time().utc)
console.log( day_diff('2024-10-01', current_time().utc) )





// ## export info as common js --- --- --- --- --- --- --- --- --- ---
console.log('+ tick modülü kullanılıyor')
export {current_time, check_time, day_diff, current_time_lite}
// module.exports = { current_time, check_time, day_diff, current_time_lite };