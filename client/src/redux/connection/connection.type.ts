export enum ConnectionType {
  Pending = 'pending',
  Active = 'active',
  Rejected = 'rejected',
}

export type ConnectionStatus =
  | ConnectionType.Pending
  | ConnectionType.Active
  | ConnectionType.Rejected;

export enum ConnectionAs {
  Target = 'target',
  Requester = 'requester',
}

export type ConnectionAsType = ConnectionAs.Target | ConnectionAs.Requester;

export interface Connection {
  _id: string;
  connectionStatus: ConnectionStatus;
  as: ConnectionAsType;
  userId: string;
  name: string;
  email: string;
  avatar: string;
  profileStatus: string;
  company: string;
  location: string;
}
