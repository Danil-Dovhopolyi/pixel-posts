'use client';

import Link from 'next/link';
import FavoriteButton from './FavoriteButton';
import Avatar from './Avatar';
import { useFavorites } from '@/hooks/useFavorites';
import { Post } from '@/types/types';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { favorites } = useFavorites();

  const mockUserName = `User ${post.id}`;

  return (
    <li
      className={`flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
        favorites.has(post.id) ? 'border border-yellow-500' : ''
      }`}
    >
      <Link
        href={`/posts/${post.id}`}
        className="flex items-center w-full no-underline hover:bg-gray-50 transition-colors duration-300 p-4 rounded-lg"
      >
        <Avatar name={mockUserName} />
        <h2 className="text-xl font-semibold text-gray-800 ml-4 truncate max-w-full">
          {post.title}
        </h2>
      </Link>
      <div className="mt-4 w-full">
        <FavoriteButton postId={post.id} />
      </div>
    </li>
  );
};

export default PostItem;
