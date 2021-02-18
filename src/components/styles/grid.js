import styled from 'styled-components';

const Grid = styled.div`
    .user-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 25px;

        padding: 25px;
        width: 80%;

        .user-info-header {
            background-color: #2BB297;
            margin-bottom: 50px;

            h1 {
                color: #ffffff;
            }
            
            h3 {
                margin: 0;
            }
        }

        .info {
            background-color: lightgray;
            margin-bottom: 50px;
            align-items: flex-start;

            p {
                margin: 0;
            }
        }
    }

    .user-container-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }  
`
export { Grid };