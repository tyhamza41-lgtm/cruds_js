# CRUD Product Management System

A lightweight, responsive product management dashboard built with vanilla HTML, CSS, and JavaScript. This project allows users to create, update, delete, and search products while storing all data in the browser using `localStorage`.

## Overview

This app is designed as a simple CRUD (Create, Read, Update, Delete) interface for managing product records. It is ideal for beginners learning JavaScript DOM manipulation, local storage, and front-end form handling.

## Features

- Add new products with title, price, taxes, ads, discount, count, and category
- Automatically calculate the total price based on entered values
- View all products in a table format
- Update existing product records
- Delete individual products
- Delete all products in a single action
- Search products by title or category
- Persistent data storage with `localStorage`
- Clean and modern interface with responsive styling

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla ES6+)

## Project Structure

```text
crud-product-management/
├── index.html
├── style.css
├── main.js
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, etc.)
- Optional: VS Code with Live Server extension for easier local preview

### Run the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
```

2. Navigate to the project folder:

```bash
cd your-repository
```

3. Open `index.html` directly in your browser, or use a local development server such as Live Server.

## How It Works

- Fill in the product form fields.
- Click `Create` to add a new product.
- The total is computed automatically using the price, taxes, ads, and discount values.
- Use the table actions to update or delete records.
- Search by product title or category from the search panel.
- Data remains saved in the browser even after refreshing the page.

## Example Usage

```text
Product Title: iPhone 15
Price: 999
Taxes: 80
Ads: 20
Discount: 50
Count: 3
Category: Electronics
```

The app calculates the total and saves the data in local storage.

## Future Enhancements

- Add product image uploads
- Implement filtering and sorting
- Add dark/light theme toggle
- Convert to a React or Vue application
- Connect to a real backend API and database

## Contributing

Contributions are welcome. If you would like to improve this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Author

This project was created as a simple JavaScript CRUD application for learning and practical front-end development.

## Notes

This project is intentionally lightweight and uses browser storage instead of a backend database. It is perfect for learning foundational web development concepts and prototyping small product management tools.
