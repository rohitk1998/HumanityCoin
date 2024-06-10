


export function setAmountPrecision(amount){
  return amount !== '' ? (Number(amount) / Number(1000000000000000000)).toString() : '0' 
}