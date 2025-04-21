import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationDemo({ offset = 0, limit = 6, total = 0, onPageChange }) {
  const currentPage = Math.floor(offset / limit) + 1
  const totalPages = Math.ceil(total / limit)

  const pagesToShow = () => {
    const pages = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
      }
    }

    return pages
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
          />
        </PaginationItem>

        {pagesToShow().map((page, idx) => (
          <PaginationItem key={idx}>
            {page === '...' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
