import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
`

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
`

const TextContainer = styled.div`
  display: flex;
  gap: 64px;
  animation: ${slide} 15s linear infinite;
  margin-left: 64px;
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
