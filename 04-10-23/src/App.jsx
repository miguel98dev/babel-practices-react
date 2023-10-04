import Countdown from './components/Countdown'

function App () {
  const countFinish = () => {
    window.alert('Finalizado')
  }
  return (
    <div>
      <h1>CountDown</h1>
      <Countdown onFinish={countFinish} />
    </div>
  )
}

export default App
