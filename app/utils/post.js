export const getAllPosts = async function () {
  // const res = await fetch('./blogData.json');
  const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest');

  if (!res.ok) {
    throw new Error('error fetching posts')
  }

  return res.json();
}

export const getSinglePost = async function (id) {
  const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

  if (!res.ok) {
    throw new Error('error fetching post')
  }

  return res.json();
}