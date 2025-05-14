import { BlogPost } from '@/app/lib/interface'
import { formatDate } from '@/app/lib/utils'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { urlFor } from '@/sanity/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }: { post: BlogPost }) => {
    return (
        <li className='hover:underline'>
            <Card className='p-0 max-w-md mx-auto'>
                    <Image
                        src={urlFor(post.image).url()}
                        alt="post image"
                        width={500}
                        height={500}
                        priority
                        className='rounded-t-lg object-cover h-[200px] w-auto '
                    />
                <Link href={`/blog/${post.currentSlug}`}>

                    <CardContent className='px-2'>
                        <h3 className='text-sm font-semibold md:text-lg line-clamp-2 mt-2'>{post.title}</h3>
                        <h3 className='text-end'>{formatDate(post.publishedAt)}</h3>
                    </CardContent>
                </Link>
            </Card>
        </li>
    )
}

export default PostCard
