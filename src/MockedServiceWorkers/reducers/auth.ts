import { rest } from 'msw';
import { ResponseAuthUser } from '../../types/auth';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

const auth = [
  rest.get<Record<string, unknown>, { token: string }, ResponseAuthUser>('/api/auth/me', (req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        message: 'Successfully got user data!',
        data: {
          isBlocked: false,
          user: {
            id: 'string',
            username: 'string',
            first_name: 'string',
            last_name: 'string',
            password: 'string',
            age: 12,
            birthday: 'string',
            school: 'string',
            role: 'string'
          }
        }
      })
    );
  })
];

export default auth;
