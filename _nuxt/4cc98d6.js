(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{272:function(t,e,o){var content=o(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("62350de7",content,!0,{sourceMap:!1})},273:function(t,e,o){"use strict";o.r(e);o(68);var n=o(279),d=o(274),r={name:"Posts",props:{filter:{type:Object,default:function(){return{tag:""}}}},data:function(){return{posts:[],page:0,posts_per_page:10,order:"-fields.date"}},created:function(){this.page=0,this.getPosts(),this.filter.page&&(this.page=this.filter.page),this.filter.posts_per_page&&(this.posts_per_page=this.filter.posts_per_page)},methods:{toHtmlString:function(t){return Object(n.documentToHtmlString)(t)},infiniteScroll:function(t){this.getPosts(t)},getPosts:function(t){var e=this;return d.a.getEntries({content_type:"post",skip:this.page*this.posts_per_page,limit:this.posts_per_page,"fields.tags.sys.id":this.filter.tag,order:this.order}).then((function(o){if(o.items.length){for(var i in o.items)e.posts.push(o.items[i]);t&&t.loaded()}else t&&t.complete();e.page++}))}}},l=(o(276),o(22)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",{staticClass:"posts"},[t._l(t.posts,(function(e,n){return o("li",{key:n,staticClass:"posts__item"},[o("nuxt-link",{staticClass:"posts__title",attrs:{to:{name:"posts-slug",params:{slug:e.fields.slug}}}},[t._v("\n        "+t._s(e.fields.title)+"\n      ")]),t._v(" "),e.fields.tags?o("ul",{staticClass:"posts-tags"},t._l(e.fields.tags,(function(e,n){return o("li",{key:n},[o("nuxt-link",{attrs:{to:{name:"tags-slug",params:{slug:e.fields.slug,tag:e}}}},[t._v("\n            "+t._s(e.fields.title)+"\n          ")])],1)})),0):t._e()],1)})),t._v(" "),t.page>0?o("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.infiniteScroll}}):t._e()],2)])}),[],!1,null,"70d57ee2",null);e.default=component.exports},274:function(t,e,o){"use strict";var n=o(281).createClient({space:"fb8y0lmo6igw",accessToken:"9LNnz9lZr_L8_eLt7sdyIfhr6S5YBH9_CPI4SKIr0a8"});e.a=n},276:function(t,e,o){"use strict";o(272)},277:function(t,e,o){(e=o(35)(!1)).push([t.i,"@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),e.push([t.i,'a[data-v-70d57ee2],body[data-v-70d57ee2],dd[data-v-70d57ee2],div[data-v-70d57ee2],dl[data-v-70d57ee2],dt[data-v-70d57ee2],h1[data-v-70d57ee2],h2[data-v-70d57ee2],h3[data-v-70d57ee2],h4[data-v-70d57ee2],html[data-v-70d57ee2],img[data-v-70d57ee2],li[data-v-70d57ee2],ol[data-v-70d57ee2],p[data-v-70d57ee2],span[data-v-70d57ee2],table[data-v-70d57ee2],td[data-v-70d57ee2],th[data-v-70d57ee2],tr[data-v-70d57ee2],ul[data-v-70d57ee2]{box-sizing:border-box;padding:0;margin:0;font-size:100%;vertical-align:baseline;border:0;font-feature-settings:"palt"}article[data-v-70d57ee2],aside[data-v-70d57ee2],figcaption[data-v-70d57ee2],figure[data-v-70d57ee2],footer[data-v-70d57ee2],header[data-v-70d57ee2],nav[data-v-70d57ee2],section[data-v-70d57ee2]{display:block}button[data-v-70d57ee2]{padding:0;font:unset;background:none;background-color:unset;border:0;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}html[data-v-70d57ee2]{font-family:"Noto Sans Japanese",sans-serif;font-size:62.5%;font-weight:400}body[data-v-70d57ee2]{font-size:1.4rem;letter-spacing:.1em}body[data-v-70d57ee2],body[data-v-70d57ee2]:first-line{line-height:1}body[data-modalActive=true][data-v-70d57ee2]{position:fixed;z-index:10}ol[data-v-70d57ee2],ul[data-v-70d57ee2]{list-style:none;list-style-type:none}a[data-v-70d57ee2]{color:inherit;text-decoration:none}a[data-v-70d57ee2]:hover{cursor:pointer}img[data-v-70d57ee2]{width:100%;height:auto}h1[data-v-70d57ee2]{margin:40px 0 80px;font-size:4rem;font-weight:400}.posts__item[data-v-70d57ee2]{margin:0 0 60px}.posts__title[data-v-70d57ee2]{font-size:3rem}.posts__title[data-v-70d57ee2]:hover{color:#4169e1}.posts-tags[data-v-70d57ee2],.posts__contents[data-v-70d57ee2]{margin:20px 0 0}.posts-tags[data-v-70d57ee2]{display:flex}.posts-tags li[data-v-70d57ee2]{margin:0 20px 0 0}.posts-tags li a[data-v-70d57ee2]{color:#4169e1}.posts-tags li a[data-v-70d57ee2]:before{content:"#"}',""]),t.exports=e},280:function(t,e){},326:function(t,e,o){"use strict";o.r(e);var n={name:"Main",components:{Posts:o(273).default},data:function(){return{filter:{tag:""}}}},d=o(22),component=Object(d.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Posts")]),this._v(" "),e("Posts",{attrs:{filter:this.filter}})],1)}),[],!1,null,"e5a275fc",null);e.default=component.exports;installComponents(component,{Posts:o(273).default})}}]);