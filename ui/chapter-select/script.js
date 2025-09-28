// 챕터 선택 스크립트
class ChapterSelect {
    constructor() {
        this.currentPage = 0; // 슬라이딩 시작 위치
        this.chaptersPerPage = 3; // 화면에 보이는 카드 수
        this.maxPages = 5; // 총 페이지 수 (1,2,3 -> 2,3,4 -> 3,4,5 -> 4,5,6 -> 5,6,7)
        this.chapters = [
            {
                id: 1,
                title: "Pride",
                sin: "교만 (Pride)",
                icon: "👑",
                description: "타락한 왕의 성",
                unlocked: true,
                status: "completed", // completed, in-progress, locked
                progress: 100
            },
            {
                id: 2,
                title: "Greed",
                sin: "탐욕 (Greed)",
                icon: "💰",
                description: "끝없는 욕망이 지배하는 땅",
                unlocked: true,
                status: "in-progress",
                progress: 65
            },
            {
                id: 3,
                title: "Wrath",
                sin: "분노 (Wrath)",
                icon: "⚔️",
                description: "분노의 불꽃이 타오르는 전장",
                unlocked: false,
                status: "locked",
                progress: 0
            },
            {
                id: 4,
                title: "Envy",
                sin: "질투 (Envy)",
                icon: "👁️",
                description: "시기와 질투가 만든 미로",
                unlocked: false,
                status: "locked",
                progress: 0
            },
            {
                id: 5,
                title: "Gluttony",
                sin: "폭식 (Gluttony)",
                icon: "🍖",
                description: "탐식의 욕구가 만든 심연",
                unlocked: false,
                status: "locked",
                progress: 0
            },
            {
                id: 6,
                title: "Sloth",
                sin: "나태 (Sloth)",
                icon: "😴",
                description: "영원한 잠에 빠진 도시",
                unlocked: false,
                status: "locked",
                progress: 0
            },
            {
                id: 7,
                title: "Lust",
                sin: "색욕 (Lust)",
                icon: "💋",
                description: "유혹과 타락의 최종 심판",
                unlocked: false,
                status: "locked",
                progress: 0
            }
        ];

        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupChapterSelect();
            this.setupEventListeners();
        });

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.setupChapterSelect();
            this.setupEventListeners();
        }
    }

    setupChapterSelect() {
        this.renderAllChapters(); // 모든 카드를 미리 렌더링
        this.updateSlidePosition(); // 슬라이딩 위치 설정
        this.updateNavigationButtons();
        this.updatePageInfo();

        console.log('Chapter Select Loaded - INDI INHA');
        console.log(`Total chapters: ${this.chapters.length}, Max pages: ${this.maxPages}`);
    }

    setupEventListeners() {
        // 네비게이션 버튼 이벤트
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.addEventListener('click', () => this.previousPage());
        nextBtn.addEventListener('click', () => this.nextPage());

        // 뒤로가기 버튼
        const backButton = document.querySelector('.back-button');
        backButton.addEventListener('click', () => this.goBackToGameMode());

        // 키보드 이벤트
        document.addEventListener('keydown', (event) => {
            this.handleKeyPress(event);
        });

        // 창 크기 변경 시 슬라이딩 위치 업데이트
        window.addEventListener('resize', () => {
            this.updateSlidePosition();
        });
    }

    renderAllChapters() {
        const chapterGrid = document.getElementById('chapterGrid');
        chapterGrid.innerHTML = '';

        // 모든 챕터 카드를 한번에 생성
        this.chapters.forEach((chapter, index) => {
            const chapterCard = this.createChapterCard(chapter);
            chapterGrid.appendChild(chapterCard);
        });
    }

    updateSlidePosition() {
        const chapterGrid = document.getElementById('chapterGrid');

        // 반응형에 따른 카드 크기 계산
        const screenWidth = window.innerWidth;
        let cardWidth, gap;

        if (screenWidth <= 480) {
            cardWidth = 180;
            gap = 12.8; // 0.8rem
        } else if (screenWidth <= 768) {
            cardWidth = 220;
            gap = 32; // 2rem  
        } else {
            cardWidth = 240; // 통일된 카드 크기
            gap = 32; // 2rem
        }

        // 카드 한 칸 이동 거리 = 카드너비 + 간격
        const slideDistance = cardWidth + gap;

        // 각 페이지마다 정확히 한 카드씩 왼쪽으로 이동
        // currentPage 0: 카드 1,2,3 보임 (offset: 0)
        // currentPage 1: 카드 2,3,4 보임 (offset: -272px)  
        // currentPage 2: 카드 3,4,5 보임 (offset: -544px)
        const offset = -this.currentPage * slideDistance;

        chapterGrid.style.transform = `translateX(${offset}px)`;

        const visibleCards = [this.currentPage + 1, this.currentPage + 2, this.currentPage + 3];
        console.log(`Page: ${this.currentPage + 1}/5, Slide Distance: ${slideDistance}px, Visible Cards: [${visibleCards.join(', ')}], Offset: ${offset}px`);
    }

    createChapterCard(chapter) {
        const card = document.createElement('div');
        card.className = `chapter-card ${chapter.status}`;
        card.dataset.chapterId = chapter.id;

        // 상태별 아이콘과 색상
        const statusInfo = {
            'completed': { icon: '✅', text: '완료', color: '#4CAF50' },
            'in-progress': { icon: '⚡', text: '진행중', color: '#FF9800' },
            'locked': { icon: '🔒', text: '잠김', color: '#757575' }
        };

        const status = statusInfo[chapter.status];

        card.innerHTML = `
            <div class="chapter-header">
                <div class="chapter-number">Chapter ${chapter.id}</div>
                <div class="chapter-status-badge" style="color: ${status.color}">
                    <span class="status-icon">${status.icon}</span>
                    <span class="status-text">${status.text}</span>
                </div>
            </div>
            
            <div class="chapter-main">
                <div class="chapter-icon">${chapter.icon}</div>
                <div class="chapter-info">
                    <div class="chapter-title">${chapter.title}</div>
                    <div class="chapter-sin">${chapter.sin.split(' (')[0]}</div>
                    <div class="chapter-description">${chapter.description}</div>
                </div>
            </div>
            
            <!-- 진행률 오버레이 - 카드 하단에 띄움 -->
            <div class="progress-overlay">
                <div class="progress-label-overlay">진행률</div>
                <div class="progress-bar-overlay">
                    <div class="progress-fill-overlay" style="width: ${chapter.progress}%; background-color: ${status.color}"></div>
                </div>
                <div class="progress-text-overlay">${chapter.progress}%</div>
            </div>
        `;

        // 클릭 이벤트
        if (chapter.unlocked) {
            card.addEventListener('click', () => this.selectChapter(chapter));
        } else {
            card.addEventListener('click', () => this.showLockedMessage(chapter));
        }

        return card;
    }

    selectChapter(chapter) {
        console.log(`Selected chapter: ${chapter.title}`);
        const message = `${chapter.title} - ${chapter.sin}\n\n` +
            `"${chapter.description}"\n\n` +
            `챕터 ${chapter.id}을(를) 시작하시겠습니까?\n` +
            `(실제 게임 플레이는 아직 구현되지 않았습니다.)`;

        if (confirm(message)) {
            alert(`${chapter.title} 챕터를 시작합니다!`);
        }
    }

    showLockedMessage(chapter) {
        alert(`${chapter.title} - ${chapter.sin}\n\n이 챕터는 아직 잠겨있습니다.\n이전 챕터를 완료하고 오세요.`);
    }

    previousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updateSlidePosition();
            this.updateNavigationButtons();
            this.updatePageInfo();
        }
    }

    nextPage() {
        if (this.currentPage < this.maxPages - 1) {
            this.currentPage++;
            this.updateSlidePosition();
            this.updateNavigationButtons();
            this.updatePageInfo();
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.disabled = this.currentPage === 0;
        nextBtn.disabled = this.currentPage === this.maxPages - 1;
    }

    updatePageInfo() {
        const currentPageElement = document.querySelector('.current-page');
        const totalPagesElement = document.querySelector('.total-pages');

        currentPageElement.textContent = this.currentPage + 1;
        totalPagesElement.textContent = this.maxPages;
    }

    handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowLeft':
            case 'a':
            case 'A':
                event.preventDefault();
                this.previousPage();
                break;

            case 'ArrowRight':
            case 'd':
            case 'D':
                event.preventDefault();
                this.nextPage();
                break;

            case 'Escape':
                event.preventDefault();
                this.goBackToGameMode();
                break;
        }
    }

    goBackToGameMode() {
        console.log('Going back to game mode...');
        window.location.href = '../game-mode/index.html';
    }

    // 챕터 선택 정보 반환
    getChapterSelectInfo() {
        const visibleChapters = this.chapters.slice(this.currentPage, this.currentPage + this.chaptersPerPage);
        return {
            title: 'INDI INHA - Chapter Select',
            version: '1.0.0',
            currentScreen: 'chapter-select',
            currentPage: this.currentPage,
            maxPages: this.maxPages,
            totalChapters: this.chapters.length,
            unlockedChapters: this.chapters.filter(c => c.unlocked).length,
            visibleChapters: visibleChapters.map(c => `${c.id}. ${c.title}`).join(', '),
            chaptersPerPage: this.chaptersPerPage
        };
    }
}

// 챕터 선택 인스턴스 생성
const chapterSelect = new ChapterSelect();

// 전역 함수로 접근 가능
window.getChapterSelectInfo = () => chapterSelect.getChapterSelectInfo();

// 디버그 함수
window.debugChapterSelect = () => {
    console.log('Chapter Select Debug Info:');
    console.log(chapterSelect.getChapterSelectInfo());
};