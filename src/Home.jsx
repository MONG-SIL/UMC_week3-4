import styled from "styled-components";

const Movie_search = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 100;
    left: 0;
    background: 20254f;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Find_movie= styled.input`
    width: 600px;
    height: 50px;
    font-size: 20px;
    border: 0;
    border-radius: 15px;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  `
  

function Home () {
    
    return(
        <Movie_search>
            <h1>환영합니다!!!!</h1>
            <Find_movie placeholder="영화 찾기"></Find_movie>
        </Movie_search>
)
}

export default Home;