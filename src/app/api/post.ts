


export const editPost = async (title: string, content: string,id:string) => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API}/posts/${id}`, {
      cache: "no-store",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, content: content }),
    });
  } catch (err) {
    console.log(err);
    alert("編集に失敗しました");
  }
};


