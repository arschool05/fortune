/****************
 * おみくじアプリで使うJavaScript
 ***************/

// 画面を初期設定する
let shokiSettei = () => {

  // おみくじ結果パネルを隠す
  kakusuPanel(kekkaPanel);

  // 戻るボタンを隠す
  kakusuPanel(modoruButton);

  // タイトル画面のおみくじ画像を設定する
  setteiHomeImage('ro-retto.png');

}

// おみくじの中身
let omikujiNakami = [
  { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
  { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
  
   { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
   { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
  { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
  
   { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
  { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
  { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
  { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
  { // ホームワークをするの設定
    kekkaTitle: 'ホームワークをする', // おみくじの結果のタイトル文
    kekkaSetsumei: 'さあ、今日も頑張ろう！', // おみくじの結果につける説明文
    kekkaImage: 'hissya.png' //おみくじの結果に表示する画像
  },
  
   
 
  { // 遊ぶの設定
    kekkaTitle: '遊ぶ', // おみくじの結果のタイトル文
    kekkaSetsumei: '思いっきり遊ぶぞ！オオーーーー！', // おみくじの結果につける説明文
    kekkaImage: 'asobu.png' //おみくじの結果に表示する画像
  },
  { // 遊ぶの設定
    kekkaTitle: '遊ぶ', // おみくじの結果のタイトル文
    kekkaSetsumei: '思いっきり遊ぶぞ！オオーーーー！', // おみくじの結果につける説明文
    kekkaImage: 'asobu.png' //おみくじの結果に表示する画像
  },
  { // 遊ぶの設定
    kekkaTitle: '遊ぶ', // おみくじの結果のタイトル文
    kekkaSetsumei: '思いっきり遊ぶぞ！オオーーーー！', // おみくじの結果につける説明文
    kekkaImage: 'asobu.png' //おみくじの結果に表示する画像
  },
  { // 遊ぶの設定
    kekkaTitle: '遊ぶ', // おみくじの結果のタイトル文
    kekkaSetsumei: '思いっきり遊ぶぞ！オオーーーー！', // おみくじの結果につける説明文
    kekkaImage: 'asobu.png' //おみくじの結果に表示する画像
  },
  { // 遊ぶの設定
    kekkaTitle: '遊ぶ', // おみくじの結果のタイトル文
    kekkaSetsumei: '思いっきり遊ぶぞ！オオーーーー！', // おみくじの結果につける説明文
    kekkaImage: 'asobu.png' //おみくじの結果に表示する画像
  },
  { // 遊ぶの設定
    kekkaTitle: '遊ぶ', // おみくじの結果のタイトル文
    kekkaSetsumei: '思いっきり遊ぶぞ！オオーーーー！', // おみくじの結果につける説明文
    kekkaImage: 'asobu.png' //おみくじの結果に表示する画像
  },
  { // 遊ぶの設定
    kekkaTitle: '遊ぶ', // おみくじの結果のタイトル文
    kekkaSetsumei: '思いっきり遊ぶぞ！オオーーーー！', // おみくじの結果につける説明文
    kekkaImage: 'asobu.png' //おみくじの結果に表示する画像
  },
    
     { // トイレに行くの設定
    kekkaTitle: 'トイレに行く', // おみくじの結果のタイトル文
    kekkaSetsumei: 'スッキリしようぜ！　あ、手洗いを忘れずに！', // おみくじの結果につける説明文
    kekkaImage: 'toiret.png' //おみくじの結果に表示する画像
  },
   { // トイレに行くの設定
    kekkaTitle: 'トイレに行く', // おみくじの結果のタイトル文
    kekkaSetsumei: 'スッキリしようぜ！　あ、手洗いを忘れずに！', // おみくじの結果につける説明文
    kekkaImage: 'toiret.png' //おみくじの結果に表示する画像
  },
   { // トイレに行くの設定
    kekkaTitle: 'トイレに行く', // おみくじの結果のタイトル文
    kekkaSetsumei: 'スッキリしようぜ！　あ、手洗いを忘れずに！', // おみくじの結果につける説明文
    kekkaImage: 'toiret.png' //おみくじの結果に表示する画像
  },
   { // おやつを食べるの設定
    kekkaTitle: 'おやつを食べる', // おみくじの結果のタイトル文
    kekkaSetsumei: '夜ご飯もあるから控えめに〜〜(^o^)', // おみくじの結果につける説明文
    kekkaImage: 'potato.png' //おみくじの結果に表示する画像
  },
  { // おやつを食べるの設定
    kekkaTitle: 'おやつを食べる', // おみくじの結果のタイトル文
    kekkaSetsumei: '夜ご飯もあるから控えめに〜〜(^o^)', // おみくじの結果につける説明文
    kekkaImage: 'potato.png' //おみくじの結果に表示する画像
  },
  { // おやつを食べるの設定
    kekkaTitle: 'おやつを食べる', // おみくじの結果のタイトル文
    kekkaSetsumei: '夜ご飯もあるから控えめに〜〜(^o^)', // おみくじの結果につける説明文
    kekkaImage: 'potato.png' //おみくじの結果に表示する画像
  },
{ // テレビを見るの設定
    kekkaTitle: 'テレビを見る', // おみくじの結果のタイトル文
    kekkaSetsumei: '見過ぎ注意！', // おみくじの結果につける説明文
    kekkaImage: 'terebi.png' //おみくじの結果に表示する画像
  },
{ // テレビを見るの設定
    kekkaTitle: 'テレビを見る', // おみくじの結果のタイトル文
    kekkaSetsumei: '見過ぎ注意！', // おみくじの結果につける説明文
    kekkaImage: 'terebi.png' //おみくじの結果に表示する画像
  },
{ // テレビを見るの設定
    kekkaTitle: 'テレビを見る', // おみくじの結果のタイトル文
    kekkaSetsumei: '見過ぎ注意！', // おみくじの結果につける説明文
    kekkaImage: 'terebi.png' //おみくじの結果に表示する画像
  },
{ // テレビを見るの設定
    kekkaTitle: 'テレビを見る', // おみくじの結果のタイトル文
    kekkaSetsumei: '見過ぎ注意！', // おみくじの結果につける説明文
    kekkaImage: 'terebi.png' //おみくじの結果に表示する画像
  },
];

//ルーレットの中身
let omikujiRoulette = [
  'hissya.png',
  'asobu.png',
  'toiret.png',
  'potato.png',
  'terebi.png'
];

//ルーレットを表示する関数
let miseruRoulette =()=>{
  let saikoroKekka = furuSaikoro(omikujiRoulette.length);
  setteiHomeImage(omikujiRoulette[saikoroKekka]);
}
  
  //おみくじの結果を見せる
  let miseruOmikujiKekka = () =>{
    //ルーレットに使っていた画像を隠す
    kakusuPanel(omikujiImage);
    
    //タイトル画面のおみくじ画像を設定する
    setteiHomeImage('ro-retto.png');
    
    //おみくじの中身の数までが出るサイコロをふる
    let saikoroKekka = furuSaikoro(omikujiNakami.length);
    
    //出て来たサイコロの目からおみくじの結果を得る
    let omikujiKekka = omikujiNakami[saikoroKekka];
    
  // おみくじの結果からタイトルを画面に貼り付ける
  setteiKekkaTitle(omikujiKekka.kekkaTitle);

  // おみくじの結果から説明を画面に貼り付ける
  setteiKekkaSetsumei(omikujiKekka.kekkaSetsumei);

  // おみくじの結果から画像を画面に貼り付ける
  setteiKekkaImage(omikujiKekka.kekkaImage);

  // おみくじの結果画面を表示する
  miseruPanel(kekkaPanel);

  // 「戻る」ボタンを表示する
  miseruPanel(modoruButton);

}

// おみくじを引く
let hikuOmikuji = () => {
  
  //「おみくじを引く」ボタンを隠す
  kakusuPanel(hikuButton);
  
  //0.1秒で画像を変えるルーレットのアニメーションを開始する
  let rouletteTimer = kurikaesuTimer(miseruRoulette,100);
  
     // 3秒待って結果を表示する
  matsuTimer(()=>{
    // ルーレットのタイマーを止める
    tomeruTimer(rouletteTimer);

    // おみくじの結果を見せる
    miseruOmikujiKekka();

  },5000); // 3000ミリ秒=3秒に設定
  
}

// 読み込み終わったら初期設定を実行する
shokiSettei();
