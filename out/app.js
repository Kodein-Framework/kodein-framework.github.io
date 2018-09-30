if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var numberToInt = Kotlin.numberToInt;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_8cymmc$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  function main$lambda(it) {
    main_0();
    return Unit;
  }
  function main(args) {
    window.onload = main$lambda;
  }
  var Math_0 = Math;
  function main$setHeaderPos(closure$body, closure$headerDiv, closure$headerIsSmall, closure$headerLogoDiv, closure$headerLogoImg, closure$headerTitle, closure$headerSubtitle) {
    return function (isFirst) {
      if (isFirst === void 0)
        isFirst = false;
      if (isFirst || closure$body.scrollTop < 585 || !equals(closure$headerDiv.style.height, '40px')) {
        var b = 585 - numberToInt(closure$body.scrollTop) | 0;
        var height = Math_0.max(40, b);
        closure$headerDiv.style.height = height.toString() + 'px';
        var scroll = 585 - height | 0;
        closure$headerDiv.style.backgroundPosition = 'center ' + -(scroll / 2.9) + 'px';
        if (height <= 165 && !closure$headerIsSmall.v) {
          closure$headerIsSmall.v = true;
          if (!isFirst) {
            addClass(closure$headerLogoDiv, ['transition']);
            addClass(closure$headerLogoImg, ['transition']);
            addClass(closure$headerTitle, ['transition']);
            addClass(closure$headerSubtitle, ['transition']);
          }
          addClass(closure$headerDiv, ['small']);
        }
         else if (height > 165 && closure$headerIsSmall.v) {
          closure$headerIsSmall.v = false;
          if (!isFirst) {
            addClass(closure$headerLogoDiv, ['transition']);
            addClass(closure$headerLogoImg, ['transition']);
            addClass(closure$headerTitle, ['transition']);
            addClass(closure$headerSubtitle, ['transition']);
          }
          removeClass(closure$headerDiv, ['small']);
        }
      }
    };
  }
  function main$setPlatformsPos(closure$body, closure$platformsDiv) {
    return function () {
      if (closure$body.scrollTop < 1170) {
        closure$platformsDiv.style.bottom = 'calc(3em - ' + closure$body.scrollTop / 4.5 + 'px)';
      }
    };
  }
  function main$setFooterPos(closure$footerShadowDiv, closure$body, closure$footerDiv, closure$footerIsSmall, closure$footerLogoDiv, closure$footerLogoImg, closure$footerTitle, closure$footerSubtitle) {
    return function (isFirst) {
      if (isFirst === void 0)
        isFirst = false;
      var startScroll = closure$footerShadowDiv.offsetTop - window.innerHeight | 0;
      var b = numberToInt(closure$body.scrollTop - startScroll);
      var height = Math_0.max(30, b);
      closure$footerDiv.style.height = height.toString() + 'px';
      if (height <= 120 && !closure$footerIsSmall.v) {
        closure$footerIsSmall.v = true;
        if (!isFirst) {
          addClass(closure$footerLogoDiv, ['transition']);
          addClass(closure$footerLogoImg, ['transition']);
          addClass(closure$footerTitle, ['transition']);
          addClass(closure$footerSubtitle, ['transition']);
        }
        addClass(closure$footerDiv, ['small']);
      }
       else if (height > 120 && closure$footerIsSmall.v) {
        closure$footerIsSmall.v = false;
        if (!isFirst) {
          addClass(closure$footerLogoDiv, ['transition']);
          addClass(closure$footerLogoImg, ['transition']);
          addClass(closure$footerTitle, ['transition']);
          addClass(closure$footerSubtitle, ['transition']);
        }
        removeClass(closure$footerDiv, ['small']);
      }
    };
  }
  function main$setbuiltByPos(closure$footerShadowDiv, closure$body, closure$builtBy) {
    return function () {
      var startScroll = closure$footerShadowDiv.offsetTop - window.innerHeight | 0;
      if (closure$body.scrollTop > (startScroll - 700 | 0)) {
        var delta = closure$body.scrollTop - startScroll - 350;
        closure$builtBy.style.top = 'calc(1.5em + ' + delta / 3.5 + 'px)';
      }
    };
  }
  function main$lambda_0(closure$setHeaderPos, closure$setPlatformsPos, closure$setFooterPos, closure$setbuiltByPos) {
    return function (it) {
      closure$setHeaderPos();
      closure$setPlatformsPos();
      closure$setFooterPos();
      closure$setbuiltByPos();
      return Unit;
    };
  }
  function main$lambda$lambda() {
    return 200.0;
  }
  function main$lambda$lambda_0(closure$anchor) {
    return function () {
      return closure$anchor.offsetTop - 60.0;
    };
  }
  function main$lambda$lambda_1(closure$offset) {
    return function (it) {
      var tmp$ = window;
      var top = closure$offset();
      var behavior = 'smooth';
      if (behavior === void 0) {
        behavior = 'auto';
      }
      var o = {};
      o['left'] = 0.0;
      o['top'] = top;
      o['behavior'] = behavior;
      tmp$.scrollTo(o);
      return false;
    };
  }
  function main$checkOffset$lambda(closure$checkOffset) {
    return function () {
      closure$checkOffset();
      return Unit;
    };
  }
  function main$checkOffset(closure$footerShadowDiv, closure$setFooterPos, closure$setbuiltByPos) {
    return function closure$checkOffset() {
      if (closure$footerShadowDiv.offsetTop !== 0) {
        closure$setFooterPos();
        closure$setbuiltByPos();
      }
       else {
        window.setTimeout(main$checkOffset$lambda(closure$checkOffset), 1);
      }
    };
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function main_0() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    var body = ensureNotNull(document.body);
    var headerDiv = Kotlin.isType(tmp$ = ensureNotNull(document.querySelector('div#header')), HTMLElement) ? tmp$ : throwCCE();
    var headerLogoDiv = Kotlin.isType(tmp$_0 = ensureNotNull(document.querySelector('div#header div.logo')), HTMLElement) ? tmp$_0 : throwCCE();
    var headerLogoImg = Kotlin.isType(tmp$_1 = ensureNotNull(document.querySelector('div#header div.logo img.logo-img')), HTMLElement) ? tmp$_1 : throwCCE();
    var headerTitle = Kotlin.isType(tmp$_2 = ensureNotNull(document.querySelector('div#header div.logo h1')), HTMLElement) ? tmp$_2 : throwCCE();
    var headerSubtitle = Kotlin.isType(tmp$_3 = ensureNotNull(document.querySelector('div#header div.logo h2')), HTMLElement) ? tmp$_3 : throwCCE();
    var headerIsSmall = {v: false};
    var setHeaderPos = main$setHeaderPos(body, headerDiv, headerIsSmall, headerLogoDiv, headerLogoImg, headerTitle, headerSubtitle);
    setHeaderPos(true);
    var platformsDiv = Kotlin.isType(tmp$_4 = ensureNotNull(document.querySelector('div#platforms')), HTMLElement) ? tmp$_4 : throwCCE();
    var setPlatformsPos = main$setPlatformsPos(body, platformsDiv);
    setPlatformsPos();
    var footerDiv = Kotlin.isType(tmp$_5 = ensureNotNull(document.querySelector('div#footer')), HTMLElement) ? tmp$_5 : throwCCE();
    var footerLogoDiv = Kotlin.isType(tmp$_6 = ensureNotNull(document.querySelector('div#footer div.logo')), HTMLElement) ? tmp$_6 : throwCCE();
    var footerLogoImg = Kotlin.isType(tmp$_7 = ensureNotNull(document.querySelector('div#footer div.logo img.logo-img')), HTMLElement) ? tmp$_7 : throwCCE();
    var footerTitle = Kotlin.isType(tmp$_8 = ensureNotNull(document.querySelector('div#footer div.logo h1')), HTMLElement) ? tmp$_8 : throwCCE();
    var footerSubtitle = Kotlin.isType(tmp$_9 = ensureNotNull(document.querySelector('div#footer div.logo h2')), HTMLElement) ? tmp$_9 : throwCCE();
    var footerShadowDiv = Kotlin.isType(tmp$_10 = ensureNotNull(document.querySelector('span#footer-shadow')), HTMLElement) ? tmp$_10 : throwCCE();
    var footerIsSmall = {v: true};
    var setFooterPos = main$setFooterPos(footerShadowDiv, body, footerDiv, footerIsSmall, footerLogoDiv, footerLogoImg, footerTitle, footerSubtitle);
    setFooterPos(true);
    var builtBy = Kotlin.isType(tmp$_11 = ensureNotNull(document.querySelector('div#footer h3')), HTMLElement) ? tmp$_11 : throwCCE();
    var setbuiltByPos = main$setbuiltByPos(footerShadowDiv, body, builtBy);
    setbuiltByPos();
    document.onscroll = main$lambda_0(setHeaderPos, setPlatformsPos, setFooterPos, setbuiltByPos);
    var $receiver = asList(document.querySelectorAll('a.goto'));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_13;
    tmp$_13 = $receiver.iterator();
    while (tmp$_13.hasNext()) {
      var item = tmp$_13.next();
      var tmp$_14 = destination.add_11rb$;
      var transform$result;
      var tmp$_15, tmp$_16;
      Kotlin.isType(tmp$_15 = item, HTMLAnchorElement) ? tmp$_15 : throwCCE();
      var id = substringAfter(item.href, 35);
      if (isBlank(id)) {
        transform$result = to(item, main$lambda$lambda);
      }
       else {
        var anchor = Kotlin.isType(tmp$_16 = document.getElementById(id), HTMLElement) ? tmp$_16 : throwCCE();
        transform$result = to(item, main$lambda$lambda_0(anchor));
      }
      tmp$_14.call(destination, transform$result);
    }
    var anchors = destination;
    var tmp$_17;
    tmp$_17 = anchors.iterator();
    while (tmp$_17.hasNext()) {
      var element = tmp$_17.next();
      var el = element.component1()
      , offset = element.component2();
      el.onclick = main$lambda$lambda_1(offset);
    }
    var strip = Kotlin.isType(tmp$_12 = document.querySelector('div#strip'), HTMLElement) ? tmp$_12 : throwCCE();
    strip.style.display = 'block';
    var checkOffset = main$checkOffset(footerShadowDiv, setFooterPos, setbuiltByPos);
    checkOffset();
  }
  var package$org = _.org || (_.org = {});
  var package$kodein = package$org.kodein || (package$org.kodein = {});
  package$kodein.main_kand9s$ = main;
  package$kodein.main = main_0;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin);

//# sourceMappingURL=app.js.map
