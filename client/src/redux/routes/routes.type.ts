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
  Visit,
}

// export type RouteActionPayload =
//   | RouteSet.Default
//   | RouteSet.ProfileEdit
//   | RouteSet.Search;

export interface RouteActionPayload {
  routeSet:
    | RouteSet.Default
    | RouteSet.ProfileEdit
    | RouteSet.Search
    | RouteSet.Visit;
  userId?: string;
}
