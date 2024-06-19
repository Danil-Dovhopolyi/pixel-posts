'use client';

import { useFavorites } from '@/hooks/useFavorites';

interface FavoriteButtonProps {
  postId: number;
}

const FavoriteButton = ({ postId }: FavoriteButtonProps) => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <button
      onClick={() => toggleFavorite(postId)}
      className={`w-full py-2 mt-2 rounded-lg text-white font-semibold transition-colors duration-300 ${
        favorites.has(postId)
          ? 'bg-red-500 hover:bg-red-600'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {favorites.has(postId) ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
