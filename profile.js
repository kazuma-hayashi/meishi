/*
 * デジタル名刺のデータ
 * Claude Code が CLAUDE.md の手順に沿ってこのファイルを書き換えます。
 * 手で直す場合も、左側の項目名は変えないでください。
 * 値が "" の項目は名刺に表示されません。改行は \n で書きます。
 */
window.PROFILE = {
  __TEMPLATE__: false, // 作成が終わると false（true の間は「サンプル表示中」の注意が出ます）

  // 1) 基本情報（title 以外は必須）
  basic: {
    name: "林 一真",            // 姓と名の間に空白を1つ
    company: "Repro株式会社",
    address: "東京都渋谷区代々木1-36-4 全理連ビル4階",
    department: "Sales",
    title: "部長",         // 役職（任意）
    email: "kazuma@repro.io",
    phone: "090-1730-0254"
  },

  // 2) 起動時（約1秒）のロゴ: "company"（会社ロゴ）または "app"（アプリロゴ）
  splash: { logo: "company" },

  // 3) ひとこと（任意）：名前の下に大きく出る1〜2文。空欄なら「名刺を受け取っていただき、ありがとうございます。」
  welcome: "",

  // 4) SNS（URLで保存。使わないものは ""）
  sns: {
    sansan: "https://ap.sansan.com/v/vc/37ity27glace3jokmdcrdjclk4/",
    instagram: "",
    facebook: "https://www.facebook.com/kazuma.hayashi1",
    x: "",
    linkedin: "",
    whatsapp: "",           // 例: "https://wa.me/819012345678"
    others: [
      // { label: "note", url: "https://note.com/xxxx" }
    ]
  },

  // 5) 自己紹介（300文字程度）：ひとことの下に表示
  intro: "広島生まれ、広島育ち。現在は高幡不動あたりに生息。家では8歳と4歳の息子がおります。\n\n趣味は、ボクシング、車、マンガ、スノボやスケボ、音楽、庭いじりやDIY、キャンプ等々多数...",

  // 6) 付帯情報（すべて任意。空欄の項目は表示されません）
  extra: {
    age: "",         // 数字だけなら「歳」を付けて表示
    birthday: "",    // 例: "4月1日"
    hometown: "",
    hobbies: ""
  },

  // 7) 写真（assets/ に置いたファイル。"" ならイニシャルを表示）
  photo: "assets/288633554_5143555052401659_1547590322614667676_n (1).jpg",

  // 8) 背景色（#RRGGBB）。文字色は自動で読みやすい色になります
  theme: { background: "#8E3B46" }
};
