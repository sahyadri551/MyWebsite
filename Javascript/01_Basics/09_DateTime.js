console.log(Date.now()) // current timestamp
console.log(new Date()) // current date and time
console.log(new Date().getFullYear()) // current year
console.log(new Date().getMonth()) // current month (0-11)
console.log(new Date().getDate()) // current day of the month
console.log(new Date().getDay()) // current day of the week (0-6)
console.log(new Date().getHours()) // current hour
console.log(new Date().getMinutes()) // current minute
console.log(new Date().getSeconds()) // current second
console.log(new Date().getMilliseconds()) // current millisecond
console.log(new Date().toISOString()) // current date and time in ISO format
console.log(new Date().toLocaleString()) // current date and time in local format
console.log(new Date().toUTCString()) // current date and time in UTC format
console.log(new Date().toJSON()) // current date and time in JSON format
console.log(new Date().toString()) // current date and time in string format
console.log(new Date().toDateString()) // current date in string format
console.log(new Date().toTimeString()) // current time in string format
console.log(new Date().toLocaleDateString()) // current date in local format
console.log(new Date().toLocaleTimeString()) // current time in local format
console.log(new Date().getTimezoneOffset()) // current timezone offset in minutes
console.log(new Date().getTimezoneOffset()/60) // current timezone offset in hours
console.log(new Date().getTime()) // Current time in milliseconds

d=new Date()
d.setFullYear(2023)
d.setMonth(0)
d.setDate(1)
d.setHours(0)
d.setMinutes(0)
d.setSeconds(0)
d.setMilliseconds(0)
console.log(d)
