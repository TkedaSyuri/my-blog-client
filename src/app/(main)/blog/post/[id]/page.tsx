import { getDetailPost } from "@/app/lib/api/get";
import DetailPost from "@/components/Blog/DetailPost/DetailPost";


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
