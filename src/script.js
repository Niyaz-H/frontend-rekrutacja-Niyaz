const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is the first product.',
        price: 10.00,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This is the second product.',
        price: 20.00,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'This is the third product.',
        price: 30.00,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'This is the fourth product.',
        price: 40.00,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'This is the fifth product.',
        price: 50.00,
        image: 'https://via.placeholder.com/150'
    }
];

const productListContainer = document.getElementById('product-list-container');
const productDetailsContainer = document.getElementById('product-details-container');
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');

function renderProductList() {
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'border p-4 cursor-pointer';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover mb-4">
            <h2 class="text-lg font-bold">${product.name}</h2>
            <p class="text-gray-500">$${product.price.toFixed(2)}</p>
        `;
        productCard.addEventListener('click', () => renderProductDetails(product.id));
        productList.appendChild(productCard);
    });
}

function renderProductDetails(productId) {
    const product = products.find(p => p.id === productId);

    productDetails.innerHTML = `
        <button id="back-button" class="mb-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Back to list</button>
        <div class="border p-4">
            <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover mb-4">
            <h2 class="text-2xl font-bold">${product.name}</h2>
            <p class="text-gray-700 mb-4">${product.description}</p>
            <p class="text-lg font-bold">$${product.price.toFixed(2)}</p>
        </div>
    `;

    productListContainer.classList.add('hidden');
    productDetailsContainer.classList.remove('hidden');

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        productListContainer.classList.remove('hidden');
        productDetailsContainer.classList.add('hidden');
    });
}

renderProductList();