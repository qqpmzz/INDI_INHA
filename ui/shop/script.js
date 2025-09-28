// Lost Spells - Shop JavaScript
class ShopManager {
    constructor() {
        this.playerCurrency = {
            revivalStones: 0,
            runeStones: 0,
            dollars: 100.00 // 시작 잔액
        };

        this.currentPurchase = null;
        this.init();
    }

    init() {
        this.loadCurrency();
        this.setupEventListeners();
        this.updateCurrencyDisplay();

        console.log('Shop Manager initialized');
    }

    setupEventListeners() {
        // 탭 버튼 이벤트
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // 구매 버튼 이벤트
        document.querySelectorAll('.buy-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const price = parseFloat(e.target.dataset.price);
                const item = e.target.dataset.item;
                const quantity = parseInt(e.target.dataset.quantity);

                this.initiatePurchase(item, quantity, price);
            });
        });

        // 모달 닫기 이벤트
        document.querySelectorAll('.close-modal').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                this.closeAllModals();
            });
        });

        // 모달 배경 클릭으로 닫기
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeAllModals();
                }
            });
        });

        // 키보드 이벤트
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    switchTab(tabName) {
        // 모든 탭 비활성화
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // 선택된 탭 활성화
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');

        console.log(`Switched to ${tabName} tab`);
    }

    initiatePurchase(item, quantity, price) {
        // 잔액 확인
        if (this.playerCurrency.dollars < price) {
            this.showInsufficientFundsModal();
            return;
        }

        // 구매 정보 저장
        this.currentPurchase = {
            item: item,
            quantity: quantity,
            price: price
        };

        // 구매 확인 모달 표시
        this.showPurchaseModal(item, quantity, price);
    }

    showPurchaseModal(item, quantity, price) {
        const modal = document.getElementById('purchase-modal');
        const icon = document.getElementById('modal-icon');
        const name = document.getElementById('modal-item-name');
        const desc = document.getElementById('modal-item-desc');
        const priceElement = document.getElementById('modal-price');

        // 아이템별 정보 설정
        const itemInfo = this.getItemInfo(item, quantity);

        icon.textContent = itemInfo.icon;
        name.textContent = itemInfo.name;
        desc.textContent = itemInfo.description;
        priceElement.textContent = `$${price.toFixed(2)}`;

        modal.style.display = 'block';

        // 모달 애니메이션
        setTimeout(() => {
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 10);
    }

    showInsufficientFundsModal() {
        const modal = document.getElementById('insufficient-funds-modal');
        modal.style.display = 'block';

        setTimeout(() => {
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 10);
    }

    getItemInfo(item, quantity) {
        const itemData = {
            revival: {
                icon: '💎',
                name: `부활석 ${quantity}개`,
                description: quantity === 1 ? '캐릭터를 즉시 부활시킵니다' : `부활석 ${quantity}개 패키지`
            },
            rune: {
                icon: '🔮',
                name: `룬석 ${quantity}개`,
                description: quantity === 1 ? '스킬을 강화하는 마법의 룬석' : `룬석 ${quantity}개 패키지`
            },
            'combo-starter': {
                icon: '💎🔮',
                name: '스타터 콤보',
                description: '부활석 3개 + 룬석 3개'
            },
            'combo-premium': {
                icon: '💎🔮',
                name: '프리미엄 콤보',
                description: '부활석 10개 + 룬석 10개'
            }
        };

        return itemData[item] || { icon: '❓', name: '알 수 없는 아이템', description: '' };
    }

    confirmPurchase() {
        if (!this.currentPurchase) return;

        const { item, quantity, price } = this.currentPurchase;

        // 잔액 차감
        this.playerCurrency.dollars -= price;

        // 아이템 지급
        this.addItems(item, quantity);

        // UI 업데이트
        this.updateCurrencyDisplay();
        this.saveCurrency();

        // 구매 완료 효과
        this.showPurchaseSuccess(item, quantity);

        // 모달 닫기
        this.closeAllModals();

        console.log(`Purchase completed: ${item} x${quantity} for $${price}`);
    }

    addItems(item, quantity) {
        switch (item) {
            case 'revival':
                this.playerCurrency.revivalStones += quantity;
                break;
            case 'rune':
                this.playerCurrency.runeStones += quantity;
                break;
            case 'combo-starter':
                this.playerCurrency.revivalStones += 3;
                this.playerCurrency.runeStones += 3;
                break;
            case 'combo-premium':
                this.playerCurrency.revivalStones += 10;
                this.playerCurrency.runeStones += 10;
                break;
        }
    }

    showPurchaseSuccess(item, quantity) {
        // 구매 성공 알림 표시
        const notification = document.createElement('div');
        notification.className = 'purchase-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">✅</div>
                <div class="notification-text">구매 완료!</div>
            </div>
        `;

        // 스타일 추가
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
            color: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(78, 205, 196, 0.3);
            z-index: 2000;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            animation: purchaseSuccess 2s ease-in-out;
        `;

        // 애니메이션 추가
        const style = document.createElement('style');
        style.textContent = `
            @keyframes purchaseSuccess {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .notification-icon {
                font-size: 1.5rem;
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 2000);
    }

    addFunds() {
        // 잔액 충전 (시뮬레이션)
        const amounts = [10, 20, 50, 100];
        const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];

        this.playerCurrency.dollars += randomAmount;
        this.updateCurrencyDisplay();
        this.saveCurrency();

        // 충전 완료 알림
        alert(`$${randomAmount}가 충전되었습니다!`);

        this.closeAllModals();
    }

    updateCurrencyDisplay() {
        document.getElementById('revival-stones').textContent = this.playerCurrency.revivalStones;
        document.getElementById('rune-stones').textContent = this.playerCurrency.runeStones;
        document.getElementById('dollars').textContent = `$${this.playerCurrency.dollars.toFixed(2)}`;
    }

    loadCurrency() {
        const saved = localStorage.getItem('lostSpellsCurrency');
        if (saved) {
            this.playerCurrency = { ...this.playerCurrency, ...JSON.parse(saved) };
            console.log('Currency loaded from storage');
        }
    }

    saveCurrency() {
        localStorage.setItem('lostSpellsCurrency', JSON.stringify(this.playerCurrency));
        console.log('Currency saved to storage');
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
        this.currentPurchase = null;
    }

    backToMenu() {
        this.saveCurrency();
        window.location.href = '../main-menu/index.html';
    }

    // 디버그 함수들
    addDebugCurrency() {
        this.playerCurrency.dollars += 1000;
        this.updateCurrencyDisplay();
        this.saveCurrency();
        console.log('Added $1000 for debugging');
    }

    resetCurrency() {
        this.playerCurrency = {
            revivalStones: 0,
            runeStones: 0,
            dollars: 100.00
        };
        this.updateCurrencyDisplay();
        this.saveCurrency();
        console.log('Currency reset');
    }
}

// 전역 함수들
function backToMenu() {
    if (window.shopManager) {
        window.shopManager.backToMenu();
    } else {
        window.location.href = '../main-menu/index.html';
    }
}

function addFunds() {
    if (window.shopManager) {
        window.shopManager.addFunds();
    }
}

function confirmPurchase() {
    if (window.shopManager) {
        window.shopManager.confirmPurchase();
    }
}

function closePurchaseModal() {
    if (window.shopManager) {
        window.shopManager.closeAllModals();
    }
}

function closeInsufficientFundsModal() {
    if (window.shopManager) {
        window.shopManager.closeAllModals();
    }
}

// 디버그 함수들 (개발용)
function addDebugMoney() {
    if (window.shopManager) {
        window.shopManager.addDebugCurrency();
    }
}

function resetShopData() {
    if (window.shopManager) {
        window.shopManager.resetCurrency();
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.shopManager = new ShopManager();

    // 개발자 도구용 전역 접근
    window.debugShop = {
        addMoney: addDebugMoney,
        reset: resetShopData,
        getShopInfo: () => window.shopManager.playerCurrency
    };
});