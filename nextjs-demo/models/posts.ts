export interface Post {
  id: number | string
  title: string
  publishedDate: number | string
  tagList: string[]
  description: string

  thumbnailUrl?: string;

  slug?: string
  author?: Author

  mdContent?: string
  htmlContent?: string
}

export interface Author {
  name: string
  title: string
  profileUrl: string
  avatarUrl: string
}