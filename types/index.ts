

export interface PostI {
  slug: string;
  frontmatter: FrontmatterI;
}

export interface FrontmatterI {
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
}
