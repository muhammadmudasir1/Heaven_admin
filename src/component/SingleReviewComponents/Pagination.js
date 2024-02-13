import React from 'react'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
const Pagination = ({ totalItems, itemsPerPage, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center mt-4">
            <ul className="flex items-center justify-center space-x-2">
                <li>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 rounded-full bg-gray-300 hover:bg-[#035091]"
                    >
                        <ArrowBackIos fontSize='5px'/>
                    </button>
                </li>
                {pageNumbers.map((number, index) => (
                    <li key={index}>
                        <a
                            onClick={() => paginate(number)}
                            href="#"
                            className={`px-2 rounded-full ${currentPage === number ? 'bg-gray-700 text-white' : 'bg-gray-300 hover:bg-[#035091]'
                                }`}
                        >
                            
                        </a>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
                        className="px-3 py-2 rounded-full bg-gray-300 hover:bg-[#035091]"
                    >
                        <ArrowForwardIos fontSize='5px' />
                    </button>
                </li>
            </ul>
        </nav>
    );
};


export default Pagination
