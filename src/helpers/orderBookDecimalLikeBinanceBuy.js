
const toFixedSimple = (num, fixed) => {
  if (num) {
    num = num.toString(); //If it's not already a String
    if (num.includes(".")) {
      num = num.slice(0, num.indexOf(".") + (fixed + 1));
    }
    return Number(num);
  } else return Number(0);
}

export const orderBookDecimalLikeBinanceBuy = (dataArr, decimalValue) => {
  let newArr = []
  let data = dataArr.reduce((el, el1, index) => {
    let elFlatVal = parseFloat(toFixedSimple(el[0], decimalValue))
    let el1FlatVal = parseFloat(toFixedSimple(el1[0], decimalValue))
    if (elFlatVal == el1FlatVal) {
      let sum = [(toFixedSimple(el[0], decimalValue)).toString(), (parseFloat(el[1]) + parseFloat(el1[1])).toString()]
      if (newArr) {
        let index = newArr.findIndex(element => element[0] == el[0])
        if (index >= 0) {
          newArr[index] = sum
        } else {
          newArr.push(sum)
        }
      } else {
        newArr.push(sum)
      }
      return sum
    } else {
      if (index == 1) {
        newArr.push(el)
      }
      newArr.push(el1)
      
      return el1
    }
  })
  return newArr
}