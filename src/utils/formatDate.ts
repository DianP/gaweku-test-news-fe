import moment from 'moment';
import 'moment-timezone';

export const formatDateWithTimezone = (date: string, timezone: string) => {
  const timeZ = timezone ? timezone : 'Asia/Jakarta';

  const now = moment().tz(timeZ);
  const targetDate = moment(date).tz(timeZ);

  if (now.diff(targetDate, 'hours') < 24) {
    return targetDate.fromNow();
  } else {
    return targetDate.format('DD MMMM YYYY');
  }
};
