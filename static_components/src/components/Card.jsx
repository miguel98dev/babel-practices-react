const Card = ({ img, description }) => {
  return (
    <div className='flex flex-col border-2 border-teal-600 rounded p-3'>
      <img src={img || 'https://picsum.photos/id/9/400/250'} />
      <p>{description}</p>
    </div>
  )
}

export default Card
