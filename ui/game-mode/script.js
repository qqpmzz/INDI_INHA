// 게임 모드 선택 스크립트
class GameMode {
    constructor() {
        this.currentIndex = 0;
        this.modeItems = [];
        this.init();
    }

    init() {
        // DOM 로드 완료 시 초기화
        document.addEventListener('DOMContentLoaded', () => {
            this.setupModeSelection();
            this.setupEventListeners();
        });

        // 이미 DOM이 로드된 경우
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.setupModeSelection();
            this.setupEventListeners();
        }
    }

    setupModeSelection() {
        // 모드 아이템들 가져오기
        this.modeItems = Array.from(document.querySelectorAll('.mode-item'));

        // 첫 번째 아이템을 활성화
        this.updateActiveItem();

        console.log('Game Mode Selection Loaded - INDI INHA');
        console.log(`Mode options: ${this.modeItems.length}`);
    }

    setupEventListeners() {
        // 키보드 네비게이션
        document.addEventListener('keydown', (event) => {
            this.handleKeyPress(event);
        });

        // 마우스 클릭 이벤트
        this.modeItems.forEach((item, index) => {
            const button = item.querySelector('.mode-button');

            // 마우스 호버 시 활성화
            button.addEventListener('mouseenter', () => {
                this.currentIndex = index;
                this.updateActiveItem();
            });

            // 클릭 이벤트
            button.addEventListener('click', () => {
                this.selectMode(button.dataset.action);
            });
        });
    }

    handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                event.preventDefault();
                this.moveUp();
                break;

            case 'ArrowDown':
            case 's':
            case 'S':
                event.preventDefault();
                this.moveDown();
                break;

            case 'Enter':
            case ' ':
                event.preventDefault();
                this.selectCurrentMode();
                break;

            case 'Escape':
                event.preventDefault();
                this.goBackToMainMenu();
                break;
        }
    }

    moveUp() {
        this.currentIndex = (this.currentIndex - 1 + this.modeItems.length) % this.modeItems.length;
        this.updateActiveItem();
    }

    moveDown() {
        this.currentIndex = (this.currentIndex + 1) % this.modeItems.length;
        this.updateActiveItem();
    }

    updateActiveItem() {
        // 모든 아이템에서 active 클래스 제거
        this.modeItems.forEach(item => {
            item.classList.remove('active');
        });

        // 현재 아이템에 active 클래스 추가
        if (this.modeItems[this.currentIndex]) {
            this.modeItems[this.currentIndex].classList.add('active');
        }
    }

    selectCurrentMode() {
        const currentButton = this.modeItems[this.currentIndex]?.querySelector('.mode-button');
        if (currentButton) {
            const action = currentButton.dataset.action;
            this.selectMode(action);
        }
    }

    selectMode(action) {
        console.log(`Selected game mode: ${action}`);

        // 선택 효과 추가
        this.addSelectionEffect();

        // 모드 액션 처리
        setTimeout(() => {
            this.handleModeAction(action);
        }, 300);
    }

    addSelectionEffect() {
        const currentItem = this.modeItems[this.currentIndex];
        if (currentItem) {
            const button = currentItem.querySelector('.mode-button');
            button.style.transform = 'translateX(10px) scale(0.95)';

            setTimeout(() => {
                button.style.transform = 'translateX(10px)';
            }, 150);
        }
    }

    handleModeAction(action) {
        switch (action) {
            case 'story-mode':
                this.startStoryMode();
                break;

            case 'chapter-select':
                this.openChapterSelect();
                break;

            case 'endless-mode':
                this.startEndlessMode();
                break;

            case 'main-menu':
                this.goToMainMenuDirect();
                break;

            default:
                console.log(`Unknown mode action: ${action}`);
                this.showNotImplemented(action);
        }
    }

    startStoryMode() {
        console.log('Starting Story Mode...');
        // story-mode 화면으로 이동
        window.location.href = '../story-mode/index.html';
    }

    openChapterSelect() {
        console.log('Opening Chapter Select...');
        // chapter-select 화면으로 이동
        window.location.href = '../chapter-select/index.html';
    }

    startEndlessMode() {
        console.log('Starting Endless Mode...');
        alert('무한 모드를 시작합니다!\n(게임 화면이 아직 구현되지 않았습니다.)');
    }

    goBackToMainMenu() {
        // ESC 키로 메인 메뉴로 돌아가기 (확인 팝업 있음)
        console.log('Going back to main menu...');
        if (confirm('메인 메뉴로 돌아가시겠습니까?')) {
            window.location.href = '../main-menu/index.html';
        }
    }

    goToMainMenuDirect() {
        // 메인메뉴 버튼으로 바로 이동 (확인 팝업 없음)
        console.log('Going to main menu directly...');
        window.location.href = '../main-menu/index.html';
    }

    showNotImplemented(action) {
        alert(`"${action}" 모드가 아직 구현되지 않았습니다.`);
    }

    // 게임 모드 정보 반환
    getModeInfo() {
        return {
            title: 'INDI INHA - Game Mode Selection',
            version: '1.0.0',
            currentScreen: 'game-mode',
            activeMode: this.currentIndex,
            totalModes: this.modeItems.length,
            modes: ['story-mode', 'chapter-select', 'endless-mode']
        };
    }
}

// 게임 모드 인스턴스 생성
const gameMode = new GameMode();

// 전역 함수로 접근 가능
window.getModeInfo = () => gameMode.getModeInfo();

// 디버그 함수
window.debugGameMode = () => {
    console.log('Game Mode Debug Info:');
    console.log(gameMode.getModeInfo());
};