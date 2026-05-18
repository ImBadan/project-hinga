import { supabase } from "./supabase";

export async function fetchPosts() {

  const { data, error } = await supabase
    .from("posts")
    .select(`
      *,
      advice (*)
    `)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function createPost(
  content: string,
  nickname: string
) 

{

  if (!content.trim()) return;

  const { error } = await supabase
    .from("posts")
    .insert([
      {
        content,
        nickname: nickname || "Anonymous",
      },
    ]);

  if (error) {
    console.error(error);
  }
}

export async function createAdvice(
  postId: number,
  category: string,
  content: string,
  nickname: string
) 
{

  if (!content.trim()) return;

  const { error } = await supabase
    .from("advice")
    .insert([
      {
        post_id: postId,
        category,
        content,
        nickname: nickname || "Anonymous",
      },
    ]);

  if (error) {
    console.error(error);
  }
}

export async function likePost(
  postId: number,
  currentLikes: number
) {

  await supabase
    .from("posts")
    .update({
      likes: currentLikes + 1,
    })
    .eq("id", postId);
}

export async function deletePost(
  postId: number
) {

  await supabase
    .from("posts")
    .delete()
    .eq("id", postId);
}