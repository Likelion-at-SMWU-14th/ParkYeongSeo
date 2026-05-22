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

const MusicWrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: #0c0c0c;
  }

  &:hover p {
    color: #fff;
  }
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
      <MusicWrapper href='https://youtu.be/6Ycn9qZK09I?si=bqDQEW3VBaujGrMd' target='_blank'>
        <MusicText>Heavy Serenade</MusicText>
        <SingerText>NMIXX</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper href='https://youtu.be/odia4mSCOTc?si=5qNAOekIcIPcu5PH' target='_blank'>
        <MusicText>All the Possibilities</MusicText>
        <SingerText>TWS</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper href='https://youtu.be/oUDNUv7D3n8?si=kYSAKwBXEZ0gZaY1' target='_blank'>
        <MusicText>Toki Yo Tomare</MusicText>
        <SingerText>ILLIT</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper href='https://youtu.be/i5S7DBQnqP0?si=PEJqwkRATDOHi5tp' target='_blank'>
        <MusicText>Eye-Poppin'</MusicText>
        <SingerText>KickFlip</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper href='https://youtu.be/ctfS0Rcq-gs?si=6hBA13T4o0tW92Nn' target='_blank'>
        <MusicText>BEEP</MusicText>
        <SingerText>izna</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper href='https://youtu.be/Z-hpRjpFmmU?si=ZdNPkkyYXCMhdOsv' target='_blank'>
        <MusicText>Like It Like It</MusicText>
        <SingerText>TWICE</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
      <MusicWrapper href='https://youtu.be/Oz7v7TP_-3k?si=y6UAjMbpZSsHYn0E' target='_blank'>
        <MusicText>I Like It</MusicText>
        <SingerText>Stray Kids</SingerText>
      </MusicWrapper>
      <BorderText>-----------------------------------------------</BorderText>
    </PlaylistWrapper>
  )
}

export default Playlist
