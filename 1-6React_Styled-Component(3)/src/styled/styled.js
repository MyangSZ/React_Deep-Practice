import { css } from "styled-components";

// // 믹슨인
// @mixin flex($direction: row, $align: stretch, $justify: start, $gap: 0 , $wrap: nowrap){
//     display: flex;
//     flex-direction: $direction;
//     align-items: $align;
//     justify-content: $justify;
//     gap: $gap;
//     flex-wrap: $wrap;
//   }


export const flexMixin =(
 {   direction= 'row', 
    align= 'stretch', 
    justify= 'start', 
    gap= 0 , 
    wrap= 'nowrap'}
 ) => {
    return css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    gap: ${gap};
    flex-wrap: ${wrap};
    `
};


//   // 변수화
//   $gap_padding_radius: 20px;

export const gap_padding_radius = '20px'