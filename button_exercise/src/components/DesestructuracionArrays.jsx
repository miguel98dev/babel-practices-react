const simpleArray = [
  'Rick',
  'Morty',
  'Jerry',
  'Beth',
  'Summer',
  'Mr. Meeseeks',
  'Birdperson',
  'Squanchy',
  'Tammy',
  'Unity',
  'Evil Morty',
  'Phoenixperson',
  'Noob Noob',
  'Abradolf Lincler',
  'Pickle Rick',
  'Scary Terry',
  'Mr. Poopybutthole',
  'Snowball',
  'Mr. Goldenfold',
  'Jessica'
]

const DesestructuracionArrays = () => {
  const [first, second, third] = simpleArray

  return (
    console.log({ first, second, third })
  )
}

export default DesestructuracionArrays
