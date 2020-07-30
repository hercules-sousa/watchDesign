import styled from 'styled-components/native'

const Container = styled.View`
  padding-top: ${({paddingTop}) => `${paddingTop}px`};
  padding-left: ${({paddingHorizontal}) => `${paddingHorizontal}px`};
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justifyContent}) => justifyContent};;
`

export default Container