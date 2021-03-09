(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/he/he.js":
/*!*******************************!*\
  !*** ./node_modules/he/he.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, top-level-this-exports, __webpack_require__.g, __webpack_require__.amdO, __webpack_require__, __webpack_require__.* */
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
;

(function (root) {
  // Detect free variables `exports`.
  var freeExports = ( false ? 0 : _typeof(exports)) == 'object' && exports; // Detect free variable `module`.

  var freeModule = ( false ? 0 : _typeof(module)) == 'object' && module && module.exports == freeExports && module; // Detect free variable `global`, from Node.js or Browserified code,
  // and use it as `root`.

  var freeGlobal = (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) == 'object' && __webpack_require__.g;

  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
    root = freeGlobal;
  }
  /*--------------------------------------------------------------------------*/
  // All astral symbols.


  var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; // All ASCII symbols (not just printable ASCII) except those listed in the
  // first column of the overrides table.
  // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides

  var regexAsciiWhitelist = /[\x01-\x7F]/g; // All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
  // code points listed in the first column of the overrides table on
  // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.

  var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
  var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
  var encodeMap = {
    '\xAD': 'shy',
    "\u200C": 'zwnj',
    "\u200D": 'zwj',
    "\u200E": 'lrm',
    "\u2063": 'ic',
    "\u2062": 'it',
    "\u2061": 'af',
    "\u200F": 'rlm',
    "\u200B": 'ZeroWidthSpace',
    "\u2060": 'NoBreak',
    "\u0311": 'DownBreve',
    "\u20DB": 'tdot',
    "\u20DC": 'DotDot',
    '\t': 'Tab',
    '\n': 'NewLine',
    "\u2008": 'puncsp',
    "\u205F": 'MediumSpace',
    "\u2009": 'thinsp',
    "\u200A": 'hairsp',
    "\u2004": 'emsp13',
    "\u2002": 'ensp',
    "\u2005": 'emsp14',
    "\u2003": 'emsp',
    "\u2007": 'numsp',
    '\xA0': 'nbsp',
    "\u205F\u200A": 'ThickSpace',
    "\u203E": 'oline',
    '_': 'lowbar',
    "\u2010": 'dash',
    "\u2013": 'ndash',
    "\u2014": 'mdash',
    "\u2015": 'horbar',
    ',': 'comma',
    ';': 'semi',
    "\u204F": 'bsemi',
    ':': 'colon',
    "\u2A74": 'Colone',
    '!': 'excl',
    '\xA1': 'iexcl',
    '?': 'quest',
    '\xBF': 'iquest',
    '.': 'period',
    "\u2025": 'nldr',
    "\u2026": 'mldr',
    '\xB7': 'middot',
    '\'': 'apos',
    "\u2018": 'lsquo',
    "\u2019": 'rsquo',
    "\u201A": 'sbquo',
    "\u2039": 'lsaquo',
    "\u203A": 'rsaquo',
    '"': 'quot',
    "\u201C": 'ldquo',
    "\u201D": 'rdquo',
    "\u201E": 'bdquo',
    '\xAB': 'laquo',
    '\xBB': 'raquo',
    '(': 'lpar',
    ')': 'rpar',
    '[': 'lsqb',
    ']': 'rsqb',
    '{': 'lcub',
    '}': 'rcub',
    "\u2308": 'lceil',
    "\u2309": 'rceil',
    "\u230A": 'lfloor',
    "\u230B": 'rfloor',
    "\u2985": 'lopar',
    "\u2986": 'ropar',
    "\u298B": 'lbrke',
    "\u298C": 'rbrke',
    "\u298D": 'lbrkslu',
    "\u298E": 'rbrksld',
    "\u298F": 'lbrksld',
    "\u2990": 'rbrkslu',
    "\u2991": 'langd',
    "\u2992": 'rangd',
    "\u2993": 'lparlt',
    "\u2994": 'rpargt',
    "\u2995": 'gtlPar',
    "\u2996": 'ltrPar',
    "\u27E6": 'lobrk',
    "\u27E7": 'robrk',
    "\u27E8": 'lang',
    "\u27E9": 'rang',
    "\u27EA": 'Lang',
    "\u27EB": 'Rang',
    "\u27EC": 'loang',
    "\u27ED": 'roang',
    "\u2772": 'lbbrk',
    "\u2773": 'rbbrk',
    "\u2016": 'Vert',
    '\xA7': 'sect',
    '\xB6': 'para',
    '@': 'commat',
    '*': 'ast',
    '/': 'sol',
    'undefined': null,
    '&': 'amp',
    '#': 'num',
    '%': 'percnt',
    "\u2030": 'permil',
    "\u2031": 'pertenk',
    "\u2020": 'dagger',
    "\u2021": 'Dagger',
    "\u2022": 'bull',
    "\u2043": 'hybull',
    "\u2032": 'prime',
    "\u2033": 'Prime',
    "\u2034": 'tprime',
    "\u2057": 'qprime',
    "\u2035": 'bprime',
    "\u2041": 'caret',
    '`': 'grave',
    '\xB4': 'acute',
    "\u02DC": 'tilde',
    '^': 'Hat',
    '\xAF': 'macr',
    "\u02D8": 'breve',
    "\u02D9": 'dot',
    '\xA8': 'die',
    "\u02DA": 'ring',
    "\u02DD": 'dblac',
    '\xB8': 'cedil',
    "\u02DB": 'ogon',
    "\u02C6": 'circ',
    "\u02C7": 'caron',
    '\xB0': 'deg',
    '\xA9': 'copy',
    '\xAE': 'reg',
    "\u2117": 'copysr',
    "\u2118": 'wp',
    "\u211E": 'rx',
    "\u2127": 'mho',
    "\u2129": 'iiota',
    "\u2190": 'larr',
    "\u219A": 'nlarr',
    "\u2192": 'rarr',
    "\u219B": 'nrarr',
    "\u2191": 'uarr',
    "\u2193": 'darr',
    "\u2194": 'harr',
    "\u21AE": 'nharr',
    "\u2195": 'varr',
    "\u2196": 'nwarr',
    "\u2197": 'nearr',
    "\u2198": 'searr',
    "\u2199": 'swarr',
    "\u219D": 'rarrw',
    "\u219D\u0338": 'nrarrw',
    "\u219E": 'Larr',
    "\u219F": 'Uarr',
    "\u21A0": 'Rarr',
    "\u21A1": 'Darr',
    "\u21A2": 'larrtl',
    "\u21A3": 'rarrtl',
    "\u21A4": 'mapstoleft',
    "\u21A5": 'mapstoup',
    "\u21A6": 'map',
    "\u21A7": 'mapstodown',
    "\u21A9": 'larrhk',
    "\u21AA": 'rarrhk',
    "\u21AB": 'larrlp',
    "\u21AC": 'rarrlp',
    "\u21AD": 'harrw',
    "\u21B0": 'lsh',
    "\u21B1": 'rsh',
    "\u21B2": 'ldsh',
    "\u21B3": 'rdsh',
    "\u21B5": 'crarr',
    "\u21B6": 'cularr',
    "\u21B7": 'curarr',
    "\u21BA": 'olarr',
    "\u21BB": 'orarr',
    "\u21BC": 'lharu',
    "\u21BD": 'lhard',
    "\u21BE": 'uharr',
    "\u21BF": 'uharl',
    "\u21C0": 'rharu',
    "\u21C1": 'rhard',
    "\u21C2": 'dharr',
    "\u21C3": 'dharl',
    "\u21C4": 'rlarr',
    "\u21C5": 'udarr',
    "\u21C6": 'lrarr',
    "\u21C7": 'llarr',
    "\u21C8": 'uuarr',
    "\u21C9": 'rrarr',
    "\u21CA": 'ddarr',
    "\u21CB": 'lrhar',
    "\u21CC": 'rlhar',
    "\u21D0": 'lArr',
    "\u21CD": 'nlArr',
    "\u21D1": 'uArr',
    "\u21D2": 'rArr',
    "\u21CF": 'nrArr',
    "\u21D3": 'dArr',
    "\u21D4": 'iff',
    "\u21CE": 'nhArr',
    "\u21D5": 'vArr',
    "\u21D6": 'nwArr',
    "\u21D7": 'neArr',
    "\u21D8": 'seArr',
    "\u21D9": 'swArr',
    "\u21DA": 'lAarr',
    "\u21DB": 'rAarr',
    "\u21DD": 'zigrarr',
    "\u21E4": 'larrb',
    "\u21E5": 'rarrb',
    "\u21F5": 'duarr',
    "\u21FD": 'loarr',
    "\u21FE": 'roarr',
    "\u21FF": 'hoarr',
    "\u2200": 'forall',
    "\u2201": 'comp',
    "\u2202": 'part',
    "\u2202\u0338": 'npart',
    "\u2203": 'exist',
    "\u2204": 'nexist',
    "\u2205": 'empty',
    "\u2207": 'Del',
    "\u2208": 'in',
    "\u2209": 'notin',
    "\u220B": 'ni',
    "\u220C": 'notni',
    "\u03F6": 'bepsi',
    "\u220F": 'prod',
    "\u2210": 'coprod',
    "\u2211": 'sum',
    '+': 'plus',
    '\xB1': 'pm',
    '\xF7': 'div',
    '\xD7': 'times',
    '<': 'lt',
    "\u226E": 'nlt',
    "<\u20D2": 'nvlt',
    '=': 'equals',
    "\u2260": 'ne',
    "=\u20E5": 'bne',
    "\u2A75": 'Equal',
    '>': 'gt',
    "\u226F": 'ngt',
    ">\u20D2": 'nvgt',
    '\xAC': 'not',
    '|': 'vert',
    '\xA6': 'brvbar',
    "\u2212": 'minus',
    "\u2213": 'mp',
    "\u2214": 'plusdo',
    "\u2044": 'frasl',
    "\u2216": 'setmn',
    "\u2217": 'lowast',
    "\u2218": 'compfn',
    "\u221A": 'Sqrt',
    "\u221D": 'prop',
    "\u221E": 'infin',
    "\u221F": 'angrt',
    "\u2220": 'ang',
    "\u2220\u20D2": 'nang',
    "\u2221": 'angmsd',
    "\u2222": 'angsph',
    "\u2223": 'mid',
    "\u2224": 'nmid',
    "\u2225": 'par',
    "\u2226": 'npar',
    "\u2227": 'and',
    "\u2228": 'or',
    "\u2229": 'cap',
    "\u2229\uFE00": 'caps',
    "\u222A": 'cup',
    "\u222A\uFE00": 'cups',
    "\u222B": 'int',
    "\u222C": 'Int',
    "\u222D": 'tint',
    "\u2A0C": 'qint',
    "\u222E": 'oint',
    "\u222F": 'Conint',
    "\u2230": 'Cconint',
    "\u2231": 'cwint',
    "\u2232": 'cwconint',
    "\u2233": 'awconint',
    "\u2234": 'there4',
    "\u2235": 'becaus',
    "\u2236": 'ratio',
    "\u2237": 'Colon',
    "\u2238": 'minusd',
    "\u223A": 'mDDot',
    "\u223B": 'homtht',
    "\u223C": 'sim',
    "\u2241": 'nsim',
    "\u223C\u20D2": 'nvsim',
    "\u223D": 'bsim',
    "\u223D\u0331": 'race',
    "\u223E": 'ac',
    "\u223E\u0333": 'acE',
    "\u223F": 'acd',
    "\u2240": 'wr',
    "\u2242": 'esim',
    "\u2242\u0338": 'nesim',
    "\u2243": 'sime',
    "\u2244": 'nsime',
    "\u2245": 'cong',
    "\u2247": 'ncong',
    "\u2246": 'simne',
    "\u2248": 'ap',
    "\u2249": 'nap',
    "\u224A": 'ape',
    "\u224B": 'apid',
    "\u224B\u0338": 'napid',
    "\u224C": 'bcong',
    "\u224D": 'CupCap',
    "\u226D": 'NotCupCap',
    "\u224D\u20D2": 'nvap',
    "\u224E": 'bump',
    "\u224E\u0338": 'nbump',
    "\u224F": 'bumpe',
    "\u224F\u0338": 'nbumpe',
    "\u2250": 'doteq',
    "\u2250\u0338": 'nedot',
    "\u2251": 'eDot',
    "\u2252": 'efDot',
    "\u2253": 'erDot',
    "\u2254": 'colone',
    "\u2255": 'ecolon',
    "\u2256": 'ecir',
    "\u2257": 'cire',
    "\u2259": 'wedgeq',
    "\u225A": 'veeeq',
    "\u225C": 'trie',
    "\u225F": 'equest',
    "\u2261": 'equiv',
    "\u2262": 'nequiv',
    "\u2261\u20E5": 'bnequiv',
    "\u2264": 'le',
    "\u2270": 'nle',
    "\u2264\u20D2": 'nvle',
    "\u2265": 'ge',
    "\u2271": 'nge',
    "\u2265\u20D2": 'nvge',
    "\u2266": 'lE',
    "\u2266\u0338": 'nlE',
    "\u2267": 'gE',
    "\u2267\u0338": 'ngE',
    "\u2268\uFE00": 'lvnE',
    "\u2268": 'lnE',
    "\u2269": 'gnE',
    "\u2269\uFE00": 'gvnE',
    "\u226A": 'll',
    "\u226A\u0338": 'nLtv',
    "\u226A\u20D2": 'nLt',
    "\u226B": 'gg',
    "\u226B\u0338": 'nGtv',
    "\u226B\u20D2": 'nGt',
    "\u226C": 'twixt',
    "\u2272": 'lsim',
    "\u2274": 'nlsim',
    "\u2273": 'gsim',
    "\u2275": 'ngsim',
    "\u2276": 'lg',
    "\u2278": 'ntlg',
    "\u2277": 'gl',
    "\u2279": 'ntgl',
    "\u227A": 'pr',
    "\u2280": 'npr',
    "\u227B": 'sc',
    "\u2281": 'nsc',
    "\u227C": 'prcue',
    "\u22E0": 'nprcue',
    "\u227D": 'sccue',
    "\u22E1": 'nsccue',
    "\u227E": 'prsim',
    "\u227F": 'scsim',
    "\u227F\u0338": 'NotSucceedsTilde',
    "\u2282": 'sub',
    "\u2284": 'nsub',
    "\u2282\u20D2": 'vnsub',
    "\u2283": 'sup',
    "\u2285": 'nsup',
    "\u2283\u20D2": 'vnsup',
    "\u2286": 'sube',
    "\u2288": 'nsube',
    "\u2287": 'supe',
    "\u2289": 'nsupe',
    "\u228A\uFE00": 'vsubne',
    "\u228A": 'subne',
    "\u228B\uFE00": 'vsupne',
    "\u228B": 'supne',
    "\u228D": 'cupdot',
    "\u228E": 'uplus',
    "\u228F": 'sqsub',
    "\u228F\u0338": 'NotSquareSubset',
    "\u2290": 'sqsup',
    "\u2290\u0338": 'NotSquareSuperset',
    "\u2291": 'sqsube',
    "\u22E2": 'nsqsube',
    "\u2292": 'sqsupe',
    "\u22E3": 'nsqsupe',
    "\u2293": 'sqcap',
    "\u2293\uFE00": 'sqcaps',
    "\u2294": 'sqcup',
    "\u2294\uFE00": 'sqcups',
    "\u2295": 'oplus',
    "\u2296": 'ominus',
    "\u2297": 'otimes',
    "\u2298": 'osol',
    "\u2299": 'odot',
    "\u229A": 'ocir',
    "\u229B": 'oast',
    "\u229D": 'odash',
    "\u229E": 'plusb',
    "\u229F": 'minusb',
    "\u22A0": 'timesb',
    "\u22A1": 'sdotb',
    "\u22A2": 'vdash',
    "\u22AC": 'nvdash',
    "\u22A3": 'dashv',
    "\u22A4": 'top',
    "\u22A5": 'bot',
    "\u22A7": 'models',
    "\u22A8": 'vDash',
    "\u22AD": 'nvDash',
    "\u22A9": 'Vdash',
    "\u22AE": 'nVdash',
    "\u22AA": 'Vvdash',
    "\u22AB": 'VDash',
    "\u22AF": 'nVDash',
    "\u22B0": 'prurel',
    "\u22B2": 'vltri',
    "\u22EA": 'nltri',
    "\u22B3": 'vrtri',
    "\u22EB": 'nrtri',
    "\u22B4": 'ltrie',
    "\u22EC": 'nltrie',
    "\u22B4\u20D2": 'nvltrie',
    "\u22B5": 'rtrie',
    "\u22ED": 'nrtrie',
    "\u22B5\u20D2": 'nvrtrie',
    "\u22B6": 'origof',
    "\u22B7": 'imof',
    "\u22B8": 'mumap',
    "\u22B9": 'hercon',
    "\u22BA": 'intcal',
    "\u22BB": 'veebar',
    "\u22BD": 'barvee',
    "\u22BE": 'angrtvb',
    "\u22BF": 'lrtri',
    "\u22C0": 'Wedge',
    "\u22C1": 'Vee',
    "\u22C2": 'xcap',
    "\u22C3": 'xcup',
    "\u22C4": 'diam',
    "\u22C5": 'sdot',
    "\u22C6": 'Star',
    "\u22C7": 'divonx',
    "\u22C8": 'bowtie',
    "\u22C9": 'ltimes',
    "\u22CA": 'rtimes',
    "\u22CB": 'lthree',
    "\u22CC": 'rthree',
    "\u22CD": 'bsime',
    "\u22CE": 'cuvee',
    "\u22CF": 'cuwed',
    "\u22D0": 'Sub',
    "\u22D1": 'Sup',
    "\u22D2": 'Cap',
    "\u22D3": 'Cup',
    "\u22D4": 'fork',
    "\u22D5": 'epar',
    "\u22D6": 'ltdot',
    "\u22D7": 'gtdot',
    "\u22D8": 'Ll',
    "\u22D8\u0338": 'nLl',
    "\u22D9": 'Gg',
    "\u22D9\u0338": 'nGg',
    "\u22DA\uFE00": 'lesg',
    "\u22DA": 'leg',
    "\u22DB": 'gel',
    "\u22DB\uFE00": 'gesl',
    "\u22DE": 'cuepr',
    "\u22DF": 'cuesc',
    "\u22E6": 'lnsim',
    "\u22E7": 'gnsim',
    "\u22E8": 'prnsim',
    "\u22E9": 'scnsim',
    "\u22EE": 'vellip',
    "\u22EF": 'ctdot',
    "\u22F0": 'utdot',
    "\u22F1": 'dtdot',
    "\u22F2": 'disin',
    "\u22F3": 'isinsv',
    "\u22F4": 'isins',
    "\u22F5": 'isindot',
    "\u22F5\u0338": 'notindot',
    "\u22F6": 'notinvc',
    "\u22F7": 'notinvb',
    "\u22F9": 'isinE',
    "\u22F9\u0338": 'notinE',
    "\u22FA": 'nisd',
    "\u22FB": 'xnis',
    "\u22FC": 'nis',
    "\u22FD": 'notnivc',
    "\u22FE": 'notnivb',
    "\u2305": 'barwed',
    "\u2306": 'Barwed',
    "\u230C": 'drcrop',
    "\u230D": 'dlcrop',
    "\u230E": 'urcrop',
    "\u230F": 'ulcrop',
    "\u2310": 'bnot',
    "\u2312": 'profline',
    "\u2313": 'profsurf',
    "\u2315": 'telrec',
    "\u2316": 'target',
    "\u231C": 'ulcorn',
    "\u231D": 'urcorn',
    "\u231E": 'dlcorn',
    "\u231F": 'drcorn',
    "\u2322": 'frown',
    "\u2323": 'smile',
    "\u232D": 'cylcty',
    "\u232E": 'profalar',
    "\u2336": 'topbot',
    "\u233D": 'ovbar',
    "\u233F": 'solbar',
    "\u237C": 'angzarr',
    "\u23B0": 'lmoust',
    "\u23B1": 'rmoust',
    "\u23B4": 'tbrk',
    "\u23B5": 'bbrk',
    "\u23B6": 'bbrktbrk',
    "\u23DC": 'OverParenthesis',
    "\u23DD": 'UnderParenthesis',
    "\u23DE": 'OverBrace',
    "\u23DF": 'UnderBrace',
    "\u23E2": 'trpezium',
    "\u23E7": 'elinters',
    "\u2423": 'blank',
    "\u2500": 'boxh',
    "\u2502": 'boxv',
    "\u250C": 'boxdr',
    "\u2510": 'boxdl',
    "\u2514": 'boxur',
    "\u2518": 'boxul',
    "\u251C": 'boxvr',
    "\u2524": 'boxvl',
    "\u252C": 'boxhd',
    "\u2534": 'boxhu',
    "\u253C": 'boxvh',
    "\u2550": 'boxH',
    "\u2551": 'boxV',
    "\u2552": 'boxdR',
    "\u2553": 'boxDr',
    "\u2554": 'boxDR',
    "\u2555": 'boxdL',
    "\u2556": 'boxDl',
    "\u2557": 'boxDL',
    "\u2558": 'boxuR',
    "\u2559": 'boxUr',
    "\u255A": 'boxUR',
    "\u255B": 'boxuL',
    "\u255C": 'boxUl',
    "\u255D": 'boxUL',
    "\u255E": 'boxvR',
    "\u255F": 'boxVr',
    "\u2560": 'boxVR',
    "\u2561": 'boxvL',
    "\u2562": 'boxVl',
    "\u2563": 'boxVL',
    "\u2564": 'boxHd',
    "\u2565": 'boxhD',
    "\u2566": 'boxHD',
    "\u2567": 'boxHu',
    "\u2568": 'boxhU',
    "\u2569": 'boxHU',
    "\u256A": 'boxvH',
    "\u256B": 'boxVh',
    "\u256C": 'boxVH',
    "\u2580": 'uhblk',
    "\u2584": 'lhblk',
    "\u2588": 'block',
    "\u2591": 'blk14',
    "\u2592": 'blk12',
    "\u2593": 'blk34',
    "\u25A1": 'squ',
    "\u25AA": 'squf',
    "\u25AB": 'EmptyVerySmallSquare',
    "\u25AD": 'rect',
    "\u25AE": 'marker',
    "\u25B1": 'fltns',
    "\u25B3": 'xutri',
    "\u25B4": 'utrif',
    "\u25B5": 'utri',
    "\u25B8": 'rtrif',
    "\u25B9": 'rtri',
    "\u25BD": 'xdtri',
    "\u25BE": 'dtrif',
    "\u25BF": 'dtri',
    "\u25C2": 'ltrif',
    "\u25C3": 'ltri',
    "\u25CA": 'loz',
    "\u25CB": 'cir',
    "\u25EC": 'tridot',
    "\u25EF": 'xcirc',
    "\u25F8": 'ultri',
    "\u25F9": 'urtri',
    "\u25FA": 'lltri',
    "\u25FB": 'EmptySmallSquare',
    "\u25FC": 'FilledSmallSquare',
    "\u2605": 'starf',
    "\u2606": 'star',
    "\u260E": 'phone',
    "\u2640": 'female',
    "\u2642": 'male',
    "\u2660": 'spades',
    "\u2663": 'clubs',
    "\u2665": 'hearts',
    "\u2666": 'diams',
    "\u266A": 'sung',
    "\u2713": 'check',
    "\u2717": 'cross',
    "\u2720": 'malt',
    "\u2736": 'sext',
    "\u2758": 'VerticalSeparator',
    "\u27C8": 'bsolhsub',
    "\u27C9": 'suphsol',
    "\u27F5": 'xlarr',
    "\u27F6": 'xrarr',
    "\u27F7": 'xharr',
    "\u27F8": 'xlArr',
    "\u27F9": 'xrArr',
    "\u27FA": 'xhArr',
    "\u27FC": 'xmap',
    "\u27FF": 'dzigrarr',
    "\u2902": 'nvlArr',
    "\u2903": 'nvrArr',
    "\u2904": 'nvHarr',
    "\u2905": 'Map',
    "\u290C": 'lbarr',
    "\u290D": 'rbarr',
    "\u290E": 'lBarr',
    "\u290F": 'rBarr',
    "\u2910": 'RBarr',
    "\u2911": 'DDotrahd',
    "\u2912": 'UpArrowBar',
    "\u2913": 'DownArrowBar',
    "\u2916": 'Rarrtl',
    "\u2919": 'latail',
    "\u291A": 'ratail',
    "\u291B": 'lAtail',
    "\u291C": 'rAtail',
    "\u291D": 'larrfs',
    "\u291E": 'rarrfs',
    "\u291F": 'larrbfs',
    "\u2920": 'rarrbfs',
    "\u2923": 'nwarhk',
    "\u2924": 'nearhk',
    "\u2925": 'searhk',
    "\u2926": 'swarhk',
    "\u2927": 'nwnear',
    "\u2928": 'toea',
    "\u2929": 'tosa',
    "\u292A": 'swnwar',
    "\u2933": 'rarrc',
    "\u2933\u0338": 'nrarrc',
    "\u2935": 'cudarrr',
    "\u2936": 'ldca',
    "\u2937": 'rdca',
    "\u2938": 'cudarrl',
    "\u2939": 'larrpl',
    "\u293C": 'curarrm',
    "\u293D": 'cularrp',
    "\u2945": 'rarrpl',
    "\u2948": 'harrcir',
    "\u2949": 'Uarrocir',
    "\u294A": 'lurdshar',
    "\u294B": 'ldrushar',
    "\u294E": 'LeftRightVector',
    "\u294F": 'RightUpDownVector',
    "\u2950": 'DownLeftRightVector',
    "\u2951": 'LeftUpDownVector',
    "\u2952": 'LeftVectorBar',
    "\u2953": 'RightVectorBar',
    "\u2954": 'RightUpVectorBar',
    "\u2955": 'RightDownVectorBar',
    "\u2956": 'DownLeftVectorBar',
    "\u2957": 'DownRightVectorBar',
    "\u2958": 'LeftUpVectorBar',
    "\u2959": 'LeftDownVectorBar',
    "\u295A": 'LeftTeeVector',
    "\u295B": 'RightTeeVector',
    "\u295C": 'RightUpTeeVector',
    "\u295D": 'RightDownTeeVector',
    "\u295E": 'DownLeftTeeVector',
    "\u295F": 'DownRightTeeVector',
    "\u2960": 'LeftUpTeeVector',
    "\u2961": 'LeftDownTeeVector',
    "\u2962": 'lHar',
    "\u2963": 'uHar',
    "\u2964": 'rHar',
    "\u2965": 'dHar',
    "\u2966": 'luruhar',
    "\u2967": 'ldrdhar',
    "\u2968": 'ruluhar',
    "\u2969": 'rdldhar',
    "\u296A": 'lharul',
    "\u296B": 'llhard',
    "\u296C": 'rharul',
    "\u296D": 'lrhard',
    "\u296E": 'udhar',
    "\u296F": 'duhar',
    "\u2970": 'RoundImplies',
    "\u2971": 'erarr',
    "\u2972": 'simrarr',
    "\u2973": 'larrsim',
    "\u2974": 'rarrsim',
    "\u2975": 'rarrap',
    "\u2976": 'ltlarr',
    "\u2978": 'gtrarr',
    "\u2979": 'subrarr',
    "\u297B": 'suplarr',
    "\u297C": 'lfisht',
    "\u297D": 'rfisht',
    "\u297E": 'ufisht',
    "\u297F": 'dfisht',
    "\u299A": 'vzigzag',
    "\u299C": 'vangrt',
    "\u299D": 'angrtvbd',
    "\u29A4": 'ange',
    "\u29A5": 'range',
    "\u29A6": 'dwangle',
    "\u29A7": 'uwangle',
    "\u29A8": 'angmsdaa',
    "\u29A9": 'angmsdab',
    "\u29AA": 'angmsdac',
    "\u29AB": 'angmsdad',
    "\u29AC": 'angmsdae',
    "\u29AD": 'angmsdaf',
    "\u29AE": 'angmsdag',
    "\u29AF": 'angmsdah',
    "\u29B0": 'bemptyv',
    "\u29B1": 'demptyv',
    "\u29B2": 'cemptyv',
    "\u29B3": 'raemptyv',
    "\u29B4": 'laemptyv',
    "\u29B5": 'ohbar',
    "\u29B6": 'omid',
    "\u29B7": 'opar',
    "\u29B9": 'operp',
    "\u29BB": 'olcross',
    "\u29BC": 'odsold',
    "\u29BE": 'olcir',
    "\u29BF": 'ofcir',
    "\u29C0": 'olt',
    "\u29C1": 'ogt',
    "\u29C2": 'cirscir',
    "\u29C3": 'cirE',
    "\u29C4": 'solb',
    "\u29C5": 'bsolb',
    "\u29C9": 'boxbox',
    "\u29CD": 'trisb',
    "\u29CE": 'rtriltri',
    "\u29CF": 'LeftTriangleBar',
    "\u29CF\u0338": 'NotLeftTriangleBar',
    "\u29D0": 'RightTriangleBar',
    "\u29D0\u0338": 'NotRightTriangleBar',
    "\u29DC": 'iinfin',
    "\u29DD": 'infintie',
    "\u29DE": 'nvinfin',
    "\u29E3": 'eparsl',
    "\u29E4": 'smeparsl',
    "\u29E5": 'eqvparsl',
    "\u29EB": 'lozf',
    "\u29F4": 'RuleDelayed',
    "\u29F6": 'dsol',
    "\u2A00": 'xodot',
    "\u2A01": 'xoplus',
    "\u2A02": 'xotime',
    "\u2A04": 'xuplus',
    "\u2A06": 'xsqcup',
    "\u2A0D": 'fpartint',
    "\u2A10": 'cirfnint',
    "\u2A11": 'awint',
    "\u2A12": 'rppolint',
    "\u2A13": 'scpolint',
    "\u2A14": 'npolint',
    "\u2A15": 'pointint',
    "\u2A16": 'quatint',
    "\u2A17": 'intlarhk',
    "\u2A22": 'pluscir',
    "\u2A23": 'plusacir',
    "\u2A24": 'simplus',
    "\u2A25": 'plusdu',
    "\u2A26": 'plussim',
    "\u2A27": 'plustwo',
    "\u2A29": 'mcomma',
    "\u2A2A": 'minusdu',
    "\u2A2D": 'loplus',
    "\u2A2E": 'roplus',
    "\u2A2F": 'Cross',
    "\u2A30": 'timesd',
    "\u2A31": 'timesbar',
    "\u2A33": 'smashp',
    "\u2A34": 'lotimes',
    "\u2A35": 'rotimes',
    "\u2A36": 'otimesas',
    "\u2A37": 'Otimes',
    "\u2A38": 'odiv',
    "\u2A39": 'triplus',
    "\u2A3A": 'triminus',
    "\u2A3B": 'tritime',
    "\u2A3C": 'iprod',
    "\u2A3F": 'amalg',
    "\u2A40": 'capdot',
    "\u2A42": 'ncup',
    "\u2A43": 'ncap',
    "\u2A44": 'capand',
    "\u2A45": 'cupor',
    "\u2A46": 'cupcap',
    "\u2A47": 'capcup',
    "\u2A48": 'cupbrcap',
    "\u2A49": 'capbrcup',
    "\u2A4A": 'cupcup',
    "\u2A4B": 'capcap',
    "\u2A4C": 'ccups',
    "\u2A4D": 'ccaps',
    "\u2A50": 'ccupssm',
    "\u2A53": 'And',
    "\u2A54": 'Or',
    "\u2A55": 'andand',
    "\u2A56": 'oror',
    "\u2A57": 'orslope',
    "\u2A58": 'andslope',
    "\u2A5A": 'andv',
    "\u2A5B": 'orv',
    "\u2A5C": 'andd',
    "\u2A5D": 'ord',
    "\u2A5F": 'wedbar',
    "\u2A66": 'sdote',
    "\u2A6A": 'simdot',
    "\u2A6D": 'congdot',
    "\u2A6D\u0338": 'ncongdot',
    "\u2A6E": 'easter',
    "\u2A6F": 'apacir',
    "\u2A70": 'apE',
    "\u2A70\u0338": 'napE',
    "\u2A71": 'eplus',
    "\u2A72": 'pluse',
    "\u2A73": 'Esim',
    "\u2A77": 'eDDot',
    "\u2A78": 'equivDD',
    "\u2A79": 'ltcir',
    "\u2A7A": 'gtcir',
    "\u2A7B": 'ltquest',
    "\u2A7C": 'gtquest',
    "\u2A7D": 'les',
    "\u2A7D\u0338": 'nles',
    "\u2A7E": 'ges',
    "\u2A7E\u0338": 'nges',
    "\u2A7F": 'lesdot',
    "\u2A80": 'gesdot',
    "\u2A81": 'lesdoto',
    "\u2A82": 'gesdoto',
    "\u2A83": 'lesdotor',
    "\u2A84": 'gesdotol',
    "\u2A85": 'lap',
    "\u2A86": 'gap',
    "\u2A87": 'lne',
    "\u2A88": 'gne',
    "\u2A89": 'lnap',
    "\u2A8A": 'gnap',
    "\u2A8B": 'lEg',
    "\u2A8C": 'gEl',
    "\u2A8D": 'lsime',
    "\u2A8E": 'gsime',
    "\u2A8F": 'lsimg',
    "\u2A90": 'gsiml',
    "\u2A91": 'lgE',
    "\u2A92": 'glE',
    "\u2A93": 'lesges',
    "\u2A94": 'gesles',
    "\u2A95": 'els',
    "\u2A96": 'egs',
    "\u2A97": 'elsdot',
    "\u2A98": 'egsdot',
    "\u2A99": 'el',
    "\u2A9A": 'eg',
    "\u2A9D": 'siml',
    "\u2A9E": 'simg',
    "\u2A9F": 'simlE',
    "\u2AA0": 'simgE',
    "\u2AA1": 'LessLess',
    "\u2AA1\u0338": 'NotNestedLessLess',
    "\u2AA2": 'GreaterGreater',
    "\u2AA2\u0338": 'NotNestedGreaterGreater',
    "\u2AA4": 'glj',
    "\u2AA5": 'gla',
    "\u2AA6": 'ltcc',
    "\u2AA7": 'gtcc',
    "\u2AA8": 'lescc',
    "\u2AA9": 'gescc',
    "\u2AAA": 'smt',
    "\u2AAB": 'lat',
    "\u2AAC": 'smte',
    "\u2AAC\uFE00": 'smtes',
    "\u2AAD": 'late',
    "\u2AAD\uFE00": 'lates',
    "\u2AAE": 'bumpE',
    "\u2AAF": 'pre',
    "\u2AAF\u0338": 'npre',
    "\u2AB0": 'sce',
    "\u2AB0\u0338": 'nsce',
    "\u2AB3": 'prE',
    "\u2AB4": 'scE',
    "\u2AB5": 'prnE',
    "\u2AB6": 'scnE',
    "\u2AB7": 'prap',
    "\u2AB8": 'scap',
    "\u2AB9": 'prnap',
    "\u2ABA": 'scnap',
    "\u2ABB": 'Pr',
    "\u2ABC": 'Sc',
    "\u2ABD": 'subdot',
    "\u2ABE": 'supdot',
    "\u2ABF": 'subplus',
    "\u2AC0": 'supplus',
    "\u2AC1": 'submult',
    "\u2AC2": 'supmult',
    "\u2AC3": 'subedot',
    "\u2AC4": 'supedot',
    "\u2AC5": 'subE',
    "\u2AC5\u0338": 'nsubE',
    "\u2AC6": 'supE',
    "\u2AC6\u0338": 'nsupE',
    "\u2AC7": 'subsim',
    "\u2AC8": 'supsim',
    "\u2ACB\uFE00": 'vsubnE',
    "\u2ACB": 'subnE',
    "\u2ACC\uFE00": 'vsupnE',
    "\u2ACC": 'supnE',
    "\u2ACF": 'csub',
    "\u2AD0": 'csup',
    "\u2AD1": 'csube',
    "\u2AD2": 'csupe',
    "\u2AD3": 'subsup',
    "\u2AD4": 'supsub',
    "\u2AD5": 'subsub',
    "\u2AD6": 'supsup',
    "\u2AD7": 'suphsub',
    "\u2AD8": 'supdsub',
    "\u2AD9": 'forkv',
    "\u2ADA": 'topfork',
    "\u2ADB": 'mlcp',
    "\u2AE4": 'Dashv',
    "\u2AE6": 'Vdashl',
    "\u2AE7": 'Barv',
    "\u2AE8": 'vBar',
    "\u2AE9": 'vBarv',
    "\u2AEB": 'Vbar',
    "\u2AEC": 'Not',
    "\u2AED": 'bNot',
    "\u2AEE": 'rnmid',
    "\u2AEF": 'cirmid',
    "\u2AF0": 'midcir',
    "\u2AF1": 'topcir',
    "\u2AF2": 'nhpar',
    "\u2AF3": 'parsim',
    "\u2AFD": 'parsl',
    "\u2AFD\u20E5": 'nparsl',
    "\u266D": 'flat',
    "\u266E": 'natur',
    "\u266F": 'sharp',
    '\xA4': 'curren',
    '\xA2': 'cent',
    '$': 'dollar',
    '\xA3': 'pound',
    '\xA5': 'yen',
    "\u20AC": 'euro',
    '\xB9': 'sup1',
    '\xBD': 'half',
    "\u2153": 'frac13',
    '\xBC': 'frac14',
    "\u2155": 'frac15',
    "\u2159": 'frac16',
    "\u215B": 'frac18',
    '\xB2': 'sup2',
    "\u2154": 'frac23',
    "\u2156": 'frac25',
    '\xB3': 'sup3',
    '\xBE': 'frac34',
    "\u2157": 'frac35',
    "\u215C": 'frac38',
    "\u2158": 'frac45',
    "\u215A": 'frac56',
    "\u215D": 'frac58',
    "\u215E": 'frac78',
    "\uD835\uDCB6": 'ascr',
    "\uD835\uDD52": 'aopf',
    "\uD835\uDD1E": 'afr',
    "\uD835\uDD38": 'Aopf',
    "\uD835\uDD04": 'Afr',
    "\uD835\uDC9C": 'Ascr',
    '\xAA': 'ordf',
    '\xE1': 'aacute',
    '\xC1': 'Aacute',
    '\xE0': 'agrave',
    '\xC0': 'Agrave',
    "\u0103": 'abreve',
    "\u0102": 'Abreve',
    '\xE2': 'acirc',
    '\xC2': 'Acirc',
    '\xE5': 'aring',
    '\xC5': 'angst',
    '\xE4': 'auml',
    '\xC4': 'Auml',
    '\xE3': 'atilde',
    '\xC3': 'Atilde',
    "\u0105": 'aogon',
    "\u0104": 'Aogon',
    "\u0101": 'amacr',
    "\u0100": 'Amacr',
    '\xE6': 'aelig',
    '\xC6': 'AElig',
    "\uD835\uDCB7": 'bscr',
    "\uD835\uDD53": 'bopf',
    "\uD835\uDD1F": 'bfr',
    "\uD835\uDD39": 'Bopf',
    "\u212C": 'Bscr',
    "\uD835\uDD05": 'Bfr',
    "\uD835\uDD20": 'cfr',
    "\uD835\uDCB8": 'cscr',
    "\uD835\uDD54": 'copf',
    "\u212D": 'Cfr',
    "\uD835\uDC9E": 'Cscr',
    "\u2102": 'Copf',
    "\u0107": 'cacute',
    "\u0106": 'Cacute',
    "\u0109": 'ccirc',
    "\u0108": 'Ccirc',
    "\u010D": 'ccaron',
    "\u010C": 'Ccaron',
    "\u010B": 'cdot',
    "\u010A": 'Cdot',
    '\xE7': 'ccedil',
    '\xC7': 'Ccedil',
    "\u2105": 'incare',
    "\uD835\uDD21": 'dfr',
    "\u2146": 'dd',
    "\uD835\uDD55": 'dopf',
    "\uD835\uDCB9": 'dscr',
    "\uD835\uDC9F": 'Dscr',
    "\uD835\uDD07": 'Dfr',
    "\u2145": 'DD',
    "\uD835\uDD3B": 'Dopf',
    "\u010F": 'dcaron',
    "\u010E": 'Dcaron',
    "\u0111": 'dstrok',
    "\u0110": 'Dstrok',
    '\xF0': 'eth',
    '\xD0': 'ETH',
    "\u2147": 'ee',
    "\u212F": 'escr',
    "\uD835\uDD22": 'efr',
    "\uD835\uDD56": 'eopf',
    "\u2130": 'Escr',
    "\uD835\uDD08": 'Efr',
    "\uD835\uDD3C": 'Eopf',
    '\xE9': 'eacute',
    '\xC9': 'Eacute',
    '\xE8': 'egrave',
    '\xC8': 'Egrave',
    '\xEA': 'ecirc',
    '\xCA': 'Ecirc',
    "\u011B": 'ecaron',
    "\u011A": 'Ecaron',
    '\xEB': 'euml',
    '\xCB': 'Euml',
    "\u0117": 'edot',
    "\u0116": 'Edot',
    "\u0119": 'eogon',
    "\u0118": 'Eogon',
    "\u0113": 'emacr',
    "\u0112": 'Emacr',
    "\uD835\uDD23": 'ffr',
    "\uD835\uDD57": 'fopf',
    "\uD835\uDCBB": 'fscr',
    "\uD835\uDD09": 'Ffr',
    "\uD835\uDD3D": 'Fopf',
    "\u2131": 'Fscr',
    "\uFB00": 'fflig',
    "\uFB03": 'ffilig',
    "\uFB04": 'ffllig',
    "\uFB01": 'filig',
    'fj': 'fjlig',
    "\uFB02": 'fllig',
    "\u0192": 'fnof',
    "\u210A": 'gscr',
    "\uD835\uDD58": 'gopf',
    "\uD835\uDD24": 'gfr',
    "\uD835\uDCA2": 'Gscr',
    "\uD835\uDD3E": 'Gopf',
    "\uD835\uDD0A": 'Gfr',
    "\u01F5": 'gacute',
    "\u011F": 'gbreve',
    "\u011E": 'Gbreve',
    "\u011D": 'gcirc',
    "\u011C": 'Gcirc',
    "\u0121": 'gdot',
    "\u0120": 'Gdot',
    "\u0122": 'Gcedil',
    "\uD835\uDD25": 'hfr',
    "\u210E": 'planckh',
    "\uD835\uDCBD": 'hscr',
    "\uD835\uDD59": 'hopf',
    "\u210B": 'Hscr',
    "\u210C": 'Hfr',
    "\u210D": 'Hopf',
    "\u0125": 'hcirc',
    "\u0124": 'Hcirc',
    "\u210F": 'hbar',
    "\u0127": 'hstrok',
    "\u0126": 'Hstrok',
    "\uD835\uDD5A": 'iopf',
    "\uD835\uDD26": 'ifr',
    "\uD835\uDCBE": 'iscr',
    "\u2148": 'ii',
    "\uD835\uDD40": 'Iopf',
    "\u2110": 'Iscr',
    "\u2111": 'Im',
    '\xED': 'iacute',
    '\xCD': 'Iacute',
    '\xEC': 'igrave',
    '\xCC': 'Igrave',
    '\xEE': 'icirc',
    '\xCE': 'Icirc',
    '\xEF': 'iuml',
    '\xCF': 'Iuml',
    "\u0129": 'itilde',
    "\u0128": 'Itilde',
    "\u0130": 'Idot',
    "\u012F": 'iogon',
    "\u012E": 'Iogon',
    "\u012B": 'imacr',
    "\u012A": 'Imacr',
    "\u0133": 'ijlig',
    "\u0132": 'IJlig',
    "\u0131": 'imath',
    "\uD835\uDCBF": 'jscr',
    "\uD835\uDD5B": 'jopf',
    "\uD835\uDD27": 'jfr',
    "\uD835\uDCA5": 'Jscr',
    "\uD835\uDD0D": 'Jfr',
    "\uD835\uDD41": 'Jopf',
    "\u0135": 'jcirc',
    "\u0134": 'Jcirc',
    "\u0237": 'jmath',
    "\uD835\uDD5C": 'kopf',
    "\uD835\uDCC0": 'kscr',
    "\uD835\uDD28": 'kfr',
    "\uD835\uDCA6": 'Kscr',
    "\uD835\uDD42": 'Kopf',
    "\uD835\uDD0E": 'Kfr',
    "\u0137": 'kcedil',
    "\u0136": 'Kcedil',
    "\uD835\uDD29": 'lfr',
    "\uD835\uDCC1": 'lscr',
    "\u2113": 'ell',
    "\uD835\uDD5D": 'lopf',
    "\u2112": 'Lscr',
    "\uD835\uDD0F": 'Lfr',
    "\uD835\uDD43": 'Lopf',
    "\u013A": 'lacute',
    "\u0139": 'Lacute',
    "\u013E": 'lcaron',
    "\u013D": 'Lcaron',
    "\u013C": 'lcedil',
    "\u013B": 'Lcedil',
    "\u0142": 'lstrok',
    "\u0141": 'Lstrok',
    "\u0140": 'lmidot',
    "\u013F": 'Lmidot',
    "\uD835\uDD2A": 'mfr',
    "\uD835\uDD5E": 'mopf',
    "\uD835\uDCC2": 'mscr',
    "\uD835\uDD10": 'Mfr',
    "\uD835\uDD44": 'Mopf',
    "\u2133": 'Mscr',
    "\uD835\uDD2B": 'nfr',
    "\uD835\uDD5F": 'nopf',
    "\uD835\uDCC3": 'nscr',
    "\u2115": 'Nopf',
    "\uD835\uDCA9": 'Nscr',
    "\uD835\uDD11": 'Nfr',
    "\u0144": 'nacute',
    "\u0143": 'Nacute',
    "\u0148": 'ncaron',
    "\u0147": 'Ncaron',
    '\xF1': 'ntilde',
    '\xD1': 'Ntilde',
    "\u0146": 'ncedil',
    "\u0145": 'Ncedil',
    "\u2116": 'numero',
    "\u014B": 'eng',
    "\u014A": 'ENG',
    "\uD835\uDD60": 'oopf',
    "\uD835\uDD2C": 'ofr',
    "\u2134": 'oscr',
    "\uD835\uDCAA": 'Oscr',
    "\uD835\uDD12": 'Ofr',
    "\uD835\uDD46": 'Oopf',
    '\xBA': 'ordm',
    '\xF3': 'oacute',
    '\xD3': 'Oacute',
    '\xF2': 'ograve',
    '\xD2': 'Ograve',
    '\xF4': 'ocirc',
    '\xD4': 'Ocirc',
    '\xF6': 'ouml',
    '\xD6': 'Ouml',
    "\u0151": 'odblac',
    "\u0150": 'Odblac',
    '\xF5': 'otilde',
    '\xD5': 'Otilde',
    '\xF8': 'oslash',
    '\xD8': 'Oslash',
    "\u014D": 'omacr',
    "\u014C": 'Omacr',
    "\u0153": 'oelig',
    "\u0152": 'OElig',
    "\uD835\uDD2D": 'pfr',
    "\uD835\uDCC5": 'pscr',
    "\uD835\uDD61": 'popf',
    "\u2119": 'Popf',
    "\uD835\uDD13": 'Pfr',
    "\uD835\uDCAB": 'Pscr',
    "\uD835\uDD62": 'qopf',
    "\uD835\uDD2E": 'qfr',
    "\uD835\uDCC6": 'qscr',
    "\uD835\uDCAC": 'Qscr',
    "\uD835\uDD14": 'Qfr',
    "\u211A": 'Qopf',
    "\u0138": 'kgreen',
    "\uD835\uDD2F": 'rfr',
    "\uD835\uDD63": 'ropf',
    "\uD835\uDCC7": 'rscr',
    "\u211B": 'Rscr',
    "\u211C": 'Re',
    "\u211D": 'Ropf',
    "\u0155": 'racute',
    "\u0154": 'Racute',
    "\u0159": 'rcaron',
    "\u0158": 'Rcaron',
    "\u0157": 'rcedil',
    "\u0156": 'Rcedil',
    "\uD835\uDD64": 'sopf',
    "\uD835\uDCC8": 'sscr',
    "\uD835\uDD30": 'sfr',
    "\uD835\uDD4A": 'Sopf',
    "\uD835\uDD16": 'Sfr',
    "\uD835\uDCAE": 'Sscr',
    "\u24C8": 'oS',
    "\u015B": 'sacute',
    "\u015A": 'Sacute',
    "\u015D": 'scirc',
    "\u015C": 'Scirc',
    "\u0161": 'scaron',
    "\u0160": 'Scaron',
    "\u015F": 'scedil',
    "\u015E": 'Scedil',
    '\xDF': 'szlig',
    "\uD835\uDD31": 'tfr',
    "\uD835\uDCC9": 'tscr',
    "\uD835\uDD65": 'topf',
    "\uD835\uDCAF": 'Tscr',
    "\uD835\uDD17": 'Tfr',
    "\uD835\uDD4B": 'Topf',
    "\u0165": 'tcaron',
    "\u0164": 'Tcaron',
    "\u0163": 'tcedil',
    "\u0162": 'Tcedil',
    "\u2122": 'trade',
    "\u0167": 'tstrok',
    "\u0166": 'Tstrok',
    "\uD835\uDCCA": 'uscr',
    "\uD835\uDD66": 'uopf',
    "\uD835\uDD32": 'ufr',
    "\uD835\uDD4C": 'Uopf',
    "\uD835\uDD18": 'Ufr',
    "\uD835\uDCB0": 'Uscr',
    '\xFA': 'uacute',
    '\xDA': 'Uacute',
    '\xF9': 'ugrave',
    '\xD9': 'Ugrave',
    "\u016D": 'ubreve',
    "\u016C": 'Ubreve',
    '\xFB': 'ucirc',
    '\xDB': 'Ucirc',
    "\u016F": 'uring',
    "\u016E": 'Uring',
    '\xFC': 'uuml',
    '\xDC': 'Uuml',
    "\u0171": 'udblac',
    "\u0170": 'Udblac',
    "\u0169": 'utilde',
    "\u0168": 'Utilde',
    "\u0173": 'uogon',
    "\u0172": 'Uogon',
    "\u016B": 'umacr',
    "\u016A": 'Umacr',
    "\uD835\uDD33": 'vfr',
    "\uD835\uDD67": 'vopf',
    "\uD835\uDCCB": 'vscr',
    "\uD835\uDD19": 'Vfr',
    "\uD835\uDD4D": 'Vopf',
    "\uD835\uDCB1": 'Vscr',
    "\uD835\uDD68": 'wopf',
    "\uD835\uDCCC": 'wscr',
    "\uD835\uDD34": 'wfr',
    "\uD835\uDCB2": 'Wscr',
    "\uD835\uDD4E": 'Wopf',
    "\uD835\uDD1A": 'Wfr',
    "\u0175": 'wcirc',
    "\u0174": 'Wcirc',
    "\uD835\uDD35": 'xfr',
    "\uD835\uDCCD": 'xscr',
    "\uD835\uDD69": 'xopf',
    "\uD835\uDD4F": 'Xopf',
    "\uD835\uDD1B": 'Xfr',
    "\uD835\uDCB3": 'Xscr',
    "\uD835\uDD36": 'yfr',
    "\uD835\uDCCE": 'yscr',
    "\uD835\uDD6A": 'yopf',
    "\uD835\uDCB4": 'Yscr',
    "\uD835\uDD1C": 'Yfr',
    "\uD835\uDD50": 'Yopf',
    '\xFD': 'yacute',
    '\xDD': 'Yacute',
    "\u0177": 'ycirc',
    "\u0176": 'Ycirc',
    '\xFF': 'yuml',
    "\u0178": 'Yuml',
    "\uD835\uDCCF": 'zscr',
    "\uD835\uDD37": 'zfr',
    "\uD835\uDD6B": 'zopf',
    "\u2128": 'Zfr',
    "\u2124": 'Zopf',
    "\uD835\uDCB5": 'Zscr',
    "\u017A": 'zacute',
    "\u0179": 'Zacute',
    "\u017E": 'zcaron',
    "\u017D": 'Zcaron',
    "\u017C": 'zdot',
    "\u017B": 'Zdot',
    "\u01B5": 'imped',
    '\xFE': 'thorn',
    '\xDE': 'THORN',
    "\u0149": 'napos',
    "\u03B1": 'alpha',
    "\u0391": 'Alpha',
    "\u03B2": 'beta',
    "\u0392": 'Beta',
    "\u03B3": 'gamma',
    "\u0393": 'Gamma',
    "\u03B4": 'delta',
    "\u0394": 'Delta',
    "\u03B5": 'epsi',
    "\u03F5": 'epsiv',
    "\u0395": 'Epsilon',
    "\u03DD": 'gammad',
    "\u03DC": 'Gammad',
    "\u03B6": 'zeta',
    "\u0396": 'Zeta',
    "\u03B7": 'eta',
    "\u0397": 'Eta',
    "\u03B8": 'theta',
    "\u03D1": 'thetav',
    "\u0398": 'Theta',
    "\u03B9": 'iota',
    "\u0399": 'Iota',
    "\u03BA": 'kappa',
    "\u03F0": 'kappav',
    "\u039A": 'Kappa',
    "\u03BB": 'lambda',
    "\u039B": 'Lambda',
    "\u03BC": 'mu',
    '\xB5': 'micro',
    "\u039C": 'Mu',
    "\u03BD": 'nu',
    "\u039D": 'Nu',
    "\u03BE": 'xi',
    "\u039E": 'Xi',
    "\u03BF": 'omicron',
    "\u039F": 'Omicron',
    "\u03C0": 'pi',
    "\u03D6": 'piv',
    "\u03A0": 'Pi',
    "\u03C1": 'rho',
    "\u03F1": 'rhov',
    "\u03A1": 'Rho',
    "\u03C3": 'sigma',
    "\u03A3": 'Sigma',
    "\u03C2": 'sigmaf',
    "\u03C4": 'tau',
    "\u03A4": 'Tau',
    "\u03C5": 'upsi',
    "\u03A5": 'Upsilon',
    "\u03D2": 'Upsi',
    "\u03C6": 'phi',
    "\u03D5": 'phiv',
    "\u03A6": 'Phi',
    "\u03C7": 'chi',
    "\u03A7": 'Chi',
    "\u03C8": 'psi',
    "\u03A8": 'Psi',
    "\u03C9": 'omega',
    "\u03A9": 'ohm',
    "\u0430": 'acy',
    "\u0410": 'Acy',
    "\u0431": 'bcy',
    "\u0411": 'Bcy',
    "\u0432": 'vcy',
    "\u0412": 'Vcy',
    "\u0433": 'gcy',
    "\u0413": 'Gcy',
    "\u0453": 'gjcy',
    "\u0403": 'GJcy',
    "\u0434": 'dcy',
    "\u0414": 'Dcy',
    "\u0452": 'djcy',
    "\u0402": 'DJcy',
    "\u0435": 'iecy',
    "\u0415": 'IEcy',
    "\u0451": 'iocy',
    "\u0401": 'IOcy',
    "\u0454": 'jukcy',
    "\u0404": 'Jukcy',
    "\u0436": 'zhcy',
    "\u0416": 'ZHcy',
    "\u0437": 'zcy',
    "\u0417": 'Zcy',
    "\u0455": 'dscy',
    "\u0405": 'DScy',
    "\u0438": 'icy',
    "\u0418": 'Icy',
    "\u0456": 'iukcy',
    "\u0406": 'Iukcy',
    "\u0457": 'yicy',
    "\u0407": 'YIcy',
    "\u0439": 'jcy',
    "\u0419": 'Jcy',
    "\u0458": 'jsercy',
    "\u0408": 'Jsercy',
    "\u043A": 'kcy',
    "\u041A": 'Kcy',
    "\u045C": 'kjcy',
    "\u040C": 'KJcy',
    "\u043B": 'lcy',
    "\u041B": 'Lcy',
    "\u0459": 'ljcy',
    "\u0409": 'LJcy',
    "\u043C": 'mcy',
    "\u041C": 'Mcy',
    "\u043D": 'ncy',
    "\u041D": 'Ncy',
    "\u045A": 'njcy',
    "\u040A": 'NJcy',
    "\u043E": 'ocy',
    "\u041E": 'Ocy',
    "\u043F": 'pcy',
    "\u041F": 'Pcy',
    "\u0440": 'rcy',
    "\u0420": 'Rcy',
    "\u0441": 'scy',
    "\u0421": 'Scy',
    "\u0442": 'tcy',
    "\u0422": 'Tcy',
    "\u045B": 'tshcy',
    "\u040B": 'TSHcy',
    "\u0443": 'ucy',
    "\u0423": 'Ucy',
    "\u045E": 'ubrcy',
    "\u040E": 'Ubrcy',
    "\u0444": 'fcy',
    "\u0424": 'Fcy',
    "\u0445": 'khcy',
    "\u0425": 'KHcy',
    "\u0446": 'tscy',
    "\u0426": 'TScy',
    "\u0447": 'chcy',
    "\u0427": 'CHcy',
    "\u045F": 'dzcy',
    "\u040F": 'DZcy',
    "\u0448": 'shcy',
    "\u0428": 'SHcy',
    "\u0449": 'shchcy',
    "\u0429": 'SHCHcy',
    "\u044A": 'hardcy',
    "\u042A": 'HARDcy',
    "\u044B": 'ycy',
    "\u042B": 'Ycy',
    "\u044C": 'softcy',
    "\u042C": 'SOFTcy',
    "\u044D": 'ecy',
    "\u042D": 'Ecy',
    "\u044E": 'yucy',
    "\u042E": 'YUcy',
    "\u044F": 'yacy',
    "\u042F": 'YAcy',
    "\u2135": 'aleph',
    "\u2136": 'beth',
    "\u2137": 'gimel',
    "\u2138": 'daleth'
  };
  var regexEscape = /["&'<>`]/g;
  var escapeMap = {
    '"': '&quot;',
    '&': '&amp;',
    '\'': '&#x27;',
    '<': '&lt;',
    // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
    // following is not strictly necessary unless it’s part of a tag or an
    // unquoted attribute value. We’re only escaping it to support those
    // situations, and for XML support.
    '>': '&gt;',
    // In Internet Explorer ≤ 8, the backtick character can be used
    // to break out of (un)quoted attribute values or HTML comments.
    // See http://html5sec.org/#102, http://html5sec.org/#108, and
    // http://html5sec.org/#133.
    '`': '&#x60;'
  };
  var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
  var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
  var decodeMap = {
    'aacute': '\xE1',
    'Aacute': '\xC1',
    'abreve': "\u0103",
    'Abreve': "\u0102",
    'ac': "\u223E",
    'acd': "\u223F",
    'acE': "\u223E\u0333",
    'acirc': '\xE2',
    'Acirc': '\xC2',
    'acute': '\xB4',
    'acy': "\u0430",
    'Acy': "\u0410",
    'aelig': '\xE6',
    'AElig': '\xC6',
    'af': "\u2061",
    'afr': "\uD835\uDD1E",
    'Afr': "\uD835\uDD04",
    'agrave': '\xE0',
    'Agrave': '\xC0',
    'alefsym': "\u2135",
    'aleph': "\u2135",
    'alpha': "\u03B1",
    'Alpha': "\u0391",
    'amacr': "\u0101",
    'Amacr': "\u0100",
    'amalg': "\u2A3F",
    'amp': '&',
    'AMP': '&',
    'and': "\u2227",
    'And': "\u2A53",
    'andand': "\u2A55",
    'andd': "\u2A5C",
    'andslope': "\u2A58",
    'andv': "\u2A5A",
    'ang': "\u2220",
    'ange': "\u29A4",
    'angle': "\u2220",
    'angmsd': "\u2221",
    'angmsdaa': "\u29A8",
    'angmsdab': "\u29A9",
    'angmsdac': "\u29AA",
    'angmsdad': "\u29AB",
    'angmsdae': "\u29AC",
    'angmsdaf': "\u29AD",
    'angmsdag': "\u29AE",
    'angmsdah': "\u29AF",
    'angrt': "\u221F",
    'angrtvb': "\u22BE",
    'angrtvbd': "\u299D",
    'angsph': "\u2222",
    'angst': '\xC5',
    'angzarr': "\u237C",
    'aogon': "\u0105",
    'Aogon': "\u0104",
    'aopf': "\uD835\uDD52",
    'Aopf': "\uD835\uDD38",
    'ap': "\u2248",
    'apacir': "\u2A6F",
    'ape': "\u224A",
    'apE': "\u2A70",
    'apid': "\u224B",
    'apos': '\'',
    'ApplyFunction': "\u2061",
    'approx': "\u2248",
    'approxeq': "\u224A",
    'aring': '\xE5',
    'Aring': '\xC5',
    'ascr': "\uD835\uDCB6",
    'Ascr': "\uD835\uDC9C",
    'Assign': "\u2254",
    'ast': '*',
    'asymp': "\u2248",
    'asympeq': "\u224D",
    'atilde': '\xE3',
    'Atilde': '\xC3',
    'auml': '\xE4',
    'Auml': '\xC4',
    'awconint': "\u2233",
    'awint': "\u2A11",
    'backcong': "\u224C",
    'backepsilon': "\u03F6",
    'backprime': "\u2035",
    'backsim': "\u223D",
    'backsimeq': "\u22CD",
    'Backslash': "\u2216",
    'Barv': "\u2AE7",
    'barvee': "\u22BD",
    'barwed': "\u2305",
    'Barwed': "\u2306",
    'barwedge': "\u2305",
    'bbrk': "\u23B5",
    'bbrktbrk': "\u23B6",
    'bcong': "\u224C",
    'bcy': "\u0431",
    'Bcy': "\u0411",
    'bdquo': "\u201E",
    'becaus': "\u2235",
    'because': "\u2235",
    'Because': "\u2235",
    'bemptyv': "\u29B0",
    'bepsi': "\u03F6",
    'bernou': "\u212C",
    'Bernoullis': "\u212C",
    'beta': "\u03B2",
    'Beta': "\u0392",
    'beth': "\u2136",
    'between': "\u226C",
    'bfr': "\uD835\uDD1F",
    'Bfr': "\uD835\uDD05",
    'bigcap': "\u22C2",
    'bigcirc': "\u25EF",
    'bigcup': "\u22C3",
    'bigodot': "\u2A00",
    'bigoplus': "\u2A01",
    'bigotimes': "\u2A02",
    'bigsqcup': "\u2A06",
    'bigstar': "\u2605",
    'bigtriangledown': "\u25BD",
    'bigtriangleup': "\u25B3",
    'biguplus': "\u2A04",
    'bigvee': "\u22C1",
    'bigwedge': "\u22C0",
    'bkarow': "\u290D",
    'blacklozenge': "\u29EB",
    'blacksquare': "\u25AA",
    'blacktriangle': "\u25B4",
    'blacktriangledown': "\u25BE",
    'blacktriangleleft': "\u25C2",
    'blacktriangleright': "\u25B8",
    'blank': "\u2423",
    'blk12': "\u2592",
    'blk14': "\u2591",
    'blk34': "\u2593",
    'block': "\u2588",
    'bne': "=\u20E5",
    'bnequiv': "\u2261\u20E5",
    'bnot': "\u2310",
    'bNot': "\u2AED",
    'bopf': "\uD835\uDD53",
    'Bopf': "\uD835\uDD39",
    'bot': "\u22A5",
    'bottom': "\u22A5",
    'bowtie': "\u22C8",
    'boxbox': "\u29C9",
    'boxdl': "\u2510",
    'boxdL': "\u2555",
    'boxDl': "\u2556",
    'boxDL': "\u2557",
    'boxdr': "\u250C",
    'boxdR': "\u2552",
    'boxDr': "\u2553",
    'boxDR': "\u2554",
    'boxh': "\u2500",
    'boxH': "\u2550",
    'boxhd': "\u252C",
    'boxhD': "\u2565",
    'boxHd': "\u2564",
    'boxHD': "\u2566",
    'boxhu': "\u2534",
    'boxhU': "\u2568",
    'boxHu': "\u2567",
    'boxHU': "\u2569",
    'boxminus': "\u229F",
    'boxplus': "\u229E",
    'boxtimes': "\u22A0",
    'boxul': "\u2518",
    'boxuL': "\u255B",
    'boxUl': "\u255C",
    'boxUL': "\u255D",
    'boxur': "\u2514",
    'boxuR': "\u2558",
    'boxUr': "\u2559",
    'boxUR': "\u255A",
    'boxv': "\u2502",
    'boxV': "\u2551",
    'boxvh': "\u253C",
    'boxvH': "\u256A",
    'boxVh': "\u256B",
    'boxVH': "\u256C",
    'boxvl': "\u2524",
    'boxvL': "\u2561",
    'boxVl': "\u2562",
    'boxVL': "\u2563",
    'boxvr': "\u251C",
    'boxvR': "\u255E",
    'boxVr': "\u255F",
    'boxVR': "\u2560",
    'bprime': "\u2035",
    'breve': "\u02D8",
    'Breve': "\u02D8",
    'brvbar': '\xA6',
    'bscr': "\uD835\uDCB7",
    'Bscr': "\u212C",
    'bsemi': "\u204F",
    'bsim': "\u223D",
    'bsime': "\u22CD",
    'bsol': '\\',
    'bsolb': "\u29C5",
    'bsolhsub': "\u27C8",
    'bull': "\u2022",
    'bullet': "\u2022",
    'bump': "\u224E",
    'bumpe': "\u224F",
    'bumpE': "\u2AAE",
    'bumpeq': "\u224F",
    'Bumpeq': "\u224E",
    'cacute': "\u0107",
    'Cacute': "\u0106",
    'cap': "\u2229",
    'Cap': "\u22D2",
    'capand': "\u2A44",
    'capbrcup': "\u2A49",
    'capcap': "\u2A4B",
    'capcup': "\u2A47",
    'capdot': "\u2A40",
    'CapitalDifferentialD': "\u2145",
    'caps': "\u2229\uFE00",
    'caret': "\u2041",
    'caron': "\u02C7",
    'Cayleys': "\u212D",
    'ccaps': "\u2A4D",
    'ccaron': "\u010D",
    'Ccaron': "\u010C",
    'ccedil': '\xE7',
    'Ccedil': '\xC7',
    'ccirc': "\u0109",
    'Ccirc': "\u0108",
    'Cconint': "\u2230",
    'ccups': "\u2A4C",
    'ccupssm': "\u2A50",
    'cdot': "\u010B",
    'Cdot': "\u010A",
    'cedil': '\xB8',
    'Cedilla': '\xB8',
    'cemptyv': "\u29B2",
    'cent': '\xA2',
    'centerdot': '\xB7',
    'CenterDot': '\xB7',
    'cfr': "\uD835\uDD20",
    'Cfr': "\u212D",
    'chcy': "\u0447",
    'CHcy': "\u0427",
    'check': "\u2713",
    'checkmark': "\u2713",
    'chi': "\u03C7",
    'Chi': "\u03A7",
    'cir': "\u25CB",
    'circ': "\u02C6",
    'circeq': "\u2257",
    'circlearrowleft': "\u21BA",
    'circlearrowright': "\u21BB",
    'circledast': "\u229B",
    'circledcirc': "\u229A",
    'circleddash': "\u229D",
    'CircleDot': "\u2299",
    'circledR': '\xAE',
    'circledS': "\u24C8",
    'CircleMinus': "\u2296",
    'CirclePlus': "\u2295",
    'CircleTimes': "\u2297",
    'cire': "\u2257",
    'cirE': "\u29C3",
    'cirfnint': "\u2A10",
    'cirmid': "\u2AEF",
    'cirscir': "\u29C2",
    'ClockwiseContourIntegral': "\u2232",
    'CloseCurlyDoubleQuote': "\u201D",
    'CloseCurlyQuote': "\u2019",
    'clubs': "\u2663",
    'clubsuit': "\u2663",
    'colon': ':',
    'Colon': "\u2237",
    'colone': "\u2254",
    'Colone': "\u2A74",
    'coloneq': "\u2254",
    'comma': ',',
    'commat': '@',
    'comp': "\u2201",
    'compfn': "\u2218",
    'complement': "\u2201",
    'complexes': "\u2102",
    'cong': "\u2245",
    'congdot': "\u2A6D",
    'Congruent': "\u2261",
    'conint': "\u222E",
    'Conint': "\u222F",
    'ContourIntegral': "\u222E",
    'copf': "\uD835\uDD54",
    'Copf': "\u2102",
    'coprod': "\u2210",
    'Coproduct': "\u2210",
    'copy': '\xA9',
    'COPY': '\xA9',
    'copysr': "\u2117",
    'CounterClockwiseContourIntegral': "\u2233",
    'crarr': "\u21B5",
    'cross': "\u2717",
    'Cross': "\u2A2F",
    'cscr': "\uD835\uDCB8",
    'Cscr': "\uD835\uDC9E",
    'csub': "\u2ACF",
    'csube': "\u2AD1",
    'csup': "\u2AD0",
    'csupe': "\u2AD2",
    'ctdot': "\u22EF",
    'cudarrl': "\u2938",
    'cudarrr': "\u2935",
    'cuepr': "\u22DE",
    'cuesc': "\u22DF",
    'cularr': "\u21B6",
    'cularrp': "\u293D",
    'cup': "\u222A",
    'Cup': "\u22D3",
    'cupbrcap': "\u2A48",
    'cupcap': "\u2A46",
    'CupCap': "\u224D",
    'cupcup': "\u2A4A",
    'cupdot': "\u228D",
    'cupor': "\u2A45",
    'cups': "\u222A\uFE00",
    'curarr': "\u21B7",
    'curarrm': "\u293C",
    'curlyeqprec': "\u22DE",
    'curlyeqsucc': "\u22DF",
    'curlyvee': "\u22CE",
    'curlywedge': "\u22CF",
    'curren': '\xA4',
    'curvearrowleft': "\u21B6",
    'curvearrowright': "\u21B7",
    'cuvee': "\u22CE",
    'cuwed': "\u22CF",
    'cwconint': "\u2232",
    'cwint': "\u2231",
    'cylcty': "\u232D",
    'dagger': "\u2020",
    'Dagger': "\u2021",
    'daleth': "\u2138",
    'darr': "\u2193",
    'dArr': "\u21D3",
    'Darr': "\u21A1",
    'dash': "\u2010",
    'dashv': "\u22A3",
    'Dashv': "\u2AE4",
    'dbkarow': "\u290F",
    'dblac': "\u02DD",
    'dcaron': "\u010F",
    'Dcaron': "\u010E",
    'dcy': "\u0434",
    'Dcy': "\u0414",
    'dd': "\u2146",
    'DD': "\u2145",
    'ddagger': "\u2021",
    'ddarr': "\u21CA",
    'DDotrahd': "\u2911",
    'ddotseq': "\u2A77",
    'deg': '\xB0',
    'Del': "\u2207",
    'delta': "\u03B4",
    'Delta': "\u0394",
    'demptyv': "\u29B1",
    'dfisht': "\u297F",
    'dfr': "\uD835\uDD21",
    'Dfr': "\uD835\uDD07",
    'dHar': "\u2965",
    'dharl': "\u21C3",
    'dharr': "\u21C2",
    'DiacriticalAcute': '\xB4',
    'DiacriticalDot': "\u02D9",
    'DiacriticalDoubleAcute': "\u02DD",
    'DiacriticalGrave': '`',
    'DiacriticalTilde': "\u02DC",
    'diam': "\u22C4",
    'diamond': "\u22C4",
    'Diamond': "\u22C4",
    'diamondsuit': "\u2666",
    'diams': "\u2666",
    'die': '\xA8',
    'DifferentialD': "\u2146",
    'digamma': "\u03DD",
    'disin': "\u22F2",
    'div': '\xF7',
    'divide': '\xF7',
    'divideontimes': "\u22C7",
    'divonx': "\u22C7",
    'djcy': "\u0452",
    'DJcy': "\u0402",
    'dlcorn': "\u231E",
    'dlcrop': "\u230D",
    'dollar': '$',
    'dopf': "\uD835\uDD55",
    'Dopf': "\uD835\uDD3B",
    'dot': "\u02D9",
    'Dot': '\xA8',
    'DotDot': "\u20DC",
    'doteq': "\u2250",
    'doteqdot': "\u2251",
    'DotEqual': "\u2250",
    'dotminus': "\u2238",
    'dotplus': "\u2214",
    'dotsquare': "\u22A1",
    'doublebarwedge': "\u2306",
    'DoubleContourIntegral': "\u222F",
    'DoubleDot': '\xA8',
    'DoubleDownArrow': "\u21D3",
    'DoubleLeftArrow': "\u21D0",
    'DoubleLeftRightArrow': "\u21D4",
    'DoubleLeftTee': "\u2AE4",
    'DoubleLongLeftArrow': "\u27F8",
    'DoubleLongLeftRightArrow': "\u27FA",
    'DoubleLongRightArrow': "\u27F9",
    'DoubleRightArrow': "\u21D2",
    'DoubleRightTee': "\u22A8",
    'DoubleUpArrow': "\u21D1",
    'DoubleUpDownArrow': "\u21D5",
    'DoubleVerticalBar': "\u2225",
    'downarrow': "\u2193",
    'Downarrow': "\u21D3",
    'DownArrow': "\u2193",
    'DownArrowBar': "\u2913",
    'DownArrowUpArrow': "\u21F5",
    'DownBreve': "\u0311",
    'downdownarrows': "\u21CA",
    'downharpoonleft': "\u21C3",
    'downharpoonright': "\u21C2",
    'DownLeftRightVector': "\u2950",
    'DownLeftTeeVector': "\u295E",
    'DownLeftVector': "\u21BD",
    'DownLeftVectorBar': "\u2956",
    'DownRightTeeVector': "\u295F",
    'DownRightVector': "\u21C1",
    'DownRightVectorBar': "\u2957",
    'DownTee': "\u22A4",
    'DownTeeArrow': "\u21A7",
    'drbkarow': "\u2910",
    'drcorn': "\u231F",
    'drcrop': "\u230C",
    'dscr': "\uD835\uDCB9",
    'Dscr': "\uD835\uDC9F",
    'dscy': "\u0455",
    'DScy': "\u0405",
    'dsol': "\u29F6",
    'dstrok': "\u0111",
    'Dstrok': "\u0110",
    'dtdot': "\u22F1",
    'dtri': "\u25BF",
    'dtrif': "\u25BE",
    'duarr': "\u21F5",
    'duhar': "\u296F",
    'dwangle': "\u29A6",
    'dzcy': "\u045F",
    'DZcy': "\u040F",
    'dzigrarr': "\u27FF",
    'eacute': '\xE9',
    'Eacute': '\xC9',
    'easter': "\u2A6E",
    'ecaron': "\u011B",
    'Ecaron': "\u011A",
    'ecir': "\u2256",
    'ecirc': '\xEA',
    'Ecirc': '\xCA',
    'ecolon': "\u2255",
    'ecy': "\u044D",
    'Ecy': "\u042D",
    'eDDot': "\u2A77",
    'edot': "\u0117",
    'eDot': "\u2251",
    'Edot': "\u0116",
    'ee': "\u2147",
    'efDot': "\u2252",
    'efr': "\uD835\uDD22",
    'Efr': "\uD835\uDD08",
    'eg': "\u2A9A",
    'egrave': '\xE8',
    'Egrave': '\xC8',
    'egs': "\u2A96",
    'egsdot': "\u2A98",
    'el': "\u2A99",
    'Element': "\u2208",
    'elinters': "\u23E7",
    'ell': "\u2113",
    'els': "\u2A95",
    'elsdot': "\u2A97",
    'emacr': "\u0113",
    'Emacr': "\u0112",
    'empty': "\u2205",
    'emptyset': "\u2205",
    'EmptySmallSquare': "\u25FB",
    'emptyv': "\u2205",
    'EmptyVerySmallSquare': "\u25AB",
    'emsp': "\u2003",
    'emsp13': "\u2004",
    'emsp14': "\u2005",
    'eng': "\u014B",
    'ENG': "\u014A",
    'ensp': "\u2002",
    'eogon': "\u0119",
    'Eogon': "\u0118",
    'eopf': "\uD835\uDD56",
    'Eopf': "\uD835\uDD3C",
    'epar': "\u22D5",
    'eparsl': "\u29E3",
    'eplus': "\u2A71",
    'epsi': "\u03B5",
    'epsilon': "\u03B5",
    'Epsilon': "\u0395",
    'epsiv': "\u03F5",
    'eqcirc': "\u2256",
    'eqcolon': "\u2255",
    'eqsim': "\u2242",
    'eqslantgtr': "\u2A96",
    'eqslantless': "\u2A95",
    'Equal': "\u2A75",
    'equals': '=',
    'EqualTilde': "\u2242",
    'equest': "\u225F",
    'Equilibrium': "\u21CC",
    'equiv': "\u2261",
    'equivDD': "\u2A78",
    'eqvparsl': "\u29E5",
    'erarr': "\u2971",
    'erDot': "\u2253",
    'escr': "\u212F",
    'Escr': "\u2130",
    'esdot': "\u2250",
    'esim': "\u2242",
    'Esim': "\u2A73",
    'eta': "\u03B7",
    'Eta': "\u0397",
    'eth': '\xF0',
    'ETH': '\xD0',
    'euml': '\xEB',
    'Euml': '\xCB',
    'euro': "\u20AC",
    'excl': '!',
    'exist': "\u2203",
    'Exists': "\u2203",
    'expectation': "\u2130",
    'exponentiale': "\u2147",
    'ExponentialE': "\u2147",
    'fallingdotseq': "\u2252",
    'fcy': "\u0444",
    'Fcy': "\u0424",
    'female': "\u2640",
    'ffilig': "\uFB03",
    'fflig': "\uFB00",
    'ffllig': "\uFB04",
    'ffr': "\uD835\uDD23",
    'Ffr': "\uD835\uDD09",
    'filig': "\uFB01",
    'FilledSmallSquare': "\u25FC",
    'FilledVerySmallSquare': "\u25AA",
    'fjlig': 'fj',
    'flat': "\u266D",
    'fllig': "\uFB02",
    'fltns': "\u25B1",
    'fnof': "\u0192",
    'fopf': "\uD835\uDD57",
    'Fopf': "\uD835\uDD3D",
    'forall': "\u2200",
    'ForAll': "\u2200",
    'fork': "\u22D4",
    'forkv': "\u2AD9",
    'Fouriertrf': "\u2131",
    'fpartint': "\u2A0D",
    'frac12': '\xBD',
    'frac13': "\u2153",
    'frac14': '\xBC',
    'frac15': "\u2155",
    'frac16': "\u2159",
    'frac18': "\u215B",
    'frac23': "\u2154",
    'frac25': "\u2156",
    'frac34': '\xBE',
    'frac35': "\u2157",
    'frac38': "\u215C",
    'frac45': "\u2158",
    'frac56': "\u215A",
    'frac58': "\u215D",
    'frac78': "\u215E",
    'frasl': "\u2044",
    'frown': "\u2322",
    'fscr': "\uD835\uDCBB",
    'Fscr': "\u2131",
    'gacute': "\u01F5",
    'gamma': "\u03B3",
    'Gamma': "\u0393",
    'gammad': "\u03DD",
    'Gammad': "\u03DC",
    'gap': "\u2A86",
    'gbreve': "\u011F",
    'Gbreve': "\u011E",
    'Gcedil': "\u0122",
    'gcirc': "\u011D",
    'Gcirc': "\u011C",
    'gcy': "\u0433",
    'Gcy': "\u0413",
    'gdot': "\u0121",
    'Gdot': "\u0120",
    'ge': "\u2265",
    'gE': "\u2267",
    'gel': "\u22DB",
    'gEl': "\u2A8C",
    'geq': "\u2265",
    'geqq': "\u2267",
    'geqslant': "\u2A7E",
    'ges': "\u2A7E",
    'gescc': "\u2AA9",
    'gesdot': "\u2A80",
    'gesdoto': "\u2A82",
    'gesdotol': "\u2A84",
    'gesl': "\u22DB\uFE00",
    'gesles': "\u2A94",
    'gfr': "\uD835\uDD24",
    'Gfr': "\uD835\uDD0A",
    'gg': "\u226B",
    'Gg': "\u22D9",
    'ggg': "\u22D9",
    'gimel': "\u2137",
    'gjcy': "\u0453",
    'GJcy': "\u0403",
    'gl': "\u2277",
    'gla': "\u2AA5",
    'glE': "\u2A92",
    'glj': "\u2AA4",
    'gnap': "\u2A8A",
    'gnapprox': "\u2A8A",
    'gne': "\u2A88",
    'gnE': "\u2269",
    'gneq': "\u2A88",
    'gneqq': "\u2269",
    'gnsim': "\u22E7",
    'gopf': "\uD835\uDD58",
    'Gopf': "\uD835\uDD3E",
    'grave': '`',
    'GreaterEqual': "\u2265",
    'GreaterEqualLess': "\u22DB",
    'GreaterFullEqual': "\u2267",
    'GreaterGreater': "\u2AA2",
    'GreaterLess': "\u2277",
    'GreaterSlantEqual': "\u2A7E",
    'GreaterTilde': "\u2273",
    'gscr': "\u210A",
    'Gscr': "\uD835\uDCA2",
    'gsim': "\u2273",
    'gsime': "\u2A8E",
    'gsiml': "\u2A90",
    'gt': '>',
    'Gt': "\u226B",
    'GT': '>',
    'gtcc': "\u2AA7",
    'gtcir': "\u2A7A",
    'gtdot': "\u22D7",
    'gtlPar': "\u2995",
    'gtquest': "\u2A7C",
    'gtrapprox': "\u2A86",
    'gtrarr': "\u2978",
    'gtrdot': "\u22D7",
    'gtreqless': "\u22DB",
    'gtreqqless': "\u2A8C",
    'gtrless': "\u2277",
    'gtrsim': "\u2273",
    'gvertneqq': "\u2269\uFE00",
    'gvnE': "\u2269\uFE00",
    'Hacek': "\u02C7",
    'hairsp': "\u200A",
    'half': '\xBD',
    'hamilt': "\u210B",
    'hardcy': "\u044A",
    'HARDcy': "\u042A",
    'harr': "\u2194",
    'hArr': "\u21D4",
    'harrcir': "\u2948",
    'harrw': "\u21AD",
    'Hat': '^',
    'hbar': "\u210F",
    'hcirc': "\u0125",
    'Hcirc': "\u0124",
    'hearts': "\u2665",
    'heartsuit': "\u2665",
    'hellip': "\u2026",
    'hercon': "\u22B9",
    'hfr': "\uD835\uDD25",
    'Hfr': "\u210C",
    'HilbertSpace': "\u210B",
    'hksearow': "\u2925",
    'hkswarow': "\u2926",
    'hoarr': "\u21FF",
    'homtht': "\u223B",
    'hookleftarrow': "\u21A9",
    'hookrightarrow': "\u21AA",
    'hopf': "\uD835\uDD59",
    'Hopf': "\u210D",
    'horbar': "\u2015",
    'HorizontalLine': "\u2500",
    'hscr': "\uD835\uDCBD",
    'Hscr': "\u210B",
    'hslash': "\u210F",
    'hstrok': "\u0127",
    'Hstrok': "\u0126",
    'HumpDownHump': "\u224E",
    'HumpEqual': "\u224F",
    'hybull': "\u2043",
    'hyphen': "\u2010",
    'iacute': '\xED',
    'Iacute': '\xCD',
    'ic': "\u2063",
    'icirc': '\xEE',
    'Icirc': '\xCE',
    'icy': "\u0438",
    'Icy': "\u0418",
    'Idot': "\u0130",
    'iecy': "\u0435",
    'IEcy': "\u0415",
    'iexcl': '\xA1',
    'iff': "\u21D4",
    'ifr': "\uD835\uDD26",
    'Ifr': "\u2111",
    'igrave': '\xEC',
    'Igrave': '\xCC',
    'ii': "\u2148",
    'iiiint': "\u2A0C",
    'iiint': "\u222D",
    'iinfin': "\u29DC",
    'iiota': "\u2129",
    'ijlig': "\u0133",
    'IJlig': "\u0132",
    'Im': "\u2111",
    'imacr': "\u012B",
    'Imacr': "\u012A",
    'image': "\u2111",
    'ImaginaryI': "\u2148",
    'imagline': "\u2110",
    'imagpart': "\u2111",
    'imath': "\u0131",
    'imof': "\u22B7",
    'imped': "\u01B5",
    'Implies': "\u21D2",
    'in': "\u2208",
    'incare': "\u2105",
    'infin': "\u221E",
    'infintie': "\u29DD",
    'inodot': "\u0131",
    'int': "\u222B",
    'Int': "\u222C",
    'intcal': "\u22BA",
    'integers': "\u2124",
    'Integral': "\u222B",
    'intercal': "\u22BA",
    'Intersection': "\u22C2",
    'intlarhk': "\u2A17",
    'intprod': "\u2A3C",
    'InvisibleComma': "\u2063",
    'InvisibleTimes': "\u2062",
    'iocy': "\u0451",
    'IOcy': "\u0401",
    'iogon': "\u012F",
    'Iogon': "\u012E",
    'iopf': "\uD835\uDD5A",
    'Iopf': "\uD835\uDD40",
    'iota': "\u03B9",
    'Iota': "\u0399",
    'iprod': "\u2A3C",
    'iquest': '\xBF',
    'iscr': "\uD835\uDCBE",
    'Iscr': "\u2110",
    'isin': "\u2208",
    'isindot': "\u22F5",
    'isinE': "\u22F9",
    'isins': "\u22F4",
    'isinsv': "\u22F3",
    'isinv': "\u2208",
    'it': "\u2062",
    'itilde': "\u0129",
    'Itilde': "\u0128",
    'iukcy': "\u0456",
    'Iukcy': "\u0406",
    'iuml': '\xEF',
    'Iuml': '\xCF',
    'jcirc': "\u0135",
    'Jcirc': "\u0134",
    'jcy': "\u0439",
    'Jcy': "\u0419",
    'jfr': "\uD835\uDD27",
    'Jfr': "\uD835\uDD0D",
    'jmath': "\u0237",
    'jopf': "\uD835\uDD5B",
    'Jopf': "\uD835\uDD41",
    'jscr': "\uD835\uDCBF",
    'Jscr': "\uD835\uDCA5",
    'jsercy': "\u0458",
    'Jsercy': "\u0408",
    'jukcy': "\u0454",
    'Jukcy': "\u0404",
    'kappa': "\u03BA",
    'Kappa': "\u039A",
    'kappav': "\u03F0",
    'kcedil': "\u0137",
    'Kcedil': "\u0136",
    'kcy': "\u043A",
    'Kcy': "\u041A",
    'kfr': "\uD835\uDD28",
    'Kfr': "\uD835\uDD0E",
    'kgreen': "\u0138",
    'khcy': "\u0445",
    'KHcy': "\u0425",
    'kjcy': "\u045C",
    'KJcy': "\u040C",
    'kopf': "\uD835\uDD5C",
    'Kopf': "\uD835\uDD42",
    'kscr': "\uD835\uDCC0",
    'Kscr': "\uD835\uDCA6",
    'lAarr': "\u21DA",
    'lacute': "\u013A",
    'Lacute': "\u0139",
    'laemptyv': "\u29B4",
    'lagran': "\u2112",
    'lambda': "\u03BB",
    'Lambda': "\u039B",
    'lang': "\u27E8",
    'Lang': "\u27EA",
    'langd': "\u2991",
    'langle': "\u27E8",
    'lap': "\u2A85",
    'Laplacetrf': "\u2112",
    'laquo': '\xAB',
    'larr': "\u2190",
    'lArr': "\u21D0",
    'Larr': "\u219E",
    'larrb': "\u21E4",
    'larrbfs': "\u291F",
    'larrfs': "\u291D",
    'larrhk': "\u21A9",
    'larrlp': "\u21AB",
    'larrpl': "\u2939",
    'larrsim': "\u2973",
    'larrtl': "\u21A2",
    'lat': "\u2AAB",
    'latail': "\u2919",
    'lAtail': "\u291B",
    'late': "\u2AAD",
    'lates': "\u2AAD\uFE00",
    'lbarr': "\u290C",
    'lBarr': "\u290E",
    'lbbrk': "\u2772",
    'lbrace': '{',
    'lbrack': '[',
    'lbrke': "\u298B",
    'lbrksld': "\u298F",
    'lbrkslu': "\u298D",
    'lcaron': "\u013E",
    'Lcaron': "\u013D",
    'lcedil': "\u013C",
    'Lcedil': "\u013B",
    'lceil': "\u2308",
    'lcub': '{',
    'lcy': "\u043B",
    'Lcy': "\u041B",
    'ldca': "\u2936",
    'ldquo': "\u201C",
    'ldquor': "\u201E",
    'ldrdhar': "\u2967",
    'ldrushar': "\u294B",
    'ldsh': "\u21B2",
    'le': "\u2264",
    'lE': "\u2266",
    'LeftAngleBracket': "\u27E8",
    'leftarrow': "\u2190",
    'Leftarrow': "\u21D0",
    'LeftArrow': "\u2190",
    'LeftArrowBar': "\u21E4",
    'LeftArrowRightArrow': "\u21C6",
    'leftarrowtail': "\u21A2",
    'LeftCeiling': "\u2308",
    'LeftDoubleBracket': "\u27E6",
    'LeftDownTeeVector': "\u2961",
    'LeftDownVector': "\u21C3",
    'LeftDownVectorBar': "\u2959",
    'LeftFloor': "\u230A",
    'leftharpoondown': "\u21BD",
    'leftharpoonup': "\u21BC",
    'leftleftarrows': "\u21C7",
    'leftrightarrow': "\u2194",
    'Leftrightarrow': "\u21D4",
    'LeftRightArrow': "\u2194",
    'leftrightarrows': "\u21C6",
    'leftrightharpoons': "\u21CB",
    'leftrightsquigarrow': "\u21AD",
    'LeftRightVector': "\u294E",
    'LeftTee': "\u22A3",
    'LeftTeeArrow': "\u21A4",
    'LeftTeeVector': "\u295A",
    'leftthreetimes': "\u22CB",
    'LeftTriangle': "\u22B2",
    'LeftTriangleBar': "\u29CF",
    'LeftTriangleEqual': "\u22B4",
    'LeftUpDownVector': "\u2951",
    'LeftUpTeeVector': "\u2960",
    'LeftUpVector': "\u21BF",
    'LeftUpVectorBar': "\u2958",
    'LeftVector': "\u21BC",
    'LeftVectorBar': "\u2952",
    'leg': "\u22DA",
    'lEg': "\u2A8B",
    'leq': "\u2264",
    'leqq': "\u2266",
    'leqslant': "\u2A7D",
    'les': "\u2A7D",
    'lescc': "\u2AA8",
    'lesdot': "\u2A7F",
    'lesdoto': "\u2A81",
    'lesdotor': "\u2A83",
    'lesg': "\u22DA\uFE00",
    'lesges': "\u2A93",
    'lessapprox': "\u2A85",
    'lessdot': "\u22D6",
    'lesseqgtr': "\u22DA",
    'lesseqqgtr': "\u2A8B",
    'LessEqualGreater': "\u22DA",
    'LessFullEqual': "\u2266",
    'LessGreater': "\u2276",
    'lessgtr': "\u2276",
    'LessLess': "\u2AA1",
    'lesssim': "\u2272",
    'LessSlantEqual': "\u2A7D",
    'LessTilde': "\u2272",
    'lfisht': "\u297C",
    'lfloor': "\u230A",
    'lfr': "\uD835\uDD29",
    'Lfr': "\uD835\uDD0F",
    'lg': "\u2276",
    'lgE': "\u2A91",
    'lHar': "\u2962",
    'lhard': "\u21BD",
    'lharu': "\u21BC",
    'lharul': "\u296A",
    'lhblk': "\u2584",
    'ljcy': "\u0459",
    'LJcy': "\u0409",
    'll': "\u226A",
    'Ll': "\u22D8",
    'llarr': "\u21C7",
    'llcorner': "\u231E",
    'Lleftarrow': "\u21DA",
    'llhard': "\u296B",
    'lltri': "\u25FA",
    'lmidot': "\u0140",
    'Lmidot': "\u013F",
    'lmoust': "\u23B0",
    'lmoustache': "\u23B0",
    'lnap': "\u2A89",
    'lnapprox': "\u2A89",
    'lne': "\u2A87",
    'lnE': "\u2268",
    'lneq': "\u2A87",
    'lneqq': "\u2268",
    'lnsim': "\u22E6",
    'loang': "\u27EC",
    'loarr': "\u21FD",
    'lobrk': "\u27E6",
    'longleftarrow': "\u27F5",
    'Longleftarrow': "\u27F8",
    'LongLeftArrow': "\u27F5",
    'longleftrightarrow': "\u27F7",
    'Longleftrightarrow': "\u27FA",
    'LongLeftRightArrow': "\u27F7",
    'longmapsto': "\u27FC",
    'longrightarrow': "\u27F6",
    'Longrightarrow': "\u27F9",
    'LongRightArrow': "\u27F6",
    'looparrowleft': "\u21AB",
    'looparrowright': "\u21AC",
    'lopar': "\u2985",
    'lopf': "\uD835\uDD5D",
    'Lopf': "\uD835\uDD43",
    'loplus': "\u2A2D",
    'lotimes': "\u2A34",
    'lowast': "\u2217",
    'lowbar': '_',
    'LowerLeftArrow': "\u2199",
    'LowerRightArrow': "\u2198",
    'loz': "\u25CA",
    'lozenge': "\u25CA",
    'lozf': "\u29EB",
    'lpar': '(',
    'lparlt': "\u2993",
    'lrarr': "\u21C6",
    'lrcorner': "\u231F",
    'lrhar': "\u21CB",
    'lrhard': "\u296D",
    'lrm': "\u200E",
    'lrtri': "\u22BF",
    'lsaquo': "\u2039",
    'lscr': "\uD835\uDCC1",
    'Lscr': "\u2112",
    'lsh': "\u21B0",
    'Lsh': "\u21B0",
    'lsim': "\u2272",
    'lsime': "\u2A8D",
    'lsimg': "\u2A8F",
    'lsqb': '[',
    'lsquo': "\u2018",
    'lsquor': "\u201A",
    'lstrok': "\u0142",
    'Lstrok': "\u0141",
    'lt': '<',
    'Lt': "\u226A",
    'LT': '<',
    'ltcc': "\u2AA6",
    'ltcir': "\u2A79",
    'ltdot': "\u22D6",
    'lthree': "\u22CB",
    'ltimes': "\u22C9",
    'ltlarr': "\u2976",
    'ltquest': "\u2A7B",
    'ltri': "\u25C3",
    'ltrie': "\u22B4",
    'ltrif': "\u25C2",
    'ltrPar': "\u2996",
    'lurdshar': "\u294A",
    'luruhar': "\u2966",
    'lvertneqq': "\u2268\uFE00",
    'lvnE': "\u2268\uFE00",
    'macr': '\xAF',
    'male': "\u2642",
    'malt': "\u2720",
    'maltese': "\u2720",
    'map': "\u21A6",
    'Map': "\u2905",
    'mapsto': "\u21A6",
    'mapstodown': "\u21A7",
    'mapstoleft': "\u21A4",
    'mapstoup': "\u21A5",
    'marker': "\u25AE",
    'mcomma': "\u2A29",
    'mcy': "\u043C",
    'Mcy': "\u041C",
    'mdash': "\u2014",
    'mDDot': "\u223A",
    'measuredangle': "\u2221",
    'MediumSpace': "\u205F",
    'Mellintrf': "\u2133",
    'mfr': "\uD835\uDD2A",
    'Mfr': "\uD835\uDD10",
    'mho': "\u2127",
    'micro': '\xB5',
    'mid': "\u2223",
    'midast': '*',
    'midcir': "\u2AF0",
    'middot': '\xB7',
    'minus': "\u2212",
    'minusb': "\u229F",
    'minusd': "\u2238",
    'minusdu': "\u2A2A",
    'MinusPlus': "\u2213",
    'mlcp': "\u2ADB",
    'mldr': "\u2026",
    'mnplus': "\u2213",
    'models': "\u22A7",
    'mopf': "\uD835\uDD5E",
    'Mopf': "\uD835\uDD44",
    'mp': "\u2213",
    'mscr': "\uD835\uDCC2",
    'Mscr': "\u2133",
    'mstpos': "\u223E",
    'mu': "\u03BC",
    'Mu': "\u039C",
    'multimap': "\u22B8",
    'mumap': "\u22B8",
    'nabla': "\u2207",
    'nacute': "\u0144",
    'Nacute': "\u0143",
    'nang': "\u2220\u20D2",
    'nap': "\u2249",
    'napE': "\u2A70\u0338",
    'napid': "\u224B\u0338",
    'napos': "\u0149",
    'napprox': "\u2249",
    'natur': "\u266E",
    'natural': "\u266E",
    'naturals': "\u2115",
    'nbsp': '\xA0',
    'nbump': "\u224E\u0338",
    'nbumpe': "\u224F\u0338",
    'ncap': "\u2A43",
    'ncaron': "\u0148",
    'Ncaron': "\u0147",
    'ncedil': "\u0146",
    'Ncedil': "\u0145",
    'ncong': "\u2247",
    'ncongdot': "\u2A6D\u0338",
    'ncup': "\u2A42",
    'ncy': "\u043D",
    'Ncy': "\u041D",
    'ndash': "\u2013",
    'ne': "\u2260",
    'nearhk': "\u2924",
    'nearr': "\u2197",
    'neArr': "\u21D7",
    'nearrow': "\u2197",
    'nedot': "\u2250\u0338",
    'NegativeMediumSpace': "\u200B",
    'NegativeThickSpace': "\u200B",
    'NegativeThinSpace': "\u200B",
    'NegativeVeryThinSpace': "\u200B",
    'nequiv': "\u2262",
    'nesear': "\u2928",
    'nesim': "\u2242\u0338",
    'NestedGreaterGreater': "\u226B",
    'NestedLessLess': "\u226A",
    'NewLine': '\n',
    'nexist': "\u2204",
    'nexists': "\u2204",
    'nfr': "\uD835\uDD2B",
    'Nfr': "\uD835\uDD11",
    'nge': "\u2271",
    'ngE': "\u2267\u0338",
    'ngeq': "\u2271",
    'ngeqq': "\u2267\u0338",
    'ngeqslant': "\u2A7E\u0338",
    'nges': "\u2A7E\u0338",
    'nGg': "\u22D9\u0338",
    'ngsim': "\u2275",
    'ngt': "\u226F",
    'nGt': "\u226B\u20D2",
    'ngtr': "\u226F",
    'nGtv': "\u226B\u0338",
    'nharr': "\u21AE",
    'nhArr': "\u21CE",
    'nhpar': "\u2AF2",
    'ni': "\u220B",
    'nis': "\u22FC",
    'nisd': "\u22FA",
    'niv': "\u220B",
    'njcy': "\u045A",
    'NJcy': "\u040A",
    'nlarr': "\u219A",
    'nlArr': "\u21CD",
    'nldr': "\u2025",
    'nle': "\u2270",
    'nlE': "\u2266\u0338",
    'nleftarrow': "\u219A",
    'nLeftarrow': "\u21CD",
    'nleftrightarrow': "\u21AE",
    'nLeftrightarrow': "\u21CE",
    'nleq': "\u2270",
    'nleqq': "\u2266\u0338",
    'nleqslant': "\u2A7D\u0338",
    'nles': "\u2A7D\u0338",
    'nless': "\u226E",
    'nLl': "\u22D8\u0338",
    'nlsim': "\u2274",
    'nlt': "\u226E",
    'nLt': "\u226A\u20D2",
    'nltri': "\u22EA",
    'nltrie': "\u22EC",
    'nLtv': "\u226A\u0338",
    'nmid': "\u2224",
    'NoBreak': "\u2060",
    'NonBreakingSpace': '\xA0',
    'nopf': "\uD835\uDD5F",
    'Nopf': "\u2115",
    'not': '\xAC',
    'Not': "\u2AEC",
    'NotCongruent': "\u2262",
    'NotCupCap': "\u226D",
    'NotDoubleVerticalBar': "\u2226",
    'NotElement': "\u2209",
    'NotEqual': "\u2260",
    'NotEqualTilde': "\u2242\u0338",
    'NotExists': "\u2204",
    'NotGreater': "\u226F",
    'NotGreaterEqual': "\u2271",
    'NotGreaterFullEqual': "\u2267\u0338",
    'NotGreaterGreater': "\u226B\u0338",
    'NotGreaterLess': "\u2279",
    'NotGreaterSlantEqual': "\u2A7E\u0338",
    'NotGreaterTilde': "\u2275",
    'NotHumpDownHump': "\u224E\u0338",
    'NotHumpEqual': "\u224F\u0338",
    'notin': "\u2209",
    'notindot': "\u22F5\u0338",
    'notinE': "\u22F9\u0338",
    'notinva': "\u2209",
    'notinvb': "\u22F7",
    'notinvc': "\u22F6",
    'NotLeftTriangle': "\u22EA",
    'NotLeftTriangleBar': "\u29CF\u0338",
    'NotLeftTriangleEqual': "\u22EC",
    'NotLess': "\u226E",
    'NotLessEqual': "\u2270",
    'NotLessGreater': "\u2278",
    'NotLessLess': "\u226A\u0338",
    'NotLessSlantEqual': "\u2A7D\u0338",
    'NotLessTilde': "\u2274",
    'NotNestedGreaterGreater': "\u2AA2\u0338",
    'NotNestedLessLess': "\u2AA1\u0338",
    'notni': "\u220C",
    'notniva': "\u220C",
    'notnivb': "\u22FE",
    'notnivc': "\u22FD",
    'NotPrecedes': "\u2280",
    'NotPrecedesEqual': "\u2AAF\u0338",
    'NotPrecedesSlantEqual': "\u22E0",
    'NotReverseElement': "\u220C",
    'NotRightTriangle': "\u22EB",
    'NotRightTriangleBar': "\u29D0\u0338",
    'NotRightTriangleEqual': "\u22ED",
    'NotSquareSubset': "\u228F\u0338",
    'NotSquareSubsetEqual': "\u22E2",
    'NotSquareSuperset': "\u2290\u0338",
    'NotSquareSupersetEqual': "\u22E3",
    'NotSubset': "\u2282\u20D2",
    'NotSubsetEqual': "\u2288",
    'NotSucceeds': "\u2281",
    'NotSucceedsEqual': "\u2AB0\u0338",
    'NotSucceedsSlantEqual': "\u22E1",
    'NotSucceedsTilde': "\u227F\u0338",
    'NotSuperset': "\u2283\u20D2",
    'NotSupersetEqual': "\u2289",
    'NotTilde': "\u2241",
    'NotTildeEqual': "\u2244",
    'NotTildeFullEqual': "\u2247",
    'NotTildeTilde': "\u2249",
    'NotVerticalBar': "\u2224",
    'npar': "\u2226",
    'nparallel': "\u2226",
    'nparsl': "\u2AFD\u20E5",
    'npart': "\u2202\u0338",
    'npolint': "\u2A14",
    'npr': "\u2280",
    'nprcue': "\u22E0",
    'npre': "\u2AAF\u0338",
    'nprec': "\u2280",
    'npreceq': "\u2AAF\u0338",
    'nrarr': "\u219B",
    'nrArr': "\u21CF",
    'nrarrc': "\u2933\u0338",
    'nrarrw': "\u219D\u0338",
    'nrightarrow': "\u219B",
    'nRightarrow': "\u21CF",
    'nrtri': "\u22EB",
    'nrtrie': "\u22ED",
    'nsc': "\u2281",
    'nsccue': "\u22E1",
    'nsce': "\u2AB0\u0338",
    'nscr': "\uD835\uDCC3",
    'Nscr': "\uD835\uDCA9",
    'nshortmid': "\u2224",
    'nshortparallel': "\u2226",
    'nsim': "\u2241",
    'nsime': "\u2244",
    'nsimeq': "\u2244",
    'nsmid': "\u2224",
    'nspar': "\u2226",
    'nsqsube': "\u22E2",
    'nsqsupe': "\u22E3",
    'nsub': "\u2284",
    'nsube': "\u2288",
    'nsubE': "\u2AC5\u0338",
    'nsubset': "\u2282\u20D2",
    'nsubseteq': "\u2288",
    'nsubseteqq': "\u2AC5\u0338",
    'nsucc': "\u2281",
    'nsucceq': "\u2AB0\u0338",
    'nsup': "\u2285",
    'nsupe': "\u2289",
    'nsupE': "\u2AC6\u0338",
    'nsupset': "\u2283\u20D2",
    'nsupseteq': "\u2289",
    'nsupseteqq': "\u2AC6\u0338",
    'ntgl': "\u2279",
    'ntilde': '\xF1',
    'Ntilde': '\xD1',
    'ntlg': "\u2278",
    'ntriangleleft': "\u22EA",
    'ntrianglelefteq': "\u22EC",
    'ntriangleright': "\u22EB",
    'ntrianglerighteq': "\u22ED",
    'nu': "\u03BD",
    'Nu': "\u039D",
    'num': '#',
    'numero': "\u2116",
    'numsp': "\u2007",
    'nvap': "\u224D\u20D2",
    'nvdash': "\u22AC",
    'nvDash': "\u22AD",
    'nVdash': "\u22AE",
    'nVDash': "\u22AF",
    'nvge': "\u2265\u20D2",
    'nvgt': ">\u20D2",
    'nvHarr': "\u2904",
    'nvinfin': "\u29DE",
    'nvlArr': "\u2902",
    'nvle': "\u2264\u20D2",
    'nvlt': "<\u20D2",
    'nvltrie': "\u22B4\u20D2",
    'nvrArr': "\u2903",
    'nvrtrie': "\u22B5\u20D2",
    'nvsim': "\u223C\u20D2",
    'nwarhk': "\u2923",
    'nwarr': "\u2196",
    'nwArr': "\u21D6",
    'nwarrow': "\u2196",
    'nwnear': "\u2927",
    'oacute': '\xF3',
    'Oacute': '\xD3',
    'oast': "\u229B",
    'ocir': "\u229A",
    'ocirc': '\xF4',
    'Ocirc': '\xD4',
    'ocy': "\u043E",
    'Ocy': "\u041E",
    'odash': "\u229D",
    'odblac': "\u0151",
    'Odblac': "\u0150",
    'odiv': "\u2A38",
    'odot': "\u2299",
    'odsold': "\u29BC",
    'oelig': "\u0153",
    'OElig': "\u0152",
    'ofcir': "\u29BF",
    'ofr': "\uD835\uDD2C",
    'Ofr': "\uD835\uDD12",
    'ogon': "\u02DB",
    'ograve': '\xF2',
    'Ograve': '\xD2',
    'ogt': "\u29C1",
    'ohbar': "\u29B5",
    'ohm': "\u03A9",
    'oint': "\u222E",
    'olarr': "\u21BA",
    'olcir': "\u29BE",
    'olcross': "\u29BB",
    'oline': "\u203E",
    'olt': "\u29C0",
    'omacr': "\u014D",
    'Omacr': "\u014C",
    'omega': "\u03C9",
    'Omega': "\u03A9",
    'omicron': "\u03BF",
    'Omicron': "\u039F",
    'omid': "\u29B6",
    'ominus': "\u2296",
    'oopf': "\uD835\uDD60",
    'Oopf': "\uD835\uDD46",
    'opar': "\u29B7",
    'OpenCurlyDoubleQuote': "\u201C",
    'OpenCurlyQuote': "\u2018",
    'operp': "\u29B9",
    'oplus': "\u2295",
    'or': "\u2228",
    'Or': "\u2A54",
    'orarr': "\u21BB",
    'ord': "\u2A5D",
    'order': "\u2134",
    'orderof': "\u2134",
    'ordf': '\xAA',
    'ordm': '\xBA',
    'origof': "\u22B6",
    'oror': "\u2A56",
    'orslope': "\u2A57",
    'orv': "\u2A5B",
    'oS': "\u24C8",
    'oscr': "\u2134",
    'Oscr': "\uD835\uDCAA",
    'oslash': '\xF8',
    'Oslash': '\xD8',
    'osol': "\u2298",
    'otilde': '\xF5',
    'Otilde': '\xD5',
    'otimes': "\u2297",
    'Otimes': "\u2A37",
    'otimesas': "\u2A36",
    'ouml': '\xF6',
    'Ouml': '\xD6',
    'ovbar': "\u233D",
    'OverBar': "\u203E",
    'OverBrace': "\u23DE",
    'OverBracket': "\u23B4",
    'OverParenthesis': "\u23DC",
    'par': "\u2225",
    'para': '\xB6',
    'parallel': "\u2225",
    'parsim': "\u2AF3",
    'parsl': "\u2AFD",
    'part': "\u2202",
    'PartialD': "\u2202",
    'pcy': "\u043F",
    'Pcy': "\u041F",
    'percnt': '%',
    'period': '.',
    'permil': "\u2030",
    'perp': "\u22A5",
    'pertenk': "\u2031",
    'pfr': "\uD835\uDD2D",
    'Pfr': "\uD835\uDD13",
    'phi': "\u03C6",
    'Phi': "\u03A6",
    'phiv': "\u03D5",
    'phmmat': "\u2133",
    'phone': "\u260E",
    'pi': "\u03C0",
    'Pi': "\u03A0",
    'pitchfork': "\u22D4",
    'piv': "\u03D6",
    'planck': "\u210F",
    'planckh': "\u210E",
    'plankv': "\u210F",
    'plus': '+',
    'plusacir': "\u2A23",
    'plusb': "\u229E",
    'pluscir': "\u2A22",
    'plusdo': "\u2214",
    'plusdu': "\u2A25",
    'pluse': "\u2A72",
    'PlusMinus': '\xB1',
    'plusmn': '\xB1',
    'plussim': "\u2A26",
    'plustwo': "\u2A27",
    'pm': '\xB1',
    'Poincareplane': "\u210C",
    'pointint': "\u2A15",
    'popf': "\uD835\uDD61",
    'Popf': "\u2119",
    'pound': '\xA3',
    'pr': "\u227A",
    'Pr': "\u2ABB",
    'prap': "\u2AB7",
    'prcue': "\u227C",
    'pre': "\u2AAF",
    'prE': "\u2AB3",
    'prec': "\u227A",
    'precapprox': "\u2AB7",
    'preccurlyeq': "\u227C",
    'Precedes': "\u227A",
    'PrecedesEqual': "\u2AAF",
    'PrecedesSlantEqual': "\u227C",
    'PrecedesTilde': "\u227E",
    'preceq': "\u2AAF",
    'precnapprox': "\u2AB9",
    'precneqq': "\u2AB5",
    'precnsim': "\u22E8",
    'precsim': "\u227E",
    'prime': "\u2032",
    'Prime': "\u2033",
    'primes': "\u2119",
    'prnap': "\u2AB9",
    'prnE': "\u2AB5",
    'prnsim': "\u22E8",
    'prod': "\u220F",
    'Product': "\u220F",
    'profalar': "\u232E",
    'profline': "\u2312",
    'profsurf': "\u2313",
    'prop': "\u221D",
    'Proportion': "\u2237",
    'Proportional': "\u221D",
    'propto': "\u221D",
    'prsim': "\u227E",
    'prurel': "\u22B0",
    'pscr': "\uD835\uDCC5",
    'Pscr': "\uD835\uDCAB",
    'psi': "\u03C8",
    'Psi': "\u03A8",
    'puncsp': "\u2008",
    'qfr': "\uD835\uDD2E",
    'Qfr': "\uD835\uDD14",
    'qint': "\u2A0C",
    'qopf': "\uD835\uDD62",
    'Qopf': "\u211A",
    'qprime': "\u2057",
    'qscr': "\uD835\uDCC6",
    'Qscr': "\uD835\uDCAC",
    'quaternions': "\u210D",
    'quatint': "\u2A16",
    'quest': '?',
    'questeq': "\u225F",
    'quot': '"',
    'QUOT': '"',
    'rAarr': "\u21DB",
    'race': "\u223D\u0331",
    'racute': "\u0155",
    'Racute': "\u0154",
    'radic': "\u221A",
    'raemptyv': "\u29B3",
    'rang': "\u27E9",
    'Rang': "\u27EB",
    'rangd': "\u2992",
    'range': "\u29A5",
    'rangle': "\u27E9",
    'raquo': '\xBB',
    'rarr': "\u2192",
    'rArr': "\u21D2",
    'Rarr': "\u21A0",
    'rarrap': "\u2975",
    'rarrb': "\u21E5",
    'rarrbfs': "\u2920",
    'rarrc': "\u2933",
    'rarrfs': "\u291E",
    'rarrhk': "\u21AA",
    'rarrlp': "\u21AC",
    'rarrpl': "\u2945",
    'rarrsim': "\u2974",
    'rarrtl': "\u21A3",
    'Rarrtl': "\u2916",
    'rarrw': "\u219D",
    'ratail': "\u291A",
    'rAtail': "\u291C",
    'ratio': "\u2236",
    'rationals': "\u211A",
    'rbarr': "\u290D",
    'rBarr': "\u290F",
    'RBarr': "\u2910",
    'rbbrk': "\u2773",
    'rbrace': '}',
    'rbrack': ']',
    'rbrke': "\u298C",
    'rbrksld': "\u298E",
    'rbrkslu': "\u2990",
    'rcaron': "\u0159",
    'Rcaron': "\u0158",
    'rcedil': "\u0157",
    'Rcedil': "\u0156",
    'rceil': "\u2309",
    'rcub': '}',
    'rcy': "\u0440",
    'Rcy': "\u0420",
    'rdca': "\u2937",
    'rdldhar': "\u2969",
    'rdquo': "\u201D",
    'rdquor': "\u201D",
    'rdsh': "\u21B3",
    'Re': "\u211C",
    'real': "\u211C",
    'realine': "\u211B",
    'realpart': "\u211C",
    'reals': "\u211D",
    'rect': "\u25AD",
    'reg': '\xAE',
    'REG': '\xAE',
    'ReverseElement': "\u220B",
    'ReverseEquilibrium': "\u21CB",
    'ReverseUpEquilibrium': "\u296F",
    'rfisht': "\u297D",
    'rfloor': "\u230B",
    'rfr': "\uD835\uDD2F",
    'Rfr': "\u211C",
    'rHar': "\u2964",
    'rhard': "\u21C1",
    'rharu': "\u21C0",
    'rharul': "\u296C",
    'rho': "\u03C1",
    'Rho': "\u03A1",
    'rhov': "\u03F1",
    'RightAngleBracket': "\u27E9",
    'rightarrow': "\u2192",
    'Rightarrow': "\u21D2",
    'RightArrow': "\u2192",
    'RightArrowBar': "\u21E5",
    'RightArrowLeftArrow': "\u21C4",
    'rightarrowtail': "\u21A3",
    'RightCeiling': "\u2309",
    'RightDoubleBracket': "\u27E7",
    'RightDownTeeVector': "\u295D",
    'RightDownVector': "\u21C2",
    'RightDownVectorBar': "\u2955",
    'RightFloor': "\u230B",
    'rightharpoondown': "\u21C1",
    'rightharpoonup': "\u21C0",
    'rightleftarrows': "\u21C4",
    'rightleftharpoons': "\u21CC",
    'rightrightarrows': "\u21C9",
    'rightsquigarrow': "\u219D",
    'RightTee': "\u22A2",
    'RightTeeArrow': "\u21A6",
    'RightTeeVector': "\u295B",
    'rightthreetimes': "\u22CC",
    'RightTriangle': "\u22B3",
    'RightTriangleBar': "\u29D0",
    'RightTriangleEqual': "\u22B5",
    'RightUpDownVector': "\u294F",
    'RightUpTeeVector': "\u295C",
    'RightUpVector': "\u21BE",
    'RightUpVectorBar': "\u2954",
    'RightVector': "\u21C0",
    'RightVectorBar': "\u2953",
    'ring': "\u02DA",
    'risingdotseq': "\u2253",
    'rlarr': "\u21C4",
    'rlhar': "\u21CC",
    'rlm': "\u200F",
    'rmoust': "\u23B1",
    'rmoustache': "\u23B1",
    'rnmid': "\u2AEE",
    'roang': "\u27ED",
    'roarr': "\u21FE",
    'robrk': "\u27E7",
    'ropar': "\u2986",
    'ropf': "\uD835\uDD63",
    'Ropf': "\u211D",
    'roplus': "\u2A2E",
    'rotimes': "\u2A35",
    'RoundImplies': "\u2970",
    'rpar': ')',
    'rpargt': "\u2994",
    'rppolint': "\u2A12",
    'rrarr': "\u21C9",
    'Rrightarrow': "\u21DB",
    'rsaquo': "\u203A",
    'rscr': "\uD835\uDCC7",
    'Rscr': "\u211B",
    'rsh': "\u21B1",
    'Rsh': "\u21B1",
    'rsqb': ']',
    'rsquo': "\u2019",
    'rsquor': "\u2019",
    'rthree': "\u22CC",
    'rtimes': "\u22CA",
    'rtri': "\u25B9",
    'rtrie': "\u22B5",
    'rtrif': "\u25B8",
    'rtriltri': "\u29CE",
    'RuleDelayed': "\u29F4",
    'ruluhar': "\u2968",
    'rx': "\u211E",
    'sacute': "\u015B",
    'Sacute': "\u015A",
    'sbquo': "\u201A",
    'sc': "\u227B",
    'Sc': "\u2ABC",
    'scap': "\u2AB8",
    'scaron': "\u0161",
    'Scaron': "\u0160",
    'sccue': "\u227D",
    'sce': "\u2AB0",
    'scE': "\u2AB4",
    'scedil': "\u015F",
    'Scedil': "\u015E",
    'scirc': "\u015D",
    'Scirc': "\u015C",
    'scnap': "\u2ABA",
    'scnE': "\u2AB6",
    'scnsim': "\u22E9",
    'scpolint': "\u2A13",
    'scsim': "\u227F",
    'scy': "\u0441",
    'Scy': "\u0421",
    'sdot': "\u22C5",
    'sdotb': "\u22A1",
    'sdote': "\u2A66",
    'searhk': "\u2925",
    'searr': "\u2198",
    'seArr': "\u21D8",
    'searrow': "\u2198",
    'sect': '\xA7',
    'semi': ';',
    'seswar': "\u2929",
    'setminus': "\u2216",
    'setmn': "\u2216",
    'sext': "\u2736",
    'sfr': "\uD835\uDD30",
    'Sfr': "\uD835\uDD16",
    'sfrown': "\u2322",
    'sharp': "\u266F",
    'shchcy': "\u0449",
    'SHCHcy': "\u0429",
    'shcy': "\u0448",
    'SHcy': "\u0428",
    'ShortDownArrow': "\u2193",
    'ShortLeftArrow': "\u2190",
    'shortmid': "\u2223",
    'shortparallel': "\u2225",
    'ShortRightArrow': "\u2192",
    'ShortUpArrow': "\u2191",
    'shy': '\xAD',
    'sigma': "\u03C3",
    'Sigma': "\u03A3",
    'sigmaf': "\u03C2",
    'sigmav': "\u03C2",
    'sim': "\u223C",
    'simdot': "\u2A6A",
    'sime': "\u2243",
    'simeq': "\u2243",
    'simg': "\u2A9E",
    'simgE': "\u2AA0",
    'siml': "\u2A9D",
    'simlE': "\u2A9F",
    'simne': "\u2246",
    'simplus': "\u2A24",
    'simrarr': "\u2972",
    'slarr': "\u2190",
    'SmallCircle': "\u2218",
    'smallsetminus': "\u2216",
    'smashp': "\u2A33",
    'smeparsl': "\u29E4",
    'smid': "\u2223",
    'smile': "\u2323",
    'smt': "\u2AAA",
    'smte': "\u2AAC",
    'smtes': "\u2AAC\uFE00",
    'softcy': "\u044C",
    'SOFTcy': "\u042C",
    'sol': '/',
    'solb': "\u29C4",
    'solbar': "\u233F",
    'sopf': "\uD835\uDD64",
    'Sopf': "\uD835\uDD4A",
    'spades': "\u2660",
    'spadesuit': "\u2660",
    'spar': "\u2225",
    'sqcap': "\u2293",
    'sqcaps': "\u2293\uFE00",
    'sqcup': "\u2294",
    'sqcups': "\u2294\uFE00",
    'Sqrt': "\u221A",
    'sqsub': "\u228F",
    'sqsube': "\u2291",
    'sqsubset': "\u228F",
    'sqsubseteq': "\u2291",
    'sqsup': "\u2290",
    'sqsupe': "\u2292",
    'sqsupset': "\u2290",
    'sqsupseteq': "\u2292",
    'squ': "\u25A1",
    'square': "\u25A1",
    'Square': "\u25A1",
    'SquareIntersection': "\u2293",
    'SquareSubset': "\u228F",
    'SquareSubsetEqual': "\u2291",
    'SquareSuperset': "\u2290",
    'SquareSupersetEqual': "\u2292",
    'SquareUnion': "\u2294",
    'squarf': "\u25AA",
    'squf': "\u25AA",
    'srarr': "\u2192",
    'sscr': "\uD835\uDCC8",
    'Sscr': "\uD835\uDCAE",
    'ssetmn': "\u2216",
    'ssmile': "\u2323",
    'sstarf': "\u22C6",
    'star': "\u2606",
    'Star': "\u22C6",
    'starf': "\u2605",
    'straightepsilon': "\u03F5",
    'straightphi': "\u03D5",
    'strns': '\xAF',
    'sub': "\u2282",
    'Sub': "\u22D0",
    'subdot': "\u2ABD",
    'sube': "\u2286",
    'subE': "\u2AC5",
    'subedot': "\u2AC3",
    'submult': "\u2AC1",
    'subne': "\u228A",
    'subnE': "\u2ACB",
    'subplus': "\u2ABF",
    'subrarr': "\u2979",
    'subset': "\u2282",
    'Subset': "\u22D0",
    'subseteq': "\u2286",
    'subseteqq': "\u2AC5",
    'SubsetEqual': "\u2286",
    'subsetneq': "\u228A",
    'subsetneqq': "\u2ACB",
    'subsim': "\u2AC7",
    'subsub': "\u2AD5",
    'subsup': "\u2AD3",
    'succ': "\u227B",
    'succapprox': "\u2AB8",
    'succcurlyeq': "\u227D",
    'Succeeds': "\u227B",
    'SucceedsEqual': "\u2AB0",
    'SucceedsSlantEqual': "\u227D",
    'SucceedsTilde': "\u227F",
    'succeq': "\u2AB0",
    'succnapprox': "\u2ABA",
    'succneqq': "\u2AB6",
    'succnsim': "\u22E9",
    'succsim': "\u227F",
    'SuchThat': "\u220B",
    'sum': "\u2211",
    'Sum': "\u2211",
    'sung': "\u266A",
    'sup': "\u2283",
    'Sup': "\u22D1",
    'sup1': '\xB9',
    'sup2': '\xB2',
    'sup3': '\xB3',
    'supdot': "\u2ABE",
    'supdsub': "\u2AD8",
    'supe': "\u2287",
    'supE': "\u2AC6",
    'supedot': "\u2AC4",
    'Superset': "\u2283",
    'SupersetEqual': "\u2287",
    'suphsol': "\u27C9",
    'suphsub': "\u2AD7",
    'suplarr': "\u297B",
    'supmult': "\u2AC2",
    'supne': "\u228B",
    'supnE': "\u2ACC",
    'supplus': "\u2AC0",
    'supset': "\u2283",
    'Supset': "\u22D1",
    'supseteq': "\u2287",
    'supseteqq': "\u2AC6",
    'supsetneq': "\u228B",
    'supsetneqq': "\u2ACC",
    'supsim': "\u2AC8",
    'supsub': "\u2AD4",
    'supsup': "\u2AD6",
    'swarhk': "\u2926",
    'swarr': "\u2199",
    'swArr': "\u21D9",
    'swarrow': "\u2199",
    'swnwar': "\u292A",
    'szlig': '\xDF',
    'Tab': '\t',
    'target': "\u2316",
    'tau': "\u03C4",
    'Tau': "\u03A4",
    'tbrk': "\u23B4",
    'tcaron': "\u0165",
    'Tcaron': "\u0164",
    'tcedil': "\u0163",
    'Tcedil': "\u0162",
    'tcy': "\u0442",
    'Tcy': "\u0422",
    'tdot': "\u20DB",
    'telrec': "\u2315",
    'tfr': "\uD835\uDD31",
    'Tfr': "\uD835\uDD17",
    'there4': "\u2234",
    'therefore': "\u2234",
    'Therefore': "\u2234",
    'theta': "\u03B8",
    'Theta': "\u0398",
    'thetasym': "\u03D1",
    'thetav': "\u03D1",
    'thickapprox': "\u2248",
    'thicksim': "\u223C",
    'ThickSpace': "\u205F\u200A",
    'thinsp': "\u2009",
    'ThinSpace': "\u2009",
    'thkap': "\u2248",
    'thksim': "\u223C",
    'thorn': '\xFE',
    'THORN': '\xDE',
    'tilde': "\u02DC",
    'Tilde': "\u223C",
    'TildeEqual': "\u2243",
    'TildeFullEqual': "\u2245",
    'TildeTilde': "\u2248",
    'times': '\xD7',
    'timesb': "\u22A0",
    'timesbar': "\u2A31",
    'timesd': "\u2A30",
    'tint': "\u222D",
    'toea': "\u2928",
    'top': "\u22A4",
    'topbot': "\u2336",
    'topcir': "\u2AF1",
    'topf': "\uD835\uDD65",
    'Topf': "\uD835\uDD4B",
    'topfork': "\u2ADA",
    'tosa': "\u2929",
    'tprime': "\u2034",
    'trade': "\u2122",
    'TRADE': "\u2122",
    'triangle': "\u25B5",
    'triangledown': "\u25BF",
    'triangleleft': "\u25C3",
    'trianglelefteq': "\u22B4",
    'triangleq': "\u225C",
    'triangleright': "\u25B9",
    'trianglerighteq': "\u22B5",
    'tridot': "\u25EC",
    'trie': "\u225C",
    'triminus': "\u2A3A",
    'TripleDot': "\u20DB",
    'triplus': "\u2A39",
    'trisb': "\u29CD",
    'tritime': "\u2A3B",
    'trpezium': "\u23E2",
    'tscr': "\uD835\uDCC9",
    'Tscr': "\uD835\uDCAF",
    'tscy': "\u0446",
    'TScy': "\u0426",
    'tshcy': "\u045B",
    'TSHcy': "\u040B",
    'tstrok': "\u0167",
    'Tstrok': "\u0166",
    'twixt': "\u226C",
    'twoheadleftarrow': "\u219E",
    'twoheadrightarrow': "\u21A0",
    'uacute': '\xFA',
    'Uacute': '\xDA',
    'uarr': "\u2191",
    'uArr': "\u21D1",
    'Uarr': "\u219F",
    'Uarrocir': "\u2949",
    'ubrcy': "\u045E",
    'Ubrcy': "\u040E",
    'ubreve': "\u016D",
    'Ubreve': "\u016C",
    'ucirc': '\xFB',
    'Ucirc': '\xDB',
    'ucy': "\u0443",
    'Ucy': "\u0423",
    'udarr': "\u21C5",
    'udblac': "\u0171",
    'Udblac': "\u0170",
    'udhar': "\u296E",
    'ufisht': "\u297E",
    'ufr': "\uD835\uDD32",
    'Ufr': "\uD835\uDD18",
    'ugrave': '\xF9',
    'Ugrave': '\xD9',
    'uHar': "\u2963",
    'uharl': "\u21BF",
    'uharr': "\u21BE",
    'uhblk': "\u2580",
    'ulcorn': "\u231C",
    'ulcorner': "\u231C",
    'ulcrop': "\u230F",
    'ultri': "\u25F8",
    'umacr': "\u016B",
    'Umacr': "\u016A",
    'uml': '\xA8',
    'UnderBar': '_',
    'UnderBrace': "\u23DF",
    'UnderBracket': "\u23B5",
    'UnderParenthesis': "\u23DD",
    'Union': "\u22C3",
    'UnionPlus': "\u228E",
    'uogon': "\u0173",
    'Uogon': "\u0172",
    'uopf': "\uD835\uDD66",
    'Uopf': "\uD835\uDD4C",
    'uparrow': "\u2191",
    'Uparrow': "\u21D1",
    'UpArrow': "\u2191",
    'UpArrowBar': "\u2912",
    'UpArrowDownArrow': "\u21C5",
    'updownarrow': "\u2195",
    'Updownarrow': "\u21D5",
    'UpDownArrow': "\u2195",
    'UpEquilibrium': "\u296E",
    'upharpoonleft': "\u21BF",
    'upharpoonright': "\u21BE",
    'uplus': "\u228E",
    'UpperLeftArrow': "\u2196",
    'UpperRightArrow': "\u2197",
    'upsi': "\u03C5",
    'Upsi': "\u03D2",
    'upsih': "\u03D2",
    'upsilon': "\u03C5",
    'Upsilon': "\u03A5",
    'UpTee': "\u22A5",
    'UpTeeArrow': "\u21A5",
    'upuparrows': "\u21C8",
    'urcorn': "\u231D",
    'urcorner': "\u231D",
    'urcrop': "\u230E",
    'uring': "\u016F",
    'Uring': "\u016E",
    'urtri': "\u25F9",
    'uscr': "\uD835\uDCCA",
    'Uscr': "\uD835\uDCB0",
    'utdot': "\u22F0",
    'utilde': "\u0169",
    'Utilde': "\u0168",
    'utri': "\u25B5",
    'utrif': "\u25B4",
    'uuarr': "\u21C8",
    'uuml': '\xFC',
    'Uuml': '\xDC',
    'uwangle': "\u29A7",
    'vangrt': "\u299C",
    'varepsilon': "\u03F5",
    'varkappa': "\u03F0",
    'varnothing': "\u2205",
    'varphi': "\u03D5",
    'varpi': "\u03D6",
    'varpropto': "\u221D",
    'varr': "\u2195",
    'vArr': "\u21D5",
    'varrho': "\u03F1",
    'varsigma': "\u03C2",
    'varsubsetneq': "\u228A\uFE00",
    'varsubsetneqq': "\u2ACB\uFE00",
    'varsupsetneq': "\u228B\uFE00",
    'varsupsetneqq': "\u2ACC\uFE00",
    'vartheta': "\u03D1",
    'vartriangleleft': "\u22B2",
    'vartriangleright': "\u22B3",
    'vBar': "\u2AE8",
    'Vbar': "\u2AEB",
    'vBarv': "\u2AE9",
    'vcy': "\u0432",
    'Vcy': "\u0412",
    'vdash': "\u22A2",
    'vDash': "\u22A8",
    'Vdash': "\u22A9",
    'VDash': "\u22AB",
    'Vdashl': "\u2AE6",
    'vee': "\u2228",
    'Vee': "\u22C1",
    'veebar': "\u22BB",
    'veeeq': "\u225A",
    'vellip': "\u22EE",
    'verbar': '|',
    'Verbar': "\u2016",
    'vert': '|',
    'Vert': "\u2016",
    'VerticalBar': "\u2223",
    'VerticalLine': '|',
    'VerticalSeparator': "\u2758",
    'VerticalTilde': "\u2240",
    'VeryThinSpace': "\u200A",
    'vfr': "\uD835\uDD33",
    'Vfr': "\uD835\uDD19",
    'vltri': "\u22B2",
    'vnsub': "\u2282\u20D2",
    'vnsup': "\u2283\u20D2",
    'vopf': "\uD835\uDD67",
    'Vopf': "\uD835\uDD4D",
    'vprop': "\u221D",
    'vrtri': "\u22B3",
    'vscr': "\uD835\uDCCB",
    'Vscr': "\uD835\uDCB1",
    'vsubne': "\u228A\uFE00",
    'vsubnE': "\u2ACB\uFE00",
    'vsupne': "\u228B\uFE00",
    'vsupnE': "\u2ACC\uFE00",
    'Vvdash': "\u22AA",
    'vzigzag': "\u299A",
    'wcirc': "\u0175",
    'Wcirc': "\u0174",
    'wedbar': "\u2A5F",
    'wedge': "\u2227",
    'Wedge': "\u22C0",
    'wedgeq': "\u2259",
    'weierp': "\u2118",
    'wfr': "\uD835\uDD34",
    'Wfr': "\uD835\uDD1A",
    'wopf': "\uD835\uDD68",
    'Wopf': "\uD835\uDD4E",
    'wp': "\u2118",
    'wr': "\u2240",
    'wreath': "\u2240",
    'wscr': "\uD835\uDCCC",
    'Wscr': "\uD835\uDCB2",
    'xcap': "\u22C2",
    'xcirc': "\u25EF",
    'xcup': "\u22C3",
    'xdtri': "\u25BD",
    'xfr': "\uD835\uDD35",
    'Xfr': "\uD835\uDD1B",
    'xharr': "\u27F7",
    'xhArr': "\u27FA",
    'xi': "\u03BE",
    'Xi': "\u039E",
    'xlarr': "\u27F5",
    'xlArr': "\u27F8",
    'xmap': "\u27FC",
    'xnis': "\u22FB",
    'xodot': "\u2A00",
    'xopf': "\uD835\uDD69",
    'Xopf': "\uD835\uDD4F",
    'xoplus': "\u2A01",
    'xotime': "\u2A02",
    'xrarr': "\u27F6",
    'xrArr': "\u27F9",
    'xscr': "\uD835\uDCCD",
    'Xscr': "\uD835\uDCB3",
    'xsqcup': "\u2A06",
    'xuplus': "\u2A04",
    'xutri': "\u25B3",
    'xvee': "\u22C1",
    'xwedge': "\u22C0",
    'yacute': '\xFD',
    'Yacute': '\xDD',
    'yacy': "\u044F",
    'YAcy': "\u042F",
    'ycirc': "\u0177",
    'Ycirc': "\u0176",
    'ycy': "\u044B",
    'Ycy': "\u042B",
    'yen': '\xA5',
    'yfr': "\uD835\uDD36",
    'Yfr': "\uD835\uDD1C",
    'yicy': "\u0457",
    'YIcy': "\u0407",
    'yopf': "\uD835\uDD6A",
    'Yopf': "\uD835\uDD50",
    'yscr': "\uD835\uDCCE",
    'Yscr': "\uD835\uDCB4",
    'yucy': "\u044E",
    'YUcy': "\u042E",
    'yuml': '\xFF',
    'Yuml': "\u0178",
    'zacute': "\u017A",
    'Zacute': "\u0179",
    'zcaron': "\u017E",
    'Zcaron': "\u017D",
    'zcy': "\u0437",
    'Zcy': "\u0417",
    'zdot': "\u017C",
    'Zdot': "\u017B",
    'zeetrf': "\u2128",
    'ZeroWidthSpace': "\u200B",
    'zeta': "\u03B6",
    'Zeta': "\u0396",
    'zfr': "\uD835\uDD37",
    'Zfr': "\u2128",
    'zhcy': "\u0436",
    'ZHcy': "\u0416",
    'zigrarr': "\u21DD",
    'zopf': "\uD835\uDD6B",
    'Zopf': "\u2124",
    'zscr': "\uD835\uDCCF",
    'Zscr': "\uD835\uDCB5",
    'zwj': "\u200D",
    'zwnj': "\u200C"
  };
  var decodeMapLegacy = {
    'aacute': '\xE1',
    'Aacute': '\xC1',
    'acirc': '\xE2',
    'Acirc': '\xC2',
    'acute': '\xB4',
    'aelig': '\xE6',
    'AElig': '\xC6',
    'agrave': '\xE0',
    'Agrave': '\xC0',
    'amp': '&',
    'AMP': '&',
    'aring': '\xE5',
    'Aring': '\xC5',
    'atilde': '\xE3',
    'Atilde': '\xC3',
    'auml': '\xE4',
    'Auml': '\xC4',
    'brvbar': '\xA6',
    'ccedil': '\xE7',
    'Ccedil': '\xC7',
    'cedil': '\xB8',
    'cent': '\xA2',
    'copy': '\xA9',
    'COPY': '\xA9',
    'curren': '\xA4',
    'deg': '\xB0',
    'divide': '\xF7',
    'eacute': '\xE9',
    'Eacute': '\xC9',
    'ecirc': '\xEA',
    'Ecirc': '\xCA',
    'egrave': '\xE8',
    'Egrave': '\xC8',
    'eth': '\xF0',
    'ETH': '\xD0',
    'euml': '\xEB',
    'Euml': '\xCB',
    'frac12': '\xBD',
    'frac14': '\xBC',
    'frac34': '\xBE',
    'gt': '>',
    'GT': '>',
    'iacute': '\xED',
    'Iacute': '\xCD',
    'icirc': '\xEE',
    'Icirc': '\xCE',
    'iexcl': '\xA1',
    'igrave': '\xEC',
    'Igrave': '\xCC',
    'iquest': '\xBF',
    'iuml': '\xEF',
    'Iuml': '\xCF',
    'laquo': '\xAB',
    'lt': '<',
    'LT': '<',
    'macr': '\xAF',
    'micro': '\xB5',
    'middot': '\xB7',
    'nbsp': '\xA0',
    'not': '\xAC',
    'ntilde': '\xF1',
    'Ntilde': '\xD1',
    'oacute': '\xF3',
    'Oacute': '\xD3',
    'ocirc': '\xF4',
    'Ocirc': '\xD4',
    'ograve': '\xF2',
    'Ograve': '\xD2',
    'ordf': '\xAA',
    'ordm': '\xBA',
    'oslash': '\xF8',
    'Oslash': '\xD8',
    'otilde': '\xF5',
    'Otilde': '\xD5',
    'ouml': '\xF6',
    'Ouml': '\xD6',
    'para': '\xB6',
    'plusmn': '\xB1',
    'pound': '\xA3',
    'quot': '"',
    'QUOT': '"',
    'raquo': '\xBB',
    'reg': '\xAE',
    'REG': '\xAE',
    'sect': '\xA7',
    'shy': '\xAD',
    'sup1': '\xB9',
    'sup2': '\xB2',
    'sup3': '\xB3',
    'szlig': '\xDF',
    'thorn': '\xFE',
    'THORN': '\xDE',
    'times': '\xD7',
    'uacute': '\xFA',
    'Uacute': '\xDA',
    'ucirc': '\xFB',
    'Ucirc': '\xDB',
    'ugrave': '\xF9',
    'Ugrave': '\xD9',
    'uml': '\xA8',
    'uuml': '\xFC',
    'Uuml': '\xDC',
    'yacute': '\xFD',
    'Yacute': '\xDD',
    'yen': '\xA5',
    'yuml': '\xFF'
  };
  var decodeMapNumeric = {
    '0': "\uFFFD",
    '128': "\u20AC",
    '130': "\u201A",
    '131': "\u0192",
    '132': "\u201E",
    '133': "\u2026",
    '134': "\u2020",
    '135': "\u2021",
    '136': "\u02C6",
    '137': "\u2030",
    '138': "\u0160",
    '139': "\u2039",
    '140': "\u0152",
    '142': "\u017D",
    '145': "\u2018",
    '146': "\u2019",
    '147': "\u201C",
    '148': "\u201D",
    '149': "\u2022",
    '150': "\u2013",
    '151': "\u2014",
    '152': "\u02DC",
    '153': "\u2122",
    '154': "\u0161",
    '155': "\u203A",
    '156': "\u0153",
    '158': "\u017E",
    '159': "\u0178"
  };
  var invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65000, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];
  /*--------------------------------------------------------------------------*/

  var stringFromCharCode = String.fromCharCode;
  var object = {};
  var hasOwnProperty = object.hasOwnProperty;

  var has = function has(object, propertyName) {
    return hasOwnProperty.call(object, propertyName);
  };

  var contains = function contains(array, value) {
    var index = -1;
    var length = array.length;

    while (++index < length) {
      if (array[index] == value) {
        return true;
      }
    }

    return false;
  };

  var merge = function merge(options, defaults) {
    if (!options) {
      return defaults;
    }

    var result = {};
    var key;

    for (key in defaults) {
      // A `hasOwnProperty` check is not needed here, since only recognized
      // option names are used anyway. Any others are ignored.
      result[key] = has(options, key) ? options[key] : defaults[key];
    }

    return result;
  }; // Modified version of `ucs2encode`; see https://mths.be/punycode.


  var codePointToSymbol = function codePointToSymbol(codePoint, strict) {
    var output = '';

    if (codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint > 0x10FFFF) {
      // See issue #4:
      // “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
      // greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
      // REPLACEMENT CHARACTER.”
      if (strict) {
        parseError('character reference outside the permissible Unicode range');
      }

      return "\uFFFD";
    }

    if (has(decodeMapNumeric, codePoint)) {
      if (strict) {
        parseError('disallowed character reference');
      }

      return decodeMapNumeric[codePoint];
    }

    if (strict && contains(invalidReferenceCodePoints, codePoint)) {
      parseError('disallowed character reference');
    }

    if (codePoint > 0xFFFF) {
      codePoint -= 0x10000;
      output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    output += stringFromCharCode(codePoint);
    return output;
  };

  var hexEscape = function hexEscape(codePoint) {
    return '&#x' + codePoint.toString(16).toUpperCase() + ';';
  };

  var decEscape = function decEscape(codePoint) {
    return '&#' + codePoint + ';';
  };

  var parseError = function parseError(message) {
    throw Error('Parse error: ' + message);
  };
  /*--------------------------------------------------------------------------*/


  var encode = function encode(string, options) {
    options = merge(options, encode.options);
    var strict = options.strict;

    if (strict && regexInvalidRawCodePoint.test(string)) {
      parseError('forbidden code point');
    }

    var encodeEverything = options.encodeEverything;
    var useNamedReferences = options.useNamedReferences;
    var allowUnsafeSymbols = options.allowUnsafeSymbols;
    var escapeCodePoint = options.decimal ? decEscape : hexEscape;

    var escapeBmpSymbol = function escapeBmpSymbol(symbol) {
      return escapeCodePoint(symbol.charCodeAt(0));
    };

    if (encodeEverything) {
      // Encode ASCII symbols.
      string = string.replace(regexAsciiWhitelist, function (symbol) {
        // Use named references if requested & possible.
        if (useNamedReferences && has(encodeMap, symbol)) {
          return '&' + encodeMap[symbol] + ';';
        }

        return escapeBmpSymbol(symbol);
      }); // Shorten a few escapes that represent two symbols, of which at least one
      // is within the ASCII range.

      if (useNamedReferences) {
        string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;').replace(/&#x66;&#x6A;/g, '&fjlig;');
      } // Encode non-ASCII symbols.


      if (useNamedReferences) {
        // Encode non-ASCII symbols that can be replaced with a named reference.
        string = string.replace(regexEncodeNonAscii, function (string) {
          // Note: there is no need to check `has(encodeMap, string)` here.
          return '&' + encodeMap[string] + ';';
        });
      } // Note: any remaining non-ASCII symbols are handled outside of the `if`.

    } else if (useNamedReferences) {
      // Apply named character references.
      // Encode `<>"'&` using named character references.
      if (!allowUnsafeSymbols) {
        string = string.replace(regexEscape, function (string) {
          return '&' + encodeMap[string] + ';'; // no need to check `has()` here
        });
      } // Shorten escapes that represent two symbols, of which at least one is
      // `<>"'&`.


      string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;'); // Encode non-ASCII symbols that can be replaced with a named reference.

      string = string.replace(regexEncodeNonAscii, function (string) {
        // Note: there is no need to check `has(encodeMap, string)` here.
        return '&' + encodeMap[string] + ';';
      });
    } else if (!allowUnsafeSymbols) {
      // Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
      // using named character references.
      string = string.replace(regexEscape, escapeBmpSymbol);
    }

    return string // Encode astral symbols.
    .replace(regexAstralSymbols, function ($0) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      var high = $0.charCodeAt(0);
      var low = $0.charCodeAt(1);
      var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
      return escapeCodePoint(codePoint);
    }) // Encode any remaining BMP symbols that are not printable ASCII symbols
    // using a hexadecimal escape.
    .replace(regexBmpWhitelist, escapeBmpSymbol);
  }; // Expose default options (so they can be overridden globally).


  encode.options = {
    'allowUnsafeSymbols': false,
    'encodeEverything': false,
    'strict': false,
    'useNamedReferences': false,
    'decimal': false
  };

  var decode = function decode(html, options) {
    options = merge(options, decode.options);
    var strict = options.strict;

    if (strict && regexInvalidEntity.test(html)) {
      parseError('malformed character reference');
    }

    return html.replace(regexDecode, function ($0, $1, $2, $3, $4, $5, $6, $7, $8) {
      var codePoint;
      var semicolon;
      var decDigits;
      var hexDigits;
      var reference;
      var next;

      if ($1) {
        reference = $1; // Note: there is no need to check `has(decodeMap, reference)`.

        return decodeMap[reference];
      }

      if ($2) {
        // Decode named character references without trailing `;`, e.g. `&amp`.
        // This is only a parse error if it gets converted to `&`, or if it is
        // followed by `=` in an attribute context.
        reference = $2;
        next = $3;

        if (next && options.isAttributeValue) {
          if (strict && next == '=') {
            parseError('`&` did not start a character reference');
          }

          return $0;
        } else {
          if (strict) {
            parseError('named character reference was not terminated by a semicolon');
          } // Note: there is no need to check `has(decodeMapLegacy, reference)`.


          return decodeMapLegacy[reference] + (next || '');
        }
      }

      if ($4) {
        // Decode decimal escapes, e.g. `&#119558;`.
        decDigits = $4;
        semicolon = $5;

        if (strict && !semicolon) {
          parseError('character reference was not terminated by a semicolon');
        }

        codePoint = parseInt(decDigits, 10);
        return codePointToSymbol(codePoint, strict);
      }

      if ($6) {
        // Decode hexadecimal escapes, e.g. `&#x1D306;`.
        hexDigits = $6;
        semicolon = $7;

        if (strict && !semicolon) {
          parseError('character reference was not terminated by a semicolon');
        }

        codePoint = parseInt(hexDigits, 16);
        return codePointToSymbol(codePoint, strict);
      } // If we’re still here, `if ($7)` is implied; it’s an ambiguous
      // ampersand for sure. https://mths.be/notes/ambiguous-ampersands


      if (strict) {
        parseError('named character reference was not terminated by a semicolon');
      }

      return $0;
    });
  }; // Expose default options (so they can be overridden globally).


  decode.options = {
    'isAttributeValue': false,
    'strict': false
  };

  var escape = function escape(string) {
    return string.replace(regexEscape, function ($0) {
      // Note: there is no need to check `has(escapeMap, $0)` here.
      return escapeMap[$0];
    });
  };
  /*--------------------------------------------------------------------------*/


  var he = {
    'version': '1.2.0',
    'encode': encode,
    'decode': decode,
    'escape': escape,
    'unescape': decode
  }; // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:

  if ( true && _typeof(__webpack_require__.amdO) == 'object' && __webpack_require__.amdO) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return he;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (freeExports && !freeExports.nodeType) {
    if (freeModule) {
      // in Node.js, io.js, or RingoJS v0.8.0+
      freeModule.exports = he;
    } else {
      // in Narwhal or RingoJS v0.7.0-
      for (var key in he) {
        has(he, key) && (freeExports[key] = he[key]);
      }
    }
  } else {
    // in Rhino or a web browser
    root.he = he;
  }
})(this);

/***/ }),

/***/ "./node_modules/libram/src/Clan.js":
/*!*****************************************!*\
  !*** ./node_modules/libram/src/Clan.js ***!
  \*****************************************/
/*! namespace exports */
/*! export Clan [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clan": () => /* binding */ Clan
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-html-parser */ "./node_modules/node-html-parser/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/libram/src/utils.js");
function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // It would be fantastic to have this function properly typed
// But until someone can work out how to do it, it gets the
// comment blocks of shame

/* eslint-disable */

function validate(target, propertyName, descriptor) {
  if (!(descriptor === null || descriptor === void 0 ? void 0 : descriptor.value)) return;
  var method = descriptor.value; // @ts-ignore

  descriptor.value = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    } // @ts-ignore


    if (this.id !== (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanId)()) {
      throw new Error("You are no longer a member of this clan");
    }

    return method.apply(this, args);
  };
}
/* eslint-enable */


var clanIdCache = {};

var toPlayerId = function toPlayerId(player) {
  return typeof player === "string" ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPlayerId)(player) : player;
};

var Clan =
/** @class */
function () {
  function Clan(id, name) {
    this.id = id;
    this.name = name;
  }
  /**
   * Join a clan and return its instance
   * @param clanIdOrName Clan id or name
   */


  Clan.join = function (clanIdOrName) {
    var clanId;

    if (typeof clanIdOrName === "string") {
      var clanName_1 = clanIdOrName.toLowerCase();

      if (clanName_1 === (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)().toLowerCase()) {
        return Clan.get();
      }

      if (!(clanName_1 in clanIdCache)) {
        var clan = Clan.getWhitelisted().find(function (c) {
          return c.name.toLowerCase() === clanName_1;
        });

        if (!clan) {
          throw new Error("Player is not whitelisted to clan");
        }

        clanIdCache[clanName_1] = clan.id;
      }

      clanId = clanIdCache[clanName_1];
    } else {
      clanId = clanIdOrName;

      if (clanId === (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanId)()) {
        return Clan.get();
      }
    }

    var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("showclan.php?recruiter=1&whichclan=" + clanId + "&pwd&whichclan=" + clanId + "&action=joinclan&apply=Apply+to+this+Clan&confirm=on");

    if (!result.includes("clanhalltop.gif")) {
      throw new Error("Could not join clan");
    }

    return Clan.get();
  };
  /**
   * Return player's current Clan
   */


  Clan.get = function () {
    return new Clan((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanId)(), (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)());
  };
  /**
   * Get list of clans to which the player is whitelisted
   */


  Clan.getWhitelisted = function () {
    var root = (0,node_html_parser__WEBPACK_IMPORTED_MODULE_1__.parse)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_signup.php"));
    return root.querySelectorAll('select[name="whichclan"] option').map(function (option) {
      var id = Number.parseInt(option.getAttribute("value"));
      var name = option.text;
      return new Clan(id, name);
    });
  };
  /**
   * Join clan
   */


  Clan.prototype.join = function () {
    var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("showclan.php?recruiter=1&whichclan=" + this.id + "&pwd&whichclan=" + this.id + "&action=joinclan&apply=Apply+to+this+Clan&confirm=on");

    if (!result.includes("clanhalltop.gif")) {
      throw new Error("Could not join clan");
    }

    return Clan.get();
  };
  /**
   * Return the monster that is currently in the current clan's fax machine if any
   */


  Clan.prototype.getCurrentFax = function () {
    var logs = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_log.php");
    var lastFax = logs.match(Clan.LOG_FAX_PATTERN);
    if (!lastFax) return null;
    var monsterName = lastFax[3];
    if (!monsterName) return null;
    return Monster.get(monsterName);
  };
  /**
   * List available ranks (name, degree and id) from the current clan
   */


  Clan.prototype.getRanks = function () {
    var root = (0,node_html_parser__WEBPACK_IMPORTED_MODULE_1__.parse)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_whitelist.php"));
    return root.querySelectorAll("select[name=level] option").map(function (option) {
      var match = option.text.match(Clan.WHITELIST_DEGREE_PATTERN);
      var id = option.getAttribute("value");
      if (!match || !id) return null;
      var name = match[1],
          degree = match[2];
      return {
        name: name,
        degree: Number.parseInt(degree),
        id: Number.parseInt(id)
      };
    }).filter(_utils__WEBPACK_IMPORTED_MODULE_2__.notNull);
  };
  /**
   * Add a player to the current clan's whitelist.
   * If the player is already in the whitelist this will change their rank or title.
   * @param player Player id or name
   * @param rankName Rank to give the player. If not provided they will be given the lowest rank
   * @param title Title to give the player. If not provided, will be blank
   */


  Clan.prototype.addPlayerToWhitelist = function (player, rankName, title) {
    if (title === void 0) {
      title = "";
    }

    var playerId = toPlayerId(player);
    var ranks = this.getRanks();
    var rank = rankName ? ranks.find(function (r) {
      return r.name === rankName;
    }) : ranks.sort(function (a, b) {
      return a.degree - b.degree;
    })[0];
    if (!rank) return false;
    var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=" + playerId + "&level=" + rank.id + "&title=" + title);
    return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
  };
  /**
   * Remove a player from the current clan's whitelist
   * @param player Player id or name
   */


  Clan.prototype.removePlayerFromWhitelist = function (player) {
    var playerId = toPlayerId(player);
    var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=" + playerId + "&remove=Remove");
    return result.includes("Whitelist updated.");
  };
  /**
   * Return the amount of meat in the current clan's coffer.
   */


  Clan.prototype.getMeatInCoffer = function () {
    var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_stash.php");

    var _a = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
        meat = _a[1];

    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseNumber)(meat);
  };
  /**
   * Add the given amount of meat to the current clan's coffer.
   * @param amount Amount of meat to put in coffer
   */


  Clan.prototype.putMeatInCoffer = function (amount) {
    var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=" + amount);
    return result.includes("You contributed");
  };

  Clan.LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/([0-9]{2}\/[0-9]{2}\/[0-9]{2}, [0-9]{2}:[0-9]{2}(?:AM|PM): )<a (?:(?!>)[\s\S])+>((?:(?!<)[\s\S])+)<\/a>(?: faxed in a (.*?))<br>/, {
    monster: 3
  });
  Clan.WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0([0-9]+)\)/, {
    name: 1,
    degree: 2
  });

  __decorate([validate], Clan.prototype, "getCurrentFax", null);

  __decorate([validate], Clan.prototype, "getRanks", null);

  __decorate([validate], Clan.prototype, "addPlayerToWhitelist", null);

  __decorate([validate], Clan.prototype, "removePlayerFromWhitelist", null);

  __decorate([validate], Clan.prototype, "getMeatInCoffer", null);

  __decorate([validate], Clan.prototype, "putMeatInCoffer", null);

  return Clan;
}();



/***/ }),

/***/ "./node_modules/libram/src/combat.js":
/*!*******************************************!*\
  !*** ./node_modules/libram/src/combat.js ***!
  \*******************************************/
/*! namespace exports */
/*! export Macro [provided] [no usage info] [missing usage info prevents renaming] */
/*! export adventureMacro [provided] [no usage info] [missing usage info prevents renaming] */
/*! export adventureMacroAuto [provided] [no usage info] [missing usage info prevents renaming] */
/*! export banishedMonsters [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getMacroId [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMacroId": () => /* binding */ getMacroId,
/* harmony export */   "Macro": () => /* binding */ Macro,
/* harmony export */   "banishedMonsters": () => /* binding */ banishedMonsters,
/* harmony export */   "adventureMacro": () => /* binding */ adventureMacro,
/* harmony export */   "adventureMacroAuto": () => /* binding */ adventureMacroAuto
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property */ "./node_modules/libram/src/property.js");
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-string */ "./node_modules/libram/src/template-string.js");
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};




var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name Script Autoattack Macro.
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var macroMatches = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.xpath)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"" + MACRO_NAME + "\"]/@value");

  if (macroMatches.length === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?macroid=0&name=" + MACRO_NAME + "&macrotext=abort&action=save");
    return parseInt((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.xpath)(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? Item.get(itemOrName) : itemOrName;
}

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return item.name;
  }
}

function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(" && ");
  } else {
    return "hascombatitem " + itemOrItems;
  }
}

function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) ? skill.name : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(skill);
}
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */


var Macro =
/** @class */
function () {
  function Macro() {
    this.components = [];
  }
  /**
   * Convert macro to string.
   */


  Macro.prototype.toString = function () {
    return this.components.join(";");
  };
  /**
   * Save a macro to a Mafia property for use in a consult script.
   */


  Macro.prototype.save = function () {
    (0,_property__WEBPACK_IMPORTED_MODULE_1__.set)(Macro.SAVED_MACRO_PROPERTY, this.toString());
  };
  /**
   * Load a saved macro from the Mafia property.
   */


  Macro.load = function () {
    var _a;

    return (_a = new this()).step.apply(_a, (0,_property__WEBPACK_IMPORTED_MODULE_1__.get)(Macro.SAVED_MACRO_PROPERTY).split(";"));
  };
  /**
   * Clear the saved macro in the Mafia property.
   */


  Macro.clearSaved = function () {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
  };
  /**
   * Statefully add one or several steps to a macro.
   * @param nextSteps The steps to add to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.step = function () {
    var _a;

    var nextSteps = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      nextSteps[_i] = arguments[_i];
    }

    var nextStepsStrings = (_a = []).concat.apply(_a, nextSteps.map(function (x) {
      return x instanceof Macro ? x.components : [x];
    }));

    this.components = __spreadArrays(this.components, nextStepsStrings.filter(function (s) {
      return s.length > 0;
    }));
    return this;
  };
  /**
   * Statefully add one or several steps to a macro.
   * @param nextSteps The steps to add to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.step = function () {
    var _a;

    var nextSteps = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      nextSteps[_i] = arguments[_i];
    }

    return (_a = new this()).step.apply(_a, nextSteps);
  };
  /**
   * Submit the built macro to KoL. Only works inside combat.
   */


  Macro.prototype.submit = function () {
    var _final = this.toString();

    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("fight.php?action=macro&macrotext=" + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(_final), true, true);
  };
  /**
   * Set this macro as a KoL native autoattack.
   */


  Macro.prototype.setAutoAttack = function () {
    if (Macro.cachedMacroId === null) Macro.cachedMacroId = getMacroId();

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getAutoAttack)() === 99000000 + Macro.cachedMacroId && this.toString() === Macro.cachedAutoAttack) {
      // This macro is already set. Don"t make the server request.
      return;
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?macroid=" + Macro.cachedMacroId + "&name=" + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(MACRO_NAME) + "&macrotext=" + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(this.toString()) + "&action=save", true, true);
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account.php?am=1&action=autoattack&value=" + (99000000 + Macro.cachedMacroId) + "&ajax=1");
    Macro.cachedAutoAttack = this.toString();
  };
  /**
   * Add an "abort" step to this macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.abort = function () {
    return this.step("abort");
  };
  /**
   * Create a new macro with an "abort" step.
   * @returns {Macro} This object itself.
   */


  Macro.abort = function () {
    return new this().abort();
  };
  /**
   * Add an "if" statement to this macro.
   * @param condition The BALLS condition for the if statement.
   * @param ifTrue Continuation if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.if_ = function (condition, ifTrue) {
    return this.step("if " + condition).step(ifTrue).step("endif");
  };
  /**
   * Create a new macro with an "if" statement.
   * @param condition The BALLS condition for the if statement.
   * @param ifTrue Continuation if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.if_ = function (condition, ifTrue) {
    return new this().if_(condition, ifTrue);
  };
  /**
   * Add a "while" statement to this macro.
   * @param condition The BALLS condition for the if statement.
   * @param contents Loop to repeat while the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.while_ = function (condition, contents) {
    return this.step("while " + condition).step(contents).step("endwhile");
  };
  /**
   * Create a new macro with a "while" statement.
   * @param condition The BALLS condition for the if statement.
   * @param contents Loop to repeat while the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.while_ = function (condition, contents) {
    return new this().while_(condition, contents);
  };
  /**
   * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
   * @param condition The JS condition.
   * @param ifTrue Continuation to add if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.externalIf = function (condition, ifTrue) {
    return condition ? this.step(ifTrue) : this;
  };
  /**
   * Create a new macro with a condition evaluated at the time of building the macro.
   * @param condition The JS condition.
   * @param ifTrue Continuation to add if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.externalIf = function (condition, ifTrue) {
    return new this().externalIf(condition, ifTrue);
  };
  /**
   * Add a repeat step to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.repeat = function () {
    return this.step("repeat");
  };
  /**
   * Add one or more skill cast steps to the macro.
   * @param skills Skills to cast.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.skill = function () {
    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return this.step.apply(this, skills.map(function (skill) {
      return "skill " + skillBallsMacroName(skill);
    }));
  };
  /**
   * Create a new macro with one or more skill cast steps.
   * @param skills Skills to cast.
   * @returns {Macro} This object itself.
   */


  Macro.skill = function () {
    var _a;

    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return (_a = new this()).skill.apply(_a, skills);
  };
  /**
   * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
   * @param skills Skills to try casting.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.trySkill = function () {
    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return this.step.apply(this, skills.map(function (skill) {
      return Macro.if_("hasskill " + skillBallsMacroName(skill), Macro.skill(skill));
    }));
  };
  /**
   * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
   * @param skills Skills to try casting.
   * @returns {Macro} This object itself.
   */


  Macro.trySkill = function () {
    var _a;

    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return (_a = new this()).trySkill.apply(_a, skills);
  };
  /**
   * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
   * @param skills Skills to try repeatedly casting.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.trySkillRepeat = function () {
    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return this.step.apply(this, skills.map(function (skill) {
      return Macro.if_("hasskill " + skillBallsMacroName(skill), Macro.skill(skill).repeat());
    }));
  };
  /**
   * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
   * @param skills Skills to try repeatedly casting.
   * @returns {Macro} This object itself.
   */


  Macro.trySkillRepeat = function () {
    var _a;

    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return (_a = new this()).trySkillRepeat.apply(_a, skills);
  };
  /**
   * Add one or more item steps to the macro.
   * @param items Items to use. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.item = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return this.step.apply(this, items.map(function (itemOrItems) {
      return "use " + itemOrItemsBallsMacroName(itemOrItems);
    }));
  };
  /**
   * Create a new macro with one or more item steps.
   * @param items Items to use. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.item = function () {
    var _a;

    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return (_a = new this()).item.apply(_a, items);
  };
  /**
   * Add one or more item steps to the macro, where each step checks to see if you have the item first.
   * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.tryItem = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return this.step.apply(this, items.map(function (item) {
      return Macro.if_("hascombatitem " + itemOrItemsBallsMacroPredicate(item), "use " + itemOrItemsBallsMacroName(item));
    }));
  };
  /**
   * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
   * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.tryItem = function () {
    var _a;

    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return (_a = new this()).tryItem.apply(_a, items);
  };
  /**
   * Add an attack step to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.attack = function () {
    return this.step("attack");
  };
  /**
   * Create a new macro with an attack step.
   * @returns {Macro} This object itself.
   */


  Macro.attack = function () {
    return new this().attack();
  };

  Macro.SAVED_MACRO_PROPERTY = "libram_savedMacro";
  Macro.cachedMacroId = null;
  Macro.cachedAutoAttack = null;
  return Macro;
}();


function banishedMonsters() {
  var banishedstring = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("banishedMonsters");
  var banishedComponents = banishedstring.split(":");
  var result = new Map();
  if (banishedComponents.length < 3) return result;

  for (var idx = 0; idx < banishedComponents.length / 3 - 1; idx++) {
    var foe = Monster.get(banishedComponents[idx * 3]);
    var banisher = banishedComponents[idx * 3 + 1]; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

    var banisherItem = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toItem)(banisher);
    var banisherObject = [(0,_template_string__WEBPACK_IMPORTED_MODULE_2__.$item)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["none"], ["none"]))), null].includes(banisherItem) ? Skill.get(banisher) : banisherItem;
    result.set(banisherObject, foe);
  }

  return result;
}
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */

function adventureMacro(loc, macro) {
  macro.save();

  try {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, 0, "");

    while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();
    }

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.choiceFollowsFight)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */

function adventureMacroAuto(loc, autoMacro, nextMacro) {
  if (nextMacro === void 0) {
    nextMacro = null;
  }

  nextMacro = nextMacro !== null && nextMacro !== void 0 ? nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  adventureMacro(loc, nextMacro);
}
var templateObject_1;

/***/ }),

/***/ "./node_modules/libram/src/console.js":
/*!********************************************!*\
  !*** ./node_modules/libram/src/console.js ***!
  \********************************************/
/*! namespace exports */
/*! export error [provided] [no usage info] [missing usage info prevents renaming] */
/*! export info [provided] [no usage info] [missing usage info prevents renaming] */
/*! export log [provided] [no usage info] [missing usage info prevents renaming] */
/*! export warn [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => /* binding */ log,
/* harmony export */   "info": () => /* binding */ info,
/* harmony export */   "warn": () => /* binding */ warn,
/* harmony export */   "error": () => /* binding */ error
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
 // eslint-disable-next-line @typescript-eslint/no-explicit-any

var logColor = function logColor(color) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var output = args.map(function (x) {
      return x.toString();
    }).join(" ");

    if (color) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(output, color);
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(output);
    }
  };
};

var log = logColor();
var info = logColor("blue");
var warn = logColor("red");
var error = logColor("red");

/***/ }),

/***/ "./node_modules/libram/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/libram/src/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export $bounties [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$bounties */
/*! export $bounty [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$bounty */
/*! export $class [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$class */
/*! export $classes [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$classes */
/*! export $coinmaster [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$coinmaster */
/*! export $coinmasters [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$coinmasters */
/*! export $effect [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$effect */
/*! export $effects [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$effects */
/*! export $element [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$element */
/*! export $elements [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$elements */
/*! export $familiar [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$familiar */
/*! export $familiars [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$familiars */
/*! export $item [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$item */
/*! export $items [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$items */
/*! export $location [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$location */
/*! export $locations [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$locations */
/*! export $monster [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$monster */
/*! export $monsters [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$monsters */
/*! export $phyla [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$phyla */
/*! export $phylum [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$phylum */
/*! export $servant [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$servant */
/*! export $servants [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$servants */
/*! export $skill [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$skill */
/*! export $skills [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$skills */
/*! export $slot [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$slot */
/*! export $slots [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$slots */
/*! export $stat [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$stat */
/*! export $stats [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$stats */
/*! export $thrall [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$thrall */
/*! export $thralls [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.js .$thralls */
/*! export Clan [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/Clan.js .Clan */
/*! export KolmafiaVersionError [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/since.js .KolmafiaVersionError */
/*! export Macro [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/combat.js .Macro */
/*! export Wanderer [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .Wanderer */
/*! export adventureMacro [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/combat.js .adventureMacro */
/*! export adventureMacroAuto [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/combat.js .adventureMacroAuto */
/*! export banishedMonsters [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/combat.js .banishedMonsters */
/*! export console [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/console.js */
/*!   export error [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export info [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export log [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export warn [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/property.js .get */
/*! export getActiveEffects [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getActiveEffects */
/*! export getActiveSongs [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getActiveSongs */
/*! export getFamiliarWandererChance [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getFamiliarWandererChance */
/*! export getFoldGroup [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getFoldGroup */
/*! export getKramcoWandererChance [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getKramcoWandererChance */
/*! export getMacroId [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/combat.js .getMacroId */
/*! export getMonsterLocations [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getMonsterLocations */
/*! export getRemainingLiver [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getRemainingLiver */
/*! export getRemainingSpleen [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getRemainingSpleen */
/*! export getRemainingStomach [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getRemainingStomach */
/*! export getSongCount [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getSongCount */
/*! export getSongLimit [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getSongLimit */
/*! export getTotalFamiliarWanderers [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getTotalFamiliarWanderers */
/*! export getTotalPuttyLikeCopiesMade [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getTotalPuttyLikeCopiesMade */
/*! export getWandererChance [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getWandererChance */
/*! export getZapGroup [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .getZapGroup */
/*! export have [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .have */
/*! export haveCounter [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .haveCounter */
/*! export haveInCampground [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .haveInCampground */
/*! export haveWandererCounter [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .haveWandererCounter */
/*! export isCurrentFamiliar [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .isCurrentFamiliar */
/*! export isSong [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .isSong */
/*! export isVoteWandererNow [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .isVoteWandererNow */
/*! export isWandererNow [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.js .isWandererNow */
/*! export property [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/property.js */
/*!   export createMafiaClassPropertyGetter [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export createPropertyGetter [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export get [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getBoolean [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getBounty [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getClass [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getCoinmaster [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getCommaSeparated [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getEffect [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getElement [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getFamiliar [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getItem [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getLocation [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getMonster [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getPhylum [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getServant [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getSkill [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getSlot [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getStat [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getString [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getThrall [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export set [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export resources [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/resources/index.js */
/*!   exports [maybe provided (runtime-defined)] [no usage info] */
/*! export set [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/property.js .set */
/*! export sinceKolmafiaRevision [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/since.js .sinceKolmafiaRevision */
/*! export sinceKolmafiaVersion [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/since.js .sinceKolmafiaVersion */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.n, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clan": () => /* reexport safe */ _Clan__WEBPACK_IMPORTED_MODULE_0__.Clan,
/* harmony export */   "Macro": () => /* reexport safe */ _combat__WEBPACK_IMPORTED_MODULE_1__.Macro,
/* harmony export */   "adventureMacro": () => /* reexport safe */ _combat__WEBPACK_IMPORTED_MODULE_1__.adventureMacro,
/* harmony export */   "adventureMacroAuto": () => /* reexport safe */ _combat__WEBPACK_IMPORTED_MODULE_1__.adventureMacroAuto,
/* harmony export */   "banishedMonsters": () => /* reexport safe */ _combat__WEBPACK_IMPORTED_MODULE_1__.banishedMonsters,
/* harmony export */   "getMacroId": () => /* reexport safe */ _combat__WEBPACK_IMPORTED_MODULE_1__.getMacroId,
/* harmony export */   "Wanderer": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.Wanderer,
/* harmony export */   "getActiveEffects": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getActiveEffects,
/* harmony export */   "getActiveSongs": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getActiveSongs,
/* harmony export */   "getFamiliarWandererChance": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getFamiliarWandererChance,
/* harmony export */   "getFoldGroup": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getFoldGroup,
/* harmony export */   "getKramcoWandererChance": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getKramcoWandererChance,
/* harmony export */   "getMonsterLocations": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getMonsterLocations,
/* harmony export */   "getRemainingLiver": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getRemainingLiver,
/* harmony export */   "getRemainingSpleen": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getRemainingSpleen,
/* harmony export */   "getRemainingStomach": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getRemainingStomach,
/* harmony export */   "getSongCount": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getSongCount,
/* harmony export */   "getSongLimit": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getSongLimit,
/* harmony export */   "getTotalFamiliarWanderers": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getTotalFamiliarWanderers,
/* harmony export */   "getTotalPuttyLikeCopiesMade": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getTotalPuttyLikeCopiesMade,
/* harmony export */   "getWandererChance": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getWandererChance,
/* harmony export */   "getZapGroup": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.getZapGroup,
/* harmony export */   "have": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.have,
/* harmony export */   "haveCounter": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.haveCounter,
/* harmony export */   "haveInCampground": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.haveInCampground,
/* harmony export */   "haveWandererCounter": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.haveWandererCounter,
/* harmony export */   "isCurrentFamiliar": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.isCurrentFamiliar,
/* harmony export */   "isSong": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.isSong,
/* harmony export */   "isVoteWandererNow": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.isVoteWandererNow,
/* harmony export */   "isWandererNow": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_2__.isWandererNow,
/* harmony export */   "KolmafiaVersionError": () => /* reexport safe */ _since__WEBPACK_IMPORTED_MODULE_3__.KolmafiaVersionError,
/* harmony export */   "sinceKolmafiaRevision": () => /* reexport safe */ _since__WEBPACK_IMPORTED_MODULE_3__.sinceKolmafiaRevision,
/* harmony export */   "sinceKolmafiaVersion": () => /* reexport safe */ _since__WEBPACK_IMPORTED_MODULE_3__.sinceKolmafiaVersion,
/* harmony export */   "$bounties": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$bounties,
/* harmony export */   "$bounty": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$bounty,
/* harmony export */   "$class": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$class,
/* harmony export */   "$classes": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$classes,
/* harmony export */   "$coinmaster": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$coinmaster,
/* harmony export */   "$coinmasters": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$coinmasters,
/* harmony export */   "$effect": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$effect,
/* harmony export */   "$effects": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$effects,
/* harmony export */   "$element": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$element,
/* harmony export */   "$elements": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$elements,
/* harmony export */   "$familiar": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$familiar,
/* harmony export */   "$familiars": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$familiars,
/* harmony export */   "$item": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$item,
/* harmony export */   "$items": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$items,
/* harmony export */   "$location": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$location,
/* harmony export */   "$locations": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$locations,
/* harmony export */   "$monster": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$monster,
/* harmony export */   "$monsters": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$monsters,
/* harmony export */   "$phyla": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$phyla,
/* harmony export */   "$phylum": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$phylum,
/* harmony export */   "$servant": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$servant,
/* harmony export */   "$servants": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$servants,
/* harmony export */   "$skill": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$skill,
/* harmony export */   "$skills": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$skills,
/* harmony export */   "$slot": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$slot,
/* harmony export */   "$slots": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$slots,
/* harmony export */   "$stat": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$stat,
/* harmony export */   "$stats": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$stats,
/* harmony export */   "$thrall": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$thrall,
/* harmony export */   "$thralls": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_4__.$thralls,
/* harmony export */   "console": () => /* reexport module object */ _console__WEBPACK_IMPORTED_MODULE_5__,
/* harmony export */   "resources": () => /* reexport module object */ _resources__WEBPACK_IMPORTED_MODULE_6__,
/* harmony export */   "property": () => /* reexport module object */ _property__WEBPACK_IMPORTED_MODULE_7__,
/* harmony export */   "get": () => /* reexport safe */ _property__WEBPACK_IMPORTED_MODULE_7__.get,
/* harmony export */   "set": () => /* reexport safe */ _property__WEBPACK_IMPORTED_MODULE_7__.set
/* harmony export */ });
/* harmony import */ var _Clan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clan */ "./node_modules/libram/src/Clan.js");
/* harmony import */ var _combat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combat */ "./node_modules/libram/src/combat.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib */ "./node_modules/libram/src/lib.js");
/* harmony import */ var _since__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./since */ "./node_modules/libram/src/since.js");
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-string */ "./node_modules/libram/src/template-string.js");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./console */ "./node_modules/libram/src/console.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources */ "./node_modules/libram/src/resources/index.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property */ "./node_modules/libram/src/property.js");













/***/ }),

/***/ "./node_modules/libram/src/lib.js":
/*!****************************************!*\
  !*** ./node_modules/libram/src/lib.js ***!
  \****************************************/
/*! namespace exports */
/*! export Wanderer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getActiveEffects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getActiveSongs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getFamiliarWandererChance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getFoldGroup [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getKramcoWandererChance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getMonsterLocations [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRemainingLiver [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRemainingSpleen [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRemainingStomach [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getSongCount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getSongLimit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTotalFamiliarWanderers [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTotalPuttyLikeCopiesMade [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getWandererChance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getZapGroup [provided] [no usage info] [missing usage info prevents renaming] */
/*! export have [provided] [no usage info] [missing usage info prevents renaming] */
/*! export haveCounter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export haveInCampground [provided] [no usage info] [missing usage info prevents renaming] */
/*! export haveWandererCounter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isCurrentFamiliar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSong [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isVoteWandererNow [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isWandererNow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSongLimit": () => /* binding */ getSongLimit,
/* harmony export */   "isSong": () => /* binding */ isSong,
/* harmony export */   "getActiveEffects": () => /* binding */ getActiveEffects,
/* harmony export */   "getActiveSongs": () => /* binding */ getActiveSongs,
/* harmony export */   "getSongCount": () => /* binding */ getSongCount,
/* harmony export */   "getMonsterLocations": () => /* binding */ getMonsterLocations,
/* harmony export */   "getRemainingLiver": () => /* binding */ getRemainingLiver,
/* harmony export */   "getRemainingStomach": () => /* binding */ getRemainingStomach,
/* harmony export */   "getRemainingSpleen": () => /* binding */ getRemainingSpleen,
/* harmony export */   "have": () => /* binding */ have,
/* harmony export */   "haveInCampground": () => /* binding */ haveInCampground,
/* harmony export */   "Wanderer": () => /* binding */ Wanderer,
/* harmony export */   "haveCounter": () => /* binding */ haveCounter,
/* harmony export */   "getTotalFamiliarWanderers": () => /* binding */ getTotalFamiliarWanderers,
/* harmony export */   "haveWandererCounter": () => /* binding */ haveWandererCounter,
/* harmony export */   "isVoteWandererNow": () => /* binding */ isVoteWandererNow,
/* harmony export */   "isWandererNow": () => /* binding */ isWandererNow,
/* harmony export */   "getKramcoWandererChance": () => /* binding */ getKramcoWandererChance,
/* harmony export */   "getFamiliarWandererChance": () => /* binding */ getFamiliarWandererChance,
/* harmony export */   "getWandererChance": () => /* binding */ getWandererChance,
/* harmony export */   "isCurrentFamiliar": () => /* binding */ isCurrentFamiliar,
/* harmony export */   "getFoldGroup": () => /* binding */ getFoldGroup,
/* harmony export */   "getZapGroup": () => /* binding */ getZapGroup,
/* harmony export */   "getTotalPuttyLikeCopiesMade": () => /* binding */ getTotalPuttyLikeCopiesMade
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-string */ "./node_modules/libram/src/template-string.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./node_modules/libram/src/index.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources */ "./node_modules/libram/src/resources/index.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources__WEBPACK_IMPORTED_MODULE_3__);
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};





/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 */

function getSongLimit() {
  return 3 + ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.booleanModifier)("Four Songs") ? 1 : 0) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("Additional Song");
}
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 * @param skillOrEffect The Skill or Effect
 */

function isSong(skillOrEffect) {
  var skill = skillOrEffect instanceof Effect ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toSkill)(skillOrEffect) : skillOrEffect;
  return skill["class"] === (0,_template_string__WEBPACK_IMPORTED_MODULE_1__.$class)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Accordion Thief"], ["Accordion Thief"]))) && skill.buff;
}
/**
 * List all active Effects
 */

function getActiveEffects() {
  return Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myEffects)()).map(function (e) {
    return Effect.get(e);
  });
}
/**
 * List currently active Accordion Thief songs
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 */

function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Return the locations in which the given monster can be encountered naturally
 * @param monster Monster to find
 */

function getMonsterLocations(monster) {
  return Location.all().filter(function (location) {
    return monster.name in (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.appearanceRates)(location);
  });
}
/**
 * Return the player's remaining liver space
 */

function getRemainingLiver() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inebrietyLimit)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myInebriety)();
}
/**
 * Return the player's remaining stomach space
 */

function getRemainingStomach() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.fullnessLimit)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFullness)();
}
/**
 * Return the player's remaining spleen space
 */

function getRemainingSpleen() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.spleenLimit)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mySpleenUse)();
}
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 */

function have(thing, quantity) {
  if (quantity === void 0) {
    quantity = 1;
  }

  if (thing instanceof Effect) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)(thing);
  }

  if (thing instanceof Item) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveServant)(thing);
  }

  if (thing instanceof Skill) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Return whether an item is in the player's campground
 */

function haveInCampground(item) {
  return Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCampground)()).map(function (i) {
    return Item.get(i);
  }).includes(item);
}
var Wanderer;

(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Return whether the player has the queried counter
 */

function haveCounter(counterName, minTurns, maxTurns) {
  if (minTurns === void 0) {
    minTurns = 0;
  }

  if (maxTurns === void 0) {
    maxTurns = 500;
  }

  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCounters)(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Returns the player's total number of Artistic Goth Kid and/or Mini-Hipster
 * wanderers encountered today
 */

function getTotalFamiliarWanderers() {
  var hipsterFights = (0,___WEBPACK_IMPORTED_MODULE_2__.get)("_hipsterAdv");
  var gothFights = (0,___WEBPACK_IMPORTED_MODULE_2__.get)("_gothKidFights");
  return hipsterFights + gothFights;
}
/**
 * Return whether the player has the queried wandering counter
 */

function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Returns whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 */

function isVoteWandererNow() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.totalTurnsPlayed)() % 11 == 1;
}
/**
 * For deterministic wanderers:
 * Return whether the player will encounter the queried wanderer on the next turn
 *
 * For variable wanderers (window):
 * Return whether the player is within an encounter window for the queried wanderer
 *
 * For variable wanderers (chance per turn):
 * Returns true unless the player has exhausted the number of wanderers possible
 */

function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }

  if (wanderer == Wanderer.Kramco) {
    return true;
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }

  if (wanderer === Wanderer.Familiar) {
    return getTotalFamiliarWanderers() < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Returns the float chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 */

function getKramcoWandererChance() {
  var fights = (0,___WEBPACK_IMPORTED_MODULE_2__.get)("_sausageFights");
  var lastFight = (0,___WEBPACK_IMPORTED_MODULE_2__.get)("_lastSausageMonsterTurn");
  var totalTurns = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.totalTurnsPlayed)();

  if (fights < 1) {
    return lastFight === totalTurns && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
/**
 * Returns the float chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 */

function getFamiliarWandererChance() {
  var totalFights = getTotalFamiliarWanderers();
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Returns the float chance the player will encounter the queried wanderer
 * on the next turn.
 */

function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";

  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }

  var counters = (0,___WEBPACK_IMPORTED_MODULE_2__.get)("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myTurncount)();
    return 1.0 / window;
  }

  return 0.0;
}
function isCurrentFamiliar(familiar) {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === familiar;
}
function getFoldGroup(item) {
  return Object.entries((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getRelated)(item, "fold")).sort(function (_a, _b) {
    var a = _a[1];
    var b = _b[1];
    return a - b;
  }).map(function (_a) {
    var i = _a[0];
    return Item.get(i);
  });
}
function getZapGroup(item) {
  return Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getRelated)(item, "zap")).map(function (i) {
    return Item.get(i);
  });
}
function getTotalPuttyLikeCopiesMade() {
  return _resources__WEBPACK_IMPORTED_MODULE_3__.SpookyPutty.getSpookyPuttySheetCopiesMade() + _resources__WEBPACK_IMPORTED_MODULE_3__.RainDoh.getRainDohBlackBoxCopiesMade();
}
var templateObject_1;

/***/ }),

/***/ "./node_modules/libram/src/property.js":
/*!*********************************************!*\
  !*** ./node_modules/libram/src/property.js ***!
  \*********************************************/
/*! namespace exports */
/*! export createMafiaClassPropertyGetter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createPropertyGetter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getBoolean [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getBounty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCoinmaster [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCommaSeparated [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getEffect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getFamiliar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getLocation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getMonster [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPhylum [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getServant [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getSkill [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getSlot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getStat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getString [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getThrall [provided] [no usage info] [missing usage info prevents renaming] */
/*! export set [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPropertyGetter": () => /* binding */ createPropertyGetter,
/* harmony export */   "createMafiaClassPropertyGetter": () => /* binding */ createMafiaClassPropertyGetter,
/* harmony export */   "getString": () => /* binding */ getString,
/* harmony export */   "getCommaSeparated": () => /* binding */ getCommaSeparated,
/* harmony export */   "getBoolean": () => /* binding */ getBoolean,
/* harmony export */   "getNumber": () => /* binding */ getNumber,
/* harmony export */   "getBounty": () => /* binding */ getBounty,
/* harmony export */   "getClass": () => /* binding */ getClass,
/* harmony export */   "getCoinmaster": () => /* binding */ getCoinmaster,
/* harmony export */   "getEffect": () => /* binding */ getEffect,
/* harmony export */   "getElement": () => /* binding */ getElement,
/* harmony export */   "getFamiliar": () => /* binding */ getFamiliar,
/* harmony export */   "getItem": () => /* binding */ getItem,
/* harmony export */   "getLocation": () => /* binding */ getLocation,
/* harmony export */   "getMonster": () => /* binding */ getMonster,
/* harmony export */   "getPhylum": () => /* binding */ getPhylum,
/* harmony export */   "getServant": () => /* binding */ getServant,
/* harmony export */   "getSkill": () => /* binding */ getSkill,
/* harmony export */   "getSlot": () => /* binding */ getSlot,
/* harmony export */   "getStat": () => /* binding */ getStat,
/* harmony export */   "getThrall": () => /* binding */ getThrall,
/* harmony export */   "get": () => /* binding */ get,
/* harmony export */   "set": () => /* binding */ set
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _propertyTyping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propertyTyping */ "./node_modules/libram/src/propertyTyping.js");


var createPropertyGetter = function createPropertyGetter(transform) {
  return function (property, default_) {
    var value = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(property);

    if (default_ !== undefined && value === "") {
      return default_;
    }

    return transform(value, property);
  };
};
var createMafiaClassPropertyGetter = function createMafiaClassPropertyGetter(Type) {
  return createPropertyGetter(function (value) {
    var v = Type.get(value);
    return v === Type.get("none") ? null : v;
  });
};
var getString = createPropertyGetter(function (value) {
  return value;
});
var getCommaSeparated = createPropertyGetter(function (value) {
  return value.split(/, ?/);
});
var getBoolean = createPropertyGetter(function (value) {
  return value === "true";
});
var getNumber = createPropertyGetter(function (value) {
  return Number(value);
});
var getBounty = createMafiaClassPropertyGetter(Bounty);
var getClass = createMafiaClassPropertyGetter(Class);
var getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
var getEffect = createMafiaClassPropertyGetter(Effect);
var getElement = createMafiaClassPropertyGetter(Element);
var getFamiliar = createMafiaClassPropertyGetter(Familiar);
var getItem = createMafiaClassPropertyGetter(Item);
var getLocation = createMafiaClassPropertyGetter(Location);
var getMonster = createMafiaClassPropertyGetter(Monster);
var getPhylum = createMafiaClassPropertyGetter(Phylum);
var getServant = createMafiaClassPropertyGetter(Servant);
var getSkill = createMafiaClassPropertyGetter(Skill);
var getSlot = createMafiaClassPropertyGetter(Slot);
var getStat = createMafiaClassPropertyGetter(Stat);
var getThrall = createMafiaClassPropertyGetter(Thrall);
function get(property, _default) {
  var value = getString(property);

  if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__.isMonsterProperty)(property)) {
    return getMonster(property, _default);
  }

  if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__.isLocationProperty)(property)) {
    return getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__.isBooleanProperty)(property, value)) {
    return getBoolean(property, _default);
  }

  if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__.isNumericProperty)(property, value)) {
    return getNumber(property, _default);
  }

  return value;
}
function set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)(property, stringValue);
}

/***/ }),

/***/ "./node_modules/libram/src/propertyTyping.js":
/*!***************************************************!*\
  !*** ./node_modules/libram/src/propertyTyping.js ***!
  \***************************************************/
/*! namespace exports */
/*! export isBooleanProperty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isLocationProperty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isMonsterProperty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isNumericProperty [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumericProperty": () => /* binding */ isNumericProperty,
/* harmony export */   "isBooleanProperty": () => /* binding */ isBooleanProperty,
/* harmony export */   "isLocationProperty": () => /* binding */ isLocationProperty,
/* harmony export */   "isMonsterProperty": () => /* binding */ isMonsterProperty
/* harmony export */ });
function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}
var fakeBooleans = ["trackVoteMonster", "_jickJarAvailable"];
function isBooleanProperty(property, value) {
  if (fakeBooleans.includes(property)) return false;
  return ["true", "false"].includes(value);
}
var otherLocations = ["nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom"];
function isLocationProperty(property) {
  return otherLocations.includes(property) || property.endsWith("Location");
}
var otherMonsters = ["romanticTarget"];
function isMonsterProperty(property) {
  if (otherMonsters.includes(property)) return true;
  return property.endsWith("Monster");
}

/***/ }),

/***/ "./node_modules/libram/src/resources/index.js":
/*!****************************************************!*\
  !*** ./node_modules/libram/src/resources/index.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "./node_modules/libram/src/since.js":
/*!******************************************!*\
  !*** ./node_modules/libram/src/since.js ***!
  \******************************************/
/*! namespace exports */
/*! export KolmafiaVersionError [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sinceKolmafiaRevision [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sinceKolmafiaVersion [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.c, __webpack_require__.s, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KolmafiaVersionError": () => /* binding */ KolmafiaVersionError,
/* harmony export */   "sinceKolmafiaRevision": () => /* binding */ sinceKolmafiaRevision,
/* harmony export */   "sinceKolmafiaVersion": () => /* binding */ sinceKolmafiaVersion
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file Utilities for writing JavaScript code that runs in KoLmafia.
 */
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();


/**
 * Represents an exception thrown when the current KoLmafia version does not
 * match an expected condition.
 */

var KolmafiaVersionError =
/** @class */
function (_super) {
  __extends(KolmafiaVersionError, _super);

  function KolmafiaVersionError(message) {
    var _this = _super.call(this, message) || this; // Explicitly set the prototype, so that 'instanceof' still works in Node.js
    // even when the class is transpiled down to ES5
    // See: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Note that this code isn't needed for Rhino.


    Object.setPrototypeOf(_this, KolmafiaVersionError.prototype);
    return _this;
  }

  return KolmafiaVersionError;
}(Error);

 // Manually set class name, so that the stack trace shows proper name in Rhino

KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
/**
 * Returns the currently executing script name, suitable for embedding in an
 * error message.
 * @returns Path of the main script wrapped in single-quotes, or `"This script"`
 *    if the path cannot be determined
 */

function getScriptName() {
  var _a; // In Rhino, the current script name is available in require.main.id


  var scriptName = (_a = __webpack_require__.c[__webpack_require__.s]) === null || _a === void 0 ? void 0 : _a.id;
  return scriptName ? "'" + scriptName + "'" : "This script";
}
/**
 * If KoLmafia's revision number is less than `revision`, throws an exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since rXXX;` statement in ASH.
 * @param revision Revision number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's revision number is less than `revision`.
 * @throws {TypeError} If `revision` is not an integer
 */


function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision)) {
    throw new TypeError("Invalid revision number " + revision + " (must be an integer)");
  } // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()


  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getRevision)() < revision) {
    throw new KolmafiaVersionError(getScriptName() + " requires revision r" + revision + " of kolmafia or higher (current: " + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getRevision)() + "). Up-to-date builds can be found at https://ci.kolmafia.us/.");
  }
}
/**
 * If KoLmafia's version is less than `majorVersion.minorVersion`, throws an
 * exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since X.Y;` statement in ASH.
 * @param majorVersion Major version number
 * @param minorVersion Minor version number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's major version is less than `majorVersion`, or if the major
 *    versions are equal but the minor version is less than `minorVersion`
 * @throws {TypeError}
 *    If either `majorVersion` or `minorVersion` are not integers
 */

function sinceKolmafiaVersion(majorVersion, minorVersion) {
  if (!Number.isInteger(majorVersion)) {
    throw new TypeError("Invalid major version number " + majorVersion + " (must be an integer)");
  }

  if (!Number.isInteger(minorVersion)) {
    throw new TypeError("Invalid minor version number " + minorVersion + " (must be an integer)");
  }

  var versionStr = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getVersion)();
  var versionStrMatch = /v(\d+)\.(\d+)/.exec(versionStr);

  if (!versionStrMatch) {
    // This is not something the user should handle
    throw new Error("Unexpected KoLmafia version string: \"" + versionStr + "\". You may need to update the script.");
  }

  var currentMajorVersion = Number(versionStrMatch[1]);
  var currentMinorVersion = Number(versionStrMatch[2]); // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()

  if (currentMajorVersion < majorVersion || currentMajorVersion === majorVersion && currentMinorVersion < minorVersion) {
    throw new KolmafiaVersionError(getScriptName() + " requires version " + majorVersion + "." + minorVersion + " of kolmafia or higher (current: " + currentMajorVersion + "." + currentMinorVersion + "). Up-to-date builds can be found at https://ci.kolmafia.us/.");
  }
}

/***/ }),

/***/ "./node_modules/libram/src/template-string.js":
/*!****************************************************!*\
  !*** ./node_modules/libram/src/template-string.js ***!
  \****************************************************/
/*! namespace exports */
/*! export $bounties [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $bounty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $class [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $classes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $coinmaster [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $coinmasters [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $effect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $effects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $element [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $elements [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $familiar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $familiars [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $item [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $items [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $location [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $locations [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $monster [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $monsters [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $phyla [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $phylum [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $servant [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $servants [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $skill [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $skills [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $slot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $slots [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $stat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $stats [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $thrall [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $thralls [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$bounty": () => /* binding */ $bounty,
/* harmony export */   "$bounties": () => /* binding */ $bounties,
/* harmony export */   "$class": () => /* binding */ $class,
/* harmony export */   "$classes": () => /* binding */ $classes,
/* harmony export */   "$coinmaster": () => /* binding */ $coinmaster,
/* harmony export */   "$coinmasters": () => /* binding */ $coinmasters,
/* harmony export */   "$effect": () => /* binding */ $effect,
/* harmony export */   "$effects": () => /* binding */ $effects,
/* harmony export */   "$element": () => /* binding */ $element,
/* harmony export */   "$elements": () => /* binding */ $elements,
/* harmony export */   "$familiar": () => /* binding */ $familiar,
/* harmony export */   "$familiars": () => /* binding */ $familiars,
/* harmony export */   "$item": () => /* binding */ $item,
/* harmony export */   "$items": () => /* binding */ $items,
/* harmony export */   "$location": () => /* binding */ $location,
/* harmony export */   "$locations": () => /* binding */ $locations,
/* harmony export */   "$monster": () => /* binding */ $monster,
/* harmony export */   "$monsters": () => /* binding */ $monsters,
/* harmony export */   "$phylum": () => /* binding */ $phylum,
/* harmony export */   "$phyla": () => /* binding */ $phyla,
/* harmony export */   "$servant": () => /* binding */ $servant,
/* harmony export */   "$servants": () => /* binding */ $servants,
/* harmony export */   "$skill": () => /* binding */ $skill,
/* harmony export */   "$skills": () => /* binding */ $skills,
/* harmony export */   "$slot": () => /* binding */ $slot,
/* harmony export */   "$slots": () => /* binding */ $slots,
/* harmony export */   "$stat": () => /* binding */ $stat,
/* harmony export */   "$stats": () => /* binding */ $stats,
/* harmony export */   "$thrall": () => /* binding */ $thrall,
/* harmony export */   "$thralls": () => /* binding */ $thralls
/* harmony export */ });
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var concatTemplateString = function concatTemplateString(literals) {
  var placeholders = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    placeholders[_i - 1] = arguments[_i];
  }

  return literals.reduce(function (acc, literal, i) {
    return acc + literal + (placeholders[i] || "");
  }, "");
};

var createSingleConstant = function createSingleConstant(Type) {
  return function (literals) {
    var placeholders = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      placeholders[_i - 1] = arguments[_i];
    }

    var input = concatTemplateString.apply(void 0, __spreadArrays([literals], placeholders));
    return Type.get(input);
  };
};

var createPluralConstant = function createPluralConstant(Type) {
  return function (literals) {
    var placeholders = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      placeholders[_i - 1] = arguments[_i];
    }

    var input = concatTemplateString.apply(void 0, __spreadArrays([literals], placeholders));

    if (input === "") {
      return Type.all();
    }

    return Type.get(input.split(","));
  };
};
/**
 * A Bounty specified by name.
 */


var $bounty = createSingleConstant(Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 */

var $bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 */

var $class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 */

var $classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 */

var $coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 */

var $coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 */

var $effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 */

var $effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 */

var $element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 */

var $elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 */

var $familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 */

var $familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 */

var $item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 */

var $items = createPluralConstant(Item);
/**
 * A Location specified by name.
 */

var $location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 */

var $locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 */

var $monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 */

var $monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 */

var $phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 */

var $phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 */

var $servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 */

var $servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 */

var $skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 */

var $skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 */

var $slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 */

var $slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 */

var $stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 */

var $stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 */

var $thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 */

var $thralls = createPluralConstant(Thrall);

/***/ }),

/***/ "./node_modules/libram/src/utils.js":
/*!******************************************!*\
  !*** ./node_modules/libram/src/utils.js ***!
  \******************************************/
/*! namespace exports */
/*! export notNull [provided] [no usage info] [missing usage info prevents renaming] */
/*! export parseNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notNull": () => /* binding */ notNull,
/* harmony export */   "parseNumber": () => /* binding */ parseNumber
/* harmony export */ });
function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}

/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/back.js":
/*!********************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/back.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ arr_back
/* harmony export */ });
function arr_back(arr) {
  return arr[arr.length - 1];
}

/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/index.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export CommentNode [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/node-html-parser/dist/esm/nodes/comment.js .default */
/*! export HTMLElement [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/node-html-parser/dist/esm/nodes/html.js .default */
/*! export Node [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/node-html-parser/dist/esm/nodes/node.js .default */
/*! export NodeType [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/node-html-parser/dist/esm/nodes/type.js .default */
/*! export TextNode [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/node-html-parser/dist/esm/nodes/text.js .default */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/node-html-parser/dist/esm/parse.js .default */
/*! export parse [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/node-html-parser/dist/esm/parse.js .default */
/*! export valid [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/node-html-parser/dist/esm/valid.js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentNode": () => /* reexport safe */ _nodes_comment__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "HTMLElement": () => /* reexport safe */ _nodes_html__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "parse": () => /* reexport safe */ _parse__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "default": () => /* reexport safe */ _parse__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "valid": () => /* reexport safe */ _valid__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "Node": () => /* reexport safe */ _nodes_node__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "TextNode": () => /* reexport safe */ _nodes_text__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "NodeType": () => /* reexport safe */ _nodes_type__WEBPACK_IMPORTED_MODULE_6__.default
/* harmony export */ });
/* harmony import */ var _nodes_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes/comment */ "./node_modules/node-html-parser/dist/esm/nodes/comment.js");
/* harmony import */ var _nodes_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes/html */ "./node_modules/node-html-parser/dist/esm/nodes/html.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse */ "./node_modules/node-html-parser/dist/esm/parse.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valid */ "./node_modules/node-html-parser/dist/esm/valid.js");
/* harmony import */ var _nodes_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodes/node */ "./node_modules/node-html-parser/dist/esm/nodes/node.js");
/* harmony import */ var _nodes_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nodes/text */ "./node_modules/node-html-parser/dist/esm/nodes/text.js");
/* harmony import */ var _nodes_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nodes/type */ "./node_modules/node-html-parser/dist/esm/nodes/type.js");








/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/matcher.js":
/*!***********************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/matcher.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Matcher
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Cache to store generated match functions
 * @type {Object}
 */
var pMatchFunctionCache = {};

function compare_tagname(tag1, tag2) {
  if (!tag1) {
    return !tag2;
  }

  if (!tag2) {
    return !tag1;
  }

  return tag1.toLowerCase() === tag2.toLowerCase();
}
/**
 * Function cache
 */


var functionCache = {
  f145: function f145(el, tagName, classes) {
    'use strict';

    tagName = tagName || '';
    classes = classes || [];

    if (el.id !== tagName.substr(1)) {
      return false;
    }

    for (var cls = classes, i = 0; i < cls.length; i++) {
      if (el.classNames.indexOf(cls[i]) === -1) {
        return false;
      }
    }

    return true;
  },
  f45: function f45(el, tagName, classes) {
    'use strict';

    tagName = tagName || '';
    classes = classes || [];

    for (var cls = classes, i = 0; i < cls.length; i++) {
      if (el.classNames.indexOf(cls[i]) === -1) {
        return false;
      }
    }

    return true;
  },
  f15: function f15(el, tagName) {
    'use strict';

    tagName = tagName || '';

    if (el.id !== tagName.substr(1)) {
      return false;
    }

    return true;
  },
  f1: function f1(el, tagName) {
    'use strict';

    tagName = tagName || '';

    if (el.id !== tagName.substr(1)) {
      return false;
    }
  },
  f5: function f5() {
    'use strict';

    return true;
  },
  f55: function f55(el, tagName, classes, attr_key) {
    'use strict';

    tagName = tagName || '';
    classes = classes || [];
    attr_key = attr_key || '';
    var attrs = el.attributes;
    return attrs.hasOwnProperty(attr_key);
  },
  f245: function f245(el, tagName, classes, attr_key, value) {
    'use strict';

    tagName = tagName || '';
    classes = classes || [];
    attr_key = (attr_key || '').toLowerCase();
    value = value || '';
    var attrs = el.attributes;
    return Object.keys(attrs).some(function (key) {
      var val = attrs[key];
      return key.toLowerCase() === attr_key && val === value;
    }); // for (let cls = classes, i = 0; i < cls.length; i++) {if (el.classNames.indexOf(cls[i]) === -1){ return false;}}
    // return true;
  },
  f25: function f25(el, tagName, classes, attr_key, value) {
    'use strict';

    tagName = tagName || '';
    classes = classes || [];
    attr_key = (attr_key || '').toLowerCase();
    value = value || '';
    var attrs = el.attributes;
    return Object.keys(attrs).some(function (key) {
      var val = attrs[key];
      return key.toLowerCase() === attr_key && val === value;
    }); // return true;
  },
  f2: function f2(el, tagName, classes, attr_key, value) {
    'use strict';

    tagName = tagName || '';
    classes = classes || [];
    attr_key = (attr_key || '').toLowerCase();
    value = value || '';
    var attrs = el.attributes;
    return Object.keys(attrs).some(function (key) {
      var val = attrs[key];
      return key.toLowerCase() === attr_key && val === value;
    });
  },
  f345: function f345(el, tagName, classes) {
    'use strict';

    tagName = tagName || '';
    classes = classes || [];

    if (!compare_tagname(el.tagName, tagName)) {
      return false;
    }

    for (var cls = classes, i = 0; i < cls.length; i++) {
      if (el.classNames.indexOf(cls[i]) === -1) {
        return false;
      }
    }

    return true;
  },
  f35: function f35(el, tagName) {
    'use strict';

    tagName = tagName || '';
    return compare_tagname(el.tagName, tagName);
  },
  f3: function f3(el, tagName) {
    'use strict';

    tagName = tagName || ''; // if (el.tagName !== tagName) {
    // 	return false;
    // }

    return compare_tagname(el.tagName, tagName);
  }
};
/**
 * Matcher class to make CSS match
 *
 * @class Matcher
 */

var Matcher = /*#__PURE__*/function () {
  /**
   * Creates an instance of Matcher.
   * @param {string} selector
   *
   * @memberof Matcher
   */
  function Matcher(selector) {
    _classCallCheck(this, Matcher);

    this.nextMatch = 0;
    this.matchers = selector.split(' ').map(function (matcher) {
      if (pMatchFunctionCache[matcher]) {
        return pMatchFunctionCache[matcher];
      }

      var parts = matcher.split('.');
      var tagName = parts[0];
      var classes = parts.slice(1).sort(); // let source = '"use strict";';

      var function_name = 'f';
      var attr_key = '';
      var value = '';

      if (tagName && tagName !== '*') {
        if (tagName.startsWith('#')) {
          // source += 'if (el.id != ' + JSON.stringify(tagName.substr(1)) + ') return false;';// 1
          function_name += '1';
        } else {
          // https://github.com/taoqf/node-html-parser/issues/86
          // const reg = /\[\s*([\w-]+)(\s*=\s*(((?<quote>'|")\s*(.*)(\k<quote>))|(\S*)))?\s*\]/.exec(tagName);
          // `[a-b]`,`[ a-b ]`,`[a-b=c]`, `[a-b=c'd]`,`[a-b='c\' d"e ']`,`[ a-b = 'c\' d"e ' ]`,`[a-b="c' d\"e " ]`,`[ a-b = "c' d\"e " ]`
          var reg = /\[\s*([\w-]+)(\s*=\s*(('\s*(.*)'|"\s*(.*)")|(\S*)))?\s*\]/.exec(tagName);

          if (reg) {
            attr_key = reg[1];
            value = reg[5] || reg[6] || reg[7]; // source += `let attrs = el.attributes;for (let key in attrs){const val = attrs[key]; if (key == "${attr_key}" && val == "${value}"){return true;}} return false;`;// 2

            function_name += '2';
          } else {
            // source += 'if (el.tagName != ' + JSON.stringify(tagName) + ') return false;';// 3
            function_name += '3';
          }
        }
      }

      if (classes.length > 0) {
        // source += 'for (let cls = ' + JSON.stringify(classes) + ', i = 0; i < cls.length; i++) if (el.classNames.indexOf(cls[i]) === -1) return false;';// 4
        function_name += '4';
      } // source += 'return true;';// 5


      function_name += '5';
      var obj = {
        func: functionCache[function_name],
        tagName: tagName || '',
        classes: classes || '',
        attr_key: attr_key || '',
        value: value || ''
      }; // source = source || '';

      return pMatchFunctionCache[matcher] = obj;
    });
  }
  /**
   * Trying to advance match pointer
   * @param  {HTMLElement} el element to make the match
   * @return {bool}           true when pointer advanced.
   */


  _createClass(Matcher, [{
    key: "advance",
    value: function advance(el) {
      if (this.nextMatch < this.matchers.length && this.matchers[this.nextMatch].func(el, this.matchers[this.nextMatch].tagName, this.matchers[this.nextMatch].classes, this.matchers[this.nextMatch].attr_key, this.matchers[this.nextMatch].value)) {
        this.nextMatch++;
        return true;
      }

      return false;
    }
    /**
     * Rewind the match pointer
     */

  }, {
    key: "rewind",
    value: function rewind() {
      this.nextMatch--;
    }
    /**
     * Trying to determine if match made.
     * @return {bool} true when the match is made
     */

  }, {
    key: "reset",

    /**
     * Rest match pointer.
     * @return {[type]} [description]
     */
    value: function reset() {
      this.nextMatch = 0;
    }
    /**
     * flush cache to free memory
     */

  }, {
    key: "flushCache",
    value: function flushCache() {
      pMatchFunctionCache = {};
    }
  }, {
    key: "matched",
    get: function get() {
      return this.nextMatch === this.matchers.length;
    }
  }]);

  return Matcher;
}();



/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/nodes/comment.js":
/*!*****************************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/nodes/comment.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CommentNode
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./node_modules/node-html-parser/dist/esm/nodes/node.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/node-html-parser/dist/esm/nodes/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CommentNode = /*#__PURE__*/function (_Node) {
  _inherits(CommentNode, _Node);

  var _super = _createSuper(CommentNode);

  function CommentNode(rawText) {
    var _this;

    _classCallCheck(this, CommentNode);

    _this = _super.call(this);
    _this.rawText = rawText;
    /**
     * Node Type declaration.
     * @type {Number}
     */

    _this.nodeType = _type__WEBPACK_IMPORTED_MODULE_1__.default.COMMENT_NODE;
    return _this;
  }
  /**
   * Get unescaped text value of current node and its children.
   * @return {string} text content
   */


  _createClass(CommentNode, [{
    key: "toString",
    value: function toString() {
      return "<!--".concat(this.rawText, "-->");
    }
  }, {
    key: "text",
    get: function get() {
      return this.rawText;
    }
  }]);

  return CommentNode;
}(_node__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/nodes/html.js":
/*!**************************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/nodes/html.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export base_parse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ HTMLElement,
/* harmony export */   "base_parse": () => /* binding */ base_parse
/* harmony export */ });
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./node_modules/node-html-parser/dist/esm/nodes/node.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./node_modules/node-html-parser/dist/esm/nodes/type.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "./node_modules/node-html-parser/dist/esm/nodes/text.js");
/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../matcher */ "./node_modules/node-html-parser/dist/esm/matcher.js");
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../back */ "./node_modules/node-html-parser/dist/esm/back.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment */ "./node_modules/node-html-parser/dist/esm/nodes/comment.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parse */ "./node_modules/node-html-parser/dist/esm/parse.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var kBlockElements = new Map();
kBlockElements.set('DIV', true);
kBlockElements.set('div', true);
kBlockElements.set('P', true);
kBlockElements.set('p', true); // ul: true,
// ol: true,

kBlockElements.set('LI', true);
kBlockElements.set('li', true); // table: true,
// tr: true,

kBlockElements.set('TD', true);
kBlockElements.set('td', true);
kBlockElements.set('SECTION', true);
kBlockElements.set('section', true);
kBlockElements.set('BR', true);
kBlockElements.set('br', true);
/**
 * HTMLElement, which contains a set of children.
 *
 * Note: this is a minimalist implementation, no complete tree
 *   structure provided (no parentNode, nextSibling,
 *   previousSibling etc).
 * @class HTMLElement
 * @extends {Node}
 */

var HTMLElement = /*#__PURE__*/function (_Node) {
  _inherits(HTMLElement, _Node);

  var _super = _createSuper(HTMLElement);

  /**
   * Creates an instance of HTMLElement.
   * @param keyAttrs	id and class attribute
   * @param [rawAttrs]	attributes in string
   *
   * @memberof HTMLElement
   */
  function HTMLElement(tagName, keyAttrs) {
    var _this;

    var rawAttrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var parentNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, HTMLElement);

    _this = _super.call(this);
    _this.rawAttrs = rawAttrs;
    _this.parentNode = parentNode;
    _this.classNames = [];
    /**
     * Node Type declaration.
     */

    _this.nodeType = _type__WEBPACK_IMPORTED_MODULE_2__.default.ELEMENT_NODE;
    _this.rawTagName = tagName;
    _this.rawAttrs = rawAttrs || '';
    _this.childNodes = [];

    if (keyAttrs.id) {
      _this.id = keyAttrs.id;

      if (!rawAttrs) {
        _this.rawAttrs = "id=\"".concat(keyAttrs.id, "\"");
      }
    }

    if (keyAttrs["class"]) {
      _this.classNames = keyAttrs["class"].split(/\s+/);

      if (!rawAttrs) {
        var cls = "class=\"".concat(_this.classNames.join(' '), "\"");

        if (_this.rawAttrs) {
          _this.rawAttrs += " ".concat(cls);
        } else {
          _this.rawAttrs = cls;
        }
      }
    }

    return _this;
  }
  /**
   * Remove current element
   */


  _createClass(HTMLElement, [{
    key: "remove",
    value: function remove() {
      var _this2 = this;

      if (this.parentNode) {
        var children = this.parentNode.childNodes;
        this.parentNode.childNodes = children.filter(function (child) {
          return _this2 !== child;
        });
      }
    }
    /**
     * Remove Child element from childNodes array
     * @param {HTMLElement} node     node to remove
     */

  }, {
    key: "removeChild",
    value: function removeChild(node) {
      this.childNodes = this.childNodes.filter(function (child) {
        return child !== node;
      });
    }
    /**
     * Exchanges given child with new child
     * @param {HTMLElement} oldNode     node to exchange
     * @param {HTMLElement} newNode     new node
     */

  }, {
    key: "exchangeChild",
    value: function exchangeChild(oldNode, newNode) {
      var children = this.childNodes;
      this.childNodes = children.map(function (child) {
        if (child === oldNode) {
          return newNode;
        }

        return child;
      });
    }
  }, {
    key: "toString",
    value: function toString() {
      var tag = this.rawTagName;

      if (tag) {
        var is_void = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i.test(tag);
        var attrs = this.rawAttrs ? " ".concat(this.rawAttrs) : '';

        if (is_void) {
          return "<".concat(tag).concat(attrs, ">");
        }

        return "<".concat(tag).concat(attrs, ">").concat(this.innerHTML, "</").concat(tag, ">");
      }

      return this.innerHTML;
    }
  }, {
    key: "set_content",
    value: function set_content(content) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (content instanceof _node__WEBPACK_IMPORTED_MODULE_1__.default) {
        content = [content];
      } else if (typeof content == 'string') {
        var r = (0,_parse__WEBPACK_IMPORTED_MODULE_7__.default)(content, options);
        content = r.childNodes.length ? r.childNodes : [new _text__WEBPACK_IMPORTED_MODULE_3__.default(content)];
      }

      this.childNodes = content;
    }
  }, {
    key: "trimRight",

    /**
     * Trim element from right (in block) after seeing pattern in a TextNode.
     * @param  {RegExp} pattern pattern to find
     * @return {HTMLElement}    reference to current node
     */
    value: function trimRight(pattern) {
      for (var i = 0; i < this.childNodes.length; i++) {
        var childNode = this.childNodes[i];

        if (childNode.nodeType === _type__WEBPACK_IMPORTED_MODULE_2__.default.ELEMENT_NODE) {
          childNode.trimRight(pattern);
        } else {
          var index = childNode.rawText.search(pattern);

          if (index > -1) {
            childNode.rawText = childNode.rawText.substr(0, index); // trim all following nodes.

            this.childNodes.length = i + 1;
          }
        }
      }

      return this;
    }
    /**
     * Get DOM structure
     * @return {string} strucutre
     */

  }, {
    key: "removeWhitespace",

    /**
     * Remove whitespaces in this sub tree.
     * @return {HTMLElement} pointer to this
     */
    value: function removeWhitespace() {
      var _this3 = this;

      var o = 0;
      this.childNodes.forEach(function (node) {
        if (node.nodeType === _type__WEBPACK_IMPORTED_MODULE_2__.default.TEXT_NODE) {
          if (node.isWhitespace) {
            return;
          }

          node.rawText = node.rawText.trim();
        } else if (node.nodeType === _type__WEBPACK_IMPORTED_MODULE_2__.default.ELEMENT_NODE) {
          node.removeWhitespace();
        }

        _this3.childNodes[o++] = node;
      });
      this.childNodes.length = o;
      return this;
    }
    /**
     * Query CSS selector to find matching nodes.
     * @param  {string}         selector Simplified CSS selector
     * @param  {Matcher}        selector A Matcher instance
     * @return {HTMLElement[]}  matching elements
     */

  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selector) {
      var _this4 = this;

      var matcher;

      if (selector instanceof _matcher__WEBPACK_IMPORTED_MODULE_4__.default) {
        matcher = selector;
        matcher.reset();
      } else {
        if (selector.includes(',')) {
          var selectors = selector.split(',');
          return Array.from(selectors.reduce(function (pre, cur) {
            var result = _this4.querySelectorAll(cur.trim());

            return result.reduce(function (p, c) {
              return p.add(c);
            }, pre);
          }, new Set()));
        }

        matcher = new _matcher__WEBPACK_IMPORTED_MODULE_4__.default(selector);
      }

      var stack = [];
      return this.childNodes.reduce(function (res, cur) {
        stack.push([cur, 0, false]);

        while (stack.length) {
          var state = (0,_back__WEBPACK_IMPORTED_MODULE_5__.default)(stack); // get last element

          var el = state[0];

          if (state[1] === 0) {
            // Seen for first time.
            if (el.nodeType !== _type__WEBPACK_IMPORTED_MODULE_2__.default.ELEMENT_NODE) {
              stack.pop();
              continue;
            }

            var html_el = el;
            state[2] = matcher.advance(html_el);

            if (state[2]) {
              if (matcher.matched) {
                res.push(html_el);
                res.push.apply(res, _toConsumableArray(html_el.querySelectorAll(selector))); // no need to go further.

                matcher.rewind();
                stack.pop();
                continue;
              }
            }
          }

          if (state[1] < el.childNodes.length) {
            stack.push([el.childNodes[state[1]++], 0, false]);
          } else {
            if (state[2]) {
              matcher.rewind();
            }

            stack.pop();
          }
        }

        return res;
      }, []);
    }
    /**
     * Query CSS Selector to find matching node.
     * @param  {string}         selector Simplified CSS selector
     * @param  {Matcher}        selector A Matcher instance
     * @return {HTMLElement}    matching node
     */

  }, {
    key: "querySelector",
    value: function querySelector(selector) {
      var matcher;

      if (selector instanceof _matcher__WEBPACK_IMPORTED_MODULE_4__.default) {
        matcher = selector;
        matcher.reset();
      } else {
        matcher = new _matcher__WEBPACK_IMPORTED_MODULE_4__.default(selector);
      }

      var stack = [];

      var _iterator = _createForOfIteratorHelper(this.childNodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          stack.push([node, 0, false]);

          while (stack.length) {
            var state = (0,_back__WEBPACK_IMPORTED_MODULE_5__.default)(stack);
            var el = state[0];

            if (state[1] === 0) {
              // Seen for first time.
              if (el.nodeType !== _type__WEBPACK_IMPORTED_MODULE_2__.default.ELEMENT_NODE) {
                stack.pop();
                continue;
              }

              state[2] = matcher.advance(el);

              if (state[2]) {
                if (matcher.matched) {
                  return el;
                }
              }
            }

            if (state[1] < el.childNodes.length) {
              stack.push([el.childNodes[state[1]++], 0, false]);
            } else {
              if (state[2]) {
                matcher.rewind();
              }

              stack.pop();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
    /**
     * Append a child node to childNodes
     * @param  {Node} node node to append
     * @return {Node}      node appended
     */

  }, {
    key: "appendChild",
    value: function appendChild(node) {
      // node.parentNode = this;
      this.childNodes.push(node);

      if (node instanceof HTMLElement) {
        node.parentNode = this;
      }

      return node;
    }
    /**
     * Get first child node
     * @return {Node} first child node
     */

  }, {
    key: "removeAttribute",
    value: function removeAttribute(key) {
      var attrs = this.rawAttributes;
      delete attrs[key]; // Update this.attribute

      if (this._attrs) {
        delete this._attrs[key];
      } // Update rawString


      this.rawAttrs = Object.keys(attrs).map(function (name) {
        var val = JSON.stringify(attrs[name]);

        if (val === undefined || val === 'null') {
          return name;
        }

        return "".concat(name, "=").concat(val);
      }).join(' ');
    }
  }, {
    key: "hasAttribute",
    value: function hasAttribute(key) {
      return key in this.attributes;
    }
    /**
     * Get an attribute
     * @return {string} value of the attribute
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(key) {
      return this.attributes[key];
    }
    /**
     * Set an attribute value to the HTMLElement
     * @param {string} key The attribute name
     * @param {string} value The value to set, or null / undefined to remove an attribute
     */

  }, {
    key: "setAttribute",
    value: function setAttribute(key, value) {
      if (arguments.length < 2) {
        throw new Error('Failed to execute \'setAttribute\' on \'Element\'');
      }

      var attrs = this.rawAttributes;
      attrs[key] = String(value);

      if (this._attrs) {
        this._attrs[key] = (0,he__WEBPACK_IMPORTED_MODULE_0__.decode)(attrs[key]);
      } // Update rawString


      this.rawAttrs = Object.keys(attrs).map(function (name) {
        var val = JSON.stringify(attrs[name]);

        if (val === 'null' || val === '""') {
          return name;
        }

        return "".concat(name, "=").concat(val);
      }).join(' ');
    }
    /**
     * Replace all the attributes of the HTMLElement by the provided attributes
     * @param {Attributes} attributes the new attribute set
     */

  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      // Invalidate current this.attributes
      if (this._attrs) {
        delete this._attrs;
      } // Invalidate current this.rawAttributes


      if (this._rawAttrs) {
        delete this._rawAttrs;
      } // Update rawString


      this.rawAttrs = Object.keys(attributes).map(function (name) {
        var val = attributes[name];

        if (val === 'null' || val === '""') {
          return name;
        }

        return "".concat(name, "=").concat(JSON.stringify(String(val)));
      }).join(' ');
    }
  }, {
    key: "insertAdjacentHTML",
    value: function insertAdjacentHTML(where, html) {
      var _this5 = this;

      if (arguments.length < 2) {
        throw new Error('2 arguments required');
      }

      var p = (0,_parse__WEBPACK_IMPORTED_MODULE_7__.default)(html);

      if (where === 'afterend') {
        var _this$parentNode$chil;

        var idx = this.parentNode.childNodes.findIndex(function (child) {
          return child === _this5;
        });

        (_this$parentNode$chil = this.parentNode.childNodes).splice.apply(_this$parentNode$chil, [idx + 1, 0].concat(_toConsumableArray(p.childNodes)));

        p.childNodes.forEach(function (n) {
          if (n instanceof HTMLElement) {
            n.parentNode = _this5.parentNode;
          }
        });
      } else if (where === 'afterbegin') {
        var _this$childNodes;

        (_this$childNodes = this.childNodes).unshift.apply(_this$childNodes, _toConsumableArray(p.childNodes));
      } else if (where === 'beforeend') {
        p.childNodes.forEach(function (n) {
          _this5.appendChild(n);
        });
      } else if (where === 'beforebegin') {
        var _this$parentNode$chil2;

        var _idx = this.parentNode.childNodes.findIndex(function (child) {
          return child === _this5;
        });

        (_this$parentNode$chil2 = this.parentNode.childNodes).splice.apply(_this$parentNode$chil2, [_idx, 0].concat(_toConsumableArray(p.childNodes)));

        p.childNodes.forEach(function (n) {
          if (n instanceof HTMLElement) {
            n.parentNode = _this5.parentNode;
          }
        });
      } else {
        throw new Error("The value provided ('".concat(where, "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"));
      } // if (!where || html === undefined || html === null) {
      // 	return;
      // }

    }
  }, {
    key: "tagName",
    get: function get() {
      return this.rawTagName ? this.rawTagName.toUpperCase() : this.rawTagName;
    }
    /**
     * Get escpaed (as-it) text value of current node and its children.
     * @return {string} text content
     */

  }, {
    key: "rawText",
    get: function get() {
      return this.childNodes.reduce(function (pre, cur) {
        return pre += cur.rawText;
      }, '');
    }
    /**
     * Get unescaped text value of current node and its children.
     * @return {string} text content
     */

  }, {
    key: "text",
    get: function get() {
      return (0,he__WEBPACK_IMPORTED_MODULE_0__.decode)(this.rawText);
    }
    /**
     * Get structured Text (with '\n' etc.)
     * @return {string} structured text
     */

  }, {
    key: "structuredText",
    get: function get() {
      var currentBlock = [];
      var blocks = [currentBlock];

      function dfs(node) {
        if (node.nodeType === _type__WEBPACK_IMPORTED_MODULE_2__.default.ELEMENT_NODE) {
          if (kBlockElements.get(node.rawTagName)) {
            if (currentBlock.length > 0) {
              blocks.push(currentBlock = []);
            }

            node.childNodes.forEach(dfs);

            if (currentBlock.length > 0) {
              blocks.push(currentBlock = []);
            }
          } else {
            node.childNodes.forEach(dfs);
          }
        } else if (node.nodeType === _type__WEBPACK_IMPORTED_MODULE_2__.default.TEXT_NODE) {
          if (node.isWhitespace) {
            // Whitespace node, postponed output
            currentBlock.prependWhitespace = true;
          } else {
            var text = node.text;

            if (currentBlock.prependWhitespace) {
              text = " ".concat(text);
              currentBlock.prependWhitespace = false;
            }

            currentBlock.push(text);
          }
        }
      }

      dfs(this);
      return blocks.map(function (block) {
        // Normalize each line's whitespace
        return block.join('').trim().replace(/\s{2,}/g, ' ');
      }).join('\n').replace(/\s+$/, ''); // trimRight;
    }
  }, {
    key: "innerHTML",
    get: function get() {
      return this.childNodes.map(function (child) {
        return child.toString();
      }).join('');
    }
  }, {
    key: "outerHTML",
    get: function get() {
      return this.toString();
    }
  }, {
    key: "structure",
    get: function get() {
      var res = [];
      var indention = 0;

      function write(str) {
        res.push('  '.repeat(indention) + str);
      }

      function dfs(node) {
        var idStr = node.id ? "#".concat(node.id) : '';
        var classStr = node.classNames.length ? ".".concat(node.classNames.join('.')) : '';
        write(node.rawTagName + idStr + classStr);
        indention++;
        node.childNodes.forEach(function (childNode) {
          if (childNode.nodeType === _type__WEBPACK_IMPORTED_MODULE_2__.default.ELEMENT_NODE) {
            dfs(childNode);
          } else if (childNode.nodeType === _type__WEBPACK_IMPORTED_MODULE_2__.default.TEXT_NODE) {
            if (!childNode.isWhitespace) {
              write('#text');
            }
          }
        });
        indention--;
      }

      dfs(this);
      return res.join('\n');
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0];
    }
    /**
     * Get last child node
     * @return {Node} last child node
     */

  }, {
    key: "lastChild",
    get: function get() {
      return (0,_back__WEBPACK_IMPORTED_MODULE_5__.default)(this.childNodes);
    }
    /**
     * Get attributes
     * @return {Object} parsed and unescaped attributes
     */

  }, {
    key: "attributes",
    get: function get() {
      if (this._attrs) {
        return this._attrs;
      }

      this._attrs = {};
      var attrs = this.rawAttributes;

      for (var key in attrs) {
        var val = attrs[key] || '';
        this._attrs[key] = (0,he__WEBPACK_IMPORTED_MODULE_0__.decode)(val);
      }

      return this._attrs;
    }
    /**
     * Get escaped (as-it) attributes
     * @return {Object} parsed attributes
     */

  }, {
    key: "rawAttributes",
    get: function get() {
      if (this._rawAttrs) {
        return this._rawAttrs;
      }

      var attrs = {};

      if (this.rawAttrs) {
        var re = /\b([a-z][a-z0-9-_]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+)))?/ig;
        var match;

        while (match = re.exec(this.rawAttrs)) {
          attrs[match[1]] = match[2] || match[3] || match[4] || null;
        }
      }

      this._rawAttrs = attrs;
      return attrs;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      if (this.parentNode) {
        var children = this.parentNode.childNodes;
        var i = 0;

        while (i < children.length) {
          var child = children[i++];

          if (this === child) {
            return children[i] || null;
          }
        }

        return null;
      }
    }
  }, {
    key: "nextElementSibling",
    get: function get() {
      if (this.parentNode) {
        var children = this.parentNode.childNodes;
        var i = 0;
        var find = false;

        while (i < children.length) {
          var child = children[i++];

          if (find) {
            if (child instanceof HTMLElement) {
              return child || null;
            }
          } else if (this === child) {
            find = true;
          }
        }

        return null;
      }
    }
  }]);

  return HTMLElement;
}(_node__WEBPACK_IMPORTED_MODULE_1__.default); // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name



var kMarkupPattern = /<!--[^]*?(?=-->)-->|<(\/?)([a-z][-.:0-9_a-z]*)\s*([^>]*?)(\/?)>/ig; // <(?<tag>[^\s]*)(.*)>(.*)</\k<tag>>
// <([a-z][-.:0-9_a-z]*)\s*\/>
// <(area|base|br|col|hr|img|input|link|meta|source)\s*(.*)\/?>
// <(area|base|br|col|hr|img|input|link|meta|source)\s*(.*)\/?>|<(?<tag>[^\s]*)(.*)>(.*)</\k<tag>>

var kAttributePattern = /(^|\s)(id|class)\s*=\s*("([^"]+)"|'([^']+)'|(\S+))/ig;
var kSelfClosingElements = {
  area: true,
  AREA: true,
  base: true,
  BASE: true,
  br: true,
  BR: true,
  col: true,
  COL: true,
  hr: true,
  HR: true,
  img: true,
  IMG: true,
  input: true,
  INPUT: true,
  link: true,
  LINK: true,
  meta: true,
  META: true,
  source: true,
  SOURCE: true,
  embed: true,
  EMBED: true,
  param: true,
  PARAM: true,
  track: true,
  TRACK: true,
  wbr: true,
  WBR: true
};
var kElementsClosedByOpening = {
  li: {
    li: true,
    LI: true
  },
  LI: {
    li: true,
    LI: true
  },
  p: {
    p: true,
    div: true,
    P: true,
    DIV: true
  },
  P: {
    p: true,
    div: true,
    P: true,
    DIV: true
  },
  b: {
    div: true,
    DIV: true
  },
  B: {
    div: true,
    DIV: true
  },
  td: {
    td: true,
    th: true,
    TD: true,
    TH: true
  },
  TD: {
    td: true,
    th: true,
    TD: true,
    TH: true
  },
  th: {
    td: true,
    th: true,
    TD: true,
    TH: true
  },
  TH: {
    td: true,
    th: true,
    TD: true,
    TH: true
  },
  h1: {
    h1: true,
    H1: true
  },
  H1: {
    h1: true,
    H1: true
  },
  h2: {
    h2: true,
    H2: true
  },
  H2: {
    h2: true,
    H2: true
  },
  h3: {
    h3: true,
    H3: true
  },
  H3: {
    h3: true,
    H3: true
  },
  h4: {
    h4: true,
    H4: true
  },
  H4: {
    h4: true,
    H4: true
  },
  h5: {
    h5: true,
    H5: true
  },
  H5: {
    h5: true,
    H5: true
  },
  h6: {
    h6: true,
    H6: true
  },
  H6: {
    h6: true,
    H6: true
  }
};
var kElementsClosedByClosing = {
  li: {
    ul: true,
    ol: true,
    UL: true,
    OL: true
  },
  LI: {
    ul: true,
    ol: true,
    UL: true,
    OL: true
  },
  a: {
    div: true,
    DIV: true
  },
  A: {
    div: true,
    DIV: true
  },
  b: {
    div: true,
    DIV: true
  },
  B: {
    div: true,
    DIV: true
  },
  i: {
    div: true,
    DIV: true
  },
  I: {
    div: true,
    DIV: true
  },
  p: {
    div: true,
    DIV: true
  },
  P: {
    div: true,
    DIV: true
  },
  td: {
    tr: true,
    table: true,
    TR: true,
    TABLE: true
  },
  TD: {
    tr: true,
    table: true,
    TR: true,
    TABLE: true
  },
  th: {
    tr: true,
    table: true,
    TR: true,
    TABLE: true
  },
  TH: {
    tr: true,
    table: true,
    TR: true,
    TABLE: true
  }
};
var frameflag = 'documentfragmentcontainer';
/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 * @param  {string} data      html
 * @return {HTMLElement}      root element
 */

function base_parse(data) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    lowerCaseTagName: false,
    comment: false
  };
  var elements = options.blockTextElements || {
    script: true,
    noscript: true,
    style: true,
    pre: true
  };
  var element_names = Object.keys(elements);
  var kBlockTextElements = element_names.map(function (it) {
    return new RegExp(it, 'i');
  });
  var kIgnoreElements = element_names.filter(function (it) {
    return elements[it];
  }).map(function (it) {
    return new RegExp(it, 'i');
  });

  function element_should_be_ignore(tag) {
    return kIgnoreElements.some(function (it) {
      return it.test(tag);
    });
  }

  function is_block_text_element(tag) {
    return kBlockTextElements.some(function (it) {
      return it.test(tag);
    });
  }

  var root = new HTMLElement(null, {});
  var currentParent = root;
  var stack = [root];
  var lastTextPos = -1;
  var match; // https://github.com/taoqf/node-html-parser/issues/38

  data = "<".concat(frameflag, ">").concat(data, "</").concat(frameflag, ">");

  while (match = kMarkupPattern.exec(data)) {
    if (lastTextPos > -1) {
      if (lastTextPos + match[0].length < kMarkupPattern.lastIndex) {
        // if has content
        var text = data.substring(lastTextPos, kMarkupPattern.lastIndex - match[0].length);
        currentParent.appendChild(new _text__WEBPACK_IMPORTED_MODULE_3__.default(text));
      }
    }

    lastTextPos = kMarkupPattern.lastIndex;

    if (match[2] === frameflag) {
      continue;
    }

    if (match[0][1] === '!') {
      // this is a comment
      if (options.comment) {
        // Only keep what is in between <!-- and -->
        var _text = data.substring(lastTextPos - 3, lastTextPos - match[0].length + 4);

        currentParent.appendChild(new _comment__WEBPACK_IMPORTED_MODULE_6__.default(_text));
      }

      continue;
    }

    if (options.lowerCaseTagName) {
      match[2] = match[2].toLowerCase();
    }

    if (!match[1]) {
      // not </ tags
      var attrs = {};

      for (var attMatch; attMatch = kAttributePattern.exec(match[3]);) {
        attrs[attMatch[2].toLowerCase()] = attMatch[4] || attMatch[5] || attMatch[6];
      }

      var tagName = currentParent.rawTagName;

      if (!match[4] && kElementsClosedByOpening[tagName]) {
        if (kElementsClosedByOpening[tagName][match[2]]) {
          stack.pop();
          currentParent = (0,_back__WEBPACK_IMPORTED_MODULE_5__.default)(stack);
        }
      } // ignore container tag we add above
      // https://github.com/taoqf/node-html-parser/issues/38


      currentParent = currentParent.appendChild(new HTMLElement(match[2], attrs, match[3]));
      stack.push(currentParent);

      if (is_block_text_element(match[2])) {
        (function () {
          // a little test to find next </script> or </style> ...
          var closeMarkup = "</".concat(match[2], ">");

          var index = function () {
            if (options.lowerCaseTagName) {
              return data.toLocaleLowerCase().indexOf(closeMarkup, kMarkupPattern.lastIndex);
            }

            return data.indexOf(closeMarkup, kMarkupPattern.lastIndex);
          }();

          if (element_should_be_ignore(match[2])) {
            var _text2;

            if (index === -1) {
              // there is no matching ending for the text element.
              _text2 = data.substr(kMarkupPattern.lastIndex);
            } else {
              _text2 = data.substring(kMarkupPattern.lastIndex, index);
            }

            if (_text2.length > 0) {
              currentParent.appendChild(new _text__WEBPACK_IMPORTED_MODULE_3__.default(_text2));
            }
          }

          if (index === -1) {
            lastTextPos = kMarkupPattern.lastIndex = data.length + 1;
          } else {
            lastTextPos = kMarkupPattern.lastIndex = index + closeMarkup.length;
            match[1] = 'true';
          }
        })();
      }
    }

    if (match[1] || match[4] || kSelfClosingElements[match[2]]) {
      // </ or /> or <br> etc.
      while (true) {
        if (currentParent.rawTagName === match[2]) {
          stack.pop();
          currentParent = (0,_back__WEBPACK_IMPORTED_MODULE_5__.default)(stack);
          break;
        } else {
          var _tagName = currentParent.tagName; // Trying to close current tag, and move on

          if (kElementsClosedByClosing[_tagName]) {
            if (kElementsClosedByClosing[_tagName][match[2]]) {
              stack.pop();
              currentParent = (0,_back__WEBPACK_IMPORTED_MODULE_5__.default)(stack);
              continue;
            }
          } // Use aggressive strategy to handle unmatching markups.


          break;
        }
      }
    }
  }

  return stack;
}

/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/nodes/node.js":
/*!**************************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/nodes/node.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Node
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Node Class as base class for TextNode and HTMLElement.
 */
var Node = /*#__PURE__*/function () {
  function Node() {
    _classCallCheck(this, Node);

    this.childNodes = [];
  }

  _createClass(Node, [{
    key: "innerText",
    get: function get() {
      return this.rawText;
    }
  }]);

  return Node;
}();



/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/nodes/text.js":
/*!**************************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/nodes/text.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TextNode
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/node-html-parser/dist/esm/nodes/type.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./node_modules/node-html-parser/dist/esm/nodes/node.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * TextNode to contain a text element in DOM tree.
 * @param {string} value [description]
 */

var TextNode = /*#__PURE__*/function (_Node) {
  _inherits(TextNode, _Node);

  var _super = _createSuper(TextNode);

  function TextNode(rawText) {
    var _this;

    _classCallCheck(this, TextNode);

    _this = _super.call(this);
    _this.rawText = rawText;
    /**
     * Node Type declaration.
     * @type {Number}
     */

    _this.nodeType = _type__WEBPACK_IMPORTED_MODULE_0__.default.TEXT_NODE;
    return _this;
  }
  /**
   * Get unescaped text value of current node and its children.
   * @return {string} text content
   */


  _createClass(TextNode, [{
    key: "toString",
    value: function toString() {
      return this.text;
    }
  }, {
    key: "text",
    get: function get() {
      return this.rawText;
    }
    /**
     * Detect if the node contains only white space.
     * @return {bool}
     */

  }, {
    key: "isWhitespace",
    get: function get() {
      return /^(\s|&nbsp;)*$/.test(this.rawText);
    }
  }]);

  return TextNode;
}(_node__WEBPACK_IMPORTED_MODULE_1__.default);



/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/nodes/type.js":
/*!**************************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/nodes/type.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var NodeType;

(function (NodeType) {
  NodeType[NodeType["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
  NodeType[NodeType["TEXT_NODE"] = 3] = "TEXT_NODE";
  NodeType[NodeType["COMMENT_NODE"] = 8] = "COMMENT_NODE";
})(NodeType || (NodeType = {}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeType);

/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/parse.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/parse.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ parse
/* harmony export */ });
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back */ "./node_modules/node-html-parser/dist/esm/back.js");
/* harmony import */ var _nodes_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes/html */ "./node_modules/node-html-parser/dist/esm/nodes/html.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 */

function parse(data) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    lowerCaseTagName: false,
    comment: false
  };
  var stack = (0,_nodes_html__WEBPACK_IMPORTED_MODULE_1__.base_parse)(data, options);

  var _stack = _slicedToArray(stack, 1),
      root = _stack[0];

  var _loop = function _loop() {
    // Handle each error elements.
    var last = stack.pop();
    var oneBefore = (0,_back__WEBPACK_IMPORTED_MODULE_0__.default)(stack);

    if (last.parentNode && last.parentNode.parentNode) {
      if (last.parentNode === oneBefore && last.tagName === oneBefore.tagName) {
        // Pair error case <h3> <h3> handle : Fixes to <h3> </h3>
        oneBefore.removeChild(last);
        last.childNodes.forEach(function (child) {
          oneBefore.parentNode.appendChild(child);
        });
        stack.pop();
      } else {
        // Single error  <div> <h3> </div> handle: Just removes <h3>
        oneBefore.removeChild(last);
        last.childNodes.forEach(function (child) {
          oneBefore.appendChild(child);
        });
      }
    } else {// If it's final element just skip.
    }
  };

  while (stack.length > 1) {
    _loop();
  } // response.childNodes.forEach((node) => {
  // 	if (node instanceof HTMLElement) {
  // 		node.parentNode = null;
  // 	}
  // });


  return root;
}

/***/ }),

/***/ "./node_modules/node-html-parser/dist/esm/valid.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-html-parser/dist/esm/valid.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ valid
/* harmony export */ });
/* harmony import */ var _nodes_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes/html */ "./node_modules/node-html-parser/dist/esm/nodes/html.js");

/**
 * Parses HTML and returns a root element
 * Parse a chuck of HTML source.
 */

function valid(data) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    lowerCaseTagName: false,
    comment: false
  };
  var stack = (0,_nodes_html__WEBPACK_IMPORTED_MODULE_0__.base_parse)(data, options);
  return Boolean(stack.length === 1);
}

/***/ }),

/***/ "./src/combat.ts":
/*!***********************!*\
  !*** ./src/combat.ts ***!
  \***********************/
/*! namespace exports */
/*! export MODE_FIND_MONSTER_THEN [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export MODE_MACRO [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export MODE_NULL [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export MODE_RUN_UNLESS_FREE [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export Macro [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export adventureCopy [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export adventureMacro [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export adventureMode [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export adventureRunUnlessFree [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export findMonsterSaberYr [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export getArg1 [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export getArg2 [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export getMode [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export main [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export saberYr [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export setMode [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in bcas_combat (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Macro": () => /* binding */ Macro,
/* harmony export */   "MODE_NULL": () => /* binding */ MODE_NULL,
/* harmony export */   "MODE_MACRO": () => /* binding */ MODE_MACRO,
/* harmony export */   "MODE_FIND_MONSTER_THEN": () => /* binding */ MODE_FIND_MONSTER_THEN,
/* harmony export */   "MODE_RUN_UNLESS_FREE": () => /* binding */ MODE_RUN_UNLESS_FREE,
/* harmony export */   "setMode": () => /* binding */ setMode,
/* harmony export */   "getMode": () => /* binding */ getMode,
/* harmony export */   "getArg1": () => /* binding */ getArg1,
/* harmony export */   "getArg2": () => /* binding */ getArg2,
/* harmony export */   "main": () => /* binding */ main,
/* harmony export */   "saberYr": () => /* binding */ saberYr,
/* harmony export */   "adventureMode": () => /* binding */ adventureMode,
/* harmony export */   "adventureMacro": () => /* binding */ adventureMacro,
/* harmony export */   "findMonsterSaberYr": () => /* binding */ findMonsterSaberYr,
/* harmony export */   "adventureCopy": () => /* binding */ adventureCopy,
/* harmony export */   "adventureRunUnlessFree": () => /* binding */ adventureRunUnlessFree
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libram/src */ "./node_modules/libram/src/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib */ "./src/lib.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["Lecture on Relativity"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["Use the Force"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["Reflex Hammer"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["Reflex Hammer"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["Ode to Booze"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["Frumious Bandersnatch"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["CHEAT CODE: Replace Enemy"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["CHEAT CODE: Replace Enemy"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["Macrometeorite"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["Macrometeorite"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["Reflex Hammer"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["Reflex Hammer"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["Saucestorm"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["Saucegeyser"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["Saucestorm"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["Stuffed Mortar Shell"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



 // multiFight() stolen from Aenimus: https://github.com/Aenimus/aen_cocoabo_farm/blob/master/scripts/aen_combat.ash.
// Thanks! Licensed under MIT license.

function multiFight() {
  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.choiceFollowsFight)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('choice.php');
}

var Macro = /*#__PURE__*/function (_LibramMacro) {
  _inherits(Macro, _LibramMacro);

  var _super = _createSuper(Macro);

  function Macro() {
    _classCallCheck(this, Macro);

    return _super.apply(this, arguments);
  }

  _createClass(Macro, [{
    key: "submit",
    value: function submit() {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Submitting macro: ".concat(this.toString()));
      return _get(_getPrototypeOf(Macro.prototype), "submit", this).call(this);
    }
  }, {
    key: "kill",
    value: function kill() {
      return this.skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject())).skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject2())).skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject3())).repeat().skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject4())).repeat();
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return this.step('runaway');
    }
  }], [{
    key: "kill",
    value: function kill() {
      return new Macro().kill();
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new Macro().runaway();
    }
  }]);

  return Macro;
}(libram_src__WEBPACK_IMPORTED_MODULE_1__.Macro);
var MODE_NULL = '';
var MODE_MACRO = 'macro';
var MODE_FIND_MONSTER_THEN = 'findthen';
var MODE_RUN_UNLESS_FREE = 'rununlessfree';
function setMode(mode) {
  var arg1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var arg2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_combatMode', mode);
  if (arg1 !== null) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_combatArg1', arg1);
  if (arg2 !== null) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_combatArg2', arg2);
}
function getMode() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_combatMode');
}
function getArg1() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_combatArg1');
}
function getArg2() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_combatArg2');
}

function banishedMonsters() {
  var banishedstring = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('banishedMonsters');
  var banishedComponents = banishedstring.split(':');
  var result = {};
  if (banishedComponents.length < 3) return result;

  for (var idx = 0; idx < banishedComponents.length / 3 - 1; idx++) {
    var foe = Monster.get(banishedComponents[idx * 3]);
    var banisher = banishedComponents[idx * 3 + 1];
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Banished ".concat(foe.name, " using ").concat(banisher));
    result[banisher] = foe;
  }

  return result;
}

function usedBanisherInZone(banished, banisher, loc) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Checking to see if we've used ".concat(banisher, " in ").concat(loc, "."));
  if (banished[banisher] === undefined) return false;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Used it to banish ".concat(banished[banisher].name));
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getLocationMonsters)(loc)[banished[banisher].name] === undefined;
}

function main(initialRound, foe) {
  var mode = getMode();
  var loc = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLocation)();

  if (mode === MODE_MACRO) {
    Macro.load().submit();
  } else if (mode === MODE_FIND_MONSTER_THEN) {
    var monsterId = parseInt(getArg1(), 10);
    var desired = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toMonster)(monsterId);
    var banished = banishedMonsters();

    if (foe === desired) {
      Macro.load().submit();
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= 50 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject5())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_snokebombUsed') < 3 && !usedBanisherInZone(banished, 'snokebomb', loc)) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject6()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject7())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('ReflexHammerUsed') < 3 && !usedBanisherInZone(banished, 'Reflex Hammer', loc)) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject8()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject9())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_macrometeoriteUses') < 10) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject10()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject11())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_powerfulGloveBatteryPowerUsed') <= 80) {
      var originalBattery = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_powerfulGloveBatteryPowerUsed');
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject12()));
      var newBattery = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_powerfulGloveBatteryPowerUsed');

      if (newBattery === originalBattery) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)('WARNING: Mafia is not updating PG battery charge.');
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('_powerfulGloveBatteryPowerUsed', '' + (newBattery + 10));
      } // At this point it comes back to the consult script.

    }
  } else if (mode === MODE_RUN_UNLESS_FREE) {
    if (foe.attributes.includes('FREE')) {
      Macro.load().submit();
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject13()) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject14())) > 0 && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_banderRunaways') < (0,_lib__WEBPACK_IMPORTED_MODULE_2__.myFamiliarWeight)() / 5) {
      var banderRunaways = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_banderRunaways');
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runaway)();

      if ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_banderRunaways') === banderRunaways) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)('WARNING: Mafia is not tracking bander runaways correctly.');
        (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setPropertyInt)('_banderRunaways', banderRunaways + 1);
      }
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject15())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_reflexHammerUsed') < 3) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject16()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= 50 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject17())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_snokebombUsed') < 3) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject18()));
    } else {
      // non-free, whatever
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runaway)();
    }
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Unrecognized mode.');
  }
}
function saberYr() {
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('No choice?');

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.lastChoice)() === 1387 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.count)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableChoiceOptions)()) > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(3);
  }
}
function adventureMode(loc, mode) {
  var arg1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var arg2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  setMode(mode, arg1, arg2);

  try {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, -1, '');
    multiFight();
  } finally {
    setMode(MODE_NULL, '', '');
  }
}
function adventureMacro(loc, macro) {
  macro.save();

  try {
    adventureMode(loc, MODE_MACRO);
  } finally {
    Macro.clearSaved();
  }
}

function findMonsterThen(loc, foe, macro) {
  macro.save();
  setMode(MODE_FIND_MONSTER_THEN, foe.id.toString());

  try {
    (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.set)('bcas_combatFound', false);

    while (!(0,libram_src__WEBPACK_IMPORTED_MODULE_1__.get)('bcas_combatFound')) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, -1, '');
    }
  } finally {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.removeProperty)('bcas_combatFound');
    setMode(MODE_NULL, '');
    Macro.clearSaved();
  }
}

function findMonsterSaberYr(loc, foe) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('choiceAdventure1387', '3');
  findMonsterThen(loc, foe, Macro.skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject19())));
}
function adventureCopy(loc, foe) {
  adventureMacro(loc, Macro.if_("!monstername ".concat(foe.name), 'abort').trySkill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject20())).kill());
}
function adventureRunUnlessFree(loc) {
  setMode(MODE_RUN_UNLESS_FREE);
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, -1, '');
  setMode(MODE_NULL);
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! export main [provided] [maybe used in bcas (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in bcas (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => /* binding */ main
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro */ "./src/intro.ts");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level */ "./src/level.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib */ "./src/lib.ts");
/* harmony import */ var _quests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quests */ "./src/quests.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






function main() {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_objective', '');
  var dietScript = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_diet');

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMeat)() > 5000000) {
    if ((0,_lib__WEBPACK_IMPORTED_MODULE_3__.getPropertyBoolean)('bcas_autoClosetMeat', false)) {
      var closetAmount = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMeat)() - 5 * 1000 * 1000;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You have more than 5M liquid meat! Putting ".concat(closetAmount, " in the closet automatically."), 'blue');
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("closet put ".concat(closetAmount, " meat"));
    } else {
      throw 'You have more than 5M liquid meat! ' + 'Put it in the closet to avoid autoscend danger, or set bcas_autoClosetMeat to true and rerun.';
    }
  }

  (0,_intro__WEBPACK_IMPORTED_MODULE_1__.intro)();
  (0,_level__WEBPACK_IMPORTED_MODULE_2__.level)();
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)('Refreshing council quests...');
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('council.php');
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)() < 13) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Something went wrong in leveling!');

  if (parseInt((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_lastStockedUp') || '0', 10) < (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myAscensions)()) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)('Stocking up!');

    var _iterator = _createForOfIteratorHelper((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.fileToBuffer)('data/bean-casual/pulls.txt').split('\n')),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var line = _step.value;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("acquire ".concat(line));
        if (line.length === 0) continue;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("acquire ".concat(line));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_lastStockedUp', "".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myAscensions)()));
  }

  (0,_quests__WEBPACK_IMPORTED_MODULE_4__.airship)();
  (0,_quests__WEBPACK_IMPORTED_MODULE_4__.billiards)();

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myInebriety)() <= 5 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFullness)() <= 0) {
    if (dietScript === '') {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Set property "bcas_diet" with your diet script, or consume your diet and rerun.');
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)(dietScript);
  }

  (0,_quests__WEBPACK_IMPORTED_MODULE_4__.war)();
  (0,_quests__WEBPACK_IMPORTED_MODULE_4__.dailyDungeon)();
  (0,_quests__WEBPACK_IMPORTED_MODULE_4__.ores)();
  (0,_quests__WEBPACK_IMPORTED_MODULE_4__.bridge)();
  (0,_quests__WEBPACK_IMPORTED_MODULE_4__.aboo)();
  (0,_quests__WEBPACK_IMPORTED_MODULE_4__.blackForest)();
  (0,_quests__WEBPACK_IMPORTED_MODULE_4__.shen)();
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('auto_abooclover', 'true');
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('auto_interrupt', 'false');
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)('autoscend');
}

/***/ }),

/***/ "./src/intro.ts":
/*!**********************!*\
  !*** ./src/intro.ts ***!
  \**********************/
/*! namespace exports */
/*! export intro [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "intro": () => /* binding */ intro
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libram/src */ "./node_modules/libram/src/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib */ "./src/lib.ts");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["ten-leaf clover"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["ten-leaf clover"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["antique accordion"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["astral six-pack"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["pork elf goodies sack"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["letter from King Ralph XI"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function intro() {
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setClan)('Bonus Adventures from Hell'); // Chateau juice bar

  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('place.php?whichplace=chateau&action=chateauDesk2'); // Sell pork gems

  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('tutorial.php?action=toot');
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryUse)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryUse)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject2()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryUse)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject3())); // Buy antique accordion

  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getCapped)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject4()), 2500); // Initialize council.

  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('council.php'); // All combat handled by our consult script (bcasCombat.ash).

  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)('ccs bean-casual'); // Mood handled in ASH.

  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)('mood apathetic'); // Upgrade saber for fam wt

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject5())) > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('main.php?action=may4');
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(4);
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('boomBoxSong') !== 'Food Vibrations') {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)('boombox food');
  }

  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('cloverProtectActive', 'true');
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject6())), (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject7()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('hpAutoRecovery', '0.8');
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('hpAutoRecovery', '0.3');
}

/***/ }),

/***/ "./src/level.ts":
/*!**********************!*\
  !*** ./src/level.ts ***!
  \**********************/
/*! namespace exports */
/*! export level [provided] [maybe used in bcas_level (runtime-defined)] [usage prevents renaming] */
/*! export main [provided] [maybe used in bcas_level (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in bcas_level (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "level": () => /* binding */ level,
/* harmony export */   "main": () => /* binding */ main
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libram/src */ "./node_modules/libram/src/index.js");
/* harmony import */ var _combat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combat */ "./src/combat.ts");
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro */ "./src/intro.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib */ "./src/lib.ts");
function _templateObject93() {
  var data = _taggedTemplateLiteral(["The Neverending Party"]);

  _templateObject93 = function _templateObject93() {
    return data;
  };

  return data;
}

function _templateObject92() {
  var data = _taggedTemplateLiteral(["Hovering Sombrero"]);

  _templateObject92 = function _templateObject92() {
    return data;
  };

  return data;
}

function _templateObject91() {
  var data = _taggedTemplateLiteral(["sausage goblin"]);

  _templateObject91 = function _templateObject91() {
    return data;
  };

  return data;
}

function _templateObject90() {
  var data = _taggedTemplateLiteral(["\"The Outskirts of Cobb's Knob\""]);

  _templateObject90 = function _templateObject90() {
    return data;
  };

  return data;
}

function _templateObject89() {
  var data = _taggedTemplateLiteral(["Oiled Up"]);

  _templateObject89 = function _templateObject89() {
    return data;
  };

  return data;
}

function _templateObject88() {
  var data = _taggedTemplateLiteral(["Oiled, Slick"]);

  _templateObject88 = function _templateObject88() {
    return data;
  };

  return data;
}

function _templateObject87() {
  var data = _taggedTemplateLiteral(["Do I Know You From Somewhere?"]);

  _templateObject87 = function _templateObject87() {
    return data;
  };

  return data;
}

function _templateObject86() {
  var data = _taggedTemplateLiteral(["Billiards Belligerence"]);

  _templateObject86 = function _templateObject86() {
    return data;
  };

  return data;
}

function _templateObject85() {
  var data = _taggedTemplateLiteral(["Chorale of Companionship"]);

  _templateObject85 = function _templateObject85() {
    return data;
  };

  return data;
}

function _templateObject84() {
  var data = _taggedTemplateLiteral(["Pocket Professor"]);

  _templateObject84 = function _templateObject84() {
    return data;
  };

  return data;
}

function _templateObject83() {
  var data = _taggedTemplateLiteral(["Kramco Sausage-o-Matic&trade;"]);

  _templateObject83 = function _templateObject83() {
    return data;
  };

  return data;
}

function _templateObject82() {
  var data = _taggedTemplateLiteral(["Pocket Professor"]);

  _templateObject82 = function _templateObject82() {
    return data;
  };

  return data;
}

function _templateObject81() {
  var data = _taggedTemplateLiteral(["Giant Growth"]);

  _templateObject81 = function _templateObject81() {
    return data;
  };

  return data;
}

function _templateObject80() {
  var data = _taggedTemplateLiteral(["green mana"]);

  _templateObject80 = function _templateObject80() {
    return data;
  };

  return data;
}

function _templateObject79() {
  var data = _taggedTemplateLiteral(["Giant Growth"]);

  _templateObject79 = function _templateObject79() {
    return data;
  };

  return data;
}

function _templateObject78() {
  var data = _taggedTemplateLiteral(["green mana"]);

  _templateObject78 = function _templateObject78() {
    return data;
  };

  return data;
}

function _templateObject77() {
  var data = _taggedTemplateLiteral(["Giant Growth"]);

  _templateObject77 = function _templateObject77() {
    return data;
  };

  return data;
}

function _templateObject76() {
  var data = _taggedTemplateLiteral(["God Lobster"]);

  _templateObject76 = function _templateObject76() {
    return data;
  };

  return data;
}

function _templateObject75() {
  var data = _taggedTemplateLiteral(["God Lobster"]);

  _templateObject75 = function _templateObject75() {
    return data;
  };

  return data;
}

function _templateObject74() {
  var data = _taggedTemplateLiteral(["The Tunnel of L.O.V.E."]);

  _templateObject74 = function _templateObject74() {
    return data;
  };

  return data;
}

function _templateObject73() {
  var data = _taggedTemplateLiteral(["Moxie"]);

  _templateObject73 = function _templateObject73() {
    return data;
  };

  return data;
}

function _templateObject72() {
  var data = _taggedTemplateLiteral(["Mysticality"]);

  _templateObject72 = function _templateObject72() {
    return data;
  };

  return data;
}

function _templateObject71() {
  var data = _taggedTemplateLiteral(["Muscle"]);

  _templateObject71 = function _templateObject71() {
    return data;
  };

  return data;
}

function _templateObject70() {
  var data = _taggedTemplateLiteral(["Saucegeyser"]);

  _templateObject70 = function _templateObject70() {
    return data;
  };

  return data;
}

function _templateObject69() {
  var data = _taggedTemplateLiteral(["Hovering Sombrero"]);

  _templateObject69 = function _templateObject69() {
    return data;
  };

  return data;
}

function _templateObject68() {
  var data = _taggedTemplateLiteral(["bowl of potpourri"]);

  _templateObject68 = function _templateObject68() {
    return data;
  };

  return data;
}

function _templateObject67() {
  var data = _taggedTemplateLiteral(["Moxie"]);

  _templateObject67 = function _templateObject67() {
    return data;
  };

  return data;
}

function _templateObject66() {
  var data = _taggedTemplateLiteral(["foreign language tapes"]);

  _templateObject66 = function _templateObject66() {
    return data;
  };

  return data;
}

function _templateObject65() {
  var data = _taggedTemplateLiteral(["Mysticality"]);

  _templateObject65 = function _templateObject65() {
    return data;
  };

  return data;
}

function _templateObject64() {
  var data = _taggedTemplateLiteral(["electric muscle stimulator"]);

  _templateObject64 = function _templateObject64() {
    return data;
  };

  return data;
}

function _templateObject63() {
  var data = _taggedTemplateLiteral(["Muscle"]);

  _templateObject63 = function _templateObject63() {
    return data;
  };

  return data;
}

function _templateObject62() {
  var data = _taggedTemplateLiteral(["ceiling fan"]);

  _templateObject62 = function _templateObject62() {
    return data;
  };

  return data;
}

function _templateObject61() {
  var data = _taggedTemplateLiteral(["Mysticality"]);

  _templateObject61 = function _templateObject61() {
    return data;
  };

  return data;
}

function _templateObject60() {
  var data = _taggedTemplateLiteral(["Bastille Battalion control rig loaner voucher"]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteral(["Bastille Battalion control rig"]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteral(["Synthesis: Style"]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteral(["Perception"]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteral(["So Fresh and So Clean"]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteral(["Moxie"]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteral(["Synthesis: Learning"]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteral(["Category"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["Thaumodynamic"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["Mysticality"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["Synthesis: Movement"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["Purpose"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["Muscle Unbound"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["Muscle"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["magical sausage casing"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["Astral Shell"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["Elemental Saucesphere"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["Carol of the Thrills"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["Leash of Linguini"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["Empathy of the Newt"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["Blood Bond"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\"Singer's Faithful Ocelot\""]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["The Polka of Plenty"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["Pisces in the Skyces"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["Carol of the Hells"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\"Drescher's Annoying Noise\""]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["Pride of the Puffin"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\"Ur-Kel's Aria of Annoyance\""]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["Cock of the Walk"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["Superhuman Sarcasm"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["Butt-Rock Hair"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["Pomp & Circumsands"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["Moxie"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["On The Shoulders Of Giants"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["Mystically Oiled"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["Glittering Eyelashes"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["Inscrutable Gaze"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\"We're All Made of Starfish\""]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["Mysticality"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["Incredibly Hulking"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["Phorcefullness"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\"Go Get 'Em, Tiger!\""]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["Lack of Body-Building"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["Muscle"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["You Learned Something Maybe!"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["CHEAT CODE: Triple Size"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["Starry-Eyed"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["Favored by Lyle"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["Gr8ness"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["Trivia Master"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["Tomato Power"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["Having a Ball!"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["Get Big"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["Song of Bravado"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







function levelMood() {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < 200) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject()));
  } // Stats.


  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject2()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject3()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject4()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject5()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject6()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject7()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject8()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject9()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject10()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject11()));
  if (((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.get)('daycareOpen') || (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.get)('_daycareToday')) && !(0,libram_src__WEBPACK_IMPORTED_MODULE_1__.get)('_daycareSpa')) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("daycare ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)()));

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < 200) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject12()));
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject13())) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject14()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject15()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject16()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject17()));
  } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject18())) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject19()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject20()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject21()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject22()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject23()));
  } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject24())) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject25()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject26()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject27()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject28()));
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < 200) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject29()));
  } // ML.


  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSong)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject30()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject31()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject32())); // Combat.

  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject33()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject34())); // Misc.

  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSong)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject35()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSong)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject36()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject37()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject38()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject39()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject40()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject41()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject42()));
}

function level() {
  var useResources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)() >= 13) return; // Put on some basic gear.

  (0,_lib__WEBPACK_IMPORTED_MODULE_4__.maximizeCached)('mp');

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() < 200 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject43())) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject44())) > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject45()));
  } // Start buffing. XP buffs first.


  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject46())) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject47()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject48()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.trySynthesize)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject49()));
  } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject50())) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject51()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject52()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.trySynthesize)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject53()));
  } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject54())) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject55()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.ensureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject56()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.trySynthesize)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject57()));
  } // Campsite


  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject58())) === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('place.php?whichplace=campaway&action=campaway_sky');
  } // Daycare


  if ((0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyInt)('_daycareGymScavenges') === 0) {
    // Free scavenge.
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('choice.php?whichchoice=1336&option=2');
  } // Bastille first.


  if ((0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyInt)('_bastilleGames') === 0) {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject59())) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject60()));
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("bastille ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject61()) ? 'myst' : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)()));
  } // Chateau rests.


  if ((0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyBoolean)('chateauAvailable')) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject62()));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject63())) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject64()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject65())) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject66()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject67())) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject68()));
    } // Chateau rest


    while ((0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyInt)('timesRested') < (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.totalFreeRests)()) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('place.php?whichplace=chateau&action=chateau_restbox');
    }
  }

  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)('breakfast'); // LOV Tunnel

  if ((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.get)('loveTunnelAvailable') && !(0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyBoolean)('_loveTunnelUsed') && useResources) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject69()));
    var macro = _combat__WEBPACK_IMPORTED_MODULE_2__.Macro.if_('monstername LOV Enforcer', _combat__WEBPACK_IMPORTED_MODULE_2__.Macro.while_('!pastround 20 && !hpbelow 200', _combat__WEBPACK_IMPORTED_MODULE_2__.Macro.attack().repeat()).kill()).if_('monstername LOV Engineer', _combat__WEBPACK_IMPORTED_MODULE_2__.Macro.skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject70())).repeat()).kill();
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1222, 1); // Entrance

    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1223, 1); // Fight LOV Enforcer

    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1225, 1); // Fight LOV Engineer

    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1226, 2); // Open Heart Surgery

    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1227, 1); // Fight LOV Equivocator

    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1228, 3); // Take chocolate

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject71())) {
      (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1224, 1); // LOV Eardigan
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject72())) {
      (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1224, 2); // LOV Epaulettes
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject73())) {
      (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1224, 3); // LOV Earrings
    }

    (0,_combat__WEBPACK_IMPORTED_MODULE_2__.adventureMacro)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$location)(_templateObject74()), macro);
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) throw 'Did not get all the way through LOV.';
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('choice.php');
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) throw 'Did not get all the way through LOV.';
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject75())) && (0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyInt)('_godLobsterFights') < 3) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject76()));
    var useGg = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject77())) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mallPrice)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject78())) < 8000;

    while ((0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyInt)('_godLobsterFights') < 3) {
      (0,_lib__WEBPACK_IMPORTED_MODULE_4__.maximizeCached)('mainstat, 4exp, equip makeshift garbage shirt'); // Get stats from the fight.

      (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1310, 3);
      levelMood();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.restoreHp)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMaxhp)());
      if (useGg && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject79())) === 0) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.retrieveItem)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject80()));
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('main.php?fightgodlobster=1');
      (0,_combat__WEBPACK_IMPORTED_MODULE_2__.setMode)(_combat__WEBPACK_IMPORTED_MODULE_2__.MODE_MACRO);
      _combat__WEBPACK_IMPORTED_MODULE_2__.Macro.externalIf(useGg && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject81())) === 0, 'skill Giant Growth').kill().save();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('choice.php');
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(3);
      (0,_combat__WEBPACK_IMPORTED_MODULE_2__.setMode)(_combat__WEBPACK_IMPORTED_MODULE_2__.MODE_NULL);
    }
  }

  if ((0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyInt)('_sausageFights') === 0 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject82())) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject83())) > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject84()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.maximizeCached)('mainstat, 4 exp, 30 mainstat experience percent, 30 familiar weight, equip makeshift garbage shirt, equip Pocket Professor memory chip, equip Kramco');
    levelMood();
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.restoreHp)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMaxhp)());
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject85()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject86()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject87()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject88())) || (0,_lib__WEBPACK_IMPORTED_MODULE_4__.tryEnsureEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject89()));
    (0,_combat__WEBPACK_IMPORTED_MODULE_2__.adventureCopy)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$location)(_templateObject90()), (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$monster)(_templateObject91()));
  }

  while ((0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyInt)('_neverendingPartyFreeTurns') < 10) {
    if (!(0,_lib__WEBPACK_IMPORTED_MODULE_4__.getPropertyBoolean)('leafletCompleted') && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)() >= 9) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('council.php');
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)('leaflet');
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject92()));
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.maximizeCached)('mainstat, 4exp, equip makeshift garbage shirt');
    (0,_lib__WEBPACK_IMPORTED_MODULE_4__.setChoice)(1324, 5);
    levelMood();
    (0,_combat__WEBPACK_IMPORTED_MODULE_2__.adventureMacro)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$location)(_templateObject93()), _combat__WEBPACK_IMPORTED_MODULE_2__.Macro.kill());
  }

  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('council.php');
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)('');
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)('Done leveling.', 'blue');
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Reached mainstat ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)())));
}
function main() {
  (0,_intro__WEBPACK_IMPORTED_MODULE_3__.intro)();
  level(false);
}

/***/ }),

/***/ "./src/lib.ts":
/*!********************!*\
  !*** ./src/lib.ts ***!
  \********************/
/*! namespace exports */
/*! export cheaper [provided] [no usage info] [missing usage info prevents renaming] */
/*! export chewSafe [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clamp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export drinkSafe [provided] [no usage info] [missing usage info prevents renaming] */
/*! export eatSafe [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ensureEffect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ensureOde [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCapped [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPropertyBoolean [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPropertyInt [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPropertyString [provided] [no usage info] [missing usage info prevents renaming] */
/*! export itemPriority [provided] [no usage info] [missing usage info prevents renaming] */
/*! export maximizeCached [provided] [no usage info] [missing usage info prevents renaming] */
/*! export myFamiliarWeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! export openSongSlot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export questStep [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setChoice [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setClan [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setPropertyInt [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shrug [provided] [no usage info] [missing usage info prevents renaming] */
/*! export totalAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tryEnsureEffect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tryEnsureSkill [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tryEnsureSong [provided] [no usage info] [missing usage info prevents renaming] */
/*! export trySynthesize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tryUse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useIfUnused [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => /* binding */ clamp,
/* harmony export */   "getPropertyString": () => /* binding */ getPropertyString,
/* harmony export */   "getPropertyInt": () => /* binding */ getPropertyInt,
/* harmony export */   "getPropertyBoolean": () => /* binding */ getPropertyBoolean,
/* harmony export */   "setPropertyInt": () => /* binding */ setPropertyInt,
/* harmony export */   "itemPriority": () => /* binding */ itemPriority,
/* harmony export */   "cheaper": () => /* binding */ cheaper,
/* harmony export */   "getCapped": () => /* binding */ getCapped,
/* harmony export */   "get": () => /* binding */ get,
/* harmony export */   "eatSafe": () => /* binding */ eatSafe,
/* harmony export */   "drinkSafe": () => /* binding */ drinkSafe,
/* harmony export */   "chewSafe": () => /* binding */ chewSafe,
/* harmony export */   "useIfUnused": () => /* binding */ useIfUnused,
/* harmony export */   "totalAmount": () => /* binding */ totalAmount,
/* harmony export */   "setChoice": () => /* binding */ setChoice,
/* harmony export */   "myFamiliarWeight": () => /* binding */ myFamiliarWeight,
/* harmony export */   "ensureEffect": () => /* binding */ ensureEffect,
/* harmony export */   "tryEnsureEffect": () => /* binding */ tryEnsureEffect,
/* harmony export */   "tryEnsureSkill": () => /* binding */ tryEnsureSkill,
/* harmony export */   "trySynthesize": () => /* binding */ trySynthesize,
/* harmony export */   "shrug": () => /* binding */ shrug,
/* harmony export */   "openSongSlot": () => /* binding */ openSongSlot,
/* harmony export */   "tryEnsureSong": () => /* binding */ tryEnsureSong,
/* harmony export */   "ensureOde": () => /* binding */ ensureOde,
/* harmony export */   "tryUse": () => /* binding */ tryUse,
/* harmony export */   "setClan": () => /* binding */ setClan,
/* harmony export */   "maximizeCached": () => /* binding */ maximizeCached,
/* harmony export */   "questStep": () => /* binding */ questStep
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libram/src */ "./node_modules/libram/src/index.js");
function _templateObject6() {
  var data = _taggedTemplateLiteral(["Muscle"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["The Ode to Booze"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["Ode to Booze"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["Ode to Booze"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["Sweet Synthesis"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["none"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}
function getPropertyString(name, def) {
  var str = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(name);
  return str === '' ? def : str;
}
function getPropertyInt(name) {
  var default_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var str = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(name);

  if (str === '') {
    if (default_ === null) throw "Unknown property ".concat(name, ".");else return default_;
  }

  return parseInt(str, 10);
}
function getPropertyBoolean(name) {
  var default_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var str = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(name);

  if (str === '') {
    if (default_ === null) throw "Unknown property ".concat(name, ".");else return default_;
  }

  return str === 'true';
}
function setPropertyInt(name, value) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)(name, value.toString());
}
function itemPriority() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  if (items.length === 1) return items[0];else return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(items[0]) > 0 ? items[0] : itemPriority.apply(void 0, _toConsumableArray(items.slice(1)));
}
function cheaper() {
  for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    items[_key2] = arguments[_key2];
  }

  if (items.length === 1) return items[0];else return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(items[0]) > 0 ? items[0] : itemPriority.apply(void 0, _toConsumableArray(items.slice(1)));
}
var priceCaps = {
  'jar of fermented pickle juice': 75000,
  "Frosty's frosty mug": 45000,
  'extra-greasy slider': 45000,
  "Ol' Scratch's salad fork": 45000,
  'transdermal smoke patch': 7000,
  'voodoo snuff': 36000,
  'blood-drive sticker': 210000,
  'spice melange': 500000,
  'splendid martini': 10000,
  'stuffing fluffer': 25000,
  'cornucopia': 30000,
  'cashew': 9000
};
function getCapped(qty, item, maxPrice) {
  if (qty > 30) throw 'bad get!';
  var remaining = Math.round(qty) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(item);
  if (remaining <= 0) return;
  var getCloset = Math.min(remaining, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.closetAmount)(item));
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.takeCloset)(getCloset, item)) throw 'failed to remove from closet';
  remaining -= getCloset;
  if (remaining <= 0) return;
  var getMall = Math.min(remaining, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(item));
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.takeShop)(getMall, item)) throw 'failed to remove from shop';
  remaining -= getMall;
  if (remaining <= 0) return;
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(remaining, item, maxPrice) < remaining) throw "Mall price too high for ".concat(item.name, ".");
}
function get(qty, item) {
  getCapped(qty, item, priceCaps[item.name]);
}
function eatSafe(qty, item) {
  get(1, item);
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(qty, item)) throw 'Failed to eat safely';
}
function drinkSafe(qty, item) {
  get(1, item);
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.drink)(qty, item)) throw 'Failed to drink safely';
}
function chewSafe(qty, item) {
  get(1, item);
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.chew)(qty, item)) throw 'Failed to chew safely';
}

function propTrue(prop) {
  if (typeof prop === 'boolean') {
    return prop;
  } else {
    return getPropertyBoolean(prop);
  }
}

function useIfUnused(item, prop, maxPrice) {
  if (!propTrue(prop)) {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mallPrice)(item) <= maxPrice) {
      getCapped(1, item, maxPrice);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, item);
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Skipping ".concat(item.name, "; too expensive (").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mallPrice)(item), " > ").concat(maxPrice, ")."));
    }
  }
}
function totalAmount(item) {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(item) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(item);
}
function setChoice(adv, choice) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)("choiceAdventure".concat(adv), "".concat(choice));
}
function myFamiliarWeight() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarWeight)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)()) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.weightAdjustment)();
}
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!tryEnsureEffect(ef, turns)) {
    throw 'Failed to get effect ' + ef.name + '.';
  }
}
function tryEnsureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) < turns) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)(ef["default"]) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) > 0;
  }

  return true;
}
function tryEnsureSkill(sk) {
  var ef = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect)(sk);

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)(sk) && ef !== (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject()) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, sk);
  }
}
function trySynthesize(ef) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject2()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(ef);
}
function shrug(ef) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)('shrug ' + ef.name);
  }
} // Mechanics for managing song slots.
// We have Stevedave's, Ur-Kel's on at all times during leveling; third and fourth slots are variable.

var songSlots = [Effect.get(["Stevedave's Shanty of Superiority", "Fat Leon's Phat Loot Lyric"]), Effect.get(["Ur-Kel's Aria of Annoyance"]), Effect.get(['Power Ballad of the Arrowsmith', 'The Magical Mojomuscular Melody', 'The Moxious Madrigal', 'Ode to Booze', "Jackasses' Symphony of Destruction"]), Effect.get(["Carlweather's Cantata of Confrontation", 'The Sonata of Sneakiness', 'Polka of Plenty'])];
function openSongSlot(song) {
  var _iterator = _createForOfIteratorHelper(songSlots),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var songSlot = _step.value;

      if (songSlot.includes(song)) {
        var _iterator2 = _createForOfIteratorHelper(songSlot),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var shruggable = _step2.value;
            shrug(shruggable);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function tryEnsureSong(sk) {
  var ef = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect)(sk);

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0) {
    openSongSlot(ef);

    if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)(ef["default"]) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0) {
      return false;
    }
  }

  return true;
}
function ensureOde() {
  var turns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject3())) < turns) {
    openSongSlot((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject4()));
    if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject5()))) throw "Couldn't get Ode for some reason.";
  }
}
function tryUse(quantity, it) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(it) > 0) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(quantity, it);
  } else {
    return false;
  }
}
var clanCache = {};
function setClan(target) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)() !== target) {
    if (clanCache[target] === undefined) {
      var recruiter = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('clan_signup.php');
      var clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
      var result;

      while ((result = clanRe.exec(recruiter)) !== null) {
        clanCache[result[2]] = parseInt(result[1], 10);
      }
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("showclan.php?whichclan=".concat(clanCache[target], "&action=joinclan&confirm=on&pwd"));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)() !== target) {
      throw "failed to switch clans to ".concat(target, ". Did you spell it correctly? Are you whitelisted?");
    }
  }

  return true;
}
function maximizeCached(objective) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$stat)(_templateObject6())) > 40) {
    objective += objective.length > 0 ? ', equip mafia thumb ring' : 'equip mafia thumb ring';
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_objective') === objective) return;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_objective', objective);
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)(objective, false);
}
function questStep(questName) {
  var stringStep = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(questName);
  if (stringStep === 'unstarted') return -1;else if (stringStep === 'started') return 0;else if (stringStep === 'finished') return 999;else {
    if (stringStep.substring(0, 4) !== 'step') {
      throw 'Quest state parsing error.';
    }

    return parseInt(stringStep.substring(4), 10);
  }
}

/***/ }),

/***/ "./src/quests.ts":
/*!***********************!*\
  !*** ./src/quests.ts ***!
  \***********************/
/*! namespace exports */
/*! export aboo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addFamiliarWeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! export airship [provided] [no usage info] [missing usage info prevents renaming] */
/*! export billiards [provided] [no usage info] [missing usage info prevents renaming] */
/*! export blackForest [provided] [no usage info] [missing usage info prevents renaming] */
/*! export bridge [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dailyDungeon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export moodBaseline [provided] [no usage info] [missing usage info prevents renaming] */
/*! export moodNoncombat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ores [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shen [provided] [no usage info] [missing usage info prevents renaming] */
/*! export war [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moodBaseline": () => /* binding */ moodBaseline,
/* harmony export */   "moodNoncombat": () => /* binding */ moodNoncombat,
/* harmony export */   "addFamiliarWeight": () => /* binding */ addFamiliarWeight,
/* harmony export */   "billiards": () => /* binding */ billiards,
/* harmony export */   "airship": () => /* binding */ airship,
/* harmony export */   "war": () => /* binding */ war,
/* harmony export */   "dailyDungeon": () => /* binding */ dailyDungeon,
/* harmony export */   "ores": () => /* binding */ ores,
/* harmony export */   "bridge": () => /* binding */ bridge,
/* harmony export */   "aboo": () => /* binding */ aboo,
/* harmony export */   "blackForest": () => /* binding */ blackForest,
/* harmony export */   "shen": () => /* binding */ shen
/* harmony export */ });
/* harmony import */ var canadv_ash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canadv.ash */ "canadv.ash");
/* harmony import */ var canadv_ash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(canadv_ash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _combat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combat */ "./src/combat.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib */ "./src/lib.ts");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libram */ "./node_modules/libram/src/index.js");
function _templateObject75() {
  var data = _taggedTemplateLiteral(["The Copperhead Club"]);

  _templateObject75 = function _templateObject75() {
    return data;
  };

  return data;
}

function _templateObject74() {
  var data = _taggedTemplateLiteral(["The Shore, Inc.Travel Agency"]);

  _templateObject74 = function _templateObject74() {
    return data;
  };

  return data;
}

function _templateObject73() {
  var data = _taggedTemplateLiteral(["forged identification documents"]);

  _templateObject73 = function _templateObject73() {
    return data;
  };

  return data;
}

function _templateObject72() {
  var data = _taggedTemplateLiteral(["The Black Forest"]);

  _templateObject72 = function _templateObject72() {
    return data;
  };

  return data;
}

function _templateObject71() {
  var data = _taggedTemplateLiteral(["Reassembled Blackbird"]);

  _templateObject71 = function _templateObject71() {
    return data;
  };

  return data;
}

function _templateObject70() {
  var data = _taggedTemplateLiteral(["A-Boo Peak"]);

  _templateObject70 = function _templateObject70() {
    return data;
  };

  return data;
}

function _templateObject69() {
  var data = _taggedTemplateLiteral(["A-Boo Clue"]);

  _templateObject69 = function _templateObject69() {
    return data;
  };

  return data;
}

function _templateObject68() {
  var data = _taggedTemplateLiteral(["A-Boo Clue"]);

  _templateObject68 = function _templateObject68() {
    return data;
  };

  return data;
}

function _templateObject67() {
  var data = _taggedTemplateLiteral(["A-Boo Clue"]);

  _templateObject67 = function _templateObject67() {
    return data;
  };

  return data;
}

function _templateObject66() {
  var data = _taggedTemplateLiteral(["A-Boo Peak"]);

  _templateObject66 = function _templateObject66() {
    return data;
  };

  return data;
}

function _templateObject65() {
  var data = _taggedTemplateLiteral(["ten-leaf clover"]);

  _templateObject65 = function _templateObject65() {
    return data;
  };

  return data;
}

function _templateObject64() {
  var data = _taggedTemplateLiteral(["A-Boo Clue"]);

  _templateObject64 = function _templateObject64() {
    return data;
  };

  return data;
}

function _templateObject63() {
  var data = _taggedTemplateLiteral(["smut orc keepsake box"]);

  _templateObject63 = function _templateObject63() {
    return data;
  };

  return data;
}

function _templateObject62() {
  var data = _taggedTemplateLiteral(["smut orc keepsake box"]);

  _templateObject62 = function _templateObject62() {
    return data;
  };

  return data;
}

function _templateObject61() {
  var data = _taggedTemplateLiteral(["goat cheese"]);

  _templateObject61 = function _templateObject61() {
    return data;
  };

  return data;
}

function _templateObject60() {
  var data = _taggedTemplateLiteral(["Lair of the Ninja Snowmen"]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteral(["daily dungeon malware"]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteral(["The Daily Dungeon"]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteral(["daily dungeon malware"]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteral(["fat loot token"]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteral(["fat loot token"]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteral(["stuffing fluffer"]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteral(["stuffing fluffer"]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteral(["Hippy Camp"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["Disgeist"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["bejeweled pledge pin"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["distressed denim pants"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["beer helmet"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["skeletal skiff"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["stuffing fluffer"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["stuffing fluffer"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["cornucopia"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["cornucopia"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject42() {
  var data = _taggedTemplateLiteral(["cornucopia"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["stuffing fluffer"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["cashew"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["stuffing fluffer"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["The Penultimate Fantasy Airship"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["The Ode to Booze"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["Frumious Bandersnatch"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["Pair of Stomping Boots"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["Frumious Bandersnatch"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["Frumious Bandersnatch"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["enchanted bean"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["Saucestorm"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["The Haunted Billiards Room"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["Disgeist"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["Chalky Hand"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["astral pilsner"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["The Ode to Booze"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["astral pilsner"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["Saucestorm"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["The Haunted Kitchen"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["Exotic Parrot"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["Spookyraven billiards room key"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["telegram from Lady Spookyraven"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["The Haunted Kitchen"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["Puzzle Champ"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["Puzzle Champ"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["Do I Know You From Somewhere?"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["Billiards Belligerence"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["Chorale of Companionship"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["Smooth Movement"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["The Sonata of Sneakiness"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["Leash of Linguini"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["Empathy of the Newt"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["Blood Bond"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["Singer's Faithful Ocelot"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["The Polka of Plenty"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["Astral Shell"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["Elemental Saucesphere"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["Carol of the Hells"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["Get Big"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["magical sausage"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







function moodBaseline() {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.myMp)() < 200) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.eat)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject()));
  } // Stats.


  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject2())); // Combat.

  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject3())); // Elemental res.

  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject4()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject5())); // Misc.

  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSong)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject6()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject7()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject8()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject9()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject10()));
}
function moodNoncombat() {
  moodBaseline();
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject11()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSkill)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject12()));
  if ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyBoolean)('horseryAvailable') && (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.getProperty)('_horsery') !== 'dark horse') (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.cliExecute)('horsery dark');
}
function addFamiliarWeight() {
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.shrug)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$effect)(_templateObject13()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$effect)(_templateObject14()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$effect)(_templateObject15()));
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$effect)(_templateObject16()));

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.getCampground)()['Witchess Set'] !== undefined && (0,libram__WEBPACK_IMPORTED_MODULE_4__.get)('puzzleChampBonus') === 20 && !(0,libram__WEBPACK_IMPORTED_MODULE_4__.get)('_witchessBuff')) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$effect)(_templateObject17()));
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.getCampground)()['Witchess Set'] !== undefined && (0,libram__WEBPACK_IMPORTED_MODULE_4__.get)('puzzleChampBonus') === 20 && !(0,libram__WEBPACK_IMPORTED_MODULE_4__.get)('_witchessBuff')) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$effect)(_templateObject18()));
  }
}
function billiards() {
  if (!(0,canadv_ash__WEBPACK_IMPORTED_MODULE_0__.canAdv)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject19()))) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject20()));
  }

  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject21())) === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$familiar)(_templateObject22()));
    moodBaseline();
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.maximizeCached)('hot res 9 min, stench res 9 min, equip Kramco');
    (0,_combat__WEBPACK_IMPORTED_MODULE_1__.adventureMacro)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject23()), _combat__WEBPACK_IMPORTED_MODULE_1__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject24())).repeat());
  }

  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.availableAmount)(Item.get(7302
  /* Spookyraven library key */
  )) === 0) {
    while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.myInebriety)() < 5 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject25())) > 0) {
      (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSong)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject26()));
      (0,_lib__WEBPACK_IMPORTED_MODULE_2__.drinkSafe)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject27()));
    }

    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.ensureEffect)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$effect)(_templateObject28()));
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.myInebriety)() + 13 < 18) (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.abort)("Couldn't get enough pool skill.");
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setChoice)(875, 1); // Welcome to our Ool Table

    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setChoice)(1436, 2); // Maps

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$familiar)(_templateObject29()));
    moodNoncombat();
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.maximizeCached)('-combat');
    (0,_combat__WEBPACK_IMPORTED_MODULE_1__.adventureMacro)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject30()), _combat__WEBPACK_IMPORTED_MODULE_1__.Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject31())));
  }
}
function airship() {
  if ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.questStep)('questL10Garbage') < 7) {
    if ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.questStep)('questL10Garbage') < 1) (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject32()));
    var freeRunFamiliar = (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.haveFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$familiar)(_templateObject33())) ? (0,libram__WEBPACK_IMPORTED_MODULE_4__.$familiar)(_templateObject34()) : (0,libram__WEBPACK_IMPORTED_MODULE_4__.$familiar)(_templateObject35());

    if (!(0,libram__WEBPACK_IMPORTED_MODULE_4__.get)('_bcas_banderRunawaysUsed') && (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.haveFamiliar)(freeRunFamiliar)) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.useFamiliar)(freeRunFamiliar);
      moodNoncombat();
      addFamiliarWeight();
      (0,_lib__WEBPACK_IMPORTED_MODULE_2__.maximizeCached)('familiar weight, -combat');
      var myFamiliarWeight = (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.familiarWeight)(freeRunFamiliar) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.weightAdjustment)();

      while ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.questStep)('questL10Garbage') < 7 && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_banderRunaways') < Math.floor(myFamiliarWeight / 5) && (freeRunFamiliar !== (0,libram__WEBPACK_IMPORTED_MODULE_4__.$familiar)(_templateObject36()) || (0,_lib__WEBPACK_IMPORTED_MODULE_2__.tryEnsureSong)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$skill)(_templateObject37())))) {
        moodNoncombat();
        addFamiliarWeight();
        (0,_combat__WEBPACK_IMPORTED_MODULE_1__.adventureMacro)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject38()), _combat__WEBPACK_IMPORTED_MODULE_1__.Macro.runaway());
      }

      (0,libram__WEBPACK_IMPORTED_MODULE_4__.set)('_bcas_banderRunawaysUsed', true);
    }
  }
}

function ensureFluffers(flufferCount) {
  var neededFluffers = flufferCount - (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject39()));
  var stuffingFlufferSources = [[(0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject40()), 3], [(0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject41()), 1], [(0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject42()), 1 / 3.5 * 3]];
  stuffingFlufferSources.sort(function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 2),
        item1 = _ref3[0],
        mult1 = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        item2 = _ref4[0],
        mult2 = _ref4[1];

    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.mallPrice)(item1) * mult1 - (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.mallPrice)(item2) * mult2;
  });

  var _stuffingFlufferSourc = _slicedToArray(stuffingFlufferSources[0], 2),
      stuffingFlufferSource = _stuffingFlufferSourc[0],
      sourceMultiplier = _stuffingFlufferSourc[1];

  var neededOfSource = Math.ceil(neededFluffers * sourceMultiplier);
  (0,_lib__WEBPACK_IMPORTED_MODULE_2__.get)(neededOfSource, stuffingFlufferSource);

  if (stuffingFlufferSource === (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject43())) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.use)(neededOfSource, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject44()));
  }

  if (stuffingFlufferSource !== (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject45())) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.create)(neededFluffers, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject46()));
  }
}

function war() {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject47()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject48()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject49()));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject50()));

  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.getProperty)('warProgress') === 'unstarted') {
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setChoice)(142, 3); // Lookout Tower

    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setChoice)(1433, 3); // Maps

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$familiar)(_templateObject51()));
    moodNoncombat();
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.maximizeCached)('-combat, outfit Frat Warrior Fatigues');
    (0,_combat__WEBPACK_IMPORTED_MODULE_1__.adventureRunUnlessFree)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject52()));
  }

  if ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('hippiesDefeated') < 1000) {
    var count = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.clamp)((1000 - (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('hippiesDefeated')) / 46, 0, 24);
    ensureFluffers(count);
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.use)(count, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject53()));

    while ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('hippiesDefeated') < 1000) {
      ensureFluffers(1);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject54()));
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.getProperty)('warProgress') !== 'finished') {
    moodBaseline();
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.maximizeCached)('outfit Frat Warrior Fatigues');
    _combat__WEBPACK_IMPORTED_MODULE_1__.setMode(_combat__WEBPACK_IMPORTED_MODULE_1__.MODE_MACRO);
    _combat__WEBPACK_IMPORTED_MODULE_1__.Macro.kill().save();
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.visitUrl)('bigisland.php?place=camp&whichcamp=1');
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.visitUrl)('bigisland.php?action=bossfight');
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.runCombat)();
    _combat__WEBPACK_IMPORTED_MODULE_1__.setMode(_combat__WEBPACK_IMPORTED_MODULE_1__.MODE_NULL);
  }
}
function dailyDungeon() {
  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject55())) < 2 && !(0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyBoolean)('dailyDungeonDone')) {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject56())) === 0) {
      (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getCapped)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject57()), 40000);
    }

    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setChoice)(690, 2); // Chest 5

    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setChoice)(691, 2); // Chest 10

    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setChoice)(692, 11); // Lockpicks

    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setChoice)(693, 2); // Eleven-foot pole

    moodBaseline();
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.maximizeCached)('equip Ring of Detect Boring Doors');
    (0,_combat__WEBPACK_IMPORTED_MODULE_1__.adventureMacro)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject58()), _combat__WEBPACK_IMPORTED_MODULE_1__.Macro.externalIf(!(0,libram__WEBPACK_IMPORTED_MODULE_4__.get)('_dailyDungeonMalwareUsed'), _combat__WEBPACK_IMPORTED_MODULE_1__.Macro.tryItem((0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject59()))).kill());
  }
}
function ores() {
  if (!(0,canadv_ash__WEBPACK_IMPORTED_MODULE_0__.canAdv)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject60()))) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.visitUrl)('place.php?whichplace=mclargehuge&action=trappercabin');
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(3, Item.get((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.getProperty)('trapperOre')));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(3, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject61()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.visitUrl)('place.php?whichplace=mclargehuge&action=trappercabin');
  }
}
function bridge() {
  if ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('chasmBridgeProgress') < 30) {
    var count = (34 - (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('chasmBridgeProgress')) / 5;
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getCapped)(count, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject62()), 20000);
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.use)(count, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject63()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.visitUrl)("place.php?whichplace=orc_chasm&action=bridge".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.getProperty)('chasmBridgeProgress')));
  }
}
function aboo() {
  var theoreticalProgress = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('booPeakProgress') - 30 * (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject64()));

  while (theoreticalProgress > 0) {
    // while blasts through intro adventure here...
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject65()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.setProperty)('cloverProtectActive', 'false');
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.adv1)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject66()), -1, '');
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.setProperty)('cloverProtectActive', 'true');
    theoreticalProgress = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('booPeakProgress') - 30 * (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject67()));
  }

  while ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('booPeakProgress') > 0 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.availableAmount)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject68())) > 0) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.maximizeCached)('0.1hp, spooky res, cold res');
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.use)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject69()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.adv1)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject70()), -1, '');
  }
}
function blackForest() {
  while ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.questStep)('questL11Black') < 2) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setChoice)(924, 1);
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.useFamiliar)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$familiar)(_templateObject71()));
    moodBaseline();
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.maximizeCached)('0.1 combat rate 5 min, equip blackberry galoshes');
    (0,_combat__WEBPACK_IMPORTED_MODULE_1__.adventureMacro)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject72()), _combat__WEBPACK_IMPORTED_MODULE_1__.Macro.kill());
  }

  if ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.questStep)('questL11Black') < 3) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(1, (0,libram__WEBPACK_IMPORTED_MODULE_4__.$item)(_templateObject73()));
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_3__.adv1)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject74()), -1, '');
  }
}
function shen() {
  if ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.questStep)('questL11Shen') < 1) {
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.maximizeCached)('');
    (0,_combat__WEBPACK_IMPORTED_MODULE_1__.adventureRunUnlessFree)((0,libram__WEBPACK_IMPORTED_MODULE_4__.$location)(_templateObject75()));
  }
}

/***/ }),

/***/ "canadv.ash":
/*!*****************************!*\
  !*** external "canadv.ash" ***!
  \*****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("canadv.ash");;

/***/ }),

/***/ "kolmafia":
/*!***************************!*\
  !*** external "kolmafia" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })()

));