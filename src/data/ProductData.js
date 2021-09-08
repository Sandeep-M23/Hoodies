const productData = [
  {
    id: 1,
    productName: "Printed hooded top",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa3%2Fcd%2Fa3cd44943094451ba48848f09f42ac8e5973449d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem",
    Fit: "Regular Fit",
    material:
      "Cotton 60%, Polyester 40% Hood lining: Cotton 60%, Polyester 40%",
    price: 1599,
    quantity:1,
  },
  {
    id: 2,
    productName: "Block-coloured hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F90%2Fda%2F90dadc016a7db5d49dd9db95b453ba6a87c7d9bb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in sweatshirt fabric made from a cotton blend. Lined, drawstring hood, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Large Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 1799,
    quantity:1,
  },
  {
    id: 3,
    productName: "Relaxed Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F65%2Fe9%2F65e9a8edfb3df05bb9626af1ce514bd54087a645.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Relaxed Fit",
    material:
      "Polyester 60%, Cotton 40% Hood lining: Polyester 60%, Cotton 40%",
    price: 2199,
    quantity:1,
  },
  {
    id: 4,
    productName: "Relaxed Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2b%2F04%2F2b041d88616c03b5d08e2a941af4d0a8e4756b46.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Relaxed Fit",
    material:
      "Polyester 60%, Cotton 40% Hood lining: Polyester 60%, Cotton 40%",
    price: 1699,
    quantity:1
  },
  {
    id: 5,
    productName: "Printed hooded top",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F35%2F96%2F35969bbeb0052607e7e056958de4c981c6299f91.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Top in printed sweatshirt fabric with a jersey-lined, drawstring hood with a wrapover front. Long sleeves, a kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Large Fit",
    material:
      "Polyester 60%, Cotton 40% Hood lining: Polyester 60%, Cotton 40%",
    price: 1999,
    quantity:1
  },
  {
    id: 6,
    productName: "Regular Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1f%2F12%2F1f12a29493cf7c4950b1691b4df4d5cdc22780ed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem.",
    Fit: "Regular Fit",
    material:
      "Cotton 55%, Polyester 40%, Elastane 5%Shell: Cotton 58%, Polyester 42%",
    price: 1999,
    quantity:1
  },
  {
    id: 7,
    productName: "Hooded top Regular Fit",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F4b%2Fff4b22bd9652c1be7d777d24cf8cc212dcb5419d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Top in cotton sweatshirt fabric with a lined drawstring hood with a wrapover front. Long sleeves, a kangaroo pocket and ribbing at the cuffs and hem.",
    Fit: "Regular Fit",
    material: "Cotton 100%",
    price: 2199,
    quantity:1
  },
  {
    id: 8,
    productName: "Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcd%2Fc4%2Fcdc48a79eeae248fb50669902aa948369b33adf6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    productDetails:
      "Long-sleeved hoodie in sweatshirt fabric with a jersey-lined, drawstring hood, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Regular Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 2299,
    quantity:1
  },
  {
    id: 9,
    productName: "Hoodie with grosgrain",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb2%2F13%2Fb213e4d204df309b4fc842eeab723f2ab5dbb9c5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    productDetails:
      "Top in sweatshirt fabric with a lined drawstring hood and long raglan sleeves with grosgrain trims down the sides. Kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Regular Fit",
    material: "Cotton 60%, Polyester 40",
    price: 1899,
    quantity:1
  },
  {
    id: 10,
    productName: "Regular Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F79%2F4a%2F794ab66ca017668182f2a107e6519c442a8211a5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem.",
    Fit: "Regular Fit",
    material:
      "Hood lining: Cotton 60%, Polyester 40% Shell: Cotton 60%, Polyester 40%Art.",
    price: 1999,
    quantity:1
  },
  {
    id: 11,
    productName: "Regular Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa3%2Fcd%2Fa3cd44943094451ba48848f09f42ac8e5973449d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem.",
    Fit: "Relaxed Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 1999,
    quantity:1
  },
  {
    id: 12,
    productName: "Hooded top with a motif",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F61%2F97%2F619719e113cdf6e0217a316d18b4f6881cc0e4db.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Top in sweatshirt fabric with a motif, a double-layered drawstring hood, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Medium Fit",
    material: "Cotton 57%, Polyester 43%",
    price: 2499,
    quantity:1
  },
  {
    id: 13,
    productName: "Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F97%2F0a%2F970ad00b18f8c70b57ba57c8aa589a542f8aded9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in sweatshirt fabric with a jersey-lined, drawstring hood, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Medium Fit",
    material:
      "Cotton 60%, Polyester 40% Elastic rib: Cotton 55%, Polyester 40%,",
    price: 2199,
    quantity:1
  },
  {
    id: 14,
    productName: "Block-coloured hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa2%2Fb1%2Fa2b17fdfd7a44fb5960c6499ff45925d6681f1d0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in sweatshirt fabric made from a cotton blend with a text print on the chest. Double-layered, drawstring hood, gently dropped shoulders, a kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Medium Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 1999,
    quantity:1
  },
  {
    id: 15,
    productName: "Relaxed Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2e%2F0a%2F2e0a993853cc08edacfb45786a04aa0f38dc2f42.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Medium Fit",
    material:
      "Hood lining: Polyester 60%, Cotton 40%Shell: Cotton 75%, Polyester 23%, Viscose 2%",
    price: 2499,
    quantity:1
  },
  {
    id: 16,
    productName: "Printed hooded top",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F77%2F2a%2F772a83d0162cf971d7b794afc6fd4ea1663de694.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Top in printed sweatshirt fabric with a jersey-lined, drawstring hood with a wrapover front. Long sleeves, a kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Medium Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 2499,
    quantity:1
  },
  {
    id: 17,
    productName: "Regular Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7c%2F07%2F7c07722a74c2c108a90b66cb86d5d954fe302d90.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem.",
    Fit: "Medium Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 1899,
    quantity:1
  },
  {
    id: 18,
    productName: "Cotton Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F90%2Fbe%2F90be3d60b4c72495d2326397668e6429d0ebcd3f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Blank Staples is a streetwear collection of minimalistic pieces that are the perfect canvas for your personal style and creativity. This cosy hoodie is made from heavy, 460 gsm cotton sweatshirt fabric for a premium handfeel. In a straight cut and overFitd for a relaxed fit, it has a double-layered, drawstring hood, kangaroo pocket, low dropped shoulders, long sleeves and ribbing at the cuffs and hem.",
    Fit: "Relaxed Fit",
    material: "Cotton 100%",
    price: 1599,
    quantity:1
  },
  {
    id: 19,
    productName: "Relaxed Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F04%2Ffe%2F04fedb18c31f1ddd7fbd6968481d2211978cabc9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Medium Fit",
    material: "Polyester 60%, Cotton 40%Hood lining: Polyester 60%, Cotton 40%",
    price: 1699,
    quantity:1
  },
  {
    id: 20,
    productName: "Sleeve panel hoodie ",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2Fe3%2F62e31dd7ad816fe2c01f8022dc0f4d3fc9df37ab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in sweatshirt fabric made from a cotton and recycled polyester blend. Double-layered, drawstring hood, a kangaroo pocket, long sleeves with nylon panels, and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Medium Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 1799,
    quantity:1
  },
  {
    id: 21,
    productName: "Regular Fit Yoga hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F5e%2Fff5ec425d03eb1ca0bc8d31b1c2f35436c0639c2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Yoga hoodie in fast-drying functional fabric designed to help keep you dry and cool while exercising with four-way stretch for maximum comfort and added mobility. Mesh-lined, wrapover hood and discreet pockets in the side seams. Long sleeves in a raglan cut to minimise the risk of friction from the seams and with an elasticated panel at the cuffs.",
    Fit: "Large Fit",
    material: "Polyester 92%, Elastane 8% Hood lining: Polyester 100%",
    price: 1799,
    quantity:1
  },
  {
    id: 22,
    productName: "Sports top Regular Fit",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6f%2F36%2F6f36d522e50554409ea8f95b0337102032226cc6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_sport_tops%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "ConsciousNew Arrival Sports top in heavy jersey with taped details. Mesh-lined drawstring hood, short sleeves with ventilation holes under the arms, a kangaroo pocket, and slits in the sides. Longer at the back.",
    Fit: "Large Fit",
    material: "Cotton 58%, Polyester 42% Lining: Polyester 100%",
    price: 1899,
    quantity:1
  },
  {
    id: 23,
    productName: "Regular Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff7%2Fbc%2Ff7bcd3acc64db03efe15db4e0694c13f518a9a9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem.",
    Fit: "Large Fit",
    material: "Cotton 58%, Polyester 42% Lining: Polyester 100%",
    price: 1799,
    quantity:1
  },
  {
    id: 24,
    productName: "Cotton hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdf%2F54%2Fdf54135d42f4f559e098e025b928717baec16347.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    productDetails:
      "Blank Staples is a streetwear collection of minimalistic pieces that are the perfect canvas for your personal style and creativity. This cosy hoodie is made from heavy, 460 gsm cotton sweatshirt fabric for a premium handfeel. In a straight cut and overFitd for a relaxed fit, it has a double-layered, drawstring hood, kangaroo pocket, low dropped shoulders, long sleeves and ribbing at the cuffs and hem.",
    Fit: "Relaxed Fit",
    material: "Cotton 100%",
    price: 1999,
    quantity:1
  },
  {
    id: 25,
    productName: "Printed hooded top",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3b%2F40%2F3b40cfbdf3d4061491a697bdead3ac6a1502fc9c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Top in printed sweatshirt fabric with a jersey-lined, drawstring hood with a wrapover front. Long sleeves, a kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Regular Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 1999,
    quantity:1
  },
  {
    id: 26,
    productName: "Printed hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F63%2F94%2F63944f926aa74c7c109098a3771ce6a175ed04e7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in soft, printed sweatshirt fabric. Double-layered drawstring hood, long sleeves, a kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Regular Fit",
    material: "Cotton 58%, Polyester 42%Elastic rib: Cotton 95%, Elastane 5%",
    price: 2599,
    quantity:1
  },
  {
    id: 27,
    productName: "Regular Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa7%2F67%2Fa7672e6c49175cfe5e2d1bf62d6f25085df05955.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem.",
    Fit: "Regular Fit",
    material: "Cotton 60%, Polyester 40%Hood lining: Cotton 60%, Polyester 40%",
    price: 2199,
    quantity:1
  },
  {
    id: 28,
    productName: "Relaxed Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F09%2F03%2F09032c68f55890c4f163c0dd53fe487e79c146fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    productDetails:
      "Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Relaxed Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 1799,
    quantity:1
  },
  {
    id: 29,
    productName: "Sleeve panel hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2F8b%2Fc28b4689a5166fe167d2af9aba5b08bbd59e70b6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in sweatshirt fabric made from a cotton and recycled polyester blend. Double-layered, drawstring hood, a kangaroo pocket, long sleeves with nylon panels, and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Large Fit",
    material: "Cotton 60%, Polyester 40",
    price: 2399,
    quantity:1
  },
  {
    id: 30,
    productName: "Printed hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fab%2F27%2Fab2797ede920c395fb127d6b492072d252377d17.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in soft sweatshirt fabric with a print motif. Double-layered, drawstring hood with a wrapover front, a kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Medium Fit",
    material:
      "Cotton 60%, Polyester 40% Hood lining: Cotton 60%, Polyester 40%",
    price: 1599,
    quantity:1
  },
  {
    id: 31,
    productName: "Printed hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fab%2F44%2Fab447a21f9af8dcc12228be9c3cd62b04cfeeb58.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Edition by Héctor Bellerín. An uncompromising collection made from more sustainable materials developed together with football player and environmental activist, Héctor Bellerín. This top in 400 gsm sweatshirt fabric is made from an organic cotton and recycled cotton blend. In a relaxed fit, it has a lined hood with a wrapover front, dropped shoulders and long sleeves. Print motif on the chest and back, a kangaroo pocket, wide ribbing at the cuffs and hem and a ribbed panel at each side. Soft brushed inside.",
    Fit: "Relaxed Fit",
    material:
      "Elastic rib: Cotton 95%, Elastane 5% Shell: Cotton 100% More sustainable materialsOrganic cotton 70% Recycled cotton 30%",
    price: 1999,
    quantity:1
  },
  {
    id: 32,
    productName: "Regular Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5f%2F02%2F5f02ca11f9e13a4b357cebf09dc8434f802777b4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem.",
    Fit: "Medium Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 2199,
    quantity:1
  },
  {
    id: 33,
    productName: "Printed hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcc%2Fab%2Fccab3624e41c641aecef16240772197760725f00.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in soft, printed sweatshirt fabric. Double-layered drawstring hood, long sleeves, a kangaroo pocket and ribbing at the cuffs and hem. ",
    Fit: "Regular Fit",
    material: "Cotton 60%, Polyester 40%",
    price: 1899,
    quantity:1
  },
  {
    id: 34,
    productName: "Sports hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdf%2F4c%2Fdf4c9d75183a44b343689e3fae8111c20dfd508d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "	Sleeveless hoodie in jersey made from a cotton blend designed for both indoor and outdoor activities. Mesh-lined, drawstring hood, a raglan cut for definition at the chest and shoulders, and a rounded hem.",
    Fit: "Relaxed Fit",
    material:
      "Cotton 64%, Polyester 31%, Elastane 5%Hood lining: Polyester 100%",
    price: 1799,
    quantity:1
  },
  {
    id: 35,
    productName: "Hooded top Regular Fit",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd0%2Fc2%2Fd0c2cd9c0713d7c92f989bce0872cba5e02270ab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Top in cotton sweatshirt fabric with a lined drawstring hood with a wrapover front. Long sleeves, a kangaroo pocket and ribbing at the cuffs and hem.",
    Fit: "Regular Fit",
    material: "Cotton 100%",
    price: 2199,
    quantity:1
  },
  {
    id: 36,
    productName: "Relaxed Fit Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fac%2Fd9%2Facd99c31c63548c29ecad0463564a451dbe389bc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Relaxed fit",
    material:
      "Hood lining: Polyester 60%, Cotton 40% Shell: Polyester 60%, Cotton 40%",
    price: 1699,
    quantity:1
  },
  {
    id: 37,
    productName: "Hoodie",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2Fb0%2Fb6b0661a557b4d887ed30ca6d60c2e7ea9de4598.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    productDetails:
      "Hoodie in soft sweatshirt fabric with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Medium Fit",
    material: "Cotton 88%, Polyester 12%",
    price: 1999,
    quantity:1
  },
  {
    id: 38,
    productName: "Hooded top Regular Fit",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1a%2Fda%2F1ada1a0ef0852b7be60295069c20d9c66b5fc500.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    productDetails:
      "Top in cotton sweatshirt fabric with a lined drawstring hood with a wrapover front. Long sleeves, a kangaroo pocket and ribbing at the cuffs and hem.",
    Fit: "Regular Fit",
    material: "Cotton 100",
    price: 2399,
    quantity:1
  },
  {
    id: 39,
    productName: "Printed hooded top",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe9%2Fc4%2Fe9c4369d6dc2af9d976b68ee91db70dcde8d5ffd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    productDetails:
      "Top in printed sweatshirt fabric with a jersey-lined, drawstring hood with a wrapover front. Long sleeves, a kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
    Fit: "Regular Fit",
    material:
      "Shell: Cotton 60%, Polyester 40%Hood lining: Cotton 60%, Polyester 40%",
    price: 2399,
    quantity:1
  },
  {
    id: 40,
    productName: "Printed hooded top",
    productImage:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2d%2Fa8%2F2da8c58cd01af1f21ff9bbddc0a54c38686e260d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_sweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    productDetails:
      "Long-sleeved top in sweatshirt fabric with a print motif on the front, lined drawstring hood, kangaroo pocket and ribbing at the cuffs and hem. Brushed inside.",
    Fit: "Regular Fit",
    material: "nHood lining: Cotton 100%Cotton 60%, Polyester 40",
    price: 1999,
    quantity:1
  },
];

export default productData;
