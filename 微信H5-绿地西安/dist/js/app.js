! function(t) {
	function e(i) {
		if(n[i]) return n[i].exports;
		var o = n[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
	}
	var n = {};
	e.m = t, e.c = n, e.d = function(t, n, i) {
		e.o(t, n) || Object.defineProperty(t, n, {
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, e.n = function(t) {
		var n = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return e.d(n, "a", n), n
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "./dist/", e(e.s = 9)
}([function(t, e) {
	"use strict";

	function n(t) {
		var e = decodeURIComponent(t),
			n = {},
			i = "",
			o = [];
		e && (o = e.split("&"));
		for(var r = 0; r < o.length; r++) i = o[r].split("="), i[0] && (n[i[0]] = void 0 === i[1] ? null : i[1]);
		return n
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(t) {
		for(var e, n = 1; n < arguments.length; n++)
			for(var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
		return t
	};
	e.getHomePage = function() {
		var t = location.pathname.slice(0, location.pathname.lastIndexOf("/") + 1),
			e = "/" == t.charAt(t.length - 1) ? t : t + "/";
		return location.origin + e
	}, e.loading = function(t) {
		var e = null,
			n = null,
			i = 0;
		return {
			show: function() {
				e = setInterval(function() {
					t.find(".progress").html((i += 2) + "%"), 98 == i && (clearInterval(e), n = setTimeout(function() {
						t.find(".progress").html("99%")
					}, 1e3))
				}, 30), t[0] && t.addClass("visible")
			},
			hide: function() {
				clearTimeout(n), clearInterval(e), t.find(".progress").html("100%"), i = 0, e = null, n = null, t[0] && t.removeClass("visible")
			}
		}
	}, e.getQuery = function(t) {
		var e = decodeURIComponent(location.href),
			o = location.search.substr(1) || e.split("?")[1] || "",
			r = location.hash.substr(1) || e.split("?")[1] || "",
			a = i(n(o), n(r)),
			s = a[t];
		return s || null
	}, e.parseQuery = n, e.toast = function() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
			e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2e3,
			n = $('<div class="Widget toast js-toast"><p class="content">' + t + "</p></div>");
		0 == $(".js-toast").length ? n.appendTo("body") : $(".js-toast").show().find(".content").text(t), clearTimeout(o), o = setTimeout(function() {
			return $(".js-toast").hide()
		}, e)
	}, e.getCookie = function(t) {
		var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]*)(;|$)"));
		return null == e ? null : decodeURIComponent(e[2])
	}, e.setCookie = function(t, e, n) {
		var i = new Date;
		i.setTime(i.getTime() + 24 * (n || 30) * 60 * 60 * 1e3), document.cookie = t + "=" + encodeURIComponent(e) + ";expires=" + i.toUTCString()
	}, e.randomShareInfo = function(t) {
		var e = {
				title: "留下你爱西安的美好瞬间",
				description: "带你穿越西安 发现美好"
			},
			n = {},
			i = {};
		return "result" === t && (n = {
			title: "留下你爱西安的美好瞬间",
			description: "带你穿越西安 发现美好"
		}, i = {
			title: "留下你爱西安的美好瞬间",
			description: "带你穿越西安 发现美好"
		}, e = 1 <= 2 * Math.random() ? i : n), e
	}, e.getByteLen = function(t) {
		for(var e, n = 0, i = 0; i < t.length; i++) e = t.charAt(i), n += null == e.match(/[^\x00-\xff]/gi) ? 1 : 2;
		return n
	}, e.subString1 = function(t, e) {
		var n = /[^\x00-\xff]/g;
		if(t.replace(n, "aa").length <= e) return t;
		for(var i = Math.floor(e / 2), o = i, r = t.length; o < r; o++)
			if(t.substring(0, o).replace(n, "aa").length >= e) return t.substring(0, o);
		return t
	}, e.trim = function() {
		return(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "").replace(/(^\s*)|(\s*$)/g, "")
	}, e.trackPageView = function() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
		window.sa && window.sa.quick("autoTrack", t)
	}, e.trackRegisterPage = function() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
		window.sa && window.sa.registerPage(t)
	}, e.track = function(t) {
		var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
		window.sa && window.sa.track(t, e)
	}, e.nativeCall = function(t, e) {
		var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {};
		WebviewJsBridge.nativeCall(t, e, function(i) {
			console.log(t, e, i), n(i)
		})
	};
	var o = (e.store = {
		get: function(t) {
			return localStorage.getItem(t)
		},
		set: function(t, e) {
			return localStorage.setItem(t, e)
		},
		remove: function(t) {
			return localStorage.removeItem(t)
		}
	}, null)
}, function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = function() {
		var t = window.navigator.userAgent.toLowerCase();
		return {
			iOS: /(iPhone|iPad|iPod|iOS)/gi.test(t),
			Android: /android|adr/gi.test(t),
			Mobile: /(iPhone|iPad|iPod|iOS|Android|adr|Windows Phone|SymbianOS)/gi.test(t),
			Weibo: /(weibo)/gi.test(t),
			WeChat: !("micromessenger" != t.match(/MicroMessenger/gi)),
			QQ: /qq\//gi.test(t),
			Qzone: -1 !== t.indexOf("qzone/"),
			Meitu: /(com.meitu)/gi.test(t),
			Meipai: /meipaimv|meipai|com.meitu.mtmv/gi.test(t),
			Meipu: /com.meitu.meipu/gi.test(t),
			Xiuxiu: /(com.meitu.mtxx)/gi.test(t),
			Meiyan: /(com.meitu.myxj|com.meitu.meiyancamera)/gi.test(t),
			Makeup: /com.meitu.makeup/gi.test(t),
			Selfilecity: /com.meitu.wheelcam/gi.test(t),
			Beautyme: /com.meitu.zhi.beauty/gi.test(t),
			Shanliao: /(com.meitu.shanliao|com.meitu.testwheetalk)/gi.test(t),
			Twitter: /Twitter/gi.test(t),
			Facebook: /fbav/gi.test(t)
		}
	}();
	e.default = n
}, function(t, e, n) {
	t.exports = n.p + "images/skip_share.jpg?5a5560da"
}, function(t, e, n) {
	"use strict";

	function i(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function o(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	function r(t) {
		var e = {},
			n = "",
			i = [],
			o = decodeURIComponent(t);
		o && (i = o.split("&"));
		for(var r = 0; r < i.length; r++) n = i[r].split("="), n[0] && (e[n[0]] = void 0 === n[1] ? null : n[1]);
		return e
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		s = function() {
			function t(t, e) {
				var n, i = [],
					o = !0,
					r = !1;
				try {
					for(var a, s = t[Symbol.iterator](); !((o = (a = s.next()).done) || (i.push(a.value), e && i.length === e)); o = !0);
				} catch(t) {
					r = !0, n = t
				} finally {
					try {
						!o && s.return && s.return()
					} finally {
						if(r) throw n
					}
				}
				return i
			}
			return function(e, n) {
				if(Array.isArray(e)) return e;
				if(Symbol.iterator in Object(e)) return t(e, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();
	e.getQuery = function(t) {
		var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
			n = decodeURIComponent(location.href),
			i = location.search.substr(1) || n.split("?")[1] || "",
			o = r(e || i)[t];
		return o || null
	}, e.setQuery = function() {
		var t = "",
			e = "",
			n = "",
			i = {};
		for(var r in "string" == typeof arguments[0] ? (n = arguments[2], i = o({}, arguments[0], arguments[1])) : (n = arguments[1], i = arguments[0]), i) {
			if("" == r) return n;
			n || (n = location.href), e = i[r], r = r.replace(/[\[\]]/g, "\\$&");
			var a = new RegExp(r + "=[^&]*"),
				u = n.split("#"),
				c = s(u, 2),
				l = c[0],
				p = c[1];
			e = r + (encodeURIComponent(e) ? "=" + encodeURIComponent(e) : ""), t = a.exec(n) ? n.replace(a, e) : l + (e ? "&" + e : "") + (p || "")
		}
		return t
	}, e.getHash = function(t) {
		var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
			n = decodeURIComponent(location.href),
			i = location.hash.substr(1) || n.split("#")[1] || "",
			o = r(e || i)[t];
		return o || null
	}, e.parseQuery = r, e.querify = function() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
			e = "";
		for(var n in t) e += n + (t[n] ? "=" + t[n] : "" == t[n] ? "=" : "") + "&";
		return e = e.slice(0, e.length - 1)
	}, e.send = function(t) {
		var e = document.createElement("iframe");
		e.src = t, setTimeout(function() {
			document.body.appendChild(e), setTimeout(function() {
				e.parentNode.removeChild(e)
			}, 300)
		}, 0)
	}, e.preload = function(t, e) {
		function n() {
			s(100 * (o + 1) / i.length, i[o]), ++o == t.length && r(1 === t.length ? i[0] : i)
		}
		var i = [],
			o = 0,
			r = function() {},
			s = function() {};
		return t = "object" == (void 0 === t ? "undefined" : a(t)) ? t : [t], 0 === t.length && setTimeout(function() {
			return r(i)
		}, 0), t.map(function(t, o) {
			i[o] = new Image, e && (i[o].crossOrigin = "*"), i[o].src = t, i[o].onload = n, i[o].onerror = n
		}), {
			done: function() {
				r = arguments[0] || r
			},
			progress: function() {
				s = arguments[0] || s
			}
		}
	}, e.getRandomNum = function() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
			e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 9;
		return t + Math.round(Math.random() * (e - t))
	};
	var u = n(41);
	Object.defineProperty(e, "extend", {
		enumerable: !0,
		get: function() {
			return i(u).default
		}
	})
}, function(t, e, n) {
	t.exports = n.p + "images/pic-mask.png?8eada90c"
}, function(t, e) {
	"use strict";

	function n(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	var i = Math.PI,
		o = String.fromCharCode,
		r = Math.floor;
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		s = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(t) {
			return void 0 === t ? "undefined" : a(t)
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
		},
		u = function(t, e, n) {
			var i = t,
				r = e || 0,
				a = 0;
			this.getRawData = function() {
				return i
			}, "string" == typeof t ? (a = n || i.length, this.getByteAt = function(t) {
				return 255 & i.charCodeAt(t + r)
			}, this.getBytesAt = function(t, e) {
				for(var n = [], o = 0; o < e; o++) n[o] = 255 & i.charCodeAt(t + o + r);
				return n
			}) : "unknown" == typeof t && (a = n || IEBinary_getLength(i), this.getByteAt = function(t) {
				return IEBinary_getByteAt(i, t + r)
			}, this.getBytesAt = function(t, e) {
				return new VBArray(IEBinary_getBytesAt(i, t + r, e)).toArray()
			}), this.getLength = function() {
				return a
			}, this.getSByteAt = function(t) {
				var e = this.getByteAt(t);
				return 127 < e ? e - 256 : e
			}, this.getShortAt = function(t, e) {
				var n = e ? (this.getByteAt(t) << 8) + this.getByteAt(t + 1) : (this.getByteAt(t + 1) << 8) + this.getByteAt(t);
				return 0 > n && (n += 65536), n
			}, this.getSShortAt = function(t, e) {
				var n = this.getShortAt(t, e);
				return 32767 < n ? n - 65536 : n
			}, this.getLongAt = function(t, e) {
				var n = this.getByteAt(t),
					i = this.getByteAt(t + 1),
					o = this.getByteAt(t + 2),
					r = this.getByteAt(t + 3),
					a = e ? (((n << 8) + i << 8) + o << 8) + r : (((r << 8) + o << 8) + i << 8) + n;
				return 0 > a && (a += 4294967296), a
			}, this.getSLongAt = function(t, e) {
				var n = this.getLongAt(t, e);
				return 2147483647 < n ? n - 4294967296 : n
			}, this.getStringAt = function(t, e) {
				for(var n = [], i = this.getBytesAt(t, e), r = 0; r < e; r++) n[r] = o(i[r]);
				return n.join("")
			}, this.getCharAt = function(t) {
				return o(this.getByteAt(t))
			}, this.toBase64 = function() {
				return window.btoa(i)
			}, this.fromBase64 = function(t) {
				i = window.atob(t)
			}
		},
		c = function() {
			function t() {
				var t = null;
				return window.ActiveXObject ? t = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (t = new XMLHttpRequest), t
			}

			function e(e, n, i) {
				var o = t();
				o ? (n && (void 0 === o.onload ? o.onreadystatechange = function() {
					4 == o.readyState && ("200" == o.status ? n(this) : i && i(), o = null)
				} : o.onload = function() {
					"200" == o.status ? n(this) : i && i(), o = null
				}), o.open("HEAD", e, !0), o.send(null)) : i && i()
			}

			function n(e, n, i, o, r, a) {
				var s = t();
				if(s) {
					var c = 0;
					o && !r && (c = o[0]);
					var l = 0;
					o && (l = o[1] - o[0] + 1), n && (void 0 === s.onload ? s.onreadystatechange = function() {
						if(4 == s.readyState) {
							if("200" == s.status || "206" == s.status || "0" == s.status) {
								var t = {
									status: s.status,
									binaryResponse: new u("unknown" == typeof s.responseBody ? s.responseBody : s.responseText, c, l),
									fileSize: a || s.getResponseHeader("Content-Length")
								};
								n(t)
							} else i && i();
							s = null
						}
					} : s.onload = function() {
						"200" == s.status || "206" == s.status || "0" == s.status ? (s.binaryResponse = new u(s.responseText, c, l), s.fileSize = a || s.getResponseHeader("Content-Length"), n(s)) : i && i(), s = null
					}), s.open("GET", e, !0), s.overrideMimeType && s.overrideMimeType("text/plain; charset=x-user-defined"), o && r && s.setRequestHeader("Range", "bytes=" + o[0] + "-" + o[1]), s.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT"), s.send(null)
				} else i && i()
			}
			return function(t, i, o, r) {
				r ? e(t, function(e) {
					var a, s, u = parseInt(e.getResponseHeader("Content-Length"), 10),
						c = e.getResponseHeader("Accept-Ranges");
					a = r[0], 0 > r[0] && (a += u), s = a + r[1] - 1, n(t, i, o, [a, s], "bytes" == c, u)
				}) : n(t, i, o)
			}
		}();
	document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\nEnd Function\r\nFunction IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n  Dim aBytes()\r\n  ReDim aBytes(iLength - 1)\r\n  For i = 0 To iLength - 1\r\n   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n  Next\r\n  IEBinary_getBytesAt = aBytes\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n IEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n<\/script>\r\n");
	var l = function() {
		function t(t) {
			return !!t.exifdata
		}

		function e(t, e) {
			c(t.src, function(i) {
				var o = n(i.binaryResponse);
				t.exifdata = o || {}, e && e.call(t)
			})
		}

		function n(t) {
			if(255 != t.getByteAt(0) || 216 != t.getByteAt(1)) return !1;
			for(var e, n = 2, i = t.getLength(); n < i;) {
				if(255 != t.getByteAt(n)) return !1;
				if(22400 == (e = t.getByteAt(n + 1))) return a(t, n + 4, t.getShortAt(n + 2, !0));
				if(225 == e) return a(t, n + 4, t.getShortAt(n + 2, !0));
				n += 2 + t.getShortAt(n + 2, !0)
			}
		}

		function i(t, e, n, i, o) {
			var a, s, u, c = t.getShortAt(n, o),
				l = {};
			for(u = 0; u < c; u++) a = n + 12 * u + 2, s = i[t.getShortAt(a, o)], l[s] = r(t, a, e, n, o);
			return l
		}

		function r(t, e, n, i, o) {
			var r, a, s, u, c, l, p = t.getShortAt(e + 2, o),
				h = t.getLongAt(e + 4, o),
				d = t.getLongAt(e + 8, o) + n;
			switch(p) {
				case 1:
				case 7:
					if(1 == h) return t.getByteAt(e + 8, o);
					for(r = 4 < h ? d : e + 8, a = [], u = 0; u < h; u++) a[u] = t.getByteAt(r + u);
					return a;
				case 2:
					return r = 4 < h ? d : e + 8, t.getStringAt(r, h - 1);
				case 3:
					if(1 == h) return t.getShortAt(e + 8, o);
					for(r = 2 < h ? d : e + 8, a = [], u = 0; u < h; u++) a[u] = t.getShortAt(r + 2 * u, o);
					return a;
				case 4:
					if(1 == h) return t.getLongAt(e + 8, o);
					a = [];
					for(var u = 0; u < h; u++) a[u] = t.getLongAt(d + 4 * u, o);
					return a;
				case 5:
					if(1 == h) return c = t.getLongAt(d, o), l = t.getLongAt(d + 4, o), s = new Number(c / l), s.numerator = c, s.denominator = l, s;
					for(a = [], u = 0; u < h; u++) c = t.getLongAt(d + 8 * u, o), l = t.getLongAt(d + 4 + 8 * u, o), a[u] = new Number(c / l), a[u].numerator = c, a[u].denominator = l;
					return a;
				case 9:
					if(1 == h) return t.getSLongAt(e + 8, o);
					for(a = [], u = 0; u < h; u++) a[u] = t.getSLongAt(d + 4 * u, o);
					return a;
				case 10:
					if(1 == h) return t.getSLongAt(d, o) / t.getSLongAt(d + 4, o);
					for(a = [], u = 0; u < h; u++) a[u] = t.getSLongAt(d + 8 * u, o) / t.getSLongAt(d + 4 + 8 * u, o);
					return a
			}
		}

		function a(t, e) {
			if("Exif" != t.getStringAt(e, 4)) return !1;
			var n, r, a, s, c, d = e + 6;
			if(18761 == t.getShortAt(d)) n = !1;
			else {
				if(19789 != t.getShortAt(d)) return !1;
				n = !0
			}
			if(42 != t.getShortAt(d + 2, n)) return !1;
			if(8 != t.getLongAt(d + 4, n)) return !1;
			if(r = i(t, d, d + 8, l, n), r.ExifIFDPointer)
				for(a in s = i(t, d, d + r.ExifIFDPointer, u, n)) "LightSource" === a || "Flash" === a || "MeteringMode" === a || "ExposureProgram" === a || "SensingMethod" === a || "SceneCaptureType" === a || "SceneType" === a || "CustomRendered" === a || "WhiteBalance" === a || "GainControl" === a || "Contrast" === a || "Saturation" === a || "Sharpness" === a || "SubjectDistanceRange" === a || "FileSource" === a ? s[a] = h[a][s[a]] : "ExifVersion" === a || "FlashpixVersion" === a ? s[a] = o(s[a][0], s[a][1], s[a][2], s[a][3]) : "ComponentsConfiguration" === a && (s[a] = h.Components[s[a][0]] + h.Components[s[a][1]] + h.Components[s[a][2]] + h.Components[s[a][3]]), r[a] = s[a];
			if(r.GPSInfoIFDPointer)
				for(a in c = i(t, d, d + r.GPSInfoIFDPointer, p, n)) "GPSVersionID" === a && (c[a] = c[a][0] + "." + c[a][1] + "." + c[a][2] + "." + c[a][3]), r[a] = c[a];
			return r
		}
		var u = {
				33434: "ExposureTime",
				33437: "FNumber",
				34850: "ExposureProgram",
				34852: "SpectralSensitivity",
				34855: "ISOSpeedRatings",
				34856: "OECF",
				36864: "ExifVersion",
				36867: "DateTimeOriginal",
				36868: "DateTimeDigitized",
				37121: "ComponentsConfiguration",
				37122: "CompressedBitsPerPixel",
				37377: "ShutterSpeedValue",
				37378: "ApertureValue",
				37379: "BrightnessValue",
				37380: "ExposureBias",
				37381: "MaxApertureValue",
				37382: "SubjectDistance",
				37383: "MeteringMode",
				37384: "LightSource",
				37385: "Flash",
				37386: "FocalLength",
				37396: "SubjectArea",
				37500: "MakerNote",
				37510: "UserComment",
				37520: "SubsecTime",
				37521: "SubsecTimeOriginal",
				37522: "SubsecTimeDigitized",
				40960: "FlashpixVersion",
				40961: "ColorSpace",
				40962: "PixelXDimension",
				40963: "PixelYDimension",
				40964: "RelatedSoundFile",
				40965: "InteroperabilityIFDPointer",
				41483: "FlashEnergy",
				41484: "SpatialFrequencyResponse",
				41486: "FocalPlaneXResolution",
				41487: "FocalPlaneYResolution",
				41488: "FocalPlaneResolutionUnit",
				41492: "SubjectLocation",
				41493: "ExposureIndex",
				41495: "SensingMethod",
				41728: "FileSource",
				41729: "SceneType",
				41730: "CFAPattern",
				41985: "CustomRendered",
				41986: "ExposureMode",
				41987: "WhiteBalance",
				41988: "DigitalZoomRation",
				41989: "FocalLengthIn35mmFilm",
				41990: "SceneCaptureType",
				41991: "GainControl",
				41992: "Contrast",
				41993: "Saturation",
				41994: "Sharpness",
				41995: "DeviceSettingDescription",
				41996: "SubjectDistanceRange",
				42016: "ImageUniqueID"
			},
			l = {
				256: "ImageWidth",
				257: "ImageHeight",
				258: "BitsPerSample",
				259: "Compression",
				262: "PhotometricInterpretation",
				270: "ImageDescription",
				271: "Make",
				272: "Model",
				273: "StripOffsets",
				274: "Orientation",
				277: "SamplesPerPixel",
				278: "RowsPerStrip",
				279: "StripByteCounts",
				282: "XResolution",
				283: "YResolution",
				284: "PlanarConfiguration",
				296: "ResolutionUnit",
				301: "TransferFunction",
				305: "Software",
				306: "DateTime",
				315: "Artist",
				318: "WhitePoint",
				319: "PrimaryChromaticities",
				513: "JPEGInterchangeFormat",
				514: "JPEGInterchangeFormatLength",
				529: "YCbCrCoefficients",
				530: "YCbCrSubSampling",
				531: "YCbCrPositioning",
				532: "ReferenceBlackWhite",
				33432: "Copyright",
				34665: "ExifIFDPointer",
				34853: "GPSInfoIFDPointer",
				40965: "InteroperabilityIFDPointer"
			},
			p = {
				0: "GPSVersionID",
				1: "GPSLatitudeRef",
				2: "GPSLatitude",
				3: "GPSLongitudeRef",
				4: "GPSLongitude",
				5: "GPSAltitudeRef",
				6: "GPSAltitude",
				7: "GPSTimeStamp",
				8: "GPSSatellites",
				9: "GPSStatus",
				10: "GPSMeasureMode",
				11: "GPSDOP",
				12: "GPSSpeedRef",
				13: "GPSSpeed",
				14: "GPSTrackRef",
				15: "GPSTrack",
				16: "GPSImgDirectionRef",
				17: "GPSImgDirection",
				18: "GPSMapDatum",
				19: "GPSDestLatitudeRef",
				20: "GPSDestLatitude",
				21: "GPSDestLongitudeRef",
				22: "GPSDestLongitude",
				23: "GPSDestBearingRef",
				24: "GPSDestBearing",
				25: "GPSDestDistanceRef",
				26: "GPSDestDistance",
				27: "GPSProcessingMethod",
				28: "GPSAreaInformation",
				29: "GPSDateStamp",
				30: "GPSDifferential"
			},
			h = {
				ExposureProgram: {
					0: "Not defined",
					1: "Manual",
					2: "Normal program",
					3: "Aperture priority",
					4: "Shutter priority",
					5: "Creative program",
					6: "Action program",
					7: "Portrait mode",
					8: "Landscape mode"
				},
				MeteringMode: {
					0: "Unknown",
					1: "Average",
					2: "CenterWeightedAverage",
					3: "Spot",
					4: "MultiSpot",
					5: "Pattern",
					6: "Partial",
					255: "Other"
				},
				LightSource: {
					0: "Unknown",
					1: "Daylight",
					2: "Fluorescent",
					3: "Tungsten (incandescent light)",
					4: "Flash",
					9: "Fine weather",
					10: "Cloudy weather",
					11: "Shade",
					12: "Daylight fluorescent (D 5700 - 7100K)",
					13: "Day white fluorescent (N 4600 - 5400K)",
					14: "Cool white fluorescent (W 3900 - 4500K)",
					15: "White fluorescent (WW 3200 - 3700K)",
					17: "Standard light A",
					18: "Standard light B",
					19: "Standard light C",
					20: "D55",
					21: "D65",
					22: "D75",
					23: "D50",
					24: "ISO studio tungsten",
					255: "Other"
				},
				Flash: {
					0: "Flash did not fire",
					1: "Flash fired",
					5: "Strobe return light not detected",
					7: "Strobe return light detected",
					9: "Flash fired, compulsory flash mode",
					13: "Flash fired, compulsory flash mode, return light not detected",
					15: "Flash fired, compulsory flash mode, return light detected",
					16: "Flash did not fire, compulsory flash mode",
					24: "Flash did not fire, auto mode",
					25: "Flash fired, auto mode",
					29: "Flash fired, auto mode, return light not detected",
					31: "Flash fired, auto mode, return light detected",
					32: "No flash function",
					65: "Flash fired, red-eye reduction mode",
					69: "Flash fired, red-eye reduction mode, return light not detected",
					71: "Flash fired, red-eye reduction mode, return light detected",
					73: "Flash fired, compulsory flash mode, red-eye reduction mode",
					77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
					79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
					89: "Flash fired, auto mode, red-eye reduction mode",
					93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
					95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
				},
				SensingMethod: {
					1: "Not defined",
					2: "One-chip color area sensor",
					3: "Two-chip color area sensor",
					4: "Three-chip color area sensor",
					5: "Color sequential area sensor",
					7: "Trilinear sensor",
					8: "Color sequential linear sensor"
				},
				SceneCaptureType: {
					0: "Standard",
					1: "Landscape",
					2: "Portrait",
					3: "Night scene"
				},
				SceneType: {
					1: "Directly photographed"
				},
				CustomRendered: {
					0: "Normal process",
					1: "Custom process"
				},
				WhiteBalance: {
					0: "Auto white balance",
					1: "Manual white balance"
				},
				GainControl: {
					0: "None",
					1: "Low gain up",
					2: "High gain up",
					3: "Low gain down",
					4: "High gain down"
				},
				Contrast: {
					0: "Normal",
					1: "Soft",
					2: "Hard"
				},
				Saturation: {
					0: "Normal",
					1: "Low saturation",
					2: "High saturation"
				},
				Sharpness: {
					0: "Normal",
					1: "Soft",
					2: "Hard"
				},
				SubjectDistanceRange: {
					0: "Unknown",
					1: "Macro",
					2: "Close view",
					3: "Distant view"
				},
				FileSource: {
					3: "DSC"
				},
				Components: {
					0: "",
					1: "Y",
					2: "Cb",
					3: "Cr",
					4: "R",
					5: "G",
					6: "B"
				}
			};
		return {
			readFromBinaryFile: function(t) {
				return n(t)
			},
			pretty: function(e) {
				if(!t(e)) return "";
				var n, i = e.exifdata,
					o = "";
				for(n in i) i.hasOwnProperty(n) && (o += "object" == s(i[n]) ? i[n] instanceof Number ? n + " : " + i[n] + " [" + i[n].numerator + "/" + i[n].denominator + "]\r\n" : n + " : [" + i[n].length + " values]\r\n" : n + " : " + i[n] + "\r\n");
				return o
			},
			getTag: function(e, n) {
				return t(e) ? e.exifdata[n] : void 0
			},
			getAllTags: function(e) {
				if(!t(e)) return {};
				var n, i = e.exifdata,
					o = {};
				for(n in i) i.hasOwnProperty(n) && (o[n] = i[n]);
				return o
			},
			getData: function(n, i) {
				return !!n.complete && (t(n) ? i && i.call(n) : e(n, i), !0)
			},
			Tags: u,
			TiffTags: l,
			GPSTags: p,
			StringValues: h
		}
	}();
	! function(t) {
		function e(t, e) {
			this.file = t, this.options = o.extend({}, a, e), this._defaults = a, this._name = n, this.init()
		}
		var n = "canvasResize",
			o = {
				newsize: function(t, e, n, i, o) {
					var r = o ? "h" : "";
					if(n && t > n || i && e > i) {
						var a = t / e;
						(1 <= a || 0 === i) && n && !o ? (t = n, e = n / a >> 0) : o && a <= n / i ? (t = n, e = n / a >> 0, r = "w") : (t = i * a >> 0, e = i)
					}
					return {
						width: t,
						height: e,
						cropped: r
					}
				},
				dataURLtoBlob: function(t) {
					for(var e = t.split(",")[0].split(":")[1].split(";")[0], n = atob(t.split(",")[1]), i = new ArrayBuffer(n.length), o = new Uint8Array(i), r = 0; r < n.length; r++) o[r] = n.charCodeAt(r);
					var a = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
					return a ? (a = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder), a.append(i), a.getBlob(e)) : a = new Blob([i], {
						type: e
					})
				},
				detectSubsampling: function(t) {
					var e = t.width;
					if(1048576 < e * t.height) {
						var n = document.createElement("canvas");
						n.width = n.height = 1;
						var i = n.getContext("2d");
						return i.drawImage(t, 1 - e, 0), 0 === i.getImageData(0, 0, 1, 1).data[3]
					}
					return !1
				},
				rotate: function(t, e) {
					var n = {
						1: {
							90: 6,
							180: 3,
							270: 8
						},
						2: {
							90: 7,
							180: 4,
							270: 5
						},
						3: {
							90: 8,
							180: 1,
							270: 6
						},
						4: {
							90: 5,
							180: 2,
							270: 7
						},
						5: {
							90: 2,
							180: 7,
							270: 4
						},
						6: {
							90: 3,
							180: 8,
							270: 1
						},
						7: {
							90: 4,
							180: 5,
							270: 2
						},
						8: {
							90: 1,
							180: 6,
							270: 3
						}
					};
					return n[t][e] ? n[t][e] : t
				},
				transformCoordinate: function(t, e, n, o) {
					5 === o || 6 === o || 7 === o || 8 === o ? (t.width = n, t.height = e) : (t.width = e, t.height = n);
					var r = t.getContext("2d");
					switch(o) {
						case 1:
							break;
						case 2:
							r.translate(e, 0), r.scale(-1, 1);
							break;
						case 3:
							r.translate(e, n), r.rotate(Math.PI);
							break;
						case 4:
							r.translate(0, n), r.scale(1, -1);
							break;
						case 5:
							r.rotate(.5 * i), r.scale(1, -1);
							break;
						case 6:
							r.rotate(.5 * i), r.translate(0, -n);
							break;
						case 7:
							r.rotate(.5 * i), r.translate(e, -n), r.scale(-1, 1);
							break;
						case 8:
							r.rotate(-.5 * i), r.translate(-e, 0)
					}
				},
				detectVerticalSquash: function(t, e, n) {
					var i = document.createElement("canvas");
					i.width = 1, i.height = n;
					var o = i.getContext("2d");
					o.drawImage(t, 0, 0);
					for(var r = o.getImageData(0, 0, 1, n).data, a = 0, s = n, u = n; u > a;) {
						0 === r[4 * (u - 1) + 3] ? s = u : a = u, u = s + a >> 1
					}
					var c = u / n;
					return 0 == c ? 1 : c
				},
				callback: function(t) {
					return t
				},
				extend: function() {
					var t = arguments[0] || {},
						e = 1,
						n = arguments.length,
						i = !1;
					t.constructor === Boolean && (i = t, t = arguments[1] || {}), 1 === n && (t = this, e = 0);
					for(var r; e < n; e++)
						if(null !== (r = arguments[e]))
							for(var a in r) t !== r[a] && (i && "object" === s(r[a]) && t[a] ? o.extend(t[a], r[a]) : void 0 !== r[a] && (t[a] = r[a]));
					return t
				}
			},
			a = {
				width: 300,
				height: 0,
				crop: !1,
				quality: 80,
				rotate: 0,
				callback: o.callback
			};
		e.prototype = {
			init: function() {
				var t = this,
					e = this.file,
					n = new FileReader;
				n.onloadend = function(n) {
					var i = n.target.result,
						a = atob(i.split(",")[1]),
						s = new u(a, 0, a.length),
						c = l.readFromBinaryFile(s),
						p = new Image;
					p.onload = function() {
						var n = Math.ceil,
							i = c.Orientation || 1;
						i = o.rotate(i, t.options.rotate);
						var a = 5 <= i && 8 >= i ? o.newsize(p.height, p.width, t.options.width, t.options.height, t.options.crop) : o.newsize(p.width, p.height, t.options.width, t.options.height, t.options.crop),
							s = p.width,
							u = p.height,
							l = a.width,
							h = a.height,
							d = document.createElement("canvas"),
							f = d.getContext("2d");
						f.save(), o.transformCoordinate(d, l, h, i), o.detectSubsampling(p) && (s /= 2, u /= 2);
						var m = 1024,
							g = document.createElement("canvas");
						g.width = g.height = m;
						for(var y = g.getContext("2d"), v = o.detectVerticalSquash(p, s, u), A = 0; A < u;) {
							for(var b, w = A + m > u ? u - A : m, x = 0; x < s;) {
								b = x + m > s ? s - x : m, y.clearRect(0, 0, m, m), y.drawImage(p, -x, -A);
								var k = r(x * l / s),
									S = n(b * l / s),
									_ = r(A * h / u / v),
									C = n(w * h / u / v);
								f.drawImage(g, 0, 0, b, w, k, _, S, C), x += m
							}
							A += m
						}
						f.restore(), g = y = null;
						var P = document.createElement("canvas");
						P.width = "h" === a.cropped ? h : l, P.height = "w" === a.cropped ? l : h;
						var I = "h" === a.cropped ? .5 * (h - l) : 0,
							j = "w" === a.cropped ? .5 * (l - h) : 0;
						if(P.getContext("2d").drawImage(d, I, j, l, h), "image/png" === e.type) var T = P.toDataURL(e.type);
						else var T = P.toDataURL("image/jpeg", .01 * t.options.quality);
						t.options.callback(T, P.width, P.height)
					}, p.src = i
				}, n.readAsDataURL(e)
			}
		}, t[n] = function(t, n) {
			return "string" == typeof t ? o[t](n) : void new e(t, n)
		}
	}(window);
	var p = {
			token: {
				qiniu: "//applet.meitu.com/public/index/token",
				s3: "//haiwai.data.meitu.com/aws/h5_token",
				oss: "//applet.meitu.com/public/index/oss_token"
			},
			domain: {
				oss: "//make-channet-com.oss-cn-shenzhen.aliyuncs.com/",
				qiniu: "//upload.qbox.me/"
			},
			imgDomain: {
				oss: "//applet.meitudata.com/",
				qiniu: "//mtapplet.meitudata.com/"
			}
		},
		h = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(t) {
			return void 0 === t ? "undefined" : a(t)
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
		},
		d = {
			_get_img_type: function(t) {
				var e;
				if("string" != typeof t && t) {
					var n = t.type.replace("image/", "");
					e = "jpg" == n || "jpeg" == n || "png" == n ? n : "jpg"
				} else e = "jpg";
				return e
			},
			_get_up_type: function(t) {
				return 0 === t || "oss" === t ? "oss" : 1 === t || "qiniu" === t ? "qiniu" : 2 === t || "s3" === t ? "s3" : "oss"
			},
			_ajax: function(t) {
				if(!t || !t.url) return void console.log("ajax options required");
				var e = t.type,
					n = void 0 === e ? "GET" : e,
					i = t.success,
					o = void 0 === i ? function() {} : i,
					r = t.error,
					a = void 0 === r ? function() {} : r,
					s = t.timeout,
					u = void 0 === s ? 2e4 : s,
					c = t.url,
					l = void 0 === c ? "" : c,
					p = t.data,
					h = void 0 === p ? {} : p,
					d = t.dataType,
					f = void 0 === d ? "json" : d,
					m = "";
				for(var g in h) h.hasOwnProperty(g) && (m += g + "=" + h[g] + "&");
				if(m && m.replace(/&$/, ""), m += "timestamp=" + (new Date).getTime(), n = n.toUpperCase(), "jsonp" != f) {
					var y = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
					return "GET" === n ? (y.open("GET", l + "?" + m, !0), y.timeout = u, y.send()) : (y.open("POST", l, !0), y.timeout = u, y.send(m)), y.ontimeout = function() {
						a({
							msg: "get token error",
							xhr: y
						})
					}, y.onreadystatechange = function() {
						if(4 === y.readyState)
							if(200 === y.status) {
								var t;
								t = y.responseText ? JSON.parse(y.responseText) : {
									status: 200
								}, o(t, y)
							} else a({
								msg: "get token error",
								xhr: y
							})
					}, y
				}
				var v = "fn" + (new Date).getTime(),
					A = document.createElement("script");
				A.id = "id_" + v, l += "?" + m + "&callback=" + v, window[v] = function(t) {
					0 == t.code ? o(t) : a({
						msg: "jsonp error"
					}), setTimeout(function() {
						window[v] = null
					}, 1e3);
					var e = document.getElementById("id_" + v);
					e.parentNode.removeChild(e)
				}, A.src = l, document.getElementsByTagName("head")[0].appendChild(A)
			},
			_encode: function(t) {
				for(var e, n, i, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, a = t.length, s = ""; r < a;) {
					if(e = 255 & t.charCodeAt(r++), r == a) {
						s += o.charAt(e >> 2), s += o.charAt((3 & e) << 4), s += "==";
						break
					}
					if(n = t.charCodeAt(r++), r == a) {
						s += o.charAt(e >> 2), s += o.charAt((3 & e) << 4 | (240 & n) >> 4), s += o.charAt((15 & n) << 2), s += "=";
						break
					}
					i = t.charCodeAt(r++), s += o.charAt(e >> 2), s += o.charAt((3 & e) << 4 | (240 & n) >> 4), s += o.charAt((15 & n) << 2 | (192 & i) >> 6), s += o.charAt(63 & i)
				}
				return s
			},
			_dataURLtoBlob: function(t) {
				for(var e = t.split(","), n = e[0].match(/:(.*?)/)[1], i = atob(e[1]), o = i.length, r = new Uint8Array(o); o--;) r[o] = i.charCodeAt(o);
				return new Blob([r], {
					type: n
				})
			},
			checkSystem: function() {
				var t = window.navigator.userAgent.toLowerCase(),
					e = !1,
					n = !window.addEventListener || /MSIE 8/.test(navigator.userAgent);
				return(/android|adr/gi.test(t) && 4.3 > t.substr(t.indexOf("android") + 8, 3) || n) && (e = !0), e
			},
			extend: function(t, e) {
				for(var n in e) e.hasOwnProperty(n) && ("object" == h(e[n]) ? (("object" !== h(t[n]) || null === t[n]) && (t[n] = {}), this.extend(t[n], e[n])) : t[n] = e[n]);
				return t
			}
		},
		f = Object.assign || function(t) {
			for(var e, n = 1; n < arguments.length; n++)
				for(var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t
		},
		m = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(t) {
			return void 0 === t ? "undefined" : a(t)
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
		},
		g = function() {
			function t(t, e) {
				for(var n, i = 0; i < e.length; i++) n = e[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		y = function() {
			function t(e) {
				n(this, t), this.ops = {
					type: 0,
					width: 800,
					quality: 90,
					timeout: 2e4,
					preToken: !1,
					tokenParams: {},
					api: p
				}, this.ops = d.extend(this.ops, e), this.ops.api.imgDomain.qiniu = this.protocol(this.ops.api.imgDomain.qiniu), this.lowVersion = d.checkSystem(), this.type = d._get_up_type(this.ops.type), this.canvasTime = 0, this.callback = {}, this.uping = !1, this.canvasResize = canvasResize, this.ops.preToken && this._get_token()
			}
			return g(t, [{
				key: "protocol",
				value: function(t) {
					var e = 0 == location.href.indexOf("https") ? "https:" : "http:";
					return "string" == typeof t && -1 == t.indexOf("http") ? e + t : t
				}
			}, {
				key: "up",
				value: function(t) {
					var e, n, i, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
						r = this,
						a = arguments[2],
						s = arguments[3];
					if("function" == typeof o ? (e = o, n = a || function() {}, i = s || function() {}) : "object" == (void 0 === o ? "undefined" : m(o)) && (e = o.success || function() {}, n = o.error || function() {}, i = o.start || function() {}), "object" !== (void 0 === t ? "undefined" : m(t)) && "string" != typeof t) return console.error("upload target is wrong!"), void n({
						msg: "错误的上传对象"
					});
					if(this.uping) return console.error("one upload instance can not upload two images at the same time!"), void n({
						msg: "单个实例无法同时多次上传"
					});
					var u = "string" == typeof t ? "b64" : "file";
					this.uping = !0, this.img_type = d._get_img_type(t), this.callback.success = e, this.callback.error = n, this.callback.start = i, this.lowVersion && 1 !== this.ops.type && "qiniu" !== this.ops.type && "b64" == u && (console.log("becasuse of the lowVersion of phone,it has to upload by qiniu!"), this.type = "qiniu", this.token = null), this._get_token(function() {
						r.callback.start(), "b64" == u ? r._handle_b64(t, function(t) {
							if("qiniu" == r.type || r.lowVersion) r._up_b64_qiniu(t);
							else {
								var e = d._dataURLtoBlob(t);
								r._up_file(e)
							}
						}) : "file" == u && (r.lowVersion ? r._up_file(t) : r._to_b64(t, function(t) {
							if("qiniu" == r.type) r._up_b64_qiniu(t);
							else {
								var e = -1 === t.indexOf("data:image") ? "data:image/jpeg;base64," + t : t,
									n = d._dataURLtoBlob(e);
								r._up_file(n)
							}
						}))
					})
				}
			}, {
				key: "_get_token",
				value: function() {
					var t, e, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function() {},
						i = this.ops.api.token[this.type],
						o = this;
					if(this.token) return void n();
					switch(this.type) {
						case "oss":
						case "qiniu":
							t = this.ops.tokenParams, e = "json";
							break;
						case "s3":
							t = f({
								bucket: "h5-jp",
								file_type: this.img_type || "jpg"
							}, this.ops.tokenParams), e = "jsonp"
					}
					d._ajax({
						url: i,
						data: t,
						dataType: e,
						timeout: this.ops.timeout,
						success: function(t) {
							o.token || (o.token = t), n()
						},
						error: function(t) {
							o.callback.error && o.callback.error({
								msg: "get token fail",
								xhr: t
							}), o.uping = !1
						}
					})
				}
			}, {
				key: "_handle_b64",
				value: function(t, e) {
					var n, i = this,
						o = (new Date).getTime(),
						r = new Image,
						a = -1 === t.indexOf("data:image") ? "data:image/jpeg;base64," + t : t;
					r.onload = function() {
						if(r.width > i.ops.width) {
							var a = document.createElement("canvas"),
								s = a.getContext("2d"),
								u = r.width / r.height,
								c = i.ops.width,
								l = i.ops.width / u;
							a.width = c, a.height = l, s.drawImage(r, 0, 0, c, l), i.canvasTime = (new Date).getTime() - o, n = a.toDataURL("image/jpeg")
						} else n = t;
						e(n)
					}, r.onerror = function() {
						e(t)
					}, r.src = a
				}
			}, {
				key: "_to_b64",
				value: function(t, e) {
					var n = (new Date).getTime(),
						i = this;
					canvasResize(t, {
						width: this.ops.width,
						crop: !1,
						quality: this.ops.quality,
						rotate: 0,
						callback: function(t) {
							i.canvasTime = (new Date).getTime() - n, e(t)
						}
					})
				}
			}, {
				key: "_up_file",
				value: function(t) {
					var e, n, i = this,
						o = new Date,
						r = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
						a = new FormData;
					if("s3" == this.type)
						for(var s in n = this.token.data.inputs, e = this.token.data.url, n) a.append(s, n[s]);
					else if("oss" == this.type)
						for(var u in n = this.token, e = this.ops.api.domain[this.type], n) "accessid" == u ? a.append("OSSAccessKeyId", n[u]) : a.append(u, n[u]);
					else "qiniu" == this.type && (n = this.token, e = this.ops.api.domain[this.type], a.append("token", this.token.upload_token), a.append("key", this.token.key));
					a.append("file", t), r.onreadystatechange = function(t) {
						i._up_cb(r, t, o)
					}, r.ontimeout = function() {
						i.callback.error({
							msg: "upload timeout",
							xhr: r
						}), i.uping = !1
					}, r.open("POST", e, !0), r.timeout = this.ops.timeout, r.send(a)
				}
			}, {
				key: "_up_b64_qiniu",
				value: function(t) {
					var e = this,
						n = new Date,
						i = this.ops.api.domain.qiniu + "putb64/-1/key/" + d._encode(this.token.key),
						o = t.replace("data:image/jpeg;base64,", "").replace("data:image/png;base64,", ""),
						r = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
					r.onreadystatechange = function(t) {
						e._up_cb(r, t, n)
					}, r.ontimeout = function() {
						e.callback.error({
							msg: "upload timeout",
							xhr: r
						}), e.uping = !1
					}, r.open("POST", i, !0), r.timeout = this.ops.timeout, r.setRequestHeader("Content-Type", "application/octet-stream"), r.setRequestHeader("Authorization", "UpToken " + this.token.upload_token), r.send(o)
				}
			}, {
				key: "_up_cb",
				value: function(t, e, n) {
					var i = t.status;
					if(4 == t.readyState)
						if(this.uploadTime = (new Date).getTime() - n, 200 <= i && 300 > i) {
							if("s3" == this.type) {
								var o = t.responseText,
									r = new DOMParser,
									a = r.parseFromString(o, "text/xml");
								this.img = a.children ? a.children[0].children[0].innerHTML : a.childNodes[0].childNodes[0].textContent
							} else if("qiniu" == this.type) {
								var s = t.responseText ? JSON.parse(t.responseText) : t.responseText;
								this.img = this.ops.api.imgDomain[this.type] + s.key
							} else "oss" == this.type && (this.img = this.protocol(this.ops.api.imgDomain.oss + this.token.key));
							this.__return({
								img: this.img,
								uploadTime: this.uploadTime,
								type: this.type,
								canvasTime: this.canvasTime,
								res: {
									token: this.token,
									upload: t.responseText
								}
							})
						} else this.callback.error({
							msg: "upload xhr.status is not 200",
							xhr: t
						}), this.uping = !1
				}
			}, {
				key: "__return",
				value: function(t) {
					this.token = null, this.uping = !1, this.callback.success(t)
				}
			}]), t
		}();
	e.default = y
}, function(t, e, n) {
	t.exports = n.p + "images/share-tips.png?fb34b245"
}, function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = function(t, e, n, i) {
		return "string" == typeof e ? e = e || "GET" : (n = e || {}, e = "GET"), new Promise(function(o, r) {
			$.ajax({
				headers: i,
				url: t,
				type: e,
				data: n,
				success: function(t) {
					return o(t)
				},
				error: function(t) {
					return r({
						type: "request",
						message: t
					})
				}
			})
		})
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.api = function(t) {
		return t = t || (0, i.getQuery)("api"), t = "pre" == t ? "pre" : "formal", a.qiniu[t]
	}, e.filter = function(t) {
		return(0, r.default)("https://openapi.mtlab.meitu.com/v1/filter?api_key=clI3U7RkizfSPQhQD1xsSaThzVW9oVKe&api_secret=PVYMR4Dmgc9Bu0_zIKc5h6ILCNZnw4cc", "POST", t, {
			"Content-type": "application/json"
		})
	};
	var i = n(3),
		o = n(7),
		r = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(o),
		a = {
			qiniu: {
				pre: {
					token: "//preapplet.meitu.com/public/index/mtToken",
					upload: "//stage.meitudata.com/",
					domain: "//stage.meitudata.com/meiosyun-beauty/",
					beautify: "//precn-cpg.meitubase.com/pic/handle_gallery"
				},
				formal: {
					token: "//applet.meitu.com/public/index/mtToken",
					upload: "//upmt.meitudata.com/",
					domain: "//beauty-public.zone1.meitudata.com/",
					beautify: "//cpg.meitubase.com/pic/handle_gallery"
				}
			},
			oss: {
				pre: {
					token: "",
					upload: "",
					domain: "",
					beautify: "//make.channet.com/rolleye/index/comic"
				},
				formal: {
					token: "",
					upload: "",
					domain: "",
					beautify: "//make.channet.com/rolleye/index/comic"
				}
			}
		}
}, function(t, e, n) {
	t.exports = n(10)
}, function(t, e, n) {
	"use strict";

	function i(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	n(11), n(21);
	var o = n(26),
		r = i(o),
		a = n(1),
		s = i(a),
		u = n(27),
		c = i(u),
		l = n(62),
		p = i(l),
		h = n(63),
		d = i(h),
		f = n(64),
		m = i(f),
		g = n(65),
		y = i(g),
		v = n(0);
	n(4);
	var A = (0, v.randomShareInfo)(),
		b = {
			result: "结果页",
			animation: "动画页",
			home: "活动首页",
			share: "分享后回流页"
		};
	r.default.use(c.default);
	var w = new r.default({
		shareObj: {},
		resImg: "",
		appName: "App",
		userName: "我们",
		router: {
			classNames: {
				page: "js-page",
				pageShow: "show",
				pageHideBefore: "hide-before",
				pageHideAfter: "hide-after"
			},
			routes: {
				animation: d.default,
				home: p.default,
				share: m.default,
				result: y.default
			},
			default: s.default.Meipai || s.default.Meiyan || s.default.Xiuxiu ? "home" : "animation"
		},
		upload: {
			type: "oss",
			width: 1500,
			thumbnail: "!thumb750",
			api: {
				token: {
					oss: "https://applet.meitu.com/public/index/oss_token"
				},
				domain: {
					oss: "https://make-channet-com.oss-cn-shenzhen.aliyuncs.com/"
				},
				imgDomain: {
					oss: "https://applet.meitudata.com/",
					qiniu: "https://mtapplet.meitudata.com/"
				}
			}
		},
		makeUp: {
			type: 76,
			url: "//make.channet.com/rolleye/index/comic"
		},
		share: {
			data: {
				title: A.title,
				description: A.description,
				link: (0, v.getHomePage)(),
				imageUrl: (0, v.getHomePage)() + n(2),
				onSuccess: function(t) {
					return console.log(t), (0, v.track)("pageClick", {
						page_title: b[w.$route.params.route],
						page_url: location.href,
						button_name: "分享渠道点击",
						target_url: "",
						ShareWays: t
					}), (new Image).src = "https://applet.meitu.com/public/tool/app_share?type=" + t + "&appid=" + w.options.appName
				}
			},
			tipsWithMask: {
				width: 320,
				top: 0,
				right: 10,
				image: n(6),
				background: "rgba(0,0,0,.5)"
			}
		},
		music: {
			src: n(68),
			autoplay: !0,
			loop: !0
		},
		loadingEl: $("#js-loading"),
		waiting: {
			el: $("#js-waiting"),
			fake: 1e3,
			preload: [{
				route: "common",
				images: ["photo/skip_1.png", "photo/skip_2.png", "photo/skip_3.png", "photo/skip_4.png", "photo/skip_5.png", "bg.jpg", "sprite.png"]
			}, {
				route: "animation",
				images: []
			}],
			before: function() {
				(0, v.trackPageView)({
					page_title: "loading页"
				})
			},
			progress: function(t) {
				$("#js-waiting .progress").html(Math.round(t) + "%")
			},
			done: function() {}
		},
		download: {
			openApp: {
				browserScheme: "myxj://",
				scheme: "myxjpush://movie?materialID=T0001",
				homepage: "http://meiyan.meitu.com/mobile/",
				androidPackage: "com.meitu.meiyancamera",
				unisalLink: "https://app.meitu.com/myxj/applinks/index.html",
				package: "com.meitu.meiyancamera",
				download: s.default.iOS ? "https://click.meitustat.com/meitu-ad-api/mAFbUj" : "http://meiyan.dl.meitu.com/cjby10.apk",
				yybUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.meitu.meiyancamera&ckey=CK1388403940422",
				version: "6610"
			},
			callback: function() {
				(0, v.track)("pageClick", {
					page_title: b[w.$route.params.route],
					page_url: location.href,
					button_name: "下载按钮点击",
					target_url: ""
				})
			}
		},
		randomShareFunc: function(t) {
			this.shareObj = (0, v.randomShareInfo)(t.$route.params.route)
		},
		onReady: function() {
			var t = this;
			console.log("ua ====", window.navigator.userAgent.toLowerCase(), w.$route), w.$route.on("hashchange", function(t) {
				console.log("route change ", t)
			});
			var e = "",
				i = w.$route.params.route;
			("share" == i || "result" == i) && (e = "result");
			var o = (0, v.randomShareInfo)(e);
			w.share.set({
				title: o.title,
				description: o.description,
				imageUrl: (0, v.getHomePage)() + n(2),
				link: "" + w.path.home
			}), $(".download .js-button-share").off("click").on("click", function(e) {
				e.stopPropagation(), e.preventDefault(), console.log("tap share", w.$route.params.route), t.options.randomShareFunc(t), w.share.set({
					title: t.options.shareObj.title,
					description: t.options.shareObj.description,
					imageUrl: (0, v.getHomePage)() + n(2)
				}), w.share.callShare()
			}), $(window).on("hashchange", function() {
				$("#inputName").trigger("blur")
			})
		}
	})
}, function() {}, function(t, e, n) {
	t.exports = n.p + "images/bg.jpg?5b615f90"
}, function(t, e, n) {
	t.exports = n.p + "images/photo/skip_1.png?c2868d4b"
}, function(t, e, n) {
	t.exports = n.p + "images/photo/skip_2.png?2fdb7034"
}, function(t, e, n) {
	t.exports = n.p + "images/photo/skip_3.png?4bdd13e1"
}, function(t, e, n) {
	t.exports = n.p + "images/photo/skip_4.png?334b5235"
}, function(t, e, n) {
	t.exports = n.p + "images/photo/skip_5.png?904bb580"
}, function(t, e, n) {
	t.exports = n.p + "images/sprite.png?d41fc91b"
}, function(t, e, n) {
	t.exports = n.p + "images/download-skip.png?50748cdd"
}, function(t, e, n) {
	t.exports = n.p + "images/share-skip.png?e9b582fe"
}, function(t, e, n) {
	"use strict";
	t.exports = n(22).polyfill()
}, function(t, e, n) {
	"use strict";
	(function(i, o) {
		var r, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		};
		/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		 * @version   4.1.1
		 */
		! function(i, o) {
			"object" === s(e) && void 0 !== t ? t.exports = o() : (r = o, void 0 !== (a = "function" == typeof r ? r.call(e, n, e, t) : r) && (t.exports = a))
		}(0, function() {
			function t(t) {
				var e = void 0 === t ? "undefined" : s(t);
				return null !== t && ("object" === e || "function" === e)
			}

			function e(t) {
				return "function" == typeof t
			}

			function r() {
				return void 0 === D ? a() : function() {
					D(u)
				}
			}

			function a() {
				var t = setTimeout;
				return function() {
					return t(u, 1)
				}
			}

			function u() {
				for(var t = 0; t < z; t += 2) {
					(0, Y[t])(Y[t + 1]), Y[t] = void 0, Y[t + 1] = void 0
				}
				z = 0
			}

			function c(t, e) {
				var n = arguments,
					i = this,
					o = new this.constructor(p);
				void 0 === o[Z] && T(o);
				var r = i._state;
				return r ? function() {
					var t = n[r - 1];
					W(function() {
						return P(r, o, t, i._result)
					})
				}() : k(i, o, t, e), o
			}

			function l(t) {
				var e = this;
				if(t && "object" === (void 0 === t ? "undefined" : s(t)) && t.constructor === e) return t;
				var n = new e(p);
				return A(n, t), n
			}

			function p() {}

			function h() {
				return new TypeError("You cannot resolve a promise with itself")
			}

			function d() {
				return new TypeError("A promises callback cannot return that same promise.")
			}

			function f(t) {
				try {
					return t.then
				} catch(t) {
					return K.error = t, K
				}
			}

			function m(t, e, n, i) {
				try {
					t.call(e, n, i)
				} catch(e) {
					return e
				}
			}

			function g(t, e, n) {
				W(function(t) {
					var i = !1,
						o = m(n, e, function(n) {
							i || (i = !0, e === n ? w(t, n) : A(t, n))
						}, function(e) {
							i || (i = !0, x(t, e))
						}, "Settle: " + (t._label || " unknown promise"));
					!i && o && (i = !0, x(t, o))
				}, t)
			}

			function y(t, e) {
				e._state === J ? w(t, e._result) : e._state === $ ? x(t, e._result) : k(e, void 0, function(e) {
					return A(t, e)
				}, function(e) {
					return x(t, e)
				})
			}

			function v(t, n, i) {
				n.constructor === t.constructor && i === c && n.constructor.resolve === l ? y(t, n) : i === K ? (x(t, K.error), K.error = null) : void 0 === i ? w(t, n) : e(i) ? g(t, n, i) : w(t, n)
			}

			function A(e, n) {
				e === n ? x(e, h()) : t(n) ? v(e, n, f(n)) : w(e, n)
			}

			function b(t) {
				t._onerror && t._onerror(t._result), S(t)
			}

			function w(t, e) {
				t._state !== V || (t._result = e, t._state = J, 0 !== t._subscribers.length && W(S, t))
			}

			function x(t, e) {
				t._state !== V || (t._state = $, t._result = e, W(b, t))
			}

			function k(t, e, n, i) {
				var o = t._subscribers,
					r = o.length;
				t._onerror = null, o[r] = e, o[r + J] = n, o[r + $] = i, 0 === r && t._state && W(S, t)
			}

			function S(t) {
				var e = t._subscribers,
					n = t._state;
				if(0 !== e.length) {
					for(var i = void 0, o = void 0, r = t._result, a = 0; a < e.length; a += 3) i = e[a], o = e[a + n], i ? P(n, i, o, r) : o(r);
					t._subscribers.length = 0
				}
			}

			function _() {
				this.error = null
			}

			function C(t, e) {
				try {
					return t(e)
				} catch(e) {
					return tt.error = e, tt
				}
			}

			function P(t, n, i, o) {
				var r, a, s, u, c = e(i);
				if(c) {
					if(r = C(i, o), r === tt ? (u = !0, a = r.error, r.error = null) : s = !0, n === r) return void x(n, d())
				} else r = o, s = !0;
				n._state !== V || (c && s ? A(n, r) : u ? x(n, a) : t === J ? w(n, r) : t === $ && x(n, r))
			}

			function I(t, e) {
				try {
					e(function(e) {
						A(t, e)
					}, function(e) {
						x(t, e)
					})
				} catch(e) {
					x(t, e)
				}
			}

			function j() {
				return et++
			}

			function T(t) {
				t[Z] = et++, t._state = void 0, t._result = void 0, t._subscribers = []
			}

			function B(t, e) {
				this._instanceConstructor = t, this.promise = new t(p), this.promise[Z] || T(this.promise), Q(e) ? (this.length = e.length, this._remaining = e.length, this._result = Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && w(this.promise, this._result))) : x(this.promise, O())
			}

			function O() {
				return new Error("Array Methods must be provided an Array")
			}

			function M() {
				throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
			}

			function E() {
				throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
			}

			function L(t) {
				this[Z] = j(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && M(), this instanceof L ? I(this, t) : E())
			}
			var D, R, N, U = Array.isArray ? Array.isArray : function(t) {
					return "[object Array]" === Object.prototype.toString.call(t)
				},
				Q = U,
				z = 0,
				W = function(t, e) {
					Y[z] = t, Y[z + 1] = e, 2 == (z += 2) && (R ? R(u) : N())
				},
				q = "undefined" == typeof window ? void 0 : window,
				F = q || {},
				H = F.MutationObserver || F.WebKitMutationObserver,
				G = "undefined" == typeof self && void 0 !== i && "[object process]" === {}.toString.call(i),
				X = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
				Y = Array(1e3);
			N = G ? function() {
				return function() {
					return i.nextTick(u)
				}
			}() : H ? function() {
				var t = 0,
					e = new H(u),
					n = document.createTextNode("");
				return e.observe(n, {
						characterData: !0
					}),
					function() {
						n.data = t = ++t % 2
					}
			}() : X ? function() {
				var t = new MessageChannel;
				return t.port1.onmessage = u,
					function() {
						return t.port2.postMessage(0)
					}
			}() : void 0 !== q ? a() : function() {
				try {
					var t = n(25);
					return D = t.runOnLoop || t.runOnContext, r()
				} catch(t) {
					return a()
				}
			}();
			var V, Z = Math.random().toString(36).substring(16),
				J = 1,
				$ = 2,
				K = new _,
				tt = new _,
				et = 0;
			return B.prototype._enumerate = function(t) {
				for(var e = 0; this._state === V && e < t.length; e++) this._eachEntry(t[e], e)
			}, B.prototype._eachEntry = function(t, e) {
				var n = this._instanceConstructor,
					i = n.resolve;
				if(i === l) {
					var o = f(t);
					if(o === c && t._state !== V) this._settledAt(t._state, e, t._result);
					else if("function" != typeof o) this._remaining--, this._result[e] = t;
					else if(n === L) {
						var r = new n(p);
						v(r, t, o), this._willSettleAt(r, e)
					} else this._willSettleAt(new n(function(e) {
						return e(t)
					}), e)
				} else this._willSettleAt(i(t), e)
			}, B.prototype._settledAt = function(t, e, n) {
				var i = this.promise;
				i._state === V && (this._remaining--, t === $ ? x(i, n) : this._result[e] = n), 0 === this._remaining && w(i, this._result)
			}, B.prototype._willSettleAt = function(t, e) {
				var n = this;
				k(t, void 0, function(t) {
					return n._settledAt(J, e, t)
				}, function(t) {
					return n._settledAt($, e, t)
				})
			}, L.all = function(t) {
				return new B(this, t).promise
			}, L.race = function(t) {
				var e = this;
				return new e(Q(t) ? function(n, i) {
					for(var o = t.length, r = 0; r < o; r++) e.resolve(t[r]).then(n, i)
				} : function(t, e) {
					return e(new TypeError("You must pass an array to race."))
				})
			}, L.resolve = l, L.reject = function(t) {
				var e = this,
					n = new e(p);
				return x(n, t), n
			}, L._setScheduler = function(t) {
				R = t
			}, L._setAsap = function(t) {
				W = t
			}, L._asap = W, L.prototype = {
				constructor: L,
				then: c,
				catch: function(t) {
					return this.then(null, t)
				}
			}, L.polyfill = function() {
				var t;
				if(void 0 !== o) t = o;
				else if("undefined" != typeof self) t = self;
				else try {
					t = Function("return this")()
				} catch(e) {
					throw new Error("polyfill failed because global object is unavailable in this environment")
				}
				var e = t.Promise;
				if(e) {
					var n = null;
					try {
						n = Object.prototype.toString.call(e.resolve())
					} catch(e) {}
					if("[object Promise]" === n && !e.cast) return
				}
				t.Promise = L
			}, L.Promise = L, L
		})
	}).call(e, n(23), n(24))
}, function(t) {
	"use strict";

	function e() {
		throw new Error("setTimeout has not been defined")
	}

	function n() {
		throw new Error("clearTimeout has not been defined")
	}

	function i(t) {
		if(c === setTimeout) return setTimeout(t, 0);
		if((c === e || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
		try {
			return c(t, 0)
		} catch(e) {
			try {
				return c.call(null, t, 0)
			} catch(e) {
				return c.call(this, t, 0)
			}
		}
	}

	function o(t) {
		if(l === clearTimeout) return clearTimeout(t);
		if((l === n || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
		try {
			return l(t)
		} catch(e) {
			try {
				return l.call(null, t)
			} catch(e) {
				return l.call(this, t)
			}
		}
	}

	function r() {
		f && h && (f = !1, h.length ? d = h.concat(d) : m = -1, d.length && a())
	}

	function a() {
		if(!f) {
			var t = i(r);
			f = !0;
			for(var e = d.length; e;) {
				for(h = d, d = []; ++m < e;) h && h[m].run();
				m = -1, e = d.length
			}
			h = null, f = !1, o(t)
		}
	}

	function s(t, e) {
		this.fun = t, this.array = e
	}

	function u() {}
	var c, l, p = t.exports = {};
	! function() {
		try {
			c = "function" == typeof setTimeout ? setTimeout : e
		} catch(t) {
			c = e
		}
		try {
			l = "function" == typeof clearTimeout ? clearTimeout : n
		} catch(t) {
			l = n
		}
	}();
	var h, d = [],
		f = !1,
		m = -1;
	p.nextTick = function(t) {
		var e = Array(arguments.length - 1);
		if(1 < arguments.length)
			for(var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
		d.push(new s(t, e)), 1 !== d.length || f || i(a)
	}, s.prototype.run = function() {
		this.fun.apply(null, this.array)
	}, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.prependListener = u, p.prependOnceListener = u, p.listeners = function() {
		return []
	}, p.binding = function() {
		throw new Error("process.binding is not supported")
	}, p.cwd = function() {
		return "/"
	}, p.chdir = function() {
		throw new Error("process.chdir is not supported")
	}, p.umask = function() {
		return 0
	}
}, function(t) {
	"use strict";
	var e, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	e = function() {
		return this
	}();
	try {
		e = e || Function("return this")() || (0, eval)("this")
	} catch(t) {
		"object" === ("undefined" == typeof window ? "undefined" : n(window)) && (e = window)
	}
	t.exports = e
}, function() {}, function(t, e) {
	"use strict";

	function n(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = function() {
			function t(t, e) {
				for(var n, i = 0; i < e.length; i++) n = e[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		o = function() {
			function t(e) {
				n(this, t), this.options = e || {}, this.onReady = e.onReady || function() {}, this.modules = [], this.init()
			}
			return i(t, [{
				key: "init",
				value: function() {
					var e = this;
					window.addEventListener("DOMContentLoaded", function() {
						e.loadModule(t.modules), e.$route.to(), e.onReady(), console.log("App-core: modules loaded --\x3e route init --\x3e app.onReady")
					}, !1)
				}
			}, {
				key: "loadModule",
				value: function(t) {
					var e = this;
					t.sort(function(t, e) {
						return t.priority - e.priority
					}).map(function(t) {
						t.init && "function" == typeof t.init && t.init(e)
					})
				}
			}], [{
				key: "use",
				value: function(e) {
					var n = this;
					Array.isArray(e) ? e.map(function(t) {
						return n.use(t)
					}) : (e.priority = void 0 === e.priority ? 2 : e.priority, t.modules.push(e))
				}
			}]), t
		}();
	o.modules = [], e.default = o
}, function(t, e, n) {
	"use strict";

	function i(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(28),
		r = i(o),
		a = n(30),
		s = i(a),
		u = n(5),
		c = i(u),
		l = n(31),
		p = i(l),
		h = n(33),
		d = i(h),
		f = n(34),
		m = i(f),
		g = n(35),
		y = i(g),
		v = n(36),
		A = i(v),
		b = n(38),
		w = i(b),
		x = n(40),
		k = i(x),
		S = n(60),
		_ = i(S),
		C = n(61),
		P = i(C);
	s.default.use(c.default), e.default = [r.default, P.default, A.default, s.default, p.default, d.default, m.default, y.default, w.default, k.default, _.default]
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for(var n, i = 0; i < e.length; i++) n = e[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		r = n(29),
		a = {
			first: !0,
			upload: {},
			once: function() {},
			ready: function() {},
			onBeforeUpload: function() {},
			onUploadSuccess: function() {},
			onUploadFailure: function() {}
		},
		s = function() {
			function t(e) {
				i(this, t), this.app = e, e.eventify(this), this.options = $.extend(!0, {
					default: "home",
					routes: {
						home: {}
					},
					classNames: {
						page: "js-page",
						pageShowBefore: "hide-before",
						pageHideAfter: "hide-after"
					}
				}, this.app.options.router), this.params = this.getParams(), this.routes = this.options.routes, this.init()
			}
			return o(t, [{
				key: "init",
				value: function() {
					var t = this;
					(0, r.each)(this.routes, function(e, n) {
						t.routes[n] = $.extend(!0, {
							app: t.app
						}, a, e)
					}), $(window).on("hashchange", function() {
						var e = t.params = t.getParams();
						t._routeEvent(e.route)
					})
				}
			}, {
				key: "to",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.params.route,
						e = arguments[1];
					e && e.params ? 0 == Object.keys(e.params).length ? location.hash = "#" : (e.params.route = t, location.hash = "#" + (0, r.querify)(e.params)) : !0 === e ? location.hash = "#" + (0, r.querify)({
						route: t
					}) : this._routeEvent(t)
				}
			}, {
				key: "_routeEvent",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.params.route;
					this.switchRoute(t), this.runRoute(t)
				}
			}, {
				key: "switchRoute",
				value: function(t) {
					var e = $("#" + t);
					if(0 === e.length) return console.log("error error.route", "method: switchPage", 'The DOM node corresponding to the page "' + t + '" does not exist');
					this.params.route = this.params.page = t;
					var n = this.options.classNames,
						i = n.page,
						o = n.pageShow,
						r = n.pageHideBefore,
						a = n.pageHideAfter,
						s = $(".js-page"),
						u = $("." + i + "." + o).index(),
						c = e.index();
					s.forEach(function(t) {
						var e, n = $(t),
							i = n.index();
						i > c ? e = a : i == c ? e = "transition " + o : i < c && (e = r), i == u && n.addClass("transition"), n.removeClass("hide-after hide-before show").addClass(e)
					}), setTimeout(function() {
						s.removeClass("transition")
					}, 300)
				}
			}, {
				key: "runRoute",
				value: function(t) {
					if(!this.routes[t]) return console.log("error error.route", "method: runRoute", 'The current routing "' + t + '" has not been matched to the page component.');
					var e = this.routes[t];
					e.first && e.once(this.app), e.first && (e.first = !1), e && e.ready(this.app), this.app.emit("switchPage", e)
				}
			}, {
				key: "getParams",
				value: function() {
					var t = (0, r.parseQuery)(location.hash.substr(1));
					t.route || (t.route = t.page);
					var e = (0, r.parseQuery)(location.search.substr(1)),
						n = $.extend(!0, {
							route: this.options.default
						}, e, t);
					return this.options.routes[n.route] || (n.route = this.options.default), n
				}
			}, {
				key: "getRoute",
				value: function(t) {
					return this.routes[t || this.params.route]
				}
			}]), t
		}();
	e.default = {
		priority: 1,
		init: function(t) {
			t.$route = new s(t), t.to = function(e, n) {
				return t.$route.to(e, n)
			}, t.run = t.runRoute = function(e) {
				return t.$route.runRoute(e)
			}, t.switch = t.switchRoute = function(e) {
				return t.$route.switchRoute(e)
			}, t.getRoute = function(e) {
				return t.$route.getRoute(e)
			}
		}
	}
}, function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.getFullPath = function() {
		var t = location.origin + location.pathname.replace(/\w+.html.+/gi, "");
		return "/" == t.charAt(t.length - 1) ? t : t + "/"
	}, e.querify = function() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
			e = "";
		for(var n in t) e += n + (t[n] ? "=" + t[n] : "" == t[n] ? "=" : "") + "&";
		return e = e.slice(0, e.length - 1)
	}, e.parseQuery = function(t) {
		var e = {},
			n = "",
			i = [],
			o = decodeURIComponent(t);
		o && (i = o.split("&"));
		for(var r = 0; r < i.length; r++) n = i[r].split("="), n[0] && (e[n[0]] = void 0 === n[1] ? null : n[1]);
		return e
	}, e.each = function(t, e) {
		if(Array.isArray(t))
			for(var n = 0; n < t.length; n++) e.call(t[n], t[n], n, t);
		else
			for(var i in t) e.call(t[i], t[i], i);
		return t
	}
}, function(t, e) {
	"use strict";

	function n(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = function() {
			function t(t, e) {
				for(var n, i = 0; i < e.length; i++) n = e[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		o = function() {
			function t(e, i) {
				var o = this;
				return n(this, t), i ? (this.options = $.extend(!0, {
					thumbnail: "!thumb750",
					type: "oss",
					width: 750,
					timeout: 15e3,
					preToken: !0
				}, e.options.upload), this.app = e, this.upload = new i(this.options), void e.on("switchPage", function(t) {
					return o.bindUpload(t)
				})) : console.log("error  appUpload", "please check appUpload.use(upload).")
			}
			return i(t, [{
				key: "uploadify",
				value: function(t) {
					var e = this,
						n = this.upload,
						i = this.app;
					return new Promise(function(o, r) {
						n.up(t, {
							success: function(t) {
								t.image = t.img + e.options.thumbnail, t.imageOrigin = t.img, i.options.makeUp && (i.options.makeUp.uploadTime = t.uploadTime, i.options.makeUp.canvasTime = t.canvasTime), o($.extend(!0, {
									image: t.image
								}, t))
							},
							error: function() {
								return r({
									type: "request"
								})
							}
						})
					})
				}
			}, {
				key: "bindUpload",
				value: function(t) {
					var e = this,
						n = this.upload,
						i = this.app;
					(t.upload.el || $()).off().on("change", function() {
						i.loading.show();
						var o = this.files[0];
						t.onBeforeUpload && t.onBeforeUpload(o), n.up(o, {
							success: function(n) {
								n.image = n.img + e.options.thumbnail, n.imageOrigin = n.img, i.options.makeUp && (i.options.makeUp.uploadTime = n.uploadTime, i.options.makeUp.canvasTime = n.canvasTime), t.onUploadSuccess(n, i)
							},
							error: function(e) {
								console.log("error error.upload", e), t.onUploadFailure(e, i)
							}
						}), $(this).val("")
					})
				}
			}]), t
		}();
	e.default = {
		init: function(t) {
			var e = new o(t, this.dependency);
			t.upload = function(t) {
				return e.uploadify(t)
			};
			var n = t.getRoute();
			n.upload.el && e.bindUpload(n)
		},
		use: function(t) {
			this.dependency = t
		}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(32),
		o = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(i);
	e.default = {
		priority: 0,
		init: function(t) {
			(0, o.default)(t), t.eventify = o.default
		}
	}
}, function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	e.default = function(t) {
		return !("object" != (void 0 === t ? "undefined" : n(t))) && (t = t || {}, t.callbacks = {}, t.on = function(e, n) {
			if(!e || !n) return t;
			var i, o;
			return !t.hasOwnProperty("callbacks") && (t.callbacks || (t.callbacks = {})), o = e.split(" "), o.map(function(e) {
				(i = t.callbacks)[e] || (i[e] = []), t.callbacks[e].push(n)
			}), t
		}, void(t.emit = function() {
			for(var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
			var o, r, a;
			a = n.shift(), r = a.split(" "), r.map(function(e) {
				o = null === t.callbacks ? [] : t.callbacks[e] || [], o.length && o.map(function(e) {
					return e && e.apply(t, n)
				})
			})
		}))
	}
}, function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = {
		priority: 1,
		init: function(t) {
			var e = this;
			t.makeUp = function() {
				for(var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
				var r = {
					makeupUrl: t.options.makeUp.url,
					makeupType: t.options.makeUp.type,
					image: "",
					uploadTimer: t.options.makeUp.uploadTime || 0,
					createCanvasTimer: t.options.makeUp.canvasTime || 0
				};
				return "string" == typeof i[0] ? 20 > i[0].length ? (r.makeupType = i[0], i[1] && (r.image = i[1])) : (r.image = i[0], i[1] && (r.makeupType = i[1])) : "number" == typeof i[0] ? (r.makeupType = i[0], r.image = i[1]) : r = $.extend(!0, r, i[0]), e.makeUp(r)
			}
		},
		makeUp: function() {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			return new Promise(function(e, n) {
				var i = {
					pic: t.image,
					tips: t.makeupType
				};
				i.t = getToken && getToken(i), i.uploadTimer = t.uploadTimer || 0, i.createCanvasTimer = t.createCanvasTimer || 0;
				var o = location.origin;
				0 < o.indexOf("meitu.com") && -1 == o.indexOf("f2er.meitu.com") && (t.makeupUrl = t.makeupUrl.replace(".test", "")), $.ajax({
					url: t.makeupUrl,
					data: i,
					dataType: "jsonp",
					timeout: 1e4,
					success: function(i) {
						0 == i.rs ? n({
							type: "face",
							message: "识别不到脸部，换一张照片吧!"
						}) : 100 == i.rs ? n({
							type: "encryption",
							message: i.message
						}) : e($.extend(!0, {
							image: i.pic,
							type: t.makeupType
						}, i))
					},
					error: function() {
						n({
							type: "request",
							message: "上妆失败！"
						})
					}
				})
			})
		}
	}
}, function(t, e, n) {
	"use strict";

	function i(t) {
		if(Array.isArray(t)) {
			for(var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
			return n
		}
		return Array.from(t)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(0);
	e.default = {
		priority: 1,
		init: function(t) {
			t.options.trackID && (t.track = function() {
				for(var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var r = [];
				if(o.store.get("cnzz_cc")) {
					o.store.get("cnzz_cc").split("||").map(function(t) {
						return r.push(t)
					})
				}
				r.push(e.join(",")), "undefined" == typeof _czc ? o.store.set("cnzz_cc", r.join("||")) : (r.map(function(t) {
					var e;
					t = t.split(","), _czc.push(["_trackEvent"].concat(i(t))), (e = console).log.apply(e, ["trackEvent:"].concat(i(t)))
				}), o.store.set("cnzz_cc", ""), r = [])
			}, setTimeout(function() {
				var e = document.createElement("script");
				e.src = "//w.cnzz.com/c.php?id=" + t.options.trackID, document.body.appendChild(e)
			}, 200))
		}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(1),
		o = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(i);
	e.default = {
		init: function(t) {
			if(t.options.music && "string" == typeof t.options.music.src && "" !== t.options.music.src) {
				t.$el = $("#js-music-el"), t.music = $('<audio class="music js-music" src="' + t.options.music.src + '"></audio>').appendTo(".App")[0], t.music.autoplay = !!t.options.music.autoplay, t.music.loop = !!t.options.music.loop;
				var e = {
					play: function() {
						return t.music.play()
					},
					pause: function() {
						return t.music.pause()
					}
				};
				t.options.music.autoplay && (window.WeixinJSBridge ? window.WeixinJSBridge.invoke("getNetworkType", {}, e.play) : o.default.WeChat ? document.addEventListener("WeixinJSBridgeReady", e.play) : o.default.QQ ? t.$el.addClass("on") : $(document).one("touchstart", e.play)), $(t.music).on("playing", function() {
					return t.$el.addClass("on")
				}), $(t.music).on("pause", function() {
					return t.$el.removeClass("on")
				}), t.$el.on("click", function() {
					return t.music.paused ? e.play() : e.pause()
				})
			} else console.log("error error.music", "music.src must be string")
		}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(37),
		o = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(i);
	e.default = {
		init: function(t) {
			t.share = new o.default(t.options.share.selector, t.options.share.data), t.share.configure(t.options.share.tipsWithMask), t.share.set = function(e) {
				return t.share.setShare(e)
			}, t.share.createOverlay()
		}
	}
}, function(t, e) {
	"use strict";

	function n(t, e) {
		for(var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
		return t.length = o, t
	}

	function i(t) {
		for(var e, i = 0, o = this.pushStack([]); e = this[i++];) o = n(o, e.querySelectorAll(t)), o.selector = t;
		return o
	}

	function o(t) {
		var e = {},
			n = e.toString.call(t);
		return null == t ? "" + t : ("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(t) {
			e["[object " + t + "]"] = t.toLowerCase()
		}), "object" === (void 0 === t ? "undefined" : b(t)) || "function" == typeof t ? e[n] || "object" : void 0 === t ? "undefined" : b(t))
	}

	function r(t) {
		var e = document.implementation.createHTMLDocument();
		return e.body.innerHTML = t, e.body.children
	}

	function a() {
		var t, e, n, i, o, r, u = arguments[0] || {},
			c = 1,
			l = arguments.length,
			p = !1;
		for("boolean" == typeof u && (p = u, u = arguments[c] || {}, c++), "object" !== (void 0 === u ? "undefined" : x(u)) && "function" != typeof u && (u = {}), c === l && (u = this, c--); c < l; c++)
			if(null !== (t = arguments[c]))
				for(e in t) o = u[e], i = t[e], u != i && (p && i && (s(i) || (r = Array.isArray(i))) ? (r ? (r = !1, n = o && Array.isArray(o) ? o : []) : n = o && s(o) ? o : {}, u[e] = a(p, n, i)) : void 0 !== i && (u[e] = i));
		return u
	}

	function s(t) {
		var e, n, i = {},
			o = i.toString,
			r = i.hasOwnProperty,
			a = r.toString,
			s = a.call(Object);
		return t && "[object Object]" === o.call(t) && (!!!(e = Object.getPrototypeOf(t)) || "function" == typeof(n = r.call(e, "constructor") && e.constructor) && a.call(n) === s)
	}

	function u(t) {
		return new u.fn.init(t)
	}

	function c(t) {
		var e = t.split("#"),
			n = S(e, 2),
			i = n[0],
			o = n[1],
			r = i.split("?"),
			a = S(r, 2),
			s = a[0],
			u = a[1];
		return o = o || "", u = u || "", s + (k.Wechat ? "?" + u + (u ? "&" : "") + o + "#" + o : "?" + u + "#" + o)
	}

	function l() {
		if(document.getElementById("facebook-jssdk")) return !1;
		var t = document.createElement("script"),
			e = document.getElementsByTagName("script")[0];
		t.id = "facebook-jssdk", t.src = "//connect.facebook.net/en_US/sdk.js", e.parentNode.insertBefore(t, e)
	}

	function p() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
			e = "";
		for(var n in t) e += encodeURIComponent(n) + (t[n] ? "=" + encodeURIComponent(t[n]) : "" == t[n] ? "=" : "") + "&";
		return e = e.slice(0, e.length - 1)
	}

	function h(t) {
		var e = t.split("#"),
			n = S(e, 2),
			i = n[0],
			o = n[1],
			r = i.split("?"),
			a = S(r, 2),
			s = a[0],
			u = a[1];
		return o = o || "", u = u || "", {
			hash: o,
			search: u,
			homePage: s
		}
	}

	function d(t) {
		var e = {},
			n = "",
			i = [],
			o = decodeURIComponent(t);
		o && (i = o.split("&"));
		for(var r = 0; r < i.length; r++) n = i[r].split("="), n[0] && (e[n[0]] = void 0 === n[1] ? null : n[1]);
		return e
	}

	function f(t) {
		t.WXconfig && y(P.WeChat, function(e) {
			e.config || (e = window.wx);
			var n = t.WXconfig;
			e.config({
				debug: !1,
				appId: n.appId,
				timestamp: n.timestamp,
				nonceStr: n.nonceStr,
				signature: n.signature,
				jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"]
			}), e.error(function(t) {
				console.log(t)
			}), e.ready(function() {
				e.onMenuShareAppMessage({
					title: t.title,
					desc: t.summary,
					link: t.url,
					imgUrl: t.pic,
					type: "",
					dataUrl: "",
					success: function() {
						t.callback && t.callback("weixin")
					}
				}), e.onMenuShareQQ({
					title: t.title,
					desc: t.summary,
					link: t.url,
					imgUrl: t.pic,
					type: "",
					dataUrl: "",
					success: function() {
						t.callback && t.callback("qq")
					}
				}), e.onMenuShareQZone({
					title: t.title,
					desc: t.summary,
					link: t.url,
					imgUrl: t.pic,
					type: "",
					dataUrl: "",
					success: function() {
						t.callback && t.callback("qqzone")
					}
				}), e.onMenuShareTimeline({
					title: t.wxTimelineTitle || t.title,
					desc: t.wxTimelineSummary || t.summary,
					link: t.url,
					imgUrl: t.pic,
					type: "",
					dataUrl: "",
					success: function() {
						t.callback && t.callback("weixinCircle")
					}
				})
			})
		})
	}

	function m(t) {
		function e() {
			try {
				t.callback ? window.mqq.ui.setOnShareHandler(function(e) {
					n.title = 3 == e && (t.swapTitle || t.WXconfig && t.WXconfig.swapTitleInWX) ? t.summary : t.title, n.share_type = e;
					var i = "";
					switch(+n.share_type) {
						case 0:
							i = "qq";
							break;
						case 1:
							i = "qqzone";
							break;
						case 2:
							i = "weixin";
							break;
						case 3:
							i = "weixinCircle"
					}
					n.back = !0, window.mqq.ui.shareMessage(n, function(e) {
						0 === e.retCode && t.callback && t.callback.call(this, i)
					})
				}) : window.mqq.data.setShareInfo(n)
			} catch(t) {
				console.log(t)
			}
		}
		var n = {
			title: t.title,
			desc: t.summary,
			share_url: t.url,
			image_url: t.pic
		};
		window.mqq ? e() : y(P.QQ, function() {
			e()
		})
	}

	function g(t) {
		function e() {
			if(QZAppExternal && QZAppExternal.setShare) {
				for(var e = [], n = [], i = [], o = [], r = 0; 5 > r; r++) e.push(t.pic), o.push(t.url), 4 === r && (t.swapTitle || t.WXconfig && t.WXconfig.swapTitleInWX) ? (n.push(t.summary), i.push(t.title)) : (n.push(t.title), i.push(t.summary));
				QZAppExternal.setShare(function() {}, {
					type: "share",
					image: e,
					title: n,
					summary: i,
					shareURL: o
				})
			}
		}
		window.QZAppExternal ? e() : y(P.Qzone, function() {
			e()
		})
	}

	function y(t, e) {
		var n = document,
			i = n.head || n.getElementsByTagName("head")[0] || n.documentElement,
			o = n.createElement("script");
		o.src = t, o.async = !0, o.onload = e, o.onerror = function() {}, i.appendChild(o)
	}

	function v(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		b = "function" == typeof Symbol && "symbol" === A(Symbol.iterator) ? function(t) {
			return void 0 === t ? "undefined" : A(t)
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : A(t)
		},
		w = /[\t\r\n\f]/g,
		x = "function" == typeof Symbol && "symbol" === A(Symbol.iterator) ? function(t) {
			return void 0 === t ? "undefined" : A(t)
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : A(t)
		};
	u.fn = u.prototype = {
		contructor: u,
		init: function() {
			var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
				n = /^\s*<(\w+|!)[^>]*>/,
				i = o(e);
			if(e)
				if(-1 !== [1, 9, 11].indexOf(e.nodeType) || e === window) t = [e], e = null;
				else {
					if("function" === i) return u(document).ready(e);
					"array" === i ? t = e : "object" === i ? (t = [e], e = null) : "string" === i && ("<" === e[0] && n.test(e) ? (t = [].slice.call(r(e)), e = "") : t = [].slice.call(document.querySelectorAll(e)))
				}
			else t = [];
			return t = t || [], u.extend(t, u.fn), t.selector = e, t
		}
	}, u.fn.init.prototype = u.fn, u.extend = u.fn.extend = a, u.fn.extend({
		on: function(t, e, n, i) {
			function r(t) {
				var i, o, r = t.target;
				if(u(r).is(e)) n.call(r, t);
				else
					for(o = u(r).parents(), i = 0; i < o.length; i++) u(o[i]).is(e) && n.call(o[i], t)
			}

			function a(t, e, n, i) {
				var o = e.split(".");
				t.DomNameSpaces || (t.DomNameSpaces = []), t.DomNameSpaces.push({
					namespace: o[1],
					event: o[0],
					handler: n,
					capture: i
				}), t.addEventListener(o[0], n, i)
			}
			var s, c, l = t.split(" ");
			for(s = 0; s < this.length; s++)
				if("function" === o(e) || !1 === e)
					for("function" === o(e) && (n = arguments[1], i = arguments[2] || !1), c = 0; c < l.length; c++) - 1 === l[c].indexOf(".") ? this[s].addEventListener(l[c], n, i) : a(this[s], l[c], n, i);
				else
					for(c = 0; c < l.length; c++) this[s].DomLiveListeners || (this[s].DomLiveListeners = []), this[s].DomLiveListeners.push({
						handler: n,
						liveListener: r
					}), -1 === l[c].indexOf(".") ? this[s].addEventListener(l[c], r, i) : a(this[s], l[c], r, i);
			return this
		},
		off: function(t, e, n, i) {
			function r(t) {
				var e, n, i, o = t.split("."),
					r = o[0],
					a = o[1];
				for(e = 0; e < l.length; ++e)
					if(l[e].DomNameSpaces) {
						for(n = 0; n < l[e].DomNameSpaces.length; ++n) i = l[e].DomNameSpaces[n], i.namespace != a || i.event != r && r || (l[e].removeEventListener(i.event, i.handler, i.capture), i.removed = !0);
						for(n = l[e].DomNameSpaces.length - 1; 0 <= n; --n) l[e].DomNameSpaces[n].removed && l[e].DomNameSpaces.splice(n, 1)
					}
			}
			var a, s, u, c, l = this;
			for(a = t.split(" "), s = 0; s < a.length; s++)
				for(u = 0; u < this.length; u++)
					if("function" === o(e) || !1 === e) "function" === o(e) && (n = arguments[1], i = arguments[2] || !1), 0 === a[s].indexOf(".") ? r(a[s].substr(1)) : this[u].removeEventListener(a[s], n, i);
					else {
						if(this[u].DomLiveListeners)
							for(c = 0; c < this[u].DomLiveListeners.length; c++) this[u].DomLiveListeners[c].handler === n && this[u].removeEventListener(a[s], this[u].DomLiveListeners[c].liveListener, i);
						this[u].DomNameSpaces && this[u].DomNameSpaces.length && a[s] && r(a[s])
					}
			return this
		},
		trigger: function(t, e) {
			for(var n, i = t.split(" "), o = 0, r = 0; o < i.length; o++)
				for(; r < this.length; r++) {
					try {
						n = new CustomEvent(i[o], {
							detail: e,
							bubbles: !0,
							cancelable: !0
						})
					} catch(r) {
						n = document.createEvent("Event"), n.initEvent(i[o], !0, !0), n.detail = e
					}
					this[r].dispatchEvent(n)
				}
			return this
		}
	}), u.fn.extend({
		pushStack: function(t) {
			var e = n(this.contructor(), t);
			return e.prevObject = this, e
		}
	}), u.fn.extend({
		ready: function(t) {
			return document && /complete|loaded|interactive/.test(document.readyState) && document.body ? t() : document.addEventListener("DOMContentLoaded", t, !1), this
		},
		addClass: function(t) {
			for(var e, n = 0, i = t.trim().split(" "); e = this[n++];) void 0 != e.classList && i.map(function(t) {
				e.classList.add(t)
			});
			return this
		},
		removeClass: function(t) {
			for(var e, n = 0, i = t.trim().split(" "); e = this[n++];) void 0 != e.classList && i.map(function(t) {
				e.classList.remove(t)
			});
			return this
		},
		hasClass: function(t) {
			for(var e, n = 0, i = " " + t.trim() + " ", o = ""; e = this[n++];)
				if(o = [].slice.call(e.classList).join(" "), 1 === e.nodeType && -1 !== (" " + o + " ").replace(w, " ").indexOf(i)) return !0;
			return !1
		},
		toggleClass: function(t) {
			for(var e = 0; this[e++];) return this.hasClass(t) ? (this.removeClass(t), this) : (this.addClass(t), this)
		},
		append: function(t) {
			for(var e, n = 0, i = r(t), o = [].slice.apply(i); e = this[n++];) o.map(function(t) {
				return e.appendChild(t)
			});
			return this
		},
		appendTo: function(t) {
			for(var e, n = 0, o = i(t), r = [].slice.apply(o); e = this[n++];) r.map(function(t) {
				return t.appendChild(e)
			});
			return this
		},
		attr: function(t, e) {
			if(1 === arguments.length && "string" == typeof t && this.length) {
				var n = this[0].getAttribute(t);
				return this[0] && (n || "" === n) ? n : void 0
			}
			var i, o;
			for(i = 0; i < this.length; i++)
				if(2 === arguments.length) this[i].setAttribute(t, e);
				else
					for(o in t) this[i].setAttribute(o, t[o]);
			return this
		},
		removeAttr: function(t) {
			var e = this;
			return t.split(" ").map(function(t) {
				e.each(function(e) {
					e.removeAttribute(t)
				})
			}), this
		}
	});
	var k = function() {
			var t = window.navigator.userAgent.toLowerCase();
			return {
				iOS: /(iPhone|iPad|iPod|iOS)/gi.test(t),
				Android: /android|adr/gi.test(t),
				Mobile: /(iPhone|iPad|iPod|iOS|Android|adr|Windows Phone|SymbianOS)/gi.test(t),
				Weibo: /(weibo)/gi.test(t),
				WeChat: !("micromessenger" != t.match(/MicroMessenger/gi)),
				QQ: /qq\//gi.test(t),
				Qzone: -1 !== t.indexOf("qzone/"),
				Meitu: /(com.meitu)/gi.test(t),
				Meipai: /meipaimv|meipai|com.meitu.mtmv/gi.test(t),
				Meipu: /com.meitu.meipu/gi.test(t),
				Xiuxiu: /(com.meitu.mtxx)/gi.test(t),
				Meiyan: /(com.meitu.myxj|com.meitu.meiyancamera)/gi.test(t),
				Makeup: /com.meitu.makeup/gi.test(t),
				Selfilecity: /com.meitu.wheelcam/gi.test(t),
				Beautyme: /com.meitu.zhi.beauty/gi.test(t),
				Shanliao: /com.meitu.shanliao/gi.test(t)
			}
		}(),
		S = function() {
			function t(t, e) {
				var n, i = [],
					o = !0,
					r = !1;
				try {
					for(var a, s = t[Symbol.iterator](); !((o = (a = s.next()).done) || (i.push(a.value), e && i.length === e)); o = !0);
				} catch(t) {
					r = !0, n = t
				} finally {
					try {
						!o && s.return && s.return()
					} finally {
						if(r) throw n
					}
				}
				return i
			}
			return function(e, n) {
				if(Array.isArray(e)) return e;
				if(Symbol.iterator in Object(e)) return t(e, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		_ = Object.assign || function(t) {
			for(var e, n = 1; n < arguments.length; n++)
				for(var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t
		},
		C = function() {
			var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
				n = e.url,
				i = void 0 === n ? "" : n,
				o = e.data,
				r = void 0 === o ? {} : o,
				a = e.timeout,
				s = void 0 === a ? 1e4 : a,
				u = e.success,
				c = void 0 === u ? function() {} : u,
				l = e.error,
				f = void 0 === l ? function() {} : l,
				m = null,
				g = "",
				y = "",
				v = "";
			y = p(_({}, d(h(r.url).search), r)), i += "?" + y, v = "jsonp" + Math.round((new Date).getTime() + 1000001 * Math.random()), window[v] = function(t) {
				c(t), clearTimeout(m), setTimeout(function() {
					window[v] = null
				}, 1e3);
				try {
					delete window[v]
				} catch(t) {
					window[v] = void 0
				}
			}, m = setTimeout(function() {
				f(), window[v] = null
			}, s), g = -1 === i.indexOf("?") ? "?" : "&", t = document.createElement("script"), t.setAttribute("src", "" + i + g + "callback=" + v), document.getElementsByTagName("head")[0].appendChild(t)
		},
		P = {
			WeChat: "//res.wx.qq.com/open/js/jweixin-1.2.0.js",
			QQ: "//open.mobile.qq.com/sdk/qqapi.js?_bid=152",
			Qzone: "//qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js?_bid=339"
		},
		I = function(t) {
			k.WeChat && f(t), k.QQ && m(t), k.Qzone && g(t)
		},
		j = function() {
			function t(t, e) {
				var n, i = [],
					o = !0,
					r = !1;
				try {
					for(var a, s = t[Symbol.iterator](); !((o = (a = s.next()).done) || (i.push(a.value), e && i.length === e)); o = !0);
				} catch(t) {
					r = !0, n = t
				} finally {
					try {
						!o && s.return && s.return()
					} finally {
						if(r) throw n
					}
				}
				return i
			}
			return function(e, n) {
				if(Array.isArray(e)) return e;
				if(Symbol.iterator in Object(e)) return t(e, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		T = function() {
			function t(t, e) {
				for(var n, i = 0; i < e.length; i++) n = e[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		B = function() {
			function t(e) {
				v(this, t), this.version = "1.6.3", this.el = u("string" == typeof e ? arguments[0] : ""), e = "string" == typeof e ? arguments[1] : arguments[0], this.options = {
					els: {
						btnShare: this.el
					},
					shareData: a(!0, {
						title: "",
						imageUrl: "",
						description: "",
						link: "",
						onSuccess: function() {}
					}, e),
					configure: {
						top: 0,
						right: 0,
						width: "100%",
						image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAEYCAYAAADMEEeQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiOWM1NThmOS01ZjMwLTQyYjItOWQ2Ny03MTQzNmFiNDY0Y2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUNGNkY1REE5RkM5MTFFNTkzQ0NEQ0IxNkMwRUQ3NEYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUNGNkY1RDk5RkM5MTFFNTkzQ0NEQ0IxNkMwRUQ3NEYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowM0REQzA1NDg3OUVFNTExOUYxNkZEMUIzOEM0MDY3QSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg0MmUzNmMyLWRhZGQtMTE3OC1hNjMwLTlhYjg2ZThjZmM3OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlX0Il8AABGZSURBVHja7N1diCzZQcDxM7s3LjEG7UVXBBNCXx/WYKLQCxoxoKSHxTz4IMwN5gMT0LtBTXxQM9dA/Iw4gwb8lhl8UwzeMfjubRAFxY/tF8EHTXYSxBcfzKiJbr6wPYfu5tbUVlV/VXdXdf1+cMi9Mz3V3dWz3H9OVZ06mkwmAQCA7njCLgAAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCAAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCAAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQACAvXkyjrfHcaepL/COzwgAoBZ34/jhON4bx+viOBKAAACH5zVxnMTxvjjemom+zzf5RQtAAIDVvSVMZ/reEcfXFnz/CwIQAKD9vnEWfWk8u+Cx/ysAAQDa6VVhekHH+2b/+6olf+6/BSAAQLukGb77cbwrjmfW+PmXBSAAQPOlc/nSOX3vDdNz/DYhAAEAGipdtZuu3k2zfT8Yx6tr2u7nBCAAQLO8PkzX7Evj7ha2/z8CEABg/56K4wfi+NE43ha2e0c0h4ABAPZoEKbn9b0zjqd39JyWgQEA2LGnZ8H3I3F8+x6e3zIwAAA78GQcz4fpbF861PvUHl+LQ8AAAFuULuJIF3OkxZq/uSGvya3gAAC22DIfjOMDYbqkS1M0+hDwE35vAIAW+0ocPxnH98Xx6Qa9rkZfBCIAAYBD8JdxvCmO341j0oDX0+hzAAUgAHAo0uLLPxGma/y91IDXIgABAHbkL8J0NvDXw/QQ8T40+lZwAhAAOETpEOzPxPGWOP5xT88vAAEA9uDFOJ6L4yNht0uzCEAAgD36chwfjePNcYx29JyWgQEAaIBPxnEcx7vj+PctP1ejl4E5mkwmfh0AgK55Jo5PxfHaLW3/a0KDrwQ2AwgAdNHPbzH+QrAMDABAo7wzjh/b4vY/1/QdIAABgC55YxyXW36OLzR9JwhAAKAr0nl5fxrHa7b8PC83fUcIQACgK/4gjm/dwfP8lwAEANi/dI/gd+zoucwAAgDs2XfF8bENfj4t6vyeOK4FIABA8319HH8Sx1dtsI1fjeOP4vi2OH45ji8uePznBSAAwP46J4Xb6zfYxr/G8RuzP6eZvZ+L401x/LkABABono/E8fyG2/hweOWyLp+cbfdeHP9W8DMOAQMA7MHzswDcxD/E8ccV378K06uKfy2OrwhAAID9eV0cfxjHkxtu56fjmCx4TDrc+6E4viOOv5p9rfHLwNzxOwIAHJB0sUe66OMbNtzOn2WCbhn/FMf3xvHuOL666TvpaDKZ+FUBAA7Fb8bxwQ238eUwveL3Xw51JzkEDAAcins1xF/y+4ccf4kZQADgEDwbx9/H8doNt/OfcXxLHP9xyDvLDCAA0HbpnLtP1BB/ya8cevwlZgABgLZLiz2/q4btfDpMl3X54qHvMDOAAECbvb+m+Et+tgvxl5gBBADa6rk4/jpsdp/fub+N47vD4nX/BCAAwJ48Hcc4jjfUsK0UQ98Tx990Zec5BAwAtM1RmJ7394aatveJLsWfAAQA2ujDcXx/TdtK5/w96NoOFIAAQJu8LY5frHF7vxfHS13bic4BBADa4uvi+Oc4nqlpe58N00Wfb7q2I80AAgBtke7S8Z44PlXT9j7axfhLzAACAG3z6jhOw/TcvafW3EY67PvGOL7UxR1oBhAAaJuX4/iFON4cx2jNbZx2Nf4SM4AAQNv9UBwfi+Oblnx8Wjz6raEjiz4XMQMIALTdx8P0cO7vxPF/Cx6bou+nuhx/AhAAOBTpApEPxPGdcbxY8biHcfxd13eWQ8AAwKFJE1w/HscvhenSMXNp0edn4/iMHQQAcFjSYeDfDtPDwh/PfP23xN+UGUAA4NANw3Q28O1heqhYAApAAIBucQgYAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAgAAEAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAgAAEAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAgJ26YxcA0HCnub+f2yWwmaPJZGIvANBUgzhezP/btcXn683GtV3PITMDCMC+9WdjHMdNQZDtOjgfFXz9aMevozd7LVnXwhQBCMChOInjLPP34zhGHd8nZSFaJu2vq1lA318yGseZ/73xaygAAWCX+g1/fW2Io+EsAnuzP69CcAtAAFjLaUWYVIXHogBsQhyOfby1SrObZ7mvzWcqR/a3AASgHXoF/6AvMlph22LssOLvUSg+tzPNtF7aRQIQgPb8o74rXTlXrVcQzKPM/k7fn188s6lNo/q0YBtF5x6m13wRyi/seRCciygAAaDD+gUBeF4QXme5kMvHeJpRu8ptN110M6wpqvth+dnfm4r4mwfjcPY4M70CEIADlI2O3gohRLX8OZfj8MrD7XXO2K7y+Sz6nB9VhGF6Hw98vAIQgGYb5f5x7xeEyTJB0oQAbOrae/01X3uborof/J8AAQhAaxzn/p4OOz5s6XtpQgCmCMrP7g0a8LoGHfoMBCAArBEwy+rZXa/YB/fD7QWeixSdy3dSEGn9GsNqvnTLfLvbmq0TgAIQgIapexaoLwbX2qdFF04sisZNw+oq3L7IJORisGjNv7nzXLQOCj7vof+8BCAAh2PZK0+bcJhzWBJONwUBtu9lTJpyvtz84o2q+HNRhwAEoGOuK+Jq7mSDcKw7AFediTrqeACGWfwVBbwregUgAAdo0/vKzpcEGZbEwzYNfHy1SIeeTyv28STcnjHN/7mu3yUEIAAtioc2qyNS8+fCHRc8Jrtu3s2SMd7LRe42ZlTT9i9WjO2yGdZ0fuE9/0kIQACaL83g5Wd/unQyfx1RNVgQcstE57ggHIe5cKx7RnUQihd0riuEEYAANDgAF90erG3LehwXRFkvFC+xsov3tkwY7fp8yXn81RltrgIWgAA01Dr/SF9noqENRmG/56OdNjyW7s+iv1cRo+eZSO6v8Jp7Yf9XVwtAAGDnztb4maLDsds4pHq64PWlw8z3QvXMaLpLTNFV31fiTwAC0EzjULyI76bSjNuwIe+v6Yoiqbfl/Zdm8S4WPEd6XccLIu4klC/584L/vAQgAM30INxe1y0bg0VXei4Tipezf/wnDY2rbVon2taN1HV+Ln1+82Veeks89mL2Wd5UfL/IC8HsnwAEoDXK1nE7L3lsPh6vZ1+zJl/zzMNvlQWnT2aPf6EgOB+WRGTZLeYQgAAcgKqLK4rC4NouK7Xtu4CchcUXo4xC8ekA8/MRU9hfzr6WtlU02+nQ7w48YRcA0CJdPCSYguk4Ny6XCObrmvfXeUWAX8+ibf76qg73zm8RVxaTDv0KQADovBRXo9xYJpBSJD4dpvclno9NlrIpmplLX0uzenczUToO1Rd+pPArWy/QoV8BCACdNFjjMbu6CGSUCbTLWfiVndtZFYG9JQMTAQgA1GydQ60p0p4Liw/VLorAou069CsAAYANFM3u1XFl9U1Yfuaw6H7ERbIzi+yAq4ABOHRnufC5DuUXMwxLvjZZMoKKzrG7DJvNbBU9T3/J157X2/G+r1rnL//a74fii1sQgACwskGo/44YvYpYLAq4uu8j3C8I0qZJ++LhCtF5MXtfD/zKbp9DwAB0IQD3adULLYYLvvfSks9xsyAat7mmYtWVvot+7sKvrAAEQLhVRc0yent+Hzc175NlF3we58LqpR0EYNrXadbvrOIxaYav6oKP+2vGIytwCBiAproKr5zZWme5k+OKqMzftaIf6r2jRh3xlw21dQ9lD3fwefVn4dav2BfHmc9wXBF6w9n3joMrgwUgAJ1SdbHGKkYlf15GryQal43I8YavN6ywD/oN+LxuKt7Tvdz351cIl0Vg2q8Xs5+jZkeTycReAIB2yUdnCqxhRUhOSqLsuObXNZ+5y0qHfM8XRPajgrBOsfhccP9nAQgA1CJFV5oxHG9h22nW7n54fGePqyVfTzYC84eLEYAAQMPj8uEs/ladvZvHY4q/kV0pAAGAbhiKPwEIAEDNrAMIACAAAQAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgCwJXfsAgCozWmY3v/2ZjbGdgkCEAAOV7qH7Vnm7+cCkKZyCBgAtuPGLkAAAgDQCA4BA8B2tP3w7yRMz2e8Lvn+KPPnq4rH0UBHk8nEXgCA1dyPoxdHfzbC7O+Dip95IY7LlgXgso5zQUjDmQEEgNWdhOlFH6vIzpB9NjyeIczOss2vIA57Dqqhj1gAAgD16i0RWSkAjzd8jsEKjzeDJwABgJrt+qrgFH+PVnj8UebPaSbywWwbvRriEgEIAK03P3ybPQcw5ALqMjw+vDvOhdmoIq6aIL3mcx+zAAQAHntQ8LXJkgGVYjB/aDcdDk7nFd63a9kF6wACQP1WPdy7jfPvHKKllBlAANhc/oKOddYA7Nf8mtIM5OUsBItmF499bAIQAFgt1ubBNiiIt7Nw+77ASTosfHeHAZikmcj5+YZ5rvoVgADQGGmm6mT253F4fDj1JlTfbSL72G1KV9aus05ePxeIg9DsC0EQgACwM9k18jZdkDg7y3UTbh+aHRc8ZtWQW/e1DELzFlvOhu26s4MPQvtvgScAAaDl8pF1UvCYox0FYJNcr7jfVol3BCAANNo2z4O7CtPZsPmh6XENgbVq/A4qnu80E4NXNT3njV8pAQgAh6hsxvAi3L7S9nKFwDzawutM8XdW8r1+5nujGgPQ4V8BCABrOZ8FSfYq2yR/+7GmnUPX9kPDozX27fxOJyEsPqyMAASApcNimVm0oluyLbMQ8jbPWWvbbNh5uH33kklBIObD8K5fVQEIAE0IxrBCOK4jv3RL2fM8LHg952F3M4XLxu2o5D2GJQIQAQgAnXCWC6Gy8/eGJaGVD8BtzRReZZ7zIve86XuXFc9fFIDO7xOAANBZ2ZCq46rXFFuTgq/PZzXXvWXbuOQ1z783WvI9lgWgc/4EIAB0MgDHW36ebR0uXvS6BwWx1xeAAhAAuigfRtkZwGFJaI3D7bX22rBY8rDgfVjkWQACQCf1CsKoSDq/7kEoPkTc9OVinP8nAAGAijhKMVc08zcK5ecHzu8QUnTl8q7cCMBue8IuAIC1pTt/PJqNfBiWzfRdzwLxesuvaZIZeS/mvj/JhN8yF4CIwpYzAwgAy1t2Hbyz8PhWa/OZvuw9gW+2GFAnYb31+nol7/E6FM8Yuu+vAASATljnQoj5bOCwJKKyh4PnsTXa43vMHwIeb/DeEYAA0HqDXLxdh+VuOVcVlGWzdWn7+duzbVPZnT7GmZAtC9yLTMBeBUvECEAAOBD5AMrG2XyWb36buEHYfB2/dWfcsncA2SRw8wFYtV+GuccLQAEIAAcZgNkwms9+ld1Xt58bg7C9Q6qXNb7HsCAmh8H9gQUgABywFHzHs3gbhOUv4hiXPDY7U9jLROE+g2pQEbl5Z34lBCAAHLr5xRmjmrdXZD5TuOsrbVcJQFrMOoAA0Dzzw8m7DLA0+3gebp+/t865fJaHaYGjyWRiLwAAWWn28SQXoSehfDmb7DmNR3afAAQAoGEcAgYAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCAAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCAAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAEAAAgDQHf8vwACBiPwaTi6nrwAAAABJRU5ErkJggg==",
						background: "rgba(0, 0, 0, 0.5)"
					},
					WXconfig: {
						debug: !1,
						jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
					},
					appIDs: [{
						appName: "b+",
						appID: {
							production: "928616713878249",
							test: "346621955786423"
						}
					}, {
						appName: "m+",
						appID: {
							production: "809771079178249",
							test: "346621955786423"
						}
					}],
					tokenUrl: location.protocol + "//applet.meitu.com/public/index/wx_token"
				};
				var n = arguments[arguments.length - 1];
				this.app = n || {}, this.emit = n && n.emit ? function() {
					return n.emit.apply(n, arguments)
				} : function() {}, this.init()
			}
			return T(t, [{
				key: "init",
				value: function() {
					var e = this,
						n = this;
					if((k.Qzone || k.QQ || k.WeChat) && C({
							url: t.tokenUrl || this.options.tokenUrl,
							data: {
								url: location.href.split("#")[0],
								t: (new Date).getTime()
							},
							success: function(t) {
								e.emit("app app.share", "fetch wechat configure success", t), e.options.WXconfig = a(e.options.WXconfig, t), e.thirdPartShare(e.options.shareData)
							},
							error: function() {
								this.emit("error error.share", "fetch wechat configure timeout")
							}
						}), k.Meitu) {
						var i = function() {
							window.MTJs = window.MTJs || window.WebviewJsBridge || window.MPJs, e.meituShare(e.options.shareData)
						};
						k.Meipai && "undefined" == typeof MPJs ? (window.addEventListener("MeipaiJsBridgeReady", i, !1), window.addEventListener("WebviewJsBridgeReady", i, !1)) : "undefined" == typeof WebviewJsBridge ? window.addEventListener("WebviewJsBridgeReady", i, !1) : this.meituShare(this.options.shareData)
					}
					if(k.Facebook || k.BPlus || k.MPlus) {
						var o = this.app;
						if(o.options && o.options.shareOption && o.options.shareOption.facebook) {
							var r = o.options.shareOption.facebook;
							l(), window.fbAsyncInit = function() {
								var t = n.options.appIDs.filter(function(t) {
										return t.appName == r.inApp
									}),
									e = j(t, 1),
									i = e[0];
								FB.init({
									appId: i ? i.appID : n.options.appIDs[0].appID,
									version: "v2.4"
								})
							}
						}
					}
					0 != this.el.length && this.options.els.btnShare.on("click", function(t) {
						t.preventDefault(), e.callShare()
					})
				}
			}, {
				key: "callShare",
				value: function() {
					var t = this;
					if(k.Meipai) this.emit("app app.share", "method: callShare", "is.Meipai"), "undefined" == typeof MTJs ? MTJs.nativeCall("lives_share", {
						url: encodeURIComponent(this.options.shareData.link),
						img_url: this.options.shareData.imageUrl,
						title: this.options.shareData.title,
						content: this.options.shareData.description
					}) : MTJs.callSharePageInfo();
					else if(k.Meitu) "undefined" != typeof WebviewJsBridge && "function" == typeof WebviewJsBridge.onSharePageInfo && "function" == typeof WebviewJsBridge.callSharePageInfo ? WebviewJsBridge.callSharePageInfo() : console.log("升级您的APP，体验更多功能");
					else if(k.Weibo) {
						this.emit("app app.share", "method: callShare", "is.Weibo");
						var e = {
							title: this.options.shareData.title,
							pic: this.options.shareData.imageUrl,
							url: this.options.shareData.link
						};
						e.url = encodeURIComponent(e.url), location.href = "http://v.t.sina.com.cn/share/share.php?" + p(e)
					} else if(k.Facebook) FB.ui(a(!0, {
						method: "feed",
						link: this.options.shareData.link,
						name: this.options.shareData.title,
						description: this.options.shareData.description,
						picture: this.options.shareData.imageUrl,
						frictionlessRequests: "false"
					}, this.options.shareData), function() {
						return t.options.shareData.onSuccess("facebook")
					});
					else if(k.Twitter) {
						var n = {
							url: this.options.shareData.link,
							text: this.options.shareData.title
						};
						n.url = encodeURIComponent(n.url), n.text = encodeURIComponent(n.text), location.href = "http://twitter.com/share?" + p(n)
					} else this.createOverlay(), this.options.els.share.addClass("visible")
				}
			}, {
				key: "setShare",
				value: function(t) {
					var e = a(this.options.shareData, t);
					this.options.shareData = e, e.link = c(e.link), (k.WeChat || k.Qzone || k.QQ) && this.thirdPartShare(e), this.meituShareAsync(e)
				}
			}, {
				key: "thirdPartShare",
				value: function(t) {
					var e = this.options.WXconfig;
					I({
						title: t.title,
						summary: t.description,
						pic: t.imageUrl,
						url: t.link,
						WXconfig: e,
						callback: function(e) {
							return t.onSuccess(e)
						}
					})
				}
			}, {
				key: "meituShareAsync",
				value: function(t) {
					var e = this;
					if(k.Meitu) {
						var n = function() {
							window.MTJs = window.MTJs || window.WebviewJsBridge || window.MPJs, e.meituShare(t)
						};
						k.Meipai && "undefined" == typeof MPJs ? (window.addEventListener("MeipaiJsBridgeReady", n, !1), window.addEventListener("WebviewJsBridgeReady", n, !1)) : "undefined" == typeof WebviewJsBridge ? window.addEventListener("WebviewJsBridgeReady", n, !1) : this.meituShare(t)
					}
				}
			}, {
				key: "meituShare",
				value: function(t) {
					if(k.Meipai) {
						if(-1 != t.link.indexOf("#")) {
							var e = h(t.link),
								n = e.homePage,
								i = e.hash,
								o = e.search;
							t.link = n + (i || o ? "?" : "") + o + (i ? "#" + i : "")
						}
						var r = {
							url: t.link,
							img_url: t.imageUrl,
							title: t.title,
							content: t.description,
							image: t.imageUrl,
							description: t.description,
							link: t.link,
							success: function() {
								return t.onSuccess("meitu")
							}
						};
						MTJs.onSharePageInfo(r)
					} else {
						var a = {
							title: t.title,
							image: t.imageUrl,
							description: t.description,
							link: t.link,
							success: function(e) {
								e = e.data || e, t.onSuccess(e && e.type || "meitu")
							}
						};
						MTJs.onSharePageInfo(a)
					}
				}
			}, {
				key: "configure",
				value: function(t) {
					this.options.configure = a(!0, this.options.configure, t)
				}
			}, {
				key: "createOverlay",
				value: function() {
					if(!u(".js-widget-share")[0]) {
						u("head").append("\n                <style>\n                    .Widget.share {\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                        z-index: 99;\n                        opacity: 0;\n                        visibility: hidden;\n                    }\n                    .Widget.share.visible {\n                        opacity: 1;\n                        visibility: visible;\n                    }\n                </style>\n            "), u(document.body).append('\n    \t\t\t<div class="Widget share js-widget-share qqq">\n    \t\t\t\t<img src="' + this.options.configure.image + '" class="share-tips js-share-tips">\n    \t\t\t</div>\n    \t\t'), this.options.els.share = u(".js-widget-share"), this.options.els.share.on("click", function() {
							u(this).toggleClass("visible")
						});
						var t = 0 < this.options.configure.width.toString().indexOf("%") ? this.options.configure.width : parseInt(this.options.configure.width) + "px",
							e = 0 < this.options.configure.top.toString().indexOf("%") ? this.options.configure.top : parseInt(this.options.configure.top) + "px",
							n = 0 < this.options.configure.right.toString().indexOf("%") ? this.options.configure.right : parseInt(this.options.configure.right) + "px",
							i = u(".js-share-tips")[0];
						u(".js-widget-share")[0].style.background = this.options.configure.background, i.src = this.options.configure.image, i.style.position = "absolute", i.style.width = t, i.style.top = e, i.style.right = n
					}
				}
			}]), t
		}();
	e.default = B
}, function(t, e, n) {
	"use strict";

	function i(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(39),
		r = i(o),
		a = n(1),
		s = i(a);
	e.default = {
		init: function(t) {
			var e = t.options.download || {},
				n = e.callback || function() {};
			e && $(".js-download .left").on("tap", function() {
				return n(), console.log(e), s.default.Meiyan ? void(location.href = e.openApp.scheme) : void setTimeout(function() {
					return(0, r.default)(e.openApp || "mtxx")
				}, 100)
			})
		},
		firstLetterUpperCase: function(t) {
			return t = t.toLowerCase(), t = t.replace(/\b\w+\b/g, function(t) {
				return t.substring(0, 1).toUpperCase() + t.substring(1)
			})
		}
	}
}, function(t, e) {
	"use strict";

	function n() {
		var t = window.navigator.userAgent.toLowerCase().match(/iphone os (\d*)/);
		return t && 9 <= t[1]
	}

	function i(t) {
		var e = document.createElement("iframe");
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0", e.border = 0, e.src = t, setTimeout(function() {
			document.body.appendChild(e), setTimeout(function() {
				e.parentNode.removeChild(e)
			}, 300)
		}, 10)
	}

	function o(t) {
		var e, n, i = Date.now();
		void 0 === document.hidden ? void 0 === document.msHidden ? void 0 !== document.webkitHidden && (e = "webkitHidden", n = "webkitvisibilitychange") : (e = "msHidden", n = "msvisibilitychange") : (e = "hidden", n = "visibilitychange");
		var o = setTimeout(function() {
			Date.now() - i > 1550 || t()
		}, 1500);
		document.addEventListener(n, function() {
			if(document[e]) {
				clearTimeout(o);
				var t = document.querySelector("#browserTips");
				return t && t.parentNode.removeChild(t), !1
			}
		}, !1)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = function() {
			var t = window.navigator.userAgent.toLowerCase();
			return {
				iOS: /(iPhone|iPad|iPod|iOS)/gi.test(t),
				Android: /android|adr/gi.test(t),
				Mobile: /(iPhone|iPad|iPod|iOS|Android|adr|Windows Phone|SymbianOS)/gi.test(t),
				Weibo: /(weibo)/gi.test(t),
				WeChat: !("micromessenger" != t.match(/MicroMessenger/gi)),
				QQ: /qq\//gi.test(t),
				Qzone: -1 !== t.indexOf("qzone/"),
				Meitu: /(com.meitu)/gi.test(t),
				Meipai: /meipaimv|meipai|com.meitu.mtmv/gi.test(t),
				Meipu: /com.meitu.meipu/gi.test(t),
				Xiuxiu: /(com.meitu.mtxx)/gi.test(t),
				Meiyan: /(com.meitu.myxj|com.meitu.meiyancamera)/gi.test(t),
				Makeup: /com.meitu.makeup/gi.test(t),
				Selfilecity: /com.meitu.wheelcam/gi.test(t),
				Beautyme: /com.meitu.zhi.beauty/gi.test(t),
				Shanliao: /(com.meitu.shanliao|com.meitu.testwheetalk)/gi.test(t),
				Twitter: /Twitter/gi.test(t),
				Facebook: /fbav/gi.test(t)
			}
		}(),
		a = !1;
	e.default = function(t) {
		console.log("1.2.3");
		var e, s, u, c, l, p, h, d;
		if("string" == typeof t) switch(t) {
			case "myxj":
			case "meiyan":
				e = "myxj://", s = "myxjpush://camera", c = "http://meiyan.meitu.com/mobile/", u = "http://a.app.qq.com/o/simple.jsp?pkgname=com.meitu.meiyancamera&ckey=CK1350673066210", l = "https://app.meitu.com/myxj/applinks/index.html", h = "com.meitu.meiyancamera", p = r.iOS ? "https://itunes.apple.com/cn/app/mei-yan-xiang-ji/id592331499?mt=8" : "http://meiyan.dl.meitu.com/myxj.apk";
				break;
			case "mtxx":
			case "xiuxiu":
				e = "meituxiuxiu://", s = "meituxiuxiu://", c = "http://xiuxiu.meitu.com/mobile/", u = "http://a.app.qq.com/o/simple.jsp?pkgname=com.mt.mtxx.mtxx&ckey=CK1320781983564", l = "https://app.meitu.com/xiuxiu/applinks/index.html", h = "com.mt.mtxx.mtxx", p = r.iOS ? "https://itunes.apple.com/cn/app/mei-tu-xiu-xiu/id416048305?mt=8" : "http://xiuxiu.android.dl.meitu.com/xiuxiu.apk";
				break;
			case "selfiecity":
				e = "selfiecity://", s = "selfiecity://", c = "http://selfiecity.meitu.com/mobile/", u = "http://a.app.qq.com/o/simple.jsp?pkgname=com.meitu.wheecam&ckey=CK1342115129259", l = "https://app.meitu.com/selfiecity/applinks/index.html", h = "com.meitu.wheecam", p = r.iOS ? "https://itunes.apple.com/cn/app/selfiecity-chao-zi-pai-zheng/id1014277964?l=zh" : "http://selfiecity.dl.meitu.com/selfiecity.apk";
				break;
			case "makeup":
				e = "makeup://", s = "makeup://", c = "http://makeup.meitu.com/mobile/", u = "http://a.app.qq.com/o/simple.jsp?pkgname=com.meitu.makeup&ckey=CK1335982084288", l = "https://app.meitu.com/makeup/applinks/index.html", h = "com.meitu.makeup", p = r.iOS ? "https://itunes.apple.com/cn/app/makeupplus-best-makeup-tool/id973337925?ls=1&mt=8" : "http://makeup.dl.meitu.com/makeupplus.apk";
				break;
			case "meipai":
			case "mtmv":
				e = "mtmv://", s = "mtmv://", c = "http://www.meipai.com", u = "http://a.app.qq.com/o/simple.jsp?pkgname=com.meitu.meipaimv&ckey=CK1323442798425", l = "https://app.meitu.com/meipai/applinks/index.html", h = "com.meitu.meipaimv", p = r.iOS ? "https://itunes.apple.com/cn/app/id847334708?mt=8" : "http://meipai.dl.meitu.com/meipaimv.apk";
				break;
			case "shanliao":
				e = "shanliao://", s = "shanliao://", c = "http://shanliao.meitu.com", u = "http://a.app.qq.com/o/simple.jsp?pkgname=com.meitu.shanliao&ckey=CK1335982084288", l = "https://app.meitu.com/shanliao/applinks/index.html", h = "com.meitu.shanliao", p = r.iOS ? "https://itunes.apple.com/cn/app/shan-liao-hen-mo-xing-hua/id1153894668?l=zh&ls=1&mt=8" : "http://shanliao.dl.meitu.com/shanliao.apk";
				break;
			default:
				return !1
		} else e = t.browserScheme, s = t.scheme || "", u = t.yybUrl || "", c = t.homepage || "http://m.meitu.com", l = t.unisalLink || "", p = t.download || c, h = t.package || "";
		var f = r.Weibo ? c : u;
		if(l = l + "?redirectURI=" + encodeURIComponent(f) + "&scheme=" + encodeURIComponent(s), r.QQ || r.WeChat) location.href = n() ? l : u + "&android_schema=" + encodeURIComponent(s);
		else if(r.Weibo)
			if(location.href = s, r.Android) o(function() {
				location.href = u
			});
			else {
				if(a) return !1;
				a = !0, o(function() {
					var t = r.iOS ? "ios.png" : "android.png",
						e = document.createElement("div");
					e.innerHTML = '<div id="browserTips" style="position:fixed;top: 0;left: 0;bottom:0;right:0;width: 100%;height: 100%;z-index: 99999;-webkit-transform:translateZ(0);"><div style="position: fixed;top: 0;left: 0;width: 100%;height: 100%; background-color: #000;opacity: .8;z-index: 9999;-webkit-transform:translateZ(0);"><img src="http://h5.meitu.com/images/' + t + '"  style="position:fixed;right:10;top:10px;z-index: 99999;-webkit-transform:translateZ(0);" width="100%"></div></div>', document.getElementsByTagName("body")[0].appendChild(e), document.querySelector("#browserTips").addEventListener("click", function() {
						this.parentNode.removeChild(this), a = !1
					})
				})
			}
		else if(r.Meitu) {
			d = s.split("://")[0], "meituxiuxiu" === d ? d = "mtxx|meituxiuxiu" : "mtmv" === d ? d = "mtmv|meipai" : "myxj" === d ? d = "myxj|meiyan" : "myxjpush" === d ? d = "myxj|meiyan" : "selfiecity" === d && (d = "wheecam");
			var m = window.navigator.userAgent.toLowerCase(),
				g = new RegExp(d),
				y = g.test(m);
			if(y) return location.href = s, !1;
			if(-1 != s.indexOf("myxj") && r.iOS && (s = "myxj://"), s.toLowerCase() === e.toLowerCase() && r.Android && (s = ""), "undefined" != typeof WebviewJsBridge || "undefined" != typeof MPJs || void 0 !== v) {
				var v = v || WebviewJsBridge || MPJs;
				v.nativeCall("openapp", {
					package: h,
					scheme: s,
					url: p
				})
			} else {
				var A = n() ? l : p;
				location.href = A
			}
		} else {
			if(n() ? setTimeout(function() {
					location.href = l
				}, 0) : r.Twitter ? location.href = s : i(s), a) return !1;
			a = !0;
			var b = '<div id="browserTips" style="position:fixed;top: 0;left: 0;right:0;bottom:0;width: 100%;height: 100%;z-index: 99999;-webkit-transform:translateZ(0);"><div style="position: fixed;top: 0;left: 0;width: 100%;height: 100%; background-color: #000;opacity: .8;z-index: 9999;-webkit-transform:translateZ(0);"></div><div style="width:300px;height:190px;position: fixed;top:50%;left:50%;-webkit-transform:translate3D(-50%,-50%,0);z-index: 99999;background-color:#fff;border-radius:6px;opacity:1;"><p style="margin-top:40px;font-size:20px;text-align:center;">已经安装APP才能打开哦</p><p style="margin-top:20px;font-size:12px;text-align:center;">（部分浏览器不支持跳转，需要手动打开~）</p><p style="text-align:center;"><a style="width:90px;height:40px;line-height:40px;display:inline-block;background:#888;color:#fff;border-radius:5px;margin:10px 20px 10px 0;text-decoration:none;font-size:16px;" href="javascript:;">取消</a><a style="width:90px;height:40px;line-height:40px;display:inline-block;background:#ef3636;color:#fff;border-radius:5px;margin:10px auto;text-decoration:none;font-size:16px;" href="' + u + '">去安装</a></p></div>',
				w = document.createElement("div");
			w.innerHTML = b, o(function() {
				document.getElementsByTagName("body")[0].appendChild(w), document.querySelector("#browserTips").addEventListener("click", function() {
					this.parentNode.removeChild(this), a = !1
				})
			})
		}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(3),
		o = function() {
			return $("#js-waiting").removeClass("visible")
		},
		r = function(t) {
			if(t && 0 > t.indexOf("http")) {
				var e = n(42)("./" + t);
				return 0 == e.indexOf("data:") ? "" : e
			}
			return t
		},
		a = function(t) {
			return t.map(function(t) {
				if("string" == typeof t) return r(t);
				var e = (0, i.getHash)("route") || (0, i.getHash)("page") || "home";
				return "common" == t.route || t.route == e ? t.images.map(function(t) {
					return r(t)
				}) : []
			})
		};
	e.default = {
		init: function(t) {
			if(t.options.waiting) {
				var e = t.options.waiting = $.extend(!0, {
					fake: 1e3,
					preload: [],
					progress: function() {},
					done: function() {},
					before: function() {}
				}, t.options.waiting);
				e.before();
				var n = e.preload;
				n = a(n), n = n.reduce(function(t, e) {
					return t.concat(e)
				}, []), n = n.filter(function(t) {
					return "" != t
				}), n = n.map(function(e) {
					return e.replace("./", t.path.home)
				}), n.length ? t.preload(n).progress(function(t) {
					e.progress(t), 100 == t && (e.done(n), o())
				}) : setTimeout(function() {
					return o()
				}, e.fake)
			}
		}
	}
}, function(t, e) {
	"use strict";

	function n() {
		var t, e, a, s, u, c, l = arguments[0] || {},
			p = 1,
			h = arguments.length,
			d = !1;
		for("boolean" == typeof l && (d = l, l = arguments[p] || {}, p++), "object" !== (void 0 === l ? "undefined" : r(l)) && "function" !== i(l) && (l = {}), p === h && (l = this, p--); p < h; p++)
			if(null !== (t = arguments[p]))
				for(e in t) u = l[e], s = t[e], l != s && (d && s && (o(s) || (c = Array.isArray(s))) ? (c ? (c = !1, a = u && Array.isArray(u) ? u : []) : a = u && o(u) ? u : {}, l[e] = n(d, a, s)) : void 0 !== s && (l[e] = s));
		return l
	}

	function i(t) {
		var e = {},
			n = e.toString.call(t);
		return null == t ? t + "" : ("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(t) {
			e["[object " + t + "]"] = t.toLowerCase()
		}), "object" === (void 0 === t ? "undefined" : r(t)) || "function" == typeof t ? e[n] || "object" : void 0 === t ? "undefined" : r(t))
	}

	function o(t) {
		var e, n, i = {},
			o = i.toString,
			r = i.hasOwnProperty,
			a = r.toString,
			s = a.call(Object);
		return t && "[object Object]" === o.call(t) && (!!!(e = Object.getPrototypeOf(t)) || "function" == typeof(n = r.call(e, "constructor") && e.constructor) && a.call(n) === s)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	e.default = n
}, function(t, e, n) {
	function i(t) {
		return n(o(t))
	}

	function o(t) {
		var e = r[t];
		if(!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
		return e
	}
	var r = {
		"./bg.jpg": 12,
		"./bill-logo.png": 43,
		"./close.png": 44,
		"./date-logo.png": 45,
		"./download-skip.png": 19,
		"./logos.png": 46,
		"./main-font.png": 47,
		"./main-img.png": 48,
		"./photo/skip_1.png": 13,
		"./photo/skip_2.png": 14,
		"./photo/skip_3.png": 15,
		"./photo/skip_4.png": 16,
		"./photo/skip_5.png": 17,
		"./pic-mask.png": 4,
		"./qrcode.png": 49,
		"./share-skip.png": 20,
		"./share-tips.png": 6,
		"./skip_share.jpg": 2,
		"./sprite.png": 18,
		"./text/1.png": 50,
		"./text/10.png": 51,
		"./text/2.png": 52,
		"./text/3.png": 53,
		"./text/4.png": 54,
		"./text/5.png": 55,
		"./text/6.png": 56,
		"./text/7.png": 57,
		"./text/8.png": 58,
		"./text/9.png": 59
	};
	i.keys = function() {
		return Object.keys(r)
	}, i.resolve = o, t.exports = i, i.id = 42
}, function(t, e, n) {
	t.exports = n.p + "images/bill-logo.png?9a8c3e40"
}, function(t, e, n) {
	t.exports = n.p + "images/close.png?f64f2726"
}, function(t, e, n) {
	t.exports = n.p + "images/date-logo.png?38b960e6"
}, function(t, e, n) {
	t.exports = n.p + "images/logos.png?b8594389"
}, function(t, e, n) {
	t.exports = n.p + "images/main-font.png?83e0cacc"
}, function(t, e, n) {
	t.exports = n.p + "images/main-img.png?f25fe62f"
}, function(t, e, n) {
	t.exports = n.p + "images/qrcode.png?18f03b3e"
}, function(t, e, n) {
	t.exports = n.p + "images/text/1.png?742fad7a"
}, function(t, e, n) {
	t.exports = n.p + "images/text/10.png?71e03ff9"
}, function(t, e, n) {
	t.exports = n.p + "images/text/2.png?65150c78"
}, function(t, e, n) {
	t.exports = n.p + "images/text/3.png?6160ce8e"
}, function(t, e, n) {
	t.exports = n.p + "images/text/4.png?2f51f1a7"
}, function(t, e, n) {
	t.exports = n.p + "images/text/5.png?35a626cc"
}, function(t, e, n) {
	t.exports = n.p + "images/text/6.png?f2309930"
}, function(t, e, n) {
	t.exports = n.p + "images/text/7.png?83eb18a7"
}, function(t, e, n) {
	t.exports = n.p + "images/text/8.png?690c7d59"
}, function(t, e, n) {
	t.exports = n.p + "images/text/9.png?84ccb188"
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(0),
		o = n(1),
		r = (function(t) {
			t && t.__esModule
		}(o), n(3));
	e.default = {
		init: function(t) {
			function e() {
				return "//account.meitu.com/#!/logout/relogin?" + (0, r.querify)(s)
			}
			if(!t.options.auth) return !1;
			t.authorize = function() {};
			var n = $.extend(!0, {
					H5Name: "",
					clientName: "",
					clientID: {
						meitu: ""
					},
					redirectUrl: t.path.home,
					onAuth: function() {}
				}, t.options.auth),
				o = "https://applet.meitu.com/" + n.clientName + "/" + n.H5Name + "/",
				a = encodeURIComponent(o + "callback_meitu?access_token="),
				s = {
					client_id: n.clientID.meitu,
					source_from: n.H5Name,
					route: "auto",
					client_callback: encodeURIComponent((0, i.getHomePage)() + "auth.html"),
					client_params: encodeURIComponent(JSON.stringify({
						redirectUrl: n.redirectUrl,
						userInfoApi: a
					}))
				};
			n.clientID.meitu && t.fetch(o + "me").then(function(i) {
				"1200" == i.status ? (t.logined = !0, n.success(i)) : (t.authorize = function(t) {
					t && (s.client_params = encodeURIComponent(JSON.stringify({
						redirectUrl: t,
						userInfoApi: a
					}))), location.href = e()
				}, n.auto && t.authorize())
			}).catch(function(t) {
				return console.log(t)
			})
		}
	}
}, function(t, e, n) {
	"use strict";

	function i(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(7),
		r = i(o),
		a = n(3),
		s = n(0),
		u = n(1),
		c = i(u);
	e.default = {
		priority: 1,
		init: function(t) {
			t.preload = a.preload, t.toast = s.toast, t.fetch = r.default, t.store = s.store, t.getQuery = s.getQuery, t.loading = (0, s.loading)(t.options.loadingEl), t.ua = c.default, t.path = {
				home: (0, s.getHomePage)(),
				dist: (0, s.getHomePage)() + "dist/",
				images: (0, s.getHomePage)() + "dist/images/",
				medias: (0, s.getHomePage)() + "dist/medias/",
				css: (0, s.getHomePage)() + "dist/css/",
				js: (0, s.getHomePage)() + "dist/js/"
			}, t.image = {}
		}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(8),
		o = n(0),
		r = n(1),
		a = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(r);
	e.default = {
		upload: {
			el: $(".js-upload-home")
		},
		once: function() {
			var t = this.app;
			$(".js-button-make").on("click", function() {
				t.track("按钮-首页", t.ua.Meiyan), t.to("result", {
					params: {
						test: 1
					}
				})
			}), $(".js-upload-home-wrap").on("tap", function() {
				var e = $("#inputName"),
					n = (0, o.trim)(e.val());
				if((0, o.track)("pageClick", {
						page_title: "活动首页",
						page_url: location.href,
						button_name: "上传照片按钮点击",
						target_url: ""
					}), 12 < (0, o.getByteLen)(n)) return t.toast("最多只能6个字哦~"), void e.focus()
			});
			var e = !1;
			document.querySelector("#inputName").addEventListener("compositionstart", function() {
				e = !0
			}), document.querySelector("#inputName").addEventListener("compositionend", function() {
				e = !1;
				var t = this.value;
				(0, o.getByteLen)(t) > 12 && (this.value = (0, o.subString1)(t, 12))
			}), document.querySelector("#inputName").addEventListener("input", function() {
				if(!e) {
					var t = this.value;
					(0, o.getByteLen)(t) > 12 && (this.value = (0, o.subString1)(t, 12))
				}
			}), $("#inputName").on("focus", function() {
				var t = document.getElementById("inputName");
				console.log("focus"), setTimeout(function() {
					a.default.Android && t.scrollIntoViewIfNeeded()
				}, 500)
			})
		},
		ready: function(t) {
			console.log(t.$route.params), $(".result-model").removeClass("visible"), $(".result-model > .bill-result").attr("src", ""), (0, o.trackPageView)({
				page_title: "活动首页"
			}), t.options.randomShareFunc(t), t.share.set({
				title: t.options.shareObj.title,
				description: t.options.shareObj.description,
				link: (0, o.getHomePage)(),
				imageUrl: (0, o.getHomePage)() + n(2)
			})
		},
		onBeforeUpload: function() {
			(0, o.trackPageView)({
				page_title: "处理图片loading"
			}), (0, o.track)("pageClick", {
				page_title: "活动首页",
				page_url: location.href,
				button_name: "开始上传",
				target_url: ""
			})
		},
		onUploadSuccess: function(t) {
			var e = this.app;
			e.image.origin = t.imageOrigin, console.log(t);
			var n = {
				parameter: {
					filterType: 1205,
					filterAlpha: 70,
					beautyAlpha: 70,
					virtualType: 3,
					rsp_media_type: "url"
				},
				media_info_list: [{
					media_data: t.imageOrigin,
					media_extra: {},
					media_profiles: {
						media_data_type: "url"
					}
				}],
				extra: {}
			};
			(0, i.filter)(JSON.stringify(n)).then(function(t) {
				console.log(t), (0, o.track)("pageClick", {
					page_title: "活动首页",
					page_url: location.href,
					button_name: "上传成功",
					target_url: ""
				}), e.image.effect = t.media_info_list[0].media_data, e.share.set({
					imageUrl: e.image.effect
				}), e.preload(t.media_info_list[0].media_data).done(function(t) {
					e.image.effectDOM = t, e.options.userName = $(".input-name input").val() || "", e.to("result", !0), setTimeout(function() {
						e.loading.hide()
					}, 600)
				})
			}).catch(function(t) {
				console.log("出错了", t), e.loading.hide(), e.toast(t.message.response)
			})
		},
		onUploadFailure: function() {
			this.app.toast("图片上传失败"), this.app.loading.hide(), (0, o.track)("pageClick", {
				page_title: "活动首页",
				page_url: location.href,
				button_name: "上传失败",
				target_url: ""
			})
		}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(0);
	e.default = {
		activeIndex: 0,
		once: function(t) {
			var e = this;
			$(".next").on("click", function() {
				(0, i.track)("pageClick", {
					page_title: "动画页",
					page_url: location.href,
					button_name: "停留时长",
					target_url: "",
					duration: (e.activeIndex + 1) / 5 * 100 + "%"
				}), $(".swiper-slide").eq(e.activeIndex).css("opacity", 0), 6 <= e.activeIndex && ($(".swiper-slide").eq(e.activeIndex).attr("style", ""), $(".swiper-slide").eq(e.activeIndex).removeClass("active"), t.to("home", !0), e.activeIndex = 0), setTimeout(function() {
					$(".swiper-slide").eq(e.activeIndex).attr("style", ""), $(".swiper-slide").eq(e.activeIndex).removeClass("active"), 6 > e.activeIndex && $(".swiper-slide").eq(++e.activeIndex).addClass("active")
				}, 500)
			}), $(".js-jumpover").on("tap", function() {
				t.to("home", !0), e.activeIndex = 0, (0, i.track)("pageClick", {
					page_title: "动画页",
					page_url: location.href,
					button_name: "跳过",
					target_url: ""
				})
			})
		},
		ready: function() {
			(0, i.trackPageView)({
				page_title: "动画页"
			}), $(".swiper-slide").eq(this.activeIndex).css("opacity", 1), $(".swiper-slide").eq(this.activeIndex).addClass("active")
		}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(0);
	e.default = {
		upload: {
			el: $(".js-upload-make")
		},
		once: function(t) {
			$(".share .back-btn").on("tap", function() {
				(0, i.track)("pageClick", {
					page_title: "分享后回流页",
					page_url: location.href,
					button_name: "搭乘时光机",
					target_url: ""
				}), t.to("animation", !0)
			})
		},
		ready: function(t) {
			(0, i.trackPageView)({
				page_title: "分享后的回流页面"
			});
			var e = t.$route.params;
			$(".share .main-img").attr("src", e.shareImg || "")
		}
	}
}, function(t, e, n) {
	"use strict";

	function i(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var o = Math.abs,
		r = Math.floor;
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = n(1),
		s = i(a),
		u = n(5),
		c = i(u),
		l = n(66),
		p = i(l),
		h = n(67),
		d = i(h),
		f = n(0),
		m = n(8);
	e.default = {
		isGenarate: !1,
		upload: {
			el: $(".js-upload-result")
		},
		once: function(t) {
			var e = this;
			console.log(s.default.WeChat, "----", t.$route.params.utm_source), $(".result .back-btn").on("click", function() {
				t.to("home", !0)
			}), $(".take-photo").on("click", function() {
				t.loading.show(), e.generateBill(t, function() {
					$(".result-model").addClass("visible")
				})
			}), $(".js-result-model-close").on("click", function() {
				$(".result-model").removeClass("visible"), $(".result-model > .bill-result").attr("src", "")
			}), $(".bill-result").on("long", ".j_scale-img", function() {});
			var n;
			$(".bill-result").on("touchstart", ".j_scale-img", function() {
				var e = $(this).attr("src");
				e && (n = setTimeout(function() {
					(s.default.Meipai || s.default.Weibo || s.default.Facebook || /(line\/)/i.test(navigator.userAgent) || "mykp" === t.$route.params.utm_source) && ($("#js-imgview").addClass("show"), $("#js-imgview img").attr("src", e), t.toast("请截图保存~", 2e3)), $(this).hasClass("") && t.track("长按保存", "")
				}, 800))
			}).bind("touchend", ".j_scale-img", function() {
				clearTimeout(n)
			}), $("#js-imgview").on("click", function() {
				$(this).removeClass("show")
			});
			var i = new p.default(".touch-mask");
			this.transform = {
				x: 0,
				y: 0
			}, $(".change-btn").on("click", function() {
				(0, f.track)("pageClick", {
					page_title: "结果页",
					page_url: location.href,
					button_name: "换张照片按钮点击",
					target_url: ""
				})
			}), i.on("drag", function(t) {
				if(e.isGenarate = !1, !!e.moveable) return e.direction ? e.transform.x += t.delta.deltaX : e.transform.y += t.delta.deltaY, 0 < e.transform.y ? void(e.transform.y = 0) : 0 < e.transform.x ? void(e.transform.x = 0) : (console.log(o(e.transform.y), o(e.transform.x), e.diff), o(e.transform.y) > e.diff && (e.transform.y = 1 - e.diff), o(e.transform.x) >= e.diff && (e.transform.x = 1 - e.diff), console.log(e.transform), void $(".js-image-result").css({
					transform: "translate(" + e.transform.x + "px," + e.transform.y + "px)",
					"-webkit-transform": "translate(" + e.transform.x + "px," + e.transform.y + "px)"
				}))
			})
		},
		randomText: function() {
			var t = parseInt(10 * Math.random());
			(0, f.trackPageView)({
				page_title: "结果页",
				wenan: t + 1
			}), $(".result .bill-text").attr("src", window.location.origin + window.location.pathname.replace("index.html", "") + "dist/images/text/" + (t + 1) + ".png"), this.textImg = t + 1
		},
		ready: function(t) {
			var e = this;
			(0, f.trackPageView)({
				page_title: "结果页"
			}), this.isGenarate = !1, this.randomText(), setTimeout(function() {
				$(".Widget.remind").addClass("show"), setTimeout(function() {
					$(".Widget.remind").removeClass("show")
				}, 2500)
			}, 3e3);
			var i = t.$route.params,
				o = t.image.effect || i.effect;
			this.resultImg = o;
			var r = "";
			for(var a in t.options.userName) {
				var u = "";
				/^[a-z0-9]+$/.test(t.options.userName[a]) && !/^[iljmw]+$/.test(t.options.userName[a]) ? u = "padding-left: 2px" : /^[ilj]+$/.test(t.options.userName[a]) && (u = "padding-left: 4px"), r += '<div style="' + u + '">' + t.options.userName[a] + "</div>"
			}
			$(".main-img .name > .name-container").html(r);
			var c = $(".js-image-result");
			if(!o) return void t.to("home", !0);
			var l = new Image;
			this.moveable = !1, l.onload = function() {
				e.imageOnLoad(l)
			}, l.src = o, c.attr("src", o), $(".download .js-button-share").off("click").on("click", function() {
				"result" === t.$route.params.route ? ((0, f.track)("pageClick", {
					page_title: "结果页",
					page_url: location.href,
					button_name: "分享按钮点击",
					target_url: ""
				}), e.isGenarate ? s.default.Meiyan ? e.sharePhoto() : t.share.callShare() : (t.loading.show(), e.generateBill(t, function() {
					t.loading.hide(), s.default.Meiyan ? e.sharePhoto() : t.share.callShare()
				}))) : (t.share.set({
					title: t.options.shareObj.title,
					description: t.options.shareObj.description,
					link: "" + t.path.home,
					imageUrl: (0, f.getHomePage)() + n(2)
				}), t.share.callShare())
			})
		},
		sharePhoto: function() {
			var t = this.app.options.resImg;
			console.log("sharephoto", t), WebviewJsBridge.saveShareImage(t), (0, f.nativeCall)("sharePhoto", {
				type: 1,
				title: "我在BeautyCam美颜相机上 搭乘#后来时光机#，看见了后来的自己。不信你也来试试？",
				image: t,
				saveAlbum: !1
			}, function(t) {
				var e = t.data && t.data.type;
				e && (0, f.track)("campaignShare", {
					page_title: "结果页",
					page_url: location.href,
					button_name: "分享",
					target_url: "",
					share_channel: e
				})
			})
		},
		imageOnLoad: function(t) {
			var e = $(".result .main-img"),
				n = e.width(),
				i = e.height();
			this.transform.ratio = t.width / t.height, console.log(t.width, t.height, n, i), t.width / t.height < n / i ? (this.direction = 0, this.diff = r(t.height * n / t.width - i), this.distance = r((t.height * n / t.width - i) / 2), this.transform.y = -this.distance, this.transform.x = 0, $(".js-image-result").css({
				width: "100%",
				height: "auto",
				transform: "translate(0," + -this.distance + "px)",
				"-webkit-transform": "translate(0," + -this.distance + "px)",
				top: 0,
				left: 0
			})) : (this.direction = 1, this.diff = r(t.width * i / t.height - n), this.distance = r((t.width * i / t.height - n) / 2), this.transform.x = -this.distance, this.transform.y = 0, $(".js-image-result").css({
				height: "100%",
				width: "auto",
				transform: "translate(" + -this.distance + "px,0)",
				"-webkit-transform": "translate(" + -this.distance + "px,0)",
				top: 0,
				left: 0
			})), this.moveable = !0
		},
		generateBill: function(t, e) {
			var i = this,
				o = this,
				r = $(".result .main-img"),
				a = r.width(),
				s = r.height(),
				u = s / 1620;
			if(this.resultImg) {
				if(this.isGenarate) return t.loading.hide(), void e();
				var l = parseInt($(".bill .top").height() / u),
					p = new d.default({
						width: 1500,
						height: 2050,
						backgroundColor: "#fff"
					}),
					h = {
						pos: {
							x: this.transform.x / (a / 1500),
							y: parseInt(this.transform.y / u) + l - 1
						}
					};
				console.log(l, h), h.width = 0 == this.direction ? 1501 : 1620 * this.transform.ratio, console.log(this.transform, h);
				var f = new Image;
				f.onload = function() {
					console.log(f.width), p.add(i.resultImg, h).add(n(4), {}).add(f, {
						pos: {
							width: f.width,
							x: 0,
							y: 0
						}
					});
					var r = 1366,
						a = 0;
					for(var s in t.options.userName) /^[a-zA-Z0-9]+$/.test(t.options.userName[s]) && !/^[ilj]+$/.test(t.options.userName[s]) ? r = 1368 : /^[ilj]+$/.test(t.options.userName[s]) && (r = 1370), a = l + 40 + 74 * parseInt(s), p.text(t.options.userName[s], {
						width: "64px",
						align: "center",
						pos: {
							x: r,
							y: l + 40 + 74 * s + 200
						},
						normalStyle: {
							color: "#000",
							font: "64px Arial,sans-serif",
							shadow: {
								color: "rgba(0,0,0,0.3)",
								blur: 4,
								offsetX: 0,
								offsetY: 1
							}
						}
					});
					p.text("<s></s>", {
						width: "42px",
						align: "center",
						pos: {
							x: 1377,
							y: a + 100
						},
						smallStyle: {
							font: " 42px SCSongti-Regular",
							color: "#fff",
							shadow: {
								color: "rgba(0,0,0,0.3)",
								blur: 4,
								offsetX: 0,
								offsetY: 1
							}
						}
					}).draw({
						quality: 1,
						success: function(n) {
							console.log("draw success", n), new c.default({
								width: 1e3,
								quality: 100
							}).up(n, function(n) {
								o.isGenarate = !0, t.options.randomShareFunc(t), t.share.set({
									title: t.options.shareObj.title,
									description: t.options.shareObj.description,
									link: t.path.home + "#route=share&shareImg=" + n.img,
									imageUrl: n.img
								}), t.options.resImg = n.img, t.preload(n.img).done(function() {
									$(".bill-result").html('<img class="j_scale-img" src="' + n.img + '" />'), t.loading.hide(), void 0 !== e && e()
								})
							}, function(e) {
								t.loading.hide(), console.log(e)
							})
						}
					})
				}, f.src = window.location.origin + window.location.pathname.replace("index.html", "") + "dist/images/text/" + this.textImg + ".png"
			}
		},
		onBeforeUpload: function() {
			(0, f.trackPageView)({
				page_title: "处理图片loading"
			}), (0, f.track)("pageClick", {
				page_title: "结果页",
				page_url: location.href,
				button_name: "开始上传",
				target_url: ""
			})
		},
		onUploadSuccess: function(t) {
			var e = this,
				n = this.app;
			this.isGenarate = !1, n.image.origin = t.imageOrigin;
			var i = {
				parameter: {
					filterType: 1205,
					filterAlpha: 70,
					beautyAlpha: 70,
					virtualType: 3,
					rsp_media_type: "url"
				},
				media_info_list: [{
					media_data: t.imageOrigin,
					media_extra: {},
					media_profiles: {
						media_data_type: "url"
					}
				}],
				extra: {}
			};
			(0, m.filter)(JSON.stringify(i)).then(function(t) {
				(0, f.track)("pageClick", {
					page_title: "结果页",
					page_url: location.href,
					button_name: "上传成功",
					target_url: ""
				}), n.image.effect = t.media_info_list[0].media_data, e.resultImg = n.image.effect, n.preload(t.media_info_list[0].media_data).done(function(t) {
					n.image.effectDOM = t, e.randomText();
					var i = $(".result .main-img"),
						o = $(".js-image-result");
					i.width(), i.height();
					e.imageOnLoad(t), o.attr("src", n.image.effect), setTimeout(function() {
						n.loading.hide()
					}, 600)
				})
			}).catch(function(t) {
				console.log("出错了", t), n.loading.hide(), n.toast(t.message.response)
			})
		},
		onUploadFailure: function() {
			this.app.toast("图片上传失败"), this.app.loading.hide(), (0, f.track)("pageClick", {
				page_title: "结果页",
				page_url: location.href,
				button_name: "上传失败",
				target_url: ""
			})
		}
	}
}, function(t, e) {
	"use strict";

	function n(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function i() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
		return this instanceof i ? (this.use = {
			drag: !1,
			pinch: !1,
			rotate: !1,
			singlePinch: !1,
			singleRotate: !1
		}, this.operator = this.el = u.getEl(t), this.draging = this.pinching = this.rotating = this.singlePinching = this.singleRotating = !1, this.fingers = 0, this.startScale = 1, this.startPoint = {}, this.secondPoint = {}, this.pinchStartLength = null, this.singlePinchStartLength = null, this.vector1 = {}, this.singleBasePoint = {}, this._driveBus(), void this._bind()) : new i(t)
	}
	var o = Math.PI,
		r = Math.round;
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		s = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(t) {
			return void 0 === t ? "undefined" : a(t)
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
		},
		u = {
			getLength: function(t) {
				return "object" === (void 0 === t ? "undefined" : s(t)) ? Math.sqrt(t.x * t.x + t.y * t.y) : void console.error("getLength error!")
			},
			getAngle: function(t, e) {
				if("object" !== (void 0 === t ? "undefined" : s(t)) || "object" !== (void 0 === e ? "undefined" : s(e))) return void console.error("getAngle error!");
				var n, i, r = 0 < t.x * e.y - e.x * t.y ? 1 : -1,
					a = this.getLength(t),
					u = this.getLength(e),
					c = a * u;
				return 0 == c ? 0 : (n = t.x * e.x + t.y * e.y, i = n / c, 1 < i && (i = 1), -1 > i && (i = -1), Math.acos(i) * r * 180 / o)
			},
			getBasePoint: function(t) {
				if(!t) return {
					x: 0,
					y: 0
				};
				var e = this.getOffset(t),
					n = e.left + t.getBoundingClientRect().width / 2,
					i = e.top + t.getBoundingClientRect().width / 2;
				return {
					x: r(n),
					y: r(i)
				}
			},
			extend: function(t, e) {
				for(var n in e) e.hasOwnProperty(n) && ("object" != s(e[n]) || e[n] instanceof Node ? t[n] = e[n] : ("object" !== s(t[n]) && (t[n] = {}), this.extend(t[n], e[n])));
				return t
			},
			getVector: function(t, e) {
				return "object" !== (void 0 === t ? "undefined" : s(t)) || "object" !== (void 0 === e ? "undefined" : s(e)) ? void console.error("getvector error!") : {
					x: r(t.x - e.x),
					y: r(t.y - e.y)
				}
			},
			getPoint: function(t, e) {
				return t && t.touches[e] ? {
					x: r(t.touches[e].pageX),
					y: r(t.touches[e].pageY)
				} : void console.error("getPoint error!")
			},
			getOffset: function(t) {
				t = "string" == typeof t ? document.querySelector(t) : t;
				var e = t.getBoundingClientRect();
				return {
					left: e.left + document.body.scrollLeft,
					top: e.top + document.body.scrollTop,
					width: t.offsetWidth,
					height: t.offsetHeight
				}
			},
			matrixTo: function(t) {
				var e = t.replace("matrix(", "").replace(")", "").split(","),
					n = e[0],
					i = e[1],
					r = 180 * Math.atan(i / n) / o,
					a = n / Math.cos(o / 180 * r);
				return {
					x: parseInt(e[4]),
					y: parseInt(e[5]),
					scale: a,
					rotate: r
				}
			},
			getUseName: function(t) {
				var e = t.replace("start", ""),
					n = -1 === e.indexOf("rotate") ? "end" : "nd";
				return e = e.replace(n, "")
			},
			domify: function(t) {
				var e = document.implementation.createHTMLDocument();
				return e.body.innerHTML = t, e.body.children
			},
			getEl: function(t) {
				if(!t) return void console.error("el error,there must be a el!");
				var e;
				if("string" == typeof t) e = document.querySelector(t);
				else {
					if(!(t instanceof Node)) return void console.error("el error,there must be a el!");
					e = t
				}
				return e
			},
			data: function(t, e) {
				return t = this.getEl(t), t.getAttribute("data-" + e)
			},
			include: function(t, e) {
				return !!t.indexOf && -1 !== t.indexOf(e)
			},
			getPos: function(t) {
				if(t) {
					t = this.getEl(t);
					var e, n = window.getComputedStyle(t, null),
						i = n.transform || n.webkitTransform;
					return e = window.getComputedStyle && "none" !== i ? this.matrixTo(i) : {
						x: 0,
						y: 0,
						scale: 1,
						rotate: 0
					}, JSON.parse(t.getAttribute("data-mtouch-status")) || e
				}
			}
		},
		c = function() {
			function t(t, e) {
				for(var n, i = 0; i < e.length; i++) n = e[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		l = function() {
			function t(e) {
				n(this, t), this.handlers = [], this.el = e
			}
			return c(t, [{
				key: "add",
				value: function(t) {
					return this.handlers.push(t), this
				}
			}, {
				key: "del",
				value: function(t) {
					var e = this;
					return t ? this.handlers.forEach(function(n, i) {
						n === t && e.handlers.splice(i, 1)
					}) : this.handlers = [], this
				}
			}, {
				key: "fire",
				value: function() {
					var t = this,
						e = arguments;
					if(this.handlers && 0 !== !this.handlers.length) return this.handlers.forEach(function(n) {
						"function" == typeof n && n.apply(t.el, e)
					}), this
				}
			}]), t
		}(),
		p = function() {
			function t(t, e) {
				var n, i = [],
					o = !0,
					r = !1;
				try {
					for(var a, s = t[Symbol.iterator](); !((o = (a = s.next()).done) || (i.push(a.value), e && i.length === e)); o = !0);
				} catch(t) {
					r = !0, n = t
				} finally {
					try {
						!o && s.return && s.return()
					} finally {
						if(r) throw n
					}
				}
				return i
			}
			return function(e, n) {
				if(Array.isArray(e)) return e;
				if(Symbol.iterator in Object(e)) return t(e, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		h = ["touchstart", "touchmove", "touchend", "drag", "dragstart", "dragend", "pinch", "pinchstart", "pinchend", "rotate", "rotatestart", "rotatend", "singlePinchstart", "singlePinch", "singlePinchend", "singleRotate", "singleRotatestart", "singleRotatend"],
		d = ["touchstart", "touchmove", "touchend", "touchcancel"];
	i.prototype._driveBus = function() {
		var t = this;
		h.forEach(function(e) {
			t[e] = new l(t.el)
		})
	}, i.prototype._bind = function() {
		var t = this;
		d.forEach(function(e) {
			var n = "touchcancel" == e ? "end" : e.replace("touch", "");
			t["_" + n + "_bind"] = t["_" + n].bind(t), t.el.addEventListener(e, t["_" + n + "_bind"], !1)
		})
	}, i.prototype.destroy = function() {
		var t = this;
		d.forEach(function(e) {
			var n = "touchcancel" == e ? "end" : e.replace("touch", "");
			t.el.removeEventListener(e, t["_" + n + "_bind"], !1)
		})
	}, i.prototype._start = function(t) {
		if(t.touches && "touchstart" === t.type) {
			if(this.fingers = t.touches.length, this.startPoint = u.getPoint(t, 0), this.singleBasePoint = u.getBasePoint(this.operator), 1 < this.fingers) this.secondPoint = u.getPoint(t, 1), this.vector1 = u.getVector(this.secondPoint, this.startPoint), this.pinchStartLength = u.getLength(this.vector1);
			else if(this.use.singlePinch) {
				var e = u.getVector(this.startPoint, this.singleBasePoint);
				this.singlePinchStartLength = u.getLength(e)
			}
			this.touchstart.fire({
				origin: t,
				eventType: "touchstart"
			})
		}
	}, i.prototype._move = function(t) {
		if(t.touches && "touchmove" === t.type) {
			var e, n, i, o, r, a = u.data(t.target, "singleButton"),
				s = t.touches.length,
				c = u.getPoint(t, 0);
			if(s < this.fingers) return this.startPoint = c, void(this.fingers = s);
			if(!(1 < s) || this.secondPoint && this.vector1 && this.pinchStartLength || (this.secondPoint = u.getPoint(t, 1), this.vector1 = u.getVector(this.secondPoint, this.startPoint), this.pinchStartLength = u.getLength(this.vector1)), 1 < s) {
				var l = u.getPoint(t, 1),
					p = u.getVector(l, c);
				this.use.pinch && (n = u.getLength(p), this._eventFire("pinch", {
					delta: {
						scale: n / this.pinchStartLength
					},
					origin: t
				}), this.pinchStartLength = n), this.use.rotate && (this._eventFire("rotate", {
					delta: {
						rotate: u.getAngle(this.vector1, p)
					},
					origin: t
				}), this.vector1 = p)
			} else this.use.singlePinch && a && (r = u.getVector(c, this.singleBasePoint), e = u.getLength(r), this._eventFire("singlePinch", {
				delta: {
					scale: e / this.singlePinchStartLength,
					deltaX: c.x - this.startPoint.x,
					deltaY: c.y - this.startPoint.y
				},
				origin: t
			}), this.singlePinchStartLength = e), this.use.singleRotate && a && (i = u.getVector(this.startPoint, this.singleBasePoint), o = u.getVector(c, this.singleBasePoint), this._eventFire("singleRotate", {
				delta: {
					rotate: u.getAngle(i, o)
				},
				origin: t
			}));
			this.use.drag && !a && this._eventFire("drag", {
				delta: {
					deltaX: c.x - this.startPoint.x,
					deltaY: c.y - this.startPoint.y
				},
				origin: t
			}), this.startPoint = c, this.touchmove.fire({
				eventType: "touchmove",
				origin: t
			}), t.preventDefault()
		}
	}, i.prototype._end = function(t) {
		var e = this;
		(t.touches || "touchend" === t.type || "touchcancel" === t.type) && (["pinch", "drag", "rotate", "singleRotate", "singlePinch"].forEach(function(n) {
			e._eventEnd(n, {
				origin: t
			})
		}), this.touchend.fire({
			eventType: "touchend",
			origin: t
		}))
	}, i.prototype._eventFire = function(t, e) {
		var n = t + "ing",
			i = t + "start";
		this[n] ? (e.eventType = t, this[t].fire(e)) : (e.eventType = i, this[i].fire(e), this[n] = !0)
	}, i.prototype._eventEnd = function(t, e) {
		var n, i = t + "ing";
		n = "rotate" == t || "singleRotate" == t ? t + "nd" : t + "end", this[i] && (e.eventType = n, this[n].fire(e), this[i] = !1)
	}, i.prototype._addButton = function(t) {
		var e, n = u.domify("<div class=\"mtouch-singleButton\" data-singleButton='true' style='position:absolute;right:-15px;bottom: -15px;width:30px;height: 30px;background-size: 100% 100%;'></div>"),
			i = p(n, 1),
			o = i[0];
		t.appendChild(o), t.setAttribute("data-mtouch-addButton", !0), getComputedStyle && "static" === window.getComputedStyle(t, null).position && (e = t.style || "", t.style = e + "position:relative")
	}, i.prototype.switch = function(t) {
		var e, n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
		return t ? (this.operator = e = u.getEl(t), void(!u.data(e, "mtouch-addButton") && (this.use.singleRotate || this.use.singlePinch) && n && this._addButton(e))) : void(this.operator = this.el)
	}, i.prototype.on = function(t) {
		var e = this,
			n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {},
			i = arguments[2];
		return u.include(t, " ") ? t.split(" ").forEach(function(t) {
			e._on(t, n, i)
		}) : this._on(t, n, i), this
	}, i.prototype._on = function(t, e, n) {
		this.use[u.getUseName(t)] = !0, this[t].add(e), this.switch(n)
	}, i.prototype.off = function(t, e) {
		this[t].del(e)
	}, e.default = i
}, function(t, e) {
	"use strict";

	function n(t) {
		return this instanceof n ? (this.ops = u.extend({
			width: 500,
			height: 500,
			backgroundColor: ""
		}, t), this.canvas = null, this.ctx = null, this.queue = [], this.fn = {
			success: function() {},
			error: function() {}
		}, this.data = {
			textId: 0,
			text: {},
			bgConfig: null
		}, void this._init()) : new n(t)
	}
	var i = Math.abs,
		o = Math.PI,
		r = Math.round;
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		s = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(t) {
			return void 0 === t ? "undefined" : a(t)
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
		},
		u = {
			extend: function(t, e) {
				var n = this,
					i = this.isType(e);
				if("object" == i) this.forin(e, function(e, i) {
					var o = n.isType(i);
					"object" !== o && "array" !== o ? t[e] = i : ((n.isType(t[e]) !== o || null === t[e]) && (t[e] = "object" == o ? {} : []), n.extend(t[e], i))
				});
				else if("array" == i)
					for(var o = 0; o < e.length; o++) t[o] = e[o];
				else t = e;
				return t
			},
			loadImage: function(t, e, n) {
				var i = new Image;
				0 == t.indexOf("http") && (i.crossOrigin = "*"), i.onload = function() {
					e(i), setTimeout(function() {
						i = null
					}, 1e3)
				}, i.onerror = function() {
					n("img load error")
				}, i.src = t
			},
			isObject: function(t) {
				return this.isObjFunc(t, "Object")
			},
			isBoolean: function(t) {
				return this.isObjFunc(t, "Boolean")
			},
			isArr: function(t) {
				return this.isObjFunc(t, "Array")
			},
			getImage: function(t, e, n) {
				if("string" == typeof t) this.loadImage(t, function(t) {
					e(t)
				}, n);
				else {
					if("object" != (void 0 === t ? "undefined" : s(t))) return void console.log("add image error");
					e(t)
				}
			},
			forin: function(t, e) {
				for(var n in t) t.hasOwnProperty(n) && e(n, t[n])
			},
			isIos8: function() {
				var t = window.navigator.userAgent.toLowerCase(),
					e = /(iPhone|iPad|iPod|iOS)/gi.test(t),
					n = /(iPad)/gi.test(t);
				return !!e && (n ? 9 > t.match(/cpu os (\d*)/)[1] : 9 > t.match(/iphone os (\d*)/)[1])
			},
			deepCopy: function(t) {
				return JSON.parse(JSON.stringify(t))
			},
			isObjFunc: function(t, e) {
				return Object.prototype.toString.call(t) === "[object " + e + "]"
			},
			isType: function(t) {
				return Object.prototype.toString.call(t).split(" ")[1].replace("]", "").toLowerCase()
			}
		},
		c = Object.assign || function(t) {
			for(var e, n = 1; n < arguments.length; n++)
				for(var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t
		},
		l = function() {
			function t(t, e) {
				var n, i = [],
					o = !0,
					r = !1;
				try {
					for(var a, s = t[Symbol.iterator](); !((o = (a = s.next()).done) || (i.push(a.value), e && i.length === e)); o = !0);
				} catch(t) {
					r = !0, n = t
				} finally {
					try {
						!o && s.return && s.return()
					} finally {
						if(r) throw n
					}
				}
				return i
			}
			return function(e, n) {
				if(Array.isArray(e)) return e;
				if(Symbol.iterator in Object(e)) return t(e, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();
	n.prototype._init = function() {
		this.canvas = document.createElement("canvas"), this.canvas.width = this.ops.width, this.canvas.height = this.ops.height, this.ctx = this.canvas.getContext("2d"), this.ops.backgroundColor && this.setBgColor(this.ops.backgroundColor)
	}, n.prototype.background = function(t) {
		var e = this,
			n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
				type: "origin"
			};
		return t || this.data.bgConfig ? (t ? (n.image = t, this.data.bgConfig = n) : n = this.data.bgConfig, this.queue.push(function() {
			n.color && e.setBgColor(n.color), u.getImage(n.image, function(t) {
				e._background(t, n)
			}, e.fn.error)
		}), this) : void console.error("mcanvas error : the init background must has a image.")
	}, n.prototype.setBgColor = function(t) {
		this.ctx.fillStyle = t, this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
	}, n.prototype._getBgAlign = function(t, e, n, o) {
		var r;
		return "string" == typeof t ? "50%" == t || "center" == t ? r = i((e - n / o) / 2) : "100%" == t ? r = i(e - n / o) : "0%" == t && (r = 0) : r = "number" == typeof t ? t : 0, r
	}, n.prototype._background = function(t, e) {
		var n, i, o, r, a, s, u, c, l, p = this._getSize(t),
			h = p.iw,
			d = p.ih,
			f = h / d,
			m = this.canvas.width / this.canvas.height;
		switch(e.type) {
			case "crop":
				f > m ? (o = d * m, r = d, l = this.canvas.height / d) : (o = h, r = o / m, l = this.canvas.width / h), n = this._getBgAlign(e.left, h, this.canvas.width, l), i = this._getBgAlign(e.top, d, this.canvas.height, l), s = a = 0, c = this.canvas.height, u = this.canvas.width;
				break;
			case "contain":
				i = n = 0, o = h, r = d, f > m ? (u = this.canvas.width, c = u / f, a = e.left || 0, s = e.top || 0 == e.top ? e.top : (this.canvas.height - c) / 2) : (c = this.canvas.height, u = c * f, s = e.top || 0, a = e.left || 0 == e.left ? e.left : (this.canvas.width - u) / 2);
				break;
			case "origin":
				this.canvas.width = h, this.canvas.height = d, n = i = 0, o = h, r = d, a = s = 0, u = this.canvas.width, c = this.canvas.height;
				break;
			default:
				return void console.error("mcanvas error:background type error!")
		}
		this.ctx.drawImage(t, n, i, o, r, a, s, u, c), this._next()
	}, n.prototype.rect = function(t) {
		var e = this;
		return this.queue.push(function() {
			var n = t.fillColor,
				i = void 0 === n ? "#fff" : n,
				o = t.strokeColor,
				r = void 0 === o ? i : o,
				a = t.strokeWidth,
				s = void 0 === a ? 0 : a,
				u = e.canvas.width,
				c = e.canvas.height,
				l = e._get(u, 0, t.width || 0, "pos") - 2 * s,
				p = e._get(c, 0, t.height || 0, "pos") - 2 * s,
				h = e._get(u, l, t.x || 0, "pos") + s / 2,
				d = e._get(c, p, t.y || 0, "pos") + s / 2;
			e.ctx.lineWidth = s, e.ctx.fillStyle = i, e.ctx.strokeStyle = r, e.ctx.beginPath(), e.ctx.strokeRect(h, d, l, p), e.ctx.fillRect(h, d, l, p), e.ctx.closePath(), e._resetCtx()._next()
		}), this
	}, n.prototype.circle = function(t) {
		var e = this;
		return this.queue.push(function() {
			var n = t.fillColor,
				i = void 0 === n ? "#fff" : n,
				r = t.strokeColor,
				a = void 0 === r ? i : r,
				s = t.strokeWidth,
				u = void 0 === s ? 0 : s,
				c = e.canvas.width,
				l = e.canvas.height,
				p = e._get(c, 0, t.r || 0, "pos") - 2 * u,
				h = e._get(c, 2 * p, t.x || 0, "pos") + u / 2 + p,
				d = e._get(l, 2 * p, t.y || 0, "pos") + u / 2 + p;
			e.ctx.beginPath(), e.ctx.arc(h, d, p, 0, 2 * o, !1), e.ctx.fillStyle = i, e.ctx.fill(), e.ctx.strokeStyle = a, e.ctx.lineWidth = u, e.ctx.stroke(), e.ctx.closePath(), e._resetCtx()._next()
		}), this
	}, n.prototype._resetCtx = function() {
		return this.ctx.fillStyle = null, this.ctx.strokeStyle = null, this.ctx.lineWidth = 0, this.ctx.shadowColor = null, this.ctx.shadowBlur = 0, this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this
	}, n.prototype.watermark = function() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
			e = arguments[1];
		if(!t) return void console.error("mcanvas error : there is not image of watermark.");
		var n = e.width,
			i = void 0 === n ? "40%" : n,
			o = e.pos,
			r = void 0 === o ? "rightbottom" : o,
			a = e.margin,
			s = void 0 === a ? 20 : a,
			u = {
				x: 0,
				y: 0,
				scale: 1,
				rotate: 0
			};
		switch(r) {
			case "leftTop":
				u.x = "left:" + s, u.y = "top:" + s;
				break;
			case "leftBottom":
				u.x = "left:" + s, u.y = "bottom:" + s;
				break;
			case "rightTop":
				u.x = "right:" + s, u.y = "top:" + s;
				break;
			case "rightBottom":
				u.x = "right:" + s, u.y = "bottom:" + s
		}
		return this.add(t, {
			width: i,
			pos: u
		}), this
	}, n.prototype.add = function() {
		var t = this,
			e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
			n = arguments[1],
			i = {
				width: "100%",
				crop: {
					x: 0,
					y: 0,
					width: "100%",
					height: "100%"
				},
				pos: {
					x: 0,
					y: 0,
					scale: 1,
					rotate: 0
				}
			};
		return u.isArr(e) || (e = [{
			image: e,
			options: n
		}]), e.forEach(function(e) {
			t.queue.push(function() {
				u.getImage(e.image, function(n) {
					t._add(n, t._handleOps(u.extend(i, e.options), n))
				}, t.fn.error)
			})
		}), this
	}, n.prototype._add = function(t, e) {
		0 == e.width && console.warn("mcanvas warn: the width of mc-element is zero");
		var n, i, o, a, s, c, p, h, d, f, m = this._getSize(t),
			g = m.iw,
			y = m.ih,
			v = e.crop,
			A = v.x,
			b = v.y,
			w = v.width,
			x = v.height,
			k = w / x,
			S = document.createElement("canvas"),
			_ = S.getContext("2d"),
			C = g > y ? g / y : y / g,
			P = 5 < 1.4 * C ? 5 : 1.4 * C;
		S.width = w * P, S.height = x * P;
		var I;
		if(u.isIos8() && (2096 < S.width || 2096 < S.height) ? I = 1 < k ? 2096 / S.width : 2096 / S.height : (4096 < S.width || 4096 < S.height) && (I = 1 < k ? 4096 / S.width : 4096 / S.height), s = -r(w / 2), c = -r(x / 2), p = w, h = r(w / k), I) {
			var j = [S.width, S.height, s, c, p, h].map(function(t) {
					return r(t * I)
				}),
				T = l(j, 6);
			S.width = T[0], S.height = T[1], s = T[2], c = T[3], p = T[4], h = T[5]
		}
		_.translate(S.width / 2, S.height / 2), _.rotate(e.pos.rotate), _.drawImage(t, A, b, w, x, s, c, p, h), o = e.width * P, a = o / k, d = (P - 1) * e.width / 2, f = d / k, n = e.pos.x + o * (1 - e.pos.scale) / 2 - d, i = e.pos.y + a * (1 - e.pos.scale) / 2 - f, o *= e.pos.scale, a *= e.pos.scale, this.ctx.drawImage(S, n, i, o, a), S = _ = null, this._next()
	}, n.prototype._getSize = function(t) {
		var e, n;
		return "IMG" === t.tagName ? (e = t.naturalWidth, n = t.naturalHeight) : "CANVAS" === t.tagName ? (e = t.width, n = t.height) : (e = t.offsetWidth, n = t.offsetHeight), {
			iw: e,
			ih: n
		}
	}, n.prototype._handleOps = function(t, e) {
		var n, i, r = this.canvas.width,
			a = this.canvas.height,
			s = this._getSize(e),
			u = s.iw,
			c = s.ih,
			l = this._get(r, u, t.width, "pos"),
			p = t.crop,
			h = p.x,
			d = p.y,
			f = p.width,
			m = p.height,
			g = {};
		g.width = this._get(r, u, f, "crop"), g.height = this._get(a, c, m, "crop"), g.x = this._get(u, g.width, h, "crop"), g.y = this._get(c, g.height, d, "crop"), g.x > u && (g.x = u), g.y > c && (g.y = c), n = u - g.x, i = c - g.y, g.width > n && (g.width = n), g.height > i && (g.height = i);
		var y = t.pos,
			v = y.x,
			A = y.y,
			b = y.rotate,
			w = y.scale;
		return {
			width: l,
			crop: g,
			pos: {
				x: this._get(r, l, v, "pos"),
				y: this._get(a, l / (u / c), A, "pos"),
				scale: w,
				rotate: parseFloat(b) * o / 180
			}
		}
	}, n.prototype.text = function() {
		var t = this,
			e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
			n = arguments[1],
			i = "helvetica neue,hiragino sans gb,Microsoft YaHei,arial,tahoma,sans-serif",
			o = this.canvas.width / 20;
		return this.queue.push(function() {
			var r = {
					color: "#000",
					type: "fill",
					lineWidth: 1,
					shadow: {
						color: null,
						blur: 0,
						offsetX: 0,
						offsetY: 0
					}
				},
				a = {
					width: 300,
					align: "left",
					smallStyle: c({
						font: .8 * o + "px " + i,
						lineHeight: .9 * o
					}, u.deepCopy(r)),
					normalStyle: c({
						font: o + "px " + i,
						lineHeight: 1.1 * o,
						type: "fill"
					}, u.deepCopy(r)),
					largeStyle: c({
						font: 1.3 * o + "px " + i,
						lineHeight: 1.4 * o
					}, u.deepCopy(r)),
					pos: {
						x: 0,
						y: 0
					}
				};
			a = u.extend(a, n), t._text(t._parse(e), a), t._next()
		}), this
	}, n.prototype._parse = function(t) {
		for(var e, n = t.split(/<s>|<b>/), i = [], o = 0; o < n.length; o++)
			if(e = n[o], /<\/s>|<\/b>/.test(e)) {
				var r = /<\/s>/.test(e) ? "</s>" : "</b>",
					a = /<\/s>/.test(e) ? "small" : "large",
					s = n[o].split(r);
				i.push({
					type: a,
					text: s[0]
				}), s[1] && i.push({
					type: "normal",
					text: s[1]
				})
			} else n[o] && i.push({
				text: n[o],
				type: "normal"
			});
		return i
	}, n.prototype._text = function(t, e) {
		var n = this;
		this.data.textId++, this.data.text[this.data.textId] = {}, e.width = this._get(this.canvas.width, 0, e.width, "pos");
		var i, o = 1,
			r = 0,
			a = function(t, e) {
				var n, i = 0;
				return t.forEach(function(t) {
					(n = e[t.type + "Style"].lineHeight) > i && (i = n)
				}), i
			}(t, e),
			s = this._get(this.canvas.width, e.width, e.pos.x, "pos"),
			c = this._get(this.canvas.height, 0, e.pos.y, "pos") + a;
		this.data.text[this.data.textId][o] = {
			data: [],
			lineWidth: 0
		}, t.forEach(function(t) {
			i = e[t.type + "Style"], n.ctx.font = i.font;
			var u = n.ctx.measureText(t.text).width,
				l = t.text.replace(/<br>/g, "|");
			if(r + u > e.width || -1 !== l.indexOf("|"))
				for(var p, h = 0, d = l.length; h < d; h++) p = l[h], u = n.ctx.measureText(p).width, !((r + u > e.width || "|" == p) && (r = 0, s = n._get(n.canvas.width, e.width, e.pos.x, "pos"), c += a, o += 1, n.data.text[n.data.textId][o] = {
					data: [],
					lineWidth: 0
				}, "|" == p)) && (n.data.text[n.data.textId][o].data.push({
					context: p,
					x: s,
					y: c,
					style: i,
					width: u
				}), r += u, s += u, n.data.text[n.data.textId][o].lineWidth = r);
			else n.data.text[n.data.textId][o].data.push({
				context: l,
				x: s,
				y: c,
				style: i,
				width: u
			}), r += u, s += u, n.data.text[n.data.textId][o].lineWidth = r
		}), console.log(this.data.text), u.forin(this.data.text[this.data.textId], function(t, i) {
			var o = 0;
			i.lineWidth < e.width && ("center" == e.align ? o = (e.width - i.lineWidth) / 2 : "right" == e.align && (o = e.width - i.lineWidth)), i.data.forEach(function(t) {
				t.x += o, n._fillText(t)
			})
		})
	}, n.prototype._fillText = function(t) {
		var e = t.context,
			n = t.x,
			i = t.y,
			o = t.style,
			r = o.align,
			a = o.lineWidth,
			s = o.shadow,
			c = s.color,
			l = s.blur,
			p = s.offsetX,
			h = s.offsetY;
		if(this.ctx.font = o.font, this.ctx.textAlign = r, this.ctx.textBaseline = "alphabetic", this.ctx.lineWidth = a, this.ctx.shadowColor = c, this.ctx.shadowBlur = l, this.ctx.shadowOffsetX = p, this.ctx.shadowOffsetY = h, o.gradient) {
			var d, f, m, g, y = o.gradient,
				v = y.type,
				A = y.colorStop;
			1 == v ? (d = n, f = i, m = n + t.width, g = i) : (d = n, f = i - o.lineHeight, m = n, g = i);
			var b = this.ctx.createLinearGradient(d, f, m, g),
				w = A.length || 0;
			u.forin(A, function(t, e) {
				b.addColorStop(1 / w * (+t + 1), e)
			}), this.ctx[o.type + "Style"] = b
		} else this.ctx[o.type + "Style"] = o.color;
		this.ctx[o.type + "Text"](e, n, i), this._resetCtx()
	}, n.prototype._get = function(t, e, n, i) {
		var o = n;
		if("string" == typeof n)
			if(-1 !== n.indexOf(":") && "pos" == i) {
				var a = n.split(":");
				switch(a[0]) {
					case "left":
					case "top":
						o = +a[1].replace("px", "");
						break;
					case "right":
					case "bottom":
						o = t - +a[1].replace("px", "") - e
				}
			} else o = -1 === n.indexOf("px") ? -1 === n.indexOf("%") ? "center" == n ? (t - e) / 2 : +n : "crop" == i ? e * +n.replace("%", "") / 100 : t * +n.replace("%", "") / 100 : +n.replace("px", "");
		return r(o)
	}, n.prototype.draw = function(t) {
		var e, n = this,
			i = {
				type: "jpg",
				quality: .9,
				success: function() {},
				error: function() {}
			};
		return "function" == typeof t ? i.success = t : (i = u.extend(i, t), "jpg" == i.type && (i.type = "jpeg")), this.fn.error = i.error, this.fn.success = function() {
			setTimeout(function() {
				e = n.canvas.toDataURL("image/" + i.type, i.quality), i.success(e)
			}, 0)
		}, this._next(), this
	}, n.prototype._next = function() {
		0 < this.queue.length ? this.queue.shift()() : this.fn.success()
	}, n.prototype.clear = function() {
		return this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this
	}, e.default = n
}, function(t, e, n) {
	//t.exports = n.p + "medias/music.mp3?352d8d27"
}]);
//# sourceMappingURL=app.js.map?71ced14d