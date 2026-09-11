import{t as l}from"./chunk-CDN9hKcv.js";import{Ai as xT,Bn as ey,Cr as ks,Dr as lT,Ei as vh,Ft as S,Ht as Tl,J as KS,Jr as oy,Kt as Um,M as Gf,Mn as dT,Mt as RV,Nn as dw,On as cT,Pn as dy,S as Dy,Si as uy,U as Jm,V as JT,Vn as fC,Vt as Ti,Xr as pT,Z as Ki,_ as Co,an as Xb,br as kM,cn as YS,di as sT,dr as iS,ei as ps,ft as OM,i as $m,ji as xf,jr as m,ln as YT,mr as j,nr as h_,o as Af,or as hs,qn as gT,r as $T,ti as py,tr as hT,ut as Ny,vr as jV,vt as PM,w as El,xr as kV,yi as ty}from"./chunk-CVOhy15q.js";import{d as _,g as ui,m as it,n as Ct,o as Lt,p as ee,s as Ni}from"./chunk-CVZwBfsF.js";import{c as ot,x as f}from"./main-F33QNKZI.js";var pe=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var be=[`container`];var he=[`icon`];var _e=[`closeicon`];var ve=[`*`];var xe=n=>({closeCallback:n});function ye(n,s){n&1&&oy(0)}function Ce(n,s){if(n&1&&Um(0,ye,1,0,`ng-container`,3),n&2){let e=cT();ey(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)}}function we(n,s){if(n&1&&ty(0,`i`,0),n&2){let e=cT();xT(e.cn(e.cx(`icon`),e.icon())),ey(`pBind`,e.ptm(`icon`)),Jm(`data-p`,e.dataP)}}function Te(n,s){n&1&&oy(0)}function Me(n,s){if(n&1&&Um(0,Te,1,0,`ng-container`,4),n&2){let e=cT();ey(`ngTemplateOutlet`,e.containerTemplate||e._containerTemplate)(`ngTemplateOutletContext`,JT(2,xe,e.closeCallback))}}function ke(n,s){if(n&1&&ty(0,`span`,6),n&2){let e=cT(3);ey(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`))(`innerHTML`,e.text(),fC),Jm(`data-p`,e.dataP)}}function ze(n,s){if(n&1&&(ks(0,`div`),YS(1,ke,1,4,`span`,6),Tl()),n&2){let e=cT(2);dw(),KS(e.escape()?-1:1)}}function Ie(n,s){if(n&1&&(ks(0,`span`,5),$T(1),Tl()),n&2){let e=cT(3);ey(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`)),Jm(`data-p`,e.dataP),dw(),Ny(e.text())}}function Be(n,s){if(n&1&&YS(0,Ie,2,4,`span`,5),n&2){let e=cT(2);KS(e.escape()&&e.text()?0:-1)}}function De(n,s){if(n&1&&(YS(0,ze,2,1,`div`)(1,Be,1,1),ks(2,`span`,5),dT(3),Tl()),n&2){let e=cT();KS(e.escape()?1:0),dw(2),ey(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`)),Jm(`data-p`,e.dataP)}}function Ne(n,s){if(n&1&&ty(0,`i`,5),n&2){let e=cT(2);xT(e.cn(e.cx(`closeIcon`),e.closeIcon())),ey(`pBind`,e.ptm(`closeIcon`))(`ngClass`,e.closeIcon()),Jm(`data-p`,e.dataP)}}function Oe(n,s){n&1&&oy(0)}function Se(n,s){if(n&1&&Um(0,Oe,1,0,`ng-container`,3),n&2){let e=cT(2);ey(`ngTemplateOutlet`,e.closeIconTemplate||e._closeIconTemplate)}}function Ee(n,s){if(n&1&&(Gf(),ty(0,`svg`,10)),n&2){let e=cT(2);xT(e.cx(`closeIcon`)),ey(`pBind`,e.ptm(`closeIcon`)),Jm(`data-p`,e.dataP)}}function Pe(n,s){if(n&1){let e=sT();ks(0,`button`,7),uy(`click`,function(t){Af(e);return xf(cT().close(t))}),YS(1,Ne,1,5,`i`,8),YS(2,Se,1,1,`ng-container`),YS(3,Ee,1,4,`:svg:svg`,9),Tl()}if(n&2){let e=cT();xT(e.cx(`closeButton`)),ey(`pBind`,e.ptm(`closeButton`)),Jm(`aria-label`,e.closeAriaLabel)(`data-p`,e.dataP),dw(),KS(e.closeIcon()?1:-1),dw(),KS(e.closeIconTemplate||e._closeIconTemplate?2:-1),dw(),KS(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var Ae={root:({instance:n})=>[`p-message p-component p-message-`+n.severity(),n.variant()&&`p-message-`+n.variant(),{"p-message-sm":n.size()===`small`,"p-message-lg":n.size()===`large`}],contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`};var ue=(()=>{class n extends _{name=`message`;style=pe;classes=Ae;static ɵfac=(()=>{let e;return function(t){return(e||(e=vh(n)))(t||n)}})();static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var fe=new S(`MESSAGE_INSTANCE`);var Fe=(()=>{class n extends ee{componentName=`Message`;_componentStyle=m(ue);bindDirectiveInstance=m(ui,{self:!0});$pcMessage=m(fe,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}severity=kV(`info`);text=kV();escape=kV(!0,{transform:Co});style=kV();styleClass=kV();closable=kV(!1,{transform:Co});icon=kV();closeIcon=kV();life=kV();showTransitionOptions=kV(`300ms ease-out`);hideTransitionOptions=kV(`200ms cubic-bezier(0.86, 0, 0.07, 1)`);size=kV();variant=kV();motionOptions=kV(void 0);computedMotionOptions=h_(()=>l(l({},this.ptm(`motion`)),this.motionOptions()));onClose=RV();get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=Ki(!0);containerTemplate;iconTemplate;closeIconTemplate;templates=jV(Lt);_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){let e=this.life();e&&setTimeout(()=>{this.visible.set(!1)},e)}onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`container`:this._containerTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`closeicon`:this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant()===`outlined`,simple:this.variant()===`simple`,[this.severity()]:this.severity(),[this.size()]:this.size()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=vh(n)))(t||n)}})();static ɵcmp=Xb({type:n,selectors:[[`p-message`]],contentQueries:function(a,t,g){if(a&1&&(py(g,t.templates,Lt,4),dy(g,be,4)(g,he,4)(g,_e,4)),a&2){gT();let u;pT(u=hT())&&(t.containerTemplate=u.first),pT(u=hT())&&(t.iconTemplate=u.first),pT(u=hT())&&(t.closeIconTemplate=u.first)}},hostAttrs:[`role`,`alert`,`aria-live`,`polite`],hostVars:5,hostBindings:function(a,t){a&1&&(ps(function(){return`p-message-enter-active`}),hs(function(){return`p-message-leave-active`})),a&2&&(Jm(`data-p`,t.dataP),xT(t.cn(t.cx(`root`),t.styleClass())),Dy(`p-message-leave-active`,!t.visible()))},inputs:{severity:[1,`severity`],text:[1,`text`],escape:[1,`escape`],style:[1,`style`],styleClass:[1,`styleClass`],closable:[1,`closable`],icon:[1,`icon`],closeIcon:[1,`closeIcon`],life:[1,`life`],showTransitionOptions:[1,`showTransitionOptions`],hideTransitionOptions:[1,`hideTransitionOptions`],size:[1,`size`],variant:[1,`variant`],motionOptions:[1,`motionOptions`]},outputs:{onClose:`onClose`},features:[YT([ue,{provide:fe,useExisting:n},{provide:it,useExisting:n}]),iS([ui]),$m],ngContentSelectors:ve,decls:7,vars:12,consts:[[3,`pBind`],[3,`pBind`,`class`],[`pRipple`,``,`type`,`button`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`pBind`,`ngClass`],[3,`pBind`,`ngClass`,`innerHTML`],[`pRipple`,``,`type`,`button`,3,`click`,`pBind`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(a,t){a&1&&(lT(),ks(0,`div`,0)(1,`div`,0),YS(2,Ce,1,1,`ng-container`),YS(3,we,1,4,`i`,1),YS(4,Me,1,4,`ng-container`)(5,De,4,4),YS(6,Pe,4,8,`button`,2),Tl()()),a&2&&(xT(t.cx(`contentWrapper`)),ey(`pBind`,t.ptm(`contentWrapper`)),Jm(`data-p`,t.dataP),dw(),xT(t.cx(`content`)),ey(`pBind`,t.ptm(`content`)),Jm(`data-p`,t.dataP),dw(),KS(t.iconTemplate||t._iconTemplate?2:-1),dw(),KS(t.icon()?3:-1),dw(),KS(t.containerTemplate||t._containerTemplate?4:5),dw(2),KS(t.closable()?6:-1))},dependencies:[PM,OM,kM,f,Ni,Ct,ui,ot],encapsulation:2})}return n})();var sn=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=El({type:n});static ɵinj=Ti({imports:[Fe,Ct,Ct]})}return n})();export{sn as n,Fe as t};