import styled from 'styled-components';

export const Box = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    padding: 5px;
    border: 1px solid gray;
    cursor: pointer;
`;

export const Check = styled.div`
     position: absolute;
     width: 18px;
     height: 18px;
     font-size: 18px;
     line-height: 18px;
     text-align: center;
     color: green;
`;
