export const translateDayToPolish = (day: string) => {
  const preparedDay = day.toLowerCase();
  switch (day) {
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

export const translateDayToEnglish = (day: string) => {
  switch (day) {
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
