
//ブログを削除するapi

export const deletePost = async (id: string) => {
  try {
    await fetch(`/api/posts/${id}`, {
      cache: "no-store",
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    alert("削除に失敗しました");
  }
};

