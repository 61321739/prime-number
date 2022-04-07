    function 素数を求める() {
        上限 = parseInt(document.getElementById('上限').value)
        下限 = parseInt(document.getElementById('下限').value)
        for (q = 0; q < parseInt(document.getElementById('回数').value); q++) {
            開始時刻 = "" + new Date();
            入力された数 = 下限 - 1;
            割る数 = 0;
            判定しました = 0;
            素数の個数 = 0;
            出力ファイル = "";

            for (w = 0; w < 上限 - 下限 + 1; w++) {
                入力された数 += 1;
                判定しました = 0;
                割る数 = 1;
                if (入力された数 == 2 || 入力された数 == 3 || 入力された数 == 5) {
                    出力ファイル = "" + 出力ファイル + "," + ("" + 入力された数)
                    素数の個数 += 1;
                } else if (入力された数 % 2 != 0 && 入力された数 >= 2 && 入力された数 % 1 == 0) {
                    for (e = 0; e < Math.trunc(Math.sqrt(入力された数) / 2); e++) {
                        割る数 += 2;
                        if (入力された数 % 割る数 == 0) {
                            判定しました = 1;
                            break;
                        }
                    }
                    if (判定しました == 0) {
                        出力ファイル = "" + 出力ファイル + "," + ("" + 入力された数);
                        素数の個数 += 1;
                    }
                }
            }

            let 終了時刻 = "" + new Date();

            let 記憶1 = (開始時刻).indexOf("2022") + 4;
            let _1 = 開始時刻.substr(記憶1 + 1, 2);
            let _2 = 開始時刻.substr(記憶1 + 4, 2);
            let _3 = 開始時刻.substr(記憶1 + 7, 2);
            let 数値開始時刻 = parseFloat(_1) * 3600 + parseFloat(_2) * 60 + parseFloat(_3);

            let 記憶2 = 終了時刻.indexOf("2022") + 4;
            let _4 = 終了時刻.substr(記憶2 + 1, 2);
            let _5 = 終了時刻.substr(記憶2 + 4, 2);
            let _6 = 終了時刻.substr(記憶2 + 7, 2);
            let 数値終了時刻 = parseFloat(_4) * 3600 + parseFloat(_5) * 60 + parseFloat(_6);
            let 計算時間 = 数値終了時刻 - 数値開始時刻;

            let 秒 = "";
            let 分 = "";
            let 時 = "";
            if (Math.floor(計算時間 / 3600) > 9) {
                時 = (Math.floor(計算時間 / 3600));
            } else {
                時 = "0" + Math.floor(計算時間 / 3600);
            }
            if (Math.floor(計算時間 / 60) % 60 > 9) {
                分 = (Math.floor(計算時間 / 60) % 60);
            } else {
                分 = "0" + (Math.floor(計算時間 / 60) % 60);
            }
            if (計算時間 % 3600 % 60 > 9) {
                秒 = (計算時間 % 3600 % 60);
            } else {
                秒 = "0" + (計算時間 % 3600 % 60);
            }

            var content = "" + 下限 + "～" + 上限 + "までの素数書き出し:\n(" + 素数の個数 + "個の素数がありました。)\n" + "time:" + 時 + ":" + 分 + "." + 秒 + "\n" + "-----------------------------------------------\n" + 出力ファイル;
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(new Blob([content]));
            link.download = "素数" + 下限 + "～" + 上限 + "";
            link.click();
            下限 = 上限 + 1
            上限 = 下限 + parseInt(document.getElementById('上限').value) - parseInt(document.getElementById('下限').value)
        }
    }
