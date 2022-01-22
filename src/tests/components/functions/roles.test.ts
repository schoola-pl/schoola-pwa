import { getPathForRole, getRoleFromText } from '../../../helpers/roles';

describe('Functions > roles', () => {
  it('Checks if the redirectPaths function returns the correct path for a given role', () => {
    expect(getPathForRole('Student')).toBe('/student/');
    expect(getPathForRole('School Admin')).toBe('/school-admin/');
    expect(getPathForRole('Incorrect role')).toBe('/student/');
  });
  it('Checks if the redirectPaths function returns the correct path when input is wrong', () => {
    const correctResponse = '/student/';
    expect(getPathForRole(`${null}`)).toBe(correctResponse);
    expect(getPathForRole(`${undefined}`)).toBe(correctResponse);
    expect(getPathForRole(`${Math.random()}`)).toBe(correctResponse);
  });
  it('Checks if the getRoleFromText function returns the correct role for a given text', () => {
    expect(getRoleFromText('Student')).toBe(0);
    expect(getRoleFromText('School Admin')).not.toBe(0);
    expect(getRoleFromText('School Admin')).toBe(2);
  });
  it('Checks if the getRoleFromText function returns the correct role when input is wrong', () => {
    const correctResponse = 0;
    expect(getRoleFromText(`${null}`)).toBe(correctResponse);
    expect(getRoleFromText(`${undefined}`)).toBe(correctResponse);
    expect(getRoleFromText(`${Math.random()}`)).toBe(correctResponse);
  });
});
