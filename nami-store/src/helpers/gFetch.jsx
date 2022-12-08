let productos = [
    { id: '1', name: 'Pollera',price: '$1000',category: 'polleras', stock: '40', foto:'https://filum.com.ar/wp-content/uploads/2022/09/IMG_6615-2-scaled.jpeg' },
    { id: '2', name: 'Top',price: '$1000',category: 'tops', stock: '40', foto:'https://static.zara.net/photos///2022/W/0/1/p/3519/030/800/7/w/316/3519030800_6_1_1.jpg?ts=1639643684406' },
    { id: '3', name: 'Remera',price: '$1000',category: 'remeras', stock: '40', foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/575/971/products/rem-m-ros1-a67d671c14c569c82416571157608968-1024-1024.jpg' },
    { id: '4', name: 'Vestido',price: '$1000',category: 'vestidos', stock: '40', foto:'https://hmperu.vtexassets.com/arquivos/ids/2673865/Vestido-cut-out---Verde-oliva---H-M-PE.jpg?v=637855658475200000' },
    { id: '5', name: 'Pantalon',price: '$1000',category: 'pantalones', stock: '40', foto:'https://media.vogue.es/photos/5cc7367ffdc82261481fda65/master/w_2500,h_3194,c_limit/pantalones_vaqueros_mom_jeans_goma_pull_bear_basico_armario_2019_7512.jpg' }
  ]
  
  export const gFetch = () => {
    return new Promise((res, rej) => {
      let condition = true;
      if (condition) {
        setTimeout(() => {
          res(productos)
        }, 1500);
      } else {
        rej('error');
      }
  
    });
  };


  