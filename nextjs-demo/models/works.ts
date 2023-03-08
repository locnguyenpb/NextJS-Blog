export interface Work {
  id: number | string,
  title: string,
  createdAt: string,
  updatedAt: string,
  tagList: string[],
  shortDescription: string,
  fullDescription: string,
  thumbnailUrl: string
}