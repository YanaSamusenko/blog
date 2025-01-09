import React from "react";
import { SearchPosts } from "../components/SearchPosts";
import { posts } from "../posts.js";
import { Layout } from "../components/Layout";

export function SearchRes() {
 
  return (
    <Layout title="Search Results">
      <SearchPosts posts={posts} />
    </Layout>
  );
}