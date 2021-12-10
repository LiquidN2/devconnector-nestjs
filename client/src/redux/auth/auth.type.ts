export interface FullfilledPayload {
  access_token: string;
}

export interface RejectedPayload {
  statusCode: number;
  message: string;
  error: string;
}

export enum AuthStatusType {
  Loading = 'loading',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
  Idle = 'idle',
}

export type AuthStatus =
  | AuthStatusType.Loading
  | AuthStatusType.Fulfilled
  | AuthStatusType.Rejected
  | AuthStatusType.Idle;

export interface AuthState {
  token: string | undefined;
  status: AuthStatus;
  error: any;
}

export interface AuthRequestType {
  type: 'signin' | 'signup';
  email: string;
  password: string;
  name?: string;
  passwordConfirm?: string;
}
