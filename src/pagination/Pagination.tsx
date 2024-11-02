import React, {useState} from 'react';

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

    let [pagesOutput, setPagesOutput] = useState<number>(1);

    let pagesInLine = 7;

    const prevCountPageOutput = (pagesOutput - 1) * pagesInLine + 1;
    const nextCountPageOutput = pagesOutput * pagesInLine;

    const prevPortionPages = () => {
        setPagesOutput(pagesOutput - 1)
    }

    const nextPortionPages = () => {
        setPagesOutput(pagesOutput + 1)
    }

    const nextPageHandler = () => {
        selectPage(props.currentPage + 1)
        if (props.currentPage % pagesInLine === 0) {
            nextPortionPages()
        }
    }

    const prevPageHandler = () => {
        selectPage(props.currentPage - 1)
        if ((props.currentPage - 1) % pagesInLine === 0) {
            prevPortionPages()
        }
    }

    return (
        <div>
            <button onClick={prevPortionPages}>{'<<'}</button>
            <button onClick={prevPageHandler}>prevPage</button>
            {
                pages.filter(page => page >= prevCountPageOutput && page <= nextCountPageOutput)
                    .map((page: number, index) => <button key={index}
                                                          style={props.currentPage === page ? {color: 'red'} : {}}
                                                          onClick={() => selectPage(page)}>{page}</button>)
            }
            <button onClick={nextPageHandler}>nextPage</button>
            <button onClick={nextPortionPages}>{'>>'}</button>
        </div>
    );
};
