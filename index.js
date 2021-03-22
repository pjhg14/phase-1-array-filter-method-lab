// Code your solution here
function findMatching(names, matcher) {
    return names.filter(driver => driver.toLowerCase() === matcher.toLowerCase())
}

function fuzzyMatch(names, firstInitial) {
    return names.filter(driver => driver[0] === firstInitial[0])
}

function matchName(names, name) {
    return names.filter(driver => driver.name === name)
}