// 메인 메뉴 스크립트
class MainMenu {
    constructor() {
        this.currentIndex = 0;
        this.menuItems = [];
        this.init();
    }

    init() {
        // DOM 로드 완료 시 초기화
        document.addEventListener('DOMContentLoaded', () => {
            this.setupMenu();
            this.setupEventListeners();
        });

        // 이미 DOM이 로드된 경우
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.setupMenu();
            this.setupEventListeners();
        }
    }

    setupMenu() {
        // 메뉴 아이템들 가져오기
        this.menuItems = Array.from(document.querySelectorAll('.menu-item'));

        // 첫 번째 아이템을 활성화
        this.updateActiveItem();

        console.log('Main Menu Loaded - INDI INHA');
        console.log(`Menu items: ${this.menuItems.length}`);
    }

    setupEventListeners() {
        // 키보드 네비게이션
        document.addEventListener('keydown', (event) => {
            this.handleKeyPress(event);
        });

        // 마우스 클릭 이벤트
        this.menuItems.forEach((item, index) => {
            const button = item.querySelector('.menu-button');

            // 마우스 호버 시 활성화
            button.addEventListener('mouseenter', () => {
                this.currentIndex = index;
                this.updateActiveItem();
            });

            // 클릭 이벤트
            button.addEventListener('click', () => {
                this.selectMenuItem(button.dataset.action);
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
                this.selectCurrentItem();
                break;

            case 'Escape':
                event.preventDefault();
                this.goBack();
                break;
        }
    }

    moveUp() {
        this.currentIndex = (this.currentIndex - 1 + this.menuItems.length) % this.menuItems.length;
        this.updateActiveItem();
    }

    moveDown() {
        this.currentIndex = (this.currentIndex + 1) % this.menuItems.length;
        this.updateActiveItem();
    }

    updateActiveItem() {
        // 모든 아이템에서 active 클래스 제거
        this.menuItems.forEach(item => {
            item.classList.remove('active');
        });

        // 현재 아이템에 active 클래스 추가
        if (this.menuItems[this.currentIndex]) {
            this.menuItems[this.currentIndex].classList.add('active');
        }
    }

    selectCurrentItem() {
        const currentButton = this.menuItems[this.currentIndex]?.querySelector('.menu-button');
        if (currentButton) {
            const action = currentButton.dataset.action;
            this.selectMenuItem(action);
        }
    }

    selectMenuItem(action) {
        console.log(`Selected menu action: ${action}`);

        // 선택 효과 추가
        this.addSelectionEffect();

        // 메뉴 액션 처리
        setTimeout(() => {
            this.handleMenuAction(action);
        }, 300);
    }

    addSelectionEffect() {
        const currentItem = this.menuItems[this.currentIndex];
        if (currentItem) {
            const button = currentItem.querySelector('.menu-button');
            button.style.transform = 'translateX(10px) scale(0.95)';

            setTimeout(() => {
                button.style.transform = 'translateX(10px)';
            }, 150);
        }
    }

    handleMenuAction(action) {
        switch (action) {
            case 'start-game':
                this.startNewGame();
                break;

            case 'settings':
                this.openSettings();
                break;

            case 'exit':
                this.exitGame();
                break;

            default:
                console.log(`Unknown action: ${action}`);
                this.showNotImplemented(action);
        }
    }

    startNewGame() {
        console.log('Starting new game...');
        // game-mode 화면으로 이동
        window.location.href = '../game-mode/index.html';
    }

    openSettings() {
        console.log('Opening settings...');
        alert('설정 화면입니다.\n(아직 구현되지 않았습니다.)');
    }

    exitGame() {
        console.log('Exiting game...');
        if (confirm('게임을 종료하시겠습니까?')) {
            // 웹에서는 창을 닫거나 이전 페이지로 이동
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.close();
            }
        }
    }

    goBack() {
        // 게임 시작 화면으로 돌아가기
        console.log('Going back to start screen...');
        if (confirm('시작 화면으로 돌아가시겠습니까?')) {
            window.location.href = '../game-start/index.html';
        }
    }

    showNotImplemented(action) {
        alert(`"${action}" 기능이 아직 구현되지 않았습니다.`);
    }

    // 게임 정보 반환
    getGameInfo() {
        return {
            title: 'INDI INHA',
            version: '1.0.0',
            currentMenu: 'main-menu',
            activeItem: this.currentIndex,
            totalItems: this.menuItems.length
        };
    }
}

// 메인 메뉴 인스턴스 생성
const mainMenu = new MainMenu();

// 전역 함수로 접근 가능
window.getMenuInfo = () => mainMenu.getGameInfo();

// 디버그 함수
window.debugMainMenu = () => {
    console.log('Main Menu Debug Info:');
    console.log(mainMenu.getGameInfo());
};