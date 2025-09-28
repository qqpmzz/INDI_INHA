// 설정 화면 JavaScript
class SettingsManager {
    constructor() {
        this.settings = {
            audio: {
                muteAll: false,
                masterVolume: 80,
                bgmVolume: 70,
                sfxVolume: 90
            },
            graphic: {
                quality: 'medium',
                resolution: '1920x1080',
                fullscreen: true,
                vsync: false
            },
            gameplay: {
                defaultDifficulty: 'normal',
                autoSave: true,
                showTutorial: true,
                uiScale: 100,
                language: 'ko'
            }
        };

        this.init();
    }

    init() {
        // 설정 로드
        this.loadSettings();
        
        // 이벤트 리스너 등록
        this.setupEventListeners();
        
        // UI 초기화
        this.updateUI();
        
        console.log('Settings Manager initialized');
    }

    setupEventListeners() {
        // 탭 버튼 이벤트
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // 오디오 설정 이벤트
        document.getElementById('mute-all').addEventListener('change', (e) => {
            this.settings.audio.muteAll = e.target.checked;
            this.toggleAllAudio(e.target.checked);
        });

        // 볼륨 슬라이더 이벤트
        document.getElementById('master-volume').addEventListener('input', (e) => {
            this.settings.audio.masterVolume = parseInt(e.target.value);
            document.getElementById('master-volume-value').textContent = `${e.target.value}%`;
        });

        document.getElementById('bgm-volume').addEventListener('input', (e) => {
            this.settings.audio.bgmVolume = parseInt(e.target.value);
            document.getElementById('bgm-volume-value').textContent = `${e.target.value}%`;
        });

        document.getElementById('sfx-volume').addEventListener('input', (e) => {
            this.settings.audio.sfxVolume = parseInt(e.target.value);
            document.getElementById('sfx-volume-value').textContent = `${e.target.value}%`;
        });

        // 그래픽 설정 이벤트
        document.getElementById('quality-select').addEventListener('change', (e) => {
            this.settings.graphic.quality = e.target.value;
            this.applyGraphicSettings();
        });

        document.getElementById('resolution-select').addEventListener('change', (e) => {
            this.settings.graphic.resolution = e.target.value;
        });

        document.getElementById('fullscreen').addEventListener('change', (e) => {
            this.settings.graphic.fullscreen = e.target.checked;
        });

        document.getElementById('vsync').addEventListener('change', (e) => {
            this.settings.graphic.vsync = e.target.checked;
        });

        // 게임플레이 설정 이벤트
        document.getElementById('default-difficulty').addEventListener('change', (e) => {
            this.settings.gameplay.defaultDifficulty = e.target.value;
        });

        document.getElementById('auto-save').addEventListener('change', (e) => {
            this.settings.gameplay.autoSave = e.target.checked;
        });

        document.getElementById('show-tutorial').addEventListener('change', (e) => {
            this.settings.gameplay.showTutorial = e.target.checked;
        });

        document.getElementById('ui-scale').addEventListener('input', (e) => {
            this.settings.gameplay.uiScale = parseInt(e.target.value);
            document.getElementById('ui-scale-value').textContent = `${e.target.value}%`;
            this.applyUIScale(e.target.value);
        });

        document.getElementById('language-select').addEventListener('change', (e) => {
            this.settings.gameplay.language = e.target.value;
            this.changeLanguage(e.target.value);
        });

        // 키보드 네비게이션
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.backToMenu();
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

    toggleAllAudio(mute) {
        const volumeSliders = document.querySelectorAll('.volume-slider');
        volumeSliders.forEach(slider => {
            slider.disabled = mute;
            if (mute) {
                slider.style.opacity = '0.5';
            } else {
                slider.style.opacity = '1';
            }
        });

        if (mute) {
            console.log('All audio muted');
        } else {
            console.log('Audio unmuted');
        }
    }

    applyGraphicSettings() {
        const quality = this.settings.graphic.quality;
        console.log(`Graphics quality changed to: ${quality}`);
        
        // Unity에서 그래픽 품질 적용 시뮬레이션
        switch (quality) {
            case 'low':
                console.log('Applying low quality settings...');
                break;
            case 'medium':
                console.log('Applying medium quality settings...');
                break;
            case 'high':
                console.log('Applying high quality settings...');
                break;
            case 'ultra':
                console.log('Applying ultra quality settings...');
                break;
        }
    }

    applyUIScale(scale) {
        document.documentElement.style.fontSize = `${scale}%`;
        console.log(`UI scale changed to: ${scale}%`);
    }

    changeLanguage(language) {
        console.log(`Language changed to: ${language}`);
        // 실제 게임에서는 여기서 언어 리소스를 변경
    }

    loadSettings() {
        // 로컬 스토리지에서 설정 로드
        const savedSettings = localStorage.getItem('lostSpellsSettings');
        if (savedSettings) {
            this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
            console.log('Settings loaded from local storage');
        } else {
            console.log('Using default settings');
        }
    }

    saveSettings() {
        // 로컬 스토리지에 설정 저장
        localStorage.setItem('lostSpellsSettings', JSON.stringify(this.settings));
        
        // 저장 효과 표시
        this.showSaveEffect();
        
        console.log('Settings saved:', this.settings);
    }

    resetSettings() {
        // 확인 다이얼로그
        if (confirm('모든 설정을 기본값으로 복원하시겠습니까?')) {
            this.settings = {
                audio: {
                    muteAll: false,
                    masterVolume: 80,
                    bgmVolume: 70,
                    sfxVolume: 90
                },
                graphic: {
                    quality: 'medium',
                    resolution: '1920x1080',
                    fullscreen: true,
                    vsync: false
                },
                gameplay: {
                    defaultDifficulty: 'normal',
                    autoSave: true,
                    showTutorial: true,
                    uiScale: 100,
                    language: 'ko'
                }
            };

            this.updateUI();
            this.saveSettings();
            
            console.log('Settings reset to default');
        }
    }

    updateUI() {
        // 오디오 설정 UI 업데이트
        document.getElementById('mute-all').checked = this.settings.audio.muteAll;
        document.getElementById('master-volume').value = this.settings.audio.masterVolume;
        document.getElementById('master-volume-value').textContent = `${this.settings.audio.masterVolume}%`;
        document.getElementById('bgm-volume').value = this.settings.audio.bgmVolume;
        document.getElementById('bgm-volume-value').textContent = `${this.settings.audio.bgmVolume}%`;
        document.getElementById('sfx-volume').value = this.settings.audio.sfxVolume;
        document.getElementById('sfx-volume-value').textContent = `${this.settings.audio.sfxVolume}%`;

        // 그래픽 설정 UI 업데이트
        document.getElementById('quality-select').value = this.settings.graphic.quality;
        document.getElementById('resolution-select').value = this.settings.graphic.resolution;
        document.getElementById('fullscreen').checked = this.settings.graphic.fullscreen;
        document.getElementById('vsync').checked = this.settings.graphic.vsync;

        // 게임플레이 설정 UI 업데이트
        document.getElementById('default-difficulty').value = this.settings.gameplay.defaultDifficulty;
        document.getElementById('auto-save').checked = this.settings.gameplay.autoSave;
        document.getElementById('show-tutorial').checked = this.settings.gameplay.showTutorial;
        document.getElementById('ui-scale').value = this.settings.gameplay.uiScale;
        document.getElementById('ui-scale-value').textContent = `${this.settings.gameplay.uiScale}%`;
        document.getElementById('language-select').value = this.settings.gameplay.language;

        // 모든 소리 끄기 상태 적용
        this.toggleAllAudio(this.settings.audio.muteAll);
    }

    showSaveEffect() {
        const saveBtn = document.querySelector('.settings-btn.primary');
        const originalText = saveBtn.textContent;
        
        saveBtn.textContent = '저장 완료!';
        saveBtn.style.background = 'linear-gradient(135deg, #00ff00 0%, #00cc00 100%)';
        
        setTimeout(() => {
            saveBtn.textContent = originalText;
            saveBtn.style.background = 'linear-gradient(135deg, #4B0082 0%, #8A2BE2 100%)';
        }, 2000);
    }

    backToMenu() {
        // 설정을 저장하고 메뉴로 돌아가기
        this.saveSettings();
        window.location.href = '../main-menu/index.html';
    }
}

// 전역 함수들
function backToMenu() {
    if (window.settingsManager) {
        window.settingsManager.backToMenu();
    } else {
        window.location.href = '../main-menu/index.html';
    }
}

function saveSettings() {
    if (window.settingsManager) {
        window.settingsManager.saveSettings();
    }
}

function resetSettings() {
    if (window.settingsManager) {
        window.settingsManager.resetSettings();
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.settingsManager = new SettingsManager();
});