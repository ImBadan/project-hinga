type Props = {
    nickname: string;
    setNickname: (value: string) => void;
  
    content: string;
    setContent: (value: string) => void;
  
    generateNickname: () => void;
    loading: boolean;
    onPost: () => void;
  };
  
  export default function CreatePost({
    nickname,
    setNickname,
    content,
    setContent,
    generateNickname,
    loading,
    onPost,
  }: Props) {
  
    return (
      <div className="
        bg-white/70
        backdrop-blur-md
        border
        border-white/30
        shadow-xl
        rounded-3xl
        p-6
        mb-10
      ">
  
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname (optional)"
          maxLength={12}
          className="
            w-full
            mb-4
            bg-white/60
            rounded-2xl
            p-4
            outline-none
            text-[#24345A]
          "
        />
  
            <button
            type="button"
            onClick={generateNickname}
            className="
                mb-4
                flex
                items-center
                gap-2
                bg-[#24345A]
                text-white
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium
                hover:scale-105
                hover:opacity-90
                transition
                shadow-md
            "
            >
            🎲 Generate Nickname
            </button>
  
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What do you want to let out today?"
          className="
            w-full
            h-36
            bg-white/60
            rounded-2xl
            p-4
            outline-none
            resize-none
            text-[#24345A]
          "
        />
  
        <button
          onClick={onPost}
          disabled={loading}
          className="
            mt-4
            bg-[#24345A]
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
            hover:opacity-90
            transition
          "
        >
          {loading ? "Posting..." : "Post Anonymously"}
        </button>
  
      </div>
    );
  }