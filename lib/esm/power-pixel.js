var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { facebookPixelEvent } from "./pixel";
import { makeid } from "./functions";
var aidPixelStarted = !1;
var aidScrollFired20 = !1;
var aidScrollFired40 = !1;
var aidScrollFired60 = !1;
var aidScrollFired80 = !1;
// const aidFbc_props = {
//   uri: window.location.pathname,
// };
// Power-Pixel Function
function aidGetScrollPercent() {
    var o = document.documentElement, r = document.body, e = "scrollHeight", t = ((o.scrollTop || r.scrollTop) / ((o[e] || r[e]) - o.clientHeight)) * 100;
    return Math.round(t);
}
export function AID_PowerPixelInit(pixelEvents) {
    // Bot-Checker Regex.
    // https://observablehq.com/@hugodf/crawler-regex
    var botAgents = "(googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)", botTest = new RegExp(botAgents, "i");
    var userAgent = navigator === null || navigator === void 0 ? void 0 : navigator.userAgent;
    var botChecker = botTest.test(userAgent);
    if (botChecker) {
        console.log("Bot detected. Stop!");
    }
    else {
        // Check FB-Pixel
        if (!pixelEvents) {
            console.log("pixelEvents not loaded!");
            // Onclick Handler for Init. after Cookie-Banner
            if (!aidPixelStarted) {
                document.body.addEventListener("click", function () {
                    setTimeout(function () {
                        AID_PowerPixelInit(pixelEvents);
                    }, 3000);
                });
            }
        }
        else {
            AID_PowerPixelStart(pixelEvents);
            aidPixelStarted = !0;
        }
    }
}
function sendEvents(pixelEvents, eventId, eventName) {
    return __awaiter(this, void 0, void 0, function () {
        var events, headers, response, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    events = __assign(__assign({}, pixelEvents), { serverData: __assign(__assign({}, pixelEvents.serverData), { eventName: eventName, eventId: eventId }) });
                    headers = {
                        // this can be replace by env THOT_KEY
                        "x-api-key": "tJItBhmwaCcsa0MrwR2iQa76Dd2f2fSSdEU",
                        "Content-Type": "application/json",
                    };
                    return [4 /*yield*/, fetch("/api/fb/wrapper", {
                            method: "POST",
                            headers: headers,
                            body: JSON.stringify(events),
                        })];
                case 1:
                    response = _c.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, response.json()];
                case 2:
                    _b.apply(_a, [_c.sent()]);
                    return [2 /*return*/];
            }
        });
    });
}
function triggerEvents(pixelEvents, eventName) {
    var eventId = makeid(16);
    facebookPixelEvent(eventName, eventId);
    sendEvents(pixelEvents, eventId, eventName);
}
function AID_PowerPixelStart(pixelEvents) {
    console.log("PowerPixel started...");
    // Fire: 3s Pixel
    triggerEvents(pixelEvents, "AIS: VisitingTime3s");
    // Fire: Other Timeout Pixels
    setTimeout(function () {
        setTimeout(function () {
            triggerEvents(pixelEvents, "AIS: VisitingTime10s");
        }, 7000);
        setTimeout(function () {
            triggerEvents(pixelEvents, "AIS: VisitingTime30s");
        }, 27000);
        triggerEvents(pixelEvents, "AIS: VisitingTime5s");
    }, 2000);
    window.addEventListener("scroll", function () {
        //console.log('Scrolling');
        // Fire: 20 Percent
        aidGetScrollPercent() >= 20 &&
            !aidScrollFired20 &&
            //   (facebookPixelEvent("AIS: Scroll20"),
            (triggerEvents(pixelEvents, "AIS: Scroll20"), (aidScrollFired20 = !0));
        // Fire: 40 Percent
        aidGetScrollPercent() >= 40 &&
            !aidScrollFired40 &&
            (triggerEvents(pixelEvents, "AIS: Scroll40"), (aidScrollFired40 = !0));
        // Fire: 60 Percent
        aidGetScrollPercent() >= 60 &&
            !aidScrollFired60 &&
            (triggerEvents(pixelEvents, "AIS: Scroll60"), (aidScrollFired60 = !0));
        // Fire: 80 Percent
        aidGetScrollPercent() >= 80 &&
            !aidScrollFired80 &&
            (triggerEvents(pixelEvents, "AIS: Scroll80"), (aidScrollFired80 = !0));
    });
}
