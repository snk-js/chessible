import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 3px;
  background: #227085d8;
  min-width: 5vw;
  border-radius: 5px;
  border-style: double;
  box-sizing: content-box;
  font-size: 1vw;
  height: 1.5em;
  margin: 0;
  font-weight: bold;
  color: #ffd3d3ff;
  letter-spacing: 2px;
  box-shadow: 2px 2px 5px #000;
  text-shadow: 2px 2px 1px #870007;
`

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
