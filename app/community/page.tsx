"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CommunityPage() {
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [adviceContent, setAdviceContent] = useState("");
  const [adviceCategory, setAdviceCategory] = useState("💛 Comfort");
  const [openPostId, setOpenPostId] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select(`
        *,
        advice (*)
      `)
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
        nickname: nickname || "Anonymous",
      },
    ]);

    setNickname("");
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const admin = localStorage.getItem("hinga_admin");
  
    if (admin === "true") {
      setIsAdmin(true);
    }

  }, []);
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#24345A] px-6 py-10">
      <div className="absolute top-6 left-6 md:left-10 z-50">

        <img
          src="/logo.png"
          alt="Project Hinga"
          className="w-28 md:w-40"
        />
      </div>

      <img
          src="/hero.png"
          alt=""
          className="
            fixed
            inset-0
            w-full
            h-full
            object-cover
            opacity-40
            pointer-events-none
            z-0
          "
        />
        <div className="relative z-20">

        {isAdmin && (
        <button
          onClick={() => {
            localStorage.removeItem("hinga_admin");
            window.location.reload();
          }}
            className="
              fixed
              top-6
              right-6
              bg-red-500
              text-white
              px-4
              py-2
              rounded-full
              z-50
              hover:opacity-90
              transition
            "
          >
            Logout
          </button>
        )}

        <nav className="
          w-full
          flex
          items-center
          justify-center
          gap-8
          py-6

          text-[#1f3261]
          font-medium

          backdrop-blur-sm
        ">

          <a href="/" className="hover:opacity-70 transition">
            Home
          </a>

          <a href="#" className="hover:opacity-70 transition">
            About
          </a>

          <a href="#" className="hover:opacity-70 transition">
            Mental Health
          </a>

          <a href="#" className="hover:opacity-70 transition">
            Resources
          </a>

        </nav>

          <div className="max-w-3xl mx-auto pt-20 md:pt-28">

            {/* HEADER */}
            <div className="text-center mb-12">
              
              <h1 className="text-6xl font-bold mb-4">
                Project Hinga
              </h1>

              <p className="text-lg text-gray-600">
                Huminga ka muna. A safe space where anyone
                can express what they feel.
              </p>

            </div>

            {/* CREATE POST */}
            <div className="bg-white/70 backdrop-blur-md border border-white/30 shadow-xl rounded-3xl p-6 mb-10">

            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Nickname (optional)"
              className="w-full mb-4 bg-white/60 rounded-2xl p-4 outline-none text-[#24345A]"
            />

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What do you want to let out today?"
                className="w-full h-36 bg-white/60 rounded-2xl p-4 outline-none resize-none text-[#24345A]"
              />

              <button
                onClick={createPost}
                className="mt-4 bg-[#24345A] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                Post Anonymously
              </button>

            </div>

            {/* POSTS */}
            <div className="space-y-6">

              {posts.map((post) => (

                <div
                  key={post.id}
                  className="bg-white/70 backdrop-blur-md border border-white/30 shadow-lg rounded-3xl p-6 overflow-hidden"
                >

                  {/* POST CONTENT */}
                  <div className="mb-3">

                    <h3 className="font-semibold text-[#1f3261]">
                      {post.nickname}
                    </h3>

                  </div>

                  <p className="
                    text-lg
                    leading-relaxed
                    break-words
                    whitespace-pre-wrap
                    overflow-hidden
                  ">
                    {post.content}
                  </p>
                  <div className="mt-6 flex items-center gap-6">

                    {/* TOGGLE SUPPORT */}
                    <button
                      onClick={() =>
                        setOpenPostId(openPostId === post.id ? null : post.id)
                      }
                      className="text-[#1f3261] font-medium text-sm hover:underline"
                    >
                      💬 View Support ({post.advice?.length || 0})
                    </button>

                  </div>

                {openPostId === post.id && (
                  <>

                    {/* SUPPORT SECTION */}
                    <div className="mt-6 space-y-3">

                      <select
                        value={adviceCategory}
                        onChange={(e) => setAdviceCategory(e.target.value)}
                        className="w-full bg-white rounded-2xl p-3 outline-none"
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
                        className="w-full bg-white rounded-2xl p-4 outline-none resize-none"
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
                          fetchPosts();
                        }}
                        className="bg-pink-400 text-white px-5 py-3 rounded-2xl hover:opacity-90 transition"
                      >
                        Send Support
                      </button>

                    </div>

                      {/* SUPPORT COMMENTS */}
                      <div className="mt-6 space-y-3">

                      {post.advice?.map((item: any) => (

                        <div
                          key={item.id}
                          className="
                          bg-white
                          border
                          border-gray-200
                          rounded-2xl
                          p-4
                          overflow-hidden
                        "
                        >

                          <p className="text-sm font-semibold text-[#233876] mb-2">
                            {item.category}
                          </p>

                          <p className="
                            text-gray-700
                            break-words
                            whitespace-pre-wrap
                            overflow-hidden
                            leading-relaxed
                          ">
                            {item.content}
                          </p>

                        </div>

                      ))}

                      </div>
                    </>
                  )}
                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-6">

                    {/* LIKES */}
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
                        className="text-pink-500 hover:scale-110 transition"
                      >
                        ❤️
                      </button>

                      <span className="text-sm text-gray-500">
                        {post.likes || 0}
                      </span>

                    </div>

                    {/* DATE + DELETE */}
                    <div className="flex items-center gap-4">

                      <p className="text-xs text-gray-500">
                        {new Date(post.created_at).toLocaleString()}
                      </p>

                      {isAdmin && (
                        
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
                  )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>
        </div>      

    </main>
  );
}