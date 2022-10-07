const add = (firstNum, secondNum) => {
    const addedNums = firstNum + secondNum
    return addedNums
}

const multiply = (addedNums) => {
    const multipliedNums = addedNums * 2
    return multipliedNums
}

const finalAnswer = multiply(add(5, 20))

console.log(finalAnswer)