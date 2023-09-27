import Card from './Card'

const cards = [
  {
    image: 'https://picsum.photos/id/9/400/250',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit error, eos recusandae nihil ipsum distinctio natus accusamus repellat est in fugiat vitae quia quasi architecto hic voluptatibus nulla dolor elit'
  },
  {
    image: 'https://picsum.photos/id/0/400/250',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit error, eos recusandae nihil ipsum distinctio natus accusamus repellat est in fugiat vitae quia quasi architecto hic voluptatibus nulla dolor elit'
  },
  {
    image: 'https://picsum.photos/id/8/400/250',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit error, eos recusandae nihil ipsum distinctio natus accusamus repellat est in fugiat vitae quia quasi architecto hic voluptatibus nulla dolor elit'
  }
]

const Cards = () => {
  return (
    <div className='flex gap-10 m-5 text-justify'>
      {cards.map((element, index) => (
        <Card key={index} img={element.image} description={element.description} />
      ))}
    </div>
  )
}

export default Cards
