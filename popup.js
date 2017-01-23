// Globals
var favicon_base = 'http://www.google.com/s2/favicons?domain=';
var rememberSearch = false;


function bplog(m) {
    chrome.extension.getBackgroundPage().mlog(m);
}

function md5(v) {
    return chrome.extension.getBackgroundPage().md5(v);
}

function dbg() {
    return chrome.extension.getBackgroundPage().DBGMODE;
}

function getdomain(url) {
    var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var domain = matches && matches[1];
    return domain;
}

function sendmsg(m, func) {
    try {
        chrome.extension.getBackgroundPage().console.log('popup.func()');
        chrome.extension.getBackgroundPage().console.log(func);
        chrome.runtime.sendMessage(m, function(r) {
            alert(r);
        });
    } catch (e) {
        console.log("Couldn't send msg: " + m);
        console.log(e);
    }
}


function delbookmark(e) {
    // Deletes from bookmarks + indexeddb
    chrome.extension.getBackgroundPage().dbdel(e.target.alt,
        function() {
            bplog('String(e.target.id): ' + String(e.target.id));
            chrome.bookmarks.remove(String(e.target.id));
            var hideEl = getel('bookmarkdiv' + e.target.id);
            hideEl.style.display = 'none';
        });
    return false;
}

function createlink(bookmark) {
    var div = $('<div>');
    div.attr('class', 'bookmarkdiv');
    div.attr('id', 'bookmarkdiv' + bookmark.id);

    var span = $('<div>');
    span.attr('class', 'truncate');

    var ico = $('<img>');
    ico.attr('src', favicon_base + getdomain(bookmark.url));
    ico.attr('align', 'absmiddle');
    ico.attr('height', '10');
    ico.attr('width', '10');


    var a = $('<a>');
    a.attr('href', bookmark.url);
    a.attr('id', bookmark.id); //NOTE; result.value.chrome_bookmark_id);
    a.attr('class', 'bookmarklink');
    a.attr('title', bookmark.title);
    a.click(function(e) {
        chrome.tabs.create({
            url: e.target.href
        });
    });
    a.append(bookmark.title);

    // Delete link
    var dl = $('<img>');
    dl.attr('title', 'Careful! Deletes bookmark!');
    dl.attr('class', 'delimg');
    //    dl.attr('align', 'absmiddle');
    dl.attr('src', 'redx.gif');
    dl.attr('height', '8');
    dl.attr('width', '8');
    dl.attr('id', bookmark.id);
    dl.attr('name', bookmark.id);
    dl.attr('alt', bookmark.url);
    //dl.append('[del]');
    dl.click(delbookmark);

    // Add links to div
    span.append(ico);
    span.append('&nbsp;');
    span.append(a);
    span.append(' ');
    div.append(span);
    div.append(dl);
    div.hover(
        function() {
            $('img[name=' + bookmark.id + ']').fadeIn(5 /*500*/ );
        },
        function() {
            $('img[name=' + bookmark.id + ']').fadeOut(5 /*500*/ );
        });


    return div;
} // createlink

function listbookmarks(bookmarks) {
    bookmarks.forEach(function(bookmark) {


        if (!bookmark.children) {
            $('#bookmarks').append(createlink(bookmark));
        } else {
            if (bookmark.id > 0) {
                var d = $('<div>');
                d.attr('class', 'bookmarkheader');

                var ico = $('<img>');
                ico.attr('src', 'manage.png');
                ico.attr('align', 'absmiddle');
                ico.attr('height', '10');
                ico.attr('width', '10');
                ico.attr('style', 'margin-bottom:1px;margin-left:3px');


                var a = $('<a>');
                a.attr('href', 'chrome://bookmarks#' + bookmark.id);
                a.attr('border', 'none');
                a.attr('style', 'text-decoration:none');
                a.attr('id', bookmark.id);
                a.attr('class', 'bookmarklink');
                a.attr('title', 'manage');
                a.click(function(e) {
                    chrome.tabs.create({
                        url: 'chrome://bookmarks#' + bookmark.id
                    }); // e.target.href});
                });
                a.append(bookmark.title);
                a.append(ico);
                d.append(a);
                $('#bookmarks').append(d);
            }
        }

        if (bookmark.children)
            listbookmarks(bookmark.children);
    });
}

function getel(id) {
    return document.getElementById(id);
}

function dosearch(e) {
    if (e.which == 13 || e.keyCode == 13) {
        bplog('searching...');
        searchdb();
        return false;
    }
    return true;

} // dosearch

function dolastsearch() {
    if (chrome.extension.getBackgroundPage().lastsearch()) {
        var searchinput = getel("search");
        searchinput.value = chrome.extension.getBackgroundPage().lastsearch();
        searchdb();
    }
} // dolastsearch

function searchdb() {

    var searchinput = getel("search").value;



    if (searchinput == '') {
        $('#searchresults').html('');
        chrome.extension.getBackgroundPage().lastsearch(
            chrome.extension.getBackgroundPage().lastsearch_clearflag);
        return;
    }

    chrome.extension.getBackgroundPage().lastsearch(searchinput);


    $('#clearsearch').remove();
    $(
        '<span id="clearsearch">' + //clear</span>'
        '<img src="redx.gif" height="8", width="8" title="Clear search" id="clearsearchimg" /></span>'
    ).insertAfter('#search');


    $('#search').css('width', '95%');
    $('#clearsearch').click(clearsearch);

    var sr = $('#searchresults');
    sr.html('No results');
    var uniqueTitles = {};

    chrome.extension.getBackgroundPage().searchdb(
        searchinput,
        function(result) {

            // Create the link
            var b = result.value;
            b['id'] = result.value.chrome_bookmark_id;

            uniqueTitles[result.value.chrome_bookmark_id] = 1;
            bplog(b);
            var div = createlink(b);

            if (sr.html() == 'No results') sr.html('');
            sr.append(div);

        }, // function

        function() { // donecallback(), search bookmark titles, if no results found
            chrome.extension.getBackgroundPage().searchbookmarks(
                searchinput,
                function(bookmark) {
                    var b = bookmark;
                    bplog(b);

                    if (typeof uniqueTitles == 'object' && !(b.id in uniqueTitles)) {
                        var div = createlink(b);
                        if (sr.html() == 'No results') sr.html('');
                        sr.append(div);
                    }

                } // callback()
            );

        } // donecallback()
    );

} // searchdb


function clearsearch() {
    $("#search").val('');
    $('#search').css('width', '100%');
    chrome.extension.getBackgroundPage().lastsearch(
        chrome.extension.getBackgroundPage().lastsearch_clearflag);
    $('#searchresults').html('');
    $('#clearsearch').remove();
}

function loadPage() {
    console.log('loadPage ' + Date());
    console.log('sessstor ' + chrome.extension.getBackgroundPage().lastsearch());

    $('#bookmarks').empty();

    chrome.bookmarks.getTree(
        function(bookmarks) {
            bplog(bookmarks[0]);
            listbookmarks(bookmarks);
        }
    );

    setTimeout(function() {
        dolastsearch();
    }, 500);
} // loadPage

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("wipedb").addEventListener("click",
        function() {
            chrome.extension.getBackgroundPage().dbwipe();
        });

    document.getElementById("search").addEventListener("keyup", dosearch);

    loadPage();

}); // DOMContentLoaded
