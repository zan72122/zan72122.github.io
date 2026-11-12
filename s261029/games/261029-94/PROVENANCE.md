# 公開用演奏の出典・再生成記録

**音符の唯一の入力は、校正完了した `notes-pd/out/notes.musicxml` です。** 同じ採譜の `notes.json` は独立の往復照合にのみ使用しました。

- MusicXML SHA-256: `e419cd71490595a4bccfbf20f3af9fb21385f61c1c729424cdcc2ad66ff13fe7`
- JSON SHA-256: `1cdeabac64858762522a4e9a7757dde81cd679a571baec6053e4bface462dc66`
- [採譜元検査](provenance/score-verification.json): `release_ready: true`、40ページ・334小節・14パート/15譜表を原画像照合済み。
- MusicXMLから11,586音符頭を読み、承認JSONと全音高・位置・音価を一致確認。短縮版は7,152音符頭、タイ結合後7,105発音。
- 歴史的Cl/Hn/Tp/Cb移調をMusicXMLの指定どおり適用。Pfの八度記号は既に実鍵盤音高で入力されており二重に移調しない。
- タイを連結し、スラー・staccato・pizzicato・timpani roll・強弱・ヘアピンを演奏へ反映。装飾音は30ms、トリルは毎秒12打鍵、ターンは記譜キーの隣接音4音（下側naturalを尊重）として実現。装飾・ゲート・音量は録音用解釈であり新たな校訂とは区別。
- 旧El Atril MIDI、旧transcription.json、preview/cutのイベント・音符・音声・ステムは読み込んでいない。既存スクリプトは関数を参考にして書き直し、旧モジュールはimportしない。
- 旧previewのbars.jsonを音符を含まないテンポ格子としてのみ利用。game-94の音声README・契約データ・bars.jsonはGitHubから読取専用取得。ゲームの作業ツリー・ブランチ・コミットは変更していない。
- 固定サンプル時計に全ノートを配置。E53→E88 / E106→E194 / E211→E251を再演奏し、前の離鍵と残響は新しい音へ自然に継続。PCMの切り貼りはしない。
- 旧版のSSO弦は全交換。実際の録音パスを許可リスト・公式Gitハッシュで監査し、SSO/VSCO1/El Atrilを排除。[CREDITS.md](CREDITS.md)に全帰属表示。

このフォルダーの再生成: `OPENBLAS_NUM_THREADS=1 v2/bin/python run_audio.py` → `write_delivery.py` → `test_browser.py` → `finalize.py`。`work/checkpoint.json`は完了ステップと中間ファイルのハッシュを保存し、完了済み長時間レンダーを再利用します。演奏や処理を編集した場合は該当ステップ以降を明示的に無効化してください。

最終ファイル識別子は manifest.json。サンプル素材の再配布権と、原曲/総譜のPD判断と、この演奏の公開ファイルを混同しないよう、根拠を分けて保存しています。
