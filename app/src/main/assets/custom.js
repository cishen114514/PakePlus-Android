window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>德州棋牌竞猜</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:"微软雅黑";}
body{background:#1a1a2e;color:#fff;padding:20px;}
.container{max-width:1200px;margin:0 auto;}
.top-info{display:flex;justify-content:space-between;margin-bottom:15px;font-size:18px;align-items:center;gap:15px;flex-wrap:wrap;}
.chip{color:#ffd700;font-weight:bold;}
.get-chip-btn{padding:6px 15px;background:#ff9500;border:none;border-radius:5px;color:#fff;cursor:pointer;}
.get-chip-btn:disabled{background:#666;cursor:not-allowed;opacity:0.6;}
.ai-room{display:flex;gap:30px;justify-content:center;margin:20px 0;flex-wrap:wrap;}
.ai-box{background:#16213e;padding:20px;border-radius:12px;width:220px;text-align:center;}
.card-item{display:inline-block;width:60px;height:90px;line-height:90px;background:#fff;color:#000;border-radius:8px;margin:5px;font-size:22px;font-weight:bold;}
.card-item.red{color:#e52b2b;}
.card-item.black{color:#000;}
.odds{margin:10px 0;font-size:20px;color:#ff6b6b;}
.public-card{text-align:center;margin:25px 0;}
.pub-card{display:inline-block;width:50px;height:75px;line-height:75px;background:#fff;color:#000;border-radius:6px;margin:0 3px;font-size:18px;}
.pub-card.red{color:#e52b2b;}
.pub-card.black{color:#000;}
.time-box{text-align:center;font-size:26px;color:#00ff9c;margin:15px 0;}
.bet-area{background:#0f3460;padding:20px;border-radius:12px;margin:20px 0;}
.bet-input{width:200px;padding:8px;font-size:16px;border:none;border-radius:4px;margin:0 10px;}
.btn{padding:10px 25px;font-size:16px;border:none;border-radius:6px;cursor:pointer;margin:5px;}
.btn:disabled{opacity:0.6;cursor:not-allowed;}
.btn-bet{background:#22c55e;color:#fff;}
.btn-cancel{background:#ef4444;color:#fff;}
.type-bet{margin:15px 0;}
.type-btn{padding:8px 15px;margin:5px;cursor:pointer;}
.type-btn:disabled{background:#555;cursor:not-allowed;opacity:0.6;}
.odds-tip{font-size:14px;color:#ccc;margin-bottom:8px;}
.result{font-size:22px;text-align:center;margin:20px 0;color:#ffd700;min-height:30px;}
.bet-info{color:#ffd700;margin:10px 0;font-size:16px;}
.gameover{color:red;font-size:24px;font-weight:bold;text-align:center;margin:10px 0;}
.record-box{background:#252540;padding:15px;border-radius:10px;margin:20px 0;max-height:320px;overflow-y:auto;}
.record-title{font-size:20px;color:#ffd700;margin-bottom:10px;text-align:center;}
.record-item{border-bottom:1px solid #444;padding:8px 0;font-size:15px;line-height:1.6;}
.record-item:last-child{border:none;}
.clear-record{display:block;margin:10px auto;padding:6px 20px;background:#dd3333;border:none;border-radius:5px;color:#fff;cursor:pointer;}
</style>
</head>
<body>
<div class="container">
    <div class="top-info">
        <div>当前筹码：<span class="chip" id="userChip">1000.00</span></div>
        <button class="get-chip-btn" id="getChipBtn" onclick="getFreeChip()">领取500筹码</button>
        <div>最小下注:10 | 最大单笔:10000</div>
    </div>
    <div class="gameover" id="gameOverTip"></div>

    <div class="ai-room">
        <div class="ai-box">
            <h3>甲方AI</h3>
            <div class="cards">
                <span class="card-item" id="a1"></span>
                <span class="card-item" id="a2"></span>
            </div>
            <div class="odds">获胜赔率：<span id="oddA">--</span></div>
            <div>牌型：<span id="typeA">未判定</span></div>
        </div>
        <div class="ai-box">
            <h3>乙方AI</h3>
            <div class="cards">
                <span class="card-item" id="b1"></span>
                <span class="card-item" id="b2"></span>
            </div>
            <div class="odds">获胜赔率：<span id="oddB">--</span></div>
            <div>牌型：<span id="typeB">未判定</span></div>
        </div>
    </div>

    <div class="public-card">
        <h3>公共牌</h3>
        <div id="pubCards">
            <span class="pub-card">?</span>
            <span class="pub-card">?</span>
            <span class="pub-card">?</span>
            <span class="pub-card" style="opacity:0.3">?</span>
            <span class="pub-card" style="opacity:0.3">?</span>
        </div>
    </div>

    <div class="time-box" id="timeText">下注倒计时：15秒</div>
    <div class="bet-info" id="betInfo">当前累计下注：无</div>

    <div class="bet-area">
        <h3>玩家下注区</h3>
        <div>
            单笔下注金额：<input type="number" class="bet-input" id="betNum" min="10" max="10000" value="10">
        </div>
        <div style="margin:10px 0;">
            <button class="btn btn-bet" id="btnBetA" onclick="betWinAdd('A')">押甲方赢(可累加)</button>
            <button class="btn btn-bet" id="btnBetB" onclick="betWinAdd('B')">押乙方赢(可累加)</button>
            <button class="btn btn-cancel" id="btnCancel" onclick="cancelAllBet()">撤销全部下注</button>
        </div>
        <div class="type-bet">
            <p>下注猜测胜者牌型：</p>
            <div class="odds-tip">高牌 | <span id="rateHigh">--</span></div>
            <button class="type-btn btn-bet" id="btnHigh" onclick="betCardType('high')">下注高牌</button>

            <div class="odds-tip">对子 | <span id="ratePair">--</span></div>
            <button class="type-btn btn-bet" id="btnPair" onclick="betCardType('pair')">下注对子</button>

            <div class="odds-tip">两对 | <span id="rateTwo">--</span></div>
            <button class="type-btn btn-bet" id="btnTwo" onclick="betCardType('twoPair')">下注两对</button>

            <div class="odds-tip">三条 | <span id="rateThree">--</span></div>
            <button class="type-btn btn-bet" id="btnThree" onclick="betCardType('three')">下注三条</button>

            <div class="odds-tip">高阶大牌 | <span id="rateBig">--</span></div>
            <button class="type-btn btn-bet" id="btnBig" onclick="betCardType('big')">下注高阶大牌</button>
        </div>
    </div>

    <div class="result" id="resText"></div>
    <div class="record-box">
        <div class="record-title">📜 历史对局记牌器</div>
        <div id="recordList"></div>
        <button class="clear-record" onclick="clearAllRecord()">清空所有记录</button>
    </div>
</div>

<script>
let userChip = 1000.00;
let totalBetA = 0.00, totalBetB = 0.00;
let typeBetMap = {};
let timer = null, settleTimer = null, nextRoundTimer = null;
let countDown = 15, getChipTimes = 0;
const maxGetChip = 2, needLessChip = 100;
let roundNum = 1, gameCardRecord = [];
let aCard1, aCard2, bCard1, bCard2, pubAllCard = [];
let fullPoker = [], usedKeys = [], hasHolePair = false;
let aHasPair = false, bHasPair = false;
let sameNumDiffColor = false;
const valMap = {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13,'A':14};
const rankName = {0:"高牌",1:"对子",2:"两对",3:"三条",4:"顺子",5:"同花",6:"葫芦",7:"四条",8:"同花顺",9:"皇家同花顺"};

// 保存当前牌型赔率，结算时用
let currentOdds = {
    high:0,
    pair:0,
    twoPair:0,
    three:0,
    big:0
};

function initPoker(){
    fullPoker = []; usedKeys = [];
    let suitList = [{s:'♥',c:'red'},{s:'♦',c:'red'},{s:'♣',c:'black'},{s:'♠',c:'black'}];
    let numList = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let keyId = 0;
    for(let s of suitList){
        for(let v of numList){
            fullPoker.push({key:keyId++, val:v, suit:s.s, color:s.c});
        }
    }
}
function getRandCard(){
    let rest = fullPoker.filter(c => !usedKeys.includes(c.key));
    let card = rest[Math.floor(Math.random() * rest.length)];
    usedKeys.push(card.key);
    return card;
}

// AI胜负赔率 0.2-5.0
function calcOdds(){
    let aSum = valMap[aCard1.val] + valMap[aCard2.val];
    let bSum = valMap[bCard1.val] + valMap[bCard2.val];
    aHasPair = aCard1.val === aCard2.val;
    bHasPair = bCard1.val === bCard2.val;
    hasHolePair = aHasPair || bHasPair;
    let oA = 1.0, oB = 1.0;
    if(aHasPair && !bHasPair){
        oA = 0.7 + Math.random() * 0.5;
        oB = 1.4 + Math.random() * 1.2;
    }else if(bHasPair && !aHasPair){
        oB = 0.7 + Math.random() * 0.5;
        oA = 1.4 + Math.random() * 1.2;
    }else{
        oA = aSum >= bSum ? (0.8+Math.random()*0.6) : (1.2+Math.random()*0.7);
        oB = aSum >= bSum ? (1.2+Math.random()*0.7) : (0.8+Math.random()*0.6);
    }
    oA = Math.max(0.2, Math.min(5.0, oA));
    oB = Math.max(0.2, Math.min(5.0, oB));
    document.getElementById("oddA").innerText = oA.toFixed(2);
    document.getElementById("oddB").innerText = oB.toFixed(2);
}

// 按规则计算所有牌型赔率
function calcTypeOdds(){
    // 判断双方是否同牌不同色
    sameNumDiffColor = (aCard1.val === bCard1.val && aCard1.color !== bCard1.color)
                    || (aCard1.val === bCard2.val && aCard1.color !== bCard2.color)
                    || (aCard2.val === bCard1.val && aCard2.color !== bCard1.color)
                    || (aCard2.val === bCard2.val && aCard2.color !== bCard2.color);

    // 高牌
    let highRate;
    if(sameNumDiffColor){
        highRate = 6 + Math.random() * 2;
    }else{
        highRate = 8 + Math.random() * 12;
    }

    // 对子
    let pairRate;
    if(aHasPair || bHasPair){
        pairRate = 2 + Math.random() * 1;
    }else{
        pairRate = 1.4 + Math.random() * 0.8;
    }

    // 两对
    let twoRate;
    if(aHasPair || bHasPair){
        twoRate = 1.5 + Math.random() * 0.7;
    }else{
        twoRate = 2.0 + Math.random() * 0.9;
    }

    // 三条
    let threeRate;
    if(aHasPair || bHasPair){
        threeRate = 6 + Math.random() * 3;
    }else{
        threeRate = 10 + Math.random() * 10;
    }

    // 高阶大牌 同色判定
    let sameColorCnt = 0;
    if(aCard1.color === aCard2.color) sameColorCnt++;
    if(bCard1.color === bCard2.color) sameColorCnt++;
    let bigRate = 8 - (sameColorCnt * 1.1);
    bigRate = Math.max(3, bigRate);

    // 存到全局，结算用
    currentOdds.high = highRate;
    currentOdds.pair = pairRate;
    currentOdds.twoPair = twoRate;
    currentOdds.three = threeRate;
    currentOdds.big = bigRate;

    document.getElementById("rateHigh").innerText = highRate.toFixed(2);
    document.getElementById("ratePair").innerText = pairRate.toFixed(2);
    document.getElementById("rateTwo").innerText = twoRate.toFixed(2);
    document.getElementById("rateThree").innerText = threeRate.toFixed(2);
    document.getElementById("rateBig").innerText = bigRate.toFixed(2);
}

function getCardRank(cards){
    let nums = cards.map(x=>valMap[x.val]).sort((a,b)=>b-a);
    let flush = cards.every(c=>c.suit === cards[0].suit);
    let unique = [...new Set(nums)];
    let straight = false;
    if(unique.length === 5 && nums[0]-nums[4]===4) straight = true;
    if(straight && flush && nums[0]===14 && nums[4]===10) return {level:9, sortKey:nums};
    if(straight && flush) return {level:8, sortKey:nums};
    let countObj = {};
    nums.forEach(n=>countObj[n]=(countObj[n]||0)+1);
    let group = Object.entries(countObj).sort((x,y)=>y[1]-x[1]||y[0]-x[0]);
    if(group[0][1]===4) return {level:7, sortKey:[+group[0][0]]};
    if(group[0][1]===3 && group[1][1]===2) return {level:6, sortKey:[+group[0][0],+group[1][0]]};
    if(flush) return {level:5, sortKey:nums};
    if(straight) return {level:4, sortKey:nums};
    if(group[0][1]===3) return {level:3, sortKey:[+group[0][0]]};
    if(group[0][1]===2 && group[1][1]===2){
        let big = Math.max(+group[0][0],+group[1][0]);
        let small = Math.min(+group[0][0],+group[1][0]);
        return {level:2, sortKey:[big,small,+group[2][0]]};
    }
    if(group[0][1]===2) return {level:1, sortKey:[+group[0][0]]};
    return {level:0, sortKey:nums};
}
function getBestHand(hole, community){
    let all = [...hole, ...community];
    let best = null;
    const len = all.length;
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            let five = [];
            for(let k=0;k<len;k++){
                if(k!==i && k!==j) five.push(all[k]);
                if(five.length >=5) break;
            }
            let res = getCardRank(five);
            if(!best) best = res;
            else{
                if(res.level > best.level) best = res;
                else if(res.level === best.level){
                    for(let idx=0;idx<Math.max(res.sortKey.length,best.sortKey.length);idx++){
                        let a = res.sortKey[idx]||0;
                        let b = best.sortKey[idx]||0;
                        if(a>b){best=res;break;}
                        if(a<b)break;
                    }
                }
            }
        }
    }
    return best;
}

function saveRecord(txt){
    let aStr = `${aCard1.val}${aCard1.suit} ${aCard2.val}${aCard2.suit}`;
    let bStr = `${bCard1.val}${bCard1.suit} ${bCard2.val}${bCard2.suit}`;
    let pStr = pubAllCard.map(c=>`${c.val}${c.suit}`).join(" ");
    gameCardRecord.unshift(`第${roundNum}轮 ${txt}<br>甲方:${aStr}<br>乙方:${bStr}<br>公共:${pStr}`);
    roundNum++;
    renderRecord();
}
function renderRecord(){
    let html = "";
    gameCardRecord.forEach(item=>html+=`<div class="record-item">${item}</div>`);
    document.getElementById("recordList").innerHTML = html;
}
function clearAllRecord(){
    gameCardRecord = []; roundNum = 1; renderRecord();
}

function updateChipBtn(){
    let btn = document.getElementById("getChipBtn");
    btn.disabled = getChipTimes>=maxGetChip || userChip>=needLessChip;
}
function getFreeChip(){
    if(getChipTimes>=maxGetChip||userChip>=needLessChip)return;
    userChip = parseFloat((userChip + 500).toFixed(2));
    getChipTimes++;
    document.getElementById("userChip").innerText = userChip.toFixed(2);
    updateChipBtn();
}
function resetChipCheck(isWin){
    if(userChip < 10 && !isWin){
        userChip = 1000; getChipTimes = 0;
        totalBetA = totalBetB = 0; typeBetMap = {};
        document.getElementById("userChip").innerText = userChip.toFixed(2);
        document.getElementById("gameOverTip").innerText = "筹码耗尽自动重置";
        setTimeout(()=>document.getElementById("gameOverTip").innerText="",1500);
    }
    updateChipBtn();
}

function betWinAdd(side){
    let num = Number(document.getElementById("betNum").value);
    if(isNaN(num)||num<10||num>10000||num>userChip){
        alert("下注金额非法或筹码不足");
        return;
    }
    userChip = parseFloat((userChip - num).toFixed(2));
    side==='A' ? totalBetA+=num : totalBetB+=num;
    document.getElementById("userChip").innerText = userChip.toFixed(2);
    refreshBetShow(); updateChipBtn();
}
function betCardType(type){
    let num = Number(document.getElementById("betNum").value);
    if(isNaN(num)||num<10||num>userChip){
        alert("筹码不足");
        return;
    }
    userChip = parseFloat((userChip - num).toFixed(2));
    typeBetMap[type] = (typeBetMap[type]||0)+num;
    document.getElementById("userChip").innerText = userChip.toFixed(2);
    updateChipBtn();
}
function cancelAllBet(){
    let back = totalBetA + totalBetB;
    Object.values(typeBetMap).forEach(v=>back+=v);
    userChip = parseFloat((userChip + back).toFixed(2));
    totalBetA = totalBetB = 0; typeBetMap = {};
    document.getElementById("userChip").innerText = userChip.toFixed(2);
    refreshBetShow(); updateChipBtn();
}
function refreshBetShow(){
    let text = "";
    if(totalBetA>0) text += `押甲方:${totalBetA.toFixed(2)} `;
    if(totalBetB>0) text += `押乙方:${totalBetB.toFixed(2)}`;
    document.getElementById("betInfo").innerText = text || "当前累计下注：无";
}

function setBetBtnLock(lock){
    document.getElementById("btnBetA").disabled = lock;
    document.getElementById("btnBetB").disabled = lock;
    document.getElementById("btnCancel").disabled = lock;
    document.getElementById("btnHigh").disabled = lock || hasHolePair;
    document.getElementById("btnPair").disabled = lock;
    document.getElementById("btnTwo").disabled = lock;
    document.getElementById("btnThree").disabled = lock;
    document.getElementById("btnBig").disabled = lock;
}

function startNewRound(){
    initPoker();
    clearInterval(timer);clearInterval(settleTimer);clearInterval(nextRoundTimer);
    countDown = 15; totalBetA = totalBetB = 0; typeBetMap = {};
    document.getElementById("resText").innerText = "";
    document.getElementById("typeA").innerText = "未判定";
    document.getElementById("typeB").innerText = "未判定";
    refreshBetShow(); setBetBtnLock(false);
    aCard1 = getRandCard(); aCard2 = getRandCard();
    bCard1 = getRandCard(); bCard2 = getRandCard();
    pubAllCard = [getRandCard(),getRandCard(),getRandCard(),getRandCard(),getRandCard()];
    aHasPair = aCard1.val === aCard2.val;
    bHasPair = bCard1.val === bCard2.val;
    hasHolePair = aHasPair || bHasPair;

    document.getElementById("a1").innerText = aCard1.val+aCard1.suit;
    document.getElementById("a1").className = `card-item ${aCard1.color}`;
    document.getElementById("a2").innerText = aCard2.val+aCard2.suit;
    document.getElementById("a2").className = `card-item ${aCard2.color}`;
    document.getElementById("b1").innerText = bCard1.val+bCard1.suit;
    document.getElementById("b1").className = `card-item ${bCard1.color}`;
    document.getElementById("b2").innerText = bCard2.val+bCard2.suit;
    document.getElementById("b2").className = `card-item ${bCard2.color}`;
    document.getElementById("pubCards").innerHTML = `<span class="pub-card">?</span><span class="pub-card">?</span><span class="pub-card">?</span><span class="pub-card" style="opacity:0.3">?</span><span class="pub-card" style="opacity:0.3">?</span>`;

    calcOdds();
    calcTypeOdds();
    runCountDown();
}

function runCountDown(){
    timer = setInterval(()=>{
        countDown--;
        document.getElementById("timeText").innerText = `下注倒计时：${countDown}秒`;
        if(countDown <= 0){
            clearInterval(timer);
            setBetBtnLock(true);
            document.getElementById("timeText").innerText = "停止投注（1秒）";
            setTimeout(openPublicCard, 1000);
        }
    },1000);
}

function openPublicCard(){
    let p = pubAllCard;
    let wrap = document.getElementById("pubCards");
    setTimeout(()=>wrap.innerHTML=`<span class="pub-card ${p[0].color}">${p[0].val}${p[0].suit}</span><span class="pub-card">?</span><span class="pub-card">?</span><span class="pub-card" style="opacity:0.3">?</span><span class="pub-card" style="opacity:0.3">?</span>`,0);
    setTimeout(()=>wrap.innerHTML=`<span class="pub-card ${p[0].color}">${p[0].val}${p[0].suit}</span><span class="pub-card ${p[1].color}">${p[1].val}${p[1].suit}</span><span class="pub-card">?</span><span class="pub-card" style="opacity:0.3">?</span><span class="pub-card" style="opacity:0.3">?</span>`,500);
    setTimeout(()=>wrap.innerHTML=`<span class="pub-card ${p[0].color}">${p[0].val}${p[0].suit}</span><span class="pub-card ${p[1].color}">${p[1].val}${p[1].suit}</span><span class="pub-card ${p[2].color}">${p[2].val}${p[2].suit}</span><span class="pub-card" style="opacity:0.3">?</span><span class="pub-card" style="opacity:0.3">?</span>`,1000);
    setTimeout(()=>wrap.innerHTML=`<span class="pub-card ${p[0].color}">${p[0].val}${p[0].suit}</span><span class="pub-card ${p[1].color}">${p[1].val}${p[1].suit}</span><span class="pub-card ${p[2].color}">${p[2].val}${p[2].suit}</span><span class="pub-card ${p[3].color}">${p[3].val}${p[3].suit}</span><span class="pub-card" style="opacity:0.3">?</span>`,1500);
    setTimeout(()=>{
        wrap.innerHTML=`<span class="pub-card ${p[0].color}">${p[0].val}${p[0].suit}</span><span class="pub-card ${p[1].color}">${p[1].val}${p[1].suit}</span><span class="pub-card ${p[2].color}">${p[2].val}${p[2].suit}</span><span class="pub-card ${p[3].color}">${p[3].val}${p[3].suit}</span><span class="pub-card ${p[4].color}">${p[4].val}${p[4].suit}</span>`;
        let aBest = getBestHand([aCard1,aCard2], pubAllCard);
        let bBest = getBestHand([bCard1,bCard2], pubAllCard);
        document.getElementById("typeA").innerText = rankName[aBest.level];
        document.getElementById("typeB").innerText = rankName[bBest.level];
        window.aFinal = aBest;
        window.bFinal = bBest;
        let settleSec = 5;
        settleTimer = setInterval(()=>{
            settleSec--;
            document.getElementById("timeText").innerText = `结算倒计时：${settleSec}秒`;
            if(settleSec <= 0){
                clearInterval(settleTimer);
                gameSettle();
            }
        },1000);
    },2000);
}

function gameSettle(){
    let a = window.aFinal;
    let b = window.bFinal;
    let resultText = "平局";
    let winner = null;
    let haveWin = false;
    let winnerRank = -1;

    // 1. 判定胜负
    if(a.level > b.level){
        resultText = "甲方获胜"; winner = "A"; haveWin = true; winnerRank = a.level;
    }else if(a.level < b.level){
        resultText = "乙方获胜"; winner = "B"; haveWin = true; winnerRank = b.level;
    }else{
        for(let i=0;i<Math.max(a.sortKey.length,b.sortKey.length);i++){
            let ak = a.sortKey[i]||0;
            let bk = b.sortKey[i]||0;
            if(ak>bk){resultText="甲方获胜";winner="A";haveWin=true;winnerRank=a.level;break;}
            if(ak<bk){resultText="乙方获胜";winner="B";haveWin=true;winnerRank=b.level;break;}
        }
    }
    document.getElementById("resText").innerText = resultText;
    saveRecord(resultText);

    // 2. 胜负下注赔付（按赔率）
    let oddA = parseFloat(document.getElementById("oddA").innerText);
    let oddB = parseFloat(document.getElementById("oddB").innerText);
    if(winner === "A" && totalBetA>0){
        let win = totalBetA * oddA;
        userChip = parseFloat((userChip + totalBetA + win).toFixed(2));
    }else if(winner === "B" && totalBetB>0){
        let win = totalBetB * oddB;
        userChip = parseFloat((userChip + totalBetB + win).toFixed(2));
    }
    // 平局：不返还下注

    // 3. 牌型猜测下注赔付
    let typeKey = "";
    if(winnerRank === 0) typeKey = "high";
    else if(winnerRank === 1) typeKey = "pair";
    else if(winnerRank === 2) typeKey = "twoPair";
    else if(winnerRank === 3) typeKey = "three";
    else if(winnerRank >=4) typeKey = "big";

    if(typeKey && typeBetMap[typeKey]){
        let amt = typeBetMap[typeKey];
        let odds = currentOdds[typeKey];
        let win = amt * odds;
        userChip = parseFloat((userChip + amt + win).toFixed(2));
    }

    document.getElementById("userChip").innerText = userChip.toFixed(2);
    resetChipCheck(haveWin);

    let nextSec = 5;
    nextRoundTimer = setInterval(()=>{
        nextSec--;
        document.getElementById("timeText").innerText = `下一局准备：${nextSec}秒`;
        if(nextSec <= 0){
            clearInterval(nextRoundTimer);
            startNewRound();
        }
    },1000);
}

window.onload = function(){
    startNewRound();
    updateChipBtn();
    renderRecord();
}
</script>
</body>
</html>
