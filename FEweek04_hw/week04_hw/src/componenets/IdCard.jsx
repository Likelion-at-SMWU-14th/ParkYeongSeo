import styled from 'styled-components'
import idCardImg from '../assets/idCard.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardImage = styled.img`
  width: 244px;
  height: 609px;
`

const IdCard = () => {
  return (
    <Wrapper>
      <CardImage src={idCardImg} />
    </Wrapper>
  )
}

export default IdCard
