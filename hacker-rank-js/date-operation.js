function getDayName(dateString) {
    let dayName;
    switch (new Date(dateString).getDay()) {
        case 0:
            dayName = "Sunday"
            break
        case 1:
            dayName = "Monday"
            break
        case 2:
            dayName = "Tuesday"
            break
        case 3:
            dayName = "Wednesday"
            break
        case 4:
            dayName = "Thursday"
            break
        case 5:
            dayName = "Friday"
            break
        case 6:
            dayName = "Saturday"
            break
    }
    return dayName;
}

console.log(getDayName('12/21/2021'))
