export interface BlogPost {
    _id: string,
    title: string,
    currentSlug: string,
    publishedAt: Date,
    image: any
}

export interface FullBlogArticle {
    title: string,
    image: any,
    currentSlug: string,
    body: any
}