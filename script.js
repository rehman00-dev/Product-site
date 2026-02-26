const products = [
    // Apple (4 Products)
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "Apple",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop",
        image: "images/iPhone 15 Pro Max.jpg",
        sizes: [
            { size: "256GB", price: 465000 },
            { size: "512GB", price: 495000 },
            { size: "1TB", price: 550000 }
        ]
    },
    {
        id: 2,
        name: "iPhone 15",
        category: "Apple",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
        sizes: [
            { size: "128GB", price: 320000 },
            { size: "256GB", price: 350000 }
        ]
    },
    {
        id: 3,
        name: "iPhone 14",
        category: "Apple",
        image: "images/iPhone 14.jpg",
        sizes: [
            { size: "128GB", price: 280000 },
            { size: "256GB", price: 310000 }
        ]
    },
    {
        id: 4,
        name: "iPhone 13",
        category: "Apple",
        image: "images/iPhone 13.jpg",
        sizes: [
            { size: "128GB", price: 230000 },
            { size: "256GB", price: 260000 }
        ]
    },

    // Samsung (4 Products)
    {
        id: 5,
        name: "Galaxy S24 Ultra",
        category: "Samsung",
        image:"images/Galaxy S24 Ultra.jpg",
        sizes: [
            { size: "256GB", price: 399999 },
            { size: "512GB", price: 435000 }
        ]
    },
    {
        id: 6,
        name: "Galaxy A54 5G",
        category: "Samsung",
        image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=800&auto=format&fit=crop",
        sizes: [
            { size: "128GB", price: 105000 },
            { size: "256GB", price: 115000 }
        ]
    },
    {
        id: 7,
        name: "Galaxy Z Flip 5",
        category: "Samsung",
        image: "images/Galaxy Z Flip 5.jpg",
        sizes: [
            { size: "256GB", price: 320000 },
            { size: "512GB", price: 350000 }
        ]
    },
    {
        id: 8,
        name: "Galaxy S23 FE",
        category: "Samsung",
        image: "images/Galaxy S23 FE.jpg",
        sizes: [
            { size: "128GB", price: 185000 },
            { size: "256GB", price: 205000 }
        ]
    },

    // Xiaomi (4 Products)
    {
        id: 9,
        name: "Redmi Note 13",
        category: "Xiaomi",
        image: "images/Redmi Note 13.jpg",
        sizes: [
            { size: "128GB", price: 55000 },
            { size: "256GB", price: 65000 }
        ]
    },
    {
        id: 10,
        name: "Xiaomi 14",
        category: "Xiaomi",
        image: "images/Xiaomi 14.jpg",
        sizes: [
            { size: "256GB", price: 190000 },
            { size: "512GB", price: 210000 }
        ]
    },
    {
        id: 11,
        name: "POCO X6 Pro",
        category: "Xiaomi",
        image: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=800&auto=format&fit=crop",
        sizes: [
            { size: "256GB", price: 95000 },
            { size: "512GB", price: 105000 }
        ]
    },
    {
        id: 12,
        name: "Redmi 13C",
        category: "Xiaomi",
        image: "images/Redmi 13C.jpg",
        sizes: [
            { size: "128GB", price: 35000 },
            { size: "256GB", price: 40000 }
        ]
    },

    // Vivo (4 Products)
    {
        id: 13,
        name: "Vivo V30",
        category: "Vivo",
        image: "images/Vivo V30.jpg",
        sizes: [
            { size: "128GB", price: 125000 },
            { size: "256GB", price: 135000 }
        ]
    },
    {
        id: 14,
        name: "Vivo Y100",
        category: "Vivo",
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=800&auto=format&fit=crop",
        sizes: [
            { size: "128GB", price: 65000 },
            { size: "256GB", price: 75000 }
        ]
    },
    {
        id: 15,
        name: "Vivo X100",
        category: "Vivo",
        image: "images/Vivo X100.jpeg",
        sizes: [
            { size: "256GB", price: 250000 },
            { size: "512GB", price: 280000 }
        ]
    },
    {
        id: 16,
        name: "Vivo Y17s",
        category: "Vivo",
        image: "images/vivo y17s.jpeg",
        sizes: [
            { size: "64GB", price: 35000 },
            { size: "128GB", price: 40000 }
        ]
    },

    // Realme (4 Products)
    {
        id: 17,
        name: "Realme 12 Pro+",
        category: "Realme",
        image: "images/Realme 12 Pro+.jpeg",
        sizes: [
            { size: "256GB", price: 110000 },
            { size: "512GB", price: 125000 }
        ]
    },
    {
        id: 18,
        name: "Realme C67",
        category: "Realme",
        image: "images/Realme C67.jpeg",
        sizes: [
            { size: "128GB", price: 45000 },
            { size: "256GB", price: 50000 }
        ]
    },
    {
        id: 19,
        name: "Realme Narzo 50",
        category: "Realme",
        image: "images/Realme Narzo 50.jpeg",
        sizes: [
            { size: "64GB", price: 32000 },
            { size: "128GB", price: 38000 }
        ]
    },
    {
        id: 20,
        name: "Realme GT 3",
        category: "Realme",
        image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=800&auto=format&fit=crop",
        sizes: [
            { size: "256GB", price: 140000 },
            { size: "1TB", price: 160000 }
        ]
    },

    // Infinix (4 Products)
    {
        id: 21,
        name: "Infinix Note 40",
        category: "Infinix",
        image: "images/Infinix Note 40.jpeg",
        sizes: [
            { size: "256GB", price: 55000 },
            { size: "512GB", price: 65000 }
        ]
    },
    {
        id: 22,
        name: "Infinix Zero 30",
        category: "Infinix",
        image: "images/Infinix Zero 30.jpeg",
        sizes: [
            { size: "256GB", price: 85000 },
            { size: "512GB", price: 95000 }
        ]
    },
    {
        id: 23,
        name: "Infinix Hot 40",
        category: "Infinix",
        image: "images/Infinix Hot 40.jpeg",
        sizes: [
            { size: "128GB", price: 35000 },
            { size: "256GB", price: 40000 }
        ]
    },
    {
        id: 24,
        name: "Infinix Smart 8",
        category: "Infinix",
        image: "images/Infinix Smart 8.jpeg",
        sizes: [
            { size: "64GB", price: 22000 },
            { size: "128GB", price: 26000 }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');

    // Render Products Function
    function renderProducts(items) {
        productsContainer.innerHTML = items.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <span class="price">Rs. ${product.sizes[0].price.toLocaleString()}</span>
                    <div class="size-selector">
                        <select class="size-select">
                            ${product.sizes.map(s => `<option value="${s.price}">Storage ${s.size}</option>`).join('')}
                        </select>
                    </div>
                    <button class="btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `).join('');
    }

    // Initial Render
    renderProducts(products);

    // Event Delegation for "Add to Cart" buttons
    productsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            alert(`Item added to cart!`);
        }
    });

    // Update Price on Size Change
    productsContainer.addEventListener('change', (e) => {
        if (e.target.classList.contains('size-select')) {
            const newPrice = parseInt(e.target.value);
            const priceElement = e.target.closest('.product-info').querySelector('.price');
            priceElement.textContent = `Rs. ${newPrice.toLocaleString()}`;
        }
    });

    // Filter Toggle Logic
    const filterBtn = document.getElementById('filter-btn');
    const sidebar = document.querySelector('.sidebar');
    
    if (filterBtn && sidebar) {
        let timeout;

        const openSidebar = () => {
            clearTimeout(timeout);
            sidebar.classList.add('active');
        };

        const closeSidebar = () => {
            timeout = setTimeout(() => {
                sidebar.classList.remove('active');
            }, 300);
        };

        filterBtn.addEventListener('mouseenter', openSidebar);
        filterBtn.addEventListener('mouseleave', closeSidebar);
        sidebar.addEventListener('mouseenter', openSidebar);
        sidebar.addEventListener('mouseleave', closeSidebar);
    }

    // Category Filter Logic
    const categoryInputs = document.querySelectorAll('input[name="category"]');
    categoryInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const category = e.target.value;
            if (category === 'All') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });

    // Scroll to Top Logic
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Hide Loader on Window Load
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    }
});