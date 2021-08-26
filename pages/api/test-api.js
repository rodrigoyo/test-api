
export default function handler(req, res) {
  res.status(200).json({
    'id': '123123',
    'createdTime':  '2020-20-20 00:00:00',
    'form': {
      'name': 'Nome do formulário'
    },
    'fieldData': {
      'name': 'Rodrigo Yoshioka',
      'phone': '(11) 9999-9999',
      'email': 'rodrigo.yoshioka@gmail.com'
    },
    'adsetId': '3333',
    'adsetName': 'Adset Name',
    'adName': 'Ad name',
    'retailerItemId': '1232131',
  })
}
