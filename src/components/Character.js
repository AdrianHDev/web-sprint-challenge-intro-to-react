// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    & {
        background: whitesmoke;
        width: 20vw;
        text-align:center;
        margin: 5px auto 0 auto; 
        padding: 10px;
        border: 2px red solid;
        border-radius: 30px;
    }
`

const CollapsableInfo = styled.p`
    & {
        /* add animation to button */
        transition: max-height 1.5s;
        /* allows toggle for details*/
        max-height: ${props =>  (props.visible === true) ? '500px' : "0"};
        text-align:left;
        /* hides content when box is smaller than details */
        overflow: hidden;
    }
`

const StyledContainer = styled.div`
    & {
        display:flex;
        align-items:center;
    }
    h2 {
        width: 80%;
        height:50px;
        text-align: center;
        justify-content: center;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
    button {
        width: 20%;
        height: 50px;
        vertical-align:center;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }
`

const StyledGender = styled.span`
    /* some small styling to make gender look neater */
    color: ${props => {
        switch(props.gender){
            case 'male':
                return('royalblue'); 
            case 'female':
                return('crimson');
            default:
                return('gray');
    }}};
`
const Character = (props) => {
    const {characterObj} = props;
    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = () => {
        setIsVisible((bool) => !bool)
    }
    if (characterObj !== null) {
    /* Only return an element when data has loaded */
        return(
            <StyledCharacter>
                <StyledContainer>
                    <h2 style={{background: "gray"}}>{characterObj.name}</h2>
                    <button onClick={() => {toggleIsVisible()}}>Toggle Info</button>
                </StyledContainer>
                <CollapsableInfo visible={isVisible}>
                    <StyledGender gender={characterObj.gender}>Gender: {characterObj.gender}<br/></StyledGender>
                    <span>Height: {characterObj.height}<br/></span>
                    <span>Weight: {characterObj.mass}<br/></span>
                    <span>Hair Color: {characterObj.hair_color}<br/></span>
                    <span>Skin Color: {characterObj.skin_color}<br/></span>
                    <span>Eye Color: {characterObj.eye_color}<br/></span>
                    <span>Birth Year: {characterObj.birth_year}<br/></span>
                </CollapsableInfo>
            </StyledCharacter>
        )}
    else return null;
    
}

export default Character;