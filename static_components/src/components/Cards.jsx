import Card from './Card'

const cards = [
  {
    id: 0,
    image: undefined,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit error, eos recusandae nihil ipsum distinctio natus accusamus repellat est in fugiat vitae quia quasi architecto hic voluptatibus nulla dolor elit'
  },
  {
    id: 1,
    image: 'https://picsum.photos/id/0/400/250',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit error, eos recusandae nihil ipsum distinctio natus accusamus repellat est in fugiat vitae quia quasi architecto hic voluptatibus nulla dolor elit'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/8/400/250',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit error, eos recusandae nihil ipsum distinctio natus accusamus repellat est in fugiat vitae quia quasi architecto hic voluptatibus nulla dolor elit'
  }
]

const Cards = () => {
  return (
    <div className='flex gap-10 m-5 text-justify'>
      {cards.map((element, id) => (
        <Card key={id} img={element.image} description={element.description} />
      ))}
    </div>
  )
}

export default Cards
