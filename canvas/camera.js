const canvas = document.getElementById("ui");
const context = canvas.getContext("2d");

//内部解像度(固定)
const basewidth = 720;
const baseheight = 1280;

canvas.width = basewidth;
canvas.height = baseheight;

//サンプルテキスト定義
let storytype = "親愛度";
let tailno = "第１話";
let speaker = "手毬";
let textone = "私のことをよく調べもせずに";
let texttwo = "きた方を、信用できません。";

//色の定義
const textcolor = "#2e2e2e";
const white = "#ffffff";
let speakercolor = "#ffffff";
//グラデーション開始色
let begincolor = "#25b6ef";
//グラデーション終了色
let endcolor = "#84e7e4";


//図形描画
function drawUI(){
    //描画のリセット

    //グラデーションの定義
    let gradient = context.createLinearGradient(40, 0, 283, 0);
    //グラデーション色設定
    gradient.addColorStop(0, begincolor);
    gradient.addColorStop(1, endcolor);


    context.beginPath();
    context.fillStyle = "#00000040";
    context.roundRect(16,32,305,76,[0,38,38,0]);
    context.fill();

    //スピーカー部分
    context.beginPath();
    context.fillStyle = gradient;
    context.roundRect(40,908,283,42,[21,21,21,0]);
    context.fill();

    //セリフ下地
    context.beginPath();
    context.fillStyle = "#ffffff88";
    context.roundRect(40,950,640,180,[0,20,0,20]);
    context.fill();

    //セリフ部分枠線
    context.beginPath();
    context.strokeStyle = "#ffffffaa";
    context.roundRect(41.5,951.5,637,177,[0,18.5,0,18.5]);
    context.lineWidth = 3;
    context.stroke();

    //次送りの三角
    context.beginPath();
    context.moveTo(629,1099);
    context.lineTo(640,1108);
    context.lineTo(651,1099);
    context.strokeStyle = begincolor;
    context.lineWidth = 4;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //下のボタン
    context.beginPath();
    context.fillStyle = "#00000040";
    context.roundRect(160,1177,125,48,24);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00000040";
    context.roundRect(296,1177,125,48,24);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00000040";
    context.roundRect(432,1177,125,48,24);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00000040";
    context.roundRect(568,1177,125,48,24);
    context.fill();

    //左の四角
    //左上
    context.beginPath();
    context.moveTo(82,1197);
    context.lineTo(82,1189);
    context.lineTo(90,1189);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //右上
    context.beginPath();
    context.moveTo(98,1189);
    context.lineTo(106,1189);
    context.lineTo(106,1197);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //左下
    context.beginPath();
    context.moveTo(82,1206);
    context.lineTo(82,1214);
    context.lineTo(90,1214);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //右下
    context.beginPath();
    context.moveTo(106,1206);
    context.lineTo(106,1214);
    context.lineTo(98,1214);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //SKIP
    //三角
    context.beginPath();
    context.moveTo(185,1191);
    context.lineTo(185,1211);
    context.lineTo(197,1201);
    context.lineTo(185,1191);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //三角の右の線
    context.beginPath();
    context.moveTo(198,1191);
    context.lineTo(198,1211);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //ログ
    //吹き出し右上
    context.beginPath();
    context.roundRect(326,1187,16,16,[8,0,8,8]);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
    //吹き出し左下
    context.beginPath();
    context.roundRect(314,1199,16,16,[8,8,8,0]);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //右上の線
    context.beginPath();
    context.moveTo(313,1195);
    context.lineTo(318,1195);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    context.beginPath();
    context.moveTo(315,1188);
    context.lineTo(320,1193);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    context.beginPath();
    context.moveTo(322,1186);
    context.lineTo(322,1191);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //右上の線
    context.beginPath();
    context.moveTo(335,1208);
    context.lineTo(340,1213);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    context.beginPath();
    context.moveTo(333,1211);
    context.lineTo(333,1216);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    context.beginPath();
    context.moveTo(337,1207);
    context.lineTo(342,1207);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //右上の吹き出しの中の線
    context.beginPath();
    context.moveTo(331,1193);
    context.lineTo(336,1193);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    context.beginPath();
    context.moveTo(333,1197);
    context.lineTo(336,1197);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //左下の吹き出しの中の線
    context.beginPath();
    context.moveTo(319,1205);
    context.lineTo(324,1205);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    context.beginPath();
    context.moveTo(319,1209);
    context.lineTo(322,1209);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();



    //AUTO
    //三角
    context.beginPath();
    context.moveTo(451,1191);
    context.lineTo(451,1211);
    context.lineTo(461,1201);
    context.lineTo(451,1191);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    context.beginPath();
    context.moveTo(465,1191);
    context.lineTo(465,1211);
    context.lineTo(475,1201);
    context.lineTo(465,1191);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();


    //早送り
    //三角1
    context.beginPath();
    context.moveTo(596,1197);
    context.lineTo(588,1191);
    context.lineTo(588,1211);
    context.lineTo(596,1204);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //三角2
    context.beginPath();
    context.moveTo(604,1197);
    context.lineTo(596,1191);
    context.lineTo(596,1211);
    context.lineTo(604,1204);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //三角3
    context.beginPath();
    context.moveTo(604,1191);
    context.lineTo(604,1211);
    context.lineTo(614,1201);
    context.lineTo(604,1191);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    //発言者
        context.font = '600 16px "IBM Plex Sans JP"'
        context.fillStyle = white;
        context.fillText(storytype, 30, 60);

        context.font = '600 24px "IBM Plex Sans JP"'
        context.fillStyle = white;
        context.fillText(tailno, 30, 91);
        
        context.font = '600 24px "IBM Plex Sans JP"'
        context.fillStyle = speakercolor;
        context.fillText(speaker, 61, 939);

        context.font = '500 26px "IBM Plex Sans JP"'
        context.fillStyle = textcolor;
        context.fillText(textone, 79, 1005);

        context.font = '500 26px "IBM Plex Sans JP"'
        context.fillStyle = textcolor;
        context.fillText(texttwo, 79, 1040);

        context.font = '500 16px "IBM Plex Sans JP"'
        context.fillStyle = "#ffffff";
        context.fillText("SKIP", 217, 1206);

        context.font = '500 16px "IBM Plex Sans JP"'
        context.fillStyle = "#ffffff";
        context.fillText("ログ", 357, 1206);

        context.font = '500 16px "IBM Plex Sans JP"'
        context.fillStyle = "#ffffff";
        context.fillText("AUTO", 487, 1206);

        context.font = '500 16px "IBM Plex Sans JP"'
        context.fillStyle = "#ffffff";
        context.fillText("早送り", 623, 1206);
}

//文字周りは以下に書く
window.addEventListener("load", async () => {
    await document.fonts.load('500 26px "IBM Plex Sans JP"');

    if (document.fonts.check('500 26px "IBM Plex Sans JP"')) {
        drawUI();

        //alert("完了");
        
    } else {
        // まだなら少し待って再試行
        setTimeout(drawUI, 100);
    }

});

//入力内容の反映
const submit = document.getElementById("submit");

submit.addEventListener("click", async () => {
    //inputboxの内容を取得
    storytype = document.getElementById("storytype").value;
    tailno = document.getElementById("storyno").value;
    textone = document.getElementById("dialogueone").value;
    texttwo = document.getElementById("dialoguetwo").value;
    speaker = document.getElementById("character").value;
    context.clearRect(0, 0, canvas.width, canvas.height);

    //キャラ名色対照表
    const data = {
    saki: { a: "咲季", b: "#ff5164", c: "#ffb8a8", d: "#ffffff"},
    temari: { a: "手毬", b: "#25b6ef", c: "#84e7e4", d: "#ffffff"},
    kotone: { a: "ことね", b: "#f8d71e", c: "#feb6d3", d: "#ffffff"},
    mao: { a: "麻央", b: "#c45dca", c: "#faaaa9", d: "#ffffff"},
    lilja: { a: "リーリヤ", b: "#d1e3e5", c: "#98ccd9", d: "#2e2e2e"},
    china: { a: "千奈", b: "#ff8921", c: "#ff5e57", d: "#ffffff"},
    sumika: { a: "清夏", b: "#92dd5b", c: "#cce21f", d: "#2e2e2e"},
    hiro: { a: "広", b: "#00bed8", c: "#5380fd", d: "#ffffff"},
    sena: { a: "星南", b: "#f5b04b", c: "#f3e781", d: "#2e2e2e"},
    ume: { a: "佑芽", b: "#f74b29", c: "#f0c64e", d: "#ffffff"},
    rinami: { a: "莉波", b: "#fd7ec3", c: "#f4b7fd", d: "#ffffff"},
    misuzu: { a: "美鈴", b: "#70a3fc", c: "#ceafff", d: "#ffffff"},
    tsubame: { a: "燕", b: "#8974ff", c: "#c7b7ff", d: "#ffffff"}
    };

    const obj = data[speaker];

    speaker = obj.a;
    begincolor = obj.b;
    endcolor = obj.c;
    speakercolor = obj.d;

    drawUI();

});