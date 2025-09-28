# Lost Spells - UI 계층구조 문서

## 📋 문서 정보
- **프로젝트명**: Lost Spells
- **문서 유형**: UI 계층구조 명세
- **대상 플랫폼**: Unity
- **작성일**: 2025년 9월 28일
- **버전**: 1.0

---

## 🌐 전체 UI 계층구조

### 최상위 레벨 (Application Level)
```
Lost Spells Game Application
├── Scene Manager
│   ├── Game Start Scene
│   ├── Main Menu Scene
│   ├── Game Mode Scene
│   ├── Story Mode Scene
│   ├── Chapter Select Scene
│   ├── Difficulty Select Scene
│   └── Game Play Scene (메인)
├── UI Manager
├── Audio Manager
└── Game Manager
```

### 씬(Scene) 간 계층구조
```
Application Root
│
├── 🏁 Game Start Scene
│   └── Title Screen Canvas
│       ├── Game Title
│       ├── Subtitle
│       └── Start Prompt
│
├── 🏠 Main Menu Scene
│   └── Menu Canvas
│       ├── Header (Title)
│       └── Navigation
│           ├── Game Start Button
│           ├── Settings Button
│           └── Exit Button
│
├── 🎮 Game Mode Scene
│   └── Mode Selection Canvas
│       ├── Header (Title)
│       └── Mode Options
│           ├── Story Mode Button
│           ├── Quick Battle Button (미구현)
│           └── Endless Mode Button (미구현)
│
├── 📖 Story Mode Scene
│   └── Story Canvas
│       ├── Header (Title)
│       ├── Progress Display
│       └── Start Adventure Button
│
├── 📚 Chapter Select Scene
│   └── Chapter Canvas
│       ├── Header (Title)
│       └── Chapter Grid
│           ├── Chapter 1 (Unlocked)
│           ├── Chapter 2 (Locked)
│           └── Chapter 3+ (Locked)
│
├── ⚡ Difficulty Select Scene
│   └── Difficulty Canvas
│       ├── Header (Title)
│       └── Difficulty Options
│           ├── Easy Button
│           ├── Normal Button
│           ├── Hard Button
│           └── Expert Button
│
└── 🏆 Game Play Scene (메인)
    └── Game Canvas (다층 구조)
        ├── Background Layer (Z: -100)
        ├── Game World Layer (Z: 0)
        ├── UI Layer (Z: 100)
        └── Overlay Layer (Z: 200)
```

---

## 🎮 Game Play Scene 상세 계층구조

### 전체 레이아웃 구조
```
Game Play Scene
│
└── Game Canvas (Canvas Scaler)
    │
    ├── 📱 Navigation Bar (Top)
    │   ├── Left Section
    │   ├── Center Section
    │   └── Right Section
    │
    ├── 🎯 Player Status Bar
    │   ├── HP Display
    │   └── MP Display
    │
    ├── 🌅 Battlefield Sky (Middle - Flexible)
    │
    ├── 🏞️ Bottom Layout (Fixed Height: 300px)
    │   ├── Ground Area (2/3 width)
    │   └── UI Area (1/3 width)
    │
    └── 🎭 Game Overlay (Hidden by default)
```

### Layer 기반 Z-Index 구조
```
Z-Index Hierarchy (Back to Front)
│
├── Z: -100 | Background Elements
│   ├── Battlefield Sky
│   └── Ground Surface
│
├── Z: 0 | Game World Elements
│   ├── Environment Objects
│   ├── Characters
│   │   ├── Player Character
│   │   └── Enemy Characters
│   └── Effects
│       ├── Projectiles
│       └── Magic Effects
│
├── Z: 100 | UI Elements
│   ├── Navigation Bar
│   ├── Player Status Bar
│   └── Game UI Area
│       ├── Chat Area
│       └── Skill Area
│
└── Z: 200 | Overlay Elements
    ├── Pause Menu
    ├── Game Over Screen
    └── System Messages
```

---

## 🔧 부분별 상세 계층구조

### 1. Navigation Bar (상단 네비게이션)
```
Navigation Bar Container
│
├── UI Left Section
│   └── Menu Button
│       ├── Button Component
│       ├── Text Component
│       └── Click Handler
│
├── UI Center Section
│   └── Chapter Display
│       ├── Chapter Label
│       └── Chapter Number (Dynamic)
│
└── UI Right Section
    └── Wave Display
        ├── Wave Label
        └── Wave Number (Dynamic)
```

### 2. Player Status Bar (플레이어 상태)
```
Player Status Bar Container
│
└── Player Stats Container
    │
    ├── Health Bar Section
    │   ├── HP Label ("HP:")
    │   ├── Bar Container
    │   │   └── Health Fill (Dynamic Width)
    │   └── HP Text (Current/Max)
    │
    └── Mana Bar Section
        ├── MP Label ("MP:")
        ├── Bar Container
        │   └── Mana Fill (Dynamic Width)
        └── MP Text (Current/Max)
```

### 3. Game Battlefield (게임 전장)
```
Game Battlefield Container
│
└── Battlefield Sky
    ├── Background Gradient
    ├── Cloud Effects (Optional)
    └── Atmospheric Effects (Optional)
```

### 4. Bottom Layout (하단 레이아웃)
```
Bottom Layout Container (Flex: Horizontal)
│
├── Ground Area (Flex: 2)
│   │
│   ├── Ground Surface
│   │   └── Ground Texture/Color
│   │
│   ├── Characters Container
│   │   │
│   │   ├── Player Character
│   │   │   ├── Player Sprite (32x48px)
│   │   │   ├── Player Weapon
│   │   │   └── Player Animations
│   │   │       ├── Idle Animation
│   │   │       ├── Attack Animation
│   │   │       └── Cast Animation
│   │   │
│   │   └── Enemies Container
│   │       ├── Enemy 1 (Position: Right 150px)
│   │       │   ├── Enemy Sprite (32x48px)
│   │       │   ├── Enemy Weapon
│   │       │   └── Enemy Animations
│   │       ├── Enemy 2 (Position: Right 220px)
│   │       └── Enemy 3 (Position: Right 80px)
│   │
│   └── Effects Container
│       ├── Projectiles Container
│       │   ├── Player Projectiles
│       │   └── Enemy Projectiles
│       ├── Magic Effects
│       └── Hit Effects
│
└── UI Area (Flex: 1)
    │
    ├── Chat Area (Top Half)
    │   ├── Chat Header
    │   │   └── Chat Title ("채팅")
    │   └── Chat Messages Container
    │       ├── Message 1 (System)
    │       ├── Message 2 (Combat)
    │       └── Message N (Dynamic)
    │
    └── Skill Cast Area (Bottom Half)
        ├── Skill Header
        │   └── Skill Title ("스킬")
        └── Skill Slots Container
            ├── Fire Skill (🔥)
            ├── Ice Skill (❄️)
            ├── Lightning Skill (⚡)
            └── Heal Skill (💚)
```

### 5. Game Overlay (게임 오버레이)
```
Game Overlay Container (Hidden by Default)
│
└── Overlay Content
    │
    ├── Overlay Background (Semi-transparent)
    │
    ├── Pause Menu
    │   ├── Pause Title
    │   └── Pause Buttons
    │       ├── Resume Button
    │       └── Main Menu Button
    │
    ├── Game Over Screen
    │   ├── Result Title
    │   ├── Score Display
    │   └── Action Buttons
    │
    └── System Dialogs
        ├── Confirmation Dialogs
        └── Error Messages
```

---

## 🎨 시각적 계층 구조

### Canvas 렌더링 순서
```
Rendering Order (Unity Canvas)
│
├── World Space Canvas (Z: Background)
│   └── 3D Game Elements (if any)
│
├── Screen Space - Camera (Z: 0)
│   ├── Game World UI
│   └── Character Status Indicators
│
└── Screen Space - Overlay (Z: Front)
    ├── Navigation UI
    ├── Player Status UI
    ├── Chat & Skill UI
    └── System Overlays
```

### UI Component Hierarchy
```
UI Component Structure
│
├── Canvas Group (for fade in/out)
│   ├── Background Panel
│   ├── Content Panel
│   │   ├── Header Section
│   │   ├── Body Section
│   │   └── Footer Section
│   └── Button Panel
│
├── Event System
│   ├── Input Module
│   └── Raycaster
│
└── Animation Components
    ├── UI Transitions
    ├── Button Animations
    └── Status Bar Animations
```

---

## 🔄 Unity 구현 권장 구조

### Prefab 계층구조
```
UI Prefabs Organization
│
├── Screen Prefabs
│   ├── GameStartScreen.prefab
│   ├── MainMenuScreen.prefab
│   ├── GameModeScreen.prefab
│   ├── StoryModeScreen.prefab
│   ├── ChapterSelectScreen.prefab
│   ├── DifficultySelectScreen.prefab
│   └── GamePlayScreen.prefab
│
├── Component Prefabs
│   ├── NavigationBar.prefab
│   ├── PlayerStatusBar.prefab
│   ├── HealthBar.prefab
│   ├── ManaBar.prefab
│   ├── ChatArea.prefab
│   ├── SkillSlot.prefab
│   └── GameOverlay.prefab
│
├── Character Prefabs
│   ├── PlayerCharacter.prefab
│   ├── EnemyCharacter.prefab
│   └── Projectile.prefab
│
└── Effect Prefabs
    ├── MagicEffects/
    ├── HitEffects/
    └── UIEffects/
```

### Script 계층구조
```
Script Organization
│
├── Managers
│   ├── UIManager.cs
│   ├── GameManager.cs
│   ├── SceneManager.cs
│   └── AudioManager.cs
│
├── UI Controllers
│   ├── BaseScreenController.cs
│   ├── GamePlayUIController.cs
│   ├── PlayerStatusController.cs
│   ├── ChatController.cs
│   └── SkillUIController.cs
│
├── Game Components
│   ├── PlayerController.cs
│   ├── EnemyController.cs
│   ├── ProjectileController.cs
│   └── EffectController.cs
│
└── Utilities
    ├── UIAnimationHelper.cs
    ├── ScreenTransition.cs
    └── InputHandler.cs
```

---

## 📊 상태 관리 계층

### Data Flow Architecture
```
Data Flow Hierarchy
│
├── Game Manager (Singleton)
│   ├── Player Data
│   │   ├── HP/MP Values
│   │   ├── Skill Cooldowns
│   │   └── Experience/Level
│   ├── Game State
│   │   ├── Current Chapter
│   │   ├── Current Wave
│   │   └── Pause State
│   └── UI State
│       ├── Active Screen
│       ├── Dialog State
│       └── Animation State
│
├── UI Manager
│   ├── Screen Stack
│   ├── Popup Queue
│   └── Animation Queue
│
└── Event System
    ├── Player Events
    ├── Combat Events
    ├── UI Events
    └── System Events
```

---

## 🔧 Unity 구현 체크리스트

### Canvas 설정
- [ ] Screen Space - Overlay Canvas (UI Layer)
- [ ] Screen Space - Camera Canvas (Game World UI)
- [ ] Canvas Scaler 설정 (Scale with Screen Size)
- [ ] Reference Resolution: 1920x1080

### 레이아웃 컴포넌트
- [ ] Horizontal Layout Group (Navigation Bar, Bottom Layout)
- [ ] Vertical Layout Group (Player Stats, Chat Messages)
- [ ] Grid Layout Group (Skill Slots, Chapter Grid)
- [ ] Content Size Fitter (Dynamic Text)

### 애니메이션 시스템
- [ ] Animator Controller (UI Transitions)
- [ ] DOTween Integration (Smooth Animations)
- [ ] UI Animation Events
- [ ] Loading/Transition Effects

---

*이 문서는 Unity에서 Lost Spells UI를 구현하기 위한 계층구조 가이드입니다.*

*문서 작성일: 2025년 9월 28일*  
*버전: 1.0*  
*작성자: GitHub Copilot*