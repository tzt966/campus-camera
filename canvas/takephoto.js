const canvasA = document.getElementById("cam");
const contextA = canvasA.getContext("2d");
const videoA  = document.getElementById("video");
const startA  = document.getElementById("start");
const tpA = document.getElementById("takepicture");

let initialized = false;

//内部解像度(固定)
const basewidthA = 720;
const baseheightA = 1280;

canvasA.width = basewidthA;
canvasA.height = baseheightA;


startA.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        //外カメ指定
        facingMode: "environment",
        frameRate: { ideal: 60 }
      },
      audio: false
    });

    videoA.srcObject = stream;
    videoA.onloadedmetadata = () => {
      videoA.play();
      draw(); // ← canvas描画開始
    };

  } catch (err) {
    alert("カメラを起動できません");
  }
});

function draw() {
  const vw = videoA.videoWidth;
  const vh = videoA.videoHeight;

  if (!vw || !vh) {
    requestAnimationFrame(draw);
    return;
  }

  if (!initialized) {
    const dpr = window.devicePixelRatio || 1;

    canvasA.width = basewidthA * dpr;
    canvasA.height = baseheightA * dpr;

    canvasA.style.width = basewidthA + "px";
    canvasA.style.height = baseheightA + "px";

    contextA.scale(dpr, dpr);
    initialized = true;
  }

  // クリア
  contextA.clearRect(0, 0, basewidthA, baseheightA);

  // アスペクト比
  const videoRatio = vw / vh;
  const canvasRatio = basewidthA / baseheightA;

  let sx, sy, sw, sh;

  if (videoRatio > canvasRatio) {
    // 横長 → 左右カット
    sh = vh;
    sw = vh * canvasRatio;
    sx = (vw - sw) / 2;
    sy = 0;
  } else {
    // 縦長 → 上下カット
    sw = vw;
    sh = vw / canvasRatio;
    sx = 0;
    sy = (vh - sh) / 2;
  }

  // 描画（これが本体）
  contextA.drawImage(
    videoA,
    sx, sy, sw, sh,
    0, 0, basewidthA, baseheightA
  );

  requestAnimationFrame(draw);
}


//撮影
tpA.addEventListener("click", async () =>{
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
  }).then(function(canvasA){
        document.getElementById('result').src = canvasA.toDataURL()}
      );
});