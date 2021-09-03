
export default function handler(req, res) {
  res.status(200).json({
    'id': '1447',
    'form': {
      'id': '1008526604',
      'name': 'Nome do formulário'
    },
    'created_time': '2021-07-03T15:36:32+0000',
    'field_data': [
        {
            'name': 'email',
            'values': [
                'rodrigo.yoshioka@olxbr.com'
            ]
        },
        {
            'name': 'phone_number',
            'values': [
                '+551112345678'
            ]
        },
        {
            'name': 'full_name',
            'values': [
                'Rodrigo Yoshioka'
            ]
        }
    ],
    'ad_name': 'Advertising - 8756',
    'adset_name': 'Advertising Set - 12',
    'retailer_item_id': '1008526604'
  })
}
