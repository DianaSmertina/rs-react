export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image?: string | FileList;
  episode?: Array<string>;
  url?: string;
  created?: string;
}

export interface CharacterResponseResult {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<Character>;
}

export interface FormDogCard {
  name?: string;
  startDate?: string;
  walkType?: string;
  isTrained?: string;
  equipment?: boolean;
  image?: FileList | string;
}
