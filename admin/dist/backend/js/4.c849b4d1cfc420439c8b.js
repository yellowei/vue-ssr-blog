webpackJsonp([4],{"/9mm":function(e,n,t){"use strict";function i(e){t("EvVR")}Object.defineProperty(n,"__esModule",{value:!0});var r=t("Dd8w"),a=t.n(r),s=t("NYxO"),c={beforeRouteLeave:function(e,n,t){this.clearOnly(),t()},created:function(){this.getOnlyArticle(),document.title="后台管理 -文章预览"},watch:{$route:function(){"review"===this.$route.name&&this.getOnlyArticle()}},computed:a()({},Object(s.d)(["articles"])),methods:a()({},Object(s.b)(["getArticle"]),Object(s.c)(["clearOnly"]),{getOnlyArticle:function(){var e=this;this.getArticle({tag:this.$route.params.eTag,articleId:this.$route.params.articleId}).then(function(n){e.$nextTick(function(){Prism.highlightAll()})})}})},o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"article-review"},e._l(e.articles.only,function(n){return t("div",[t("div",{staticClass:"review-title"},[t("h2",[e._v(e._s(n.title))])]),e._v(" "),t("div",{staticClass:"review-tags"},[t("h4",[e._v("标签：")]),e._v(" "),e._l(n.tag,function(n){return t("span",[e._v(e._s(n))])})],2),e._v(" "),t("div",{staticClass:"review-abstract"},[t("h4",[e._v("前言：")]),e._v(" "),t("span",[e._v(e._s(n.abstract))])]),e._v(" "),t("div",{staticClass:"review-date"},[t("h4",[e._v("发表时间：")]),e._v(" "),t("span",[e._v(e._s(e._f("reviseTime")(n.date)))])]),e._v(" "),t("div",{staticClass:"review-content",domProps:{innerHTML:e._s(n.content)}},[e._v(e._s(n.content))])])}),0)},l=[],v={render:o,staticRenderFns:l},d=v,p=t("VU/8"),b=i,h=p(c,d,!1,b,null,null);n.default=h.exports},"3GbJ":function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,"\n.article-review {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px;\n  color: #404040;\n  line-height: 1.8;\n  width: 80%;\n  margin: 20px auto 0;\n  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);\n  border-radius: 2px;\n}\n.review-tags h4 {\n  display: inline-block;\n}\n.review-tags span {\n  margin-right: 10px;\n}\n.review-abstract,\n.review-content,\n.review-date {\n  margin-top: 10px;\n}\n.review-abstract h4,\n.review-date h4 {\n  display: inline-block;\n}\n.review-title {\n  margin-top: 10px;\n  text-align: center;\n}\n.review-content li {\n  margin-left: 15px;\n}\n.review-content hr {\n  margin: 15px 0;\n  height: 0;\n  border: 0;\n  border-top: 1px solid #ccc;\n}\n.review-content img {\n  max-width: 100%;\n}\n@media screen and (max-width: 767px) {\n.article-review {\n    margin-top: 10px;\n    padding: 10px;\n    width: 100%;\n}\n.article-review pre {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n}\n",""])},EvVR:function(e,n,t){var i=t("3GbJ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("104eb40f",i,!0,{})}});