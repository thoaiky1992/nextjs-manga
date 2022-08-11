import { MouseEvent, useEffect, useState } from "react";
import PageInput from "./PageInput";
import { useRouter } from "next/router";

interface PaginationProps {
  totalPages: number;
}

export default function CustomPagination({ totalPages }: PaginationProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const replacePage = (page: string) => {
    setTimeout(() => {
      router.replace({
        query: { ...router.query, page: String(page) },
      });
      setCurrentPage(Number(page));
    }, 100);
  };

  const handleChangePage = (e: MouseEvent<HTMLLIElement>) => {
    replacePage(String(e.currentTarget.dataset.id));
  };

  const handleInputPage = (page: number) => {
    if (page > totalPages) {
      replacePage(String(totalPages));
      return;
    }

    if (page < 1) {
      replacePage(String(1));
      return;
    }

    replacePage(String(page));
  };

  useEffect(() => {
    const { page } = router.query;
    setCurrentPage(page ? parseInt(String(page)) : 1);
  }, [router.query]);

  return (
    <div className="absolute-center min-h-[56px] w-full bg-cyan-400/0 flex items-center">
      <ul className="flex h-full w-full flex-wrap items-center justify-center lg:gap-4 text-3xl text-white">
        <li
          onClick={handleChangePage}
          data-id={1}
          className={`pagination-active rounded-lg ${
            currentPage === 1
              ? "bg-primary hover:bg-primary/60"
              : "bg-highlight hover:bg-highlight/25"
          } py-1 px-3 lg:py-2 lg:px-5 text-lg font-secondary  transition-all hover:cursor-pointer `}
        >
          1
        </li>

        {currentPage > 4 && (
          <PageInput setCurrentPage={handleInputPage} totalPages={totalPages} />
        )}

        {[
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
        ].map((number) => {
          if (number > 1 && number < totalPages)
            return (
              <li
                key={number}
                onClick={handleChangePage}
                data-id={number}
                className={`pagination-active rounded-lg ${
                  number === currentPage
                    ? "bg-primary hover:bg-primary/60"
                    : "bg-highlight hover:bg-highlight/25"
                } py-1 px-3 lg:py-2 lg:px-5 text-lg font-secondary  transition-all hover:cursor-pointer hover:bg-highlight/25`}
              >
                {number}
              </li>
            );
        })}

        {totalPages - currentPage > 3 && (
          <PageInput setCurrentPage={handleInputPage} totalPages={totalPages} />
        )}

        <li
          onClick={handleChangePage}
          data-id={totalPages}
          className={`pagination-active rounded-lg ${
            currentPage === totalPages
              ? "bg-primary hover:bg-primary/60"
              : "bg-highlight hover:bg-highlight/25"
          } py-1 px-3 lg:py-2 lg:px-5 text-lg font-secondary  transition-all hover:cursor-pointer hover:bg-highlight/25`}
        >
          {totalPages}
        </li>
      </ul>
    </div>
  );
}
