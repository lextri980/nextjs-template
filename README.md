# <img src="./public/svg/vercel.svg" alt="My Skills" width="30" /> Next.js Template (SA Version)

[Next.js App router](https://nextjs.org/) boilerplate for a typical project

## 📦 Tech Stack

- **Core:** [`NextJS (15.3.3)`](https://nextjs.org/) [`ReactJS (19)`](https://reactjs.org/) [`TypeScript (5)`](https://www.typescriptlang.org/)
- **UI/UX:** [`Tailwind CSS (4)`](https://tailwindcss.com/) [`Material UI (7)`](https://mui.com/) [`Sonner toast (2)`](https://sonner.emilkowal.ski/)
- **Form:** [`React hook form (7)`](https://www.react-hook-form.com/) [`Yup (1)`](https://github.com/jquense/yup)
- **Global state:** [`Redux toolkit (2)`](https://github.com/jquense/yup)
- **API handler:** [`Redux saga (1)`](https://github.com/jquense/yup)

## 💥 Develop version

<table>
  <tr>
    <th>No.</th>
    <th>Version</th>
    <th>Branch</th>
  </tr>
  <tr style="text-align: center">
    <td>1</td>
    <td>2.0</td>
    <td>
      <a href="https://github.com/lextri980/nextjs-template/tree/version-2.sa.0">
        version-2.sa.0
      </a>
    </td>
  </tr>
</table>

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
├── public/             # Public section
│   ├── fonts/          # Local fonts
│   ├── svg/            # SVG file type
│   └── image/          # Other image file type (.png,.jpg,...)
├── src/                # Application routes source
│   ├── app/            # Layouts and UI
│   ├── components/     # Components
│   ├── config/         # Config
│   ├── constans/       # Global constans
│   ├── contexts/       # Contexts
│   ├── hooks/          # Custom hooks
│   ├── services/       # Services
│   ├── stores/         # Redux toolkit store
│   ├── styles/         # Global & Specific styles
│   └── utils/          # Utilities
├── .env.example        # Environment variable example
└── eslint.config.mjs   # Eslint config
```

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
