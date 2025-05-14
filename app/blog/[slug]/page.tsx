import { FullBlogArticle } from '@/app/lib/interface';
import { client, urlFor } from '@/sanity/client'
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react'


async function getData(slug: string) {
    const Article_Query = `*[_type == 'post' && slug.current == "${slug}"]{
      "currentSlug": slug.current,
      image,
        title,
        body
    }[0]`

    const data = await client.fetch(Article_Query)
    return data;
}

const BlogArticle = async ({ params }: {
    params: Promise<{ slug: string }>
}) => {

    const { slug } = await params;
    const data: FullBlogArticle = await getData(slug)
    return (
        <div className='mt-4 mx-auto'>
            <span className='block text-end pr-4 text-primary font-semibold'>Paul-Blog</span>
            <h2 className='text-lg font-bold md:text-2xl mt-6 leading-8 tracking-tight text-center mb-2'>{data.title}</h2>
            <div className='w-[300px] md:w-[400px] h-[200px] mx-auto '>
                <Image
                    src={urlFor(data.image).url()}
                    alt="post image"
                    width={500}
                    height={500}
                    priority
                    className='border rounded-lg object-cover h-[100%] w-[100%] md:px-0'
                />
            
            </div>
            <div className='prose md:prose-xl prose-li:marker:text-primary mx-auto px-2 my-4 dark:prose-invert mt-16'>
                <PortableText value={data.body} />
            </div>
        </div>
    ) 
}

export default BlogArticle
