import { useEffect, useState } from 'react';
import classes from './Pagination.module.css'
import { Button } from '../button/Button';

type PropsType = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    setCurrentPage: (pageNumber: number) => void
}

export const Pagination = (props: PropsType) => {

    const [portionPages, setPortion] = useState<number>(1)

    const pagesPerPortion = 6

    useEffect(() => {
        if (props.currentPage < prevCountPageOutput) {
            prevPortionPages()
        }
        if (props.currentPage > nextCountPageOutput) {
            nextPortionPages()
        }
    }, [props.currentPage])

    const pagesCount = Math.ceil(props.totalCount / props.pageSize)

    const pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const prevCountPageOutput = (portionPages - 1) * pagesPerPortion + 1;
    const nextCountPageOutput = portionPages * pagesPerPortion;

    const prevPortionPages = () => {
        setPortion(portionPages - 1)

    }

    const nextPortionPages = () => {
        setPortion(portionPages + 1)
    }

    const prevPage = () => {
        props.setCurrentPage(props.currentPage - 1)
        if (props.currentPage <= prevCountPageOutput) {
            prevPortionPages()
        }
    }

    const nextPage = () => {
        props.setCurrentPage(props.currentPage + 1)
        console.log(nextCountPageOutput)

        if (props.currentPage >= nextCountPageOutput) {
            nextPortionPages()
        }
    }

    const setCurrentPageHandler = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
    }

    const prevButtonDisabled = props.currentPage === 1
    const nextButtonsDisabled = props.currentPage === pagesCount
    const prevPortionPagesButtonDisabled = props.currentPage <= pagesPerPortion
    const nextPortionPagesButtonDisabled = nextButtonsDisabled

    return (
        <div className={classes.paginatorWrapper}>
            <Button className={prevPortionPagesButtonDisabled ? classes.disabled : classes.button}
                disabled={prevPortionPagesButtonDisabled}
                onClick={prevPortionPages}
            >{'<<'}</Button>
            <Button className={prevButtonDisabled ? classes.disabled : classes.button} onClick={prevPage} disabled={prevButtonDisabled}>Prev</Button>
            {
                pages
                    .filter(page => page >= prevCountPageOutput && page <= nextCountPageOutput)
                    .map((page, index) => <Button className={props.currentPage === page ? classes.selectedButton : classes.pagesButton}
                        key={index}
                        onClick={() => setCurrentPageHandler(page)}>
                        {page}
                    </Button>
                    )
            }
            <Button className={nextButtonsDisabled ? classes.disabled : classes.button}
                disabled={nextButtonsDisabled}
                onClick={nextPage}>Next</Button>
            <Button className={nextPortionPagesButtonDisabled ? classes.disabled : classes.button}
                disabled={nextPortionPagesButtonDisabled}
                onClick={nextPortionPages}>{'>>'}</Button>
        </div>
    );
};
