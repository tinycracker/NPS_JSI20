const products = [
  {
    name: "Áo thun nam",
    price: "200.000",
    old: "300.000",
    sales: 120,
    likes: 150,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luukltfqe0ia64",
    category: "Thời trang nam",
    description: "Áo thun nam chất liệu cotton, thoải mái cho ngày hè."
  },
  {
    name: "Áo sơ mi nữ",
    price: "350.000",
    old: "375.000",
    sales: 85,
    likes: 200,
    image: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lld97g1qzhyuc3",
    category: "Thời trang nữ",
    description: "Áo sơ mi nữ công sở thanh lịch, chất liệu lụa mềm mại."
  },
  {
    name: "Quần jean nam",
    price: "400.000",
    old: "420.000",
    sales: 60,
    likes: 120,
    image: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/February2024/copperstraightdenim10.jpg",
    category: "Thời trang nam",
    description: "Quần jean nam chất liệu denim, co giãn thoải mái."
  },
  {
    name: "Váy đầm dạ hội",
    price: "1.500.000",
    old: "1.683.000",
    sales: 45,
    likes: 180,
    image: "https://vi.lunss.com/uploads/product/1/Y/1Y122/beaded-low-back-sleeveless-black-velvet-formal-gown-4.webp",
    category: "Thời trang nữ",
    description: "Váy đầm dạ hội sang trọng, chất liệu vải cao cấp."
  },
  {
    name: "Giày thể thao",
    price: "800.000",
    old: "1.200.000",
    sales: 95,
    likes: 220,
    image: "https://sigiaysneaker.com/wp-content/uploads/2020/07/z1974358686446_aff3f27fe03f4e3cfc1d86bff1b63940.jpg",
    category: "Giày dép nam",
    description: "Giày thể thao nam, đế cao su chống trơn trượt."
  },]

// Lưu trữ products lên LS
localStorage.setItem("products", JSON.stringify(products));


const product = [
  {
    img: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lw44epqgil76bc',
    nam: 'Túi xách nữ',
    sales: 1500
  },
  {
    img: 'https://down-vn.img.susercontent.com/file/5d2ac0f99b65527a04aae669802b16a0',
    nam: 'Tai nghe',
    sales: 20000
  },
  {
    img: 'https://down-vn.img.susercontent.com/file/262495fa2f869ac69654e85a34d99a1c',
    nam: 'Balo',
    sales: 3000
  },
  {
    img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rcd9-lsci3ngx15fy27',
    nam: 'Vòng tay Mori',
    sales: 1200
  },
  {
    img: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-5jgnrjl9o2iv27',
    nam: 'Bìa đựng tài liệu',
    sales: 25000
  },
  {
    img: 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-9w8dbwqwt3jv87',
    nam: 'Bình đựng nước',
    sales: 1800
  },
  {
    img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvu4ehjnf6qh5f',
    nam: 'Set quần áo ST42',
    sales: 9000
  },
  {
    img: 'https://down-vn.img.susercontent.com/file/cn-11134211-7r98o-lufucxj6b8ao54',
    nam: 'Dép đế mềm',
    sales: 600
  },
];


localStorage.setItem("product", JSON.stringify(product));










const pro = [
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvr811dpuevub8',
    na: 'Túi sách đeo chéo',
    pri: 58000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lw2n1w3kmtro8a',
    na: 'Giày thể thao Dior',
    pri: 325000,
    stars: 5
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvrdc1h3bgxl89',
    na: 'Sticker Capybara',
    pri: 7000,
    stars: 3
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll1x2qg15mfx6e',
    na: 'Set chăm sóc tay',
    pri: 37000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lw44ffgcvn7c1b',
    na: 'Túi đeo chéo',
    pri: 218000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lop6lhrjsq5o23',
    na: 'Thỏ cotton',
    pri: 32000,
    stars: 5
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljuzcpz2dpysd1',
    na: 'Bàn chải đánh răng',
    pri: 72000,
    stars: 3
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/586acb91cf98fd0f9d7dc0874ab61843',
    na: 'Nước hoa body',
    pri: 25000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/sg-11134201-7r98o-lksdmiemookudd',
    na: 'Kính mát phân cực',
    pri: 50000,
    stars: 5
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-0hwymf7hmfmve1',
    na: 'Gấu bông thỏ suy',
    pri: 120000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmn-lql1etb4qvvi7c',
    na: 'Túi Tote Canvas',
    pri: 60000,
    star: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luwa0x8xpd76c2https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luwa0x8xpd76c2',
    na: 'Lược chải tóc',
    pri: 25000,
    star: 5
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-luin3syf0eu627',
    na: 'Quạt để bàn',
    pri: 75000,
    stars: 3
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loyahuh5f8su87',
    na: 'Đèn ngủ 3D',
    pri: 65000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprzprgtub4i2d',
    na: 'Đèn ngủ để bàn',
    pri: 138000,
    stars: 5
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-656727cy76nv2d',
    na: 'Bộ Polo Beer Club',
    pri: 155000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-dq7v0dakn8mvd4',
    na: 'Đồ thể thao nam',
    pri: 190000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/24658b122f31c828c384b277599a29d9',
    na: 'Giày đế bệt',
    pri: 78000,
    stars: 5
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-leyc26wz52zbc5',
    na: 'Áo Polo Unisex',
    pri: 238000,
    stars: 3
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-y9tmo1otk7kvee',
    na: 'Bình giữ nhiệt',
    pri: 121000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnl5fg1zewh982',
    na: 'Áo thun rộng',
    pri: 75000,
    stars: 5
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lmztqwow71eh6b',
    na: 'Son môi gecomo',
    pri: 48000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-chh99larn2mvb5',
    na: 'Bộ thun cho nữ',
    pri: 218000,
    stars: 4
  },
  {
    im: 'https://down-vn.img.susercontent.com/file/vn-11134207-23030-f2n7pwlppvov56',
    na: 'Móc khóa len',
    pri: 70000,
    stars: 5
  }
];



localStorage.setItem("pro", JSON.stringify(pro));