import React from 'react'
import { Progress } from 'antd'

import styled from 'styled-components'

const StyledProgress = styled(Progress)`
  .ant-progress-text {
    color: #baffcb !important;
    font-weight: 900;
    font-size: 0.875rem;
  }
`

type ProgressProps = {
  actionPoints: number
  total: number
}

const Mana: React.FC = ({ actionPoints, total }: ProgressProps) => (
  <>
    <StyledProgress
      type='circle'
      percent={(actionPoints / total) * 100}
      format={(p) => {
        return (p / 100) * total
      }}
      strokeWidth={10}
      trailColor={'#121363'}
      strokeColor={'#00ff2a'}
      width={30}
    />
  </>
)

export default Mana
