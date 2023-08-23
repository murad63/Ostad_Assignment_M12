import { getSinglePost } from "@/app/utils/post";


export default async function SingleBlog({ params }) {
  const id = params.id;
  // console.log(id);
  const blog = await getSinglePost(id);
  // console.log(blog.postDetails);
  const singleBlog = blog.postDetails;

  return (
    <section className='container mx-auto pt-10 pb-40'>
      <h1 className='text-3xl font-bold mb-4'>{singleBlog.title}</h1>
      <img src={singleBlog.img} alt={singleBlog.title} />
      <div className='bg-white p-4 rounded-lg shadow-md'>
        {singleBlog.content}
      </div>
    </section>
  )
}