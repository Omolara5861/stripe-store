# Stripe Store

[![LICENSE](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Introduction
This is a full-stack e-commerce app built with Angular, Angular Material, Tailwind, Node.js, Stripe, and the Fake-store API. The app allows users to browse products, search by categories, sort by ascending or descending order, and specify the number of products to display. It also includes an integrated Stripe payment gateway, allowing customers to securely purchase products using their credit or debit card.


## Table of contents
- [Stripe Store](#stripe-store)
  - [Introduction](#introduction)
  - [Table of contents](#table-of-contents)
  - [Preview](#preview)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Running the Frontend](#running-the-frontend)
    - [Running the Backend](#running-the-backend)
  - [Layout](#layout)
  - [Search and Sorting](#search-and-sorting)
  - [Payment](#payment)
  - [Local Storage](#local-storage)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [License](#license)

## Preview

![The homepage that shows where users can add product to cart](/client/src/assets/preview.png "Project Homepage")


[View Project](https://stripestore.vercel.app "Live link")

## Installation
To install and run this project, you will need to have the following software installed on your computer:

- Node.js
- Angular CLI

Once you have the required software installed, follow these steps to get started:

1. Clone the repository on your local machine using the following command:

```bash
git clone https://github.com/Omolara5861/stripe-store.git
```

2. Navigate to the frontend directory and install the necessary dependencies using the following command:

```bash
cd client && npm i
```

3. Go back one directory by running the following command:
```bash
cd ..
```

4. Navigate to the backend directory and install the necessary dependencies using the following command:

```bash
cd server && npm i
```

## Usage
### Running the Frontend

To start the frontend, run the following command in the client directory:

```bash
ng serve
```

This will start the frontend on http://localhost:4200/.

### Running the Backend

To start the backend, navigate to the server folder and run the following command:

```cmd
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

## Local Storage
This app now includes local storage functionality, which means that users' cart items will persist even if they close the browser or navigate away from the page. This is achieved using the browser's localStorage API.

## Technologies
This project was built with VS Code using:
* __Frontend__<br/>
      ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
      ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
      ![Angular Material](https://img.shields.io/badge/angular_material-%23323330.svg?style=for-the-badge&logo=angular&logoColor=%23F7DF1E)
      ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

* __Backend__<br/>
        ![Node JS](https://img.shields.io/badge/node.js-3670A0?style=for-the-badge&logo=node.js&logoColor=ffdd54)
        ![Express JS](https://img.shields.io/badge/express_js-%23092E20.svg?style=for-the-badge&logo=express&logoColor=white)
        ![Stripe](https://img.shields.io/badge/stripe-%23092E20.svg?style=for-the-badge&logo=stripe&logoColor=white)
        ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
- Fakestore API

## Contributing
If you would like to contribute to this project, please open an issue or submit a pull request on the project's GitHub repo. Contributions are welcome and appreciated.

## License
This project is licensed under the
[MIT license](https://opensource.org/licenses/MIT).
Please see the [LICENSE file](LICENSE.md) for more information.

> You can do whatever you want as long as you include the original copyright and
> license notice in any copy of the project/source.


*Copyright (c) 2023 Laradev. All right reserved.*