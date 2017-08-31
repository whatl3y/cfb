webpackJsonp([1],{155:function(e,t,s){"use strict";var n=s(24),r=s(219),a=s(215),o=s.n(a);n.a.use(r.a),t.a=new r.a({mode:"history",routes:[{path:"/",component:o.a}]})},157:function(e,t){},158:function(e,t){},159:function(e,t){},160:function(e,t){},163:function(e,t,s){var n=s(23)(s(167),s(218),null,null,null);e.exports=n.exports},164:function(e,t,s){var n=s(23)(s(168),s(217),null,null,null);e.exports=n.exports},167:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(174),r=s.n(n);t.default={name:"CFB",mounted:function(){this.$root.$refs=r()(this.$root.$refs,{toastr:this.$refs.toastr}),this.$refs.toastr.defaultPosition="toast-bottom-right"}}},168:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(0),r=s.n(n),a=s(221),o=s.n(a);t.default={props:["valueKey","label","placeholder","value"],data:function(){return{date:null}},methods:{dateChanged:function(e){var t=r.a.utc(e||this.date).startOf("day");this.$emit("input",t),this.$emit("changedWithKey",t,this.valueKey)}},mounted:function(){this.value&&(this.date=r.a.utc(this.value).toDate())},components:{dp:o.a}}},169:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(26),r=s.n(n),a=s(25),o=s.n(a),i=s(0),l=s.n(i),c=s(172),u=(s(171),s(170));t.default={data:function(){return{selectFilterOptions:[],selectFilter:"today",searchFilter:null,teams:[],events:[]}},computed:{filteredTeams:function(){var e=this,t=this.teams.slice(0);return"all"!=this.selectFilter&&(t="today"==this.selectFilter?t.filter(function(e){return!!e.event_time_today}):t.filter(function(t){return e.selectFilter==t.conference_abbreviation})),this.searchFilter?t.filter(function(t){return t.full_name.toLowerCase().indexOf(e.searchFilter.toLowerCase())>-1}):t}},methods:{getTimeFromNow:c.a.getTimeFromNow,relativeDate:c.a.getTimeDifferenceFromUnits,getFormattedDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/DD/YYYY h:mm a";return parseInt(l.a.utc(e).format("H"))>=0&&parseInt(l.a.utc(e).format("H"))<=9&&(t="MM/DD/YYYY"),c.a.getFormattedDate(e,t)},getAtOrVs:function(e,t){var s=e.home_full_name;e.visiting_full_name;return s==t.full_name?"@":"vs"},getOtherTeam:function(e,t){var s=e.home_full_name,n=(e.home_location,e.home_abbreviation),r=(e.visiting_full_name,e.visiting_location,e.visiting_abbreviation);return s==t.full_name?r:n},getResultOrStyle:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"result";if(!l.a.utc(e.event_timestamp).isBefore(l()())&&"result"==s)return"0-0";var n="F"===e.current_period,r=e.home_full_name,a=e.home_team_score,o=(e.visiting_full_name,e.visiting_team_score),i=void 0,c=void 0;switch(r==t.full_name?(i=a,c=o):(i=o,c=a),s){case"style":return n?{fontWeight:"bold",color:i>c?"green":"red"}:{};default:if(n){return(i>c?"W":"L")+" "+i+"-"+c}return i+"-"+c}},getTeamColorStyle:function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"#"+e.team_color:{color:"#"+e.team_color}},teamSpecificEvents:function(e){return this.events.filter(function(t){return t.home_full_name==e||t.visiting_full_name==e})}},created:function(){var e=this;return o()(r.a.mark(function t(){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.getAll();case 2:s=t.sent,e.events=s.events,e.teams=s.teams.sort(function(e,t){return e.location.toLowerCase()<t.location.toLowerCase()?-1:1}),e.conferences=s.conferences,e.selectFilterOptions=[{text:"All Teams",value:"all"},{text:"All Teams with Games Today",value:"today"}].concat(e.conferences.map(function(e){return{text:e+" (conference)",value:e}}));case 7:case"end":return t.stop()}},t,e)}))()}}},170:function(e,t,s){"use strict";var n=s(26),r=s.n(n),a=s(25),o=s.n(a);t.a={getAll:function(){var e=this;return o()(r.a.mark(function t(){var s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/events");case 2:return s=e.sent,e.abrupt("return",s.json());case 4:case"end":return e.stop()}},t,e)}))()}}},171:function(e,t,s){"use strict"},172:function(e,t,s){"use strict";var n=s(0),r=s.n(n);t.a={getFormattedDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMMM Do, YYYY";return e?r()(e).format(t):null},getTimeDifferenceFromUnits:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.a.utc(),s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days";return t=t||r.a.utc(),r.a.utc(t).diff(r.a.utc(e),s)},getTimeDifferenceObj:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r()().toDate(),s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(void 0===e)return!1;e=r()(e).toDate(),t=r()(t).toDate();var n=t.getTime()-e.getTime(),a=s?Math.abs(n):n,o=r.a.duration(a,"milliseconds");return{years:o.years(),months:o.months(),weeks:o.weeks(),days:o.days(),hours:o.hours(),minutes:o.minutes(),seconds:o.seconds()}},getTimeFromNow:function(e){return r.a.utc(e).fromNow()}}},173:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(24),r=s(156),a=s(161),o=(s.n(a),s(162)),i=(s.n(o),s(163)),l=s.n(i),c=s(155),u=s(166),f=(s.n(u),s(165)),d=s.n(f),m=s(164),v=s.n(m),j=s(159),h=(s.n(j),s(158)),p=(s.n(h),s(157)),_=(s.n(p),s(160));s.n(_);window.ScrollMagic=o,"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){return a.attach(document.body)},!1),n.a.use(r.a),n.a.component("vue-toastr",d.a),n.a.component("datepicker",v.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:c.a,template:"<App/>",components:{App:l.a}})},211:function(e,t){},212:function(e,t,s){function n(e){return s(r(e))}function r(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./af":40,"./af.js":40,"./ar":47,"./ar-dz":41,"./ar-dz.js":41,"./ar-kw":42,"./ar-kw.js":42,"./ar-ly":43,"./ar-ly.js":43,"./ar-ma":44,"./ar-ma.js":44,"./ar-sa":45,"./ar-sa.js":45,"./ar-tn":46,"./ar-tn.js":46,"./ar.js":47,"./az":48,"./az.js":48,"./be":49,"./be.js":49,"./bg":50,"./bg.js":50,"./bn":51,"./bn.js":51,"./bo":52,"./bo.js":52,"./br":53,"./br.js":53,"./bs":54,"./bs.js":54,"./ca":55,"./ca.js":55,"./cs":56,"./cs.js":56,"./cv":57,"./cv.js":57,"./cy":58,"./cy.js":58,"./da":59,"./da.js":59,"./de":62,"./de-at":60,"./de-at.js":60,"./de-ch":61,"./de-ch.js":61,"./de.js":62,"./dv":63,"./dv.js":63,"./el":64,"./el.js":64,"./en-au":65,"./en-au.js":65,"./en-ca":66,"./en-ca.js":66,"./en-gb":67,"./en-gb.js":67,"./en-ie":68,"./en-ie.js":68,"./en-nz":69,"./en-nz.js":69,"./eo":70,"./eo.js":70,"./es":72,"./es-do":71,"./es-do.js":71,"./es.js":72,"./et":73,"./et.js":73,"./eu":74,"./eu.js":74,"./fa":75,"./fa.js":75,"./fi":76,"./fi.js":76,"./fo":77,"./fo.js":77,"./fr":80,"./fr-ca":78,"./fr-ca.js":78,"./fr-ch":79,"./fr-ch.js":79,"./fr.js":80,"./fy":81,"./fy.js":81,"./gd":82,"./gd.js":82,"./gl":83,"./gl.js":83,"./gom-latn":84,"./gom-latn.js":84,"./he":85,"./he.js":85,"./hi":86,"./hi.js":86,"./hr":87,"./hr.js":87,"./hu":88,"./hu.js":88,"./hy-am":89,"./hy-am.js":89,"./id":90,"./id.js":90,"./is":91,"./is.js":91,"./it":92,"./it.js":92,"./ja":93,"./ja.js":93,"./jv":94,"./jv.js":94,"./ka":95,"./ka.js":95,"./kk":96,"./kk.js":96,"./km":97,"./km.js":97,"./kn":98,"./kn.js":98,"./ko":99,"./ko.js":99,"./ky":100,"./ky.js":100,"./lb":101,"./lb.js":101,"./lo":102,"./lo.js":102,"./lt":103,"./lt.js":103,"./lv":104,"./lv.js":104,"./me":105,"./me.js":105,"./mi":106,"./mi.js":106,"./mk":107,"./mk.js":107,"./ml":108,"./ml.js":108,"./mr":109,"./mr.js":109,"./ms":111,"./ms-my":110,"./ms-my.js":110,"./ms.js":111,"./my":112,"./my.js":112,"./nb":113,"./nb.js":113,"./ne":114,"./ne.js":114,"./nl":116,"./nl-be":115,"./nl-be.js":115,"./nl.js":116,"./nn":117,"./nn.js":117,"./pa-in":118,"./pa-in.js":118,"./pl":119,"./pl.js":119,"./pt":121,"./pt-br":120,"./pt-br.js":120,"./pt.js":121,"./ro":122,"./ro.js":122,"./ru":123,"./ru.js":123,"./sd":124,"./sd.js":124,"./se":125,"./se.js":125,"./si":126,"./si.js":126,"./sk":127,"./sk.js":127,"./sl":128,"./sl.js":128,"./sq":129,"./sq.js":129,"./sr":131,"./sr-cyrl":130,"./sr-cyrl.js":130,"./sr.js":131,"./ss":132,"./ss.js":132,"./sv":133,"./sv.js":133,"./sw":134,"./sw.js":134,"./ta":135,"./ta.js":135,"./te":136,"./te.js":136,"./tet":137,"./tet.js":137,"./th":138,"./th.js":138,"./tl-ph":139,"./tl-ph.js":139,"./tlh":140,"./tlh.js":140,"./tr":141,"./tr.js":141,"./tzl":142,"./tzl.js":142,"./tzm":144,"./tzm-latn":143,"./tzm-latn.js":143,"./tzm.js":144,"./uk":145,"./uk.js":145,"./ur":146,"./ur.js":146,"./uz":148,"./uz-latn":147,"./uz-latn.js":147,"./uz.js":148,"./vi":149,"./vi.js":149,"./x-pseudo":150,"./x-pseudo.js":150,"./yo":151,"./yo.js":151,"./zh-cn":152,"./zh-cn.js":152,"./zh-hk":153,"./zh-hk.js":153,"./zh-tw":154,"./zh-tw.js":154};n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=212},215:function(e,t,s){function n(e){s(211)}var r=s(23)(s(169),s(216),n,"data-v-07c1b177",null);e.exports=r.exports},216:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid"},[s("h1",[e._v("NCAAF Schedules and Scores")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-xs-12"},[s("b-form-select",{attrs:{options:e.selectFilterOptions},model:{value:e.selectFilter,callback:function(t){e.selectFilter=t},expression:"selectFilter"}})],1),s("div",{staticClass:"col col-xs-12"},[s("b-form-input",{attrs:{placeholder:"Search for a team..."},model:{value:e.searchFilter,callback:function(t){e.searchFilter=t},expression:"searchFilter"}})],1)])])]),s("hr",{staticStyle:{margin:"20px 0px"}}),s("div",{staticClass:"d-flex flex-row justify-content-center flex-wrap"},e._l(e.filteredTeams,function(t){return s("div",{staticClass:"event",style:e.getTeamColorStyle(t)},[s("b-card",{style:{borderColor:e.getTeamColorStyle(t,!0)},attrs:{"no-body":"no-body"}},[s("div",{staticClass:"card-text team"},[s("div",{staticClass:"d-flex flex-column align-items-center justify-content-center"},[s("div",{staticClass:"text-center",staticStyle:{"font-size":"9px"}},[s("strong",[s("div",[e._v(e._s(t.location))]),s("div",[e._v(e._s(t.name))])])]),s("img",{staticClass:"img-fluid",attrs:{src:"file/s3/"+t.logo_local_filename}}),s("div",{staticClass:"schedule d-flex"},[s("ul",{staticClass:"list-unstyled"},e._l(e.teamSpecificEvents(t.full_name),function(n){return s("li",{style:e.getResultOrStyle(n,t,"style")},[s("div",{staticClass:"d-flex flex-row justify-content-center"},[s("div",[s("i",[e._v(e._s(e.getFormattedDate(n.event_timestamp))+" - ")])]),s("div",{staticClass:"d-flex flex-row justify-content-center"},[s("div",[e._v(e._s(e.getAtOrVs(n,t))+" ")]),s("div",[e._v(e._s(e.getOtherTeam(n,t))+" ")]),e.getResultOrStyle(n,t)?s("div",[s("strong",[e._v("("+e._s(e.getResultOrStyle(n,t))+")")])]):e._e()])])])}))])])])])],1)}))])},staticRenderFns:[]}},217:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-group"},[e.label?s("label",{attrs:{for:"dp"}},[e._v(e._s(e.label))]):e._e(),s("dp",{attrs:{name:"dp",placeholder:e.placeholder||"Click here to select date...",format:"MMMM dd, yyyy","bootstrap-styling":!0,value:e.value},on:{selected:e.dateChanged},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)},staticRenderFns:[]}},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view"),s("vue-toastr",{ref:"toastr"})],1)},staticRenderFns:[]}}},[173]);
//# sourceMappingURL=app.67e6164bebe03e41529b.js.map