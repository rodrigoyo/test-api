
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
    'adset_id': '3333',
    'adset_name': 'Adset Name',
    'ad_name': 'Ad name',
    'retailer_item_id': '1232131',
  })
}
