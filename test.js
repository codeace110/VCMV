
(function() {
    var profileID = 18841;
    var domainID = 13338;
    var _vbTrackDomain = "https://thevintagecarmarket.com";
    var vbt_baseURL = "https://www.vbt.io/";
    var _vbSessionId = "1721761524::884966846";
    var _uniqueTime = 1721761524;
    var __vbtpEmail = "";
    var __vbtpName = "";

    var track_contact_id = 0;

    var visitorIP = "131.226.112.82";
    var country = 'philippines';
    var state = '-';
    var city = '-';
    var isp = '-';
    var organization = '-';

    var isHeatmapEnabled = 1;
    var isGoalEnabled = 1;
    var isWebhookEnabled = 1;
    var isLinkMappingEnabled = 1;
    var isVideoMappingEnabled = 1;
    var isFormMappingEnabled = 1;

    var actionsDependentFields = {};

    var actionsGoals = [];
    var actionsEntry = [];
    var actionsExit = [];
    var actionsMiddle = [];
    var actionsEnd = [];
    var goals = {
        "_": []
    };
    var vBrandingWebhook = "";
    var vBrandingWebpush = "";
    (function(vbset, vbTracker) {
        if (window._vbTracker_)
            return;
        window._vbTracker_ = true;
        window._vbTracker = vbTracker || {},
        window._vbset = vbset || [];
        var k, _vbsetData = {
            account: "",
            domain: "",
            ecommerce: "",
            type: "",
            amount: ""
        }, countriesList = {
            AF: "Afghanistan",
            AX: "Åland Islands",
            AL: "Albania",
            DZ: "Algeria",
            AS: "American Samoa",
            AD: "Andorra",
            AO: "Angola",
            AI: "Anguilla",
            AQ: "Antarctica",
            AG: "Antigua and Barbuda",
            AR: "Argentina",
            AM: "Armenia",
            AW: "Aruba",
            AU: "Australia",
            AT: "Austria",
            AZ: "Azerbaijan",
            BS: "Bahamas",
            BH: "Bahrain",
            BD: "Bangladesh",
            BB: "Barbados",
            BY: "Belarus",
            BE: "Belgium",
            BZ: "Belize",
            BJ: "Benin",
            BM: "Bermuda",
            BT: "Bhutan",
            BO: "Bolivia",
            BA: "Bosnia and Herzegovina",
            BW: "Botswana",
            BV: "Bouvet Island",
            BR: "Brazil",
            BQ: "British Antarctic Territory",
            IO: "British Indian Ocean Territory",
            VG: "British Virgin Islands",
            BN: "Brunei",
            BG: "Bulgaria",
            BF: "Burkina Faso",
            BI: "Burundi",
            KH: "Cambodia",
            CM: "Cameroon",
            CA: "Canada",
            CT: "Canton and Enderbury Islands",
            CV: "Cape Verde",
            KY: "Cayman Islands",
            CF: "Central African Republic",
            TD: "Chad",
            CL: "Chile",
            CN: "China",
            CX: "Christmas Island",
            CC: "Cocos [Keeling] Islands",
            CO: "Colombia",
            KM: "Comoros",
            CG: "Congo - Brazzaville",
            CD: "Congo - Kinshasa",
            CK: "Cook Islands",
            CR: "Costa Rica",
            HR: "Croatia",
            CU: "Cuba",
            CY: "Cyprus",
            CZ: "Czech Republic",
            CI: "Côte d’Ivoire",
            DK: "Denmark",
            DJ: "Djibouti",
            DM: "Dominica",
            DO: "Dominican Republic",
            NQ: "Dronning Maud Land",
            DD: "East Germany",
            EC: "Ecuador",
            EG: "Egypt",
            SV: "El Salvador",
            GQ: "Equatorial Guinea",
            ER: "Eritrea",
            EE: "Estonia",
            ET: "Ethiopia",
            FK: "Falkland Islands",
            FO: "Faroe Islands",
            FJ: "Fiji",
            FI: "Finland",
            FR: "France",
            GF: "French Guiana",
            PF: "French Polynesia",
            TF: "French Southern Territories",
            FQ: "French Southern and Antarctic Territories",
            GA: "Gabon",
            GM: "Gambia",
            GE: "Georgia",
            DE: "Germany",
            GH: "Ghana",
            GI: "Gibraltar",
            GR: "Greece",
            GL: "Greenland",
            GD: "Grenada",
            GP: "Guadeloupe",
            GU: "Guam",
            GT: "Guatemala",
            GG: "Guernsey",
            GN: "Guinea",
            GW: "Guinea-Bissau",
            GY: "Guyana",
            HT: "Haiti",
            HM: "Heard Island and McDonald Islands",
            HN: "Honduras",
            HK: "Hong Kong SAR China",
            HU: "Hungary",
            IS: "Iceland",
            IN: "India",
            ID: "Indonesia",
            IR: "Iran",
            IQ: "Iraq",
            IE: "Ireland",
            IM: "Isle of Man",
            IL: "Israel",
            IT: "Italy",
            JM: "Jamaica",
            JP: "Japan",
            JE: "Jersey",
            JT: "Johnston Island",
            JO: "Jordan",
            KZ: "Kazakhstan",
            KE: "Kenya",
            KI: "Kiribati",
            KW: "Kuwait",
            KG: "Kyrgyzstan",
            LA: "Laos",
            LV: "Latvia",
            LB: "Lebanon",
            LS: "Lesotho",
            LR: "Liberia",
            LY: "Libya",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            MO: "Macau SAR China",
            MK: "Macedonia",
            MG: "Madagascar",
            MW: "Malawi",
            MY: "Malaysia",
            MV: "Maldives",
            ML: "Mali",
            MT: "Malta",
            MH: "Marshall Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MU: "Mauritius",
            YT: "Mayotte",
            FX: "Metropolitan France",
            MX: "Mexico",
            FM: "Micronesia",
            MI: "Midway Islands",
            MD: "Moldova",
            MC: "Monaco",
            MN: "Mongolia",
            ME: "Montenegro",
            MS: "Montserrat",
            MA: "Morocco",
            MZ: "Mozambique",
            MM: "Myanmar [Burma]",
            NA: "Namibia",
            NR: "Nauru",
            NP: "Nepal",
            NL: "Netherlands",
            AN: "Netherlands Antilles",
            NT: "Neutral Zone",
            NC: "New Caledonia",
            NZ: "New Zealand",
            NI: "Nicaragua",
            NE: "Niger",
            NG: "Nigeria",
            NU: "Niue",
            NF: "Norfolk Island",
            KP: "North Korea",
            VD: "North Vietnam",
            MP: "Northern Mariana Islands",
            NO: "Norway",
            OM: "Oman",
            PC: "Pacific Islands Trust Territory",
            PK: "Pakistan",
            PW: "Palau",
            PS: "Palestinian Territories",
            PA: "Panama",
            PZ: "Panama Canal Zone",
            PG: "Papua New Guinea",
            PY: "Paraguay",
            YD: "People's Democratic Republic of Yemen",
            PE: "Peru",
            PH: "Philippines",
            PN: "Pitcairn Islands",
            PL: "Poland",
            PT: "Portugal",
            PR: "Puerto Rico",
            QA: "Qatar",
            RO: "Romania",
            RU: "Russia",
            RW: "Rwanda",
            RE: "Réunion",
            BL: "Saint Barthélemy",
            SH: "Saint Helena",
            KN: "Saint Kitts and Nevis",
            LC: "Saint Lucia",
            MF: "Saint Martin",
            PM: "Saint Pierre and Miquelon",
            VC: "Saint Vincent and the Grenadines",
            WS: "Samoa",
            SM: "San Marino",
            SA: "Saudi Arabia",
            SN: "Senegal",
            RS: "Serbia",
            CS: "Serbia and Montenegro",
            SC: "Seychelles",
            SL: "Sierra Leone",
            SG: "Singapore",
            SK: "Slovakia",
            SI: "Slovenia",
            SB: "Solomon Islands",
            SO: "Somalia",
            ZA: "South Africa",
            GS: "South Georgia and the South Sandwich Islands",
            KR: "South Korea",
            ES: "Spain",
            LK: "Sri Lanka",
            SD: "Sudan",
            SR: "Suriname",
            SJ: "Svalbard and Jan Mayen",
            SZ: "Swaziland",
            SE: "Sweden",
            CH: "Switzerland",
            SY: "Syria",
            ST: "São Tomé and Príncipe",
            TW: "Taiwan",
            TJ: "Tajikistan",
            TZ: "Tanzania",
            TH: "Thailand",
            TL: "Timor-Leste",
            TG: "Togo",
            TK: "Tokelau",
            TO: "Tonga",
            TT: "Trinidad and Tobago",
            TN: "Tunisia",
            TR: "Turkey",
            TM: "Turkmenistan",
            TC: "Turks and Caicos Islands",
            TV: "Tuvalu",
            UM: "U.S. Minor Outlying Islands",
            PU: "U.S. Miscellaneous Pacific Islands",
            VI: "U.S. Virgin Islands",
            UG: "Uganda",
            UA: "Ukraine",
            SU: "Union of Soviet Socialist Republics",
            AE: "United Arab Emirates",
            GB: "United Kingdom",
            US: "United States",
            ZZ: "Unknown or Invalid Region",
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VU: "Vanuatu",
            VA: "Vatican City",
            VE: "Venezuela",
            VN: "Vietnam",
            WK: "Wake Island",
            WF: "Wallis and Futuna",
            EH: "Western Sahara",
            YE: "Yemen",
            ZM: "Zambia",
            ZW: "Zimbabwe",
            EU: "European Union"
        }, autocompleteArray = {
            countries: {},
            states: {},
            cities: {}
        }, autocompleteEvents = {}, dataLoader = function(e, o) {
            var t, a = e, i = null, n = [];
            this.load = function(e) {
                i ? e && e(i) : (e && n.push(e),
                t = t || $vbtJQ.getJSON(a, {}, function(e) {
                    var t;
                    for (e = e || {},
                    e = o ? o(e) : e,
                    i = e || {}; t = n.shift(); )
                        t(i)
                }))
            }
        }, vbtIpInfo = new function() {
            var t, o = null, a = [];
            this.load = function(e) {
                o ? e(o) : (a.push(e),
                t = t || ajaxGet("https://ipinfo.io/json", {}, function(e) {
                    var t;
                    for (o = e || {}; t = a.shift(); )
                        t(o)
                }))
            }
        }
        , Base64 = (is_array(_vbset) && _vbset.forEach(function(e) {
            (k = trim(e[0], "_"))in _vbsetData && (_vbsetData[k] = e[1])
        }),
        {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                var t, o, a, i, n, r, s = "", l = 0;
                for (e = Base64._utf8_encode(e); l < e.length; )
                    a = (t = e.charCodeAt(l++)) >> 2,
                    i = (3 & t) << 4 | (t = e.charCodeAt(l++)) >> 4,
                    n = (15 & t) << 2 | (o = e.charCodeAt(l++)) >> 6,
                    r = 63 & o,
                    isNaN(t) ? n = r = 64 : isNaN(o) && (r = 64),
                    s = s + Base64._keyStr.charAt(a) + Base64._keyStr.charAt(i) + Base64._keyStr.charAt(n) + Base64._keyStr.charAt(r);
                return s
            },
            decode: function(e) {
                var t, o, a, i, n, r, s = "", l = 0;
                for ((e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length % 4 != 0 && (e += "=".repeat(4 - e.length % 4)); l < e.length; )
                    a = Base64._keyStr.indexOf(e.charAt(l++)),
                    t = (15 & (i = Base64._keyStr.indexOf(e.charAt(l++)))) << 4 | (n = Base64._keyStr.indexOf(e.charAt(l++))) >> 2,
                    o = (3 & n) << 6 | (r = Base64._keyStr.indexOf(e.charAt(l++))),
                    s += String.fromCharCode(a << 2 | i >> 4),
                    64 != n && (s += String.fromCharCode(t)),
                    64 != r && (s += String.fromCharCode(o));
                return s = Base64._utf8_decode(s)
            },
            _utf8_encode: function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", o = 0; o < e.length; o++) {
                    var a = e.charCodeAt(o);
                    a < 128 ? t += String.fromCharCode(a) : t = 127 < a && a < 2048 ? (t += String.fromCharCode(a >> 6 | 192)) + String.fromCharCode(63 & a | 128) : (t = (t += String.fromCharCode(a >> 12 | 224)) + String.fromCharCode(a >> 6 & 63 | 128)) + String.fromCharCode(63 & a | 128)
                }
                return t
            },
            _utf8_decode: function(e) {
                var t, o = "", a = 0;
                for (c1 = c2 = 0; a < e.length; )
                    (t = e.charCodeAt(a)) < 128 ? (o += String.fromCharCode(t),
                    a++) : 191 < t && t < 224 ? (c2 = e.charCodeAt(a + 1),
                    o += String.fromCharCode((31 & t) << 6 | 63 & c2),
                    a += 2) : (c2 = e.charCodeAt(a + 1),
                    c3 = e.charCodeAt(a + 2),
                    o += String.fromCharCode((15 & t) << 12 | (63 & c2) << 6 | 63 & c3),
                    a += 3);
                return o
            }
        }), localStorageSupported = "undefined" != typeof Storage;
        function serialize(e) {
            if (e && "FORM" === e.nodeName) {
                for (var t, o = [], a = e.elements.length - 1; 0 <= a; a -= 1)
                    if ("" !== e.elements[a].name)
                        switch (e.elements[a].nodeName) {
                        case "INPUT":
                            switch (e.elements[a].type) {
                            case "text":
                            case "hidden":
                            case "password":
                            case "button":
                            case "reset":
                            case "submit":
                                o.push(e.elements[a].name + "=" + encodeURIComponent(e.elements[a].value));
                                break;
                            case "checkbox":
                            case "radio":
                                e.elements[a].checked && o.push(e.elements[a].name + "=" + encodeURIComponent(e.elements[a].value))
                            }
                            break;
                        case "TEXTAREA":
                            o.push(e.elements[a].name + "=" + encodeURIComponent(e.elements[a].value));
                            break;
                        case "SELECT":
                            switch (e.elements[a].type) {
                            case "select-one":
                                o.push(e.elements[a].name + "=" + encodeURIComponent(e.elements[a].value));
                                break;
                            case "select-multiple":
                                for (t = e.elements[a].options.length - 1; 0 <= t; t -= 1)
                                    e.elements[a].options[t].selected && o.push(e.elements[a].name + "=" + encodeURIComponent(e.elements[a].options[t].value))
                            }
                            break;
                        case "BUTTON":
                            switch (e.elements[a].type) {
                            case "reset":
                            case "submit":
                            case "button":
                                o.push(e.elements[a].name + "=" + encodeURIComponent(e.elements[a].value))
                            }
                        }
                return o.join("&")
            }
        }
        var isValidJSON = function(e) {
            if (0 !== String(e).length)
                try {
                    var t = JSON.parse(e);
                    if (t && "object" == typeof t && !(t instanceof Array))
                        return !0
                } catch (e) {}
            return !1
        };
        function tryParseJSON(e) {
            try {
                var t = JSON.parse(e);
                if (t && "object" == typeof t && null !== t)
                    return t
            } catch (e) {}
            return !1
        }
        var $vbtJQ, vbt_IsMobileDevice = function() {
            return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())
        };
        function vbt_GetParameterByName(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
            return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
        }
        function vbt_removeFromURL(e, t) {
            return e.replace(new RegExp("([?&])(" + t + ")=([^&]*)","gi"), function(e, t) {
                return "?" == t ? "?" : ""
            })
        }
        function nowYSMnowYDT(e) {
            "none" === window.getComputedStyle(e).display ? setTimeout(nowYSMnowYDT, 1e3, e) : e.setAttribute("src", e.getAttribute("src").replace(/[?&]rel=0/, "").replace(/[?&]autoplay=true/, ""))
        }
        function vbt_IsEmptyObject(e) {
            return 0 === Object.keys(e).length
        }
        function vbt_PopulateSubscriberInfo() {
            var e = new RegExp("[; ]__ssInfo=([^\\s;]*)")
              , e = (" " + document.cookie).match(e)
              , t = {};
            if (vbt_IsEmptyObject(t = e ? JSON.parse(Base64.decode(e[1])) : t))
                console.log("Information not exists, trying to get it..."),
                vbt_GetSubscriberInfo(!1);
            else
                for (var o in console.log("Information exists, trying to populate it..."),
                t)
                    "email" == o ? ((document.querySelectorAll(".form-control.email") || {}).value = t[o],
                    (document.querySelectorAll("[type=email]") || {}).value = t[o]) : (document.querySelector("#custom-" + o) || {}).value = t[o]
        }
        function vbt_GetSubscriberInfo(e) {
            var t, o, a, i, n;
            3477 != profileID && (i = new RegExp("[; ]__ssId=([^\\s;]*)"),
            t = 0,
            o = [],
            (n = (" " + document.cookie).match(i)) && (t = unescape(n[1])),
            i = new RegExp("[; ]__ssInfo=([^\\s;]*)"),
            (n = (" " + document.cookie).match(i)) && (o = unescape(n[1])),
            0 < parseInt(t)) && (0 == o.length || e) && (a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
            i = vbt_baseURL + "tracker/subscriber/info/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
            n = "userId=" + t,
            a.open("POST", i, !0),
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            a.onreadystatechange = function() {
                var e;
                4 == a.readyState && 200 == a.status && (data = JSON.parse(a.responseText),
                e = new Date((new Date).getTime() + 6048e5),
                document.cookie = "__ssInfo=" + Base64.encode(JSON.stringify(data.info)) + "; expires=" + e.toUTCString() + ";domain=" + _cookieDomain + ";path=" + _cookiePath,
                vbt_PopulateSubscriberInfo())
            }
            ,
            a.send(n))
        }
        function vbt_setCookie(e, t, o) {
            if (isNaN(o) || o < 0)
                return vbt_deleteCookie(e);
            o = new Date((new Date).getTime() + 3600 * o * 1e3).toUTCString();
            document.cookie = e + "=" + escape(t || "") + "; expires=" + o + ";domain=" + _cookieDomain + ";path=" + _cookiePath
        }
        function vbt_deleteCookie(e) {
            document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + _cookieDomain + ";path=" + _cookiePath
        }
        function vbt_getCookie(e) {
            e = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return e ? decodeURIComponent(e[1]) : void 0
        }
        function vbt_setLocalStorage(e, t) {
            if (localStorageSupported)
                try {
                    window.localStorage.setItem(e, t)
                } catch (e) {
                    return console.log("setStorage: Error setting key [" + key + "] in localStorage: " + JSON.stringify(e)),
                    !1
                }
        }
        function vbt_getLocalStorage(e) {
            if (localStorageSupported)
                try {
                    return window.localStorage.getItem(e)
                } catch (e) {
                    return console.log("getStorage: Error reading key [" + key + "] from localStorage: " + JSON.stringify(e)),
                    null
                }
        }
        function vbt_deleteLocalStorage(e) {
            if (localStorageSupported)
                try {
                    window.localStorage.removeItem(e)
                } catch (e) {
                    return console.log("removeStorage: Error removing key [" + key + "] from localStorage: " + JSON.stringify(e)),
                    !1
                }
        }
        function vbt_createElement(e, t, o, a) {
            var i = document.createElement(e);
            if (a)
                for (var n in a)
                    i.setAttribute(n, a[n]);
            return o && (i.innerHTML = o),
            t && t.appendChild(i),
            i
        }
        function vbt_getRandomInt(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }
        function vbt_getValueFromURL(e, t) {
            t = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
            return t ? decodeURIComponent(t[1]) : ""
        }
        function closestTag(e, t) {
            if (!t)
                return null;
            for (t = t.toUpperCase(t); !e.parentNode || e.parentNode.tagName != t; )
                if (!(e = e.parentNode))
                    return null;
            return e.parentNode
        }
        function getClosest(e, t, o) {
            for (var a = e; a && a !== document; a = a.parentNode)
                if (a.matches(t) && (!1 !== o || a != e))
                    return a;
            return null
        }
        function hasClass(e, t) {
            return e && -1 < (" " + e.className + " ").indexOf(" " + t + " ")
        }
        function vbt_matchUrl(e, t, o) {
            if ("" != t)
                if (e = e.toLowerCase().replace(/\/?$/, "/"),
                "1" == o) {
                    if (t == e || t == e.replace("https://", "https://www.") || t == e.replace("http://", "http://www."))
                        return !0
                } else if ("2" == o) {
                    if (e.indexOf("http://www.") || e.indexOf("https://www.")) {
                        if (-1 != e.indexOf(t.replace(/\/?$/, "")) || -1 != e.replace("http://www.", "http://").indexOf(t.replace(/\/?$/, "")) || -1 != e.replace("https://www.", "https://").indexOf(t.replace(/\/?$/, "")))
                            return !0
                    } else if (-1 != e.indexOf(t.replace(/\/?$/, "")) || -1 != e.replace("http://", "http://www.").indexOf(t.replace(/\/?$/, "")) || -1 != e.replace("https://", "https://www.").indexOf(t.replace(/\/?$/, "")))
                        return !0
                } else if ("3" == o) {
                    if (0 == e.indexOf(t) || 0 == e.replace("http://", "http://www.").indexOf(t) || 0 == e.replace("https://", "https://www.").indexOf(t))
                        return !0
                } else if (t == e.slice(-t.length) || t == e.replace("http://", "http://www.").slice(-t.length) || t == e.replace("https://", "https://www.").slice(-t.length))
                    return !0;
            return !1
        }
        function vbt_matchUrls___XX(e, t, o) {
            if (is_array(t)) {
                var a, i, n = document.createElement("a"), r = document.createElement("a");
                n.href = e;
                for (var s = (n.pathname + "" + n.search).toLowerCase(), l = 0, c = t.length; l < c; l++) {
                    if (o && empty(t[l].url))
                        return t[l];
                    switch (i = (0 === t[l].url.indexOf(n.host) ? (r.href = t[l].url.substring(n.host.length),
                    ltrim(r.pathname + "" + r.search, "/")) : 0 === t[l].url.indexOf("http://") || 0 === t[l].url.indexOf("https://") || 0 === t[l].url.indexOf("//") ? (r.href = t[l].url,
                    ltrim(r.pathname + "" + r.search, "/")) : t[l].url).toLowerCase(),
                    String(t[l].regex)) {
                    case "1":
                        a = trim(s, "/") == trim(i, "/");
                        break;
                    case "2":
                        a = -1 !== s.indexOf(i);
                        break;
                    case "3":
                        a = 0 === ltrim(s, "/").indexOf(ltrim(i, "/"));
                        break;
                    case "4":
                        a = -1 !== s.indexOf(e.url, s.length - i.length)
                    }
                    if (a)
                        return t[l]
                }
            }
            return !1
        }
        function addEventsListener(t, e, o) {
            t && e.split(" ").forEach(function(e) {
                empty(e) || t.addEventListener(e, o)
            })
        }
        function fireEvent(e, t, o=!0) {
            var a;
            "createEvent"in document ? ((a = document.createEvent("HTMLEvents")).initEvent(t, o, !0),
            e.dispatchEvent(a)) : e.fireEvent("on" + t)
        }
        function addDelegationEventsListener(t, o, e, a) {
            t && e.split(" ").forEach(function(e) {
                empty(e) || t.addEventListener(e, function(e) {
                    e.target && e.target.matches(o) && a.apply(e.target, arguments)
                })
            })
        }
        function vbt_getAjax(e, t) {
            var o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            t && (o.onreadystatechange = t),
            o.open("GET", e, !0),
            o.send(null)
        }
        function ajaxRequest(e, t, o, a, i) {
            var n;
            try {
                (n = "withCredentials"in (n = new (this.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0")) ? n : new XDomainRequest).open(e, t, 1),
                o instanceof FormData || n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                n.onreadystatechange = function() {
                    if (4 == n.readyState)
                        if ("200" == n.status) {
                            if ("function" == typeof a)
                                try {
                                    var e = JSON.parse(n.responseText);
                                    a(e)
                                } catch (e) {
                                    a({})
                                }
                        } else
                            "function" == typeof i && i(n)
                }
                ,
                n.send(o || null)
            } catch (e) {
                window.console && console.log(e)
            }
            return n
        }
        function ajaxGet(e, t, o, a) {
            return ajaxRequest("GET", (e += -1 < e.indexOf("?") ? "&" : "?") + formatParams(t), {}, o, a)
        }
        function ajaxPost(e, t, o, a) {
            return ajaxRequest("POST", e, formatParams(t), o, a)
        }
        function ajaxPostFormData(e, t, o, a) {
            return ajaxRequest("POST", e, getFormData(t, ""), o, a)
        }
        function formatParams(a) {
            return "object" != typeof a && (a = {}),
            Object.keys(a).map(function(e) {
                if ("object" != typeof a[e])
                    return e + "=" + a[e];
                var t, o = [];
                for (t in a[e])
                    o.push(e + "[" + t + "]=" + a[e][t]);
                return o.join("&")
            }).join("&")
        }
        function param(e) {
            if ("string" == typeof e)
                return e;
            var t, o = [];
            for (t in e)
                if (e.hasOwnProperty(t))
                    if ("object" == typeof e[t])
                        for (var a in e[t])
                            q.push(t + "[" + a + "]=" + encodeURI(e[t][a]));
                    else
                        o.push(t + "=" + encodeURI(e[t]));
            return o.join("&")
        }
        function vbt_matchUrls(e, t, o) {
            if (is_array(t)) {
                var a, i, n = document.createElement("a"), r = (document.createElement("a"),
                decodeURIComponent(e.toLowerCase()));
                0 === (r = (r = r.replace(/\&?\_\_vbtrk\=[a-zA-Z0-9\=]+/, "")).replace(/\&?\_uax\=[a-zA-Z0-9\=]+/, "")).indexOf("http://") ? r = r.substring(7) : 0 === r.indexOf("https://") && (r = r.substring(8)),
                0 === r.indexOf("www.") && (r = r.substring(4)),
                n.href = "http://" + r;
                for (var s = 0, l = t.length; s < l; s++) {
                    if (o && empty(t[s].url))
                        return t[s];
                    switch (0 === (i = t[s].url.toLowerCase()).indexOf("http://") ? i = i.substring(7) : 0 === i.indexOf("https://") && (i = i.substring(8)),
                    0 === i.indexOf("www.") && (i = i.substring(4)),
                    String(t[s].regex)) {
                    case "1":
                        a = (a = trim(r, "/") == trim(i, "/")) || trim(r, "/") == n.host + "/" + trim(i, "/");
                        break;
                    case "2":
                        a = -1 !== r.indexOf(i);
                        break;
                    case "3":
                        a = (a = 0 === ltrim(r, "/").indexOf(ltrim(i, "/"))) || 0 === ltrim(r, "/").indexOf(n.host + "/" + ltrim(i, "/"));
                        break;
                    case "4":
                        a = -1 !== r.indexOf(e.url, r.length - i.length)
                    }
                    if (a)
                        return t[s]
                }
            }
            return !1
        }
        function empty(e) {
            for (var t, o = [void 0, null, !1, 0, "", "0"], a = 0, i = o.length; a < i; a++)
                if (e === o[a])
                    return !0;
            if ("object" != typeof e)
                return !1;
            for (t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }
        function trim(e, t) {
            var o, a = 0, i = 0;
            for (e += "",
            o = t ? (t += "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1") : " \n\r\t\f\v            ​\u2028\u2029　",
            a = e.length,
            i = 0; i < a; i++)
                if (-1 === o.indexOf(e.charAt(i))) {
                    e = e.substring(i);
                    break
                }
            for (i = (a = e.length) - 1; 0 <= i; i--)
                if (-1 === o.indexOf(e.charAt(i))) {
                    e = e.substring(0, i + 1);
                    break
                }
            return -1 === o.indexOf(e.charAt(0)) ? e : ""
        }
        function ltrim(e, t) {
            t = t ? (t + "").replace(/([[\]().?/*{}+$^:])/g, "$1") : " \\s ";
            t = new RegExp("^[" + t + "]+","g");
            return (e + "").replace(t, "")
        }
        function is_array(e) {
            if (e && "object" == typeof e) {
                if (function(e) {
                    var t;
                    if (e && "object" == typeof e && "number" == typeof e.length)
                        return t = e.length,
                        e[e.length] = "bogus",
                        t !== e.length ? (--e.length,
                        1) : (delete e[e.length],
                        0)
                }(e))
                    return !0;
                if ("on" === (("undefined" != typeof require ? require("../info/ini_get")("locutus.objectsAsArrays") : void 0) || "on")) {
                    var t = Object.prototype.toString.call(e)
                      , e = (e = e.constructor,
                    (e = /\W*function\s+([\w$]+)\s*\(/.exec(e)) ? e[1] : "(Anonymous)");
                    if ("[object Object]" === t && "Object" === e)
                        return !0
                }
            }
            return !1
        }
        function in_array(e, t) {
            var o = "";
            for (o in t)
                if (t[o] == e)
                    return !0;
            return !1
        }
        function ifElement(e, t) {
            return !!e.querySelector(t)
        }
        function foreach(e, t, o) {
            var a = !1;
            if ("function" == typeof o)
                for (var i = e.querySelectorAll(t), n = 0, r = i.length; n < r; n++)
                    if (!(a = !0) === o.call(i[n])) {
                        a = !1;
                        break
                    }
            return a
        }
        function vbt_attachEvent(e, t, o, a) {
            return e.attachEvent ? e.attachEvent("on" + t, o, a || !1) : e.addEventListener(t, o)
        }
        function vbt_loadJs(e, t) {
            var o = document.createElement("script");
            o.loaded = !1,
            o.setAttribute("src", e),
            o.setAttribute("type", "text/javascript");
            o.onload = function() {
                o.loaded || (o.loaded = !0,
                "function" == typeof t && t(o))
            }
            ,
            o.onreadystatechange = function() {
                "complete" != this.readyState && "loaded" != this.readyState || o.loaded || (o.loaded = !0,
                "function" == typeof t && t(o))
            }
            ,
            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(o)
        }
        function vbt_loadStyle(e, t) {
            var o = document.createElement("link");
            o.loaded = !1,
            o.setAttribute("href", e),
            o.setAttribute("type", "text/css"),
            o.setAttribute("rel", "stylesheet");
            o.onload = function() {
                o.loaded || (o.loaded = !0,
                "function" == typeof t && t(o))
            }
            ,
            o.onreadystatechange = function() {
                "complete" != this.readyState && "loaded" != this.readyState || o.loaded || (o.loaded = !0,
                "function" == typeof t && t(o))
            }
            ,
            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(o)
        }
        var visitor = {}
          , visitorTrackInfo = {}
          , intlTelQueue = []
          , actionAlreadySent = !1
          , _jqueryAlreadyLoaded = !(_vbset.setVal = function(e) {
            var t, e = e || [];
            e instanceof Array && (t = new Date((new Date).getTime() + 6048e5),
            document.cookie = "__vbvar__" + e[0] + "=" + escape(e[1]) + "; expires=" + t.toUTCString() + ";domain=" + _cookieDomain + ";path=" + _cookiePath)
        }
        )
          , _jqueryCurrentVersion = "0.0"
          , _uniquePagesTracking = []
          , regUrlDomain = /:\/\/(.[^/]+)/
          , regUrlPath = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/
          , _cookieDomain = _vbTrackDomain.match(regUrlDomain)[1]
          , _cookiePath = (_cookieDomain = "." + (_cookieDomain = _cookieDomain.replace(new RegExp(/^www\./i), "")),
        "/")
          , _forceCustomViewPage = !1
          , _customViewPage = document.URL;
        if (1191 != domainID)
            try {
                _cookiePath = _vbTrackDomain.match(regUrlPath)[1]
            } catch (e) {}
        var heat_data, scrollheat_data, scrollTimeout, scrollheatSending, heatDrawingTimer, scrollheatDrawingTimer, heat, _actionsQueue = [], _actionInProgress = !1, _actionExitExec = [], _actionMiddleQueue = [], _actionEndQueue = [], __funnelAddActionTimer = null, __GLOBAL__TIMER = null, __GLOBAL__TIMER_FLAG = 0, filterDevice = 0, forceSSID = !0;
        try {
            __ssId
        } catch (e) {
            "ReferenceError" == e.name && (forceSSID = !1)
        }
        forceSSID && void 0 !== __ssId && null !== __ssId && (vbt_setCookie("__ssId", __ssId, 168),
        console.log("Subscriber Founded.")),
        isHeatmapEnabled && (heat_data = [],
        scrollheatSending = !(scrollheat_data = []),
        heat = scrollheatDrawingTimer = heatDrawingTimer = scrollTimeout = null);
        var clickmap_active = !1
          , heatmap_active = !1
          , scrollmap_active = !1
          , clickmap_loading = !1
          , heatmap_loading = !1
          , scrollmap_loading = !1
          , isMappingFlagEnabled = !1
          , mapping = vbt_getValueFromURL(location.href, "mapping");
        if (mapping)
            try {
                var mapString = Base64.decode(mapping);
                if ((mapString = JSON.parse(mapString.replace(/}.*/, "") + "}"))._account == _vbsetData.account) {
                    for (var isMappingFlagEnabled = !0, filterDevice = __checkIfMobileDevice() ? 1 : mapString._device, tAnchors = document.getElementsByTagName("a"), numAnchors = tAnchors.length, i = 0; i < numAnchors; i++) {
                        var href = tAnchors[i].getAttribute("href");
                        href && (href += (href.match(/\?/) ? "&" : "?") + "mapping=" + mapping,
                        tAnchors[i].setAttribute("href", href))
                    }
                    console.log("filter: activated")
                } else
                    console.log("filter: not activated ... prb: domain mistmatch!")
            } catch (e) {
                console.log("filter: not activated ... prb: code error!"),
                console.log(e),
                console.log(vbt_GetParameterByName("mapping")),
                console.log(Base64.decode(vbt_GetParameterByName("mapping"))),
                console.log(mapString)
            }
        _vbset.forEach(function(e) {
            var t;
            "__vbvar__" == e[0] && ("_listID" == e[1][0] ? (t = new Date((new Date).getTime() + 6048e5),
            document.cookie = "__vbset__list=" + escape(e[1][1]) + "; expires=" + t.toUTCString() + ";domain=" + _cookieDomain + ";path=" + _cookiePath) : /^\_email(\-[0-9]+)?$/i.test(e[1][0]) && (t = new Date((new Date).getTime() + 6048e5),
            document.cookie = "__vbset__email=" + escape(e[1][1]) + "; expires=" + t.toUTCString() + ";domain=" + _cookieDomain + ";path=" + _cookiePath))
        });
        var _actionsBank = {};
        function versionCompare(e, t) {
            e = e.split("."),
            t = t.split(".");
            var o, a, i = Math.max(e.length, t.length);
            console.log("a", e),
            console.log("b", t),
            console.log("max", i);
            for (var n = 0; n < i; n++) {
                if (o = ~~e[n] || 0,
                a = ~~t[n] || 0,
                console.log("ai - bi", o, a),
                a < o)
                    return 1;
                if (o < a)
                    return -1
            }
            return 0
        }
        function loadJQueryMigrate() {
            try {
                if (0 === (jQuery.fn.jquery + "").indexOf("3"))
                    void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
                    J = function(s, a) {
                        "use strict";
                        function l(e) {
                            var t = a.console;
                            o[e] || (o[e] = !0,
                            s.migrateWarnings.push(e),
                            t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e),
                            s.migrateTrace) && t.trace && t.trace())
                        }
                        function e(e, t, o, a) {
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return l(a),
                                    o
                                },
                                set: function(e) {
                                    l(a),
                                    o = e
                                }
                            })
                        }
                        function t(e, t, o, a) {
                            e[t] = function() {
                                return l(a),
                                o.apply(this, arguments)
                            }
                        }
                        s.migrateVersion = "3.0.1",
                        a.console && a.console.log && (s && !/^[12]\./.test(s.fn.jquery) || a.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
                        s.migrateWarnings && a.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
                        a.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
                        var o = {};
                        s.migrateWarnings = [],
                        void 0 === s.migrateTrace && (s.migrateTrace = !0),
                        s.migrateReset = function() {
                            o = {},
                            s.migrateWarnings.length = 0
                        }
                        ,
                        "BackCompat" === a.document.compatMode && l("jQuery is not compatible with Quirks Mode");
                        var i, n = s.fn.init, r = s.isNumeric, c = s.find, d = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, p = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
                        for (i in s.fn.init = function(e) {
                            var t = Array.prototype.slice.call(arguments);
                            return "string" == typeof e && "#" === e && (l("jQuery( '#' ) is not a valid selector"),
                            t[0] = []),
                            n.apply(this, t)
                        }
                        ,
                        s.fn.init.prototype = s.fn,
                        s.find = function(t) {
                            var o = Array.prototype.slice.call(arguments);
                            if ("string" == typeof t && d.test(t))
                                try {
                                    a.document.querySelector(t)
                                } catch (e) {
                                    t = t.replace(p, function(e, t, o, a) {
                                        return "[" + t + o + '"' + a + '"]'
                                    });
                                    try {
                                        a.document.querySelector(t),
                                        l("Attribute selector with '#' must be quoted: " + o[0]),
                                        o[0] = t
                                    } catch (t) {
                                        l("Attribute selector with '#' was not fixed: " + o[0])
                                    }
                                }
                            return c.apply(this, o)
                        }
                        ,
                        c)
                            Object.prototype.hasOwnProperty.call(c, i) && (s.find[i] = c[i]);
                        s.fn.size = function() {
                            return l("jQuery.fn.size() is deprecated and removed; use the .length property"),
                            this.length
                        }
                        ,
                        s.parseJSON = function() {
                            return l("jQuery.parseJSON is deprecated; use JSON.parse"),
                            JSON.parse.apply(null, arguments)
                        }
                        ,
                        s.isNumeric = function(e) {
                            var t, o = r(e), e = (t = (e = e) && e.toString(),
                            !s.isArray(e) && 0 <= t - parseFloat(t) + 1);
                            return o !== e && l("jQuery.isNumeric() should not be called on constructed objects"),
                            e
                        }
                        ,
                        t(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
                        t(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
                        e(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
                        e(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
                        function u(e) {
                            return e
                        }
                        var v = s.ajax
                          , b = (s.ajax = function() {
                            var e = v.apply(this, arguments);
                            return e.promise && (t(e, "success", e.done, "jQXHR.success is deprecated and removed"),
                            t(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
                            t(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
                            e
                        }
                        ,
                        s.fn.removeAttr)
                          , f = s.fn.toggleClass
                          , m = /\S+/g
                          , h = (s.fn.removeAttr = function(e) {
                            var o = this;
                            return s.each(e.match(m), function(e, t) {
                                s.expr.match.bool.test(t) && (l("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
                                o.prop(t, !1))
                            }),
                            b.apply(this, arguments)
                        }
                        ,
                        !(s.fn.toggleClass = function(t) {
                            return void 0 !== t && "boolean" != typeof t ? f.apply(this, arguments) : (l("jQuery.fn.toggleClass( boolean ) is deprecated"),
                            this.each(function() {
                                var e = this.getAttribute && this.getAttribute("class") || "";
                                e && s.data(this, "__className__", e),
                                this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
                            }))
                        }
                        ))
                          , g = (s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
                            var o = s.cssHooks[t] && s.cssHooks[t].get;
                            o && (s.cssHooks[t].get = function() {
                                var e;
                                return h = !0,
                                e = o.apply(this, arguments),
                                h = !1,
                                e
                            }
                            )
                        }),
                        s.swap = function(e, t, o, a) {
                            var i, n = {};
                            for (i in h || l("jQuery.swap() is undocumented and deprecated"),
                            t)
                                n[i] = e.style[i],
                                e.style[i] = t[i];
                            for (i in o = o.apply(e, a || []),
                            t)
                                e.style[i] = n[i];
                            return o
                        }
                        ,
                        s.data)
                          , _ = (s.data = function(e, t, o) {
                            if (t && "object" == typeof t && 2 === arguments.length) {
                                var a, i = s.hasData(e) && g.call(this, e), n = {};
                                for (a in t)
                                    a !== s.camelCase(a) ? (l("jQuery.data() always sets/gets camelCased names: " + a),
                                    i[a] = t[a]) : n[a] = t[a];
                                return g.call(this, e, n),
                                t
                            }
                            return t && "string" == typeof t && t !== s.camelCase(t) && (i = s.hasData(e) && g.call(this, e)) && t in i ? (l("jQuery.data() always sets/get
                vbt_getCookie("__ssId"))
                  , o = (e ? (this.ssId = e,
                vbt_GetSubscriberInfo(!o),
                console.log("Subscriber ID Y:" + e)) : (this.ssId = 0,
                this.vbtTrack ? (o = (o = Base64.decode(this.vbtTrack)).split(":")[1],
                this.ssId = o,
                vbt_setCookie("__ssId", this.ssId, 168),
                vbt_GetSubscriberInfo(!0)) : track_contact_id && 0 < track_contact_id && (this.ssId = track_contact_id,
                vbt_setCookie("__ssId", this.ssId, 168),
                vbt_GetSubscriberInfo(!0)),
                console.log("Subscriber ID N:" + e)),
                this._sessionId = vbt_getCookie("__vbsess"),
                this._sessionId || (this._sessionId = _vbSessionId,
                vbt_setCookie("__vbsess", this._sessionId, 168)),
                vbt_getCookie("__vbupage") || "");
                _uniquePagesTracking = empty(o) ? [] : o.split(","),
                this.__ukey = this.getUniqueKey(),
                isMappingFlagEnabled ? vbt_showMappingTools() : (vbt_loadStyle("https://app.vbout.com/css/vbtracker.min.css?v=1.0.5"),
                vbt_loadStyle("https://app.vbout.com/trackerjs/tracker-compressed-nofancybox.css"),
                isHeatmapEnabled && vbt_execHeatmap(this.ip, this.country),
                isWebhookEnabled && this._buildWebhooks(),
                isGoalEnabled && this._buildGoals())
            },
            process: function(e, t) {
                isMappingFlagEnabled || (e && (this.page = e,
                this.pageWTparams = e.split("?")[0]),
                void 0 === e && null === e || (this.__ukey = this.getUniqueKey()),
                null != t && (this._referrerUrl = t),
                e = (e = (e = this.page.toLowerCase()).replace(/\&?\_\_vbtrk\=[a-zA-Z0-9\=]+/, "")).replace(/\&?\_uax\=[a-zA-Z0-9\=]+/, ""),
                5 < _uniquePagesTracking.length && (vbt_deleteCookie("__vbupage"),
                _uniquePagesTracking = []),
                -1 == _uniquePagesTracking.indexOf(e) && (_uniquePagesTracking.push(e),
                vbt_setCookie("__vbupage", _uniquePagesTracking.join(","), 168)),
                this.visitorProcessTracker())
            },
            execTracker: function() {s camelCased names: " + t),
                            2 < arguments.length && (i[t] = o),
                            i[t]) : g.apply(this, arguments)
                        }
                        ,
                        s.Tween.prototype.run)
                          , y = (s.Tween.prototype.run = function() {
                            1 < s.easing[this.easing].length && (l("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
                            s.easing[this.easing] = u),
                            _.apply(this, arguments)
                        }
                        ,
                        s.fx.interval = s.fx.interval || 13,
                        a.requestAnimationFrame && e(s.fx, "interval", s.fx.interval, "jQuery.fx.interval is deprecated"),
                        s.fn.load)
                          , k = s.event.add
                          , x = s.event.fix
                          , w = (s.event.props = [],
                        s.event.fixHooks = {},
                        e(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
                        s.event.fix = function(e) {
                            var t = e.type
                              , o = this.fixHooks[t]
                              , a = s.event.props;
                            if (a.length)
                                for (l("jQuery.event.props are deprecated and removed: " + a.join()); a.length; )
                                    s.event.addProp(a.pop());
                            if (o && !o._migrated_ && (o._migrated_ = !0,
                            l("jQuery.event.fixHooks are deprecated and removed: " + t),
                            a = o.props) && a.length)
                                for (; a.length; )
                                    s.event.addProp(a.pop());
                            return t = x.call(this, e),
                            o && o.filter ? o.filter(t, e) : t
                        }
                        ,
                        s.event.add = function(e, t) {
                            return e === a && "load" === t && "complete" === a.document.readyState && l("jQuery(window).on('load'...) called after load event occurred"),
                            k.apply(this, arguments)
                        }
                        ,
                        s.each(["load", "unload", "error"], function(e, t) {
                            s.fn[t] = function() {
                                var e = Array.prototype.slice.call(arguments, 0);
                                return "load" === t && "string" == typeof e[0] ? y.apply(this, e) : (l("jQuery.fn." + t + "() is deprecated"),
                                e.splice(0, 0, t),
                                arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
                                this))
                            }
                        }),
                        s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, o) {
                            s.fn[o] = function(e, t) {
                                return l("jQuery.fn." + o + "() event shorthand is deprecated"),
                                0 < arguments.length ? this.on(o, null, e, t) : this.trigger(o)
                            }
                        }),
                        s(function() {
                            s(a.document).triggerHandler("ready")
                        }),
                        s.event.special.ready = {
                            setup: function() {
                                this === a.document && l("'ready' event is deprecated")
                            }
                        },
                        s.fn.extend({
                            bind: function(e, t, o) {
                                return l("jQuery.fn.bind() is deprecated"),
                                this.on(e, null, t, o)
                            },
                            unbind: function(e, t) {
                                return l("jQuery.fn.unbind() is deprecated"),
                                this.off(e, null, t)
                            },
                            delegate: function(e, t, o, a) {
                                return l("jQuery.fn.delegate() is deprecated"),
                                this.on(t, e, o, a)
                            },
                            undelegate: function(e, t, o) {
                                return l("jQuery.fn.undelegate() is deprecated"),
                                1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", o)
                            },
                            hover: function(e, t) {
                                return l("jQuery.fn.hover() is deprecated"),
                                this.on("mouseenter", e).on("mouseleave", t || e)
                            }
                        }),
                        s.fn.offset)
                          , T = (s.fn.offset = function() {
                            var e, t = this[0], o = {
                                top: 0,
                                left: 0
                            };
                            return t && t.nodeType ? (e = (t.ownerDocument || a.document).documentElement,
                            s.contains(e, t) ? w.apply(this, arguments) : (l("jQuery.fn.offset() requires an element connected to a document"),
                            o)) : (l("jQuery.fn.offset() requires a valid DOM element"),
                            o)
                        }
                        ,
                        s.param)
                          , I = (s.param = function(e, t) {
                            var o = s.ajaxSettings && s.ajaxSettings.traditional;
                            return void 0 === t && o && (l("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
                            t = o),
                            T.call(this, e, t)
                        }
                        ,
                        s.fn.andSelf || s.fn.addBack)
                          , C = (s.fn.andSelf = function() {
                            return l("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
                            I.apply(this, arguments)
                        }
                        ,
                        s.Deferred)
                          , A = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]];
                        return s.Deferred = function(e) {
                            var n = C()
                              , r = n.promise();
                            return n.pipe = r.pipe = function() {
                                var i = arguments;
                                return l("deferred.pipe() is deprecated"),
                                s.Deferred(function(a) {
                                    s.each(A, function(e, t) {
                                        var o = s.isFunction(i[e]) && i[e];
                                        n[t[1]](function() {
                                            var e = o && o.apply(this, arguments);
                                            e && s.isFunction(e.promise) ? e.promise().done(a.resolve).fail(a.reject).progress(a.notify) : a[t[0] + "With"](this === r ? a.promise() : this, o ? [e] : arguments)
                                        })
                                    }),
                                    i = null
                                }).promise()
                            }
                            ,
                            e && e.call(n, n),
                            n
                        }
                        ,
                        s.Deferred.exceptionHook = C.exceptionHook,
                        s
                    }
                    ,
                    "function" == typeof define && define.amd ? define(["jquery"], window, J) : "object" == typeof module && module.exports ? module.exports = J(require("jquery"), window) : J(jQuery, window);
                else {
                    void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0);
                    var l = jQuery
                      , o = window
                      , r = void 0;
                    function c(e) {
                        var t = o.console;
                        a[e] || (a[e] = !0,
                        l.migrateWarnings.push(e),
                        t && t.warn && !l.migrateMute && (t.warn("JQMIGRATE: " + e),
                        l.migrateTrace) && t.trace && t.trace())
                    }
                    function e(e, t, o, a) {
                        if (Object.defineProperty)
                            try {
                                return Object.defineProperty(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function() {
                                        return c(a),
                                        o
                                    },
                                    set: function(e) {
                                        c(a),
                                        o = e
                                    }
                                })
                            } catch (e) {}
                        l._definePropertyBroken = !0,
                        e[t] = o
                    }
                    l.migrateVersion = "1.4.1";
                    var a = {}
                      , s = (l.migrateWarnings = [],
                    o.console && o.console.log && o.console.log("JQMIGRATE: Migrate is installed" + (l.migrateMute ? "" : " with logging active") + ", version " + l.migrateVersion),
                    l.migrateTrace === r && (l.migrateTrace = !0),
                    l.migrateReset = function() {
                        a = {},
                        l.migrateWarnings.length = 0
                    }
                    ,
                    "BackCompat" === document.compatMode && c("jQuery is not compatible with Quirks Mode"),
                    l("<input/>", {
                        size: 1
                    }).attr("size") && l.attrFn)
                      , d = l.attr
                      , i = l.attrHooks.value && l.attrHooks.value.get || function() {
                        return null
                    }
                      , n = l.attrHooks.value && l.attrHooks.value.set || function() {
                        return r
                    }
                      , p = /^(?:input|button)$/i
                      , u = /^[238]$/
                      , v = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
                      , b = /^(?:checked|selected)$/i;
                    e(l, "attrFn", s || {}, "jQuery.attrFn is deprecated"),
                    l.attr = function(e, t, o, a) {
                        var i = t.toLowerCase()
                          , n = e && e.nodeType;
                        return a && (d.length < 4 && c("jQuery.fn.attr( props, pass ) is deprecated"),
                        e) && !u.test(n) && (s ? t in s : l.isFunction(l.fn[t])) ? l(e)[t](o) : ("type" === t && o !== r && p.test(e.nodeName) && e.parentNode && c("Can't change the 'type' of an input or button in IE 6/7/8"),
                        !l.attrHooks[i] && v.test(i) && (l.attrHooks[i] = {
                            get: function(e, t) {
                                var o = l.prop(e, t);
                                return !0 === o || "boolean" != typeof o && (o = e.getAttributeNode(t)) && !1 !== o.nodeValue ? t.toLowerCase() : r
                            },
                            set: function(e, t, o) {
                                return !1 === t ? l.removeAttr(e, o) : ((t = l.propFix[o] || o)in e && (e[t] = !0),
                                e.setAttribute(o, o.toLowerCase())),
                                o
                            }
                        },
                        b.test(i)) && c("jQuery.fn.attr('" + i + "') might use property instead of attribute"),
                        d.call(l, e, t, o))
                    }
                    ,
                    l.attrHooks.value = {
                        get: function(e, t) {
                            var o = (e.nodeName || "").toLowerCase();
                            return "button" === o ? i.apply(this, arguments) : ("input" !== o && "option" !== o && c("jQuery.fn.attr('value') no longer gets properties"),
                            t in e ? e.value : null)
                        },
                        set: function(e, t) {
                            var o = (e.nodeName || "").toLowerCase();
                            return "button" === o ? n.apply(this, arguments) : ("input" !== o && "option" !== o && c("jQuery.fn.attr('value', val) no longer sets properties"),
                            void (e.value = t))
                        }
                    };
                    var t, f, m = l.fn.init, h = l.find, g = l.parseJSON, _ = /^\s*</, y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, k = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, x = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
                    for (f in l.fn.init = function(e, t, o) {
                        var a;
                        return e && "string" == typeof e && !l.isPlainObject(t) && (a = x.exec(l.trim(e))) && a[0] && (_.test(e) || c("$(html) HTML strings must start with '<' character"),
                        a[3] && c("$(html) HTML text after last tag is ignored"),
                        "#" === a[0].charAt(0) && (c("HTML string cannot start with a '#' character"),
                        l.error("JQMIGRATE: Invalid selector string (XSS)")),
                        t && t.context && t.context.nodeType && (t = t.context),
                        l.parseHTML) ? m.call(this, l.parseHTML(a[2], t && t.ownerDocument || t || document, !0), t, o) : (a = m.apply(this, arguments),
                        e && e.selector !== r ? (a.selector = e.selector,
                        a.context = e.context) : (a.selector = "string" == typeof e ? e : "",
                        e && (a.context = e.nodeType ? e : t || document)),
                        a)
                    }
                    ,
                    l.fn.init.prototype = l.fn,
                    l.find = function(t) {
                        var o = Array.prototype.slice.call(arguments);
                        if ("string" == typeof t && y.test(t))
                            try {
                                document.querySelector(t)
                            } catch (e) {
                                t = t.replace(k, function(e, t, o, a) {
                                    return "[" + t + o + '"' + a + '"]'
                                });
                                try {
                                    document.querySelector(t),
                                    c("Attribute selector with '#' must be quoted: " + o[0]),
                                    o[0] = t
                                } catch (e) {
                                    c("Attribute selector with '#' was not fixed: " + o[0])
                                }
                            }
                        return h.apply(this, o)
                    }
                    ,
                    h)
                        Object.prototype.hasOwnProperty.call(h, f) && (l.find[f] = h[f]);
                    function w(e) {
                        return "string" != typeof e || l.event.special.hover ? e : (j.test(e) && c("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),
                        e && e.replace(j, "mouseenter$1 mouseleave$1"))
                    }
                    l.parseJSON = function(e) {
                        return e ? g.apply(this, arguments) : (c("jQuery.parseJSON requires a valid JSON string"),
                        null)
                    }
                    ,
                    l.uaMatch = function(e) {
                        e = e.toLowerCase();
                        e = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                        return {
                            browser: e[1] || "",
                            version: e[2] || "0"
                        }
                    }
                    ,
                    l.browser || (t = {},
                    (L = l.uaMatch(navigator.userAgent)).browser && (t[L.browser] = !0,
                    t.version = L.version),
                    t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0),
                    l.browser = t),
                    e(l, "browser", l.browser, "jQuery.browser is deprecated"),
                    l.boxModel = l.support.boxModel = "CSS1Compat" === document.compatMode,
                    e(l, "boxModel", l.boxModel, "jQuery.boxModel is deprecated"),
                    e(l.support, "boxModel", l.support.boxModel, "jQuery.support.boxModel is deprecated"),
                    l.sub = function() {
                        function o(e, t) {
                            return new o.fn.init(e,t)
                        }
                        l.extend(!0, o, this),
                        o.superclass = this,
                        o.fn = o.prototype = this(),
                        (o.fn.constructor = o).sub = this.sub,
                        o.fn.init = function(e, t) {
                            e = l.fn.init.call(this, e, t, a);
                            return e instanceof o ? e : o(e)
                        }
                        ,
                        o.fn.init.prototype = o.fn;
                        var a = o(document);
                        return c("jQuery.sub() is deprecated"),
                        o
                    }
                    ;
                    var T, I, C = !(l.fn.size = function() {
                        return c("jQuery.fn.size() is deprecated; use the .length property"),
                        this.length
                    }
                    ), A = (l.swap && l.each(["height", "width", "reliableMarginRight"], function(e, t) {
                        var o = l.cssHooks[t] && l.cssHooks[t].get;
                        o && (l.cssHooks[t].get = function() {
                            var e;
                            return C = !0,
                            e = o.apply(this, arguments),
                            C = !1,
                            e
                        }
                        )
                    }),
                    l.swap = function(e, t, o, a) {
                        var i, n = {};
                        for (i in C || c("jQuery.swap() is undocumented and deprecated"),
                        t)
                            n[i] = e.style[i],
                            e.style[i] = t[i];
                        for (i in o = o.apply(e, a || []),
                        t)
                            e.style[i] = n[i];
                        return o
                    }
                    ,
                    l.ajaxSetup({
                        converters: {
                            "text json": l.parseJSON
                        }
                    }),
                    l.fn.data), S = (l.fn.data = function(e) {
                        var t, o = this[0];
                        return o && "events" === e && 1 === arguments.length && (t = l.data(o, e),
                        o = l._data(o, e),
                        t === r || t === o) && o !== r ? (c("Use of jQuery.fn.data('events') is deprecated"),
                        o) : A.apply(this, arguments)
                    }
                    ,
                    /\/(java|ecma)script/i), E = (l.clean || (l.clean = function(e, t, o, a) {
                        t = (t = !(t = t || document).nodeType && t[0] || t).ownerDocument || t,
                        c("jQuery.clean() is deprecated");
                        var i, n, r, s = [];
                        if (l.merge(s, l.buildFragment(e, t).childNodes),
                        o)
                            for (n = function(e) {
                                return !e.type || S.test(e.type) ? a ? a.push(e.parentNode ? e.parentNode.removeChild(e) : e) : o.appendChild(e) : void 0
                            }
                            ,
                            i = 0; null != (r = s[i]); i++)
                                l.nodeName(r, "script") && n(r) || (o.appendChild(r),
                                void 0 !== r.getElementsByTagName && (r = l.grep(l.merge([], r.getElementsByTagName("script")), n),
                                s.splice.apply(s, [i + 1, 0].concat(r)),
                                i += r.length));
                        return s
                    }
                    ),
                    l.event.add), $ = l.event.remove, P = l.event.trigger, R = l.fn.toggle, M = l.fn.live, Q = l.fn.die, D = l.fn.load, L = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", F = new RegExp("\\b(?:" + L + ")\\b"), j = /(?:^|\s)hover(\.\S+|)\b/, O = (l.event.props && "attrChange" !== l.event.props[0] && l.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
                    l.event.dispatch && e(l.event, "handle", l.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
                    l.event.add = function(e, t, o, a, i) {
                        e !== document && F.test(t) && c("AJAX events should be attached to document: " + t),
                        E.call(this, e, w(t || ""), o, a, i)
                    }
                    ,
                    l.event.remove = function(e, t, o, a, i) {
                        $.call(this, e, w(t) || "", o, a, i)
                    }
                    ,
                    l.each(["load", "unload", "error"], function(e, t) {
                        l.fn[t] = function() {
                            var e = Array.prototype.slice.call(arguments, 0);
                            return "load" === t && "string" == typeof e[0] ? D.apply(this, e) : (c("jQuery.fn." + t + "() is deprecated"),
                            e.splice(0, 0, t),
                            arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e),
                            this))
                        }
                    }),
                    l.fn.toggle = function(o, e) {
                        if (!l.isFunction(o) || !l.isFunction(e))
                            return R.apply(this, arguments);
                        c("jQuery.fn.toggle(handler, handler...) is deprecated");
                        function t(e) {
                            var t = (l._data(this, "lastToggle" + o.guid) || 0) % n;
                            return l._data(this, "lastToggle" + o.guid, 1 + t),
                            e.preventDefault(),
                            a[t].apply(this, arguments) || !1
                        }
                        var a = arguments
                          , i = o.guid || l.guid++
                          , n = 0;
                        for (t.guid = i; n < a.length; )
                            a[n++].guid = i;
                        return this.click(t)
                    }
                    ,
                    l.fn.live = function(e, t, o) {
                        return c("jQuery.fn.live() is deprecated"),
                        M ? M.apply(this, arguments) : (l(this.context).on(e, this.selector, t, o),
                        this)
                    }
                    ,
                    l.fn.die = function(e, t) {
                        return c("jQuery.fn.die() is deprecated"),
                        Q ? Q.apply(this, arguments) : (l(this.context).off(e, this.selector || "**", t),
                        this)
                    }
                    ,
                    l.event.trigger = function(e, t, o, a) {
                        return o || F.test(e) || c("Global events are undocumented and deprecated"),
                        P.call(this, e, t, o || document, a)
                    }
                    ,
                    l.each(L.split("|"), function(e, t) {
                        l.event.special[t] = {
                            setup: function() {
                                var e = this;
                                return e !== document && (l.event.add(document, t + "." + l.guid, function() {
                                    l.event.trigger(t, Array.prototype.slice.call(arguments, 1), e, !0)
                                }),
                                l._data(this, t, l.guid++)),
                                !1
                            },
                            teardown: function() {
                                return this !== document && l.event.remove(document, t + "." + l._data(this, t)),
                                !1
                            }
                        }
                    }),
                    l.event.special.ready = {
                        setup: function() {
                            this === document && c("'ready' event is deprecated")
                        }
                    },
                    l.fn.andSelf || l.fn.addBack), N = l.fn.find;
                    l.fn.andSelf = function() {
                        return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
                        O.apply(this, arguments)
                    }
                    ,
                    l.fn.find = function(e) {
                        var t = N.apply(this, arguments);
                        return t.context = this.context,
                        t.selector = this.selector ? this.selector + " " + e : e,
                        t
                    }
                    ,
                    l.Callbacks && (T = l.Deferred,
                    I = [["resolve", "done", l.Callbacks("once memory"), l.Callbacks("once memory"), "resolved"], ["reject", "fail", l.Callbacks("once memory"), l.Callbacks("once memory"), "rejected"], ["notify", "progress", l.Callbacks("memory"), l.Callbacks("memory")]],
                    l.Deferred = function(e) {
                        var n = T()
                          , r = n.promise();
                        return n.pipe = r.pipe = function() {
                            var i = arguments;
                            return c("deferred.pipe() is deprecated"),
                            l.Deferred(function(a) {
                                l.each(I, function(e, t) {
                                    var o = l.isFunction(i[e]) && i[e];
                                    n[t[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && l.isFunction(e.promise) ? e.promise().done(a.resolve).fail(a.reject).progress(a.notify) : a[t[0] + "With"](this === r ? a.promise() : this, o ? [e] : arguments)
                                    })
                                }),
                                i = null
                            }).promise()
                        }
                        ,
                        n.isResolved = function() {
                            return c("deferred.isResolved is deprecated"),
                            "resolved" === n.state()
                        }
                        ,
                        n.isRejected = function() {
                            return c("deferred.isRejected is deprecated"),
                            "rejected" === n.state()
                        }
                        ,
                        e && e.call(n, n),
                        n
                    }
                    )
                }
            } catch (e) {}
            var J
        }
        function _exec_vbout() {
            "function" != typeof Object.create && (Object.create = function(e) {
                function t() {}
                return t.prototype = e,
                new t
            }
            ),
            visitor = Object.create(_vbTracker.visitorInfo),
            visitorTrackInfo = Object.create(_vbTracker.trackEventsInfo),
            isMappingFlagEnabled ? vbt_deleteLocalStorage("__ts__") : vbt_getLocalStorage("__ts__") && visitorTrackInfo.processTimeSpend(!0),
            visitor.initialize(),
            visitorTrackInfo.initialize(visitor.__ukey),
            isMappingFlagEnabled || vbt_attachEvent(window, "beforeunload", function(e) {
                visitorTrackInfo.processTimeSpend(!1)
            }),
            visitor.process(),
            visitor.execTracker(),
            console.log("================================================="),
            console.log("vbout Tracker X: (" + _vbsetData.account + ") is activated."),
            console.log("================================================="),
            console.log("Page viewed: " + visitor.page),
            console.log("Page IP: " + visitor.ip + " From " + visitor.country + " / " + visitor.state),
            console.log("jQuery Loaded: " + _jqueryAlreadyLoaded),
            _jqueryAlreadyLoaded && console.log("jQuery Version: " + _jqueryCurrentVersion),
            console.log("Cookie Domain: " + _cookieDomain),
            console.log("Cookie Path: " + _cookiePath)
        }
        _vbTracker.visitorInfo = {
            start_time: null,
            page: null,
            pageWTparams: null,
            ip: null,
            appCodeName: null,
            appName: null,
            appVersion: null,
            language: null,
            platform: null,
            userAgent: null,
            screenWith: null,
            screenHeight: null,
            _ecommerceEnabled: null,
            _cmsType: null,
            _goalAmount: null,
            _account: null,
            _domain: null,
            _action: null,
            __ukey: null,
            _sessionId: null,
            _uniqueTime: null,
            _referrerUrl: null,
            vbtTrack: null,
            ssId: null,
            vbtEmail: null,
            vbtListId: null,
            subscriberInfo: null,
            goalsEnabled: isGoalEnabled,
            webhooksEnabled: isWebhookEnabled,
            _vbtFlags: {},
            initialize: function() {
                this._account = _vbsetData.account,
                this._domain = _vbsetData.domain,
                this._action = "pageview",
                empty(_vbsetData.ecommerce) ? this._ecommerceEnabled = "disabled" : this._ecommerceEnabled = _vbsetData.ecommerce,
                empty(_vbsetData.type) || (this._cmsType = _vbsetData.type),
                empty(_vbsetData.amount) || (this._goalAmount = _vbsetData.amount),
                this.page = window.location.href,
                this.pageWTparams = window.location.href.split("?")[0],
                this.ip = visitorIP;
                var e = vbt_getCookie("__vbset__email")
                  , t = (e && (/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.vbtEmail) ? this.vbtEmail = e : /^([a-zA-Z0-9_-]+)$/.test(e) && (0 < $vbtJQ("#" + e).length ? (console.log("_executeRegisterToThisList by ID triggered!"),
                _executeRegisterToThisList(e, "id")) : 0 < $vbtJQ("[name=" + e + "]").length && (console.log("_executeRegisterToThisList by NAME triggered!"),
                _executeRegisterToThisList(e, "name")))),
                this.vbtListId = vbt_getCookie("__vbset__list") || null,
                this.subscriberInfo = "",
                [])
                  , e = (_vbset.forEach(function(e) {
                    "__vbvar__" == e[0] && "_listID" != e[1][0] && "_email" != e[1][0] && t.push("SubscriberForm[" + e[1][0] + "]=" + e[1][1])
                }),
                this.subscriberInfo = t.join("&"),
                this.start_time = new Date,
                this.country = country,
                this.state = state,
                this.city = city,
                this.isp = isp,
                this.organization = organization,
                this.appCodeName = navigator.appCodeName,
                this.appName = navigator.appName,
                this.appVersion = navigator.appVersion,
                "string" == navigator.userLanguage ? this.language = navigator.userLanguage : "string" == navigator.language ? this.language = navigator.language : this.language = "(Not supported)",
                this._referrerUrl = document.referrer,
                this.platform = navigator.platform,
                this.userAgent = navigator.userAgent,
                window.screen ? (this.screenWith = screen.width,
                this.screenHeight = screen.height) : (this.screenWith = 0,
                this.screenHeight = 0),
                this._uniqueTime = _uniqueTime,
                (e = vbt_getValueFromURL(location.href, "__vbtrk")) ? vbt_setCookie("__vbtrk", e = e.replace(/\+/g, " "), 168) : (e = vbt_getValueFromURL(location.href, "_uax")) ? vbt_setCookie("_uax", e = e.replace(/\+/g, " "), 168) : (o = !0,
                e = vbt_getCookie("__vbtrk")),
                this.vbtTrack = e || "",
                vbt_getCookie("__ssId"))
                  , o = (e ? (this.ssId = e,
                vbt_GetSubscriberInfo(!o),
                console.log("Subscriber ID Y:" + e)) : (this.ssId = 0,
                this.vbtTrack ? (o = (o = Base64.decode(this.vbtTrack)).split(":")[1],
                this.ssId = o,
                vbt_setCookie("__ssId", this.ssId, 168),
                vbt_GetSubscriberInfo(!0)) : track_contact_id && 0 < track_contact_id && (this.ssId = track_contact_id,
                vbt_setCookie("__ssId", this.ssId, 168),
                vbt_GetSubscriberInfo(!0)),
                console.log("Subscriber ID N:" + e)),
                this._sessionId = vbt_getCookie("__vbsess"),
                this._sessionId || (this._sessionId = _vbSessionId,
                vbt_setCookie("__vbsess", this._sessionId, 168)),
                vbt_getCookie("__vbupage") || "");
                _uniquePagesTracking = empty(o) ? [] : o.split(","),
                this.__ukey = this.getUniqueKey(),
                isMappingFlagEnabled ? vbt_showMappingTools() : (vbt_loadStyle("https://app.vbout.com/css/vbtracker.min.css?v=1.0.5"),
                vbt_loadStyle("https://app.vbout.com/trackerjs/tracker-compressed-nofancybox.css"),
                isHeatmapEnabled && vbt_execHeatmap(this.ip, this.country),
                isWebhookEnabled && this._buildWebhooks(),
                isGoalEnabled && this._buildGoals())
            },
            process: function(e, t) {
                isMappingFlagEnabled || (e && (this.page = e,
                this.pageWTparams = e.split("?")[0]),
                void 0 === e && null === e || (this.__ukey = this.getUniqueKey()),
                null != t && (this._referrerUrl = t),
                e = (e = (e = this.page.toLowerCase()).replace(/\&?\_\_vbtrk\=[a-zA-Z0-9\=]+/, "")).replace(/\&?\_uax\=[a-zA-Z0-9\=]+/, ""),
                5 < _uniquePagesTracking.length && (vbt_deleteCookie("__vbupage"),
                _uniquePagesTracking = []),
                -1 == _uniquePagesTracking.indexOf(e) && (_uniquePagesTracking.push(e),
                vbt_setCookie("__vbupage", _uniquePagesTracking.join(","), 168)),
                this.visitorProcessTracker())
            },
            execTracker: function() {
                isWebhookEnabled && this._execPageWebhooks(),
                isGoalEnabled && (this._execGoalsPPC(),
                this._execGoalsDestination(),
                this._execGoalsDuration(),
                this._execGoalsPageVisits(),
                this._execGoalsFunnels()),
                isLinkMappingEnabled && this._attachGoalEventsLinkClicks(),
                isVideoMappingEnabled && this._attachGoalEventsVideoPlays(),
                isFormMappingEnabled && this._attachGoalEventsFormSubmitted()
            },
            getUniqueKey: function() {
                var e, t = [];
                for (e in this)
                    this.hasOwnProperty(e) && "__ukey" != e && t.push(encodeURIComponent(this[e]));
                return Base64.encode(t.join("&"))
            },
            toQueryString: function() {
                var e, t = [];
                for (e in this)
                    this.hasOwnProperty(e) && t.push(encodeURIComponent(e) + "=" + encodeURIComponent(this[e]));
                return t.join("&")
            },
            visitorProcessTracker: function(e, t) {
                var o = !t || !1 !== t.asyncArg
                  , t = t && t.query ? t.query : this.toQueryString()
                  , a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                  , t = vbt_baseURL + "tracker/process?" + t;
                a.open("GET", t, o),
                a.send(null)
            }
        },
        isWebhookEnabled && (_vbTracker.visitorInfo._actionsGoals = actionsGoals,
        _vbTracker.visitorInfo._actionsEntry = actionsEntry,
        _vbTracker.visitorInfo._actionsExit = actionsExit,
        _vbTracker.visitorInfo._actionsMiddle = actionsMiddle,
        _vbTracker.visitorInfo._actionsEnd = actionsEnd,
        _vbTracker.visitorInfo._buildWebhooks = function() {
            var n, l, e;
            this._vbtFlags._buildWebhooks || (this._vbtFlags._buildWebhooks = !0,
            n = [],
            l = function(e, t, o) {
                var a, i = vbt_baseURL + "trackerjs/webhook/popup.css";
                0 == e ? a = "MyPopup_action_" == o.substring(0, 15) ? 2 < o.replace(/[^_]/g, "").length ? (a = o.substring(0, 15) + o.split("MyPopup_action_")[1].split("_")[0] + o.split("MyPopup_action_")[1].split("_")[1],
                vbt_baseURL + "tracker/themes/popup/" + t + "/" + a.split("MyPopup_action_")[1].split("_")[0] + "/") : vbt_baseURL + "tracker/themes/popup/" + t + "/" + o.split("MyPopup_action_")[1] + "/" : vbt_baseURL + "tracker/goal/themes/popup/" + t + "/" + o.split("MyPopup_")[1] + "/" : 2 == e && (a = "MyPopup_action_" == o.substring(0, 15) ? 2 < o.replace(/[^_]/g, "").length ? vbt_baseURL + "tracker/themes/optinbars/" + t + "/" + o.split("MyPopup_action_")[1].split("_")[0] + o.split("MyPopup_action_")[1].split("_")[1] + "/" : vbt_baseURL + "tracker/themes/optinbars/" + t + "/" + o.split("MyPopup_action_")[1] + "/" : vbt_baseURL + "tracker/goal/themes/optinbars/" + t + "/" + o.split("MyPopup_")[1] + "/"),
                i && -1 === n.indexOf(i) && (n.push(i),
                vbt_loadStyle(i)),
                a && -1 === n.indexOf(a) && (n.push(a),
                vbt_loadStyle(a + "?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain + "&v=" + _uniqueTime))
            }
            ,
            (e = function(e) {
                var t, o, a;
                if (void 0 !== e && 0 != e.length)
                    for (var i in e) {
                        if (attrs = e[i].attrs,
                        t = s = r = null,
                        1 == (_actionsBank[i] = attrs).type)
                            for (var n in r = vbt_createElement("div", document.body, attrs.messageHTML, {
                                id: "vb_message_action_" + attrs.objId,
                                "data-goalid": attrs.goalId,
                                "data-actionid": attrs.actionId,
                                style: "display: none;"
                            }),
                            (t = $vbtJQ(".vbtPopupThemeWrapper", r).get(0)) || $vbtJQ(r).find(".essb_item a").each(function() {
                                this.href = this.href.replace("[PAGE_URL]", encodeURIComponent(document.URL)),
                                this.href = this.href.replace("[PAGE_TITLE]", encodeURIComponent(document.title))
                            }),
                            l(attrs.popStyle, attrs.popTheme, attrs.messageId),
                            attrs.variations) {
                                var r = vbt_createElement("div", document.body, attrs.variations[n].messageHTML, {
                                    id: "vb_message_action_" + attrs.objId + "_" + attrs.variations[n].objId,
                                    "data-varid": attrs.variations[n].objId,
                                    "data-goalid": attrs.goalId,
                                    "data-actionid": attrs.actionId,
                                    style: "display: none;"
                                });
                                t || $vbtJQ(r).find(".essb_item a").each(function() {
                                    this.href = this.href.replace("[PAGE_URL]", encodeURIComponent(document.URL)),
                                    this.href = this.href.replace("[PAGE_TITLE]", encodeURIComponent(document.title))
                                }),
                                l(attrs.variations[n].popStyle, attrs.variations[n].popTheme, attrs.variations[n].messageId)
                            }
                        else if (2 == attrs.type)
                            for (n in s = (r = vbt_createElement("div", document.body, attrs.messageHTML, {
                                id: "vb_newsletter_action_" + attrs.objId,
                                "data-goalid": attrs.goalId,
                                "data-actionid": attrs.actionId,
                                style: "display: none;"
                            })).getElementsByTagName("form")[0],
                            t = $vbtJQ(".vbtPopupThemeWrapper", r).get(0),
                            $vbtJQ("#" + attrs.messageId).addClass("vbtFormToCatch"),
                            $vbtJQ(s).append('<input type="hidden" name="SubscriptionForm[appid]" value="ACTION_TRACKER" />'),
                            $vbtJQ(s).append('<input type="hidden" name="SubscriptionForm[time]" value="' + _uniqueTime + '" />'),
                            $vbtJQ(s).append('<input type="hidden" name="SubscriptionForm[sessionId]" value="" />'),
                            void 0 !== s && (a = (i = s.getElementsByTagName("div")[0] || s).querySelectorAll("input"),
                            (o = document.createElement("input")).dataset.vboutpopup = "modal-field",
                            o.dataset.placeholder = "Middle Name",
                            o.type = "hidden",
                            o.name = "SubscriptionForm[field][0]",
                            o.id = "custom-0",
                            o.className = "vbf-text",
                            o.tabIndex = -1,
                            0 < a.length ? (a.length,
                            (a = t ? a[0] : a[Math.floor(Math.random() * a.length)]).parentNode.insertBefore(o, a)) : i.appendChild(o)),
                            t || ($vbtJQ("label", s).each(function() {
                                $vbtJQ(this).attr("for", $vbtJQ(this).prev().attr("id"))
                            }),
                            $vbtJQ(r).find(".essb_item a").each(function() {
                                this.href = this.href.replace("[PAGE_URL]", encodeURIComponent(document.URL)),
                                this.href = this.href.replace("[PAGE_TITLE]", encodeURIComponent(document.title))
                            })),
                            l(attrs.popStyle, attrs.popTheme, attrs.messageId),
                            attrs.variations) {
                                var s = (r = vbt_createElement("div", document.body, attrs.variations[n].messageHTML, {
                                    id: "vb_newsletter_action_" + attrs.objId + "_" + attrs.variations[n].objId,
                                    "data-varid": attrs.variations[n].objId,
                                    "data-goalid": attrs.goalId,
                                    "data-actionid": attrs.actionId,
                                    style: "display: none;"
                                })).getElementsByTagName("form")[0];
                                $vbtJQ(s).append('<input type="hidden" name="SubscriptionForm[appid]" value="ACTION_TRACKER" />'),
                                $vbtJQ(s).append('<input type="hidden" name="SubscriptionForm[time]" value="' + _uniqueTime + '" />'),
                                $vbtJQ(s).append('<input type="hidden" name="SubscriptionForm[sessionId]" value="" />'),
                                t || ($vbtJQ("label", s).each(function() {
                                    $vbtJQ(this).attr("for", $vbtJQ(this).prev().attr("id"))
                                }),
                                $vbtJQ(r).find(".essb_item a").each(function() {
                                    this.href = this.href.replace("[PAGE_URL]", encodeURIComponent(document.URL)),
                                    this.href = this.href.replace("[PAGE_TITLE]", encodeURIComponent(document.title))
                                })),
                                l(attrs.variations[n].popStyle, attrs.variations[n].popTheme, attrs.variations[n].messageId)
                            }
                        else
                            3 == attrs.type && (s = (r = vbt_createElement("div", document.body, attrs.messageHTML, {
                                id: "vb_poll_action_" + attrs.objId,
                                "data-goalid": attrs.goalId,
                                "data-actionid": attrs.actionId,
                                style: "display: none;"
                            })).getElementsByTagName("form")[0],
                            t = $vbtJQ(".vbtPopupThemeWrapper", r).get(0),
                            $vbtJQ(s).append('<input type="hidden" name="PollForm[appid]" value="ACTION_TRACKER" />'),
                            $vbtJQ(s).append('<input type="hidden" name="PollForm[time]" value="' + _uniqueTime + '" />'),
                            $vbtJQ(s).append('<input type="hidden" name="PollForm[sessionId]" value="" />'),
                            t || ($vbtJQ("label", s).each(function() {
                                $vbtJQ(this).attr("for", $vbtJQ(this).prev().attr("id"))
                            }),
                            $vbtJQ(r).find(".essb_item a").each(function() {
                                this.href = this.href.replace("[PAGE_URL]", encodeURIComponent(document.URL)),
                                this.href = this.href.replace("[PAGE_TITLE]", encodeURIComponent(document.title))
                            })),
                            l(attrs.popStyle, attrs.popTheme, attrs.messageId));
                        r && t && vBrandingWebhook && (a = '<div style="text-align: right;padding: 10px;">' + vBrandingWebhook + "</div>",
                        $vbtJQ(t).append(a)),
                        delete attrs.messageHTML
                    }
            }
            )(this._actionsEntry),
            e(this._actionsExit),
            e(this._actionsMiddle),
            e(this._actionsEnd),
            e(this._actionsGoals))
        }
        ,
        _vbTracker.visitorInfo._execPageWebhooks = function() {
            var n, e, t, o;
            !this._vbtFlags._execPageWebhooks && (this._vbtFlags._execPageWebhooks = !0,
            n = this.page,
            (e = function(e, t) {
                for (var o in e) {
                    var a, i, o = e[o];
                    vbt_matchUrls(n, o.urls, !0) && (i = vbt_getCookie(a = "__vbAction_" + (o = o.attrs).actionId + "_" + visitor._sessionId),
                    isNaN(i) && (i = 0),
                    vbt_setCookie(a, ++i, 168),
                    t(o))
                }
            }
            )(this._actionsEntry, function(e) {
                __checkForValidPersona(e) && (actionAlreadySent = !0,
                visitorTrackInfo.trackPageEntryAction(e.objId),
                _execActionToObject(e, ""),
                actionAlreadySent = !1)
            }),
            e(this._actionsExit, function(t) {
                __checkForValidPersona(t) && (actionAlreadySent = !0,
                vbt_attachEvent(window, "mouseout", function(e) {
                    e.pageY - $vbtJQ(window).scrollTop() <= 1 && -1 === _actionExitExec.indexOf(t.actionId) && (_actionExitExec.push(t.actionId),
                    console.log("exec..."),
                    _execActionToObject(t, ""),
                    visitorTrackInfo.trackPageExitAction(t.objId))
                }, !1),
                actionAlreadySent = !1)
            }),
            e(this._actionsMiddle, function(e) {
                __checkForValidPersona(e) && _actionMiddleQueue.push(e)
            }),
            e(this._actionsEnd, function(e) {
                __checkForValidPersona(e) && _actionEndQueue.push(e)
            }),
            _actionMiddleQueue.length || _actionEndQueue.length) && (t = 0,
            o = function() {
                if (2 != t) {
                    t = 2;
                    var e = document.body.offsetHeight > document.body.scrollHeight ? document.body.offsetHeight : document.body.scrollHeight;
                    if (window.scrollY + window.innerHeight / 2 > .4 * e && _actionMiddleQueue.length && (_actionMiddleQueue.forEach(function(e) {
                        _execActionToObject(e, ""),
                        visitorTrackInfo.trackPageExitAction(e.objId)
                    }),
                    _actionMiddleQueue = []),
                    window.scrollY + window.innerHeight > .9 * e && _actionEndQueue.length && (_actionEndQueue.forEach(function(e) {
                        _execActionToObject(e, ""),
                        visitorTrackInfo.trackPageExitAction(e.objId)
                    }),
                    _actionEndQueue = []),
                    2 != t)
                        return o();
                    t = 0
                } else
                    t = 1
            }
            ,
            vbt_attachEvent(window, "scroll", function(e) {
                o()
            }, !1))
        }
        ),
        isGoalEnabled && (_vbTracker.visitorInfo._goals = goals,
        _vbTracker.visitorInfo._getFunnelWebhook = function(e) {
            return !!(this.webhooksEnabled && "funnel" + e in this._actionsGoals) && this._actionsGoals["funnel" + e].attrs
        }
        ,
        _vbTracker.visitorInfo._buildGoals = function() {
            var e = this._goals.funnel;
            if (e)
                for (var t in e)
                    for (var o in e[t].pages)
                        $vbtJQ("body").append('<div id="vb_funnel_message_' + e[t].pages[o].funnelId + '" class="vbMessage" data-funnelid="' + e[t].pages[o].funnelId + '" style="display: none;"></div>')
        }
        ,
        _vbTracker.visitorInfo._execGoalWebhook = function(e, t) {
            "object" != typeof t && (t = {});
            var o = "__vbGoal_" + e.id
              , a = vbt_getCookie(o);
            if (isNaN(a) && (a = 0),
            vbt_setCookie(o, ++a, 168),
            this.webhooksEnabled && "goal" + e.id in this._actionsGoals) {
                o = this._actionsGoals["goal" + e.id].attrs;
                if (o._target = t.target || null,
                __checkForValidPersona(o))
                    return _execActionToObject(o, t.callback || ""),
                    !0
            }
        }
        ,
        _vbTracker.visitorInfo._execGoalsDestination = function() {
            var e = this._goals.destination;
            if (e) {
                var t, o = this.page;
                for (t in e) {
                    var a = e[t];
                    vbt_matchUrls(o, a.urls, !0) && this._execGoalWebhook(a)
                }
            }
        }
        ,
        _vbTracker.visitorInfo._execGoalsPPC = function() {
            var e = this._goals.PPC;
            if (e) {
                var t = vbt_getValueFromURL(location.href, "utm_source");
                if (t = !t && vbt_getValueFromURL(location.href, "gclid") ? "google" : t)
                    for (var o = 0, a = e.length; o < a; o++)
                        -1 != e[o].PPC.indexOf(t) && this._execGoalWebhook(e[o])
            }
        }
        ,
        _vbTracker.visitorInfo._execGoalsDuration = function() {
            var e = this._goals.duration;
            if (e)
                for (var t = this, o = 0, a = e.length; o < a; o++) {
                    var i = e[o];
                    setTimeout(function() {
                        t._execGoalWebhook(i)
                    }, 1e3 * i.duration)
                }
        }
        ,
        _vbTracker.visitorInfo._execGoalsPageVisits = function() {
            var e = this._goals.pages;
            if (e)
                for (var t = _uniquePagesTracking.length, o = 0, a = e.length; o < a; o++) {
                    var i = e[o];
                    triggerCounter = vbt_getCookie("__vbGoal_" + i.id) || 0,
                    i.pages != t || triggerCounter || this._execGoalWebhook(i)
                }
        }
        ,
        _vbTracker.visitorInfo._execGoalsFunnels = function(e) {
            var t = this._goals.funnel;
            if (t)
                for (var o = 0, a = t.length; o < a; o++)
                    console.log("FunnelID " + t[o].id + " has been started..."),
                    this._trackFunnelGoal(t[o], e)
        }
        ,
        _vbTracker.visitorInfo._trackFunnelGoal = function(e, t) {
            var o, a, i = e, n = vbt_getCookie("__vbFunnel_" + e.id) || "", n = empty(n) ? [] : n.split(","), r = vbt_matchUrls(t = t || document.URL, i.pages, !1);
            r && (console.log("Funnel Step: We have a match"),
            o = r.funnelId,
            -1 == n.indexOf(t) && (n.push(t),
            console.log("Funnel Step: Add page to funnel list"),
            vbt_setCookie("__vbFunnel_" + e.id, n.join(","), 5)),
            "1" == r.hasAddAction && (t = !!1,
            empty(a = vbt_getCookie("__vbFunnelAddAction") || "") || (a = JSON.parse(a),
            $vbtJQ.isEmptyObject(a)) ? a = this._getFunnelWebhook(o) || {} : t = parseInt(a.order) < parseInt(r.order),
            t) && ("1" == r.hasWebhookAction && "function" == typeof _execActionToObject && _execActionToObject(a, ""),
            "1" == r.hasEmailAction && (console.log("send email too if subscriber"),
            _execSendEmailToSubscriber(r)),
            "1" == r.hasAnonymousAction && (console.log("send email too if anonymous"),
            _execSendEmailToAnonymous(r)),
            vbt_getCookie("__reset")) && _execResetAnyAnonymousEmail(o, vbt_getCookie("__ssId")),
            n.length == i.pages.length) && this._execGoalWebhook(e, {})
        }
        ),
        isLinkMappingEnabled && (_vbTracker.visitorInfo._closestVbtTrack = function(e, t) {
            if ("A" == e.tagName || null !== e.getAttribute(t))
                return e;
            for (; !e.parentNode || !e.parentNode.getAttribute || "A" != e.parentNode.tagName && null === e.parentNode.getAttribute(t); )
                if (!(e = e.parentNode))
                    return null;
            return e.parentNode
        }
        ,
        _vbTracker.visitorInfo._attachGoalEventsLinkClicks = function() {
            var n = this;
            vbt_attachEvent(document, "click", function(e) {
                var t, o = "data-vbtTrack", a = !0, i = n._closestVbtTrack(e.target, o);
                if (i && ("A" == i.tagName ? t = (i.getAttribute("href") || "").toLowerCase() : (t = (i.getAttribute(o) || "").toLowerCase(),
                a = !1),
                0 === t.indexOf("http://") || 0 === t.indexOf("https://") || 0 === t.indexOf("/"))) {
                    o = -1 != ["jpg", "jpeg", "png", "gif"].indexOf(t.split("?")[0].split(".").pop().toLowerCase());
                    if (!i.classList.contains("fancybox") && !o && (visitorTrackInfo.trackLinkClick(i, e, t, a),
                    a))
                        return !1
                }
            }, !1)
        }
        ),
        isVideoMappingEnabled && (_vbTracker.visitorInfo._attachGoalEventsVideoPlays = function() {
            function e(e, t) {
                var o, a = parseInt(e.offsetWidth), i = parseInt(e.offsetHeight), a = (parseInt(e.offsetTop),
                parseInt(e.offsetLeft),
                a ? a + "px" : "100%"), i = i ? i + "px" : "100%", n = document.createElement("div"), r = document.createElement("div"), s = (n.setAttribute("style", "width: " + a + "; height: " + i + ";" + t.overlay),
                n.setAttribute("class", "default"),
                "function" == typeof t.screenshot ? t.screenshot(n) : n.style.backgroundImage = "url('" + t.screenshot + "') ",
                r.setAttribute("style", t.play),
                r.onmouseover = function() {
                    this.style.opacity = "1"
                }
                ,
                r.onmouseout = function() {
                    this.style.opacity = "0.7"
                }
                ,
                n.appendChild(r),
                n.onmouseover = function() {
                    this.setAttribute("class", "fadeIn")
                }
                ,
                n.onmouseout = function() {
                    this.setAttribute("class", "default")
                }
                ,
                e.getAttribute("src")), a = e.currentStyle || window.getComputedStyle(e);
                n.style.margin = a.margin,
                n.style.top = a.top,
                n.style.left = a.left,
                n.style.right = a.right,
                n.style.bottom = a.bottom,
                "inline" != a.display && (n.style.display = a.display),
                $vbtJQ(e).parents(".et_pb_video_box").length || ($vbtJQ(n).parent(".fluid-width-video-wrapper").length && (n.setAttribute("data-oldpadding", $vbtJQ(n).parent(".fluid-width-video-wrapper").css("paddingTop")),
                $vbtJQ(n).parent(".fluid-width-video-wrapper").css("padding", 0)),
                o = e.cloneNode(!0),
                e.parentNode.replaceChild(n, e),
                n.onclick = function() {
                    var e = this;
                    visitorTrackInfo.trackVideoClick(s, t.videoId, function() {
                        $vbtJQ(e).parent(".fluid-width-video-wrapper").length && $vbtJQ(e).parent(".fluid-width-video-wrapper").css("paddingTop", e.getAttribute("data-oldpadding")),
                        s = vbt_removeFromURL(s, "rel|autoplay"),
                        o.setAttribute("src", s + (0 < s.indexOf("?") ? "&" : "?") + "rel=0&autoplay=true"),
                        e.parentNode.replaceChild(o, e),
                        $vbtJQ("body").css("overflow", "auto"),
                        $vbtJQ("body").find(".fancybox-overlay").length && setTimeout(function() {
                            nowYSMnowYDT(o)
                        }, 1e3)
                    })
                }
                )
            }
            for (var t = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=))([\w-]+)/, o = /^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:video\/)?(\d+)($|\/)/, a = document.getElementsByTagName("iframe"), i = a.length - 1; 0 <= i; i--) {
                var n, r, s = a[i], l = s.getAttribute("src") || "";
                l && (t.test(l) ? ((r = l.match(t))[1] = r[1].replace(/\//g, ""),
                n = "//img.youtube.com/vi/" + r[1] + "/0.jpg",
                e(s, {
                    videoId: r[1],
                    videoType: "youtube",
                    overlay: "display:block;cursor: pointer; position: relative; background: #000 no-repeat center center;background-size:cover;",
                    play: 'width: 64px; height: 64px; margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; background:rgba(0, 0, 0, 0) url("https://app.vbout.com/images/youtubethumb.png") no-repeat scroll 0 0;opacity:0.7;',
                    screenshot: n
                })) : o.test(l) && e(s, {
                    videoId: (r = l.match(o))[1],
                    videoType: "vimeo",
                    overlay: "display:block;cursor: pointer; position: relative; background: #000 no-repeat center center;background-size:cover;",
                    play: 'width: 64px; height: 64px; margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; background:rgba(86, 84, 84, 0.44) url("https://app.vbout.com/images/play-video.png") no-repeat scroll 0 0;opacity:0.7; border-radius: 50%;',
                    screenshot: function(t) {
                        vbt_getAjax("https://vimeo.com/api/v2/video/" + r[1] + ".json", function() {
                            var e;
                            4 == this.readyState && (e = (e = tryParseJSON(this.responseText)) ? e[0].thumbnail_large : "https://app.vbout.com/public-ups/vimeo-default-empy.jpg",
                            t.style.display = "block",
                            t.style.backgroundImage = "url('" + e + "') ")
                        })
                    }
                }))
            }
        }
        ),
        isFormMappingEnabled && (_vbTracker.visitorInfo._attachGoalEventsFormSubmitted = function() {
            var c = []
              , a = {
                name: [],
                id: []
            }
              , e = this._goals.events;
            if (e)
                for (var t = 0, o = e.length; t < o; t++)
                    "submit-forms" == e[t].eventsType && (c.push(e[t]),
                    (1 == e[t].formid ? a.name : a.id).push(e[t].formidentity.toLowerCase()));
            vbt_attachEvent(document, "submit", function(e) {
                var t, o, e = e.target;
                "FORM" == e.tagName && (t = (e.getAttribute("id") || "~~").toLowerCase(),
                o = (e.getAttribute("name") || "~~").toLowerCase(),
                -1 < a.id.indexOf(t) || -1 < a.name.indexOf(o)) && visitorTrackInfo.trackFormSubmit(t, o, Base64.encode(serialize(e)), e)
            }, !0);
            setInterval(function() {
                for (var e = document.getElementsByTagName("form"), t = e.length, o = 0; o < t; o++)
                    if (!e[o]._vbTGEFS)
                        for (var a = e[o], i = (a._vbTGEFS = !0,
                        (a.getAttribute("id") || "~~").toLowerCase()), n = (a.getAttribute("name") || "~~").toLowerCase(), r = 0, s = c.length; r < s; r++) {
                            var l = c[r];
                            if ((1 != l.formid && i == l.formidentity || 1 == l.formid && n == l.formidentity) && 0 < l.formidentitylist) {
                                _execSendFormEmailToAnonymous(i, n, a, l.formidentitylist, l.id);
                                break
                            }
                        }
            }, 3e3)
        }
        ),
        _vbTracker.triggerTracking = function(e, t) {
            var o, a;
            null == visitor ? setTimeout(function() {
                _vbTracker.triggerTracking(e, t)
            }, 1e3) : (o = _vbsetData.domain.replace(/\/?$/, "/") + e.replace(/^\/?/, "").replace(/\/?$/, "/"),
            void 0 !== t ? (a = _vbsetData.domain.replace(/\/?$/, "/") + t.replace(/^\/?/, "").replace(/\/?$/, "/"),
            visitor.process(o, a)) : visitor.process(o),
            isGoalEnabled && visitor._execGoalsFunnels(o))
        }
        ,
        _vbTracker.trackEventsInfo = {
            start_time: null,
            end_time: null,
            timeSpent: null,
            linkClicked: null,
            linkClickedId: null,
            linkUniqueId: null,
            linkFormId: null,
            linkFormName: null,
            linkFormInput: null,
            _ecommerceEnabled: null,
            _cmsType: null,
            _goalAmount: null,
            vbtTrack: null,
            ssId: null,
            actionId: null,
            variationId: null,
            _account: null,
            _domain: null,
            _action: null,
            __ukey: null,
            _sessionId: null,
            _uniqueTime: null,
            _referrerUrl: null,
            ip: null,
            vbtEmail: null,
            vbtListId: null,
            initialize: function(e) {
                this._account = _vbsetData.account,
                this._domain = _vbsetData.domain,
                this._action = "tracktime",
                this.actionId = 0,
                this.variationId = 0,
                this.ip = visitorIP,
                empty(_vbsetData.ecommerce) ? this._ecommerceEnabled = "disabled" : this._ecommerceEnabled = _vbsetData.ecommerce,
                empty(_vbsetData.type) || (this._cmsType = _vbsetData.type),
                empty(_vbsetData.amount) || (this._goalAmount = _vbsetData.amount);
                var t, o = vbt_getCookie("__vbset__email"), e = (o && /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.vbtEmail) && (this.vbtEmail = o),
                this.vbtListId = vbt_getCookie("__vbset__list") || null,
                this.start_time = new Date,
                this.__ukey = e,
                this._uniqueTime = _uniqueTime,
                this._referrerUrl = document.referrer,
                (o = vbt_getValueFromURL(location.href, "__vbtrk")) ? vbt_setCookie("__vbtrk", o = o.replace(/\+/g, " "), 168) : (t = !0,
                o = vbt_getCookie("__vbtrk")),
                this.vbtTrack = o || "",
                vbt_getCookie("__ssId"));
                e ? (this.ssId = e,
                vbt_GetSubscriberInfo(!t)) : (this.ssId = 0,
                this.vbtTrack && !t && (o = (o = Base64.decode(this.vbtTrack)).split(":")[1],
                this.ssId = o,
                vbt_setCookie("__ssId", this.ssId, 168),
                vbt_GetSubscriberInfo(!0))),
                this._sessionId = vbt_getCookie("__vbsess"),
                this._sessionId || (this._sessionId = _vbSessionId,
                vbt_setCookie("__vbsess", this._sessionId, 168))
            },
            trackPageExitAction: function(e) {
                this.actionId = e,
                this.trackEventsProcessTracker("trackpageexit")
            },
            updateActionVariation: function(e, t) {
                this._action = "updateaction",
                this.actionId = e,
                this.variationId = t,
                this.trackEventsProcessTracker("updateaction")
            },
            trackAction: function(e, t) {
                this._action = "trackaction",
                this.actionId = e,
                this.variationId = t,
                this.trackEventsProcessTracker("trackaction")
            },
            trackPageEntryAction: function(e) {
                this.actionId = e,
                this.trackEventsProcessTracker("trackpageentry")
            },
            processTimeSpend: function(e) {
                this._action = "tracktime",
                this.end_time = new Date,
                this.timeSpent = this.end_time - this.start_time;
                var t = this.toQueryString();
                e ? (t = vbt_getLocalStorage("__ts__")) && (this.trackEventsProcessTracker("tracktime", {
                    query: t
                }),
                vbt_deleteLocalStorage("__ts__")) : vbt_setLocalStorage("__ts__", t)
            },
            toQueryString: function() {
                var e, t = [];
                for (e in this)
                    this.hasOwnProperty(e) && t.push(encodeURIComponent(e) + "=" + encodeURIComponent(this[e]));
                return t.join("&")
            },
            trackEventsProcessTracker: function(e, t) {
                this._action = e;
                var e = !t || !1 !== t.asyncArg
                  , t = t && t.query ? t.query : this.toQueryString()
                  , o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                  , t = vbt_baseURL + "tracker/process?" + t;
                o.open("GET", t, e),
                o.send(null)
            }
        },
        isLinkMappingEnabled && (_vbTracker.trackEventsInfo.trackLinkClick = function(o, a, e, i) {
            this.linkClicked = e || "",
            this.linkClickedId = o.getAttribute("id") || "",
            this.trackEventsProcessTracker("tracklink");
            function t() {
                var e, t;
                !1 !== i && (e = a.ctrlKey ? "_blank" : o.getAttribute("target") || "",
                t = o.getAttribute("data-href") || o.getAttribute("href") || "") && (a.preventDefault(),
                a.stopPropagation(),
                e ? window.open(t, e) : window.location = t)
            }
            var n = !1
              , r = (!1 !== i && (o.onclick,
            o.onclick = null),
            function(e) {
                e = (e.getAttribute("data-href") || e.getAttribute("href") || "").toLowerCase().split(".").pop();
                return "pdf" == e || "com/vista-projects_digital-project-execution" == e || "com/vista-projects_digital-project-execution/" == e
            }(o))
              , s = visitor._goals.events;
            if (s)
                for (var e = (e || "~~").toLowerCase(), l = (o.getAttribute("id") || "~~").toLowerCase(), c = 0, d = s.length; c < d; c++)
                    if ("click-links" == s[c].eventsType && (-1 != s[c].links.indexOf(e) || -1 != s[c].links.indexOf(l))) {
                        var p = s[c]
                          , u = 0 === p.linkrule;
                        if (!u) {
                            var v = 0;
                            -1 != s[c].links.indexOf(e) && v++;
                            for (var b = 0, f = _uniquePagesTracking.length; b < f; b++)
                                e != _uniquePagesTracking[b].toLowerCase() && -1 != s[c].links.indexOf(_uniquePagesTracking[b].toLowerCase()) && v++;
                            v == s[c].links.length && (u = !0)
                        }
                        u && !r && (n = visitor._execGoalWebhook(p, {
                            target: o,
                            callback: function() {
                                try {
                                    "function" == typeof callbackFunc && callbackFunc()
                                } catch (e) {}
                                t(),
                                $vbtJQ("body").css("overflow", "auto")
                            }
                        }));
                        break
                    }
            if (!0 !== n) {
                try {
                    "function" == typeof callbackFunc && callbackFunc()
                } catch (e) {}
                t()
            }
        }
        ),
        isVideoMappingEnabled && (_vbTracker.trackEventsInfo.trackVideoClick = function(e, t, o) {
            this.linkClicked = e,
            this.linkUniqueId = t,
            this.trackEventsProcessTracker("trackvideo");
            var a = !1
              , i = visitor._goals.events;
            if (i)
                for (var n = 0, r = i.length; n < r; n++)
                    if ("watch-videos" == i[n].eventsType)
                        if (-1 == i[n].videos.indexOf(e)) {
                            var s, l = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, c = /(http:|https:|)\/\/(player.)?(vimeo\.com)\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/;
                            for (s in i[n].videos) {
                                var d = i[n].videos[s].match(l);
                                if (d && (d[1] || "").toLowerCase() == t.toLowerCase())
                                    break;
                                if ((d = i[n].videos[s].match(c)) && (d[1] || "").toLowerCase() == t.toLowerCase())
                                    break
                            }
                        }
            if (!0 !== a)
                try {
                    "function" == typeof o && o()
                } catch (e) {}
        }
        ),
        isFormMappingEnabled && (_vbTracker.trackEventsInfo.trackFormSubmit = function(e, t, o, a) {
            this._action = "trackform",
            this.linkFormId = e,
            this.linkFormName = t,
            this.linkFormInput = o,
            this.trackEventsProcessTracker("trackform");
            var i = visitor._goals.events;
            if (i)
                for (var n = (a.getAttribute("id") || "~~").toLowerCase(), r = (a.getAttribute("name") || "~~").toLowerCase(), s = 0, l = i.length; s < l; s++)
                    if ("submit-forms" == i[s].eventsType) {
                        var c = i[s];
                        if (1 != c.formid && n == c.formidentity || 1 == c.formid && r == c.formidentity) {
                            visitor._execGoalWebhook(i[s], {
                                target: c.formidentity,
                                callback: function() {
                                    $vbtJQ("body").css("overflow", "auto")
                                }
                            });
                            break
                        }
                    }
        }
        );
        var intlTelLib, librariesQueue = {
            recaptcha: {
                jsLoad: "https://www.google.com/recaptcha/api.js?render=explicit"
            },
            flatpickr: {
                css1: vbt_baseURL + "ext/flatpickr.min.css",
                jsLoad: vbt_baseURL + "ext/flatpickr.min.js"
            },
            birthdayinput: {
                css1: vbt_baseURL + "ext/birthdayinput/birthdayinput.css?v=1.4",
                jsLoad: vbt_baseURL + "ext/birthdayinput/birthdayinput.js?v=1.4"
            },
            checkboxselectinput: {
                css1: vbt_baseURL + "ext/checkboxselectinput/checkboxselectinput.min.css?v=1.0.2",
                jsLoad: vbt_baseURL + "ext/checkboxselectinput/checkboxselectinput.min.js?v=1.0.2"
            }
        };
        function attachLibraries(t, e) {
            if (t in librariesQueue)
                if ("queue"in librariesQueue[t])
                    null == librariesQueue[t].queue ? e() : librariesQueue[t].queue.push(e);
                else
                    for (var o in librariesQueue[t].queue = [],
                    librariesQueue[t].queue.push(e),
                    librariesQueue[t]) {
                        var a = "cssLoad" == o || "jsLoad" == o ? function() {
                            for (var e; e = librariesQueue[t].queue.shift(); )
                                e();
                            librariesQueue[t].queue = null
                        }
                        : null;
                        -1 < o.indexOf("css") && vbt_loadStyle(librariesQueue[t][o], a),
                        -1 < o.indexOf("js") && vbt_loadJs(librariesQueue[t][o], a)
                    }
        }
        function getFormFieldValues(e, t) {
            var o = {
                listId: 0,
                fields: {}
            }
              , a = t || document;
            return _vbset.forEach(function(e) {
                var t;
                "__vbvar__" == e[0] && ("_listID" == e[1][0] ? o.listId = e[1][1] : (t = document.getElementById(e[1][1])) ? o.fields[e[1][0].substring(1)] = $vbtJQ(t, a).val() : $vbtJQ('[name="' + e[1][1] + '"]', a).each(function() {
                    (!("INPUT" == this.tagName && -1 < ["radio", "checkbox"].indexOf(this.type)) || this.checked) && (o.fields[e[1][0].substring(1)] = $vbtJQ(this).val())
                }))
            }),
            o
        }
        {
            function attachIntlTelPlugin(e) {
                var t;
                foreach(e, "input[type=tel]", function() {
                    t = !0
                }),
                t && (window.intlTelInput ? applyIntlTelPlugin(e) : (intlTelQueue.push(e),
                intlTelLib || (intlTelLib = !0,
                vbt_loadStyle(vbt_baseURL + "ext/intl-tel-input/css/intlTelInput.min.css?v=1.1"),
                vbt_loadJs(vbt_baseURL + "ext/intl-tel-input/js/intlTelInput.min.js?v=1.1", function() {
                    for (var e; e = intlTelQueue.shift(); )
                        applyIntlTelPlugin(e)
                }))))
            }
            function applyIntlTelPlugin(e) {
                if (!window.intlTelInput)
                    return !1;
                foreach(e, "input[type=tel]", function() {
                    var o, e = this;
                    "yes" !== e.getAttribute("data-countrylist") && null !== e.getAttribute("data-countrylist") || (o = window.intlTelInput(e, {
                        utilsScript: vbt_baseURL + "ext/intl-tel-input/js/utils.js",
                        initialCountry: "auto",
                        geoIpLookup: function(t, e) {
                            vbtIpInfo.load(function(e) {
                                e = e && e.country ? e.country : "";
                                t(e)
                            })
                        }
                    }),
                    e.addEventListener("countrychange", function(e) {
                        var t = o.getSelectedCountryData().dialCode;
                        this._iti_country = t || "",
                        t && "+" != this.value[0] && (this.value = "+" + t + this.value)
                    }),
                    e.addEventListener("blur", function(e) {
                        var t = String("+" == this.value[0] ? this.value.substring(1) : this.value);
                        t = (t = 0 == t.indexOf("00") ? t.substring(2) : t) || o.getSelectedCountryData().dialCode,
                        this.value = "+" + t,
                        fireEvent(this, "keyup")
                    }))
                })
            }
            function attachRecaptcha(o, a) {
                if (o.getElementsByClassName("recaptchaField")[0])
                    return attachLibraries("recaptcha", function() {
                        var t = setInterval(function() {
                            var e;
                            window.grecaptcha && window.grecaptcha.render && (clearInterval(t),
                            e = o.getElementsByClassName("recaptchaField")[0]) && e.parentNode && ("_vbtCaptcha"in e ? !0 === a && grecaptcha.reset(e._vbtCaptcha) : e._vbtCaptcha = grecaptcha.render(e, {
                                sitekey: "6LfCul4UAAAAAGcc72HZeEZi2W7ABVGtXLesujj_",
                                "expired-callback": function() {
                                    setTimeout(function() {
                                        grecaptcha.reset(e._vbtCaptcha)
                                    }, 125)
                                },
                                theme: "light"
                            }))
                        }, 500)
                    })
            }
            function attachFlatPickr(a) {
                for (var e = a.getElementsByClassName("date-picker"), t = 0, o = e.length; t < o; t++)
                    if ("INPUT" == e[t].tagName)
                        return attachLibraries("flatpickr", function() {
                            for (var e = a.getElementsByClassName("date-picker"), t = 0, o = e.length; t < o; t++)
                                "INPUT" == e[t].tagName && e[t].parentNode && window.flatpickr(e[t], {
                                    dateFormat: e[t].getAttribute("data-format") || "Y-m-d"
                                })
                        })
            }
            function attachBirthdayPicker(e) {
                var t = !1;
                if (foreach(e, ".vfb-birthday, .birthday-picker", function() {
                    "INPUT" == this.tagName && this.parentNode && (t = !0)
                }),
                t)
                    return attachLibraries("birthdayinput", function() {
                        foreach(e, ".vfb-birthday, .birthday-picker", function() {
                            var e = this;
                            "INPUT" == e.tagName && e.parentNode && (hasClass(e, "birthday-picker") && e.getAttribute("data-format"),
                            window.birthdayInput(e))
                        })
                    })
            }
            function attachCheckboxSelectStyler(e) {
                if (ifElement(e, "div.vfb-checkbox-select"))
                    return attachLibraries("checkboxselectinput", function() {
                        foreach(e, "div.vfb-checkbox-select", function() {
                            window.checkboxSelectInput(this, {})
                        })
                    })
            }
            function attachRegionsSelectBoxes(e) {
                var t, o, a = e.getElementsByClassName("vfb-select-countries")[0];
                a && "SELECT" == a.tagName && (attachRegionsSelectBox(a),
                getRegionsList(null, a, {
                    source: "Countries",
                    pleaseSelect: __("-- Please Select --"),
                    onChangeMessage: __("Loading Countries. Please wait..."),
                    onLoad: function() {
                        smartCountriesField(e, a)
                    }
                }),
                t = e.getElementsByClassName("vfb-select-states")[0]) && "SELECT" == t.tagName && (attachRegionsSelectBox(t),
                attachRegionsSelectBoxesEvent(a, t, {
                    source: "States",
                    pleaseSelect: __("-- Please Select --"),
                    onChangeMessage: __("Loading States. Please wait...")
                }),
                o = e.getElementsByClassName("vfb-select-cities")[0]) && "SELECT" == o.tagName && (attachRegionsSelectBox(o),
                attachRegionsSelectBoxesEvent(t, o, {
                    source: "Cities",
                    pleaseSelect: __("-- Please Select --"),
                    onChangeMessage: __("Loading Cities. Please wait...")
                }))
            }
            function attachRegionsSelectBoxesEvent(e, t, o) {
                $vbtJQ(e).on("change ", function() {
                    getRegionsList(this.options[this.selectedIndex].getAttribute("data-id") || 0, t, o)
                })
            }
            function attachRegionsSelectBox(e) {
                try {
                    $vbtJQ.fn.chosen && $vbtJQ(e).chosen()
                } catch (e) {}
            }
            function getRegionsList(e, n, r) {
                n.setAttribute("disabled", "DISABLED"),
                (n.selectedIndex = 0) === e ? (n.innerHTML = "",
                $vbtJQ(n).trigger("chosen:updated")) : (n.innerHTML = '<option value="">' + r.onChangeMessage + "</option>",
                $vbtJQ(n).trigger("change"),
                $vbtJQ(n).trigger("chosen:updated"),
                e = "https://www.vbt.io/Regions/" + r.source + "/" + e,
                $vbtJQ.getJSON(e, {}, function(e) {
                    var t, o = (n.getAttribute("data-selected") || "").toLowerCase();
                    if ("[object Array]" === Object.prototype.toString.call(e.data)) {
                        n.selectedIndex = 0,
                        n.innerHTML = '<option value="">' + r.pleaseSelect + "</option>";
                        for (var a = 0, i = e.data.length; a < i; a++)
                            (t = document.createElement("option")).setAttribute("data-id", e.data[a][0]),
                            t.setAttribute("value", e.data[a][1]),
                            e.data[a][2] && t.setAttribute("data-code", String(e.data[a][2]).toLowerCase()),
                            t.innerHTML = e.data[a][1],
                            o && t.innerHTML.toLowerCase() == o && (n.selectedIndex = a + 1,
                            t.setAttribute("selected", "SELECTED"),
                            n.removeAttribute("data-selected")),
                            n.appendChild(t);
                        n.removeAttribute("disabled"),
                        $vbtJQ(n).trigger("chosen:updated"),
                        0 < n.selectedIndex && $vbtJQ(n).trigger("change"),
                        "function" == typeof r.onLoad && r.onLoad(n)
                    }
                }))
            }
            function attachRegionsAutoComplete(e) {
                var o = e.querySelector('input[data-validation="countries"]') || null
                  , a = e.querySelector('input[data-validation="states"]') || null
                  , i = e.querySelector('input[data-validation="cities"]') || null;
                function t(e) {
                    e && addEventsListener(e, "keydown", function(e) {
                        var t, o = this.parentNode.getElementsByClassName("vbt-autocomplete-list")[0];
                        o && (t = o.getElementsByClassName("vbt-autocomplete-item-active")[0],
                        40 == e.keyCode ? (o = t ? t.nextSibling : o.firstChild) && (removeClass(t, "vbt-autocomplete-item-active"),
                        addClass(o, "vbt-autocomplete-item-active")) : 38 == e.keyCode ? (o = t ? t.previousSibling : null) && (removeClass(t, "vbt-autocomplete-item-active"),
                        addClass(o, "vbt-autocomplete-item-active")) : 13 == e.keyCode && t && (e.preventDefault(),
                        t.click()))
                    })
                }
                function c(e) {
                    foreach(document, ".vbt-autocomplete-wrapper", function() {
                        e != this && this.parentNode.removeChild(this)
                    })
                }
                function n(i, e, n) {
                    var t = document.createElement("div")
                      , r = (t.setAttribute("class", "vbt-autocomplete-wrapper"),
                    document.createElement("div"))
                      , s = (r.setAttribute("class", "vbt-autocomplete-list"),
                    t.appendChild(r),
                    i.parentNode.appendChild(t),
                    (i.value || "").toUpperCase())
                      , l = s.length;
                    !empty(s) && isArray(e) && e.forEach(function(e) {
                        var t, o, a = e[0], e = e[1];
                        0 === e.toUpperCase().indexOf(s) && (t = document.createElement("div"),
                        o = e.substr(0, l),
                        t.innerHTML = "<strong>" + o + "</strong>",
                        t.innerHTML += e.substr(l),
                        t.setAttribute("class", "vbt-autocomplete-item"),
                        t.setAttribute("data-item-id", a),
                        t.setAttribute("data-item-value", e),
                        addEventsListener(t, "click", function(e) {
                            i.value = this.getAttribute("data-item-value"),
                            fireEvent(i, "change", !0),
                            n && n(this.getAttribute("data-item-id"), this.getAttribute("data-item-value")),
                            c()
                        }),
                        r.appendChild(t))
                    })
                }
                function r(e, t, o, a) {
                    e._vbtaccode = o,
                    t in autocompleteArray && (autocompleteArray[t][o] || (autocompleteArray[t][o] = new dataLoader("https://www.vbt.io/Regions/" + t + "/" + o + "/",function(e) {
                        return isArray(e.data) ? e.data : []
                    }
                    )),
                    a) && autocompleteArray[t][o].load(a)
                }
                o && (r(o, "countries", 0),
                t(o),
                t(a),
                t(i),
                o && addEventsListener(o, "input", function(e) {
                    if (c(),
                    !o.value)
                        return !1;
                    r(o, "countries", 0, function(e) {
                        n(o, e, function(e, t) {
                            a && (a.setAttribute("data-countryid", e),
                            r(a, "states", e))
                        })
                    })
                }),
                a && addEventsListener(a, "input", function(e) {
                    if (c(),
                    !a.value)
                        return !1;
                    var t = a.getAttribute("data-countryid") || 0;
                    r(a, "states", t, function(e) {
                        n(a, e, function(e, t) {
                            i && (i.setAttribute("data-stateid", e),
                            r(i, "cities", e))
                        })
                    })
                }),
                i && addEventsListener(i, "input", function(e) {
                    if (c(),
                    !i.value)
                        return !1;
                    var t = i.getAttribute("data-stateid") || 0;
                    r(i, "cities", t, function(e) {
                        n(i, e, function(e, t) {})
                    })
                }),
                autocompleteEvents.close || (autocompleteEvents.close = document.addEventListener("click", function(e) {
                    c(e.target)
                })),
                vbtIpInfo.load(function(e) {
                    var t = empty(e.country) ? "-" : e.country.toUpperCase()
                      , t = empty(countriesList[t]) ? "" : countriesList[t];
                    o && empty(o.value) && !empty(t) && (o.setAttribute("value", t),
                    o.value = t,
                    fireEvent(o, "change", !0)),
                    a && empty(a.value) && !empty(e.region) && (a.setAttribute("value", e.region),
                    a.value = e.region,
                    fireEvent(a, "change", !0)),
                    i && empty(i.value) && !empty(e.city) && (i.setAttribute("value", e.city),
                    i.value = e.city,
                    fireEvent(i, "change", !0)),
                    o && r(o, "countries", 0, function(e) {
                        if (a && !empty(o.value))
                            for (var t in e)
                                if (e[t][1] == o.value)
                                    return a.setAttribute("data-countryid", e[t][0]),
                                    r(a, "states", e[t][0], function(e) {
                                        if (i && !empty(a.value))
                                            for (var t in e)
                                                if (e[t][1] == a.value)
                                                    return i.setAttribute("data-stateid", e[t][0]),
                                                    r(a, "cities", e[t][0], function(e) {})
                                    })
                    })
                }),
                $vbtJQ(e).append("<style>.vbt-autocomplete-wrapper {position: relative !important; top: 0 !important; left: 0 !important; right: 0 !important; width:100% !important;}.vbt-autocomplete-list {position: absolute !important; border: 1px solid #d4d4d4 !important; border-bottom: none !important; border-top: none !important; z-index: 999 !important; top: 100% !important; left: 0 !important; right: 0 !important; width:100%  !important; max-height: 170px !important; overflow: auto !important; box-shadow: 0px 0px 7px 3px #cbd6e2 !important;}.vbt-autocomplete-list .vbt-autocomplete-item {padding: 10px !important; cursor: pointer !important; background-color: #fff !important; border-bottom: 1px solid #d4d4d4 !important; }.vbt-autocomplete-list .vbt-autocomplete-item:hover {background-color: #e9e9e9 !important; }.vbt-autocomplete-list .vbt-autocomplete-item.vbt-autocomplete-item-active {background-color: DodgerBlue !important !important; color: #ffffff !important; }</style>"))
            }
            function smartCountriesField(a, i) {
                vbtIpInfo.load(function(e) {
                    var t, o;
                    e && e.country && !i.value && (t = i.querySelector('option[data-code="' + String(e.country).toLowerCase() + '"]')) && ((o = a.getElementsByClassName("vfb-select-states")[0]) && e.region && (o.setAttribute("data-selected", e.region),
                    o = a.getElementsByClassName("vfb-select-cities")[0]) && e.city && o.setAttribute("data-selected", e.city),
                    t.setAttribute("selected", "SELECTED"),
                    $vbtJQ(i).trigger("chosen:updated"),
                    $vbtJQ(i).trigger("change"))
                })
            }
            function formMultiSteps(t) {
                var l, c, o, a, d, p, u, v, i;
                function n(e) {
                    l = $vbtJQ(".vbpfs-step", t).map(function() {
                        var e = $vbtJQ(".vbpfs-row", this).length
                          , t = $vbtJQ(".vbpfs-row-dependent-hidden", this).length;
                        return removeClass(this, "active"),
                        e <= t ? null : this
                    }).toArray(),
                    i = 1 < l.length,
                    a = i ? (o = l[0],
                    l[l.length - 1]) : (e = !0,
                    o = l[0],
                    l[0]),
                    s(e ? o : c)
                }
                function b(t, e) {
                    var o, a = null, i = null, n = "next" == e;
                    return l.forEach(function(e) {
                        a || (o && n ? a = e : (o = e == t) && !n ? a = i : i = e)
                    }),
                    a
                }
                function r(e) {
                    var t;
                    if ("next" == e) {
                        if (!(t = b(c, "next")))
                            return
                    } else if (!(t = b(c, "prev")))
                        return;
                    s(t)
                }
                function s(t) {
                    var e, o, a, i, n, r, s;
                    c = t,
                    l.forEach(function(e) {
                        (e == t ? addClass : removeClass)(e, "active")
                    }),
                    c || (o = (o = (e = (e = t).querySelectorAll(["input[type=text]", "input[type=email]", "input[type=phone]", "input[type=number]", "input[type=tel]", "input[type=date]", "select", "textarea"].join(",")))[0]) && "SubscriptionForm[field][0]" == o.name ? e[1] : o) && (e = o.getAttribute("autocomplete"),
                    o.setAttribute("autocomplete", "off"),
                    o.focus(),
                    null != e ? o.setAttribute("autocomplete", e) : o.removeAttribute("autocomplete")),
                    o = b(e = t, "next"),
                    e = b(e, "prev"),
                    (o ? addClass : removeClass)(u, "active"),
                    (e ? addClass : removeClass)(p, "active"),
                    (o ? removeClass : addClass)(v, "active"),
                    a = t,
                    d && (i = hasClass(d, "vbpfs-steps-bar-dots") ? "dots" : "lines",
                    d.getElementsByClassName("vbpfs-stepbar-progress")[0] || (d.innerHTML = "",
                    d.innerHTML += '<div class="vbpfs-stepbar-progress"><div class="vbpfs-stepbar-progressbar" style="width: 0%;"></div></div>',
                    d.innerHTML += '<ul class="vbpfs-stepbar-dots"></ul>',
                    "dots" == i && (n = d.getElementsByClassName("vbpfs-stepbar-dots")[0],
                    l.forEach(function(e, t) {
                        createElement("li", {
                            className: "vbpfs-stepbar-dot",
                            html: t + 1
                        }, n)
                    }))),
                    s = ((r = l.reduce(function(e, t, o) {
                        return t == a ? o : e
                    }, 5)) + 1) / l.length * 100,
                    "dots" == i && (s = 0 < r ? r / (l.length - 1) * 100 : 0,
                    foreach(d, ".vbpfs-stepbar-dot", function(e) {
                        (e <= r ? addClass : removeClass)(this, "active")
                    })),
                    d.getElementsByClassName("vbpfs-stepbar-progressbar")[0].style.width = s + "%")
                }
                return hasClass(t, "vbtMultiSteps") && (d = t.getElementsByClassName("vbpfs-steps-bar")[0],
                p = t.getElementsByClassName("vbpfs-button-previous")[0],
                u = t.getElementsByClassName("vbpfs-button-next")[0],
                v = t.getElementsByClassName("vbpfs-button-submit")[0],
                n(!0),
                p && $vbtJQ(p).on("click", function(e) {
                    return r("previous")
                }),
                u) && $vbtJQ(u).on("click", function(e) {
                    return r("next")
                }),
                this.triggerNextStep = function() {
                    return !(!c || c == a || (u && fireEvent(u, "click"),
                    0))
                }
                ,
                this.activateSteps = function(e) {
                    return c && n(e),
                    !1
                }
                ,
                null
            }
            function formDependentFields(n, o, e) {
                var r, a, e = actionsDependentFields[e.keyName] || null;
                function s(e) {
                    return getClosest(e, ".vbpfs-row")
                }
                return e && (r = {},
                a = {},
                e.forEach(function(e) {
                    (r[e.id] = e).rules.forEach(function(e) {
                        a[e.source] = a[e.source] || [],
                        a[e.source].push(e.target)
                    })
                }),
                o && o.activateSteps(),
                addDelegationEventsListener(n, "input, textarea, select", "change paste keyup", function(e) {
                    return t = ((t = this).getAttribute("name") || "").replace("[]", "").replace("SubscriptionForm[field][", "").replace("]", ""),
                    t = a[t] || [],
                    i = !1,
                    t.forEach(function(e) {
                        var o, t, a = r[e], e = n.getElementsByClassName("vbpfs-row-dependent-" + e)[0];
                        e && (o = "or" == a.grouping,
                        a = !!a.rules.reduce(function(e, t) {
                            return o && !0 === e || (o || !1 !== e) && (t = function(e, t) {
                                var o = String(e.value).toLowerCase()
                                  , a = String(e.value1).toLowerCase();
                                if (is_array(t)) {
                                    if (t.length < 1)
                                        return !1;
                                    var i = t.reduce(function(e, t) {
                                        return e || String(t).toLowerCase() == o
                                    }, !1);
                                    switch (e.condition) {
                                    case "is":
                                        return 1 == i;
                                    case "isnot":
                                        return 0 == i
                                    }
                                } else if (!empty(t = String(t).toLowerCase()))
                                    switch (e.condition) {
                                    case "is":
                                        return t == o;
                                    case "isnot":
                                        return t != o;
                                    case "like":
                                        return -1 < t.indexOf(o);
                                    case "greaterthan":
                                        if (is_numeric(t) && is_numeric(o))
                                            return parseInt(t, 10) > parseInt(o, 10);
                                        break;
                                    case "lessthan":
                                        if (is_numeric(t) && is_numeric(o))
                                            return parseInt(t, 10) < parseInt(o, 10);
                                        break;
                                    case "between":
                                        if (is_numeric(t) && is_numeric(o) && is_numeric(a))
                                            return parseInt(t, 10) >= parseInt(o, 10) && parseInt(t, 10) <= parseInt(a, 10)
                                    }
                                return !1
                            }(t, !!(t = n.getElementsByClassName("vbpfs-field-" + t.source)[0]) && function(e) {
                                if ("INPUT" == e.tagName) {
                                    function t(e, t) {
                                        return Array.prototype.map.call(e.querySelectorAll(t), function(e) {
                                            return e.value
                                        })
                                    }
                                    var o;
                                    if ("checkbox" == e.type)
                                        return (o = s(e)) ? t(o, "input[type=checkbox]:checked") : [];
                                    if ("radio" == e.type)
                                        return (o = s(e)) && t(o, "input[type=radio]:checked")[0] || ""
                                }
                                return function(e) {
                                    if (e.options && e.multiple)
                                        return e.options.filter(function(e) {
                                            return e.selected
                                        }).map(function(e) {
                                            return e.value
                                        });
                                    return e.value
                                }(e)
                            }(t)),
                            null === e ? t : o ? e || t : e && t)
                        }, null),
                        t = hasClass(e, "vbpfs-row-dependent-hidden"),
                        e.style.display = a ? "" : "none",
                        (a ? removeClass : addClass)(e, "vbpfs-row-dependent-hidden"),
                        a === t) && (i = !0)
                    }),
                    void (i && o && o.activateSteps());
                    var t, i
                })),
                this.getHiddenFieldsIds = function() {
                    var t = [];
                    return foreach(n, "input, textarea, select", function() {
                        var e = this.getAttribute("name") || "";
                        e && isHiddenDependentField(this) && (e = e.replace("[]", "").replace("SubscriptionForm[field][", "").replace("]", ""),
                        t.push(e))
                    }),
                    t.filter(function(e, t, o) {
                        return o.indexOf(e) === t
                    })
                }
                ,
                null
            }
            function isHiddenDependentField(e) {
                e = getClosest(e, ".vbpfs-row-dependent");
                return !(!e || "none" != getComputedStyle(e).display)
            }
            function isEmptyPhoneInput(e) {
                if (e && "tel" == e.type) {
                    var t = (e.value || "").trim();
                    if ("" == t)
                        return !0;
                    if ("_iti_country"in e && e._iti_country) {
                        t = t.replace(/\+/g, "").replace(/\s/g, "").replace(/-/g, "");
                        if (t == e._iti_country)
                            return !0;
                        if ("" == t)
                            return !0
                    }
                }
                return !1
            }
            function getFormData(e, t="json") {
                var o = new FormData(e);
                return foreach(e, "input", function() {
                    isEmptyPhoneInput(this) && o.set(this.name, "")
                }),
                t && o.append("_format", t),
                o
            }
            function __(e) {
                return e
            }
            function addClass(e, t) {
                return $vbtJQ(e).addClass(t)
            }
            function removeClass(e, t) {
                return $vbtJQ(e).removeClass(t)
            }
            function __checkForValidPersona(e) {
                var t = 0
                  , o = 5
                  , a = ((0 == e.execFor || 1 == e.execFor && visitor.ssId || 2 == e.execFor && !visitor.ssId) && t++,
                "-1" != e.filterGeoloc && e.filterGeoloc != visitor.country.toString().toLowerCase() || t++,
                console.log("Geolocation: " + e.filterGeoloc),
                console.log("Visitor Location: " + visitor.country.toString().toLowerCase()),
                "" != e.filterGeolocstate && "a:0:{}" != e.filterGeolocstate.toString().toLowerCase() && "n;" != e.filterGeolocstate.toString().toLowerCase() && e.filterGeolocstate.toString().toLowerCase() != visitor.state.toString().toLowerCase() || t++,
                __checkHowManyTimeActionIsTriggered(e))
                  , a = (("0" == e.execInterval || "1" == e.execInterval && 1 == a || "2" == e.execInterval && a == e.execIntervalNbr) && t++,
                __checkIfMobileDevice());
                return ("0" == e.filterDevice || "2" == e.filterDevice && a || "1" == e.filterDevice && !a) && t++,
                "" != e.filterPPC && (o += 1,
                a = !(a = vbt_getValueFromURL(location.href, "utm_source")) && vbt_getValueFromURL(location.href, "gclid") ? "google" : a) && ("google" == (a = a.toLowerCase()) ? -1 != e.filterPPC.indexOf("1") && t++ : "bing" == a ? -1 != e.filterPPC.indexOf("2") && t++ : "facebook" == a ? -1 != e.filterPPC.indexOf("3") && t++ : "twitter" == a ? -1 != e.filterPPC.indexOf("4") && t++ : "linkedin" == a ? -1 != e.filterPPC.indexOf("5") && t++ : "pinterest" == a && -1 != e.filterPPC.indexOf("6") && t++),
                console.log("Goal Action Passed: " + t + " FROM " + o),
                t == o
            }
            function _execActionToObject(e, t, o) {
                if (o || console.log("action has delay: " + e.delay + " seconds"),
                _actionInProgress)
                    return (a = []).attrs = e,
                    a.callbackFunc = t,
                    _actionsQueue.push(a),
                    console.log("A new Action #" + e.objId + " has been sent to queue."),
                    !1;
                if (!o && 0 < e.delay) {
                    var a = (vbt_getCookie("__vbDelayed") || "").split(",");
                    -1 == a.indexOf(e.objId) && (a.push(e.objId),
                    vbt_setCookie("__vbDelayed", a.join(","), 5)),
                    __registerDelayAction(e),
                    "function" == typeof t && t()
                } else {
                    __removeDelayedActionFromCookie(e.objId, e.execInterval);
                    var i, n = 0, r = !0, s = (void 0 !== e.variations && 0 < e.variations.length && ((n = vbt_getRandomInt(0, e.variations.length)) ? (n--,
                    r = !1,
                    console.log("My Variation is " + (n + 1) + " of " + (e.variations.length + 1))) : console.log("My Variation is the original")),
                    e.popStyle);
                    switch (r || (s = e.variations[n].popStyle),
                    e.type) {
                    case "1":
                        _registerActionToTrack(e, r ? 0 : e.variations[n].objId),
                        0 == s ? r ? _displayPopupWnd(e, e.messageId, e.delay, e.popTheme, null, t) : _displayPopupWnd(e, e.variations[n].messageId, e.delay, e.variations[n].popTheme, null, t) : 1 == s ? _displayPopoverWnd(e.messageId, e._target, e.delay, e.popTheme, t) : 2 == s && (r ? _displayFooterBar(e, e.messageId, e.delay, e.popTheme, null, t) : _displayFooterBar(e, e.variations[n].messageId, e.delay, e.variations[n].popTheme, null, t));
                        break;
                    case "2":
                        _registerActionToTrack(e, r ? 0 : e.variations[n].objId),
                        r ? (console.log("original"),
                        _displayPopupFormWnd(e, e.delay, e.popTheme, t)) : (console.log("notoriginal"),
                        (i = {}).messageId = e.variations[n].messageId,
                        i.popStyle = s,
                        i.formId = e.formId,
                        i.objId = e.objId,
                        _displayPopupFormWnd(i, e.delay, e.variations[n].popTheme, t));
                        break;
                    case "3":
                        _registerActionToTrack(e, r ? 0 : e.variations[n].objId),
                        r ? _displayPopupPollWnd(e, e.delay, e.popTheme, t) : ((i = {}).messageId = e.variations[n].messageId,
                        i.popStyle = s,
                        i.pollId = e.pollId,
                        i.objId = e.objId,
                        _displayPopupPollWnd(i, e.delay, e.variations[n].popTheme, t));
                        break;
                    case "4":
                        _registerActionToTrack(e, 0),
                        _forceRedirectUrl(e.url, e.delay, t);
                        break;
                    case "5":
                        _registerActionToTrack(e, 0),
                        _injectJSCode(e.jscode, e.delay, t)
                    }
                }
            }
            function _displayPopupWnd(e, t, o, a, i, n) {
                _actionInProgress = !0,
                console.log("popup - MessageID: " + t),
                visitor._vbtFlags.MicroModal || (visitor._vbtFlags.MicroModal = !0,
                vbt_createElement("div", document.body, '<div id="vbtWebhookBox-overlay" tabindex="-1"><div id="vbtWebhookBox-container" role="dialog" aria-modal="true" ></div></div>', {
                    id: "vbtWebhookBox",
                    "aria-hidden": "true"
                }));
                var r = document.getElementById("vbtWebhookBox-container")
                  , s = (r.innerHTML = "",
                document.getElementById(t));
                if (s || (d = document.getElementById("vb_newsletter_action_" + t.split("MyPopup_action_")[1])) && ((s = document.createElement("div")).id = t,
                d.parentNode.insertBefore(s, d),
                s.appendChild(s)),
                s) {
                    r.appendChild(s.cloneNode(!0));
                    var l, c, d = $vbtJQ("form", r).get(0), s = (d && (c = new formDependentFields(d,l = new formMultiSteps(d),e),
                    attachFlatPickr(d),
                    attachRecaptcha(d),
                    attachBirthdayPicker(d),
                    attachCheckboxSelectStyler(d),
                    attachRegionsAutoComplete(d),
                    $vbtJQ(d).append('<style>.vboutLPGDPRErrorMessage, .vboutLPGDPRErrorMessage * { color: red !important; }form[data-vboutpopup="modal-form"] .iti {display: block;}form[data-vboutpopup="modal-form"] input[type=tel] {padding-left: 48px!important;}.vbtPopupThemeWrapper .vbtPopupThemeContent .vbpfs-form .vbpfs-input input[type=tel] {padding-left: 48px!important;}.vbtPopupThemeWrapper .vbtPopupThemeContent .vbpfs-form .recaptchaField > div {margin: 0 auto;}.flatpickr-calendar.animate.open {z-index: 99999999!important;}</style>')),
                    $vbtJQ("#VBOUT_FORM_CONTAINER [data-placeholder]").each(function() {
                        $vbtJQ(this).attr("placeholder", $vbtJQ(this).attr("data-placeholder"))
                    }),
                    console.log("messageId to show: " + t),
                    $vbtJQ("body").css("overflow", "hidden"),
                    $vbtJQ("[data-vboutpopup=modal-close-link]", r).length || (1 == a ? $vbtJQ("[data-vboutpopup=modal-body]", r).append('<div data-vboutpopup="modal-close-link"><a href="#">Close this popup</a></div>') : 13 == a ? $vbtJQ("[data-vboutpopup=modal-theme]", r).prepend('<a href="#" data-vboutpopup="modal-close-link">&nbsp;</a>') : 15 == a || 17 == a ? $vbtJQ("[data-vboutpopup=modal-theme]", r).append('<a href="#" data-vboutpopup="modal-close-link">&nbsp;</a>') : 2 == a ? $vbtJQ("[data-vboutpopup=modal-body]", r).append('<div data-vboutpopup="modal-close-link"><a href="#">Close this popup</a></div>') : 3 != a && 4 != a && 5 != a || $vbtJQ("[data-vboutpopup=modal-body]", r).append('<a data-vboutpopup="modal-close-link" href="#">x</a>')),
                    $vbtJQ("[data-vboutpopup=modal-close-link]", r).get(0));
                    s && ($vbtJQ(s).hasClass("vbtPopupThemeCloseBtn") ? s.innerHTML = "X" : empty(trim(s.innerHTML)) && "A" == s.tagName && $vbtJQ(s).addClass("f-link-empty")),
                    $vbtJQ("[data-vboutpopup=modal-close-link]", r).attr("href", "javascript://"),
                    $vbtJQ("[data-vboutpopup=modal-close-link]", r).unbind("click").click(function(e) {
                        return e.preventDefault(),
                        MicroModal.close("vbtWebhookBox"),
                        !1
                    }),
                    $vbtJQ(".vbpfs-submit a.vbpfs-button", r).unbind("click").click(function(e) {
                        setTimeout(function() {
                            $vbtJQ("[data-vboutpopup=modal-close-link]", r).trigger("click")
                        }, 500)
                    }),
                    $vbtJQ("input[type=file]", r).each(function() {
                        this.getAttribute("data-accept") && !this.getAttribute("accept") && this.setAttribute("accept", this.getAttribute("data-accept"))
                    });
                    try {
                        "function" == typeof i && i(r, {
                            $formMultiSteps: l,
                            $formDependentFields: c
                        })
                    } catch (e) {}
                    MicroModal.show("vbtWebhookBox", {
                        onShow: function() {
                            $vbtJQ("html").css("overflow", "hidden")
                        },
                        onClose: function() {
                            try {
                                _actionInProgress = !1,
                                $vbtJQ("body").css("overflow", ""),
                                $vbtJQ("html").css("overflow", "");
                                try {
                                    "function" == typeof n && n()
                                } catch (e) {}
                                setTimeout(_execNextActionInQueue, 250)
                            } catch (e) {}
                        }
                    })
                }
            }
            function _displayPopoverWnd(e, t, o, a, i) {
                $vbtJQ(t).popover({
                    placement: "bottom",
                    html: !0,
                    title: "",
                    content: function() {
                        return details_in_popup("tmp-id-" + $vbtJQ.now(), document.getElementById(e))
                    },
                    trigger: "manual"
                }).off("shown.bs.popover").on("shown.bs.popover", function() {
                    var t = $vbtJQ(this);
                    "dark-theme" == a && t.next(".popover").addClass("dark"),
                    t.next(".popover").find("button.close").unbind("click").click(function(e) {
                        t.popover("hide");
                        try {
                            "function" == typeof i && i()
                        } catch (e) {}
                    })
                }).popover("show")
            }
            function _displayFooterBar(e, t, o, a, i, n) {
                _actionInProgress = !0,
                console.log("optin bar: " + t),
                ($vbtJQ("#" + t).parents("#vb_newsletter_action_" + t.split("MyPopup_action_")[1]).length ? $vbtJQ("#" + t).parents("#vb_newsletter_action_" + t.split("MyPopup_action_")[1]) : $vbtJQ("#vb_message_action_" + t.split("MyPopup_action_")[1]).length ? $vbtJQ("#vb_message_action_" + t.split("MyPopup_action_")[1]) : $vbtJQ("#" + t).parent().is("body") ? $vbtJQ("#" + t) : $vbtJQ("#" + t).parent()).show(),
                $vbtJQ("[data-vboutbar=modal-theme]").attr("style", "");
                var r, s, l = document.getElementById(t), t = $vbtJQ("form", l).get(0), e = (t && (s = new formDependentFields(t,r = new formMultiSteps(t),e),
                attachFlatPickr(t),
                attachRecaptcha(t),
                attachBirthdayPicker(t),
                attachCheckboxSelectStyler(t),
                attachRegionsAutoComplete(t),
                $vbtJQ(t).append('<style>.vboutLPGDPRErrorMessage, .vboutLPGDPRErrorMessage * { color: red !important; }form[data-vboutpopup="modal-form"] .iti {display: block;}form[data-vboutpopup="modal-form"] input[type=tel] {padding-left: 48px!important;}.vbtPopupThemeWrapper .vbtPopupThemeContent .vbpfs-form .vbpfs-input input[type=tel] {padding-left: 48px!important;}.flatpickr-calendar.animate.open {z-index: 99999999!important;}</style>')),
                $vbtJQ("[data-vboutbar=modal-close-link]", l).length || (14 == a ? $vbtJQ("[data-vboutbar=modal-header]", l).append('<div data-vboutbar="modal-close-link">&nbsp;</div>') : 1 == a ? $vbtJQ("[data-vboutbar=modal-header] [data-vboutbar=modal-container]", l).append('<div data-vboutbar="modal-close-link">&#215;</div>') : 10 == a ? $vbtJQ("[data-vboutbar=modal-container]", l).append('<div data-vboutbar="modal-close-link">&nbsp;</div>') : 11 == a ? $vbtJQ("[data-vboutbar=modal-container]", l).append('<div data-vboutbar="modal-close-link">&#215;</div>') : 12 == a ? $vbtJQ("[data-vboutbar=modal-header] [data-vboutbar=modal-container]", l).prepend('<div data-vboutbar="modal-close-link"><img alt="" style="min-width:16px!important;min-height:16px!important;" src="https://app.vbout.com/trackerjs/behaviors/optinbars/12/images/close.png"></div>') : 13 == a ? $vbtJQ("[data-vboutbar=modal-header]", l).append('<div data-vboutbar="modal-close-link">&#215;</div>') : 15 == a ? $vbtJQ("[data-vboutbar=modal-header]", l).append('<div data-vboutbar="modal-close-link">&nbsp;</div>') : 16 == a ? $vbtJQ("[data-vboutbar=modal-body]", l).prepend('<div data-vboutbar="modal-close-link"><img alt="" src="https://app.vbout.com/trackerjs/behaviors/optinbars/16/images/close.png"></div> ') : 2 == a || 3 == a ? $vbtJQ("[data-vboutbar=modal-header] [data-vboutbar=modal-container]", l).append('<div data-vboutbar="modal-close-link">&#215;</div>') : 4 == a ? $vbtJQ("[data-vboutbar=modal-privacy-info]").length ? $vbtJQ("[data-vboutbar=modal-privacy-info]", l).append('<p data-vboutbar="modal-privacy-negation"><a data-vboutbar="modal-close-link" href="#">No thanks, don\'t show this bar again.</a></p>') : $vbtJQ("[data-vboutbar=modal-container]", l).append('<div data-vboutbar="modal-close-link">&#215;</div>') : 7 == a ? $vbtJQ("[data-vboutbar=modal-header]", l).append('<div data-vboutbar="modal-close-link">&nbsp;</div>') : 8 == a && $vbtJQ("[data-vboutbar=modal-container]", l).prepend('<div data-vboutbar="modal-close-link">&nbsp;</div>')),
                $vbtJQ("[data-vboutbar=modal-close-link]", l).get(0));
                e && ($vbtJQ(e).hasClass("vbtPopupThemeCloseBtn") ? e.innerHTML = "X" : empty(trim(e.innerHTML)) && "A" == e.tagName && $vbtJQ(e).addClass("f-link-empty"));
                try {
                    "function" == typeof i && i(l, {
                        $formMultiSteps: r,
                        $formDependentFields: s
                    })
                } catch (e) {}
                $vbtJQ("[data-vboutbar=modal-close-link]", l).unbind("click").click(function(e) {
                    e.preventDefault(),
                    _actionInProgress = !1,
                    $vbtJQ(l).fadeOut("fast", function(e) {
                        _actionInProgress = !1,
                        $vbtJQ(this).parent().hide();
                        try {
                            "function" == typeof n && n()
                        } catch (e) {}
                        setTimeout(_execNextActionInQueue, 250)
                    })
                }),
                $vbtJQ(".vbpfs-submit a.vbpfs-button", l).unbind("click").click(function(e) {
                    setTimeout(function() {
                        $vbtJQ("[data-vboutbar=modal-close-link]", l).trigger("click")
                    }, 500)
                })
            }
            function _displayPopupFormWnd(p, e, t, o) {
                function a(c, d) {
                    $vbtJQ(n, c).each(function(e) {
                        var n, r, s, l = $vbtJQ(this).parents("form").get(0);
                        l && !l._vbTWHF && (l._vbTWHF = !0,
                        n = $vbtJQ(l).hasClass("vbpfs-form"),
                        $vbtJQ(c).find("#VBOUT_FORM_CONTAINER").find("form").css("float") && 2 == p.popStyle && $vbtJQ(c).find("#VBOUT_FORM_CONTAINER").addClass("clearfix").css("width", "auto"),
                        setTimeout(function() {
                            attachIntlTelPlugin(l),
                            attachRegionsSelectBoxes(l)
                        }, 500),
                        s = n ? (r = function(e) {
                            var t = $vbtJQ(c).find("[data-vboutpopup=modal-form-submit], [data-vboutbar=modal-form-submit]").get(0);
                            t && (e ? (t.getAttribute("data-label") || t.setAttribute("data-label", t.innerHTML),
                            t.innerHTML = '<img src="https://app.vbout.com/images/facebook-loader.gif" style="">') : t.getAttribute("data-label") && (t.innerHTML = t.getAttribute("data-label")))
                        }
                        ,
                        function(e) {
                            if ("error" == e.status) {
                                o = e,
                                $vbtJQ(".vboutEmbedFormErrorMessage", t = l).remove(),
                                is_array(o.errorList) && o.errorList.length && (a = t.querySelectorAll("input, select, textarea"),
                                o.errorList.forEach(function(e) {
                                    var t, o;
                                    for (o in a)
                                        if (0 === ((t = a[o]).name || "").indexOf(e.name))
                                            return void u(e.message, t)
                                }));
                                t = $vbtJQ('<div class="VBOUT_FORM_ERROR" />').html(e.message);
                                $vbtJQ(l).prepend(t)
                            } else {
                                $vbtJQ(c).find(".vbtPopupThemeContainer").html(e.message),
                                $vbtJQ(c).find("#ClosePollForm").click(function(e) {
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    $vbtJQ("[data-vboutpopup=modal-close-link], [data-vboutbar=modal-close-link]", c).trigger("click")
                                });
                                try {
                                    "redirect"in e && "" != e.redirect && window.open(e.redirect, "_blank")
                                } catch (e) {}
                            }
                            var t, o, a
                        }
                        ) : 0 == p.popStyle ? (r = function(e) {
                            var t = $vbtJQ(c).find("[data-vboutpopup=modal-form-submit]").get(0);
                            t && (e ? (t.getAttribute("data-label") || t.setAttribute("data-label", t.innerHTML),
                            t.innerHTML = '<img src="https://app.vbout.com/images/facebook-loader.gif" style=""> please wait...') : t.getAttribute("data-label") && (t.innerHTML = t.getAttribute("data-label")))
                        }
                        ,
                        function(e) {
                            if ("error" == e.status) {
                                var t = $vbtJQ('<div class="VBOUT_FORM_ERROR" />').html(e.message);
                                $vbtJQ(c).find("#VBOUT_FORM_CONTAINER").prepend(t)
                            } else {
                                $vbtJQ(c).find("#VBOUT_FORM_CONTAINER").addClass("clearfix").addClass(e.status).html(e.message),
                                $vbtJQ(c).find("#ClosePollForm").click(function(e) {
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    MicroModal.close("vbtWebhookBox")
                                });
                                try {
                                    "redirect"in e && "" != e.redirect && window.open(e.redirect, "_blank")
                                } catch (e) {}
                            }
                        }
                        ) : (r = function(e) {
                            var t = $vbtJQ(c).find("[data-vboutbar=modal-form-submit]").get(0);
                            t && (e ? (t.getAttribute("data-label") || t.setAttribute("data-label", t.innerHTML),
                            t.innerHTML = '<img src="https://app.vbout.com/images/facebook-loader.gif" style=""> please wait...') : t.getAttribute("data-label") && (t.innerHTML = t.getAttribute("data-label")))
                        }
                        ,
                        function(e) {
                            var t;
                            "error" == e.status ? (t = $vbtJQ('<div class="VBOUT_FORM_ERROR" />').html(e.message),
                            $vbtJQ(c).find("#VBOUT_FORM_CONTAINER").prepend(t)) : ($vbtJQ(c).find("#VBOUT_FORM_CONTAINER").addClass("clearfix").addClass(e.status).html(e.message),
                            $vbtJQ(c).find("#ClosePollForm").remove())
                        }
                        ),
                        $vbtJQ(this).click(function(e) {
                            if (e.preventDefault(),
                            d.$formMultiSteps && d.$formMultiSteps.triggerNextStep())
                                return !1;
                            $vbtJQ(c).find('[name="SubscriptionForm[sessionId]"]').val(visitor._sessionId);
                            var a, t, o, i = !0;
                            n ? (e = c,
                            $vbtJQ(".vboutEmbedFormErrorMessage", t = l).remove(),
                            $vbtJQ(".VBOUT_FORM_ERROR", e).remove(),
                            o = !0,
                            $vbtJQ("input.required, select.required, textarea.required", t).each(function() {
                                var e = this
                                  , t = $vbtJQ(e).val();
                                "" == t ? isHiddenDependentField(e) || (u(__("This field is required."), e),
                                o = !1) : !$vbtJQ(e).hasClass("email") || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t) || (u(__("This field must be a valid email."), e),
                                o = !1)
                            }),
                            $vbtJQ("input.vfb-gdpr", t).each(function() {
                                (-1 < this.name.indexOf("[gdpr]") || $vbtJQ(this).hasClass("requiredOption")) && !this.checked && (o = !1,
                                u(__("This field is required."), this))
                            }),
                            $vbtJQ("input[type=tel]", t).each(function() {
                                $vbtJQ(this).hasClass("required") && isEmptyPhoneInput(this) && !isHiddenDependentField(this) && (o = !1,
                                u(__("This field is required."), this))
                            }),
                            $vbtJQ("input.birthday-picker", t).each(function() {
                                var e = this;
                                !$vbtJQ(e).hasClass("required") || $vbtJQ(e).val() || isHiddenDependentField(e) || (o = !1,
                                u(__("This field is required."), e)),
                                window.birthdayInput && !window.birthdayInput(e, "validation") && (u(__("Invalid birthday date."), e),
                                o = !1)
                            }),
                            o || (e = $vbtJQ('<div class="VBOUT_FORM_ERROR" />').html(__("Please check the errors in the form.")),
                            $vbtJQ(t).prepend(e)),
                            i = o) : ($vbtJQ(c).find("input.required, input.required").each(function() {
                                $vbtJQ(this).removeClass("popup-field-error"),
                                $vbtJQ(this).next("p").remove(),
                                "" == $vbtJQ(this).val() ? isHiddenDependentField(this) || ($vbtJQ(this).addClass("popup-field-error"),
                                $vbtJQ(this).after('<p style="font-size:12px;color:#cc0000;">this field is required!</p>'),
                                i = !1) : !$vbtJQ(this).hasClass("email") || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($vbtJQ(this).val()) ? ($vbtJQ(this).removeClass("popup-field-error"),
                                $vbtJQ(this).next("p").remove()) : ($vbtJQ(this).addClass("popup-field-error"),
                                $vbtJQ(this).after('<p style="font-size:12px;color:#cc0000;">this field must be a valid email!</p>'),
                                i = !1)
                            }),
                            $vbtJQ("input[type=file]", l).each(function() {
                                var e;
                                this.files instanceof FileList && this.files[0] && !isNaN(this.files[0].size) && 0 < this.files[0].size && (e = this.getAttribute("data-max-size"),
                                !isNaN(e)) && 0 < e && e < this.files[0].size / 1024 / 1024 && (i = !1,
                                $vbtJQ(this).addClass("popup-field-error"),
                                $vbtJQ(this).after('<p style="font-size:12px;color:#cc0000;">File size exceeded max size</p>'))
                            }),
                            $vbtJQ(".vboutLPGDPRErrorMessage", t = l).removeClass("vboutLPGDPRErrorMessage"),
                            $vbtJQ("input.vfb-gdpr", t).each(function() {
                                (-1 < this.name.indexOf("[gdpr]") || $vbtJQ(this).hasClass("requiredOption")) && !this.checked && $vbtJQ(this.parentNode).addClass("vboutLPGDPRErrorMessage")
                            }),
                            ($vbtJQ(".vboutLPGDPRErrorMessage", t).get(0) ? 0 : 1) || (i = !1),
                            a = !0,
                            $vbtJQ("input[type=tel]", l).each(function() {
                                var e, t, o = this;
                                $vbtJQ(o).hasClass("required") && "_iti_country"in o && o._iti_country && (o.value.replace(/\+/g, "").replace(/\s/g, "").replace(/-/g, "") != o._iti_country || isHiddenDependentField(o) || (a = !1,
                                e = $vbtJQ('<label class="error" generated="true" />').html(__("This field is required.")),
                                (t = $vbtJQ(o).closest(".iti--allow-dropdown").get(0)) ? e.insertAfter(t) : e.insertAfter(o)))
                            }),
                            a || (i = !1)),
                            i && (d.$formDependentFields && ($vbtJQ('input[name="hiddenDependentFields"]', l).remove(),
                            d.$formDependentFields) && (e = d.$formDependentFields.getHiddenFieldsIds().join(",")) && $vbtJQ('<input type="hidden" name="hiddenDependentFields" />').attr("value", e).appendTo(l),
                            e = vbt_baseURL + "tracker/newsletter/" + p.formId + "/" + p.objId + "/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain + "&webhookid=" + (p.actionId || ""),
                            $vbtJQ(c).find(".VBOUT_FORM_ERROR").remove(),
                            r(!0),
                            ajaxPostFormData(e, l, function(e) {
                                r(!1),
                                s(e),
                                "success" != e.status && "confirm" != e.status || 0 < e.id && (visitor.ssId = e.id,
                                visitorTrackInfo.ssId = e.id,
                                vbt_setCookie("__ssId", visitor.ssId, 168),
                                vbt_GetSubscriberInfo(!0))
                            }, function(e) {
                                r(!1),
                                $vbtJQ(c).find(".pollingFormContainer").html("An error occured: " + e.status + " " + e.statusText)
                            }))
                        }))
                    })
                }
                var i = 2 < p.messageId.replace(/[^_]/g, "").length ? p.messageId.substring(0, 15) + p.messageId.split("MyPopup_action_")[1].split("_")[0] + p.messageId.split("MyPopup_action_")[1].split("_")[1] : p.messageId
                  , n = 0 == p.popStyle ? '[data-vboutpopup="modal-form-submit"]' : '[data-vboutbar="modal-form-submit"]'
                  , u = function(e, t) {
                    var o = document.createElement("div")
                      , e = (o.innerHTML = '<div class="vboutEmbedFormErrorMessage">' + e + "</div>",
                    $vbtJQ(t).closest(".vbpfs-row").get(0))
                      , a = $vbtJQ(t).closest(".vbt-checkboxselectinput").get(0);
                    e && ($vbtJQ(".vboutEmbedFormErrorMessage", e).remove(),
                    "INPUT" != t.tagName || "checkbox" != t.type && "radio" != t.type ? e.appendChild(o.children[0]) : "checkbox" == t.type && hasClass(t, "vfb-gdpr") || (a ? a.parentNode.appendChild(o.children[0]) : (a = $vbtJQ(".vbpfs-field", e).get(0) || t).parentNode.insertBefore(o.children[0], a)))
                };
                0 == p.popStyle ? (_displayPopupWnd(p, i, e, t, a, o),
                $vbtJQ("body").css("overflow", "hidden")) : _displayFooterBar(p, i, e, t, a, o)
            }
            function _displayPopupPollWnd(s, e, t, o) {
                2 < s.messageId.replace(/[^_]/g, "").length ? (s.messageId.substring(0, 15),
                s.messageId.split("MyPopup_action_")[1].split("_")[0],
                s.messageId.split("MyPopup_action_")[1].split("_")[1]) : s.messageId;
                function a(r) {
                    $vbtJQ(i, r).each(function(e) {
                        var i, n = $vbtJQ(this).parents("form").get(0);
                        n._vbTWHF || (n._vbTWHF = !0,
                        i = $vbtJQ(n).hasClass("vbpfs-form"),
                        $vbtJQ(n).submit(function(e) {
                            e.preventDefault()
                        }),
                        $vbtJQ(r).find("#PollChoices label > span").click(function() {
                            $vbtJQ(this).parent().parent().find("input[type=radio]").attr("checked", !0)
                        }),
                        $vbtJQ(this).click(function(e) {
                            var o, t, a;
                            e.preventDefault(),
                            $vbtJQ(r).find('[name="PollForm[sessionId]"]').val(visitor._sessionId),
                            a = i ? (o = function(e) {
                                var t = $vbtJQ(r).find("[data-vboutpopup=modal-form-submit], [data-vboutbar=modal-form-submit]").get(0);
                                t && (e ? (t.getAttribute("data-label") || t.setAttribute("data-label", t.innerHTML),
                                t.innerHTML = '<img src="https://app.vbout.com/images/facebook-loader.gif" style="">') : t.getAttribute("data-label") && (t.innerHTML = t.getAttribute("data-label")))
                            }
                            ,
                            t = function() {
                                $vbtJQ(".VBOUT_FORM_ERROR", n).remove(),
                                o(!0)
                            }
                            ,
                            function(e) {
                                if (o(!1),
                                "error" == e.status) {
                                    var t = $vbtJQ('<div class="VBOUT_FORM_ERROR" />').html(e.message);
                                    $vbtJQ(n).prepend(t)
                                } else {
                                    $vbtJQ(r).find(".vbtPopupThemeContainer").html(e.message),
                                    $vbtJQ(r).find("#ClosePollForm").click(function(e) {
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        $vbtJQ("[data-vboutpopup=modal-close-link], [data-vboutbar=modal-close-link]", r).trigger("click")
                                    });
                                    try {
                                        "redirect"in e && "" != e.redirect && window.open(e.redirect, "_blank")
                                    } catch (e) {}
                                }
                            }
                            ) : 0 == s.popStyle ? (t = function() {
                                $vbtJQ(r).find(".pollingFormContainer [data-vboutpopup=modal-form-submit]").data("label", $vbtJQ(r).find(".pollingFormContainer [data-vboutpopup=modal-form-submit]").html()),
                                $vbtJQ(r).find(".pollingFormContainer [data-vboutpopup=modal-form-submit]").html('<img src="https://app.vbout.com/images/facebook-loader.gif" style=""> please wait...')
                            }
                            ,
                            function(t) {
                                t && ($vbtJQ(r).find(".pollingFormContainer").addClass(t.status).html(t.message),
                                $vbtJQ(r).find("#ShowResults").unbind("click").click(function(e) {
                                    e.preventDefault(),
                                    $vbtJQ(r).find(".pollingFormContainer").removeClass(t.status).html("RESULTS ARE GONE!!!")
                                })),
                                $vbtJQ(r).find("#ClosePollForm").click(function(e) {
                                    e.preventDefault(),
                                    MicroModal.close("vbtWebhookBox")
                                })
                            }
                            ) : (t = function() {
                                $vbtJQ(r).find(".pollingFormContainer [data-vboutbar=modal-form-submit]").data("label", $vbtJQ(r).find(".pollingFormContainer [data-vboutbar=modal-form-submit]").html()),
                                $vbtJQ(r).find(".pollingFormContainer [data-vboutbar=modal-form-submit]").html('<img src="https://app.vbout.com/images/facebook-loader.gif" style=""> please wait...')
                            }
                            ,
                            function(t) {
                                t && ($vbtJQ(r).find(".pollingFormContainer").addClass(t.status).html(t.message),
                                $vbtJQ(r).find("#ShowResults").unbind("click").click(function(e) {
                                    e.preventDefault(),
                                    $vbtJQ(r).find(".pollingFormContainer").removeClass(t.status).html("RESULTS ARE GONE!!!")
                                })),
                                $vbtJQ(r).find("#ClosePollForm").hide()
                            }
                            ),
                            0 == $vbtJQ(r).find('input[type="radio"]:checked').length ? alert("Please check an option") : $vbtJQ.ajax({
                                url: vbt_baseURL + "tracker/poll/" + s.pollId + "/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
                                type: "POST",
                                dataType: "json",
                                data: $vbtJQ(r).find("form").serialize(),
                                beforeSend: function() {
                                    t()
                                },
                                success: function(e) {
                                    a(e)
                                },
                                error: function(e) {
                                    $vbtJQ(r).find(".pollingFormContainer").html("An error occured: " + e.status + " " + e.statusText)
                                }
                            })
                        }))
                    })
                }
                var i = 0 == s.popStyle ? '[data-vboutpopup="modal-form-submit"]' : '[data-vboutbar="modal-form-submit"]';
                0 == s.popStyle ? _displayPopupWnd(s, s.messageId, e, t, a, o) : 2 == s.popStyle && _displayFooterBar(s, s.messageId, e, t, a, o)
            }
            function _forceRedirectUrl(e, t, o) {
                window.location = e
            }
            function _injectJSCode(e, t, o) {
                $vbtJQ("body").append(e.replace(/&quot;/g, '"')),
                "function" == typeof o && o()
            }
            function details_in_popup(t, e) {
                var e = $vbtJQ(e).attr("data-goalid")
                  , o = visitor.ssId || visitor.ip;
                return $vbtJQ.ajax({
                    url: vbt_baseURL + "tracker/message/" + e + "/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
                    type: "POST",
                    dataType: "json",
                    data: "pageUrl=" + document.URL + "&pageTitle=" + document.title + "&userId=" + o,
                    success: function(e) {
                        $vbtJQ("#" + t).find(".inner").html(e.message)
                    },
                    error: function(e) {
                        $vbtJQ("#" + t).html("An error occured: " + e.status + " " + e.statusText)
                    }
                }),
                '<div id="' + t + '"><button style="position: absolute; right: 10px; top: 4px; z-index: 105001; border: 0 none; cursor: pointer; padding: 0; color: #000; float: right; font-size: 21px; font-weight: bold; line-height: 1; opacity: 0.2; text-shadow: 0 1px 0 #fff;" class="close close-right-button" type="button">×</button><div class="inner"><div style="width: 280px">Loading...</div></div></div>'
            }
            function __registerDelayAction(e) {
                vbt_getCookie("__vbDelayedAction_" + e.objId) || (e._target = null,
                vbt_setCookie("__vbDelayedAction_" + e.objId, Base64.encode(JSON.stringify({
                    objId: e.objId,
                    delay: e.delay
                })), 5)),
                setTimeout(function() {
                    _execActionDelayedTimer(e.objId)
                }, 1e3)
            }
            function __removeDelayedActionFromCookie(e, t) {
                0 == t && vbt_deleteCookie("__vbDelayedAction_" + e);
                var o = (vbt_getCookie("__vbDelayed") || "").split(",")
                  , a = [];
                for (i = 0; i < o.length; i++)
                    o[i] != e && a.push(e);
                vbt_setCookie("__vbDelayed", a.join(","), 5),
                console.log("ActionID: " + e + " removed from cookie.")
            }
            function _registerActionToTrack(e, t) {
                "undefined" === visitorTrackInfo ? setTimeout(function() {
                    _registerActionToTrack(e, t)
                }, 1e3) : actionAlreadySent ? visitorTrackInfo.updateActionVariation(e.objId, t) : e.actionId && visitorTrackInfo.trackAction(e.actionId, t)
            }
            function _execActionDelayedTimer(e) {
                var t = vbt_getCookie("__vbDelayedAction_" + e);
                if (t)
                    try {
                        var o, a, i = JSON.parse(Base64.decode(t));
                        i.delay <= 0 ? (a = null === (a = (o = "webhook" + i.objId)in _actionsBank ? _actionsBank[o] : null) ? (o = "goal" + i.objId)in _actionsBank ? _actionsBank[o] : null : a) ? (console.log("delay finish execute it now!!!!"),
                        _execActionToObject(a, "", !0)) : __removeDelayedActionFromCookie(i.objId, 0) : (--i.delay,
                        vbt_setCookie("__vbDelayedAction_" + i.objId, Base64.encode(JSON.stringify(i)), 5),
                        setTimeout(function() {
                            _execActionDelayedTimer(e)
                        }, 1e3))
                    } catch (e) {}
            }
            function _execNextActionInQueue() {
                var e;
                _actionsQueue.length && _execActionToObject((e = _actionsQueue.shift()).attrs, e.callbackFunc)
            }
            function __checkHowManyTimeActionIsTriggered(e) {
                var t = 0;
                return e.isaction ? (t = vbt_getCookie("__vbAction_" + e.objId + "_" + visitor._sessionId),
                console.log("Action is triggered: " + t)) : (t = vbt_getCookie("__vbGoal_" + e.objId),
                console.log("Goal is triggered: " + t)),
                isNaN(t) ? 0 : t
            }
            isWebhookEnabled && (intlTelLib = !(intlTelQueue = []))
        }
        {
            function _execSendEmailToSubscriber(e) {
                var t = vbt_getCookie("__ssId");
                t && (console.log("send email to subscriber: " + t),
                $vbtJQ.ajax({
                    url: vbt_baseURL + "tracker/email/" + e.funnelId + "/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
                    type: "POST",
                    dataType: "json",
                    data: "userId=" + t + "&messageId=" + e.emailId,
                    success: function(e) {
                        console.log("Email sent to subscriber " + t)
                    },
                    error: function(e) {
                        console.log("Email error not sent to subscriber " + t)
                    }
                }))
            }
            function _execSendEmailToAnonymous(o) {
                var a = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,})+$/;
                _vbset.forEach(function(e) {
                    var t;
                    "__vbvar__" == e[0] && "_listID" != e[1][0] && (t = (t = $vbtJQ("#" + e[1][1])).length ? t : $vbtJQ('[name="' + e[1][1] + '"]')) && t.length && (t.attr("data-vboutcapture", !0),
                    t.attr("data-fieldid", e[1][0]),
                    t.on("change", function() {
                        a.test($vbtJQ(this).val()) && (clearTimeout(__GLOBAL__TIMER),
                        __GLOBAL__TIMER = setTimeout(function() {
                            _execSignupToListForAnonymous(o)
                        }, 500),
                        __GLOBAL__TIMER_FLAG = 1)
                    }),
                    t.on("blur", function() {
                        "" != $vbtJQ(this).val() && a.test($vbtJQ(this).val()) && __GLOBAL__TIMER_FLAG && (clearTimeout(__GLOBAL__TIMER),
                        __GLOBAL__TIMER = setTimeout(function() {
                            _execSignupToListForAnonymous(o)
                        }, 500))
                    }))
                })
            }
            function _execSignupToListForAnonymous(e) {
                var t = getFormFieldValues($vbtJQ, null)
                  , t = {
                    listId: t.listId,
                    ip: visitor.ip,
                    sessId: visitor._sessionId,
                    AnonymousSignupForm: {
                        fields: t.fields
                    }
                };
                $vbtJQ.ajax({
                    url: vbt_baseURL + "tracker/anonymous/signup/" + e.funnelId + "/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
                    type: "POST",
                    dataType: "json",
                    data: t,
                    success: function(e) {
                        0 < e.emailid ? (console.log("Email prepared to be sent to anonymous subscriber No." + e.emailid),
                        vbt_setCookie("__ssId", e.emailid, 168),
                        vbt_setCookie("__reset", "1", 168)) : console.log("Email failed.")
                    },
                    error: function(e) {
                        console.log("Email error not sent to anonymous!!!")
                    }
                })
            }
            function _execResetAnyAnonymousEmail(e, t) {
                $vbtJQ.ajax({
                    url: vbt_baseURL + "tracker/anonymous/reset/" + e + "/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
                    type: "POST",
                    dataType: "json",
                    data: "userId=" + t,
                    success: function(e) {
                        vbt_deleteCookie("__reset"),
                        console.log("Anonymous has been reseted: " + t)
                    },
                    error: function(e) {
                        console.log("Error reseting anonymous!!!")
                    }
                })
            }
            function __checkAddActionTimerTrigger(e) {
                var t = vbt_getCookie("__vbFunnelAddAction_" + e);
                t && (0 == (t = JSON.parse(t)).secondsLeft ? (clearInterval(__funnelAddActionTimer),
                vbt_deleteCookie("__vbFunnelAddAction_" + e),
                console.log("timer off - now the add action is triggered!"),
                _execAddActionToObject("vb_funnel_message_" + e, t.delay)) : (--t.secondsLeft,
                vbt_setCookie("__vbFunnelAddAction_" + e, JSON.stringify(t), 5)))
            }
            function _execAddActionToObject(e, t) {
                var o;
                console.log("Add Action Type: " + t),
                "0" == t ? _displayFunnelPopupWnd(e, "light-theme") : "1" == t && visitor.ssId && (o = visitor.ssId,
                e = $vbtJQ(document.getElementById(messageId)).attr("data-funnelid"),
                $vbtJQ.ajax({
                    url: vbt_baseURL + "tracker/email/" + e + "/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
                    type: "POST",
                    dataType: "json",
                    data: "userId=" + o,
                    success: function(e) {
                        console.log("Email sent to subscriber " + o)
                    },
                    error: function(e) {
                        console.log("Email error not sent to subscriber " + o)
                    }
                }))
            }
            function _displayFunnelPopupWnd(e, t) {
                console.log(e),
                $.vboutModal(document.getElementById(e), {
                    overlayClose: !0,
                    containerCss: {
                        height: "auto"
                    },
                    additionalClass: t,
                    onClose: function() {
                        $vbtJQ("body").css("overflow", "auto")
                    },
                    onShow: function() {
                        prepareFunnelMessageBody(document.getElementById(e))
                    }
                }),
                $vbtJQ("body").css("overflow", "hidden")
            }
            function prepareFunnelMessageBody(t) {
                var e = $vbtJQ(t).attr("data-funnelid")
                  , o = visitor.ssId || visitor.ip;
                $vbtJQ.ajax({
                    url: vbt_baseURL + "tracker/fmessage/" + e + "/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
                    type: "POST",
                    dataType: "json",
                    data: "pageUrl=" + document.URL + "&pageTitle=" + document.title + "&userId=" + o,
                    beforeSend: function() {
                        $vbtJQ(t).html("please wait...")
                    },
                    success: function(e) {
                        $vbtJQ(t).html(e.message),
                        $vbtJQ(window).trigger("resize.simplemodal")
                    },
                    error: function(e) {
                        $vbtJQ(t).html("An error occured: " + e.status + " " + e.statusText)
                    }
                })
            }
            isGoalEnabled
        }
        {
            function _execSendFormEmailToAnonymous(o, a, i, n, r) {
                _vbset.forEach(function(e) {
                    var t;
                    "__vbvar__" == e[0] && "_listID" != e[1][0] && (t = (t = $vbtJQ("#" + e[1][1], i)).length ? t : $vbtJQ('[name="' + e[1][1] + '"]', i)).length && (t.attr("data-vboutcapture", !0),
                    t.attr("data-fieldid", e[1][0]),
                    t.change(function() {
                        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($vbtJQ(this).val()) && (clearTimeout(__GLOBAL__TIMER),
                        __GLOBAL__TIMER = setTimeout(function() {
                            _execSignupToListForFormAnonymous(o, a, i, n, r)
                        }, 500),
                        __GLOBAL__TIMER_FLAG = 1)
                    }),
                    t.blur(function() {
                        __GLOBAL__TIMER_FLAG && "" != $vbtJQ(this).val() && /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($vbtJQ(this).val()) && (clearTimeout(__GLOBAL__TIMER),
                        __GLOBAL__TIMER = setTimeout(function() {
                            _execSignupToListForFormAnonymous(o, a, i, n, r)
                        }, 500))
                    }))
                })
            }
            isFormMappingEnabled
        }
        function isArray(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        function _execSignupToListForFormAnonymous(e, t, o, a, i) {
            o = getFormFieldValues($vbtJQ, o),
            a = {
                listId: a,
                ip: visitor.ip,
                sessId: visitor._sessionId,
                AnonymousSignupForm: {
                    fields: o.fields
                }
            };
            jQuery.ajax({
                url: "https://app.vbout.com/tracker/anonymous/form/signup/" + i + "/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
                type: "POST",
                dataType: "json",
                data: a,
                success: function(e) {
                    var t;
                    e && 0 < e.emailid ? (console.log("Email prepared to be sent to anonymous subscriber No." + e.emailid),
                    t = new Date((new Date).getTime() + 6048e5),
                    document.cookie = "__ssId=" + escape(e.emailid) + "; expires=" + t.toUTCString() + ";domain=" + _cookieDomain + ";path=" + _cookiePath,
                    document.cookie = "__reset=1; expires=" + t.toUTCString() + ";domain=" + _cookieDomain + ";path=" + _cookiePath) : console.log("Email failed.")
                },
                error: function(e) {
                    console.log("Email error not sent to anonymous!!!")
                }
            })
        }
        function _executeRegisterToThisList(e, t) {
            var o, a = jQuery("[" + t + "=" + e + "]").get(0), i = a ? closestTag(a, "form") : null, n = [];
            if (i && (_vbset.forEach(function(e) {
                var t;
                "__vbvar__" == e[0] && "_listID" != e[1][0] && (t = document.getElementById(e[1][1]),
                t = $vbtJQ(t || '[name="' + e[1][1] + '"]', i)) && t.each(function() {
                    n.push(this)
                })
            }),
            n.length))
                return void n.forEach(function(e) {
                    vbt_attachEvent(e, "keypress", function() {
                        this._vbtChanged = !0,
                        clearTimeout(o)
                    }, !0),
                    vbt_attachEvent(e, "paste", function() {
                        this._vbtChanged = !0,
                        clearTimeout(o)
                    }, !0),
                    vbt_attachEvent(e, "focus", function() {
                        this._vbtValue = jQuery(this).val()
                    }, !0),
                    vbt_attachEvent(e, "blur", function() {
                        this._vbtChanged && this._vbtValue == jQuery(this).val() && fireEvent(this, "change"),
                        this._vbtChanged = !1
                    }, !0),
                    vbt_attachEvent(e, "change", function() {
                        clearTimeout(o);
                        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,})+$/.test(jQuery(a).val()) && (o = setTimeout(function() {
                            _execSignupToThisList()
                        }, 1500))
                    }, !0)
                });
            jQuery("[" + t + "=" + e + "]").change(function() {
                /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(jQuery(this).val()) && (clearTimeout(__GLOBAL__TIMER),
                __GLOBAL__TIMER = setTimeout(function() {
                    _execSignupToThisList()
                }, 500),
                __GLOBAL__TIMER_FLAG = 1)
            })
        }
        function _execSignupToThisList() {
            var e = getFormFieldValues($vbtJQ)
              , e = {
                listId: e.listId,
                ip: visitor.ip,
                sessId: visitor._sessionId,
                AnonymousSignupForm: {
                    fields: e.fields
                }
            };
            jQuery.ajax({
                url: vbt_baseURL + "tracker/anonymous/signup3/?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain,
                type: "POST",
                dataType: "json",
                data: e,
                success: function(e) {
                    var t;
                    0 < e.emailid && (t = new Date((new Date).getTime() + 6048e5),
                    document.cookie = "__ssId=" + escape(e.emailid) + "; expires=" + t.toUTCString() + ";domain=" + _cookieDomain + ";path=" + _cookiePath,
                    document.cookie = "__reset=1; expires=" + t.toUTCString() + ";domain=" + _cookieDomain + ";path=" + _cookiePath,
                    console.log(e.emailid))
                },
                error: function(e) {
                    console.log("Email error not sent to anonymous!!!")
                }
            })
        }
        function vbt_showMappingTools() {
            function a() {
                (clickmap_active || heatmap_active || scrollmap_active) && n("body").css("overflow-x", "hidden")
            }
            function o() {
                clickmap_active || heatmap_active || scrollmap_active || n("body").css("overflow-x", "")
            }
            function i() {
                try {
                    n("#FilterField_Location").chosen(),
                    n("#FilterField_Visitors").chosen()
                } catch (e) {}
            }
            var n, r;
            n = $vbtJQ,
            r = 4706 == profileID ? '<style>#device-overlay-mobile {width:375px;left:50%;margin-left:-187px;z-index:997;position: fixed;top: 0;height: 100%;background-color: #000;opacity: 0.2;border-left: 3px solid #f00;border-right: 3px solid #f00;}#device-overlay-tablet {width:768px;left:50%;margin-left:-384px;z-index:997;position: fixed;top: 0;height: 100%;background-color: #000;opacity: 0.2;border-left: 3px solid #f00;border-right: 3px solid #f00;}.chosen-container .chosen-results{max-height:150px!important;}#clickmap-loading,#heatmap-loading,#scrollmap-loading{position: fixed; top: 2%; width: 100%; left: 0%; height: 100%; background: transparent url("https://app.vbout.com//images/preloader-map.gif") no-repeat scroll center center; z-index: 99996;}#clickmap-overlay,#heatmap-overlay,#scrollmap-overlay{z-index:99997;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;filter:alpha(opacity=70);opacity:.7}#clickmap-container span.clickmap{display: block;position:absolute;width:20px;height:20px;background:url(https://app.vbout.com//images/clickdot.png) center center no-repeat;z-index:99998;}[data-vbtooltip],.tooltip{position:relative;cursor:pointer}[data-vbtooltip]:before,[data-vbtooltip]:after{position:absolute;visibility:hidden;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);opacity:0;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);pointer-events:none}[data-vbtooltip]:hover:before,[data-vbtooltip]:hover:after,[data-vbtooltip]:focus:before,[data-vbtooltip]:focus:after{visibility:visible;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);opacity:1}[data-vbtooltip]:before{z-index:1001;border:6px solid transparent;background:transparent;content:""}[data-vbtooltip]:after{z-index:1000;padding:8px;width:160px;background-color:#000;background-color:hsla(0,0%,20%,0.9);color:#fff;content:attr(data-vbtooltip);font-size:14px;line-height:1.2;border-radius: 5px;}[data-vbtooltip]:before,[data-vbtooltip]:after{bottom:100%;left:50%}[data-vbtooltip]:before{margin-left:-6px;margin-bottom:-12px;border-top-color:#000;border-top-color:hsla(0,0%,20%,0.9)}[data-vbtooltip]:after{margin-left:-80px}[data-vbtooltip]:hover:before,[data-vbtooltip]:hover:after,[data-vbtooltip]:focus:before,[data-vbtooltip]:focus:after{-webkit-transform:translateY(-12px);-moz-transform:translateY(-12px);transform:translateY(-12px)}.vbtooltip-left:before,.vbtooltip-left:after{right:100%;bottom:50%;left:auto}.vbtooltip-left:before{margin-left:0;margin-right:0px;margin-bottom:0;border-top-color:transparent;border-left-color:#000;border-left-color:hsla(0,0%,20%,0.9)}.v-left:hover:before,.vbtooltip-left:hover:after,.vbtooltip-left:focus:before,.vbtooltip-left:focus:after{-webkit-transform:translateX(-12px);-moz-transform:translateX(-12px);transform:translateX(-12px)}.vbtooltip-left:before{top:23px}.vbtooltip-left:after{margin-left:0;margin-bottom:-16px}[data-vbtooltip]:focus::before{transform: translateX(0);transform: translateY(-12px);}</style><div id="HeatMapScreen" style="z-index: 99999;position: fixed; left: 0; top: 50%; margin-top: -155px;  border:1px solid #000; width: 36px; height: 310px;border-left: 0;display: none;"><img src="https://app.vbout.com//images/heatmap_bg.jpg"></div><div id="FilterMappingMenu" style="background-color: rgb(255, 255, 255); position: fixed; right: -243px; top: 20px; box-shadow: 0px 0px 5px rgb(51, 51, 51); z-index: 999999; border-radius: 7px 0px 0px 7px;"><a style="text-decoration: none; font-family: arial; font-size: 15px; display: none; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px 5px; position: absolute; left: -30px; top: 10px; box-shadow: 0px 0px 5px rgb(51, 51, 51); width: 25px;box-sizing: unset;font-weight: bold;text-align: center;padding: 3px;" id="FilterMappingHeat" data-vbtooltip="Show Filter" class="vbtooltip-left" href="javascript://">x</a><a id="ResponsiveScreen" style="display: none;text-decoration: none; font-family: arial; font-size: 12px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px 5px; position: absolute; left: -35px; top: 100px; box-shadow: 0px 0px 5px rgb(51, 51, 51); width: 25px;box-sizing: unset;" onclick="javascript:void((function(d){if(self!=top||d.getElementById(&#039;toolbar&#039;)&amp;&amp;d.getElementById(&#039;toolbar&#039;).getAttribute(&#039;data-resizer&#039;))return false;d.write(&#039;&lt;!DOCTYPE HTML&gt;&lt;html style=&quot;opacity:0;&quot;&gt;&lt;head&gt;&lt;meta charset=&quot;utf-8&quot;/&gt;&lt;/head&gt;&lt;body&gt;&lt;a data-viewport=&quot;375x667&quot; data-icon=&quot;mobile&quot; &gt;Apple iPhone 7&lt;/a&gt;&lt;a data-viewport=&quot;768x1024&quot; data-icon=&quot;tablet&quot;&gt;Tablet (e.g. Apple iPad 2-3rd, mini)&lt;/a&gt;&lt;a data-viewport=&quot;1920x1080&quot; data-icon=&quot;tv&quot;&gt;HDTV 1080p&lt;/a&gt;&lt;script src=&quot;https://app.vbout.com//js/resizer-enhanced.min.js?v=707537&quot;&gt;&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;&#039;)})(document));" data-vbtooltip="Show Responsive Toolbar" class="vbtooltip-left" href="javascript://"><img src="https://app.vbout.com//images/map_responsive.png"></a><span style="position: absolute; left: 0px; display: block; background-color: rgb(255, 255, 255); z-index: 9997; width: 10px; height: 40px; top: 6px;"></span><form id="FilterMappingForm" style="padding: 10px;"><div><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by date:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Date" name="FilterField[date]"><option value="0">- Everyday -</option><option value="1">Today</option><option value="2">Yesterday</option><option value="3">Last Week</option><option value="4">Last Month</option></select></div><div><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by Visitors:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Visitors" name="FilterField[visitor]"><option value="0">- Everyone -</option><option value="1">Anonymous Visits</option><option value="2">Subscriber Visits</option></select></div><div style="display: none;"><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by device:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Device" name="FilterField[device]"><option value="">- All devices -</option><option value="0" selected="selected">Desktop Only</option><option value="2">tablets Only</option><option value="1">Mobile Only</option></select></div><div><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by location:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Location" name="FilterField[location]"><option value="0">- Anywhere -</option></select></div><div style="padding-top: 10px;"><p id="ApplyFilterMessage" style="color: green; margin: 0px 0px 10px!important; display: none;">Filter applied...</p><button id="ApplyFilterMappingButton" name="ApplyFilterMappingButton" type="button" style="padding: 5px 20px;font-size: 14px;margin: 0 auto;display: block;width: 100%;">Apply Filter</button><button style="padding: 0;display:none;" id="CloseFilterMappingButton" name="CloseFilterMappingButton" type="button">Close</button></div></form></div><div id="MappingMenu" style="display: none; background-color: rgb(0, 0, 0); position: fixed; right: 0px; top: 20px; box-shadow: 0px 0px 5px rgb(51, 51, 51); z-index: 99999; border-radius: 7px 0px 0px 7px;"><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px;" id="GetHeatMaps" data-vbtooltip="Show Heatmap" class="vbtooltip-left" href="javascript://"><img src="https://app.vbout.com//images/heat_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: #7cb138; color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px;display: none;" id="HideHeatMaps" data-vbtooltip="Hide Heatmap" class="vbtooltip-left" href="javascript://"><img src="https://app.vbout.com//images/heat_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; padding: 5px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); margin-top: 1px;" id="GetClickMaps" data-vbtooltip="Show ClickMap" class="vbtooltip-left" href="javascript://"><img src="https://app.vbout.com//images/click_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; padding: 5px; background-color: #7cb138; color: rgb(0, 0, 0); margin-top: 1px;display: none;" data-vbtooltip="Hide ClickMap" class="vbtooltip-left" id="HideClickMaps" href="javascript://"><img src="https://app.vbout.com//images/click_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); margin-top: 1px; padding: 5px; border-radius: 0px 0px 0px 5px;" id="GetScrollMaps" class="vbtooltip-left" data-vbtooltip="Show ScrollMap" href="javascript://"><img src="https://app.vbout.com//images/scroll_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: #7cb138; color: rgb(0, 0, 0); margin-top: 1px; padding: 5px; border-radius: 0px 0px 0px 5px;display: none;" data-vbtooltip="Hide ScrollMap" class="vbtooltip-left" id="HideScrollMaps" href="javascript://"><img src="https://app.vbout.com//images/scroll_map.png"></a></div><canvas id="canvas" style="left: 0px; top: 0px; z-index: 99999; position: absolute; opacity: 0.5; display: none;"></canvas><canvas id="scrollcanvas" style="left: 0px; top: 0px; z-index: 99999; position: absolute; opacity: 0.5; display: none;"></canvas>' : '<style>#device-overlay-mobile {width:375px;left:50%;margin-left:-187px;z-index:997;position: fixed;top: 0;height: 100%;background-color: #000;opacity: 0.2;border-left: 3px solid #f00;border-right: 3px solid #f00;}#device-overlay-tablet {width:768px;left:50%;margin-left:-384px;z-index:997;position: fixed;top: 0;height: 100%;background-color: #000;opacity: 0.2;border-left: 3px solid #f00;border-right: 3px solid #f00;}.chosen-container .chosen-results{max-height:150px!important;}#clickmap-loading,#heatmap-loading,#scrollmap-loading{position: fixed; top: 2%; width: 100%; left: 0%; height: 100%; background: transparent url("https://app.vbout.com//images/preloader-map.gif") no-repeat scroll center center; z-index: 99996;}#clickmap-overlay,#heatmap-overlay,#scrollmap-overlay{z-index:99997;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;filter:alpha(opacity=70);opacity:.7}#clickmap-container span.clickmap{display: block;position:absolute;width:20px;height:20px;background:url(https://app.vbout.com//images/clickdot.png) center center no-repeat;z-index:99998;}[data-vbtooltip],.tooltip{position:relative;cursor:pointer}[data-vbtooltip]:before,[data-vbtooltip]:after{position:absolute;visibility:hidden;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);opacity:0;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);pointer-events:none}[data-vbtooltip]:hover:before,[data-vbtooltip]:hover:after,[data-vbtooltip]:focus:before,[data-vbtooltip]:focus:after{visibility:visible;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);opacity:1}[data-vbtooltip]:before{z-index:1001;border:6px solid transparent;background:transparent;content:""}[data-vbtooltip]:after{z-index:1000;padding:8px;width:160px;background-color:#000;background-color:hsla(0,0%,20%,0.9);color:#fff;content:attr(data-vbtooltip);font-size:14px;line-height:1.2;border-radius: 5px;}[data-vbtooltip]:before,[data-vbtooltip]:after{bottom:100%;left:50%}[data-vbtooltip]:before{margin-left:-6px;margin-bottom:-12px;border-top-color:#000;border-top-color:hsla(0,0%,20%,0.9)}[data-vbtooltip]:after{margin-left:-80px}[data-vbtooltip]:hover:before,[data-vbtooltip]:hover:after,[data-vbtooltip]:focus:before,[data-vbtooltip]:focus:after{-webkit-transform:translateY(-12px);-moz-transform:translateY(-12px);transform:translateY(-12px)}.vbtooltip-left:before,.vbtooltip-left:after{right:100%;bottom:50%;left:auto}.vbtooltip-left:before{margin-left:0;margin-right:0px;margin-bottom:0;border-top-color:transparent;border-left-color:#000;border-left-color:hsla(0,0%,20%,0.9)}.v-left:hover:before,.vbtooltip-left:hover:after,.vbtooltip-left:focus:before,.vbtooltip-left:focus:after{-webkit-transform:translateX(-12px);-moz-transform:translateX(-12px);transform:translateX(-12px)}.vbtooltip-left:before{top:23px}.vbtooltip-left:after{margin-left:0;margin-bottom:-16px}[data-vbtooltip]:focus::before{transform: translateX(0);transform: translateY(-12px);}</style><div id="HeatMapScreen" style="z-index: 99999;position: fixed; left: 0; top: 50%; margin-top: -155px;  border:1px solid #000; width: 36px; height: 310px;border-left: 0;display: none;"><img src="https://app.vbout.com//images/heatmap_bg.jpg"></div><div id="FilterMappingMenu" style="background-color: rgb(255, 255, 255); position: fixed; right: -243px; top: 20px; box-shadow: 0px 0px 5px rgb(51, 51, 51); z-index: 999999; border-radius: 7px 0px 0px 7px;"><a style="text-decoration: none; font-family: arial; font-size: 15px; display: none; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px 5px; position: absolute; left: -30px; top: 10px; box-shadow: 0px 0px 5px rgb(51, 51, 51); width: 25px;box-sizing: unset;font-weight: bold;text-align: center;padding: 3px;" id="FilterMappingHeat" data-vbtooltip="Show Filter" class="vbtooltip-left" href="javascript://">x</a><a id="ResponsiveScreen" style="display: none;text-decoration: none; font-family: arial; font-size: 12px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px 5px; position: absolute; left: -35px; top: 100px; box-shadow: 0px 0px 5px rgb(51, 51, 51); width: 25px;box-sizing: unset;" onclick="javascript:void((function(d){if(self!=top||d.getElementById(&#039;toolbar&#039;)&amp;&amp;d.getElementById(&#039;toolbar&#039;).getAttribute(&#039;data-resizer&#039;))return false;d.write(&#039;&lt;!DOCTYPE HTML&gt;&lt;html style=&quot;opacity:0;&quot;&gt;&lt;head&gt;&lt;meta charset=&quot;utf-8&quot;/&gt;&lt;/head&gt;&lt;body&gt;&lt;a data-viewport=&quot;375x667&quot; data-icon=&quot;mobile&quot; &gt;Apple iPhone 7&lt;/a&gt;&lt;a data-viewport=&quot;768x1024&quot; data-icon=&quot;tablet&quot;&gt;Tablet (e.g. Apple iPad 2-3rd, mini)&lt;/a&gt;&lt;a data-viewport=&quot;1920x1080&quot; data-icon=&quot;tv&quot;&gt;HDTV 1080p&lt;/a&gt;&lt;script src=&quot;https://app.vbout.com//js/resizer.min.js?v=707537&quot;&gt;&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;&#039;)})(document));" data-vbtooltip="Show Responsive Toolbar" class="vbtooltip-left" href="javascript://"><img src="https://app.vbout.com//images/map_responsive.png"></a><span style="position: absolute; left: 0px; display: block; background-color: rgb(255, 255, 255); z-index: 9997; width: 10px; height: 40px; top: 6px;"></span><form id="FilterMappingForm" style="padding: 10px;"><div><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by date:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Date" name="FilterField[date]"><option value="0">- Everyday -</option><option value="1">Today</option><option value="2">Yesterday</option><option value="3">Last Week</option><option value="4">Last Month</option></select></div><div><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by Visitors:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Visitors" name="FilterField[visitor]"><option value="0">- Everyone -</option><option value="1">Anonymous Visits</option><option value="2">Subscriber Visits</option></select></div><div style="display: none;"><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by device:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Device" name="FilterField[device]"><option value="">- All devices -</option><option value="0" selected="selected">Desktop Only</option><option value="2">tablets Only</option><option value="1">Mobile Only</option></select></div><div><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by location:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Location" name="FilterField[location]"><option value="0">- Anywhere -</option></select></div><div style="padding-top: 10px;"><p id="ApplyFilterMessage" style="color: green; margin: 0px 0px 10px!important; display: none;">Filter applied...</p><button id="ApplyFilterMappingButton" name="ApplyFilterMappingButton" type="button" style="padding: 5px 20px;font-size: 14px;margin: 0 auto;display: block;width: 100%;">Apply Filter</button><button style="padding: 0;display:none;" id="CloseFilterMappingButton" name="CloseFilterMappingButton" type="button">Close</button></div></form></div><div id="MappingMenu" style="display: none; background-color: rgb(0, 0, 0); position: fixed; right: 0px; top: 20px; box-shadow: 0px 0px 5px rgb(51, 51, 51); z-index: 99999; border-radius: 7px 0px 0px 7px;"><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px;" id="GetHeatMaps" data-vbtooltip="Show Heatmap" class="vbtooltip-left" href="javascript://"><img src="https://app.vbout.com//images/heat_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: #7cb138; color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px;display: none;" id="HideHeatMaps" data-vbtooltip="Hide Heatmap" class="vbtooltip-left" href="javascript://"><img src="https://app.vbout.com//images/heat_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; padding: 5px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); margin-top: 1px;" id="GetClickMaps" data-vbtooltip="Show ClickMap" class="vbtooltip-left" href="javascript://"><img src="https://app.vbout.com//images/click_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; padding: 5px; background-color: #7cb138; color: rgb(0, 0, 0); margin-top: 1px;display: none;" data-vbtooltip="Hide ClickMap" class="vbtooltip-left" id="HideClickMaps" href="javascript://"><img src="https://app.vbout.com//images/click_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); margin-top: 1px; padding: 5px; border-radius: 0px 0px 0px 5px;" id="GetScrollMaps" class="vbtooltip-left" data-vbtooltip="Show ScrollMap" href="javascript://"><img src="https://app.vbout.com//images/scroll_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: #7cb138; color: rgb(0, 0, 0); margin-top: 1px; padding: 5px; border-radius: 0px 0px 0px 5px;display: none;" data-vbtooltip="Hide ScrollMap" class="vbtooltip-left" id="HideScrollMaps" href="javascript://"><img src="https://app.vbout.com//images/scroll_map.png"></a></div><canvas id="canvas" style="left: 0px; top: 0px; z-index: 99999; position: absolute; opacity: 0.5; display: none;"></canvas><canvas id="scrollcanvas" style="left: 0px; top: 0px; z-index: 99999; position: absolute; opacity: 0.5; display: none;"></canvas>',
            vbt_loadStyle(vbt_baseURL + "/scripts/plugins/chosen/chosen.css?v=1.1.5"),
            vbt_loadJs(vbt_baseURL + "/scripts/plugins/chosen/chosen142.jquery.min.js?v=1.0", function() {
                i()
            }),
            vbt_loadJs(vbt_baseURL + "/js/vbout-heatmap-draw.js?v=1.0.1", function() {
                console.log("Simple heat is now loaded...")
            }),
            vbt_loadJs(vbt_baseURL + "trackerjs/scrollheatmap.js?n", function() {
                var e, t;
                console.log("Scroll heat is now loaded..."),
                window.vbtActionMappingExecuted = !0,
                e = document.body,
                (t = document.createElement("div")).style.width = "auto",
                t.style.height = "auto",
                t.innerHTML = r,
                e.insertBefore(t, e.firstChild),
                document.getElementById("FilterField_Device").value = filterDevice,
                n.get(vbt_baseURL + "track/filters/getcountries", {
                    l: escape([document.location.protocol, "//", document.location.host, document.location.pathname].join("")),
                    _account: _vbsetData.account,
                    _domain: _vbsetData.domain
                }, function(e) {
                    n("#FilterField_Location").append(e),
                    n("#FilterField_Location").trigger("chosen:updated")
                }),
                n("#FilterMappingHeat").click(function() {
                    parseInt(n("#FilterMappingMenu").css("right")) < 0 ? n("#FilterMappingMenu").stop().animate({
                        right: 0
                    }) : n("#FilterMappingMenu").stop().animate({
                        right: "-243px"
                    })
                }),
                n("#ApplyFilterMappingButton").click(function() {
                    !clickmap_loading && clickmap_active && (n("#HideClickMaps").trigger("click"),
                    n("#GetClickMaps").trigger("click")),
                    !heatmap_loading && heatmap_active && (n("#HideHeatMaps").trigger("click"),
                    n("#GetHeatMaps").trigger("click")),
                    !scrollmap_loading && scrollmap_active && (n("#HideScrollMaps").trigger("click"),
                    n("#GetScrollMaps").trigger("click")),
                    n("#ApplyFilterMessage").stop().show().delay(3e3).queue(function(e) {
                        n(this).hide()
                    })
                }),
                n("#CloseFilterMappingButton").click(function() {
                    n("#FilterMappingMenu").stop().animate({
                        right: "-243px"
                    })
                }),
                n("#GetClickMaps").click(function() {
                    clickmap_loading || (clickmap_loading = !0,
                    n(".vb-overlay").length || (n('<div id="clickmap-overlay" class="vb-overlay"></div>').appendTo("body"),
                    n("#clickmap-overlay").width(n("body").width())),
                    n('<div id="clickmap-loading"></div>').appendTo("body"),
                    n.get(vbt_baseURL + "track/mapclick/get", {
                        l: escape([document.location.protocol, "//", document.location.host, document.location.pathname].join("")),
                        _account: _vbsetData.account,
                        _domain: _vbsetData.domain,
                        _filterdate: n("#FilterField_Date").val(),
                        _filtervisitor: n("#FilterField_Visitors").val(),
                        _filterdevice: n("#FilterField_Device").val(),
                        _filterlocation: n("#FilterField_Location").val(),
                        _maxWidth: n("body").width()
                    }, function(e) {
                        clickmap_loading = !(clickmap_active = !0),
                        a(),
                        n("#clickmap-loading").remove(),
                        n(e).appendTo("body"),
                        n("#clickmap-container").width(n("body").width()).css("overflow-x", "hidden"),
                        n("#clickmap-container").css("position", "static"),
                        n("#GetClickMaps").hide(),
                        n("#HideClickMaps").css("display", "block").show()
                    }))
                }),
                n("#HideClickMaps").click(function() {
                    clickmap_loading || (clickmap_active = !1,
                    o(),
                    clickmap_active || heatmap_active || scrollmap_active || n(".vb-overlay").remove(),
                    n("#clickmap-container").remove(),
                    n("#clickmap-loading").remove(),
                    n(this).hide(),
                    n("#GetClickMaps").css("display", "block").show())
                }),
                n("#GetScrollMaps").click(function() {
                    var e, t, o;
                    scrollmap_loading || (scrollmap_loading = !0,
                    n(".vb-overlay").length || n('<div id="scrollmap-overlay" class="vb-overlay"></div>').appendTo("body"),
                    n('<div id="scrollmap-loading"></div>').appendTo("body"),
                    t = document.body,
                    e = document.documentElement,
                    t = Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight),
                    o = [n("body").width(), t],
                    n("#scrollcanvas").attr("width", o[0]),
                    n("#scrollcanvas").attr("height", o[1]),
                    n.get(vbt_baseURL + "track/scrollheat/get", {
                        l: escape([document.location.protocol, "//", document.location.host, document.location.pathname].join("")),
                        _account: _vbsetData.account,
                        _domain: _vbsetData.domain,
                        _filterdate: n("#FilterField_Date").val(),
                        _filtervisitor: n("#FilterField_Visitors").val(),
                        _filterdevice: n("#FilterField_Device").val(),
                        _filterlocation: n("#FilterField_Location").val()
                    }, function(e) {
                        scrollmap_loading = !(scrollmap_active = !0),
                        a(),
                        n("#scrollmap-overlay").remove(),
                        n("#scrollmap-loading").remove(),
                        n("#scrollcanvas").show(),
                        new ScrollHeatMap("scrollcanvas","https://app.vbout.com/images/scrollmap.png",o[0],o[1],e,{
                            screenshotAlpha: .6,
                            heatmapAlpha: .8
                        }),
                        n("#GetScrollMaps").hide(),
                        n("#HeatMapScreen").show(),
                        n("#HideScrollMaps").css("display", "block").show()
                    }))
                }),
                n("#HideScrollMaps").click(function() {
                    scrollmap_loading || (scrollmap_active = !1,
                    n("#scrollcanvas").hide(),
                    o(),
                    clickmap_active || heatmap_active || scrollmap_active || n(".vb-overlay").remove(),
                    n(this).hide(),
                    heatmap_active || n("#HeatMapScreen").hide(),
                    n("#GetScrollMaps").css("display", "block").show())
                }),
                n("#GetHeatMaps").click(function() {
                    var e;
                    heatmap_loading || (heatmap_loading = !0,
                    n(".vb-overlay").length || n('<div id="heatmap-overlay" class="vb-overlay"></div>').appendTo("body"),
                    n('<div id="heatmap-loading"></div>').appendTo("body"),
                    e = [n("body").width(), n("body").height()],
                    n("#canvas").attr("width", e[0]),
                    n("#canvas").attr("height", e[1]),
                    n.get(vbt_baseURL + "track/mapheat/get", {
                        l: escape([document.location.protocol, "//", document.location.host, document.location.pathname].join("")),
                        _account: _vbsetData.account,
                        _domain: _vbsetData.domain,
                        _filterdate: n("#FilterField_Date").val(),
                        _filtervisitor: n("#FilterField_Visitors").val(),
                        _filterdevice: n("#FilterField_Device").val(),
                        _filterlocation: n("#FilterField_Location").val()
                    }, function(e) {
                        heatmap_loading = !(heatmap_active = !0),
                        a(),
                        n("#heatmap-loading").remove(),
                        n("#canvas").show();
                        var t = vbout_simpleheat(canvas);
                        t.clear(),
                        t.data(e),
                        t.max(36),
                        t.draw(),
                        n("#GetHeatMaps").hide(),
                        n("#HeatMapScreen").show(),
                        n("#HideHeatMaps").css("display", "block").show()
                    }))
                }),
                n("#HideHeatMaps").click(function() {
                    heatmap_loading || (heatmap_active = !1,
                    o(),
                    n("#canvas").hide(),
                    clickmap_active || heatmap_active || scrollmap_active || n(".vb-overlay").remove(),
                    n(this).hide(),
                    scrollmap_active || n("#HeatMapScreen").hide(),
                    n("#GetHeatMaps").css("display", "block").show())
                }),
                i()
            })
        }
        {
            function vbt_execHeatmap(o, a) {
                var t, e, i, n, r;
                (e = t = $vbtJQ).fn.saveClicks = function() {
                    e(this).bind("mousedown.clickmap", function(e) {
                        var t = new RegExp("[; ]__ssId=([^\\s;]*)")
                          , t = (" " + document.cookie).match(t)
                          , t = (ssId = t ? unescape(t[1]) : 0,
                        new RegExp("[; ]__vbsess=([^\\s;]*)"))
                          , t = (" " + document.cookie).match(t)
                          , t = (sessId = t ? unescape(t[1]) : 0,
                        new RegExp("[; ]__vbtrk=([^\\s;]*)"))
                          , t = (" " + document.cookie).match(t);
                        ssTrack = t ? unescape(t[1]) : "",
                        ajaxPost(vbt_baseURL + "track/mapclick?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain, {
                            x: e.pageX,
                            y: e.pageY,
                            ssId: ssId,
                            ssIp: o,
                            sessId: sessId,
                            ssTrack: ssTrack,
                            _c: a,
                            platform: navigator.platform,
                            userAgent: navigator.userAgent,
                            l: escape([document.location.protocol, "//", document.location.host, document.location.pathname].join(""))
                        })
                    })
                }
                ,
                e.fn.stopSaveClicks = function() {
                    e(this).unbind("mousedown.clickmap")
                }
                ,
                t(function() {
                    t(document).saveClicks()
                }),
                r = [],
                (i = t).fn.saveHeats = function() {
                    i(this).bind("mousemove", function(e) {
                        var t = {};
                        t.x = e.pageX,
                        t.y = e.pageY,
                        r.push(t)
                    })
                }
                ,
                i.fn.stopSaveHeat = function() {
                    i(this).unbind("mousemove")
                }
                ,
                t(function() {
                    t(document).saveHeats(),
                    setInterval(function() {
                        var e;
                        r.length && (e = new RegExp("[; ]__ssId=([^\\s;]*)"),
                        e = (" " + document.cookie).match(e),
                        ssId = e ? unescape(e[1]) : 0,
                        e = new RegExp("[; ]__vbtrk=([^\\s;]*)"),
                        e = (" " + document.cookie).match(e),
                        ssTrack = e ? unescape(e[1]) : "",
                        e = new RegExp("[; ]__vbsess=([^\\s;]*)"),
                        e = (" " + document.cookie).match(e),
                        sessId = e ? unescape(e[1]) : 0,
                        t.post(vbt_baseURL + "track/mapheat?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain, {
                            h: r,
                            ssId: ssId,
                            ssIp: o,
                            sessId: sessId,
                            ssTrack: ssTrack,
                            _c: a,
                            platform: navigator.platform,
                            userAgent: navigator.userAgent,
                            l: escape([document.location.protocol, "//", document.location.host, document.location.pathname].join(""))
                        }).done(function() {
                            r = []
                        }))
                    }, 5e3)
                }),
                (n = t).fn.saveScrollHeats = function() {
                    n(this).bind("scroll", function(e) {
                        scrollTimeout && clearTimeout(scrollTimeout),
                        scrollTimeout = setTimeout(function() {
                            scrollheat_data.push(parseInt(n(window).scrollTop()))
                        }, 100)
                    })
                }
                ,
                n.fn.stopSaveScrollHeat = function() {
                    n(this).unbind("mousemove")
                }
                ,
                t(function() {
                    t(document).saveScrollHeats(),
                    setInterval(function() {
                        var e;
                        scrollheat_data.length && 2 < scrollheat_data.length && !scrollheatSending && (scrollheatSending = !0,
                        e = new RegExp("[; ]__ssId=([^\\s;]*)"),
                        e = (" " + document.cookie).match(e),
                        ssId = e ? unescape(e[1]) : 0,
                        e = new RegExp("[; ]__vbtrk=([^\\s;]*)"),
                        e = (" " + document.cookie).match(e),
                        ssTrack = e ? unescape(e[1]) : "",
                        t.post(vbt_baseURL + "track/scrollheat?_account=" + _vbsetData.account + "&_domain=" + _vbsetData.domain, {
                            h: scrollheat_data,
                            scrn: t(window).height(),
                            ssId: ssId,
                            ssIp: o,
                            ssTrack: ssTrack,
                            _c: a,
                            platform: navigator.platform,
                            userAgent: navigator.userAgent,
                            l: escape([document.location.protocol, "//", document.location.host, document.location.pathname].join(""))
                        }).done(function() {
                            scrollheatSending = !(scrollheat_data = [])
                        }))
                    }, 500)
                })
            }
            isHeatmapEnabled
        }
        function __checkIfMobileDevice() {
            return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())
        }
        try {
            !function() {
                var n;
                n = setInterval(function() {
                    if (document && document.getElementsByTagName && document.getElementById && document.body) {
                        clearInterval(n);
                        var e, t = {
                            localStoreCookie: "vbtLSCookie-",
                            localStoreSupport: function() {
                                try {
                                    return "localStorage"in window && null !== window.localStorage
                                } catch (e) {
                                    return !1
                                }
                            },
                            set: function(e, t, o) {
                                var a, o = o ? ((a = new Date).setTime(a.getTime() + 24 * o * 60 * 60 * 1e3),
                                "; expires=" + a.toGMTString()) : "";
                                this.localStoreSupport() ? localStorage.setItem(e, t) : document.cookie = this.localStoreCookie + e + "=" + t + o + "; path=/"
                            },
                            get: function(e) {
                                if (this.localStoreSupport())
                                    return localStorage.getItem(e);
                                for (var t = this.localStoreCookie + e + "=", o = document.cookie.split(";"), a = 0; a < o.length; a++) {
                                    for (var i = o[a]; " " == i.charAt(0); )
                                        i = i.substring(1, i.length);
                                    if (0 == i.indexOf(t))
                                        return i.substring(t.length, i.length)
                                }
                                return null
                            },
                            remove: function(e) {
                                this.localStoreSupport() ? localStorage.removeItem(e) : this.set(this.localStoreCookie + e, "", -1)
                            }
                        };
                        !function(e) {
                            var t, o, a, i = [void 0, null, !1, 0, "", "0"];
                            for (o = 0,
                            a = i.length; o < a; o++)
                                if (e === i[o])
                                    return 1;
                            if ("object" != typeof e)
                                return;
                            for (t in e)
                                if (e.hasOwnProperty(t))
                                    return;
                            return 1
                        }(t.get("vbtEFRefLegacy")) || t.set("vbtEFRefLegacy", document.referrer);
                        for (var o, a = 0, i = (o = document.getElementsByTagName("form")).length; a < i; a++)
                            try {
                                -1 < o[a].getAttribute("action").indexOf("vbout.com/embedcode/submit/") && -1 == o[a].getAttribute("action").indexOf("_format=page") && ((e = document.createElement("input")).setAttribute("type", "hidden"),
                                e.setAttribute("name", "_vbtRef"),
                                e.setAttribute("value", t.get("vbtEFRefLegacy")),
                                o[a].appendChild(e))
                            } catch (e) {}
                    }
                }, 13)
            }()
        } catch (e) {}
        function disableSubmitButton(e, t) {
            for (var o = !1 === t ? "removeAttribute" : "setAttribute", a = e.getElementsByTagName("input"), i = 0, n = a.length; i < n; i++)
                "submit" == a[i].type && a[i][o]("disabled", "DISABLED");
            for (i = 0,
            n = (a = e.getElementsByTagName("button")).length; i < n; i++)
                "submit" == a[i].type && a[i][o]("disabled", "DISABLED")
        }
        function GDPRchecked(e) {
            for (var t = 0, o = e.length; t < o; t++)
                if (-1 < (" " + e[t].className + " ").indexOf(" requiredOption ") && !e[t].checked)
                    return !1;
            return !0
        }
        !function(e) {
            e.MicroModal = function() {
                "use strict";
                var k = function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                  , e = function() {
                    function a(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var a = t[o];
                            a.enumerable = a.enumerable || !1,
                            a.configurable = !0,
                            "value"in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(e, t, o) {
                        return t && a(e.prototype, t),
                        o && a(e, o),
                        e
                    }
                }()
                  , x = function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, o = Array(e.length); t < e.length; t++)
                            o[t] = e[t];
                        return o
                    }
                    return Array.from(e)
                }
                  , o = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])']
                  , r = function() {
                    function y(e) {
                        var t = e.targetModal
                          , o = e.triggers
                          , a = void 0 === o ? [] : o
                          , i = e.onShow
                          , n = void 0 === i ? function() {}
                        : i
                          , r = e.onClose
                          , s = void 0 === r ? function() {}
                        : r
                          , l = e.openTrigger
                          , c = void 0 === l ? "data-micromodal-trigger" : l
                          , d = e.closeTrigger
                          , p = void 0 === d ? "data-micromodal-close" : d
                          , u = e.disableScroll
                          , v = void 0 !== u && u
                          , b = e.disableFocus
                          , f = void 0 !== b && b
                          , m = e.awaitCloseAnimation
                          , h = void 0 !== m && m
                          , g = e.debugMode
                          , _ = void 0 !== g && g;
                        k(this, y),
                        this.modal = document.getElementById(t),
                        this.config = {
                            debugMode: _,
                            disableScroll: v,
                            openTrigger: c,
                            closeTrigger: p,
                            onShow: n,
                            onClose: s,
                            awaitCloseAnimation: h,
                            disableFocus: f
                        },
                        a.length > 0 && this.registerTriggers.apply(this, x(a)),
                        this.onClick = this.onClick.bind(this),
                        this.onKeydown = this.onKeydown.bind(this)
                    }
                    return e(y, [{
                        key: "registerTriggers",
                        value: function() {
                            for (var t = this, e = arguments.length, o = Array(e), a = 0; a < e; a++)
                                o[a] = arguments[a];
                            o.forEach(function(e) {
                                e.addEventListener("click", function() {
                                    return t.showModal()
                                })
                            })
                        }
                    }, {
                        key: "showModal",
                        value: function() {
                            var e = this.modal.getElementsByClassName("vbtSitePopup")[0];
                            this.modal.setAttribute("data-vbtpopup", e ? e.id : "");
                            this.activeElement = document.activeElement,
                            this.modal.setAttribute("aria-hidden", "false"),
                            this.modal.classList.add("is-open"),
                            this.setFocusToFirstNode(),
                            this.scrollBehaviour("disable"),
                            this.addEventListeners(),
                            this.config.onShow(this.modal)
                        }
                    }, {
                        key: "closeModal",
                        value: function() {
                            var t = this.modal;
                            this.modal.setAttribute("data-vbtpopup", "");
                            this.modal.setAttribute("aria-hidden", "true"),
                            this.removeEventListeners(),
                            this.scrollBehaviour("enable"),
                            this.activeElement.focus(),
                            this.config.onClose(this.modal),
                            this.config.awaitCloseAnimation ? this.modal.addEventListener("animationend", function e() {
                                t.classList.remove("is-open"),
                                t.removeEventListener("animationend", e, !1)
                            }, !1) : t.classList.remove("is-open")
                        }
                    }, {
                        key: "scrollBehaviour",
                        value: function(e) {
                            if (this.config.disableScroll) {
                                var t = document.querySelector("body");
                                switch (e) {
                                case "enable":
                                    Object.assign(t.style, {
                                        overflow: "initial",
                                        height: "initial"
                                    });
                                    break;
                                case "disable":
                                    Object.assign(t.style, {
                                        overflow: "hidden",
                                        height: "100vh"
                                    })
                                }
                            }
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            this.modal.addEventListener("touchstart", this.onClick),
                            this.modal.addEventListener("click", this.onClick),
                            document.addEventListener("keydown", this.onKeydown)
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function() {
                            this.modal.removeEventListener("touchstart", this.onClick),
                            this.modal.removeEventListener("click", this.onClick),
                            document.removeEventListener("keydown", this.onKeydown)
                        }
                    }, {
                        key: "onClick",
                        value: function(e) {
                            e.target.hasAttribute(this.config.closeTrigger) && (this.closeModal(),
                            e.preventDefault())
                        }
                    }, {
                        key: "onKeydown",
                        value: function(e) {
                            27 === e.keyCode && this.closeModal(e),
                            9 === e.keyCode && this.maintainFocus(e)
                        }
                    }, {
                        key: "getFocusableNodes",
                        value: function() {
                            var t = this.modal.querySelectorAll(o);
                            return Object.keys(t).map(function(e) {
                                return t[e]
                            })
                        }
                    }, {
                        key: "setFocusToFirstNode",
                        value: function() {
                            if (!this.config.disableFocus) {
                                var e = this.getFocusableNodes();
                                e.length && e[0].focus()
                            }
                        }
                    }, {
                        key: "maintainFocus",
                        value: function(e) {
                            var t = this.getFocusableNodes();
                            if (this.modal.contains(document.activeElement)) {
                                var o = t.indexOf(document.activeElement);
                                e.shiftKey && 0 === o && (t[t.length - 1].focus(),
                                e.preventDefault()),
                                e.shiftKey || o !== t.length - 1 || (t[0].focus(),
                                e.preventDefault())
                            } else
                                t[0].focus()
                        }
                    }]),
                    y
                }()
                  , a = null
                  , s = function(e, o) {
                    var a = [];
                    return e.forEach(function(e) {
                        var t = e.attributes[o].value;
                        void 0 === a[t] && (a[t] = []),
                        a[t].push(e)
                    }),
                    a
                }
                  , i = function(e) {
                    if (!document.getElementById(e))
                        return console.warn("MicroModal v0.3.1: ❗Seems like you have missed %c'" + e + "'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."),
                        console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="' + e + '"></div>'),
                        !1
                }
                  , n = function(e) {
                    if (e.length <= 0)
                        return console.warn("MicroModal v0.3.1: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."),
                        console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'),
                        !1
                }
                  , l = function(e, t) {
                    if (n(e),
                    !t)
                        return !0;
                    for (var o in t)
                        i(o);
                    return !0
                };
                return {
                    init: function(e) {
                        var t = Object.assign({}, {
                            openTrigger: "data-micromodal-trigger"
                        }, e)
                          , o = [].concat(x(document.querySelectorAll("[" + t.openTrigger + "]")))
                          , a = s(o, t.openTrigger);
                        if (!0 !== t.debugMode || !1 !== l(o, a))
                            for (var i in a) {
                                var n = a[i];
                                t.targetModal = i,
                                t.triggers = [].concat(x(n)),
                                new r(t)
                            }
                    },
                    show: function(e, t) {
                        var o = t || {};
                        o.targetModal = e,
                        !0 === o.debugMode && !1 === i(e) || (a = new r(o),
                        a.showModal())
                    },
                    close: function() {
                        a.closeModal()
                    }
                }
            }()
        }(this),
        function() {
            function o(e, t, o) {
                if (t)
                    return $vbtJQ = t,
                    console.log("jQuery > vbtJQ has been loaded from " + e),
                    console.log("jQuery > vbtJQ Version: " + $vbtJQ.fn.jquery),
                    o || loadJQueryMigrate(),
                    _exec_vbout();
                console.log("jQuery > Try to load jQuery from " + e),
                vbt_loadJs("//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", function() {
                    return $vbtJQ = jQuery.noConflict(),
                    console.log("jQuery > vbtJQ has been loaded from " + e),
                    console.log("jQuery > vbtJQ Version: " + $vbtJQ.fn.jquery),
                    loadJQueryMigrate(),
                    _exec_vbout()
                })
            }
            "function" == typeof define && define.amd && "function" == typeof require ? require(["jquery"], function(t) {
                require(["jquery/jquery-migrate"], function(e) {
                    o("requirejs-migrate", t, !0)
                }, function() {
                    o("requirejs", t)
                })
            }, function() {
                o("CDN (requirejs error)")
            }) : "jQuery"in window ? jQuery.fn.on && jQuery.fn.ajaxComplete ? (_jqueryAlreadyLoaded = !0,
            _jqueryCurrentVersion = jQuery.fn.jquery,
            o("jQuery (exist)", window.jQuery)) : o("CDN (newer)") : o("CDN (not exist)")
        }();
        if (!isMappingFlagEnabled) {
            const applicationServerKey = "BPze31E9a86Ym_-m2QCjH7EJyoX4XeZ0hILImqemYWmQHXCXFFBFeua43THA2iUF7OdJ45MK6-bwG_qlU5O-8XY";
            const byPassModal = 0;
            !function(vBrandingWebpush) {
                var runBrowserPush = !1, isIncognito = !1, push_url, push_url_part, protocol, isDeviceiOS;
                function checkIncognito() {
                    if ("MozAppearance"in document.documentElement.style)
                        isIncognito = !navigator.serviceWorker;
                    else {
                        var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
                        if (!fs)
                            return;
                        fs(window.TEMPORARY, 100, (function(fs) {
                            isIncognito = !1
                        }
                        ), (function(err) {
                            isIncognito = !0
                        }
                        ))
                    }
                }
                if (checkIncognito(),
                isIncognito)
                    console.warn("Browser push is not supported in Incognito mode");
                else if ("https" == window.location.href.split(":/")[0]) {
                    if (navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
                        console.warn("Browser Push is not supported for iOS Devices.");
                    else if (runBrowserPush = !0) {
                        var push_ssid = vbt_getCookie("__ssId") || null
                          , isNotificationBlocked = !1
                          , page_url = window.location.href;
                        function get_push_ssid() {
                            return push_ssid = visitor.ssId || null
                        }
                        function loadFile(path, type, callback) {
                            var fileref;
                            if ("js" == type)
                                (fileref = document.createElement("script")).setAttribute("type", "text/javascript"),
                                fileref.readyState ? fileref.onreadystatechange = function() {
                                    "loaded" !== fileref.readyState && "complete" !== fileref.readyState || (fileref.onreadystatechange = null,
                                    callback())
                                }
                                : fileref.onload = function() {
                                    callback()
                                }
                                ,
                                fileref.setAttribute("src", path);
                            else if ("css" == type) {
                                var fileref;
                                (fileref = document.createElement("link")).setAttribute("rel", "stylesheet"),
                                fileref.setAttribute("type", "text/css"),
                                fileref.setAttribute("href", path)
                            }
                            document.getElementsByTagName("head")[0].appendChild(fileref)
                        }
                        if (!("serviceWorker"in navigator))
                            return void console.warn("Service workers are not supported by this browser");
                        if (!("PushManager"in window))
                            return void console.warn("Push notifications are not supported by this browser");
                        if (!("showNotification"in ServiceWorkerRegistration.prototype))
                            return void console.warn("Notifications are not supported by this browser");
                        function urlBase64ToUint8Array(base64String) {
                            const padding = "=".repeat((4 - base64String.length % 4) % 4)
                              , base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/")
                              , rawData = window.atob(base64)
                              , outputArray = new Uint8Array(rawData.length);
                            for (let i = 0; i < rawData.length; ++i)
                                outputArray[i] = rawData.charCodeAt(i);
                            return outputArray
                        }
                        function push_subscribe() {
                            navigator.serviceWorker.ready.then(serviceWorkerRegistration=>serviceWorkerRegistration.pushManager.subscribe({
                                userVisibleOnly: !0,
                                applicationServerKey: urlBase64ToUint8Array(applicationServerKey)
                            })).then(subscription=>push_sendSubscriptionToServer(subscription, "POST")).then(subscription=>subscription).catch(e=>(console.log("error:" + e),
                            "denied" === Notification.permission ? (console.warn("Notifications are denied by the user."),
                            push_permissionLog("Denied")) : (console.error("Impossible to subscribe to push notifications", e),
                            push_permissionLog("Skipped"))))
                        }
                        function push_permissionLog(type) {
                            return ssid = push_ssid || get_push_ssid(),
                            fetch(vbt_baseURL + "index.php?r=WebPush/PermissionLogs", {
                                method: "POST",
                                body: JSON.stringify({
                                    type: type,
                                    pid: profileID,
                                    eid: ssid,
                                    source_id: domainID,
                                    source_type: 1
                                })
                            }).then(response=>response.ok ? response : Promise.reject("error")).catch(error=>Promise.reject(error.message))
                        }
                        function push_updateSubscription() {
                            navigator.serviceWorker.ready.then(serviceWorkerRegistration=>serviceWorkerRegistration.pushManager.getSubscription()).then(subscription=>{
                                if (subscription)
                                    return push_sendSubscriptionToServer(subscription, "PUT");
                                var is_subscriber = !1;
                                isSubscriber().then(res=>{
                                    if (!(is_subscriber = res)) {
                                        var match_rule = !0;
                                        checkPageRules().then(res=>{
                                            (match_rule = res) && (byPassModal ? applicationServerKey ? isNotificationBlocked ? console.log("Browser push is blocked by default on this browser") : openDefaultModal() : console.log("Browser push key is not loaded correctly") : (loadFile(vbt_baseURL + "/css/webpush/popup/tingle.min.css?v=0.2", "css"),
                                            loadFile(vbt_baseURL + "/css/webpush/popup/vbout-popup.css?v=0.2", "css"),
                                            loadFile(vbt_baseURL + "/js/webpush/popup/tingle.min.js?v=0.1", "js", (function() {
                                                applicationServerKey ? isNotificationBlocked ? console.log("Browser push is blocked by default on this browser") : showModal() : console.log("Browser push key is not loaded correctly")
                                            }
                                            ))))
                                        }
                                        )
                                    }
                                }
                                )
                            }
                            ).then(subscription=>subscription).catch(e=>{
                                console.error("Error when updating the subscription", e)
                            }
                            )
                        }
                        function push_unsubscribe() {
                            console.trace(),
                            navigator.serviceWorker.ready.then(serviceWorkerRegistration=>serviceWorkerRegistration.pushManager.getSubscription()).then(subscription=>{
                                if (subscription)
                                    return console.log("unsubscribe"),
                                    push_sendSubscriptionToServer(subscription, "DELETE");
                                changePushState("disabled")
                            }
                            ).then(subscription=>subscription.unsubscribe()).then(()=>changePushState("disabled")).catch(e=>{
                                console.error("Error when unsubscribing the user", e),
                                changePushState("disabled")
                            }
                            )
                        }
                        function push_sendSubscriptionToServer(subscription, method) {
                            const key = subscription.getKey("p256dh")
                              , token = subscription.getKey("auth");
                            return ssid = push_ssid || get_push_ssid(),
                            fetch(vbt_baseURL + "index.php?r=WebPush/ManageSubscription", {
                                method: method,
                                body: JSON.stringify({
                                    pid: profileID,
                                    eid: ssid,
                                    c_endpoint: subscription.endpoint,
                                    c_key: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
                                    c_token: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null,
                                    source_id: domainID,
                                    source_type: 1
                                })
                            }).then(()=>subscription)
                        }
                        function isSubscriber() {
                            return ssid = push_ssid || get_push_ssid(),
                            fetch(vbt_baseURL + "index.php?r=WebPush/IsSubscriber", {
                                method: "POST",
                                body: JSON.stringify({
                                    pid: profileID,
                                    source_id: domainID,
                                    source_type: 1,
                                    eid: ssid
                                })
                            }).then(response=>response.json()).then((function(data) {
                                if ("data"in data)
                                    return !!data.data
                            }
                            )).catch(error=>console.error("Error:", error))
                        }
                        function showModal() {
                            return ssid = push_ssid || get_push_ssid(),
                            fetch(vbt_baseURL + "index.php?r=WebPush/PopupDisplaySettings", {
                                method: "POST",
                                body: JSON.stringify({
                                    pid: profileID,
                                    source_id: domainID,
                                    source_type: 1,
                                    eid: ssid
                                })
                            }).then(response=>response.json()).then((function(data) {
                                "data"in data && data.data && openModal()
                            }
                            )).catch(error=>console.error("Error:", error))
                        }
                        function openModal() {
                            return fetch(vbt_baseURL + "index.php?r=WebPush/PopupSettings", {
                                method: "POST",
                                body: JSON.stringify({
                                    pid: profileID,
                                    source_id: domainID,
                                    source_type: 1
                                })
                            }).then(response=>response.json()).then((function(data) {
                                ssid = push_ssid || get_push_ssid();
                                let popup_settings = data.data
                                  , delay_time = 0;
                                if (popup_settings.delay_time && (delay_time = 1e3 * popup_settings.delay_time),
                                1 == popup_settings.show_contact && null !== ssid && 0 == popup_settings.show_anonymous || 1 == popup_settings.show_anonymous && null == ssid && 0 == popup_settings.show_contact || 1 == popup_settings.show_contact && 1 == popup_settings.show_anonymous) {
                                    var modal = new tingle.modal({
                                        footer: !0,
                                        stickyFooter: !0,
                                        closeMethods: ["button"],
                                        onOpen: function() {},
                                        onClose: function() {},
                                        beforeOpen: function() {},
                                        beforeClose: function() {
                                            return !0
                                        }
                                    });
                                    if (popup_settings.popup_icon ? modal.setContent('<div class="popover-body"><div class="popover-body-icon"><img alt="popup icon" class="default-icon" src="' + popup_settings.popup_icon + '"></div><div class="popover-body-message">' + popup_settings.action_message + "</div></div>") : modal.setContent('<div class="popover-body"><div class="popover-body-message">' + popup_settings.action_message + "</div></div>"),
                                    modal.addFooterBtn(popup_settings.allow_button, "tingle-btn tingle-btn--pull-right tingle-btn--primary", (function() {
                                        push_permissionLog("accept"),
                                        push_subscribe(),
                                        modal.close()
                                    }
                                    )),
                                    modal.addFooterBtn(popup_settings.cancel_button, "tingle-btn tingle-btn--pull-right tingle-btn--default", (function() {
                                        push_permissionLog("cancel"),
                                        modal.close()
                                    }
                                    )),
                                    vBrandingWebpush) {
                                        var brandingBtn = document.createElement("span");
                                        brandingBtn.setAttribute("class", "tingle-btn tingle-btn--default tingle-btn--pull-left"),
                                        brandingBtn.setAttribute("style", "padding-right: 0;padding-left: 0;margin-right: 0;margin-left: 0;"),
                                        brandingBtn.innerHTML = vBrandingWebpush,
                                        modal.modalBoxFooter.appendChild(brandingBtn)
                                    }
                                    setTimeout((function() {
                                        modal.open()
                                    }
                                    ), delay_time)
                                }
                            }
                            )).catch(error=>console.error("Error:", error))
                        }
                        function openDefaultModal() {
                            return fetch(vbt_baseURL + "/index.php?r=WebPush/DefaultPopupSettings", {
                                method: "POST",
                                body: JSON.stringify({
                                    pid: profileID,
                                    source_id: domainID,
                                    source_type: 1
                                })
                            }).then(response=>response.json()).then((function(data) {
                                ssid = push_ssid || get_push_ssid();
                                let popup_settings = data.data
                                  , delay_time = 0;
                                popup_settings.delay_time && (delay_time = 1e3 * popup_settings.delay_time),
                                (1 == popup_settings.show_contact && null !== ssid && 0 == popup_settings.show_anonymous || 1 == popup_settings.show_anonymous && null == ssid && 0 == popup_settings.show_contact || 1 == popup_settings.show_contact && 1 == popup_settings.show_anonymous) && setTimeout((function() {
                                    push_subscribe()
                                }
                                ), delay_time)
                            }
                            )).catch(error=>console.error("Error:", error))
                        }
                        function checkPageRules() {
                            return fetch(vbt_baseURL + "index.php?r=WebPush/GetDomainPageRules", {
                                method: "POST",
                                body: JSON.stringify({
                                    source_id: domainID,
                                    pid: profileID
                                })
                            }).then(response=>response.json()).then((function(data) {
                                if ("data"in data) {
                                    var popup_display_data = data.data, popup_display_data_count, match_result;
                                    return popup_display_data.length > 0 && (match_result = vbt_matchUrls(page_url, popup_display_data, !1)),
                                    !!match_result
                                }
                                return !0
                            }
                            )).catch(error=>console.error("Error:", error))
                        }
                        "denied" === Notification.permission && (console.warn("Notifications are denied by the user"),
                        isNotificationBlocked = !0),
                        navigator.serviceWorker.register("/vbt-sdk.js").then(()=>{
                            console.log("[SW] Service worker has been registered"),
                            push_updateSubscription()
                        }
                        , e=>{
                            navigator.serviceWorker.register("/vbout-sdk.js").then(()=>{
                                console.log("[SW] Service worker has been registered"),
                                push_updateSubscription()
                            }
                            , e=>{
                                console.error("[SW] Service worker registration failed", e)
                            }
                            )
                        }
                        )
                    }
                } else
                    console.warn("Browser Push is only supported over HTTPS.")
            }(vBrandingWebpush || null);
        }
    }
    )(window._vbset, window._vbTracker);

    function triggerHeatMapView() {
        var x = 0;
        var interval = setInterval(function() {
            var responsiveEle = document.getElementById('ResponsiveScreen');
            if (responsiveEle) {
                responsiveEle.click();
                clearInterval(interval);
            } else {
                x++;
                if (x > 200) {
                    clearInterval(interval);
                }
            }
        }, 125);
    }
    if (document.readyState === "complete") {
        triggerHeatMapView();
    } else {
        window.addEventListener ? window.addEventListener("load", triggerHeatMapView, false) : window.attachEvent && window.attachEvent("onload", triggerHeatMapView);
    }

}
)();

