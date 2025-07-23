
//ブログの詳細を編集するapi
 
 export const editPost = async (title: string, content: string,id:string) => {
  try {
    await fetch(`/api/posts/${id}`, {
      cache: "no-store",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, content: content }),
    });
  } catch (err) {
   return console.log(err);
  }
};

