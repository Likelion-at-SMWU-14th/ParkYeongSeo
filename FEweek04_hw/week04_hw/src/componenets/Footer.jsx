import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 32px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  z-index: 1000;
`

const TextContainer = styled.div`
  display: flex;
  gap: 64px;
`

const HeaderText = styled.p`
  font-family: 'Pretendard Variable';
  font-size: 16px;
  font-weight: 700;
  color: #0c0c0c;
  margin: 0;
  white-space: nowrap;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <TextContainer>
        <HeaderText>WELCOME TO MY PLAYLIST</HeaderText>
        <HeaderText>WELCOME TO MY PLAYLIST</HeaderText>
        <HeaderText>WELCOME TO MY PLAYLIST</HeaderText>
        <HeaderText>WELCOME TO MY PLAYLIST</HeaderText>
        <HeaderText>WELCOME TO MY PLAYLIST</HeaderText>
        <HeaderText>WELCOME TO MY PLAYLIST</HeaderText>
      </TextContainer>
    </HeaderWrapper>
  )
}

export default Header
