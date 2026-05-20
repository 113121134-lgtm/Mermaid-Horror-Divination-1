const ritualData = [
    { title: "溺水的骨骸", desc: "你所遺忘的東西，正沉在海底幫你守著秘密。" },
    { title: "紅色的泡沫", desc: "妳聽見的歌聲，其實是妳自己的尖叫回響。" },
    { title: "深淵的凝視", desc: "目前是第 10,432 下心跳... 快結束了。" }
];

function startRitual() {
    const input = document.getElementById('sacrifice-input').value;
    if (!input) return alert("妳必須留下祭品。");

    document.getElementById('step-1').classList.remove('active');
    document.getElementById('step-2').classList.add('active');

    let depth = 0;
    const depthVal = document.getElementById('depth-val');
    const interval = setInterval(() => {
        depth += 100;
        depthVal.innerText = depth;
        if (depth >= 3000) {
            clearInterval(interval);
            showResult();
        }
    }, 100);
}

function showResult() {
    document.getElementById('step-2').classList.remove('active');
    document.getElementById('step-3').classList.add('active');
    const result = ritualData[Math.floor(Math.random() * ritualData.length)];
    document.getElementById('card-title').innerText = result.title;
    document.getElementById('card-desc').innerText = result.desc;
    setTimeout(() => document.getElementById('divine-card').classList.add('flipped'), 500);
}