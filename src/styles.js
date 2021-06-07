import styled from 'styled-components'

export const SAbout = styled.section`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
    color: white;
    
`
export const SDesc = styled.div`
    flex: 2;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`

export const SImage= styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

export const SHideDiv = styled.div`
    overflow: hidden;
`