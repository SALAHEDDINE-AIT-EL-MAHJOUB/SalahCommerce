# SalahCommerce

SalahCommerce is a comprehensive e-commerce web application with a user-friendly interface, product management, authentication system, and shopping cart. The project uses Firebase for authentication, storage, and real-time database.

## 📋 Features

### 🔐 Authentication
- Sign up with email and password
- User login
- Automatic redirection to the products page after login

### 🛍️ Product Management (Client)
- Display of available products
- Adding products to cart
- Cart consultation
- Automatic total calculation

### ⚙️ Administration
- Add new products with:
  - Name
  - Price
  - Description
  - Photo (upload and storage)
- Edit existing products
- Delete products
- View customer carts

## 🔧 Technologies Used
- HTML5 / CSS3
- JavaScript (ES6+)
- Firebase:
  - Authentication
  - Realtime Database
  - Storage

## 📁 Project Structure
```
SalahCommerce/
├── index.html             # Login/signup page
├── products.html          # Product display for customers
├── panier.html            # Cart management
├── admin.html             # Product addition page (administration)
├── admin_products.html    # Existing product management (administration)
├── admin_paniers.html     # Customer cart visualization (administration)
├── modifier_produit.html  # Product modification/deletion
├── css/
│   ├── login.css          # Styles for the login page
│   ├── products.css       # Styles for the product list
│   ├── panier.css         # Styles for the cart page
│   ├── admin_products.css # Styles for product management
│   ├── admin_paniers.css  # Styles for cart visualization
│   └── modifier.css       # Styles for product modification
└── js/
    ├── main.js            # General functions
    └── panier.js          # Cart management
```

## 🚀 Installation and Deployment
1. Clone this repository:
```bash
git clone https://github.com/salaheddineMHJ/SalahCommerce.git
```
2. Open the project in your preferred code editor
3. Firebase Configuration:
   - Create a project in [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication, Realtime Database, and Storage
   - Replace Firebase configuration information in HTML files with your own
4. Deploy the application:
   - You can use Firebase Hosting for easy deployment
   - Or any other static web hosting service

## 🔒 Security
- Authentication verification before accessing protected pages
- Client and server-side data validation
- Protection of administration routes

## 📱 Responsive Design
The application is fully responsive and adapts to different screen sizes, from mobile to desktop.

## 🛠️ Additional Features to Implement
- Payment system
- Order management
- User profile
- Product filters and search
- Order history


## 👨‍💻 Author
- **Salah** -([https://github.com/your-username](https://github.com/salaheddineMHJ))

---
⭐️ If you find this project useful, feel free to give it a star on GitHub! ⭐️
