import { getPathForRole, getRoleFromLocalStorage, getRoleFromText } from 'helpers/roles';

describe('Functions > roles', () => {
  it('Checks if the redirectPaths function returns the correct path for a given role', () => {
    expect(getPathForRole('Student')).toBe('/student/feed');
    expect(getPathForRole('School Admin')).toBe('/school-admin/');
    expect(getPathForRole('Incorrect role')).toBe('/student/feed');
  });
  it('Checks if the redirectPaths function returns the correct path when input is wrong', () => {
    const correctResponse = '/student/feed';
    expect(getPathForRole(`${null}`)).toBe(correctResponse);
    expect(getPathForRole(`${undefined}`)).toBe(correctResponse);
    expect(getPathForRole(`${Math.random()}`)).toBe(correctResponse);
  });
  it('Checks if the getRoleFromText function returns the correct role for a given text', () => {
    expect(getRoleFromText('Student')).toBe(3);
    expect(getRoleFromText('School Admin')).not.toBe(3);
    expect(getRoleFromText('School Admin')).toBe(1);
    expect(getRoleFromText('Moderator')).toBe(4);
    expect(getRoleFromText('Incorrect role')).toBe(3);
  });
  it('Checks if the getRoleFromText function returns the correct role when input is wrong', () => {
    const correctResponse = 3;
    expect(getRoleFromText(`${null}`)).toBe(correctResponse);
    expect(getRoleFromText(`${undefined}`)).toBe(correctResponse);
    expect(getRoleFromText(`${Math.random()}`)).toBe(correctResponse);
  });

  it('Checks if the getRoleFromLocalStorage is worked good', () => {
    localStorage.clear();
    expect(getRoleFromLocalStorage()).not.toBe('Student');
    localStorage.setItem('role', 'Student');
    expect(getRoleFromLocalStorage()).toBe('Student');
    localStorage.setItem('role', 'School Admin');
    expect(getRoleFromLocalStorage()).toBe('School Admin');
  });
});
