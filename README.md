# E-commerce-platform-

This project is an e-commerce platform that includes an admin panel and a mobile application for end-users. The goal of this project is to provide an online shopping platform using modern technologies.

## Project Features 

### 1.User: Custromers
- registe, login, logout
- searching
- ordering products
- adding category
- payment
- order canceling
- rating and review


### 2.User: Admins
- recording products
- editing products
- order confirmation
- updating price
- enabling discount

### 3.Reporting
- amount of sales
  - product counts
  - product values
  - category
- user satisfaction
  - category
- sales benefit

### 4.Extra
- caching
- security
  - captcha
  - cryptography
- 2fa
- logging
- elastic search (optional)
- confing manager

## Team Members

### 1. **[MohammadMahdi Noei-401463184]**
- **Role**: Backend and Business Logic Layer Development
- **Technologies**:
  - Node.js
  - PostgreSQL
  - Prisma ORM
  - Express.js
- **Responsibilities**:
  - Architecture and Database Designer
  - Designing and implementing data models using PostgreSQL and Prisma
  - Developing APIs and business logic to interact with the database
  - Managing server-database communication and handling data transactions

### 2. **AmirHossien Lotfi-401463164**
- **Role**: UI Layer Development (Admin Panel)
- **Technologies**:
  - React
  - Material-UI (for UI design components)
  - Redux (for application state management)
- **Responsibilities**:
  - Assistant Database Designer
  - Designing and implementing the admin panel using React
  - Creating and managing different management pages in the admin panel
  - Connecting to business layer APIs for displaying data and performing administrative actions
  - Implementing authentication and access control in the admin panel

### 3. **Sina Ebrahimi-401463113**
- **Role**: UI Layer Development (Mobile App)
- **Technologies**:
  - React Native
  - Expo
  - Redux (for application state management)
- **Responsibilities**:
  - UI/UX Designer
  - Designing and implementing the mobile app for end-users
  - Creating product pages, shopping cart, and checkout pages
  - Connecting to business layer APIs for purchase and payment operations

## Technologies Used

This project utilizes a set of modern technologies and tools for implementing different layers:

### Data Layer (Backend)
- **Node.js**: For building the server and handling HTTP requests
- **PostgreSQL**: Relational database for storing e-commerce data
- **Prisma**: ORM for interacting with the database and managing data models
- **Express.js**: For API management and routing on the server

### Business Layer
- **Node.js**: For implementing business logic and processing data
- **JWT**: For authentication and managing user access control
- **bcryptjs**: For password encryption

### UI Layer
#### Admin Panel
- **React**: For building the frontend interface
- **Material-UI**: For utilizing pre-built components and beautiful design
- **Redux**: For managing the application state and storing data globally

#### Mobile App
- **React Native**: For building the mobile app for iOS and Android
- **Expo**: For easier development with React Native
- **Redux**: For managing the app's state in the mobile app

## Project Setup

To run the project locally, follow these steps:

### 1. Install Dependencies

Install dependencies for each layer:

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

#### Android
```bash
cd android
npm install
