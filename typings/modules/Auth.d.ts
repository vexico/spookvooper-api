import { AuthConfig } from './types/Types'
declare class Auth {
  private readonly appsecret
  private readonly code
  private readonly appid
  urlReturn: string
  constructor (config: AuthConfig);
  get clientsecret (): string;
  set clientsecret (clientsecret: string);
  get authcode (): string;
  set authcode (authcode: string);
  get clientid (): string;
  set clientid (clientid: string);
  genLink (redirect: string, scope: string, state?: string): string;
  requestToken (redirect: string): Promise<any>;
}
export default Auth
