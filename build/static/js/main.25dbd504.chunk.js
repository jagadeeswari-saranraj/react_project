(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),s=a(8),l=a.n(s),o=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"serach-bar ui segment"},i.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"field"},i.a.createElement("label",null," Video Search "),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),t}(i.a.Component),f=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:t.snippet.title,src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},h=(a(25),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{className:"video"},i.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.channelTitle}),i.a.createElement("div",{className:"content",style:{marginLeft:"10px"}},i.a.createElement("div",{className:"header"}," ",i.a.createElement("b",null," ",t.snippet.title," ")))))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return i.a.createElement(h,{key:e.etag,video:e,onVideoSelect:a})});return i.a.createElement("div",{className:"ui list"},n)},g=a(17),w=a.n(g).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyDzBWhBbs9bNGW0gzEN3xvvpFRYiAPwgTs"}}),S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(){var e=Object(o.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("buildings")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(b,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(f,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(S,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.25dbd504.chunk.js.map