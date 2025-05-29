import Image from "next/image";
import { prisma } from '../lib/utils'

export default async function Home() {
  // Run inside `async` function
  const blogs = await prisma.blog.findMany()
  console.log('blogs ', blogs);

  return (
    <div>
      Home page

      <ul>
        {blogs.map((blog, index) => (
          <li>{blog.id} - {blog.title}</li>
        ))}
      </ul>
    </div>
  );
}
