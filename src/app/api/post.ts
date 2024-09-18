import { Posts } from "../Type";

export const getPosts = async (): Promise<Posts[]> => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  });
  const data = res.json();
  return data;
};

export const createPost = async (title: string, content: string) => {
  try {
    await fetch(`http://localhost:5000/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, content: content }),
    });
  } catch (err) {
    console.log(err);
    alert("投稿に失敗しました");
  }
};

export const editPost = async (title: string, content: string,id:string) => {
  try {
    await fetch(`http://localhost:5000/posts/${id}`, {
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


export const deletePost = async (id: string) => {
  try {
    await fetch(`http://localhost:5000/posts/${id}`, {
      cache: "no-store",
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    alert("削除に失敗しました");
  }
};
