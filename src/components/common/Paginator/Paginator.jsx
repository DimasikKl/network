import React, { useState } from "react";
import style from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNamber, setPortionNamber] = useState(1);
    const leftPortionPageNamber = (portionNamber - 1) * portionSize + 1;
    const rightPortionPageNamber = portionNamber * portionSize;

    return (
        <div className={style.paginator}>
            {portionNamber > 1 && 
            <button onClick={() => { setPortionNamber(portionNamber - 1)}}>PREV</button>}

            {pages
            .filter( p => p => leftPortionPageNamber && p <= rightPortionPageNamber)
            .map((p) => {
                return <span className={cn({
                    [style.selectedPage]: currentPage === p
                }, style.pageNamber)} 
                key={p}
                onClick={(e) => {
                    onPageChanged(p)
                }} >{p}</span>
            })}
            {portionCount > portionNamber && 
            <button onClick={() => {setPortionNamber(portionNamber + 1)}}>NEXT</button>}
        </div>
    )
}

export default Paginator;