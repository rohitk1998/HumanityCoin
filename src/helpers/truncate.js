export const truncateData = (num, fixed) => {
  let number;
  if (num === 0) {
    number = num.toFixed(fixed);
  } 
  else {
    number = Number(num).toFixed(fixed);
  }

  if (isNaN(number) || number === undefined) {
    number = 0;
  }

  number = parseFloat(number)

  return number;
};

export function  removeTrailingZero(value){
   return parseFloat(value)
}

export const multy = (a, b) => {
  if (a === null || b === null) {
    return;
  }
  const tot = int_val(a) * int_val(b);
  return tot / (divider(a) * divider(b));
};

function divider(n) {
  const t = n.toString().split('.')[1];
  if (t) {
    return 10 ** t.length;
  } else {
    return 1;
  }
}

function int_val(n) {
  return parseInt(n.toString().split('.').join(''));
}


export function removeExpo(n) {
  var sign = +n < 0 ? "-" : "",
    toStr = n.toString();
  if (!/e/i.test(toStr)) {
    return n;
  }
  var [lead, decimal, pow] = n.toString()
    .replace(/^-/, "")
    .replace(/^([0-9]+)(e.*)/, "$1.$2")
    .split(/e|\./);
  return +pow < 0 ?
    sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal :
    sign + lead + (+pow >= decimal.length ? (decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))) : (decimal.slice(0, +pow) + "." + decimal.slice(+pow)))
}
