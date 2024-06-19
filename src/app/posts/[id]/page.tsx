import axios from 'axios';
import Head from 'next/head';
import FavoriteButton from '@/components/FavoriteButton';
import { Post, Comment } from '@/types/types';

const fetchPost = async (id: number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.data;
};

const fetchComments = async (id: number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return response.data;
};

const PostPage = async ({ params }: { params: { id: number } }) => {
  const post: Post = await fetchPost(params.id);
  const comments: Comment[] = await fetchComments(params.id);

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.body} />
      </Head>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.body}</p>
        <FavoriteButton postId={post.id} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Comments</h2>
        <ul className="space-y-4">
          {comments.map(comment => (
            <li
              key={comment.id}
              className="border-l-4 border-blue-500 bg-white p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {comment.name}
              </h3>
              <p className="text-gray-600">{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostPage;
