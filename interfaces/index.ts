export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: OriginOrLocation;
  location?: OriginOrLocation;
  image?: string;
  episode?: string[] | null;
  url?: string;
  created?: string;
}
export interface OriginOrLocation {
  name?: string;
  url?: string;
}
interface Request {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
}
export interface RequestCharacters extends Request {
  results: Character[];
}
