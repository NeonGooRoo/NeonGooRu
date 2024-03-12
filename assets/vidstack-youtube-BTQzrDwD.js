import{ay as m,m as k,aW as r,aR as y,e as g,i as v,aZ as w,aJ as n,g as E}from"./vidstack-D1JzjGR7-QxHIjbVJ.js";import{E as f,t as p}from"./vidstack-DPZGEOYG-CYPdtkD9.js";import{resolveYouTubeVideoId as T}from"./vidstack-DscYSLiW-CA6XwpqT.js";import"./app-BCo23nM8.js";const c={Qj:-1,Ue:0,Ve:1,Mg:2,Ng:3,Og:5};class P extends f{constructor(t,s){super(t),this.b=s,this.$$PROVIDER_TYPE="YOUTUBE",this.scope=m(),this.N=k(""),this.mc=-1,this.nc=-1,this.Jk=!1,this.Fa=0,this.Ga=new r(0,0),this.V=null,this.E=null,this.G=null,this.language="en",this.color="red",this.cookies=!1}get c(){return this.b.delegate.c}get currentSrc(){return this.V}get type(){return"youtube"}get videoId(){return this.N()}preconnect(){y(this.eb())}setup(){super.setup(),g(this.kd.bind(this)),this.c("provider-setup",this)}async play(){const{paused:t}=this.b.$state;return this.E||(this.E=p(()=>{if(this.E=null,t())return"Timed out."}),this.q("playVideo")),this.E.promise}async pause(){const{paused:t}=this.b.$state;return this.G||(this.G=p(()=>{this.G=null,t()}),this.q("pauseVideo")),this.G.promise}setMuted(t){t?this.q("mute"):this.q("unMute")}setCurrentTime(t){this.Jk=this.b.$state.paused(),this.q("seekTo",t),this.c("seeking",t)}setVolume(t){this.q("setVolume",t*100)}setPlaybackRate(t){this.q("setPlaybackRate",t)}async loadSource(t){if(!v(t.src)){this.V=null,this.N.set("");return}const s=T(t.src);this.N.set(s??""),this.V=t}eb(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}kd(){this.H();const t=this.N();if(!t){this.cb.set("");return}this.cb.set(`${this.eb()}/embed/${t}`),this.c("load-start")}Te(){const{keyDisabled:t}=this.b.$props,{$iosControls:s}=this.b,{controls:i,muted:a,playsInline:h}=this.b.$state,e=i()||s();return{autoplay:0,cc_lang_pref:this.language,cc_load_policy:e?1:void 0,color:this.color,controls:e?1:0,disablekb:!e||t()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:e?1:3,mute:a()?1:0,playsinline:h()?1:0}}q(t,s){this.gd({event:"command",func:t,args:s?[s]:void 0})}lc(){window.setTimeout(()=>this.gd({event:"listening"}),100)}md(t){this.c("loaded-metadata"),this.c("loaded-data"),this.b.delegate.jc(void 0,t)}Aa(t){var s;(s=this.G)==null||s.resolve(),this.G=null,this.c("pause",void 0,t)}Eb(t,s){const{duration:i,realCurrentTime:a}=this.b.$state,h=this.mc===c.Ue,e=h?i():t,o={currentTime:e,played:this.cm(e)};this.c("time-update",o,s),!h&&Math.abs(e-a())>1&&this.c("seeking",e,s)}cm(t){return this.Fa>=t?this.Ga:this.Ga=new r(0,this.Fa=t)}ic(t,s,i){const a={buffered:new r(0,t),seekable:s};this.c("progress",a,i);const{seeking:h,realCurrentTime:e}=this.b.$state;h()&&t>e()&&this.bb(i)}bb(t){const{paused:s,realCurrentTime:i}=this.b.$state;window.clearTimeout(this.nc),this.nc=window.setTimeout(()=>{this.c("seeked",i(),t),this.nc=-1},s()?100:0),this.Jk=!1}Db(t){const{seeking:s}=this.b.$state;s()&&this.bb(t),this.c("pause",void 0,t),this.c("end",void 0,t)}Rg(t,s){var d,u;const{started:i,paused:a,seeking:h}=this.b.$state,e=t===c.Ve,o=t===c.Ng,l=(a()||this.E)&&(o||e);if(o&&this.c("waiting",void 0,s),h()&&e&&this.bb(s),!i()&&l&&this.Jk){(d=this.E)==null||d.reject("invalid internal play operation"),this.E=null,e&&(this.pause(),this.Jk=!1);return}switch(l&&((u=this.E)==null||u.resolve(),this.E=null,this.c("play",void 0,s)),t){case c.Og:this.md(s);break;case c.Ve:this.c("playing",void 0,s);break;case c.Mg:this.Aa(s);break;case c.Ue:this.Db(s);break}this.mc=t}hd({info:t},s){var e;if(!t)return;const{title:i,intrinsicDuration:a,playbackRate:h}=this.b.$state;if(w(t.videoData)&&t.videoData.title!==i()&&this.c("title-change",t.videoData.title,s),n(t.duration)&&t.duration!==a()){if(n(t.videoLoadedFraction)){const o=((e=t.progressState)==null?void 0:e.loaded)??t.videoLoadedFraction*t.duration,l=new r(0,t.duration);this.ic(o,l,s)}this.c("duration-change",t.duration,s)}if(n(t.playbackRate)&&t.playbackRate!==h()&&this.c("rate-change",t.playbackRate,s),t.progressState){const{current:o,seekableStart:l,seekableEnd:d,loaded:u,duration:b}=t.progressState;this.Eb(o,s),this.ic(u,new r(l,d),s),b!==a()&&this.c("duration-change",b,s)}if(n(t.volume)&&E(t.muted)){const o={muted:t.muted,volume:t.volume/100};this.c("volume-change",o,s)}n(t.playerState)&&t.playerState!==this.mc&&this.Rg(t.playerState,s)}H(){this.mc=-1,this.nc=-1,this.Fa=0,this.Ga=new r(0,0),this.E=null,this.G=null,this.Jk=!1}}export{P as YouTubeProvider};
