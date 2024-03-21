type PropsType = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    setPage: (pageNumber: number) => void
}

export const Pagination = (props: PropsType) => {

    const pagesCount = Math.ceil(props.totalCount / props.pageSize);


    const pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const previousPage = () => {
        props.setPage(props.currentPage - 1)
    }

    const nextPage = () => {
        props.setPage(props.currentPage + 1)
    }

    const changePage = (pageNumber: number) => {
        props.setPage(pageNumber)
    }

    return (
        <div>
            <button onClick={previousPage}>Prev</button>
            {
                pages
                    .map((number, index) => {
                        return (
                            <span key={index} onClick={() => changePage(number)}>
                                {number}
                            </span>
                        )
                    })
            }
            <button onClick={nextPage}>Next</button>
        </div>
    );
};
