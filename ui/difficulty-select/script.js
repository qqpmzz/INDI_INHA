// 난이도 선택 스크립트
class DifficultySelect {
    constructor() {
        this.saveData = this.loadSaveData();
        this.init();
    }

    init() {
        // DOM 로드 완료 시 초기화
        document.addEventListener('DOMContentLoaded', () => {
            this.setupEventListeners();
            this.updateSaveStatus();
        });

        // 이미 DOM이 로드된 경우
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.setupEventListeners();
            this.updateSaveStatus();
        }
    }

    setupEventListeners() {
        // 모든 버튼에 클릭 이벤트 추가
        const buttons = document.querySelectorAll('.save-button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                // 비활성화된 버튼은 클릭 무시
                if (e.target.disabled || e.target.classList.contains('disabled')) {
                    e.preventDefault();
                    return;
                }

                const action = e.target.dataset.action;
                this.handleAction(action);
            });
        });

        // 카드 hover 효과
        const cards = document.querySelectorAll('.difficulty-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('hover');
            });

            card.addEventListener('mouseleave', () => {
                card.classList.remove('hover');
            });
        });

        console.log('Difficulty Select Loaded - INDI INHA');
    }

    handleAction(action) {
        console.log(`Selected action: ${action}`);

        const [type, difficulty] = action.split('-');

        if (type === 'new') {
            this.startNewGame(difficulty);
        } else if (type === 'continue') {
            this.continueGame(difficulty);
        }
    }

    startNewGame(difficulty) {
        console.log(`Starting new ${difficulty} game...`);

        // 해당 난이도의 기존 저장 데이터 삭제
        if (confirm(`${this.getDifficultyName(difficulty)} 난이도로 새 게임을 시작하시겠습니까?\\n\\n기존 저장 데이터가 있다면 삭제됩니다.`)) {
            this.saveData[difficulty] = null;
            this.saveSaveData();

            // 챕터 선택 화면으로 이동하며 난이도 정보 전달
            window.location.href = `../chapter-select/index.html?difficulty=${difficulty}&mode=new`;
        }
    }

    continueGame(difficulty) {
        console.log(`Continuing ${difficulty} game...`);

        // 저장된 데이터로 게임 이어하기 - 스토리 진행 화면으로 직접 이동
        if (this.saveData[difficulty]) {
            const saveData = this.saveData[difficulty];
            // 스토리 모드 화면으로 이동하며 저장 데이터 정보 전달
            window.location.href = `../story-mode/index.html?difficulty=${difficulty}&chapter=${saveData.chapter}&progress=${saveData.progress}&mode=continue`;
        } else {
            alert('저장된 데이터가 없습니다.');
        }
    }

    loadSaveData() {
        // localStorage에서 저장 데이터 로드
        const saved = localStorage.getItem('indi_inha_save_data');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Save data parse error:', e);
            }
        }

        // 기본 저장 데이터 구조 - 난이도별 진행상황 설정
        return {
            easy: {
                chapter: 5,
                progress: 100,
                lastSaved: '2024-09-27T10:30:00.000Z',
                completedChapters: [1, 2, 3, 4, 5]
            },
            normal: {
                chapter: 3,
                progress: 75,
                lastSaved: '2024-09-26T15:45:00.000Z',
                completedChapters: [1, 2]
            },
            hard: null
        };
    }

    saveSaveData() {
        localStorage.setItem('indi_inha_save_data', JSON.stringify(this.saveData));
    }

    updateSaveStatus() {
        // 각 난이도별로 저장 데이터 존재 여부 확인 및 UI 업데이트
        ['easy', 'normal', 'hard'].forEach(difficulty => {
            const continueButton = document.getElementById(`continue-${difficulty}`);

            if (continueButton) {
                if (this.saveData[difficulty]) {
                    // 저장 데이터가 있으면 이어하기 버튼 활성화 및 진행상황 표시
                    continueButton.disabled = false;
                    continueButton.classList.remove('disabled');

                    const saveData = this.saveData[difficulty];
                    continueButton.innerHTML = `이어하기<br><small>챕터 ${saveData.chapter} (${saveData.progress}%)</small>`;
                } else {
                    // 저장 데이터가 없으면 이어하기 버튼 비활성화
                    continueButton.disabled = true;
                    continueButton.classList.add('disabled');
                    continueButton.innerHTML = `이어하기<br><small>저장 데이터 없음</small>`;
                }
            }
        });
    } getDifficultyName(difficulty) {
        const names = {
            easy: '쉬움',
            normal: '보통',
            hard: '어려움'
        };
        return names[difficulty] || difficulty;
    }

    // 임시로 저장 데이터 생성 (테스트용)
    createTestSaveData(difficulty) {
        this.saveData[difficulty] = {
            chapter: 2,
            progress: 35,
            lastSaved: new Date().toISOString()
        };
        this.saveSaveData();
        this.updateSaveStatus();
    }
}

// 뒤로가기 함수
function goBack() {
    console.log('Going back to main menu...');
    window.location.href = '../main-menu/index.html';
}

// 페이지 로드 시 초기화
const difficultySelect = new DifficultySelect();