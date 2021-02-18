import styled from 'styled-components';

const Table = styled.table`
    margin-left: auto;
    margin-right: auto;

    border-collapse: collapse;
    border-radius: 1em;
    overflow: hidden;

    tbody {
        background-color: lightgray;
    }

    th {
        text-align: left;
        padding: 30px;
        background-color: #2BB297;
    }

    td {
        padding: 30px;
    }

    tbody:nth-of-type(odd) {
        background-color: white;
    }

    .row-click {
        cursor: pointer;
    }
`
export { Table };