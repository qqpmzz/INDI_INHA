# 🎮 Lost Spells - Magic Adventure Game# 🎮 Lost Spells - Magic Adventure Game



> Unity 기반 마법 어드벤처 게임 개발 프로젝트> Unity 기반 마법 어드벤처 게임 개발 프로젝트



**Lost Spells**는 Unity로 개발되는 픽셀 아트 스타일의 마법 어드벤처 게임입니다. 현재 저장소의 웹 UI는 Unity 구현 전 프로토타입 및 디자인 확인용으로 제작되었습니다.**Lost Spells**는 Unity로 개발되는 픽셀 아트 스타일의 마법 어드벤처 게임입니다. 현재 저장소의 웹 UI는 Unity 구현 전 프로토타입 및 디자인 확인용으로 제작되었습니다.



## ✨ 프로젝트 개요## ✨ 프로젝트 개요



- 🎯 **게임 엔진**: Unity (PC/모바일 대응)- � **게임 엔진**: Unity (PC/모바일 대응)

- 🎨 **아트 스타일**: 픽셀 아트 레트로 스타일- 🎨 **아트 스타일**: 픽셀 아트 레트로 스타일

- 🌟 **장르**: Magic Adventure Game- 🌟 **장르**: Magic Adventure Game

- 📋 **개발 단계**: UI 프로토타이핑 및 요구사항 분석 단계- 📋 **개발 단계**: UI 프로토타이핑 및 요구사항 분석 단계



## 🔄 게임 플로우## 🔄 게임 플로우



``````

게임 시작 → 메인 메뉴 → [상점/설정] → 게임 모드 선택 → 스토리 모드 → 챕터 선택 → 난이도 선택 → 게임 플레이게임 시작 → 메인 메뉴 → [상점/설정] → 게임 모드 선택 → 스토리 모드 → 챕터 선택 → 난이도 선택 → 게임 플레이

``````



### 주요 화면 구성### 주요 화면 구성

- **게임 시작**: 타이틀 화면 및 진입점- **게임 시작**: 타이틀 화면 및 진입점

- **메인 메뉴**: 게임 시작, 상점, 설정, 나가기- **메인 메뉴**: 게임 시작, 상점, 설정, 나가기

- **상점**: 부활석/룬석 구매 시스템 (달러 결제)- **상점**: 부활석/룬석 구매 시스템 (달러 결제)

- **설정**: 오디오/그래픽/게임플레이 설정- **설정**: 오디오/그래픽/게임플레이 설정

- **게임플레이**: 실시간 마법 전투 시스템- **게임플레이**: 실시간 마법 전투 시스템



## 🛠️ 현재 저장소 구성## 🛠️ 현재 저장소 구성



> ⚠️ **중요**: 현재 웹 UI는 Unity 개발을 위한 **프로토타입**입니다.> ⚠️ **중요**: 현재 웹 UI는 Unity 개발을 위한 **프로토타입**입니다.



### 📁 프로젝트 구조### 📁 프로젝트 구조



``````

INDI_INHA/INDI_INHA/

├── README.md                           # 프로젝트 개요├── README.md                           # 프로젝트 개요

├── docs/├── docs/

│   ├── Unity_UI_Requirements.md        # Unity UI 요구사항 명세서│   ├── Unity_UI_Requirements.md        # Unity UI 요구사항 명세서

│   └── UI_Hierarchy_Structure.md       # Unity UI 계층 구조 문서│   └── UI_Hierarchy_Structure.md       # Unity UI 계층 구조 문서

└── ui/                                 # 웹 프로토타입 (Unity 참고용)└── ui/                                 # 웹 프로토타입 (Unity 참고용)

    ├── game-start/                     # 게임 시작 화면    ├── game-start/                     # 게임 시작 화면

    │   ├── index.html    │   ├── index.html

    │   ├── style.css    │   ├── style.css

    │   └── script.js    │   └── script.js

    ├── main-menu/                      # 메인 메뉴    ├── main-menu/                      # 메인 메뉴

    │   ├── index.html    │   ├── index.html

    │   ├── style.css    │   ├── style.css

    │   └── script.js    │   └── script.js

    ├── shop/                           # 상점 시스템    ├── shop/                           # 상점 시스템

    │   ├── index.html    │   ├── index.html

    │   ├── style.css    │   ├── style.css

    │   └── script.js    │   └── script.js

    ├── settings/                       # 설정 화면    ├── settings/                       # 설정 화면

    │   ├── index.html    │   ├── index.html

    │   ├── style.css    │   ├── style.css

    │   └── script.js    │   └── script.js

    ├── game-mode/                      # 게임 모드 선택    ├── game-mode/                      # 게임 모드 선택

    ├── story-mode/                     # 스토리 모드    ├── story-mode/                     # 스토리 모드

    ├── chapter-select/                 # 챕터 선택    ├── chapter-select/                 # 챕터 선택

    ├── difficulty-select/              # 난이도 선택    ├── difficulty-select/              # 난이도 선택

    └── game-play/                      # 게임플레이 화면    └── game-play/                      # 게임플레이 화면

``````



## 🎮 웹 프로토타입 확인 방법## 🎮 웹 프로토타입 확인 방법



### 실행 방법### 실행 방법

1. `ui/game-start/index.html`을 브라우저에서 열기1. `ui/game-start/index.html`을 브라우저에서 열기

2. 각 화면을 순서대로 탐색하며 UI/UX 확인2. 각 화면을 순서대로 탐색하며 UI/UX 확인

3. Unity 개발 시 참고 자료로 활용3. Unity 개발 시 참고 자료로 활용



```bash```bash

# 프로젝트 클론# 프로젝트 클론

git clone https://github.com/qqpmzz/INDI_INHA.gitgit clone https://github.com/qqpmzz/INDI_INHA.git

cd INDI_INHAcd INDI_INHA



# 프로토타입 실행 (브라우저에서 열기)# 프로토타입 실행 (브라우저에서 열기)

start ui/game-start/index.html    # Windowsstart ui/game-start/index.html    # Windows

# open ui/game-start/index.html   # macOS  # open ui/game-start/index.html   # macOS  

# xdg-open ui/game-start/index.html  # Linux# xdg-open ui/game-start/index.html  # Linux

``````



### 프로토타입 주요 기능### 프로토타입 주요 기능

- ✅ **완전한 UI 플로우**: 모든 화면 간 이동 구현- ✅ **완전한 UI 플로우**: 모든 화면 간 이동 구현

- ✅ **상점 시스템**: 부활석/룬석 구매 (달러 결제)- ✅ **상점 시스템**: 부활석/룬석 구매 (달러 결제)

- ✅ **설정 시스템**: 오디오/그래픽/게임플레이 설정- ✅ **설정 시스템**: 오디오/그래픽/게임플레이 설정

- ✅ **반응형 디자인**: 다양한 해상도 대응- ✅ **반응형 디자인**: 다양한 해상도 대응

- ✅ **키보드/마우스 지원**: Unity 입력 시스템 참고용- ✅ **키보드/마우스 지원**: Unity 입력 시스템 참고용



## 📋 Unity 개발 가이드## 📋 Unity 개발 가이드



### 요구사항 문서### 요구사항 문서

- **[Unity_UI_Requirements.md](docs/Unity_UI_Requirements.md)**: 상세한 UI 요구사항 명세서- **[Unity_UI_Requirements.md](docs/Unity_UI_Requirements.md)**: 상세한 UI 요구사항 명세서

- **[UI_Hierarchy_Structure.md](docs/UI_Hierarchy_Structure.md)**: Unity Canvas 계층 구조 가이드- **[UI_Hierarchy_Structure.md](docs/UI_Hierarchy_Structure.md)**: Unity Canvas 계층 구조 가이드



### Unity 구현 체크리스트### Unity 구현 체크리스트

- [ ] Canvas 기반 UI 시스템 구축- [ ] Canvas 기반 UI 시스템 구축

- [ ] 화면 해상도 대응 UI 스케일링- [ ] 화면 해상도 대응 UI 스케일링

- [ ] 게임 진행 상태 저장 시스템- [ ] 게임 진행 상태 저장 시스템

- [ ] 챕터 해제 상태 관리- [ ] 챕터 해제 상태 관리

- [ ] 플레이어 스탯 및 재화 관리- [ ] 플레이어 스탯 및 재화 관리

- [ ] 상점 결제 시스템 연동- [ ] 상점 결제 시스템 연동

- [ ] 설정 데이터 영속화- [ ] 설정 데이터 영속화

- [ ] 모바일 터치 입력 대응- [ ] 모바일 터치 입력 대응



## 🎨 디자인 시스템## 🎨 디자인 시스템



### 색상 팔레트### 색상 팔레트

- **주요 색상**: 보라색 그라데이션 (`#4B0082` → `#8A2BE2`)- **주요 색상**: 보라색 그라데이션 (`#4B0082` → `#8A2BE2`)

- **HP 바**: 빨강→노랑→초록 그라데이션- **HP 바**: 빨강→노랑→초록 그라데이션

- **MP 바**: 파랑→하늘색 그라데이션- **MP 바**: 파랑→하늘색 그라데이션

- **배경**: 다크 테마 (검정/회색 기반)- **배경**: 다크 테마 (검정/회색 기반)



### 캐릭터 규격### 캐릭터 규격

- **플레이어**: 32x48px (마법사 - 보라 모자, 파란 로브)- **플레이어**: 32x48px (마법사 - 보라 모자, 파란 로브)

- **적 캐릭터**: 32x48px (다양한 디자인)- **적 캐릭터**: 32x48px (다양한 디자인)



### UI 애니메이션### UI 애니메이션

- 캐릭터 Idle 애니메이션 (상하 움직임)- 캐릭터 Idle 애니메이션 (상하 움직임)

- HP/MP 바 변화 애니메이션- HP/MP 바 변화 애니메이션

- 버튼 호버 효과- 버튼 호버 효과

- 타이틀 네온 효과- 타이틀 네온 효과



## 💰 상점 시스템 명세## 💰 상점 시스템 명세



### 상품 구성### 상품 구성

**부활석 (💎)****부활석 (💎)**

- 1개: $5.00- 1개: $5.00

- 3개: $10.00 (33% 할인)- 3개: $10.00 (33% 할인)

- 10개: $20.00 (60% 할인)- 10개: $20.00 (60% 할인)



**룬석 (🔮)****룬석 (🔮)**

- 1개: $5.00  - 1개: $5.00  

- 3개: $10.00 (33% 할인)- 3개: $10.00 (33% 할인)

- 10개: $20.00 (60% 할인)- 10개: $20.00 (60% 할인)



**특별 상품****특별 상품**

- 스타터 콤보: 부활석 3개 + 룬석 3개 = $15.00- 스타터 콤보: 부활석 3개 + 룬석 3개 = $15.00

- 프리미엄 콤보: 부활석 10개 + 룬석 10개 = $30.00- 프리미엄 콤보: 부활석 10개 + 룬석 10개 = $30.00



## ⚙️ 설정 시스템 명세## ⚙️ 설정 시스템 명세



### 오디오 설정### 오디오 설정

- 전체 음소거 토글- 전체 음소거 토글

- 마스터/BGM/SFX 볼륨 슬라이더- 마스터/BGM/SFX 볼륨 슬라이더



### 그래픽 설정### 그래픽 설정

- 품질: 저/중/고/울트라- 품질: 저/중/고/울트라

- 해상도 선택- 해상도 선택

- 전체화면/수직동기화- 전체화면/수직동기화



### 게임플레이 설정### 게임플레이 설정

- 기본 난이도- 기본 난이도

- 자동저장/튜토리얼 토글- 자동저장/튜토리얼 토글

- UI 크기 조절- UI 크기 조절

- 언어 선택- 언어 선택



## 🎮 게임플레이 시스템## 🔧 개발 환경



### 전투 시스템### 권장 Unity 버전

- **실시간 전투**: 빠른 액션과 전략적 사고- **Unity 2022.3 LTS** 이상

- **스킬 시스템**: 4개 마법 스킬 (🔥❄️⚡💚)

- **HP/MP 관리**: 실시간 상태 모니터링### 필요 패키지

- UI Toolkit (권장)

### 플레이어 시스템- 또는 Legacy UI System

- **마법사 캐릭터**: 32x48px 픽셀 아트- TextMeshPro

- **성장 시스템**: 레벨업 및 능력치 향상- Unity Analytics (선택사항)

- **아이템 시스템**: 부활석/룬석 활용

## 📞 연락처

### 챕터 시스템

- **Chapter 1**: The Beginning (시작 챕터)- **개발자**: qqpmzz

- **Chapter 2**: The Forest (잠금)- **저장소**: [https://github.com/qqpmzz/INDI_INHA](https://github.com/qqpmzz/INDI_INHA)

- **Chapter 3**: The Castle (잠금)

- **난이도**: Easy, Normal, Hard, Expert---



## 🔧 개발 환경> 💡 **참고**: 웹 프로토타입은 Unity 개발의 디자인 참고 자료입니다. 실제 게임은 Unity로 구현될 예정입니다.

        ├── index.html       # 메뉴 HTML

### 권장 Unity 버전        ├── style.css        # 메뉴 스타일

- **Unity 2022.3 LTS** 이상        └── script.js        # 메뉴 로직

```

### 필요 패키지

- UI Toolkit (권장) 또는 Legacy UI System## 🎯 게임 플로우

- TextMeshPro

- Unity Analytics (선택사항)```mermaid

- Unity IAP (상점 시스템용)graph LR

    A[🎬 Game Start] -->|Any Key| B[📱 Main Menu]

### 개발 도구    B -->|Start| C[🎮 Game - 미구현]

- **IDE**: Visual Studio 또는 Visual Studio Code    B -->|Load| D[💾 Load - 미구현]

- **버전 관리**: Git    B -->|Settings| E[⚙️ Settings - 미구현]

- **아트 도구**: Aseprite (픽셀 아트용)    B -->|Credits| F[👥 Credits]

    B -->|Exit| G[🚪 Exit]

## 🚀 개발 로드맵    B -->|ESC| A

```

### Phase 1: Core UI (완료)

- ✅ 웹 프로토타입 완성## 🎮 조작 방법

- ✅ UI 요구사항 명세서 작성

- ✅ 디자인 시스템 정의### 게임 시작 화면

- **아무 키 입력**: 메인 메뉴로 이동

### Phase 2: Unity 이식 (예정)- **마우스 클릭**: 메인 메뉴로 이동

- [ ] Unity 프로젝트 생성- **터치**: 메인 메뉴로 이동 (모바일)

- [ ] Canvas 기반 UI 구현

- [ ] 화면 간 네비게이션 시스템### 메인 메뉴

- **↑/↓ 방향키 또는 W/S**: 메뉴 선택

### Phase 3: 게임플레이 (예정)- **Enter 또는 Space**: 메뉴 실행

- [ ] 캐릭터 컨트롤러- **ESC**: 게임 시작 화면으로 돌아가기

- [ ] 전투 시스템- **마우스**: 호버 및 클릭으로 메뉴 조작

- [ ] 스킬 시스템

## 📋 구현 상태

### Phase 4: 시스템 통합 (예정)

- [ ] 상점 시스템 구현| 화면/기능 | 상태 | 설명 |

- [ ] 저장/로드 시스템|-----------|------|------|

- [ ] 설정 데이터 관리| 🎬 게임 시작 화면 | ✅ 완료 | 타이틀 화면 및 키 입력 감지 |

| 📱 메인 메뉴 | ✅ 완료 | 5개 메뉴 옵션 및 네비게이션 |

### Phase 5: 배포 준비 (예정)| 🎮 게임 화면 | ⏳ 예정 | 실제 게임플레이 인터페이스 |

- [ ] 성능 최적화| 💾 세이브/로드 | ⏳ 예정 | 게임 저장 및 불러오기 |

- [ ] 모바일 대응| ⚙️ 설정 화면 | ⏳ 예정 | 게임 옵션 및 설정 |

- [ ] 테스트 및 디버깅| 👥 크레딧 | ✅ 완료 | 제작진 정보 (알림창) |



## 📊 기술 스택## 🛠️ 기술 스택



### Unity 기술- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)

- **UI 시스템**: Canvas, UI Toolkit- **디자인**: Flexbox, CSS Grid, CSS Animations

- **애니메이션**: Animator, DOTween- **호환성**: 모던 브라우저 (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)

- **데이터 관리**: ScriptableObjects, JSON

- **입력 시스템**: New Input System## 📖 상세 문서



### 아트 파이프라인더 자세한 UI 구조와 개발 정보는 다음 문서를 참고하세요:

- **픽셀 아트**: 32x48px 캐릭터, 16x16px 타일- 📑 **[UI 문서](./docs/UI_Documentation.md)**: 화면별 상세 분석 및 기술 구현 세부사항

- **스프라이트 아틀라스**: 메모리 최적화

- **애니메이션**: 스프라이트 시트 기반## 🤝 기여하기



## 🔍 참고 자료프로젝트에 기여를 환영합니다! 다음 단계를 따라주세요:



### Unity 학습 리소스1. 이 저장소를 Fork합니다

- [Unity Learn](https://learn.unity.com/)2. 새로운 기능 브랜치를 만듭니다 (`git checkout -b feature/AmazingFeature`)

- [Unity Documentation](https://docs.unity3d.com/)3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)

- [Unity UI Best Practices](https://unity.com/how-to/unity-ui-optimization-tips)4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)

5. Pull Request를 생성합니다

### 픽셀 아트 리소스

- [Aseprite Tutorial](https://www.aseprite.org/docs/)## 📝 라이선스

- [Pixel Art Academy](https://pixelartacademy.com/)

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참고하세요.

## 📞 연락처 및 기여

## 👥 제작팀

- **개발자**: qqpmzz

- **저장소**: [https://github.com/qqpmzz/INDI_INHA](https://github.com/qqpmzz/INDI_INHA)- **개발**: INDI INHA Team

- **이슈 리포트**: GitHub Issues를 통해 버그 리포트 및 기능 요청- **GitHub**: [@qqpmzz](https://github.com/qqpmzz)



### 기여 방법---

1. 프로젝트 Fork

2. Feature 브랜치 생성<div align="center">

3. 변경사항 커밋

4. Pull Request 생성**🎮 INDI INHA Adventure Game 🎮**



---*웹에서 만나는 특별한 어드벤처*



## 📝 라이선스</div>


MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

> 💡 **참고**: 현재 웹 프로토타입은 Unity 개발의 디자인 참고 자료입니다. 실제 게임은 Unity 엔진으로 구현될 예정입니다.

> 🎮 **시작하기**: `ui/game-start/index.html`을 브라우저에서 열어서 프로토타입을 체험해보세요!