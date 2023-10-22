export const ApiRoutes = {
  posts: {
    index: (page: number = 1, perPgae: number = 20, category?: number) => {
      let query: string = `posts?page=${page}&per_page=${perPgae}&_embed=1`;
      if (category) {
        query += `&categories=${category}`;
      }
      return query;
    },
    show: (slug: string) => `posts?slug=${slug}&_embed=1`,
  },
  categories: {
    index: () => `categories`,
    show: (slug: string) => `categories?slug=${slug}`,
  },
  links: {
    show: (slug: string) => `thirstylink/?slug=${slug}`,
  },
  projects: {
    index: (page: number = 1, perPgae: number = 20, category?: number) => {
      let query: string = `project?page=${page}&per_page=${perPgae}&_embed=1`;
      if (category) {
        query += `&categories=${category}`;
      }
      return query;
    },
    show: (slug: string) => `project?slug=${slug}&_embed=1`,
  },
};
