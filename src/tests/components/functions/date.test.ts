import { addDays, addMonths } from '../../../helpers/date';

describe('Functions > Dates', () => {
  it('Should add one month to a date', () => {
    const date = new Date(2020, 1, 1);
    const result = addMonths(1, date);
    expect(result.getMonth()).toBe(2);
    expect(result.getFullYear()).toBe(2020);
  });

  it('Should add a bit days to a date', () => {
    const date = new Date(2020, 1, 1);
    const randomDays = Math.floor(Math.random() * 20);
    const result = addDays(randomDays, date);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(randomDays + 1);
    expect(result.getFullYear()).toBe(2020);
  });
});
