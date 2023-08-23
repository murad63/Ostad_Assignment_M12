import Link from 'next/link';
import { getAllPosts } from '../utils/post';

export default async function Blog() {
  const blogData = await getAllPosts();

  // console.log(blogData);

  return (
    <div className="container mx-auto pt-10 pb-40">
      <h1 className="text-3xl font-bold mb-6">Latest from Blog</h1>
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
}