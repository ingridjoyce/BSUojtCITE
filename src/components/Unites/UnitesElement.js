import styled from 'styled-components'

export const UnitesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const UnitesWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 5px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const UnitesCard = styled.div`
    background: #cc4c1d;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`

export const UnitesIcon = styled.img`
    height: 260px;
    width: 160px;
    margin: 10px;
`

export const UnitesH1 = styled.h1`
    font-size: 2.5rem ;
    color: #cc4c1d;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem ;
    }
`

export const UnitesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const UnitesP = styled.p`
    font-size: 1rem;
    text-align: center;
`