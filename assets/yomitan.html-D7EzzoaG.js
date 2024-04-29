import{_ as d,a as p,b as c}from"./dictionaries-mHxgNJuz.js";import{_ as m,a as g,b as h,c as _}from"./frequency-DXVWqEP3.js";import{_ as f}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as u,c as y,a as t,d as o,w as a,b as e,e as s}from"./app-BVHIZ00g.js";const b={},k=t("strong",null,"Yomitan",-1),v=t("strong",null,"Android",-1),x=t("p",null,"Пример работы с ним:",-1),D=t("hr",null,null,-1),Y=t("h2",{id:"установка",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#установка"},[t("span",null,"Установка")])],-1),w=t("h3",{id:"пк",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#пк"},[t("span",null,"ПК")])],-1),A=t("strong",null,"Yomitan",-1),B={href:"https://chromewebstore.google.com/detail/yomitan/likgccmbimhjbgkjambclfkhldnlhbnn",target:"_blank",rel:"noopener noreferrer"},R={href:"https://addons.mozilla.org/en-US/firefox/addon/yomitan/",target:"_blank",rel:"noopener noreferrer"},j=t("p",null,"Сразу обе ссылки ниже скопируйте и откройте в новых вкладках:",-1),N=t("p",null,[t("code",null,"chrome-extension://likgccmbimhjbgkjambclfkhldnlhbnn/permissions.html"),t("code",null,"chrome://extensions/?id=likgccmbimhjbgkjambclfkhldnlhbnn")],-1),T=t("h3",{id:"android",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#android"},[t("span",null,"Android")])],-1),U={href:"https://play.google.com/store/apps/details?id=com.kiwibrowser.browser&hl=en_US",target:"_blank",rel:"noopener noreferrer"},z={href:"https://chrome.google.com/webstore/detail/yomitan/likgccmbimhjbgkjambclfkhldnlhbnn",target:"_blank",rel:"noopener noreferrer"},S=s('<p>Вставляете ссылку ниже в адресную строку:</p><p><code>chrome://extensions/?id=likgccmbimhjbgkjambclfkhldnlhbnn</code></p><p>Если не работает, откройте список расширений и зайдите в настройки <strong>Yomitan</strong> вручную. Дайте, желательно, все разрешения. Как минимум <strong>Allow access to file URLs</strong> нужно для работы <strong>Yomitan</strong> в файлах и <strong>Persistent storage</strong> чтобы ваши словари случайно не удалились. ЭТО НЕ НАСТРОЙКИ <strong>ЙОМИТАН</strong> КОТОРЫЕ САМИ ОТКРЫЛИСЬ ПОСЛЕ УСТАНОВКИ.</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="словари" tabindex="-1"><a class="header-anchor" href="#словари"><span>Словари</span></a></h2>',5),C=t("strong",null,"Yomitan",-1),I={href:"https://drive.google.com/drive/folders/10kvhKQn26zGxg4VM-R8ldCmPwbo7mxfO?usp=sharing",target:"_blank",rel:"noopener noreferrer"},M={href:"https://drive.google.com/drive/folders/1tTdLppnqMfVC5otPlX_cs4ixlIgjv_lH",target:"_blank",rel:"noopener noreferrer"},P=s('<table><thead><tr><th>Кандзи</th><th>Монолингвистическиме</th><th>Билингвистические</th></tr></thead><tbody><tr><td>Показывает информацию о кандзи</td><td>Имеют объяснения слов в чистом японском</td><td>Имеют переводы на другие языки</td></tr><tr><td><img src="'+m+'" alt="" loading="lazy"></td><td><img src="'+g+'" alt="" loading="lazy"></td><td><img src="'+p+'" alt="" loading="lazy"></td></tr><tr><td>KANJIDIC</td><td>大辞林</td><td>Kenrowa (RU), Вародай (RU), Jitendex (EN)</td></tr></tbody></table><p>А также есть словари с дополнительной информацией о словах:</p><table><thead><tr><th>Питчи</th><th>Распространенность</th></tr></thead><tbody><tr><td>Показывает питч акцент слов</td><td>Показывают рейтинг по распространенности в корпусе.</td></tr><tr><td><img src="'+h+'" alt="" loading="lazy"></td><td><img src="'+_+'" alt="" loading="lazy"></td></tr><tr><td>アクセント辞典</td><td>JPDB, Wikipedia, Netflix, Youtube</td></tr></tbody></table><p>И как исключение, есть <strong>JMedict</strong> с именами и названиями, его тоже стоит установить. Другие варианты в архиве также хорошие, можете их попробовать. Важно! <strong>大辞林</strong> имеет картинки и состоит из 2 архивов, скачивать нужно оба. Также, на диске находится файл <code>Yomichan-settings</code> и архив со шрифтами, их тоже скачайте. (Шрифты необязательно, но их можно установить сразу и это быстро)</p><p>Также <strong>Kenrowa (RU)</strong> и <strong>Вародай (RU)</strong> не работают с видоизменяемыми формами слов (глаголами, например), к сожалению. Тут придется рассчитывать либо только на <strong>JMdict (RU)</strong></p><p>Теперь нужно зайти в настройки <strong>Yomitan</strong>. Нажмите по иконке <strong>Yomitan</strong> среди расширений и на шестеренку. Вам сразу же нужно во вкладке <strong>Dictionaries</strong> нажать на <strong>Configure installed and enabled dictionaries…</strong>, там нажать <strong>Import</strong> и выбрать сразу несколько скачанных вами словарей. Какое-то время они будут распаковываться. JMdict, либо на яп-яп словари.</p><h2 id="настроики" tabindex="-1"><a class="header-anchor" href="#настроики"><span>Настройки</span></a></h2><p>Теперь нужно промотать вниз до <strong>Import settings</strong> и загрузить <code>Yomichan-settings.json</code>. Игнорируйте ошибку, нажимайте на красную кнопку <strong>Import</strong>.</p><p>Если вы на <strong>Android</strong>, сразу после импорта, в самом верху настроек нужно <code>Default Profile</code> и <code>Editing Profile</code> изменить с <strong>ПК</strong> на <strong>Android</strong>.</p><p><strong>Менять порядок словарей</strong></p><p>Словари можно выставлять в любом порядке. Возможно вы хотите чтобы русский был сверху, возможно вы хотите английский сверху и т.д.,</p><p>Откройте <strong>Configure installed and enabled dictionaries…</strong> и выставите приоритет словарям. Чем выше цифра - тем выше (первее) будет показываться словарь. Учитывайте что называются словари не так, как архивы.</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>А также важно, словари сохраняются в Анки в том же порядке, что они отображаются в Yomitan. Если вы используете формат карточки <strong>Anki</strong> из моего гайда, то первый словарь будет отображаться внутри карточки основным (виден сразу и не скрыт), второй - в отдельной вкладки, и все остальные вместо отдельно.</p><p>Теперь вы можете смотреть значения слов по наведению и нажатию <strong>Shift</strong> или <strong>Колесика мыши</strong> и ПОТОМ наведения на слово. Попробуйте! <strong>日本語</strong>. Размер окошка можно менять как любое окно, потянув за правый-нижний угол.</p><p>Если все сделали правильно, при нажатии на зеленый плюсик у вас должна замайниться карточка и появиться в вашей колоде (Anki должен быть запущен).</p>',16);function V(E,J){const i=r("RouteLink"),l=r("VidStack"),n=r("ExternalLinkIcon");return u(),y("div",null,[t("p",null,[o(i,{to:"/software/yomitan.html#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0"},{default:a(()=>[k]),_:1}),e(" (ранее Yomichan) - очень удобное расширение, позволяющее по наведению мыши смотреть значения практически любого слова. Поддерживает кучу словарей, а также позволяет майнить слова. Работает на ПК и "),v]),t("p",null,[e("Данная инструкция сделана с расчетом, что Anki настроен по "),o(i,{to:"/software/anki.html"},{default:a(()=>[e("это гайду")]),_:1})]),x,o(l,{src:"/imgvid/yomininjademo.mp4"}),D,Y,w,t("p",null,[A,e(" можно скачать для "),t("a",B,[e("Chrome"),o(n)]),e(" и "),t("a",R,[e("Firefox"),o(n)]),e(".")]),j,N,T,t("p",null,[e("Расширения поддерживаются только через "),t("a",U,[e("Kiwi Browser"),o(n)]),e(", поэтому необходимо скачать его.")]),t("p",null,[e("Далее скачиваем расширение "),t("a",z,[e("Yomitan"),o(n)])]),S,t("p",null,[C,e(" сам по себе не содержит в себе информации, так что словари нужно выбрать установить самому. "),t("a",I,[e("Здесь"),o(n)]),e(" можно скачать мою подборку словарей, в том числе русских, "),t("a",M,[e("здесь"),o(n)]),e(" можно посмотреть огромную коллекцию автора TheMoeWay. Есть несколько основных видов со значениями, снизу написаны рекомендуемые варианты из моего архива:")]),P])}const q=f(b,[["render",V],["__file","yomitan.html.vue"]]),F=JSON.parse(`{"path":"/en/software/yomitan.html","title":"Yomitan","lang":"en-US","frontmatter":{"Author":null,"title":"Yomitan","shortTitle":"Yomitan","description":"Установка и настройка Yomitan","icon":"/ico/yomitan.svg","category":["инструменты"],"tag":["обязательное","майнинг","Android"],"Date":"08-03-2024","ReadingTime":10,"order":1,"headerDepth":1,"redirectFrom":"/yomitan.html","head":[["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://vuepress-theme-hope-docs-demo.netlify.app/software/yomitan.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/en/software/yomitan.html"}],["meta",{"property":"og:site_name","content":"NeonGooRoo's Guide"}],["meta",{"property":"og:title","content":"Yomitan"}],["meta",{"property":"og:description","content":"Установка и настройка Yomitan"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/extention.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-04-29T19:35:28.000Z"}],["meta",{"property":"article:author","content":"NeonGooRoo"}],["meta",{"property":"article:tag","content":"обязательное"}],["meta",{"property":"article:tag","content":"майнинг"}],["meta",{"property":"article:tag","content":"Android"}],["meta",{"property":"article:modified_time","content":"2024-04-29T19:35:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Yomitan\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/extention.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/kanjidic.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/monoling.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/biling.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/pitch.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/frequency.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/dictionaries.png\\"],\\"dateModified\\":\\"2024-04-29T19:35:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"NeonGooRoo\\",\\"url\\":\\"https://t.me/neongooroo\\"}]}"]]},"headers":[{"level":2,"title":"Установка","slug":"установка","link":"#установка","children":[{"level":3,"title":"ПК","slug":"пк","link":"#пк","children":[]},{"level":3,"title":"Android","slug":"android","link":"#android","children":[]}]},{"level":2,"title":"Словари","slug":"словари","link":"#словари","children":[]},{"level":2,"title":"Настройки","slug":"настроики","link":"#настроики","children":[]}],"git":{"createdTime":1710247179000,"updatedTime":1714419328000,"contributors":[{"name":"NeonGooRoo","email":"neongooroo@gmail.com","commits":4}]},"readingTime":{"minutes":2.21,"words":662},"filePathRelative":"en/software/yomitan.md","localizedDate":"March 12, 2024","excerpt":"<p><a href=\\"/software/yomitan.html#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0\\" target=\\"_blank\\"><strong>Yomitan</strong></a> (ранее Yomichan) - очень удобное расширение, позволяющее по наведению мыши смотреть значения практически любого слова. Поддерживает кучу словарей, а также позволяет майнить слова. Работает на ПК и <strong>Android</strong></p>"}`);export{q as comp,F as data};
