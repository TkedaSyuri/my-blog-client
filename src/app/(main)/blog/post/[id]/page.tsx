import DetailPost from "@/components/Blog/DetailPost/DetailPost";

const getDetailPost = async (id: string) => {
  try{
    const res = await fetch(`${process.env.SERVER_API}/posts/${id}`, {
      cache: "no-store",
    });
    return res.json();
  }catch (err){
    console.log(err)
  }
};

const DetailPostPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const detailPost = await getDetailPost(id);

  return (
    <div>
      <DetailPost detailPost={detailPost} />
    </div>
  );
};

export default DetailPostPage;
