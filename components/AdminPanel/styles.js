// { flex: 1, display: 'flex', justifyContent: 'space-between' }
import { css } from 'react-emotion'
import * as color from '../../Util/colors';

export const maindiv = css`
    display: flex;
    width: 100%;
`

export const goplaybookdiv = css`
    flex: 1;
    background-color: ${color.gpb_gray};
`

export const goplaybookText = css`
    justify-content: center;
    margin: 0.625rem;
    height: 2rem;
`

export const sideBar = css`
    display: flex;
    flex: 1 ;
`
export const headerDiv = css`
    flex: 6;
`
export const bold = css`
    font-weight: bold
`
export const search = css`
    padding: 0.75rem;
`

export const table = css`
    margin: 1rem;
    padding: 0.5rem;
`
