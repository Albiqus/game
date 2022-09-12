
const getRandomNumber = (min, max) => {
    let result = Math.floor(Math.random() * (max - min + 1)) + min
return result
}

export {getRandomNumber}