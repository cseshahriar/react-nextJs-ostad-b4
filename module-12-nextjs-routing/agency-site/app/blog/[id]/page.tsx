import { param } from 'motion/react-client';
import React from 'react'

interface Post {
  id: string,
  title: string,
  content: string
}

type Props = {
  params: Promise<{id: string}>;
}

export default async function Page({params}: Props) {
    const { id } = await params
    const post = await fetch(`https://api.vercel.app/blog/${id}`).then((res) => res.json())

    return (
        <div style={{padding: "10px"}}>
            <ul>
              <li>title: {post.title}</li>
            </ul>
        </div>
    )
}