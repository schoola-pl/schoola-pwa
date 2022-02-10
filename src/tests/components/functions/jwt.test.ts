import { getJWT, removeJWT, setJWT } from '../../../helpers/jwt';

describe('Functions > JWT', () => {
  it("Checks can I correctly get JWT when there's no input", () => {
    const jwt = getJWT();
    expect(jwt).toBe(null);
  });
  it('Checks can I correctly set JWT', () => {
    setJWT('test');
    expect(getJWT()).toBe('test');
  });
  it('Checks can I successfully remove JWT', () => {
    setJWT('test');
    expect(getJWT()).not.toBe(null);
    expect(getJWT()).toBe('test');
    removeJWT();
    expect(getJWT()).not.toBe('test');
    expect(getJWT()).toBe(null);
  });
});
