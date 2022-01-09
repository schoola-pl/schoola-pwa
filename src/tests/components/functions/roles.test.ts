import { getPathForRole } from '../../../helpers/roles';

describe('Functions > redirectPaths', () => {
  it('Checks if the redirectPaths function returns the correct path for a given role', () => {
    expect(getPathForRole('Student')).toBe('/student/');
    expect(getPathForRole('School Admin')).toBe('/school-admin/');
    // Incorrect role
    expect(getPathForRole('Incorrect role')).toBe('/student/');
  });
  it('Checks if the redirectPaths function returns the correct path when input is incorrect', () => {
    const correctResponse = '/student/';
    expect(getPathForRole(`${null}`)).toBe(correctResponse);
    expect(getPathForRole(`${undefined}`)).toBe(correctResponse);
    expect(getPathForRole(`${Math.random()}`)).toBe(correctResponse);
  });
});
