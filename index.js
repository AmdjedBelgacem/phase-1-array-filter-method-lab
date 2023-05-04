// Code your solution here
function findMatching(drivers, arg) {
  return drivers.filter(driver => driver.toLowerCase() === arg.toLowerCase());
}

function fuzzyMatch(drivers, arg) {
  return drivers.filter(driver => driver.startsWith(arg));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
