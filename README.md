
# 🔗 React Context API Authentication Example

A simple **React Context API** project demonstrating how to implement global state management for **user authentication** using `createContext`, `useContext`, and `useState`.

---

## 📌 Features

- Login functionality with user context
- Access user data across components
- Clean and responsive UI
- Toggleable password visibility

---

## 🧠 What is Context API?

The **React Context API** allows you to share state (like user info) globally across the app without passing props manually at every level.

---

## 📈 Architecture Diagram

```mermaid
graph TD
  A[App.js] --> B[UserContextProvider]
  B --> C[Login Component]
  B --> D[Profile Component]
  B --> E[Other Components]
  C --> F[useContext -> setUser()]
  D --> G[useContext -> get user info]
```

---

## 📁 Folder Structure

```
📦ContextAPI-App
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Login.js
 ┃ ┃ ┗ 📜Profile.js
 ┃ ┣ 📂context
 ┃ ┃ ┣ 📜UserContext.js
 ┃ ┃ ┗ 📜UserContextProvider.js
 ┃ ┣ 📜App.js
 ┃ ┗ 📜index.js
 ┣ 📜package.json
 ┗ 📜README.md
```

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/context-api-auth.git
cd context-api-auth
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

---

## ⚙️ Core Code Overview

### `UserContext.js`

```js
import { createContext } from "react";
const UserContext = createContext();
export default UserContext;
```

### `UserContextProvider.js`

```js
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

### `App.js`

```js
import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
```

---

## 👤 Login Component

- Stores username and password.
- Uses `setUser()` to update the context.

### `Login.js`

```js
const { setUser } = useContext(UserContext);

const handleSubmit = (e) => {
  e.preventDefault();
  setUser({ username, password });
};
```

---

## 📄 Profile Component

- Accesses the logged-in user's data using `useContext`.

---

## 📦 Technologies Used

- React
- Tailwind CSS
- Context API

---


---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
