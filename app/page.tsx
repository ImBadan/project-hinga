"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<any[]>([]);

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

              <p className="text-xs text-gray-500 mt-2">
                {new Date(post.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}