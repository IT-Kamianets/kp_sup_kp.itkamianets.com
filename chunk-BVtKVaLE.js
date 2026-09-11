import{Ai as xT,B as JS,Bn as ey,Cr as ks,Ei as vh,Ft as S,Ht as Tl,J as KS,Jr as oy,Kt as Um,Ln as e_,Lt as Si,Mt as RV,Nn as dw,Nr as mH,On as cT,Pn as dy,Si as uy,U as Jm,V as JT,Vt as Ti,Wn as fb,Xr as pT,Z as Ki,_ as Co,an as Xb,br as kM,cn as YS,di as sT,dr as iS,gi as td,i as $m,in as XT,j as GV,ji as xf,jr as m,k as Fv,kn as c_,kr as lb,ln as YT,mr as j,nr as h_,o as Af,qn as gT,r as $T,rn as XS,ti as py,tr as hT,ut as Ny,vr as jV,vt as PM,w as El,xr as kV,yi as ty,yt as PV}from"./chunk-CVOhy15q.js";import{d as _,g as ui,h as mi,m as it$1,n as Ct$1,o as Lt,s as Ni}from"./chunk-CVZwBfsF.js";import{i as lo,l as Hn,n as af,u as Vn}from"./main-F33QNKZI.js";import{r}from"./chunk-C_uQfBFk.js";import{n as re,t as ke}from"./chunk-BBbRJESu.js";import{i as be$1,n as Kt,r as Xt,t as Et}from"./chunk-Bc_yhP9P.js";import{t as c}from"./chunk-2ZaoZSco.js";var Fe=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var Ge=[`icon`];var Ye=[`content`];var Pe=t=>({$implicit:t});function Je(t,l){t&1&&oy(0)}function We(t,l){if(t&1&&ty(0,`span`,0),t&2){let e=cT(3);xT(e.cn(e.cx(`icon`),e.checked?e.onIcon():e.offIcon(),e.iconPos()===`left`?e.cx(`iconLeft`):e.cx(`iconRight`))),ey(`pBind`,e.ptm(`icon`))}}function Xe(t,l){if(t&1&&YS(0,We,1,3,`span`,2),t&2){let e=cT(2);KS(e.onIcon()||e.offIcon()?0:-1)}}function Ze(t,l){t&1&&oy(0)}function et(t,l){if(t&1&&Um(0,Ze,1,0,`ng-container`,1),t&2){let e=cT(2);ey(`ngTemplateOutlet`,e.iconTemplate()||e._iconTemplate)(`ngTemplateOutletContext`,JT(2,Pe,e.checked))}}function tt(t,l){if(t&1&&(YS(0,Xe,1,1)(1,et,1,4,`ng-container`),ks(2,`span`,0),$T(3),Tl()),t&2){let e=cT();KS(e.iconTemplate()?1:0),dw(2),xT(e.cx(`label`)),ey(`pBind`,e.ptm(`label`)),dw(),Ny(e.checked?e.hasOnLabel?e.onLabel():e.nbsp:e.hasOffLabel?e.offLabel():e.nbsp)}}var nt=`
    ${Fe}

    /* For ngx-prime (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`;var it=t=>typeof t.checked==`function`?t.checked():t.checked;var ot={root:({instance:t})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":it(t),"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size()===`small`,"p-togglebutton-lg p-inputfield-lg":t.size()===`large`,"p-togglebutton-fluid":t.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var be=(()=>{class t extends _{name=`togglebutton`;style=nt;classes=ot;static ɵfac=(()=>{let e;return function(i){return(e||(e=vh(t)))(i||t)}})();static ɵprov=j({token:t,factory:t.ɵfac})}return t})();var Ie=new S(`TOGGLEBUTTON_INSTANCE`);var at={provide:be$1,useExisting:Si(()=>fe),multi:!0};var fe=(()=>{class t extends c{componentName=`ToggleButton`;nbsp=`\xA0`;$pcToggleButton=m(Ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(ui,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),GV()&&console.warn("`<p-togglebutton>` is deprecated and will be removed in a future major version. Use a native `<button pToggleButton>` instead.")}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty()===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel=kV(`Yes`);offLabel=kV(`No`);onIcon=kV();offIcon=kV();ariaLabel=kV();ariaLabelledBy=kV();styleClass=kV();inputId=kV();tabindex=kV(0,{transform:td});iconPos=kV(`left`);autofocus=kV(void 0,{transform:Co});size=kV();allowEmpty=kV();fluid=kV(void 0,{transform:Co});onChange=RV();iconTemplate=PV(`icon`,{descendants:!1});contentTemplate=PV(`content`,{descendants:!1});templates=jV(Lt);checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=m(be);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel()&&this.onLabel().length>0}get hasOffLabel(){return this.offLabel()&&this.offLabel().length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`icon`:this._iconTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size()]:this.size()})}static ɵfac=function(n){return new(n||t)};static ɵcmp=Xb({type:t,selectors:[[`p-toggleButton`],[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(n,i,a){n&1&&py(a,i.iconTemplate,Ge,4)(a,i.contentTemplate,Ye,4)(a,i.templates,Lt,4),n&2&&gT(3)},hostVars:13,hostBindings:function(n,i){n&1&&uy(`keydown`,function(r){return i.onKeyDown(r)})(`click`,function(r){return i.toggle(r)}),n&2&&(Jm(`aria-labelledby`,i.ariaLabelledBy())(`aria-label`,i.ariaLabel())(`aria-pressed`,i.checked?`true`:`false`)(`aria-disabled`,i.$disabled()||null)(`aria-invalid`,i.invalid()||null)(`role`,`button`)(`tabindex`,i.tabindex()!==void 0?i.tabindex():i.$disabled()?-1:0)(`data-pc-name`,`togglebutton`)(`data-p-checked`,i.active)(`data-p-disabled`,i.$disabled())(`data-p`,i.dataP),xT(i.cn(i.cx(`root`),i.styleClass())))},inputs:{onLabel:[1,`onLabel`],offLabel:[1,`offLabel`],onIcon:[1,`onIcon`],offIcon:[1,`offIcon`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],styleClass:[1,`styleClass`],inputId:[1,`inputId`],tabindex:[1,`tabindex`],iconPos:[1,`iconPos`],autofocus:[1,`autofocus`],size:[1,`size`],allowEmpty:[1,`allowEmpty`],fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[YT([at,be,{provide:Ie,useExisting:t},{provide:it$1,useExisting:t}]),iS([Ni,ui]),$m],decls:3,vars:9,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(n,i){n&1&&(ks(0,`span`,0),Um(1,Je,1,0,`ng-container`,1),YS(2,tt,4,5),Tl()),n&2&&(xT(i.cx(`content`)),ey(`pBind`,i.ptm(`content`)),Jm(`data-p`,i.dataP),dw(),ey(`ngTemplateOutlet`,i.contentTemplate()||i._contentTemplate)(`ngTemplateOutletContext`,JT(7,Pe,i.checked)),dw(),KS(i.contentTemplate()?-1:2))},dependencies:[PM,kM,Ct$1,mi,ui],encapsulation:2})}return t})();var Ae=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var rt=[`item`];var ut=(t,l)=>({$implicit:t,index:l});function dt(t,l){return this.getOptionLabel(l)}function st(t,l){t&1&&oy(0)}function ct(t,l){if(t&1&&Um(0,st,1,0,`ng-container`,3),t&2){let e=cT(2),n=e.$implicit,i=e.$index,a=cT();ey(`ngTemplateOutlet`,a.itemTemplate||a._itemTemplate)(`ngTemplateOutletContext`,e_(2,ut,n,i))}}function gt(t,l){t&1&&Um(0,ct,1,5,`ng-template`,null,0,c_)}function pt(t,l){if(t&1){let e=sT();ks(0,`p-togglebutton`,2),uy(`onChange`,function(i){let a=Af(e),r=a.$implicit,D=a.$index;return xf(cT().onOptionSelect(i,r,D))}),YS(1,gt,2,0),Tl(),lb()}if(t&2){let e=l.$implicit,n=cT();ey(`autofocus`,n.autofocus())(`styleClass`,n.styleClass())(`ngModel`,n.isSelected(e))(`onLabel`,n.getOptionLabel(e))(`offLabel`,n.getOptionLabel(e))(`disabled`,n.$disabled()||n.isOptionDisabled(e))(`allowEmpty`,n.getAllowEmpty())(`size`,n.size())(`fluid`,n.fluid())(`pt`,n.ptm(`pcToggleButton`))(`unstyled`,n.unstyled()),fb(),dw(),KS(n.itemTemplate||n._itemTemplate?1:-1)}}var bt=`
    ${Ae}

    /* For ngx-prime */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`;var mt={root:({instance:t})=>[`p-selectbutton p-component`,{"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-selectbutton-fluid":t.fluid()}]};var Ve=(()=>{class t extends _{name=`selectbutton`;style=bt;classes=mt;static ɵfac=(()=>{let e;return function(i){return(e||(e=vh(t)))(i||t)}})();static ɵprov=j({token:t,factory:t.ɵfac})}return t})();var $e=new S(`SELECTBUTTON_INSTANCE`);var ft={provide:be$1,useExisting:Si(()=>ue),multi:!0};var ue=(()=>{class t extends c{componentName=`SelectButton`;constructor(){super(),GV()&&console.warn("`<p-selectbutton>` is deprecated and will be removed in a future major version. Use the native `pSelectButton`/`pSelectButtonOption` directives instead.")}options=kV();optionLabel=kV();optionValue=kV();optionDisabled=kV();unselectable=kV(!1,{transform:Co});tabindex=kV(0,{transform:td});multiple=kV(void 0,{transform:Co});allowEmpty=kV(!0,{transform:Co});styleClass=kV();ariaLabelledBy=kV();ariaLabel=kV();dataKey=kV();autofocus=kV(void 0,{transform:Co});size=kV();fluid=kV(void 0,{transform:Co});onOptionClick=RV();onChange=RV();itemTemplate;_itemTemplate;role=h_(()=>this.multiple()?`group`:`radiogroup`);get equalityKey(){return this.optionValue()?null:this.dataKey()}value;focusedIndex=0;_componentStyle=m(Ve);$pcSelectButton=m($e,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(ui,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.unselectable()?!1:this.multiple()?this.allowEmpty()||this.value?.length!==1:this.allowEmpty()}getOptionLabel(e){let n=this.optionLabel();return n?Fv(e,n):e.label!=null?e.label:e}getOptionValue(e){let n=this.optionValue();return n?Fv(e,n):this.optionLabel()||e.value===void 0?e:e.value}isOptionDisabled(e){let n=this.optionDisabled();return n?Fv(e,n):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,i){if(this.$disabled()||this.isOptionDisabled(n))return;let a=this.isSelected(n);if(a&&this.unselectable())return;let r=this.getOptionValue(n),D;if(this.multiple())a?D=this.value.filter(se=>!mH(se,r,this.equalityKey||void 0)):D=this.value?[...this.value,r]:[r];else{if(a&&!this.allowEmpty())return;D=a?null:r}this.focusedIndex=i,this.value=D,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:i})}changeTabIndexes(e,n){let i,a;for(let r=0;r<=this.el.nativeElement.children.length-1;r++)this.el.nativeElement.children[r].getAttribute(`tabindex`)===`0`&&(i={elem:this.el.nativeElement.children[r],index:r});n===`prev`?i.index===0?a=this.el.nativeElement.children.length-1:a=i.index-1:i.index===this.el.nativeElement.children.length-1?a=0:a=i.index+1,this.focusedIndex=a,this.el.nativeElement.children[a].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!mH(n,this.getOptionValue(e),this.dataKey()))}isSelected(e){let n=!1,i=this.getOptionValue(e);if(this.multiple()){if(this.value&&Array.isArray(this.value)){for(let a of this.value)if(mH(a,i,this.dataKey())){n=!0;break}}}else n=mH(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates=jV(Lt);onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`item`&&(this._itemTemplate=e.template)})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static ɵfac=function(n){return new(n||t)};static ɵcmp=Xb({type:t,selectors:[[`p-selectButton`],[`p-selectbutton`],[`p-select-button`]],contentQueries:function(n,i,a){if(n&1&&(py(a,i.templates,Lt,4),dy(a,rt,4)),n&2){gT();let r;pT(r=hT())&&(i.itemTemplate=r.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(Jm(`role`,i.role())(`aria-label`,i.ariaLabel()||null)(`aria-labelledby`,i.ariaLabelledBy()||null)(`data-p`,i.dataP),xT(i.cx(`root`)))},inputs:{options:[1,`options`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],unselectable:[1,`unselectable`],tabindex:[1,`tabindex`],multiple:[1,`multiple`],allowEmpty:[1,`allowEmpty`],styleClass:[1,`styleClass`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],dataKey:[1,`dataKey`],autofocus:[1,`autofocus`],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[YT([ft,Ve,{provide:$e,useExisting:t},{provide:it$1,useExisting:t}]),iS([ui]),$m],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,i){n&1&&XS(0,pt,2,12,`p-togglebutton`,1,dt,!0),n&2&&JS(i.options())},dependencies:[fe,Kt,Xt,Et,PM,kM,Ct$1,mi],encapsulation:2})}return t})();var Re=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=El({type:t});static ɵinj=Ti({imports:[ue,Ct$1,Ct$1]})}return t})();var yt=()=>[`/participator`];var Dt=t=>({username:t});var de=class t{entity;position;get queryUsername(){return this.entity.username.replace(/^@/,``)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Xb({type:t,selectors:[[`app-participator-short`]],inputs:{entity:`entity`,position:`position`},decls:5,vars:8,consts:[[1,`short`],[`severity`,`secondary`,`rounded`,``,1,`short__position`,3,`value`],[1,`short__name`,3,`routerLink`,`queryParams`],[`severity`,`success`,1,`short__points`,3,`value`]],template:function(e,n){e&1&&(ks(0,`article`,0),ty(1,`p-tag`,1),ks(2,`a`,2),$T(3),Tl(),ty(4,`p-tag`,3),Tl()),e&2&&(dw(),ey(`value`,`#`+n.position),dw(),ey(`routerLink`,XT(5,yt))(`queryParams`,JT(6,Dt,n.queryUsername)),dw(),Ny(n.entity.username),dw(),ey(`value`,n.entity.points+` балів`))},dependencies:[PM,lo,ke,re],styles:[`.short[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%sp-3);padding:var(--%NS%sp-2) var(--%NS%sp-3);border-bottom:1px solid var(--%NS%c-border)}.short__position[_ngcontent-%COMP%]{flex:0 0 auto}.short__name[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;color:var(--%NS%c-text-secondary);font-weight:600;text-decoration:none}.short__name[_ngcontent-%COMP%]:hover{text-decoration:underline}.short__points[_ngcontent-%COMP%]{flex:0 0 auto}`]})};var Ct=(t,l)=>l.username;function _t(t,l){if(t&1&&(ks(0,`li`),ty(1,`app-participator-short`,8),Tl()),t&2){let e=l.$implicit,n=l.$index;dw(),ey(`entity`,e)(`position`,n+1)}}var ze=class t{period=Ki(`weekly`);entries=h_(()=>r[this.period()]);periods=[{label:`Тиждень`,value:`weekly`},{label:`Місяць`,value:`monthly`},{label:`Рік`,value:`yearly`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Xb({type:t,selectors:[[`ng-component`]],decls:17,vars:2,consts:[[1,`ranking-page`],[1,`ranking-panel`],[`translate`,`Рейтинг`],[`translate`,`Перегляньте, хто набрав найбільше балів на річці.`,1,`ranking-description`],[`optionLabel`,`label`,`optionValue`,`value`,`aria-label`,`Період рейтингу`,1,`periods`,3,`ngModelChange`,`options`,`ngModel`],[1,`leaderboard`],[1,`ranking-points`],[`pButton`,``,`routerLink`,`/points`],[3,`entity`,`position`]],template:function(e,n){e&1&&(ks(0,`section`,0)(1,`div`,1)(2,`h1`,2),$T(3,`Рейтинг`),Tl(),ks(4,`p`,3),$T(5,` Перегляньте, хто набрав найбільше балів на річці. `),Tl(),ks(6,`p-selectbutton`,4),uy(`ngModelChange`,function(a){return n.period.set(a)}),Tl(),lb(),ks(7,`ol`,5),XS(8,_t,2,2,`li`,null,Ct),Tl(),ks(10,`section`,6)(11,`h2`),$T(12,`Як заробити більше балів?`),Tl(),ks(13,`p`),$T(14,`Виконуй SUP-челенджі, знімай їх у Story та піднімайся у рейтингу KP - SUP - KP.`),Tl(),ks(15,`a`,7),$T(16,`Переглянути челенджі`),Tl()()()()),e&2&&(dw(6),ey(`options`,n.periods)(`ngModel`,n.period()),fb(),dw(2),JS(n.entries()))},dependencies:[lo,af,Kt,Xt,Et,Re,ue,Hn,Vn,de],styles:[`[_nghost-%COMP%]{display:block}.ranking-page[_ngcontent-%COMP%]{min-height:100%;padding:1rem;background:var(--%NS%c-bg-primary)}.ranking-panel[_ngcontent-%COMP%]{max-width:46rem;margin-inline:auto;border:1px solid var(--%NS%c-border);border-radius:calc(var(--%NS%radius-card) * 2);background:var(--%NS%c-bg-secondary);padding:clamp(1.5rem,5vw,3rem);box-shadow:var(--%NS%shadow-sm)}h1[_ngcontent-%COMP%]{font-size:clamp(2rem,7vw,3.5rem);font-weight:700;color:var(--%NS%c-text-strong)}.ranking-description[_ngcontent-%COMP%]{margin-top:.75rem;color:var(--%NS%c-text)}.periods[_ngcontent-%COMP%]{display:block;margin-top:2rem}.leaderboard[_ngcontent-%COMP%]{display:grid;gap:.75rem;margin-top:2rem;list-style:none;padding:0}.ranking-points[_ngcontent-%COMP%]{margin-top:2rem;border-top:1px solid var(--%NS%c-border);padding-top:1.5rem}.ranking-points[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:var(--%NS%c-text-strong)}.ranking-points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:.65rem;color:var(--%NS%c-text);line-height:1.6}.ranking-points[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;margin-top:1rem;color:var(--%NS%c-primary);font-size:.9rem;font-weight:800}`]})};export{ze as RankingComponent};