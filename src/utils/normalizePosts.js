export function normalizePosts(posts) {
    return posts.map((post) => {
      return {
        ...post,
        rating: 0,
        favorite: false 
      }
    })
  }