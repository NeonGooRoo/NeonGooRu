import{_ as l}from"./mementoset-Jg8FTkTA.js";import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as c,c as g,d as o,a as t,b as e,w as a,e as s}from"./app-ChM4bxwA.js";const m={},h=t("p",null,[e("Memento - плеер для майнинга, сделанный на основе MPV, который позволяет создавать карточки в один клик, как скачанные, так и онлайн видео. Далее я покажу как его установить, настроить и им пользоваться. Данный гайд рассчитан на настройку под формат JPMN в конфигурации показанной в "),t("a",{href:"/software/anki"},"гайде по Anki"),e(". Пример использования:")],-1),u=t("h2",{id:"установка",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#установка"},[t("span",null,"Установка")])],-1),_={href:"https://ripose-jp.github.io/Memento/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://fonts.google.com/download?family=Noto%20Sans%20JP",target:"_blank",rel:"noopener noreferrer"},b=t("strong",null,"Noto Sans JP",-1),k={href:"https://drive.google.com/uc?export=download&id=1oyQoTB531tbhlYaOW7ugvutXZ7HSlJfW",target:"_blank",rel:"noopener noreferrer"},y=t("strong",null,"Kanji Stroke Order",-1),v=t("p",null,[e("После установки откройте приложение и перейдите в "),t("strong",null,"Settings"),e(" - "),t("strong",null,"Open config folder")],-1),S=t("figure",null,[t("img",{src:l,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),P={href:"https://drive.google.com/file/d/13fEylItJpFoe9gVWkWAVzFkrJSdAg8e-/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer"},x=t("strong",null,"settings",-1),M=t("strong",null,"profile",-1),w=t("em",null,"NeonGoo.Ru",-1),A=s('<h2 id="настроика" tabindex="-1"><a class="header-anchor" href="#настроика"><span>Настройка</span></a></h2><p>В первую очередь, необходимо установить словари, про них больше информации в гайде по Yomitan, так как используются словари того же формата. Перейдите в <strong>Settings</strong> - <strong>Options</strong> - <strong>Dictionaries</strong>, нажимаете на плюсик справа, открываете все нужные вам словари. Приоритет словарей выставляется тут же, стрелочками сверху-справа. По дефолту там будет лишь 2 русских (<strong>JMDict</strong> и <strong>Вародай</strong>) и словарь частотности <strong>JPDB</strong>, этого очень мало.</p><p>Все остальное можете выставлять по вашему желанию. Один момент, который может быть важен для вас:</p><p>Если вы хотите иметь возможность добавлять сразу несколько строчек субтитров в предложении, за счет их выделения, то вам нужно в настройках <strong>Anki Integration</strong> - <strong>Term Cards</strong>, в поле <strong>Sentence</strong> вписать <code>{context}</code> вместо <code>{cloze-prefix}&lt;b&gt;{cloze-body}&lt;/b&gt;{cloze-suffix}</code>. Но в этом случае, слово, которое вы учите, не будет выделено в предложении. Я не нашел способа обхода данной проблемы.</p><h2 id="использование" tabindex="-1"><a class="header-anchor" href="#использование"><span>Использование</span></a></h2><p>Через <strong>Media</strong> вы открываете файлы видео (можно вместе с субтитрами сразу, как в MPV), либо ссылку на онлайн видео. Также можно по старинке перетаскивать файлы. <strong>Audio</strong> позволяет выбрать аудиодорожку.</p><h2 id="subtitles" tabindex="-1"><a class="header-anchor" href="#subtitles"><span><strong>Subtitles:</strong></span></a></h2><p><strong>Size and position</strong> регулируют размеры и вертикальное положение.</p><p><strong>Autopause</strong> - ставит на паузу после озвучивания строчки. (Не советую использовать, лучше привыкать к естественному темпу языка, сначала это тяжело, но это очень хорошо скажется понимании настоящей непрерывной речи, а также на скорости чтения в будущем)</p><p><strong>Show Subtitle list</strong> - дублирует кнопку справа снизу экрана, открывает список с субтитрами.</p><p><strong>Add subtitle file</strong> - добавить внешний файл субтитров.</p><p><strong>Second track</strong> - включить вторые субтитры параллельно.</p><div class="hint-container caution"><p class="hint-container-title">СТРОГО НЕ РЕКОМЕНДУЕТСЯ!</p><p>Не добавляйте сюда субтитры на языке, который вы понимаете. Это очень легко сводит эффективность погружения к нулю.</p></div><p>Также можно выбрать линию субтитров.</p><p><strong>Tools</strong> - <strong>Show Search</strong> (ctrl + V) включает поиск по словарям аналогичный тому в Yomitan.</p><p>Управление плеером:</p><div class="hint-container caution"><p class="hint-container-title">ОСТОРОЖНО!</p><p>Все кнопки чувствительны к раскладке и регистру (z и Z делают разные вещи), так что запускать <strong>Memento</strong> лучше на английской раскладке. Поменять её можно в уже запущенном приложении на <strong>Windows</strong> только через сочетание <strong>Win+Пробел</strong>.</p></div><table><thead><tr><th>кнопка</th><th>функция MPV</th><th>функция</th></tr></thead><tbody><tr><td>9</td><td>add volume -2</td><td>звук тише</td></tr><tr><td>0</td><td>add volume +2</td><td>звук громче</td></tr><tr><td>право</td><td>seek 5</td><td>+5 секунд</td></tr><tr><td>лево</td><td>seek -5</td><td>-5 секунд</td></tr><tr><td>пробел</td><td>cycle pause</td><td>пауза</td></tr><tr><td>[</td><td>multiply speed 1/1.1</td><td>замедлить на 10%</td></tr><tr><td>]</td><td>multiply speed 1.1</td><td>ускорить на 10%</td></tr><tr><td>мышь вниз</td><td>no-osd seek -3 exact</td><td>отмотать на 3 сек</td></tr><tr><td>мышь вверх</td><td>no-osd seek 3 exact</td><td>промотать на 3 сек</td></tr><tr><td>боковая мыши ближняя</td><td>no-osd sub-seek -1</td><td>отмотать до пред. линии субтитров</td></tr><tr><td>боковая мыши дальняя</td><td>no-osd sub-seek 1</td><td>домотать до след. линии субтитров</td></tr><tr><td>z</td><td>add sub-delay -0.1</td><td>изменить задержку субтитров на -0. 1</td></tr><tr><td>x</td><td>add sub-delay 0.1</td><td>изменить задержку субтитров на 0. 1</td></tr><tr><td>s</td><td>sub-step -1</td><td>сдвинуть субтитры, чтобы предыд. строка началась.</td></tr><tr><td>a</td><td>sub-step 1</td><td>сдвинуть субтитры, чтобы след. строка началась.</td></tr></tbody></table>',18),T={class:"hint-container details"},V=t("summary",null,"Настройка управления",-1),N=t("p",null,[e("если вы хотите поменять или добавить клавиши, то вам нужно модифицировать файл "),t("code",null,"input.conf"),e(" который находится в папке с конфигом. Записывать нужно следующим образом: "),t("code",null,'"клавиша" "функция MPV"'),e(".")],-1),O={href:"https://github.com/mpv-player/mpv/blob/master/etc/input.conf",target:"_blank",rel:"noopener noreferrer"},E={href:"https://mpv.io/manual/master/",target:"_blank",rel:"noopener noreferrer"},J=t("strong",null,"sub-transition",-1),z={href:"https://github.com/Ajatt-Tools/sub-transition",target:"_blank",rel:"noopener noreferrer"},R=s('<p>Открываются настройки плагина через <strong>Shift+n</strong>, навигация через стрелочки.</p><p><strong>t</strong> - включить скрипт.</p><p><strong>inter speed:</strong> скорость когда нет субтитров.</p><p><strong>normal speed:</strong> скорость когда есть субтитры.</p><p><strong>skip immediately:</strong> пропускать куски без субтитров.</p><p><strong>notifications:</strong> уведомления плеера об изменении скорости. Лучше выключить.</p><p><strong>start enabled:</strong> автовключение при запуске <strong>Memento</strong>.</p><p><strong>s</strong>- сохранить настройки. Если не сохраните, все настройки сбрасываются до стандартных при перезапуске.</p><h3 id="просмотр-и-субтитры" tabindex="-1"><a class="header-anchor" href="#просмотр-и-субтитры"><span>Просмотр и субтитры</span></a></h3><p>Теперь попробуйте запустить аниме и субтитры. Если одно видео и один файл субтитров, то все будет работать сразу, если видео файлов несколько, то нужно чтобы файл субтитров к каждому видео имел то же название, что и видео, допустимы теги языка (например <code>.ja</code> дает программе знать, что это японские субтитры). Например, если перекинуть в плеер сразу несколько файлов, как тут:</p><p><code>One-Piece_S999EP01.mkv</code></p><p><code>One-Piece_S999EP01.ja.srt</code></p><p><code>One-Piece_S999EP02.mkv</code></p><p><code>One-Piece_S999EP02.ja.srt</code></p><p><code>One-Piece_S999EP03.mkv</code></p><p><code>One-Piece_S999EP03.ja.srt</code></p><p><code>One-Piece_S999EP04.mkv</code></p><p><code>One-Piece_S999EP04.ja.srt</code></p><p>то видео будут автоматически проигрываться друг за другом, и субтитры автоматически добавятся. Важно, что порядок отображения видео указывает плееру порядок файлов в браузере файлов, не цифры, так что сортируйте папку по названию.</p><p>Чтобы синхронизировать субтитры вручную, пользуйтесь кнопками <strong>a</strong> и <strong>s</strong> чтобы найти строку субтитров, которая произносится на данный момент, и <strong>z</strong> и <strong>x</strong> чтобы подправить тайминги до идеала.</p>',20),j=s('<p>Выбирать субтитры и аудиодорожки можно иконками снизу меню.</p><h2 id="маининг" tabindex="-1"><a class="header-anchor" href="#маининг"><span>Майнинг</span></a></h2><p>Если вы все правильно установили, откройте любое видео с субтитрами, дайте немного времени прогрузиться словарям, поставьте видео на паузу, зажмите Shift и наведитесь на нужное вам слово.</p><p>Интерфейс имитирует дефолтный Йомитан, тут можно скрыть слово на стрелочку, проиграть аудио, добавить карточку и выбрать: добавлять слово в кане или кандзи. Я советую как можно чаще заучивать кандзи форму, но нередко она может использоваться <em>слишком</em> редко. Чтобы понимать, стоит ли его учить, я советую обращаться к словарю частотности JPDB. Как вы видите на скриншоте ниже, тут показывается распространенность слова в кане (отмечена カ в кружке) и кандзи. Учтите, что эти цифры могут быть очень сильно подвержены миспарсам и не точными, но в общем это может быть неплохим маркером в большинстве случаев. Если вы видите, что версия в кандзи имеет частоту выше 30 тыщ, а то и 20, поначалу такое точно не стоит учить. Со временем даже до тыщ 70 вполне можно учить, но лучше уже смотреть по ситуации. Если вы встретили в кандзи - всегда лучше учить в кандзи.</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2><ul><li>Почему кнопки не работают? Проверьте, что у вас английская раскладка и выключен Caps Lock</li></ul>',6);function G(B,D){const i=r("VidStack"),n=r("ExternalLinkIcon"),d=r("RouteLink");return c(),g("div",null,[h,o(i,{src:"/imgvid/memento.mp4"}),u,t("p",null,[e("Скачайте последнюю версию для нужной платформы с "),t("a",_,[e("официального сайта"),o(n)]),e(". Также скачайте и установите шрифты "),t("a",f,[b,o(n)]),e(" и "),t("a",k,[y,o(n)]),e(" для корректной работы приложения. Просто нужно открыть файл шрифта и нажать установить.")]),v,S,t("p",null,[e("В открывшуюся папочку перенесите содержимое "),t("a",P,[e("данного архива"),o(n)]),e(". Перезагрузите программу, чтобы проверить, что все работает, наведитесь на "),x,e(" - "),M,e(", там должен быть выбран профиль "),w,e(".")]),A,t("details",T,[V,N,t("p",null,[e("Все функции можно посмотреть "),t("a",O,[e("тут"),o(n)]),e(", названия кнопок, в том числе мыши, "),t("a",E,[e("тут"),o(n)]),e(".")])]),t("p",null,[e("Также объясню как пользоваться плагином на ускорение видео "),J,e(", больше информации на "),t("a",z,[e("AJATT-Tools GitHub"),o(n)]),e(", можно использовать даже английские\\русские и скрыть их. Полезно, чтобы погружаться более эффективно.")]),R,t("p",null,[e("Информация о ток, как переименовывать и обрабатывать субтитры, в том числе делать автоматический ретайминг, "),o(d,{to:"/software/subtitles.html"},{default:a(()=>[e("тут")]),_:1}),e(". Источники субтитров можно найти в "),o(d,{to:"/resources.html"},{default:a(()=>[e("ресурсах")]),_:1}),e(".")]),j])}const q=p(m,[["render",G],["__file","memento.html.vue"]]),C=JSON.parse(`{"path":"/en/software/memento.html","title":"Memento","lang":"en-US","frontmatter":{"Author":null,"title":"Memento","shortTitle":"Memento","description":"Самый удобный плеер для майнинга, сделанный на основе MPV.","icon":"/ico/memento.ico","category":["инструменты"],"tag":["майнинг","видео"],"Date":null,"ReadingTime":null,"order":4,"head":[["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://vuepress-theme-hope-docs-demo.netlify.app/software/memento.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/en/software/memento.html"}],["meta",{"property":"og:site_name","content":"NeonGooRoo's Guide"}],["meta",{"property":"og:title","content":"Memento"}],["meta",{"property":"og:description","content":"Самый удобный плеер для майнинга, сделанный на основе MPV."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/mementoset.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-04-23T19:37:07.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Memento"}],["meta",{"property":"article:author","content":"NeonGooRoo"}],["meta",{"property":"article:tag","content":"майнинг"}],["meta",{"property":"article:tag","content":"видео"}],["meta",{"property":"article:modified_time","content":"2024-04-23T19:37:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Memento\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/mementoset.png\\"],\\"dateModified\\":\\"2024-04-23T19:37:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"NeonGooRoo\\",\\"url\\":\\"https://t.me/neongooroo\\"}]}"]]},"headers":[{"level":2,"title":"Установка","slug":"установка","link":"#установка","children":[]},{"level":2,"title":"Настройка","slug":"настроика","link":"#настроика","children":[]},{"level":2,"title":"Использование","slug":"использование","link":"#использование","children":[]},{"level":2,"title":"Subtitles:","slug":"subtitles","link":"#subtitles","children":[{"level":3,"title":"Просмотр и субтитры","slug":"просмотр-и-субтитры","link":"#просмотр-и-субтитры","children":[]}]},{"level":2,"title":"Майнинг","slug":"маининг","link":"#маининг","children":[]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[]}],"git":{"createdTime":1713887228000,"updatedTime":1713901027000,"contributors":[{"name":"NeonGooRoo","email":"neongooroo@gmail.com","commits":2}]},"readingTime":{"minutes":3.7,"words":1110},"filePathRelative":"en/software/memento.md","localizedDate":"April 23, 2024","excerpt":"<p>Memento - плеер для майнинга, сделанный на основе MPV, который позволяет создавать карточки в один клик, как скачанные, так и онлайн видео. Далее я покажу как его установить, настроить и им пользоваться. Данный гайд рассчитан на настройку под формат JPMN в конфигурации показанной в <a href=\\"/software/anki\\">гайде по Anki</a>. Пример использования:</p>"}`);export{q as comp,C as data};
