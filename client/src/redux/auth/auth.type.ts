export enum AuthStatusType {
  Authenticated = 'authenticated',
  Unauthenticated = 'unauthenticated',
  Pending = 'pending',
  Unknown = 'unknown',
  Error = 'error',
}

export type AuthStatus =
  | AuthStatusType.Authenticated
  | AuthStatusType.Unauthenticated
  | AuthStatusType.Pending
  | AuthStatusType.Error
  | AuthStatusType.Unknown;

export interface AuthState {
  token: string | undefined;
  status: AuthStatus;
  error: string | undefined;
}
