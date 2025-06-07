
---

## 📄 **03-typescript-types.md**
```markdown
# 🔷 TypeScript Type Definitions

## Task Overview
Define all TypeScript interfaces and types for the game.

## Core Types

### 1. Create `src/types/game.ts`
```typescript
// Promptmon types
export interface PromptMon {
  id: string;
  name: string;
  type: PromptMonType[];
  baseStats: Stats;
  evolution?: Evolution;
  moves: Move[];
  model: string;
  family: AIFamily;
  description: string;
  rarity: Rarity;
}

export type PromptMonType = 
  | 'SPEED' 
  | 'LOGIC' 
  | 'CREATIVE' 
  | 'SECURE' 
  | 'KNOWLEDGE' 
  | 'PRACTICAL';

export interface Stats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export interface Evolution {
  to: string;
  level: number;
  item?: string;
}

export interface Move {
  id: string;
  name: string;
  type: PromptMonType;
  power: number;
  accuracy: number;
  pp: number;
  description: string;
  challengeTemplate: string;
}

export type AIFamily = 
  | 'OpenAI' 
  | 'Anthropic' 
  | 'Google' 
  | 'Meta' 
  | 'Mistral' 
  | 'Qwen' 
  | 'DeepSeek' 
  | 'Grok';

export type Rarity = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'mythic';
2. Create src/types/battle.ts
typescript

export interface Battle {
  id: string;
  player1: Player;
  player2: Player;
  currentTurn: string;
  state: BattleState;
  log: BattleLogEntry[];
  createdAt: Date;
}

export interface BattleState {
  player1Mon: BattlePromptMon;
  player2Mon: BattlePromptMon;
  turn: number;
  weather?: Weather;
  terrain?: Terrain;
}

export interface BattlePromptMon extends PromptMon {
  currentHp: number;
  statusEffects: StatusEffect[];
  statModifiers: StatModifiers;
}

export interface BattleLogEntry {
  turn: number;
  message: string;
  type: 'move' | 'damage' | 'status' | 'switch' | 'faint';
  timestamp: Date;
}
3. Create src/types/database.ts
typescript

export interface DBPlayer {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  stats: PlayerStats;
}

export interface DBPromptMon {
  id: string;
  playerId: string;
  promptmonId: string;
  nickname?: string;
  level: number;
  experience: number;
  stats: Stats;
  moves: string[];
  caughtAt: Date;
}

export interface DBBattle {
  id: string;
  player1Id: string;
  player2Id: string;
  winnerId?: string;
  battleLog: any;
  duration: number;
  createdAt: Date;
}
Implementation Checklist

 Create all type files

 Export from index.ts

 No any types used

 All models properly typed

Success Criteria

 Types compile without errors

 Auto-complete works in IDE

 Types match database schema

Next Steps
→ Continue to 04-environment-config.md
