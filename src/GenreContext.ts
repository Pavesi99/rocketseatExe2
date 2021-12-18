import { createContext } from "react";
interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

export const GenresContext = createContext<GenreResponseProps[]>([])

