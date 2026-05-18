type Props = {
    post: any;
  
    openPostId: number | null;
    setOpenPostId: (id: number | null) => void;
  
    adviceCategory: string;
    setAdviceCategory: (value: string) => void;
  
    adviceNickname: string;
    setAdviceNickname: (value: string) => void;
  
    adviceContent: string;
    setAdviceContent: (value: string) => void;
  
    onSendSupport: (postId: number) => void;
  
    onLike: (postId: number, likes: number) => void;
  
    isAdmin: boolean;

    supportLoading: boolean;

    onDelete: (postId: number) => void;
  };
  
  export default function PostCard({
    post,
  
    openPostId,
    setOpenPostId,
  
    adviceCategory,
    setAdviceCategory,
  
    adviceNickname,
    setAdviceNickname,
  
    adviceContent,
    setAdviceContent,

    supportLoading,
  
    onSendSupport,
    
    onLike,
  
    isAdmin,
  
    onDelete,
  }: Props) {
  
    return (
      <div
        className="
          bg-white/70
          backdrop-blur-md
          border
          border-white/30
          shadow-lg
          rounded-3xl
          p-6
          overflow-hidden
        "
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
  
        <div className="
            mt-6
            flex
            items-center
            justify-between
            ">

            {/* SUPPORT */}
            <button
                onClick={() =>
                setOpenPostId(
                    openPostId === post.id ? null : post.id
                )
                }
                className="
                text-[#1f3261]
                font-medium
                text-sm
                hover:underline
                "
            >
                💬 View Support ({post.advice?.length || 0})
            </button>

            {/* LIKES */}
            <button
                onClick={() =>
                onLike(
                    post.id,
                    post.likes || 0
                )
                }
                className="
                flex
                items-center
                gap-2
                text-pink-500
                hover:scale-105
                transition
                "
            >
                ❤️

                <span className="text-sm text-gray-500">
                {post.likes || 0}
                </span>

            </button>

            </div>
  
        {openPostId === post.id && (
  
          <>
  
            {/* SUPPORT SECTION */}
            <div className="mt-6 space-y-3">
  
              <select
                value={adviceCategory}
                onChange={(e) =>
                  setAdviceCategory(e.target.value)
                }
                className="
                  w-full
                  bg-white
                  rounded-2xl
                  p-3
                  outline-none
                "
              >
                <option>💛 Comfort</option>
                <option>🧠 Advice</option>
                <option>🙏 Prayer</option>
                <option>🌱 Encouragement</option>
              </select>
  
              <input
                type="text"
                value={adviceNickname}
                onChange={(e) =>
                  setAdviceNickname(e.target.value)
                }
                placeholder="Nickname"
                maxLength={12}
                className="
                  w-full
                  bg-white
                  rounded-2xl
                  p-3
                  outline-none
                  mb-3
                "
              />
  
              <textarea
                value={adviceContent}
                onChange={(e) =>
                  setAdviceContent(e.target.value)
                }
                placeholder="Send support..."
                className="
                  w-full
                  bg-white
                  rounded-2xl
                  p-4
                  outline-none
                  resize-none
                "
              />
  
              <button
                onClick={() => onSendSupport(post.id)}
                disabled={supportLoading}
                className="
                  bg-pink-400
                  text-white
                  px-5
                  py-3
                  rounded-2xl
                  hover:opacity-90
                  transition
                "
              >
                {supportLoading ? "Sending..." : "Send Support"}
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
  
                  <p className="
                    text-sm
                    font-semibold
                    text-[#1f3261]
                    mb-1
                  ">
                    {item.nickname || "Anonymous"}
                  </p>
  
                  <p className="
                    text-sm
                    font-medium
                    text-[#d98c5f]
                    mb-3
                  ">
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
        <div className="
          flex
          items-center
          justify-between
          mt-6
        ">
  
          {/* DATE + DELETE */}
          <div className="flex items-center gap-4">
  
            <p className="text-xs text-gray-500">
              {new Date(
                post.created_at
              ).toLocaleString()}
            </p>
  
            {isAdmin && (
  
              <button
                onClick={() => onDelete(post.id)}
                className="
                  text-red-500
                  text-sm
                  hover:text-red-400
                "
              >
                Delete
              </button>
  
            )}
  
          </div>
  
        </div>
  
      </div>
    );
  }