import styled from 'styled-components'

const StyledDashboard = styled.div`
  display: grid;
  padding: 2rem;
  z-index: 100;
  grid-template-columns: minmax(300px, 300px) minmax(500px, 40vw) minmax(
      300px,
      300px
    );
  grid-template-rows: 100% [grid-start];
  @media (max-width: 1280px) {
    grid-template-columns: 100% [grid-start];
    grid-template-rows: repeat(3, minmax(100%, 100%)) [grid-start];
  }
  grid-gap: 1rem;
`

const Dashboard = ({ children }) => {
  return <StyledDashboard>{children}</StyledDashboard>
}

export default Dashboard
