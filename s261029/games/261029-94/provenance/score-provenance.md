# 音符の出典と検証

2026-11-02完了。対象はWeber《Konzertstück》Op.79のTempo di Marciaから終結まで、印刷31–70、ローカル1–334小節。MusicXMLを標準交換形式とし、JSONは独自スキーマ `weber79-pd-score-reading-v1` の監査用データです。既存レンダラのJSONと同一スキーマではありません。

主資料はSchlesinger (Rob. Lienau)、版番号S.5595、Carl Reinecke（1824–1910）・Ernst Rudorff（1840–1916）校訂の総譜です。[IMSLP #234245](https://imslp.org/wiki/Konzertst%C3%BCck_in_F_minor,_Op.79_(Weber,_Carl_Maria_von))は推定1869年・Public Domain、[Sibley書誌](https://hdl.handle.net/1802/18615)は1875年とします。この出版年の差は未確定のまま記録します。[原PDF](https://s9.imslp.org/files/imglnks/usimg/7/7f/IMSLP234245-SIBLEY1802.18615.9177-39087009348766score.pdf)は `../../sources/score-schlesinger.pdf`、SHA-256 `1e7a4f45e886861202e017658d5de570a3fba880fd584f096ae2b3e79a3c0f54`。対象はPDF33–72ページです。`score-sibley.pdf`は同じファイルで、独立資料として数えません。

補助資料は次の2点に限ります。

| 資料 | 使用箇所と根拠 |
|---|---|
| C. F. Peters、版番号5937、総譜。[Sibley書誌](https://hdl.handle.net/1802/23741)は1860年・PD、後代校訂者の記載なし。[PDF](https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=23795&itemFileId=74191)。 | 印刷34でローカル50小節Tb末尾のG2四分音符を確認。印刷42で160小節Pfの4和音と音価を確認。原PDF・書誌・権利判断は peters-source-check.json。 |
| Schlesinger S.5595の別個体、University of Toronto, Faculty of Music Library、請求記号M1010 .W37 op.79 S3。[所蔵スキャン](https://archive.org/details/31761048731319)、[PDF](https://archive.org/download/31761048731319/31761048731319.pdf)、[JP2画像集](https://archive.org/download/31761048731319/31761048731319_jp2.zip)。 | 印刷48＝PDF54＝JP2 leaf54で、同一の版番号・2段の組版・音符位置・連桁・音部記号・文字を照合。160小節左手第3和音の右側は空白。主資料の小痕跡を音楽記号として採用しない根拠とした。詳細は toronto-source-check.json。 |

Torontoスキャンのメタデータは1852年ですが、無年記の標題紙からこの年は確認できず、既知のS.5595の1869/1875という書誌とも合いません。1852年を確定年として採用していません。同一の19世紀版面の本文であることを根拠に、対象箇所の比較だけに使用しました。近代の書き込みは採用していません。PDFのSHA-256は `963040bbc25918627794321f72a54fff168bd1809237333edd26b49942bae433`。JP2集のMD5/SHA1は配布元メタデータと一致し、個別画像を含むSHA-256も保存しました。

米国では、1931年より前に国外で刊行された歴史的楽譜本文として保護期間満了と判断しました。根拠は[Cornellの期間表](https://guides.library.cornell.edu/copyright/publicdomain)です。日本では作曲者Weber（1826年没）と最後に没した校訂者Rudorff（1916年没）の死後70年を経過しています。[文化庁の制度解説](https://www.bunka.go.jp/english/policy/copyright/system/)に基づき当該本文をPD資料として採用しました。Petersの匿名・法人の刊行物としての期間も既に経過しています。現代の別校訂・録音・MIDIの権利に、この判断を広げません。Eulenburg E.E.4414は日米双方のPDを確定しておらず、採譜に使用していません。

入力は主資料の40枚を `pdfimages` で無劣化抽出し、ページ全体と拡大画像を目視して、小節ごとに音名・音価・強弱・アーティキュレーション・テンポを `../enter_pages.py` へ記録する方法で行いました。ページごとの入力・画像ハッシュは `../checkpoints/page-31.json`〜`page-70.json`、別読による全パート照合は `../review/proofread-page-31.json`〜`page-70.json` です。これはこの作業中の画像読譜・別読照合の記録であり、外部の専門家による校閲を意味しません。画像や既存音符データからの機械認識は使用していません。

最後の160小節は、主資料のC3/A3/F4を2回、C3/C4/E4を2回、四分・八分・四分・八分として保存しています。Torontoの同じ版面には第3和音後の記号がなく、元JP2でも同じ位置は空白です。第3和音の符幹は無旗、第4和音には八分旗があります。別版Petersの一致だけでなく、この同じ版の別個体を根拠に、主資料の孤立痕跡を個体または画像由来の非音楽的痕跡として除外しました。痕跡が汚れ・書き込み・撮像のどれによるかは断定していません。音符データの変更は不要でした。証拠は 元画像の拡大 と Toronto元JP2の拡大です。

50小節Tb末尾は主資料に八分旗がなく、Peters印刷34にも明瞭なG2四分音符があります。暫定のG2八分＋八分休符をG2四分へ訂正した校訂判断を ページ39記録に残しています。その他の訂正も各ページ記録に音高・記号・根拠画像を保存しています。主な音高訂正は38ページ44小節Ob/Cl、41ページ71–72小節Pf、42ページ75–76小節Pf、43ページ86小節Pf、58ページ管楽器、59–60ページ263/264/267小節Pf左手です。いずれもPD原画像の再読による訂正です。

移調楽器は記譜音と明示的な移調を保存しています。B-flat Clは−2半音、C管HnとCbは−12半音。Presto以後のF管Hnは−7、歴史的F管Tpは+5半音で、最初の発音箇所と音域・和声を画像から確認しました。ピアノの八度記号下では実際の鍵盤音高を保存し、MusicXMLのoctave-shiftで譜面上の位置を表します。跨段の左手に右手の8vaを重ねて適用せず、手・声部・譜表移動を記録しました。

省略された休奏段は前後の総譜と凝縮記譜に基づく休符です。Bassi共通段はVcとCbに展開し、Vcl.のみの指定ではCbを休ませました。同一段の二人分は和音・a 2.・独立声部として保存し、単音を機械的に二重発音させていません。これは印刷総譜の構造を保つデータで、全奏者を別トラックに分解した録音用データではありません。

52ページ179/183の無番号グリッサンドは各18打鍵を再計数しました。6/8の小節内に均等配置する編集上の正規化として3:2の時間補正を付け、印刷されていない連符数字・括弧を非表示にしています。演奏上の加減速を指定するものではありません。数値のないritard.などは文字情報として残し、数値テンポを推測していません。

全40ページ・334小節を独立再計数し、57＋21＋256を確認しました。全ページの校正記録は現行入力・主資料画像・利用した補助資料のハッシュに一致しています。MusicXML 4.0 XSD、music21、全音符・休符・記号・移調・拍子の往復検査、拍数・音域・タイ／スラー／八度記号の検査結果は verification.json、入力範囲は validation.json、区間数は section-counts.jsonです。スキーマは[W3C MusicXML 4.0](https://www.w3.org/2021/06/musicxml40/)の公開XSDを著作権表示とともに保存しています。

El Atrilとの相違一覧は未実施です。比較は許可された補助検査であり、必須の入力元ではありません。旧 `transcription.json`、MIDI、OMR音符は読み込み・補完・訂正に使用せず、「相違なし」と確認したわけでもありません。音声は作成していません。

再生成は `python3 enter_pages.py && python3 build_score.py && python3 verify_score.py`。`notes.partial.*`は途中検査用の生成物として残します。全ページの最新校正・区間再計数・構造検査を満たす場合だけ、検査スクリプトが完成ファイル `notes.musicxml` と `notes.json` を出力します。今回の未変更確認と成果物ハッシュは resume-8-audit.json。過去の進捗を含む出典記録は 保存済み履歴です。
