import Image from "next/image";
import { prisma } from '@/lib/utils'
import Head from 'next/head';


export default async function Home() {
  // get all
  const blogs = await prisma.blog.findMany()
  console.log('blogs ', blogs);

  // post
  const user = await prisma.blog.create({
    data: {
      title: 'shahriar',
      content: 'shahriarcse@gmail.com',
      active: true
    },
  })

  return (
    <>
       <Head>
        <title>Blog| Admin</title>
        <meta name="description" content="Learn more about our company." />
      </Head>
      <div>
        Home page

        <ul>
          {blogs.map((blog, index) => (
            <li>{blog.id} - {blog.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
