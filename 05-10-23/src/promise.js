const promise = new Promise((resolve, reject) => {
  resolve('res')
  reject('err')
})

async function asincronia() {
  try {
    const result = await promise
  } catch (err) {
  } finally {
  }
}

// promise
//   .then((res) => {
//     // exito
//   })
//   .catch((err) => {
//     // error
//   })
