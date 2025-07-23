
//ブログを投稿するapi

export const createPost = async (title: string, content: string) => {
  try {
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
  } catch (err) {
    console.log(err);
   return console.log(err);
  }
};
