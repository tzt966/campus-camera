const canvas = document.getElementById("cam");
const context = canvas.getContext("2d");
const video  = document.getElementById("video");
const start  = document.getElementById("start");
const tp = document.getElementById("takepicture");

let initialized = false;

//内部解像度(固定)
const basewidth = 720;
const baseheight = 1280;

canvas.width = basewidth;
canvas.height = baseheight;


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

    context.scale(dpr, dpr);
    initialized = true;
  }

  requestAnimationFrame(draw);
}


//撮影
tp.addEventListener("click", async () =>{
  alert("うんち");
  html2canvas(document.getElementById('mobile'),{
    scale: 1,           // 2倍の解像度で書き出し（ボケ防止）
    useCORS: true,      // 画像の読み込みエラー対策
    width: 720,         // 切り出すサイズを固定
    height: 1280,
    scrollX: 0,         // スクロール位置によるズレを防止
    scrollY: 0,
    windowWidth: 720,   // ブラウザの幅を固定して計算させる
    windowHeight: 1280
  }).then(function(canvas){
        document.getElementById('result').src = canvas.toDataURL()}
      );
});