import DetailPost from "@/components/Blog/DetailPost/DetailPost";

const getDetailPost = async (id: string) => {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/${id}`, {
      cache: "no-store",
    });
    return res.json();
  }catch (err){
    console.log(err)
  }
};

const DetailPostPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  // 26dd84e34ce647a2681cf3842a8654f613cb0f52c5a7828f3d923d225b83449d 
  const detailPost = await getDetailPost(id);

  return (
    <div>
      <DetailPost detailPost={detailPost} />
    </div>
  );
};

export default DetailPostPage;
