// 마법사 게임 스크립트
class GamePlay {
    constructor() {
        // 플레이어 상태
        this.playerStats = {
            hp: 100,
            maxHp: 100,
            mp: 50,
            maxMp: 50
        };

        // 게임 상태
        this.gameState = {
            currentChapter: 1,
            currentWave: 1
        };

        this.init();
    }

    init() {
        // DOM 로드 완료 시 초기화
        document.addEventListener('DOMContentLoaded', () => {
            this.setupGame();
        });

        // 이미 DOM이 로드된 경우
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.setupGame();
        }
    }

    setupGame() {
        console.log('Magic Game Display - INDI INHA');
        this.updateUI();

        // 키보드 이벤트
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case '1': // HP 감소 테스트
                    this.takeDamage(10);
                    break;
                case '2': // MP 소모 테스트
                    this.useMana(5);
                    break;
                case '3': // 웨이브 증가 테스트
                    this.nextWave();
                    break;
                case '4': // 챕터 변경 테스트
                    this.nextChapter();
                    break;
            }
        });
    }

    // UI 업데이트
    updateUI() {
        // HP 바 업데이트
        const hpBar = document.getElementById('player-health');
        const hpText = document.getElementById('hp-text');
        if (hpBar && hpText) {
            const hpPercentage = (this.playerStats.hp / this.playerStats.maxHp) * 100;
            hpBar.style.width = `${hpPercentage}%`;
            hpText.textContent = `${this.playerStats.hp}/${this.playerStats.maxHp}`;
        }

        // MP 바 업데이트
        const mpBar = document.getElementById('player-mana');
        const mpText = document.getElementById('mp-text');
        if (mpBar && mpText) {
            const mpPercentage = (this.playerStats.mp / this.playerStats.maxMp) * 100;
            mpBar.style.width = `${mpPercentage}%`;
            mpText.textContent = `${this.playerStats.mp}/${this.playerStats.maxMp}`;
        }

        // 챕터 표시 업데이트
        const chapterDisplay = document.getElementById('current-chapter');
        if (chapterDisplay) {
            chapterDisplay.textContent = this.gameState.currentChapter;
        }

        // 웨이브 표시 업데이트
        const waveDisplay = document.getElementById('current-wave');
        if (waveDisplay) {
            waveDisplay.textContent = this.gameState.currentWave;
        }
    }

    // HP 감소
    takeDamage(damage) {
        this.playerStats.hp = Math.max(0, this.playerStats.hp - damage);
        this.updateUI();
        console.log(`HP: ${this.playerStats.hp}/${this.playerStats.maxHp}`);
    }

    // MP 소모
    useMana(cost) {
        if (this.playerStats.mp >= cost) {
            this.playerStats.mp -= cost;
            this.updateUI();
            console.log(`MP: ${this.playerStats.mp}/${this.playerStats.maxMp}`);
            return true;
        }
        console.log('MP 부족!');
        return false;
    }

    // 웨이브 증가
    nextWave() {
        this.gameState.currentWave++;
        this.updateUI();
        console.log(`Wave: ${this.gameState.currentWave}`);
    }

    // 챕터 증가
    nextChapter() {
        this.gameState.currentChapter++;
        this.gameState.currentWave = 1; // 새 챕터 시작시 웨이브 초기화
        this.updateUI();
        console.log(`Chapter: ${this.gameState.currentChapter}, Wave: ${this.gameState.currentWave}`);
    }
}

// 메뉴로 돌아가기 함수
function backToMenu() {
    window.location.href = '../main-menu/index.html';
}

// 게임 인스턴스 생성
const game = new GamePlay();