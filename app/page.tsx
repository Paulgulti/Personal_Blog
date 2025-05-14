

import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client, urlFor } from "@/sanity/client";
import { BlogPost } from "./lib/interface";
import Image from "next/image";
import PostCard from "./components/ui/PostCard";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, image, title, "currentSlug": slug.current, publishedAt}`;

const options = { next: { revalidate: 30 } };
export default async function Home() {

  const posts = await client.fetch<BlogPost[]>(POSTS_QUERY, {}, options);

  // console.log(posts);
  
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-xl md:text-3xl font-bold mb-8">Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-5">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
          // <li className="hover:underline" key={post._id}>
          //   <Link href={`/${post.currentSlug}`}>
          //     <h2 className="text-xl font-semibold">{post.title}</h2>
          //     <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          //     <Image
          //       src={urlFor(post.image).url()}
          //       alt="post-image"
          //       width={200}
          //       height={150}
          //     />
          //   </Link>
          // </li>
        ))}
      </ul>
    </main>
  );
}
