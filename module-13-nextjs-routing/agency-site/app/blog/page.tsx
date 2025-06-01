import React from 'react'
// export const dynamic = 'force-dynamic' // every time api get request not caching

type Post = {
    title: string;
    content: string,
    author: string,
    data: string,
    category: string
}

interface PostType {
    title: string;
    content: string,
    author: string,
    data: string,
    category: string
}


type Props = {
    a: number;
    b:  string;
    c: number
}
const page = async({a, b, c}: Props) => {
    const data = await fetch("https://api.vercel.app/blog", {
        cache: 'force-cache'
        // cache: 'no-store',
        next: {
            revalidate: 30
        }
    });
    const posts: Post[] = await data.json();

    return (
        <div style={{padding: "10px"}}>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default page