import styled from 'styled-components'
import idCardImg from '../assets/idCard.png'
import profileImg from '../assets/profile.png'
import barcode from '../assets/barcode.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardImage = styled.img`
  width: 244px;
  height: 609px;
`

const ProfileImage = styled.img`
  width: 200px;
  height: 199px;
  position: absolute;
  margin-top: 140px;
`

const Name = styled.p`
  position: absolute;
  color: #0c0c0c;
  font-family: Datatype;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 425px;
`

const Date = styled.p`
  position: absolute;
  color: #0c0c0c;
  font-family: Datatype;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 470px;
`

const Barcode = styled.img`
  width: 180px;
  height: 27px;
  position: absolute;
  margin-top: 540px;
`

const IdCard = () => {
  return (
    <Wrapper>
      <CardImage src={idCardImg} />
      <ProfileImage src={profileImg} />
      <Name>Youngseo's Playlist</Name>
      <Date>2026-05</Date>
      <Barcode src={barcode} />
    </Wrapper>
  )
}

export default IdCard
