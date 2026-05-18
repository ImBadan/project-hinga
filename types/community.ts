export type Advice = {
    id: number;
    nickname: string;
    category: string;
    content: string;
  };
  
  export type Post = {
    id: number;
    nickname: string;
    content: string;
    likes: number;
    created_at: string;
    advice: Advice[];
  };