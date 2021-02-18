import styled from 'styled-components';

const Grid = styled.div`
    .user-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 25px;
        background-color: #ffffff;

        padding: 25px;
        width: 100%;

        img {
            border-radius: 20%;
            max-width: 200px;
        }

        &__header {
            display: flex;
            flex-direction: row;
            justify-content: center;
            
            h3 {
                margin: 0;
            }

            &--img {
                margin-left: 220px;
            }
        }

        &__info {
            margin-bottom: 50px;
            align-items: flex-start;

            img {
                padding: 30px 0px;
            }

            p, h3 {
                margin: 0;
                font-weight: 100;
                color: #808080;
            }
        }
    }

    .user-container-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        p {
            margin: 0;
        }

        &__maps {
            display: flex;
            justify-content: center;
            padding: 80px;
        }
    }  
`
export { Grid };