"use client";

import { createContext, useState, ReactNode } from "react";

interface FavoritesContextType {
  favorites: Set<number>;
  toggleFavorite: (postId: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (postId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(postId)) {
        newFavorites.delete(postId);
      } else {
        newFavorites.add(postId);
      }
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
