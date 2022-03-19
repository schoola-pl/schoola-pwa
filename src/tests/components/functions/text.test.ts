import { upperFirstLetter } from 'helpers/text';

describe('Functions > text', () => {
  it('Should return text with upperFirstLetter', () => {
    const name = 'marek';
    const result = upperFirstLetter(name);
    expect(result).toBe('Marek');
  });
});
