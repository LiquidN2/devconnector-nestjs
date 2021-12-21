export interface Person {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  handle: string;
  status: string;
  location: string;
  company: string;
}

export interface SearchResults {
  people: Person[];
}
