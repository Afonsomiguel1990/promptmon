 🛠️ Project Setup

## Task Overview
Initialize a new Next.js 14 project with TypeScript, Tailwind CSS, and necessary dependencies.

## Prerequisites
- Node.js 18+ installed
- Git repository created
- VS Code or Cursor IDE ready

## Steps

### 1. Create Next.js Project
```bash
npx create-next-app@latest promptmon --typescript --tailwind --app
cd promptmon
2. Install Core Dependencies
bash

npm install framer-motion @supabase/supabase-js openai lucide-react
npm install @radix-ui/react-dialog @radix-ui/react-tabs
npm install react-hot-toast zustand
3. Install Dev Dependencies
bash

npm install -D @types/node prettier eslint-config-prettier
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
4. Configure Prettier
Create .prettierrc:

json

{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
5. Update tsconfig.json
json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"]
    }
  }
}
6. Clean Up Boilerplate

Remove default Next.js styles

Clear out page.tsx content

Delete unused assets

Success Criteria

 Project runs with npm run dev

 TypeScript compiles without errors

 Tailwind CSS works

 Path aliases configured

Next Steps
→ Continue to 02-project-structure.md