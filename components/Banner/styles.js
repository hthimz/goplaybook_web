import { css } from 'react-emotion'

export const phone = css`
    height: 445px;
    width: 100%;//270px;
    // margin-left: 40px;
`

export const leaf = css`
    height: 150px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
`

export const left = css`
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
`

export const right = css`
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
`

//initially 250px

export const contents = css`
    display: flex;
    flex-direction:column;
    justify-content: flex-end;
    height: 570px;
    width: 270px;
    align-items:center;

`
export const home = css`
display: flex;
justify-content: center;
align-items: center
font-family: Helvetica Neue;
font-size: 1.2rem;
font-weight: bold;
font-stretch: condensed;
width: 275px;
height: 34px;
color: #000000;
`

export const bannerTextHeader = css`
font-family: Helvetica Neue;
font-size: 1.2rem;
font-weight: bold;
font-stretch: condensed;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 0.8rem;
`


export const bannerText = css`
font-family: Helvetica Neue;
font-size: 0.875rem;
font-stretch: condensed;
width: 270px;
padding-left: 1.1rem;
`

export const learnMore = css`
font-family: Helvetica Neue;
font-size: 0.875rem;
font-stretch: condensed;
color: yellow;
width: 270px;
padding-left: 1.1rem;
`

export const hero = css`
    background: white;
    height: 570px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`
