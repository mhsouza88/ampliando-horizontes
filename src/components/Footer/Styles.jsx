import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: #2196f3;

        :hover {
            color: #1769aa;
            transition: 0.6s;
        }
    }
`