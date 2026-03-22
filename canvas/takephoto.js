const start = document.getElementById("start");
const canvasB = document.getElementById("cam");
const ctx    = canvasB.getContext("2d");
const video  = document.getElementById("video");
const mobile  = document.getElementById("ui");

const takephoto = document.getElementById("takepicture");

let initialized = false;

//カメラ起動部
start.addEventListener("click", async () => {

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

const satuei = document.getElementById("satuei");

satuei.addEventListener("click", async () => {

    const outCanvas = document.createElement("canvas");
    const outCtx = outCanvas.getContext("2d");

    outCanvas.width = 720;
    outCanvas.height = 1280;

    //入力の寸法
    const vWidth = video.videoWidth;
    const vHeight = video.videoHeight;
    const vRatio = vWidth / vHeight;
    //キャンバスのアスペクト比
    const cRatio = 9 / 16;

    //変数の定義
    let sx, sy, sw, sh;

    //入力が横長のとき
    if(vRatio > cRatio) {
        sw = vHeight * cRatio;
        sh = vHeight;
        sx = (vWidth - sw) / 2;
        sy = 0;
    } else {
        sw = vWidth;
        sh = vHeight * cRatio;
        sx = 0;
        sy = (vHeight - sh) / 2;
    }

    // videoを出力サイズに合わせて描画
    outCtx.drawImage(video, sx, sy, sw, sh, 0, 0, outCanvas.width,  outCanvas.height);

    //UIを描画
    outCtx.drawImage(mobile, 0, 0, outCanvas.width, outCanvas.height);

    //保存(描画)
    document.getElementById("kekka").src = outCanvas.toDataURL();

    //保存
    //outCanvas.toBlob((blob) => {
        //const link = document.createElement("a");
        //link.href = URL.createObjectURL(blob);
        //link.download = "image.png";
        //link.click();
    //});
});