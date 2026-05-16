import './App.css'
import Card from './components/Card'
import cardDetails from './index'

function App() {

  return (
    <>
      <h1>All the cards are here!</h1>
      <div className="container">

        {cardDetails.map((item, index) => {
          return(
          <Card
            key={index}
            image={item.image}
            card={item.card}
            title={item.title}
          />)
        })}
      </div>
    </>
  )
}

export default App
