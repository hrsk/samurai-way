type PropsType = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    selectPage: (page: number) => void
}

export const Pagination = (props: PropsType) => {

    const pagesCount = Math.ceil(props.totalCount / props.pageSize);


    const pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const previousPage = () => {

    }

    const nextPage = () => {

    }

    const changePage = (pageNumber: string) => {
        const pgN = Number(pageNumber)
        props.selectPage(pgN)
    }

    return (
        <div>
            <button onClick={previousPage}>Prev</button>
            {
                pages.map((page, index) => {
                    return (
                        <span key={index} title={page.toString()} onClick={(e) => changePage(e.currentTarget.title)}>
                            {page}
                        </span>
                    )
                })
            }
            <button onClick={nextPage}>Next</button>
        </div>
    );
};
