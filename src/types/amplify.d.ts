declare module 'aws-amplify' {
  const Amplify: any;
  export default Amplify;

  export type authUser = {
    username: string;
    role: string;
    attributes: {
      name: string;
      given_name: string;
      family_name: string;
      birthdate: string;
      sub: string;
    };
  };

  export const Auth: {
    currentAuthenticatedUser(): Promise<authUser & { signInUserSession: { idToken: { payload: { 'cognito:groups': string[] } } } }>;
    currentSession(): Promise<any>;
    completeNewPassword(user: any, newPassword: string, requiredAttributes: any): Promise<any>;
    signIn({ username, password }: { username: string; password: string }): Promise<any>;
    signOut(): Promise<any>;
    signUp(username: string, password: string, attributes: any): Promise<any>;
    verifyCurrentSession(): Promise<any>;
  };

  export const Hub: {
    listen(eventName: string, callback: Function): void;
    remove(eventName: string, callback: Function): void;
  };
}
