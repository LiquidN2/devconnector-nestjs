import moment from 'moment';
import 'moment/locale/en-au';
moment.locale('en-au');

export const formatDate = (date: Date | null) => {
  return date ? moment(date).format('ll') : '';
};
