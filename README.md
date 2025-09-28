# 🎮 Lost Spells - Magic Adventure Game

> Unity 기반 마법 어드벤처 게임 개발 프로젝트

**Lost Spells**는 Unity로 개발되는 픽셀 아트 스타일의 마법 어드벤처 게임입니다. 현재 저장소의 웹 UI는 Unity 구현 전 프로토타입 및 디자인 확인용으로 제작되었습니다.

---

## ✨ 프로젝트 개요

- 🎯 **게임 엔진**: Unity (PC/모바일 대응)
- 🎨 **아트 스타일**: 픽셀 아트 레트로 스타일
- 🌟 **장르**: Magic Adventure Game
- 📋 **개발 단계**: UI 프로토타이핑 및 요구사항 분석 단계

## 🔄 게임 플로우

```
게임 시작 → 메인 메뉴 → [상점/설정] → 게임 모드 선택 → 스토리 모드 → 챕터 선택 → 난이도 선택 → 게임 플레이
```

### 주요 화면 구성
- **게임 시작**: 타이틀 화면 및 진입점
- **메인 메뉴**: 게임 시작, 상점, 설정, 나가기
- **상점**: 부활석/룬석 구매 시스템 (달러 결제)
- **설정**: 오디오/그래픽/게임플레이 설정
- **게임플레이**: 실시간 마법 전투 시스템

---

## 🛠️ 현재 저장소 구성

> ⚠️ **중요**: 현재 웹 UI는 Unity 개발을 위한 **프로토타입**입니다.

### 📁 프로젝트 구조

```
INDI_INHA/
├── README.md                           # 프로젝트 개요
├── docs/
│   ├── Unity_UI_Requirements.md        # Unity UI 요구사항 명세서
│   └── UI_Hierarchy_Structure.md       # Unity UI 계층 구조 문서
└── ui/                                 # 웹 프로토타입 (Unity 참고용)
    ├── game-start/                     # 게임 시작 화면
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    ├── main-menu/                      # 메인 메뉴
    ├── shop/                           # 상점 시스템
    ├── settings/                       # 설정 화면
    ├── game-mode/                      # 게임 모드 선택
    ├── story-mode/                     # 스토리 모드
    ├── chapter-select/                 # 챕터 선택
    ├── difficulty-select/              # 난이도 선택
    └── game-play/                      # 게임플레이 화면
```

---

## 🎮 웹 프로토타입 체험

### 🚀 빠른 시작

1. **프로젝트 클론**
```bash
git clone https://github.com/qqpmzz/INDI_INHA.git
cd INDI_INHA
```

2. **프로토타입 실행**
```bash
# Windows에서 실행
start ui/game-start/index.html
```

3. **체험 가능한 기능**
- ✅ **완전한 UI 플로우**: 모든 화면 간 이동
- ✅ **상점 시스템**: 부활석/룬석 구매 (달러 결제)
- ✅ **설정 시스템**: 오디오/그래픽/게임플레이 설정
- ✅ **반응형 디자인**: 다양한 해상도 대응
- ✅ **키보드/마우스 지원**: Unity 입력 시스템 참고용

---

## 📋 Unity 개발 가이드

### 📖 요구사항 문서
- **[Unity_UI_Requirements.md](docs/Unity_UI_Requirements.md)**: 상세한 UI 요구사항 명세서
- **[UI_Hierarchy_Structure.md](docs/UI_Hierarchy_Structure.md)**: Unity Canvas 계층 구조 가이드

### ✅ Unity 구현 체크리스트
- [ ] Canvas 기반 UI 시스템 구축
- [ ] 화면 해상도 대응 UI 스케일링
- [ ] 게임 진행 상태 저장 시스템
- [ ] 챕터 해제 상태 관리
- [ ] 플레이어 스탯 및 재화 관리
- [ ] 상점 결제 시스템 연동
- [ ] 설정 데이터 영속화
- [ ] 모바일 터치 입력 대응

---

## 🎨 디자인 시스템

### 🎨 색상 팔레트
- **주요 색상**: 보라색 그라데이션 (`#4B0082` → `#8A2BE2`)
- **HP 바**: 빨강→노랑→초록 그라데이션
- **MP 바**: 파랑→하늘색 그라데이션
- **배경**: 다크 테마 (검정/회색 기반)

### 👾 캐릭터 규격
- **플레이어**: 32x48px (마법사 - 보라 모자, 파란 로브)
- **적 캐릭터**: 32x48px (다양한 디자인)

### ✨ UI 애니메이션
- 캐릭터 Idle 애니메이션 (상하 움직임)
- HP/MP 바 변화 애니메이션
- 버튼 호버 효과
- 타이틀 네온 효과

---

## 💰 상점 시스템

### 🛍️ 상품 구성

**부활석 (💎)**
- 1개: $5.00
- 3개: $10.00 (33% 할인)
- 10개: $20.00 (60% 할인)

**룬석 (🔮)**
- 1개: $5.00  
- 3개: $10.00 (33% 할인)
- 10개: $20.00 (60% 할인)

**특별 상품 ✨**
- 스타터 콤보: 부활석 3개 + 룬석 3개 = $15.00
- 프리미엄 콤보: 부활석 10개 + 룬석 10개 = $30.00

---

## ⚙️ 설정 시스템

### 🔊 오디오 설정
- 전체 음소거 토글
- 마스터/BGM/SFX 볼륨 슬라이더

### 🖼️ 그래픽 설정
- 품질: 저/중/고/울트라
- 해상도 선택
- 전체화면/수직동기화

### 🎯 게임플레이 설정
- 기본 난이도
- 자동저장/튜토리얼 토글
- UI 크기 조절
- 언어 선택

---

## 🎮 게임플레이 시스템

### ⚔️ 전투 시스템
- **실시간 전투**: 빠른 액션과 전략적 사고
- **스킬 시스템**: 4개 마법 스킬 (🔥❄️⚡💚)
- **HP/MP 관리**: 실시간 상태 모니터링

### 🧙‍♂️ 플레이어 시스템
- **마법사 캐릭터**: 32x48px 픽셀 아트
- **성장 시스템**: 레벨업 및 능력치 향상
- **아이템 시스템**: 부활석/룬석 활용

### 📖 챕터 시스템
- **Chapter 1**: The Beginning (시작 챕터)
- **Chapter 2**: The Forest (잠금)
- **Chapter 3**: The Castle (잠금)
- **난이도**: Easy, Normal, Hard, Expert

---

## 🔧 개발 환경

### 🎯 권장 Unity 버전
- **Unity 2022.3 LTS** 이상

### 📦 필요 패키지
- UI Toolkit (권장) 또는 Legacy UI System
- TextMeshPro
- Unity Analytics (선택사항)
- Unity IAP (상점 시스템용)

### 🛠️ 개발 도구
- **IDE**: Visual Studio 또는 Visual Studio Code
- **버전 관리**: Git
- **아트 도구**: Aseprite (픽셀 아트용)

---

## 🚀 개발 로드맵

### Phase 1: Core UI ✅ (완료)
- ✅ 웹 프로토타입 완성
- ✅ UI 요구사항 명세서 작성
- ✅ 디자인 시스템 정의

### Phase 2: Unity 이식 🔄 (진행 예정)
- [ ] Unity 프로젝트 생성
- [ ] Canvas 기반 UI 구현
- [ ] 화면 간 네비게이션 시스템

### Phase 3: 게임플레이 ⏳ (예정)
- [ ] 캐릭터 컨트롤러
- [ ] 전투 시스템
- [ ] 스킬 시스템

### Phase 4: 시스템 통합 ⏳ (예정)
- [ ] 상점 시스템 구현
- [ ] 저장/로드 시스템
- [ ] 설정 데이터 관리

### Phase 5: 배포 준비 ⏳ (예정)
- [ ] 성능 최적화
- [ ] 모바일 대응
- [ ] 테스트 및 디버깅

---

## 📊 기술 스택

### 🎮 Unity 기술
- **UI 시스템**: Canvas, UI Toolkit
- **애니메이션**: Animator, DOTween
- **데이터 관리**: ScriptableObjects, JSON
- **입력 시스템**: New Input System

### 🎨 아트 파이프라인
- **픽셀 아트**: 32x48px 캐릭터, 16x16px 타일
- **스프라이트 아틀라스**: 메모리 최적화
- **애니메이션**: 스프라이트 시트 기반

---

## 📚 참고 자료

### 🎓 Unity 학습 리소스
- [Unity Learn](https://learn.unity.com/)
- [Unity Documentation](https://docs.unity3d.com/)
- [Unity UI Best Practices](https://unity.com/how-to/unity-ui-optimization-tips)

### 🖼️ 픽셀 아트 리소스
- [Aseprite Tutorial](https://www.aseprite.org/docs/)
- [Pixel Art Academy](https://pixelartacademy.com/)

---

## 🤝 기여 및 연락처

### 👨‍💻 개발자 정보
- **개발자**: qqpmzz
- **저장소**: [https://github.com/qqpmzz/INDI_INHA](https://github.com/qqpmzz/INDI_INHA)
- **이슈 리포트**: GitHub Issues를 통해 버그 리포트 및 기능 요청

### 🔧 기여 방법
1. 프로젝트 Fork
2. Feature 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push (`git push origin feature/amazing-feature`)
5. Pull Request 생성

---

## 📄 라이선스

이 프로젝트는 MIT License 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 💡 중요 안내

> **프로토타입 안내**: 현재 웹 UI는 Unity 개발을 위한 디자인 참고 자료입니다. 실제 게임은 Unity 엔진으로 구현될 예정입니다.

> **시작하기**: `ui/game-start/index.html`을 브라우저에서 열어서 프로토타입을 체험해보세요! 🎮

---

**Made with ❤️ for Unity Game Development**
