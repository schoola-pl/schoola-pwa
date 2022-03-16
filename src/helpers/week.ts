import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';

export const translateDayToPolish = (day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday') => {
  const preparedDay = day.toLowerCase();
  switch (preparedDay) {
    case 'monday':
      return 'poniedziałek';
    case 'tuesday':
      return 'wtorek';
    case 'wednesday':
      return 'środa';
    case 'thursday':
      return 'czwartek';
    case 'friday':
      return 'piątek';
    case 'saturday':
      return 'sobota';
    case 'sunday':
      return 'niedziela';
    default:
      return 'nieznany';
  }
};

export const translateDayToEnglish = (day: 'poniedziałek' | 'wtorek' | 'środa' | 'czwartek' | 'piątek' | 'sobota' | 'niedziela') => {
  const preparedDay = day.toLowerCase();
  switch (preparedDay) {
    case 'poniedziałek':
      return 'monday';
    case 'wtorek':
      return 'tuesday';
    case 'środa':
      return 'wednesday';
    case 'czwartek':
      return 'thursday';
    case 'piątek':
      return 'friday';
    case 'sobota':
      return 'saturday';
    case 'niedziela':
      return 'sunday';
    default:
      return 'unknown';
  }
};

const ISOpattern = 'yyyy-MM-dd';
export const getDayOfWeek = (day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday') => {
  const days: { [key: string]: 0 | 1 | 2 | 3 | 4 | 5 | 6 } = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5
  };
  const start = startOfWeek(new Date(), { weekStartsOn: 1 });
  const end = endOfWeek(new Date(), { weekStartsOn: 1 });
  const result = eachDayOfInterval({
    start,
    end
  });
  return format(result[days[day] - 1], ISOpattern);
};
