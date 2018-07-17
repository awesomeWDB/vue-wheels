(function (window) {
    var svgSprite =
        '<svg><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M332.32 464.112l144 160 0 0C485.104 633.856 497.84 640 512 640s26.88-6.144 35.68-15.888l0 0 144-160 0 0C699.328 455.6 704 444.352 704 432c0-26.512-21.488-48-48-48-14.16 0-26.912 6.128-35.68 15.888l0 0L560 466.912 560 176c0-26.512-21.488-48-48-48s-48 21.488-48 48l0 290.912-60.32-67.024 0 0C394.896 390.144 382.16 384 368 384c-26.512 0-48 21.488-48 48C320 444.352 324.672 455.6 332.32 464.112L332.32 464.112zM880 560c-26.512 0-48 21.488-48 48l0 192L192 800 192 608c0-26.512-21.488-48-48-48s-48 21.488-48 48l0 240c0 26.512 21.488 48 48 48l367.952 0c0.016 0 0.032 0 0.048 0s0.032 0 0.048 0L880 896c26.512 0 48-21.488 48-48L928 608C928 581.488 906.512 560 880 560z"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M887.466667 618.666667l-51.2 0c-6.4 17.066667-12.8 32-19.2 46.933333l36.266667 36.266667c21.333333 21.333333 19.2 53.333333 0 74.666667l-74.666667 74.666667c-21.333333 21.333333-53.333333 21.333333-74.666667 0l-36.266667-36.266667c-14.933333 8.533333-29.866667 14.933333-46.933333 19.2l0 51.2c0 29.866667-23.466667 51.2-53.333333 51.2l-106.666667 0c-29.866667 0-53.333333-23.466667-53.333333-51.2l0-51.2c-17.066667-6.4-32-12.8-46.933333-19.2l-36.266667 36.266667c-21.333333 21.333333-53.333333 19.2-74.666667 0l-74.666667-74.666667c-21.333333-21.333333-21.333333-53.333333 0-74.666667l36.266667-36.266667c-8.533333-14.933333-12.8-29.866667-19.2-46.933333L136.533333 618.666667C108.8 618.666667 85.333333 595.2 85.333333 565.333333l0-106.666667C85.333333 428.8 108.8 405.333333 136.533333 405.333333l51.2 0c6.4-17.066667 12.8-32 19.2-46.933333l-36.266667-36.266667c-21.333333-21.333333-19.2-53.333333 0-74.666667l74.666667-74.666667c21.333333-21.333333 53.333333-21.333333 74.666667 0l36.266667 36.266667c14.933333-8.533333 29.866667-14.933333 46.933333-19.2L403.2 136.533333C405.333333 108.8 428.8 85.333333 458.666667 85.333333l106.666667 0C595.2 85.333333 618.666667 108.8 618.666667 136.533333l0 51.2c17.066667 6.4 32 12.8 46.933333 19.2l36.266667-36.266667c21.333333-21.333333 53.333333-19.2 74.666667 0l74.666667 74.666667c21.333333 21.333333 21.333333 53.333333 0 74.666667l-36.266667 36.266667c8.533333 14.933333 12.8 29.866667 19.2 46.933333l51.2 0c29.866667 0 51.2 23.466667 51.2 53.333333l0 106.666667C938.666667 595.2 915.2 618.666667 887.466667 618.666667zM896 448l-91.733333 0c-4.266667-19.2-10.666667-38.4-19.2-57.6 0 0 0 0 0 0l0 0c-6.4-12.8-12.8-27.733333-21.333333-38.4l66.133333-66.133333-89.6-89.6-66.133333 66.133333c-29.866667-19.2-61.866667-32-96-40.533333l0 0L578.133333 128l-128 0 0 91.733333 0 0c-34.133333 8.533333-68.266667 21.333333-96 40.533333l-66.133333-66.133333-89.6 89.6 66.133333 66.133333c-10.666667 17.066667-19.2 34.133333-27.733333 53.333333 0 0 0 0 0 2.133333l0 0c-4.266667 12.8-10.666667 27.733333-12.8 42.666667L128 448l0 128 91.733333 0c8.533333 34.133333 21.333333 68.266667 40.533333 96l-66.133333 66.133333 89.6 89.6 66.133333-66.133333c17.066667 10.666667 36.266667 19.2 53.333333 27.733333l0 0c12.8 4.266667 27.733333 10.666667 42.666667 12.8L445.866667 896l128 0 0-91.733333c14.933333-4.266667 29.866667-8.533333 42.666667-12.8l0 0c19.2-6.4 38.4-17.066667 53.333333-27.733333l66.133333 66.133333 89.6-89.6-66.133333-66.133333c10.666667-17.066667 19.2-34.133333 27.733333-53.333333 0 0 0 0 0-2.133333l0 0c4.266667-12.8 10.666667-27.733333 12.8-42.666667L896 576 896 448zM512 640c-70.4 0-128-57.6-128-128 0-70.4 57.6-128 128-128s128 57.6 128 128C640 582.4 582.4 640 512 640zM512 426.666667c-46.933333 0-85.333333 38.4-85.333333 85.333333 0 46.933333 38.4 85.333333 85.333333 85.333333 46.933333 0 85.333333-38.4 85.333333-85.333333C597.333333 465.066667 558.933333 426.666667 512 426.666667z"  ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M512 729.53553953a43.3983399 43.3983399 0 0 1-30.75952455-12.73670591l-348.05686298-348.05686296a43.50710736 43.50710736 0 0 1 61.51905051-61.5299274L512 624.4985034l317.29733702-317.29733702a43.50710736 43.50710736 0 1 1 61.51905051 61.52992739l-348.05686298 348.05686297A43.36570926 43.36570926 0 0 1 512 729.53553953z"  ></path></symbol><symbol id="icon-thumbs-up" viewBox="0 0 1024 1024"><path d="M958.7 512c-8.7-66.9-23.8-112.1-111.8-112.1H623.3s26.9-55.9 27.9-140.2c-1.1-2.7-4.7-168.2-111.8-168.2-77.4 0-86.3 88.8-98.1 129.6-29 112.4-98 201.5-209.3 206.8H120.3c-38.9 3.6-55 24.2-55.9 52.2-0.9 28 0 396.3 0 396.3 0 39.2 24.4 56.1 55.9 56.1h111.8c13.4 0 18.7-0.1 22.5-0.1 1.9 0 3.4 0 5.4 0.1h531.4c28.1 0 55.5-3.3 83.5-56.1-1.5 0 97.5-220.2 83.8-364.4z m-830.5-20.1H212v376.6h-83.6c-0.3-134.6-0.6-328.6-0.2-376.6z m691.1 350.8c-1.2 3.1-2.2 5.5-3 7.5-7.8 13.7-12.7 17.2-13.3 17.6-0.9 0.3-3.5 0.7-11.6 0.7H268V488.3c23.6-4 46.2-11.2 67.4-21.5 29-14 55.5-33.6 78.8-58.3 21.1-22.5 39.6-49.2 55-79.5 14-27.6 25.4-58.2 34-91 1.9-6.8 3.6-13.8 5.4-21.2 4.3-17.7 9.6-39.7 17.8-53 2.1-3.3 4.2-5.9 5.8-6.9 1.7-1.1 4.9-1.3 7.3-1.3 7.8 0 11.9 2.3 15.7 5.7 4.2 3.8 10.5 11.6 16.8 27.2 7.7 19.2 12.8 43.7 15.1 72.7 0 0.4 0.1 0.9 0.1 1.3-1.4 63.3-20.1 106.5-21.7 109.9l-45.8 91.5h327.2c16.7 0 25.9 2.1 30.6 3.9 3.7 1.4 4.6 2.5 5.1 3.2 7 8.7 10.9 37.1 12.4 48.1 4 44.7-5.2 108.1-26.8 183.3-18.3 64.2-40.6 119.5-48.9 140.3z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M342.08 681.92c-15.84-15.84-40.8-15.84-56.64 0L172.16 795.2c-15.36 15.84-15.36 40.8 0 56.64 15.84 15.36 40.8 15.36 56.64 0l113.28-113.28c15.84-15.84 15.84-41.28 0-56.64z" fill="#D5D5D5" ></path><path d="M851.36 172.64c-15.84-15.84-40.8-15.84-56.64 0l-113.28 113.28c-15.36 15.84-15.36 40.8 0 56.64 15.84 15.36 40.8 15.36 56.64 0l113.28-113.28c15.84-15.84 15.84-41.28 0-56.64z" fill="#999999" ></path><path d="M342.08 342.08c15.84-15.84 15.84-40.8 0-56.64L229.28 172.64c-15.84-15.36-40.8-15.36-56.64 0-15.36 15.84-15.36 40.8 0 56.64l113.28 113.28c15.36 15.36 40.8 15.36 56.16-0.48z" fill="#BBBBBB" ></path><path d="M851.36 794.72l-113.28-113.28c-15.84-15.36-40.8-15.36-56.64 0-15.36 15.84-15.36 40.8 0 56.64l113.28 113.28c15.84 15.36 40.8 15.36 56.64 0 15.36-15.84 15.36-40.8 0-56.64z" fill="#E5E5E5" ></path><path d="M551.84 71.84c0-22.08-17.76-39.84-39.84-39.84-22.08 0-39.84 17.76-39.84 39.84v159.84c0 22.08 17.76 39.84 39.84 39.84 22.08 0 39.84-17.76 39.84-39.84V71.84z" fill="#AAAAAA" ></path><path d="M551.84 791.84c0-22.08-17.76-39.84-39.84-39.84-22.08 0-39.84 17.76-39.84 39.84v159.84c0 22.08 17.76 39.84 39.84 39.84 22.08 0 39.84-17.76 39.84-39.84v-159.84z" fill="#DDDDDD" ></path><path d="M791.84 551.84h159.84c22.08 0 39.84-17.76 39.84-39.84 0-22.08-17.76-39.84-39.84-39.84h-159.84c-22.08 0-39.84 17.76-39.84 39.84 0 22.08 17.76 39.84 39.84 39.84z" fill="#EEEEEE" ></path><path d="M232.16 472.16H71.84C49.76 472.16 32 489.92 32 512c0 22.08 17.76 39.84 39.84 39.84h159.84c22.08 0 39.84-17.76 39.84-39.84 0.48-22.08-17.28-39.84-39.36-39.84z" fill="#CCCCCC" ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M729.53553953 512a43.3983399 43.3983399 0 0 1-12.73670591 30.75952455l-348.05686296 348.05686298a43.50710736 43.50710736 0 0 1-61.52992741-61.51905051L624.4985034 512l-317.29733702-317.29733702a43.50710736 43.50710736 0 1 1 61.52992739-61.51905051l348.05686297 348.05686298A43.36570926 43.36570926 0 0 1 729.53553953 512z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M294.46446047 512a43.3983399 43.3983399 0 0 1 12.73670591-30.75952455l348.05686296-348.05686298a43.50710736 43.50710736 0 0 1 61.52992741 61.51905051L399.5014966 512l317.29733702 317.29733702a43.50710736 43.50710736 0 1 1-61.52992739 61.51905051l-348.05686297-348.05686298A43.36570926 43.36570926 0 0 1 294.46446047 512z"  ></path></symbol></svg>';
    var script = function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1]
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function (fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function () {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }
        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function () {
                    if (!done) {
                        done = true;
                        fn()
                    }
                };
            var polling = function () {
                try {
                    d.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(polling, 50);
                    return
                }
                init()
            };
            polling();
            d.onreadystatechange = function () {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    };
    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write(
                "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
})(window)