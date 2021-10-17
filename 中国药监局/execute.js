require("fake-indexeddb/auto");
var openDatabase = require('websql');
var fs = require('fs');
// npm install cookie
var cookieIns = require('cookie');
var canvas = require('canvas');
var dtaEventTarget = require('./simpleEventTarget').EventTarget
var navigator = require("./navigator").navigator;
var localStorage = require('./localStorage');
var sessionStorage = require('./sessionStorage');
var eval_js = require('./eval_js').eval_js
var fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const jsdom = require("jsdom");

index_code = fs.readFileSync("first_index.html", {
    encoding: "utf-8"
});
const {JSDOM} = jsdom;
const dom = new JSDOM(index_code, {
    url: "https://www.nmpa.gov.cn/xxgk/ggtg/index.html",
    referrer: "https://www.baidu.com/",
    contentType: "text/html",
    includeNodeLocations: true,
    pretendToBeVisual: true,
    resources: "usable",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
});

setTimeout.toString = function setTimeoutToString() {
    return 'function setTimeout() { [native code] }'
}
setInterval.toString = function setIntervalToString() {
    return 'function setInterval() { [native code] }'
}

let myChrome = {
    app: {
        InstallState: {},
        RunningState: {},
        getDetails: function () {
        },
        getIsInstalled: function () {
        },
        installState: function () {
        },
        isInstalled: false,
        runningState: function () {
        },

    },
    csi: function () {
        return {
            onloadT: new Date().getTime(),
            pageT: new Date().getTime() - timestamp,
            startE: new Date().getTime() - 356,
            tran: 15
        }
    },
    loadTimes: function () {
        return {
            commitLoadTime: new Date().getTime() - 356 + 127,
            connectionInfo: "h2",
            finishDocumentLoadTime: new Date().getTime(),
            finishLoadTime: new Date().getTime() + 124,
            firstPaintAfterLoadTime: 0,
            firstPaintTime: new Date().getTime() - 109,
            navigationType: "Other",
            npnNegotiatedProtocol: "h2",
            requestTime: new Date().getTime() - 356,
            startLoadTime: new Date().getTime() - 356,
            wasAlternateProtocolAvailable: false,
            wasFetchedViaSpdy: true,
            wasNpnNegotiated: true,


        }
    },
    runtime: {
        OnInstalledReason: {},
        OnRestartRequiredReason: {},
        PlatformArch: {},
        PlatformNaclArch: {},
        PlatformOs: {},
        RequestUpdateCheckStatus: {},
        connect: function (extensionId, connectInfo) {
            if (typeof extensionId !== 'number') {
                throw TypeError("Error in invocation of runtime.connect(optional string extensionId, optional object connectInfo): chrome.runtime.connect() called from a webpage must specify an Extension ID (string) for its first argument.")
            }
        },
        id: undefined,
        sendMessage: function () {
        },
    }
};

// window = global;
// Object.setPrototypeOf(window, dtaEventTarget.prototype);

global.window = global;
var Window = function(){};
global.Window = Window
Object.setPrototypeOf(window, Window.prototype);
Object.setPrototypeOf(Window.prototype, dtaEventTarget.prototype);
//
// console.log(window instanceof Window)
// console.log(window.addEventListener)

window.HTMLFormElement = dom.window.HTMLFormElement;
window.HTMLFrameSetElement = dom.window.HTMLFrameSetElement;
Object.defineProperty(window.HTMLFrameSetElement.prototype, 'hasPointerCapture', {
    value: function (){},
    enumerable: true
})
window.HTMLDocument = dom.window.HTMLDocument;
window.HTMLElement = dom.window.HTMLElement;
window.Math = Math;
window.parseFloat = parseFloat;
window.parseInt = parseInt;
window.isNaN = isNaN;
window.decodeURI = decodeURI;
window.decodeURIComponent = decodeURIComponent;
window.encodeURI = encodeURI;
window.escape = escape;
window.unescape = unescape;
window.eval = eval;
window.Date = Date;
window.getComputedStyle = function () {
};
window.toString = function windowToString() {
    return "[object Window]"
};
window.SVGPatternElement = function SVGPatternElement(){};
window.SVGGraphicsElement = function SVGGraphicsElement(){};
window.CloseEvent = function CloseEvent(){};
window.CanvasRenderingContext2D = canvas.CanvasRenderingContext2D;
window.BeforeInstallPromptEvent = function(){};
window.webkitRequestFileSystem = function() {};
window.performance = {
    "eventCounts": {},
    "memory": {},
    "navigation": {},
    "onresourcetimingbufferfull": null,
    "timeOrigin": "",
    "timing": {}
}
window.onmessage = null;
window.onerror = null;
window.external = dom.window.external;
window.defaultStatus = "";
window.chrome = myChrome;
window.SpeechSynthesisUtterance = function () {
};
window.ScreenOrientation = function () {
};
window.PerformancePaintTiming = function () {
};
window.OffscreenCanvasRenderingContext2D = function () {
};
window.MediaEncryptedEvent = function () {
};
window.Notification = function () {
};
window.Intl = dom.window.Intl;
window.CDATASection = dom.window.CDATASection;
HTMLFrameSetElement = function () {
};
HTMLFrameSetElement.prototype = {
    "hasPointerCapture": function () {
    },
    "webkitRequestFullScreen": function () {
    },
}
window.HTMLFrameSetElement = HTMLFrameSetElement;
Path2D = function () {
};
Path2D.prototype = {
    "addPath": function () {
    },
    "arc": function () {
    },
    "arcTo": function () {
    },
    "bezierCurveTo": function () {
    },
    "closePath": function () {
    },
    "ellipse": function () {
    },
    "lineTo": function () {
    },
    "moveTo": function () {
    },
    "quadraticCurveTo": function () {
    },
    "rect": function () {
    }
}
window.Path2D = Path2D;
SourceBuffer = function () {
};
SourceBuffer.prototype = {
    "changeType": function () {
    },
}
window.SourceBuffer = SourceBuffer;
TextTrackList = function () {
};
TextTrackList.prototype = {
    "getTrackById": function () {
    },
}
window.TextTrackList = TextTrackList;

let head = new Object();
head.title = "";
head.lang = "";
head.translate = true;
head.dir = "";
head.hidden = false;
head.id = "";
head.innerHTML = `\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<\!--[if lt IE 9]><\script r='m'>document.createElement("section")<\/script><![endif]-->`;
head.innerText = "\n\n";
head.inputMode = ""
head.appendChild = function (name) {
    return {
        "name": name,
        "child": [],
        "appendChild": function (child) {
            this.child.push(child)
        }
    }
};

document = new Object();
Object.setPrototypeOf(document, dtaEventTarget.prototype)
document.exitFullscreen = function exitFullscreen(){};
document.write = function (text) {
    // let node = dom.window.document.createTextNode(text);
    return dom.window.document.write("\n" + text + "\n\n\n\n")
}
document.documentElement = dom.window.document.documentElement;
document.body = dom.window.document.body;
document.head = head;
document.charset = "UTF-8";
document.characterSet = "UTF-8"
document.scripts = [];
document.onmousemove = null;
document.onselectionchange = null;
document.scrollingElement = {
    "style": {"fontVariantNumeric": ""}
}
document.createElement = function (name) {
    let family = ['Verdana', 'Helvetica Neue LT Pro 35 Thin', 'tahoma', 'verdana', 'times new roman', 'Courier New',
        'Microsoft Himalaya', 'helvetica', 'LG-FZKaTong-M19-V2.2', 'Georgia', 'georgia', 'courier new', 'Arial',
        'arial', 'cursive', 'times', 'fantasy', 'courier', 'serif', 'STXingkai', 'monospace', 'Times New Roman']
    let element = dom.window.document.createElement(name);
    Object.defineProperties(dom.window.HTMLElement.prototype, {
        offsetLeft: {
            get: function () {
                return 8;
            }
        },
        offsetTop: {
            get: function () {
                return 8;
            }
        },
        offsetHeight: {
            get: function () {
                if (family.includes(this.style.fontFamily)) {
                    return 0
                } else {
                    return 151;
                }
            }
        },
        offsetWidth: {
            get: function () {
                if (family.includes(this.style.fontFamily)) {
                    return 0
                } else {
                    return 1327;
                }

            }
        }
    });
    return element
};
document.createElement.toString = function createElementToString() {
    return 'function createElement() { [native code] }'
};
document.getElementsByTagName = function (name) {
    // console.log("getElementByTagName: " + name + " result is: " + dom.window.document.getElementsByTagName(name).length);
    return dom.window.document.getElementsByTagName(name);
};
document.getElementById = function (id) {
    return dom.window.document.getElementById(id);
};

// 不能采取document.$cookie的方式来定义 代码中有检查属性的第一个字符是否是$
document.cookie = dom.window.document.cookie
let CookieStore = Object;
// Object.defineProperty(document, 'cookie', {
//     get: function () {
//         let cookieStr = "";
//         for (let name in CookieStore) {
//             cookieStr += name + "=" + CookieStore[name] + "; ";
//         }
//         return cookieStr.slice(0, cookieStr.length - 2)
//     },
//     set: function (value) {
//         Object.assign(CookieStore, cookieIns.parse(value))
//     }
// });

window.document = document;

let location = new Object();
location.port = "";
location.protocol = "https:",
    location.href = "https://www.nmpa.gov.cn/xxgk/ggtg/index.html",
    location.pathname = "/xxgk/ggtg/index.html",
    location.host = "www.nmpa.gov.cn",
    location.hostname = "www.nmpa.gov.cn",
    location.origin = "https://www.nmpa.gov.cn";
location.replace = String.prototype.replace;
window.location = location;

window.navigator = navigator;
window.clientInformation = Object.assign(navigator, {})

history = new Object();
history.length = 5;
history.scrollRestoration = "auto";
history.state = null;
window.history = history;

screen = new Object();
screen.availHeight = 1040;
screen.availLeft = 1920;
screen.availTop = 0;
screen.availWidth = 1920;
screen.colorDepth = 24;
screen.height = 1080;
screen.pixelDepth = 24;
screen.orientation = {"angle": 0, "onchange": null, "type": "landscape-primary"};
window.screen = screen;

window.openDatabase = openDatabase

window.indexedDB = indexedDB
window.name = ""
window.fetch = fetch;
fetch.toString = function fetchToString() {
    return 'function fetch() { [native code] }'
};
window.sessionStorage = sessionStorage;
window.localStorage = localStorage;
window.XMLHttpRequest = dom.window.XMLHttpRequest;
window.DOMParser = dom.window.DOMParser;
window.outerHeight = 1040;
window.outerWidth = 1920;
window.pageXOffset = 0;
window.pageYOffset = 300;
window.screenLeft = 1920;
window.screenTop = 0;
window.screenX = 1920;
window.screenY = 0;
window.scrollX = 0;
window.scrollY = 300;
window.parent = window;
window.top = window;
window.self = window;
window.window = window;

window['crypto'] = require('crypto-js');

js_code = fs.readFileSync("first_script.js", {
    encoding: "utf-8"
});

eval(js_code);


document.cookie = 'acw_tc=3ccdc15a16344754650103989e118a4462c30f8384704b2e6493c0a15044a9; neCYtZEjo8GmO=5x.heF0U.7tpzTH4lxROBmmI7GVKNDfgziD0Kse4x8ngCg2apsgUqUl_VFAR9HZvQ38hIeQDHrkdQNFBM8K6t1A; neCYtZEjo8GmP=53KaQNDm7oQ7qqqmZO9dPqGazaaQaMCXhW7wGHAEc_bm3yZV.aFYbB_eV.znuecFHNIsIavBhUjRtT15n99FJciNo3rqJyFpwG.WJ.yJ6Jc31pas72eTrt3WMbP13.z2SO0X5ZOOitGx9SaksghdDLxxM87VLZGq.eH2VRoUJpKwZ9ukUqt.kUg8LN6xaWD9ww9UWna1ha4d180lu0z12HTccQJmBvTBmFNrMd.iCfW4d42Z1Na9lzPj19CdAgrnU7';
(function(){var _$LM=0,_$00=[[1,5,6,7,3,0,4,2],[83,69,14,58,9,50,63,86,66,98,45,98,77,26,80,67,80,98,47,84,33,46,64,91,38,55,35,65,17,40,98,57,97,72,18,29,79,75,13,44,7,39,75,43,87,16,102,85,75,54,41,36,58,88,75,49,5,68,23,31,95,10,89,75,93,62,75,96,27,76,101,98,78,59,51,76,3,37,98,22,76,98,8,11,58,61,82,25,24,12,98,4,53,0,53,21,81,71,94,90,92,20,60,1,99,52,19,34,70,6,2,73,42,48,30,56,74,32,15,28,100,98],[32,23,33,6,5,10,1,15,29,3,12,31,12,7,26,29,13,9,25,30,18,2,4,20,22,14,22,16,22,0,17,0,22,28,21,22,27,22,8,19,24,11,29],[24,34,0,2,46,8,47,39,28,11,44,9,48,35,41,15,42,26,13,11,31,22,49,29,32,18,4,5,22,20,6,16,40,18,25,30,38,45,25,33,19,36,19,1,21,11,19,14,21,35,17,23,12,37,10,27,36,21,14,17,1,43,3,7,46],[11,10,31,30,35,1,18,34,24,20,6,5,32,8,19,5,12,29,19,2,21,25,17,7,36,15,3,2,9,4,26,13,16,7,28,3,27,9,5,14,22,23,5,0,20,33,5]];function _$gg(_$us,_$f5){return _$4T.Math.abs(_$us)%_$f5;}function _$dm(_$O2){_$O2[_$gg(_$9V()-_$O2[_$gg(_$n9(),16)],16)]=_$O2[_$gg(_$Ou()+_$Cz(),16)];_$O2[14]=_$9V()-_$O2[_$gg(_$n9(),16)];if(_$Ou()-_$O2[_$gg(_$BW(),16)]){if(_$9V()+_$9k()){_$O2[6]=_$ZM();}}_$4V(_$O2);_$O2[2]=_$_l()-_$O2[_$gg(_$t1(),16)];var _$9J=_$Ou();if(_$6w()-_$O2[_$gg(_$ZM(),16)]){_$O2[_$gg(_$_l()+_$1q(),16)]=_$t6(_$O2);}_$dT(_$O2);return _$VD(_$O2);}function _$9V(){return 5}function _$n9(){return 8}function _$Ou(){return 13}function _$Cz(){return 3}function _$BW(){return 0}function _$9k(){return 11}function _$ZM(){return 4}function _$1q(){return 15}function _$9j(){return 10}function _$2n(_$O2){var _$9J=_$1q();var _$eW=_$9V();_$O2[11]=_$6w();var _$Wh=_$W9();var _$Wh=_$BW();return _$Pt();}function _$6w(){return 1}function _$W9(){return 2}function _$Pt(){return 14}function _$4V(_$O2){_$JE(_$O2);_$O2[_$gg(_$O2[_$gg(_$t1(),16)],16)]=_$iB(_$O2);_$O2[_$gg(_$0t(_$O2),16)]=_$LI(_$O2);return _$_r(_$O2);}function _$JE(_$O2){_$dU(_$O2);_$C4(_$O2);var _$Wh=_$Pt();if(_$n9()){_$O2[_$gg(_$Cu(),16)]=_$Ou();}_$4U(_$O2);return _$Ou()+_$Cz();}function _$dU(_$O2){_$O2[2]=_$BW();var _$eW=_$9V();var _$Wh=_$9k();_$O2[1]=_$Cu();return _$Ou();}function _$Cu(){return 7}function _$C4(_$O2){var _$eW=_$t1();var _$Wh=_$9j();_$O2[8]=_$k6();_$O2[4]=_$W9();_$O2[_$gg(_$_l(),16)]=_$1q();return _$9V();}function _$t1(){return 12}function _$k6(){return 6}function _$_l(){return 9}function _$4U(_$O2){var _$9J=_$Cu();var _$Wh=_$Ou();var _$eW=_$Pt();var _$9J=_$t1();_$O2[10]=_$n9();return _$k6();}function _$iB(_$O2){var _$9J=_$Cu();var _$Wh=_$Ou();_$O2[_$gg(_$BW(),16)]=_$Pt();var _$Wh=_$9k();var _$eW=_$6w();return _$Cu();}function _$0t(_$O2){var _$Wh=_$1q();var _$Wh=_$9V();_$O2[_$gg(_$n9(),16)]=_$k6();_$O2[4]=_$W9();return _$BW();}function _$LI(_$O2){_$O2[12]=_$9j();_$O2[8]=_$k6();_$O2[4]=_$W9();return _$BW();}function _$_r(_$O2){if(_$9V()){_$O2[_$gg(_$n9(),16)]=_$k6();}_$gq(_$O2);_$rM(_$O2);var _$eW=_$Cu();if(_$9j()){var _$eW=_$Ou();}_$O2[12]=_$9j();return _$6w()+_$Cu();}function _$gq(_$O2){_$O2[15]=_$9V();var _$eW=_$k6();var _$Wh=_$ZM();_$O2[_$gg(_$Cz(),16)]=_$_l();var _$eW=_$9j();var _$9J=_$n9();return _$k6();}function _$rM(_$O2){var _$eW=_$_l();var _$9J=_$1q();var _$9J=_$n9();var _$eW=_$k6();var _$Wh=_$Cz();var _$Wh=_$_l();return _$1q();}function _$t6(_$O2){_$O2[8]=_$k6();var _$eW=_$Cz();var _$9J=_$_l();_$O2[_$gg(_$t1(),16)]=_$9j();return _$n9();}function _$dT(_$O2){_$O2[12]=_$fM(_$O2);_$O2[_$gg(_$Nw(_$O2),16)]=_$9V();if(_$6w()+_$Cu()){_$O2[2]=_$BW();}var _$9J=_$6w();var _$eW=_$O2[_$gg(_$ZM(),16)];var _$Wh=_$Pt();if(_$O2[_$gg(_$BW(),16)]){if(_$1q()){_$O2[_$gg(_$9j(),16)]=_$n9();}}return _$Vs(_$O2);}function _$fM(_$O2){_$O2[_$gg(_$6w(),16)]=_$Cu();var _$eW=_$BW();var _$9J=_$Pt();var _$9J=_$9k();var _$eW=_$6w();return _$Cu();}function _$Nw(_$O2){var _$eW=_$1q();var _$eW=_$9V();var _$Wh=_$k6();var _$9J=_$ZM();_$O2[_$gg(_$Cz(),16)]=_$_l();return _$1q();}function _$Vs(_$O2){_$Qg(_$O2);_$aQ(_$O2);_$O2[14]=_$t1();return _$Mv(_$O2);}function _$Qg(_$O2){_$O2[_$gg(_$Cu(),16)]=_$Ou();var _$9J=_$Pt();var _$Wh=_$t1();var _$Wh=_$n9();return _$k6();}function _$aQ(_$O2){var _$9J=_$_l();var _$Wh=_$1q();_$O2[5]=_$9k();var _$eW=_$ZM();var _$9J=_$W9();return _$BW();}function _$Mv(_$O2){_$O2[_$gg(_$6w(),16)]=_$Cu();_$O2[13]=_$Cz();var _$9J=_$t1();var _$9J=_$9j();return _$n9();}function _$VD(_$O2){_$8W(_$O2);_$O2[6]=_$Ou()+_$Cz();_$oZ(_$O2);_$kU(_$O2);_$O2[2]=_$_l()+_$1q();return _$DI(_$O2);}function _$8W(_$O2){_$O2[2]=_$BW();if(_$1q()){_$O2[_$gg(_$9j(),16)]=_$n9();}_$O2[3]=_$_l();if(_$t1()){_$O2[_$gg(_$9k(),16)]=_$6w();}_$O2[0]=_$Pt();return _$9V()+_$9k();}function _$oZ(_$O2){_$O2[_$gg(_$9V(),16)]=_$9k();_$O2[_$gg(_$k6(),16)]=_$ZM();var _$eW=_$_l();var _$Wh=_$1q();_$O2[_$gg(_$9j(),16)]=_$n9();return _$x9(_$O2);}function _$x9(_$O2){var _$eW=_$Cz();var _$9J=_$_l();var _$Wh=_$9j();var _$eW=_$n9();_$O2[_$gg(_$Cu(),16)]=_$Ou();return _$Cz();}function _$kU(_$O2){_$O2[_$gg(_$t1(),16)]=_$9j();var _$Wh=_$Cu();var _$Wh=_$Ou();var _$9J=_$6w();if(_$BW()){_$O2[14]=_$t1();}if(_$W9()){var _$9J=_$Pt();}return _$6w()+_$Cu();}function _$DI(_$O2){_$O2[8]=_$k6();var _$Wh=_$Pt();if(_$Ou()){var _$9J=_$t1();}var _$Wh=_$W9();var _$Wh=_$BW();return _$Op(_$O2);}function _$Op(_$O2){var _$eW=_$9k();var _$9J=_$6w();_$O2[_$gg(_$ZM(),16)]=_$W9();_$O2[0]=_$Pt();return _$t1();}var _$EH,_$8l,_$4T,_$n5,_$ez,_$1t,_$UU,_$XA,_$dm;var _$H2,_$xP,_$Km=_$LM,_$5t=_$00[0];while(1){_$xP=_$5t[_$Km++];if(_$xP<4){if(_$xP<1){_$XA=_$4T['$_ts']={};}else if(_$xP<2){_$EH=[4,16,64,256,1024,4096,16384,65536];}else if(_$xP<3){return;}else{if( !_$H2)_$Km+=1;}}else{if(_$xP<5){_$O5(0);}else if(_$xP<6){_$4T=window,_$n5=String,_$ez=Array,_$1t=document,_$UU=Date;}else if(_$xP<7){_$XA=_$4T['$_ts'];}else{_$H2= !_$XA;}}}function _$O5(_$9V,_$us){function _$kI(){var _$gg=_$IG.charCodeAt(_$MD++ ),_$LM;if(_$gg<128){return _$gg;}else if(_$gg<251){return _$gg-32;}else if(_$gg===251){return 0;}else if(_$gg===254){_$gg=_$IG.charCodeAt(_$MD++ );if(_$gg>=128)_$gg-=32;_$LM=_$IG.charCodeAt(_$MD++ );if(_$LM>=128)_$LM-=32;return _$gg*219+_$LM;}else if(_$gg===255){_$gg=_$IG.charCodeAt(_$MD++ );if(_$gg>=128)_$gg-=32;_$LM=_$IG.charCodeAt(_$MD++ );if(_$LM>=128)_$LM-=32;_$gg=_$gg*219*219+_$LM*219;_$LM=_$IG.charCodeAt(_$MD++ );if(_$LM>=128)_$LM-=32;return _$gg+_$LM;}else if(_$gg===252){_$LM=_$IG.charCodeAt(_$MD++ );if(_$LM>=128)_$LM-=32;return -_$LM;}else if(_$gg===253){_$gg=_$IG.charCodeAt(_$MD++ );if(_$gg>=128)_$gg-=32;_$LM=_$IG.charCodeAt(_$MD++ );if(_$LM>=128)_$LM-=32;return _$gg* -219-_$LM;}else{}}var _$WN,_$eN,_$9J,_$rP,_$IG,_$FX,_$Ej,_$gg,_$LM,_$Km,_$H2,_$fB,_$xP,_$5t,_$O2,_$8m,_$T2,_$Wh,_$eW,_$MD;var _$Ou,_$BW,_$n9=_$9V,_$9k=_$00[1];while(1){_$BW=_$9k[_$n9++];if(_$BW<64){if(_$BW<16){if(_$BW<4){if(_$BW<1){return _$H2;}else if(_$BW<2){_$us._$BX="_$JE";}else if(_$BW<3){_$us._$n5=_$dm;}else{return 1;}}else if(_$BW<8){if(_$BW<5){_$us._$iQ=11;}else if(_$BW<6){var _$8m=[];}else if(_$BW<7){_$us._$9p="Ovf1SBZnkoq";}else{var _$H2=_$IG.length;}}else if(_$BW<12){if(_$BW<9){var _$gg;}else if(_$BW<10){_$O5(31);}else if(_$BW<11){var _$eW=_$8m.join('');}else{_$Ou=_$4T.execScript;}}else{if(_$BW<13){return _$gg;}else if(_$BW<14){var _$Ej=_$XA.aebi=[];}else if(_$BW<15){_$Ou=_$XA["a670748"];}else{_$us._$fB="_$r4";}}}else if(_$BW<32){if(_$BW<20){if(_$BW<17){var _$WN=_$kI();}else if(_$BW<18){_$gg+="YlxcMj_8zrUSkg08KGVA6EQMQr_S$xSOf7FNWDl7MsVmE$i1KVc6IhI0Pq3V$ml8tZfFGm$bpunuiPD_x2OeZiImBb7IL6s6I9BgsPOhTKPHkSppnIOSj3q38fH9TG_WDJ8rB8xl$jT4nkMfq9LyXEhwlgO3RPaIIYLZSGXOCW3l5adQDh7O9QWQ4R174df9";}else if(_$BW<19){var _$FX=_$XA._$iI;}else{_$us._$ez="mg3j9avlllG";}}else if(_$BW<24){if(_$BW<21){_$us._$Yj="_$6w";}else if(_$BW<22){_$us._$Kr=4;}else if(_$BW<23){_$Ou=_$us===undefined||_$us==="";}else{for(_$Wh=0;_$Wh<_$T2;_$Wh++ ){_$sk(16,_$Wh,_$8m);}}}else if(_$BW<28){if(_$BW<25){_$gg=_$LM.call(_$4T,_$us);}else if(_$BW<26){_$LM=_$4T.eval;}else if(_$BW<27){for(_$gg=0,_$LM=0;_$LM<_$Km;_$LM+=2){_$H2[_$gg++ ]=_$fB+_$us.substr(_$LM,2);}}else{_$Ou=_$9J-_$gg>12000;}}else{if(_$BW<29){_$us._$Yf="_$Ia";}else if(_$BW<30){var _$gg=_$O5(10);}else if(_$BW<31){_$us._$O2="_$Sp";}else{for(_$Wh=0;_$Wh<_$T2;_$Wh++ ){_$8m.push("}");}}}}else if(_$BW<48){if(_$BW<36){if(_$BW<33){_$us._$ko="_$65";}else if(_$BW<34){_$gg+="aQMvVD8WoZx9kUDIOpDM6BJ6NFJwQRQCl56oK4S8U_$imgRX2ahWsvMXgwooPEctjSM2wZy4JfTzCAaBfiQtMtaxaDRabsvHipbJYjuaNg3BBXpdlAr4GhxySp_RSFnc0xjYLi6Qvl6tTEdOhptVWIWPrfssnEfGtRiI$8bv01wyjasqFEypRb6n8wUy";}else if(_$BW<35){_$us._$Tl="65kywbdG1ca";}else{_$gg+="rUnlzPccajfVgz89mf4qKsAOuJRG$_DFkDTsSk9_x$9K5Rd8iOokYUoDe_rRp90GWjNZ7WDTMldyMVr6j$$n5BvQJc4pzLhFK_pJVzHgoehg4bX7Kefj7N7r2YqhOJdXOUfh2ko0$PXypLc36A5zAcPfvg6uPhdkekk9zEIpIWE1CSo6_nDmWi1OlUvv";}}else if(_$BW<40){if(_$BW<37){_$Ou=_$T2>0;}else if(_$BW<38){return 0;}else if(_$BW<39){_$gg+="3Uso$UYzugcKbIr_3CkevS1r_XVjIxCVYAaaFDmxlx7kYcFtNjhkoqF7P$z9aRxet2eDr9GuJuVXEWwMSN7ZX_O_dPPilLi53q6CB66J0KHOL5HcJbblNSlV4DXVa_3$5_2gFomVREW$$DJJ1wPrsxNhWYbDNvC5_0JGRk7vjpev4778Q_eXautdv3lS";}else{var _$MD=0;}}else if(_$BW<44){if(_$BW<41){return _$O5(12,_$gg);}else if(_$BW<42){var _$O2=_$kI();}else if(_$BW<43){_$us._$rf=246;}else{var _$fB=_$kI();}}else{if(_$BW<45){var _$Km=_$O5(72);}else if(_$BW<46){return new _$UU().getTime();}else if(_$BW<47){_$gg+="22biHCju$47VXaFnpyEc1IZbkfItDKvIaYqU9Ln_pDd61sxWeFSVaWtikoYfGZnFHNO$l_vGNyp$DeU4rEiHtqMgTH8YMZ7JvFarvYOKbPiLC3U$g4QOIkfrJeDBD73iPRWLMUOjHk0gU5vz5JnrOP$t1oF_UwXFCFAiWgUjjCjM2dW1PKYCFZErnW45";}else{var _$gg='';}}}else{if(_$BW<52){if(_$BW<49){_$us._$aW="_$0Z";}else if(_$BW<50){_$MD+=_$O2;}else if(_$BW<51){_$n9+=1;}else{_$Ou=_$gg!=="functioneval(){[nativecode]}";}}else if(_$BW<56){if(_$BW<53){_$us._$n9="_$xP";}else if(_$BW<54){_$n9+=-78;}else if(_$BW<55){_$T2=_$kI();}else{_$gg+="M9OnvLwdYNE0VJQU2AplljwJJY6GwKWtEL8DUNVg0wIgHV3Q_ZVfZu9NGjqJsru4ciyUtBsGGrEuV14B6LTFfCkiqxDjhMMWmIF2UnxpShyXLQC8RsJNwp3T5jYBr3JUds_PaVIZCQAwQQVb8p5ZK0lrerLP8xgX8oe2aqx4XLjwO7VrrgbLJPU8bGot";}}else if(_$BW<60){if(_$BW<57){_$us._$ti="_$xs";}else if(_$BW<58){_$XA._$LM=new _$UU().getTime();}else if(_$BW<59){if( !_$Ou)_$n9+=2;}else{_$gg=_$gg.replace(RegExp('[\\r\\n\\s]','g'),"");}}else{if(_$BW<61){_$us._$ua="_$W9";}else if(_$BW<62){_$gg=_$4T.execScript(_$us);}else if(_$BW<63){_$O5(79,_$eW);}else{_$sk(0);}}}}else{if(_$BW<80){if(_$BW<68){if(_$BW<65){_$gg+="mCCOnKI1V7M3JIY0j2t$y3IMRYe0EKhmkNbh1EQ1LqdiKWF4_pA48tMo85W70rbbfKHY_IN1xuh$0ksBQs70Of_vGxyRNRLLxK7Q4LqN7Lq7Vt7Az5f8yIuXufZCkM29ySZKWWMwrdTyIwuW28fbtxSBKZ6PbK4vxzMGVdyEzGMN1yCe4zagoiOTAQeu";}else if(_$BW<66){_$gg+="Izb35fKwZ_xiGLwUckF3fOoHnh3o4kqYd9X5tXD2pK5QcNXWiWirv9qlDbshloaA2QFsPCMnWS2rWnDWvP2eyoWKpZzT3Feo0bglfeAg4n$9H$uPKz7_y0a2cdNU$ZcyTuhupY_yEURQkBJO_GUWoVdMMcScu7dfm9x7f_9WsLDVP9MqgbLU5WhdDHG2";}else if(_$BW<67){_$4T['$_ts'].l__=_$XA.l__;}else{_$us._$4T=115;}}else if(_$BW<72){if(_$BW<69){var _$T2=_$kI();}else if(_$BW<70){_$O5(91,_$XA);}else if(_$BW<71){_$us._$UU="xTO_9xZrQPCy0P9niqbaWL";}else{_$us._$ip="_$ZM";}}else if(_$BW<76){if(_$BW<73){_$XA["a670748"]=_$8l;}else if(_$BW<74){_$us._$5t="Ew3i4TlDbYy04j5NvOhjya";}else if(_$BW<75){_$us._$8m="_$dO";}else{}}else{if(_$BW<77){if( !_$Ou)_$n9+=1;}else if(_$BW<78){var _$gg,_$LM,_$Km=_$us.length,_$H2=new _$ez(_$Km/2),_$fB='_$';}else if(_$BW<79){var _$gg=_$4T.eval.toString();}else{var _$LM=_$O5(10);}}}else if(_$BW<96){if(_$BW<84){if(_$BW<81){_$n9+=78;}else if(_$BW<82){_$us._$Ng="_$Pt";}else if(_$BW<83){_$n9+=2;}else{_$XA._$iI=_$O5(18);}}else if(_$BW<88){if(_$BW<85){_$gg+="EH8l4Tn5ez1tUUXAdmusf5kIIGFXEjMDWNrPeNJpyZ9p0pvTNABkpNBTXl_F9$EM7ehhNu39iQKrTlAnNs00ZGO5sk5rs2ggLMKmH2fBxP5tO28mT2WheW9J9Vn9OuCzBW9kZM1q9j2n6wW9Pt4VJEdUCuC4t1k6_l4UiB0tLI_rgqrMt6dTfMNwVsQg";}else if(_$BW<86){var _$5t=_$kI();}else if(_$BW<87){_$4T['$_ts']={};}else{var _$xP=_$kI();}}else if(_$BW<92){if(_$BW<89){_$eN=_$IG.substr(_$MD,_$O2).split(_$n5.fromCharCode(255));}else if(_$BW<90){_$XA._$LM-=_$O5(10);}else if(_$BW<91){_$us._$3B="_$9j";}else{_$gg+="2RtmoJs07T8jLK8qVxaXOGweGwC6R3RAz_7dWs9BBzN3cxWHz1c$xtJobRVTwgHPj_IcOg6hlBa3VY_6_Aw4QIcTl0zntMU0q52bMy4_zemca4pC43ICEeWG95p_yGh4BdxSuePbnPrhOOAfGYbA2P8zDtFa7pk8g1xNTSqTaT8BulvZHSo49efo$yvt";}}else{if(_$BW<93){_$us._$bJ="_$2n";}else if(_$BW<94){_$LM=_$O5(10);}else if(_$BW<95){_$us._$vH="_$1q";}else{_$8m.push(")();");}}}else{if(_$BW<100){if(_$BW<97){var _$9J=_$O5(10);}else if(_$BW<98){var _$IG=_$XA["a670748"];}else if(_$BW<99){return;}else{_$us._$Ou="_$4V";}}else{if(_$BW<101){_$us._$T2="_$xy";}else if(_$BW<102){_$XA._$SV=1;}else{var _$rP=_$kI();}}}}}function _$sk(_$H2,_$Jp,_$yZ){function _$9p(){var _$5t=[0];Array.prototype.push.apply(_$5t,arguments);return _$5r.apply(this,_$5t);}var _$7e,_$hh,_$Nu,_$gg,_$LM,_$Km,_$0p,_$vT,_$NA,_$Bk,_$pN,_$BT,_$Xl,_$_F,_$9$,_$EM;var _$xP,_$O2,_$fB=_$H2,_$8m=_$00[2];while(1){_$O2=_$8m[_$fB++];if(_$O2<16){if(_$O2<4){if(_$O2<1){_$fB+=-19;}else if(_$O2<2){_$0p.onreadystatechange=_$9p;}else if(_$O2<3){var _$BT=_$kI();}else{var _$gg=_$kI();}}else if(_$O2<8){if(_$O2<5){var _$Xl=_$kI();}else if(_$O2<6){_$0p=_$4T.ActiveXObject?new _$4T.ActiveXObject('Microsoft.XMLHTTP'):new _$4T.XMLHttpRequest();}else if(_$O2<7){if( !_$xP)_$fB+=4;}else{for(_$Km=0;_$Km<_$gg;_$Km++ ){_$LM[_$Km]=_$kI();}}}else if(_$O2<12){if(_$O2<9){var _$LM=_$kI();}else if(_$O2<10){var _$vT=_$kI();}else if(_$O2<11){_$0p.open('GET',_$LM,false);}else{_$5r(5,_$yZ);}}else{if(_$O2<13){_$fB+=19;}else if(_$O2<14){var _$0p=_$kI();}else if(_$O2<15){var _$9$=_$sk(9);}else{_$0p.send();}}}else if(_$O2<32){if(_$O2<20){if(_$O2<17){var _$EM=_$sk(9);}else if(_$O2<18){var _$LM=new _$ez(_$gg);}else if(_$O2<19){var _$pN=_$kI();}else{var _$Nu=[];}}else if(_$O2<24){if(_$O2<21){var _$_F=_$kI();}else if(_$O2<22){_$Ej[_$Jp]=_$gg;}else if(_$O2<23){}else{var _$LM=_$gg>1?_$1t.scripts[_$gg-2].src:_$8l;}}else if(_$O2<28){if(_$O2<25){for(_$Km=0;_$Km<_$LM;_$Km++ ){_$Nu[_$Km]=_$sk(9);}}else if(_$O2<26){var _$NA=_$kI();}else if(_$O2<27){return _$LM;}else{var _$hh=_$sk(9);}}else{if(_$O2<29){var _$gg=_$sk(9);}else if(_$O2<30){return;}else if(_$O2<31){var _$Bk=_$kI();}else{var _$7e=_$sk(9);}}}else{if(_$O2<33){var _$gg=_$1t.scripts.length;}else{_$xP=_$LM;}}}function _$5r(_$LM,_$39){var _$iQ,_$gg;var _$H2,_$xP,_$Km=_$LM,_$5t=_$00[3];while(1){_$xP=_$5t[_$Km++];if(_$xP<16){if(_$xP<4){if(_$xP<1){for(_$gg=0;_$gg<_$7e.length;_$gg+=2){_$s2(0,_$7e[_$gg],_$7e[_$gg+1],_$39);}}else if(_$xP<2){_$39.push(_$FX[_$0p]);}else if(_$xP<3){_$Km+=27;}else{_$s2(12,0,_$Nu.length);}}else if(_$xP<8){if(_$xP<5){_$O5(79,_$0p.responseText);}else if(_$xP<6){_$H2=_$XA["a670748"];}else if(_$xP<7){_$Km+=-27;}else{_$39.push("}");}}else if(_$xP<12){if(_$xP<9){var _$gg,_$iQ=4;}else if(_$xP<10){_$39.push(_$FX[_$WN]);}else if(_$xP<11){if( !_$H2)_$Km+=9;}else{_$39.push(_$FX[_$vT]);}}else{if(_$xP<13){_$39.push("];");}else if(_$xP<14){_$39.push("(");}else if(_$xP<15){_$39.push(_$FX[_$_F]);}else{_$Km+=8;}}}else if(_$xP<32){if(_$xP<20){if(_$xP<17){_$s2(39);}else if(_$xP<18){_$39.push("[");}else if(_$xP<19){if( !_$H2)_$Km+=4;}else{_$39.push(",");}}else if(_$xP<24){if(_$xP<21){_$O5(31);}else if(_$xP<22){_$39.push("=");}else if(_$xP<23){if( !_$H2)_$Km+=1;}else{_$39.push(_$Jp);}}else if(_$xP<28){if(_$xP<25){_$H2=_$0p.readyState==4;}else if(_$xP<26){_$39.push("var ");}else if(_$xP<27){_$39.push(_$FX[_$pN]);}else{_$39.push("while(1){");}}else{if(_$xP<29){_$39.push("(function(){var ");}else if(_$xP<30){_$39.push("){");}else if(_$xP<31){_$39.push(_$FX[_$EM[0]]);}else{_$H2=_$9$.length;}}}else if(_$xP<48){if(_$xP<36){if(_$xP<33){_$Km+=-23;}else if(_$xP<34){_$39.push(_$FX[_$NA]);}else if(_$xP<35){_$Km+=23;}else{_$39.push(_$FX[_$rP]);}}else if(_$xP<40){if(_$xP<37){_$39.push(_$FX[_$Xl]);}else if(_$xP<38){_$H2=_$Nu.length;}else if(_$xP<39){for(_$gg=1;_$gg<_$EM.length;_$gg++ ){_$39.push(",");_$39.push(_$FX[_$EM[_$gg]]);}}else{if( !_$H2)_$Km+=8;}}else if(_$xP<44){if(_$xP<41){_$H2=_$EM.length;}else if(_$xP<42){_$39.push("=$_ts.aebi;");}else if(_$xP<43){_$39.push("function ");}else{_$39.push("++];");}}else{if(_$xP<45){_$39.push("=0,");}else if(_$xP<46){_$39.push(";");}else if(_$xP<47){return;}else{_$H2=_$Jp==0;}}}else{if(_$xP<49){_$39.push("=$_ts.scj,");}else{for(_$gg=0;_$gg<_$9$.length;_$gg++ ){_$39.push(",");_$39.push(_$FX[_$9$[_$gg]]);}}}}function _$s2(_$fB,_$Kr,_$Tl,_$An){var _$LM,_$Km,_$H2,_$gg;var _$5t,_$8m,_$xP=_$fB,_$T2=_$00[4];while(1){_$8m=_$T2[_$xP++];if(_$8m<16){if(_$8m<4){if(_$8m<1){_$5t=_$hh.length!=_$gg;}else if(_$8m<2){var _$LM=_$gg.length;}else if(_$8m<3){_$s2(4,_$Kr);}else{_$39.push("}else{");}}else if(_$8m<8){if(_$8m<5){_$xP+=8;}else if(_$8m<6){return;}else if(_$8m<7){_$39.push(_$eN[_$gg[_$LM]]);}else{_$LM="if(";}}else if(_$8m<12){if(_$8m<9){_$5t=_$H2==0;}else if(_$8m<10){_$39.push("}");}else if(_$8m<11){_$xP+=40;}else{_$An.push(["function ",_$FX[_$Kr],"(){var ",_$FX[_$Bk],"=[",_$Tl,"];Array.prototype.push.apply(",_$FX[_$Bk],",arguments);return ",_$FX[_$BT],".apply(this,",_$FX[_$Bk],");}"].join(''));}}else{if(_$8m<13){_$xP+=21;}else if(_$8m<14){for(_$gg=1;_$gg<7;_$gg++ ){if(_$H2<=_$EH[_$gg]){_$Km=_$EH[_$gg-1];break;}}}else if(_$8m<15){var _$gg=_$hh.length;}else{for(;_$Kr<_$Tl;_$Kr++ ){_$39.push(_$LM);_$39.push(_$FX[_$Xl]);_$39.push('<');_$39.push(_$Kr+1);_$39.push("){");_$s2(4,_$Kr);_$LM="}else if(";}}}}else if(_$8m<32){if(_$8m<20){if(_$8m<17){}else if(_$8m<18){if( !_$5t)_$xP+=7;}else if(_$8m<19){_$LM-=_$LM%2;}else{if( !_$5t)_$xP+=2;}}else if(_$8m<24){if(_$8m<21){if( !_$5t)_$xP+=1;}else if(_$8m<22){_$xP+=17;}else if(_$8m<23){_$gg-=_$gg%2;}else{_$xP+=-40;}}else if(_$8m<28){if(_$8m<25){_$5t=_$gg.length!=_$LM;}else if(_$8m<26){_$5t=_$H2<=_$iQ;}else if(_$8m<27){_$Km=0;}else{_$s2(12,_$Kr,_$Tl);}}else{if(_$8m<29){for(;_$Kr+_$Km<_$Tl;_$Kr+=_$Km){_$39.push(_$LM);_$39.push(_$FX[_$Xl]);_$39.push('<');_$39.push(_$Kr+_$Km);_$39.push("){");_$s2(12,_$Kr,_$Kr+_$Km);_$LM="}else if(";}}else if(_$8m<30){_$5t=_$H2==1;}else if(_$8m<31){_$xP+=39;}else{for(_$LM=0;_$LM<_$gg;_$LM+=2){_$39.push(_$eN[_$hh[_$LM]]);_$39.push(_$FX[_$hh[_$LM+1]]);}}}}else{if(_$8m<36){if(_$8m<33){var _$gg,_$LM,_$Km,_$H2=_$Tl-_$Kr;}else if(_$8m<34){_$39.push(_$eN[_$hh[_$gg]]);}else if(_$8m<35){for(_$Km=0;_$Km<_$LM;_$Km+=2){_$39.push(_$eN[_$gg[_$Km]]);_$39.push(_$FX[_$gg[_$Km+1]]);}}else{var _$gg=_$Nu[_$Kr];}}else{_$Tl-- ;}}}}}}}})()
console.log("写script之前: \n" + document.getElementsByTagName('html')[0].innerHTML);

!function(){
    var ele = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.innerHTML = "console.log('111')"
    ele.appendChild(script)
}()
console.log("写script之后: \n" + document.getElementsByTagName('html')[0].innerHTML);

_$ss('aEAk');

_$dU();
function getPrintShow(key) {
    let type = typeof key;
    if (type === 'object') {
        try {
            return `${JSON.stringify(key)}`
        } catch {
            return key.toString()
        }
    } else if (type === 'symbol') {
        return key.toString
    } else {
        return key
    }

}
function getObjhandler(WatchName) {
    let handler = {
        get(target, propKey, receiver) {
            let result = Reflect.get(target, propKey, receiver)
            if (result instanceof Object) {
                if (typeof result === "function") {
                    console.log(`[${WatchName}] getting propKey is [${getPrintShow(propKey)}] , it is function`)
                    return new Proxy(result, getMethodHandler(WatchName))
                } else {
                    console.log(`[${WatchName}] getting propKey is [${propKey.toString()}], result is [${getPrintShow(result)}]`);
                }
                // 不注释的话，会遍历对象的所有key
                // return new Proxy(result, getObjhandler(`${WatchName}.${getPrintShow(result)}`))
            }
            console.log(`[${WatchName}] getting propKey is [${propKey?.description ?? propKey}], result is [${getPrintShow(result)}]`);
            return result;
        },
        set(target, propKey, value, receiver) {
            if (value instanceof Object) {
                console.log(`[${WatchName}] setting propKey is [${propKey}], value is [${getPrintShow(value)}]`);
            } else {
                console.log(`[${WatchName}] setting propKey is [${propKey}], value is [${value}]`);
            }
            return Reflect.set(target, propKey, value, receiver);
        },
        has(target, propKey) {
            var result = Reflect.has(target, propKey);
            console.log(`[${WatchName}] has propKey [${propKey}], result is [${getPrintShow(result)}]`)
            return result;
        },
        deleteProperty(target, propKey) {
            var result = Reflect.deleteProperty(target, propKey);
            console.log(`[${WatchName}] delete propKey [${propKey}], result is [${getPrintShow(result)}]`)
            return result;
        },
        getOwnPropertyDescriptor(target, propKey) {
            var result = Reflect.getOwnPropertyDescriptor(target, propKey);
            console.log(`[${WatchName}] getOwnPropertyDescriptor  propKey [${propKey.toString()}] result is [${getPrintShow(result)}]`)
            return result;
        },
        defineProperty(target, propKey, attributes) {
            var result = Reflect.defineProperty(target, propKey, attributes);
            console.log(`[${WatchName}] defineProperty propKey [${propKey}] attributes is [${getPrintShow(attributes)}], result is [${getPrintShow(result)}]`)
            return result
        },
        getPrototypeOf(target) {
            var result = Reflect.getPrototypeOf(target)
            console.log(`[${WatchName}] getPrototypeOf result is [${getPrintShow(result)}]`)
            return result;
        },
        setPrototypeOf(target, proto) {
            console.log(`[${WatchName}] setPrototypeOf proto is [${getPrintShow(proto)}]`)
            return Reflect.setPrototypeOf(target, proto);
        },
        preventExtensions(target) {
            console.log(`[${WatchName}] preventExtensions`)
            return Reflect.preventExtensions(target);
        },
        isExtensible(target) {
            var result = Reflect.isExtensible(target)
            console.log(`[${WatchName}] isExtensible, result is [${result}]`)
            return result;
        },
        ownKeys(target) {
            var result = Reflect.ownKeys(target)
            console.log(`[${WatchName}] invoke ownkeys, result is [${getPrintShow(result)}]`)
            return result
        },
        apply(target, thisArg, argArray) {
            let result = Reflect.apply(target, thisArg, argArray)
            console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${getPrintShow(result)}].`)
            return result
        },
        construct(target, argArray, newTarget) {
            var result = Reflect.construct(target, argArray, newTarget)
            console.log(`[${WatchName}] construct function name is [${target.name}], argArray is [${argArray}], result is [${getPrintShow(result)}].`)
            return result;
        }
    }
    return handler;
}
let loadEvent = {"type": "load", "target": window}
let mousemoveEvent = {
    "type": "mousemove",
    "target": window,
    "timeStamp": new Date().getTime(),
    "screenX": 2287,
    "screenY": 512,
    "keyCode": undefined,
    "data": undefined,
    "button": 0,
    "offsetX": 343,
    "offsetY": 3,
    "x": 367,
    "y": 409
}
let dtaLoadEvent = new Proxy(Object.create(loadEvent), getObjhandler("load"));
let dtaMousemoveEvent = new Proxy(Object.create(mousemoveEvent), getObjhandler("mousemove"));
window.dispatchEvent(dtaLoadEvent);
// window.dispatchEvent(dtaMousemoveEvent);
