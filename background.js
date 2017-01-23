/*
    TODO remove numbers from searchwords

*/



// To reach start of application, search for 'App code'

//////////////////////// md5.js /////////////////////////////////////

function md5cycle(x, k) {
    var a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
    txt = '';
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i;
    for (i = 64; i <= s.length; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++)
        tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
    tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    if (i > 55) {
        md5cycle(state, tail);
        for (i = 0; i < 16; i++) tail[i] = 0;
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) {
    /* I figured global was faster.   */
    var md5blks = [],
        i;
    /* Andy King said do it this way. */
    for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n) {
    var s = '',
        j = 0;
    for (; j < 4; j++)
        s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
    return s;
}

function hex(x) {
    for (var i = 0; i < x.length; i++)
        x[i] = rhex(x[i]);
    return x.join('');
}

function md5(s) {
    return hex(md51(s));
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
    return (a + b) & 0xFFFFFFFF;
}
//////////////////////// md5.js /////////////////////////////////////





Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

/*
 * String method to remove stop words
 * Written by GeekLad http://geeklad.com
 * Stop words obtained from http://www.lextek.com/manuals/onix/stopwords1.html
 *   Usage: string_variable.removeStopWords();
 *   Output: The original String with stop words removed
 */
String.prototype.removeStopWords = function() {
    var x;
    var y;
    var word;
    var stop_word;
    var regex_str;
    var regex;
    var cleansed_string = this.valueOf();
    var stop_words = new Array(
        'a',
        'about',
        'above',
        'across',
        'after',
        'again',
        'against',
        'all',
        'almost',
        'alone',
        'along',
        'already',
        'also',
        'although',
        'always',
        'among',
        'an',
        'and',
        'another',
        'any',
        'anybody',
        'anyone',
        'anything',
        'anywhere',
        'are',
        'area',
        'areas',
        'around',
        'as',
        'ask',
        'asked',
        'asking',
        'asks',
        'at',
        'away',
        'b',
        'back',
        'backed',
        'backing',
        'backs',
        'be',
        'became',
        'because',
        'become',
        'becomes',
        'been',
        'before',
        'began',
        'behind',
        'being',
        'beings',
        'best',
        'better',
        'between',
        'big',
        'both',
        'but',
        'by',
        'c',
        'came',
        'can',
        'cannot',
        'case',
        'cases',
        'certain',
        'certainly',
        'clear',
        'clearly',
        'come',
        'could',
        'd',
        'did',
        'differ',
        'different',
        'differently',
        'do',
        'does',
        'done',
        'down',
        'down',
        'downed',
        'downing',
        'downs',
        'during',
        'e',
        'each',
        'early',
        'either',
        'end',
        'ended',
        'ending',
        'ends',
        'enough',
        'even',
        'evenly',
        'ever',
        'every',
        'everybody',
        'everyone',
        'everything',
        'everywhere',
        'f',
        'face',
        'faces',
        'fact',
        'facts',
        'far',
        'felt',
        'few',
        'find',
        'finds',
        'first',
        'for',
        'four',
        'from',
        'full',
        'fully',
        'further',
        'furthered',
        'furthering',
        'furthers',
        'g',
        'gave',
        'general',
        'generally',
        'get',
        'gets',
        'give',
        'given',
        'gives',
        'go',
        'going',
        'good',
        'goods',
        'got',
        'great',
        'greater',
        'greatest',
        'group',
        'grouped',
        'grouping',
        'groups',
        'h',
        'had',
        'has',
        'have',
        'having',
        'he',
        'her',
        'here',
        'herself',
        'high',
        'high',
        'high',
        'higher',
        'highest',
        'him',
        'himself',
        'his',
        'how',
        'however',
        'i',
        'if',
        'important',
        'in',
        'interest',
        'interested',
        'interesting',
        'interests',
        'into',
        'is',
        'it',
        'its',
        'itself',
        'j',
        'just',
        'k',
        'keep',
        'keeps',
        'kind',
        'knew',
        'know',
        'known',
        'knows',
        'l',
        'large',
        'largely',
        'last',
        'later',
        'latest',
        'least',
        'less',
        'let',
        'lets',
        'like',
        'likely',
        'long',
        'longer',
        'longest',
        'm',
        'made',
        'make',
        'making',
        'man',
        'many',
        'may',
        'me',
        'member',
        'members',
        'men',
        'might',
        'more',
        'most',
        'mostly',
        'mr',
        'mrs',
        'much',
        'must',
        'my',
        'myself',
        'n',
        'necessary',
        'need',
        'needed',
        'needing',
        'needs',
        'never',
        'new',
        'new',
        'newer',
        'newest',
        'next',
        'no',
        'nobody',
        'non',
        'noone',
        'not',
        'nothing',
        'now',
        'nowhere',
        'number',
        'numbers',
        'o',
        'of',
        'off',
        'often',
        'old',
        'older',
        'oldest',
        'on',
        'once',
        'one',
        'only',
        'open',
        'opened',
        'opening',
        'opens',
        'or',
        'order',
        'ordered',
        'ordering',
        'orders',
        'other',
        'others',
        'our',
        'out',
        'over',
        'p',
        'part',
        'parted',
        'parting',
        'parts',
        'per',
        'perhaps',
        'place',
        'places',
        'point',
        'pointed',
        'pointing',
        'points',
        'possible',
        'present',
        'presented',
        'presenting',
        'presents',
        'problem',
        'problems',
        'put',
        'puts',
        'q',
        'quite',
        'r',
        'rather',
        'really',
        'right',
        'right',
        'room',
        'rooms',
        's',
        'said',
        'same',
        'saw',
        'say',
        'says',
        'second',
        'seconds',
        'see',
        'seem',
        'seemed',
        'seeming',
        'seems',
        'sees',
        'several',
        'shall',
        'she',
        'should',
        'show',
        'showed',
        'showing',
        'shows',
        'side',
        'sides',
        'since',
        'small',
        'smaller',
        'smallest',
        'so',
        'some',
        'somebody',
        'someone',
        'something',
        'somewhere',
        'state',
        'states',
        'still',
        'still',
        'such',
        'sure',
        't',
        'take',
        'taken',
        'than',
        'that',
        'the',
        'their',
        'them',
        'then',
        'there',
        'therefore',
        'these',
        'they',
        'thing',
        'things',
        'think',
        'thinks',
        'this',
        'those',
        'though',
        'thought',
        'thoughts',
        'three',
        'through',
        'thus',
        'to',
        'today',
        'together',
        'too',
        'took',
        'toward',
        'turn',
        'turned',
        'turning',
        'turns',
        'two',
        'u',
        'under',
        'until',
        'up',
        'upon',
        'us',
        'use',
        'used',
        'uses',
        'v',
        'very',
        'w',
        'want',
        'wanted',
        'wanting',
        'wants',
        'was',
        'way',
        'ways',
        'we',
        'well',
        'wells',
        'went',
        'were',
        'what',
        'when',
        'where',
        'whether',
        'which',
        'while',
        'who',
        'whole',
        'whose',
        'why',
        'will',
        'with',
        'within',
        'without',
        'work',
        'worked',
        'working',
        'works',
        'would',
        'x',
        'y',
        'year',
        'years',
        'yet',
        'you',
        'young',
        'younger',
        'youngest',
        'your',
        'yours',
        'z'
    )

    // Split out all the individual words in the phrase
    words = cleansed_string.match(/[^\s]+|\s+[^\s+]$/g)

    // Review all the words
    for (x = 0; x < words.length; x++) {
        // For each word, check all the stop words
        for (y = 0; y < stop_words.length; y++) {
            // Get the current word
            word = words[x].replace(/\s+|[^a-z]+/ig, ""); // Trim the word and remove non-alpha

            // Get the stop word
            stop_word = stop_words[y];

            // If the word matches the stop word, remove it from the keywords
            if (word.toLowerCase() == stop_word) {
                // Build the regex
                regex_str = "^\\s*" + stop_word + "\\s*$"; // Only word
                regex_str += "|^\\s*" + stop_word + "\\s+"; // First word
                regex_str += "|\\s+" + stop_word + "\\s*$"; // Last word
                regex_str += "|\\s+" + stop_word + "\\s+"; // Word somewhere in the middle
                regex = new RegExp(regex_str, "ig");

                // Remove the word from the keywords
                cleansed_string = cleansed_string.replace(regex, " ");
            }
        }
    }
    return cleansed_string.replace(/^\s+|\s+$/g, "");
} // String.prototype.removeStopWords







////////////// App code

// Globals
var DBGMODE = true;
var db;



function mlog(m, alwayslog) {
    if (typeof alwayslog == 'undefined' && DBGMODE == true) console.log(m);
    if (typeof alwayslog != 'undefined') console.log(m);
}


function isWhitespaceOrEmpty(text) {
    return !/[^\s]/.test(text);
}

function startswith(str, prefix) {
    return str.indexOf(prefix) === 0;
}

function endswith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function iendswith(str, suffix) {
    return endswith(str.toLowerCase(), suffix.toLowerCase());
}





// Generic AJAX function
function doGET(url, callback) {
    var xhr = new XMLHttpRequest();
    try {
        xhr.open("GET", url, true);
    } catch (exception) {
        mlog(exception);
        return;
    }

    xhr.onerror = function() {
        mlog(xhr.statusText);
    };

    if (typeof(callback) == "function") {

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                callback(url, xhr);
            } else {
                mlog('readyState: ' + xhr.readyState);
            }
        }

    } else {

        xhr.onreadystatechange = function() {

            if (xhr.readyState == 4) {
                mlog('doGET------------->');
                mlog(xhr.responseText);
                mlog(doc);
                mlog('<-------------doGET');
            } else {
                mlog('readyState: ' + xhr.readyState);
            }
        }

    }
    try {
        setTimeout(function() {
            xhr.send();
        }, 10);
    } catch (exception) {
        mlog(exception);
    }

} // doGET

function cleanNonContent(node) {
    if (typeof node === 'undefined') return;

    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        if (
            (child.nodeType === 8) ||
            (child.nodeName == 'SCRIPT') ||
            (child.nodeName == 'STYLE')
        ) {
            node.removeChild(child);
            n--;
        } else if (child.nodeType === 3 && !/\S/.test(child.nodeValue)) { // Text node
            child.nodeValue = ' ';
        } else if (child.nodeType === 1) // Element
        {
            cleanNonContent(child);
        }
    }
} // cleanNonContent


/*
    Algorithm to get the most likely canditate for real content on a page,
    under the assumption that pages follow a basic layout of
    header/content/footer, and we're interested in the middle part...

    TODO: parameterize 'sides' percentage
*/
function getMainContentFromBody(body, minsizetext) {
    if (typeof body === 'undefined') return '';
    cleanNonContent(body);
    var ch = body.children;

    mlog('number of elements under <body>: ' + ch.length);

    var middle = Math.round(ch.length / 2);
    mlog('middle element (ish): ' + middle);

    var sides = Math.round(Math.round((ch.length * .50)) / 2);
    mlog('Each side (50% halved): ' + sides);

    var minsize = 1000;
    if (typeof minsizetext !== 'undefined') minsize = minsizetext;


    var longest = 0;
    var longestindex = 0;
    var longtext = '';
    var longestel = null;
    for (var i = (middle - sides); i <= (middle + sides); i++) {

        var el = ch[i];
        if (typeof el === 'undefined') continue;


        var et = el.innerText;
        if (typeof et === 'undefined') continue;

        mlog('et.length: ' + et.length);
        if (et.length > longest) {
            mlog('----------> longest!');
            longestindex = i;
            mlog('id: ' + el.id);
            mlog('class: ' + el.className);
            mlog('longest! <-------------');

            longtext = et;
            longest = et.length;
            longestel = el;
        }

    } //for

    /*
        If we didn't get enough text to satisfy our minimum, iterate through
        again, appending from the top until we do reach our minimum, or run out
        of elements.

    */
    if (longtext.length < minsize) {
        for (var i = (middle - sides); i <= (middle + sides); i++) {
            var el = ch[i];
            if (typeof el === 'undefined') continue;
            longtext += el.innerText;
            mlog('longtext.length: ' + longtext.length);
            if (longtext.length > minsize) break;

        } /*for*/
    } /*if*/

    return longtext;
} // getMainContentFromBody

function textToTokens(text) {

    if (text.length < 50) return '';
    if (text == null || text == '') return '';

    var tokens = {};
    var tda = text.removeStopWords().toLowerCase().match(/\S+/g);
    for (var i = 0; i < tda.length; i++) {
        if (tda[i] in tokens) {
            tokens[tda[i]] += 1;
        } else {
            tokens[tda[i]] = 1;
        }
    }
    return tokens;
}


// Initialize database
/*
    Schema:

    rembo2display
    -------------
    url | title | chrome_bookmark_id | searchwords

*/
if ("indexedDB" in window) {

    var openRequest = indexedDB.open("rembo2", 1);
    openRequest.onupgradeneeded = function(e) {
        console.log("Upgrading indexedDB...");

        db = e.target.result;
        if (!db.objectStoreNames.contains("display")) {
            var dispdb = db.createObjectStore("display", {
                keyPath: 'url'
            });

            dispdb.createIndex('by_id_implies_oldest', ['chrome_bookmark_id'], {
                unique: false
            });
        }

    }

    openRequest.onsuccess = function(e) {
        console.log("indexedDB openRequest succeeded.");
        db = e.target.result;

    }

    openRequest.onerror = function(e) {
        mlog("Error", true);
        console.dir(e);
    }
}


function dbwipe() {
    var req = indexedDB.deleteDatabase('rembo2');
    req.onsuccess = function() {
        mlog("Deleted database successfully");
    };
    req.onerror = function() {
        mlog("Couldn't delete database", true);
    }
}


function scrapePageAndStore(bookmark) {

    if (typeof bookmark === 'undefined') {
        mlog('bookmark is undefined...?');
        return;
    }

    mlog('bookmark.title ' + bookmark.title);
    mlog('bookmark.url ' + bookmark.url);


    bookmarkInDB(bookmark.url,
        function(exists) {
            if (!exists &&
                /* local resources, e.g. chrome:// seem to clobber progress,
                 * avoid. */
                (startswith(bookmark.url, 'http://') ||
                    startswith(bookmark.url, 'https://'))) {

                doGET(bookmark.url,
                    function(url, xhr) {

                        // TODO build out this list better
                        if (iendswith(url, 'pdf') || iendswith(url, 'mov') ||
                            iendswith(url, 'wav') ||
                            iendswith(url, 'png') || iendswith(url, 'jpg') ||
                            iendswith(url, 'gif') || iendswith(url, 'mp3')) {
                            // no body content, just url + id. 'title' is just url
                            var o = {};
                            o.chrome_bookmark_id = bookmark.id;
                            o.searchwords = {};
                            o.url = bookmark.url;
                            o.title = bookmark.title;

                            dbstore(o.url, o,
                                function() {
                                    mlog('stored!');
                                    mlog(o);
                                });

                        } else {

                            var doc =
                                document.implementation.createHTMLDocument("example");

                            doc.documentElement.innerHTML = xhr.responseText;

                            var longtext =
                                getMainContentFromBody(
                                    doc.getElementsByTagName('body')[0]);

                            if (longtext != null && longtext != '') {

                                // We don't want duplicates due to punctuation
                                var tokens =
                                    textToTokens(
                                        longtext.replace(/[’\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, ""));

                                // store it
                                var o = {};
                                o.chrome_bookmark_id = bookmark.id;
                                o.searchwords = tokens;
                                o.url = bookmark.url;
                                o.title = bookmark.title;

                                dbstore(o.url, o,
                                    function() {
                                        mlog('stored!', true);
                                        mlog(o, true);
                                    });
                            }

                        } // if/else

                    }
                ); // doGET

            } // if !exists
            else {
                mlog('already exists ' + bookmark.url);
            }
        }); // bookmarkInDB

} // scrapePageAndStore


function bookmarkInDB(url, callback) {

    if (typeof url === 'undefined') callback(true);
    mlog('.');

    if (typeof db != 'undefined') {

        mlog('.');
        var transaction = db.transaction(["display"], "readwrite");
        var store = transaction.objectStore("display");

        mlog('bookmarkInDB ' + url);
        var req = store.get(url);
        req.onsuccess = function(e) {
            if (typeof req.result != 'undefined') {
                mlog('true');
                callback(true);
            } else {
                mlog('false');
                callback(false);
            }
        }

        req.onerror = function(e) {
            mlog('error');
        }
    }
} // bookmarkInDB


// Gah, everything is async, and no provisions for a 'doneCallback' ... can't
// really use global to "know" if bookmarking is in progress...

function getBookmarks(processBookmarkCallback) {

    function recurseBookmarks(bookmarks) {

        bookmarks.forEach(
            function(bookmark) {
                if (bookmark.url)
                    processBookmarkCallback(bookmark);
                if (bookmark.children)
                    recurseBookmarks(bookmark.children);
            }
        ); // forEach


    } // recurseBookmarks

    chrome.bookmarks.getTree(recurseBookmarks);
} // getBookmarks


/*
    Delete record from database
*/
function dbdel(key, callback) {
    if (typeof db != 'undefined') {

        var transaction = db.transaction(["display"], "readwrite");
        var store = transaction.objectStore("display");

        var req = store.delete(key);
        req.onsuccess = function(e) {

            if (typeof(callback) == "function") {
                callback();
            } else {
                mlog('dbdel() ' + key + ' deleted from db');
            }

        }; // onsuccess

        //TODO onerror

    }


} // dbdel

function dbstore(key, obj, callback) {

    if (typeof db != 'undefined') {

        mlog('dbstore() ' + key);
        var transaction = db.transaction(["display"], "readwrite");
        var store = transaction.objectStore("display");

        var req = store.get(key);
        req.onsuccess = function(e) {
            try {
                var r = store.put(obj);

                r.onsuccess = function(e2) {
                    console.log('dbstore() ' + key + ' saved to db');

                    if (typeof(callback) == "function") callback();
                };

            } catch (exception) {
                console.error((new Date()).toJSON(), "exception.stack:", exception.stack);
                console.log('Trying to put this...');
                console.log(obj);
            }

        };

        req.onerror = function(e) {
            mlog('dbstore() error', true);
            mlog(e, true);
            if (typeof(callback) == "function") callback();
        };


    } else {
        console.log('Database not found!', true);
    }

} // dbstore



function listdb(callback, donecallback) {
    if (typeof db != 'undefined') {
        var transaction = db.transaction(["display"], "readwrite");
        var store = transaction.objectStore("display");

        // Iterate over all objects
        var keyRange = IDBKeyRange.lowerBound(0);
        var cursorRequest = store.openCursor(keyRange);

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;

            // End of query
            if (!!result == false) {
                if (typeof(donecallback) == "function") donecallback();
                return;
            }

            if (typeof(callback) == "function") {
                callback(result);
            } else {
                mlog(result);
            }
            result.continue();
        };

        cursorRequest.onerror = function(e) {
            mlog('error!', 1);
            mlog(e, 1)
        };

    }

} // listdb


var lastsearch_ = null;
var lastsearch_clearflag = '%%%%????clearme^^^/el';

function lastsearch(set) {
    console.log('set ' + set);
    if (set === lastsearch_clearflag) {
        lastsearch_ = null;
        return;
    }
    if (set) {
        lastsearch_ = set;
    } else {
        return lastsearch_;
    }
}

function searchdb(searchfor, callback, donecallback) {
    var searchterms = searchfor.toLowerCase().split(/\s+/);

    listdb(
        function(result) {

            var matchcount = 0;

            for (var index in searchterms) {
                var term = searchterms[index];

                var title = result.value.title;
                var url = result.value.url;
                var tk = result.value.searchwords;

                if ((title.toLowerCase().indexOf(term.toLowerCase()) != -1) ||
                    (url.toLowerCase().indexOf(term.toLowerCase()) != -1) ||
                    (typeof tk == 'object' && term.toLowerCase() in tk)
                ) matchcount++;

            } //for 

            if (matchcount == searchterms.length) {
                if (typeof(callback) == "function") {
                    callback(result);
                } else {
                    mlog('searchdb: ' + JSON.stringify(result));
                }
            } // if

        }, //function

        donecallback); // listdb

} //searchdb


function searchbookmarks(searchfor, callback) {

    var searchterms = searchfor.toLowerCase().split(/\s+/);

    function recurseBookmarks(bookmarks) { // Closure

        bookmarks.forEach(function(bookmark) {

            if (typeof bookmark.title !== 'undefined') {

                var matchcount = 0;

                for (var index in searchterms) {
                    var term = searchterms[index];

                    var title = bookmark.title;

                    if (title.toLowerCase().indexOf(term.toLowerCase()) != -1)
                        matchcount++;

                } //for 

                if (matchcount == searchterms.length)
                    callback(bookmark);

            } // if

            if (bookmark.children)
                recurseBookmarks(bookmark.children);
        }); // forEach

    } // recurseBookmarks closure


    chrome.bookmarks.getTree(
        function(bookmarks) {
            recurseBookmarks(bookmarks);
        });

} // searchbookmarks






setTimeout(
    function() {

        getBookmarks(

            function(bookmark) {
                mlog('running getBookmarks first time...');
                scrapePageAndStore(bookmark);

            } // function

        ); // getBookmarks
    },

    1000 * 10); // setTimeout



/*
    Index bookmark on add only (no polling, kills Chrome)

*/
chrome.bookmarks.onCreated.addListener(
    function(id, bookmark) {
        if (bookmark.children) return; // Don't care about folders

        if (!bookmark.url) return;
        mlog("You! added " + bookmark.url);
        scrapePageAndStore(bookmark);
    }
); // onCreated



chrome.bookmarks.onRemoved.addListener(
    function(id, removeInfo) {
        purgeOldBookmarksFromDB(function() {
            console.log('Purged index');
        });
    }
); // onRemoved

// Purge bookmarks that have been deleted from database
function purgeOldBookmarksFromDB(donecallback) {
    listdb(
        function(result) {
            var db_id = result.value.chrome_bookmark_id;
            var db_url = result.value.url;
            mlog('purgeOldBookmarksFromDB, db_url: ' + db_url);
            chrome.bookmarks.get(db_id,
                function(b) {
                    if (chrome.runtime.lastError) {
                        dbdel(db_url);
                    } else {
                        mlog(' ' + db_id + ' == ' + b[0].id);
                    }
                });
        }, // function

        donecallback()
    ); // listdb
}

setTimeout(

    function() {
        purgeOldBookmarksFromDB(

            function() { // done callback

                setInterval(
                    function() {
                        purgeOldBookmarksFromDB(
                            function() {
                                mlog('purgeOldBookmarksFromDB() done');
                            });
                    },
                    (1000 * 60) * 15); // 15 minute interval

            }); // purgeOldBookmarksFromDB

    }, // function
    1000 * 20);