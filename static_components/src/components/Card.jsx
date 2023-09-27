const Card = (props) => {
  return (
    <div className='flex flex-col border-2 border-teal-600 rounded p-3'>
      <img src={props.img} />
      <p>{props.description}</p>
    </div>
  )
}

export default Card
