import Link from 'next/link';
import styles from './Home.module.css';
import { getAllPosts } from './utils/post';

const Home =async () => {
  const blogData = await getAllPosts();
  return (
    <div className={styles.container}>
      
      <div className="space-y-4">
        {blogData.map(blog => (
          <div key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-10">
              <h3 className="text-xl text-gray-800 hover:underline font-bold">
                {blog.title}
              </h3>
              <h4 className=''>
              {new Date(blog.created_at).toLocaleDateString()}
              </h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;