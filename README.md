# Stripe Store

## Introduction
This is a full-stack e-commerce app built with Angular, Angular Material, Tailwind, Node.js, Stripe, and the Fake-store API. The app allows users to browse products, search by categories, sort by ascending or descending order, and specify the number of products to display. It also includes an integrated Stripe payment gateway, allowing customers to securely purchase products using their credit or debit card.


## Table of contents
- [Stripe Store](#stripe-store)
  - [Table of contents](#table-of-contents)
  - [Preview](#preview)
  - [Installation](#installation)
  - [Layout](#layout)
  - [Search and Sorting](#search-and-sorting)
  - [Payment](#payment)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Contributing](#contributing)

## Preview

![The homepage that shows where users can add product to cart](/client/src/assets/preview.png "Project Homepage")


[View Project](https://stripestore.vercel.app "Live link")

## Installation
To install and run this project, you will need to have the following software installed on your computer:

- Node.js
- Angular CLI

Once you have the required software installed, follow these steps to get started:

1. Clone the repository on your local machine using the following command:

```
git clone https://github.com/Omolara5861/stripe-store.git
```

2. Navigate to the frontend directory and install the necessary dependencies using the following command:

```
cd client && npm i
```

3. Go back one directory by running the following command:
```
cd ..
```

4. Navigate to the backend directory and install the necessary dependencies using the following command:

```
cd server && npm i
```

## Usage
### Running the Frontend

To start the frontend, run the following command in the client directory:
```
ng serve
```
This will start the frontend on http://localhost:4200/.

### Running the Backend

To start the backend, navigate to the server folder and run the following command:

```
npm start
```

This will start the backend on http://localhost:4242/.

## Layout
The app can be displayed in three different layouts: 1, 3, and 4 columns. To switch between layouts, use the `view` icons in the top right corner of the page.

## Search and Sorting
Users can search for products by category using the `categories'` menu at the side nave of the page. To sort products by ascending or descending order, click on the `sort by` dropdown above the product list. Users can also specify the number of products to display using the `show` dropdown menu above the product list.

## Payment
To make a purchase, add items to your cart and click the checkout button. You will be redirected to the Stripe payment gateway, where you can securely enter your credit or debit card details. Once the payment is processed, you will receive a confirmation email with details of your order.

*Note: This app uses the Stripe test API keys, so no actual payments will be processed. To test the payment functionality, use the following test card details:*

- Card Number: 4242 4242 4242 4242
- Expiration Date: Any future date
- CVC: Any 3-digit number
- ZIP Code: Any 5-digit number


