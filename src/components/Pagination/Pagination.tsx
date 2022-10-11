import { ReactElement } from "react";
import BtnPagination from "../BtnPagination/BtnPagination";

interface IPaginationProps {
  pages: number;
  children: ReactElement;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  pages,
  children,
  page,
  setPage,
}: IPaginationProps) {
  return (
    <>
      {page <= 1 ? null : (
        <BtnPagination onClick={() => setPage(page - 1)} position="top" />
      )}
      {children}
      {page < pages ? (
        <BtnPagination onClick={() => setPage(page + 1)} position="bottom" />
      ) : null}
    </>
  );
}
