import { postsEndpoint } from "../config/api";
import { normalizePosts } from '../utils/normalizePosts';

export async function requestPostsList() {
  const response = await fetch(postsEndpoint);
  const data = await response.json();
  return normalizePosts(data.results);
  
} 