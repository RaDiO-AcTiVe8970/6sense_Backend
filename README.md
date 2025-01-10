# 6Sense-Task

# **Backend Development Challenge**

## **Table of Contents**
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [Setup Instructions](#setup-instructions)
- [Bonus](#bonus)

---

## **Overview**

This is a backend system built using **Node.js**, **Express.js**, and **MongoDB**. The project provides RESTful APIs for managing products and categories, implementing features like product creation, updating, filtering, and unique product code generation.

---

## **Technologies Used**

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Backend framework for building APIs.
- **MongoDB**: NoSQL database for data storage.
- **TypeScript**: Provides type safety and better developer experience.

---

## **Features**

### **1. Create a Product**
- Add a new product with the following attributes: 
  - Name
  - Description
  - Price
  - Discount
  - Image URL
  - Status (Stock Out/In Stock)
  - Product Code (auto-generated)
  - Category (validated by name)

### **2. Generate Product Code**
- Auto-generated unique product codes based on product names:
  - Extract longest strictly increasing substring(s).
  - Include start and end indices of the substring.
  - Append a hashed prefix.
  - Ensure uniqueness across products.

### **3. Associate Products with Categories**
- Products are linked to valid categories by name.
- Validation ensures the category exists before product creation.

### **4. Update Product Information**
- Update attributes like:
  - Status (Stock Out/In Stock)
  - Description
  - Discount

### **5. Get Products with Filters**
- Retrieve products with:
  - **Category filter**: Fetch products by category name.
  - **Search by name**: Find products using partial or full name matches.
  - **Pricing calculation**: Include both original and final price after discount in the response.

---

## **API Endpoints**

### **Product Routes**
| Method | Endpoint                                 | Description                                              |
|--------|------------------------------------------|----------------------------------------------------------|
| POST   | `/products/addProducts`                                  | Create a new product                     |
| PUT    | `/products/updateProduct/:id`                            | Update product information               |
| GET    | `/products/getAllProducts`                               | Get all products                         |
| GET    | `/products/getProductByCategory/:categoryName`           | Get all products associated by category  |

### **Category Routes**
| Method | Endpoint                  | Description                             |
|--------|---------------------------|-----------------------------------------|
| POST   | `/categories/addCategory`           | Create a new category         |
| GET    | `/categories/getCategories`         | Retrieve all categories       |

---

## **Data Models**

### **Product Model**
- **Name**: String (required)
- **Description**: String
- **Price**: Number (required)
- **Discount**: Number (default: 0)
- **Image**: String
- **Status**: Enum (`In Stock`, `Stock Out`) (default: `In Stock`)
- **Product Code**: String (unique, auto-generated)
- **Category**: ObjectId (reference to `Category`)

### **Category Model**
- **Name**: String (required, unique)

---

## **Setup Instructions**

### **Prerequisites**
1. Install [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/try/download/community).
2. Clone the repository:
   ```bash
   git clone https://github.com/RaDiO-AcTiVe8970/6sense_Backend.git

### **Installation**
1. Install Dependencies:
   ```bash
   npm install

2. Create a .env file in the root directory and set the following variables:
   ```bash
   PORT=3000
   MONGO_URI= database connectionstring

### **Run the Server**
1. Start the MongoDB server locally or use a cloud MongoDB instance.
2. Start the application:
   ```bash
    npm start

---

## **Bonus**

### **Data Model diagram**
![image](https://github.com/user-attachments/assets/ca1a0cdc-6ca9-4ed8-9e9f-9dbecc2d9611)


