// Variables Globales
const containerParfum = document.getElementById("container-products-sale");

// Funciones
const parfums = [{
        name: 'Hugo Boss',
        brand: 'HB',
        image: './assets/HB_hombre_top_1.jpg',
        description: 'Eau de Parfum Bottled Parfum 50 ml',
        price: 49.95,
    },

    {
        name: 'Dior Sauvage',
        brand: 'DI',
        image: './assets/DI_hombre_top_3.jpg',
        description: 'Eau de Parfum Bottled Parfum 100 ml',
        price: 78.00,
    },

    {
        name: 'D&G King',
        brand: 'DG',
        image: './assets/DG_hombre_top_2.jpg',
        description: 'Eau de Parfum Bottled Parfum 50 ml',
        price: 66.00,
    },

    {
        name: 'Dior Joy',
        brand: 'DI',
        image: './assets/DI_mujer_top_3.jpg',
        description: 'Eau de Parfum Bottled Parfum 100 ml',
        price: 80.60,
    },


    {
        name: 'D&G The One',
        brand: 'DG',
        image: './assets/DG_mujer_top_1.jpg',
        description: 'Eau de Parfum Bottled Parfum 50 ml',
        price: 68.90,
    },

    {
        name: 'Hugo Boss Scent',
        brand: 'HB',
        image: './assets/HB_mujer_top_3.jpg',
        description: 'Eau de Parfum Bottled Parfum 50 ml',
        price: 69.95,
    },

    {
        name: 'D&G Queen',
        brand: 'DG',
        image: './assets/DG_mujer_top_2.jpg',
        description: 'Eau de Parfum Bottled Parfum 30 ml',
        price: 57.00,
    },

    {
        name: 'CH Very Good Girl',
        brand: 'CH',
        image: './assets/CH_mujer_top.jpg',
        description: 'Eau de Parfum Bottled Parfum 50 ml',
        price: 98.95,
    },

    {
        name: 'JP Gaultier Scandal',
        brand: 'JPG',
        image: './assets/JPG_mujer.jpg',
        description: 'Eau de Parfum Bottled Parfum 100 ml',
        price: 67.95,
    },

    {
        name: 'CH 212 VIP Black',
        brand: 'CH',
        image: './assets/CH_hombre_top_3.jpg',
        description: 'Eau de Parfum Bottled Parfum 100 ml',
        price: 62.25,
    },

    {
        name: 'Hugo Boss',
        brand: 'HB',
        image: './assets/HB_hombre_top_2.jpg',
        description: 'Eau de Parfum Bottled Parfum 100 ml',
        price: 64.95,
    },

    {
        name: 'JP Gaultier Scandal',
        brand: 'JPG',
        image: './assets/JPG_hombre.jpg',
        description: 'Eau de Parfum Bottled Parfum 100 ml',
        price: 77.95,
    }
];


const productTemplate = (product) => {
    return ` <article class="products-sale">
          <div class="product-image-hb-h">
            <img class="HB" src="${product.image}" alt="perfume-hombre">
          </div>
          <div class="product-text-description">
            <div class="product-preview-icon">
              <h4>${product.name}</h4>
              <span><i class="fa-sharp fa-regular fa-heart"></i></span>
            </div>
            <div class="product-preview-description">
              <h3>${product.description}</h3>
            </div>
            <div class="product-preview-price">
              <p>${product.price}€</p>
              <span class="material-symbols-outlined">
                shopping_bag
              </span>
            </div>
            <div class="product-preview-star">
              <span><i class="fa-sharp fa-solid fa-star"></i>
              </span>
              <span><i class="fa-sharp fa-solid fa-star"></i>
              </span>
              <span><i class="fa-sharp fa-solid fa-star"></i>
              </span>
              <span><i class="fa-sharp fa-solid fa-star-half-stroke"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
            </div>
          </div>
        </article>`
};



const printParfums = () => {
    for (let i = 0; i < parfums.length; i++) {
        const elementParfum = parfums[i];
        containerParfum.innerHTML += productTemplate(elementParfum);
    }
};



// Inicializador de Aplicacion
printParfums();