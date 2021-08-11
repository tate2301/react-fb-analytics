import { facebookPixelEvent } from "./pixel";
import { makeid } from "./functions";
import {EventDataClass} from "./types";

let aidPixelStarted = !1;
let aidScrollFired20 = !1;
let aidScrollFired40 = !1;
let aidScrollFired60 = !1;
let aidScrollFired80 = !1;

// const aidFbc_props = {
//   uri: window.location.pathname,
// };

// Power-Pixel Function
function aidGetScrollPercent() {
  var o = document.documentElement,
    r = document.body,
    e = "scrollHeight",
    t =
      ((o.scrollTop || r.scrollTop) / ((o[e] || r[e]) - o.clientHeight)) * 100;
  return Math.round(t);
}

export function AID_PowerPixelInit(pixelEvents: EventDataClass) {
  // Bot-Checker Regex.
  // https://observablehq.com/@hugodf/crawler-regex
  const botAgents =
      "(googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)",
    botTest = new RegExp(botAgents, "i");
  const userAgent = navigator?.userAgent;
  const botChecker = botTest.test(userAgent);

  if (botChecker) {
    console.log("Bot detected. Stop!");
  } else {
    // Check FB-Pixel
    if (!pixelEvents) {
      console.log("pixelEvents not loaded!");

      // Onclick Handler for Init. after Cookie-Banner
      if (!aidPixelStarted) {
        document.body.addEventListener("click", function () {
          setTimeout(() => {
            AID_PowerPixelInit(pixelEvents);
          }, 3000);
        });
      }
    } else {
      AID_PowerPixelStart(pixelEvents);
      aidPixelStarted = !0;
    }
  }
}

async function sendEvents(pixelEvents: EventDataClass, eventId: number, eventName: string) {
  const events = {
    ...pixelEvents,
    serverData: {
      ...pixelEvents.serverData,
      eventName: eventName,
      eventId,
    },
  };

  const headers = {
    // this can be replace by env THOT_KEY
    "x-api-key": "tJItBhmwaCcsa0MrwR2iQa76Dd2f2fSSdEU",
    "Content-Type": "application/json",
  };

  const response = await fetch("/api/fb/wrapper", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(events),
  });

  console.log(await response.json());
}

function triggerEvents(pixelEvents: EventDataClass, eventName: string) {
  const eventId = makeid(16);

  facebookPixelEvent(eventName, eventId);
  sendEvents(pixelEvents, eventId, eventName);
}

function AID_PowerPixelStart(pixelEvents: EventDataClass) {
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
