import { css } from 'react-emotion'

export const maindivHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    top: 0;
    left: 0;
    width: 100%;
`

export const text = css`
    font-family: Roboto;
    font-size: 1.6rem;
    padding-left: 0.5rem;
    font-weight: bold;
    color: #ffffff;
    align-items: center;
    display: flex;
`

export const textLight = css`
    font-family: Roboto;
    font-size: 0.8rem;
    font-weight: bold;
    padding-left: 0.5rem;
    color: #ffffff;
    align-items: center;
    display: flex;
    margin-right: 1rem;
`

export const logo = css`
    display: flex;
    margin-left: -10px;
`

export const shake = css`
    animation: shake 10s;
    animation-iteration-count: infinite;
`
