import { getDayOfWeek, translateDayToEnglish, translateDayToPolish } from 'helpers/week';

describe('Functions > Week', () => {
  it('Should translate english day to polish', () => {
    expect(translateDayToPolish('monday')).toBe('poniedziałek');
    expect(translateDayToPolish('tuesday')).toBe('wtorek');
    expect(translateDayToPolish('wednesday')).toBe('środa');
    expect(translateDayToPolish('thursday')).toBe('czwartek');
    expect(translateDayToPolish('friday')).toBe('piątek');
    expect(translateDayToPolish('saturday')).toBe('sobota');
    expect(translateDayToPolish('sunday')).toBe('niedziela');
  });
  it('Should translate polish day to english', () => {
    expect(translateDayToEnglish('poniedziałek')).toBe('monday');
    expect(translateDayToEnglish('wtorek')).toBe('tuesday');
    expect(translateDayToEnglish('środa')).toBe('wednesday');
    expect(translateDayToEnglish('czwartek')).toBe('thursday');
    expect(translateDayToEnglish('piątek')).toBe('friday');
    expect(translateDayToEnglish('sobota')).toBe('saturday');
    expect(translateDayToEnglish('niedziela')).toBe('sunday');
  });
  it("Should return 'nieznane' or 'unknown' when day is not valid", () => {
    // @ts-ignore
    expect(translateDayToPolish('invalid')).toBe('nieznany');
    // @ts-ignore
    expect(translateDayToEnglish('invalid')).toBe('unknown');
  });
  it('Should get ISODate of the specified day of the week', () => {
    const result = getDayOfWeek('thursday', { customDate: new Date('2022-03-14') });
    expect(result).toBe('2022-03-17');
    const resultV2 = getDayOfWeek('monday', { customDate: new Date('2022-03-16') });
    expect(resultV2).toBe('2022-03-14');
  });
});
