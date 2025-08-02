# 💱 React Currency Converter

A simple and responsive currency converter built with React. It allows users to convert amounts between different currencies using live exchange rates.

## 🚀 Features

* Convert between major currencies
* Fetches real-time exchange rates via API
* Responsive and easy-to-use interface
* Built with React Hooks (`useState`, `useEffect`)

## 📸 Screenshot

![App Screenshot](public/preview.png)

## 🛠️ Tech Stack

* **React** (Vite)
* **CSS** (plain CSS / Tailwind / your choice)
* **ExchangeRate API**

## 📂 Folder Structure

```
currencyconvertor/
│
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── InputBox.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/abhi-zero/currencyconvertor.git
cd currencyconvertor

# Install dependencies
npm install

# Create your own .env file
# (see Environment Variables section below)

# Start the app
npm run dev
```

## 🔑 Environment Variables

> ⚠️ The `.env` file is **not uploaded to GitHub**, so contributors must create their own.

Create a `.env` file in the project root with:

```
VITE_API_KEY=your_api_key_here
```

➡️ You can get a free API key from [ExchangeRate API](https://app.exchangerate-api.com/sign-in).

Without this file, the app will not fetch exchange rates.

Also ensure `.env` is listed in `.gitignore` so it is never committed.

## 📌 Future Improvements

* Add a loading spinner
* Provide offline fallback with cached rates
* Improve UI with TailwindCSS

## 📜 License

This project is licensed under the MIT License.
