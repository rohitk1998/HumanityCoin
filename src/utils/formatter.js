const BigNumber = require('bignumber.js');

export const h24Change = (open, last, n = 6) => {
  let p1 = new BigNumber(open);
  let p2 = new BigNumber(last);
  return p2.minus(p1).toFixed(n);
};

export const toFixed = (num, tofixed = 6) => {
  return new BigNumber(num).toFixed(tofixed);
};

export const total = (price, vol, tofixed = 6) => {
  let x = new BigNumber(price);
  let y = new BigNumber(vol);
  return x.multipliedBy(y).toFixed(tofixed);
};

export const preciseNumber = (str, upto = 6) => {
  let split_str = str.split('.');
  if (split_str[1] && split_str[1].length > upto) {
    split_str[1] = split_str[1].substring(0, upto);
    return split_str.join('.');
  }
  return str;
};


export const fulltime_order_account = datetime => {
  let dt = new Date(datetime);
  return (
    dt.getFullYear() +
    '-' +
    (dt.getMonth() + 1) +
    '-' +
    dt.getDate() +
    ' ' +
    dt.getHours() +
    ':' +
    dt.getMinutes()
  );
};


export const listDateFormat = date => {
  let newDAte = new Date(date);
  let parsedDate = newDAte.toLocaleDateString('default', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  let time = newDAte.toLocaleTimeString('default', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  return parsedDate + ' ' + time;
};


export const listDateOnlyFormat = date => {
  let newDAte = new Date(date);
  let parsedDate = newDAte.toLocaleDateString('default', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });

  return parsedDate;
};

export const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}



export const plusNum = (val1, val2) => {
  if (val1 && val2) {
    let p1 = new BigNumber(val1);
    let p2 = new BigNumber(val2);
    return Number(p2.plus(p1));
  }
};
