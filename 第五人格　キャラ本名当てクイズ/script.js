const characters = [
  { job: "幸運児", name: "推理スタント", img: "https://via.placeholder.com/160x170/333/FFF?text=幸運児" },
  { job: "医師", name: "エミリー・ダイアー", img: "https://via.placeholder.com/160x170/333/FFF?text=医師" },
  { job: "弁護士", name: "フレディ・ライリー", img: "https://via.placeholder.com/160x170/333/FFF?text=弁護士" },
  { job: "泥棒", name: "クリーチャー・ピアソン", img: "https://via.placeholder.com/160x170/333/FFF?text=泥棒" },
  { job: "庭師", name: "エマ・ウッズ", img: "https://via.placeholder.com/160x170/333/FFF?text=庭師" },
  { job: "マジシャン", name: "セルヴェ・ル・ロイ", img: "https://via.placeholder.com/160x170/333/FFF?text=マジシャン" },
  { job: "冒険家", name: "カート・フランク", img: "https://via.placeholder.com/160x170/333/FFF?text=冒険家" },
  { job: "傭兵", name: "ナワーブ・サベダー", img: "https://via.placeholder.com/160x170/333/FFF?text=傭兵" },
  { job: "祭司", name: "フィオナ・ジルマン", img: "https://via.placeholder.com/160x170/333/FFF?text=祭司" },
  { job: "空軍", name: "マーサ・ベハムフィール", img: "https://via.placeholder.com/160x170/333/FFF?text=空軍" },
  { job: "機械技師", name: "トレイシー・レズニック", img: "https://via.placeholder.com/160x170/333/FFF?text=機械技師" },
  { job: "オフェンス", name: "ウィリアム・エリス", img: "https://via.placeholder.com/160x170/333/FFF?text=オフェンス" },
  { job: "心眼", name: "ヘレナ・アダムス", img: "https://via.placeholder.com/160x170/333/FFF?text=心眼" },
  { job: "調香師", name: "ウィラ・ナイエル", img: "https://via.placeholder.com/160x170/333/FFF?text=調香師" },
  { job: "カウボーイ", name: "カヴィン・アユソ", img: "https://via.placeholder.com/160x170/333/FFF?text=カウボーイ" },
  { job: "踊り子", name: "マルガレータ・ツェレ", img: "https://via.placeholder.com/160x170/333/FFF?text=踊り子" },
  { job: "占い師", name: "イライ・クラーク", img: "https://via.placeholder.com/160x170/333/FFF?text=占い師" },
  { job: "納棺師", name: "イソップ・カール", img: "https://via.placeholder.com/160x170/333/FFF?text=納棺師" },
  { job: "探鉱者", name: "ノートン・キャンベル", img: "https://via.placeholder.com/160x170/333/FFF?text=探鉱者" },
  { job: "呪術師", name: "パトリシア・ドーヴァル", img: "https://via.placeholder.com/160x170/333/FFF?text=呪術師" },
  { job: "野人", name: "モウロ", img: "https://via.placeholder.com/160x170/333/FFF?text=野人" },
  { job: "曲芸師", name: "マイク・モートン", img: "https://via.placeholder.com/160x170/333/FFF?text=曲芸師" },
  { job: "一等航海士", name: "ホセ・バーデン", img: "https://via.placeholder.com/160x170/333/FFF?text=一等航海士" },
  { job: "バーメイド", name: "デミ・バーボン", img: "https://via.placeholder.com/160x170/333/FFF?text=バーメイド" },
  { job: "ポストマン", name: "ビクター・グランツ", img: "https://via.placeholder.com/160x170/333/FFF?text=ポストマン" },
  { job: "墓守", name: "アンドルー・クレス", img: "https://via.placeholder.com/160x170/333/FFF?text=墓守" },
  { job: "囚人", name: "ルカ・バルサー", img: "https://via.placeholder.com/160x170/333/FFF?text=囚人" },
  { job: "昆虫学者", name: "メリー・プリニウス", img: "https://via.placeholder.com/160x170/333/FFF?text=昆虫学者" },
  { job: "画家", name: "エドガー・ワルデン", img: "https://via.placeholder.com/160x170/333/FFF?text=画家" },
  { job: "バッツマン", name: "ガンジ・グプタ", img: "https://via.placeholder.com/160x170/333/FFF?text=バッツマン" },
  { job: "玩具職人", name: "アニー・レスター", img: "https://via.placeholder.com/160x170/333/FFF?text=玩具職人" },
  { job: "患者", name: "エミール", img: "https://via.placeholder.com/160x170/333/FFF?text=患者" },
  { job: "心理学者", name: "エダ・メスマー", img: "https://via.placeholder.com/160x170/333/FFF?text=心理学者" },
  { job: "小説家", name: "オルフェウス", img: "https://via.placeholder.com/160x170/333/FFF?text=小説家" },
  { job: "少女", name: "記憶", img: "https://via.placeholder.com/160x170/333/FFF?text=少女" },
  { job: "泣きピエロ", name: "ジョーカー", img: "https://via.placeholder.com/160x170/333/FFF?text=泣きピエロ" },
  { job: "教授", name: "ルキノ・ドゥルギ", img: "https://via.placeholder.com/160x170/333/FFF?text=教授" },
  { job: "骨董商", name: "戚十一", img: "https://via.placeholder.com/160x170/333/FFF?text=骨董商" },
  { job: "作曲家", name: "フレデリック・クレイバーグ", img: "https://via.placeholder.com/160x170/333/FFF?text=作曲家" },
  { job: "記者", name: "アリス・デロス", img: "https://via.placeholder.com/160x170/333/FFF?text=記者" },
  { job: "航空エンジニア", name: "チャールス・ホルト", img: "https://via.placeholder.com/160x170/333/FFF?text=航空エンジニア" },
  { job: "応援団", name: "リリー・バリエル", img: "https://via.placeholder.com/160x170/333/FFF?text=応援団" },
  { job: "人形師", name: "マティアス・チェルニン", img: "https://via.placeholder.com/160x170/333/FFF?text=人形師" },
  { job: "火災調査員", name: "フロリアン・ブランド", img: "https://via.placeholder.com/160x170/333/FFF?text=火災調査員" },
  { job: "レディ・ファウロ", name: "エブリン・モレー", img: "https://via.placeholder.com/160x170/333/FFF?text=レディ・ファウロ" },
  { job: "騎士", name: "リチャード・スターリング", img: "https://via.placeholder.com/160x170/333/FFF?text=騎士" },
  { job: "気象学者", name: "ウェンディ・フート", img: "https://via.placeholder.com/160x170/333/FFF?text=気象学者" },
  { job: "弓使い", name: "ブリュンヒルド・ウェルフ", img: "https://via.placeholder.com/160x170/333/FFF?text=弓使い" },
  { job: "脱出マスター", name: "エフロン・ワイズ", img: "https://via.placeholder.com/160x170/333/FFF?text=脱出マスター" },
  { job: "幻灯師", name: "アマンダ・ゲイティス", img: "https://via.placeholder.com/160x170/333/FFF?text=幻灯師" },
  { job: "闘牛師", name: "エルナンド・ロメロ", img: "https://via.placeholder.com/160x170/333/FFF?text=闘牛師" },
  { job: "マイム・アーティスト", name: "クレオ・ドクルー", img: "https://via.placeholder.com/160x170/333/FFF?text=マイム・アーティスト" },
  { job: "神童", name: "カイ", img: "https://via.placeholder.com/160x170/333/FFF?text=神童" }
];

let openedCount = 0;
const openedSet = new Set();

let elapsedTime = 0;
let timerId = null;
let isPlaying = false;

const characterGrid = document.getElementById("characterGrid");
const characterInput = document.getElementById("characterInput");
const submitBtn = document.getElementById("submitBtn");
const startBtn = document.getElementById("startBtn");
const hintBtn = document.getElementById("hintBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const openedCountEl = document.getElementById("openedCount");
const totalCountEl = document.getElementById("totalCount");
const timeDisplay = document.getElementById("timeDisplay");
const bestTimeDisplay = document.getElementById("bestTimeDisplay");
const clearScreen = document.getElementById("clearScreen");
const finalTimeEl = document.getElementById("finalTime");
const shareXBtn = document.getElementById("shareXBtn");

// 画面読み込み時に自己ベストを表示
loadBestTime();

function normalizeText(text) {
  return text.replace(/[・「」\s]/g, "").toLowerCase();
}

// 秒数を 「00:00」 形式にフォーマット
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// localStorage から自己ベストを取得して表示
function loadBestTime() {
  const savedBest = localStorage.getItem("identityV_bestTime");
  if (savedBest) {
    bestTimeDisplay.textContent = formatTime(parseInt(savedBest, 10));
  } else {
    bestTimeDisplay.textContent = "--:--";
  }
}

function initGame() {
  clearInterval(timerId);
  elapsedTime = 0;
  isPlaying = false;
  updateTimerDisplay();

  openedCount = 0;
  openedSet.clear();
  openedCountEl.textContent = openedCount;
  totalCountEl.textContent = characters.length;

  characterInput.value = "";
  characterInput.disabled = true;
  submitBtn.disabled = true;
  hintBtn.disabled = true;
  startBtn.disabled = false;

  clearScreen.classList.add("hidden");
  showMessage("「スタート」ボタンを押してタイムアタックを開始してください！", "var(--sub-text)");

  characterGrid.innerHTML = "";
  characters.forEach((char, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `card-${index}`;

    card.innerHTML = `
      <div class="card-cover">❓</div>
      <div class="card-inner">
        <img class="character-img" src="${char.img}" alt="${char.job}">
        <div class="card-info">
          <div class="job-title">${char.job}</div>
          <div class="real-name">${char.name}</div>
        </div>
      </div>
    `;
    characterGrid.appendChild(card);
  });
}

function startGame() {
  if (isPlaying) return;

  isPlaying = true;
  characterInput.disabled = false;
  submitBtn.disabled = false;
  hintBtn.disabled = false;
  startBtn.disabled = true;

  characterInput.focus();
  showMessage("計測中！フルネームを入力して解放してください！", "var(--success-color)");

  timerId = setInterval(() => {
    elapsedTime++;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  timeDisplay.textContent = formatTime(elapsedTime);
}

function checkInput() {
  if (!isPlaying) return;

  const rawInput = characterInput.value.trim();
  const inputVal = normalizeText(rawInput);
  if (!inputVal) return;

  let found = false;

  characters.forEach((char, index) => {
    const targetName = normalizeText(char.name);

    if (inputVal === targetName) {
      found = true;
      if (!openedSet.has(index)) {
        openedSet.add(index);
        const card = document.getElementById(`card-${index}`);
        card.classList.add("open");

        openedCount++;
        openedCountEl.textContent = openedCount;
        
        showMessage(`⭕ 正解！「${char.job}（${char.name}）」を開放しました！`, "var(--success-color)");
        characterInput.value = "";

        if (openedCount === characters.length) {
          gameClear();
        }
      } else {
        showMessage(`⚠️ 「${char.job}」はすでに開放されています。`, "var(--sub-text)");
      }
    }
  });

  if (!found) {
    showMessage("❌ 該当する正式な本名が見つかりません。（フルネームで入力してください）", "var(--accent-color)");
  }
}

function showHint() {
  if (!isPlaying) return;

  const unopenIndexes = characters
    .map((_, index) => index)
    .filter(index => !openedSet.has(index));

  if (unopenIndexes.length === 0) return;

  const randomIndex = unopenIndexes[Math.floor(Math.random() * unopenIndexes.length)];
  const hintChar = characters[randomIndex];
  
  let maskedHint = "";
  const parts = hintChar.name.split("・");

  if (parts.length > 1) {
    const frontName = parts[0];
    const backLength = parts.slice(1).join("・").length;
    const maskedBack = "〇".repeat(backLength);
    maskedHint = `${frontName}・${maskedBack}`;
  } else {
    maskedHint = "〇".repeat(hintChar.name.length);
  }

  showMessage(`💡 ヒント：「${hintChar.job}」の本名は【 ${maskedHint} 】です！`, "#ffa502");
}

function showMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

// クリア処理・自己ベスト更新チェック
function gameClear() {
  clearInterval(timerId);
  isPlaying = false;
  
  const finalMin = Math.floor(elapsedTime / 60);
  const finalSec = elapsedTime % 60;
  const timeString = `${finalMin}分${finalSec}秒`;

  // localStorage による自己ベスト判定
  const currentBest = localStorage.getItem("identityV_bestTime");
  let isNewRecord = false;

  if (!currentBest || elapsedTime < parseInt(currentBest, 10)) {
    localStorage.setItem("identityV_bestTime", elapsedTime);
    loadBestTime(); // ヘッダー表示を更新
    isNewRecord = true;
  }

  // クリア画面テキストの組み立て
  let clearMsg = `クリアタイム: ${timeDisplay.textContent} (${timeString})`;
  if (isNewRecord) {
    clearMsg += " 🌟 自己ベスト更新！";
  }

  finalTimeEl.textContent = clearMsg;
  clearScreen.classList.remove("hidden");
  
  characterInput.disabled = true;
  submitBtn.disabled = true;
  hintBtn.disabled = true;

  // X（Twitter）投稿用リンク生成
  const recordLabel = isNewRecord ? "【自己ベスト更新！】" : "";
  const tweetText = `${recordLabel}【第五人格 サバイバー全キャラ本名あてクイズ】\n全${characters.length}キャラの本名を「${timeString}」で全開放しました！\n\n#IdentityV #第五人格 #全キャラ開放クイズ`;
  
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  shareXBtn.setAttribute("href", shareUrl);

  showMessage(`🎉 クリア！すべてのサバイバーを ${timeString} で開放しました！`, "var(--success-color)");
}

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkInput);
hintBtn.addEventListener("click", showHint);
resetBtn.addEventListener("click", initGame);

characterInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkInput();
});

initGame();