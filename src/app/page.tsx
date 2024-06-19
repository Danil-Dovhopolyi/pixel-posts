import axios from 'axios';
import PostItem from '../components/PostItem';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
};

const Home = async () => {
  const posts: Post[] = await fetchPosts();

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-600">
          Posts
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
