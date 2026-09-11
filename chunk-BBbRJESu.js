import{Ai as xT,Bn as ey,Cr as ks,Dr as lT,Ei as vh,Ft as S,Ht as Tl,J as KS,Kt as Um,Mn as dT,Nn as dw,On as cT,Pn as dy,U as Jm,Vt as Ti,Xr as pT,_ as Co,an as Xb,br as kM,cn as YS,dr as iS,ft as OM,i as $m,jr as m,ln as YT,mr as j,qn as gT,r as $T,ti as py,tr as hT,ut as Ny,vr as jV,vt as PM,w as El,xr as kV,yi as ty}from"./chunk-CVOhy15q.js";import{d as _,g as ui,m as it,n as Ct,o as Lt,p as ee$1}from"./chunk-CVZwBfsF.js";var U=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&ty(0,`span`,3),e&2){let t=cT(2);xT(t.cx(`icon`)),ey(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&YS(0,ee,1,4,`span`,2),e&2)KS(cT().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&Um(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(ks(0,`span`,4),Um(1,oe,1,0,null,5),Tl()),e&2){let t=cT();xT(t.cx(`icon`)),ey(`pBind`,t.ptm(`icon`)),dw(),ey(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends _{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=vh(e)))(n||e)}})();static ɵprov=j({token:e,factory:e.ɵfac})}return e})();var X=new S(`TAG_INSTANCE`);var re=(()=>{class e extends ee$1{componentName=`Tag`;$pcTag=m(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(ui,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=kV();severity=kV();value=kV();icon=kV();rounded=kV(!1,{transform:Co});iconTemplate;templates=jV(Lt);_iconTemplate;_componentStyle=m(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=vh(e)))(n||e)}})();static ɵcmp=Xb({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(py(C,n.templates,Lt,4),dy(C,Y,4)),o&2){gT();let _;pT(_=hT())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(Jm(`data-p`,n.dataP),xT(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[YT([W,{provide:X,useExisting:e},{provide:it,useExisting:e}]),iS([ui]),$m],ngContentSelectors:Z,decls:5,vars:6,consts:[[`aria-hidden`,`true`,3,`class`,`pBind`],[3,`pBind`],[`aria-hidden`,`true`,3,`class`,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(lT(),dT(0),YS(1,te,1,1),YS(2,ie,2,4,`span`,0),ks(3,`span`,1),$T(4),Tl()),o&2&&(dw(),KS(!n.iconTemplate&&!n._iconTemplate?1:-1),dw(),KS(n.iconTemplate||n._iconTemplate?2:-1),dw(),xT(n.cx(`label`)),ey(`pBind`,n.ptm(`label`)),dw(),Ny(n.value()))},dependencies:[PM,OM,kM,Ct,ui],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=El({type:e});static ɵinj=Ti({imports:[re,Ct,Ct]})}return e})();export{re as n,ke as t};