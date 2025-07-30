# Code Sharing App

A web platform for developers to share code snippets with syntax highlighting, expiration options, and easy access to download or embed.

## 📦 Table of Contents

- [Features](#features)
- [technologies](#technologies)
- [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Project Structure](#project-structure)
- [License](#license)  
- [Contact](#contact)

## 🚀 Features

- Create and share code snippets via unique URLs
- Syntax highlighting for multiple languages (via Prism.js, Highlight.js, etc.)
- Optional expiration (auto-delete after X views or time)
- Copy-to-clipboard and download buttons
- Embed snippets in other pages
- Lightweight and secure API endpoints

## 🧱 Technologies

- **Backend**: Java / Spring Boot
- **Database**: PostgreSQL
- **Syntax Highlighting**: Prism.js
- **Frontend**: React
- **Environment management**: dotenv

## 🛠️ Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/CarlosLopez98/code-sharing-app.git
   cd code-sharing-app
   ```

2. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. Create the `.env` file based on `.env.example`, for example:
   ```
   PORT=5000
   DB_URI=mongodb://localhost:27017/code_share
   MAX_SNIPPET_LIFETIME=86400
   RATE_LIMIT=100
   ```

4. Launch development servers:
   ```bash
   # From backend
   npm run dev

   # From frontend
   npm start
   ```
Then visit `http://localhost:3000`.

## 🎯 Usage

1. Open the web interface or use the REST API.
2. Paste or type your code snippet.
3. Select language, description, and expiration (views/time).
4. Generate the snippet—receive a shareable URL to view or embed.
5. Copy snippet, download as file, or embed as an iframe using provided HTML.

## 🗂️ Project Structure

```
code-sharing-app/
├── api/
│   ├── database/
│   ├── src/
│      ├── java/
│         ├── domain/
│         ├── persistance/
│         ├── web
│         └── NotecodeApplication.java
│      └── resources/
├── frontend/
│   ├── src/
│      ├── components/
│      ├── context/
│      ├── hooks/
│      ├── pages/
│      ├── services/
│      ├── types/
│      ├── App.tsx
│      └── main.tsx
│   └── index.html
├── .env.example
├── README.md
└── package.json
```

## ⚙️ Configuration

| Variable               | Description                                | Default         |
|------------------------|--------------------------------------------|-----------------|
| `PORT`                 | Backend server port                        | `5000`          |
| `DB_URI`               | Path to your database                      | Required        |
| `MAX_SNIPPET_LIFETIME` | Default snippet lifetime in seconds        | `86400` (1 day) |
| `RATE_LIMIT`           | API calls per IP per timeframe             | `100`           |

## 📄 License

Licensed under the [MIT License](LICENSE).

## ✉️ Contact

If you have feedback or questions, feel free to open an issue on GitHub.
