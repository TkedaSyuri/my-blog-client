import DetailPost from "@/components/Blog/DetailPost/DetailPost";


const DetailPostPage = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
  //ブログの詳細を取得する関数
  const getDetailPost = async (id: string) => {
    try {
      const res = await fetch(`${process.env.API_URL}/posts/${id}`, {
        cache: "no-store",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      return data;
    } catch (err) {
      return console.log(err, "取得に失敗しました");
    }
  };

  const detailPost = await getDetailPost(id);

  return (
    <div>
      <DetailPost detailPost={detailPost} />
    </div>
  );
};

export default DetailPostPage;
