import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        color: #a8a8b3;
        text-decoration: none;

        svg {
            margin-right: 12px;
        }
    }
`;

export const RepositoryInfo = styled.div`
    margin-top: 80px;
    display: flex;
    align-items: center;

    img {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        margin-right: 30px;
    }
    header {
        h1 {
            color: #3d3d4d;
            font-size: 36px;
        }
        p {
            color: #737380;
            font-size: 20px;
        }
    }
`;

export const DatesOfRepository = styled.section`
    display: flex;
    align-items: center;
    margin-top: 40px;

    ul {
        display: flex;
        li {
            display: flex;
            flex-direction: column;
            list-style: none;
            margin-right: 80px;
            strong {
                font-size: 36px;
                color: #3d3d4d;
            }
            span {
                color: #6c6c80;
                font-size: 20px;
                margin-top: 4px;
            }
        }
    }
`;
export const Issues = styled.main`
    margin-top: 80px;

    a {
        display: flex;
        align-items: center;
        background: #ffffff;
        border-radius: 6px;
        text-decoration: none;
        padding: 14px;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }
        &:hover {
            transform: translateX(10px);
        }
        div {
            flex: 1;
            strong {
                color: #3d3d4d;
                font-size: 24px;
            }
            p {
                color: #a8a8b3;
                font-size: 18px;
            }
        }
        svg {
            color: #c9c9d4;
            margin-left: auto;
        }
    }
`;
