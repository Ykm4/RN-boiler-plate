import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { ArticleType } from '../../../services/news';
import { Card } from '../../molecules/Card';

type Props = {};

export function EntertainmentNews({}: Props) {
  const [newsData, setNewsData] = useState<ArticleType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const fetchEntertainmentNews = () => {
      setNewsData(data);
    };
    fetchEntertainmentNews();
  }, []);
  return (
    <View style={styles.root}>
      <FlatList
        contentContainerStyle={{
          paddingVertical: 22,
          paddingHorizontal: 5,
        }}
        data={newsData}
        keyExtractor={(item, index) => `${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => {}} />
        }
        ListHeaderComponent={
          <View>
            <Text>Header</Text>
          </View>
        }
        renderItem={({ item, index, separators }) => <Card article={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

const data = [
  {
    source: { id: null, name: 'Cinematoday.jp' },
    author: 'シネマトゥデイ',
    title:
      '「チェリまほ」赤楚衛二、町田啓太の笑顔に胸キュン！ - シネマトゥデイ',
    description:
      '話題のドラマ「30歳まで童貞だと魔法使いになれるらしい」（テレビ東京ほか、毎週木曜深夜1時～放送）で主人公の安達を演じる赤楚衛二が、恋の相手・黒沢役の町田啓太に胸キュンしたシーンを振り返った。',
    url: 'https://www.cinematoday.jp/news/N0120384',
    urlToImage:
      'https://img.cinematoday.jp/a/KEUqiQ78Ub3W/_size_r1200x630/_v_1607493571/main.jpg',
    publishedAt: '2020-12-09T20:12:00Z',
    content: '',
  },
  {
    source: { id: null, name: 'Eiga.com' },
    author: '映画.com',
    title:
      'ジャニーズWEST・藤井流星「映画 賭ケグルイ」第2弾で“最凶最悪の刺客”視鬼神真玄役に挑戦！ - 映画.com',
    description:
      '「ジャニーズWEST」の藤井流星が、浜辺美波が主演する人気シリーズの劇場版第2弾「映画賭ケグルイPart2（仮題）」に出演していることがわかった。藤井が演じるのは、シリーズ史上“最凶最悪の刺客”視鬼神真玄（しきがみ・まくろ）。あわせて、公開',
    url: 'https://eiga.com/news/20201210/2/',
    urlToImage:
      'https://eiga.k-img.com/images/buzz/87387/95067d28beb0ccfe/640.jpg',
    publishedAt: '2020-12-09T20:00:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Mdpr.jp' },
    author: 'モデルプレス編集部',
    title:
      'なにわ男子、7人全員でグループ初冠ラジオ決定「オールナイトニッポン」に挑戦 - モデルプレス',
    description:
      '関西ジャニーズJr.内グループのなにわ男子が、12月14日にグループ初となるメンバー7人全員での冠ラジオ番組「なにわ男子のオールナイトニッポンPremium」（ニッポン放送／19時～21時50分）に挑戦することが決定した。',
    url: 'https://mdpr.jp/news/detail/2342272',
    urlToImage:
      'https://img-mdpr.freetls.fastly.net/article/J1p7/nm/J1p7FQaY6plXMY8Lx7B-eq5qoot4IV2C_wGvrsU0imI.jpg?width=700&disable=upscale&auto=webp',
    publishedAt: '2020-12-09T20:00:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Hochi.news' },
    author: '報知新聞社',
    title:
      'ＴＢＳが未来の大女優発掘、１０代女性対象オーディション…田辺エージェンシー＆秋元康氏協力 - スポーツ報知',
    description:
      'ＴＢＳは９日、未来のドラマ主演女優を発掘するオーディションを開くことを発表した。芸能プロダクション・田辺エージェンシー、秋元康氏（６２）と３者で強力タッグを組み、スター育成プロジェクト「私が女優にな',
    url: 'https://hochi.news/articles/20201209-OHT1T50320.html',
    urlToImage:
      'https://hochi.news/images/2020/12/09/20201209-OHT1I50340-L.jpg',
    publishedAt: '2020-12-09T20:00:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Mdpr.jp' },
    author: 'モデルプレス編集部',
    title:
      'JO1豆原一成、映画初出演決定 岡村隆史ら8組24名が夢のコラボ＜半径1メートルの君＞ - モデルプレス',
    description:
      '人気俳優、吉本タレント、クリエイターによるオムニバス映画『半径1メートルの君～上を向いて歩こう～』の公開が2021年2月26日に決定。JO1の豆原一成が本作で映画に初出演することがわかった。',
    url: 'https://mdpr.jp/cinema/detail/2341895',
    urlToImage:
      'https://img-mdpr.freetls.fastly.net/article/ae7C/nm/ae7CygApxDhK8g7-icFiTc9Q2JKochxcRofc6FzU2a0.jpg?width=700&disable=upscale&auto=webp',
    publishedAt: '2020-12-09T19:00:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Yahoo.co.jp' },
    author: '松本博文',
    title:
      '豊島竜王、深夜の熱戦を制して斎藤八段の連勝をストップし、名人挑戦争いに踏みとどまる Ａ級順位戦５回戦（松本博文） - Yahoo!ニュース - Yahoo!ニュース',
    description:
      'Ａ級順位戦中盤の山場となった豊島将之竜王－斎藤慎太郎八段戦は豊島竜王の勝ち。斎藤八段の全勝が止まって、名人挑戦権争いはさらに白熱してきました。',
    url: 'https://news.yahoo.co.jp/byline/matsumotohirofumi/20201210-00211779/',
    urlToImage:
      'https://newsbyl-pctr.c.yimg.jp/r/iwiz-yn/rpr/matsumotohirofumi/00211779/title-1607531800141.jpeg',
    publishedAt: '2020-12-09T16:41:46Z',
    content: '1973(LPSA) (NHK) AI NHKAI&amp;',
  },
  {
    source: { id: null, name: 'Nikkansports.com' },
    author: '日刊スポーツ',
    title:
      '元ＡＫＢ松井咲子が初写真集「自由に大胆になれた」 - ニッカンスポーツ',
    description:
      '元AKB48の松井咲子（30）の初写真集「咲子」（KADOKAWA）が、来年1月18日に発売することが9日、分かった。10日が誕生日。“20代最後の妄想”をテ… - 日刊スポーツ新聞社のニュースサイト、ニッカンスポーツ・コム（nikkansports.com）。',
    url: 'https://www.nikkansports.com/entertainment/news/202012090000619.html',
    urlToImage:
      'https://www.nikkansports.com/entertainment/news/img/202012090000619-w500_0.jpg',
    publishedAt: '2020-12-09T15:00:00Z',
    content: '(C)2020,Nikkan Sports News.\r\nnikkansports.com',
  },
  {
    source: { id: null, name: 'Mdpr.jp' },
    author: 'モデルプレス編集部',
    title:
      '嵐・櫻井翔「FNS歌謡祭」で“マイクの持ち方”トレンド入り その理由にファン感激 - モデルプレス',
    description:
      '嵐が9日放送のフジテレビ系『2020FNS歌謡祭』第2夜（18時30分～22時48分）に出演。放送後、櫻井翔にちなんだ「マイクの持ち方」というワードがTwitterトレンド入りし話題となっている。',
    url: 'https://mdpr.jp/music/detail/2342619',
    urlToImage:
      'https://img-mdpr.freetls.fastly.net/article/S2US/wm/S2USOjAVCzid4xAMg_uEOHsXvGUHy4CFzHbpR3M9h-0.jpg?width=700&disable=upscale&auto=webp',
    publishedAt: '2020-12-09T14:26:13Z',
    content:
      '92020FNS218302248Twitter This is Do you ?ARASHIARASHI\r\nTwitter\r\n5ARASHIFNSARASHImodelpress\r\nFNS',
  },
  {
    source: { id: null, name: 'Natalie.mu' },
    author: '音楽ナタリー',
    title: 'w-inds.橘慶太と松浦亜弥に第3子誕生 - ナタリー',
    description: 'w-inds.の橘慶太と松浦亜弥の間に第3子が誕生した。',
    url: 'https://natalie.mu/music/news/408144',
    urlToImage:
      'https://ogre.natalie.mu/media/news/music/2020/0318/KEITA_art202003.jpg?imwidth=750',
    publishedAt: '2020-12-09T14:18:00Z',
    content: 'The VOCALOID CollectionDECO*27×',
  },
  {
    source: { id: null, name: 'Daily.co.jp' },
    author: 'デイリースポーツ online',
    title:
      '石橋貴明＆工藤静香のユニットが２３年ぶりに復活歌唱…コロナで密着ダンスはＮＧ - デイリースポーツ',
    description:
      '石橋貴明と工藤静香のユニット、Ｌｉｔｔｌｅ　Ｋｉｓｓが９日、フジテレビ系「ＦＮＳ歌謡祭２０２０」で２３年ぶりに復活し「Ａ．Ｓ．Ａ．Ｐ．」を披露。息の合ったところを見せた。　石橋は「２３年ぶりか。びっくりするね」と過去の映像を見ながら話し、工藤も「びっくりするよね。練習してなかった？ちゃんと歌えててびっくり！」と石橋の歌唱力に驚きを見せた。',
    url: 'https://www.daily.co.jp/gossip/2020/12/09/0013927056.shtml',
    urlToImage: 'https://i.daily.jp/gossip/2020/12/09/Images/f_13927057.jpg',
    publishedAt: '2020-12-09T13:50:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Fujitv-view.jp' },
    author: 'フジテレビュー!!編集部',
    title:
      '『ジャニーズカウントダウン』今年は東京の街から生放送！出演アーティストも決定 - フジテレビュー!!',
    description:
      '12月31日（木）23時45分～『日本中に元気を！！ジャニーズカウントダウン2020-2021～東京の街から歌でつながる生放送～』',
    url: 'https://www.fujitv-view.jp/article/post-220787/',
    urlToImage:
      'https://www.fujitv-view.jp/tachyon/2020/12/3333.jpg?crop=0px%2C0px%2C2200px%2C1237px&fit=1200,627',
    publishedAt: '2020-12-09T13:34:12Z',
    content: null,
  },
  {
    source: { id: null, name: 'Mantan-web.jp' },
    author: null,
    title:
      '七人の秘書：木村文乃ら“影の軍団”メンバーが撮了報告 広瀬アリス、シム・ウンギョンのサプライズも - MANTANWEB',
    description:
      '女優の木村文乃さん主演の連続ドラマ「七人の秘書」（テレビ朝日系、木曜午後9時）がクランクアップを迎えたことが、番組の公式ツイッターで12月9日に発表された。ツ...',
    url: 'https://mantan-web.jp/article/20201209dog00m200098000c.html',
    urlToImage:
      'https://storage.mantan-web.jp/images/2020/12/09/20201209dog00m200098000c/001_size6.jpg',
    publishedAt: '2020-12-09T13:26:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Nikkansports.com' },
    author: '日刊スポーツ',
    title:
      '船木結が卒業「アンジュルムが大好きです」手紙全文 - ニッカンスポーツ',
    description:
      'ハロー！プロジェクトのアイドルグループ、アンジュルム船木結（18）が9日、東京・日本武道館で、「アンジュルム　コンサート2020～起承転結～船木結卒業スペシャ… - 日刊スポーツ新聞社のニュースサイト、ニッカンスポーツ・コム（nikkansports.com）。',
    url: 'https://www.nikkansports.com/entertainment/news/202012090000998.html',
    urlToImage:
      'https://www.nikkansports.com/entertainment/news/img/202012090000998-w500_0.jpg',
    publishedAt: '2020-12-09T13:00:00Z',
    content: '(C)2020,Nikkan Sports News.\r\nnikkansports.com',
  },
  {
    source: { id: null, name: 'Mdpr.jp' },
    author: 'モデルプレス編集部',
    title:
      '「有吉の壁」“2.7次元アイドル”KOUGU維新、最初で最後のミュージカル挑戦 - モデルプレス',
    description:
      '日本テレビ系バラエティ番組「有吉の壁」（毎週水曜よる7時～）の「ブレイク芸人選手権」から生まれた2.7次元アイドル「KOUGU維新」が12月24日にオンラインミュージカル「最初で最後のミュージカル KOUGU維新±0 ～聖夜ヲ廻ル大工陣～」を開催し、Huluストアにて生配信されることが決定した。',
    url: 'https://mdpr.jp/news/detail/2341737',
    urlToImage:
      'https://img-mdpr.freetls.fastly.net/article/ZYyt/nm/ZYytTaUnqygE4848y9BQvf7EQfzp152YLC0FHP58OOc.jpg?width=700&disable=upscale&auto=webp',
    publishedAt: '2020-12-09T12:54:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Mainichikirei.jp' },
    author: '株式会社MANTAN',
    title:
      '朝比奈彩：“9頭身美女”がエレガントな大人の黒コーデ オールバックヘアでハンサムに - 毎日キレイ',
    description:
      '“9頭身美女”としても知られる、女優で女性ファッション誌「Oggi（オッジ）」（小学館）の専属モデルの朝比奈彩さんが12月7日、東京都内で行われた、「Netflix（ネットフリックス）」オリジナルシリーズ「今際（...',
    url: 'https://mainichikirei.jp/article/20201209dog00m100013000c.html',
    urlToImage:
      'https://storage.mainichikirei.jp/images/2020/12/09/20201209dog00m100013000c/001_size6.jpg',
    publishedAt: '2020-12-09T12:40:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Hochi.news' },
    author: '報知新聞社',
    title:
      '３６キロ減量・ゆりやんレトリィバァ、３４０万円のドレスで美脚披露「完全にモデル」「オーラが凄い」 - スポーツ報知',
    description:
      'デジタルマガジン「ＶＯＧＵＥ　ＧＩＲＬ」の公式インスタグラムが更新され、３６キロのダイエットに成功したお笑いタレント・ゆりやんレトリィバァ（３０）が、３４０万円（参考価格）の純白のドレスを着た姿を公',
    url: 'https://hochi.news/articles/20201209-OHT1T50186.html',
    urlToImage:
      'https://hochi.news/images/2020/12/09/20201209-OHT1I50229-L.jpg',
    publishedAt: '2020-12-09T12:32:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Itmedia.co.jp' },
    author: null,
    title:
      'ノジマ、PS5抽選販売で「転売ヤーを1件ずつ人力で排除」 応募総数は12万件、当選発表の遅れを謝罪 - ねとらぼ',
    description:
      '�u�u�{���ɕK�v�Ƃ���Ă�����X�Ɋ��ł��������v�u���X���[�J�[�l�ƌ���m�ۂ����݌ɂ�A�]���ړI�̕��X�ɓn�������Ȃ��v�ƃR�����g�B',
    url: 'https://nlab.itmedia.co.jp/nl/articles/2012/09/news170.html',
    urlToImage:
      'https://image.itmedia.co.jp/nl/articles/2012/09/l_npjimaps501_w650.jpg',
    publishedAt: '2020-12-09T12:25:00Z',
    content:
      '@mW}TwitterAoC{vCXe[V 5IA]IwhlsBAI\\xB\r\n@gDhJLPS5BVlsnAeECTCgt}Av]zA\\j[EC^NeBuG^eCgJvj[XWB\r\n@AmW}]Iwrgh{B@A12A1lImFsqB\r\n@mW}Twitter{u{KvXBAX[J[lmA]IXnAvvRgB\r\n@A]IwTwitterIsAue\\AA]IIAl\\vB\r\nCopyrigh… [+37 chars]',
  },
  {
    source: { id: null, name: 'Nikkansports.com' },
    author: '日刊スポーツ',
    title: '平手友梨奈がソロ曲サプライズ披露 作曲にも関わる - ニッカンスポーツ',
    description:
      '平手友梨奈（19）が9日、フジテレビ系音楽特番「2020　FNS歌謡祭」の第2夜に生出演した。今年1月に欅坂46（現・櫻坂46）を脱退後初となるソロオリジナル… - 日刊スポーツ新聞社のニュースサイト、ニッカンスポーツ・コム（nikkansports.com）。',
    url: 'https://www.nikkansports.com/entertainment/news/202012090001011.html',
    urlToImage:
      'https://www.nikkansports.com/entertainment/news/img/202012090001011-w500_0.jpg',
    publishedAt: '2020-12-09T12:12:00Z',
    content: '(C)2020,Nikkan Sports News.\r\nnikkansports.com',
  },
  {
    source: { id: null, name: 'Yahoo.co.jp' },
    author: '週刊女性PRIME',
    title:
      '高畑裕太が復帰！ 母・淳子が語った事件当時の不満「家族の4年間の苦しみを考えて」（週刊女性PRIME） - Yahoo!ニュース',
    description:
      '「11月28日、高畑裕太さんがツイッターで撮影現場への復帰を宣言しました。今年8月には自身の公式サイトを立ち上げていますし、芸能活動を本格的に再開するようです」（スポーツ紙記者）',
    url:
      'https://news.yahoo.co.jp/articles/c5345c90b0950a49b42d159339256090d947ce50',
    urlToImage:
      'https://amd-pctr.c.yimg.jp/r/iwiz-amd/20201209-00019573-jprime-000-2-view.jpg',
    publishedAt: '2020-12-09T12:01:16Z',
    content:
      '- - - - - - - - Copyright © 2020 SHUFU TO SEIKATSU SHA CO.,LTD \r\nCopyright © 2020 Yahoo Japan Corporation. All Rights Reserved.',
  },
  {
    source: { id: null, name: 'Nikkansports.com' },
    author: '日刊スポーツ',
    title:
      'キラー・カーン氏、憔悴のち号泣「リンリン嫌みに」 - ニッカンスポーツ',
    description:
      '元プロレスラーで「キラー・カーン」のリングネームで活躍した小沢正志氏（73）が、歩行者を自転車ではねて負傷させ、逃走したとして重過失傷害と道交法違反（ひき逃げ… - 日刊スポーツ新聞社のニュースサイト、ニッカンスポーツ・コム（nikkansports.com）。',
    url:
      'https://www.nikkansports.com/general/nikkan/news/202012090000838.html',
    urlToImage:
      'https://www.nikkansports.com/general/nikkan/news/img/202012090000838-w500_0.jpg',
    publishedAt: '2020-12-09T11:57:00Z',
    content: '(C)2020,Nikkan Sports News.\r\nnikkansports.com',
  },
];
