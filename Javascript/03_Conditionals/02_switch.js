let mark = 95

switch (Math.floor(mark / 10) * 10) {
    case 90:
        console.log("Grade A")
        break
    case 80:
        console.log("Grade B")
        break
    case 70:
        console.log("Grade C")
        break
    case 60:
        console.log("Grade D")
        break
    case 50:
        console.log("Grade E")
        break
    default:
        console.log("Failed")
}

let month = 5
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days")
        break
    case 2:
        console.log("28 days")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days")
        break
    default:
        console.log("Invalid month")
}

// We have to use break to exit the switch block else it will go till the 
// end of the switch block executing all the cases from the match case
//  except default case.