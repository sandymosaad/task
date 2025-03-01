# Frontend Developer Evaluation Task

## Project Overview

This project is a responsive, single-page application built with Angular that displays a list of products along with their details. The application allows users to view products, filter them by category, and add/remove items from the shopping cart. The design ensures a clean and modern look with responsiveness across different screen sizes.

## Features

### 1. Product Listing Page

- Displays products in a grid layout.
- Each product includes:
  - Image
  - Name
  - Price
  - Add to Cart Button
- Hover effect applied to highlight product cards.

### 2. Angular Implementation

- Uses an Angular service to store and manage product data.
- Implements category filtering for easy navigation.
- Updates a cart summary dynamically to show:
  - Number of items in the cart
  - Total price
- Utilizes Angular components, services, and directives for a modular structure.

### 3. Additional Feature

- Product Detail Modal: Clicking on a product opens a modal with more details.
- Cart Management: Users can remove items directly from the cart summary.

## Setup Instructions

### 1. Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Angular CLI](https://angular.io/cli)
- Package Manager (npm)

### 2. Clone the Repository

git clone <repository-url>
cd ProductListing

### 3. Install Dependencies

npm install

### 4. Run the Development Server

ng serve

- The application will be available at `http://localhost:4200/`

### 5. Build for Production

ng build --prod

- The production-ready files will be in the `dist/` folder.

## Project Structure

```
frontend-evaluation-task/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cart-summary/        # Cart summary component
│   │   │   ├── header/              # Header component
│   │   │   ├── search/              # Search component
│   │   │   ├── remove-from-cart/    # Remove from cart component
│   │   │   ├── product-list/        # Product list component
│   │   │   ├── product-details/     # Product details component
│   │   ├── services/
│   │   │   ├── product.service.ts   # Service for handling product data
│   │   │   ├── cart.service.ts      # Service for managing cart operations
│   │   ├── models/
│   │   │   ├── product.ts           # TypeScript Interface for Product
│   │   ├
│___public/                           # Images, Icons, and Static Files
│   ├── styles.scss                   # Global Styles
│── angular.json                      # Angular Configuration
│── package.json                      # Dependencies and Scripts
│── README.md                         # Documentation (This File)
```

## Development Process

1. **Planning & Design**:
   - Created a responsive layout using CSS Grid & Flexbox.

2. **Building the Components**:
   - Product List Component: Displays products dynamically from an Angular service.
   - Cart Summary Component: Manages cart interactions and updates the summary.
   - Header Component: Contains the navigation bar, branding, searching bar, and cart.
   - Search Component: Implements product search functionality.
   - Remove From Cart Component: Allows users to remove items from the cart.
   - Product Details Component: Displays detailed product information when clicked.

3. **Data Management**:
   - Used an Angular Service (ProductService) to fetch and manage product data.
   - CartService maintains cart operations (adding, removing items).

4. **Routing & Navigation**:
   - Configured Angular Router for product details and cart pages.
   - Implemented `routerLink` for seamless navigation.

5. **Testing & Debugging**:
   - Ensured cross-device responsiveness.
   - Tested dynamic interactions like adding/removing items and category filtering.
