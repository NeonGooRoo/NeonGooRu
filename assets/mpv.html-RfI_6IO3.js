import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c,a as t,b as e,d as o,w as s,f as a}from"./app-BCo23nM8.js";const h="/neongooru/imgvid/mpvsettings.png",m={},_={href:"https://t.me/neongooru",target:"_blank",rel:"noopener noreferrer"},g=t("p",null,"MPV плеер это опен-сорс программа, на которую можно устанавливать множество плагинов, которые помогут в изучении японского и майнинга карточек. MPV поддерживается на всех ПК платформах, но гайд направлен на Windows. Все, кроме установки программы и плагинов должно быть одинаковым.",-1),u=t("p",null,"Примеры использования для майнгинга:",-1),f=t("hr",null,null,-1),v=t("h2",{id:"установка",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#установка"},[t("span",null,"Установка")])],-1),b={href:"https://mpv.io/installation/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://sourceforge.net/projects/mpv-player-windows/files/64bit-v3/",target:"_blank",rel:"noopener noreferrer"},P=t("code",null,"C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\",-1),V=t("code",null,"%AppData%",-1),y=t("code",null,"mpv",-1),M={href:"https://drive.google.com/file/d/12Ejx5RsWIjnA5kgLV-jj3_atXBaMa6D3/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer"},j=t("p",null,[e("Если вы на Mac, вам нужно открыть "),t("code",null,"~/Library/Application Support/")],-1),x={class:"hint-container caution"},A=t("p",{class:"hint-container-title"},"ОЧЕНЬ ВАЖНО!",-1),D=t("code",null,"MPV",-1),w=t("code",null,"C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\mpv\\scripts\\animecards_v35.lua",-1),S=t("img",{src:h,alt:"",loading:"lazy"},null,-1),R=a('<p>Можно пользоваться!</p><h2 id="использование" tabindex="-1"><a class="header-anchor" href="#использование"><span>Использование</span></a></h2><p>Управление плеером:</p><div class="hint-container caution"><p class="hint-container-title">ОСТОРОЖНО!</p><p>Все кнопки чувствительны к раскладке и регистру (z и Z делают разные вещи), так что запускать <strong>MPV</strong> лучше на английской раскладке. Поменять её можно в уже запущенном приложении на <strong>Windows</strong> только через сочетание <strong>Win+Пробел</strong>.</p></div><table><thead><tr><th>кнопка</th><th>функция MPV</th><th>функция</th></tr></thead><tbody><tr><td>9</td><td>add volume -2</td><td>звук тише</td></tr><tr><td>0</td><td>add volume +2</td><td>звук громче</td></tr><tr><td>право</td><td>seek 5</td><td>+5 секунд</td></tr><tr><td>лево</td><td>seek -5</td><td>-5 секунд</td></tr><tr><td>пробел</td><td>cycle pause</td><td>пауза</td></tr><tr><td>[</td><td>multiply speed 1/1.1</td><td>замедлить на 10%</td></tr><tr><td>]</td><td>multiply speed 1.1</td><td>ускорить на 10%</td></tr><tr><td>мышь вниз</td><td>no-osd seek -3 exact</td><td>отмотать на 3 сек</td></tr><tr><td>мышь вверх</td><td>no-osd seek 3 exact</td><td>промотать на 3 сек</td></tr><tr><td>боковая мыши ближняя</td><td>no-osd sub-seek -1</td><td>отмотать до пред. линии субтитров</td></tr><tr><td>боковая мыши дальняя</td><td>no-osd sub-seek 1</td><td>домотать до след. линии субтитров</td></tr><tr><td>z</td><td>add sub-delay -0.1</td><td>изменить задержку субтитров на -0. 1</td></tr><tr><td>x</td><td>add sub-delay 0.1</td><td>изменить задержку субтитров на 0. 1</td></tr><tr><td>s</td><td>sub-step -1</td><td>сдвинуть субтитры, чтобы предыд. строка началась.</td></tr><tr><td>a</td><td>sub-step 1</td><td>сдвинуть субтитры, чтобы след. строка началась.</td></tr></tbody></table>',5),E={class:"hint-container details"},C=t("summary",null,"Настройка управления",-1),L=t("p",null,[e("если вы хотите поменять или добавить клавиши, то вам нужно модифицировать файл "),t("code",null,"input.conf"),e(" который находится в "),t("code",null,"C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\"),e(". Записывать нужно следующим образом: "),t("code",null,'"клавиша" "функция MPV"'),e(".")],-1),T={href:"https://github.com/mpv-player/mpv/blob/master/etc/input.conf",target:"_blank",rel:"noopener noreferrer"},B={href:"https://mpv.io/manual/master/",target:"_blank",rel:"noopener noreferrer"},N=t("strong",null,"sub-transition",-1),O={href:"https://github.com/Ajatt-Tools/sub-transition",target:"_blank",rel:"noopener noreferrer"},U=a('<p>Открываются настройки плагина через <strong>Shift+n</strong>, навигация через стрелочки.</p><p><strong>t</strong> - включить скрипт.</p><p><strong>s</strong>- сохранить настройки.</p><p><strong>inter speed:</strong> скорость когда нет субтитров.</p><p><strong>normal speed:</strong> скорость когда есть субтитры.</p><p><strong>skip immediately:</strong> пропускать куски без субтитров.</p><p><strong>notifications:</strong> уведомления mpv об изменении скорости. Лучше выключить.</p><p><strong>start enabled:</strong> автовключение при запуске <strong>MPV</strong>.</p><h2 id="просмотр-и-субтитры" tabindex="-1"><a class="header-anchor" href="#просмотр-и-субтитры"><span>Просмотр и субтитры</span></a></h2><p>Теперь попробуйте запустить аниме и субтитры. Для этого просто переносите файлы из папки в окно приложения. Видео и субтитры можно загружать одновременно. Если одно видео и один файл субтитров, то все будет работать сразу, если видео файлов несколько, то нужно чтобы файл субтитров к каждому видео имел то же название, что и видео, допустимы теги языка (например <code>.ja</code> дает программе знать, что это японские субтитры). Например, если перекинуть в плеер сразу несколько файлов, как тут:</p><p><code>One-Piece_S999EP01.mkv</code></p><p><code>One-Piece_S999EP01.ja.srt</code></p><p><code>One-Piece_S999EP02.mkv</code></p><p><code>One-Piece_S999EP02.ja.srt</code></p><p><code>One-Piece_S999EP03.mkv</code></p><p><code>One-Piece_S999EP03.ja.srt</code></p><p><code>One-Piece_S999EP04.mkv</code></p><p><code>One-Piece_S999EP04.ja.srt</code></p><p>то видео будут автоматически проигрываться друг за другом, и субтитры автоматически добавятся. Важно, что порядок отображения видео указывает плееру порядок, не цифры, так что сортируйте папку по названию.</p><p>Чтобы синхронизировать субтитры вручную, пользуйтесь кнопками <strong>a</strong> и <strong>s</strong> чтобы найти строку субтитров, которая произносится на данный момент, и <strong>z</strong> и <strong>x</strong> чтобы подправить тайминги до идеала.</p>',20),J=a('<p>Выбирать субтитры и аудиодорожки можно иконками снизу меню. Чтобы проверить, загрузились ли плагины, попробуйте навестись в нижнюю часть экрана, видео должно автоматически становиться на паузу. Это сделано для того, чтобы когда вы наводились на субтитры при просмотре видео, вам не приходилось также ставить каждый раз видео на паузу. Если вам это не нравится, удалите файл <code>Pause_on_MousePos.lua</code> в папке <strong>MPV</strong>. Либо нажмите <code>Shift+t</code>, должна открыться менюшка.</p><p>Если у вас друг не работают скрипты, проверьте, что у вас <code>input.conf</code> находится в <code>C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\mpv</code>. Если все верно, можете попробовать в папке, куда в СКАЧАЛИ <strong>MPV</strong>, создать папку portable_config, и в нее выгрузить СОДЕРЖИМОЕ <code>C:\\Users\\**ВАШ ИМЯ ПОЛЬЗОВАТЕЛЯ**\\AppData\\Roaming\\mpv</code>, чтобы у вас был путь <code>...\\папка_с_программами\\MPV\\portable_config\\input.conf</code></p><p>Настройка <strong>MPV</strong> готова.</p><h2 id="маининг" tabindex="-1"><a class="header-anchor" href="#маининг"><span>Майнинг</span></a></h2><p>В самом по себе <strong>MPV</strong> смотреть слова нельзя, так что нужно пользоваться внешними программами. Тут 2 варианта, посмотрите для себя, какой вам удобнее. Через <strong>Yomitan</strong> проще, потому что он уже должен быть у вас настроен, но с <strong>JL</strong> гораздо удобнее, потому что можно в полный экран смотреть, но он добавляет лишь одно выбранное определение.</p><h3 id="yomichan-clipboard-inserter" tabindex="-1"><a class="header-anchor" href="#yomichan-clipboard-inserter"><span>Yomichan + Clipboard Inserter</span></a></h3>',6),W={href:"https://chromewebstore.google.com/detail/clipboard-inserter/deahejllghicakhplliloeheabddjajm",target:"_blank",rel:"noopener noreferrer"},z={href:"https://anacreondjt.gitlab.io/texthooker.html",target:"_blank",rel:"noopener noreferrer"},G=t("li",null,"включите разрешение, чтобы на нем появилась зеленая галочка.",-1),I=t("p",null,[e("Попробуйте скопировать что угодно, текст должен появится на странице. Если все работает, открывайте желанный контент в MPV, и строчки субтитров у вас должны повторяться на этой странице теперь. "),t("strong",null,"Anacreon Script"),e(" копирует автоматически субтитры в буфер. Когда появилось слово, которое хотите замайнить: майните его через "),t("strong",null,"Yomitan"),e(" и после этого в окне "),t("strong",null,"MPV"),e(" нажимаете "),t("code",null,"Ctrl+V"),e(". Видео на паузу ставить необязательно, через несколько секунд появится уведомление - карточка готова!")],-1),Y=t("h3",{id:"jl",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#jl"},[t("span",null,"JL")])],-1),q=t("p",null,[e("Также как и с "),t("strong",null,"Yomitan"),e(", когда появляется желаемое слово - майните, и после того как даст уведомление, что она готова, в окне "),t("strong",null,"MPV"),e(" нажимаете "),t("code",null,"Ctrl+V"),e(". Карточка готова. Не забывайте после майна сделать окно "),t("strong",null,"MPV"),e(" активным (тыкнуть в него).")],-1),Z=t("p",null,"Результат должен выглядеть так:",-1),F=t("h2",{id:"faq",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#faq"},[t("span",null,"FAQ")])],-1),Q=t("li",null,"Почему кнопки не работают? проверьте что у вас английская раскладка и выключен Caps Lock",-1),H={href:"https://neongoo.ru/mpv.html#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0",target:"_blank",rel:"noopener noreferrer"},X=t("strong",null,"Установка",-1);function K($,tt){const n=l("ExternalLinkIcon"),r=l("RouteLink"),d=l("VidStack");return p(),c("div",null,[t("p",null,[e("Статья новая, если замечены ошибки или есть рекомендации, пишите "),t("a",_,[e("сюда"),o(n)])]),g,t("p",null,[e("Данная инструкция сделана с расчетом, что Anki настроен по "),o(r,{to:"/anki.html"},{default:s(()=>[e("это гайду")]),_:1})]),u,o(d,{src:"/imgvid/mpvdemo2.mp4"}),o(d,{src:"/imgvid/mpvjl.mp4"}),f,v,t("p",null,[e("Сначала нужно скачать MPV. У него множество версий на "),t("a",b,[e("официальном сайте"),o(n)]),e(", самый простой вариант "),t("a",k,[e("тут"),o(n)]),e(". Скачиваете самый последний архив. Теперь в вашей папочке для программ, которую вы создали заранее, создаете папку MPV и выгружаете туда содержимое архива.")]),t("p",null,[e("Теперь откройте "),P,e(" введя "),V,e(" в поиск Windows или в адресную строку в любой папочке. В неё выложите папочку "),y,e(" из "),t("a",M,[e("данного архива"),o(n)])]),j,t("div",x,[A,t("p",null,[e("Если вы используете не основной профиль анки а созданный вами вручную, или если вы хотите использовать "),D,e(" с колодой не по формату "),o(r,{to:"/software/anki.html"},{default:s(()=>[e("гайда Anki")]),_:1}),e(", то вам нужно открыть файл "),w,e(" в текстовом редакторе, и изменить названия полей на те, которые поодойдут под ваш формат карточки. На картинке изображено как: "),S])]),R,t("details",E,[C,L,t("p",null,[e("Все функции можно посмотреть "),t("a",T,[e("тут"),o(n)]),e(", названия кнопок, в том числе мыши, "),t("a",B,[e("тут"),o(n)]),e(".")])]),t("p",null,[e("Также объясню как пользоваться плагином на ускорение видео "),N,e(", больше информации на "),t("a",O,[e("AJATT-Tools GitHub"),o(n)]),e(", когда нет субтитров. Полезно, чтобы погружаться более эффективно.")]),U,t("p",null,[e("Информация о ток, как переименовывать и обрабатывать субтитры, в том числе делать автоматический ретайминг, "),o(r,{to:"/subtitles.html"},{default:s(()=>[e("тут")]),_:1}),e(". Источники субтитров можно найти в "),o(r,{to:"/resources.html"},{default:s(()=>[e("ресурсах")]),_:1}),e(".")]),J,t("ol",null,[t("li",null,[e("Установите "),t("a",W,[e("данное расширение"),o(n)]),e(".")]),t("li",null,[e("Откройте "),t("a",z,[e("данную страницу"),o(n)])]),G]),I,o(d,{src:"/imgvid/mpvdemo2.mp4"}),Y,t("p",null,[e("Установите "),o(r,{to:"/jl.html"},{default:s(()=>[e("JL")]),_:1})]),q,Z,o(d,{src:"/imgvid/mpvjl.mp4"}),t("p",null,[e("Контент и субтитры можно найти в "),o(r,{to:"/software/resources.html"},{default:s(()=>[e("ресурсах")]),_:1})]),F,t("ul",null,[Q,t("li",null,[e("Карточка создается, в поле аудио предложения есть файл, но нет звука и каринка пустая, почему? Вы используете не основной профиль Anki, измените настройки соответственно тому как написано в разделе "),t("a",H,[X,o(n)])])])])}const nt=i(m,[["render",K],["__file","mpv.html.vue"]]),rt=JSON.parse('{"path":"/software/mpv.html","title":"MPV","lang":"ru-RU","frontmatter":{"title":"MPV","description":"Статья новая, если замечены ошибки или есть рекомендации, пишите сюда MPV плеер это опен-сорс программа, на которую можно устанавливать множество плагинов, которые помогут в изу...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/neongooru/software/mpv.html"}],["meta",{"property":"og:site_name","content":"NeonGoo.Ru"}],["meta",{"property":"og:title","content":"MPV"}],["meta",{"property":"og:description","content":"Статья новая, если замечены ошибки или есть рекомендации, пишите сюда MPV плеер это опен-сорс программа, на которую можно устанавливать множество плагинов, которые помогут в изу..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/neongooru/imgvid/mpvsettings.png"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-03-12T12:39:39.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"MPV"}],["meta",{"property":"article:author","content":"NeonGooRoo"}],["meta",{"property":"article:modified_time","content":"2024-03-12T12:39:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MPV\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/neongooru/imgvid/mpvsettings.png\\"],\\"dateModified\\":\\"2024-03-12T12:39:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"NeonGooRoo\\",\\"url\\":\\"https://t.me/neongooroo\\"}]}"]]},"headers":[{"level":2,"title":"Установка","slug":"установка","link":"#установка","children":[]},{"level":2,"title":"Использование","slug":"использование","link":"#использование","children":[]},{"level":2,"title":"Просмотр и субтитры","slug":"просмотр-и-субтитры","link":"#просмотр-и-субтитры","children":[]},{"level":2,"title":"Майнинг","slug":"маининг","link":"#маининг","children":[{"level":3,"title":"Yomichan + Clipboard Inserter","slug":"yomichan-clipboard-inserter","link":"#yomichan-clipboard-inserter","children":[]},{"level":3,"title":"JL","slug":"jl","link":"#jl","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[]}],"git":{"createdTime":1710247179000,"updatedTime":1710247179000,"contributors":[{"name":"NeonGooRoo","email":"neongooroo@gmail.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1116},"filePathRelative":"software/mpv.md","localizedDate":"12 марта 2024 г.","excerpt":"<p>Статья новая, если замечены ошибки или есть рекомендации, пишите <a href=\\"https://t.me/neongooru\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">сюда</a></p>\\n<p>MPV плеер это опен-сорс программа, на которую можно устанавливать множество плагинов, которые помогут в изучении японского и майнинга карточек. MPV поддерживается на всех ПК платформах, но гайд направлен на Windows. Все, кроме установки программы и плагинов должно быть одинаковым.</p>","autoDesc":true}');export{nt as comp,rt as data};
