import React from 'react'
import { prisma } from '@/lib/utils'
import Link from 'next/link'

const Page = async ({ params }) => {
  const blog = await prisma.blog.findUnique({
    where: {
      id: parseInt(params.id), // ✅ Convert string to integer
    },
  })

  if (!blog) {
    return <div className="p-6 text-red-500">Blog not found</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Details</h1>
      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Content</th>
            <th className="px-4 py-2 text-left">Active</th>
            <th className="px-4 py-2 text-left">Created At</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 text-sm text-gray-600">
            <td className="px-4 py-2">{blog.id}</td>
            <td className="px-4 py-2">{blog.title}</td>
            <td className="px-4 py-2">{blog.content}</td>
            <td className="px-4 py-2">
              <span className={`px-2 py-1 text-sm rounded ${blog.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {blog.active ? 'Yes' : 'No'}
              </span>
            </td>
            <td className="px-4 py-2">{new Date(blog.createdAt).toLocaleString()}</td>
            <td className="px-4 py-2">
              <Link href="/admin/blog" className="text-blue-600 hover:underline">Back</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Page
