import styled from 'styled-components'
import MyMap from '../map'

const ModalBg = styled.div`
  background: rgba(0,0,0,0.3);
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left:50%;
  width: 90%;
  height: 80%;
  padding: 2rem;
  background: #FFF;
  transform: translate(-50%, -50%);
  > div {
    height: 90%;
  }
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`

const CloseBtn = styled.button`
  display: block;
  margin: 1rem auto;
  background-color: #54C3BD;
  color: #FFF;
  padding: .5rem;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
`

export default function MapModal({ handleClose, position, description }) {
  return (
    <ModalBg>
      <ModalContent>
        <MyMap position={position} description={description} />
        <CloseBtn onClick={handleClose}>FECHAR</CloseBtn>
      </ModalContent>
    </ModalBg>
  )
}