(function(e){function n(n){for(var t,r,c=n[0],p=n[1],o=n[2],u=0,l=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(t in p)Object.prototype.hasOwnProperty.call(p,t)&&(e[t]=p[t]);m&&m(n);while(l.length)l.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var e,n=0;n<s.length;n++){for(var a=s[n],t=!0,c=1;c<a.length;c++){var p=a[c];0!==i[p]&&(t=!1)}t&&(s.splice(n--,1),e=r(r.s=a[0]))}return e}var t={},i={app:0},s=[];function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,n,a){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(a,t,function(n){return e[n]}.bind(null,t));return a},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/tw-pork-map/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=n,c=c.slice();for(var o=0;o<c.length;o++)n(c[o]);var m=p;s.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"42ab":function(e,n,a){},4678:function(e,n,a){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var n=s(e);return a(n)}function s(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=s,e.exports=i,i.id="4678"},5475:function(e){e.exports=JSON.parse('[{"districts":[{"zip":"100","name":"中正區"},{"zip":"103","name":"大同區"},{"zip":"104","name":"中山區"},{"zip":"105","name":"松山區"},{"zip":"106","name":"大安區"},{"zip":"108","name":"萬華區"},{"zip":"110","name":"信義區"},{"zip":"111","name":"士林區"},{"zip":"112","name":"北投區"},{"zip":"114","name":"內湖區"},{"zip":"115","name":"南港區"},{"zip":"116","name":"文山區"}],"name":"臺北市"},{"districts":[{"zip":"200","name":"仁愛區"},{"zip":"201","name":"信義區"},{"zip":"202","name":"中正區"},{"zip":"203","name":"中山區"},{"zip":"204","name":"安樂區"},{"zip":"205","name":"暖暖區"},{"zip":"206","name":"七堵區"}],"name":"基隆市"},{"districts":[{"zip":"207","name":"萬里區"},{"zip":"208","name":"金山區"},{"zip":"220","name":"板橋區"},{"zip":"221","name":"汐止區"},{"zip":"222","name":"深坑區"},{"zip":"223","name":"石碇區"},{"zip":"224","name":"瑞芳區"},{"zip":"226","name":"平溪區"},{"zip":"227","name":"雙溪區"},{"zip":"228","name":"貢寮區"},{"zip":"231","name":"新店區"},{"zip":"232","name":"坪林區"},{"zip":"233","name":"烏來區"},{"zip":"234","name":"永和區"},{"zip":"235","name":"中和區"},{"zip":"236","name":"土城區"},{"zip":"237","name":"三峽區"},{"zip":"238","name":"樹林區"},{"zip":"239","name":"鶯歌區"},{"zip":"241","name":"三重區"},{"zip":"242","name":"新莊區"},{"zip":"243","name":"泰山區"},{"zip":"244","name":"林口區"},{"zip":"247","name":"蘆洲區"},{"zip":"248","name":"五股區"},{"zip":"249","name":"八里區"},{"zip":"251","name":"淡水區"},{"zip":"252","name":"三芝區"},{"zip":"253","name":"石門區"}],"name":"新北市"},{"districts":[{"zip":"260","name":"宜蘭市"},{"zip":"263","name":"壯圍鄉"},{"zip":"261","name":"頭城鎮"},{"zip":"262","name":"礁溪鄉"},{"zip":"264","name":"員山鄉"},{"zip":"265","name":"羅東鎮"},{"zip":"266","name":"三星鄉"},{"zip":"267","name":"大同鄉"},{"zip":"268","name":"五結鄉"},{"zip":"269","name":"冬山鄉"},{"zip":"270","name":"蘇澳鎮"},{"zip":"272","name":"南澳鄉"},{"zip":"290","name":"釣魚臺"}],"name":"宜蘭縣"},{"districts":[{"zip":"300","name":"東區"},{"zip":"300","name":"北區"},{"zip":"300","name":"香山區"}],"name":"新竹市"},{"districts":[{"zip":"308","name":"寶山鄉"},{"zip":"302","name":"竹北市"},{"zip":"303","name":"湖口鄉"},{"zip":"304","name":"新豐鄉"},{"zip":"305","name":"新埔鎮"},{"zip":"306","name":"關西鎮"},{"zip":"307","name":"芎林鄉"},{"zip":"310","name":"竹東鎮"},{"zip":"311","name":"五峰鄉"},{"zip":"312","name":"橫山鄉"},{"zip":"313","name":"尖石鄉"},{"zip":"314","name":"北埔鄉"},{"zip":"315","name":"峨眉鄉"}],"name":"新竹縣"},{"districts":[{"zip":"320","name":"中壢區"},{"zip":"324","name":"平鎮區"},{"zip":"325","name":"龍潭區"},{"zip":"326","name":"楊梅區"},{"zip":"327","name":"新屋區"},{"zip":"328","name":"觀音區"},{"zip":"330","name":"桃園區"},{"zip":"333","name":"龜山區"},{"zip":"334","name":"八德區"},{"zip":"335","name":"大溪區"},{"zip":"336","name":"復興區"},{"zip":"337","name":"大園區"},{"zip":"338","name":"蘆竹區"}],"name":"桃園市"},{"districts":[{"zip":"350","name":"竹南鎮"},{"zip":"351","name":"頭份市"},{"zip":"352","name":"三灣鄉"},{"zip":"353","name":"南庄鄉"},{"zip":"354","name":"獅潭鄉"},{"zip":"356","name":"後龍鎮"},{"zip":"357","name":"通霄鎮"},{"zip":"358","name":"苑裡鎮"},{"zip":"360","name":"苗栗市"},{"zip":"361","name":"造橋鄉"},{"zip":"362","name":"頭屋鄉"},{"zip":"363","name":"公館鄉"},{"zip":"364","name":"大湖鄉"},{"zip":"365","name":"泰安鄉"},{"zip":"366","name":"銅鑼鄉"},{"zip":"367","name":"三義鄉"},{"zip":"368","name":"西湖鄉"},{"zip":"369","name":"卓蘭鎮"}],"name":"苗栗縣"},{"districts":[{"zip":"400","name":"中區"},{"zip":"401","name":"東區"},{"zip":"402","name":"南區"},{"zip":"403","name":"西區"},{"zip":"404","name":"北區"},{"zip":"406","name":"北屯區"},{"zip":"407","name":"西屯區"},{"zip":"408","name":"南屯區"},{"zip":"411","name":"太平區"},{"zip":"412","name":"大里區"},{"zip":"413","name":"霧峰區"},{"zip":"414","name":"烏日區"},{"zip":"420","name":"豐原區"},{"zip":"421","name":"后里區"},{"zip":"422","name":"石岡區"},{"zip":"423","name":"東勢區"},{"zip":"424","name":"和平區"},{"zip":"426","name":"新社區"},{"zip":"427","name":"潭子區"},{"zip":"428","name":"大雅區"},{"zip":"429","name":"神岡區"},{"zip":"432","name":"大肚區"},{"zip":"433","name":"沙鹿區"},{"zip":"434","name":"龍井區"},{"zip":"435","name":"梧棲區"},{"zip":"436","name":"清水區"},{"zip":"437","name":"大甲區"},{"zip":"438","name":"外埔區"},{"zip":"439","name":"大安區"}],"name":"臺中市"},{"districts":[{"zip":"500","name":"彰化市"},{"zip":"502","name":"芬園鄉"},{"zip":"503","name":"花壇鄉"},{"zip":"504","name":"秀水鄉"},{"zip":"505","name":"鹿港鎮"},{"zip":"506","name":"福興鄉"},{"zip":"507","name":"線西鄉"},{"zip":"508","name":"和美鎮"},{"zip":"509","name":"伸港鄉"},{"zip":"510","name":"員林市"},{"zip":"511","name":"社頭鄉"},{"zip":"512","name":"永靖鄉"},{"zip":"513","name":"埔心鄉"},{"zip":"514","name":"溪湖鎮"},{"zip":"515","name":"大村鄉"},{"zip":"516","name":"埔鹽鄉"},{"zip":"520","name":"田中鎮"},{"zip":"521","name":"北斗鎮"},{"zip":"522","name":"田尾鄉"},{"zip":"523","name":"埤頭鄉"},{"zip":"524","name":"溪州鄉"},{"zip":"525","name":"竹塘鄉"},{"zip":"526","name":"二林鎮"},{"zip":"527","name":"大城鄉"},{"zip":"528","name":"芳苑鄉"},{"zip":"530","name":"二水鄉"}],"name":"彰化縣"},{"districts":[{"zip":"540","name":"南投市"},{"zip":"541","name":"中寮鄉"},{"zip":"542","name":"草屯鎮"},{"zip":"544","name":"國姓鄉"},{"zip":"545","name":"埔里鎮"},{"zip":"546","name":"仁愛鄉"},{"zip":"551","name":"名間鄉"},{"zip":"552","name":"集集鎮"},{"zip":"553","name":"水里鄉"},{"zip":"555","name":"魚池鄉"},{"zip":"556","name":"信義鄉"},{"zip":"557","name":"竹山鎮"},{"zip":"558","name":"鹿谷鄉"}],"name":"南投縣"},{"districts":[{"zip":"600","name":"西區"},{"zip":"600","name":"東區"}],"name":"嘉義市"},{"districts":[{"zip":"602","name":"番路鄉"},{"zip":"603","name":"梅山鄉"},{"zip":"604","name":"竹崎鄉"},{"zip":"605","name":"阿里山鄉"},{"zip":"606","name":"中埔鄉"},{"zip":"607","name":"大埔鄉"},{"zip":"608","name":"水上鄉"},{"zip":"611","name":"鹿草鄉"},{"zip":"612","name":"太保市"},{"zip":"613","name":"朴子市"},{"zip":"614","name":"東石鄉"},{"zip":"615","name":"六腳鄉"},{"zip":"616","name":"新港鄉"},{"zip":"621","name":"民雄鄉"},{"zip":"622","name":"大林鎮"},{"zip":"623","name":"溪口鄉"},{"zip":"624","name":"義竹鄉"},{"zip":"625","name":"布袋鎮"}],"name":"嘉義縣"},{"districts":[{"zip":"630","name":"斗南鎮"},{"zip":"631","name":"大埤鄉"},{"zip":"632","name":"虎尾鎮"},{"zip":"633","name":"土庫鎮"},{"zip":"634","name":"褒忠鄉"},{"zip":"635","name":"東勢鄉"},{"zip":"636","name":"臺西鄉"},{"zip":"637","name":"崙背鄉"},{"zip":"638","name":"麥寮鄉"},{"zip":"640","name":"斗六市"},{"zip":"643","name":"林內鄉"},{"zip":"646","name":"古坑鄉"},{"zip":"647","name":"莿桐鄉"},{"zip":"648","name":"西螺鎮"},{"zip":"649","name":"二崙鄉"},{"zip":"651","name":"北港鎮"},{"zip":"652","name":"水林鄉"},{"zip":"653","name":"口湖鄉"},{"zip":"654","name":"四湖鄉"},{"zip":"655","name":"元長鄉"}],"name":"雲林縣"},{"districts":[{"zip":"700","name":"中西區"},{"zip":"701","name":"東區"},{"zip":"702","name":"南區"},{"zip":"704","name":"北區"},{"zip":"708","name":"安平區"},{"zip":"709","name":"安南區"},{"zip":"710","name":"永康區"},{"zip":"711","name":"歸仁區"},{"zip":"712","name":"新化區"},{"zip":"713","name":"左鎮區"},{"zip":"714","name":"玉井區"},{"zip":"715","name":"楠西區"},{"zip":"716","name":"南化區"},{"zip":"717","name":"仁德區"},{"zip":"718","name":"關廟區"},{"zip":"719","name":"龍崎區"},{"zip":"720","name":"官田區"},{"zip":"721","name":"麻豆區"},{"zip":"722","name":"佳里區"},{"zip":"723","name":"西港區"},{"zip":"724","name":"七股區"},{"zip":"725","name":"將軍區"},{"zip":"726","name":"學甲區"},{"zip":"727","name":"北門區"},{"zip":"730","name":"新營區"},{"zip":"731","name":"後壁區"},{"zip":"732","name":"白河區"},{"zip":"733","name":"東山區"},{"zip":"734","name":"六甲區"},{"zip":"735","name":"下營區"},{"zip":"736","name":"柳營區"},{"zip":"737","name":"鹽水區"},{"zip":"741","name":"善化區"},{"zip":"744","name":"新市區"},{"zip":"742","name":"大內區"},{"zip":"743","name":"山上區"},{"zip":"745","name":"安定區"}],"name":"臺南市"},{"districts":[{"zip":"800","name":"新興區"},{"zip":"801","name":"前金區"},{"zip":"802","name":"苓雅區"},{"zip":"803","name":"鹽埕區"},{"zip":"804","name":"鼓山區"},{"zip":"805","name":"旗津區"},{"zip":"806","name":"前鎮區"},{"zip":"807","name":"三民區"},{"zip":"811","name":"楠梓區"},{"zip":"812","name":"小港區"},{"zip":"813","name":"左營區"},{"zip":"814","name":"仁武區"},{"zip":"815","name":"大社區"},{"zip":"817","name":"東沙群島"},{"zip":"819","name":"南沙群島"},{"zip":"820","name":"岡山區"},{"zip":"821","name":"路竹區"},{"zip":"822","name":"阿蓮區"},{"zip":"823","name":"田寮區"},{"zip":"824","name":"燕巢區"},{"zip":"825","name":"橋頭區"},{"zip":"826","name":"梓官區"},{"zip":"827","name":"彌陀區"},{"zip":"828","name":"永安區"},{"zip":"829","name":"湖內區"},{"zip":"830","name":"鳳山區"},{"zip":"831","name":"大寮區"},{"zip":"832","name":"林園區"},{"zip":"833","name":"鳥松區"},{"zip":"840","name":"大樹區"},{"zip":"842","name":"旗山區"},{"zip":"843","name":"美濃區"},{"zip":"844","name":"六龜區"},{"zip":"845","name":"內門區"},{"zip":"846","name":"杉林區"},{"zip":"847","name":"甲仙區"},{"zip":"848","name":"桃源區"},{"zip":"849","name":"那瑪夏區"},{"zip":"851","name":"茂林區"},{"zip":"852","name":"茄萣區"}],"name":"高雄市"},{"districts":[{"zip":"880","name":"馬公市"},{"zip":"881","name":"西嶼鄉"},{"zip":"882","name":"望安鄉"},{"zip":"883","name":"七美鄉"},{"zip":"884","name":"白沙鄉"},{"zip":"885","name":"湖西鄉"}],"name":"澎湖縣"},{"districts":[{"zip":"890","name":"金沙鎮"},{"zip":"891","name":"金湖鎮"},{"zip":"892","name":"金寧鄉"},{"zip":"893","name":"金城鎮"},{"zip":"894","name":"烈嶼鄉"},{"zip":"896","name":"烏坵鄉"}],"name":"金門縣"},{"districts":[{"zip":"900","name":"屏東市"},{"zip":"901","name":"三地門鄉"},{"zip":"902","name":"霧臺鄉"},{"zip":"903","name":"瑪家鄉"},{"zip":"904","name":"九如鄉"},{"zip":"905","name":"里港鄉"},{"zip":"906","name":"高樹鄉"},{"zip":"907","name":"鹽埔鄉"},{"zip":"908","name":"長治鄉"},{"zip":"909","name":"麟洛鄉"},{"zip":"911","name":"竹田鄉"},{"zip":"912","name":"內埔鄉"},{"zip":"913","name":"萬丹鄉"},{"zip":"920","name":"潮州鎮"},{"zip":"921","name":"泰武鄉"},{"zip":"922","name":"來義鄉"},{"zip":"923","name":"萬巒鄉"},{"zip":"924","name":"崁頂鄉"},{"zip":"925","name":"新埤鄉"},{"zip":"926","name":"南州鄉"},{"zip":"927","name":"林邊鄉"},{"zip":"928","name":"東港鎮"},{"zip":"929","name":"琉球鄉"},{"zip":"931","name":"佳冬鄉"},{"zip":"932","name":"新園鄉"},{"zip":"940","name":"枋寮鄉"},{"zip":"941","name":"枋山鄉"},{"zip":"942","name":"春日鄉"},{"zip":"943","name":"獅子鄉"},{"zip":"944","name":"車城鄉"},{"zip":"945","name":"牡丹鄉"},{"zip":"946","name":"恆春鎮"},{"zip":"947","name":"滿州鄉"}],"name":"屏東縣"},{"districts":[{"zip":"950","name":"臺東市"},{"zip":"951","name":"綠島鄉"},{"zip":"952","name":"蘭嶼鄉"},{"zip":"953","name":"延平鄉"},{"zip":"954","name":"卑南鄉"},{"zip":"955","name":"鹿野鄉"},{"zip":"956","name":"關山鎮"},{"zip":"957","name":"海端鄉"},{"zip":"958","name":"池上鄉"},{"zip":"959","name":"東河鄉"},{"zip":"961","name":"成功鎮"},{"zip":"962","name":"長濱鄉"},{"zip":"963","name":"太麻里鄉"},{"zip":"964","name":"金峰鄉"},{"zip":"965","name":"大武鄉"},{"zip":"966","name":"達仁鄉"}],"name":"臺東縣"},{"districts":[{"zip":"970","name":"花蓮市"},{"zip":"971","name":"新城鄉"},{"zip":"972","name":"秀林鄉"},{"zip":"973","name":"吉安鄉"},{"zip":"974","name":"壽豐鄉"},{"zip":"975","name":"鳳林鎮"},{"zip":"976","name":"光復鄉"},{"zip":"977","name":"豐濱鄉"},{"zip":"978","name":"瑞穗鄉"},{"zip":"979","name":"萬榮鄉"},{"zip":"981","name":"玉里鎮"},{"zip":"982","name":"卓溪鄉"},{"zip":"983","name":"富里鄉"}],"name":"花蓮縣"}]')},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("7a23");function i(e,n){var a=Object(t["t"])("router-view");return Object(t["o"])(),Object(t["d"])(a)}a("8de4");const s={};s.render=i;var r=s,c=a("6c02"),p=a("822d"),o=a.n(p),m={class:"home container-fluid px-0"},u=Object(t["f"])("div",null,[Object(t["f"])("img",{src:o.a,alt:"載入中",class:"loader-img"})],-1),l={class:"row g-0"},b={class:"side"},d=Object(t["f"])("div",{id:"map",class:"map"},null,-1),z={class:"current-position"},f=Object(t["f"])("i",{class:"fas fa-crosshairs"},null,-1),j={class:"form-floating searchLocation"},h=Object(t["f"])("label",{for:"floatingInput"},"搜尋附近店家",-1),O=Object(t["f"])("i",{class:"fas fa-search"},null,-1),k=Object(t["e"])(" 發生錯誤! "),g=Object(t["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),y={class:"modal fade",id:"modalDetail",tabindex:"-1","aria-labelledby":"modalDetailLabel","aria-hidden":"true"},v={class:"modal-dialog"},w={class:"modal-content"},A={class:"modal-header bg-main text-white"},M={class:"modal-title",id:"modalDetailLabel"},L=Object(t["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),S={class:"modal-body container"},x={class:"list-group list-group-flush"},C={class:"list-group-item d-flex row"},D={class:"col-6"},R=Object(t["f"])("span",{class:"me-2"},"狀態:",-1),B={key:1},_={class:"col-6 d-flex align-items-center"},E=Object(t["f"])("span",{class:"me-2"},"類型:",-1),P={key:0,class:"badge rounded-pill bg-use"},F={key:1,class:"badge rounded-pill bg-warning"},H={key:2,class:"badge rounded-pill bg-secondary text-dark"},T={class:"list-group-item d-flex row"},I={class:"col-6"},U=Object(t["e"])(" 營業時間"),K=Object(t["f"])("br",null,null,-1),N={class:"col-6"},Q=Object(t["f"])("span",{class:"me-2"},"標章編號:",-1),q=Object(t["f"])("span",{class:"me-2"},"有效日期:",-1),J=Object(t["f"])("span",{class:"me-2"},"更新時間:",-1),W={class:"list-group-item"},G=Object(t["f"])("span",{class:"me-2"},"地址:",-1),V={class:"list-group-item"},X=Object(t["f"])("span",{class:"me-2"},"簡介",-1);function Z(e,n,a,i,s,r){var c=Object(t["t"])("Sidebar");return Object(t["o"])(),Object(t["d"])("div",m,[Object(t["f"])("div",{class:["loader-overlay justify-content-center align-items-center",{show:s.isLoading}]},[u],2),Object(t["f"])("div",l,[Object(t["f"])("div",b,[Object(t["f"])(c,{ref:"sidebar",open:s.isOpen,countyList:s.countyList,areaList:s.areaList,selectedCounty:s.county,"onUpdate:selectedCounty":n[1]||(n[1]=function(e){return s.county=e}),selectedArea:s.area,"onUpdate:selectedArea":n[2]||(n[2]=function(e){return s.area=e}),onUpdateCity:r.switchCities,onSwitchOpen:r.menuSwitch,onGetRegionData:r.getPorkDataRegion,"pork-data":s.FilterResult,onTypeChange:r.SwitchType,onOpenMarkerPopup:r.openCurrentPopup},null,8,["open","countyList","areaList","selectedCounty","selectedArea","onUpdateCity","onSwitchOpen","onGetRegionData","pork-data","onTypeChange","onOpenMarkerPopup"])]),Object(t["f"])("div",{class:["main",{open:s.isOpen,close:!s.isOpen}]},[d,Object(t["f"])("div",z,[Object(t["f"])("button",{class:"btn btn-light",onClick:n[3]||(n[3]=Object(t["B"])((function(){return r.getCurrentPos&&r.getCurrentPos.apply(r,arguments)}),["prevent"]))},[f])]),Object(t["f"])("div",j,[Object(t["z"])(Object(t["f"])("input",{type:"text",class:"form-control","onUpdate:modelValue":n[4]||(n[4]=function(e){return s.seachShop=e}),onKeyup:n[5]||(n[5]=Object(t["A"])((function(){return r.searchShop&&r.searchShop.apply(r,arguments)}),["enter"])),placeholder:"附近店家"},null,544),[[t["x"],s.seachShop,void 0,{trim:!0}]]),h,Object(t["f"])("button",{type:"button",class:"btn btn-inside",onClick:n[6]||(n[6]=function(){return r.searchShop&&r.searchShop.apply(r,arguments)})},[O])]),Object(t["f"])("div",{class:["alert alert-danger alert-dismissible fade alert-pos",{show:s.hasError}],role:"alert"},[k,g],2)],2)]),Object(t["f"])("div",y,[Object(t["f"])("div",v,[Object(t["f"])("div",w,[Object(t["f"])("div",A,[Object(t["f"])("h5",M,[Object(t["f"])("strong",null,Object(t["v"])(s.currentMarker.market_name),1)]),L]),Object(t["f"])("div",S,[Object(t["f"])("ul",x,[Object(t["f"])("li",C,[Object(t["f"])("div",D,[R,s.currentMarker.business_week&&s.currentMarker.business_hours&&s.currentMarker.business_hurs_end?(Object(t["o"])(),Object(t["d"])("span",{key:0,class:{"text-success":r.transformOpen(s.currentMarker.business_hours,s.currentMarker.business_hurs_end,r.transformBusinessWeek(s.currentMarker.business_week))}},Object(t["v"])(r.transformOpen(s.currentMarker.business_hours,s.currentMarker.business_hurs_end,r.transformBusinessWeek(s.currentMarker.business_week))?"營業中":"尚未營業"),3)):(Object(t["o"])(),Object(t["d"])("span",B,"尚無資料"))]),Object(t["f"])("div",_,[E,"餐飲"===s.currentMarker.type?(Object(t["o"])(),Object(t["d"])("span",P,"餐飲")):"販售"===s.currentMarker.type?(Object(t["o"])(),Object(t["d"])("span",F,"販售")):(Object(t["o"])(),Object(t["d"])("span",H,"其他"))])]),Object(t["f"])("li",T,[Object(t["f"])("div",I,[U,K,Object(t["f"])("ul",null,[(Object(t["o"])(!0),Object(t["d"])(t["a"],null,Object(t["s"])(r.transformBusinessWeek(s.currentMarker.business_week),(function(e){return Object(t["o"])(),Object(t["d"])("li",{key:e},Object(t["v"])(e)+" "+Object(t["v"])(s.currentMarker.business_hours)+"~"+Object(t["v"])(s.currentMarker.business_hurs_end),1)})),128))])]),Object(t["f"])("div",N,[Object(t["f"])("p",null,[Q,Object(t["e"])(Object(t["v"])(s.currentMarker.badge_code),1)]),Object(t["f"])("p",null,[q,Object(t["e"])(Object(t["v"])(s.currentMarker.ValidDate),1)]),Object(t["f"])("p",null,[J,Object(t["e"])(Object(t["v"])(s.currentMarker.last_edited_date),1)])])]),Object(t["f"])("li",W,[G,Object(t["e"])(" "+Object(t["v"])(s.currentMarker.addr),1)]),Object(t["f"])("li",V,[X,Object(t["e"])(Object(t["v"])(s.currentMarker.context),1)])])])])])])])}var Y=a("5530"),$=a("2909"),ee=(a("159b"),a("b0c0"),a("d81d"),a("4de4"),a("99af"),a("fb6a"),a("ac1f"),a("1276"),{key:0,class:"fas fa-chevron-left"}),ne={key:1,class:"fas fa-chevron-right"},ae={class:"position-sticky"},te=Object(t["f"])("h3",{class:"text-white mb-0 px-3 pt-3"},[Object(t["f"])("strong",null,"台灣豬標章地圖")],-1),ie={class:"search p-3"},se={class:"city-select row g-0"},re={class:"col-6 pe-1 mb-3"},ce={class:"col-6"},pe=Object(t["f"])("option",{value:"",disabled:""},"請選擇",-1),oe={class:"col-12 d-flex justify-content-around align-items-center"},me={class:"content bg-light"},ue={key:0,class:"list-group rounded-0 list-group-flush"},le={class:"d-flex justify-content-between align-items-center"},be={key:0,class:"badge rounded-pill bg-use"},de={key:1,class:"badge rounded-pill bg-warning"},ze={key:2,class:"badge rounded-pill bg-third"},fe={class:"d-flex justify-content-between align-items-center"},je={key:1,class:"text-third"},he={class:"dropdown"},Oe=Object(t["f"])("button",{class:"border dropdown-toggle btn-sm",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"}," 營業時間 ",-1),ke={class:"dropdown-menu dropdown-menu-sm","aria-labelledby":"dropdownMenuButton"},ge={key:1,class:"list-group rounded-0 list-group-flush py-3 px-2"};function ye(e,n,a,i,s,r){return Object(t["o"])(),Object(t["d"])("div",null,[Object(t["f"])("button",{class:["btn switch-btn btn-main",{open:s.open,close:!s.open}],onClick:n[1]||(n[1]=Object(t["B"])((function(){return r.switchOpen&&r.switchOpen.apply(r,arguments)}),["prevent"]))},[s.open?(Object(t["o"])(),Object(t["d"])("i",ee)):(Object(t["o"])(),Object(t["d"])("i",ne))],2),Object(t["f"])("nav",{id:"sidebarMenu",class:["bg-main sidebar",{open:s.open,close:!s.open}]},[Object(t["f"])("div",ae,[te,Object(t["f"])("div",ie,[Object(t["f"])("div",se,[Object(t["f"])("div",re,[Object(t["f"])("select",{name:"county",id:"county",class:"form-select",value:a.selectedCounty,onInput:n[2]||(n[2]=function(n){return e.$emit("update:selectedCounty",n.target.value)}),onChange:n[3]||(n[3]=function(){return r.switchCities&&r.switchCities.apply(r,arguments)})},[(Object(t["o"])(!0),Object(t["d"])(t["a"],null,Object(t["s"])(a.countyList,(function(e){return Object(t["o"])(),Object(t["d"])("option",{value:e,key:e},Object(t["v"])(e),9,["value"])})),128))],40,["value"])]),Object(t["f"])("div",ce,[Object(t["f"])("select",{name:"area",id:"area",class:"form-select",value:a.selectedArea,onInput:n[4]||(n[4]=function(n){return e.$emit("update:selectedArea",n.target.value)}),onChange:n[5]||(n[5]=function(){return r.regetRegionData&&r.regetRegionData.apply(r,arguments)})},[pe,(Object(t["o"])(!0),Object(t["d"])(t["a"],null,Object(t["s"])(a.areaList,(function(e){return Object(t["o"])(),Object(t["d"])("option",{value:e.name,key:e.zip},Object(t["v"])(e.name),9,["value"])})),128))],40,["value"])]),Object(t["f"])("div",oe,[Object(t["f"])("button",{class:"btn btn-third me-2 p-1",onClick:n[6]||(n[6]=Object(t["B"])((function(e){return r.switchType("全部")}),["prevent"]))},"全部"),Object(t["f"])("button",{class:"btn btn-use me-2 p-1",onClick:n[7]||(n[7]=Object(t["B"])((function(e){return r.switchType("餐飲")}),["prevent"]))},"餐飲"),Object(t["f"])("button",{class:"btn btn-warning me-2 p-1",onClick:n[8]||(n[8]=Object(t["B"])((function(e){return r.switchType("販售")}),["prevent"]))},"販售"),Object(t["f"])("button",{class:"btn btn-secondary me-2 p-1",onClick:n[9]||(n[9]=Object(t["B"])((function(e){return r.switchType("其他")}),["prevent"]))},"其他")])])]),Object(t["f"])("div",me,[a.porkData.length>0?(Object(t["o"])(),Object(t["d"])("div",ue,[(Object(t["o"])(!0),Object(t["d"])(t["a"],null,Object(t["s"])(a.porkData,(function(e){return Object(t["o"])(),Object(t["d"])("a",{href:"#",onClick:Object(t["B"])((function(n){return r.OpenPopup(n,e.badge_code)}),["prevent"]),class:"list-group-item list-group-item-action",key:e.badge_code},[Object(t["f"])("div",le,[Object(t["f"])("strong",null,Object(t["v"])(e.market_name),1),Object(t["f"])("div",null,["餐飲"===e.type?(Object(t["o"])(),Object(t["d"])("span",be,Object(t["v"])(e.type),1)):"販售"===e.type?(Object(t["o"])(),Object(t["d"])("span",de,Object(t["v"])(e.type),1)):(Object(t["o"])(),Object(t["d"])("span",ze,"其他"))])]),Object(t["f"])("small",null,Object(t["v"])(e.addr),1),Object(t["f"])("div",fe,[e.business_hours&&e.business_hurs_end&&e.business_week?(Object(t["o"])(),Object(t["d"])("small",{key:0,class:{"text-success":r.transformOpen(e.business_hours,e.business_hurs_end,r.transformBusinessWeek(e.business_week)),"text-third":!r.transformOpen(e.business_hours,e.business_hurs_end,r.transformBusinessWeek(e.business_week))}},[Object(t["f"])("strong",null,Object(t["v"])(r.transformOpen(e.business_hours,e.business_hurs_end,r.transformBusinessWeek(e.business_week))?"營業中":"尚未營業"),1)],2)):(Object(t["o"])(),Object(t["d"])("small",je,"尚無資料")),Object(t["f"])("div",he,[Oe,Object(t["f"])("ul",ke,[(Object(t["o"])(!0),Object(t["d"])(t["a"],null,Object(t["s"])(r.transformBusinessWeek(e.business_week),(function(n){return Object(t["o"])(),Object(t["d"])("li",{class:"dropdown-item",key:n},Object(t["v"])(n)+" "+Object(t["v"])(e.business_hours)+" ~ "+Object(t["v"])(e.business_hurs_end),1)})),128))])])])],8,["onClick"])})),128))])):(Object(t["o"])(),Object(t["d"])("div",ge," 這邊的商家還沒有申請標章喔 "))])])],2)])}var ve=a("c1df"),we=a.n(ve),Ae={name:"Sidebar",props:{countyList:Array,areaList:Array,selectedCounty:String,selectedArea:String,porkData:Array},data:function(){return{open:!1,type:"全部"}},methods:{switchCities:function(){this.$emit("updateCity")},switchOpen:function(){this.open=!this.open,this.$emit("switchOpen")},regetRegionData:function(){this.$emit("getRegionData")},transformBusinessWeek:function(e){var n=[];return n=e.split("，"),n},switchType:function(e){this.$emit("typeChange",e)},transformOpen:function(e,n,a){var t=!0,i=!1,s=new Date,r=s.getDay(),c="";switch(r){case 0:c="星期日";break;case 1:c="星期一";break;case 2:c="星期二";break;case 3:c="星期三";break;case 4:c="星期四";break;case 5:c="星期五";break;case 6:c="星期六";break}-1!==a.indexOf(c)&&(i=!0);var p=ve("".concat(s.getHours(),":").concat(s.getMinutes()),"HH:mm"),o=ve(e,"HH:mm"),m=ve(n,"HH:mm"),u=p.isAfter(o,"second"),l=p.isBefore(m,"second");return t=!!o.isSame(m)||(m.isBefore(ve("12:00","HH:mm"))&&(m.isAfter(ve("00:00","HH:mm"))||m.isSame(ve("00:00","HH:mm")))&&o.isAfter(m)?u&&p.isAfter(m,"second"):u&&l),!(!t||!i)},OpenPopup:function(e,n){"BUTTON"!==e.target.nodeName&&this.$emit("openMarkerPopup",n)}}};Ae.render=ye;var Me=Ae,Le=a("5475"),Se=a("e11e"),xe=a.n(Se),Ce=a("7b17"),De={name:"Home",components:{Sidebar:Me},data:function(){return{isOpen:!1,county:"新北市",area:"",countyList:[],areaList:[],region:Le,porkDataList:[],porkDataRegion:[],type:"全部",FilterResult:[],porkMap:{},markerGroup:[],currentMarker:{},modalDetail:null,seachShop:"",isLoading:!0,hasError:!1,currentLat:"",currentLon:"",isLat:!1,isSearch:!1}},methods:{menuSwitch:function(){this.isOpen=!this.isOpen},getRegion:function(){var e=this;e.countyList=[],e.region.forEach((function(n){e.countyList.push(n.name)}))},switchCities:function(){var e=this;e.areaList=[],e.region.forEach((function(n){n.name===e.county&&(e.areaList=Object($["a"])(n.districts))})),e.area=""},mapInit:function(){this.porkMap=xe.a.map("map").setView([24.97881,121.54022],16),xe.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(this.porkMap),this.porkMap.options.minZoom=14,this.porkMap.options.maxZoom=18},updateMap:function(e,n){var a=this,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"全部",i=this,s=i.porkDataList.filter((function(e){return i.distance(i.currentLat,i.currentLon,e.Latitude,e.Lontitude,"K")<1.5}));if(e&&!n)switch(t){case"全部":i.FilterResult=Object($["a"])(s);break;case"餐飲":i.FilterResult=s.filter((function(e){return"餐飲"===e.type}));break;case"販售":i.FilterResult=s.filter((function(e){return"販售"===e.type}));break;default:i.FilterResult=s.filter((function(e){return"販售"!==e.type&&"餐飲"!==e.type}));break}else if(n){var r=this,c=r.seachShop,p=[],o=[];if(""!==c)switch(o=e?Object($["a"])(s):Object($["a"])(r.porkDataRegion),r.FilterResult=[],o.forEach((function(e){-1!==e.market_name.indexOf(c)&&p.push(e)})),t){case"全部":r.FilterResult=[].concat(p);break;case"餐飲":r.FilterResult=p.filter((function(e){return"餐飲"===e.type}));break;case"販售":r.FilterResult=p.filter((function(e){return"販售"===e.type}));break;default:r.FilterResult=p.filter((function(e){return"販售"!==e.type&&"餐飲"!==e.type}));break}else r.FilterResult=e?Object($["a"])(s):Object($["a"])(r.porkDataRegion)}else switch(t){case"全部":e||(i.FilterResult=Object($["a"])(this.porkDataRegion));break;case"餐飲":i.FilterResult=i.porkDataRegion.filter((function(e){return"餐飲"===e.type}));break;case"販售":i.FilterResult=i.porkDataRegion.filter((function(e){return"販售"===e.type}));break;default:i.FilterResult=i.porkDataRegion.filter((function(e){return"販售"!==e.type&&"餐飲"!==e.type}));break}i.markerGroup.forEach((function(e){i.porkMap.removeLayer(e)})),i.markerGroup=[];var m=[];if(i.FilterResult.length>0){i.FilterResult.forEach((function(e){var n=i.transformBusinessWeek(e.business_week),t=i.transformOpen(e.business_hours,e.business_hurs_end,n),s=xe.a.marker([e.Latitude,e.Lontitude],{title:"".concat(e.badge_code)}).addTo(a.porkMap);s.bindPopup('<strong class="h5 mb-1">'.concat(e.market_name,'</strong>\n          <div class="d-flex justify-content-between mb-1"><p class="my-1">\n          ').concat(t?"營業中":void 0===t?"尚無資料":"尚未營業",'</p>\n          <span class="badge rounded-pill bg-secondary text-dark my-1">').concat("餐飲"===e.type?"餐飲":"販售"===e.type?"販售":"其他",'</span>\n          </div>\n          <a class="btn btn-sm btn-warning p-1 text-dark me-2" href="https://www.google.com.tw/maps/place/').concat(e.addr,'" target="_blank"><small>前往店家</small></a>\n          <button class="btn btn-sm btn-use p-1" id = "check').concat(e.badge_code,'"><small>查看詳情</small></button>')).on("popupopen",(function(n){var a=xe.a.DomUtil.get("check".concat(e.badge_code));xe.a.DomEvent.addListener(a,"click",(function(n){i.currentMarker=Object(Y["a"])({},e),i.modalDetail.show()}))})),i.markerGroup.push(s),m.push([e.Latitude,e.Lontitude])}));var u=new xe.a.LatLngBounds(m);i.porkMap.fitBounds(u)}},getPorkData:function(){var e=this;e.isLat=!1;var n="https://script.google.com/macros/s/AKfycbzo4pQ-y9o3CpwHUHvnNNzL4ZtdQcWIC0hHJ1BaqwOf9DrLmkNWhzq2/exec?url=https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=tR9TIFWlvquB";e.axios.get(n).then((function(n){200===n.status?(e.porkDataList=n.data,e.getCurrentPos(),e.isLoading=!1,e.$refs.sidebar.switchOpen()):e.hasError=!0})).catch((function(){e.hasError=!0}))},getPorkDataRegion:function(){var e=this;e.isLat=!1,e.porkDataRegion=[],e.porkDataList.forEach((function(n){var a=n.addr.slice(0,3),t=n.addr.slice(3,6);e.county===a&&e.area===t&&e.porkDataRegion.push(n)})),this.updateMap(e.isLat,e.isSearch)},SwitchType:function(e){this.type=e,this.updateMap(this.isLat,this.isSearch,this.type)},openCurrentPopup:function(e){this.markerGroup.forEach((function(n){n.options.title===e&&n.openPopup()}))},transformOpen:function(e,n,a){if(a&&e&&n){var t=!0,i=!1,s=new Date,r=s.getDay(),c="";switch(r){case 0:c="星期日";break;case 1:c="星期一";break;case 2:c="星期二";break;case 3:c="星期三";break;case 4:c="星期四";break;case 5:c="星期五";break;case 6:c="星期六";break}-1!==a.indexOf(c)&&(i=!0);var p=ve("".concat(s.getHours(),":").concat(s.getMinutes()),"HH:mm"),o=ve(e,"HH:mm"),m=ve(n,"HH:mm"),u=p.isAfter(o,"second"),l=p.isBefore(m,"second");return t=!!o.isSame(m)||(m.isBefore(ve("12:00","HH:mm"))&&(m.isAfter(ve("00:00","HH:mm"))||m.isSame(ve("00:00","HH:mm")))&&o.isAfter(m)?u&&p.isAfter(m,"second"):u&&l),!(!t||!i)}},transformBusinessWeek:function(e){if(e){var n=[];return n=e.split("，"),n}},searchShop:function(){var e=this;e.isSearch=!0,e.updateMap(e.isLat,e.isSearch),e.isSearch=!1},getCurrentPos:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(e.showPosition,e.ErrorHandle):(this.area="新店區",this.getPorkDataRegion())},showPosition:function(e){this.porkMap.setView([e.coords.latitude,e.coords.longitude],16),this.currentLat=e.coords.latitude,this.currentLon=e.coords.longitude;var n=xe.a.icon({iconUrl:a("c9a1"),iconSize:[30,30],iconAnchor:[22,94],popupAnchor:[-3,-76],shadowSize:[68,95],shadowAnchor:[22,94]});xe.a.marker([this.currentLat,this.currentLon],{icon:n}).addTo(this.porkMap),this.isLat=!0,this.getNearShop()},ErrorHandle:function(){this.area="新店區",this.getPorkDataRegion()},getNearShop:function(){var e=this;e.updateMap(e.isLat,e.isSearch)},distance:function(e,n,a,t,i){if(e===a&&n===t)return 0;var s=Math.PI*e/180,r=Math.PI*a/180,c=n-t,p=Math.PI*c/180,o=Math.sin(s)*Math.sin(r)+Math.cos(s)*Math.cos(r)*Math.cos(p);return o>1&&(o=1),o=Math.acos(o),o=180*o/Math.PI,o=60*o*1.1515,"K"===i&&(o*=1.609344),o}},created:function(){this.getRegion(),this.switchCities()},mounted:function(){this.mapInit(),this.getPorkData(),this.modalDetail=new Ce["a"](document.getElementById("modalDetail"))}};De.render=Z;var Re=De,Be=[{path:"/",name:"Home",component:Re}],_e=Object(c["a"])({history:Object(c["b"])(),routes:Be}),Ee=_e,Pe=a("5502"),Fe=Object(Pe["a"])({state:{},mutations:{},actions:{},modules:{}}),He=a("bc3a"),Te=a.n(He),Ie=a("2106"),Ue=a.n(Ie);we()().format(),Object(t["c"])(r).use(Fe).use(Ee).use(Ue.a,Te.a).mount("#app")},"822d":function(e,n,a){e.exports=a.p+"img/pig.f07fcc86.png"},"8de4":function(e,n,a){"use strict";a("42ab")},c9a1:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABR9JREFUeJztm1tsFGUUx//n7G6h5aqARBILRC4aJNilXAVWCVooEB+kaiItXhIeDCTGB4kmZkNIjCRGEwxeeEAMFzFiwBuWgBEMF9tQqjFWQGiDRtTQCFhsd3dmzvEBY4qhzF7OTCHu7/n7fnPmv9/Mzp75FihSpEiR/zEU6tGSSZ7S2BpX0D0KjCPoTQCgoPMEnBSmg8cqRzVj9WoJq6RQApj04LLB0ZSuUJblDL7tmoMFZ8DYoE7f9U37NlwMuragA6DK6tqlovQaA0NymyrnBPTMsc83bwumtMsEFsDkyctjdEvqTQBPFWaSt/t1/rziwIEDrklh/yEShLSmpibyRxTbieixwm1UmYkMHj8rPm5nS0uLFu67ErYWAkBbR+laJnrIykeMR1o7+q6x8l3hthbGFyydy+AvrL0AoKqzm+o3H7R02q6AZJIBrDN1dkOJ1sH4QzMNoLLh9EIGT7B0doeBinhV7QPGTjuU+HFL39VgxjJTn5UokUhEVeR+K19PCLTqn0vNBDPRn/3KxzLzACtfTzD45nhD22g7nxERpVFWLj9Y9foLQFX7W7n8ICKzlWYWACmlrVx+KCFl5bL7FiD+1czlA3ty1sxlJSop4eMi8Kx8PSMOD0ydtLKZBXD4440dxGi08vUMHfp6x44uK5vto7Dqe6a+qx1CaLulzzSACORdiFywdF6BoN0R2WKpNO0H/HLqu/StY+/OEKHK0vsvJM8179lyyFJp3g/o33XmdYiYFnkZ3T+6f/ota2sgLbGKeU+OiETcw2CMtPCJaGusxJnZ8Mn23y183QmkI9S8b+NZFrkPwKlCXQKc0Ig3N4iTBwIKAAAa925pS7M7VVQ/zNehgve9EprevHvbGcvauhNYAABQ5sYGEXAUkOMK5NLQVAVawHIs6snAwApEQPeAKdV1c1SxCsCCgo8hIiDerdC11v1AwDiAyoVL74LHr4IQSGNEVeuF8Wzz7s0/WDlNAkgkEtFLZSNfJMjzAMcsnD0iyCiwpmn66Jcs3iEWHMC0xY8O99ySHQBmFerKDd3vavThb+rfOVeIpaAAKqpr74wI1YNQXognXwRoizFXNXy26cd8HXkHMKWqboKyfAnwsHwdFojIbwy99+ierSfymZ9XAJMX1ZaThyMAjchnvjmKnzw3OqN538acGyU5PwdMX7KkVD3add2cPAAQyiOxzM4x81f2yXVqzgE4f5W9wkBFrvOCh6cOoosv5zorp0sgyBefRqiqzsnlgSnrFZBIJKIMrM+vrtAgUrxRU1OTdZ8j6wA6y8qfAPiO/OoKEaaJrZdKs96YkV0AySQrdFXeRYWMAi8gy8s7qwDija3VAN9eUFUhwsD4+Py6rH6PZBUAQ01fSYcBkdZlNc5vwJj5K/sM1Avnmam08LLCQ0Q6qL1sSFPTBuda43xXwGC9MPtGO3kAYOYBPDw1w3ecr4kw06SiXkAEhQfgEU2zKacXIPGt3TcA9iSwTU+BozLRb4hvAKIosakmfETZ98eR/z1A3NA2PljjieO7kcI3gIyTukEDUEiX41u7/wpQaXVSXcitrd/LKJBJdUHZO+031P8mSLzL8xxkujrhuS5Ur+MgVCGug3TqEsRzoUo7/aZE/QZ47bFNPDT9tAgmSbrTptAQEMXRYXx+q9843xXQ0vJBxnFRDUgI219sEJEjHPMWZfMnixw6QkmeOPvbxUI6j4ChAIX7hys/VETB7SDd+/1XH32KG+qmVaRIkSK9xN91kcJtQ7NNpwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.c2e1a591.js.map