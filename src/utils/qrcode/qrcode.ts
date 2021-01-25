import QRCode from 'qrcode'
 
const obj = {
    lote: 'DP5735',
    nome_vacina: 'MeningocócicaACWY-Nimenrix',
    data_vencimento: '30/05/2022',
    id: 'df9eb535-88c4-494f-8ffc-39352abd006c'
}
// With promises
QRCode.toDataURL(JSON.stringify(obj))
  .then((url: any) => {
    console.log(url)
  })
  .catch((err: any) => {
    console.error(err)
  })
 
// With async/await
const generateQR = async (text: any) => {
  try {
    console.log(await QRCode.toDataURL(text))
  } catch (err) {
    console.error(err)
  }
}