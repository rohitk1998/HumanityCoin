const toFixedSimple = (num, fixed) => {
  let newNum = 0;
  newNum = Number(num);
  if (num) {
    num = num.toString(); //If it's not already a String
    if (num.includes(".")) {
      newNum = Number(num.slice(0, num.indexOf(".") + (fixed + 1)));
      if (Number(num) > newNum) {
        newNum = (newNum + 1 / 10 ** fixed).toString();
         if (newNum.indexOf(".") == -1) {
          return Number(newNum);
        }
        newNum = Number(newNum.slice(0, newNum.indexOf(".") + (fixed + 1)));
      }
    }
    return newNum;
  } else return Number(0);
};


export const orderBookDecimalLikeBinanceSell = (dataArr, decimalValue) => {
  let newArr = [];
  let data = dataArr.reduce((el, el1, index) => {
    let elFlatVal = parseFloat(toFixedSimple(el[0], decimalValue));
    let el1FlatVal = parseFloat(toFixedSimple(el1[0], decimalValue));
    if (elFlatVal == el1FlatVal) {
      let sum = [
        toFixedSimple(el[0], decimalValue).toString(),
        (parseFloat(el[1]) + parseFloat(el1[1])).toString(),
      ];
      if (newArr) {
        let index = newArr.findIndex(
          (element) =>
            element[0] == toFixedSimple(el[0], decimalValue).toString()
        );
        if (index >= 0) {
          newArr[index] = sum;
        } else {
          newArr.push(sum);
        }
      } else {
        newArr.push(sum);
      }
      return sum;
    } else {
      if (index == 1) {
        newArr.push([toFixedSimple(el[0], decimalValue).toString(), el[1]]);
      }
      newArr.push([toFixedSimple(el1[0], decimalValue).toString(), el1[1]]);
      return el1;
    }
  });
  return newArr;
};
