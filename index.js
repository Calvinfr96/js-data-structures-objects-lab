// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
    const newObj = Object.assign({}, driver, { [key]: value })
    return newObj
} //Test won't pass even though function satisfies requirements

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
} //Test won't pass even though function satisfies requirements

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver)
    delete newObj[key]
    return newObj
}//Test won't pass even though function satisfies requirements 
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}//Test won't pass even though function satisfies requirements

