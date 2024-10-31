import React from 'react';

type PropsType = {
    usersCount: number
    currentPage: number
    changePage: (pageNumber: number) => void
}

export const Pagination = (props: PropsType) => {

    const pageLimit: number = 10;
    const pagesCount: number = Math.ceil(props.usersCount / pageLimit)

    let pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const selectPage = (pN: number) => {
        props.changePage(pN)
    }

    return (
        <div>

            <button>{'<<'}</button>
            <button>prevPage</button>
            {
                pages.map((page: number) => <button style={props.currentPage === page ? {color: 'red'} : {}}
                                                    onClick={() => selectPage(page)}>{page}</button>)
            }
            <button>nextPage</button>
            <button>{'>>'}</button>
        </div>
    );
};
