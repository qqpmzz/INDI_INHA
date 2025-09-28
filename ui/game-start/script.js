// 게임 시작 스크립트
class GameStart {
    constructor() {
        this.isTransitioning = false;
        this.init();
    }

    init() {
        // 페이지 로드 완료 시 이벤트 리스너 등록
        document.addEventListener('DOMContentLoaded', () => {
            this.setupEventListeners();
            this.showWelcomeMessage();
        });

        // 이미 DOM이 로드된 경우
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.setupEventListeners();
            this.showWelcomeMessage();
        }
    }

    setupEventListeners() {
        // 키보드 이벤트 리스너
        document.addEventListener('keydown', (event) => {
            this.handleKeyPress(event);
        });

        // 마우스 클릭 이벤트 리스너 (추가 옵션)
        document.addEventListener('click', () => {
            this.handleInput();
        });

        // 터치 이벤트 리스너 (모바일 지원)
        document.addEventListener('touchstart', () => {
            this.handleInput();
        });
    }

    handleKeyPress(event) {
        // ESC 키는 무시
        if (event.key === 'Escape') {
            return;
        }

        // 기본 동작 방지
        event.preventDefault();

        this.handleInput();
    }

    handleInput() {
        if (this.isTransitioning) {
            return;
        }

        this.isTransitioning = true;

        // 키 입력 효과 추가
        this.addKeyPressEffect();

        // main-menu로 이동
        setTimeout(() => {
            this.navigateToMainMenu();
        }, 500);
    }

    addKeyPressEffect() {
        const titleScreen = document.querySelector('.title-screen');
        const body = document.body;

        // 키 입력 효과
        titleScreen.classList.add('key-pressed');

        // 페이드 아웃 효과
        setTimeout(() => {
            body.classList.add('transitioning');
        }, 100);
    }

    navigateToMainMenu() {
        // 상대 경로로 main-menu 페이지로 이동
        // main-menu 폴더의 index.html로 이동
        const mainMenuPath = '../main-menu/index.html';

        // 페이지 이동
        window.location.href = mainMenuPath;
    }

    showWelcomeMessage() {
        // 콘솔에 환영 메시지 출력 (디버깅용)
        console.log('INDI INHA Game - Start Screen Loaded');
        console.log('Press any key to continue...');
    }

    // 게임 정보 표시 (선택사항)
    showGameInfo() {
        return {
            title: 'INDI INHA',
            version: '1.0.0',
            author: 'INDI INHA Team',
            description: 'Adventure Game'
        };
    }
}

// 게임 시작 인스턴스 생성
const gameStart = new GameStart();

// 전역 함수로 게임 정보 접근 가능
window.getGameInfo = () => gameStart.showGameInfo();

// 디버그 함수
window.debugGameStart = () => {
    console.log('Game Start Debug Info:');
    console.log('- Transitioning:', gameStart.isTransitioning);
    console.log('- Game Info:', gameStart.showGameInfo());
};