
//ブログを削除するapi

export const deletePost = async (id: string) => {
  try {
    await fetch(`/api/posts/${id}`, {
      cache: "no-store",
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
   return console.log(err);
  }
};

