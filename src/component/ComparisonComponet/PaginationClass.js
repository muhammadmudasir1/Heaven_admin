import React, { useEffect } from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


const PaginationClass = ({ currentPage, cardsPerPage, totalcards, onPageChange }) => {
    useEffect(()=>{
        console.log("from pagination")
        console.log(cardsPerPage)
        console.log(totalcards)
    },
    [totalcards, cardsPerPage])

    let total = (totalcards.length)/cardsPerPage;
    total=Math.ceil(total);
    const pageNumber = [];
    for (let i = 1; i <= total; i++) {
        pageNumber.push(i);
        console.log(i)
    }

    console.log(pageNumber)
    console.log('totalPage ' +total)
    return (
        <div className="flex items-center gap-4 mb-5">
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2 text-xl">
                {pageNumber.map((number) => (
                    <IconButton
                        key={number}
                        variant={currentPage === number ? "filled" : "text"}
                        onClick={() => onPageChange(number)}
                        className='text-black flex items-center justify-center'
                    >
                        {number}
                    </IconButton>
                ))}
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(totalcards / cardsPerPage)}
              
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}

export default PaginationClass