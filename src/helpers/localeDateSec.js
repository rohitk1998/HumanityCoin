import * as moment from 'moment-timezone';

import { getTimezone } from './timezone';

export const localeDateSec = (
  date,
  timezone = getTimezone(),
  format = 'DD/MM HH:mm:ss'
) => {
  const isUnix = typeof date === 'number';

  const momentObj = isUnix ? moment.unix(date) : moment(date);

  return momentObj.tz(timezone).format(format);
};

export const localeDateTime = (
  date,
  timezone = getTimezone(),
  format = 'YYYY-MM-DD HH:mm:ss'
) => {
  const isUnix = typeof date === 'number';

  const momentObj = isUnix ? moment.unix(date) : moment(date);

  return momentObj.tz(timezone).format(format);
};

export const localeTime = (
  date,
  timezone = getTimezone(),
  format = 'HH:mm:ss'
) => {
  const isUnix = typeof date === 'number';

  const momentObj = isUnix ? moment.unix(date) : moment(date);

  return momentObj.tz(timezone).format(format);
};

export const localeBinanceDateTime = (
  date,
  timezone = getTimezone(),
  format = 'YYYY-MM-DD HH:mm:ss'
) => {
  var date1 = new Date(date);

  return moment(date1).format('HH:mm:ss');
};
