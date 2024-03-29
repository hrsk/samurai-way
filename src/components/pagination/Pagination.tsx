import { useState } from 'react';
import style from './Pagination.module.css'

type PropsType = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    setPage: (page: number) => void
}

export const Pagination = (props: PropsType) => {

    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    const pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
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

    const prevPage = () => {
        props.setPage(props.currentPage - 1)
    }

    const nextPage = () => {
        props.setPage(props.currentPage + 1)
    }

    const selectPage = (page: number) => {
        props.setPage(page);
    }

    return (
        <div>
            <button onClick={prevPortionPages}>{'<<'}</button>
            <button onClick={prevPage}>Prev</button>
            {
                pages
                    .filter(page => page >= prevCountPageOutput && page <= nextCountPageOutput)
                    .map((page, index) => <button className={props.currentPage === page ? style.selected : ''} key={index} onClick={() => selectPage(page)}>
                        {page}
                    </button>
                    )
            }
            <button onClick={nextPage}>Next</button>
            <button onClick={nextPortionPages}>{'>>'}</button>
        </div>
    );
};
