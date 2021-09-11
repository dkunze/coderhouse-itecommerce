const products = [
  { id: '1', category:'notebooks', name: 'Notebook Celeron 14" Memoria 4gb Almacenaje 128gb - Tedge', description: 'This is the description field', price: '49.399', photo: 'https://http2.mlstatic.com/D_NQ_NP_908610-MLA45342957241_032021-V.webp' },
  { id: '2', category:'notebooks', name: 'Notebook Lenovo IdeaPad 14IIL05 platinum gray 14", Intel Core i5 1035G1 8GB de RAM 512GB SSD, Gráficos Intel UHD G1 1920x1080px', description: 'This is the description field', price: '102.599', photo: 'https://http2.mlstatic.com/D_NQ_NP_879170-MLA45629747467_042021-V.webp' },
  { id: '3', category:'impresoras', name: 'Impresora simple función Xerox Phaser 3020/BI con wifi blanca y azul 220V - 240V', description: 'This is the description field', price: '14.999', photo: 'https://http2.mlstatic.com/D_NQ_NP_933053-MLA41241337999_032020-V.webp' },
  { id: '4', category:'tablets', name: 'Tablet Samsung Galaxy Tab A7 SM-T500 10.4" 64GB dark gray con 3GB de memoria RAM', description: 'This is the description field', price: '37.999', photo: 'https://http2.mlstatic.com/D_NQ_NP_992019-MLA44207852270_112020-V.webp' },
  { id: '5', category:'computadoras', name: 'Pc Armada Slim Intel Amd Dual Core Hd 1tb 8gb Ram Lol Hdmi', description: 'This is the description field', price: '49.999', photo: 'https://http2.mlstatic.com/D_NQ_NP_991401-MLA31351342525_072019-V.webp' },
]

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products)
  }, 2000);
})
