webpackJsonp([1],{155:function(t,e,s){"use strict";var n=s(24),a=s(219),r=s(215),o=s.n(r);n.a.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"*",component:o.a}]})},157:function(t,e){},158:function(t,e){},159:function(t,e){},160:function(t,e){},163:function(t,e,s){var n=s(23)(s(167),s(218),null,null,null);t.exports=n.exports},164:function(t,e,s){var n=s(23)(s(168),s(217),null,null,null);t.exports=n.exports},167:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(174),a=s.n(n);e.default={name:"CFB",mounted:function(){this.$root.$refs=a()(this.$root.$refs,{toastr:this.$refs.toastr}),this.$refs.toastr.defaultPosition="toast-bottom-right"}}},168:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(0),a=s.n(n),r=s(221),o=s.n(r);e.default={props:["valueKey","label","placeholder","value"],data:function(){return{date:null}},methods:{dateChanged:function(t){var e=a.a.utc(t||this.date).startOf("day");this.$emit("input",e),this.$emit("changedWithKey",e,this.valueKey)}},mounted:function(){this.value&&(this.date=a.a.utc(this.value).toDate())},components:{dp:o.a}}},169:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(26),a=s.n(n),r=s(25),o=s.n(r),i=s(0),l=s.n(i),c=s(172),u=(s(171),s(170));e.default={data:function(){return{selectFilterOptions:[],selectFilter:"today",searchFilter:null,teams:[],events:[]}},computed:{filteredTeams:function(){var t=this,e=this.teams.slice(0);return"all"!=this.selectFilter&&("today"==this.selectFilter?(e=e.filter(function(t){return!!t.event_time_today}),0===e.length&&(this.selectFilter="all",e=this.teams.slice(0))):e=e.filter(function(e){return t.selectFilter==e.conference_abbreviation})),this.searchFilter?e.filter(function(e){return e.full_name.toLowerCase().indexOf(t.searchFilter.toLowerCase())>-1}):e}},methods:{getTimeFromNow:c.a.getTimeFromNow,relativeDate:c.a.getTimeDifferenceFromUnits,getFormattedDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/DD/YYYY h:mm a";return parseInt(l.a.utc(t).format("H"))>=0&&parseInt(l.a.utc(t).format("H"))<=9&&(e="MM/DD/YYYY"),c.a.getFormattedDate(t,e)},getAtOrVs:function(t,e){var s=t.home_full_name;t.visiting_full_name;return s==e.full_name?"vs":"@"},getOtherTeam:function(t,e){var s=t.home_full_name,n=(t.home_location,t.home_abbreviation),a=(t.visiting_full_name,t.visiting_location,t.visiting_abbreviation);return s==e.full_name?a:n},getResultOrStyle:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"result";if(!l.a.utc(t.event_timestamp).isBefore(l()())&&"result"==s)return"0-0";var n="STATUS_FINAL"===t.event_status,a="STATUS_POSTPONED"===t.event_status,r="STATUS_CANCELLED"===t.event_status,o="STATUS_IN_PROGRESS"===t.event_status,i=t.home_full_name,c=t.home_team_score,u=(t.visiting_full_name,t.visiting_team_score),f=void 0,d=void 0;switch(i==e.full_name?(f=c,d=u):(f=u,d=c),s){case"style":return n?{fontWeight:"bold",color:f>d?"green":"red"}:o?{fontWeight:"bold",color:"orange"}:a||r?{textDecoration:"italic",color:"gray"}:{};default:if(n){return(f>d?"W":"L")+" "+f+"-"+d}return f+"-"+d}},getTeamColorStyle:function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"#"+t.team_color:{color:"#"+t.team_color}},teamSpecificEvents:function(t){return this.events.filter(function(e){return e.home_full_name==t||e.visiting_full_name==t})}},created:function(){var t=this;return o()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.getAll();case 2:s=e.sent,t.events=s.events,t.teams=s.teams.sort(function(t,e){return t.location.toLowerCase()<e.location.toLowerCase()?-1:1}),t.conferences=s.conferences,t.selectFilterOptions=[{text:"All Teams",value:"all"},{text:"All Teams with Games Today",value:"today"}].concat(t.conferences.map(function(t){return{text:t+" (conference)",value:t}}));case 7:case"end":return e.stop()}},e,t)}))()}}},170:function(t,e,s){"use strict";var n=s(26),a=s.n(n),r=s(25),o=s.n(r);e.a={getAll:function(){var t=this;return o()(a.a.mark(function e(){var s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/events");case 2:return s=t.sent,t.abrupt("return",s.json());case 4:case"end":return t.stop()}},e,t)}))()}}},171:function(t,e,s){"use strict"},172:function(t,e,s){"use strict";var n=s(0),a=s.n(n);e.a={getFormattedDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMMM Do, YYYY";return t?a()(t).format(e):null},getTimeDifferenceFromUnits:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.a.utc(),s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days";return e=e||a.a.utc(),a.a.utc(e).diff(a.a.utc(t),s)},getTimeDifferenceObj:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a()().toDate(),s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(void 0===t)return!1;t=a()(t).toDate(),e=a()(e).toDate();var n=e.getTime()-t.getTime(),r=s?Math.abs(n):n,o=a.a.duration(r,"milliseconds");return{years:o.years(),months:o.months(),weeks:o.weeks(),days:o.days(),hours:o.hours(),minutes:o.minutes(),seconds:o.seconds()}},getTimeFromNow:function(t){return a.a.utc(t).fromNow()}}},173:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(24),a=s(156),r=s(161),o=(s.n(r),s(162)),i=(s.n(o),s(163)),l=s.n(i),c=s(155),u=s(166),f=(s.n(u),s(165)),d=s.n(f),m=s(164),v=s.n(m),j=s(159),h=(s.n(j),s(158)),p=(s.n(h),s(157)),_=(s.n(p),s(160));s.n(_);window.ScrollMagic=o,"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){return r.attach(document.body)},!1),n.a.use(a.a),n.a.component("vue-toastr",d.a),n.a.component("datepicker",v.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:c.a,template:"<App/>",components:{App:l.a}})},211:function(t,e){},212:function(t,e,s){function n(t){return s(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":40,"./af.js":40,"./ar":47,"./ar-dz":41,"./ar-dz.js":41,"./ar-kw":42,"./ar-kw.js":42,"./ar-ly":43,"./ar-ly.js":43,"./ar-ma":44,"./ar-ma.js":44,"./ar-sa":45,"./ar-sa.js":45,"./ar-tn":46,"./ar-tn.js":46,"./ar.js":47,"./az":48,"./az.js":48,"./be":49,"./be.js":49,"./bg":50,"./bg.js":50,"./bn":51,"./bn.js":51,"./bo":52,"./bo.js":52,"./br":53,"./br.js":53,"./bs":54,"./bs.js":54,"./ca":55,"./ca.js":55,"./cs":56,"./cs.js":56,"./cv":57,"./cv.js":57,"./cy":58,"./cy.js":58,"./da":59,"./da.js":59,"./de":62,"./de-at":60,"./de-at.js":60,"./de-ch":61,"./de-ch.js":61,"./de.js":62,"./dv":63,"./dv.js":63,"./el":64,"./el.js":64,"./en-au":65,"./en-au.js":65,"./en-ca":66,"./en-ca.js":66,"./en-gb":67,"./en-gb.js":67,"./en-ie":68,"./en-ie.js":68,"./en-nz":69,"./en-nz.js":69,"./eo":70,"./eo.js":70,"./es":72,"./es-do":71,"./es-do.js":71,"./es.js":72,"./et":73,"./et.js":73,"./eu":74,"./eu.js":74,"./fa":75,"./fa.js":75,"./fi":76,"./fi.js":76,"./fo":77,"./fo.js":77,"./fr":80,"./fr-ca":78,"./fr-ca.js":78,"./fr-ch":79,"./fr-ch.js":79,"./fr.js":80,"./fy":81,"./fy.js":81,"./gd":82,"./gd.js":82,"./gl":83,"./gl.js":83,"./gom-latn":84,"./gom-latn.js":84,"./he":85,"./he.js":85,"./hi":86,"./hi.js":86,"./hr":87,"./hr.js":87,"./hu":88,"./hu.js":88,"./hy-am":89,"./hy-am.js":89,"./id":90,"./id.js":90,"./is":91,"./is.js":91,"./it":92,"./it.js":92,"./ja":93,"./ja.js":93,"./jv":94,"./jv.js":94,"./ka":95,"./ka.js":95,"./kk":96,"./kk.js":96,"./km":97,"./km.js":97,"./kn":98,"./kn.js":98,"./ko":99,"./ko.js":99,"./ky":100,"./ky.js":100,"./lb":101,"./lb.js":101,"./lo":102,"./lo.js":102,"./lt":103,"./lt.js":103,"./lv":104,"./lv.js":104,"./me":105,"./me.js":105,"./mi":106,"./mi.js":106,"./mk":107,"./mk.js":107,"./ml":108,"./ml.js":108,"./mr":109,"./mr.js":109,"./ms":111,"./ms-my":110,"./ms-my.js":110,"./ms.js":111,"./my":112,"./my.js":112,"./nb":113,"./nb.js":113,"./ne":114,"./ne.js":114,"./nl":116,"./nl-be":115,"./nl-be.js":115,"./nl.js":116,"./nn":117,"./nn.js":117,"./pa-in":118,"./pa-in.js":118,"./pl":119,"./pl.js":119,"./pt":121,"./pt-br":120,"./pt-br.js":120,"./pt.js":121,"./ro":122,"./ro.js":122,"./ru":123,"./ru.js":123,"./sd":124,"./sd.js":124,"./se":125,"./se.js":125,"./si":126,"./si.js":126,"./sk":127,"./sk.js":127,"./sl":128,"./sl.js":128,"./sq":129,"./sq.js":129,"./sr":131,"./sr-cyrl":130,"./sr-cyrl.js":130,"./sr.js":131,"./ss":132,"./ss.js":132,"./sv":133,"./sv.js":133,"./sw":134,"./sw.js":134,"./ta":135,"./ta.js":135,"./te":136,"./te.js":136,"./tet":137,"./tet.js":137,"./th":138,"./th.js":138,"./tl-ph":139,"./tl-ph.js":139,"./tlh":140,"./tlh.js":140,"./tr":141,"./tr.js":141,"./tzl":142,"./tzl.js":142,"./tzm":144,"./tzm-latn":143,"./tzm-latn.js":143,"./tzm.js":144,"./uk":145,"./uk.js":145,"./ur":146,"./ur.js":146,"./uz":148,"./uz-latn":147,"./uz-latn.js":147,"./uz.js":148,"./vi":149,"./vi.js":149,"./x-pseudo":150,"./x-pseudo.js":150,"./yo":151,"./yo.js":151,"./zh-cn":152,"./zh-cn.js":152,"./zh-hk":153,"./zh-hk.js":153,"./zh-tw":154,"./zh-tw.js":154};n.keys=function(){return Object.keys(r)},n.resolve=a,t.exports=n,n.id=212},215:function(t,e,s){function n(t){s(211)}var a=s(23)(s(169),s(216),n,"data-v-07c1b177",null);t.exports=a.exports},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("h1",[t._v("NCAAF Schedules and Scores")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-6 margin-bottom-small"},[s("b-form-select",{attrs:{options:t.selectFilterOptions},model:{value:t.selectFilter,callback:function(e){t.selectFilter=e},expression:"selectFilter"}})],1),s("div",{staticClass:"col-sm-12 col-md-6"},[s("b-form-input",{attrs:{placeholder:"Search for a team..."},model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}})],1)])])]),s("hr",{staticStyle:{margin:"20px 0px"}}),s("div",{staticClass:"d-flex flex-row justify-content-center flex-wrap"},t._l(t.filteredTeams,function(e,n){return s("div",{staticClass:"event",style:t.getTeamColorStyle(e),attrs:{id:"event"+n}},[s("b-card",{style:{borderColor:t.getTeamColorStyle(e,!0)},attrs:{"no-body":"no-body"}},[s("div",{staticClass:"card-text team"},[s("div",{staticClass:"d-flex flex-column align-items-center justify-content-center"},[s("div",{staticClass:"text-center",staticStyle:{"font-size":"9px"}},[s("strong",[s("div",[t._v(t._s(e.location))]),s("div",[t._v(t._s(e.name))])])]),s("img",{staticClass:"img-fluid",attrs:{src:"file/s3/"+e.logo_local_filename}}),s("div",{staticClass:"schedule d-flex"},[s("ul",{staticClass:"list-unstyled"},t._l(t.teamSpecificEvents(e.full_name),function(n){return s("li",{style:t.getResultOrStyle(n,e,"style")},[s("div",{staticClass:"d-flex flex-row justify-content-center"},[s("div",[s("i",[t._v(t._s(t.getFormattedDate(n.event_timestamp))+" - ")])]),s("div",{staticClass:"d-flex flex-row justify-content-center"},[s("div",[t._v(t._s(t.getAtOrVs(n,e))+" ")]),s("div",[t._v(t._s(t.getOtherTeam(n,e))+" ")]),t.getResultOrStyle(n,e)?s("div",[s("strong",[t._v("("+t._s(t.getResultOrStyle(n,e))+")")])]):t._e()])])])}))])])])])],1)}))])},staticRenderFns:[]}},217:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[t.label?s("label",{attrs:{for:"dp"}},[t._v(t._s(t.label))]):t._e(),s("dp",{attrs:{name:"dp",placeholder:t.placeholder||"Click here to select date...",format:"MMMM dd, yyyy","bootstrap-styling":!0,value:t.value},on:{selected:t.dateChanged},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},staticRenderFns:[]}},218:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),s("vue-toastr",{ref:"toastr"})],1)},staticRenderFns:[]}}},[173]);
//# sourceMappingURL=app.5bb8364d1e1f45d7a19e.js.map