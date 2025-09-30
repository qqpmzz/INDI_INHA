# Lost Spells - Story Mode Selection System

## 📋 Overview
스토리모드 선택 시스템은 사용자가 새로운 게임을 시작하거나 기존 세이브 파일로 게임을 이어할 수 있는 인터페이스입니다.

## 🎮 Features

### 스토리 모드 선택
- **새로 시작하기 (New Game)**: 새로운 게임을 시작
- **이어하기 (Continue)**: 기존 세이브 파일로 게임 재개

### 세이브 파일 관리
- **세이브 슬롯 표시**: 최대 3개의 세이브 파일 지원
- **진행도 시각화**: 챕터별 진행 상황과 완료율 표시
- **세이브 파일 정보**: 최근 플레이 날짜, 챕터 정보, 완료율
- **세이브 파일 삭제**: 안전 확인 후 세이브 파일 제거
- **새 슬롯 추가**: 빈 슬롯에서 새로운 게임 시작

## 🎨 Design Elements

### Visual Design
- **Magic Theme**: 마법적인 요소가 적용된 어둠 톤 디자인
- **Glassmorphism Effects**: 반투명 배경과 블러 효과
- **Gradient Borders**: 청색 계열 그라데이션 테두리
- **Glow Effects**: 텍스트와 버튼의 발광 효과

### Color Scheme
- **Primary**: Blue tones (#4fc3f7, #29b6f6)
- **Background**: Dark gradients (#1a1a2e, #16213e)
- **Success**: Green accents (#4caf50)
- **Warning**: Red accents (#f44336)
- **Text**: White and light blue variants

## 🔧 Technical Implementation

### HTML Structure
```html
<!-- 메인 메뉴 배경 -->
<div class="main-menu">
  <!-- 스토리 선택 모달 -->
  <div class="modal-overlay" id="storyModal">
    <div class="story-modal">
      <!-- 새로 시작하기 / 이어하기 선택 -->
    </div>
  </div>
  
  <!-- 세이브 파일 관리 모달 -->
  <div class="modal-overlay" id="saveModal">
    <div class="save-modal">
      <!-- 세이브 파일 목록과 관리 기능 -->
    </div>
  </div>
  
  <!-- 삭제 확인 모달 -->
  <div class="modal-overlay" id="confirmModal">
    <div class="confirm-modal">
      <!-- 세이브 파일 삭제 확인 -->
    </div>
  </div>
</div>
```

### JavaScript Functionality
```javascript
// 주요 기능들
- showStoryModal(): 스토리 선택 모달 표시
- showSaveModal(): 세이브 파일 관리 모달 표시
- startNewGame(): 새로운 게임 시작
- loadSaveFile(slot): 선택된 세이브 파일 로드
- deleteSaveFile(slot): 세이브 파일 삭제
- createNewSlot(): 새로운 세이브 슬롯 생성
```

### CSS Features
```css
/* 주요 스타일 클래스들 */
.story-modal: 스토리 선택 모달 스타일
.save-modal: 세이브 파일 관리 모달 스타일
.save-file-item: 개별 세이브 파일 아이템 스타일
.progress-bar: 게임 진행도 바 스타일
.confirm-modal: 삭제 확인 모달 스타일
```

## 📱 Responsive Design

### Mobile Optimization
- **Adaptive Layout**: 화면 크기에 맞는 레이아웃 조정
- **Touch-friendly**: 터치 인터페이스에 최적화된 버튼 크기
- **Vertical Stacking**: 모바일에서 세이브 파일 정보 세로 배치

### Breakpoints
- **Desktop**: > 768px - 가로 배치
- **Mobile**: ≤ 768px - 세로 배치

## 🎯 User Experience

### Interaction Flow
1. **Story Mode 선택**: 메인 메뉴에서 "Story Mode" 선택
2. **New Game/Continue 선택**: 새 게임 시작 또는 기존 게임 이어하기
3. **Save File Management**: Continue 선택 시 세이브 파일 관리 화면
4. **Game Launch**: 세이브 파일 선택 또는 새 게임 생성

### Safety Features
- **Delete Confirmation**: 세이브 파일 삭제 시 확인 팝업
- **Progress Preservation**: 게임 진행도 안전한 저장
- **Easy Navigation**: 직관적인 뒤로가기 버튼

## 🚀 Getting Started

### File Structure
```
메인메뉴/STORY_MODE_선택시/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
└── README.md          # 문서 (현재 파일)
```

### Usage
1. `index.html` 파일을 웹 브라우저에서 열기
2. 스토리 모드 선택 인터페이스 확인
3. 새로 시작하기/이어하기 기능 테스트

## 💡 Key Features Detail

### Save File Display
- **Preview Thumbnail**: 각 세이브 파일의 대표 아이콘
- **Chapter Information**: 현재 진행 중인 챕터 표시
- **Progress Bar**: 시각적 진행도 표시 (0-100%)
- **Last Played Date**: 마지막 플레이 날짜 기록

### New Slot Creation
- **Dashed Border**: 새 슬롯 생성 가능 영역 표시
- **Plus Icon**: 직관적인 추가 버튼
- **Hover Effects**: 마우스 오버 시 시각적 피드백

### Delete Safety
- **Two-step Confirmation**: 실수 방지를 위한 2단계 확인
- **Warning Message**: 삭제 불가능 알림
- **Cancel Option**: 취소 기능 제공

## 🎨 Animation Effects

### Entry Animations
- **Fade In**: 모달 등장 시 페이드 인 효과
- **Slide In**: 모달 내용 슬라이드 인 애니메이션
- **Scale**: 버튼 클릭 시 스케일 변화

### Hover Effects
- **Glow**: 버튼 호버 시 발광 효과
- **Transform**: 3D 변형 효과
- **Color Transition**: 부드러운 색상 전환

### Background Effects
- **Blur**: 배경 블러 처리
- **Particle Animation**: 마법 파티클 애니메이션
- **Rotating Circles**: 회전하는 마법진 효과

## 🔮 Integration Notes

### Unity Integration Ready
- **HTML Structure**: Unity WebGL 임베딩 준비
- **CSS Variables**: 쉬운 테마 변경 지원
- **JavaScript Hooks**: Unity와 통신 가능한 함수 구조

### Data Format
```javascript
// 세이브 파일 데이터 형식
{
  slot: 1,
  name: "Save 1",
  chapter: "Chapter 3",
  progress: 45,
  date: "2024-01-15",
  thumbnail: "🌟"
}
```

이제 Lost Spells 게임의 스토리모드 선택 시스템이 완성되었습니다! 이 시스템은 직관적인 세이브 파일 관리와 안전한 게임 진행을 지원합니다.