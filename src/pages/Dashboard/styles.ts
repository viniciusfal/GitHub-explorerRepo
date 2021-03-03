import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}
export const Title = styled.h1`
    font-size: 48px;
    line-height: 56px;
    max-width: 433px;
    margin-top: 102px;

    color: #3a3a3a;
`;
export const Form = styled.form<FormProps>`
    max-width: 714px;
    margin-top: 40px;

    display: flex;
    input {
        height: 72px;
        border-radius: 5px;
        border: 0;
        padding: 0 29px;

        color: #3a3a3a;
        flex: 1;

        ${props =>
            props.hasError &&
            css`
                border-color: #c53030;
                border-right: 0;
            `}

        &::placeholder {
            font-size: 20px;
            color: #a8a8b3;
        }
    }
    button {
        width: 210px;
        height: 72px;
        border-radius: 0px 5px 5px 0px;
        border: 0;

        background: #04d361;
        color: #fff;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;
export const Error = styled.span`
    color: #c53030;
    display: block;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    max-width: 714px;
    margin-top: 100px;

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

        img {
            border-radius: 50%;
            width: 83px;
            height: 83px;
            display: block;
            margin-right: 22px;
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
