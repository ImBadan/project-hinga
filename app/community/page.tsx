"use client";

import { Post } from "@/types/community";
import PostCard from "@/components/PostCard";
import Navbar from "@/components/Navbar";
import CreatePost from "@/components/CreatePost";
import { useEffect, useState } from "react";
import {
  fetchPosts,
  createPost,
  createAdvice,
  likePost,
  deletePost,
} from "@/lib/community";

const firstWords = [
  "Silent",
  "Soft",
  "Quiet",
  "Golden",
  "Blue",
  "Hopeful",
  "Gentle",
  "Calm",
  "Bright",
  "Kind",
  "Peaceful",
  "Warm",
  "Brave",
  "Dreamy",
  "Happy",
  "Tender",
  "Shining",
  "Lovely",
  "Faithful",
  "Sweet",
];

const secondWords = [
  "Rain",
  "Cloud",
  "Soul",
  "Heart",
  "Sky",
  "Mind",
  "Bird",
  "Moon",
  "Light",
  "Wave",
  "Star",
  "Dream",
  "Breeze",
  "Flower",
  "Sun",
  "River",
  "Spirit",
  "Ocean",
  "Leaf",
  "Flame",
];

export default function CommunityPage() {
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");

  function generateNickname() {

    const first =
      firstWords[Math.floor(Math.random() * firstWords.length)];
  
    const second =
      secondWords[Math.floor(Math.random() * secondWords.length)];
  
    const number = Math.floor(Math.random() * 100);
  
    const nickname = `${first}${second}${number}`;
  
    setNickname(nickname.slice(0, 12));
  }
  const [posts, setPosts] = useState<Post[]>([]);
  const [adviceContent, setAdviceContent] = useState("");
  const [adviceNickname, setAdviceNickname] = useState("");
  const [adviceCategory, setAdviceCategory] = useState("💛 Comfort");
  const [openPostId, setOpenPostId] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [supportLoading, setSupportLoading] = useState(false);

  async function refreshPosts() {

    const data = await fetchPosts();
  
    if (data) {
      setPosts(data);
    }
  }

  useEffect(() => {

    async function loadPosts() {
  
      await refreshPosts();
    }
  
    loadPosts();
  
  }, []);

  useEffect(() => {
    const admin = localStorage.getItem("hinga_admin");
  
    if (admin === "true") {
      setIsAdmin(true);
    }

  }, []);

  useEffect(() => {
    const savedNickname = localStorage.getItem("hinga_nickname");
  
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  useEffect(() => {
    const savedNickname = localStorage.getItem("hinga_nickname");
  
    if (savedNickname) {
      setAdviceNickname(savedNickname);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#24345A] px-6 py-10">


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

        <Navbar isAdmin={isAdmin} />

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
            <CreatePost
              nickname={nickname}
              setNickname={setNickname}
              content={content}
              setContent={setContent}
              generateNickname={generateNickname}
              loading={loading}
              onPost={async () => {

                setLoading(true);
                await createPost(content, nickname);

                await new Promise((resolve) =>
                  setTimeout(resolve, 300)
                );

                setContent("");

                localStorage.setItem(
                  "hinga_nickname",
                  nickname || "Anonymous"
                );

                setNickname("");

                await refreshPosts();
                setLoading(false);
              }}
            />

            {/* POSTS */}
            <div className="space-y-6">

            {posts.map((post) => (

              <PostCard
                key={post.id}

                post={post}

                openPostId={openPostId}
                setOpenPostId={setOpenPostId}

                adviceCategory={adviceCategory}
                setAdviceCategory={setAdviceCategory}

                adviceNickname={adviceNickname}
                setAdviceNickname={setAdviceNickname}

                adviceContent={adviceContent}
                setAdviceContent={setAdviceContent}

                supportLoading={supportLoading}

                onSendSupport={async (postId) => {

                  if (!adviceContent.trim()) return;
                
                  setSupportLoading(true);
                
                  await createAdvice(
                    postId,
                    adviceCategory,
                    adviceContent,
                    adviceNickname
                  );
                
                  await new Promise((resolve) =>
                    setTimeout(resolve, 300)
                  );
                
                  setAdviceContent("");
                
                  await refreshPosts();
                
                  setSupportLoading(false);
                
                }}

                onLike={async (postId, likes) => {

                  await likePost(
                    postId,
                    likes
                  );

                  await refreshPosts();

                }}

                isAdmin={isAdmin}

                onDelete={async (postId) => {

                  await deletePost(postId);

                  await refreshPosts();

                }}

              />

              ))}

            </div>

          </div>
        </div>      

    </main>
  );
}