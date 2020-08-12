import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://login.microsoftonline.com/<<<tenant_id>>>/v2.0',
  redirectUri: window.location.origin + '/dashboard',
  clientId: '<<<client_id>>>',
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid api://<<<client_id>>>/app',
}
