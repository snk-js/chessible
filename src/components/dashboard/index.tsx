import styled from 'styled-components'

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`

const Dashboard = ({ children }) => {
  return <StyledDashboard>{children}</StyledDashboard>
}

export default Dashboard
