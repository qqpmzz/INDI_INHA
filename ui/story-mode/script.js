// 스토리 모드 스크립트
class StoryMode {
    constructor() {
        this.currentIndex = 0;
        this.storyItems = [];
        this.saveData = null;
        this.init();
    }

    init() {
        // DOM 로드 완료 시 초기화
        document.addEventListener('DOMContentLoaded', async () => {
            await this.loadSaveData();
            this.setupStorySelection();
            this.setupEventListeners();
            this.updateButtonStates();
        });

        // 이미 DOM이 로드된 경우
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.loadSaveData().then(() => {
                this.setupStorySelection();
                this.setupEventListeners();
                this.updateButtonStates();
            });
        }
    }

    async loadSaveData() {
        try {
            // 세이브가 없는 기본 상태 로드
            const response = await fetch('../../data/saveData.json');
            if (response.ok) {
                this.saveData = await response.json();
                console.log('Save data loaded:', this.saveData);
            } else {
                console.warn('Save data not found, using default state');
                this.saveData = { gameData: { hasSave: false } };
            }
        } catch (error) {
            console.error('Error loading save data:', error);
            this.saveData = { gameData: { hasSave: false } };
        }
    }

    setupStorySelection() {
        // 스토리 아이템들 가져오기
        this.storyItems = Array.from(document.querySelectorAll('.story-item'));

        // 첫 번째 아이템을 활성화
        this.updateActiveItem();

        console.log('Story Mode Selection Loaded - INDI INHA');
        console.log(`Story options: ${this.storyItems.length}`);
    }

    setupEventListeners() {
        // 키보드 네비게이션
        document.addEventListener('keydown', (event) => {
            this.handleKeyPress(event);
        });

        // 마우스 클릭 이벤트
        this.storyItems.forEach((item, index) => {
            const button = item.querySelector('.story-button');

            // 마우스 호버 시 활성화
            button.addEventListener('mouseenter', () => {
                this.currentIndex = index;
                this.updateActiveItem();
            });

            // 클릭 이벤트
            button.addEventListener('click', () => {
                this.selectStoryOption(button.dataset.action);
            });
        });
    }

    updateButtonStates() {
        const continueButton = document.querySelector('[data-action="continue-game"]');
        const continueItem = continueButton?.closest('.story-item');

        if (!continueButton || !continueItem) return;

        const hasSave = this.saveData?.gameData?.hasSave || false;

        if (hasSave) {
            // 세이브가 있으면 활성화
            continueItem.classList.remove('disabled');
            continueButton.disabled = false;

            // 저장된 게임 정보 표시
            const saveInfo = this.getSaveInfo();
            const infoElement = continueButton.querySelector('.story-info p');
            if (infoElement && saveInfo) {
                infoElement.textContent = `${saveInfo.progress}% 진행 - ${saveInfo.playtime}`;
            }
        } else {
            // 세이브가 없으면 비활성화
            continueItem.classList.add('disabled');
            continueButton.disabled = true;

            const infoElement = continueButton.querySelector('.story-info p');
            if (infoElement) {
                infoElement.textContent = '저장된 게임이 없습니다';
            }
        }
    }

    getSaveInfo() {
        if (!this.saveData?.gameData?.hasSave) return null;

        const saveFile = this.saveData.gameData.saveFile;
        const saveSlot = this.saveData.gameData.saveSlots[saveFile];

        if (!saveSlot?.exists) return null;

        return {
            progress: saveSlot.progress,
            playtime: saveSlot.playtime,
            chapter: saveSlot.chapter,
            level: saveSlot.level,
            playerName: saveSlot.playerName
        };
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
                this.selectCurrentStoryOption();
                break;

            case 'Escape':
                event.preventDefault();
                this.goBackToGameMode();
                break;
        }
    }

    moveUp() {
        this.currentIndex = (this.currentIndex - 1 + this.storyItems.length) % this.storyItems.length;
        this.updateActiveItem();
    }

    moveDown() {
        this.currentIndex = (this.currentIndex + 1) % this.storyItems.length;
        this.updateActiveItem();
    }

    updateActiveItem() {
        // 모든 아이템에서 active 클래스 제거
        this.storyItems.forEach(item => {
            item.classList.remove('active');
        });

        // 현재 아이템에 active 클래스 추가
        if (this.storyItems[this.currentIndex]) {
            this.storyItems[this.currentIndex].classList.add('active');
        }
    }

    selectCurrentStoryOption() {
        const currentButton = this.storyItems[this.currentIndex]?.querySelector('.story-button');
        if (currentButton) {
            const action = currentButton.dataset.action;
            this.selectStoryOption(action);
        }
    }

    selectStoryOption(action) {
        console.log(`Selected story option: ${action}`);

        // 이어하기 버튼이 비활성화된 경우 처리
        if (action === 'continue-game' && !this.saveData?.gameData?.hasSave) {
            this.showNoSaveMessage();
            return;
        }

        // 선택 효과 추가
        this.addSelectionEffect();

        // 스토리 액션 처리
        setTimeout(() => {
            this.handleStoryAction(action);
        }, 300);
    }

    addSelectionEffect() {
        const currentItem = this.storyItems[this.currentIndex];
        if (currentItem) {
            const button = currentItem.querySelector('.story-button');
            button.style.transform = 'translateX(10px) scale(0.95)';

            setTimeout(() => {
                button.style.transform = 'translateX(10px)';
            }, 150);
        }
    }

    handleStoryAction(action) {
        switch (action) {
            case 'continue-game':
                this.continueStory();
                break;

            case 'new-game':
                this.startNewStory();
                break;

            case 'back-to-gamemode':
                this.goBackToGameModeDirect();
                break;

            default:
                console.log(`Unknown story action: ${action}`);
                this.showNotImplemented(action);
        }
    }

    continueStory() {
        console.log('Continue Story...');
        const saveInfo = this.getSaveInfo();
        if (saveInfo) {
            const message = `저장된 게임을 불러옵니다!\n\n` +
                `플레이어: ${saveInfo.playerName}\n` +
                `진행도: ${saveInfo.progress}%\n` +
                `챕터: ${saveInfo.chapter}-${saveInfo.level}\n` +
                `플레이 시간: ${saveInfo.playtime}\n\n` +
                `(실제 게임 로딩 기능은 아직 구현되지 않았습니다.)`;
            alert(message);
        } else {
            this.showNoSaveMessage();
        }
    }

    showNoSaveMessage() {
        alert('저장된 게임이 없습니다.\n새로하기를 선택해주세요.');
    }

    startNewStory() {
        console.log('Starting New Story...');
        alert('새로운 스토리를 시작합니다!\n(스토리 게임 화면이 아직 구현되지 않았습니다.)');
    }

    goBackToGameMode() {
        // ESC 키로 게임 모드로 돌아가기 (확인 팝업 있음)
        console.log('Going back to game mode...');
        if (confirm('게임 모드 선택으로 돌아가시겠습니까?')) {
            window.location.href = '../game-mode/index.html';
        }
    }

    goBackToGameModeDirect() {
        // 게임모드 버튼으로 바로 이동 (확인 팝업 없음)
        console.log('Going to game mode directly...');
        window.location.href = '../game-mode/index.html';
    }

    showNotImplemented(action) {
        alert(`"${action}" 기능이 아직 구현되지 않았습니다.`);
    }

    // 스토리 모드 정보 반환
    getStoryInfo() {
        return {
            title: 'INDI INHA - Story Mode',
            version: '1.0.0',
            currentScreen: 'story-mode',
            activeOption: this.currentIndex,
            totalOptions: this.storyItems.length,
            options: ['continue-game', 'new-game', 'back-to-gamemode']
        };
    }
}

// 스토리 모드 인스턴스 생성
const storyMode = new StoryMode();

// 전역 함수로 접근 가능
window.getStoryInfo = () => storyMode.getStoryInfo();

// 디버그 함수
window.debugStoryMode = () => {
    console.log('Story Mode Debug Info:');
    console.log(storyMode.getStoryInfo());
};