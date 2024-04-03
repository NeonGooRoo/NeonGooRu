import{_ as i}from"./mpvsettings-VfeRFdjr.js";import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as h,a as t,b as e,d as o,w as s,e as d}from"./app-C6ZeHeaj.js";const m={},_=t("p",null,"MPV плеер это опен-сорс программа, на которую можно устанавливать множество плагинов, которые помогут в изучении японского и майнинга карточек. MPV поддерживается на всех ПК платформах, но гайд направлен на Windows. Все, кроме установки программы и плагинов должно быть одинаковым.",-1),g=t("p",null,"Примеры использования для майнгинга:",-1),u=t("hr",null,null,-1),f=t("h2",{id:"установка",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#установка"},[t("span",null,"Установка")])],-1),v={href:"https://mpv.io/installation/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://sourceforge.net/projects/mpv-player-windows/files/64bit-v3/",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\",-1),P=t("code",null,"%AppData%",-1),y=t("code",null,"mpv",-1),V={href:"https://drive.google.com/file/d/12Ejx5RsWIjnA5kgLV-jj3_atXBaMa6D3/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer"},M=t("p",null,[e("Если вы на Mac, вам нужно открыть "),t("code",null,"~/Library/Application Support/")],-1),j={class:"hint-container caution"},w=t("p",{class:"hint-container-title"},"ОЧЕНЬ ВАЖНО!",-1),x=t("code",null,"MPV",-1),A=t("code",null,"C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\mpv\\scripts\\animecards_v35.lua",-1),D=t("img",{src:i,alt:"",loading:"lazy"},null,-1),S=d('<p>Можно пользоваться!</p><h2 id="использование" tabindex="-1"><a class="header-anchor" href="#использование"><span>Использование</span></a></h2><p>Управление плеером:</p><div class="hint-container caution"><p class="hint-container-title">ОСТОРОЖНО!</p><p>Все кнопки чувствительны к раскладке и регистру (z и Z делают разные вещи), так что запускать <strong>MPV</strong> лучше на английской раскладке. Поменять её можно в уже запущенном приложении на <strong>Windows</strong> только через сочетание <strong>Win+Пробел</strong>.</p></div><table><thead><tr><th>кнопка</th><th>функция MPV</th><th>функция</th></tr></thead><tbody><tr><td>9</td><td>add volume -2</td><td>звук тише</td></tr><tr><td>0</td><td>add volume +2</td><td>звук громче</td></tr><tr><td>право</td><td>seek 5</td><td>+5 секунд</td></tr><tr><td>лево</td><td>seek -5</td><td>-5 секунд</td></tr><tr><td>пробел</td><td>cycle pause</td><td>пауза</td></tr><tr><td>[</td><td>multiply speed 1/1.1</td><td>замедлить на 10%</td></tr><tr><td>]</td><td>multiply speed 1.1</td><td>ускорить на 10%</td></tr><tr><td>мышь вниз</td><td>no-osd seek -3 exact</td><td>отмотать на 3 сек</td></tr><tr><td>мышь вверх</td><td>no-osd seek 3 exact</td><td>промотать на 3 сек</td></tr><tr><td>боковая мыши ближняя</td><td>no-osd sub-seek -1</td><td>отмотать до пред. линии субтитров</td></tr><tr><td>боковая мыши дальняя</td><td>no-osd sub-seek 1</td><td>домотать до след. линии субтитров</td></tr><tr><td>z</td><td>add sub-delay -0.1</td><td>изменить задержку субтитров на -0. 1</td></tr><tr><td>x</td><td>add sub-delay 0.1</td><td>изменить задержку субтитров на 0. 1</td></tr><tr><td>s</td><td>sub-step -1</td><td>сдвинуть субтитры, чтобы предыд. строка началась.</td></tr><tr><td>a</td><td>sub-step 1</td><td>сдвинуть субтитры, чтобы след. строка началась.</td></tr></tbody></table>',5),R={class:"hint-container details"},E=t("summary",null,"Настройка управления",-1),T=t("p",null,[e("если вы хотите поменять или добавить клавиши, то вам нужно модифицировать файл "),t("code",null,"input.conf"),e(" который находится в "),t("code",null,"C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\"),e(". Записывать нужно следующим образом: "),t("code",null,'"клавиша" "функция MPV"'),e(".")],-1),C={href:"https://github.com/mpv-player/mpv/blob/master/etc/input.conf",target:"_blank",rel:"noopener noreferrer"},L={href:"https://mpv.io/manual/master/",target:"_blank",rel:"noopener noreferrer"},B=t("strong",null,"sub-transition",-1),N={href:"https://github.com/Ajatt-Tools/sub-transition",target:"_blank",rel:"noopener noreferrer"},O=d('<p>Открываются настройки плагина через <strong>Shift+n</strong>, навигация через стрелочки.</p><p><strong>t</strong> - включить скрипт.</p><p><strong>s</strong>- сохранить настройки.</p><p><strong>inter speed:</strong> скорость когда нет субтитров.</p><p><strong>normal speed:</strong> скорость когда есть субтитры.</p><p><strong>skip immediately:</strong> пропускать куски без субтитров.</p><p><strong>notifications:</strong> уведомления mpv об изменении скорости. Лучше выключить.</p><p><strong>start enabled:</strong> автовключение при запуске <strong>MPV</strong>.</p><h3 id="просмотр-и-субтитры" tabindex="-1"><a class="header-anchor" href="#просмотр-и-субтитры"><span>Просмотр и субтитры</span></a></h3><p>Теперь попробуйте запустить аниме и субтитры. Для этого просто переносите файлы из папки в окно приложения. Видео и субтитры можно загружать одновременно. Если одно видео и один файл субтитров, то все будет работать сразу, если видео файлов несколько, то нужно чтобы файл субтитров к каждому видео имел то же название, что и видео, допустимы теги языка (например <code>.ja</code> дает программе знать, что это японские субтитры). Например, если перекинуть в плеер сразу несколько файлов, как тут:</p><p><code>One-Piece_S999EP01.mkv</code></p><p><code>One-Piece_S999EP01.ja.srt</code></p><p><code>One-Piece_S999EP02.mkv</code></p><p><code>One-Piece_S999EP02.ja.srt</code></p><p><code>One-Piece_S999EP03.mkv</code></p><p><code>One-Piece_S999EP03.ja.srt</code></p><p><code>One-Piece_S999EP04.mkv</code></p><p><code>One-Piece_S999EP04.ja.srt</code></p><p>то видео будут автоматически проигрываться друг за другом, и субтитры автоматически добавятся. Важно, что порядок отображения видео указывает плееру порядок, не цифры, так что сортируйте папку по названию.</p><p>Чтобы синхронизировать субтитры вручную, пользуйтесь кнопками <strong>a</strong> и <strong>s</strong> чтобы найти строку субтитров, которая произносится на данный момент, и <strong>z</strong> и <strong>x</strong> чтобы подправить тайминги до идеала.</p>',20),U=d('<p>Выбирать субтитры и аудиодорожки можно иконками снизу меню. Чтобы проверить, загрузились ли плагины, попробуйте навестись в нижнюю часть экрана, видео должно автоматически становиться на паузу. Это сделано для того, чтобы когда вы наводились на субтитры при просмотре видео, вам не приходилось также ставить каждый раз видео на паузу. Если вам это не нравится, удалите файл <code>Pause_on_MousePos.lua</code> в папке <strong>MPV</strong>. Либо нажмите <code>Shift+t</code>, должна открыться менюшка.</p><p>Если у вас друг не работают скрипты, проверьте, что у вас <code>input.conf</code> находится в <code>C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\mpv</code>. Если все верно, можете попробовать в папке, куда в СКАЧАЛИ <strong>MPV</strong>, создать папку portable_config, и в нее выгрузить СОДЕРЖИМОЕ <code>C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\mpv</code>, чтобы у вас был путь <code>...\\папка_с_программами\\MPV\\portable_config\\input.conf</code></p><p>Настройка <strong>MPV</strong> готова.</p><h2 id="маининг" tabindex="-1"><a class="header-anchor" href="#маининг"><span>Майнинг</span></a></h2><p>В самом по себе <strong>MPV</strong> смотреть слова нельзя, так что нужно пользоваться внешними программами. Тут 2 варианта, посмотрите для себя, какой вам удобнее. Через <strong>Yomitan</strong> проще, потому что он уже должен быть у вас настроен, но с <strong>JL</strong> гораздо удобнее, потому что можно в полный экран смотреть, но он добавляет лишь одно выбранное определение.</p><h3 id="yomitan-clipboard-inserter" tabindex="-1"><a class="header-anchor" href="#yomitan-clipboard-inserter"><span>Yomitan + Clipboard Inserter</span></a></h3>',6),G={href:"https://chromewebstore.google.com/detail/clipboard-inserter/deahejllghicakhplliloeheabddjajm",target:"_blank",rel:"noopener noreferrer"},J={href:"https://anacreondjt.gitlab.io/texthooker.html",target:"_blank",rel:"noopener noreferrer"},W=t("li",null,"включите разрешение, чтобы на нем появилась зеленая галочка.",-1),z=t("p",null,[e("Попробуйте скопировать что угодно, текст должен появится на странице. Если все работает, открывайте желанный контент в MPV, и строчки субтитров у вас должны повторяться на этой странице теперь. "),t("strong",null,"Anacreon Script"),e(" копирует автоматически субтитры в буфер. Когда появилось слово, которое хотите замайнить: майните его через "),t("strong",null,"Yomitan"),e(" и после этого в окне "),t("strong",null,"MPV"),e(" нажимаете "),t("code",null,"Ctrl+V"),e(". Видео на паузу ставить необязательно, через несколько секунд появится уведомление - карточка готова!")],-1),I=t("h3",{id:"jl",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#jl"},[t("span",null,"JL")])],-1),Y=t("p",null,[e("Также как и с "),t("strong",null,"Yomitan"),e(", когда появляется желаемое слово - майните, и после того как даст уведомление, что она готова, в окне "),t("strong",null,"MPV"),e(" нажимаете "),t("code",null,"Ctrl+V"),e(". Карточка готова. Не забывайте после майна сделать окно "),t("strong",null,"MPV"),e(" активным (тыкнуть в него).")],-1),q=t("p",null,"Результат должен выглядеть так:",-1),Z=t("h2",{id:"faq",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#faq"},[t("span",null,"FAQ")])],-1),F=t("li",null,"Почему кнопки не работают? проверьте что у вас английская раскладка и выключен Caps Lock",-1),Q={href:"https://neongoo.ru/mpv.html#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0",target:"_blank",rel:"noopener noreferrer"},H=t("strong",null,"Установка",-1);function X(K,$){const r=l("RouteLink"),a=l("VidStack"),n=l("ExternalLinkIcon");return c(),h("div",null,[_,t("p",null,[e("Данная инструкция сделана с расчетом, что Anki настроен по "),o(r,{to:"/software/anki.html"},{default:s(()=>[e("это гайду")]),_:1})]),g,o(a,{src:"/imgvid/mpvdemo2.mp4"}),o(a,{src:"/imgvid/mpvjl.mp4"}),u,f,t("p",null,[e("Сначала нужно скачать MPV. У него множество версий на "),t("a",v,[e("официальном сайте"),o(n)]),e(", самый простой вариант "),t("a",b,[e("тут"),o(n)]),e(". Скачиваете самый последний архив. Теперь в вашей папочке для программ, которую вы создали заранее, создаете папку MPV и выгружаете туда содержимое архива.")]),t("p",null,[e("Теперь откройте "),k,e(" введя "),P,e(" в поиск Windows или в адресную строку в любой папочке. В неё выложите папочку "),y,e(" из "),t("a",V,[e("данного архива"),o(n)])]),M,t("div",j,[w,t("p",null,[e("Если вы используете не основной профиль анки а созданный вами вручную, или если вы хотите использовать "),x,e(" с колодой не по формату "),o(r,{to:"/en/software/anki.html"},{default:s(()=>[e("гайда Anki")]),_:1}),e(", то вам нужно открыть файл "),A,e(" в текстовом редакторе, и изменить названия полей на те, которые поодойдут под ваш формат карточки. На картинке изображено как: "),D])]),S,t("details",R,[E,T,t("p",null,[e("Все функции можно посмотреть "),t("a",C,[e("тут"),o(n)]),e(", названия кнопок, в том числе мыши, "),t("a",L,[e("тут"),o(n)]),e(".")])]),t("p",null,[e("Также объясню как пользоваться плагином на ускорение видео "),B,e(", больше информации на "),t("a",N,[e("AJATT-Tools GitHub"),o(n)]),e(", когда нет субтитров. Полезно, чтобы погружаться более эффективно.")]),O,t("p",null,[e("Информация о ток, как переименовывать и обрабатывать субтитры, в том числе делать автоматический ретайминг, "),o(r,{to:"/software/subtitles.html"},{default:s(()=>[e("тут")]),_:1}),e(". Источники субтитров можно найти в "),o(r,{to:"/resources.html"},{default:s(()=>[e("ресурсах")]),_:1}),e(".")]),U,t("ol",null,[t("li",null,[e("Установите "),t("a",G,[e("данное расширение"),o(n)]),e(".")]),t("li",null,[e("Откройте "),t("a",J,[e("данную страницу"),o(n)])]),W]),z,o(a,{src:"/imgvid/mpvdemo2.mp4"}),I,t("p",null,[e("Установите "),o(r,{to:"/jl.html"},{default:s(()=>[e("JL")]),_:1})]),Y,q,o(a,{src:"/imgvid/mpvjl.mp4"}),t("p",null,[e("Контент и субтитры можно найти в "),o(r,{to:"/en/software/resources.html"},{default:s(()=>[e("ресурсах")]),_:1})]),Z,t("ul",null,[F,t("li",null,[e("Карточка создается, в поле аудио предложения есть файл, но нет звука и каринка пустая, почему? Вы используете не основной профиль Anki, измените настройки соответственно тому как написано в разделе "),t("a",Q,[H,o(n)])])])])}const nt=p(m,[["render",X],["__file","mpv.html.vue"]]),rt=JSON.parse(`{"path":"/en/software/mpv.html","title":"MPV","lang":"en-US","frontmatter":{"Author":null,"title":"MPV","shortTitle":"MPV","description":"Установка, настройка и использованиe MPV плеера.","icon":"/ico/mpv-icon.png","category":["инструменты"],"tag":["майнинг","видео"],"Date":null,"ReadingTime":null,"order":4,"head":[["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://vuepress-theme-hope-docs-demo.netlify.app/software/mpv.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/en/software/mpv.html"}],["meta",{"property":"og:site_name","content":"NeonGooRoo's Guide"}],["meta",{"property":"og:title","content":"MPV"}],["meta",{"property":"og:description","content":"Установка, настройка и использованиe MPV плеера."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/mpvsettings.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-04-03T15:50:34.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"MPV"}],["meta",{"property":"article:author","content":"NeonGooRoo"}],["meta",{"property":"article:tag","content":"майнинг"}],["meta",{"property":"article:tag","content":"видео"}],["meta",{"property":"article:modified_time","content":"2024-04-03T15:50:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MPV\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/mpvsettings.png\\"],\\"dateModified\\":\\"2024-04-03T15:50:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"NeonGooRoo\\",\\"url\\":\\"https://t.me/neongooroo\\"}]}"]]},"headers":[{"level":2,"title":"Установка","slug":"установка","link":"#установка","children":[]},{"level":2,"title":"Использование","slug":"использование","link":"#использование","children":[{"level":3,"title":"Просмотр и субтитры","slug":"просмотр-и-субтитры","link":"#просмотр-и-субтитры","children":[]}]},{"level":2,"title":"Майнинг","slug":"маининг","link":"#маининг","children":[{"level":3,"title":"Yomitan + Clipboard Inserter","slug":"yomitan-clipboard-inserter","link":"#yomitan-clipboard-inserter","children":[]},{"level":3,"title":"JL","slug":"jl","link":"#jl","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[]}],"git":{"createdTime":1711729864000,"updatedTime":1712159434000,"contributors":[{"name":"NeonGooRoo","email":"neongooroo@gmail.com","commits":3}]},"readingTime":{"minutes":3.75,"words":1126},"filePathRelative":"en/software/mpv.md","localizedDate":"March 29, 2024","excerpt":"<p>MPV плеер это опен-сорс программа, на которую можно устанавливать множество плагинов, которые помогут в изучении японского и майнинга карточек. MPV поддерживается на всех ПК платформах, но гайд направлен на Windows. Все, кроме установки программы и плагинов должно быть одинаковым.</p>\\n<p>Данная инструкция сделана с расчетом, что Anki настроен по <a href=\\"/software/anki.html\\" target=\\"_blank\\">это гайду</a></p>"}`);export{nt as comp,rt as data};