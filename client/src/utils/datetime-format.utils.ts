import moment from 'moment';
import 'moment/locale/en-au';
moment.locale('en-au');

export const formatDate = (date: Date | null) => {
  return date ? moment(date).format('ll') : '';
};

export const formatPostDate = (date: Date) => {
  const momentDate = moment(date);
  const diff = momentDate.diff(new Date(), 'days');
  return diff > 5 ? momentDate.format('ll') : momentDate.fromNow();
};
