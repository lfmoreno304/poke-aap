import styled from "styled-components";
import { useState } from "react";
const Container = styled.div`
    display: flex;
    background-color: #eee;
    justify-content: center;
`
const Center = styled.div`
    column-count: auto;
`
const Article = styled.article`
    width: 370px;
    display: inline-block;
    transition: box-shadow 0.2s ease;
    margin: 40px 10px 0 10px;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    > img {
    width: inherit;
    border-radius: 5px 5px 0 0;
    }
    >p {
    margin: 10px 15px;
    text-align: center;
    }
    &:hover{
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
    }
`

const Card = ({ pokemon }) => {
    return (
        <Container>
            <Center >
            <Article>
                <img src={pokemon.image} />
                <p>{pokemon.name}</p>
                {pokemon.types.map((tipo, index) => {
                    return (
                        <p key={index}>{tipo.type.name}</p>
                    )
                })}
            </Article>
            </Center>
        </Container>
    )
}
export default Card


