import{Ai as xT,B as JS,Bn as ey,Cr as ks,Ei as vh,Et as QS,Ft as S,H as Jf,Ht as Tl,J as KS,Jr as oy,Kt as Um,Nn as dw,On as cT,Pn as dy,Pr as mT,U as Jm,V as JT,Vt as Ti,Xr as pT,an as Xb,br as kM,cn as YS,dr as iS,i as $m,jr as m,kn as c_,ln as YT,mr as j,qn as gT,r as $T,rn as XS,ti as py,tr as hT,ut as Ny,vr as jV,vt as PM,w as El,xr as kV,yi as ty,yt as PV}from"./chunk-CVOhy15q.js";import{d as _,g as ui,m as it,n as Ct,o as Lt,p as ee}from"./chunk-CVZwBfsF.js";import{i as lo,l as Hn,n as af,r as ho,u as Vn}from"./main-F33QNKZI.js";import"./chunk-C1txyDJO.js";import{a as ke,i as Xi,n as Qt,o as mn,r as Ri,s as xe,t as Kt}from"./chunk-BMzwWu0r.js";import{n as re,t as ke$1}from"./chunk-BBbRJESu.js";var v4=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var h4=[`content`];var b4=[`opposite`];var S4=[`marker`];var k=n=>({$implicit:n});function _4(n,l){n&1&&oy(0)}function y4(n,l){n&1&&oy(0)}function B4(n,l){if(n&1&&Um(0,y4,1,0,`ng-container`,3),n&2){let i=cT().$implicit,r=cT();ey(`ngTemplateOutlet`,r.markerTemplate||r._markerTemplate)(`ngTemplateOutletContext`,JT(2,k,i))}}function P4(n,l){if(n&1&&ty(0,`div`,2),n&2){let i=cT(2);xT(i.cx(`eventMarker`)),ey(`pBind`,i.ptm(`eventMarker`)),Jm(`data-p`,i.dataP)}}function A4(n,l){if(n&1&&ty(0,`div`,2),n&2){let i=cT(2);xT(i.cx(`eventConnector`)),ey(`pBind`,i.ptm(`eventConnector`)),Jm(`data-p`,i.dataP)}}function M4(n,l){n&1&&oy(0)}function k4(n,l){if(n&1&&(ks(0,`div`,1)(1,`div`,2),Um(2,_4,1,0,`ng-container`,3),Tl(),ks(3,`div`,2),YS(4,B4,1,4,`ng-container`)(5,P4,1,4,`div`,4),YS(6,A4,1,4,`div`,4),Tl(),ks(7,`div`,2),Um(8,M4,1,0,`ng-container`,3),Tl()()),n&2){let i=l.$implicit,r=l.$index,a=l.$count,o=cT();xT(o.cx(`event`)),ey(`pBind`,o.ptm(`event`)),Jm(`data-p`,o.dataP),dw(),xT(o.cx(`eventOpposite`)),ey(`pBind`,o.ptm(`eventOpposite`)),Jm(`data-p`,o.dataP),dw(),ey(`ngTemplateOutlet`,o.oppositeTemplate()||o._oppositeTemplate)(`ngTemplateOutletContext`,JT(22,k,i)),dw(),xT(o.cx(`eventSeparator`)),ey(`pBind`,o.ptm(`eventSeparator`)),Jm(`data-p`,o.dataP),dw(),KS(o.markerTemplate||o._markerTemplate?4:5),dw(2),KS(r!==a-1?6:-1),dw(),xT(o.cx(`eventContent`)),ey(`pBind`,o.ptm(`eventContent`)),Jm(`data-p`,o.dataP),dw(),ey(`ngTemplateOutlet`,o.contentTemplate()||o._contentTemplate)(`ngTemplateOutletContext`,JT(24,k,i))}}var w4={root:({instance:n})=>[`p-timeline p-component`,`p-timeline-`+n.align(),`p-timeline-`+n.layout()],event:`p-timeline-event`,eventOpposite:`p-timeline-event-opposite`,eventSeparator:`p-timeline-event-separator`,eventMarker:`p-timeline-event-marker`,eventConnector:`p-timeline-event-connector`,eventContent:`p-timeline-event-content`};var D4=(()=>{class n extends _{name=`timeline`;style=v4;classes=w4;static ɵfac=(()=>{let i;return function(a){return(i||(i=vh(n)))(a||n)}})();static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var C4=new S(`TIMELINE_INSTANCE`);var w=(()=>{class n extends ee{componentName=`Timeline`;bindDirectiveInstance=m(ui,{self:!0});$pcTimeline=m(C4,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}value=kV();styleClass=kV();align=kV(`left`);layout=kV(`vertical`);ariaLabel=kV();ariaLabelledBy=kV();contentTemplate=PV(`content`,{descendants:!1});oppositeTemplate=PV(`opposite`,{descendants:!1});markerTemplate;templates=jV(Lt);_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=m(D4);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates().forEach(i=>{switch(i.getType()){case`content`:this._contentTemplate=i.template;break;case`opposite`:this._oppositeTemplate=i.template;break;case`marker`:this._markerTemplate=i.template;break}})}get dataP(){return this.cn({[this.layout()]:this.layout(),[this.align()]:this.align()})}static ɵfac=(()=>{let i;return function(a){return(i||(i=vh(n)))(a||n)}})();static ɵcmp=Xb({type:n,selectors:[[`p-timeline`]],contentQueries:function(r,a,o){if(r&1&&(py(o,a.contentTemplate,h4,4)(o,a.oppositeTemplate,b4,4)(o,a.templates,Lt,4),dy(o,S4,4)),r&2){gT(3);let O;pT(O=hT())&&(a.markerTemplate=O.first)}},hostVars:6,hostBindings:function(r,a){r&2&&(Jm(`data-p`,a.dataP)(`role`,`list`)(`aria-label`,a.ariaLabelledBy()?void 0:a.ariaLabel())(`aria-labelledby`,a.ariaLabelledBy()),xT(a.cn(a.cx(`root`),a.styleClass())))},inputs:{value:[1,`value`],styleClass:[1,`styleClass`],align:[1,`align`],layout:[1,`layout`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},features:[YT([D4,{provide:C4,useExisting:n},{provide:it,useExisting:n}]),iS([ui]),$m],decls:2,vars:0,consts:[[`role`,`listitem`,3,`pBind`,`class`],[`role`,`listitem`,3,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`pBind`,`class`]],template:function(r,a){r&1&&XS(0,k4,9,26,`div`,0,QS),r&2&&JS(a.value())},dependencies:[PM,kM,Ct,ui],encapsulation:2})}return n})();var x4=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵmod=El({type:n});static ɵinj=Ti({imports:[w,Ct,Ct]})}return n})();var N4=(n,l)=>l.question;function T4(n,l){if(n&1&&(ks(0,`span`,103),$T(1),Tl(),ks(2,`p`),$T(3),Tl()),n&2){let i=l.$implicit,r=cT();dw(),Ny(i.number),dw(2),Ny(r.translateService.translate(i.title)())}}function z4(n,l){if(n&1&&(ks(0,`p-accordionpanel`,96)(1,`p-accordionheader`,104),$T(2),Tl(),ks(3,`p-accordioncontent`,null,1),$T(5),Tl()()),n&2){let i=l.$implicit,r=mT(4),a=cT();ey(`value`,i.question),dw(),ey(`panel`,r),dw(),Ny(a.translateService.translate(i.question)()),dw(3),Ny(a.translateService.translate(i.answer)())}}var f4=class n{translateService=m(ho);steps=[{number:`01`,title:`Бронювання маршруту`},{number:`02`,title:`Виїзд із Кам'янця-Подільського`},{number:`03`,title:`Інструктаж та підготовка`},{number:`04`,title:`SUP-подорож Дністром`},{number:`05`,title:`Фініш маршруту`},{number:`06`,title:`Повернення до Кам'янця`}];faq=[{question:`Чи потрібен досвід?`,answer:`Ні, ми проводимо детальний інструктаж перед стартом, і маршрути підходять навіть новачкам.`},{question:`Чи безпечно це?`,answer:`Так, кожен учасник отримує рятувальний жилет, а інструктор супроводжує групу протягом усього маршруту.`},{question:`Що взяти із собою?`,answer:`Зручний одяг, який не шкода намочити, змінний одяг, воду та гарний настрій — решту спорядження надаємо ми.`},{question:`Чи можна дітям?`,answer:`Так, дітям від 7 років, у супроводі дорослих та за погодженням з організатором — точні вагові обмеження уточнюйте при бронюванні.`},{question:`Яка максимальна кількість людей?`,answer:`Ми працюємо міні-групами до 4 осіб, щоб пригода була комфортною та безпечною для кожного.`}];constructor(){Jf(()=>{this.translateService.loadExtraTranslation(`/data/landing/i18n/`,{language:this.translateService.language()})})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Xb({type:n,selectors:[[`ng-component`]],decls:219,vars:1,consts:[[`content`,``],[`content`,`ngAccordionPanel`],[1,`relative`,`overflow-hidden`],[`aria-hidden`,`true`,1,`landing-mesh`],[`aria-hidden`,`true`,1,`landing-orb`,`landing-orb--primary`],[`aria-hidden`,`true`,1,`landing-orb`,`landing-orb--secondary`],[1,`relative`,`mx-auto`,`max-w-[var(--container)]`,`px-4`,`py-10`,`sm:px-6`,`sm:py-16`],[`styleClass`,`hero-card`],[`translate`,`SUP пригоди на Дністрі`,1,`text-sm`,`font-semibold`,`uppercase`,`tracking-[0.22em]`,`text-[var(--c-primary)]`],[1,`mt-5`,`grid`,`gap-10`,`lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]`,`lg:items-end`],[`translate`,`Відкрий Дністер по-новому`,1,`max-w-4xl`,`text-4xl`,`font-semibold`,`tracking-[-0.04em]`,`text-[var(--c-text-strong)]`,`sm:text-5xl`,`lg:text-7xl`],[`translate`,`Організовуємо SUP-пригоди на найкрасивіших маршрутах Дністра. Ми доставимо вас до старту, проведемо інструктаж, забезпечимо всім необхідним спорядженням та зустрінемо на фініші. Вам залишається лише насолоджуватися природою та відпочинком.`,1,`mt-6`,`max-w-3xl`,`text-base`,`leading-8`,`text-[var(--c-text)]`,`sm:text-lg`],[1,`mt-8`,`flex`,`flex-wrap`,`gap-3`],[`pButton`,``,`rounded`,``,`href`,`#routes`,1,`theme-focus`],[`pButton`,``,`rounded`,``,`outlined`,``,`routerLink`,`/book`,1,`theme-focus`],[1,`rounded-[calc(var(--radius-card)*1.8)]`,`border`,`border-[var(--c-border)]`,`bg-[linear-gradient(145deg,color-mix(in_srgb,var(--c-primary)_18%,var(--c-bg-primary)),var(--c-bg-primary))]`,`p-6`],[`translate`,`Старт пригоди`,1,`text-xs`,`font-semibold`,`uppercase`,`tracking-[0.18em]`,`text-[var(--c-text-muted)]`],[`translate`,`Кам'янець-Подільський`,1,`mt-3`,`text-2xl`,`font-semibold`,`text-[var(--c-text-strong)]`],[`translate`,`Трансфер до Дністра та повернення після завершення маршруту.`,1,`mt-3`,`text-sm`,`leading-7`,`text-[var(--c-text)]`],[1,`mt-10`,`flex`,`flex-wrap`,`gap-3`],[`styleClass`,`advantage-tag`,`value`,`🚐 Трансфер з Кам'янця-Подільського`],[`styleClass`,`advantage-tag`,`value`,`🏄 SUP-дошка та спорядження`],[`styleClass`,`advantage-tag`,`value`,`👥 Міні-групи до 4 осіб`],[`styleClass`,`advantage-tag`,`value`,`🦺 Інструктаж і жилет`],[`styleClass`,`advantage-tag`,`value`,`📸 Фото та відео`],[`styleClass`,`advantage-tag`,`value`,`🌊 Авторські маршрути Дністром`],[1,`page-section`],[1,`section-panel`,`grid`,`gap-8`,`lg:grid-cols-[0.75fr_1.25fr]`,`lg:gap-14`],[`translate`,`Про нас`,1,`section-kicker`],[`translate`,`Що таке KP - SUP - KP?`,1,`section-title`],[1,`space-y-5`,`text-base`,`leading-8`,`text-[var(--c-text)]`],[`translate`,`KP - SUP - KP — це SUP-пригоди для тих, хто хоче побачити Дністер з іншого боку. Ми створюємо готові маршрути різної складності, організовуємо трансфер із Кам'янця-Подільського, забезпечуємо спорядження та супроводжуємо учасників протягом усієї подорожі.`],[`translate`,`Наш формат — невеликі групи до 4 осіб, що дозволяє зробити кожну пригоду комфортною, безпечною та максимально атмосферною.`],[`id`,`routes`,1,`page-section`,`scroll-mt-24`],[1,`section-heading`],[`translate`,`SUP на Дністрі`,1,`section-kicker`],[`translate`,`Наші маршрути`,1,`section-title`],[`translate`,`Ми постійно досліджуємо нові ділянки Дністра та додаємо перевірені маршрути. Кожен маршрут має власну довжину, тривалість, складність та вартість.`,1,`section-description`],[1,`route-list`,`mt-8`,`grid`,`gap-4`,`md:grid-cols-3`],[`styleClass`,`route-card`],[`translate`,`Устя — Усамітнений`],[`translate`,`Від пляжу в Усті до кемпінгу «Усамітнений»`],[`pButton`,``,`variant`,`text`,`routerLink`,`/book`,`translate`,`Забронювати`,1,`theme-focus`],[`translate`,`Субічський монастир — Арк`],[`translate`,`Від скельного монастиря до бази відпочинку Арк`],[`translate`,`Sunrise — Bakota House`],[`translate`,`Від садиби Sunrise до Bakota House`],[`styleClass`,`points-promo-card points-promo-card--subtle mt-8`],[1,`points-promo`,`grid`,`gap-6`,`md:grid-cols-[1.1fr_1fr]`,`md:items-center`],[`translate`,`SUP Points`],[`translate`,`Заробляй до 100 балів за одну поїздку`],[`translate`,`Знімай свої пригоди, виконуй SUP-челенджі та заробляй бали.`],[1,`mt-4`],[`pButton`,``,`rounded`,``,`outlined`,``,`routerLink`,`/points`,1,`theme-focus`],[`aria-label`,`Приклади SUP-челенджів`,1,`points-promo__examples`],[`value`,`20 балів`],[`value`,`35 балів`],[`severity`,`warn`,`value`,`100 балів`],[`translate`,`Наші переваги`,1,`section-kicker`],[`translate`,`Чому обирають KP - SUP - KP?`,1,`section-title`],[1,`mt-8`,`grid`,`gap-4`,`sm:grid-cols-2`,`lg:grid-cols-3`],[`styleClass`,`feature-card`],[`aria-hidden`,`true`],[`translate`,`Невеликі групи`],[`translate`,`Перевірені маршрути`],[`translate`,`Безпечне спорядження`],[`translate`,`Трансфер включено`],[`translate`,`Красиві локації`],[`translate`,`Допомога новачкам`],[1,`section-panel`],[`translate`,`Від старту до фінішу`,1,`section-kicker`],[`translate`,`Як проходить пригода?`,1,`section-title`],[`styleClass`,`mt-8 process-timeline`,`layout`,`horizontal`,3,`value`],[`translate`,`Все необхідне`,1,`section-kicker`],[`translate`,`Що входить у вартість?`,1,`section-title`],[1,`mt-8`,`grid`,`gap-3`,`sm:grid-cols-2`,`lg:grid-cols-4`],[`translate`,`SUP-дошка`,1,`included-item`],[`translate`,`Весло`,1,`included-item`],[`translate`,`Рятувальний жилет`,1,`included-item`],[`translate`,`Гермомішок`,1,`included-item`],[`translate`,`Інструктаж`,1,`included-item`],[`translate`,`Трансфер`,1,`included-item`],[`translate`,`Супровід`,1,`included-item`],[`translate`,`Фото та відео (за наявності)`,1,`included-item`],[1,`section-panel`,`gallery-panel`],[`translate`,`Дністер очима учасників`,1,`section-kicker`],[`translate`,`Галерея пригод`,1,`section-title`],[`translate`,`Кожен маршрут — це нові краєвиди, чиста вода, скелі Дністра та незабутні емоції. Перегляньте фотографії наших пригод.`,1,`section-description`],[1,`mt-8`,`grid`,`min-h-56`,`place-items-center`,`rounded-[calc(var(--radius-card)*1.6)]`,`border`,`border-[color:color-mix(in_srgb,var(--c-primary)_32%,var(--c-border))]`,`bg-[linear-gradient(145deg,color-mix(in_srgb,var(--c-primary)_22%,transparent),color-mix(in_srgb,var(--c-bg-primary)_88%,transparent))]`,`text-center`],[1,`p-8`],[`aria-hidden`,`true`,1,`text-5xl`],[`translate`,`Нові фото пригод незабаром`,1,`mt-4`,`font-semibold`,`text-[var(--c-text-strong)]`],[`id`,`faq`,1,`page-section`,`scroll-mt-24`],[`translate`,`Перед подорожжю`,1,`section-kicker`],[`translate`,`Поширені запитання`,1,`section-title`],[1,`mt-8`,`block`],[3,`value`],[`pButton`,``,`rounded`,``,`outlined`,``,`href`,`mailto:info@itkamianets.com?subject=Запитання%20про%20SUP-пригоду`,1,`theme-focus`,`mt-6`],[`id`,`booking`,1,`page-section`,`scroll-mt-24`,`pb-16`,`sm:pb-24`],[1,`rounded-[calc(var(--radius-card)*2.4)]`,`bg-[var(--c-text-strong)]`,`p-8`,`text-center`,`text-[var(--c-bg-primary)]`,`shadow-[var(--shadow-md)]`,`sm:p-12`,`lg:p-16`],[`translate`,`Готові до пригоди?`,1,`text-3xl`,`font-semibold`,`tracking-[-0.03em]`,`sm:text-5xl`],[`translate`,`Обирайте маршрут, бронюйте місце та відкривайте Дністер разом із KP - SUP - KP.`,1,`mx-auto`,`mt-5`,`max-w-2xl`,`text-base`,`leading-8`,`opacity-80`],[1,`mt-8`,`flex`,`flex-wrap`,`justify-center`,`gap-3`],[1,`process-timeline__number`],[3,`panel`]],template:function(i,r){i&1&&(ks(0,`div`,2),ty(1,`div`,3)(2,`div`,4)(3,`div`,5),ks(4,`section`,6)(5,`p-card`,7)(6,`h1`,8),$T(7,` SUP пригоди на Дністрі `),Tl(),ks(8,`div`,9)(9,`div`)(10,`h2`,10),$T(11,` Відкрий Дністер по-новому `),Tl(),ks(12,`p`,11),$T(13,` Організовуємо SUP-пригоди на найкрасивіших маршрутах Дністра. Ми доставимо вас до старту, проведемо інструктаж, забезпечимо всім необхідним спорядженням та зустрінемо на фініші. Вам залишається лише насолоджуватися природою та відпочинком. `),Tl(),ks(14,`div`,12)(15,`a`,13),$T(16,`Обрати маршрут`),Tl(),ks(17,`a`,14),$T(18,`Забронювати`),Tl()()(),ks(19,`div`,15)(20,`p`,16),$T(21,` Старт пригоди `),Tl(),ks(22,`p`,17),$T(23,` Кам'янець-Подільський `),Tl(),ks(24,`p`,18),$T(25,` Трансфер до Дністра та повернення після завершення маршруту. `),Tl()()(),ks(26,`ul`,19)(27,`li`),ty(28,`p-tag`,20),Tl(),ks(29,`li`),ty(30,`p-tag`,21),Tl(),ks(31,`li`),ty(32,`p-tag`,22),Tl(),ks(33,`li`),ty(34,`p-tag`,23),Tl(),ks(35,`li`),ty(36,`p-tag`,24),Tl(),ks(37,`li`),ty(38,`p-tag`,25),Tl()()()(),ks(39,`section`,26)(40,`div`,27)(41,`div`)(42,`p`,28),$T(43,`Про нас`),Tl(),ks(44,`h2`,29),$T(45,` Що таке KP - SUP - KP? `),Tl()(),ks(46,`div`,30)(47,`p`,31),$T(48,` KP - SUP - KP — це SUP-пригоди для тих, хто хоче побачити Дністер з іншого боку. Ми створюємо готові маршрути різної складності, організовуємо трансфер із Кам'янця-Подільського, забезпечуємо спорядження та супроводжуємо учасників протягом усієї подорожі. `),Tl(),ks(49,`p`,32),$T(50,` Наш формат — невеликі групи до 4 осіб, що дозволяє зробити кожну пригоду комфортною, безпечною та максимально атмосферною. `),Tl()()()(),ks(51,`section`,33)(52,`div`,34)(53,`p`,35),$T(54,`SUP на Дністрі`),Tl(),ks(55,`h2`,36),$T(56,`Наші маршрути`),Tl(),ks(57,`p`,37),$T(58,` Ми постійно досліджуємо нові ділянки Дністра та додаємо перевірені маршрути. Кожен маршрут має власну довжину, тривалість, складність та вартість. `),Tl()(),ks(59,`div`,38)(60,`p-card`,39)(61,`p`),$T(62,`01`),Tl(),ks(63,`h3`,40),$T(64,`Устя — Усамітнений`),Tl(),ks(65,`span`,41),$T(66,`Від пляжу в Усті до кемпінгу «Усамітнений»`),Tl(),ks(67,`a`,42),$T(68,`Забронювати`),Tl()(),ks(69,`p-card`,39)(70,`p`),$T(71,`02`),Tl(),ks(72,`h3`,43),$T(73,`Субічський монастир — Арк`),Tl(),ks(74,`span`,44),$T(75,`Від скельного монастиря до бази відпочинку Арк`),Tl(),ks(76,`a`,42),$T(77,`Забронювати`),Tl()(),ks(78,`p-card`,39)(79,`p`),$T(80,`03`),Tl(),ks(81,`h3`,45),$T(82,`Sunrise — Bakota House`),Tl(),ks(83,`span`,46),$T(84,`Від садиби Sunrise до Bakota House`),Tl(),ks(85,`a`,42),$T(86,`Забронювати`),Tl()()(),ks(87,`p-card`,47)(88,`div`,48)(89,`div`)(90,`p`,49),$T(91,`SUP Points`),Tl(),ks(92,`h3`,50),$T(93,` Заробляй до 100 балів за одну поїздку `),Tl(),ks(94,`span`,51),$T(95,` Знімай свої пригоди, виконуй SUP-челенджі та заробляй бали. `),Tl(),ks(96,`div`,52)(97,`a`,53),$T(98,`Переглянути всі 100 челенджів`),Tl()()(),ks(99,`div`,54)(100,`p`)(101,`b`),$T(102,`SUP → вода`),Tl(),ty(103,`p-tag`,55),Tl(),ks(104,`p`)(105,`b`),$T(106,`360° на SUP`),Tl(),ty(107,`p-tag`,56),Tl(),ks(108,`p`)(109,`b`),$T(110,`Master Challenge`),Tl(),ty(111,`p-tag`,57),Tl()()()()(),ks(112,`section`,26)(113,`div`,34)(114,`p`,58),$T(115,`Наші переваги`),Tl(),ks(116,`h2`,59),$T(117,` Чому обирають KP - SUP - KP? `),Tl()(),ks(118,`div`,60)(119,`p-card`,61)(120,`span`,62),$T(121,`👥`),Tl(),ks(122,`h3`,63),$T(123,`Невеликі групи`),Tl()(),ks(124,`p-card`,61)(125,`span`,62),$T(126,`🧭`),Tl(),ks(127,`h3`,64),$T(128,`Перевірені маршрути`),Tl()(),ks(129,`p-card`,61)(130,`span`,62),$T(131,`🦺`),Tl(),ks(132,`h3`,65),$T(133,`Безпечне спорядження`),Tl()(),ks(134,`p-card`,61)(135,`span`,62),$T(136,`🚐`),Tl(),ks(137,`h3`,66),$T(138,`Трансфер включено`),Tl()(),ks(139,`p-card`,61)(140,`span`,62),$T(141,`🏞️`),Tl(),ks(142,`h3`,67),$T(143,`Красиві локації`),Tl()(),ks(144,`p-card`,61)(145,`span`,62),$T(146,`🤝`),Tl(),ks(147,`h3`,68),$T(148,`Допомога новачкам`),Tl()()()(),ks(149,`section`,26)(150,`div`,69)(151,`div`,34)(152,`p`,70),$T(153,`Від старту до фінішу`),Tl(),ks(154,`h2`,71),$T(155,` Як проходить пригода? `),Tl()(),ks(156,`p-timeline`,72),Um(157,T4,4,2,`ng-template`,null,0,c_),Tl()()(),ks(159,`section`,26)(160,`div`,34)(161,`p`,73),$T(162,`Все необхідне`),Tl(),ks(163,`h2`,74),$T(164,`Що входить у вартість?`),Tl()(),ks(165,`ul`,75)(166,`li`,76),$T(167,`SUP-дошка`),Tl(),ks(168,`li`,77),$T(169,`Весло`),Tl(),ks(170,`li`,78),$T(171,`Рятувальний жилет`),Tl(),ks(172,`li`,79),$T(173,`Гермомішок`),Tl(),ks(174,`li`,80),$T(175,`Інструктаж`),Tl(),ks(176,`li`,81),$T(177,`Трансфер`),Tl(),ks(178,`li`,82),$T(179,`Супровід`),Tl(),ks(180,`li`,83),$T(181,` Фото та відео (за наявності) `),Tl()()(),ks(182,`section`,26)(183,`div`,84)(184,`div`,34)(185,`p`,85),$T(186,` Дністер очима учасників `),Tl(),ks(187,`h2`,86),$T(188,`Галерея пригод`),Tl(),ks(189,`p`,87),$T(190,` Кожен маршрут — це нові краєвиди, чиста вода, скелі Дністра та незабутні емоції. Перегляньте фотографії наших пригод. `),Tl()(),ks(191,`div`,88)(192,`div`,89)(193,`p`,90),$T(194,`🌊`),Tl(),ks(195,`p`,91),$T(196,` Нові фото пригод незабаром `),Tl()()()()(),ks(197,`section`,92)(198,`div`,34)(199,`p`,93),$T(200,`Перед подорожжю`),Tl(),ks(201,`h2`,94),$T(202,`Поширені запитання`),Tl()(),ks(203,`p-accordion`,95),XS(204,z4,6,4,`p-accordionpanel`,96,N4),Tl(),ks(206,`a`,97),$T(207,`Усі запитання`),Tl()(),ks(208,`section`,98)(209,`div`,99)(210,`h2`,100),$T(211,` Готові до пригоди? `),Tl(),ks(212,`p`,101),$T(213,` Обирайте маршрут, бронюйте місце та відкривайте Дністер разом із KP - SUP - KP. `),Tl(),ks(214,`div`,102)(215,`a`,13),$T(216,`Переглянути маршрути`),Tl(),ks(217,`a`,14),$T(218,`Забронювати`),Tl()()()()()),i&2&&(dw(156),ey(`value`,r.steps),dw(48),JS(r.faq))},dependencies:[lo,af,Ri,xe,ke,Kt,Qt,Hn,Vn,Xi,mn,ke$1,re,x4,w],styles:[`@charset "UTF-8";[_nghost-%COMP%]{display:block;min-height:100%;background:radial-gradient(circle at top left,color-mix(in srgb,var(--%NS%c-primary) 12%,transparent),transparent 28%),linear-gradient(180deg,var(--%NS%c-bg-primary) 0%,color-mix(in srgb,var(--%NS%c-bg-primary) 86%,var(--%NS%c-bg-secondary)) 100%);color:var(--%NS%c-text)}.landing-mesh[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:linear-gradient(color-mix(in srgb,var(--%NS%c-border) 58%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--%NS%c-border) 58%,transparent) 1px,transparent 1px);background-position:center;background-size:56px 56px;-webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,.75),transparent 88%);mask-image:linear-gradient(180deg,rgba(0,0,0,.75),transparent 88%);pointer-events:none}.landing-orb[_ngcontent-%COMP%]{position:absolute;border-radius:999px;filter:blur(40px);opacity:.7;pointer-events:none}.landing-orb--primary[_ngcontent-%COMP%]{top:3rem;right:min(12vw,8rem);height:16rem;width:16rem;background:color-mix(in srgb,var(--%NS%c-primary) 24%,transparent)}.landing-orb--secondary[_ngcontent-%COMP%]{left:-5rem;top:32rem;height:18rem;width:18rem;background:color-mix(in srgb,var(--%NS%c-secondary) 18%,transparent)}.page-section[_ngcontent-%COMP%]{position:relative;width:min(100%,var(--%NS%container));margin-inline:auto;padding:2.5rem 1rem}.section-panel[_ngcontent-%COMP%]{border:1px solid var(--%NS%c-border);border-radius:calc(var(--%NS%radius-card) * 2);background:color-mix(in srgb,var(--%NS%c-bg-secondary) 90%,transparent);padding:clamp(1.5rem,4vw,3rem);box-shadow:var(--%NS%shadow-sm)}.section-heading[_ngcontent-%COMP%]{max-width:48rem}.section-kicker[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--%NS%c-primary)}.section-title[_ngcontent-%COMP%]{margin-top:.75rem;font-size:clamp(1.875rem,5vw,3rem);font-weight:600;line-height:1.1;letter-spacing:-.035em;color:var(--%NS%c-text-strong)}.section-description[_ngcontent-%COMP%]{margin-top:1rem;font-size:1rem;line-height:1.8;color:var(--%NS%c-text)}.included-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;min-height:3.5rem;border:1px solid var(--%NS%c-border);border-radius:calc(var(--%NS%radius-card) * 1.2);background:color-mix(in srgb,var(--%NS%c-bg-primary) 82%,transparent);padding:.9rem 1rem;font-size:.875rem;font-weight:600;color:var(--%NS%c-text-strong)}.advantage-tag[_ngcontent-%COMP%]{font-size:.8125rem;font-weight:600;padding:.6rem .9rem}.hero-card[_ngcontent-%COMP%]{border-radius:calc(var(--%NS%radius-card) * 2.4)!important}.route-card[_ngcontent-%COMP%], .feature-card[_ngcontent-%COMP%], .points-promo-card[_ngcontent-%COMP%]{height:100%}.route-list[_ngcontent-%COMP%]{align-items:stretch}.route-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;letter-spacing:.16em;color:var(--%NS%c-primary)}.route-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.25rem;font-weight:600;color:var(--%NS%c-text-strong)}.route-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:.75rem;line-height:1.65;color:var(--%NS%c-text)}.points-promo-card[_ngcontent-%COMP%]{margin-top:2rem;border:1px solid color-mix(in srgb,var(--%NS%c-primary) 45%,var(--%NS%c-border))!important;background:color-mix(in srgb,var(--%NS%c-primary) 8%,var(--%NS%c-bg-secondary))!important}.points-promo-card--subtle[_ngcontent-%COMP%]{border:1px solid var(--%NS%c-border)!important;background:color-mix(in srgb,var(--%NS%c-bg-primary) 90%,transparent)!important;box-shadow:none!important}.points-promo[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:var(--%NS%c-primary);font-size:.75rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.points-promo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .points-promo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:.6rem;font-size:clamp(1.45rem,4vw,2rem);font-weight:700;color:var(--%NS%c-text-strong)}.points-promo-card--subtle[_ngcontent-%COMP%]   .points-promo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(1.1rem,2.4vw,1.35rem);font-weight:600}.points-promo[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;margin-top:.7rem;color:var(--%NS%c-text);line-height:1.6}.points-promo__examples[_ngcontent-%COMP%]{display:grid;gap:.5rem}.points-promo__examples[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;border-radius:.75rem;background:var(--%NS%c-bg-primary);padding:.7rem .8rem;color:var(--%NS%c-text-strong);font-size:.875rem}.points-promo__examples[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--%NS%c-primary);font-weight:800;white-space:nowrap}.route-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:auto;padding-top:1.5rem;font-size:.875rem;font-weight:700;color:var(--%NS%c-primary)}.feature-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.75rem}.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--%NS%c-text-strong)}.process-timeline[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.process-timeline__number[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;letter-spacing:.14em;color:var(--%NS%c-primary)}.process-timeline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:.5rem;font-weight:600;color:var(--%NS%c-text-strong)}.included-item[_ngcontent-%COMP%]:before{content:"\\2713";display:grid;height:1.5rem;width:1.5rem;flex:0 0 auto;place-items:center;border-radius:999px;background:color-mix(in srgb,var(--%NS%c-primary) 16%,transparent);color:var(--%NS%c-primary)}.gallery-panel[_ngcontent-%COMP%]{background:radial-gradient(circle at top right,color-mix(in srgb,var(--%NS%c-primary) 18%,transparent),transparent 35%),var(--%NS%c-bg-secondary)}@media(max-width:640px){.landing-mesh[_ngcontent-%COMP%]{background-size:42px 42px}.landing-orb--primary[_ngcontent-%COMP%]{right:-4rem;top:5rem;height:11rem;width:11rem}.landing-orb--secondary[_ngcontent-%COMP%]{left:-6rem;top:40rem;height:12rem;width:12rem}}@media(min-width:640px){.page-section[_ngcontent-%COMP%]{padding:3.5rem 1.5rem}}`]})};export{f4 as LandingComponent};