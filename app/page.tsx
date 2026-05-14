"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [adviceContent, setAdviceContent] = useState("");
  const [adviceCategory, setAdviceCategory] = useState("💛 Comfort");

  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setPosts(data);
    }
  }

  async function createPost() {
    if (!content.trim()) return;

    await supabase.from("posts").insert([
      {
        content,
      },
    ]);

    setContent("");
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">
          Project Hinga
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Huminga ka muna. A safe space where anyone can express what they feel.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-4 mb-8">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What do you want to let out today?"
            className="w-full h-32 bg-black rounded-xl p-4 outline-none resize-none"
          />

          <button
            onClick={createPost}
            className="mt-4 bg-white text-black px-6 py-2 rounded-xl font-semibold hover:opacity-80"
          >
            Post Anonymously
          </button>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div
            key={post.id}
            className="bg-zinc-900 rounded-2xl p-4"
          >
            <p>{post.content}</p>

            <div className="mt-4 space-y-2">

              <select
                value={adviceCategory}
                onChange={(e) => setAdviceCategory(e.target.value)}
                className="w-full bg-black rounded-xl p-2"
              >
                <option>💛 Comfort</option>
                <option>🧠 Advice</option>
                <option>🙏 Prayer</option>
                <option>🌱 Encouragement</option>
              </select>

              <textarea
                value={adviceContent}
                onChange={(e) => setAdviceContent(e.target.value)}
                placeholder="Send support..."
                className="w-full bg-black rounded-xl p-3 outline-none"
              />

              <button
                onClick={async () => {
                  if (!adviceContent.trim()) return;

                  await supabase.from("advice").insert([
                    {
                      post_id: post.id,
                      category: adviceCategory,
                      content: adviceContent,
                    },
                  ]);

                  setAdviceContent("");
                }}
                className="bg-pink-500 px-4 py-2 rounded-xl"
              >
                Send Support
              </button>

            </div>
          
            <div className="flex items-center justify-between mt-4">

          <div className="flex items-center gap-3">

            <button
              onClick={async () => {
                await supabase
                  .from("posts")
                  .update({
                    likes: (post.likes || 0) + 1,
                  })
                  .eq("id", post.id);

                fetchPosts();
              }}
              className="text-pink-500 hover:text-pink-400"
            >
              ❤️
            </button>

            <span className="text-sm text-gray-400">
              {post.likes || 0}
            </span>

          </div>

          <div className="flex items-center gap-4">

            <p className="text-xs text-gray-500">
              {new Date(post.created_at).toLocaleString()}
            </p>

            <button
              onClick={async () => {
                await supabase
                  .from("posts")
                  .delete()
                  .eq("id", post.id);

                fetchPosts();
              }}
              className="text-red-500 text-sm hover:text-red-400"
            >
              Delete
            </button>

          </div>

        </div>
          </div>
          ))}
        </div>
      </div>
    </main>
  );
}