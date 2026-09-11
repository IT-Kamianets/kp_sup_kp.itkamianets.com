import{Ai as xT,B as JS,Bn as ey,Cr as ks,Dr as lT,Ei as vh,Ft as S,Ht as Tl,J as KS,Mn as dT,Mt as RV,Nn as dw,On as cT,Si as uy,Ti as vg,U as Jm,Vt as Ti,an as Xb,cn as YS,di as sT,dr as iS,ft as OM,i as $m,ji as xf,jr as m,ln as YT,mr as j,mt as Ol,nr as h_,o as Af,r as $T,rn as XS,ut as Ny,vt as PM,w as El,xr as kV,yi as ty}from"./chunk-CVOhy15q.js";import{d as _,g as ui,m as it,n as Ct,p as ee}from"./chunk-CVZwBfsF.js";import{a as oe$1,n as af,t as Xh}from"./main-F33QNKZI.js";import{n as e,t as a}from"./chunk-C_uQfBFk.js";import{n as sn,t as Fe}from"./chunk-CCBaM06O.js";import{n as re$1,t as ke}from"./chunk-BBbRJESu.js";var ie=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var de=[`*`];function me(e,a){if(e&1&&(ks(0,`span`,1),$T(1),Tl()),e&2){let t=cT();xT(t.cx(`label`)),ey(`pBind`,t.ptm(`label`)),Jm(`data-p`,t.dataP),dw(),Ny(t.label())}}function ue(e,a){if(e&1&&ty(0,`span`,3),e&2){let t=cT(2);xT(t.icon()),ey(`pBind`,t.ptm(`icon`))(`ngClass`,t.cx(`icon`)),Jm(`data-p`,t.dataP)(`aria-hidden`,!0)}}function ve(e,a){if(e&1){let t=sT();ks(0,`img`,5),uy(`error`,function(l){Af(t);return xf(cT(3).imageError(l))}),Tl()}if(e&2){let t=cT(3);ey(`pBind`,t.ptm(`image`))(`src`,t.image(),vg),Jm(`alt`,t.ariaLabel()??``)(`data-p`,t.dataP)}}function ge(e,a){if(e&1&&YS(0,ve,1,4,`img`,4),e&2)KS(cT(2).image()?0:-1)}function fe(e,a){if(e&1&&YS(0,ue,1,6,`span`,2)(1,ge,1,1),e&2)KS(cT().icon()?0:1)}var _e={root:({instance:e})=>[`p-avatar p-component`,{"p-avatar-image":e.image()!=null,"p-avatar-circle":e.shape()===`circle`,"p-avatar-lg":e.size()===`large`,"p-avatar-xl":e.size()===`xlarge`}],label:`p-avatar-label`,icon:`p-avatar-icon`};var re=(()=>{class e extends _{name=`avatar`;style=ie;classes=_e;static ɵfac=(()=>{let t;return function(l){return(t||(t=vh(e)))(l||e)}})();static ɵprov=j({token:e,factory:e.ɵfac})}return e})();var oe=new S(`AVATAR_INSTANCE`);var E=(()=>{class e extends ee{componentName=`Avatar`;$pcAvatar=m(oe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(ui,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=kV();icon=kV();image=kV();size=kV(`normal`);shape=kV(`square`);styleClass=kV();ariaLabel=kV();ariaLabelledBy=kV();onImageError=RV();_componentStyle=m(re);imageError(t){this.onImageError.emit(t)}get dataP(){return this.cn({[this.shape()]:this.shape(),[this.size()]:this.size()})}static ɵfac=(()=>{let t;return function(l){return(t||(t=vh(e)))(l||e)}})();static ɵcmp=Xb({type:e,selectors:[[`p-avatar`]],hostVars:5,hostBindings:function(n,l){n&2&&(Jm(`aria-label`,l.ariaLabel())(`aria-labelledby`,l.ariaLabelledBy())(`data-p`,l.dataP),xT(l.cn(l.cx(`root`),l.styleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],size:[1,`size`],shape:[1,`shape`],styleClass:[1,`styleClass`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},outputs:{onImageError:`onImageError`},features:[YT([re,{provide:oe,useExisting:e},{provide:it,useExisting:e}]),iS([ui]),$m],ngContentSelectors:de,decls:3,vars:1,consts:[[3,`pBind`,`class`],[3,`pBind`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`,`src`],[3,`error`,`pBind`,`src`]],template:function(n,l){n&1&&(lT(),dT(0),YS(1,me,2,5,`span`,0)(2,fe,2,1)),n&2&&(dw(),KS(l.label()?1:2))},dependencies:[PM,OM,Ct,ui],encapsulation:2})}return e})();var se=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=El({type:e});static ɵinj=Ti({imports:[E,Ct,Ct]})}return e})();var xe=(e,a)=>a.period;var be=(e,a)=>a.title;function Ce(e,a){if(e&1&&(ks(0,`li`)(1,`span`,11),$T(2),Tl(),ks(3,`div`,12)(4,`strong`),$T(5),Tl(),ks(6,`span`),$T(7),Tl()(),ks(8,`span`,13),$T(9),Tl()()),e&2){let t=a.$implicit,n=cT(2);dw(2),Ny(n.medals[t.place]),dw(3),Ny(t.label),dw(2),Ny(t.period),dw(2),Ol(`#`,t.place)}}function Me(e,a){if(e&1&&(ks(0,`section`,7)(1,`h2`,9),$T(2,`Досягнення`),Tl(),ks(3,`ol`,10),XS(4,Ce,10,4,`li`,null,xe),Tl()()),e&2){let t=cT();dw(4),JS(t.entity.achievements)}}function we(e,a){if(e&1&&(ks(0,`a`,16)(1,`span`),$T(2),Tl(),ks(3,`span`,17),$T(4,`↗`),Tl()()),e&2){let t=a.$implicit;ey(`href`,t.url,vg),dw(2),Ny(t.title)}}function Se(e,a){if(e&1&&(ks(0,`section`,8)(1,`h2`,14),$T(2,`Історії`),Tl(),ks(3,`div`,15),XS(4,we,5,2,`a`,16,be),Tl()()),e&2){let t=cT();dw(4),JS(t.entity.stories)}}var Pe={1:`🥇`,2:`🥈`,3:`🥉`};var w=class e{entity;medals=Pe;static ɵfac=function(t){return new(t||e)};static ɵcmp=Xb({type:e,selectors:[[`app-participator-view`]],inputs:{entity:`entity`},decls:11,vars:6,consts:[[1,`view`],[1,`view__header`],[`size`,`xlarge`,`shape`,`circle`,3,`label`],[1,`view__identity`],[1,`view__username`],[1,`view__name`],[`severity`,`success`,1,`view__points`,3,`value`],[`aria-labelledby`,`achievements-title`,1,`view__section`],[`aria-labelledby`,`stories-title`,1,`view__section`],[`id`,`achievements-title`],[1,`achievements`],[`aria-hidden`,`true`,1,`achievements__medal`],[1,`achievements__body`],[1,`achievements__place`],[`id`,`stories-title`],[1,`stories`],[`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-hidden`,`true`]],template:function(t,n){t&1&&(ks(0,`article`,0)(1,`header`,1),ty(2,`p-avatar`,2),ks(3,`div`,3)(4,`h1`,4),$T(5),Tl(),ks(6,`span`,5),$T(7),Tl()(),ty(8,`p-tag`,6),Tl(),YS(9,Me,6,0,`section`,7),YS(10,Se,6,0,`section`,8),Tl()),t&2&&(dw(2),ey(`label`,n.entity.name.charAt(0)),dw(3),Ny(n.entity.username),dw(2),Ny(n.entity.name),dw(),ey(`value`,n.entity.points+` балів`),dw(),KS(n.entity.achievements.length?9:-1),dw(),KS(n.entity.stories.length?10:-1))},dependencies:[PM,se,E,ke,re$1],styles:[`.view[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%sp-5);background:var(--%NS%c-bg-secondary);border:1px solid var(--%NS%c-border);border-radius:var(--%NS%radius-card);padding:var(--%NS%sp-5)}.view__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%sp-4)}.view__identity[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;flex-direction:column;min-width:0}.view__username[_ngcontent-%COMP%]{margin:0;font-size:1.3rem;color:var(--%NS%c-text-secondary)}.view__name[_ngcontent-%COMP%]{font-size:.9rem;color:var(--%NS%c-text-muted)}.view__points[_ngcontent-%COMP%]{flex:0 0 auto}.view__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 var(--%NS%sp-3);font-size:1.05rem;color:var(--%NS%c-text-secondary)}.achievements[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--%NS%sp-2)}.achievements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%sp-3);padding:var(--%NS%sp-2) var(--%NS%sp-3);background:var(--%NS%c-bg-tertiary);border-radius:var(--%NS%radius-btn)}.achievements__medal[_ngcontent-%COMP%]{font-size:1.2rem}.achievements__body[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;flex-direction:column;min-width:0}.achievements__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem;color:var(--%NS%c-text-muted)}.achievements__place[_ngcontent-%COMP%]{color:var(--%NS%c-text-muted);font-weight:600}.stories[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%sp-2)}.stories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--%NS%sp-1);padding:.3rem .8rem;background:var(--%NS%c-bg-tertiary);border-radius:var(--%NS%radius-btn);color:var(--%NS%c-text-secondary);text-decoration:none}.stories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}`]})};function Ne(e,a){e&1&&(ks(0,`p-message`,2),$T(1,` Учасника не знайдено. Показано приклад профілю. `),Tl()),e&2&&ey(`closable`,!1)}var ce=class e$1{route=m(oe$1);metaService=m(Xh);requestedUsername=this.route.snapshot.queryParamMap.get(`username`)??``;found=!!e[this.requestedUsername];participator=h_(()=>e[this.requestedUsername]??a);constructor(){let a=this.participator();this.metaService.applyMeta({title:a.username,description:this.getDescription(a),robots:`noindex, follow`})}getDescription(a){let t=a.achievements.length?`\u0414\u043E\u0441\u044F\u0433\u043D\u0435\u043D\u043D\u044F: ${a.achievements.map(l=>`${l.label} \u2014 ${l.period}`).join(`; `)}.`:``,n=a.stories.length?` \u0406\u0441\u0442\u043E\u0440\u0456\u0457: ${a.stories.map(l=>l.title).join(`, `)}.`:``;return`${a.username}. ${t}${n}`.trim()}static ɵfac=function(t){return new(t||e$1)};static ɵcmp=Xb({type:e$1,selectors:[[`ng-component`]],decls:4,vars:2,consts:[[1,`profile-page`],[1,`profile-panel`],[`severity`,`warn`,`translate`,`Учасника не знайдено. Показано приклад профілю.`,3,`closable`],[3,`entity`]],template:function(t,n){t&1&&(ks(0,`section`,0)(1,`div`,1),YS(2,Ne,2,1,`p-message`,2),ty(3,`app-participator-view`,3),Tl()()),t&2&&(dw(2),KS(n.found?-1:2),dw(),ey(`entity`,n.participator()))},dependencies:[af,sn,Fe,w],styles:[`[_nghost-%COMP%]{display:block}.profile-page[_ngcontent-%COMP%]{min-height:100%;padding:1rem;background:var(--%NS%c-bg-primary)}.profile-panel[_ngcontent-%COMP%]{max-width:46rem;margin-inline:auto;display:grid;gap:1rem}`]})};export{ce as ParticipatorComponent};