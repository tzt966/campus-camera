const canvas = document.getElementById("ui");
const context = canvas.getContext("2d");
const video  = document.getElementById("video");
const start  = document.getElementById("start");
const tp = document.getElementById("takepicture");

//内部解像度(固定)
const basewidth = 720;
const baseheight = 1280;

canvas.width = basewidth;
canvas.height = baseheight;

//図形描画の関数

    context.beginPath();
    context.fillStyle = "#00000040";
    context.roundRect(16,32,305,76,[0,38,38,0]);
    context.fill();

    //人の部分
    context.beginPath();
    context.fillStyle = "#242b52";
    context.roundRect(40,908,283,42,[21,21,21,0]);
    context.fill();

    //セリフ部分
    context.beginPath();
    context.fillStyle = "#ffffff";
    context.roundRect(40,950,640,180,[0,20,0,20]);
    context.fill();

    //セリフ部分
    context.beginPath();
    context.strokeStyle = "#ae6161";
    context.roundRect(41.5,951.5,637,177,[0,18.5,0,18.5]);
    context.lineWidth = 3;
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







