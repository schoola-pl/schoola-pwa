import { render, screen } from '../../../test-utils';
import Links from '../../../components/molecules/Links/Links';

describe('Components > Molecules > Links', () => {
  it('Should renders', () => {
    const socials = [
      {
        id: 0,
        url: 'https://www.facebook.com/',
        platform: 'facebook'
      },
      {
        id: 1,
        url: 'https://www.twitter.com/',
        platform: 'instagram'
      },
      {
        id: 2,
        url: 'https://www.instagram.com/',
        platform: 'twitter'
      }
    ];
    render(<Links socials={socials} />);
    expect(screen.getByText('Linki')).toBeInTheDocument();
  });
});
