const products = [
    {
      name: "Áo thun nam",
      price: "200.000",
      old:"300.000",
      sales: 120,
      likes: 150,
      image: "img/ao-thun-nam.jpg",
      category: "Thời trang nam",
      description: "Áo thun nam chất liệu cotton, thoải mái cho ngày hè."
    },
    {
      name: "Áo sơ mi nữ",
      price: "350.000",
      old:"375.000",
      sales: 85,
      likes: 200,
      image: "img/ao-so-mi-nu.jpg",
      category: "Thời trang nữ",
      description: "Áo sơ mi nữ công sở thanh lịch, chất liệu lụa mềm mại."
    },
    {
      name: "Quần jean nam",
      price: "400.000",
      old:"420.000",
      sales: 60,
      likes: 120,
      image: "img/quan-jean-nam.jpg",
      category: "Thời trang nam",
      description: "Quần jean nam chất liệu denim, co giãn thoải mái."
    },
    {
      name: "Váy đầm dạ hội",
      price: "1.500.000",
      old: "1.683.000",
      sales: 45,
      likes: 180,
      image: "img/vay-dam-da-hoi.jpg",
      category: "Thời trang nữ",
      description: "Váy đầm dạ hội sang trọng, chất liệu vải cao cấp."
    },
    {
      name: "Giày thể thao nam",
      price: "800.000",
      old: "1.200.000",
      sales: 95,
      likes: 220,
      image: "img/giay-the-thao-nam.jpg",
      category: "Giày dép nam",
      description: "Giày thể thao nam, đế cao su chống trơn trượt."
    },]

// Lưu trữ products lên LS
localStorage.setItem("products", JSON.stringify(products));