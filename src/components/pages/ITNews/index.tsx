import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { PAGE_NAMES_HOME } from '../../../const';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../../declarations';

type Props = {
  navigation: StackNavigationProp<
    HomeStackParamList,
    typeof PAGE_NAMES_HOME.NEWS
  >;
};

type NewsResponse = {
  source: { id: null | string | number; name: string };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
};

const hoge: NewsResponse[] = [
  {
    source: { id: null, name: '4gamer.net' },
    author: 'ライター：宮崎真一,カメラマン：佐々木秀二',
    title:
      '「Radeon RX 6900 XT」レビュー。フルスペック版Navi 2X搭載のRadeon最上位モデルは，GeForce RTX 3090と戦える製品なのか - 4Gamer.net',
    description:
      '「Navi 2X」世代のAMD製最上位GPU「Radeon RX 6900 XT」のレビューが解禁となった。AMD初のレイトレーシング対応GPUとなった「Radeon RX 6800」シリーズから，どれくらい性能を伸ばせたのか。そしてNVIDIAの最上位「GeForce RTX 3090」に戦いを挑める性能を発揮できたのかを確認してみよう。',
    url: 'https://www.4gamer.net/games/461/G046171/20201208032/',
    urlToImage:
      'https://www.4gamer.net/games/461/G046171/20201208032/SS/002.jpg',
    publishedAt: '2020-12-08T14:00:00Z',
    content:
      'GPUAMDGPURadeon RX 6800 XTRX 6800 XT4KGeForce RTX 3080RTX 3080GPURX 6800 XTRadeon RX 6900 XTRX 6900 XTAMDGPURX 6900 XTRX 6900 XTRX 6800 XTGeForce RTX 3090RTX 3090RX 6900 XTNavi 2X\r\nRX 6800 XT\r\nRX 690… [+5059 chars]',
  },
  {
    source: { id: null, name: 'Famitsu.com' },
    author: null,
    title:
      '『龍が如く7』がPS5で2021年3月2日に発売決定。名越監督「つぎの『龍が如く』はスタートしている」『龍が如く』15周年記念特番で発表された情報まとめ。 - ファミ通.com',
    description:
      'セガが2020年12月8日（火）に配信した、『龍が如く』シリーズ15周年記念特番にて発表された情報をまとめてお届けする。',
    url: 'https://www.famitsu.com/news/202012/08210852.html',
    urlToImage:
      'https://www.famitsu.com/images/000/210/852/z_5fcf7d52b4c0d.jpg',
    publishedAt: '2020-12-08T13:22:00Z',
    content:
      '2020128201515\r\n7 5202132Yakuza:Like a Dragon\r\n15233003000\r\n129.com12281228\r\n215EC12912122866006000\r\nONLINE2 --202131940703700\r\nebtenDX3\r\n2202117\r\n15MJ2021\r\n2020 supported by 20201220REALITY Live Stag… [+32 chars]',
  },
  {
    source: { id: null, name: 'Yomiuri.co.jp' },
    author: '読売新聞オンライン',
    title:
      '国内で新たに４７人死亡、重症者５３６人に…ともに過去最多更新 - 読売新聞',
    description:
      '国内の新型コロナウイルスの感染者は８日、４３都道府県と空港検疫で計２１５６人確認された。死者は北海道と大阪府で各９人、東京都で６人など計４７人で、最も多かった今月４日の４５人を上回って過去最多。厚生労働省によると、重症',
    url: 'https://www.yomiuri.co.jp/national/20201208-OYT1T50276/',
    urlToImage: 'https://www.yomiuri.co.jp/ogp.jpg?type=ogp',
    publishedAt: '2020-12-08T12:31:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Oricon.co.jp' },
    author: '-',
    title:
      '本多力、女児誕生を報告「日々変わっていく表情に釘づけです」 - ORICON NEWS',
    description:
      '俳優の本多力（41）が8日、自身のツイッターを更新し、女児が誕生したことを発表した。　本多は「私ごとで大変恐縮ですが、我が家に元気な女の子が産まれてきてくれました」と報告し、妻、子供と笑顔で写る3ショットを掲載。「母子ともに健康です。ほんとちっちゃくて、でもいのち!!って感じてます。日々変わっていく表情に釘づけです」...',
    url: 'https://www.oricon.co.jp/news/2178768/full/',
    urlToImage:
      'https://contents.oricon.co.jp/upimg/news/20201208/2178768_202012080668649001607431841c.jpg',
    publishedAt: '2020-12-08T11:39:27Z',
    content:
      'ORICON NEWSoricon MENewSWebPCJASRAC9009642142Y31015 / 9009642140Y38026 | JRCX000003B14L | e-LicenseID26546\r\nCookie',
  },
  {
    source: { id: null, name: 'Tokyo-np.co.jp' },
    author: '東京新聞 TOKYO Web',
    title:
      '＜新型コロナ＞神奈川で152人感染 元気会横浜病院で２回目のクラスター - 東京新聞',
    description:
      '神奈川県内で８日、新型コロナウイルスに感染した座間市の５０代男性と相模原市の９０代女性の死亡と、１５２人の感染が明らかになった。このう...',
    url: 'https://www.tokyo-np.co.jp/article/73173',
    urlToImage:
      'https://static.tokyo-np.co.jp/image/article/size1/e/5/9/c/e59c5bfb80b92a42b70ccb33fe059d73_1.jpg',
    publishedAt: '2020-12-08T11:36:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Yomiuri.co.jp' },
    author: '読売新聞オンライン',
    title:
      '東京ドームＴＯＢに「応募」、最大株主の香港ファンドが表明 - 読売新聞',
    description:
      '三井不動産は８日、同社が実施中の東京ドームに対する株式公開買い付け（ＴＯＢ）に、最大株主の「オアシス・マネジメント」が応募する意向を表明したと発表した。オアシスは東京ドーム株を１０％弱保有する香港の投資ファンド運営会社',
    url: 'https://www.yomiuri.co.jp/economy/20201208-OYT1T50252/',
    urlToImage: 'https://www.yomiuri.co.jp/ogp.jpg?type=ogp',
    publishedAt: '2020-12-08T11:26:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Yahoo.co.jp' },
    author: 'THE ANSWER',
    title:
      '【MLB】新庄剛志は「48歳でもグレートだ」 現役復帰目指す姿に米注目「最も驚いたのは…」（THE ANSWER） - Yahoo!ニュース',
    description:
      '米大リーグ・メッツなどで活躍した新庄剛志氏が7日、12球団合同トライアウトに参加した。48歳の挑戦には米国も注目しているようだ。MLB公式サイトはトライアウトの様子について「引退してから1日も経っ',
    url:
      'https://news.yahoo.co.jp/articles/e052d1b912bb78599916789a2b0b08c80a2e1a55',
    urlToImage:
      'https://amd-pctr.c.yimg.jp/r/iwiz-amd/20201208-00137877-theanswer-000-5-view.jpg',
    publishedAt: '2020-12-08T11:25:16Z',
    content:
      '- - - - - - - - Copyright © 2020 Creative Co., Ltd. \r\nCopyright © 2020 Yahoo Japan Corporation. All Rights Reserved.',
  },
  {
    source: { id: null, name: 'Kyoto-np.co.jp' },
    author: '京都新聞社',
    title:
      '「試合できないことが本当に悔しい」 同志社大ラグビー部主将 クラスターで全国選手権出場辞退 - 京都新聞',
    description:
      '新型コロナウイルスのクラスター（感染者集団）発生が分かった同志社大ラグビー部は８日、学生日本一を決める全国大学選手権の初戦を１３日に控えて…',
    url: 'https://www.kyoto-np.co.jp/articles/-/440589',
    urlToImage:
      'https://kyoto-np.ismcdn.jp/mwimgs/0/2/1200wm/img_02e13520a6ecf443658fa32d7bc7cc2c908730.jpg',
    publishedAt: '2020-12-08T11:19:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Jiji.com' },
    author: '時事通信社',
    title: '西川内閣参与が辞任 「自民党や政府に迷惑掛ける」 - 時事通信ニュース',
    description:
      '政府は８日、西川公也内閣官房参与が辞任したと発表した。加藤勝信官房長官は同日の記者会見で、辞任の理由を「一身上の都合」と説明。自民党の吉川貴盛元農林水産相が鶏卵生産会社「アキタフーズ」から金銭を受け取った疑惑に絡み、西川氏も同社との親密な関係が取り沙汰されていた。',
    url: 'https://www.jiji.com/jc/article?k=2020120801105&g=pol',
    urlToImage: 'https://www.jiji.com/img/jijicom_og_image.png',
    publishedAt: '2020-12-08T10:52:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Nikkansports.com' },
    author: '日刊スポーツ',
    title:
      'ヤクルト小川ＧＭ「実績申し分ない」内川と１年契約 - ニッカンスポーツ',
    description:
      'ヤクルトは8日、今季限りでソフトバンクを退団した内川聖一内野手（38）と入団合意に達した。11日に、正式契約を結ぶことを発表した。背番号は「7」で、1年契約。… - 日刊スポーツ新聞社のニュースサイト、ニッカンスポーツ・コム（nikkansports.com）。',
    url: 'https://www.nikkansports.com/baseball/news/202012080000760.html',
    urlToImage:
      'https://www.nikkansports.com/baseball/news/img/202012080000760-w500_0.jpg',
    publishedAt: '2020-12-08T10:40:55Z',
    content: '(C)2020,Nikkan Sports ITNews.\r\nnikkansports.com',
  },
  {
    source: { id: null, name: 'Sankei.com' },
    author: '産経ニュース',
    title:
      'ネスレ日本、麦芽飲料「ネスレ ミロ」販売休止 ＳＮＳで注目、大人飲用急増で - 産経ニュース',
    description:
      'ネスレ日本（神戸市）は８日、麦芽飲料「ネスレミロ」シリーズ３商品について、数量ベースで前年同期比７倍を上回る発注を受けて安定供給ができないとして、販売を休止する…',
    url: 'https://www.sankei.com/economy/news/201208/ecn2012080021-n1.html',
    urlToImage:
      'https://www.sankei.com/images/news/201208/ecn2012080021-p1.jpg',
    publishedAt: '2020-12-08T10:39:00Z',
    content: 'PR\r\nPR\r\nPR\r\n©2020 The Sankei Shimbun All rights reserved.',
  },
  {
    source: { id: null, name: 'Jiji.com' },
    author: '時事通信社',
    title:
      '小学生女児にわいせつ行為か 女性遺棄、容疑者の男―警視庁 - 時事通信ニュース',
    description:
      '栃木県那須町の山林で会社員富塚沙織さん（３５）＝東京都豊島区＝の遺体が見つかった事件で、死体遺棄容疑で逮捕された保育士佐藤喜人容疑者（２９）とみられる男が、富塚さんの失踪後、都内で小学生の女児にわいせつ行為をしていたことが８日、捜査関係者への取材で分かった。',
    url: 'https://www.jiji.com/jc/article?k=2020120801156&g=soc',
    urlToImage: 'https://www.jiji.com/img/jijicom_og_image.png',
    publishedAt: '2020-12-08T10:27:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Sankei.com' },
    author: '産経ニュース',
    title:
      '加藤官房長官、韓国のＴＰＰ参加検討「歓迎」も見極め必要 - 産経ニュース',
    description:
      '加藤勝信官房長官は８日の記者会見で、韓国の文在寅（ムン・ジェイン）大統領が環太平洋戦略的経済連携協定（ＴＰＰ）への参加を検討する意向を表明したことについて「さま…',
    url: 'https://www.sankei.com/politics/news/201208/plt2012080037-n1.html',
    urlToImage:
      'https://www.sankei.com/images/news/201208/plt2012080037-p1.jpg',
    publishedAt: '2020-12-08T10:26:00Z',
    content: 'PR\r\nPR\r\nPR\r\n©2020 The Sankei Shimbun All rights reserved.',
  },
  {
    source: { id: null, name: 'Topnews.jp' },
    author: null,
    title: '【メルセデス】2021年にラッセル起用の可能性も？ - TopNews',
    description:
      'TopNews(トップニュース)は、F1や自動車ニュースをLive速報で毎日提供しています。',
    url: 'http://www.topnews.jp/2020/12/08/news/f1/194353.html',
    urlToImage: null,
    publishedAt: '2020-12-08T10:24:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Nhk.or.jp' },
    author: null,
    title:
      '福岡県 新型コロナ 85人感染確認 1日80人超は8月21日以来 - NHK NEWS WEB',
    description:
      '福岡県は、8日、県内で85人が新型コロナウイルスに感染していることが確認されたと発表しました。1日の感染者数が80人を超…',
    url: 'https://www3.nhk.or.jp/news/html/20201208/k10012753271000.html',
    urlToImage:
      'https://www3.nhk.or.jp/news/html/20201208/K10012753271_2012081920_2012081921_01_02.jpg',
    publishedAt: '2020-12-08T10:21:06Z',
    content: '',
  },
  {
    source: { id: null, name: 'Nikkei.com' },
    author: 'Nikkei Inc.',
    title: '［社説］経済対策の規模が膨らみすぎてないか - 日本経済新聞',
    description:
      '日本経済新聞の電子版。日経や日経ＢＰの提供する経済、企業、国際、政治、マーケット、情報・通信、社会など各分野のニュース。ビジネス、マネー、IT、スポーツ、住宅、キャリアなどの専門情報も満載。',
    url: 'https://www.nikkei.com/article/DGXZQODK082P20Y0A201C2000000',
    urlToImage: '//https:/www.nikkei.com/branding/nikkei/ogp.png',
    publishedAt: '2020-12-08T10:05:00Z',
    content: null,
  },
  {
    source: { id: null, name: 'Oricon.co.jp' },
    author: '-',
    title:
      '元宝塚・紅ゆずるが新型コロナ感染「味覚嗅覚も異常はなく自宅待機」 - ORICON NEWS',
    description:
      '宝塚歌劇団元星組トップスター・紅ゆずるの所属事務所・松竹エンタテイメントは8日、公式サイトを通じて、紅が新型コロナウイルスに感染していることを報告した。　サイトでは「12月3日に発熱の症状が出たため、12月5日病院にてPCR検査を受けたところ、12月7日に陽性の検査結果が出ました」...',
    url: 'https://www.oricon.co.jp/news/2178755/full/',
    urlToImage:
      'https://contents.oricon.co.jp/upimg/news/20201208/2178755_202012080635230001607417761c.jpg',
    publishedAt: '2020-12-08T08:53:40Z',
    content:
      'ORICON NEWSoricon MENewSWebPCJASRAC9009642142Y31015 / 9009642140Y38026 | JRCX000003B14L | e-LicenseID26546\r\nCookie',
  },
  {
    source: { id: null, name: 'BBC ITNews' },
    author: 'https://www.facebook.com/bbcnews/',
    title:
      'イギリスで新型コロナウイルスのワクチン接種開始 米ファイザー製 - BBCニュース',
    description:
      'イギリスで8日、米ファイザーと独ビオンテックが開発した新型コロナウイルスワクチンの接種が始まった。最初に接種したのはマーガレット・キーナンさん（90）。接種2人目は、ウィリアム･シェイクスピアさん（81）だったという。',
    url: 'https://www.bbc.com/japanese/55226431',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_japanese/70A3/production/_115953882_mediaitem115953878.jpg',
    publishedAt: '2020-12-08T08:28:46Z',
    content: null,
  },
  {
    source: { id: null, name: 'YouTube' },
    author: null,
    title: 'はやぶさ2のカプセルがJAXAに到着 - SankeiNews',
    description:
      '宇宙航空研究開発機構（JAXA）の探査機「はやぶさ２」が投下した回収カプセルが８日午前、羽田空港に到着した。この後、JAXAの相模原キャンパス（相模原市）に搬送された。カプセルには小惑星りゅうぐうから採取した試料が入っているとみられ、６年間に及ぶ探査の成果について本格的な分析が始まる。',
    url: 'https://www.youtube.com/watch?v=5nT408J2fK4',
    urlToImage: 'https://i.ytimg.com/vi/5nT408J2fK4/maxresdefault.jpg',
    publishedAt: '2020-12-08T08:11:19Z',
    content: null,
  },
  {
    source: { id: null, name: 'President.jp' },
    author: null,
    title:
      '｢400万円は要らない｣眞子さまと小室さんの結婚を阻むA氏の爆弾発言 なぜ1年半ぶりに取材を受けたのか - PRESIDENT Online',
    description:
      '「結婚と婚約は違いますから」この秋篠宮発言が波紋を呼んでいる。秋篠宮眞子さんが11月13日に出した「私、圭さんと結婚します」宣言の1週間後、秋篠宮の誕生日会見が行われた。この内容が公にされるのは秋篠宮の…',
    url: 'https://president.jp/articles/-/41239',
    urlToImage:
      'https://president.ismcdn.jp/mwimgs/8/c/1200wm/img_8cd82568394515f9008e528e7da765292107751.jpg',
    publishedAt: '2020-12-08T08:00:00Z',
    content: null,
  },
];

export const ITNews = ({ navigation }: Props) => {
  const [newsData, setNewsData] = useState<NewsResponse[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    (async () => {
      // TODO: APIキーはenvファイルで管理する, Responseの型付けをする
      // const response = await axios.get(
      //   'https://newsapi.org/v2/top-headlines?country=jp&apiKey=3b583c96f7c7451f88682de52f991096',
      // );
      // console.log('articles', response.data.articles);
      // setNewsData(response.data.articles);
      setNewsData(hoge);
    })();
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={newsData}
        keyExtractor={(item, index) => `${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => {}} />
        }
        renderItem={({ item: News }) => (
          <View style={{ backgroundColor: 'green' }}>
            <Text>{News.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
