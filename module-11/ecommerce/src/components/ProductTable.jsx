import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function ProductTable({products}) {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SL</TableHead>
              <TableHead>image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Updated At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            { products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{index+1}</TableCell>
                  <TableCell>
                    <img src={product.images[0]} alt="" width="50px" />
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>$ {product.price}</TableCell>
                  <TableCell>{product.updatedAt}</TableCell>
                  <TableCell>
                    <a>Edit</a>
                    <a>Delete</a>
                  </TableCell>
                </TableRow>
            ))}
            <TableCell></TableCell>
          </TableBody>
        </Table>
      </div>

    </div>
  )
}
