import styled from 'styled-components'

export const Node = styled.div`
  display: flex;
  margin-left: ${p => p.level * 1.5}rem;
  border-bottom: 1px solid #E0E0E0;
  padding: 0.3rem 0;
`

export const NodeIcon = styled.div`
  cursor: pointer;
  color: #54C3BD;
`

export const GroupIcons = styled(NodeIcon)`
  font-size: 1.1rem;
  width: 5rem;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
`