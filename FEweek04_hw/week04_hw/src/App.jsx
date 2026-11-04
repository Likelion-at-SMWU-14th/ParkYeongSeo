import './App.css'
import Line from './componenets/Line'
import IdCard from './componenets/IdCard'
import Playlist from './componenets/Playlist'

function App() {
  return (
    <>
      <Line isTop={true} />
      <IdCard></IdCard>
      <Playlist></Playlist>
      <Line isTop={false} />
    </>
  )
}

export default App
