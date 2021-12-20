export interface Route {
  url: string;
  label: string;
}

export type RoutesState = {
  currentRoutes: Route[];
};

export enum RouteSet {
  Default,
  ProfileEdit,
  Search,
}

export type RouteActionPayload =
  | RouteSet.Default
  | RouteSet.ProfileEdit
  | RouteSet.Search;
