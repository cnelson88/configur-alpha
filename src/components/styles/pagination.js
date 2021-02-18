import styled from 'styled-components';

const Pagination = styled.div`
    .pagination {
        margin: 65px auto;
        display: flex;
        list-style: none;
        outline: none;
    }

    .pagination > .active > a {
        background-color: #2BB297;
        border-color: #47ccde ;
        color: #fff;
    }

    .pagination > li > a {  
        padding: 5px 10px;
        outline: none;
        cursor: pointer;
    }

    .pagination > li > a, .pagination > li > span {
        color: #000000;
    }
`
export { Pagination };