## 📄 **02-project-structure.md**
```markdown
# 📁 Project Structure

## Task Overview
Organize the project with a scalable folder structure.

## Folder Structure
promptmon/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (game)/
│   │   │   ├── battle/
│   │   │   ├── promptdex/
│   │   │   └── profile/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── battle/
│   │   │   └── promptmon/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── battle/
│   │   ├── promptmon/
│   │   ├── ui/
│   │   └── layout/
│   ├── lib/
│   │   ├── api/
│   │   ├── db/
│   │   ├── game/
│   │   └── utils/
│   ├── types/
│   │   ├── game.ts
│   │   ├── database.ts
│   │   └── api.ts
│   ├── data/
│   │   └── promptmons.json
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   └── sounds/
├── .env.local
└── package.json

code


## Implementation Steps

### 1. Create All Directories
```bash
mkdir -p src/app/{auth,game,api}/{login,register,battle,promptdex,profile,auth,battle,promptmon}
mkdir -p src/{components,lib,types,data,styles}/{battle,promptmon,ui,layout,api,db,game,utils}
mkdir -p public/{images,sounds}
2. Create Base Files

Create index files in each folder

Set up barrel exports

Add README.md in key directories

3. Configure Import Aliases
Update imports to use @ prefix

Success Criteria

 All folders created

 Import aliases work

 Clean separation of concerns

 Next Steps
→ Continue to 03-typescript-types.md