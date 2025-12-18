"use client";

import { useState } from "react";

export type BlogCategory =
  | "Careers"
  | "Education"
  | "Technology"
  | "Community";

export interface BlogPost {
  id: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
}

export function useBlogFilter(posts: BlogPost[]) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategory | null>(null);

  const filtered = posts.filter((post) => {
    const matchesQuery = post.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesCategory = category ? post.category === category : true;

    return matchesQuery && matchesCategory;
  });

  return {
    query,
    setQuery,
    category,
    setCategory,
    filtered,
  };
}
