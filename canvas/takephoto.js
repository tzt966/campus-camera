const start = document.getElementById("start");
const canvasB = document.getElementById("cam");
const ctx    = canvasB.getContext("2d");
const video  = document.getElementById("video");

const takephoto = document.getElementById("takepicture");

let initialized = false;

//カメラ起動部
start.addEventListener("click", async () => {
    alert("カメラを起動");

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                //外カメ
                facingMode: "environment",
                //fps指定
                frameRate: { ideal : 60 }
            },
            audio: false
        });

        video.srcObject = stream;
        video.onloadedmetadata = () => {
            video.play();
            draw(); //描画開始
        };
    } catch (err) {
        alert("うんちおしっこ");
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

    canvasB.width = Math.floor(vw * dpr);
    canvasB.height = Math.floor(vh * dpr);

    canvasB.style.width = vw + "px";
    canvasB.style.height = vh + "px";

    ctx.scale(dpr, dpr);
    initialized = true;
  }

  requestAnimationFrame(draw);
}




//撮影ボタン
takephoto.addEventListener("click", async () => {
    alert("おしっこ");
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

const satuei = document.getElementById("satuei");

satuei.addEventListener("click", async () => {
    alert("おちんちん");

    const outCanvas = document.createElement("canvas");
    const outCtx = outCanvas.getContext("2d");

    outCanvas.width = 720;
    outCanvas.height = 1280;

    // videoを出力サイズに合わせて描画
    outCtx.drawImage(video, 0, 0, outCanvas.width, outCanvas.height);

    // UIを重ねる
    outCtx.drawImage(canvasB, 0, 0, outCanvas.width, outCanvas.height);

    // 保存
    document.getElementById("kekka").src = outCanvas.toDataURL();
});