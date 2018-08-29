import { css } from 'react-emotion'
import * as color from '../../Util/colors';

export const maindiv = css`
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    background-color: ${color.gpb_gray};
    margin: 1rem;
`

export const search = css`
    font-weight: bold;
    justify-content: flex-start;
    padding-right: 0.75rem;
`

export const searchdiv = css`
    display: flex;
    justify-content: flex-start;
`

export const inputdiv = css`
    padding-left: 0.75rem;
    padding-right: 0.75rem;
`

export const textInput =css`
    height: 30px;
    width: 350px;
`