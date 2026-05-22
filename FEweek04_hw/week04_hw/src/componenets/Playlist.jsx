import styled from 'styled-components'

const PlaylistWrapper = styled.div`
  width: 25%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 24px auto 48px auto;
  border-radius: 8px;
`

const BorderText = styled.p`
  font-family: 'Datatype';
  font-size: 16px;
  font-weight: 700;
  color: #0c0c0c;
  margin: -2px 0;
  white-space: nowrap;
`

const MusicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 0;
`

const MusicText = styled.p`
  font-family: 'Datatype';
  font-size: 16px;
  font-weight: 700;
  color: #0c0c0c;

  margin: 0;
`

const SingerText = styled.p`
  font-family: 'Datatype';
  font-size: 16px;
  font-weight: 700;
  color: #0c0c0c;

  margin: 0;
`

const Playlist = () => {
  return (
    <PlaylistWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper>
        <MusicText>Heavy Serenade</MusicText>
        <SingerText>NMIXX</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper>
        <MusicText>All the Possibilities</MusicText>
        <SingerText>TWS</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper>
        <MusicText>Toki Yo Tomare</MusicText>
        <SingerText>ILLIT</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper>
        <MusicText>Eye-Poppin'</MusicText>
        <SingerText>KickFlip</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper>
        <MusicText>BEEP</MusicText>
        <SingerText>izna</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper>
        <MusicText>Like It Like It</MusicText>
        <SingerText>TWICE</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper>
        <MusicText>I Like It</MusicText>
        <SingerText>Stray Kids</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
    </PlaylistWrapper>
  )
}

export default Playlist
