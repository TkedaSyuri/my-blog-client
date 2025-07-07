
//ブログの詳細を取得するapi


 export const getDetailPost = async (id:string) => {
  try {
   const res = await fetch(`/api/posts/${id}`, {
      cache: "no-store",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return res.json()
  } catch (err) {
    console.log(err);
    alert("取得に失敗しました");
  }
};


