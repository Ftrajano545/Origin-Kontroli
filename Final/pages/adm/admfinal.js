// PRODUTOS
let products = [
    // {
    //     id: '1',
    //     name: 'Miojo',
    //     code: 'MGP1',
    //     category: 'Alimentação',
    //     quantity: 15,
    //     minStock: 5,
    //     price: 2.00,
    //     description: 'Miojo Galinha Gaipira Nissin Lamen',
    //     createdAt: new Date('2025-08-15'),
    //     updatedAt: new Date('2025-08-15')
    // },
    // {
    //     id: '2',
    //     name: 'Café Baggio',
    //     code: 'CB01',
    //     category: 'Alimentação',
    //     quantity: 3,
    //     minStock: 10,
    //     price: 29.90,
    //     description: 'Café Chocolate Trufado',
    //     createdAt: new Date('2025-08-15'),
    //     updatedAt: new Date('2025-08-15')
    // },
    // {
    //     id: '3',
    //     name: 'Coca Cola',
    //     code: 'COCA01',
    //     category: 'Alimentação',
    //     quantity: 8,
    //     minStock: 5,
    //     price: 6.99,
    //     description: 'Coca Cola Zero Açúcar',
    //     createdAt: new Date('2025-08-15'),
    //     updatedAt: new Date('2025-08-15')
    // },
    //     {
    //     id: '4',
    //     name: 'Vodka',
    //     code: 'VODKA01',
    //     category: 'Alcoólicos',
    //     quantity: 4,
    //     minStock: 12,
    //     price: 66.99,
    //     description: 'Vodka Grey Goose',
    //     createdAt: new Date('2025-08-15'),
    //     updatedAt: new Date('2025-08-15')
    // }
    // ,
    //     {
    //     id: '5',
    //     name: 'Vodka2',
    //     code: 'VODKA02',
    //     category: 'Alcoólicos',
    //     quantity: 4,
    //     minStock: 12,
    //     price: 66.99,
    //     description: 'Vodka Grey Goose',
    //     createdAt: new Date('2025-08-15'),
    //     updatedAt: new Date('2025-08-15')
    // }
];






let searchTerm = '';
let selectedCategory = 'all';
let editingProductId = null;

// TEMA
function initTheme() {
    const savedTheme = localStorage.getItem('kontroli-theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme === 'auto' ? (prefersDark ? 'dark' : 'light') : savedTheme;

    setTheme(theme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeToggle(theme);
    localStorage.setItem('kontroli-theme', theme);
}

function updateThemeToggle(theme) {
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const themeStatus = document.getElementById('themeStatus');

    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun theme-toggle-icon';
        themeText.textContent = 'Modo Claro';
        themeStatus.textContent = 'Modo Escuro';
    } else {
        themeIcon.className = 'fas fa-moon theme-toggle-icon';
        themeText.textContent = 'Modo Escuro';
        themeStatus.textContent = 'Modo Claro';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Utility Functions
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function getStockStatus(quantity, minStock) {
    if (quantity === 0) {
        return { label: 'Sem estoque', class: 'out-of-stock' };
    } else if (quantity <= minStock) {
        return { label: 'Estoque baixo', class: 'low-stock' };
    } else {
        return { label: 'Em estoque', class: 'in-stock' };
    }
}

function generateId() {
    return Date.now().toString();
}

// Toast Function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toast.className = `toast ${type}`;
    toastMessage.textContent = message;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Stats Calculations
function calculateStats() {
    const totalProducts = products.length;
    const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
    const lowStockItems = products.filter(product => product.quantity <= product.minStock).length;
    const totalValue = products.reduce((sum, product) => sum + (product.quantity * product.price), 0);

    return { totalProducts, totalItems, lowStockItems, totalValue };
}

// Filter Functions
function getFilteredProducts() {
    return products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.code.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
}

function getLowStockProducts() {
    return products.filter(product => product.quantity <= product.minStock);
}

function getCategories() {
    return [...new Set(products.map(product => product.category))];
}

// UI Update Functions
function updateStats() {
    const stats = calculateStats();

    document.getElementById('totalProducts').textContent = stats.totalProducts;
    document.getElementById('totalItems').textContent = stats.totalItems;
    document.getElementById('lowStockCount').textContent = stats.lowStockItems;
    document.getElementById('totalValue').textContent = formatCurrency(stats.totalValue);
}

function updateLowStockAlert() {
    const lowStockProducts = getLowStockProducts();
    const alert = document.getElementById('lowStockAlert');
    const alertContent = document.getElementById('alertContent');
    const alertBadges = document.getElementById('alertBadges');

    if (lowStockProducts.length > 0) {
        alertContent.textContent = `${lowStockProducts.length} produto(s) com estoque baixo precisam de atenção:`;

        alertBadges.innerHTML = '';
        lowStockProducts.slice(0, 5).forEach(product => {
            const badge = document.createElement('span');
            badge.className = 'alert-badge';
            badge.textContent = `${product.name} (${product.quantity} restantes)`;
            alertBadges.appendChild(badge);
        });

        if (lowStockProducts.length > 5) {
            const badge = document.createElement('span');
            badge.className = 'alert-badge';
            badge.textContent = `+${lowStockProducts.length - 5} mais`;
            alertBadges.appendChild(badge);
        }

        alert.style.display = 'block';
    } else {
        alert.style.display = 'none';
    }
}

function updateCategoryFilter() {
    const categories = getCategories();
    const select = document.getElementById('categoryFilter');

    // Clear existing options except "All"
    while (select.children.length > 1) {
        select.removeChild(select.lastChild);
    }

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
}

function updateProductsTable() {
    const filteredProducts = getFilteredProducts();
    const tbody = document.getElementById('productsTableBody');
    const emptyState = document.getElementById('emptyState');
    const productsContainer = document.getElementById('productsContainer');

    if (filteredProducts.length === 0) {
        productsContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    productsContainer.style.display = 'block';
    emptyState.style.display = 'none';

    tbody.innerHTML = '';

    filteredProducts.forEach(product => {
        const status = getStockStatus(product.quantity, product.minStock);

        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>
                        <div class="product-name">${product.name}</div>
                        ${product.description ? `<div class="product-description">${product.description}</div>` : ''}
                    </td>
                    <td>
                        <span class="product-code">${product.code}</span>
                    </td>
                    <td>
                        <span class="category-badge">${product.category}</span>
                    </td>
                    <td style="text-align: center;">${product.quantity}</td>
                    <td style="text-align: center;">${product.minStock}</td>
                    <td style="text-align: right;">${formatCurrency(product.price)}</td>
                    <td style="text-align: center;">
                        <span class="status-badge ${status.class}">${status.label}</span>
                    </td>
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-ghost btn-sm" onclick="toggleDropdown(event, '${product.id}')">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                            <div class="dropdown-menu" id="dropdown-${product.id}">
                                <button class="dropdown-item" onclick="editProduct('${product.id}')">
                                    <i class="fas fa-edit"></i>
                                    Editar
                                </button>
                                <button class="dropdown-item danger" onclick="deleteProduct('${product.id}')">
                                    <i class="fas fa-trash"></i>
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </td>
                `;
        tbody.appendChild(row);
    });
}

function updateAll() {
    updateStats();
    updateLowStockAlert();
    updateCategoryFilter();
    updateProductsTable();
}

// Product CRUD Operations
function addProduct(productData) {
    const newProduct = {
        ...productData,
        id: generateId(),
        createdAt: new Date(),
        updatedAt: new Date()
    };
    products.push(newProduct);
    updateAll();
    showToast('Produto adicionado com sucesso!');
}

function updateProduct(id, productData) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = {
            ...products[index],
            ...productData,
            updatedAt: new Date()
        };
        updateAll();
        showToast('Produto atualizado com sucesso!');
    }
}

function removeProduct(id) {
    products = products.filter(product => product.id !== id);
    updateAll();
    showToast('Produto excluído com sucesso!');
}

// Modal Functions
function openModal(productId = null) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const saveBtn = document.getElementById('saveBtn');

    editingProductId = productId;

    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            modalTitle.textContent = 'Editar Produto';
            saveBtn.textContent = 'Salvar Alterações';

            document.getElementById('productName').value = product.name;
            document.getElementById('productCode').value = product.code;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productQuantity').value = product.quantity;
            document.getElementById('productMinStock').value = product.minStock;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productDescription').value = product.description || '';
        }
    } else {
        modalTitle.textContent = 'Adicionar Novo Produto';
        saveBtn.textContent = 'Adicionar Produto';
        document.getElementById('productForm').reset();
    }

    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    editingProductId = null;
}

function openConfirmModal(productId, productName) {
    const modal = document.getElementById('confirmModal');
    const message = document.getElementById('confirmMessage');
    const confirmBtn = document.getElementById('confirmDelete');

    message.textContent = `Tem certeza que deseja excluir o produto "${productName}"? Esta ação não pode ser desfeita.`;

    confirmBtn.onclick = () => {
        removeProduct(productId);
        closeConfirmModal();
        closeAllDropdowns();
    };

    modal.classList.add('active');
}

function closeConfirmModal() {
    const modal = document.getElementById('confirmModal');
    modal.classList.remove('active');
}

// Dropdown Functions
function toggleDropdown(event, productId) {
    event.stopPropagation();
    closeAllDropdowns();
    const dropdown = document.getElementById(`dropdown-${productId}`);
    dropdown.classList.add('active');
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
}

// Event Handlers
function editProduct(productId) {
    openModal(productId);
    closeAllDropdowns();
}

function deleteProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        openConfirmModal(productId, product.name);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Initialize theme
    initTheme();

    // Initial render
    updateAll();

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Search input
    document.getElementById('searchInput').addEventListener('input', function (e) {
        searchTerm = e.target.value;
        updateProductsTable();
    });

    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', function (e) {
        selectedCategory = e.target.value;
        updateProductsTable();
    });

    // Add product button
    document.getElementById('addProductBtn').addEventListener('click', () => openModal());

    // Modal form submit
    document.getElementById('productForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('productName').value,
            code: document.getElementById('productCode').value,
            category: document.getElementById('productCategory').value,
            quantity: parseInt(document.getElementById('productQuantity').value) || 0,
            minStock: parseInt(document.getElementById('productMinStock').value) || 0,
            price: parseFloat(document.getElementById('productPrice').value) || 0,
            description: document.getElementById('productDescription').value
        };

        if (editingProductId) {
            updateProduct(editingProductId, formData);
        } else {
            addProduct(formData);
        }

        closeModal();
    });

    // Modal close buttons
    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    document.getElementById('confirmCancel').addEventListener('click', closeConfirmModal);

    // Close modals when clicking outside
    document.getElementById('productModal').addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });

    document.getElementById('confirmModal').addEventListener('click', function (e) {
        if (e.target === this) closeConfirmModal();
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', closeAllDropdowns);

    // Prevent dropdown close when clicking inside
    document.addEventListener('click', function (e) {
        if (e.target.closest('.dropdown-menu')) {
            e.stopPropagation();
        }
    });
});
