// import React from 'react';
// import { Link } from 'react-router-dom';

// const Pagination = () => {
//     return (
//         <ul>
//             <li><Link to="#"><i className="far fa-angle-double-left" /></Link></li>
//             <li className="active"><Link to="#">1</Link></li>
//             <li><Link to="#">2</Link></li>
//             <li><Link to="#">3</Link></li>
//             <li><Link to="#">...</Link></li>
//             <li><Link to="#">10</Link></li>
//             <li><Link to="#"><i className="far fa-angle-double-right" /></Link></li>
//         </ul>
//     );
// };

// export default Pagination;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const [visibleRange, setVisibleRange] = useState(3); // Number of pages to show on each side of the current page

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const handleExpandLeft = () => {
        setVisibleRange((prev) => Math.min(prev + 2, totalPages));
    };

    const handleExpandRight = () => {
        setVisibleRange((prev) => Math.min(prev + 2, totalPages));
    };

    const renderPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(1, currentPage - visibleRange);
        const endPage = Math.min(totalPages, currentPage + visibleRange);

        // Show first page
        pages.push(
            <li key={1} className={1 === currentPage ? "active" : ""}>
                <Link to="#" onClick={() => handlePageClick(1)}>1</Link>
            </li>
        );

        // Add left ellipsis if needed
        if (startPage > 2) {
            pages.push(
                <li key="left-ellipsis">
                    <Link to="#" onClick={handleExpandLeft}>...</Link>
                </li>
            );
        }

        // Add pages in the middle range
        for (let i = startPage; i <= endPage; i++) {
            if (i !== 1 && i !== totalPages) {
                pages.push(
                    <li key={i} className={i === currentPage ? "active" : ""}>
                        <Link to="#" onClick={() => handlePageClick(i)}>
                            {i}
                        </Link>
                    </li>
                );
            }
        }

        // Add right ellipsis if needed
        if (endPage < totalPages - 1) {
            pages.push(
                <li key="right-ellipsis">
                    <Link to="#" onClick={handleExpandRight}>...</Link>
                </li>
            );
        }

        // Show last page
        if (totalPages > 1) {
            pages.push(
                <li key={totalPages} className={totalPages === currentPage ? "active" : ""}>
                    <Link to="#" onClick={() => handlePageClick(totalPages)}>
                        {totalPages}
                    </Link>
                </li>
            );
        }

        return pages;
    };

    return (
        <ul>
            <li>
                <Link to="#" onClick={() => handlePageClick(1)} disabled={currentPage === 1}>
                    <i className="far fa-angle-double-left" />
                </Link>
            </li>
            {renderPageNumbers()}
            <li>
                <Link to="#" onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}>
                    <i className="far fa-angle-double-right" />
                </Link>
            </li>
        </ul>
    );
};

export default Pagination;



