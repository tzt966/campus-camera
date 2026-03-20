const video  = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx    = canvas.getContext("2d");
const start  = document.getElementById("start");
const tp = document.getElementById("takepicture");

start.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        //外カメ指定
        facingMode: "environment",
        frameRate: { ideal: 60 }
      },
      audio: false
    });

    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
      draw(); // ← canvas描画開始
    };

  } catch (err) {
    alert("カメラを起動できません");
  }
});

function draw() {
  const vw = video.videoWidth;
  const vh = video.videoHeight;

  if (!vw || !vh) {
    requestAnimationFrame(draw);
    return;
  }

  if(!initialized){
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.floor(vw * dpr);
    canvas.height = Math.floor(vh * dpr);

    canvas.style.width = vw + "px";
    canvas.style.height = vh + "px";

    ctx.scale(dpr, dpr);
    initialized = true;
  }

  requestAnimationFrame(draw);
}

//キャラごとに色分けするやつ

const select = document.getElementById('character');
const target = document.getElementById('target');
select.addEventListener('change', ()=>{
  select.className = select.value;
  target.className = "";
  target.classList.add('arrow', select.value);
});

//撮影
tp.addEventListener("click", async () =>{
  alert("うんち");
  html2canvas(document.getElementById('mobile'),{
    scale: 2,           // 2倍の解像度で書き出し（ボケ防止）
    useCORS: true,      // 画像の読み込みエラー対策
    width: 650,         // 切り出すサイズを固定
    height: 650,
    scrollX: 0,         // スクロール位置によるズレを防止
    scrollY: 0,
    windowWidth: 650,   // ブラウザの幅を固定して計算させる
    windowHeight: 650
  }).then(function(canvas){
        document.getElementById('result').src = canvas.toDataURL()}
      );
});