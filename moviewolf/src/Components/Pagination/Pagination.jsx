import React from "react"
import ReactPaginate from "react-paginate"

import "./Pagination.css"



const Pagination = ({pageCount,setPage})=>{

    const handlePageClick=(number)=>{
        setPage(number.selected+1)
        console.log(number.selected+1)
    }
    return (
        <div className="PaginationContained">
        <ReactPaginate
            containerClassName="Pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-link"
            breakLinkClassName="page-link"
            nextClassName="page-link"
            previousLabel="< Previous"
            nextLabel="Next >"
            breakLabel={"☯"}
            pageCount={pageCount}
            onPageChange={(e)=>handlePageClick(e)}
            /* renderOnZeroPageCount={null} */
           
        />
        </div>
    )
}
export default Pagination