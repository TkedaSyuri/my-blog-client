
export const getDetailPost = async (id: string) => {
  const res = await fetch(`http://localhost:5000/posts/${id}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }: { params: { id: string } }) => {
  const posts = await getDetailPost(params.id);
  return (
    <div>
      <div>{params.id}</div>
      {posts.title}
      {posts.created_at}
    </div>
  );
};

export default page;
