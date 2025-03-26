import DetailPost from "@/components/Blog/DetailPost/DetailPost";

export const getDetailPost = async (id: string) => {
  try{
    const res = await fetch(`http://localhost:8080/posts/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  }catch (err){
    console.log(err)
  }
};

const detailPostPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const detailPost = await getDetailPost(id);

  return (
    <div>
      <DetailPost detailPost={detailPost} />
    </div>
  );
};

export default detailPostPage;
