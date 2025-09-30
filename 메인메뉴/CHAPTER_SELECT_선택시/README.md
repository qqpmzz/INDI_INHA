# Lost Spells - Chapter Select System

## 📋 Overview
Chapter Select 시스템은 사용자가 Lost Spells 게임의 7개 챕터 중 원하는 챕터를 선택할 수 있는 카드 기반 캐러셀 인터페이스입니다.

## 🎮 Features

### 챕터 캐러셀
- **7개 챕터**: Chapter 1-7까지 순차적 진행
- **3개씩 표시**: 한 화면에 3개 챕터 카드 동시 표시
- **슬라이더 네비게이션**: 좌우 화살표로 한 장씩 카드 넘기기
- **부드러운 전환**: CSS 트랜지션으로 자연스러운 슬라이드 효과

### 챕터 상태 시스템
- **완료 (Completed)**: 챕터 1 - 100% 완료, 별 3/3, 트로피 5/5
- **진행중 (In Progress)**: 챕터 2 - 65% 진행, 별 2/3, 트로피 3/5  
- **잠김 (Locked)**: 챕터 3-7 - 이전 챕터 완료 시 해금

### 진행도 표시
- **시각적 프로그레스 바**: 각 챕터별 완료율 표시
- **상세 통계**: 획득한 별과 트로피 개수
- **상태 아이콘**: ✓(완료), ▶(진행중), 🔒(잠김)

## 🎨 Design Elements

### Visual Design
- **Seven Sins Theme**: 7가지 대죄를 다루는 챕터별 스토리
- **Card-based Layout**: 직관적인 카드 레이아웃
- **Status Colors**: 상태별 구분되는 색상 체계
- **Magic Effects**: 마법적 글로우와 파티클 효과

### Color Scheme by Status
- **Completed**: Green tones (#8bc34a, #689f38)
- **In Progress**: Yellow/Orange tones (#ffc107, #ffa000)
- **Locked**: Gray tones (#9e9e9e, #616161)
- **Primary**: Blue magical theme (#4fc3f7, #29b6f6)

### Chapter Themes
1. **The Lost Voice**: 잃어버린 목소리 - 시작의 챕터
2. **Whispers of Pride**: 교만의 속삭임 - 첫 번째 대죄
3. **Echoes of Envy**: 질투의 메아리 - 두 번째 대죄
4. **Flames of Wrath**: 분노의 불꽃 - 세 번째 대죄
5. **Shadows of Sloth**: 나태의 그림자 - 네 번째 대죄
6. **Hunger of Gluttony**: 탐식의 굶주림 - 다섯 번째 대죄
7. **Greed's End**: 탐욕의 끝 - 최종 챕터

## 🔧 Technical Implementation

### HTML Structure
```html
<!-- 챕터 캐러셀 컨테이너 -->
<div class="chapter-carousel-container">
  <!-- 이전/다음 네비게이션 버튼 -->
  <button class="carousel-nav-btn prev-btn">‹</button>
  
  <!-- 챕터 카드 뷰포트 -->
  <div class="chapters-viewport">
    <div class="chapters-container">
      <!-- 7개 챕터 카드 -->
      <div class="chapter-card [completed|in-progress|locked]">
        <!-- 챕터 내용 -->
      </div>
    </div>
  </div>
  
  <!-- 다음 버튼 -->
  <button class="carousel-nav-btn next-btn">›</button>
</div>
```

### JavaScript Functionality
```javascript
// 주요 변수
let currentSlide = 0;  // 현재 슬라이드 위치
const chaptersPerView = 3;  // 한 화면에 표시할 카드 수
const totalChapters = 7;  // 전체 챕터 수

// 핵심 기능들
- slideChapters(direction): 카드 슬라이드 이동
- updateNavigationButtons(): 네비게이션 버튼 상태 업데이트
- updateIndicators(): 인디케이터 업데이트
- startChapter(chapterNumber): 선택된 챕터 시작
```

### CSS Features
```css
/* 주요 스타일 클래스들 */
.chapters-container: 카드 컨테이너 (transform으로 슬라이드)
.chapter-card: 개별 챕터 카드 스타일
.progress-fill: 진행도 바 애니메이션
.carousel-nav-btn: 네비게이션 버튼
.chapter-indicators: 현재 위치 표시 점들
```

## 📱 Responsive Design

### Desktop (> 1024px)
- **카드 너비**: 300px
- **3개 카드**: 완전한 가로 배치
- **큰 네비게이션**: 50px 원형 버튼

### Tablet (768px - 1024px)
- **카드 너비**: 280px
- **조정된 간격**: 최적화된 여백
- **중간 크기 버튼**: 45px 네비게이션

### Mobile (< 768px)
- **카드 너비**: 260px
- **세로 배치 푸터**: 모바일 친화적 레이아웃
- **터치 최적화**: 스와이프 제스처 지원

## 🎯 User Experience

### Navigation Flow
1. **Chapter Select 진입**: 메인 메뉴에서 "Chapter Select" 선택
2. **캐러셀 탐색**: 좌우 화살표로 챕터 탐색
3. **챕터 선택**: 해금된 챕터 카드 클릭
4. **게임 시작**: 선택된 챕터로 게임 진행

### Interaction Features
- **Keyboard Support**: 방향키로 네비게이션
- **Touch Gestures**: 모바일 스와이프 지원
- **Visual Feedback**: 호버 효과와 애니메이션
- **Status Prevention**: 잠긴 챕터 접근 방지

### Progress System
- **Sequential Unlock**: 순차적 챕터 해금 시스템
- **Achievement Tracking**: 별과 트로피 수집 시스템
- **Completion Rate**: 정확한 진행률 표시

## 🚀 Getting Started

### File Structure
```
메인메뉴/CHAPTER_SELECT_선택시/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
└── README.md          # 문서 (현재 파일)
```

### Usage
1. `index.html` 파일을 웹 브라우저에서 열기
2. 챕터 선택 인터페이스 자동 표시
3. 좌우 화살표로 챕터 탐색
4. 해금된 챕터 클릭하여 게임 시작

## 💡 Key Features Detail

### Carousel System
- **Smooth Sliding**: CSS transform과 transition 활용
- **Boundary Control**: 첫/마지막 슬라이드에서 버튼 비활성화
- **Responsive Cards**: 화면 크기에 따른 카드 크기 조정
- **Touch Support**: 모바일 터치 제스처 완벽 지원

### Status Visualization
- **Color Coding**: 상태별 명확한 색상 구분
- **Progress Animation**: 부드러운 프로그레스 바 애니메이션
- **Icon System**: 직관적인 상태 아이콘
- **Accessibility**: 색약자를 고려한 텍스트 라벨

### Chapter Information
- **Rich Descriptions**: 각 챕터의 상세 설명
- **Achievement Display**: 획득 가능한 별과 트로피 정보
- **Progress Percentage**: 정확한 완료율 표시
- **Play Button States**: 상태에 따른 버튼 텍스트 변경

## 🎮 Interactive Elements

### Button States
- **재플레이** (Completed): 완료된 챕터 재도전
- **계속하기** (In Progress): 진행 중인 챕터 이어하기
- **잠겨있음** (Locked): 해금 조건 미충족

### Navigation Controls
- **Arrow Buttons**: 좌우 슬라이드 이동
- **Indicators**: 현재 위치 시각적 표시
- **Keyboard**: 방향키로 조작 가능
- **Touch Swipe**: 터치 스와이프 제스처

### Safety Features
- **Sequential Progress**: 순차적 챕터 진행 강제
- **Locked Prevention**: 잠긴 챕터 접근 시 알림
- **Confirmation**: 챕터 시작 전 확인 다이얼로그

## 🔮 Integration Notes

### Unity Integration Ready
- **Modular Design**: Unity WebGL 임베딩 준비
- **Data Structure**: 챕터 진행 데이터 JSON 호환
- **Event System**: Unity와 통신 가능한 함수 구조

### Data Format
```javascript
// 챕터 데이터 형식
{
  chapter: 1,
  status: "completed", // completed, in-progress, locked
  progress: 100,       // 0-100 percentage
  stars: { earned: 3, total: 3 },
  trophies: { earned: 5, total: 5 },
  title: "The Lost Voice",
  description: "인류가 잃어버린 목소리를 찾아..."
}
```

### Animation Timing
- **Slide Duration**: 0.4s ease transition
- **Hover Effects**: 0.3s 변형 효과
- **Progress Bars**: 0.3s width animation
- **Button Feedback**: 즉시 반응형 피드백

Lost Spells 게임의 Chapter Select 시스템이 완성되었습니다! 이 시스템은 7개 챕터의 순차적 진행과 직관적인 카드 기반 네비게이션을 제공합니다. 🎮✨
