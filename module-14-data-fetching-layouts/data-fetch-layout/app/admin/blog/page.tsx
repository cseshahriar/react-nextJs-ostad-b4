import React from 'react'
import { prisma } from '@/lib/utils'
import Link from 'next/link'

const Page = async () => {
  const blogs = await prisma.blog.findMany()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
            <tr>
              <th className="px-4 py-2 text-left">SL</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Content</th>
              <th className="px-4 py-2 text-left">Active</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id} className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{blog.title}</td>
                <td className="px-4 py-2">{blog.content}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-sm font-medium ${blog.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {blog.active ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-4 py-2">{new Date(blog.createdAt).toLocaleString()}</td>
                <td className="px-4 py-2">
                  <Link href={`/admin/blog/${blog.id}`} className="text-blue-600 hover:underline">
                    View
                  </Link>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan="6" className="px-4 py-4 text-center text-gray-500">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// 1.12 min
export default Page
