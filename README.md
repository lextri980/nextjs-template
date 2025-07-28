# 🚀 Next.js Template (SA)

[Next.js App router](https://nextjs.org/) boilerplate for a typical project

## 📦 Tech Stack

- **Core:** [`NextJS (15.3.3)`](https://nextjs.org/) [`ReactJS (19)`](https://reactjs.org/) [`TypeScript (5)`](https://www.typescriptlang.org/)
- **UI/UX:** [`Tailwind CSS (4)`](https://tailwindcss.com/) [`Material UI (7)`](https://mui.com/) [`Sonner toast (2)`](https://sonner.emilkowal.ski/)
- **Form:** [`React hook form (7)`](https://www.react-hook-form.com/) [`Yup (1)`](https://github.com/jquense/yup)
- **Global state:** [`Redux toolkit (2)`](https://github.com/jquense/yup)
- **API handler:** [`Redux saga (1)`](https://github.com/jquense/yup)

## ⛓ Versions and Branches

**Branches information**

- **Developing version: 2.sa.0 | [version-2.sa.0](https://github.com/lextri980/nextjs-template/tree/version-2.sa.0)**
- **Beta version: 0 | [beta-version](https://github.com/lextri980/nextjs-template/tree/beta-version)**
- **Stable version: 0 | [master](https://github.com/lextri980/nextjs-template/tree/master)**

## ⚙️ Getting Started

```bash
# Clone and change directory to project
git clone https://github.com/lextri980/nextjs-template.git
cd nextjs-template

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run the development server
npm run dev
```

Visit [http://localhost:4242](http://localhost:4242) in your browser.

## 🛠️ Scripts

| Command          | Description             |
| ---------------- | ----------------------- |
| `npm run dev`    | Run in development mode |
| `npm run build`  | Build for production    |
| `npm start`      | Start production server |
| `npm run lint`   | Run ESLint              |
| `npm run format` | Run Prettier            |

## 📁 Project Structure

```
.
├── public/           # Public section
│   ├── fonts/        # Local fonts
│   ├── svg/          # SVG file type
│   └── image/        # Other image file type (.png,.jpg,...)
├── src/            # Application routes
│   ├── app/          # API endpoints
│   ├── components/      # Home page
│   ├── config/          # API endpoints
│   ├── constans/
│   ├── contexts/
│   ├── hooks/
│   ├── services/
│   ├── stores/
│   ├── styles/
│   ├── utils/
│   └── index.tsx
├── .env.example
└── eslint.config.mjs
```

## 🧪 Testing

_Comming soon..._

## 📦 Deployment

This project can be easily deployed to platforms like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)

```bash
npm run build
npm start
```

## 📄 License

Author: [@lextri980](https://github.com/lextri980)

---

> Built with ❤️ using Next.js.
