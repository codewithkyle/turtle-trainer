(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {  true ? module.exports = e() : undefined; }(window, function () {
    return function (t) { var e = {}; function r(n) { if (e[n])
        return e[n].exports; var a = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports; } return r.m = t, r.c = e, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }); }, r.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e)
        return t; if (4 & e && "object" == typeof t && t && t.__esModule)
        return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
        for (var a in t)
            r.d(n, a, function (e) { return t[e]; }.bind(null, a)); return n; }, r.n = function (t) { var e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return r.d(e, "a", e), e; }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r.p = "", r(r.s = 34); }([function (t, e, r) {
            "use strict";
            var n = r(5);
            t.exports.FENGARI_AUTHORS = n.FENGARI_AUTHORS, t.exports.FENGARI_COPYRIGHT = n.FENGARI_COPYRIGHT, t.exports.FENGARI_RELEASE = n.FENGARI_RELEASE, t.exports.FENGARI_VERSION = n.FENGARI_VERSION, t.exports.FENGARI_VERSION_MAJOR = n.FENGARI_VERSION_MAJOR, t.exports.FENGARI_VERSION_MINOR = n.FENGARI_VERSION_MINOR, t.exports.FENGARI_VERSION_NUM = n.FENGARI_VERSION_NUM, t.exports.FENGARI_VERSION_RELEASE = n.FENGARI_VERSION_RELEASE, t.exports.luastring_eq = n.luastring_eq, t.exports.luastring_indexOf = n.luastring_indexOf, t.exports.luastring_of = n.luastring_of, t.exports.to_jsstring = n.to_jsstring, t.exports.to_luastring = n.to_luastring, t.exports.to_uristring = n.to_uristring;
            var a = r(3), u = r(2), s = r(7), o = r(17);
            t.exports.luaconf = a, t.exports.lua = u, t.exports.lauxlib = s, t.exports.lualib = o;
        }, function (t, e, r) {
            "use strict";
            var n, a, u;
            if (n = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function (t) { for (var e = 0, r = t.length, n = new Uint8Array(r); r > e;)
                n[e] = t[e++]; return n; }, "function" == typeof (new Uint8Array).indexOf)
                a = function (t, e, r) { return t.indexOf(e, r); };
            else {
                var s = [].indexOf;
                if (0 !== s.call(new Uint8Array(1), 0))
                    throw Error("missing .indexOf");
                a = function (t, e, r) { return s.call(t, e, r); };
            }
            u = "function" == typeof Uint8Array.of ? Uint8Array.of.bind(Uint8Array) : function () { return n(arguments); };
            var o = function (t) { return t instanceof Uint8Array; }, l = "cannot convert invalid utf8 to javascript string", i = ";,/?:@&=+$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,-_.!~*'()#".split("").reduce(function (t, e) { return t[e.charCodeAt(0)] = !0, t; }, {}), c = {}, f = function (t, e) { if ("string" != typeof t)
                throw new TypeError("to_luastring expects a javascript string"); if (e) {
                var r = c[t];
                if (o(r))
                    return r;
            } for (var a = t.length, u = Array(a), s = 0, l = 0; l < a; ++l) {
                var i = t.charCodeAt(l);
                if (i <= 127)
                    u[s++] = i;
                else if (i <= 2047)
                    u[s++] = 192 | i >> 6, u[s++] = 128 | 63 & i;
                else {
                    if (i >= 55296 && i <= 56319 && l + 1 < a) {
                        var f = t.charCodeAt(l + 1);
                        f >= 56320 && f <= 57343 && (l++, i = 1024 * (i - 55296) + f + 9216);
                    }
                    i <= 65535 ? (u[s++] = 224 | i >> 12, u[s++] = 128 | i >> 6 & 63, u[s++] = 128 | 63 & i) : (u[s++] = 240 | i >> 18, u[s++] = 128 | i >> 12 & 63, u[s++] = 128 | i >> 6 & 63, u[s++] = 128 | 63 & i);
                }
            } return u = n(u), e && (c[t] = u), u; };
            t.exports.luastring_from = n, t.exports.luastring_indexOf = a, t.exports.luastring_of = u, t.exports.is_luastring = o, t.exports.luastring_eq = function (t, e) { if (t !== e) {
                var r = t.length;
                if (r !== e.length)
                    return !1;
                for (var n = 0; n < r; n++)
                    if (t[n] !== e[n])
                        return !1;
            } return !0; }, t.exports.to_jsstring = function (t, e, r, n) { if (!o(t))
                throw new TypeError("to_jsstring expects a Uint8Array"); r = void 0 === r ? t.length : Math.min(t.length, r); for (var a = "", u = void 0 !== e ? e : 0; u < r;) {
                var s = t[u++];
                if (s < 128)
                    a += String.fromCharCode(s);
                else if (s < 194 || s > 244) {
                    if (!n)
                        throw RangeError(l);
                    a += "�";
                }
                else if (s <= 223) {
                    if (u >= r) {
                        if (!n)
                            throw RangeError(l);
                        a += "�";
                        continue;
                    }
                    var i = t[u++];
                    if (128 != (192 & i)) {
                        if (!n)
                            throw RangeError(l);
                        a += "�";
                        continue;
                    }
                    a += String.fromCharCode(((31 & s) << 6) + (63 & i));
                }
                else if (s <= 239) {
                    if (u + 1 >= r) {
                        if (!n)
                            throw RangeError(l);
                        a += "�";
                        continue;
                    }
                    var c = t[u++];
                    if (128 != (192 & c)) {
                        if (!n)
                            throw RangeError(l);
                        a += "�";
                        continue;
                    }
                    var f = t[u++];
                    if (128 != (192 & f)) {
                        if (!n)
                            throw RangeError(l);
                        a += "�";
                        continue;
                    }
                    var _ = ((15 & s) << 12) + ((63 & c) << 6) + (63 & f);
                    if (_ <= 65535)
                        a += String.fromCharCode(_);
                    else {
                        var p = 55296 + ((_ -= 65536) >> 10), v = _ % 1024 + 56320;
                        a += String.fromCharCode(p, v);
                    }
                }
                else {
                    if (u + 2 >= r) {
                        if (!n)
                            throw RangeError(l);
                        a += "�";
                        continue;
                    }
                    var h = t[u++];
                    if (128 != (192 & h)) {
                        if (!n)
                            throw RangeError(l);
                        a += "�";
                        continue;
                    }
                    var L = t[u++];
                    if (128 != (192 & L)) {
                        if (!n)
                            throw RangeError(l);
                        a += "�";
                        continue;
                    }
                    var d = t[u++];
                    if (128 != (192 & d)) {
                        if (!n)
                            throw RangeError(l);
                        a += "�";
                        continue;
                    }
                    var A = ((7 & s) << 18) + ((63 & h) << 12) + ((63 & L) << 6) + (63 & d), g = 55296 + ((A -= 65536) >> 10), T = A % 1024 + 56320;
                    a += String.fromCharCode(g, T);
                }
            } return a; }, t.exports.to_uristring = function (t) { if (!o(t))
                throw new TypeError("to_uristring expects a Uint8Array"); for (var e = "", r = 0; r < t.length; r++) {
                var n = t[r];
                i[n] ? e += String.fromCharCode(n) : e += "%" + (n < 16 ? "0" : "") + n.toString(16);
            } return e; }, t.exports.to_luastring = f, t.exports.from_userstring = function (t) { if (!o(t)) {
                if ("string" != typeof t)
                    throw new TypeError("expects an array of bytes or javascript string");
                t = f(t);
            } return t; };
            var _ = f("Lua");
            t.exports.LUA_SIGNATURE = _, t.exports.LUA_VERSION_MAJOR = "5", t.exports.LUA_VERSION_MINOR = "3", t.exports.LUA_VERSION_NUM = 503, t.exports.LUA_VERSION_RELEASE = "4", t.exports.LUA_VERSION = "Lua 5.3", t.exports.LUA_RELEASE = "Lua 5.3.4", t.exports.LUA_COPYRIGHT = "Lua 5.3.4  Copyright (C) 1994-2017 Lua.org, PUC-Rio", t.exports.LUA_AUTHORS = "R. Ierusalimschy, L. H. de Figueiredo, W. Celes";
            var p = { LUA_TNONE: -1, LUA_TNIL: 0, LUA_TBOOLEAN: 1, LUA_TLIGHTUSERDATA: 2, LUA_TNUMBER: 3, LUA_TSTRING: 4, LUA_TTABLE: 5, LUA_TFUNCTION: 6, LUA_TUSERDATA: 7, LUA_TTHREAD: 8, LUA_NUMTAGS: 9 };
            p.LUA_TSHRSTR = 0 | p.LUA_TSTRING, p.LUA_TLNGSTR = 16 | p.LUA_TSTRING, p.LUA_TNUMFLT = 0 | p.LUA_TNUMBER, p.LUA_TNUMINT = 16 | p.LUA_TNUMBER, p.LUA_TLCL = 0 | p.LUA_TFUNCTION, p.LUA_TLCF = 16 | p.LUA_TFUNCTION, p.LUA_TCCL = 32 | p.LUA_TFUNCTION;
            var v = -r(3).LUAI_MAXSTACK - 1e3;
            t.exports.LUA_HOOKCALL = 0, t.exports.LUA_HOOKCOUNT = 3, t.exports.LUA_HOOKLINE = 2, t.exports.LUA_HOOKRET = 1, t.exports.LUA_HOOKTAILCALL = 4, t.exports.LUA_MASKCALL = 1, t.exports.LUA_MASKCOUNT = 8, t.exports.LUA_MASKLINE = 4, t.exports.LUA_MASKRET = 2, t.exports.LUA_MINSTACK = 20, t.exports.LUA_MULTRET = -1, t.exports.LUA_OPADD = 0, t.exports.LUA_OPBAND = 7, t.exports.LUA_OPBNOT = 13, t.exports.LUA_OPBOR = 8, t.exports.LUA_OPBXOR = 9, t.exports.LUA_OPDIV = 5, t.exports.LUA_OPEQ = 0, t.exports.LUA_OPIDIV = 6, t.exports.LUA_OPLE = 2, t.exports.LUA_OPLT = 1, t.exports.LUA_OPMOD = 3, t.exports.LUA_OPMUL = 2, t.exports.LUA_OPPOW = 4, t.exports.LUA_OPSHL = 10, t.exports.LUA_OPSHR = 11, t.exports.LUA_OPSUB = 1, t.exports.LUA_OPUNM = 12, t.exports.LUA_REGISTRYINDEX = v, t.exports.LUA_RIDX_GLOBALS = 2, t.exports.LUA_RIDX_LAST = 2, t.exports.LUA_RIDX_MAINTHREAD = 1, t.exports.constant_types = p, t.exports.lua_Debug = function t() { !function (t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }(this, t), this.event = NaN, this.name = null, this.namewhat = null, this.what = null, this.source = null, this.currentline = NaN, this.linedefined = NaN, this.lastlinedefined = NaN, this.nups = NaN, this.nparams = NaN, this.isvararg = NaN, this.istailcall = NaN, this.short_src = null, this.i_ci = null; }, t.exports.lua_upvalueindex = function (t) { return v - t; }, t.exports.thread_status = { LUA_OK: 0, LUA_YIELD: 1, LUA_ERRRUN: 2, LUA_ERRSYNTAX: 3, LUA_ERRMEM: 4, LUA_ERRGCMM: 5, LUA_ERRERR: 6 };
        }, function (t, e, r) {
            "use strict";
            var n = r(1), a = r(19), u = r(11), s = r(8), o = r(12);
            t.exports.LUA_AUTHORS = n.LUA_AUTHORS, t.exports.LUA_COPYRIGHT = n.LUA_COPYRIGHT, t.exports.LUA_ERRERR = n.thread_status.LUA_ERRERR, t.exports.LUA_ERRGCMM = n.thread_status.LUA_ERRGCMM, t.exports.LUA_ERRMEM = n.thread_status.LUA_ERRMEM, t.exports.LUA_ERRRUN = n.thread_status.LUA_ERRRUN, t.exports.LUA_ERRSYNTAX = n.thread_status.LUA_ERRSYNTAX, t.exports.LUA_HOOKCALL = n.LUA_HOOKCALL, t.exports.LUA_HOOKCOUNT = n.LUA_HOOKCOUNT, t.exports.LUA_HOOKLINE = n.LUA_HOOKLINE, t.exports.LUA_HOOKRET = n.LUA_HOOKRET, t.exports.LUA_HOOKTAILCALL = n.LUA_HOOKTAILCALL, t.exports.LUA_MASKCALL = n.LUA_MASKCALL, t.exports.LUA_MASKCOUNT = n.LUA_MASKCOUNT, t.exports.LUA_MASKLINE = n.LUA_MASKLINE, t.exports.LUA_MASKRET = n.LUA_MASKRET, t.exports.LUA_MINSTACK = n.LUA_MINSTACK, t.exports.LUA_MULTRET = n.LUA_MULTRET, t.exports.LUA_NUMTAGS = n.constant_types.LUA_NUMTAGS, t.exports.LUA_OK = n.thread_status.LUA_OK, t.exports.LUA_OPADD = n.LUA_OPADD, t.exports.LUA_OPBAND = n.LUA_OPBAND, t.exports.LUA_OPBNOT = n.LUA_OPBNOT, t.exports.LUA_OPBOR = n.LUA_OPBOR, t.exports.LUA_OPBXOR = n.LUA_OPBXOR, t.exports.LUA_OPDIV = n.LUA_OPDIV, t.exports.LUA_OPEQ = n.LUA_OPEQ, t.exports.LUA_OPIDIV = n.LUA_OPIDIV, t.exports.LUA_OPLE = n.LUA_OPLE, t.exports.LUA_OPLT = n.LUA_OPLT, t.exports.LUA_OPMOD = n.LUA_OPMOD, t.exports.LUA_OPMUL = n.LUA_OPMUL, t.exports.LUA_OPPOW = n.LUA_OPPOW, t.exports.LUA_OPSHL = n.LUA_OPSHL, t.exports.LUA_OPSHR = n.LUA_OPSHR, t.exports.LUA_OPSUB = n.LUA_OPSUB, t.exports.LUA_OPUNM = n.LUA_OPUNM, t.exports.LUA_REGISTRYINDEX = n.LUA_REGISTRYINDEX, t.exports.LUA_RELEASE = n.LUA_RELEASE, t.exports.LUA_RIDX_GLOBALS = n.LUA_RIDX_GLOBALS, t.exports.LUA_RIDX_LAST = n.LUA_RIDX_LAST, t.exports.LUA_RIDX_MAINTHREAD = n.LUA_RIDX_MAINTHREAD, t.exports.LUA_SIGNATURE = n.LUA_SIGNATURE, t.exports.LUA_TNONE = n.constant_types.LUA_TNONE, t.exports.LUA_TNIL = n.constant_types.LUA_TNIL, t.exports.LUA_TBOOLEAN = n.constant_types.LUA_TBOOLEAN, t.exports.LUA_TLIGHTUSERDATA = n.constant_types.LUA_TLIGHTUSERDATA, t.exports.LUA_TNUMBER = n.constant_types.LUA_TNUMBER, t.exports.LUA_TSTRING = n.constant_types.LUA_TSTRING, t.exports.LUA_TTABLE = n.constant_types.LUA_TTABLE, t.exports.LUA_TFUNCTION = n.constant_types.LUA_TFUNCTION, t.exports.LUA_TUSERDATA = n.constant_types.LUA_TUSERDATA, t.exports.LUA_TTHREAD = n.constant_types.LUA_TTHREAD, t.exports.LUA_VERSION = n.LUA_VERSION, t.exports.LUA_VERSION_MAJOR = n.LUA_VERSION_MAJOR, t.exports.LUA_VERSION_MINOR = n.LUA_VERSION_MINOR, t.exports.LUA_VERSION_NUM = n.LUA_VERSION_NUM, t.exports.LUA_VERSION_RELEASE = n.LUA_VERSION_RELEASE, t.exports.LUA_YIELD = n.thread_status.LUA_YIELD, t.exports.lua_Debug = n.lua_Debug, t.exports.lua_upvalueindex = n.lua_upvalueindex, t.exports.lua_absindex = a.lua_absindex, t.exports.lua_arith = a.lua_arith, t.exports.lua_atpanic = a.lua_atpanic, t.exports.lua_atnativeerror = a.lua_atnativeerror, t.exports.lua_call = a.lua_call, t.exports.lua_callk = a.lua_callk, t.exports.lua_checkstack = a.lua_checkstack, t.exports.lua_close = o.lua_close, t.exports.lua_compare = a.lua_compare, t.exports.lua_concat = a.lua_concat, t.exports.lua_copy = a.lua_copy, t.exports.lua_createtable = a.lua_createtable, t.exports.lua_dump = a.lua_dump, t.exports.lua_error = a.lua_error, t.exports.lua_gc = a.lua_gc, t.exports.lua_getallocf = a.lua_getallocf, t.exports.lua_getextraspace = a.lua_getextraspace, t.exports.lua_getfield = a.lua_getfield, t.exports.lua_getglobal = a.lua_getglobal, t.exports.lua_gethook = u.lua_gethook, t.exports.lua_gethookcount = u.lua_gethookcount, t.exports.lua_gethookmask = u.lua_gethookmask, t.exports.lua_geti = a.lua_geti, t.exports.lua_getinfo = u.lua_getinfo, t.exports.lua_getlocal = u.lua_getlocal, t.exports.lua_getmetatable = a.lua_getmetatable, t.exports.lua_getstack = u.lua_getstack, t.exports.lua_gettable = a.lua_gettable, t.exports.lua_gettop = a.lua_gettop, t.exports.lua_getupvalue = a.lua_getupvalue, t.exports.lua_getuservalue = a.lua_getuservalue, t.exports.lua_insert = a.lua_insert, t.exports.lua_isboolean = a.lua_isboolean, t.exports.lua_iscfunction = a.lua_iscfunction, t.exports.lua_isfunction = a.lua_isfunction, t.exports.lua_isinteger = a.lua_isinteger, t.exports.lua_islightuserdata = a.lua_islightuserdata, t.exports.lua_isnil = a.lua_isnil, t.exports.lua_isnone = a.lua_isnone, t.exports.lua_isnoneornil = a.lua_isnoneornil, t.exports.lua_isnumber = a.lua_isnumber, t.exports.lua_isproxy = a.lua_isproxy, t.exports.lua_isstring = a.lua_isstring, t.exports.lua_istable = a.lua_istable, t.exports.lua_isthread = a.lua_isthread, t.exports.lua_isuserdata = a.lua_isuserdata, t.exports.lua_isyieldable = s.lua_isyieldable, t.exports.lua_len = a.lua_len, t.exports.lua_load = a.lua_load, t.exports.lua_newstate = o.lua_newstate, t.exports.lua_newtable = a.lua_newtable, t.exports.lua_newthread = o.lua_newthread, t.exports.lua_newuserdata = a.lua_newuserdata, t.exports.lua_next = a.lua_next, t.exports.lua_pcall = a.lua_pcall, t.exports.lua_pcallk = a.lua_pcallk, t.exports.lua_pop = a.lua_pop, t.exports.lua_pushboolean = a.lua_pushboolean, t.exports.lua_pushcclosure = a.lua_pushcclosure, t.exports.lua_pushcfunction = a.lua_pushcfunction, t.exports.lua_pushfstring = a.lua_pushfstring, t.exports.lua_pushglobaltable = a.lua_pushglobaltable, t.exports.lua_pushinteger = a.lua_pushinteger, t.exports.lua_pushjsclosure = a.lua_pushjsclosure, t.exports.lua_pushjsfunction = a.lua_pushjsfunction, t.exports.lua_pushlightuserdata = a.lua_pushlightuserdata, t.exports.lua_pushliteral = a.lua_pushliteral, t.exports.lua_pushlstring = a.lua_pushlstring, t.exports.lua_pushnil = a.lua_pushnil, t.exports.lua_pushnumber = a.lua_pushnumber, t.exports.lua_pushstring = a.lua_pushstring, t.exports.lua_pushthread = a.lua_pushthread, t.exports.lua_pushvalue = a.lua_pushvalue, t.exports.lua_pushvfstring = a.lua_pushvfstring, t.exports.lua_rawequal = a.lua_rawequal, t.exports.lua_rawget = a.lua_rawget, t.exports.lua_rawgeti = a.lua_rawgeti, t.exports.lua_rawgetp = a.lua_rawgetp, t.exports.lua_rawlen = a.lua_rawlen, t.exports.lua_rawset = a.lua_rawset, t.exports.lua_rawseti = a.lua_rawseti, t.exports.lua_rawsetp = a.lua_rawsetp, t.exports.lua_register = a.lua_register, t.exports.lua_remove = a.lua_remove, t.exports.lua_replace = a.lua_replace, t.exports.lua_resume = s.lua_resume, t.exports.lua_rotate = a.lua_rotate, t.exports.lua_setallof = s.lua_setallof, t.exports.lua_setfield = a.lua_setfield, t.exports.lua_setglobal = a.lua_setglobal, t.exports.lua_sethook = u.lua_sethook, t.exports.lua_seti = a.lua_seti, t.exports.lua_setlocal = u.lua_setlocal, t.exports.lua_setmetatable = a.lua_setmetatable, t.exports.lua_settable = a.lua_settable, t.exports.lua_settop = a.lua_settop, t.exports.lua_setupvalue = a.lua_setupvalue, t.exports.lua_setuservalue = a.lua_setuservalue, t.exports.lua_status = a.lua_status, t.exports.lua_stringtonumber = a.lua_stringtonumber, t.exports.lua_toboolean = a.lua_toboolean, t.exports.lua_todataview = a.lua_todataview, t.exports.lua_tointeger = a.lua_tointeger, t.exports.lua_tointegerx = a.lua_tointegerx, t.exports.lua_tojsstring = a.lua_tojsstring, t.exports.lua_tolstring = a.lua_tolstring, t.exports.lua_tonumber = a.lua_tonumber, t.exports.lua_tonumberx = a.lua_tonumberx, t.exports.lua_topointer = a.lua_topointer, t.exports.lua_toproxy = a.lua_toproxy, t.exports.lua_tostring = a.lua_tostring, t.exports.lua_tothread = a.lua_tothread, t.exports.lua_touserdata = a.lua_touserdata, t.exports.lua_type = a.lua_type, t.exports.lua_typename = a.lua_typename, t.exports.lua_upvalueid = a.lua_upvalueid, t.exports.lua_upvaluejoin = a.lua_upvaluejoin, t.exports.lua_version = a.lua_version, t.exports.lua_xmove = a.lua_xmove, t.exports.lua_yield = s.lua_yield, t.exports.lua_yieldk = s.lua_yieldk, t.exports.lua_tocfunction = a.lua_tocfunction;
        }, function (t, e, r) {
            "use strict";
            var n = {}, a = r(1), u = a.LUA_VERSION_MAJOR, s = a.LUA_VERSION_MINOR, o = a.to_luastring;
            t.exports.LUA_PATH_SEP = ";";
            t.exports.LUA_PATH_MARK = "?";
            t.exports.LUA_EXEC_DIR = "!";
            var l = u + "." + s;
            t.exports.LUA_VDIR = l;
            t.exports.LUA_DIRSEP = "/";
            var i = "./lua/" + l + "/";
            t.exports.LUA_LDIR = i;
            var c = i;
            t.exports.LUA_JSDIR = c;
            var f = o(i + "?.lua;" + i + "?/init.lua;./?.lua;./?/init.lua");
            t.exports.LUA_PATH_DEFAULT = f;
            var _ = o(c + "?.js;" + c + "loadall.js;./?.js");
            t.exports.LUA_JSPATH_DEFAULT = _;
            var p = n.LUA_COMPAT_FLOATSTRING || !1, v = n.LUAI_MAXSTACK || 1e6, h = n.LUA_IDSIZE || 59, L = "%".concat("", "d"), d = n.LUAL_BUFFERSIZE || 8192, A = function (t, e) { for (var r = Math.min(3, Math.ceil(Math.abs(e) / 1023)), n = t, a = 0; a < r; a++)
                n *= Math.pow(2, Math.floor((e + a) / r)); return n; };
            t.exports.LUAI_MAXSTACK = v, t.exports.LUA_COMPAT_FLOATSTRING = p, t.exports.LUA_IDSIZE = h, t.exports.LUA_INTEGER_FMT = L, t.exports.LUA_INTEGER_FRMLEN = "", t.exports.LUA_MAXINTEGER = 2147483647, t.exports.LUA_MININTEGER = -2147483648, t.exports.LUA_NUMBER_FMT = "%.14g", t.exports.LUA_NUMBER_FRMLEN = "", t.exports.LUAL_BUFFERSIZE = d, t.exports.frexp = function (t) { if (0 === t)
                return [t, 0]; var e = new DataView(new ArrayBuffer(8)); e.setFloat64(0, t); var r = e.getUint32(0) >>> 20 & 2047; 0 === r && (e.setFloat64(0, t * Math.pow(2, 64)), r = (e.getUint32(0) >>> 20 & 2047) - 64); var n = r - 1022; return [A(t, -n), n]; }, t.exports.ldexp = A, t.exports.lua_getlocaledecpoint = function () { return 46; }, t.exports.lua_integer2str = function (t) { return String(t); }, t.exports.lua_number2str = function (t) { return String(Number(t.toPrecision(14))); }, t.exports.lua_numbertointeger = function (t) { return t >= -2147483648 && t < 2147483648 && t; }, t.exports.luai_apicheck = function (t, e) { if (!e)
                throw Error(e); };
        }, function (t, e, r) {
            "use strict";
            var n = r(3).luai_apicheck, a = function (t) { if (!t)
                throw Error("assertion failed"); };
            t.exports.lua_assert = a, t.exports.luai_apicheck = n || function (t, e) { return a(e); };
            t.exports.api_check = function (t, e, r) { return n(t, e && r); };
            t.exports.LUAI_MAXCCALLS = 200;
            t.exports.LUA_MINBUFFER = 32;
            t.exports.luai_nummod = function (t, e, r) { var n = e % r; return n * r < 0 && (n += r), n; };
            t.exports.MAX_INT = 2147483647;
            t.exports.MIN_INT = -2147483648;
        }, function (t, e, r) { var n = r(1), a = "Fengari 0.1.4  Copyright (C) 2017-2018 B. Giannangeli, Daurnimator\nBased on: " + n.LUA_COPYRIGHT; t.exports.FENGARI_AUTHORS = "B. Giannangeli, Daurnimator", t.exports.FENGARI_COPYRIGHT = a, t.exports.FENGARI_RELEASE = "Fengari 0.1.4", t.exports.FENGARI_VERSION = "Fengari 0.1", t.exports.FENGARI_VERSION_MAJOR = "0", t.exports.FENGARI_VERSION_MINOR = "1", t.exports.FENGARI_VERSION_NUM = 1, t.exports.FENGARI_VERSION_RELEASE = "4", t.exports.is_luastring = n.is_luastring, t.exports.luastring_eq = n.luastring_eq, t.exports.luastring_from = n.luastring_from, t.exports.luastring_indexOf = n.luastring_indexOf, t.exports.luastring_of = n.luastring_of, t.exports.to_jsstring = n.to_jsstring, t.exports.to_luastring = n.to_luastring, t.exports.to_uristring = n.to_uristring, t.exports.from_userstring = n.from_userstring; }, function (t, e, r) {
            "use strict";
            var n;
            function a(t) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; })(t); }
            function u(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t; }
            function s(t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }
            function o(t, e) { for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            } }
            var l = r(1), i = l.LUA_OPADD, c = l.LUA_OPBAND, f = l.LUA_OPBNOT, _ = l.LUA_OPBOR, p = l.LUA_OPBXOR, v = l.LUA_OPDIV, h = l.LUA_OPIDIV, L = l.LUA_OPMOD, d = l.LUA_OPMUL, A = l.LUA_OPPOW, g = l.LUA_OPSHL, T = l.LUA_OPSHR, x = l.LUA_OPSUB, b = l.LUA_OPUNM, k = l.constant_types, O = k.LUA_NUMTAGS, E = k.LUA_TBOOLEAN, m = k.LUA_TCCL, U = k.LUA_TFUNCTION, N = k.LUA_TLCF, R = k.LUA_TLCL, y = k.LUA_TLIGHTUSERDATA, S = k.LUA_TLNGSTR, w = k.LUA_TNIL, I = k.LUA_TNUMBER, M = k.LUA_TNUMFLT, P = k.LUA_TNUMINT, C = k.LUA_TSHRSTR, D = k.LUA_TSTRING, V = k.LUA_TTABLE, B = k.LUA_TTHREAD, G = k.LUA_TUSERDATA, K = l.from_userstring, F = l.luastring_indexOf, j = l.luastring_of, H = l.to_jsstring, X = l.to_luastring, z = r(22), Y = z.lisdigit, J = z.lisprint, Z = z.lisspace, q = z.lisxdigit, W = r(11), Q = r(8), $ = r(12), tt = r(10), et = tt.luaS_bless, rt = tt.luaS_new, nt = r(9), at = r(3), ut = at.LUA_COMPAT_FLOATSTRING, st = at.ldexp, ot = at.lua_integer2str, lt = at.lua_number2str, it = r(15), ct = r(4), ft = ct.MAX_INT, _t = ct.luai_nummod, pt = ct.lua_assert, vt = r(14), ht = O, Lt = O + 1, dt = function () { function t(e, r) { s(this, t), this.type = e, this.value = r; } return function (t, e, r) { e && o(t.prototype, e), r && o(t, r); }(t, [{ key: "ttype", value: function () { return 63 & this.type; } }, { key: "ttnov", value: function () { return 15 & this.type; } }, { key: "checktag", value: function (t) { return this.type === t; } }, { key: "checktype", value: function (t) { return this.ttnov() === t; } }, { key: "ttisnumber", value: function () { return this.checktype(I); } }, { key: "ttisfloat", value: function () { return this.checktag(M); } }, { key: "ttisinteger", value: function () { return this.checktag(P); } }, { key: "ttisnil", value: function () { return this.checktag(w); } }, { key: "ttisboolean", value: function () { return this.checktag(E); } }, { key: "ttislightuserdata", value: function () { return this.checktag(y); } }, { key: "ttisstring", value: function () { return this.checktype(D); } }, { key: "ttisshrstring", value: function () { return this.checktag(C); } }, { key: "ttislngstring", value: function () { return this.checktag(S); } }, { key: "ttistable", value: function () { return this.checktag(V); } }, { key: "ttisfunction", value: function () { return this.checktype(U); } }, { key: "ttisclosure", value: function () { return (31 & this.type) === U; } }, { key: "ttisCclosure", value: function () { return this.checktag(m); } }, { key: "ttisLclosure", value: function () { return this.checktag(R); } }, { key: "ttislcf", value: function () { return this.checktag(N); } }, { key: "ttisfulluserdata", value: function () { return this.checktag(G); } }, { key: "ttisthread", value: function () { return this.checktag(B); } }, { key: "ttisdeadkey", value: function () { return this.checktag(Lt); } }, { key: "l_isfalse", value: function () { return this.ttisnil() || this.ttisboolean() && !1 === this.value; } }, { key: "setfltvalue", value: function (t) { this.type = M, this.value = t; } }, { key: "chgfltvalue", value: function (t) { pt(this.type == M), this.value = t; } }, { key: "setivalue", value: function (t) { this.type = P, this.value = t; } }, { key: "chgivalue", value: function (t) { pt(this.type == P), this.value = t; } }, { key: "setnilvalue", value: function () { this.type = w, this.value = null; } }, { key: "setfvalue", value: function (t) { this.type = N, this.value = t; } }, { key: "setpvalue", value: function (t) { this.type = y, this.value = t; } }, { key: "setbvalue", value: function (t) { this.type = E, this.value = t; } }, { key: "setsvalue", value: function (t) { this.type = S, this.value = t; } }, { key: "setuvalue", value: function (t) { this.type = G, this.value = t; } }, { key: "setthvalue", value: function (t) { this.type = B, this.value = t; } }, { key: "setclLvalue", value: function (t) { this.type = R, this.value = t; } }, { key: "setclCvalue", value: function (t) { this.type = m, this.value = t; } }, { key: "sethvalue", value: function (t) { this.type = V, this.value = t; } }, { key: "setdeadvalue", value: function () { this.type = Lt, this.value = null; } }, { key: "setfrom", value: function (t) { this.type = t.type, this.value = t.value; } }, { key: "tsvalue", value: function () { return pt(this.ttisstring()), this.value; } }, { key: "svalue", value: function () { return this.tsvalue().getstr(); } }, { key: "vslen", value: function () { return this.tsvalue().tsslen(); } }, { key: "jsstring", value: function (t, e) { return H(this.svalue(), t, e, !0); } }]), t; }(), At = function (t, e, r) { t.stack[e].setsvalue(r); }, gt = new dt(w, null);
            Object.freeze(gt), t.exports.luaO_nilobject = gt;
            var Tt = function t(e, r) { s(this, t), this.id = e.l_G.id_counter++, this.p = null, this.nupvalues = r, this.upvals = new Array(r); }, xt = function t(e, r, n) { for (s(this, t), this.id = e.l_G.id_counter++, this.f = r, this.nupvalues = n, this.upvalue = new Array(n); n--;)
                this.upvalue[n] = new dt(w, null); }, bt = function t(e, r) { s(this, t), this.id = e.l_G.id_counter++, this.metatable = null, this.uservalue = new dt(w, null), this.len = r, this.data = Object.create(null); }, kt = X("..."), Ot = X('[string "'), Et = X('"]'), mt = function (t) { return Y(t) ? t - 48 : (223 & t) - 55; }, Ut = function (t, e) { var r = 1; if (pt(e <= 1114111), e < 128)
                t[7] = e;
            else {
                var n = 63;
                do {
                    t[8 - r++] = 128 | 63 & e, e >>= 6, n >>= 1;
                } while (e > n);
                t[8 - r] = ~n << 1 | e;
            } return r; }, Nt = function (t, e) { var r = "x" === e ? function (t) { for (var e, r = 0, n = 0, a = 0, u = 0, s = 0, o = !1; Z(t[r]);)
                r++; if ((e = 45 === t[r]) ? r++ : 43 === t[r] && r++, 48 !== t[r] || 120 !== t[r + 1] && 88 !== t[r + 1])
                return null; for (r += 2;; r++)
                if (46 === t[r]) {
                    if (o)
                        break;
                    o = !0;
                }
                else {
                    if (!q(t[r]))
                        break;
                    0 === a && 48 === t[r] ? u++ : ++a <= 30 ? n = 16 * n + mt(t[r]) : s++, o && s--;
                } if (u + a === 0)
                return null; if (s *= 4, 112 === t[r] || 80 === t[r]) {
                var l, i = 0;
                if ((l = 45 === t[++r]) ? r++ : 43 === t[r] && r++, !Y(t[r]))
                    return null;
                for (; Y(t[r]);)
                    i = 10 * i + t[r++] - 48;
                l && (i = -i), s += i;
            } return e && (n = -n), { n: st(n, s), i: r }; }(t) : function (t) { try {
                t = H(t);
            }
            catch (t) {
                return null;
            } var e = /^[\t\v\f \n\r]*[+-]?(?:[0-9]+\.?[0-9]*|\.[0-9]*)(?:[eE][+-]?[0-9]+)?/.exec(t); if (!e)
                return null; var r = parseFloat(e[0]); return isNaN(r) ? null : { n: r, i: e[0].length }; }(t); if (null === r)
                return null; for (; Z(t[r.i]);)
                r.i++; return r.i === t.length || 0 === t[r.i] ? r : null; }, Rt = [46, 120, 88, 110, 78], yt = (u(n = {}, 46, "."), u(n, 120, "x"), u(n, 88, "x"), u(n, 110, "n"), u(n, 78, "n"), n), St = Math.floor(ft / 10), wt = ft % 10, It = function (t, e) { var r; if (e.ttisinteger())
                r = X(ot(e.value));
            else {
                var n = lt(e.value);
                !ut && /^[-0123456789]+$/.test(n) && (n += ".0"), r = X(n);
            } e.setsvalue(et(t, r)); }, Mt = function (t, e) { Q.luaD_inctop(t), At(t, t.top - 1, rt(t, e)); }, Pt = function (t, e, r) { for (var n, u = 0, s = 0, o = 0; -1 != (n = F(e, 37, s));) {
                switch ((Mt(t, e.subarray(s, n)), e[n + 1])) {
                    case 115:
                        var l = r[o++];
                        if (null === l)
                            l = X("(null)", !0);
                        else {
                            l = K(l);
                            var i = F(l, 0);
                            -1 !== i && (l = l.subarray(0, i));
                        }
                        Mt(t, l);
                        break;
                    case 99:
                        var c = r[o++];
                        J(c) ? Mt(t, j(c)) : Ct(t, X("<\\%d>", !0), c);
                        break;
                    case 100:
                    case 73:
                        Q.luaD_inctop(t), t.stack[t.top - 1].setivalue(r[o++]), It(t, t.stack[t.top - 1]);
                        break;
                    case 102:
                        Q.luaD_inctop(t), t.stack[t.top - 1].setfltvalue(r[o++]), It(t, t.stack[t.top - 1]);
                        break;
                    case 112:
                        var f = r[o++];
                        if (f instanceof $.lua_State || f instanceof nt.Table || f instanceof bt || f instanceof Tt || f instanceof xt)
                            Mt(t, X("0x" + f.id.toString(16)));
                        else
                            switch (a(f)) {
                                case "undefined":
                                    Mt(t, X("undefined"));
                                    break;
                                case "number":
                                    Mt(t, X("Number(" + f + ")"));
                                    break;
                                case "string":
                                    Mt(t, X("String(" + JSON.stringify(f) + ")"));
                                    break;
                                case "boolean":
                                    Mt(t, X(f ? "Boolean(true)" : "Boolean(false)"));
                                    break;
                                case "object": if (null === f) {
                                    Mt(t, X("null"));
                                    break;
                                }
                                case "function":
                                    var _ = t.l_G.ids.get(f);
                                    _ || (_ = t.l_G.id_counter++, t.l_G.ids.set(f, _)), Mt(t, X("0x" + _.toString(16)));
                                    break;
                                default: Mt(t, X("<id NYI>"));
                            }
                        break;
                    case 85:
                        var p = new Uint8Array(8), v = Ut(p, r[o++]);
                        Mt(t, p.subarray(8 - v));
                        break;
                    case 37:
                        Mt(t, X("%", !0));
                        break;
                    default: W.luaG_runerror(t, X("invalid option '%%%c' to 'lua_pushfstring'"), e[n + 1]);
                }
                u += 2, s = n + 2;
            } return Q.luaD_checkstack(t, 1), Mt(t, e.subarray(s)), u > 0 && it.luaV_concat(t, u + 1), t.stack[t.top - 1].svalue(); }, Ct = function (t, e) { for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
                n[a - 2] = arguments[a]; return Pt(t, e, n); }, Dt = function (t, e, r, n) { switch (e) {
                case i: return r + n | 0;
                case x: return r - n | 0;
                case d: return it.luaV_imul(r, n);
                case L: return it.luaV_mod(t, r, n);
                case h: return it.luaV_div(t, r, n);
                case c: return r & n;
                case _: return r | n;
                case p: return r ^ n;
                case g: return it.luaV_shiftl(r, n);
                case T: return it.luaV_shiftl(r, -n);
                case b: return 0 - r | 0;
                case f: return -1 ^ r;
                default: pt(0);
            } }, Vt = function (t, e, r, n) { switch (e) {
                case i: return r + n;
                case x: return r - n;
                case d: return r * n;
                case v: return r / n;
                case A: return Math.pow(r, n);
                case h: return Math.floor(r / n);
                case b: return -r;
                case L: return _t(t, r, n);
                default: pt(0);
            } };
            t.exports.CClosure = xt, t.exports.LClosure = Tt, t.exports.LUA_TDEADKEY = Lt, t.exports.LUA_TPROTO = ht, t.exports.LocVar = function t() { s(this, t), this.varname = null, this.startpc = NaN, this.endpc = NaN; }, t.exports.TValue = dt, t.exports.Udata = bt, t.exports.UTF8BUFFSZ = 8, t.exports.luaO_arith = function (t, e, r, n, a) { var u = "number" == typeof a ? t.stack[a] : a; switch (e) {
                case c:
                case _:
                case p:
                case g:
                case T:
                case f:
                    var s, o;
                    if (!1 !== (s = it.tointeger(r)) && !1 !== (o = it.tointeger(n)))
                        return void u.setivalue(Dt(t, e, s, o));
                    break;
                case v:
                case A:
                    var l, h;
                    if (!1 !== (l = it.tonumber(r)) && !1 !== (h = it.tonumber(n)))
                        return void u.setfltvalue(Vt(t, e, l, h));
                    break;
                default:
                    var L, d;
                    if (r.ttisinteger() && n.ttisinteger())
                        return void u.setivalue(Dt(t, e, r.value, n.value));
                    if (!1 !== (L = it.tonumber(r)) && !1 !== (d = it.tonumber(n)))
                        return void u.setfltvalue(Vt(t, e, L, d));
            } pt(null !== t), vt.luaT_trybinTM(t, r, n, a, e - i + vt.TMS.TM_ADD); }, t.exports.luaO_chunkid = function (t, e) { var r, n = t.length; if (61 === t[0])
                n < e ? (r = new Uint8Array(n - 1)).set(t.subarray(1)) : (r = new Uint8Array(e)).set(t.subarray(1, e + 1));
            else if (64 === t[0])
                n <= e ? (r = new Uint8Array(n - 1)).set(t.subarray(1)) : ((r = new Uint8Array(e)).set(kt), e -= kt.length, r.set(t.subarray(n - e), kt.length));
            else {
                r = new Uint8Array(e);
                var a = F(t, 10);
                r.set(Ot);
                var u = Ot.length;
                n < (e -= Ot.length + kt.length + Et.length) && -1 === a ? (r.set(t, u), u += t.length) : (-1 !== a && (n = a), n > e && (n = e), r.set(t.subarray(0, n), u), u += n, r.set(kt, u), u += kt.length), r.set(Et, u), u += Et.length, r = r.subarray(0, u);
            } return r; }, t.exports.luaO_hexavalue = mt, t.exports.luaO_int2fb = function (t) { var e = 0; if (t < 8)
                return t; for (; t >= 128;)
                t = t + 15 >> 4, e += 4; for (; t >= 16;)
                t = t + 1 >> 1, e++; return e + 1 << 3 | t - 8; }, t.exports.luaO_pushfstring = Ct, t.exports.luaO_pushvfstring = Pt, t.exports.luaO_str2num = function (t, e) { var r = function (t) { for (var e, r = 0, n = 0, a = !0; Z(t[r]);)
                r++; if ((e = 45 === t[r]) ? r++ : 43 === t[r] && r++, 48 !== t[r] || 120 !== t[r + 1] && 88 !== t[r + 1])
                for (; r < t.length && Y(t[r]); r++) {
                    var u = t[r] - 48;
                    if (n >= St && (n > St || u > wt + e))
                        return null;
                    n = 10 * n + u | 0, a = !1;
                }
            else
                for (r += 2; r < t.length && q(t[r]); r++)
                    n = 16 * n + mt(t[r]) | 0, a = !1; for (; r < t.length && Z(t[r]);)
                r++; return a || r !== t.length && 0 !== t[r] ? null : { n: 0 | (e ? -n : n), i: r }; }(t); return null !== r ? (e.setivalue(r.n), r.i + 1) : null !== (r = function (t) { for (var e = t.length, r = 0, n = 0; n < e; n++) {
                var a = t[n];
                if (-1 !== Rt.indexOf(a)) {
                    r = a;
                    break;
                }
            } var u = yt[r]; return "n" === u ? null : Nt(t, u); }(t)) ? (e.setfltvalue(r.n), r.i + 1) : 0; }, t.exports.luaO_tostring = It, t.exports.luaO_utf8esc = Ut, t.exports.numarith = Vt, t.exports.pushobj2s = function (t, e) { t.stack[t.top++] = new dt(e.type, e.value); }, t.exports.pushsvalue2s = function (t, e) { t.stack[t.top++] = new dt(S, e); }, t.exports.setobjs2s = function (t, e, r) { t.stack[e].setfrom(t.stack[r]); }, t.exports.setobj2s = function (t, e, r) { t.stack[e].setfrom(r); }, t.exports.setsvalue2s = At;
        }, function (t, e, r) {
            "use strict";
            function n(t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }
            var a, u, s = r(3).LUAL_BUFFERSIZE, o = r(2), l = o.LUA_ERRERR, i = o.LUA_MULTRET, c = o.LUA_REGISTRYINDEX, f = o.LUA_SIGNATURE, _ = o.LUA_TBOOLEAN, p = o.LUA_TLIGHTUSERDATA, v = o.LUA_TNIL, h = o.LUA_TNONE, L = o.LUA_TNUMBER, d = o.LUA_TSTRING, A = o.LUA_TTABLE, g = o.LUA_VERSION_NUM, T = o.lua_Debug, x = o.lua_absindex, b = o.lua_atpanic, k = o.lua_call, O = o.lua_checkstack, E = o.lua_concat, m = o.lua_copy, U = o.lua_createtable, N = o.lua_error, R = o.lua_getfield, y = o.lua_getinfo, S = o.lua_getmetatable, w = o.lua_getstack, I = o.lua_gettop, M = o.lua_insert, P = o.lua_isinteger, C = o.lua_isnil, D = o.lua_isnumber, V = o.lua_isstring, B = o.lua_istable, G = o.lua_len, K = o.lua_load, F = o.lua_newstate, j = o.lua_newtable, H = o.lua_next, X = o.lua_pcall, z = o.lua_pop, Y = o.lua_pushboolean, J = o.lua_pushcclosure, Z = o.lua_pushcfunction, q = o.lua_pushfstring, W = o.lua_pushinteger, Q = o.lua_pushliteral, $ = o.lua_pushlstring, tt = o.lua_pushnil, et = o.lua_pushstring, rt = o.lua_pushvalue, nt = o.lua_pushvfstring, at = o.lua_rawequal, ut = o.lua_rawget, st = o.lua_rawgeti, ot = o.lua_rawlen, lt = o.lua_rawseti, it = o.lua_remove, ct = o.lua_setfield, ft = o.lua_setglobal, _t = o.lua_setmetatable, pt = o.lua_settop, vt = o.lua_toboolean, ht = o.lua_tointeger, Lt = o.lua_tointegerx, dt = o.lua_tojsstring, At = o.lua_tolstring, gt = o.lua_tonumber, Tt = o.lua_tonumberx, xt = o.lua_topointer, bt = o.lua_tostring, kt = o.lua_touserdata, Ot = o.lua_type, Et = o.lua_typename, mt = o.lua_version, Ut = r(5), Nt = Ut.from_userstring, Rt = Ut.luastring_eq, yt = Ut.to_luastring, St = Ut.to_uristring, wt = l + 1, It = yt("_LOADED"), Mt = yt("_PRELOAD"), Pt = yt("FILE*"), Ct = yt("__name"), Dt = yt("__tostring"), Vt = new Uint8Array(0), Bt = function t() { n(this, t), this.L = null, this.b = Vt, this.n = 0; }, Gt = function (t, e) { var r = I(t); if (y(t, yt("f"), e), R(t, c, It), function t(e, r, n) { if (0 === n || !B(e, -1))
                return 0; for (tt(e); H(e, -2);) {
                if (Ot(e, -2) === d) {
                    if (at(e, r, -1))
                        return z(e, 1), 1;
                    if (t(e, r, n - 1))
                        return it(e, -2), Q(e, "."), M(e, -2), E(e, 3), 1;
                }
                z(e, 1);
            } return 0; }(t, r + 1, 2)) {
                var n = bt(t, -1);
                return 95 === n[0] && 71 === n[1] && 46 === n[2] && (et(t, n.subarray(3)), it(t, -2)), m(t, -1, r + 1), z(t, 2), 1;
            } return pt(t, r), 0; }, Kt = function (t, e) { Gt(t, e) ? (q(t, yt("function '%s'"), bt(t, -1)), it(t, -2)) : 0 !== e.namewhat.length ? q(t, yt("%s '%s'"), e.namewhat, e.name) : e.what && 109 === e.what[0] ? Q(t, "main chunk") : e.what && 76 === e.what[0] ? q(t, yt("function <%s:%d>"), e.short_src, e.linedefined) : Q(t, "?"); }, Ft = function (t) { var e = "PANIC: unprotected error in call to Lua API (" + dt(t, -1) + ")"; throw new Error(e); }, jt = function (t, e, r) { var n = new T; return w(t, 0, n) ? (y(t, yt("n"), n), Rt(n.namewhat, yt("method")) && 0 === --e ? zt(t, yt("calling '%s' on bad self (%s)"), n.name, r) : (null === n.name && (n.name = Gt(t, n) ? bt(t, -1) : yt("?")), zt(t, yt("bad argument #%d to '%s' (%s)"), e, n.name, r))) : zt(t, yt("bad argument #%d (%s)"), e, r); }, Ht = function (t, e, r) { var n; n = he(t, e, Ct) === d ? bt(t, -1) : Ot(t, e) === p ? yt("light userdata", !0) : Wt(t, e); var a = q(t, yt("%s expected, got %s"), r, n); return jt(t, e, a); }, Xt = function (t, e) { var r = new T; w(t, e, r) && (y(t, yt("Sl", !0), r), r.currentline > 0) ? q(t, yt("%s:%d: "), r.short_src, r.currentline) : et(t, yt("")); }, zt = function (t, e) { Xt(t, 1); for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
                n[a - 2] = arguments[a]; return nt(t, e, n), E(t, 2), N(t); }, Yt = function (t, e, r, n) { return e ? (Y(t, 1), 1) : (tt(t), n ? (a = n.message, u = -n.errno) : (a = "Success", u = 0), r ? q(t, yt("%s: %s"), r, yt(a)) : et(t, yt(a)), W(t, u), 3); var a, u; }, Jt = function (t, e) { return R(t, c, e); }, Zt = function (t, e, r) { var n = kt(t, e); return null !== n && S(t, e) ? (Jt(t, r), at(t, -1, -2) || (n = null), z(t, 2), n) : null; }, qt = function (t, e, r) { Ht(t, e, Et(t, r)); }, Wt = function (t, e) { return Et(t, Ot(t, e)); }, Qt = function (t, e) { var r = At(t, e); return null !== r && void 0 !== r || qt(t, e, d), r; }, $t = Qt, te = function (t, e, r) { return Ot(t, e) <= 0 ? null === r ? null : Nt(r) : Qt(t, e); }, ee = te, re = function (t, e) { var r = Tt(t, e); return !1 === r && qt(t, e, L), r; }, ne = function (t, e) { var r = Lt(t, e); return !1 === r && function (t, e) { D(t, e) ? jt(t, e, yt("number has no integer representation", !0)) : qt(t, e, L); }(t, e), r; }, ae = function (t, e) { var r = t.n + e; if (t.b.length < r) {
                var n = Math.max(2 * t.b.length, r), a = new Uint8Array(n);
                a.set(t.b), t.b = a;
            } return t.b.subarray(t.n, r); }, ue = function (t, e) { e.L = t, e.b = Vt; }, se = function (t, e, r) { r > 0 && (e = Nt(e), ae(t, r).set(e.subarray(0, r)), ie(t, r)); }, oe = function (t, e) { e = Nt(e), se(t, e, e.length); }, le = function (t) { $(t.L, t.b, t.n), t.n = 0, t.b = Vt; }, ie = function (t, e) { t.n += e; }, ce = function (t, e, r, n) { return Ot(t, r) <= 0 ? n : e(t, r); }, fe = function (t, e) { var r = e.string; return e.string = null, r; }, _e = function (t, e, r, n, a) { return K(t, fe, { string: e }, n, a); }, pe = function (t, e, r, n) { return _e(t, e, 0, n, null); }, ve = function (t, e) { return pe(t, e, e.length, e); }, he = function (t, e, r) { if (S(t, e)) {
                et(t, r);
                var n = ut(t, -2);
                return n === v ? z(t, 2) : it(t, -2), n;
            } return v; }, Le = function (t, e, r) { return e = x(t, e), he(t, e, r) !== v && (rt(t, e), k(t, 1, 1), !0); }, de = yt("%I"), Ae = yt("%f"), ge = function (t, e, r) { var n = r >>> 0, a = e.length, u = t.length + 1 - a; t: for (; n < u; n++) {
                for (var s = 0; s < a; s++)
                    if (t[n + s] !== e[s])
                        continue t;
                return n;
            } return -1; }, Te = function (t, e, r) { return R(t, e, r) === A || (z(t, 1), e = x(t, e), j(t), rt(t, -1), ct(t, e, r), !1); }, xe = function (t, e, r) { for (var n in be(t, r, yt("too many upvalues", !0)), e) {
                for (var a = 0; a < r; a++)
                    rt(t, -r);
                J(t, e[n], r), ct(t, -(r + 2), yt(n));
            } z(t, r); }, be = function (t, e, r) { O(t, e) || (r ? zt(t, yt("stack overflow (%s)"), r) : zt(t, yt("stack overflow", !0))); }, ke = function (t, e, r, n) { var a = n.message, u = bt(t, r).subarray(1); return q(t, yt("cannot %s %s: %s"), yt(e), u, yt(a)), it(t, r), wt; }, Oe = [239, 187, 191], Ee = function (t) { var e = function (t) { var e; t.n = 0; var r = 0; do {
                if (null === (e = a(t)) || e !== Oe[r])
                    return e;
                r++, t.buff[t.n++] = e;
            } while (r < Oe.length); return t.n = 0, a(t); }(t); if (35 === e) {
                do {
                    e = a(t);
                } while (e && 10 !== e);
                return { skipped: !0, c: a(t) };
            } return { skipped: !1, c: e }; }, me = function (t, e) { var r = e; if (null !== r.f && r.n > 0) {
                var n = r.n;
                return r.n = 0, r.f = r.f.subarray(r.pos), r.buff.subarray(0, n);
            } var a = r.f; return r.f = null, a; };
            a = function (t) { return t.pos < t.f.length ? t.f[t.pos++] : null; }, u = function (t, e, r) { var a = new function t() { n(this, t), this.n = NaN, this.f = null, this.buff = new Uint8Array(1024), this.pos = 0, this.err = void 0; }, u = I(t) + 1; if (null === e)
                throw new Error("Can't read stdin in the browser"); q(t, yt("@%s"), e); var s = St(e), o = new XMLHttpRequest; if (o.open("GET", s, !1), "undefined" == typeof window && (o.responseType = "arraybuffer"), o.send(), !(o.status >= 200 && o.status <= 299))
                return a.err = o.status, ke(t, "open", u, { message: "".concat(o.status, ": ").concat(o.statusText) }); "string" == typeof o.response ? a.f = yt(o.response) : a.f = new Uint8Array(o.response); var l = Ee(a); l.c === f[0] && e || l.skipped && (a.buff[a.n++] = 10), null !== l.c && (a.buff[a.n++] = l.c); var i = K(t, me, a, bt(t, -1), r), c = a.err; return c ? (pt(t, u), ke(t, "read", u, c)) : (it(t, u), i); };
            var Ue = function (t, e) { return u(t, e, null); }, Ne = function (t, e, r) { var n = mt(t); 72 != r && zt(t, yt("core and library have incompatible numeric types")), n != mt(null) ? zt(t, yt("multiple Lua VMs detected")) : n !== e && zt(t, yt("version mismatch: app. needs %f, Lua core provides %f"), e, n); };
            t.exports.LUA_ERRFILE = wt, t.exports.LUA_FILEHANDLE = Pt, t.exports.LUA_LOADED_TABLE = It, t.exports.LUA_NOREF = -2, t.exports.LUA_PRELOAD_TABLE = Mt, t.exports.LUA_REFNIL = -1, t.exports.luaL_Buffer = Bt, t.exports.luaL_addchar = function (t, e) { ae(t, 1), t.b[t.n++] = e; }, t.exports.luaL_addlstring = se, t.exports.luaL_addsize = ie, t.exports.luaL_addstring = oe, t.exports.luaL_addvalue = function (t) { var e = t.L, r = bt(e, -1); se(t, r, r.length), z(e, 1); }, t.exports.luaL_argcheck = function (t, e, r, n) { e || jt(t, r, n); }, t.exports.luaL_argerror = jt, t.exports.luaL_buffinit = ue, t.exports.luaL_buffinitsize = function (t, e, r) { return ue(t, e), ae(e, r); }, t.exports.luaL_callmeta = Le, t.exports.luaL_checkany = function (t, e) { Ot(t, e) === h && jt(t, e, yt("value expected", !0)); }, t.exports.luaL_checkinteger = ne, t.exports.luaL_checklstring = Qt, t.exports.luaL_checknumber = re, t.exports.luaL_checkoption = function (t, e, r, n) { for (var a = null !== r ? ee(t, e, r) : $t(t, e), u = 0; n[u]; u++)
                if (Rt(n[u], a))
                    return u; return jt(t, e, q(t, yt("invalid option '%s'"), a)); }, t.exports.luaL_checkstack = be, t.exports.luaL_checkstring = $t, t.exports.luaL_checktype = function (t, e, r) { Ot(t, e) !== r && qt(t, e, r); }, t.exports.luaL_checkudata = function (t, e, r) { var n = Zt(t, e, r); return null === n && Ht(t, e, r), n; }, t.exports.luaL_checkversion = function (t) { Ne(t, g, 72); }, t.exports.luaL_checkversion_ = Ne, t.exports.luaL_dofile = function (t, e) { return Ue(t, e) || X(t, 0, i, 0); }, t.exports.luaL_dostring = function (t, e) { return ve(t, e) || X(t, 0, i, 0); }, t.exports.luaL_error = zt, t.exports.luaL_execresult = function (t, e) { var r, n; if (null === e)
                return Y(t, 1), Q(t, "exit"), W(t, 0), 3; if (e.status)
                r = "exit", n = e.status;
            else {
                if (!e.signal)
                    return Yt(t, 0, null, e);
                r = "signal", n = e.signal;
            } return tt(t), Q(t, r), W(t, n), 3; }, t.exports.luaL_fileresult = Yt, t.exports.luaL_getmetafield = he, t.exports.luaL_getmetatable = Jt, t.exports.luaL_getsubtable = Te, t.exports.luaL_gsub = function (t, e, r, n) { var a, u = new Bt; for (ue(t, u); (a = ge(e, r)) >= 0;)
                se(u, e, a), oe(u, n), e = e.subarray(a + r.length); return oe(u, e), le(u), bt(t, -1); }, t.exports.luaL_len = function (t, e) { G(t, e); var r = Lt(t, -1); return !1 === r && zt(t, yt("object length is not an integer", !0)), z(t, 1), r; }, t.exports.luaL_loadbuffer = pe, t.exports.luaL_loadbufferx = _e, t.exports.luaL_loadfile = Ue, t.exports.luaL_loadfilex = u, t.exports.luaL_loadstring = ve, t.exports.luaL_newlib = function (t, e) { U(t), xe(t, e, 0); }, t.exports.luaL_newlibtable = function (t) { U(t); }, t.exports.luaL_newmetatable = function (t, e) { return Jt(t, e) !== v ? 0 : (z(t, 1), U(t, 0, 2), et(t, e), ct(t, -2, Ct), rt(t, -1), ct(t, c, e), 1); }, t.exports.luaL_newstate = function () { var t = F(); return t && b(t, Ft), t; }, t.exports.luaL_opt = ce, t.exports.luaL_optinteger = function (t, e, r) { return ce(t, ne, e, r); }, t.exports.luaL_optlstring = te, t.exports.luaL_optnumber = function (t, e, r) { return ce(t, re, e, r); }, t.exports.luaL_optstring = ee, t.exports.luaL_prepbuffer = function (t) { return ae(t, s); }, t.exports.luaL_prepbuffsize = ae, t.exports.luaL_pushresult = le, t.exports.luaL_pushresultsize = function (t, e) { ie(t, e), le(t); }, t.exports.luaL_ref = function (t, e) { var r; return C(t, -1) ? (z(t, 1), -1) : (e = x(t, e), st(t, e, 0), r = ht(t, -1), z(t, 1), 0 !== r ? (st(t, e, r), lt(t, e, 0)) : r = ot(t, e) + 1, lt(t, e, r), r); }, t.exports.luaL_requiref = function (t, e, r, n) { Te(t, c, It), R(t, -1, e), vt(t, -1) || (z(t, 1), Z(t, r), et(t, e), k(t, 1, 1), rt(t, -1), ct(t, -3, e)), it(t, -2), n && (rt(t, -1), ft(t, e)); }, t.exports.luaL_setfuncs = xe, t.exports.luaL_setmetatable = function (t, e) { Jt(t, e), _t(t, -2); }, t.exports.luaL_testudata = Zt, t.exports.luaL_tolstring = function (t, e) { if (Le(t, e, Dt))
                V(t, -1) || zt(t, yt("'__tostring' must return a string"));
            else
                switch (Ot(t, e)) {
                    case L:
                        P(t, e) ? q(t, de, ht(t, e)) : q(t, Ae, gt(t, e));
                        break;
                    case d:
                        rt(t, e);
                        break;
                    case _:
                        Q(t, vt(t, e) ? "true" : "false");
                        break;
                    case v:
                        Q(t, "nil");
                        break;
                    default:
                        var r = he(t, e, Ct), n = r === d ? bt(t, -1) : Wt(t, e);
                        q(t, yt("%s: %p"), n, xt(t, e)), r !== v && it(t, -2);
                } return At(t, -1); }, t.exports.luaL_traceback = function (t, e, r, n) { var a = new T, u = I(t), s = function (t) { for (var e = new T, r = 1, n = 1; w(t, n, e);)
                r = n, n *= 2; for (; r < n;) {
                var a = Math.floor((r + n) / 2);
                w(t, a, e) ? r = a + 1 : n = a;
            } return n - 1; }(e), o = s - n > 21 ? 10 : -1; for (r && q(t, yt("%s\n"), r), be(t, 10, null), Q(t, "stack traceback:"); w(e, n++, a);)
                0 == o-- ? (Q(t, "\n\t..."), n = s - 11 + 1) : (y(e, yt("Slnt", !0), a), q(t, yt("\n\t%s:"), a.short_src), a.currentline > 0 && Q(t, "".concat(a.currentline, ":")), Q(t, " in "), Kt(t, a), a.istailcall && Q(t, "\n\t(...tail calls..)"), E(t, I(t) - u)); E(t, I(t) - u); }, t.exports.luaL_typename = Wt, t.exports.luaL_unref = function (t, e, r) { r >= 0 && (e = x(t, e), st(t, e, 0), lt(t, e, r), W(t, r), lt(t, e, 0)); }, t.exports.luaL_where = Xt, t.exports.lua_writestringerror = function () { for (var t = 0; t < arguments.length; t++) {
                var e = arguments[t];
                do {
                    var r = /([^\n]*)\n?([\d\D]*)/.exec(e);
                    console.error(r[1]), e = r[2];
                } while ("" !== e);
            } };
        }, function (t, e, r) {
            "use strict";
            var n = r(1), a = n.LUA_HOOKCALL, u = n.LUA_HOOKRET, s = n.LUA_HOOKTAILCALL, o = n.LUA_MASKCALL, l = n.LUA_MASKLINE, i = n.LUA_MASKRET, c = n.LUA_MINSTACK, f = n.LUA_MULTRET, _ = n.LUA_SIGNATURE, p = n.constant_types, v = p.LUA_TCCL, h = p.LUA_TLCF, L = p.LUA_TLCL, d = p.LUA_TNIL, A = n.thread_status, g = A.LUA_ERRMEM, T = A.LUA_ERRERR, x = A.LUA_ERRRUN, b = A.LUA_ERRSYNTAX, k = A.LUA_OK, O = A.LUA_YIELD, E = n.lua_Debug, m = n.luastring_indexOf, U = n.to_luastring, N = r(19), R = r(11), y = r(13), S = r(4), w = S.api_check, I = S.lua_assert, M = S.LUAI_MAXCCALLS, P = r(6), C = r(16), D = r(23), V = r(12), B = r(10).luaS_newliteral, G = r(14), K = r(3).LUAI_MAXSTACK, F = r(36), j = r(15), H = r(20).MBuffer, X = function (t, e) { if (t.top < e)
                for (; t.top < e;)
                    t.stack[t.top++] = new P.TValue(d, null);
            else
                for (; t.top > e;)
                    delete t.stack[--t.top]; }, z = function (t, e, r) { for (var n = t.top; t.top < r + 1;)
                t.stack[t.top++] = new P.TValue(d, null); switch (e) {
                case g:
                    P.setsvalue2s(t, r, B(t, "not enough memory"));
                    break;
                case T:
                    P.setsvalue2s(t, r, B(t, "error in error handling"));
                    break;
                default: P.setobjs2s(t, r, n - 1);
            } for (; t.top > r + 1;)
                delete t.stack[--t.top]; }, Y = K + 200, J = function (t, e) { I(e <= K || e == Y), I(t.stack_last == t.stack.length - V.EXTRA_STACK), t.stack.length = e, t.stack_last = e - V.EXTRA_STACK; }, Z = function (t, e) { var r = t.stack.length; if (r > K)
                st(t, T);
            else {
                var n = t.top + e + V.EXTRA_STACK, a = 2 * r;
                a > K && (a = K), a < n && (a = n), a > K ? (J(t, Y), R.luaG_runerror(t, U("stack overflow", !0))) : J(t, a);
            } }, q = function (t, e) { t.stack_last - t.top <= e && Z(t, e); }, W = function (t) { var e = function (t) { for (var e = t.top, r = t.ci; null !== r; r = r.previous)
                e < r.top && (e = r.top); return I(e <= t.stack_last), e + 1; }(t), r = e + Math.floor(e / 8) + 2 * V.EXTRA_STACK; r > K && (r = K), t.stack.length > K && V.luaE_freeCI(t), e <= K - V.EXTRA_STACK && r < t.stack.length && J(t, r); }, Q = function t(e, r, n) { var u = e.stack[r]; switch (u.type) {
                case v:
                case h:
                    var s = u.type === v ? u.value.f : u.value;
                    q(e, c);
                    var l = V.luaE_extendCI(e);
                    l.funcOff = r, l.nresults = n, l.func = u, l.top = e.top + c, I(l.top <= e.stack_last), l.callstatus = 0, e.hookmask & o && et(e, a, -1);
                    var i = s(e);
                    if ("number" != typeof i || i < 0 || (0 | i) !== i)
                        throw Error("invalid return value from JS function (expected integer)");
                    return N.api_checknelems(e, i), $(e, l, e.top - i, i), !0;
                case L:
                    var f, _ = u.value.p, p = e.top - r - 1, A = _.maxstacksize;
                    if (q(e, A), _.is_vararg)
                        f = nt(e, _, p);
                    else {
                        for (; p < _.numparams; p++)
                            e.stack[e.top++] = new P.TValue(d, null);
                        f = r + 1;
                    }
                    var g = V.luaE_extendCI(e);
                    return g.funcOff = r, g.nresults = n, g.func = u, g.l_base = f, g.top = f + A, X(e, g.top), g.l_code = _.code, g.l_savedpc = 0, g.callstatus = V.CIST_LUA, e.hookmask & o && rt(e, g), !1;
                default: return q(e, 1), at(e, r, u), t(e, r, n);
            } }, $ = function (t, e, r, n) { var a = e.nresults; t.hookmask & (i | l) && (t.hookmask & i && et(t, u, -1), t.oldpc = e.previous.l_savedpc); var s = e.funcOff; return t.ci = e.previous, t.ci.next = null, tt(t, r, s, n, a); }, tt = function (t, e, r, n, a) { switch (a) {
                case 0: break;
                case 1:
                    0 === n ? t.stack[r].setnilvalue() : P.setobjs2s(t, r, e);
                    break;
                case f:
                    for (var u = 0; u < n; u++)
                        P.setobjs2s(t, r + u, e + u);
                    for (var s = t.top; s >= r + n; s--)
                        delete t.stack[s];
                    return t.top = r + n, !1;
                default:
                    var o;
                    if (a <= n)
                        for (o = 0; o < a; o++)
                            P.setobjs2s(t, r + o, e + o);
                    else {
                        for (o = 0; o < n; o++)
                            P.setobjs2s(t, r + o, e + o);
                        for (; o < a; o++)
                            r + o >= t.top ? t.stack[r + o] = new P.TValue(d, null) : t.stack[r + o].setnilvalue();
                    }
            } for (var l = r + a, i = t.top; i >= l; i--)
                delete t.stack[i]; return t.top = l, !0; }, et = function (t, e, r) { var n = t.hook; if (n && t.allowhook) {
                var a = t.ci, u = t.top, s = a.top, o = new E;
                o.event = e, o.currentline = r, o.i_ci = a, q(t, c), a.top = t.top + c, I(a.top <= t.stack_last), t.allowhook = 0, a.callstatus |= V.CIST_HOOKED, n(t, o), I(!t.allowhook), t.allowhook = 1, a.top = s, X(t, u), a.callstatus &= ~V.CIST_HOOKED;
            } }, rt = function (t, e) { var r = a; e.l_savedpc++, e.previous.callstatus & V.CIST_LUA && e.previous.l_code[e.previous.l_savedpc - 1].opcode == C.OpCodesI.OP_TAILCALL && (e.callstatus |= V.CIST_TAIL, r = s), et(t, r, -1), e.l_savedpc--; }, nt = function (t, e, r) { var n, a = e.numparams, u = t.top - r, s = t.top; for (n = 0; n < a && n < r; n++)
                P.pushobj2s(t, t.stack[u + n]), t.stack[u + n].setnilvalue(); for (; n < a; n++)
                t.stack[t.top++] = new P.TValue(d, null); return s; }, at = function (t, e, r) { var n = G.luaT_gettmbyobj(t, r, G.TMS.TM_CALL); n.ttisfunction(n) || R.luaG_typeerror(t, r, U("call", !0)), P.pushobj2s(t, t.stack[t.top - 1]); for (var a = t.top - 2; a > e; a--)
                P.setobjs2s(t, a, a - 1); P.setobj2s(t, e, n); }, ut = function (t, e, r) { ++t.nCcalls >= M && function (t) { t.nCcalls === M ? R.luaG_runerror(t, U("JS stack overflow", !0)) : t.nCcalls >= M + (M >> 3) && st(t, T); }(t), Q(t, e, r) || j.luaV_execute(t), t.nCcalls--; }, st = function t(e, r) { if (e.errorJmp)
                throw e.errorJmp.status = r, e.errorJmp; var n = e.l_G; if (e.status = r, !n.mainthread.errorJmp) {
                var a = n.panic;
                throw a && (z(e, r, e.top), e.ci.top < e.top && (e.ci.top = e.top), a(e)), new Error("Aborted ".concat(r));
            } n.mainthread.stack[n.mainthread.top++] = e.stack[e.top - 1], t(n.mainthread, r); }, ot = function (t, e, r) { var n = t.nCcalls, a = { status: k, previous: t.errorJmp }; t.errorJmp = a; try {
                e(t, r);
            }
            catch (e) {
                if (a.status === k) {
                    var u = t.l_G.atnativeerror;
                    if (u)
                        try {
                            if (a.status = k, N.lua_pushcfunction(t, u), N.lua_pushlightuserdata(t, e), ht(t, t.top - 2, 1), 0 !== t.errfunc) {
                                var s = t.errfunc;
                                P.pushobj2s(t, t.stack[t.top - 1]), P.setobjs2s(t, t.top - 2, s), ht(t, t.top - 2, 1);
                            }
                            a.status = x;
                        }
                        catch (t) {
                            a.status === k && (a.status = -1);
                        }
                    else
                        a.status = -1;
                }
            } return t.errorJmp = a.previous, t.nCcalls = n, a.status; }, lt = function (t, e) { var r = t.ci; I(null !== r.c_k && 0 === t.nny), I(r.callstatus & V.CIST_YPCALL || e === O), r.callstatus & V.CIST_YPCALL && (r.callstatus &= ~V.CIST_YPCALL, t.errfunc = r.c_old_errfunc), r.nresults === f && t.ci.top < t.top && (t.ci.top = t.top); var n = (0, r.c_k)(t, e, r.c_ctx); N.api_checknelems(t, n), $(t, r, t.top - n, n); }, it = function (t, e) { for (null !== e && lt(t, e); t.ci !== t.base_ci;)
                t.ci.callstatus & V.CIST_LUA ? (j.luaV_finishOp(t), j.luaV_execute(t)) : lt(t, O); }, ct = function (t, e) { var r = function (t) { for (var e = t.ci; null !== e; e = e.previous)
                if (e.callstatus & V.CIST_YPCALL)
                    return e; return null; }(t); if (null === r)
                return 0; var n = r.extra; return y.luaF_close(t, n), z(t, e, n), t.ci = r, t.allowhook = r.callstatus & V.CIST_OAH, t.nny = 0, W(t), t.errfunc = r.c_old_errfunc, 1; }, ft = function (t, e, r) { var n = B(t, e); if (0 === r)
                P.pushsvalue2s(t, n), w(t, t.top <= t.ci.top, "stack overflow");
            else {
                for (var a = 1; a < r; a++)
                    delete t.stack[--t.top];
                P.setsvalue2s(t, t.top - 1, n);
            } return x; }, _t = function (t, e) { var r = t.top - e, n = t.ci; t.status === k ? Q(t, r - 1, f) || j.luaV_execute(t) : (I(t.status === O), t.status = k, n.funcOff = n.extra, n.func = t.stack[n.funcOff], n.callstatus & V.CIST_LUA ? j.luaV_execute(t) : (null !== n.c_k && (e = n.c_k(t, O, n.c_ctx), N.api_checknelems(t, e), r = t.top - e), $(t, n, r, e)), it(t, null)); }, pt = function (t, e, r, n) { var a = t.ci; return N.api_checknelems(t, e), t.nny > 0 && (t !== t.l_G.mainthread ? R.luaG_runerror(t, U("attempt to yield across a JS-call boundary", !0)) : R.luaG_runerror(t, U("attempt to yield from outside a coroutine", !0))), t.status = O, a.extra = a.funcOff, a.callstatus & V.CIST_LUA ? w(t, null === n, "hooks cannot continue after yielding") : (a.c_k = n, null !== n && (a.c_ctx = r), a.funcOff = t.top - e - 1, a.func = t.stack[a.funcOff], st(t, O)), I(a.callstatus & V.CIST_HOOKED), 0; }, vt = function (t, e, r, n, a) { var u = t.ci, s = t.allowhook, o = t.nny, l = t.errfunc; t.errfunc = a; var i = ot(t, e, r); return i !== k && (y.luaF_close(t, n), z(t, i, n), t.ci = u, t.allowhook = s, t.nny = o, W(t)), t.errfunc = l, i; }, ht = function (t, e, r) { t.nny++, ut(t, e, r), t.nny--; }, Lt = function t(e, r, n) { !function (t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }(this, t), this.z = e, this.buff = new H, this.dyd = new D.Dyndata, this.mode = n, this.name = r; }, dt = function (t, e, r) { e && -1 === m(e, r[0]) && (P.luaO_pushfstring(t, U("attempt to load a %s chunk (mode is '%s')"), r, e), st(t, b)); }, At = function (t, e) { var r, n = e.z.zgetc(); n === _[0] ? (dt(t, e.mode, U("binary", !0)), r = F.luaU_undump(t, e.z, e.name)) : (dt(t, e.mode, U("text", !0)), r = D.luaY_parser(t, e.z, e.buff, e.dyd, e.name, n)), I(r.nupvalues === r.p.upvalues.length), y.luaF_initupvals(t, r); };
            t.exports.adjust_top = X, t.exports.luaD_call = ut, t.exports.luaD_callnoyield = ht, t.exports.luaD_checkstack = q, t.exports.luaD_growstack = Z, t.exports.luaD_hook = et, t.exports.luaD_inctop = function (t) { q(t, 1), t.stack[t.top++] = new P.TValue(d, null); }, t.exports.luaD_pcall = vt, t.exports.luaD_poscall = $, t.exports.luaD_precall = Q, t.exports.luaD_protectedparser = function (t, e, r, n) { var a = new Lt(e, r, n); t.nny++; var u = vt(t, At, a, t.top, t.errfunc); return t.nny--, u; }, t.exports.luaD_rawrunprotected = ot, t.exports.luaD_reallocstack = J, t.exports.luaD_throw = st, t.exports.lua_isyieldable = function (t) { return 0 === t.nny; }, t.exports.lua_resume = function (t, e, r) { var n = t.nny; if (t.status === k) {
                if (t.ci !== t.base_ci)
                    return ft(t, "cannot resume non-suspended coroutine", r);
            }
            else if (t.status !== O)
                return ft(t, "cannot resume dead coroutine", r); if (t.nCcalls = e ? e.nCcalls + 1 : 1, t.nCcalls >= M)
                return ft(t, "JS stack overflow", r); t.nny = 0, N.api_checknelems(t, t.status === k ? r + 1 : r); var a = ot(t, _t, r); if (-1 === a)
                a = x;
            else {
                for (; a > O && ct(t, a);)
                    a = ot(t, it, a);
                a > O ? (t.status = a, z(t, a, t.top), t.ci.top = t.top) : I(a === t.status);
            } return t.nny = n, t.nCcalls--, I(t.nCcalls === (e ? e.nCcalls : 0)), a; }, t.exports.lua_yield = function (t, e) { pt(t, e, 0, null); }, t.exports.lua_yieldk = pt;
        }, function (t, e, r) {
            "use strict";
            function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; })(t); }
            var a = r(1), u = a.constant_types, s = u.LUA_TBOOLEAN, o = u.LUA_TCCL, l = u.LUA_TLCF, i = u.LUA_TLCL, c = u.LUA_TLIGHTUSERDATA, f = u.LUA_TLNGSTR, _ = u.LUA_TNIL, p = u.LUA_TNUMFLT, v = u.LUA_TNUMINT, h = u.LUA_TSHRSTR, L = u.LUA_TTABLE, d = u.LUA_TTHREAD, A = u.LUA_TUSERDATA, g = a.to_luastring, T = r(4).lua_assert, x = r(11), b = r(6), k = r(10), O = k.luaS_hashlongstr, E = k.TString, m = r(12), U = new WeakMap, N = function (t) { var e = U.get(t); return e || (e = {}, U.set(t, e)), e; }, R = function (t, e) { switch (e.type) {
                case _: return x.luaG_runerror(t, g("table index is nil", !0));
                case p: if (isNaN(e.value))
                    return x.luaG_runerror(t, g("table index is NaN", !0));
                case v:
                case s:
                case L:
                case i:
                case l:
                case o:
                case A:
                case d: return e.value;
                case h:
                case f: return O(e.tsvalue());
                case c:
                    var r = e.value;
                    switch (n(r)) {
                        case "string": return "*" + r;
                        case "number": return "#" + r;
                        case "boolean": return r ? "?true" : "?false";
                        case "function": return N(r);
                        case "object": if (r instanceof m.lua_State && r.l_G === t.l_G || r instanceof y || r instanceof b.Udata || r instanceof b.LClosure || r instanceof b.CClosure)
                            return N(r);
                        default: return r;
                    }
                default: throw new Error("unknown key type: " + e.type);
            } }, y = function t(e) { !function (t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }(this, t), this.id = e.l_G.id_counter++, this.strong = new Map, this.dead_strong = new Map, this.dead_weak = void 0, this.f = void 0, this.l = void 0, this.metatable = null, this.flags = -1; }, S = function (t, e, r, n) { t.dead_strong.clear(), t.dead_weak = void 0; var a = null, u = { key: r, value: n, p: a = t.l, n: void 0 }; t.f || (t.f = u), a && (a.n = u), t.strong.set(e, u), t.l = u; }, w = function (t, e) { var r = t.strong.get(e); if (r) {
                r.key.setdeadvalue(), r.value = void 0;
                var a = r.n, u = r.p;
                r.p = void 0, u && (u.n = a), a && (a.p = u), t.f === r && (t.f = a), t.l === r && (t.l = u), t.strong.delete(e), !function (t) { return "object" === n(t) ? null !== t : "function" == typeof t; }(e) ? t.dead_strong.set(e, r) : (t.dead_weak || (t.dead_weak = new WeakMap), t.dead_weak.set(e, r));
            } }, I = function (t, e) { var r = t.strong.get(e); return r ? r.value : b.luaO_nilobject; }, M = function (t, e) { return T("number" == typeof e && (0 | e) === e), I(t, e); };
            t.exports.invalidateTMcache = function (t) { t.flags = 0; }, t.exports.luaH_get = function (t, e, r) { return T(r instanceof b.TValue), r.ttisnil() || r.ttisfloat() && isNaN(r.value) ? b.luaO_nilobject : I(e, R(t, r)); }, t.exports.luaH_getint = M, t.exports.luaH_getn = function (t) { for (var e = 0, r = t.strong.size + 1; r - e > 1;) {
                var n = Math.floor((e + r) / 2);
                M(t, n).ttisnil() ? r = n : e = n;
            } return e; }, t.exports.luaH_getstr = function (t, e) { return T(e instanceof E), I(t, O(e)); }, t.exports.luaH_setfrom = function (t, e, r, n) { T(r instanceof b.TValue); var a = R(t, r); if (n.ttisnil())
                w(e, a);
            else {
                var u = e.strong.get(a);
                if (u)
                    u.value.setfrom(n);
                else {
                    var s, o = r.value;
                    s = r.ttisfloat() && (0 | o) === o ? new b.TValue(v, o) : new b.TValue(r.type, o);
                    var l = new b.TValue(n.type, n.value);
                    S(e, a, s, l);
                }
            } }, t.exports.luaH_setint = function (t, e, r) { T("number" == typeof e && (0 | e) === e && r instanceof b.TValue); var n = e; if (r.ttisnil())
                w(t, n);
            else {
                var a = t.strong.get(n);
                if (a)
                    a.value.setfrom(r);
                else {
                    var u = new b.TValue(v, e), s = new b.TValue(r.type, r.value);
                    S(t, n, u, s);
                }
            } }, t.exports.luaH_new = function (t) { return new y(t); }, t.exports.luaH_next = function (t, e, r) { var n, a = t.stack[r]; if (a.type === _) {
                if (!(n = e.f))
                    return !1;
            }
            else {
                var u = R(t, a);
                if (n = e.strong.get(u)) {
                    if (!(n = n.n))
                        return !1;
                }
                else {
                    if (!(n = e.dead_weak && e.dead_weak.get(u) || e.dead_strong.get(u)))
                        return x.luaG_runerror(t, g("invalid key to 'next'"));
                    do {
                        if (!(n = n.n))
                            return !1;
                    } while (n.key.ttisdeadkey());
                }
            } return b.setobj2s(t, r, n.key), b.setobj2s(t, r + 1, n.value), !0; }, t.exports.Table = y;
        }, function (t, e, r) {
            "use strict";
            function n(t, e) { for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            } }
            var a = r(1), u = a.is_luastring, s = a.luastring_eq, o = a.luastring_from, l = a.to_luastring, i = r(4).lua_assert, c = function () { function t(e, r) { !function (t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }(this, t), this.hash = null, this.realstring = r; } return function (t, e, r) { e && n(t.prototype, e), r && n(t, r); }(t, [{ key: "getstr", value: function () { return this.realstring; } }, { key: "tsslen", value: function () { return this.realstring.length; } }]), t; }(), f = function (t) { i(u(t)); for (var e = t.length, r = "|", n = 0; n < e; n++)
                r += t[n].toString(16); return r; }, _ = function (t, e) { return i(e instanceof Uint8Array), new c(t, e); };
            t.exports.luaS_eqlngstr = function (t, e) { return i(t instanceof c), i(e instanceof c), t == e || s(t.realstring, e.realstring); }, t.exports.luaS_hash = f, t.exports.luaS_hashlongstr = function (t) { return i(t instanceof c), null === t.hash && (t.hash = f(t.getstr())), t.hash; }, t.exports.luaS_bless = _, t.exports.luaS_new = function (t, e) { return _(t, o(e)); }, t.exports.luaS_newliteral = function (t, e) { return _(t, l(e)); }, t.exports.TString = c;
        }, function (t, e, r) {
            "use strict";
            var n = r(1), a = n.LUA_HOOKCOUNT, u = n.LUA_HOOKLINE, s = n.LUA_MASKCOUNT, o = n.LUA_MASKLINE, l = n.constant_types, i = l.LUA_TBOOLEAN, c = l.LUA_TNIL, f = l.LUA_TTABLE, _ = n.thread_status, p = _.LUA_ERRRUN, v = _.LUA_YIELD, h = n.from_userstring, L = n.luastring_eq, d = n.luastring_indexOf, A = n.to_luastring, g = r(4), T = g.api_check, x = g.lua_assert, b = r(3).LUA_IDSIZE, k = r(19), O = r(8), E = r(13), m = r(21), U = r(6), N = r(16), R = r(12), y = r(9), S = r(14), w = r(15), I = function (t) { return x(t.callstatus & R.CIST_LUA), t.l_savedpc - 1; }, M = function (t) { return 0 !== t.func.value.p.lineinfo.length ? t.func.value.p.lineinfo[I(t)] : -1; }, P = function (t) { if (t.status === v) {
                var e = t.ci, r = e.funcOff;
                e.func = t.stack[e.extra], e.funcOff = e.extra, e.extra = r;
            } }, C = function (t, e) { x(e < t.upvalues.length); var r = t.upvalues[e].name; return null === r ? A("?", !0) : r.getstr(); }, D = function (t, e, r) { var n, a = null; if (e.callstatus & R.CIST_LUA) {
                if (r < 0)
                    return function (t, e) { var r = t.func.value.p.numparams; return e >= t.l_base - t.funcOff - r ? null : { pos: t.funcOff + r + e, name: A("(*vararg)", !0) }; }(e, -r);
                n = e.l_base, a = E.luaF_getlocalname(e.func.value.p, r, I(e));
            }
            else
                n = e.funcOff + 1; if (null === a) {
                if (!((e === t.ci ? t.top : e.next.funcOff) - n >= r && r > 0))
                    return null;
                a = A("(*temporary)", !0);
            } return { pos: n + (r - 1), name: a }; }, V = function (t, e) { if (null === e || e instanceof U.CClosure)
                t.source = A("=[JS]", !0), t.linedefined = -1, t.lastlinedefined = -1, t.what = A("J", !0);
            else {
                var r = e.p;
                t.source = r.source ? r.source.getstr() : A("=?", !0), t.linedefined = r.linedefined, t.lastlinedefined = r.lastlinedefined, t.what = 0 === t.linedefined ? A("main", !0) : A("Lua", !0);
            } t.short_src = U.luaO_chunkid(t.source, b); }, B = function (t, e) { var r = { name: null, funcname: null }; return null === e ? null : e.callstatus & R.CIST_FIN ? (r.name = A("__gc", !0), r.funcname = A("metamethod", !0), r) : !(e.callstatus & R.CIST_TAIL) && e.previous.callstatus & R.CIST_LUA ? j(t, e.previous) : null; }, G = function (t, e, r) { var n = { name: null, funcname: null }; if (N.ISK(r)) {
                var a = t.k[N.INDEXK(r)];
                if (a.ttisstring())
                    return n.name = a.svalue(), n;
            }
            else {
                var u = F(t, e, r);
                if (u && 99 === u.funcname[0])
                    return u;
            } return n.name = A("?", !0), n; }, K = function (t, e) { return t < e ? -1 : t; }, F = function t(e, r, n) { var a = { name: E.luaF_getlocalname(e, n + 1, r), funcname: null }; if (a.name)
                return a.funcname = A("local", !0), a; var u = function (t, e, r) { for (var n = -1, a = 0, u = N.OpCodesI, s = 0; s < e; s++) {
                var o = t.code[s], l = o.A;
                switch (o.opcode) {
                    case u.OP_LOADNIL:
                        var i = o.B;
                        l <= r && r <= l + i && (n = K(s, a));
                        break;
                    case u.OP_TFORCALL:
                        r >= l + 2 && (n = K(s, a));
                        break;
                    case u.OP_CALL:
                    case u.OP_TAILCALL:
                        r >= l && (n = K(s, a));
                        break;
                    case u.OP_JMP:
                        var c = s + 1 + o.sBx;
                        s < c && c <= e && c > a && (a = c);
                        break;
                    default: N.testAMode(o.opcode) && r === l && (n = K(s, a));
                }
            } return n; }(e, r, n), s = N.OpCodesI; if (-1 !== u) {
                var o = e.code[u];
                switch (o.opcode) {
                    case s.OP_MOVE:
                        var l = o.B;
                        if (l < o.A)
                            return t(e, u, l);
                        break;
                    case s.OP_GETTABUP:
                    case s.OP_GETTABLE:
                        var i = o.C, c = o.B, f = o.opcode === s.OP_GETTABLE ? E.luaF_getlocalname(e, c + 1, u) : C(e, c);
                        return a.name = G(e, u, i).name, a.funcname = f && L(f, m.LUA_ENV) ? A("global", !0) : A("field", !0), a;
                    case s.OP_GETUPVAL: return a.name = C(e, o.B), a.funcname = A("upvalue", !0), a;
                    case s.OP_LOADK:
                    case s.OP_LOADKX:
                        var _ = o.opcode === s.OP_LOADK ? o.Bx : e.code[u + 1].Ax;
                        if (e.k[_].ttisstring())
                            return a.name = e.k[_].svalue(), a.funcname = A("constant", !0), a;
                        break;
                    case s.OP_SELF:
                        var p = o.C;
                        return a.name = G(e, u, p).name, a.funcname = A("method", !0), a;
                }
            } return null; }, j = function (t, e) { var r = { name: null, funcname: null }, n = 0, a = e.func.value.p, u = I(e), s = a.code[u], o = N.OpCodesI; if (e.callstatus & R.CIST_HOOKED)
                return r.name = A("?", !0), r.funcname = A("hook", !0), r; switch (s.opcode) {
                case o.OP_CALL:
                case o.OP_TAILCALL: return F(a, u, s.A);
                case o.OP_TFORCALL: return r.name = A("for iterator", !0), r.funcname = A("for iterator", !0), r;
                case o.OP_SELF:
                case o.OP_GETTABUP:
                case o.OP_GETTABLE:
                    n = S.TMS.TM_INDEX;
                    break;
                case o.OP_SETTABUP:
                case o.OP_SETTABLE:
                    n = S.TMS.TM_NEWINDEX;
                    break;
                case o.OP_ADD:
                    n = S.TMS.TM_ADD;
                    break;
                case o.OP_SUB:
                    n = S.TMS.TM_SUB;
                    break;
                case o.OP_MUL:
                    n = S.TMS.TM_MUL;
                    break;
                case o.OP_MOD:
                    n = S.TMS.TM_MOD;
                    break;
                case o.OP_POW:
                    n = S.TMS.TM_POW;
                    break;
                case o.OP_DIV:
                    n = S.TMS.TM_DIV;
                    break;
                case o.OP_IDIV:
                    n = S.TMS.TM_IDIV;
                    break;
                case o.OP_BAND:
                    n = S.TMS.TM_BAND;
                    break;
                case o.OP_BOR:
                    n = S.TMS.TM_BOR;
                    break;
                case o.OP_BXOR:
                    n = S.TMS.TM_BXOR;
                    break;
                case o.OP_SHL:
                    n = S.TMS.TM_SHL;
                    break;
                case o.OP_SHR:
                    n = S.TMS.TM_SHR;
                    break;
                case o.OP_UNM:
                    n = S.TMS.TM_UNM;
                    break;
                case o.OP_BNOT:
                    n = S.TMS.TM_BNOT;
                    break;
                case o.OP_LEN:
                    n = S.TMS.TM_LEN;
                    break;
                case o.OP_CONCAT:
                    n = S.TMS.TM_CONCAT;
                    break;
                case o.OP_EQ:
                    n = S.TMS.TM_EQ;
                    break;
                case o.OP_LT:
                    n = S.TMS.TM_LT;
                    break;
                case o.OP_LE:
                    n = S.TMS.TM_LE;
                    break;
                default: return null;
            } return r.name = t.l_G.tmname[n].getstr(), r.funcname = A("metamethod", !0), r; }, H = function (t, e) { var r = t.ci, n = null; if (r.callstatus & R.CIST_LUA) {
                n = function (t, e, r) { for (var n = e.func.value, a = 0; a < n.nupvalues; a++)
                    if (n.upvals[a] === r)
                        return { name: C(n.p, a), funcname: A("upvalue", !0) }; return null; }(0, r, e);
                var a = function (t, e, r) { for (var n = e.l_base; n < e.top; n++)
                    if (t.stack[n] === r)
                        return n; return !1; }(t, r, e);
                !n && a && (n = F(r.func.value.p, I(r), a - r.l_base));
            } return n ? U.luaO_pushfstring(t, A(" (%s '%s')", !0), n.funcname, n.name) : A("", !0); }, X = function (t, e, r) { var n = S.luaT_objtypename(t, e); Y(t, A("attempt to %s a %s value%s", !0), r, n, H(t, e)); }, z = function (t, e, r, n) { var a; return a = r ? U.luaO_chunkid(r.getstr(), b) : A("?", !0), U.luaO_pushfstring(t, A("%s:%d: %s", !0), a, n, e); }, Y = function (t, e) { for (var r = t.ci, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++)
                a[u - 2] = arguments[u]; var s = U.luaO_pushvfstring(t, e, a); r.callstatus & R.CIST_LUA && z(t, s, r.func.value.p.source, M(r)), J(t); }, J = function (t) { if (0 !== t.errfunc) {
                var e = t.errfunc;
                U.pushobj2s(t, t.stack[t.top - 1]), U.setobjs2s(t, t.top - 2, e), O.luaD_callnoyield(t, t.top - 2, 1);
            } O.luaD_throw(t, p); };
            t.exports.luaG_addinfo = z, t.exports.luaG_concaterror = function (t, e, r) { (e.ttisstring() || w.cvt2str(e)) && (e = r), X(t, e, A("concatenate", !0)); }, t.exports.luaG_errormsg = J, t.exports.luaG_opinterror = function (t, e, r, n) { !1 === w.tonumber(e) && (r = e), X(t, r, n); }, t.exports.luaG_ordererror = function (t, e, r) { var n = S.luaT_objtypename(t, e), a = S.luaT_objtypename(t, r); L(n, a) ? Y(t, A("attempt to compare two %s values", !0), n) : Y(t, A("attempt to compare %s with %s", !0), n, a); }, t.exports.luaG_runerror = Y, t.exports.luaG_tointerror = function (t, e, r) { !1 === w.tointeger(e) && (r = e), Y(t, A("number%s has no integer representation", !0), H(t, r)); }, t.exports.luaG_traceexec = function (t) { var e = t.ci, r = t.hookmask, n = 0 == --t.hookcount && r & s; if (n)
                t.hookcount = t.basehookcount;
            else if (!(r & o))
                return; if (e.callstatus & R.CIST_HOOKYIELD)
                e.callstatus &= ~R.CIST_HOOKYIELD;
            else {
                if (n && O.luaD_hook(t, a, -1), r & o) {
                    var l = e.func.value.p, i = e.l_savedpc - 1, c = 0 !== l.lineinfo.length ? l.lineinfo[i] : -1;
                    (0 === i || e.l_savedpc <= t.oldpc || c !== (0 !== l.lineinfo.length ? l.lineinfo[t.oldpc - 1] : -1)) && O.luaD_hook(t, u, c);
                }
                t.oldpc = e.l_savedpc, t.status === v && (n && (t.hookcount = 1), e.l_savedpc--, e.callstatus |= R.CIST_HOOKYIELD, e.funcOff = t.top - 1, e.func = t.stack[e.funcOff], O.luaD_throw(t, v));
            } }, t.exports.luaG_typeerror = X, t.exports.lua_gethook = function (t) { return t.hook; }, t.exports.lua_gethookcount = function (t) { return t.basehookcount; }, t.exports.lua_gethookmask = function (t) { return t.hookmask; }, t.exports.lua_getinfo = function (t, e, r) { var n, a, u, s; return e = h(e), P(t), 62 === e[0] ? (u = null, s = t.stack[t.top - 1], T(t, s.ttisfunction(), "function expected"), e = e.subarray(1), t.top--) : (s = (u = r.i_ci).func, x(u.func.ttisfunction())), n = function (t, e, r, n, a) { for (var u = 1; e.length > 0; e = e.subarray(1))
                switch (e[0]) {
                    case 83:
                        V(r, n);
                        break;
                    case 108:
                        r.currentline = a && a.callstatus & R.CIST_LUA ? M(a) : -1;
                        break;
                    case 117:
                        r.nups = null === n ? 0 : n.nupvalues, null === n || n instanceof U.CClosure ? (r.isvararg = !0, r.nparams = 0) : (r.isvararg = n.p.is_vararg, r.nparams = n.p.numparams);
                        break;
                    case 116:
                        r.istailcall = a ? a.callstatus & R.CIST_TAIL : 0;
                        break;
                    case 110:
                        var s = B(t, a);
                        null === s ? (r.namewhat = A("", !0), r.name = null) : (r.namewhat = s.funcname, r.name = s.name);
                        break;
                    case 76:
                    case 102: break;
                    default: u = 0;
                } return u; }(t, e, r, a = s.ttisclosure() ? s.value : null, u), d(e, 102) >= 0 && (U.pushobj2s(t, s), T(t, t.top <= t.ci.top, "stack overflow")), P(t), d(e, 76) >= 0 && function (t, e) { if (null === e || e instanceof U.CClosure)
                t.stack[t.top] = new U.TValue(c, null), k.api_incr_top(t);
            else {
                var r = e.p.lineinfo, n = y.luaH_new(t);
                t.stack[t.top] = new U.TValue(f, n), k.api_incr_top(t);
                for (var a = new U.TValue(i, !0), u = 0; u < r.length; u++)
                    y.luaH_setint(n, r[u], a);
            } }(t, a), n; }, t.exports.lua_getlocal = function (t, e, r) { var n; if (P(t), null === e)
                n = t.stack[t.top - 1].ttisLclosure() ? E.luaF_getlocalname(t.stack[t.top - 1].value.p, r, 0) : null;
            else {
                var a = D(t, e.i_ci, r);
                a ? (n = a.name, U.pushobj2s(t, t.stack[a.pos]), T(t, t.top <= t.ci.top, "stack overflow")) : n = null;
            } return P(t), n; }, t.exports.lua_getstack = function (t, e, r) { var n, a; if (e < 0)
                return 0; for (n = t.ci; e > 0 && n !== t.base_ci; n = n.previous)
                e--; return 0 === e && n !== t.base_ci ? (a = 1, r.i_ci = n) : a = 0, a; }, t.exports.lua_sethook = function (t, e, r, n) { null !== e && 0 !== r || (r = 0, e = null), t.ci.callstatus & R.CIST_LUA && (t.oldpc = t.ci.l_savedpc), t.hook = e, t.basehookcount = n, t.hookcount = t.basehookcount, t.hookmask = r; }, t.exports.lua_setlocal = function (t, e, r) { var n; P(t); var a = D(t, e.i_ci, r); return a ? (n = a.name, U.setobjs2s(t, a.pos, t.top - 1), delete t.stack[--t.top]) : n = null, P(t), n; };
        }, function (t, e, r) {
            "use strict";
            function n(t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }
            var a = r(1), u = a.LUA_MINSTACK, s = a.LUA_RIDX_GLOBALS, o = a.LUA_RIDX_MAINTHREAD, l = a.constant_types, i = l.LUA_NUMTAGS, c = l.LUA_TNIL, f = l.LUA_TTABLE, _ = l.LUA_TTHREAD, p = a.thread_status.LUA_OK, v = r(6), h = r(8), L = r(19), d = r(9), A = r(14), g = 2 * u, T = function t() { n(this, t), this.func = null, this.funcOff = NaN, this.top = NaN, this.previous = null, this.next = null, this.l_base = NaN, this.l_code = null, this.l_savedpc = NaN, this.c_k = null, this.c_old_errfunc = null, this.c_ctx = null, this.nresults = NaN, this.callstatus = NaN; }, x = function t(e) { n(this, t), this.id = e.id_counter++, this.base_ci = new T, this.top = NaN, this.stack_last = NaN, this.oldpc = NaN, this.l_G = e, this.stack = null, this.ci = null, this.errorJmp = null, this.nCcalls = 0, this.hook = null, this.hookmask = 0, this.basehookcount = 0, this.allowhook = 1, this.hookcount = this.basehookcount, this.nny = 1, this.status = p, this.errfunc = 0; }, b = function (t) { t.ci.next = null; }, k = function (t, e) { t.stack = new Array(g), t.top = 0, t.stack_last = g - 5; var r = t.base_ci; r.next = r.previous = null, r.callstatus = 0, r.funcOff = t.top, r.func = t.stack[t.top], t.stack[t.top++] = new v.TValue(c, null), r.top = t.top + u, t.ci = r; }, O = function (t) { t.ci = t.base_ci, b(t), t.stack = null; }, E = function (t) { var e = t.l_G; k(t), function (t, e) { var r = d.luaH_new(t); e.l_registry.sethvalue(r), d.luaH_setint(r, o, new v.TValue(_, t)), d.luaH_setint(r, s, new v.TValue(f, d.luaH_new(t))); }(t, e), A.luaT_init(t), e.version = L.lua_version(null); };
            t.exports.lua_State = x, t.exports.CallInfo = T, t.exports.CIST_OAH = 1, t.exports.CIST_LUA = 2, t.exports.CIST_HOOKED = 4, t.exports.CIST_FRESH = 8, t.exports.CIST_YPCALL = 16, t.exports.CIST_TAIL = 32, t.exports.CIST_HOOKYIELD = 64, t.exports.CIST_LEQ = 128, t.exports.CIST_FIN = 256, t.exports.EXTRA_STACK = 5, t.exports.lua_close = function (t) { !function (t) { O(t); }(t = t.l_G.mainthread); }, t.exports.lua_newstate = function () { var t = new function t() { n(this, t), this.id_counter = 1, this.ids = new WeakMap, this.mainthread = null, this.l_registry = new v.TValue(c, null), this.panic = null, this.atnativeerror = null, this.version = null, this.tmname = new Array(A.TMS.TM_N), this.mt = new Array(i); }, e = new x(t); return t.mainthread = e, h.luaD_rawrunprotected(e, E, null) !== p && (e = null), e; }, t.exports.lua_newthread = function (t) { var e = t.l_G, r = new x(e); return t.stack[t.top] = new v.TValue(_, r), L.api_incr_top(t), r.hookmask = t.hookmask, r.basehookcount = t.basehookcount, r.hook = t.hook, r.hookcount = r.basehookcount, k(r), r; }, t.exports.luaE_extendCI = function (t) { var e = new T; return t.ci.next = e, e.previous = t.ci, e.next = null, t.ci = e, e; }, t.exports.luaE_freeCI = b, t.exports.luaE_freethread = function (t, e) { O(e); };
        }, function (t, e, r) {
            "use strict";
            var n = r(1).constant_types.LUA_TNIL, a = r(6);
            t.exports.MAXUPVAL = 255, t.exports.Proto = function t(e) { !function (t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }(this, t), this.id = e.l_G.id_counter++, this.k = [], this.p = [], this.code = [], this.cache = null, this.lineinfo = [], this.upvalues = [], this.numparams = 0, this.is_vararg = !1, this.maxstacksize = 0, this.locvars = [], this.linedefined = 0, this.lastlinedefined = 0, this.source = null; }, t.exports.luaF_findupval = function (t, e) { return t.stack[e]; }, t.exports.luaF_close = function (t, e) { for (var r = e; r < t.top; r++) {
                var n = t.stack[r];
                t.stack[r] = new a.TValue(n.type, n.value);
            } }, t.exports.luaF_getlocalname = function (t, e, r) { for (var n = 0; n < t.locvars.length && t.locvars[n].startpc <= r; n++)
                if (r < t.locvars[n].endpc && 0 == --e)
                    return t.locvars[n].varname.getstr(); return null; }, t.exports.luaF_initupvals = function (t, e) { for (var r = 0; r < e.nupvalues; r++)
                e.upvals[r] = new a.TValue(n, null); }, t.exports.luaF_newLclosure = function (t, e) { return new a.LClosure(t, e); };
        }, function (t, e, r) {
            "use strict";
            var n = r(1), a = n.constant_types, u = a.LUA_TTABLE, s = a.LUA_TUSERDATA, o = n.to_luastring, l = r(4).lua_assert, i = r(6), c = r(8), f = r(12), _ = r(10), p = _.luaS_bless, v = _.luaS_new, h = r(9), L = r(11), d = r(15), A = ["no value", "nil", "boolean", "userdata", "number", "string", "table", "function", "userdata", "thread", "proto"].map(function (t) { return o(t); }), g = function (t) { return A[t + 1]; }, T = { TM_INDEX: 0, TM_NEWINDEX: 1, TM_GC: 2, TM_MODE: 3, TM_LEN: 4, TM_EQ: 5, TM_ADD: 6, TM_SUB: 7, TM_MUL: 8, TM_MOD: 9, TM_POW: 10, TM_DIV: 11, TM_IDIV: 12, TM_BAND: 13, TM_BOR: 14, TM_BXOR: 15, TM_SHL: 16, TM_SHR: 17, TM_UNM: 18, TM_BNOT: 19, TM_LT: 20, TM_LE: 21, TM_CONCAT: 22, TM_CALL: 23, TM_N: 24 }, x = o("__name", !0), b = function (t, e, r, n, a, u) { var s = t.top; if (i.pushobj2s(t, e), i.pushobj2s(t, r), i.pushobj2s(t, n), u || i.pushobj2s(t, a), t.ci.callstatus & f.CIST_LUA ? c.luaD_call(t, s, u) : c.luaD_callnoyield(t, s, u), u) {
                var o = t.stack[t.top - 1];
                delete t.stack[--t.top], a.setfrom(o);
            } }, k = function (t, e, r, n, a) { var u = E(t, e, a); return u.ttisnil() && (u = E(t, r, a)), !u.ttisnil() && (b(t, u, e, r, n, 1), !0); }, O = function (t, e, r) { var n = h.luaH_getstr(t, r); return l(e <= T.TM_EQ), n.ttisnil() ? (t.flags |= 1 << e, null) : n; }, E = function (t, e, r) { var n; switch (e.ttnov()) {
                case u:
                case s:
                    n = e.value.metatable;
                    break;
                default: n = t.l_G.mt[e.ttnov()];
            } return n ? h.luaH_getstr(n, t.l_G.tmname[r]) : i.luaO_nilobject; };
            t.exports.fasttm = function (t, e, r) { return null === e ? null : e.flags & 1 << r ? null : O(e, r, t.l_G.tmname[r]); }, t.exports.TMS = T, t.exports.luaT_callTM = b, t.exports.luaT_callbinTM = k, t.exports.luaT_trybinTM = function (t, e, r, n, a) { if (!k(t, e, r, n, a))
                switch (a) {
                    case T.TM_CONCAT: return L.luaG_concaterror(t, e, r);
                    case T.TM_BAND:
                    case T.TM_BOR:
                    case T.TM_BXOR:
                    case T.TM_SHL:
                    case T.TM_SHR:
                    case T.TM_BNOT:
                        var u = d.tonumber(e), s = d.tonumber(r);
                        return !1 !== u && !1 !== s ? L.luaG_tointerror(t, e, r) : L.luaG_opinterror(t, e, r, o("perform bitwise operation on", !0));
                    default: return L.luaG_opinterror(t, e, r, o("perform arithmetic on", !0));
                } }, t.exports.luaT_callorderTM = function (t, e, r, n) { var a = new i.TValue; return k(t, e, r, a, n) ? !a.l_isfalse() : null; }, t.exports.luaT_gettm = O, t.exports.luaT_gettmbyobj = E, t.exports.luaT_init = function (t) { t.l_G.tmname[T.TM_INDEX] = new v(t, o("__index", !0)), t.l_G.tmname[T.TM_NEWINDEX] = new v(t, o("__newindex", !0)), t.l_G.tmname[T.TM_GC] = new v(t, o("__gc", !0)), t.l_G.tmname[T.TM_MODE] = new v(t, o("__mode", !0)), t.l_G.tmname[T.TM_LEN] = new v(t, o("__len", !0)), t.l_G.tmname[T.TM_EQ] = new v(t, o("__eq", !0)), t.l_G.tmname[T.TM_ADD] = new v(t, o("__add", !0)), t.l_G.tmname[T.TM_SUB] = new v(t, o("__sub", !0)), t.l_G.tmname[T.TM_MUL] = new v(t, o("__mul", !0)), t.l_G.tmname[T.TM_MOD] = new v(t, o("__mod", !0)), t.l_G.tmname[T.TM_POW] = new v(t, o("__pow", !0)), t.l_G.tmname[T.TM_DIV] = new v(t, o("__div", !0)), t.l_G.tmname[T.TM_IDIV] = new v(t, o("__idiv", !0)), t.l_G.tmname[T.TM_BAND] = new v(t, o("__band", !0)), t.l_G.tmname[T.TM_BOR] = new v(t, o("__bor", !0)), t.l_G.tmname[T.TM_BXOR] = new v(t, o("__bxor", !0)), t.l_G.tmname[T.TM_SHL] = new v(t, o("__shl", !0)), t.l_G.tmname[T.TM_SHR] = new v(t, o("__shr", !0)), t.l_G.tmname[T.TM_UNM] = new v(t, o("__unm", !0)), t.l_G.tmname[T.TM_BNOT] = new v(t, o("__bnot", !0)), t.l_G.tmname[T.TM_LT] = new v(t, o("__lt", !0)), t.l_G.tmname[T.TM_LE] = new v(t, o("__le", !0)), t.l_G.tmname[T.TM_CONCAT] = new v(t, o("__concat", !0)), t.l_G.tmname[T.TM_CALL] = new v(t, o("__call", !0)); }, t.exports.luaT_objtypename = function (t, e) { var r; if (e.ttistable() && null !== (r = e.value.metatable) || e.ttisfulluserdata() && null !== (r = e.value.metatable)) {
                var n = h.luaH_getstr(r, p(t, x));
                if (n.ttisstring())
                    return n.svalue();
            } return g(e.ttnov()); }, t.exports.ttypename = g;
        }, function (t, e, r) {
            "use strict";
            var n = r(1), a = n.LUA_MASKLINE, u = n.LUA_MASKCOUNT, s = n.LUA_MULTRET, o = n.constant_types, l = o.LUA_TBOOLEAN, i = o.LUA_TLCF, c = o.LUA_TLIGHTUSERDATA, f = o.LUA_TLNGSTR, _ = o.LUA_TNIL, p = o.LUA_TNUMBER, v = o.LUA_TNUMFLT, h = o.LUA_TNUMINT, L = o.LUA_TSHRSTR, d = o.LUA_TTABLE, A = o.LUA_TUSERDATA, g = n.to_luastring, T = r(16), x = T.INDEXK, b = T.ISK, k = T.LFIELDS_PER_FLUSH, O = T.OpCodesI, E = O.OP_ADD, m = O.OP_BAND, U = O.OP_BNOT, N = O.OP_BOR, R = O.OP_BXOR, y = O.OP_CALL, S = O.OP_CLOSURE, w = O.OP_CONCAT, I = O.OP_DIV, M = O.OP_EQ, P = O.OP_EXTRAARG, C = O.OP_FORLOOP, D = O.OP_FORPREP, V = O.OP_GETTABLE, B = O.OP_GETTABUP, G = O.OP_GETUPVAL, K = O.OP_IDIV, F = O.OP_JMP, j = O.OP_LE, H = O.OP_LEN, X = O.OP_LOADBOOL, z = O.OP_LOADK, Y = O.OP_LOADKX, J = O.OP_LOADNIL, Z = O.OP_LT, q = O.OP_MOD, W = O.OP_MOVE, Q = O.OP_MUL, $ = O.OP_NEWTABLE, tt = O.OP_NOT, et = O.OP_POW, rt = O.OP_RETURN, nt = O.OP_SELF, at = O.OP_SETLIST, ut = O.OP_SETTABLE, st = O.OP_SETTABUP, ot = O.OP_SETUPVAL, lt = O.OP_SHL, it = O.OP_SHR, ct = O.OP_SUB, ft = O.OP_TAILCALL, _t = O.OP_TEST, pt = O.OP_TESTSET, vt = O.OP_TFORCALL, ht = O.OP_TFORLOOP, Lt = O.OP_UNM, dt = O.OP_VARARG, At = r(3), gt = At.LUA_MAXINTEGER, Tt = At.LUA_MININTEGER, xt = At.lua_numbertointeger, bt = r(4), kt = bt.lua_assert, Ot = bt.luai_nummod, Et = r(6), mt = r(13), Ut = r(12), Nt = r(10), Rt = Nt.luaS_bless, yt = Nt.luaS_eqlngstr, St = Nt.luaS_hashlongstr, wt = r(8), It = r(14), Mt = r(9), Pt = r(11), Ct = function (t, e, r) { return e + r.A; }, Dt = function (t, e, r) { return e + r.B; }, Vt = function (t, e, r, n) { return b(n.B) ? r[x(n.B)] : t.stack[e + n.B]; }, Bt = function (t, e, r, n) { return b(n.C) ? r[x(n.C)] : t.stack[e + n.C]; }, Gt = function (t, e, r, n) { var a = r.A; 0 !== a && mt.luaF_close(t, e.l_base + a - 1), e.l_savedpc += r.sBx + n; }, Kt = function (t, e) { Gt(t, e, e.l_code[e.l_savedpc], 1); }, Ft = function (t, e, r) { if (e.ttisnumber() && r.ttisnumber())
                return Zt(e, r) ? 1 : 0; if (e.ttisstring() && r.ttisstring())
                return Wt(e.tsvalue(), r.tsvalue()) < 0 ? 1 : 0; var n = It.luaT_callorderTM(t, e, r, It.TMS.TM_LT); return null === n && Pt.luaG_ordererror(t, e, r), n ? 1 : 0; }, jt = function (t, e, r) { var n; return e.ttisnumber() && r.ttisnumber() ? qt(e, r) ? 1 : 0 : e.ttisstring() && r.ttisstring() ? Wt(e.tsvalue(), r.tsvalue()) <= 0 ? 1 : 0 : null !== (n = It.luaT_callorderTM(t, e, r, It.TMS.TM_LE)) ? n ? 1 : 0 : (t.ci.callstatus |= Ut.CIST_LEQ, n = It.luaT_callorderTM(t, r, e, It.TMS.TM_LT), t.ci.callstatus ^= Ut.CIST_LEQ, null === n && Pt.luaG_ordererror(t, e, r), n ? 0 : 1); }, Ht = function (t, e, r) { if (e.ttype() !== r.ttype())
                return e.ttnov() !== r.ttnov() || e.ttnov() !== p ? 0 : e.value === r.value ? 1 : 0; var n; switch (e.ttype()) {
                case _: return 1;
                case l: return e.value == r.value ? 1 : 0;
                case c:
                case h:
                case v:
                case i: return e.value === r.value ? 1 : 0;
                case L:
                case f: return yt(e.tsvalue(), r.tsvalue()) ? 1 : 0;
                case A:
                case d:
                    if (e.value === r.value)
                        return 1;
                    if (null === t)
                        return 0;
                    null === (n = It.fasttm(t, e.value.metatable, It.TMS.TM_EQ)) && (n = It.fasttm(t, r.value.metatable, It.TMS.TM_EQ));
                    break;
                default: return e.value === r.value ? 1 : 0;
            } if (null === n)
                return 0; var a = new Et.TValue; return It.luaT_callTM(t, n, e, r, a, 1), a.l_isfalse() ? 0 : 1; }, Xt = function (t, e) { var r = !1, n = zt(t, e < 0 ? 2 : 1); if (!1 === n) {
                var a = Jt(t);
                if (!1 === a)
                    return !1;
                0 < a ? (n = gt, e < 0 && (r = !0)) : (n = Tt, e >= 0 && (r = !0));
            } return { stopnow: r, ilimit: n }; }, zt = function t(e, r) { if (e.ttisfloat()) {
                var n = e.value, a = Math.floor(n);
                if (n !== a) {
                    if (0 === r)
                        return !1;
                    r > 1 && (a += 1);
                }
                return xt(a);
            } if (e.ttisinteger())
                return e.value; if (se(e)) {
                var u = new Et.TValue;
                if (Et.luaO_str2num(e.svalue(), u) === e.vslen() + 1)
                    return t(u, r);
            } return !1; }, Yt = function (t) { return t.ttisinteger() ? t.value : zt(t, 0); }, Jt = function (t) { if (t.ttnov() === p)
                return t.value; if (se(t)) {
                var e = new Et.TValue;
                if (Et.luaO_str2num(t.svalue(), e) === t.vslen() + 1)
                    return e.value;
            } return !1; }, Zt = function (t, e) { return t.value < e.value; }, qt = function (t, e) { return t.value <= e.value; }, Wt = function (t, e) { var r = St(t), n = St(e); return r === n ? 0 : r < n ? -1 : 1; }, Qt = function (t, e, r) { var n; switch (r.ttype()) {
                case d:
                    var a = r.value;
                    if (null !== (n = It.fasttm(t, a.metatable, It.TMS.TM_LEN)))
                        break;
                    return void e.setivalue(Mt.luaH_getn(a));
                case L:
                case f: return void e.setivalue(r.vslen());
                default: (n = It.luaT_gettmbyobj(t, r, It.TMS.TM_LEN)).ttisnil() && Pt.luaG_typeerror(t, r, g("get length of", !0));
            } It.luaT_callTM(t, n, r, r, e, 1); }, $t = Math.imul || function (t, e) { var r = 65535 & t, n = 65535 & e; return r * n + ((t >>> 16 & 65535) * n + r * (e >>> 16 & 65535) << 16 >>> 0) | 0; }, te = function (t, e, r) { return 0 === r && Pt.luaG_runerror(t, g("attempt to divide by zero")), 0 | Math.floor(e / r); }, ee = function (t, e, r) { return 0 === r && Pt.luaG_runerror(t, g("attempt to perform 'n%%0'")), e - Math.floor(e / r) * r | 0; }, re = function (t, e) { return e < 0 ? e <= -32 ? 0 : t >>> -e : e >= 32 ? 0 : t << e; }, ne = function (t, e, r, n) { var a = t.cache; if (null !== a)
                for (var u = t.upvalues, s = u.length, o = 0; o < s; o++) {
                    var l = u[o].instack ? r[n + u[o].idx] : e[u[o].idx];
                    if (a.upvals[o] !== l)
                        return null;
                } return a; }, ae = function (t, e, r, n, a) { var u = e.upvalues.length, s = e.upvalues, o = new Et.LClosure(t, u); o.p = e, t.stack[a].setclLvalue(o); for (var l = 0; l < u; l++)
                s[l].instack ? o.upvals[l] = mt.luaF_findupval(t, n + s[l].idx) : o.upvals[l] = r[s[l].idx]; e.cache = o; }, ue = function (t) { return t.ttisnumber(); }, se = function (t) { return t.ttisstring(); }, oe = function (t, e) { var r = t.stack[e]; return !!r.ttisstring() || !!ue(r) && (Et.luaO_tostring(t, r), !0); }, le = function (t) { return t.ttisstring() && 0 === t.vslen(); }, ie = function (t, e, r, n) { var a = 0; do {
                var u = t.stack[e - r], s = u.vslen(), o = u.svalue();
                n.set(o, a), a += s;
            } while (--r > 0); }, ce = function (t, e) { kt(e >= 2); do {
                var r = t.top, n = 2;
                if ((t.stack[r - 2].ttisstring() || ue(t.stack[r - 2])) && oe(t, r - 1))
                    if (le(t.stack[r - 1]))
                        oe(t, r - 2);
                    else if (le(t.stack[r - 2]))
                        Et.setobjs2s(t, r - 2, r - 1);
                    else {
                        var a = t.stack[r - 1].vslen();
                        for (n = 1; n < e && oe(t, r - n - 1); n++) {
                            a += t.stack[r - n - 1].vslen();
                        }
                        var u = new Uint8Array(a);
                        ie(t, r, n, u);
                        var s = Rt(t, u);
                        Et.setsvalue2s(t, r - n, s);
                    }
                else
                    It.luaT_trybinTM(t, t.stack[r - 2], t.stack[r - 1], t.stack[r - 2], It.TMS.TM_CONCAT);
                for (e -= n - 1; t.top > r - (n - 1);)
                    delete t.stack[--t.top];
            } while (e > 1); }, fe = function (t, e, r, n) { for (var a = 0; a < 2e3; a++) {
                var u = void 0;
                if (e.ttistable()) {
                    var s = Mt.luaH_get(t, e.value, r);
                    if (!s.ttisnil())
                        return void Et.setobj2s(t, n, s);
                    if (null === (u = It.fasttm(t, e.value.metatable, It.TMS.TM_INDEX)))
                        return void t.stack[n].setnilvalue();
                }
                else
                    (u = It.luaT_gettmbyobj(t, e, It.TMS.TM_INDEX)).ttisnil() && Pt.luaG_typeerror(t, e, g("index", !0));
                if (u.ttisfunction())
                    return void It.luaT_callTM(t, u, e, r, t.stack[n], 1);
                e = u;
            } Pt.luaG_runerror(t, g("'__index' chain too long; possible loop", !0)); }, _e = function (t, e, r, n) { for (var a = 0; a < 2e3; a++) {
                var u = void 0;
                if (e.ttistable()) {
                    var s = e.value;
                    if (!Mt.luaH_get(t, s, r).ttisnil() || null === (u = It.fasttm(t, s.metatable, It.TMS.TM_NEWINDEX)))
                        return Mt.luaH_setfrom(t, s, r, n), void Mt.invalidateTMcache(s);
                }
                else
                    (u = It.luaT_gettmbyobj(t, e, It.TMS.TM_NEWINDEX)).ttisnil() && Pt.luaG_typeerror(t, e, g("index", !0));
                if (u.ttisfunction())
                    return void It.luaT_callTM(t, u, e, r, n, 0);
                e = u;
            } Pt.luaG_runerror(t, g("'__newindex' chain too long; possible loop", !0)); };
            t.exports.cvt2str = ue, t.exports.cvt2num = se, t.exports.luaV_gettable = fe, t.exports.luaV_concat = ce, t.exports.luaV_div = te, t.exports.luaV_equalobj = Ht, t.exports.luaV_execute = function (t) { var e = t.ci; e.callstatus |= Ut.CIST_FRESH; t: for (;;) {
                kt(e === t.ci);
                var r = e.func.value, n = r.p.k, o = e.l_base, l = e.l_code[e.l_savedpc++];
                t.hookmask & (a | u) && Pt.luaG_traceexec(t);
                var i = Ct(0, o, l);
                switch (l.opcode) {
                    case W:
                        Et.setobjs2s(t, i, Dt(0, o, l));
                        break;
                    case z:
                        var c = n[l.Bx];
                        Et.setobj2s(t, i, c);
                        break;
                    case Y:
                        kt(e.l_code[e.l_savedpc].opcode === P);
                        var f = n[e.l_code[e.l_savedpc++].Ax];
                        Et.setobj2s(t, i, f);
                        break;
                    case X:
                        t.stack[i].setbvalue(0 !== l.B), 0 !== l.C && e.l_savedpc++;
                        break;
                    case J:
                        for (var _ = 0; _ <= l.B; _++)
                            t.stack[i + _].setnilvalue();
                        break;
                    case G:
                        var p = l.B;
                        Et.setobj2s(t, i, r.upvals[p]);
                        break;
                    case B:
                        var v = r.upvals[l.B], h = Bt(t, o, n, l);
                        fe(t, v, h, i);
                        break;
                    case V:
                        var L = t.stack[Dt(0, o, l)], d = Bt(t, o, n, l);
                        fe(t, L, d, i);
                        break;
                    case st:
                        var A = r.upvals[l.A], T = Vt(t, o, n, l), x = Bt(t, o, n, l);
                        _e(t, A, T, x);
                        break;
                    case ot:
                        r.upvals[l.B].setfrom(t.stack[i]);
                        break;
                    case ut:
                        var b = t.stack[i], O = Vt(t, o, n, l), At = Bt(t, o, n, l);
                        _e(t, b, O, At);
                        break;
                    case $:
                        t.stack[i].sethvalue(Mt.luaH_new(t));
                        break;
                    case nt:
                        var gt = Dt(0, o, l), Tt = Bt(t, o, n, l);
                        Et.setobjs2s(t, i + 1, gt), fe(t, t.stack[gt], Tt, i);
                        break;
                    case E:
                        var xt = Vt(t, o, n, l), bt = Bt(t, o, n, l), Nt = void 0, Rt = void 0;
                        xt.ttisinteger() && bt.ttisinteger() ? t.stack[i].setivalue(xt.value + bt.value | 0) : !1 !== (Nt = Jt(xt)) && !1 !== (Rt = Jt(bt)) ? t.stack[i].setfltvalue(Nt + Rt) : It.luaT_trybinTM(t, xt, bt, t.stack[i], It.TMS.TM_ADD);
                        break;
                    case ct:
                        var yt = Vt(t, o, n, l), St = Bt(t, o, n, l), zt = void 0, Zt = void 0;
                        yt.ttisinteger() && St.ttisinteger() ? t.stack[i].setivalue(yt.value - St.value | 0) : !1 !== (zt = Jt(yt)) && !1 !== (Zt = Jt(St)) ? t.stack[i].setfltvalue(zt - Zt) : It.luaT_trybinTM(t, yt, St, t.stack[i], It.TMS.TM_SUB);
                        break;
                    case Q:
                        var qt = Vt(t, o, n, l), Wt = Bt(t, o, n, l), ue = void 0, se = void 0;
                        qt.ttisinteger() && Wt.ttisinteger() ? t.stack[i].setivalue($t(qt.value, Wt.value)) : !1 !== (ue = Jt(qt)) && !1 !== (se = Jt(Wt)) ? t.stack[i].setfltvalue(ue * se) : It.luaT_trybinTM(t, qt, Wt, t.stack[i], It.TMS.TM_MUL);
                        break;
                    case q:
                        var oe = Vt(t, o, n, l), le = Bt(t, o, n, l), ie = void 0, pe = void 0;
                        oe.ttisinteger() && le.ttisinteger() ? t.stack[i].setivalue(ee(t, oe.value, le.value)) : !1 !== (ie = Jt(oe)) && !1 !== (pe = Jt(le)) ? t.stack[i].setfltvalue(Ot(t, ie, pe)) : It.luaT_trybinTM(t, oe, le, t.stack[i], It.TMS.TM_MOD);
                        break;
                    case et:
                        var ve, he = Vt(t, o, n, l), Le = Bt(t, o, n, l), de = void 0;
                        !1 !== (ve = Jt(he)) && !1 !== (de = Jt(Le)) ? t.stack[i].setfltvalue(Math.pow(ve, de)) : It.luaT_trybinTM(t, he, Le, t.stack[i], It.TMS.TM_POW);
                        break;
                    case I:
                        var Ae, ge = Vt(t, o, n, l), Te = Bt(t, o, n, l), xe = void 0;
                        !1 !== (Ae = Jt(ge)) && !1 !== (xe = Jt(Te)) ? t.stack[i].setfltvalue(Ae / xe) : It.luaT_trybinTM(t, ge, Te, t.stack[i], It.TMS.TM_DIV);
                        break;
                    case K:
                        var be = Vt(t, o, n, l), ke = Bt(t, o, n, l), Oe = void 0, Ee = void 0;
                        be.ttisinteger() && ke.ttisinteger() ? t.stack[i].setivalue(te(t, be.value, ke.value)) : !1 !== (Oe = Jt(be)) && !1 !== (Ee = Jt(ke)) ? t.stack[i].setfltvalue(Math.floor(Oe / Ee)) : It.luaT_trybinTM(t, be, ke, t.stack[i], It.TMS.TM_IDIV);
                        break;
                    case m:
                        var me, Ue = Vt(t, o, n, l), Ne = Bt(t, o, n, l), Re = void 0;
                        !1 !== (me = Yt(Ue)) && !1 !== (Re = Yt(Ne)) ? t.stack[i].setivalue(me & Re) : It.luaT_trybinTM(t, Ue, Ne, t.stack[i], It.TMS.TM_BAND);
                        break;
                    case N:
                        var ye, Se = Vt(t, o, n, l), we = Bt(t, o, n, l), Ie = void 0;
                        !1 !== (ye = Yt(Se)) && !1 !== (Ie = Yt(we)) ? t.stack[i].setivalue(ye | Ie) : It.luaT_trybinTM(t, Se, we, t.stack[i], It.TMS.TM_BOR);
                        break;
                    case R:
                        var Me, Pe = Vt(t, o, n, l), Ce = Bt(t, o, n, l), De = void 0;
                        !1 !== (Me = Yt(Pe)) && !1 !== (De = Yt(Ce)) ? t.stack[i].setivalue(Me ^ De) : It.luaT_trybinTM(t, Pe, Ce, t.stack[i], It.TMS.TM_BXOR);
                        break;
                    case lt:
                        var Ve, Be = Vt(t, o, n, l), Ge = Bt(t, o, n, l), Ke = void 0;
                        !1 !== (Ve = Yt(Be)) && !1 !== (Ke = Yt(Ge)) ? t.stack[i].setivalue(re(Ve, Ke)) : It.luaT_trybinTM(t, Be, Ge, t.stack[i], It.TMS.TM_SHL);
                        break;
                    case it:
                        var Fe, je = Vt(t, o, n, l), He = Bt(t, o, n, l), Xe = void 0;
                        !1 !== (Fe = Yt(je)) && !1 !== (Xe = Yt(He)) ? t.stack[i].setivalue(re(Fe, -Xe)) : It.luaT_trybinTM(t, je, He, t.stack[i], It.TMS.TM_SHR);
                        break;
                    case Lt:
                        var ze = t.stack[Dt(0, o, l)], Ye = void 0;
                        ze.ttisinteger() ? t.stack[i].setivalue(0 | -ze.value) : !1 !== (Ye = Jt(ze)) ? t.stack[i].setfltvalue(-Ye) : It.luaT_trybinTM(t, ze, ze, t.stack[i], It.TMS.TM_UNM);
                        break;
                    case U:
                        var Je = t.stack[Dt(0, o, l)];
                        Je.ttisinteger() ? t.stack[i].setivalue(~Je.value) : It.luaT_trybinTM(t, Je, Je, t.stack[i], It.TMS.TM_BNOT);
                        break;
                    case tt:
                        var Ze = t.stack[Dt(0, o, l)];
                        t.stack[i].setbvalue(Ze.l_isfalse());
                        break;
                    case H:
                        Qt(t, t.stack[i], t.stack[Dt(0, o, l)]);
                        break;
                    case w:
                        var qe = l.B, We = l.C;
                        t.top = o + We + 1, ce(t, We - qe + 1);
                        var Qe = o + qe;
                        Et.setobjs2s(t, i, Qe), wt.adjust_top(t, e.top);
                        break;
                    case F:
                        Gt(t, e, l, 0);
                        break;
                    case M:
                        Ht(t, Vt(t, o, n, l), Bt(t, o, n, l)) !== l.A ? e.l_savedpc++ : Kt(t, e);
                        break;
                    case Z:
                        Ft(t, Vt(t, o, n, l), Bt(t, o, n, l)) !== l.A ? e.l_savedpc++ : Kt(t, e);
                        break;
                    case j:
                        jt(t, Vt(t, o, n, l), Bt(t, o, n, l)) !== l.A ? e.l_savedpc++ : Kt(t, e);
                        break;
                    case _t:
                        (l.C ? t.stack[i].l_isfalse() : !t.stack[i].l_isfalse()) ? e.l_savedpc++ : Kt(t, e);
                        break;
                    case pt:
                        var $e = Dt(0, o, l), tr = t.stack[$e];
                        (l.C ? tr.l_isfalse() : !tr.l_isfalse()) ? e.l_savedpc++ : (Et.setobjs2s(t, i, $e), Kt(t, e));
                        break;
                    case y:
                        var er = l.B, rr = l.C - 1;
                        if (0 !== er && wt.adjust_top(t, i + er), !wt.luaD_precall(t, i, rr)) {
                            e = t.ci;
                            continue t;
                        }
                        rr >= 0 && wt.adjust_top(t, e.top);
                        break;
                    case ft:
                        var nr = l.B;
                        if (0 !== nr && wt.adjust_top(t, i + nr), !wt.luaD_precall(t, i, s)) {
                            var ar = t.ci, ur = ar.previous, sr = ar.func, or = ar.funcOff, lr = ur.funcOff, ir = ar.l_base + sr.value.p.numparams;
                            r.p.p.length > 0 && mt.luaF_close(t, ur.l_base);
                            for (var cr = 0; or + cr < ir; cr++)
                                Et.setobjs2s(t, lr + cr, or + cr);
                            ur.l_base = lr + (ar.l_base - or), ur.top = lr + (t.top - or), wt.adjust_top(t, ur.top), ur.l_code = ar.l_code, ur.l_savedpc = ar.l_savedpc, ur.callstatus |= Ut.CIST_TAIL, ur.next = null, e = t.ci = ur, kt(t.top === ur.l_base + t.stack[lr].value.p.maxstacksize);
                            continue t;
                        }
                        break;
                    case rt:
                        r.p.p.length > 0 && mt.luaF_close(t, o);
                        var fr = wt.luaD_poscall(t, e, i, 0 !== l.B ? l.B - 1 : t.top - i);
                        if (e.callstatus & Ut.CIST_FRESH)
                            return;
                        e = t.ci, fr && wt.adjust_top(t, e.top), kt(e.callstatus & Ut.CIST_LUA), kt(e.l_code[e.l_savedpc - 1].opcode === y);
                        continue t;
                    case C:
                        if (t.stack[i].ttisinteger()) {
                            var _r = t.stack[i + 2].value, pr = t.stack[i].value + _r | 0, vr = t.stack[i + 1].value;
                            (0 < _r ? pr <= vr : vr <= pr) && (e.l_savedpc += l.sBx, t.stack[i].chgivalue(pr), t.stack[i + 3].setivalue(pr));
                        }
                        else {
                            var hr = t.stack[i + 2].value, Lr = t.stack[i].value + hr, dr = t.stack[i + 1].value;
                            (0 < hr ? Lr <= dr : dr <= Lr) && (e.l_savedpc += l.sBx, t.stack[i].chgfltvalue(Lr), t.stack[i + 3].setfltvalue(Lr));
                        }
                        break;
                    case D:
                        var Ar = t.stack[i], gr = t.stack[i + 1], Tr = t.stack[i + 2], xr = void 0;
                        if (Ar.ttisinteger() && Tr.ttisinteger() && (xr = Xt(gr, Tr.value))) {
                            var br = xr.stopnow ? 0 : Ar.value;
                            gr.value = xr.ilimit, Ar.value = br - Tr.value | 0;
                        }
                        else {
                            var kr, Or, Er;
                            !1 === (kr = Jt(gr)) && Pt.luaG_runerror(t, g("'for' limit must be a number", !0)), t.stack[i + 1].setfltvalue(kr), !1 === (Or = Jt(Tr)) && Pt.luaG_runerror(t, g("'for' step must be a number", !0)), t.stack[i + 2].setfltvalue(Or), !1 === (Er = Jt(Ar)) && Pt.luaG_runerror(t, g("'for' initial value must be a number", !0)), t.stack[i].setfltvalue(Er - Or);
                        }
                        e.l_savedpc += l.sBx;
                        break;
                    case vt:
                        var mr = i + 3;
                        Et.setobjs2s(t, mr + 2, i + 2), Et.setobjs2s(t, mr + 1, i + 1), Et.setobjs2s(t, mr, i), wt.adjust_top(t, mr + 3), wt.luaD_call(t, mr, l.C), wt.adjust_top(t, e.top), l = e.l_code[e.l_savedpc++], i = Ct(0, o, l), kt(l.opcode === ht);
                    case ht:
                        t.stack[i + 1].ttisnil() || (Et.setobjs2s(t, i, i + 1), e.l_savedpc += l.sBx);
                        break;
                    case at:
                        var Ur = l.B, Nr = l.C;
                        0 === Ur && (Ur = t.top - i - 1), 0 === Nr && (kt(e.l_code[e.l_savedpc].opcode === P), Nr = e.l_code[e.l_savedpc++].Ax);
                        for (var Rr = t.stack[i].value, yr = (Nr - 1) * k + Ur; Ur > 0; Ur--)
                            Mt.luaH_setint(Rr, yr--, t.stack[i + Ur]);
                        wt.adjust_top(t, e.top);
                        break;
                    case S:
                        var Sr = r.p.p[l.Bx], wr = ne(Sr, r.upvals, t.stack, o);
                        null === wr ? ae(t, Sr, r.upvals, o, i) : t.stack[i].setclLvalue(wr);
                        break;
                    case dt:
                        var Ir = l.B - 1, Mr = o - e.funcOff - r.p.numparams - 1, Pr = void 0;
                        for (Mr < 0 && (Mr = 0), Ir < 0 && (Ir = Mr, wt.luaD_checkstack(t, Mr), wt.adjust_top(t, i + Mr)), Pr = 0; Pr < Ir && Pr < Mr; Pr++)
                            Et.setobjs2s(t, i + Pr, o - Mr + Pr);
                        for (; Pr < Ir; Pr++)
                            t.stack[i + Pr].setnilvalue();
                        break;
                    case P: throw Error("invalid opcode");
                }
            } }, t.exports.luaV_finishOp = function (t) { var e = t.ci, r = e.l_base, n = e.l_code[e.l_savedpc - 1], a = n.opcode; switch (a) {
                case E:
                case ct:
                case Q:
                case I:
                case K:
                case m:
                case N:
                case R:
                case lt:
                case it:
                case q:
                case et:
                case Lt:
                case U:
                case H:
                case B:
                case V:
                case nt:
                    Et.setobjs2s(t, r + n.A, t.top - 1), delete t.stack[--t.top];
                    break;
                case j:
                case Z:
                case M:
                    var u = !t.stack[t.top - 1].l_isfalse();
                    delete t.stack[--t.top], e.callstatus & Ut.CIST_LEQ && (kt(a === j), e.callstatus ^= Ut.CIST_LEQ, u = !u), kt(e.l_code[e.l_savedpc].opcode === F), u !== !!n.A && e.l_savedpc++;
                    break;
                case w:
                    var s = t.top - 1, o = s - 1 - (r + n.B);
                    Et.setobjs2s(t, s - 2, s), o > 1 && (t.top = s - 1, ce(t, o)), Et.setobjs2s(t, e.l_base + n.A, t.top - 1), wt.adjust_top(t, e.top);
                    break;
                case vt:
                    kt(e.l_code[e.l_savedpc].opcode === ht), wt.adjust_top(t, e.top);
                    break;
                case y: n.C - 1 >= 0 && wt.adjust_top(t, e.top);
            } }, t.exports.luaV_imul = $t, t.exports.luaV_lessequal = jt, t.exports.luaV_lessthan = Ft, t.exports.luaV_mod = ee, t.exports.luaV_objlen = Qt, t.exports.luaV_rawequalobj = function (t, e) { return Ht(null, t, e); }, t.exports.luaV_shiftl = re, t.exports.luaV_tointeger = zt, t.exports.settable = _e, t.exports.tointeger = Yt, t.exports.tonumber = Jt;
        }, function (t, e, r) {
            "use strict";
            var n = [96, 113, 65, 84, 80, 80, 92, 108, 60, 16, 60, 84, 108, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 96, 96, 96, 96, 104, 34, 188, 188, 188, 132, 228, 84, 84, 16, 98, 98, 4, 98, 20, 81, 80, 23], a = function (t, e) { return ~(-1 << t) << e; }, u = function (t, e) { return ~a(t, e); }, s = function (t, e, r, n) { return t.code = t.code & u(n, r) | e << r & a(n, r), l(t); }, o = function (t, e) { return s(t, e, 14, 18); }, l = function (t) { if ("number" == typeof t)
                return { code: t, opcode: t >> 0 & a(6, 0), A: t >> 6 & a(8, 0), B: t >> 23 & a(9, 0), C: t >> 14 & a(9, 0), Bx: t >> 14 & a(18, 0), Ax: t >> 6 & a(26, 0), sBx: (t >> 14 & a(18, 0)) - 131071 }; var e = t.code; return t.opcode = e >> 0 & a(6, 0), t.A = e >> 6 & a(8, 0), t.B = e >> 23 & a(9, 0), t.C = e >> 14 & a(9, 0), t.Bx = e >> 14 & a(18, 0), t.Ax = e >> 6 & a(26, 0), t.sBx = (e >> 14 & a(18, 0)) - 131071, t; };
            t.exports.BITRK = 256, t.exports.CREATE_ABC = function (t, e, r, n) { return l(t << 0 | e << 6 | r << 23 | n << 14); }, t.exports.CREATE_ABx = function (t, e, r) { return l(t << 0 | e << 6 | r << 14); }, t.exports.CREATE_Ax = function (t, e) { return l(t << 0 | e << 6); }, t.exports.GET_OPCODE = function (t) { return t.opcode; }, t.exports.GETARG_A = function (t) { return t.A; }, t.exports.GETARG_B = function (t) { return t.B; }, t.exports.GETARG_C = function (t) { return t.C; }, t.exports.GETARG_Bx = function (t) { return t.Bx; }, t.exports.GETARG_Ax = function (t) { return t.Ax; }, t.exports.GETARG_sBx = function (t) { return t.sBx; }, t.exports.INDEXK = function (t) { return -257 & t; }, t.exports.ISK = function (t) { return 256 & t; }, t.exports.LFIELDS_PER_FLUSH = 50, t.exports.MAXARG_A = 255, t.exports.MAXARG_Ax = 67108863, t.exports.MAXARG_B = 511, t.exports.MAXARG_Bx = 262143, t.exports.MAXARG_C = 511, t.exports.MAXARG_sBx = 131071, t.exports.MAXINDEXRK = 255, t.exports.NO_REG = 255, t.exports.OpArgK = 3, t.exports.OpArgN = 0, t.exports.OpArgR = 2, t.exports.OpArgU = 1, t.exports.OpCodes = ["MOVE", "LOADK", "LOADKX", "LOADBOOL", "LOADNIL", "GETUPVAL", "GETTABUP", "GETTABLE", "SETTABUP", "SETUPVAL", "SETTABLE", "NEWTABLE", "SELF", "ADD", "SUB", "MUL", "MOD", "POW", "DIV", "IDIV", "BAND", "BOR", "BXOR", "SHL", "SHR", "UNM", "BNOT", "NOT", "LEN", "CONCAT", "JMP", "EQ", "LT", "LE", "TEST", "TESTSET", "CALL", "TAILCALL", "RETURN", "FORLOOP", "FORPREP", "TFORCALL", "TFORLOOP", "SETLIST", "CLOSURE", "VARARG", "EXTRAARG"], t.exports.OpCodesI = { OP_MOVE: 0, OP_LOADK: 1, OP_LOADKX: 2, OP_LOADBOOL: 3, OP_LOADNIL: 4, OP_GETUPVAL: 5, OP_GETTABUP: 6, OP_GETTABLE: 7, OP_SETTABUP: 8, OP_SETUPVAL: 9, OP_SETTABLE: 10, OP_NEWTABLE: 11, OP_SELF: 12, OP_ADD: 13, OP_SUB: 14, OP_MUL: 15, OP_MOD: 16, OP_POW: 17, OP_DIV: 18, OP_IDIV: 19, OP_BAND: 20, OP_BOR: 21, OP_BXOR: 22, OP_SHL: 23, OP_SHR: 24, OP_UNM: 25, OP_BNOT: 26, OP_NOT: 27, OP_LEN: 28, OP_CONCAT: 29, OP_JMP: 30, OP_EQ: 31, OP_LT: 32, OP_LE: 33, OP_TEST: 34, OP_TESTSET: 35, OP_CALL: 36, OP_TAILCALL: 37, OP_RETURN: 38, OP_FORLOOP: 39, OP_FORPREP: 40, OP_TFORCALL: 41, OP_TFORLOOP: 42, OP_SETLIST: 43, OP_CLOSURE: 44, OP_VARARG: 45, OP_EXTRAARG: 46 }, t.exports.POS_A = 6, t.exports.POS_Ax = 6, t.exports.POS_B = 23, t.exports.POS_Bx = 14, t.exports.POS_C = 14, t.exports.POS_OP = 0, t.exports.RKASK = function (t) { return 256 | t; }, t.exports.SETARG_A = function (t, e) { return s(t, e, 6, 8); }, t.exports.SETARG_Ax = function (t, e) { return s(t, e, 6, 26); }, t.exports.SETARG_B = function (t, e) { return s(t, e, 23, 9); }, t.exports.SETARG_Bx = o, t.exports.SETARG_C = function (t, e) { return s(t, e, 14, 9); }, t.exports.SETARG_sBx = function (t, e) { return o(t, e + 131071); }, t.exports.SET_OPCODE = function (t, e) { return t.code = t.code & u(6, 0) | e << 0 & a(6, 0), l(t); }, t.exports.SIZE_A = 8, t.exports.SIZE_Ax = 26, t.exports.SIZE_B = 9, t.exports.SIZE_Bx = 18, t.exports.SIZE_C = 9, t.exports.SIZE_OP = 6, t.exports.fullins = l, t.exports.getBMode = function (t) { return n[t] >> 4 & 3; }, t.exports.getCMode = function (t) { return n[t] >> 2 & 3; }, t.exports.getOpMode = function (t) { return 3 & n[t]; }, t.exports.iABC = 0, t.exports.iABx = 1, t.exports.iAsBx = 2, t.exports.iAx = 3, t.exports.testAMode = function (t) { return 64 & n[t]; }, t.exports.testTMode = function (t) { return 128 & n[t]; };
        }, function (t, e, r) {
            "use strict";
            var n = r(2), a = "_" + n.LUA_VERSION_MAJOR + "_" + n.LUA_VERSION_MINOR;
            t.exports.LUA_VERSUFFIX = a, t.exports.lua_assert = function (t) { }, t.exports.luaopen_base = r(24).luaopen_base;
            t.exports.LUA_COLIBNAME = "coroutine", t.exports.luaopen_coroutine = r(25).luaopen_coroutine;
            t.exports.LUA_TABLIBNAME = "table", t.exports.luaopen_table = r(26).luaopen_table;
            t.exports.LUA_OSLIBNAME = "os", t.exports.luaopen_os = r(27).luaopen_os;
            t.exports.LUA_STRLIBNAME = "string", t.exports.luaopen_string = r(28).luaopen_string;
            t.exports.LUA_UTF8LIBNAME = "utf8", t.exports.luaopen_utf8 = r(29).luaopen_utf8;
            t.exports.LUA_BITLIBNAME = "bit32";
            t.exports.LUA_MATHLIBNAME = "math", t.exports.luaopen_math = r(30).luaopen_math;
            t.exports.LUA_DBLIBNAME = "debug", t.exports.luaopen_debug = r(31).luaopen_debug;
            t.exports.LUA_LOADLIBNAME = "package", t.exports.luaopen_package = r(32).luaopen_package;
            t.exports.LUA_FENGARILIBNAME = "fengari", t.exports.luaopen_fengari = r(33).luaopen_fengari;
            var u = r(39);
            t.exports.luaL_openlibs = u.luaL_openlibs;
        }, function (t, e, r) {
            "use strict";
            function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; })(t); }
            var a = r(0), u = a.lua, s = a.lauxlib, o = a.lualib, l = a.to_luastring, i = u.LUA_MULTRET, c = u.LUA_OK, f = u.LUA_REGISTRYINDEX, _ = u.LUA_RIDX_MAINTHREAD, p = u.LUA_TBOOLEAN, v = u.LUA_TFUNCTION, h = u.LUA_TLIGHTUSERDATA, L = u.LUA_TNIL, d = u.LUA_TNONE, A = u.LUA_TNUMBER, g = u.LUA_TSTRING, T = u.LUA_TTABLE, x = u.LUA_TTHREAD, b = u.LUA_TUSERDATA, k = u.lua_atnativeerror, O = u.lua_call, E = u.lua_getfield, m = u.lua_gettable, U = u.lua_gettop, N = u.lua_isnil, R = u.lua_isproxy, y = u.lua_newuserdata, S = u.lua_pcall, w = u.lua_pop, I = u.lua_pushboolean, M = u.lua_pushcfunction, P = u.lua_pushinteger, C = u.lua_pushlightuserdata, D = u.lua_pushliteral, V = u.lua_pushnil, B = u.lua_pushnumber, G = u.lua_pushstring, K = u.lua_pushvalue, F = u.lua_rawgeti, j = u.lua_rawgetp, H = u.lua_rawsetp, X = u.lua_rotate, z = u.lua_setfield, Y = u.lua_settable, J = u.lua_settop, Z = u.lua_toboolean, q = u.lua_tojsstring, W = u.lua_tonumber, Q = u.lua_toproxy, $ = u.lua_tothread, tt = u.lua_touserdata, et = u.lua_type, rt = s.luaL_argerror, nt = s.luaL_checkany, at = s.luaL_checkoption, ut = s.luaL_checkstack, st = s.luaL_checkudata, ot = s.luaL_error, lt = s.luaL_getmetafield, it = s.luaL_newlib, ct = s.luaL_newmetatable, ft = s.luaL_requiref, _t = s.luaL_setfuncs, pt = s.luaL_setmetatable, vt = s.luaL_testudata, ht = s.luaL_tolstring, Lt = o.luaopen_base;
            var dt, At, gt, Tt = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : (0, eval)("this");
            if ("undefined" != typeof Reflect)
                dt = Reflect.apply, At = Reflect.construct, gt = Reflect.deleteProperty;
            else {
                var xt = Function.apply, bt = Function.bind;
                dt = function (t, e, r) { return xt.call(t, e, r); }, At = function (t, e) { switch (e.length) {
                    case 0: return new t;
                    case 1: return new t(e[0]);
                    case 2: return new t(e[0], e[1]);
                    case 3: return new t(e[0], e[1], e[2]);
                    case 4: return new t(e[0], e[1], e[2], e[3]);
                } var r = [null]; return r.push.apply(r, e), new (bt.apply(t, r)); }, gt = Function("t", "k", "delete t[k]");
            }
            var kt = String.prototype.concat.bind(""), Ot = function (t) { return "object" === n(t) ? null !== t : "function" == typeof t; }, Et = l("js object"), mt = function (t, e) { var r = vt(t, e, Et); return r ? r.data : void 0; }, Ut = function (t, e) { return st(t, e, Et).data; }, Nt = function (t, e) { y(t).data = e, pt(t, Et); }, Rt = function (t) { F(t, f, _); var e = $(t, -1); return w(t, 1), e; }, yt = new WeakMap, St = function (t, e) { switch (n(e)) {
                case "undefined":
                    V(t);
                    break;
                case "number":
                    B(t, e);
                    break;
                case "string":
                    G(t, l(e));
                    break;
                case "boolean":
                    I(t, e);
                    break;
                case "symbol":
                    C(t, e);
                    break;
                case "function": if (R(e, t)) {
                    e(t);
                    break;
                }
                case "object": if (null === e) {
                    if (j(t, f, null) !== b)
                        throw Error("js library not loaded into lua_State");
                    break;
                }
                default:
                    var r = yt.get(Rt(t));
                    if (!r)
                        throw Error("js library not loaded into lua_State");
                    var a = r.get(e);
                    a ? a(t) : (Nt(t, e), a = Q(t, -1), r.set(e, a));
            } }, wt = function (t) { var e = tt(t, 1); return St(t, e), 1; }, It = function (t, e) { switch (et(t, e)) {
                case d:
                case L: return;
                case p: return Z(t, e);
                case h: return tt(t, e);
                case A: return W(t, e);
                case g: return q(t, e);
                case b:
                    var r = mt(t, e);
                    if (void 0 !== r)
                        return r;
                case T:
                case v:
                case x:
                default: return jt(t, Q(t, e));
            } }, Mt = function (t, e) { var r = S(t, e, 1, 0), n = It(t, -1); switch (w(t, 1), r) {
                case c: return n;
                default: throw n;
            } }, Pt = function (t, e, r, n, a) { if (!Ot(n))
                throw new TypeError("`args` argument must be an object"); var u = +n.length; u >= 0 || (u = 0), ut(t, 2 + u, null); var s = U(t); e(t), St(t, r); for (var o = 0; o < u; o++)
                St(t, n[o]); switch (S(t, 1 + u, a, 0)) {
                case c:
                    for (var l = U(t) - s, i = new Array(l), f = 0; f < l; f++)
                        i[f] = It(t, s + f + 1);
                    return J(t, s), i;
                default:
                    var _ = It(t, -1);
                    throw J(t, s), _;
            } }, Ct = function (t) { return m(t, 1), 1; }, Dt = function (t, e, r) { return ut(t, 3, null), M(t, Ct), e(t), St(t, r), Mt(t, 2); }, Vt = function (t, e, r) { switch ((ut(t, 3, null), M(t, Ct), e(t), St(t, r), S(t, 2, 1, 0))) {
                case c:
                    var n = N(t, -1);
                    return w(t, 1), !n;
                default:
                    var a = It(t, -1);
                    throw w(t, 1), a;
            } }, Bt = function (t, e, r, n) { switch ((ut(t, 4, null), M(t, function (t) { return Y(t, 1), 0; }), e(t), St(t, r), St(t, n), S(t, 3, 0, 0))) {
                case c: return;
                default:
                    var a = It(t, -1);
                    throw w(t, 1), a;
            } }, Gt = function (t, e, r) { switch ((ut(t, 4, null), M(t, function (t) { return Y(t, 1), 0; }), e(t), St(t, r), V(t), S(t, 3, 0, 0))) {
                case c: return;
                default:
                    var n = It(t, -1);
                    throw w(t, 1), n;
            } }, Kt = function (t, e) { return ut(t, 2, null), M(t, function (t) { return ht(t, 1), 1; }), e(t), Mt(t, 1); }, Ft = function () { var t = this.L; ut(t, 3, null); var e = U(t); switch ((this.iter(t), this.state(t), this.last(t), S(t, 2, i, 0))) {
                case c:
                    var r;
                    if (this.last = Q(t, e + 1), N(t, -1))
                        r = { done: !0, value: void 0 };
                    else {
                        for (var n = U(t) - e, a = new Array(n), u = 0; u < n; u++)
                            a[u] = It(t, e + u + 1);
                        r = { done: !1, value: a };
                    }
                    return J(t, e), r;
                default:
                    var s = It(t, -1);
                    throw w(t, 1), s;
            } }, jt = function (t, e) { var r = Rt(t), n = function () { return Pt(r, e, this, arguments, 1)[0]; }; n.apply = function (t, n) { return Pt(r, e, t, n, 1)[0]; }, n.invoke = function (t, n) { return Pt(r, e, t, n, i); }, n.get = function (t) { return Dt(r, e, t); }, n.has = function (t) { return Vt(r, e, t); }, n.set = function (t, n) { return Bt(r, e, t, n); }, n.delete = function (t) { return Gt(r, e, t); }, n.toString = function () { return Kt(r, e); }, "function" == typeof Symbol && (n[Symbol.toStringTag] = "Fengari object", n[Symbol.iterator] = function () { return function (t, e) { switch ((ut(t, 1, null), M(t, function (t) { return ft(t, l("_G"), Lt, 0), E(t, -1, l("pairs")), e(t), O(t, 1, 3), 3; }), S(t, 0, 3, 0))) {
                case c:
                    var r = Q(t, -3), n = Q(t, -2), a = Q(t, -1);
                    return w(t, 3), { L: t, iter: r, state: n, last: a, next: Ft };
                default:
                    var u = It(t, -1);
                    throw w(t, 1), u;
            } }(r, e); }, Symbol.toPrimitive && (n[Symbol.toPrimitive] = function (t) { if ("string" === t)
                return Kt(r, e); })); var a = yt.get(r); if (!a)
                throw Error("js library not loaded into lua_State"); return a.set(n, e), n; }, Ht = { new: function (t) { for (var e = It(t, 1), r = U(t) - 1, n = new Array(r), a = 0; a < r; a++)
                    n[a] = It(t, a + 2); return St(t, At(e, n)), 1; }, tonumber: function (t) { var e = It(t, 1); return B(t, +e), 1; }, tostring: function (t) { var e = It(t, 1); return D(t, kt(e)), 1; }, instanceof: function (t) { var e = It(t, 1), r = It(t, 2); return I(t, e instanceof r), 1; }, typeof: function t(e) { var r = It(e, 1); return D(e, t(r)), 1; } };
            if ("function" == typeof Symbol && Symbol.iterator) {
                var Xt = function (t) { var e = It(t, 1).next(); return e.done ? 0 : (St(t, e.value), 1); };
                Ht.of = function (t) { var e = function (t, e) { var r = Ut(t, e), n = r[Symbol.iterator]; n || rt(t, e, l("object not iterable")); var a = dt(n, r, []); return Ot(a) || rt(t, e, l("Result of the Symbol.iterator method is not an object")), a; }(t, 1); return M(t, Xt), St(t, e), 2; };
            }
            if ("function" == typeof Proxy && "function" == typeof Symbol) {
                var zt = Symbol("lua_State"), Yt = Symbol("fengari-proxy"), Jt = { apply: function (t, e, r) { return Pt(t[zt], t[Yt], e, r, 1)[0]; }, construct: function (t, e) { var r = t[zt], n = t[Yt], a = e.length; ut(r, 2 + a, null), n(r); var u = U(r); if (lt(r, u, l("construct")) === L)
                        throw w(r, 1), new TypeError("not a constructor"); X(r, u, 1); for (var s = 0; s < a; s++)
                        St(r, e[s]); return Mt(r, 1 + a); }, defineProperty: function (t, e, r) { var n = t[zt], a = t[Yt]; return ut(n, 4, null), a(n), lt(n, -1, l("defineProperty")) === L ? (w(n, 1), !1) : (X(n, -2, 1), St(n, e), St(n, r), Mt(n, 3)); }, deleteProperty: function (t, e) { return Gt(t[zt], t[Yt], e); }, get: function (t, e) { return Dt(t[zt], t[Yt], e); }, getOwnPropertyDescriptor: function (t, e) { var r = t[zt], n = t[Yt]; if (ut(r, 3, null), n(r), lt(r, -1, l("getOwnPropertyDescriptor")) !== L)
                        return X(r, -2, 1), St(r, e), Mt(r, 2); w(r, 1); }, getPrototypeOf: function (t) { var e = t[zt], r = t[Yt]; return ut(e, 2, null), r(e), lt(e, -1, l("getPrototypeOf")) === L ? (w(e, 1), null) : (X(e, -2, 1), Mt(e, 1)); }, has: function (t, e) { return Vt(t[zt], t[Yt], e); }, ownKeys: function (t) { var e = t[zt], r = t[Yt]; if (ut(e, 2, null), r(e), lt(e, -1, l("ownKeys")) === L)
                        throw w(e, 1), Error("ownKeys unknown for fengari object"); return X(e, -2, 1), Mt(e, 1); }, set: function (t, e, r) { return Bt(t[zt], t[Yt], e, r), !0; }, setPrototypeOf: function (t, e) { var r = t[zt], n = t[Yt]; return ut(r, 3, null), n(r), lt(r, -1, l("setPrototypeOf")) === L ? (w(r, 1), !1) : (X(r, -2, 1), St(r, e), Mt(r, 2)); } }, Zt = Function("return ()=>void 0;"), qt = function (t, e, r) { var n, a = Rt(t); switch (r) {
                    case "function":
                        n = function () { var t = function () { }.bind(); return delete t.length, delete t.name, t; }();
                        break;
                    case "arrow_function":
                        n = function () { var t = Zt(); return delete t.length, delete t.name, t; }();
                        break;
                    case "object":
                        n = {};
                        break;
                    default: throw TypeError("invalid type to createproxy");
                } return n[Yt] = e, n[zt] = a, new Proxy(n, Jt); }, Wt = ["function", "arrow_function", "object"], Qt = Wt.map(function (t) { return l(t); });
                Ht.createproxy = function (t) { nt(t, 1); var e = Wt[at(t, 2, Qt[0], Qt)], r = qt(t, Q(t, 1), e); return St(t, r), 1; };
            }
            var $t = { __index: function (t) { var e = Ut(t, 1), r = It(t, 2); return St(t, e[r]), 1; }, __newindex: function (t) { var e = Ut(t, 1), r = It(t, 2), n = It(t, 3); return void 0 === n ? gt(e, r) : e[r] = n, 0; }, __tostring: function (t) { var e = Ut(t, 1), r = kt(e); return G(t, l(r)), 1; }, __call: function (t) { var e, r = Ut(t, 1), n = U(t) - 1, a = new Array(Math.max(0, n - 1)); if (n > 0 && (e = It(t, 2), n-- > 0))
                    for (var u = 0; u < n; u++)
                        a[u] = It(t, u + 3); return St(t, dt(r, e, a)), 1; }, __pairs: function (t) { var e, r, n, a, u = Ut(t, 1); if ("function" != typeof Symbol || void 0 === (e = u[Symbol.for("__pairs")]))
                    r = function (t) { if (!(this.index >= this.keys.length)) {
                        var e = this.keys[this.index++];
                        return [e, this.object[e]];
                    } }, n = { object: u, keys: Object.keys(u), index: 0 };
                else {
                    var s = dt(e, u, []);
                    void 0 === s && ot(t, l("bad '__pairs' result (object with keys 'iter', 'state', 'first' expected)")), void 0 === (r = s.iter) && ot(t, l("bad '__pairs' result (object.iter is missing)")), n = s.state, a = s.first;
                } return M(t, function () { var e = It(t, 1), n = It(t, 2), a = dt(r, e, [n]); if (void 0 === a)
                    return 0; Array.isArray(a) || ot(t, l("bad iterator result (Array or undefined expected)")), ut(t, a.length, null); for (var u = 0; u < a.length; u++)
                    St(t, a[u]); return a.length; }), St(t, n), St(t, a), 3; }, __len: function (t) { var e, r, n = Ut(t, 1); return r = "function" != typeof Symbol || void 0 === (e = n[Symbol.for("__len")]) ? n.length : dt(e, n, []), St(t, r), 1; } };
            t.exports.FENGARI_INTEROP_VERSION = "0.1", t.exports.FENGARI_INTEROP_VERSION_NUM = 1, t.exports.FENGARI_INTEROP_RELEASE = "0.1.2", t.exports.checkjs = Ut, t.exports.testjs = mt, t.exports.pushjs = Nt, t.exports.push = St, t.exports.tojs = It, t.exports.luaopen_js = function (t) { return yt.set(Rt(t), new WeakMap), k(t, wt), it(t, Ht), D(t, "0.1"), z(t, -2, l("_VERSION")), P(t, 1), z(t, -2, l("_VERSION_NUM")), D(t, "0.1.2"), z(t, -2, l("_RELEASE")), ct(t, Et), _t(t, $t, 0), w(t, 1), Nt(t, null), K(t, -1), H(t, f, null), z(t, -2, l("null")), St(t, Tt), z(t, -2, l("global")), 1; };
        }, function (t, e, r) {
            "use strict";
            var n = r(1), a = n.LUA_MULTRET, u = n.LUA_OPBNOT, s = n.LUA_OPEQ, o = n.LUA_OPLE, l = n.LUA_OPLT, i = n.LUA_OPUNM, c = n.LUA_REGISTRYINDEX, f = n.LUA_RIDX_GLOBALS, _ = n.LUA_VERSION_NUM, p = n.constant_types, v = p.LUA_NUMTAGS, h = p.LUA_TBOOLEAN, L = p.LUA_TCCL, d = p.LUA_TFUNCTION, A = p.LUA_TLCF, g = p.LUA_TLCL, T = p.LUA_TLIGHTUSERDATA, x = p.LUA_TLNGSTR, b = p.LUA_TNIL, k = p.LUA_TNONE, O = p.LUA_TNUMFLT, E = p.LUA_TNUMINT, m = p.LUA_TSHRSTR, U = p.LUA_TTABLE, N = p.LUA_TTHREAD, R = p.LUA_TUSERDATA, y = n.thread_status.LUA_OK, S = n.from_userstring, w = n.to_luastring, I = r(4).api_check, M = r(11), P = r(8), C = r(37).luaU_dump, D = r(13), V = r(6), B = r(12), G = r(10), K = G.luaS_bless, F = G.luaS_new, j = G.luaS_newliteral, H = r(14), X = r(3).LUAI_MAXSTACK, z = r(15), Y = r(9), J = r(20).ZIO, Z = V.TValue, q = V.CClosure, W = function (t) { t.top++, I(t, t.top <= t.ci.top, "stack overflow"); }, Q = function (t, e) { I(t, e < t.top - t.ci.funcOff, "not enough elements in the stack"); }, $ = function (t) { if (!t)
                throw TypeError("invalid argument"); }, tt = function (t) { $("number" == typeof t && (0 | t) === t); }, et = function (t) { return t !== V.luaO_nilobject; }, rt = function (t, e) { var r = t.ci; if (e > 0) {
                var n = r.funcOff + e;
                return I(t, e <= r.top - (r.funcOff + 1), "unacceptable index"), n >= t.top ? V.luaO_nilobject : t.stack[n];
            } return e > c ? (I(t, 0 !== e && -e <= t.top, "invalid index"), t.stack[t.top + e]) : e === c ? t.l_G.l_registry : (I(t, (e = c - e) <= D.MAXUPVAL + 1, "upvalue index too large"), r.func.ttislcf() ? V.luaO_nilobject : e <= r.func.value.nupvalues ? r.func.value.upvalue[e - 1] : V.luaO_nilobject); }, nt = function (t, e) { var r = t.ci; if (e > 0) {
                var n = r.funcOff + e;
                return I(t, e <= r.top - (r.funcOff + 1), "unacceptable index"), n >= t.top ? null : n;
            } if (e > c)
                return I(t, 0 !== e && -e <= t.top, "invalid index"), t.top + e; throw Error("attempt to use pseudo-index"); }, at = function (t, e) { var r, n = t.ci.funcOff; e >= 0 ? (I(t, e <= t.stack_last - (n + 1), "new top too large"), r = n + 1 + e) : (I(t, -(e + 1) <= t.top - (n + 1), "invalid new top"), r = t.top + e + 1), P.adjust_top(t, r); }, ut = function (t, e) { at(t, -e - 1); }, st = function (t, e, r) { for (; e < r; e++, r--) {
                var n = t.stack[e], a = new Z(n.type, n.value);
                V.setobjs2s(t, e, r), V.setobj2s(t, r, a);
            } }, ot = function (t, e, r) { var n = t.top - 1, a = nt(t, e), u = t.stack[a]; I(t, et(u) && e > c, "index not in the stack"), I(t, (r >= 0 ? r : -r) <= n - a + 1, "invalid 'n'"); var s = r >= 0 ? n - r : a - r - 1; st(t, a, s), st(t, s + 1, t.top - 1), st(t, a, t.top - 1); }, lt = function (t, e, r) { var n = rt(t, e); rt(t, r).setfrom(n); }, it = function (t, e, r) { if ($("function" == typeof e), tt(r), 0 === r)
                t.stack[t.top] = new Z(A, e);
            else {
                Q(t, r), I(t, r <= D.MAXUPVAL, "upvalue index too large");
                for (var n = new q(t, e, r), a = 0; a < r; a++)
                    n.upvalue[a].setfrom(t.stack[t.top - r + a]);
                for (var u = 1; u < r; u++)
                    delete t.stack[--t.top];
                r > 0 && --t.top, t.stack[t.top].setclCvalue(n);
            } W(t); }, ct = it, ft = function (t, e) { it(t, e, 0); }, _t = ft, pt = function (t, e, r) { var n = F(t, S(r)); Q(t, 1), V.pushsvalue2s(t, n), I(t, t.top <= t.ci.top, "stack overflow"), z.settable(t, e, t.stack[t.top - 1], t.stack[t.top - 2]), delete t.stack[--t.top], delete t.stack[--t.top]; }, vt = function (t, e) { pt(t, Y.luaH_getint(t.l_G.l_registry.value, f), e); }, ht = function (t, e, r) { var n = F(t, S(r)); return V.pushsvalue2s(t, n), I(t, t.top <= t.ci.top, "stack overflow"), z.luaV_gettable(t, e, t.stack[t.top - 1], t.top - 1), t.stack[t.top - 1].ttnov(); }, Lt = function (t, e, r) { var n = rt(t, e); return tt(r), I(t, n.ttistable(), "table expected"), V.pushobj2s(t, Y.luaH_getint(n.value, r)), I(t, t.top <= t.ci.top, "stack overflow"), t.stack[t.top - 1].ttnov(); }, dt = function (t, e, r) { var n = new V.TValue(U, Y.luaH_new(t)); t.stack[t.top] = n, W(t); }, At = function (t, e, r) { switch ((tt(r), e.ttype())) {
                case L:
                    var n = e.value;
                    return 1 <= r && r <= n.nupvalues ? { name: w("", !0), val: n.upvalue[r - 1] } : null;
                case g:
                    var a = e.value, u = a.p;
                    if (!(1 <= r && r <= u.upvalues.length))
                        return null;
                    var s = u.upvalues[r - 1].name;
                    return { name: s ? s.getstr() : w("(*no name)", !0), val: a.upvals[r - 1] };
                default: return null;
            } }, gt = function (t, e) { var r = rt(t, e); if (!r.ttisstring()) {
                if (!z.cvt2str(r))
                    return null;
                V.luaO_tostring(t, r);
            } return r.svalue(); }, Tt = gt, xt = function (t, e) { return z.tointeger(rt(t, e)); }, bt = function (t, e) { return z.tonumber(rt(t, e)); }, kt = new WeakMap, Ot = function (t, e) { P.luaD_callnoyield(t, e.funcOff, e.nresults); }, Et = function (t, e) { var r = rt(t, e); return et(r) ? r.ttnov() : k; }, mt = w("?"), Ut = function (t, e, r) { I(t, r === a || t.ci.top - t.top >= r - e, "results from function overflow current stack size"); }, Nt = function (t, e, r, n, u) { I(t, null === u || !(t.ci.callstatus & B.CIST_LUA), "cannot use continuations inside hooks"), Q(t, e + 1), I(t, t.status === y, "cannot do calls on non-normal thread"), Ut(t, e, r); var s = t.top - (e + 1); null !== u && 0 === t.nny ? (t.ci.c_k = u, t.ci.c_ctx = n, P.luaD_call(t, s, r)) : P.luaD_callnoyield(t, s, r), r === a && t.ci.top < t.top && (t.ci.top = t.top); }, Rt = function (t, e, r, n, u, s) { var o, l; I(t, null === s || !(t.ci.callstatus & B.CIST_LUA), "cannot use continuations inside hooks"), Q(t, e + 1), I(t, t.status === y, "cannot do calls on non-normal thread"), Ut(t, e, r), l = 0 === n ? 0 : nt(t, n); var i = t.top - (e + 1); if (null === s || t.nny > 0) {
                var c = { funcOff: i, nresults: r };
                o = P.luaD_pcall(t, Ot, c, i, l);
            }
            else {
                var f = t.ci;
                f.c_k = s, f.c_ctx = u, f.extra = i, f.c_old_errfunc = t.errfunc, t.errfunc = l, f.callstatus &= ~B.CIST_OAH | t.allowhook, f.callstatus |= B.CIST_YPCALL, P.luaD_call(t, i, r), f.callstatus &= ~B.CIST_YPCALL, t.errfunc = f.c_old_errfunc, o = y;
            } return r === a && t.ci.top < t.top && (t.ci.top = t.top), o; }, yt = function (t, e, r) { var n = rt(t, e); I(t, n.ttisLclosure(), "Lua function expected"); var a = n.value; return tt(r), I(t, 1 <= r && r <= a.p.upvalues.length, "invalid upvalue index"), { f: a, i: r - 1 }; };
            t.exports.api_incr_top = W, t.exports.api_checknelems = Q, t.exports.lua_absindex = function (t, e) { return e > 0 || e <= c ? e : t.top - t.ci.funcOff + e; }, t.exports.lua_arith = function (t, e) { e !== i && e !== u ? Q(t, 2) : (Q(t, 1), V.pushobj2s(t, t.stack[t.top - 1]), I(t, t.top <= t.ci.top, "stack overflow")), V.luaO_arith(t, e, t.stack[t.top - 2], t.stack[t.top - 1], t.stack[t.top - 2]), delete t.stack[--t.top]; }, t.exports.lua_atpanic = function (t, e) { var r = t.l_G.panic; return t.l_G.panic = e, r; }, t.exports.lua_atnativeerror = function (t, e) { var r = t.l_G.atnativeerror; return t.l_G.atnativeerror = e, r; }, t.exports.lua_call = function (t, e, r) { Nt(t, e, r, 0, null); }, t.exports.lua_callk = Nt, t.exports.lua_checkstack = function (t, e) { var r, n = t.ci; I(t, e >= 0, "negative 'n'"), t.stack_last - t.top > e ? r = !0 : t.top + B.EXTRA_STACK > X - e ? r = !1 : (P.luaD_growstack(t, e), r = !0); return r && n.top < t.top + e && (n.top = t.top + e), r; }, t.exports.lua_compare = function (t, e, r, n) { var a = rt(t, e), u = rt(t, r), i = 0; if (et(a) && et(u))
                switch (n) {
                    case s:
                        i = z.luaV_equalobj(t, a, u);
                        break;
                    case l:
                        i = z.luaV_lessthan(t, a, u);
                        break;
                    case o:
                        i = z.luaV_lessequal(t, a, u);
                        break;
                    default: I(t, !1, "invalid option");
                } return i; }, t.exports.lua_concat = function (t, e) { Q(t, e), e >= 2 ? z.luaV_concat(t, e) : 0 === e && (V.pushsvalue2s(t, K(t, w("", !0))), I(t, t.top <= t.ci.top, "stack overflow")); }, t.exports.lua_copy = lt, t.exports.lua_createtable = dt, t.exports.lua_dump = function (t, e, r, n) { Q(t, 1); var a = t.stack[t.top - 1]; return a.ttisLclosure() ? C(t, a.value.p, e, r, n) : 1; }, t.exports.lua_error = function (t) { Q(t, 1), M.luaG_errormsg(t); }, t.exports.lua_gc = function () { }, t.exports.lua_getallocf = function () { return console.warn("lua_getallocf is not available"), 0; }, t.exports.lua_getextraspace = function () { return console.warn("lua_getextraspace is not available"), 0; }, t.exports.lua_getfield = function (t, e, r) { return ht(t, rt(t, e), r); }, t.exports.lua_getglobal = function (t, e) { return ht(t, Y.luaH_getint(t.l_G.l_registry.value, f), e); }, t.exports.lua_geti = function (t, e, r) { var n = rt(t, e); return tt(r), t.stack[t.top] = new Z(E, r), W(t), z.luaV_gettable(t, n, t.stack[t.top - 1], t.top - 1), t.stack[t.top - 1].ttnov(); }, t.exports.lua_getmetatable = function (t, e) { var r, n = rt(t, e), a = !1; switch (n.ttnov()) {
                case U:
                case R:
                    r = n.value.metatable;
                    break;
                default: r = t.l_G.mt[n.ttnov()];
            } return null !== r && void 0 !== r && (t.stack[t.top] = new Z(U, r), W(t), a = !0), a; }, t.exports.lua_gettable = function (t, e) { var r = rt(t, e); return z.luaV_gettable(t, r, t.stack[t.top - 1], t.top - 1), t.stack[t.top - 1].ttnov(); }, t.exports.lua_gettop = function (t) { return t.top - (t.ci.funcOff + 1); }, t.exports.lua_getupvalue = function (t, e, r) { var n = At(0, rt(t, e), r); if (n) {
                var a = n.name, u = n.val;
                return V.pushobj2s(t, u), I(t, t.top <= t.ci.top, "stack overflow"), a;
            } return null; }, t.exports.lua_getuservalue = function (t, e) { var r = rt(t, e); I(t, r.ttisfulluserdata(), "full userdata expected"); var n = r.value.uservalue; return t.stack[t.top] = new Z(n.type, n.value), W(t), t.stack[t.top - 1].ttnov(); }, t.exports.lua_insert = function (t, e) { ot(t, e, 1); }, t.exports.lua_isboolean = function (t, e) { return Et(t, e) === h; }, t.exports.lua_iscfunction = function (t, e) { var r = rt(t, e); return r.ttislcf(r) || r.ttisCclosure(); }, t.exports.lua_isfunction = function (t, e) { return Et(t, e) === d; }, t.exports.lua_isinteger = function (t, e) { return rt(t, e).ttisinteger(); }, t.exports.lua_islightuserdata = function (t, e) { return Et(t, e) === T; }, t.exports.lua_isnil = function (t, e) { return Et(t, e) === b; }, t.exports.lua_isnone = function (t, e) { return Et(t, e) === k; }, t.exports.lua_isnoneornil = function (t, e) { return Et(t, e) <= 0; }, t.exports.lua_isnumber = function (t, e) { return !1 !== z.tonumber(rt(t, e)); }, t.exports.lua_isproxy = function (t, e) { var r = kt.get(t); return !!r && (null === e || e.l_G === r); }, t.exports.lua_isstring = function (t, e) { var r = rt(t, e); return r.ttisstring() || z.cvt2str(r); }, t.exports.lua_istable = function (t, e) { return rt(t, e).ttistable(); }, t.exports.lua_isthread = function (t, e) { return Et(t, e) === N; }, t.exports.lua_isuserdata = function (t, e) { var r = rt(t, e); return r.ttisfulluserdata(r) || r.ttislightuserdata(); }, t.exports.lua_len = function (t, e) { var r = rt(t, e), n = new Z; z.luaV_objlen(t, n, r), t.stack[t.top] = n, W(t); }, t.exports.lua_load = function (t, e, r, n, a) { n = n ? S(n) : mt, null !== a && (a = S(a)); var u = new J(t, e, r), s = P.luaD_protectedparser(t, u, n, a); if (s === y) {
                var o = t.stack[t.top - 1].value;
                if (o.nupvalues >= 1) {
                    var l = Y.luaH_getint(t.l_G.l_registry.value, f);
                    o.upvals[0].setfrom(l);
                }
            } return s; }, t.exports.lua_newtable = function (t) { dt(t); }, t.exports.lua_newuserdata = function (t, e) { var r = function (t, e) { return new V.Udata(t, e); }(t, e); return t.stack[t.top] = new V.TValue(R, r), W(t), r.data; }, t.exports.lua_next = function (t, e) { var r = rt(t, e); return I(t, r.ttistable(), "table expected"), t.stack[t.top] = new Z, Y.luaH_next(t, r.value, t.top - 1) ? (W(t), 1) : (delete t.stack[t.top], delete t.stack[--t.top], 0); }, t.exports.lua_pcall = function (t, e, r, n) { return Rt(t, e, r, n, 0, null); }, t.exports.lua_pcallk = Rt, t.exports.lua_pop = ut, t.exports.lua_pushboolean = function (t, e) { t.stack[t.top] = new Z(h, !!e), W(t); }, t.exports.lua_pushcclosure = it, t.exports.lua_pushcfunction = ft, t.exports.lua_pushfstring = function (t, e) { e = S(e); for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
                n[a - 2] = arguments[a]; return V.luaO_pushvfstring(t, e, n); }, t.exports.lua_pushglobaltable = function (t) { Lt(t, c, f); }, t.exports.lua_pushinteger = function (t, e) { tt(e), t.stack[t.top] = new Z(E, e), W(t); }, t.exports.lua_pushjsclosure = ct, t.exports.lua_pushjsfunction = _t, t.exports.lua_pushlightuserdata = function (t, e) { t.stack[t.top] = new Z(T, e), W(t); }, t.exports.lua_pushliteral = function (t, e) { if (void 0 === e || null === e)
                t.stack[t.top] = new Z(b, null), t.top++;
            else {
                $("string" == typeof e);
                var r = j(t, e);
                V.pushsvalue2s(t, r), e = r.getstr();
            } return I(t, t.top <= t.ci.top, "stack overflow"), e; }, t.exports.lua_pushlstring = function (t, e, r) { var n; return tt(r), 0 === r ? (e = w("", !0), n = K(t, e)) : (e = S(e), I(t, e.length >= r, "invalid length to lua_pushlstring"), n = F(t, e.subarray(0, r))), V.pushsvalue2s(t, n), I(t, t.top <= t.ci.top, "stack overflow"), n.value; }, t.exports.lua_pushnil = function (t) { t.stack[t.top] = new Z(b, null), W(t); }, t.exports.lua_pushnumber = function (t, e) { $("number" == typeof e), t.stack[t.top] = new Z(O, e), W(t); }, t.exports.lua_pushstring = function (t, e) { if (void 0 === e || null === e)
                t.stack[t.top] = new Z(b, null), t.top++;
            else {
                var r = F(t, S(e));
                V.pushsvalue2s(t, r), e = r.getstr();
            } return I(t, t.top <= t.ci.top, "stack overflow"), e; }, t.exports.lua_pushthread = function (t) { return t.stack[t.top] = new Z(N, t), W(t), t.l_G.mainthread === t; }, t.exports.lua_pushvalue = function (t, e) { V.pushobj2s(t, rt(t, e)), I(t, t.top <= t.ci.top, "stack overflow"); }, t.exports.lua_pushvfstring = function (t, e, r) { return e = S(e), V.luaO_pushvfstring(t, e, r); }, t.exports.lua_rawequal = function (t, e, r) { var n = rt(t, e), a = rt(t, r); return et(n) && et(a) ? z.luaV_equalobj(null, n, a) : 0; }, t.exports.lua_rawget = function (t, e) { var r = rt(t, e); return I(t, r.ttistable(r), "table expected"), V.setobj2s(t, t.top - 1, Y.luaH_get(t, r.value, t.stack[t.top - 1])), t.stack[t.top - 1].ttnov(); }, t.exports.lua_rawgeti = Lt, t.exports.lua_rawgetp = function (t, e, r) { var n = rt(t, e); I(t, n.ttistable(), "table expected"); var a = new Z(T, r); return V.pushobj2s(t, Y.luaH_get(t, n.value, a)), I(t, t.top <= t.ci.top, "stack overflow"), t.stack[t.top - 1].ttnov(); }, t.exports.lua_rawlen = function (t, e) { var r = rt(t, e); switch (r.ttype()) {
                case m:
                case x: return r.vslen();
                case R: return r.value.len;
                case U: return Y.luaH_getn(r.value);
                default: return 0;
            } }, t.exports.lua_rawset = function (t, e) { Q(t, 2); var r = rt(t, e); I(t, r.ttistable(), "table expected"); var n = t.stack[t.top - 2], a = t.stack[t.top - 1]; Y.luaH_setfrom(t, r.value, n, a), Y.invalidateTMcache(r.value), delete t.stack[--t.top], delete t.stack[--t.top]; }, t.exports.lua_rawseti = function (t, e, r) { tt(r), Q(t, 1); var n = rt(t, e); I(t, n.ttistable(), "table expected"), Y.luaH_setint(n.value, r, t.stack[t.top - 1]), delete t.stack[--t.top]; }, t.exports.lua_rawsetp = function (t, e, r) { Q(t, 1); var n = rt(t, e); I(t, n.ttistable(), "table expected"); var a = new Z(T, r), u = t.stack[t.top - 1]; Y.luaH_setfrom(t, n.value, a, u), delete t.stack[--t.top]; }, t.exports.lua_register = function (t, e, r) { ft(t, r), vt(t, e); }, t.exports.lua_remove = function (t, e) { ot(t, e, -1), ut(t, 1); }, t.exports.lua_replace = function (t, e) { lt(t, -1, e), ut(t, 1); }, t.exports.lua_rotate = ot, t.exports.lua_setallocf = function () { return console.warn("lua_setallocf is not available"), 0; }, t.exports.lua_setfield = function (t, e, r) { pt(t, rt(t, e), r); }, t.exports.lua_setglobal = vt, t.exports.lua_seti = function (t, e, r) { tt(r), Q(t, 1); var n = rt(t, e); t.stack[t.top] = new Z(E, r), W(t), z.settable(t, n, t.stack[t.top - 1], t.stack[t.top - 2]), delete t.stack[--t.top], delete t.stack[--t.top]; }, t.exports.lua_setmetatable = function (t, e) { var r; Q(t, 1); var n = rt(t, e); switch (t.stack[t.top - 1].ttisnil() ? r = null : (I(t, t.stack[t.top - 1].ttistable(), "table expected"), r = t.stack[t.top - 1].value), n.ttnov()) {
                case R:
                case U:
                    n.value.metatable = r;
                    break;
                default: t.l_G.mt[n.ttnov()] = r;
            } return delete t.stack[--t.top], !0; }, t.exports.lua_settable = function (t, e) { Q(t, 2); var r = rt(t, e); z.settable(t, r, t.stack[t.top - 2], t.stack[t.top - 1]), delete t.stack[--t.top], delete t.stack[--t.top]; }, t.exports.lua_settop = at, t.exports.lua_setupvalue = function (t, e, r) { var n = rt(t, e); Q(t, 1); var a = At(0, n, r); if (a) {
                var u = a.name;
                return a.val.setfrom(t.stack[t.top - 1]), delete t.stack[--t.top], u;
            } return null; }, t.exports.lua_setuservalue = function (t, e) { Q(t, 1); var r = rt(t, e); I(t, r.ttisfulluserdata(), "full userdata expected"), r.value.uservalue.setfrom(t.stack[t.top - 1]), delete t.stack[--t.top]; }, t.exports.lua_status = function (t) { return t.status; }, t.exports.lua_stringtonumber = function (t, e) { var r = new Z, n = V.luaO_str2num(e, r); return 0 !== n && (t.stack[t.top] = r, W(t)), n; }, t.exports.lua_toboolean = function (t, e) { return !rt(t, e).l_isfalse(); }, t.exports.lua_tocfunction = function (t, e) { var r = rt(t, e); return r.ttislcf() || r.ttisCclosure() ? r.value : null; }, t.exports.lua_todataview = function (t, e) { var r = gt(t, e); return new DataView(r.buffer, r.byteOffset, r.byteLength); }, t.exports.lua_tointeger = function (t, e) { var r = xt(t, e); return !1 === r ? 0 : r; }, t.exports.lua_tointegerx = xt, t.exports.lua_tojsstring = function (t, e) { var r = rt(t, e); if (!r.ttisstring()) {
                if (!z.cvt2str(r))
                    return null;
                V.luaO_tostring(t, r);
            } return r.jsstring(); }, t.exports.lua_tolstring = gt, t.exports.lua_tonumber = function (t, e) { var r = bt(t, e); return !1 === r ? 0 : r; }, t.exports.lua_tonumberx = bt, t.exports.lua_topointer = function (t, e) { var r = rt(t, e); switch (r.ttype()) {
                case U:
                case g:
                case L:
                case A:
                case N:
                case R:
                case T: return r.value;
                default: return null;
            } }, t.exports.lua_toproxy = function (t, e) { var r = rt(t, e); return function (t, e, r) { var n = function (n) { I(n, n instanceof B.lua_State && t === n.l_G, "must be from same global state"), n.stack[n.top] = new Z(e, r), W(n); }; return kt.set(n, t), n; }(t.l_G, r.type, r.value); }, t.exports.lua_tostring = Tt, t.exports.lua_tothread = function (t, e) { var r = rt(t, e); return r.ttisthread() ? r.value : null; }, t.exports.lua_touserdata = function (t, e) { var r = rt(t, e); switch (r.ttnov()) {
                case R: return r.value.data;
                case T: return r.value;
                default: return null;
            } }, t.exports.lua_type = Et, t.exports.lua_typename = function (t, e) { return I(t, k <= e && e < v, "invalid tag"), H.ttypename(e); }, t.exports.lua_upvalueid = function (t, e, r) { var n = rt(t, e); switch (n.ttype()) {
                case g:
                    var a = yt(t, e, r);
                    return a.f.upvals[a.i];
                case L:
                    var u = n.value;
                    return I(t, (0 | r) === r && r > 0 && r <= u.nupvalues, "invalid upvalue index"), u.upvalue[r - 1];
                default: return I(t, !1, "closure expected"), null;
            } }, t.exports.lua_upvaluejoin = function (t, e, r, n, a) { var u = yt(t, e, r), s = yt(t, n, a), o = s.f.upvals[s.i]; u.f.upvals[u.i] = o; }, t.exports.lua_version = function (t) { return null === t ? _ : t.l_G.version; }, t.exports.lua_xmove = function (t, e, r) { if (t !== e) {
                Q(t, r), I(t, t.l_G === e.l_G, "moving among independent states"), I(t, e.ci.top - e.top >= r, "stack overflow"), t.top -= r;
                for (var n = 0; n < r; n++)
                    e.stack[e.top] = new V.TValue, V.setobj2s(e, e.top, t.stack[t.top + n]), delete t.stack[t.top + n], e.top++;
            } };
        }, function (t, e, r) {
            "use strict";
            function n(t, e) { for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            } }
            function a(t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }
            var u = r(4).lua_assert, s = function () { function t(e, r, n) { a(this, t), this.L = e, u("function" == typeof r, "ZIO requires a reader"), this.reader = r, this.data = n, this.n = 0, this.buffer = null, this.off = 0; } return function (t, e, r) { e && n(t.prototype, e), r && n(t, r); }(t, [{ key: "zgetc", value: function () { return this.n-- > 0 ? this.buffer[this.off++] : o(this); } }]), t; }(), o = function (t) { var e = t.reader(t.L, t.data); if (null === e)
                return -1; u(e instanceof Uint8Array, "Should only load binary of array of bytes"); var r = e.length; return 0 === r ? -1 : (t.buffer = e, t.off = 0, t.n = r - 1, t.buffer[t.off++]); };
            t.exports.EOZ = -1, t.exports.luaZ_buffer = function (t) { return t.buffer.subarray(0, t.n); }, t.exports.luaZ_buffremove = function (t, e) { t.n -= e; }, t.exports.luaZ_fill = o, t.exports.luaZ_read = function (t, e, r, n) { for (; n;) {
                if (0 === t.n) {
                    if (-1 === o(t))
                        return n;
                    t.n++, t.off--;
                }
                for (var a = n <= t.n ? n : t.n, u = 0; u < a; u++)
                    e[r++] = t.buffer[t.off++];
                t.n -= a, 0 === t.n && (t.buffer = null), n -= a;
            } return 0; }, t.exports.luaZ_resetbuffer = function (t) { t.n = 0; }, t.exports.luaZ_resizebuffer = function (t, e, r) { var n = new Uint8Array(r); e.buffer && n.set(e.buffer), e.buffer = n; }, t.exports.MBuffer = function t() { a(this, t), this.buffer = null, this.n = 0; }, t.exports.ZIO = s;
        }, function (t, e, r) {
            "use strict";
            function n(t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }
            var a = r(1), u = a.constant_types, s = u.LUA_TBOOLEAN, o = u.LUA_TLNGSTR, l = a.thread_status.LUA_ERRSYNTAX, i = a.to_luastring, c = r(4), f = c.LUA_MINBUFFER, _ = c.MAX_INT, p = c.lua_assert, v = r(11), h = r(8), L = r(22), d = L.lisdigit, A = L.lislalnum, g = L.lislalpha, T = L.lisspace, x = L.lisxdigit, b = r(6), k = r(10), O = k.luaS_bless, E = k.luaS_hash, m = k.luaS_hashlongstr, U = k.luaS_new, N = r(9), R = r(20), y = R.EOZ, S = R.luaZ_buffer, w = R.luaZ_buffremove, I = R.luaZ_resetbuffer, M = R.luaZ_resizebuffer, P = i("_ENV", !0), C = { TK_AND: 257, TK_BREAK: 258, TK_DO: 259, TK_ELSE: 260, TK_ELSEIF: 261, TK_END: 262, TK_FALSE: 263, TK_FOR: 264, TK_FUNCTION: 265, TK_GOTO: 266, TK_IF: 267, TK_IN: 268, TK_LOCAL: 269, TK_NIL: 270, TK_NOT: 271, TK_OR: 272, TK_REPEAT: 273, TK_RETURN: 274, TK_THEN: 275, TK_TRUE: 276, TK_UNTIL: 277, TK_WHILE: 278, TK_IDIV: 279, TK_CONCAT: 280, TK_DOTS: 281, TK_EQ: 282, TK_GE: 283, TK_LE: 284, TK_NE: 285, TK_SHL: 286, TK_SHR: 287, TK_DBCOLON: 288, TK_EOS: 289, TK_FLT: 290, TK_INT: 291, TK_NAME: 292, TK_STRING: 293 }, D = ["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "goto", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while", "//", "..", "...", "==", ">=", "<=", "~=", "<<", ">>", "::", "<eof>", "<number>", "<integer>", "<name>", "<string>"].map(function (t, e) { return i(t); }), V = function t() { n(this, t), this.r = NaN, this.i = NaN, this.ts = null; }, B = function t() { n(this, t), this.token = NaN, this.seminfo = new V; }, G = function (t, e) { var r = t.buff; if (r.n + 1 > r.buffer.length) {
                r.buffer.length >= _ / 2 && W(t, i("lexical element too long", !0), 0);
                var n = 2 * r.buffer.length;
                M(t.L, r, n);
            } r.buffer[r.n++] = e < 0 ? 255 + e + 1 : e; }, K = function (t, e) { if (e < 257)
                return b.luaO_pushfstring(t.L, i("'%c'", !0), e); var r = D[e - 257]; return e < 289 ? b.luaO_pushfstring(t.L, i("'%s'", !0), r) : r; }, F = function (t) { return 10 === t.current || 13 === t.current; }, j = function (t) { t.current = t.z.zgetc(); }, H = function (t) { G(t, t.current), j(t); }, X = new b.TValue(s, !0), z = function (t, e) { var r = t.L, n = U(r, e), a = t.h.strong.get(m(n)); if (a)
                n = a.key.tsvalue();
            else {
                var u = new b.TValue(o, n);
                N.luaH_setfrom(r, t.h, u, X);
            } return n; }, Y = function (t) { var e = t.current; p(F(t)), j(t), F(t) && t.current !== e && j(t), ++t.linenumber >= _ && W(t, i("chunk has too many lines", !0), 0); }, J = function (t, e) { return t.current === e && (j(t), !0); }, Z = function (t, e) { return (t.current === e[0].charCodeAt(0) || t.current === e[1].charCodeAt(0)) && (H(t), !0); }, q = function (t, e) { var r = "Ee", n = t.current; for (p(d(t.current)), H(t), 48 === n && Z(t, "xX") && (r = "Pp");;)
                if (Z(t, r) && Z(t, "-+"), x(t.current))
                    H(t);
                else {
                    if (46 !== t.current)
                        break;
                    H(t);
                } var a = new b.TValue; return 0 === b.luaO_str2num(S(t.buff), a) && W(t, i("malformed number", !0), 290), a.ttisinteger() ? (e.i = a.value, 291) : (p(a.ttisfloat()), e.r = a.value, 290); }, W = function (t, e, r) { e = v.luaG_addinfo(t.L, e, t.source, t.linenumber), r && b.luaO_pushfstring(t.L, i("%s near %s"), e, function (t, e) { switch (e) {
                case 292:
                case 293:
                case 290:
                case 291: return b.luaO_pushfstring(t.L, i("'%s'", !0), S(t.buff));
                default: return K(t, e);
            } }(t, r)), h.luaD_throw(t.L, l); }, Q = function (t) { var e = 0, r = t.current; for (p(91 === r || 93 === r), H(t); 61 === t.current;)
                H(t), e++; return t.current === r ? e : -e - 1; }, $ = function (t, e, r) { var n = t.linenumber; H(t), F(t) && Y(t); for (var a = !1; !a;)
                switch (t.current) {
                    case y:
                        var u = "unfinished long ".concat(e ? "string" : "comment", " (starting at line ").concat(n, ")");
                        W(t, i(u), 289);
                        break;
                    case 93:
                        Q(t) === r && (H(t), a = !0);
                        break;
                    case 10:
                    case 13:
                        G(t, 10), Y(t), e || I(t.buff);
                        break;
                    default: e ? H(t) : j(t);
                } e && (e.ts = z(t, t.buff.buffer.subarray(2 + r, t.buff.n - (2 + r)))); }, tt = function (t, e, r) { e || (t.current !== y && H(t), W(t, r, 293)); }, et = function (t) { return H(t), tt(t, x(t.current), i("hexadecimal digit expected", !0)), b.luaO_hexavalue(t.current); }, rt = function (t) { var e = et(t); return e = (e << 4) + et(t), w(t.buff, 2), e; }, nt = function (t) { for (var e = new Uint8Array(b.UTF8BUFFSZ), r = b.luaO_utf8esc(e, function (t) { var e = 4; H(t), tt(t, 123 === t.current, i("missing '{'", !0)); var r = et(t); for (H(t); x(t.current);)
                e++, r = (r << 4) + b.luaO_hexavalue(t.current), tt(t, r <= 1114111, i("UTF-8 value too large", !0)), H(t); return tt(t, 125 === t.current, i("missing '}'", !0)), j(t), w(t.buff, e), r; }(t)); r > 0; r--)
                G(t, e[b.UTF8BUFFSZ - r]); }, at = function (t) { var e, r = 0; for (e = 0; e < 3 && d(t.current); e++)
                r = 10 * r + t.current - 48, H(t); return tt(t, r <= 255, i("decimal escape too large", !0)), w(t.buff, e), r; }, ut = function (t, e, r) { for (H(t); t.current !== e;)
                switch (t.current) {
                    case y:
                        W(t, i("unfinished string", !0), 289);
                        break;
                    case 10:
                    case 13:
                        W(t, i("unfinished string", !0), 293);
                        break;
                    case 92:
                        H(t);
                        var n = void 0, a = void 0;
                        switch (t.current) {
                            case 97:
                                a = 7, n = "read_save";
                                break;
                            case 98:
                                a = 8, n = "read_save";
                                break;
                            case 102:
                                a = 12, n = "read_save";
                                break;
                            case 110:
                                a = 10, n = "read_save";
                                break;
                            case 114:
                                a = 13, n = "read_save";
                                break;
                            case 116:
                                a = 9, n = "read_save";
                                break;
                            case 118:
                                a = 11, n = "read_save";
                                break;
                            case 120:
                                a = rt(t), n = "read_save";
                                break;
                            case 117:
                                nt(t), n = "no_save";
                                break;
                            case 10:
                            case 13:
                                Y(t), a = 10, n = "only_save";
                                break;
                            case 92:
                            case 34:
                            case 39:
                                a = t.current, n = "read_save";
                                break;
                            case y:
                                n = "no_save";
                                break;
                            case 122:
                                for (w(t.buff, 1), j(t); T(t.current);)
                                    F(t) ? Y(t) : j(t);
                                n = "no_save";
                                break;
                            default: tt(t, d(t.current), i("invalid escape sequence", !0)), a = at(t), n = "only_save";
                        }
                        "read_save" === n && j(t), "read_save" !== n && "only_save" !== n || (w(t.buff, 1), G(t, a));
                        break;
                    default: H(t);
                } H(t), r.ts = z(t, t.buff.buffer.subarray(1, t.buff.n - 1)); }, st = Object.create(null);
            D.forEach(function (t, e) { return st[E(t)] = e; });
            var ot = function (t, e) { for (I(t.buff);;)
                switch ((p("number" == typeof t.current), t.current)) {
                    case 10:
                    case 13:
                        Y(t);
                        break;
                    case 32:
                    case 12:
                    case 9:
                    case 11:
                        j(t);
                        break;
                    case 45:
                        if (j(t), 45 !== t.current)
                            return 45;
                        if (j(t), 91 === t.current) {
                            var r = Q(t);
                            if (I(t.buff), r >= 0) {
                                $(t, null, r), I(t.buff);
                                break;
                            }
                        }
                        for (; !F(t) && t.current !== y;)
                            j(t);
                        break;
                    case 91:
                        var n = Q(t);
                        return n >= 0 ? ($(t, e, n), 293) : (-1 !== n && W(t, i("invalid long string delimiter", !0), 293), 91);
                    case 61: return j(t), J(t, 61) ? 282 : 61;
                    case 60: return j(t), J(t, 61) ? 284 : J(t, 60) ? 286 : 60;
                    case 62: return j(t), J(t, 61) ? 283 : J(t, 62) ? 287 : 62;
                    case 47: return j(t), J(t, 47) ? 279 : 47;
                    case 126: return j(t), J(t, 61) ? 285 : 126;
                    case 58: return j(t), J(t, 58) ? 288 : 58;
                    case 34:
                    case 39: return ut(t, t.current, e), 293;
                    case 46: return H(t), J(t, 46) ? J(t, 46) ? 281 : 280 : d(t.current) ? q(t, e) : 46;
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57: return q(t, e);
                    case y: return 289;
                    default:
                        if (g(t.current)) {
                            do {
                                H(t);
                            } while (A(t.current));
                            var a = z(t, S(t.buff));
                            e.ts = a;
                            var u = st[m(a)];
                            return void 0 !== u && u <= 22 ? u + 257 : 292;
                        }
                        var s = t.current;
                        return j(t), s;
                } };
            t.exports.FIRST_RESERVED = 257, t.exports.LUA_ENV = P, t.exports.LexState = function t() { n(this, t), this.current = NaN, this.linenumber = NaN, this.lastline = NaN, this.t = new B, this.lookahead = new B, this.fs = null, this.L = null, this.z = null, this.buff = null, this.h = null, this.dyd = null, this.source = null, this.envn = null; }, t.exports.RESERVED = C, t.exports.isreserved = function (t) { var e = st[m(t)]; return void 0 !== e && e <= 22; }, t.exports.luaX_lookahead = function (t) { return p(289 === t.lookahead.token), t.lookahead.token = ot(t, t.lookahead.seminfo), t.lookahead.token; }, t.exports.luaX_newstring = z, t.exports.luaX_next = function (t) { t.lastline = t.linenumber, 289 !== t.lookahead.token ? (t.t.token = t.lookahead.token, t.t.seminfo.i = t.lookahead.seminfo.i, t.t.seminfo.r = t.lookahead.seminfo.r, t.t.seminfo.ts = t.lookahead.seminfo.ts, t.lookahead.token = 289) : t.t.token = ot(t, t.t.seminfo); }, t.exports.luaX_setinput = function (t, e, r, n, a) { e.t = { token: 0, seminfo: new V }, e.L = t, e.current = a, e.lookahead = { token: 289, seminfo: new V }, e.z = r, e.fs = null, e.linenumber = 1, e.lastline = 1, e.source = n, e.envn = O(t, P), M(t, e.buff, f); }, t.exports.luaX_syntaxerror = function (t, e) { W(t, e, t.t.token); }, t.exports.luaX_token2str = K, t.exports.luaX_tokens = D;
        }, function (t, e, r) {
            "use strict";
            var n = (0, r(1).luastring_of)(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 4, 4, 4, 4, 4, 4, 4, 21, 21, 21, 21, 21, 21, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 5, 4, 21, 21, 21, 21, 21, 21, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            t.exports.lisdigit = function (t) { return 0 != (2 & n[t + 1]); }, t.exports.lislalnum = function (t) { return 0 != (3 & n[t + 1]); }, t.exports.lislalpha = function (t) { return 0 != (1 & n[t + 1]); }, t.exports.lisprint = function (t) { return 0 != (4 & n[t + 1]); }, t.exports.lisspace = function (t) { return 0 != (8 & n[t + 1]); }, t.exports.lisxdigit = function (t) { return 0 != (16 & n[t + 1]); };
        }, function (t, e, r) {
            "use strict";
            function n(t, e) { for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            } }
            function a(t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }
            var u = r(1), s = u.LUA_MULTRET, o = u.to_luastring, l = r(35), i = l.BinOpr, c = i.OPR_ADD, f = i.OPR_AND, _ = i.OPR_BAND, p = i.OPR_BOR, v = i.OPR_BXOR, h = i.OPR_CONCAT, L = i.OPR_DIV, d = i.OPR_EQ, A = i.OPR_GE, g = i.OPR_GT, T = i.OPR_IDIV, x = i.OPR_LE, b = i.OPR_LT, k = i.OPR_MOD, O = i.OPR_MUL, E = i.OPR_NE, m = i.OPR_NOBINOPR, U = i.OPR_OR, N = i.OPR_POW, R = i.OPR_SHL, y = i.OPR_SHR, S = i.OPR_SUB, w = l.UnOpr, I = w.OPR_BNOT, M = w.OPR_LEN, P = w.OPR_MINUS, C = w.OPR_NOT, D = w.OPR_NOUNOPR, V = l.NO_JUMP, B = l.getinstruction, G = l.luaK_checkstack, K = l.luaK_codeABC, F = l.luaK_codeABx, j = l.luaK_codeAsBx, H = l.luaK_codek, X = l.luaK_concat, z = l.luaK_dischargevars, Y = l.luaK_exp2RK, J = l.luaK_exp2anyreg, Z = l.luaK_exp2anyregup, q = l.luaK_exp2nextreg, W = l.luaK_exp2val, Q = l.luaK_fixline, $ = l.luaK_getlabel, tt = l.luaK_goiffalse, et = l.luaK_goiftrue, rt = l.luaK_indexed, nt = l.luaK_infix, at = l.luaK_intK, ut = l.luaK_jump, st = l.luaK_jumpto, ot = l.luaK_nil, lt = l.luaK_patchclose, it = l.luaK_patchlist, ct = l.luaK_patchtohere, ft = l.luaK_posfix, _t = l.luaK_prefix, pt = l.luaK_reserveregs, vt = l.luaK_ret, ht = l.luaK_self, Lt = l.luaK_setlist, dt = l.luaK_setmultret, At = l.luaK_setoneret, gt = l.luaK_setreturns, Tt = l.luaK_storevar, xt = l.luaK_stringK, bt = r(8), kt = r(13), Ot = r(21), Et = r(4), mt = Et.LUAI_MAXCCALLS, Ut = Et.MAX_INT, Nt = Et.lua_assert, Rt = r(6), yt = r(16), St = yt.OpCodesI, wt = St.OP_CALL, It = St.OP_CLOSURE, Mt = St.OP_FORLOOP, Pt = St.OP_FORPREP, Ct = St.OP_GETUPVAL, Dt = St.OP_MOVE, Vt = St.OP_NEWTABLE, Bt = St.OP_SETTABLE, Gt = St.OP_TAILCALL, Kt = St.OP_TFORCALL, Ft = St.OP_TFORLOOP, jt = St.OP_VARARG, Ht = yt.LFIELDS_PER_FLUSH, Xt = yt.SETARG_B, zt = yt.SETARG_C, Yt = yt.SET_OPCODE, Jt = r(10), Zt = Jt.luaS_eqlngstr, qt = Jt.luaS_new, Wt = Jt.luaS_newliteral, Qt = r(9), $t = kt.Proto, te = Ot.RESERVED, ee = function (t) { return t === ae.VCALL || t === ae.VVARARG; }, re = function (t, e) { return Zt(t, e); }, ne = function t() { a(this, t), this.previous = null, this.firstlabel = NaN, this.firstgoto = NaN, this.nactvar = NaN, this.upval = NaN, this.isloop = NaN; }, ae = { VVOID: 0, VNIL: 1, VTRUE: 2, VFALSE: 3, VK: 4, VKFLT: 5, VKINT: 6, VNONRELOC: 7, VLOCAL: 8, VUPVAL: 9, VINDEXED: 10, VJMP: 11, VRELOCABLE: 12, VCALL: 13, VVARARG: 14 }, ue = function () { function t() { a(this, t), this.k = NaN, this.u = { ival: NaN, nval: NaN, info: NaN, ind: { idx: NaN, t: NaN, vt: NaN } }, this.t = NaN, this.f = NaN; } return function (t, e, r) { e && n(t.prototype, e), r && n(t, r); }(t, [{ key: "to", value: function (t) { this.k = t.k, this.u = t.u, this.t = t.t, this.f = t.f; } }]), t; }(), se = function t() { a(this, t), this.f = null, this.prev = null, this.ls = null, this.bl = null, this.pc = NaN, this.lasttarget = NaN, this.jpc = NaN, this.nk = NaN, this.np = NaN, this.firstlocal = NaN, this.nlocvars = NaN, this.nactvar = NaN, this.nups = NaN, this.freereg = NaN; }, oe = function t() { a(this, t), this.arr = [], this.n = NaN, this.size = NaN; }, le = function (t, e) { t.t.token = 0, Ot.luaX_syntaxerror(t, e); }, ie = function (t, e) { Ot.luaX_syntaxerror(t, Rt.luaO_pushfstring(t.L, o("%s expected", !0), Ot.luaX_token2str(t, e))); }, ce = function (t, e, r, n) { e > r && function (t, e, r) { var n = t.ls.L, a = t.f.linedefined, u = 0 === a ? o("main function", !0) : Rt.luaO_pushfstring(n, o("function at line %d", !0), a), s = Rt.luaO_pushfstring(n, o("too many %s (limit is %d) in %s", !0), r, e, u); Ot.luaX_syntaxerror(t.ls, s); }(t, r, n); }, fe = function (t, e) { return t.t.token === e && (Ot.luaX_next(t), !0); }, _e = function (t, e) { t.t.token !== e && ie(t, e); }, pe = function (t, e) { _e(t, e), Ot.luaX_next(t); }, ve = function (t, e, r) { e || Ot.luaX_syntaxerror(t, r); }, he = function (t, e, r, n) { fe(t, e) || (n === t.linenumber ? ie(t, e) : Ot.luaX_syntaxerror(t, Rt.luaO_pushfstring(t.L, o("%s expected (to close %s at line %d)"), Ot.luaX_token2str(t, e), Ot.luaX_token2str(t, r), n))); }, Le = function (t) { _e(t, te.TK_NAME); var e = t.t.seminfo.ts; return Ot.luaX_next(t), e; }, de = function (t, e, r) { t.f = t.t = V, t.k = e, t.u.info = r; }, Ae = function (t, e, r) { de(e, ae.VK, xt(t.fs, r)); }, ge = function (t, e) { Ae(t, e, Le(t)); }, Te = function (t, e) { var r = t.fs, n = t.dyd, u = function (t, e) { var r = t.fs, n = r.f; return n.locvars[r.nlocvars] = new Rt.LocVar, n.locvars[r.nlocvars].varname = e, r.nlocvars++; }(t, e); ce(r, n.actvar.n + 1 - r.firstlocal, 200, o("local variables", !0)), n.actvar.arr[n.actvar.n] = new function t() { a(this, t), this.idx = NaN; }, n.actvar.arr[n.actvar.n].idx = u, n.actvar.n++; }, xe = function (t, e) { Te(t, Ot.luaX_newstring(t, o(e, !0))); }, be = function (t, e) { var r = t.ls.dyd.actvar.arr[t.firstlocal + e].idx; return Nt(r < t.nlocvars), t.f.locvars[r]; }, ke = function (t, e) { var r = t.fs; for (r.nactvar = r.nactvar + e; e; e--)
                be(r, r.nactvar - e).startpc = r.pc; }, Oe = function (t, e, r) { var n = t.f; return ce(t, t.nups + 1, kt.MAXUPVAL, o("upvalues", !0)), n.upvalues[t.nups] = { instack: r.k === ae.VLOCAL, idx: r.u.info, name: e }, t.nups++; }, Ee = function t(e, r, n, a) { if (null === e)
                de(n, ae.VVOID, 0);
            else {
                var u = function (t, e) { for (var r = t.nactvar - 1; r >= 0; r--)
                    if (re(e, be(t, r).varname))
                        return r; return -1; }(e, r);
                if (u >= 0)
                    de(n, ae.VLOCAL, u), a || function (t, e) { for (var r = t.bl; r.nactvar > e;)
                        r = r.previous; r.upval = 1; }(e, u);
                else {
                    var s = function (t, e) { for (var r = t.f.upvalues, n = 0; n < t.nups; n++)
                        if (re(r[n].name, e))
                            return n; return -1; }(e, r);
                    if (s < 0) {
                        if (t(e.prev, r, n, 0), n.k === ae.VVOID)
                            return;
                        s = Oe(e, r, n);
                    }
                    de(n, ae.VUPVAL, s);
                }
            } }, me = function (t, e) { var r = Le(t), n = t.fs; if (Ee(n, r, e, 1), e.k === ae.VVOID) {
                var a = new ue;
                Ee(n, t.envn, e, 1), Nt(e.k !== ae.VVOID), Ae(t, a, r), rt(n, e, a);
            } }, Ue = function (t, e, r, n) { var a = t.fs, u = e - r; if (ee(n.k))
                ++u < 0 && (u = 0), gt(a, n, u), u > 1 && pt(a, u - 1);
            else if (n.k !== ae.VVOID && q(a, n), u > 0) {
                var s = a.freereg;
                pt(a, u), ot(a, s, u);
            } r > e && (t.fs.freereg -= r - e); }, Ne = function (t) { var e = t.L; ++e.nCcalls, ce(t.fs, e.nCcalls, mt, o("JS levels", !0)); }, Re = function (t) { return t.L.nCcalls--; }, ye = function (t, e, r) { var n = t.fs, a = t.dyd.gt, u = a.arr[e]; if (Nt(re(u.name, r.name)), u.nactvar < r.nactvar) {
                var s = be(n, u.nactvar).varname, l = Rt.luaO_pushfstring(t.L, o("<goto %s> at line %d jumps into the scope of local '%s'"), u.name.getstr(), u.line, s.getstr());
                le(t, l);
            } it(n, u.pc, r.pc); for (var i = e; i < a.n - 1; i++)
                a.arr[i] = a.arr[i + 1]; a.n--; }, Se = function (t, e) { for (var r = t.fs.bl, n = t.dyd, a = n.gt.arr[e], u = r.firstlabel; u < n.label.n; u++) {
                var s = n.label.arr[u];
                if (re(s.name, a.name))
                    return a.nactvar > s.nactvar && (r.upval || n.label.n > r.firstlabel) && lt(t.fs, a.pc, s.nactvar), ye(t, e, s), !0;
            } return !1; }, we = function (t, e, r, n, u) { var s = e.n; return e.arr[s] = new function t() { a(this, t), this.name = null, this.pc = NaN, this.line = NaN, this.nactvar = NaN; }, e.arr[s].name = r, e.arr[s].line = n, e.arr[s].nactvar = t.fs.nactvar, e.arr[s].pc = u, e.n = s + 1, s; }, Ie = function (t, e) { for (var r = t.dyd.gt, n = t.fs.bl.firstgoto; n < r.n;)
                re(r.arr[n].name, e.name) ? ye(t, n, e) : n++; }, Me = function (t, e, r) { e.isloop = r, e.nactvar = t.nactvar, e.firstlabel = t.ls.dyd.label.n, e.firstgoto = t.ls.dyd.gt.n, e.upval = 0, e.previous = t.bl, t.bl = e, Nt(t.freereg === t.nactvar); }, Pe = function (t, e, r) { e.prev = t.fs, e.ls = t, t.fs = e, e.pc = 0, e.lasttarget = 0, e.jpc = V, e.freereg = 0, e.nk = 0, e.np = 0, e.nups = 0, e.nlocvars = 0, e.nactvar = 0, e.firstlocal = t.dyd.actvar.n, e.bl = null; var n = e.f; n.source = t.source, n.maxstacksize = 2, Me(e, r, !1); }, Ce = function (t) { var e = t.bl, r = t.ls; if (e.previous && e.upval) {
                var n = ut(t);
                lt(t, n, e.nactvar), ct(t, n);
            } e.isloop && function (t) { var e = Wt(t.L, "break"), r = we(t, t.dyd.label, e, 0, t.fs.pc); Ie(t, t.dyd.label.arr[r]); }(r), t.bl = e.previous, function (t, e) { for (t.ls.dyd.actvar.n -= t.nactvar - e; t.nactvar > e;)
                be(t, --t.nactvar).endpc = t.pc; }(t, e.nactvar), Nt(e.nactvar === t.nactvar), t.freereg = t.nactvar, r.dyd.label.n = e.firstlabel, e.previous ? function (t, e) { for (var r = e.firstgoto, n = t.ls.dyd.gt; r < n.n;) {
                var a = n.arr[r];
                a.nactvar > e.nactvar && (e.upval && lt(t, a.pc, e.nactvar), a.nactvar = e.nactvar), Se(t.ls, r) || r++;
            } }(t, e) : e.firstgoto < r.dyd.gt.n && function (t, e) { var r = Ot.isreserved(e.name) ? "<%s> at line %d not inside a loop" : "no visible label '%s' for <goto> at line %d"; r = Rt.luaO_pushfstring(t.L, o(r), e.name.getstr(), e.line), le(t, r); }(r, r.dyd.gt.arr[e.firstgoto]); }, De = function (t) { var e = t.fs; vt(e, 0, 0), Ce(e), Nt(null === e.bl), t.fs = e.prev; }, Ve = function (t, e) { switch (t.t.token) {
                case te.TK_ELSE:
                case te.TK_ELSEIF:
                case te.TK_END:
                case te.TK_EOS: return !0;
                case te.TK_UNTIL: return e;
                default: return !1;
            } }, Be = function (t) { for (; !Ve(t, 1);) {
                if (t.t.token === te.TK_RETURN)
                    return void fr(t);
                fr(t);
            } }, Ge = function (t, e) { var r = t.fs, n = new ue; Z(r, e), Ot.luaX_next(t), ge(t, n), rt(r, e, n); }, Ke = function (t, e) { Ot.luaX_next(t), $e(t, e), W(t.fs, e), pe(t, 93); }, Fe = function (t, e) { var r = t.fs, n = t.fs.freereg, a = new ue, u = new ue; t.t.token === te.TK_NAME ? (ce(r, e.nh, Ut, o("items in a constructor", !0)), ge(t, a)) : Ke(t, a), e.nh++, pe(t, 61); var s = Y(r, a); $e(t, u), K(r, Bt, e.t.u.info, s, Y(r, u)), r.freereg = n; }, je = function (t, e) { e.v.k !== ae.VVOID && (q(t, e.v), e.v.k = ae.VVOID, e.tostore === Ht && (Lt(t, e.t.u.info, e.na, e.tostore), e.tostore = 0)); }, He = function (t, e) { $e(t, e.v), ce(t.fs, e.na, Ut, o("items in a constructor", !0)), e.na++, e.tostore++; }, Xe = function (t, e) { switch (t.t.token) {
                case te.TK_NAME:
                    61 !== Ot.luaX_lookahead(t) ? He(t, e) : Fe(t, e);
                    break;
                case 91:
                    Fe(t, e);
                    break;
                default: He(t, e);
            } }, ze = function (t, e) { var r = t.fs, n = t.linenumber, u = K(r, Vt, 0, 0, 0), o = new function t() { a(this, t), this.v = new ue, this.t = new ue, this.nh = NaN, this.na = NaN, this.tostore = NaN; }; o.na = o.nh = o.tostore = 0, o.t = e, de(e, ae.VRELOCABLE, u), de(o.v, ae.VVOID, 0), q(t.fs, e), pe(t, 123); do {
                if (Nt(o.v.k === ae.VVOID || o.tostore > 0), 125 === t.t.token)
                    break;
                je(r, o), Xe(t, o);
            } while (fe(t, 44) || fe(t, 59)); he(t, 125, 123, n), function (t, e) { 0 !== e.tostore && (ee(e.v.k) ? (dt(t, e.v), Lt(t, e.t.u.info, e.na, s), e.na--) : (e.v.k !== ae.VVOID && q(t, e.v), Lt(t, e.t.u.info, e.na, e.tostore))); }(r, o), Xt(r.f.code[u], Rt.luaO_int2fb(o.na)), zt(r.f.code[u], Rt.luaO_int2fb(o.nh)); }, Ye = function (t, e, r, n) { var a = new se, u = new ne; a.f = function (t) { var e = t.L, r = new $t(e), n = t.fs; return n.f.p[n.np++] = r, r; }(t), a.f.linedefined = n, Pe(t, a, u), pe(t, 40), r && (xe(t, "self"), ke(t, 1)), function (t) { var e = t.fs, r = e.f, n = 0; if (r.is_vararg = !1, 41 !== t.t.token)
                do {
                    switch (t.t.token) {
                        case te.TK_NAME:
                            Te(t, Le(t)), n++;
                            break;
                        case te.TK_DOTS:
                            Ot.luaX_next(t), r.is_vararg = !0;
                            break;
                        default: Ot.luaX_syntaxerror(t, o("<name> or '...' expected", !0));
                    }
                } while (!r.is_vararg && fe(t, 44)); ke(t, n), r.numparams = e.nactvar, pt(e, e.nactvar); }(t), pe(t, 41), Be(t), a.f.lastlinedefined = t.linenumber, he(t, te.TK_END, te.TK_FUNCTION, n), function (t, e) { var r = t.fs.prev; de(e, ae.VRELOCABLE, F(r, It, 0, r.np - 1)), q(r, e); }(t, e), De(t); }, Je = function (t, e) { var r = 1; for ($e(t, e); fe(t, 44);)
                q(t.fs, e), $e(t, e), r++; return r; }, Ze = function (t, e, r) { var n, a = t.fs, u = new ue; switch (t.t.token) {
                case 40:
                    Ot.luaX_next(t), 41 === t.t.token ? u.k = ae.VVOID : (Je(t, u), dt(a, u)), he(t, 41, 40, r);
                    break;
                case 123:
                    ze(t, u);
                    break;
                case te.TK_STRING:
                    Ae(t, u, t.t.seminfo.ts), Ot.luaX_next(t);
                    break;
                default: Ot.luaX_syntaxerror(t, o("function arguments expected", !0));
            } Nt(e.k === ae.VNONRELOC); var l = e.u.info; ee(u.k) ? n = s : (u.k !== ae.VVOID && q(a, u), n = a.freereg - (l + 1)), de(e, ae.VCALL, K(a, wt, l, n + 1, 2)), Q(a, r), a.freereg = l + 1; }, qe = function (t, e) { var r = t.fs, n = t.linenumber; for (!function (t, e) { switch (t.t.token) {
                case 40:
                    var r = t.linenumber;
                    return Ot.luaX_next(t), $e(t, e), he(t, 41, 40, r), void z(t.fs, e);
                case te.TK_NAME: return void me(t, e);
                default: Ot.luaX_syntaxerror(t, o("unexpected symbol", !0));
            } }(t, e);;)
                switch (t.t.token) {
                    case 46:
                        Ge(t, e);
                        break;
                    case 91:
                        var a = new ue;
                        Z(r, e), Ke(t, a), rt(r, e, a);
                        break;
                    case 58:
                        var u = new ue;
                        Ot.luaX_next(t), ge(t, u), ht(r, e, u), Ze(t, e, n);
                        break;
                    case 40:
                    case te.TK_STRING:
                    case 123:
                        q(r, e), Ze(t, e, n);
                        break;
                    default: return;
                } }, We = [{ left: 10, right: 10 }, { left: 10, right: 10 }, { left: 11, right: 11 }, { left: 11, right: 11 }, { left: 14, right: 13 }, { left: 11, right: 11 }, { left: 11, right: 11 }, { left: 6, right: 6 }, { left: 4, right: 4 }, { left: 5, right: 5 }, { left: 7, right: 7 }, { left: 7, right: 7 }, { left: 9, right: 8 }, { left: 3, right: 3 }, { left: 3, right: 3 }, { left: 3, right: 3 }, { left: 3, right: 3 }, { left: 3, right: 3 }, { left: 3, right: 3 }, { left: 2, right: 2 }, { left: 1, right: 1 }], Qe = function t(e, r, n) { Ne(e); var a = function (t) { switch (t) {
                case te.TK_NOT: return C;
                case 45: return P;
                case 126: return I;
                case 35: return M;
                default: return D;
            } }(e.t.token); if (a !== D) {
                var u = e.linenumber;
                Ot.luaX_next(e), t(e, r, 12), _t(e.fs, a, r, u);
            }
            else
                !function (t, e) { switch (t.t.token) {
                    case te.TK_FLT:
                        de(e, ae.VKFLT, 0), e.u.nval = t.t.seminfo.r;
                        break;
                    case te.TK_INT:
                        de(e, ae.VKINT, 0), e.u.ival = t.t.seminfo.i;
                        break;
                    case te.TK_STRING:
                        Ae(t, e, t.t.seminfo.ts);
                        break;
                    case te.TK_NIL:
                        de(e, ae.VNIL, 0);
                        break;
                    case te.TK_TRUE:
                        de(e, ae.VTRUE, 0);
                        break;
                    case te.TK_FALSE:
                        de(e, ae.VFALSE, 0);
                        break;
                    case te.TK_DOTS:
                        var r = t.fs;
                        ve(t, r.f.is_vararg, o("cannot use '...' outside a vararg function", !0)), de(e, ae.VVARARG, K(r, jt, 0, 1, 0));
                        break;
                    case 123: return void ze(t, e);
                    case te.TK_FUNCTION: return Ot.luaX_next(t), void Ye(t, e, 0, t.linenumber);
                    default: return void qe(t, e);
                } Ot.luaX_next(t); }(e, r); for (var s = function (t) { switch (t) {
                case 43: return c;
                case 45: return S;
                case 42: return O;
                case 37: return k;
                case 94: return N;
                case 47: return L;
                case te.TK_IDIV: return T;
                case 38: return _;
                case 124: return p;
                case 126: return v;
                case te.TK_SHL: return R;
                case te.TK_SHR: return y;
                case te.TK_CONCAT: return h;
                case te.TK_NE: return E;
                case te.TK_EQ: return d;
                case 60: return b;
                case te.TK_LE: return x;
                case 62: return g;
                case te.TK_GE: return A;
                case te.TK_AND: return f;
                case te.TK_OR: return U;
                default: return m;
            } }(e.t.token); s !== m && We[s].left > n;) {
                var l = new ue, i = e.linenumber;
                Ot.luaX_next(e), nt(e.fs, s, r);
                var w = t(e, l, We[s].right);
                ft(e.fs, s, r, l, i), s = w;
            } return Re(e), s; }, $e = function (t, e) { Qe(t, e, 0); }, tr = function (t) { var e = t.fs, r = new ne; Me(e, r, 0), Be(t), Ce(e); }, er = function t() { a(this, t), this.prev = null, this.v = new ue; }, rr = function t(e, r, n) { var a = new ue; if (ve(e, function (t) { return ae.VLOCAL <= t && t <= ae.VINDEXED; }(r.v.k), o("syntax error", !0)), fe(e, 44)) {
                var u = new er;
                u.prev = r, qe(e, u.v), u.v.k !== ae.VINDEXED && function (t, e, r) { for (var n = t.fs, a = n.freereg, u = !1; e; e = e.prev)
                    e.v.k === ae.VINDEXED && (e.v.u.ind.vt === r.k && e.v.u.ind.t === r.u.info && (u = !0, e.v.u.ind.vt = ae.VLOCAL, e.v.u.ind.t = a), r.k === ae.VLOCAL && e.v.u.ind.idx === r.u.info && (u = !0, e.v.u.ind.idx = a)); if (u) {
                    var s = r.k === ae.VLOCAL ? Dt : Ct;
                    K(n, s, a, r.u.info, 0), pt(n, 1);
                } }(e, r, u.v), ce(e.fs, n + e.L.nCcalls, mt, o("JS levels", !0)), t(e, u, n + 1);
            }
            else {
                pe(e, 61);
                var s = Je(e, a);
                if (s === n)
                    return At(e.fs, a), void Tt(e.fs, r.v, a);
                Ue(e, n, s, a);
            } de(a, ae.VNONRELOC, e.fs.freereg - 1), Tt(e.fs, r.v, a); }, nr = function (t) { var e = new ue; return $e(t, e), e.k === ae.VNIL && (e.k = ae.VFALSE), et(t.fs, e), e.f; }, ar = function (t, e) { var r, n = t.linenumber; fe(t, te.TK_GOTO) ? r = Le(t) : (Ot.luaX_next(t), r = Wt(t.L, "break")); var a = we(t, t.dyd.gt, r, n, e); Se(t, a); }, ur = function (t, e, r) { var n, a = t.fs, u = t.dyd.label; !function (t, e, r) { for (var n = t.bl.firstlabel; n < e.n; n++)
                if (re(r, e.arr[n].name)) {
                    var a = Rt.luaO_pushfstring(t.ls.L, o("label '%s' already defined on line %d", !0), r.getstr(), e.arr[n].line);
                    le(t.ls, a);
                } }(a, u, e), pe(t, te.TK_DBCOLON), n = we(t, u, e, r, $(a)), function (t) { for (; 59 === t.t.token || t.t.token === te.TK_DBCOLON;)
                fr(t); }(t), Ve(t, 0) && (u.arr[n].nactvar = a.bl.nactvar), Ie(t, u.arr[n]); }, sr = function (t) { var e = new ue; return $e(t, e), q(t.fs, e), Nt(e.k === ae.VNONRELOC), e.u.info; }, or = function (t, e, r, n, a) { var u, s = new ne, o = t.fs; ke(t, 3), pe(t, te.TK_DO); var l = a ? j(o, Pt, e, V) : ut(o); Me(o, s, 0), ke(t, n), pt(o, n), tr(t), Ce(o), ct(o, l), a ? u = j(o, Mt, e, V) : (K(o, Kt, e, 0, n), Q(o, r), u = j(o, Ft, e + 2, V)), it(o, u, l + 1), Q(o, r); }, lr = function (t, e) { var r = t.fs, n = new ne; Me(r, n, 1), Ot.luaX_next(t); var a = Le(t); switch (t.t.token) {
                case 61:
                    !function (t, e, r) { var n = t.fs, a = n.freereg; xe(t, "(for index)"), xe(t, "(for limit)"), xe(t, "(for step)"), Te(t, e), pe(t, 61), sr(t), pe(t, 44), sr(t), fe(t, 44) ? sr(t) : (H(n, n.freereg, at(n, 1)), pt(n, 1)), or(t, a, r, 1, 1); }(t, a, e);
                    break;
                case 44:
                case te.TK_IN:
                    !function (t, e) { var r = t.fs, n = new ue, a = 4, u = r.freereg; for (xe(t, "(for generator)"), xe(t, "(for state)"), xe(t, "(for control)"), Te(t, e); fe(t, 44);)
                        Te(t, Le(t)), a++; pe(t, te.TK_IN); var s = t.linenumber; Ue(t, 3, Je(t, n), n), G(r, 3), or(t, u, s, a - 3, 0); }(t, a);
                    break;
                default: Ot.luaX_syntaxerror(t, o("'=' or 'in' expected", !0));
            } he(t, te.TK_END, te.TK_FOR, e), Ce(r); }, ir = function (t, e) { var r, n = new ne, a = t.fs, u = new ue; if (Ot.luaX_next(t), $e(t, u), pe(t, te.TK_THEN), t.t.token === te.TK_GOTO || t.t.token === te.TK_BREAK) {
                for (tt(t.fs, u), Me(a, n, !1), ar(t, u.t); fe(t, 59);)
                    ;
                if (Ve(t, 0))
                    return Ce(a), e;
                r = ut(a);
            }
            else
                et(t.fs, u), Me(a, n, !1), r = u.f; return Be(t), Ce(a), t.t.token !== te.TK_ELSE && t.t.token !== te.TK_ELSEIF || (e = X(a, e, ut(a))), ct(a, r), e; }, cr = function (t, e) { var r = new ue, n = new ue; Ot.luaX_next(t); var a = function (t, e) { var r = 0; for (me(t, e); 46 === t.t.token;)
                Ge(t, e); return 58 === t.t.token && (r = 1, Ge(t, e)), r; }(t, r); Ye(t, n, a, e), Tt(t.fs, r, n), Q(t.fs, e); }, fr = function (t) { var e = t.linenumber; switch ((Ne(t), t.t.token)) {
                case 59:
                    Ot.luaX_next(t);
                    break;
                case te.TK_IF:
                    !function (t, e) { var r = t.fs, n = V; for (n = ir(t, n); t.t.token === te.TK_ELSEIF;)
                        n = ir(t, n); fe(t, te.TK_ELSE) && tr(t), he(t, te.TK_END, te.TK_IF, e), ct(r, n); }(t, e);
                    break;
                case te.TK_WHILE:
                    !function (t, e) { var r = t.fs, n = new ne; Ot.luaX_next(t); var a = $(r), u = nr(t); Me(r, n, 1), pe(t, te.TK_DO), tr(t), st(r, a), he(t, te.TK_END, te.TK_WHILE, e), Ce(r), ct(r, u); }(t, e);
                    break;
                case te.TK_DO:
                    Ot.luaX_next(t), tr(t), he(t, te.TK_END, te.TK_DO, e);
                    break;
                case te.TK_FOR:
                    lr(t, e);
                    break;
                case te.TK_REPEAT:
                    !function (t, e) { var r = t.fs, n = $(r), a = new ne, u = new ne; Me(r, a, 1), Me(r, u, 0), Ot.luaX_next(t), Be(t), he(t, te.TK_UNTIL, te.TK_REPEAT, e); var s = nr(t); u.upval && lt(r, s, u.nactvar), Ce(r), it(r, s, n), Ce(r); }(t, e);
                    break;
                case te.TK_FUNCTION:
                    cr(t, e);
                    break;
                case te.TK_LOCAL:
                    Ot.luaX_next(t), fe(t, te.TK_FUNCTION) ? function (t) { var e = new ue, r = t.fs; Te(t, Le(t)), ke(t, 1), Ye(t, e, 0, t.linenumber), be(r, e.u.info).startpc = r.pc; }(t) : function (t) { var e, r = 0, n = new ue; do {
                        Te(t, Le(t)), r++;
                    } while (fe(t, 44)); fe(t, 61) ? e = Je(t, n) : (n.k = ae.VVOID, e = 0), Ue(t, r, e, n), ke(t, r); }(t);
                    break;
                case te.TK_DBCOLON:
                    Ot.luaX_next(t), ur(t, Le(t), e);
                    break;
                case te.TK_RETURN:
                    Ot.luaX_next(t), function (t) { var e, r, n = t.fs, a = new ue; Ve(t, 1) || 59 === t.t.token ? e = r = 0 : (r = Je(t, a), ee(a.k) ? (dt(n, a), a.k === ae.VCALL && 1 === r && (Yt(B(n, a), Gt), Nt(B(n, a).A === n.nactvar)), e = n.nactvar, r = s) : 1 === r ? e = J(n, a) : (q(n, a), e = n.nactvar, Nt(r === n.freereg - e))), vt(n, e, r), fe(t, 59); }(t);
                    break;
                case te.TK_BREAK:
                case te.TK_GOTO:
                    ar(t, ut(t.fs));
                    break;
                default: !function (t) { var e = t.fs, r = new er; qe(t, r.v), 61 === t.t.token || 44 === t.t.token ? (r.prev = null, rr(t, r, 1)) : (ve(t, r.v.k === ae.VCALL, o("syntax error", !0)), zt(B(e, r.v), 1)); }(t);
            } Nt(t.fs.f.maxstacksize >= t.fs.freereg && t.fs.freereg >= t.fs.nactvar), t.fs.freereg = t.fs.nactvar, Re(t); };
            t.exports.Dyndata = function t() { a(this, t), this.actvar = { arr: [], n: NaN, size: NaN }, this.gt = new oe, this.label = new oe; }, t.exports.expkind = ae, t.exports.expdesc = ue, t.exports.luaY_parser = function (t, e, r, n, a, u) { var s = new Ot.LexState, o = new se, l = kt.luaF_newLclosure(t, 1); return bt.luaD_inctop(t), t.stack[t.top - 1].setclLvalue(l), s.h = Qt.luaH_new(t), bt.luaD_inctop(t), t.stack[t.top - 1].sethvalue(s.h), o.f = l.p = new $t(t), o.f.source = qt(t, a), s.buff = r, s.dyd = n, n.actvar.n = n.gt.n = n.label.n = 0, Ot.luaX_setinput(t, s, e, o.f.source, u), function (t, e) { var r = new ne, n = new ue; Pe(t, e, r), e.f.is_vararg = !0, de(n, ae.VLOCAL, 0), Oe(e, t.envn, n), Ot.luaX_next(t), Be(t), _e(t, te.TK_EOS), De(t); }(s, o), Nt(!o.prev && 1 === o.nups && !s.fs), Nt(0 === n.actvar.n && 0 === n.gt.n && 0 === n.label.n), delete t.stack[--t.top], l; }, t.exports.vkisinreg = function (t) { return t === ae.VNONRELOC || t === ae.VLOCAL; };
        }, function (t, e, r) {
            "use strict";
            var n, a, u = r(2), s = u.LUA_MULTRET, o = u.LUA_OK, l = u.LUA_TFUNCTION, i = u.LUA_TNIL, c = u.LUA_TNONE, f = u.LUA_TNUMBER, _ = u.LUA_TSTRING, p = u.LUA_TTABLE, v = u.LUA_VERSION, h = u.LUA_YIELD, L = u.lua_call, d = u.lua_callk, A = u.lua_concat, g = u.lua_error, T = u.lua_getglobal, x = u.lua_geti, b = u.lua_getmetatable, k = u.lua_gettop, O = u.lua_insert, E = u.lua_isnil, m = u.lua_isnone, U = u.lua_isstring, N = u.lua_load, R = u.lua_next, y = u.lua_pcallk, S = u.lua_pop, w = u.lua_pushboolean, I = u.lua_pushcfunction, M = u.lua_pushglobaltable, P = u.lua_pushinteger, C = u.lua_pushliteral, D = u.lua_pushnil, V = u.lua_pushstring, B = u.lua_pushvalue, G = u.lua_rawequal, K = u.lua_rawget, F = u.lua_rawlen, j = u.lua_rawset, H = u.lua_remove, X = u.lua_replace, z = u.lua_rotate, Y = u.lua_setfield, J = u.lua_setmetatable, Z = u.lua_settop, q = u.lua_setupvalue, W = u.lua_stringtonumber, Q = u.lua_toboolean, $ = u.lua_tolstring, tt = u.lua_tostring, et = u.lua_type, rt = u.lua_typename, nt = r(7), at = nt.luaL_argcheck, ut = nt.luaL_checkany, st = nt.luaL_checkinteger, ot = nt.luaL_checkoption, lt = nt.luaL_checkstack, it = nt.luaL_checktype, ct = nt.luaL_error, ft = nt.luaL_getmetafield, _t = nt.luaL_loadbufferx, pt = nt.luaL_loadfile, vt = nt.luaL_loadfilex, ht = nt.luaL_optinteger, Lt = nt.luaL_optstring, dt = nt.luaL_setfuncs, At = nt.luaL_tolstring, gt = nt.luaL_where, Tt = r(5), xt = Tt.to_jsstring, bt = Tt.to_luastring;
            if ("function" == typeof TextDecoder) {
                var kt = "", Ot = new TextDecoder("utf-8");
                n = function (t) { kt += Ot.decode(t, { stream: !0 }); };
                var Et = new Uint8Array(0);
                a = function () { kt += Ot.decode(Et), console.log(kt), kt = ""; };
            }
            else {
                var mt = [];
                n = function (t) { try {
                    t = xt(t);
                }
                catch (r) {
                    var e = new Uint8Array(t.length);
                    e.set(t), t = e;
                } mt.push(t); }, a = function () { console.log.apply(console.log, mt), mt = []; };
            }
            var Ut = ["stop", "restart", "collect", "count", "step", "setpause", "setstepmul", "isrunning"].map(function (t) { return bt(t); }), Nt = function (t) { return it(t, 1, p), Z(t, 2), R(t, 1) ? 2 : (D(t), 1); }, Rt = function (t) { var e = st(t, 2) + 1; return P(t, e), x(t, 1, e) === i ? 1 : 2; }, yt = function (t) { var e = ht(t, 2, 1); return Z(t, 1), et(t, 1) === _ && e > 0 && (gt(t, e), B(t, 1), A(t, 2)), g(t); }, St = function (t, e, r) { return e !== o && e !== h ? (w(t, 0), B(t, -2), 2) : k(t) - r; }, wt = function (t, e, r) { return e === o ? (0 !== r && (B(t, r), q(t, -2, 1) || S(t, 1)), 1) : (D(t), O(t, -2), 2); }, It = function (t, e) { return lt(t, 2, "too many nested functions"), B(t, 1), L(t, 0, 1), E(t, -1) ? (S(t, 1), null) : (U(t, -1) || ct(t, bt("reader function must return a string")), X(t, 5), tt(t, 5)); }, Mt = function (t, e, r) { return k(t) - 1; }, Pt = { assert: function (t) { return Q(t, 1) ? k(t) : (ut(t, 1), H(t, 1), C(t, "assertion failed!"), Z(t, 1), yt(t)); }, collectgarbage: function (t) { ot(t, 1, "collect", Ut), ht(t, 2, 0), ct(t, bt("lua_gc not implemented")); }, dofile: function (t) { var e = Lt(t, 1, null); return Z(t, 1), pt(t, e) !== o ? g(t) : (d(t, 0, s, 0, Mt), Mt(t)); }, error: yt, getmetatable: function (t) { return ut(t, 1), b(t, 1) ? (ft(t, 1, bt("__metatable", !0)), 1) : (D(t), 1); }, ipairs: function (t) { return ut(t, 1), I(t, Rt), B(t, 1), P(t, 0), 3; }, load: function (t) { var e, r = tt(t, 1), n = Lt(t, 3, "bt"), a = m(t, 4) ? 0 : 4; if (null !== r) {
                    var u = Lt(t, 2, r);
                    e = _t(t, r, r.length, u, n);
                }
                else {
                    var s = Lt(t, 2, "=(load)");
                    it(t, 1, l), Z(t, 5), e = N(t, It, null, s, n);
                } return wt(t, e, a); }, loadfile: function (t) { var e = Lt(t, 1, null), r = Lt(t, 2, null), n = m(t, 3) ? 0 : 3, a = vt(t, e, r); return wt(t, a, n); }, next: Nt, pairs: function (t) { return function (t, e, r, n) { return ut(t, 1), ft(t, 1, e) === i ? (I(t, n), B(t, 1), r ? P(t, 0) : D(t)) : (B(t, 1), L(t, 1, 3)), 3; }(t, bt("__pairs", !0), 0, Nt); }, pcall: function (t) { ut(t, 1), w(t, 1), O(t, 1); var e = y(t, k(t) - 2, s, 0, 0, St); return St(t, e, 0); }, print: function (t) { var e = k(t); T(t, bt("tostring", !0)); for (var r = 1; r <= e; r++) {
                    B(t, -1), B(t, r), L(t, 1, 1);
                    var u = $(t, -1);
                    if (null === u)
                        return ct(t, bt("'tostring' must return a string to 'print'"));
                    r > 1 && n(bt("\t")), n(u), S(t, 1);
                } return a(), 0; }, rawequal: function (t) { return ut(t, 1), ut(t, 2), w(t, G(t, 1, 2)), 1; }, rawget: function (t) { return it(t, 1, p), ut(t, 2), Z(t, 2), K(t, 1), 1; }, rawlen: function (t) { var e = et(t, 1); return at(t, e === p || e === _, 1, "table or string expected"), P(t, F(t, 1)), 1; }, rawset: function (t) { return it(t, 1, p), ut(t, 2), ut(t, 3), Z(t, 3), j(t, 1), 1; }, select: function (t) { var e = k(t); if (et(t, 1) === _ && 35 === tt(t, 1)[0])
                    return P(t, e - 1), 1; var r = st(t, 1); return r < 0 ? r = e + r : r > e && (r = e), at(t, 1 <= r, 1, "index out of range"), e - r; }, setmetatable: function (t) { var e = et(t, 2); return it(t, 1, p), at(t, e === i || e === p, 2, "nil or table expected"), ft(t, 1, bt("__metatable", !0)) !== i ? ct(t, bt("cannot change a protected metatable")) : (Z(t, 2), J(t, 1), 1); }, tonumber: function (t) { if (et(t, 2) <= 0) {
                    if (ut(t, 1), et(t, 1) === f)
                        return Z(t, 1), 1;
                    var e = tt(t, 1);
                    if (null !== e && W(t, e) === e.length + 1)
                        return 1;
                }
                else {
                    var r = st(t, 2);
                    it(t, 1, _);
                    var n = tt(t, 1);
                    at(t, 2 <= r && r <= 36, 2, "base out of range");
                    var a = function (t, e) { try {
                        t = xt(t);
                    }
                    catch (t) {
                        return null;
                    } var r = /^[\t\v\f \n\r]*([+-]?)0*([0-9A-Za-z]+)[\t\v\f \n\r]*$/.exec(t); if (!r)
                        return null; var n = parseInt(r[1] + r[2], e); return isNaN(n) ? null : 0 | n; }(n, r);
                    if (null !== a)
                        return P(t, a), 1;
                } return D(t), 1; }, tostring: function (t) { return ut(t, 1), At(t, 1), 1; }, type: function (t) { var e = et(t, 1); return at(t, e !== c, 1, "value expected"), V(t, rt(t, e)), 1; }, xpcall: function (t) { var e = k(t); it(t, 2, l), w(t, 1), B(t, 1), z(t, 3, 2); var r = y(t, e - 2, s, 2, 2, St); return St(t, r, 2); } };
            t.exports.luaopen_base = function (t) { return M(t), dt(t, Pt, 0), B(t, -1), Y(t, -2, bt("_G")), C(t, v), Y(t, -2, bt("_VERSION")), 1; };
        }, function (t, e, r) {
            "use strict";
            var n = r(2), a = n.LUA_OK, u = n.LUA_TFUNCTION, s = n.LUA_TSTRING, o = n.LUA_YIELD, l = n.lua_Debug, i = n.lua_checkstack, c = n.lua_concat, f = n.lua_error, _ = n.lua_getstack, p = n.lua_gettop, v = n.lua_insert, h = n.lua_isyieldable, L = n.lua_newthread, d = n.lua_pop, A = n.lua_pushboolean, g = n.lua_pushcclosure, T = n.lua_pushliteral, x = n.lua_pushthread, b = n.lua_pushvalue, k = n.lua_resume, O = n.lua_status, E = n.lua_tothread, m = n.lua_type, U = n.lua_upvalueindex, N = n.lua_xmove, R = n.lua_yield, y = r(7), S = y.luaL_argcheck, w = y.luaL_checktype, I = y.luaL_newlib, M = y.luaL_where, P = function (t) { var e = E(t, 1); return S(t, e, 1, "thread expected"), e; }, C = function (t, e, r) { if (!i(e, r))
                return T(t, "too many arguments to resume"), -1; if (O(e) === a && 0 === p(e))
                return T(t, "cannot resume dead coroutine"), -1; N(t, e, r); var n = k(e, t, r); if (n === a || n === o) {
                var u = p(e);
                return i(t, u + 1) ? (N(e, t, u), u) : (d(e, u), T(t, "too many results to resume"), -1);
            } return N(e, t, 1), -1; }, D = function (t) { var e = E(t, U(1)), r = C(t, e, p(t)); return r < 0 ? (m(t, -1) === s && (M(t, 1), v(t, -2), c(t, 2)), f(t)) : r; }, V = function (t) { w(t, 1, u); var e = L(t); return b(t, 1), N(t, e, 1), 1; }, B = { create: V, isyieldable: function (t) { return A(t, h(t)), 1; }, resume: function (t) { var e = P(t), r = C(t, e, p(t) - 1); return r < 0 ? (A(t, 0), v(t, -2), 2) : (A(t, 1), v(t, -(r + 1)), r + 1); }, running: function (t) { return A(t, x(t)), 2; }, status: function (t) { var e = P(t); if (t === e)
                    T(t, "running");
                else
                    switch (O(e)) {
                        case o:
                            T(t, "suspended");
                            break;
                        case a:
                            var r = new l;
                            _(e, 0, r) > 0 ? T(t, "normal") : 0 === p(e) ? T(t, "dead") : T(t, "suspended");
                            break;
                        default: T(t, "dead");
                    } return 1; }, wrap: function (t) { return V(t), g(t, D, 1), 1; }, yield: function (t) { return R(t, p(t)); } };
            t.exports.luaopen_coroutine = function (t) { return I(t, B), 1; };
        }, function (t, e, r) {
            "use strict";
            var n = r(3).LUA_MAXINTEGER, a = r(2), u = a.LUA_OPEQ, s = a.LUA_OPLT, o = a.LUA_TFUNCTION, l = a.LUA_TNIL, i = a.LUA_TTABLE, c = a.lua_call, f = a.lua_checkstack, _ = a.lua_compare, p = a.lua_createtable, v = a.lua_geti, h = a.lua_getmetatable, L = a.lua_gettop, d = a.lua_insert, A = a.lua_isnil, g = a.lua_isnoneornil, T = a.lua_isstring, x = a.lua_pop, b = a.lua_pushinteger, k = a.lua_pushnil, O = a.lua_pushstring, E = a.lua_pushvalue, m = a.lua_rawget, U = a.lua_setfield, N = a.lua_seti, R = a.lua_settop, y = a.lua_toboolean, S = a.lua_type, w = r(7), I = w.luaL_Buffer, M = w.luaL_addlstring, P = w.luaL_addvalue, C = w.luaL_argcheck, D = w.luaL_buffinit, V = w.luaL_checkinteger, B = w.luaL_checktype, G = w.luaL_error, K = w.luaL_len, F = w.luaL_newlib, j = w.luaL_opt, H = w.luaL_optinteger, X = w.luaL_optlstring, z = w.luaL_pushresult, Y = w.luaL_typename, J = r(17), Z = r(5).to_luastring, q = function (t, e, r) { return O(t, e), m(t, -r) !== l; }, W = function (t, e, r) { if (S(t, e) !== i) {
                var n = 1;
                !h(t, e) || 1 & r && !q(t, Z("__index", !0), ++n) || 2 & r && !q(t, Z("__newindex", !0), ++n) || 4 & r && !q(t, Z("__len", !0), ++n) ? B(t, e, i) : x(t, n);
            } }, Q = function (t, e, r) { return W(t, e, 4 | r), K(t, e); }, $ = function (t, e, r) { v(t, 1, r), T(t, -1) || G(t, Z("invalid value (%s) at index %d in table for 'concat'"), Y(t, -1), r), P(e); }, tt = function (t, e, r) { N(t, 1, e), N(t, 1, r); }, et = function (t, e, r) { if (A(t, 2))
                return _(t, e, r, s); E(t, 2), E(t, e - 1), E(t, r - 2), c(t, 2, 1); var n = y(t, -1); return x(t, 1), n; }, rt = function (t, e, r) { for (var n = e, a = r - 1;;) {
                for (; v(t, 1, ++n), et(t, -1, -2);)
                    n == r - 1 && G(t, Z("invalid order function for sorting")), x(t, 1);
                for (; v(t, 1, --a), et(t, -3, -1);)
                    a < n && G(t, Z("invalid order function for sorting")), x(t, 1);
                if (a < n)
                    return x(t, 1), tt(t, r - 1, n), n;
                tt(t, n, a);
            } }, nt = function (t, e, r) { var n = Math.floor((e - t) / 4), a = r % (2 * n) + (t + n); return J.lua_assert(t + n <= a && a <= e - n), a; }, at = { concat: function (t) { var e = Q(t, 1, 1), r = X(t, 2, ""), n = r.length, a = H(t, 3, 1); e = H(t, 4, e); var u = new I; for (D(t, u); a < e; a++)
                    $(t, u, a), M(u, r, n); return a === e && $(t, u, a), z(u), 1; }, insert: function (t) { var e, r = Q(t, 1, 3) + 1; switch (L(t)) {
                    case 2:
                        e = r;
                        break;
                    case 3:
                        e = V(t, 2), C(t, 1 <= e && e <= r, 2, "position out of bounds");
                        for (var n = r; n > e; n--)
                            v(t, 1, n - 1), N(t, 1, n);
                        break;
                    default: return G(t, "wrong number of arguments to 'insert'");
                } return N(t, 1, e), 0; }, move: function (t) { var e = V(t, 2), r = V(t, 3), a = V(t, 4), s = g(t, 5) ? 1 : 5; if (W(t, 1, 1), W(t, s, 2), r >= e) {
                    C(t, e > 0 || r < n + e, 3, "too many elements to move");
                    var o = r - e + 1;
                    if (C(t, a <= n - o + 1, 4, "destination wrap around"), a > r || a <= e || 1 !== s && 1 !== _(t, 1, s, u))
                        for (var l = 0; l < o; l++)
                            v(t, 1, e + l), N(t, s, a + l);
                    else
                        for (var i = o - 1; i >= 0; i--)
                            v(t, 1, e + i), N(t, s, a + i);
                } return E(t, s), 1; }, pack: function (t) { var e = L(t); p(t, e, 1), d(t, 1); for (var r = e; r >= 1; r--)
                    N(t, 1, r); return b(t, e), U(t, 1, Z("n")), 1; }, remove: function (t) { var e = Q(t, 1, 3), r = H(t, 2, e); for (r !== e && C(t, 1 <= r && r <= e + 1, 1, "position out of bounds"), v(t, 1, r); r < e; r++)
                    v(t, 1, r + 1), N(t, 1, r); return k(t), N(t, 1, r), 1; }, sort: function (t) { var e = Q(t, 1, 3); return e > 1 && (C(t, e < n, 1, "array too big"), g(t, 2) || B(t, 2, o), R(t, 2), function t(e, r, n, a) { for (; r < n;) {
                    if (v(e, 1, r), v(e, 1, n), et(e, -1, -2) ? tt(e, r, n) : x(e, 2), n - r == 1)
                        return;
                    var u = void 0;
                    if (u = n - r < 100 || 0 === a ? Math.floor((r + n) / 2) : nt(r, n, a), v(e, 1, u), v(e, 1, r), et(e, -2, -1) ? tt(e, u, r) : (x(e, 1), v(e, 1, n), et(e, -1, -2) ? tt(e, u, n) : x(e, 2)), n - r == 2)
                        return;
                    v(e, 1, u), E(e, -1), v(e, 1, n - 1), tt(e, u, n - 1);
                    var s = void 0;
                    (u = rt(e, r, n)) - r < n - u ? (t(e, r, u - 1, a), s = u - r, r = u + 1) : (t(e, u + 1, n, a), s = n - u, n = u - 1), (n - r) / 128 > s && (a = Math.floor(4294967296 * Math.random()));
                } }(t, 1, e, 0)), 0; }, unpack: function (t) { var e = H(t, 2, 1), r = j(t, V, 3, K(t, 1)); if (e > r)
                    return 0; var n = r - e; if (n >= Number.MAX_SAFE_INTEGER || !f(t, ++n))
                    return G(t, Z("too many results to unpack")); for (; e < r; e++)
                    v(t, 1, e); return v(t, 1, r), n; } };
            t.exports.luaopen_table = function (t) { return F(t, at), 1; };
        }, function (t, e, r) {
            "use strict";
            var n = r(2), a = n.LUA_TNIL, u = n.LUA_TTABLE, s = (n.lua_close, n.lua_createtable), o = n.lua_getfield, l = (n.lua_isboolean, n.lua_isnoneornil), i = n.lua_pop, c = (n.lua_pushboolean, n.lua_pushfstring), f = n.lua_pushinteger, _ = (n.lua_pushliteral, n.lua_pushnil, n.lua_pushnumber), p = (n.lua_pushstring, n.lua_setfield), v = n.lua_settop, h = (n.lua_toboolean, n.lua_tointegerx), L = r(7), d = L.luaL_Buffer, A = L.luaL_addchar, g = L.luaL_addstring, T = L.luaL_argerror, x = L.luaL_buffinit, b = L.luaL_checkinteger, k = (L.luaL_checkstring, L.luaL_checktype), O = L.luaL_error, E = (L.luaL_execresult, L.luaL_fileresult, L.luaL_newlib), m = (L.luaL_optinteger, L.luaL_optlstring), U = (L.luaL_optstring, L.luaL_pushresult), N = r(5), R = N.luastring_eq, y = (N.to_jsstring, N.to_luastring), S = y("aAbBcCdDeFhHIjklmMnpPrRStTuUwWxXyYzZ%"), w = function (t, e, r) { f(t, r), p(t, -2, y(e, !0)); }, I = function (t, e, r) { w(t, "sec", r ? e.getUTCSeconds() : e.getSeconds()), w(t, "min", r ? e.getUTCMinutes() : e.getMinutes()), w(t, "hour", r ? e.getUTCHours() : e.getHours()), w(t, "day", r ? e.getUTCDate() : e.getDate()), w(t, "month", (r ? e.getUTCMonth() : e.getMonth()) + 1), w(t, "year", r ? e.getUTCFullYear() : e.getFullYear()), w(t, "wday", (r ? e.getUTCDay() : e.getDay()) + 1), w(t, "yday", Math.floor((e - new Date(e.getFullYear(), 0, 0)) / 864e5)); }, M = Number.MAX_SAFE_INTEGER / 2, P = function (t, e, r, n) { var u = o(t, -1, y(e, !0)), s = h(t, -1); if (!1 === s) {
                if (u !== a)
                    return O(t, y("field '%s' is not an integer"), e);
                if (r < 0)
                    return O(t, y("field '%s' missing in date table"), e);
                s = r;
            }
            else {
                if (!(-M <= s && s <= M))
                    return O(t, y("field '%s' is out-of-bound"), e);
                s -= n;
            } return i(t, 1), s; }, C = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(function (t) { return y(t); }), shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(function (t) { return y(t); }), months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(function (t) { return y(t); }), shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(function (t) { return y(t); }), AM: y("AM"), PM: y("PM"), am: y("am"), pm: y("pm"), formats: { c: y("%a %b %e %H:%M:%S %Y"), D: y("%m/%d/%y"), F: y("%Y-%m-%d"), R: y("%H:%M"), r: y("%I:%M:%S %p"), T: y("%H:%M:%S"), X: y("%T"), x: y("%D") } }, D = function (t, e) { var r = t.getDay(); "monday" === e && (0 === r ? r = 6 : r--); var n = (t - new Date(t.getFullYear(), 0, 1)) / 864e5; return Math.floor((n + 7 - r) / 7); }, V = function (t, e, r) { e < 10 && A(t, r), g(t, y(String(e))); }, B = function (t, e, r) { for (var n = S, a = 0, u = 1; a < n.length && u <= e.length - r; a += u)
                if (n[a] === "|".charCodeAt(0))
                    u++;
                else if (R(e.subarray(r, r + u), n.subarray(a, a + u)))
                    return u; T(t, 1, c(t, y("invalid conversion specifier '%%%s'"), e)); }, G = function (t, e) { return b(t, e); }, K = { date: function (t) { var e = m(t, 1, "%c"), r = l(t, 2) ? new Date : new Date(1e3 * G(t, 2)), n = !1, a = 0; if (e[a] === "!".charCodeAt(0) && (n = !0, a++), e[a] === "*".charCodeAt(0) && e[a + 1] === "t".charCodeAt(0))
                    s(t, 0, 9), I(t, r, n);
                else {
                    new Uint8Array(4)[0] = "%".charCodeAt(0);
                    var u = new d;
                    x(t, u), function t(e, r, n, a) { for (var u = 0; u < n.length;)
                        if (37 !== n[u])
                            A(r, n[u++]);
                        else {
                            var s = B(e, n, ++u);
                            switch (n[u]) {
                                case 37:
                                    A(r, 37);
                                    break;
                                case 65:
                                    g(r, C.days[a.getDay()]);
                                    break;
                                case 66:
                                    g(r, C.months[a.getMonth()]);
                                    break;
                                case 67:
                                    V(r, Math.floor(a.getFullYear() / 100), 48);
                                    break;
                                case 68:
                                    t(e, r, C.formats.D, a);
                                    break;
                                case 70:
                                    t(e, r, C.formats.F, a);
                                    break;
                                case 72:
                                    V(r, a.getHours(), 48);
                                    break;
                                case 73:
                                    V(r, (a.getHours() + 11) % 12 + 1, 48);
                                    break;
                                case 77:
                                    V(r, a.getMinutes(), 48);
                                    break;
                                case 80:
                                    g(r, a.getHours() < 12 ? C.am : C.pm);
                                    break;
                                case 82:
                                    t(e, r, C.formats.R, a);
                                    break;
                                case 83:
                                    V(r, a.getSeconds(), 48);
                                    break;
                                case 84:
                                    t(e, r, C.formats.T, a);
                                    break;
                                case 85:
                                    V(r, D(a, "sunday"), 48);
                                    break;
                                case 87:
                                    V(r, D(a, "monday"), 48);
                                    break;
                                case 88:
                                    t(e, r, C.formats.X, a);
                                    break;
                                case 89:
                                    g(r, y(String(a.getFullYear())));
                                    break;
                                case 90:
                                    var o = a.toString().match(/\(([\w\s]+)\)/);
                                    o && g(r, y(o[1]));
                                    break;
                                case 97:
                                    g(r, C.shortDays[a.getDay()]);
                                    break;
                                case 98:
                                case 104:
                                    g(r, C.shortMonths[a.getMonth()]);
                                    break;
                                case 99:
                                    t(e, r, C.formats.c, a);
                                    break;
                                case 100:
                                    V(r, a.getDate(), 48);
                                    break;
                                case 101:
                                    V(r, a.getDate(), 32);
                                    break;
                                case 106:
                                    var l = Math.floor((a - new Date(a.getFullYear(), 0, 1)) / 864e5);
                                    l < 100 && (l < 10 && A(r, 48), A(r, 48)), g(r, y(String(l)));
                                    break;
                                case 107:
                                    V(r, a.getHours(), 32);
                                    break;
                                case 108:
                                    V(r, (a.getHours() + 11) % 12 + 1, 32);
                                    break;
                                case 109:
                                    V(r, a.getMonth() + 1, 48);
                                    break;
                                case 110:
                                    A(r, 10);
                                    break;
                                case 112:
                                    g(r, a.getHours() < 12 ? C.AM : C.PM);
                                    break;
                                case 114:
                                    t(e, r, C.formats.r, a);
                                    break;
                                case 115:
                                    g(r, y(String(Math.floor(a / 1e3))));
                                    break;
                                case 116:
                                    A(r, 8);
                                    break;
                                case 117:
                                    var i = a.getDay();
                                    g(r, y(String(0 === i ? 7 : i)));
                                    break;
                                case 119:
                                    g(r, y(String(a.getDay())));
                                    break;
                                case 120:
                                    t(e, r, C.formats.x, a);
                                    break;
                                case 121:
                                    V(r, a.getFullYear() % 100, 48);
                                    break;
                                case 122:
                                    var c = a.getTimezoneOffset();
                                    c > 0 ? A(r, 45) : (c = -c, A(r, 43)), V(r, Math.floor(c / 60), 48), V(r, c % 60, 48);
                            }
                            u += s;
                        } }(t, u, e, r), U(u);
                } return 1; }, difftime: function (t) { var e = G(t, 1), r = G(t, 2); return _(t, e - r), 1; }, time: function (t) { var e; return l(t, 1) ? e = new Date : (k(t, 1, u), v(t, 1), e = new Date(P(t, "year", -1, 0), P(t, "month", -1, 1), P(t, "day", -1, 0), P(t, "hour", 12, 0), P(t, "min", 0, 0), P(t, "sec", 0, 0)), I(t, e)), f(t, Math.floor(e / 1e3)), 1; } };
            K.clock = function (t) { return _(t, performance.now() / 1e3), 1; };
            t.exports.luaopen_os = function (t) { return E(t, K), 1; };
        }, function (t, e, r) {
            "use strict";
            function n(t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }
            var a = r(38).sprintf, u = r(3), s = u.LUA_INTEGER_FMT, o = u.LUA_INTEGER_FRMLEN, l = u.LUA_MININTEGER, i = u.LUA_NUMBER_FMT, c = u.LUA_NUMBER_FRMLEN, f = u.frexp, _ = u.lua_getlocaledecpoint, p = r(2), v = p.LUA_TBOOLEAN, h = p.LUA_TFUNCTION, L = p.LUA_TNIL, d = p.LUA_TNUMBER, A = p.LUA_TSTRING, g = p.LUA_TTABLE, T = p.lua_call, x = p.lua_createtable, b = p.lua_dump, k = p.lua_gettable, O = p.lua_gettop, E = p.lua_isinteger, m = p.lua_isstring, U = p.lua_pop, N = p.lua_pushcclosure, R = p.lua_pushinteger, y = p.lua_pushlightuserdata, S = p.lua_pushliteral, w = p.lua_pushlstring, I = p.lua_pushnil, M = p.lua_pushnumber, P = p.lua_pushstring, C = p.lua_pushvalue, D = p.lua_remove, V = p.lua_setfield, B = p.lua_setmetatable, G = p.lua_settop, K = p.lua_toboolean, F = p.lua_tointeger, j = p.lua_tonumber, H = p.lua_tostring, X = p.lua_touserdata, z = p.lua_type, Y = p.lua_upvalueindex, J = r(7), Z = J.luaL_Buffer, q = J.luaL_addchar, W = J.luaL_addlstring, Q = J.luaL_addsize, $ = J.luaL_addstring, tt = J.luaL_addvalue, et = J.luaL_argcheck, rt = J.luaL_argerror, nt = J.luaL_buffinit, at = J.luaL_buffinitsize, ut = J.luaL_checkinteger, st = J.luaL_checknumber, ot = J.luaL_checkstack, lt = J.luaL_checkstring, it = J.luaL_checktype, ct = J.luaL_error, ft = J.luaL_newlib, _t = J.luaL_optinteger, pt = J.luaL_optstring, vt = J.luaL_prepbuffsize, ht = J.luaL_pushresult, Lt = J.luaL_pushresultsize, dt = J.luaL_tolstring, At = J.luaL_typename, gt = r(17), Tt = r(5), xt = Tt.luastring_eq, bt = Tt.luastring_indexOf, kt = Tt.to_jsstring, Ot = Tt.to_luastring, Et = "%".charCodeAt(0), mt = function (t) { var e = bt(t, 0); return e > -1 ? e : t.length; }, Ut = function (t, e) { return t >= 0 ? t : 0 - t > e ? 0 : e + t + 1; }, Nt = function (t, e, r, n) { return W(n, e, r), 0; }, Rt = c.length + 1, yt = function (t, e, r) { var n = function (t) { if (Object.is(t, 1 / 0))
                return Ot("inf"); if (Object.is(t, -1 / 0))
                return Ot("-inf"); if (Number.isNaN(t))
                return Ot("nan"); if (0 === t) {
                var e = a(i + "x0p+0", t);
                return Object.is(t, -0) && (e = "-" + e), Ot(e);
            } var r = "", n = f(t), u = n[0], s = n[1]; return u < 0 && (r += "-", u = -u), r += "0x", r += (2 * u).toString(16), r += a("p%+d", s -= 1), Ot(r); }(r); if (65 === e[Rt])
                for (var u = 0; u < n.length; u++) {
                    var s = n[u];
                    s >= 97 && (n[u] = 223 & s);
                }
            else
                97 !== e[Rt] && ct(t, Ot("modifiers for format '%%a'/'%%A' not implemented")); return n; }, St = Ot("-+ #0"), wt = function (t) { return 97 <= t && t <= 122 || 65 <= t && t <= 90; }, It = function (t) { return 48 <= t && t <= 57; }, Mt = function (t) { return 0 <= t && t <= 31 || 127 === t; }, Pt = function (t) { return 33 <= t && t <= 126; }, Ct = function (t) { return 97 <= t && t <= 122; }, Dt = function (t) { return 65 <= t && t <= 90; }, Vt = function (t) { return 97 <= t && t <= 122 || 65 <= t && t <= 90 || 48 <= t && t <= 57; }, Bt = function (t) { return Pt(t) && !Vt(t); }, Gt = function (t) { return 32 === t || t >= 9 && t <= 13; }, Kt = function (t) { return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102; }, Ft = function (t, e, r) { switch (z(t, r)) {
                case A:
                    var n = H(t, r);
                    !function (t, e, r) { q(t, 34); for (var n = 0; r--;) {
                        if (34 === e[n] || 92 === e[n] || 10 === e[n])
                            q(t, 92), q(t, e[n]);
                        else if (Mt(e[n])) {
                            var a = "" + e[n];
                            It(e[n + 1]) && (a = "0".repeat(3 - a.length) + a), $(t, Ot("\\" + a));
                        }
                        else
                            q(t, e[n]);
                        n++;
                    } q(t, 34); }(e, n, n.length);
                    break;
                case d:
                    var u;
                    if (E(t, r)) {
                        var i = F(t, r);
                        u = Ot(a(i === l ? "0x%" + o + "x" : s, i));
                    }
                    else {
                        var c = j(t, r);
                        (function (t) { if (bt(t, 46) < 0) {
                            var e = _(), r = bt(t, e);
                            r && (t[r] = 46);
                        } })(u = yt(t, Ot("%".concat(o, "a")), c));
                    }
                    $(e, u);
                    break;
                case L:
                case v:
                    dt(t, r), tt(e);
                    break;
                default: rt(t, r, Ot("value has no literal form"));
            } }, jt = function (t, e, r, n) { for (var a = r; 0 !== e[a] && bt(St, e[a]) >= 0;)
                a++; a - r >= St.length && ct(t, Ot("invalid format (repeated flags)")), It(e[a]) && a++, It(e[a]) && a++, 46 === e[a] && (It(e[++a]) && a++, It(e[a]) && a++), It(e[a]) && ct(t, Ot("invalid format (width or precision too long)")), n[0] = 37; for (var u = 0; u < a - r + 1; u++)
                n[u + 1] = e[r + u]; return a; }, Ht = function (t, e) { for (var r = t.length, n = e.length, a = t[r - 1], u = 0; u < n; u++)
                t[u + r - 1] = e[u]; t[r + n - 1] = a; }, Xt = function t(e) { n(this, t), this.L = e, this.islittle = !0, this.maxalign = 1; }, zt = It, Yt = function (t, e) { if (t.off >= t.s.length || !zt(t.s[t.off]))
                return e; var r = 0; do {
                r = 10 * r + (t.s[t.off++] - 48);
            } while (t.off < t.s.length && zt(t.s[t.off]) && r <= 214748363.8); return r; }, Jt = function (t, e, r) { var n = Yt(e, r); return (n > 16 || n <= 0) && ct(t.L, Ot("integral size (%d) out of limits [1,%d]"), n, 16), n; }, Zt = function (t, e) { var r = { opt: e.s[e.off++], size: 0 }; switch (r.opt) {
                case 98: return r.size = 1, r.opt = 0, r;
                case 66: return r.size = 1, r.opt = 1, r;
                case 104: return r.size = 2, r.opt = 0, r;
                case 72: return r.size = 2, r.opt = 1, r;
                case 108: return r.size = 4, r.opt = 0, r;
                case 76: return r.size = 4, r.opt = 1, r;
                case 106: return r.size = 4, r.opt = 0, r;
                case 74:
                case 84: return r.size = 4, r.opt = 1, r;
                case 102: return r.size = 4, r.opt = 2, r;
                case 100:
                case 110: return r.size = 8, r.opt = 2, r;
                case 105: return r.size = Jt(t, e, 4), r.opt = 0, r;
                case 73: return r.size = Jt(t, e, 4), r.opt = 1, r;
                case 115: return r.size = Jt(t, e, 4), r.opt = 4, r;
                case 99: return r.size = Yt(e, -1), -1 === r.size && ct(t.L, Ot("missing size for format option 'c'")), r.opt = 3, r;
                case 122: return r.opt = 5, r;
                case 120: return r.size = 1, r.opt = 6, r;
                case 88: return r.opt = 7, r;
                case 32: break;
                case 60:
                    t.islittle = !0;
                    break;
                case 62:
                    t.islittle = !1;
                    break;
                case 61:
                    t.islittle = !0;
                    break;
                case 33:
                    t.maxalign = Jt(t, e, 8);
                    break;
                default: ct(t.L, Ot("invalid format option '%c'"), r.opt);
            } return r.opt = 8, r; }, qt = function (t, e, r) { var n = { opt: NaN, size: NaN, ntoalign: NaN }, a = Zt(t, r); n.size = a.size, n.opt = a.opt; var u = n.size; if (7 === n.opt)
                if (r.off >= r.s.length || 0 === r.s[r.off])
                    rt(t.L, 1, Ot("invalid next option for option 'X'"));
                else {
                    var s = Zt(t, r);
                    u = s.size, 3 !== (s = s.opt) && 0 !== u || rt(t.L, 1, Ot("invalid next option for option 'X'"));
                } return u <= 1 || 3 === n.opt ? n.ntoalign = 0 : (u > t.maxalign && (u = t.maxalign), 0 != (u & u - 1) && rt(t.L, 1, Ot("format asks for alignment not power of 2")), n.ntoalign = u - (e & u - 1) & u - 1), n; }, Wt = function (t, e, r, n, a) { var u = vt(t, n); u[r ? 0 : n - 1] = 255 & e; for (var s = 1; s < n; s++)
                e >>= 8, u[r ? s : n - 1 - s] = 255 & e; if (a && n > 4)
                for (var o = 4; o < n; o++)
                    u[r ? o : n - 1 - o] = 255; Q(t, n); }, Qt = function (t, e, r, n, a) { for (var u = 0, s = n <= 4 ? n : 4, o = s - 1; o >= 0; o--)
                u <<= 8, u |= e[r ? o : n - 1 - o]; if (n < 4) {
                if (a) {
                    var l = 1 << 8 * n - 1;
                    u = (u ^ l) - l;
                }
            }
            else if (n > 4)
                for (var i = !a || u >= 0 ? 0 : 255, c = s; c < n; c++)
                    e[r ? c : n - 1 - c] !== i && ct(t, Ot("%d-byte integer does not fit into Lua Integer"), n); return u; }, $t = function (t, e, r, n) { gt.lua_assert(e.length >= n); for (var a = new DataView(new ArrayBuffer(n)), u = 0; u < n; u++)
                a.setUint8(u, e[u], r); return 4 == n ? a.getFloat32(0, r) : a.getFloat64(0, r); }, te = Ot("^$*+?.([%-"), ee = function t(e) { n(this, t), this.src = null, this.src_init = null, this.src_end = null, this.p = null, this.p_end = null, this.L = e, this.matchdepth = NaN, this.level = NaN, this.capture = []; }, re = function (t, e) { switch (t.p[e++]) {
                case Et: return e === t.p_end && ct(t.L, Ot("malformed pattern (ends with '%%')")), e + 1;
                case 91:
                    94 === t.p[e] && e++;
                    do {
                        e === t.p_end && ct(t.L, Ot("malformed pattern (missing ']')")), t.p[e++] === Et && e < t.p_end && e++;
                    } while (93 !== t.p[e]);
                    return e + 1;
                default: return e;
            } }, ne = function (t, e) { switch (e) {
                case 97: return wt(t);
                case 65: return !wt(t);
                case 99: return Mt(t);
                case 67: return !Mt(t);
                case 100: return It(t);
                case 68: return !It(t);
                case 103: return Pt(t);
                case 71: return !Pt(t);
                case 108: return Ct(t);
                case 76: return !Ct(t);
                case 112: return Bt(t);
                case 80: return !Bt(t);
                case 115: return Gt(t);
                case 83: return !Gt(t);
                case 117: return Dt(t);
                case 85: return !Dt(t);
                case 119: return Vt(t);
                case 87: return !Vt(t);
                case 120: return Kt(t);
                case 88: return !Kt(t);
                case 122: return 0 === t;
                case 90: return 0 !== t;
                default: return e === t;
            } }, ae = function (t, e, r, n) { var a = !0; for (94 === t.p[r + 1] && (a = !1, r++); ++r < n;)
                if (t.p[r] === Et) {
                    if (r++, ne(e, t.p[r]))
                        return a;
                }
                else if (45 === t.p[r + 1] && r + 2 < n) {
                    if (r += 2, t.p[r - 2] <= e && e <= t.p[r])
                        return a;
                }
                else if (t.p[r] === e)
                    return a; return !a; }, ue = function (t, e, r, n) { if (e >= t.src_end)
                return !1; var a = t.src[e]; switch (t.p[r]) {
                case 46: return !0;
                case Et: return ne(a, t.p[r + 1]);
                case 91: return ae(t, a, r, n - 1);
                default: return t.p[r] === a;
            } }, se = function (t, e, r) { if (r >= t.p_end - 1 && ct(t.L, Ot("malformed pattern (missing arguments to '%%b'")), t.src[e] !== t.p[r])
                return null; for (var n = t.p[r], a = t.p[r + 1], u = 1; ++e < t.src_end;)
                if (t.src[e] === a) {
                    if (0 == --u)
                        return e + 1;
                }
                else
                    t.src[e] === n && u++; return null; }, oe = function (t, e, r, n) { for (var a = 0; ue(t, e + a, r, n);)
                a++; for (; a >= 0;) {
                var u = _e(t, e + a, n + 1);
                if (u)
                    return u;
                a--;
            } return null; }, le = function (t, e, r, n) { for (;;) {
                var a = _e(t, e, n + 1);
                if (null !== a)
                    return a;
                if (!ue(t, e, r, n))
                    return null;
                e++;
            } }, ie = function (t, e, r, n) { var a, u = t.level; return u >= 32 && ct(t.L, Ot("too many captures")), t.capture[u] = t.capture[u] ? t.capture[u] : {}, t.capture[u].init = e, t.capture[u].len = n, t.level = u + 1, null === (a = _e(t, e, r)) && t.level--, a; }, ce = function (t, e, r) { var n, a = function (t) { var e = t.level; for (e--; e >= 0; e--)
                if (-1 === t.capture[e].len)
                    return e; return ct(t.L, Ot("invalid pattern capture")); }(t); return t.capture[a].len = e - t.capture[a].init, null === (n = _e(t, e, r)) && (t.capture[a].len = -1), n; }, fe = function (t, e, r) { r = function (t, e) { return (e -= 49) < 0 || e >= t.level || -1 === t.capture[e].len ? ct(t.L, Ot("invalid capture index %%%d"), e + 1) : e; }(t, r); var n = t.capture[r].len; return t.src_end - e >= n && function (t, e, r, n, a) { return xt(t.subarray(e, e + a), r.subarray(n, n + a)); }(t.src, t.capture[r].init, t.src, e, n) ? e + n : null; }, _e = function t(e, r, n) { var a = !1, u = !0; for (0 == e.matchdepth-- && ct(e.L, Ot("pattern too complex")); u || a;)
                if (u = !1, n !== e.p_end)
                    switch (a ? void 0 : e.p[n]) {
                        case 40:
                            r = 41 === e.p[n + 1] ? ie(e, r, n + 2, -2) : ie(e, r, n + 1, -1);
                            break;
                        case 41:
                            r = ce(e, r, n + 1);
                            break;
                        case 36:
                            if (n + 1 !== e.p_end) {
                                a = !0;
                                break;
                            }
                            r = e.src.length - r == 0 ? r : null;
                            break;
                        case Et:
                            switch (e.p[n + 1]) {
                                case 98:
                                    null !== (r = se(e, r, n + 2)) && (n += 4, u = !0);
                                    break;
                                case 102:
                                    n += 2, 91 !== e.p[n] && ct(e.L, Ot("missing '[' after '%%f' in pattern"));
                                    var s = re(e, n), o = r === e.src_init ? 0 : e.src[r - 1];
                                    if (!ae(e, o, n, s - 1) && ae(e, r === e.src_end ? 0 : e.src[r], n, s - 1)) {
                                        n = s, u = !0;
                                        break;
                                    }
                                    r = null;
                                    break;
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    null !== (r = fe(e, r, e.p[n + 1])) && (n += 2, u = !0);
                                    break;
                                default: a = !0;
                            }
                            break;
                        default:
                            a = !1;
                            var l = re(e, n);
                            if (ue(e, r, n, l))
                                switch (e.p[l]) {
                                    case 63:
                                        var i;
                                        null !== (i = t(e, r + 1, l + 1)) ? r = i : (n = l + 1, u = !0);
                                        break;
                                    case 43: r++;
                                    case 42:
                                        r = oe(e, r, n, l);
                                        break;
                                    case 45:
                                        r = le(e, r, n, l);
                                        break;
                                    default: r++, n = l, u = !0;
                                }
                            else {
                                if (42 === e.p[l] || 63 === e.p[l] || 45 === e.p[l]) {
                                    n = l + 1, u = !0;
                                    break;
                                }
                                r = null;
                            }
                    } return e.matchdepth++, r; }, pe = function (t, e, r, n) { if (e >= t.level)
                0 === e ? w(t.L, t.src.subarray(r, n), n - r) : ct(t.L, Ot("invalid capture index %%%d"), e + 1);
            else {
                var a = t.capture[e].len;
                -1 === a && ct(t.L, Ot("unfinished capture")), -2 === a ? R(t.L, t.capture[e].init - t.src_init + 1) : w(t.L, t.src.subarray(t.capture[e].init), a);
            } }, ve = function (t, e, r) { var n = 0 === t.level && t.src.subarray(e) ? 1 : t.level; ot(t.L, n, "too many captures"); for (var a = 0; a < n; a++)
                pe(t, a, e, r); return n; }, he = function (t, e, r, n, a, u) { t.L = e, t.matchdepth = 200, t.src = r, t.src_init = 0, t.src_end = n, t.p = a, t.p_end = u; }, Le = function (t) { t.level = 0, gt.lua_assert(200 === t.matchdepth); }, de = function (t, e) { var r = lt(t, 1), n = lt(t, 2), a = r.length, u = n.length, s = Ut(_t(t, 3, 1), a); if (s < 1)
                s = 1;
            else if (s > a + 1)
                return I(t), 1; if (e && (K(t, 4) || function (t, e) { for (var r = 0; r < e; r++)
                if (-1 !== bt(te, t[r]))
                    return !1; return !0; }(n, u))) {
                var o = function (t, e, r) { var n = r >>> 0, a = e.length; if (0 === a)
                    return n; for (; -1 !== (n = t.indexOf(e[0], n)); n++)
                    if (xt(t.subarray(n, n + a), e))
                        return n; return -1; }(r.subarray(s - 1), n, 0);
                if (o > -1)
                    return R(t, s + o), R(t, s + o + u - 1), 2;
            }
            else {
                var l = new ee(t), i = s - 1, c = 94 === n[0];
                c && (n = n.subarray(1), u--), he(l, t, r, a, n, u);
                do {
                    var f;
                    if (Le(l), null !== (f = _e(l, i, 0)))
                        return e ? (R(t, i + 1), R(t, f), ve(l, null, 0) + 2) : ve(l, i, f);
                } while (i++ < l.src_end && !c);
            } return I(t), 1; }, Ae = function (t) { var e = X(t, Y(3)); e.ms.L = t; for (var r = e.src; r <= e.ms.src_end; r++) {
                Le(e.ms);
                var n;
                if (null !== (n = _e(e.ms, r, e.p)) && n !== e.lastmatch)
                    return e.src = e.lastmatch = n, ve(e.ms, r, n);
            } return 0; }, ge = function (t, e, r, n, a) { var u = t.L; switch (a) {
                case h:
                    C(u, 3);
                    var s = ve(t, r, n);
                    T(u, s, 1);
                    break;
                case g:
                    pe(t, 0, r, n), k(u, 3);
                    break;
                default: return void function (t, e, r, n) { for (var a = t.L, u = H(a, 3), s = u.length, o = 0; o < s; o++)
                    u[o] !== Et ? q(e, u[o]) : It(u[++o]) ? 48 === u[o] ? W(e, t.src.subarray(r, n), n - r) : (pe(t, u[o] - 49, r, n), dt(a, -1), D(a, -2), tt(e)) : (u[o] !== Et && ct(a, Ot("invalid use of '%c' in replacement string"), Et), q(e, u[o])); }(t, e, r, n);
            } K(u, -1) ? m(u, -1) || ct(u, Ot("invalid replacement value (a %s)"), At(u, -1)) : (U(u, 1), w(u, t.src.subarray(r, n), n - r)), tt(e); }, Te = { byte: function (t) { var e = lt(t, 1), r = e.length, n = Ut(_t(t, 2, 1), r), a = Ut(_t(t, 3, n), r); if (n < 1 && (n = 1), a > r && (a = r), n > a)
                    return 0; if (a - n >= Number.MAX_SAFE_INTEGER)
                    return ct(t, "string slice too long"); var u = a - n + 1; ot(t, u, "string slice too long"); for (var s = 0; s < u; s++)
                    R(t, e[n + s - 1]); return u; }, char: function (t) { for (var e = O(t), r = new Z, n = at(t, r, e), a = 1; a <= e; a++) {
                    var u = ut(t, a);
                    et(t, u >= 0 && u <= 255, "value out of range"), n[a - 1] = u;
                } return Lt(r, e), 1; }, dump: function (t) { var e = new Z, r = K(t, 2); return it(t, 1, h), G(t, 1), nt(t, e), 0 !== b(t, Nt, e, r) ? ct(t, Ot("unable to dump given function")) : (ht(e), 1); }, find: function (t) { return de(t, 1); }, format: function (t) { var e = O(t), r = 1, n = lt(t, r), u = 0, s = new Z; for (nt(t, s); u < n.length;)
                    if (n[u] !== Et)
                        q(s, n[u++]);
                    else if (n[++u] === Et)
                        q(s, n[u++]);
                    else {
                        var l = [];
                        switch ((++r > e && rt(t, r, Ot("no value")), u = jt(t, n, u, l), String.fromCharCode(n[u++]))) {
                            case "c":
                                q(s, ut(t, r));
                                break;
                            case "d":
                            case "i":
                            case "o":
                            case "u":
                            case "x":
                            case "X":
                                var i = ut(t, r);
                                Ht(l, Ot(o, !0)), $(s, Ot(a(String.fromCharCode.apply(String, l), i)));
                                break;
                            case "a":
                            case "A":
                                Ht(l, Ot(o, !0)), $(s, yt(t, l, st(t, r)));
                                break;
                            case "e":
                            case "E":
                            case "f":
                            case "g":
                            case "G":
                                var c = st(t, r);
                                Ht(l, Ot(o, !0)), $(s, Ot(a(String.fromCharCode.apply(String, l), c)));
                                break;
                            case "q":
                                Ft(t, s, r);
                                break;
                            case "s":
                                var f = dt(t, r);
                                l.length <= 2 || 0 === l[2] ? tt(s) : (et(t, f.length === mt(f), r, "string contains zeros"), bt(l, 46) < 0 && f.length >= 100 ? tt(s) : ($(s, Ot(a(String.fromCharCode.apply(String, l), kt(f)))), U(t, 1)));
                                break;
                            default: return ct(t, Ot("invalid option '%%%c' to 'format'"), n[u - 1]);
                        }
                    } return ht(s), 1; }, gmatch: function (t) { var e = lt(t, 1), r = lt(t, 2), a = e.length, u = r.length; G(t, 2); var s = new function t() { n(this, t), this.src = NaN, this.p = NaN, this.lastmatch = NaN, this.ms = new ee; }; return y(t, s), he(s.ms, t, e, a, r, u), s.src = 0, s.p = 0, s.lastmatch = null, N(t, Ae, 3), 1; }, gsub: function (t) { var e = lt(t, 1), r = e.length, n = lt(t, 2), a = n.length, u = null, s = z(t, 3), o = _t(t, 4, r + 1), l = 94 === n[0], i = 0, c = new ee(t), f = new Z; for (et(t, s === d || s === A || s === h || s === g, 3, "string/function/table expected"), nt(t, f), l && (n = n.subarray(1), a--), he(c, t, e, r, n, a), e = 0, n = 0; i < o;) {
                    var _;
                    if (Le(c), null !== (_ = _e(c, e, n)) && _ !== u)
                        i++, ge(c, f, e, _, s), e = u = _;
                    else {
                        if (!(e < c.src_end))
                            break;
                        q(f, c.src[e++]);
                    }
                    if (l)
                        break;
                } return W(f, c.src.subarray(e, c.src_end), c.src_end - e), ht(f), R(t, i), 2; }, len: function (t) { return R(t, lt(t, 1).length), 1; }, lower: function (t) { for (var e = lt(t, 1), r = e.length, n = new Uint8Array(r), a = 0; a < r; a++) {
                    var u = e[a];
                    Dt(u) && (u |= 32), n[a] = u;
                } return P(t, n), 1; }, match: function (t) { return de(t, 0); }, pack: function (t) { var e = new Z, r = new Xt(t), n = { s: lt(t, 1), off: 0 }, a = 1, u = 0; for (I(t), nt(t, e); n.off < n.s.length;) {
                    var s = qt(r, u, n), o = s.opt, l = s.size, i = s.ntoalign;
                    for (u += i + l; i-- > 0;)
                        q(e, 0);
                    switch ((a++, o)) {
                        case 0:
                            var c = ut(t, a);
                            if (l < 4) {
                                var f = 1 << 8 * l - 1;
                                et(t, -f <= c && c < f, a, "integer overflow");
                            }
                            Wt(e, c, r.islittle, l, c < 0);
                            break;
                        case 1:
                            var _ = ut(t, a);
                            l < 4 && et(t, _ >>> 0 < 1 << 8 * l, a, "unsigned overflow"), Wt(e, _ >>> 0, r.islittle, l, !1);
                            break;
                        case 2:
                            var p = vt(e, l), v = st(t, a), h = new DataView(p.buffer, p.byteOffset, p.byteLength);
                            4 === l ? h.setFloat32(0, v, r.islittle) : h.setFloat64(0, v, r.islittle), Q(e, l);
                            break;
                        case 3:
                            var L = lt(t, a), d = L.length;
                            for (et(t, d <= l, a, "string longer than given size"), W(e, L, d); d++ < l;)
                                q(e, 0);
                            break;
                        case 4:
                            var A = lt(t, a), g = A.length;
                            et(t, l >= 4 || g < 1 << 8 * l, a, "string length does not fit in given size"), Wt(e, g, r.islittle, l, 0), W(e, A, g), u += g;
                            break;
                        case 5:
                            var T = lt(t, a), x = T.length;
                            et(t, bt(T, 0) < 0, a, "strings contains zeros"), W(e, T, x), q(e, 0), u += x + 1;
                            break;
                        case 6: q(e, 0);
                        case 7:
                        case 8: a--;
                    }
                } return ht(e), 1; }, packsize: function (t) { for (var e = new Xt(t), r = { s: lt(t, 1), off: 0 }, n = 0; r.off < r.s.length;) {
                    var a = qt(e, n, r), u = a.opt, s = a.size, o = a.ntoalign;
                    switch (et(t, n <= 2147483647 - (s += o), 1, "format result too large"), n += s, u) {
                        case 4:
                        case 5: rt(t, 1, "variable-length format");
                    }
                } return R(t, n), 1; }, rep: function (t) { var e = lt(t, 1), r = e.length, n = ut(t, 2), a = pt(t, 3, ""), u = a.length; if (n <= 0)
                    S(t, "");
                else {
                    if (r + u < r || r + u > 2147483647 / n)
                        return ct(t, Ot("resulting string too large"));
                    for (var s = n * r + (n - 1) * u, o = new Z, l = at(t, o, s), i = 0; n-- > 1;)
                        l.set(e, i), i += r, u > 0 && (l.set(a, i), i += u);
                    l.set(e, i), Lt(o, s);
                } return 1; }, reverse: function (t) { for (var e = lt(t, 1), r = e.length, n = new Uint8Array(r), a = 0; a < r; a++)
                    n[a] = e[r - 1 - a]; return P(t, n), 1; }, sub: function (t) { var e = lt(t, 1), r = e.length, n = Ut(ut(t, 2), r), a = Ut(_t(t, 3, -1), r); return n < 1 && (n = 1), a > r && (a = r), n <= a ? P(t, e.subarray(n - 1, n - 1 + (a - n + 1))) : S(t, ""), 1; }, unpack: function (t) { var e = new Xt(t), r = { s: lt(t, 1), off: 0 }, n = lt(t, 2), a = n.length, u = Ut(_t(t, 3, 1), a) - 1, s = 0; for (et(t, u <= a && u >= 0, 3, "initial position out of string"); r.off < r.s.length;) {
                    var o = qt(e, u, r), l = o.opt, i = o.size, c = o.ntoalign;
                    switch ((u + c + i > a && rt(t, 2, Ot("data string too short")), u += c, ot(t, 2, "too many results"), s++, l)) {
                        case 0:
                        case 1:
                            var f = Qt(t, n.subarray(u), e.islittle, i, 0 === l);
                            R(t, f);
                            break;
                        case 2:
                            var _ = $t(0, n.subarray(u), e.islittle, i);
                            M(t, _);
                            break;
                        case 3:
                            P(t, n.subarray(u, u + i));
                            break;
                        case 4:
                            var p = Qt(t, n.subarray(u), e.islittle, i, 0);
                            et(t, u + p + i <= a, 2, "data string too short"), P(t, n.subarray(u + i, u + i + p)), u += p;
                            break;
                        case 5:
                            var v = bt(n, 0, u);
                            -1 === v && (v = n.length - u), P(t, n.subarray(u, v)), u = v + 1;
                            break;
                        case 7:
                        case 6:
                        case 8: s--;
                    }
                    u += i;
                } return R(t, u + 1), s + 1; }, upper: function (t) { for (var e = lt(t, 1), r = e.length, n = new Uint8Array(r), a = 0; a < r; a++) {
                    var u = e[a];
                    Ct(u) && (u &= 223), n[a] = u;
                } return P(t, n), 1; } };
            t.exports.luaopen_string = function (t) { return ft(t, Te), function (t) { x(t, 0, 1), S(t, ""), C(t, -2), B(t, -2), U(t, 1), C(t, -2), V(t, -2, Ot("__index", !0)), U(t, 1); }(t), 1; };
        }, function (t, e, r) {
            "use strict";
            var n = r(2), a = n.lua_gettop, u = n.lua_pushcfunction, s = n.lua_pushfstring, o = n.lua_pushinteger, l = n.lua_pushnil, i = n.lua_pushstring, c = n.lua_pushvalue, f = n.lua_setfield, _ = n.lua_tointeger, p = r(7), v = p.luaL_Buffer, h = p.luaL_addvalue, L = p.luaL_argcheck, d = p.luaL_buffinit, A = p.luaL_checkinteger, g = p.luaL_checkstack, T = p.luaL_checkstring, x = p.luaL_error, b = p.luaL_newlib, k = p.luaL_optinteger, O = p.luaL_pushresult, E = r(5), m = E.luastring_of, U = E.to_luastring, N = function (t) { return 128 === (192 & t); }, R = function (t, e) { return t >= 0 ? t : 0 - t > e ? 0 : e + t + 1; }, y = [255, 127, 2047, 65535], S = function (t, e) { var r = t[e], n = 0; if (r < 128)
                n = r;
            else {
                for (var a = 0; 64 & r;) {
                    var u = t[e + ++a];
                    if (128 != (192 & u))
                        return null;
                    n = n << 6 | 63 & u, r <<= 1;
                }
                if (n |= (127 & r) << 5 * a, a > 3 || n > 1114111 || n <= y[a])
                    return null;
                e += a;
            } return { code: n, pos: e + 1 }; }, w = U("%U"), I = function (t, e) { var r = A(t, e); L(t, 0 <= r && r <= 1114111, e, "value out of range"), s(t, w, r); }, M = function (t) { var e = T(t, 1), r = e.length, n = _(t, 2) - 1; if (n < 0)
                n = 0;
            else if (n < r)
                for (n++; N(e[n]);)
                    n++; if (n >= r)
                return 0; var a = S(e, n); return null === a || N(e[a.pos]) ? x(t, U("invalid UTF-8 code")) : (o(t, n + 1), o(t, a.code), 2); }, P = { char: function (t) { var e = a(t); if (1 === e)
                    I(t, 1);
                else {
                    var r = new v;
                    d(t, r);
                    for (var n = 1; n <= e; n++)
                        I(t, n), h(r);
                    O(r);
                } return 1; }, codepoint: function (t) { var e = T(t, 1), r = R(k(t, 2, 1), e.length), n = R(k(t, 3, r), e.length); if (L(t, r >= 1, 2, "out of range"), L(t, n <= e.length, 3, "out of range"), r > n)
                    return 0; if (n - r >= Number.MAX_SAFE_INTEGER)
                    return x(t, "string slice too long"); var a = n - r + 1; for (g(t, a, "string slice too long"), a = 0, r -= 1; r < n;) {
                    var u = S(e, r);
                    if (null === u)
                        return x(t, "invalid UTF-8 code");
                    o(t, u.code), r = u.pos, a++;
                } return a; }, codes: function (t) { return T(t, 1), u(t, M), c(t, 1), o(t, 0), 3; }, len: function (t) { var e = 0, r = T(t, 1), n = r.length, a = R(k(t, 2, 1), n), u = R(k(t, 3, -1), n); for (L(t, 1 <= a && --a <= n, 2, "initial position out of string"), L(t, --u < n, 3, "final position out of string"); a <= u;) {
                    var s = S(r, a);
                    if (null === s)
                        return l(t), o(t, a + 1), 2;
                    a = s.pos, e++;
                } return o(t, e), 1; }, offset: function (t) { var e = T(t, 1), r = A(t, 2), n = r >= 0 ? 1 : e.length + 1; if (n = R(k(t, 3, n), e.length), L(t, 1 <= n && --n <= e.length, 3, "position out of range"), 0 === r)
                    for (; n > 0 && N(e[n]);)
                        n--;
                else if (N(e[n]) && x(t, "initial position is a continuation byte"), r < 0)
                    for (; r < 0 && n > 0;) {
                        do {
                            n--;
                        } while (n > 0 && N(e[n]));
                        r++;
                    }
                else
                    for (r--; r > 0 && n < e.length;) {
                        do {
                            n++;
                        } while (N(e[n]));
                        r--;
                    } return 0 === r ? o(t, n + 1) : l(t), 1; } }, C = m(91, 0, 45, 127, 194, 45, 244, 93, 91, 128, 45, 191, 93, 42);
            t.exports.luaopen_utf8 = function (t) { return b(t, P), i(t, C), f(t, -2, U("charpattern", !0)), 1; };
        }, function (t, e, r) {
            "use strict";
            var n, a = r(2), u = a.LUA_OPLT, s = a.LUA_TNUMBER, o = a.lua_compare, l = a.lua_gettop, i = a.lua_isinteger, c = a.lua_isnoneornil, f = a.lua_pushboolean, _ = a.lua_pushinteger, p = a.lua_pushliteral, v = a.lua_pushnil, h = a.lua_pushnumber, L = a.lua_pushvalue, d = a.lua_setfield, A = a.lua_settop, g = a.lua_tointeger, T = a.lua_tointegerx, x = a.lua_type, b = r(7), k = b.luaL_argcheck, O = b.luaL_argerror, E = b.luaL_checkany, m = b.luaL_checkinteger, U = b.luaL_checknumber, N = b.luaL_error, R = b.luaL_newlib, y = b.luaL_optnumber, S = r(3), w = S.LUA_MAXINTEGER, I = S.LUA_MININTEGER, M = S.lua_numbertointeger, P = r(5).to_luastring, C = function () { return n = 1103515245 * n + 12345 & 2147483647; }, D = function (t, e) { var r = M(e); !1 !== r ? _(t, r) : h(t, e); }, V = { abs: function (t) { if (i(t, 1)) {
                    var e = g(t, 1);
                    e < 0 && (e = 0 | -e), _(t, e);
                }
                else
                    h(t, Math.abs(U(t, 1))); return 1; }, acos: function (t) { return h(t, Math.acos(U(t, 1))), 1; }, asin: function (t) { return h(t, Math.asin(U(t, 1))), 1; }, atan: function (t) { var e = U(t, 1), r = y(t, 2, 1); return h(t, Math.atan2(e, r)), 1; }, ceil: function (t) { return i(t, 1) ? A(t, 1) : D(t, Math.ceil(U(t, 1))), 1; }, cos: function (t) { return h(t, Math.cos(U(t, 1))), 1; }, deg: function (t) { return h(t, U(t, 1) * (180 / Math.PI)), 1; }, exp: function (t) { return h(t, Math.exp(U(t, 1))), 1; }, floor: function (t) { return i(t, 1) ? A(t, 1) : D(t, Math.floor(U(t, 1))), 1; }, fmod: function (t) { if (i(t, 1) && i(t, 2)) {
                    var e = g(t, 2);
                    0 === e ? O(t, 2, "zero") : _(t, g(t, 1) % e | 0);
                }
                else {
                    var r = U(t, 1), n = U(t, 2);
                    h(t, r % n);
                } return 1; }, log: function (t) { var e, r = U(t, 1); if (c(t, 2))
                    e = Math.log(r);
                else {
                    var n = U(t, 2);
                    e = 2 === n ? Math.log2(r) : 10 === n ? Math.log10(r) : Math.log(r) / Math.log(n);
                } return h(t, e), 1; }, max: function (t) { var e = l(t), r = 1; k(t, e >= 1, 1, "value expected"); for (var n = 2; n <= e; n++)
                    o(t, r, n, u) && (r = n); return L(t, r), 1; }, min: function (t) { var e = l(t), r = 1; k(t, e >= 1, 1, "value expected"); for (var n = 2; n <= e; n++)
                    o(t, n, r, u) && (r = n); return L(t, r), 1; }, modf: function (t) { if (i(t, 1))
                    A(t, 1), h(t, 0);
                else {
                    var e = U(t, 1), r = e < 0 ? Math.ceil(e) : Math.floor(e);
                    D(t, r), h(t, e === r ? 0 : e - r);
                } return 2; }, rad: function (t) { return h(t, U(t, 1) * (Math.PI / 180)), 1; }, random: function (t) { var e, r, a = void 0 === n ? Math.random() : C() / 2147483648; switch (l(t)) {
                    case 0: return h(t, a), 1;
                    case 1:
                        e = 1, r = m(t, 1);
                        break;
                    case 2:
                        e = m(t, 1), r = m(t, 2);
                        break;
                    default: return N(t, "wrong number of arguments");
                } return k(t, e <= r, 1, "interval is empty"), k(t, e >= 0 || r <= w + e, 1, "interval too large"), a *= r - e + 1, _(t, Math.floor(a) + e), 1; }, randomseed: function (t) { return function (t) { 0 == (n = 0 | t) && (n = 1); }(U(t, 1)), C(), 0; }, sin: function (t) { return h(t, Math.sin(U(t, 1))), 1; }, sqrt: function (t) { return h(t, Math.sqrt(U(t, 1))), 1; }, tan: function (t) { return h(t, Math.tan(U(t, 1))), 1; }, tointeger: function (t) { var e = T(t, 1); return !1 !== e ? _(t, e) : (E(t, 1), v(t)), 1; }, type: function (t) { return x(t, 1) === s ? i(t, 1) ? p(t, "integer") : p(t, "float") : (E(t, 1), v(t)), 1; }, ult: function (t) { var e = m(t, 1), r = m(t, 2); return f(t, e >= 0 ? r < 0 || e < r : r < 0 && e < r), 1; } };
            t.exports.luaopen_math = function (t) { return R(t, V), h(t, Math.PI), d(t, -2, P("pi", !0)), h(t, 1 / 0), d(t, -2, P("huge", !0)), _(t, w), d(t, -2, P("maxinteger", !0)), _(t, I), d(t, -2, P("mininteger", !0)), 1; };
        }, function (t, e, r) {
            "use strict";
            var n, a = r(2), u = a.LUA_MASKCALL, s = a.LUA_MASKCOUNT, o = a.LUA_MASKLINE, l = a.LUA_MASKRET, i = a.LUA_REGISTRYINDEX, c = a.LUA_TFUNCTION, f = a.LUA_TNIL, _ = a.LUA_TTABLE, p = a.LUA_TUSERDATA, v = a.lua_Debug, h = a.lua_call, L = a.lua_checkstack, d = a.lua_gethook, A = a.lua_gethookcount, g = a.lua_gethookmask, T = a.lua_getinfo, x = a.lua_getlocal, b = a.lua_getmetatable, k = a.lua_getstack, O = a.lua_getupvalue, E = a.lua_getuservalue, m = a.lua_insert, U = a.lua_iscfunction, N = a.lua_isfunction, R = a.lua_isnoneornil, y = a.lua_isthread, S = a.lua_newtable, w = a.lua_pcall, I = a.lua_pop, M = a.lua_pushboolean, P = a.lua_pushfstring, C = a.lua_pushinteger, D = a.lua_pushlightuserdata, V = a.lua_pushliteral, B = a.lua_pushnil, G = a.lua_pushstring, K = a.lua_pushvalue, F = a.lua_rawgetp, j = a.lua_rawsetp, H = a.lua_rotate, X = a.lua_setfield, z = a.lua_sethook, Y = a.lua_setlocal, J = a.lua_setmetatable, Z = a.lua_settop, q = a.lua_setupvalue, W = a.lua_setuservalue, Q = a.lua_tojsstring, $ = a.lua_toproxy, tt = a.lua_tostring, et = a.lua_tothread, rt = a.lua_touserdata, nt = a.lua_type, at = a.lua_upvalueid, ut = a.lua_upvaluejoin, st = a.lua_xmove, ot = r(7), lt = ot.luaL_argcheck, it = ot.luaL_argerror, ct = ot.luaL_checkany, ft = ot.luaL_checkinteger, _t = ot.luaL_checkstring, pt = ot.luaL_checktype, vt = ot.luaL_error, ht = ot.luaL_loadbuffer, Lt = ot.luaL_newlib, dt = ot.luaL_optinteger, At = ot.luaL_optstring, gt = ot.luaL_traceback, Tt = ot.lua_writestringerror, xt = r(17), bt = r(5), kt = bt.luastring_indexOf, Ot = bt.to_luastring, Et = function (t, e, r) { t === e || L(e, r) || vt(t, Ot("stack overflow", !0)); }, mt = function (t) { return y(t, 1) ? { arg: 1, thread: et(t, 1) } : { arg: 0, thread: t }; }, Ut = function (t, e, r) { G(t, r), X(t, -2, e); }, Nt = function (t, e, r) { C(t, r), X(t, -2, e); }, Rt = function (t, e, r) { M(t, r), X(t, -2, e); }, yt = function (t, e, r) { t == e ? H(t, -2, 1) : st(e, t, 1), X(t, -2, r); }, St = function (t, e) { var r = ft(t, 2); pt(t, 1, c); var n = e ? O(t, 1, r) : q(t, 1, r); return null === n ? 0 : (G(t, n), m(t, -(e + 1)), e + 1); }, wt = function (t, e, r) { var n = ft(t, r); return pt(t, e, c), lt(t, null !== O(t, e, n), r, "invalid upvalue index"), n; }, It = Ot("__hooks__", !0), Mt = ["call", "return", "line", "count", "tail call"].map(function (t) { return Ot(t); }), Pt = function (t, e) { F(t, i, It); var r = rt(t, -1).get(t); r && (r(t), G(t, Mt[e.event]), e.currentline >= 0 ? C(t, e.currentline) : B(t), xt.lua_assert(T(t, Ot("lS"), e)), h(t, 2, 0)); }, Ct = { gethook: function (t) { var e = mt(t).thread, r = new Uint8Array(5), n = g(e), a = d(e); null === a ? B(t) : a !== Pt ? V(t, "external hook") : (F(t, i, It), rt(t, -1).get(e)(t)); return G(t, function (t, e) { var r = 0; return t & u && (e[r++] = 99), t & l && (e[r++] = 114), t & o && (e[r++] = 108), e.subarray(0, r); }(n, r)), C(t, A(e)), 3; }, getinfo: function (t) { var e = new v, r = mt(t), n = r.arg, a = r.thread, u = At(t, n + 2, "flnStu"); if (Et(t, a, 3), N(t, n + 1))
                    u = P(t, Ot(">%s"), u), K(t, n + 1), st(t, a, 1);
                else if (!k(a, ft(t, n + 1), e))
                    return B(t), 1; return T(a, u, e) || it(t, n + 2, "invalid option"), S(t), kt(u, 83) > -1 && (Ut(t, Ot("source", !0), e.source), Ut(t, Ot("short_src", !0), e.short_src), Nt(t, Ot("linedefined", !0), e.linedefined), Nt(t, Ot("lastlinedefined", !0), e.lastlinedefined), Ut(t, Ot("what", !0), e.what)), kt(u, 108) > -1 && Nt(t, Ot("currentline", !0), e.currentline), kt(u, 117) > -1 && (Nt(t, Ot("nups", !0), e.nups), Nt(t, Ot("nparams", !0), e.nparams), Rt(t, Ot("isvararg", !0), e.isvararg)), kt(u, 110) > -1 && (Ut(t, Ot("name", !0), e.name), Ut(t, Ot("namewhat", !0), e.namewhat)), kt(u, 116) > -1 && Rt(t, Ot("istailcall", !0), e.istailcall), kt(u, 76) > -1 && yt(t, a, Ot("activelines", !0)), kt(u, 102) > -1 && yt(t, a, Ot("func", !0)), 1; }, getlocal: function (t) { var e = mt(t), r = e.thread, n = e.arg, a = new v, u = ft(t, n + 2); if (N(t, n + 1))
                    return K(t, n + 1), G(t, x(t, null, u)), 1; var s = ft(t, n + 1); if (!k(r, s, a))
                    return it(t, n + 1, "level out of range"); Et(t, r, 1); var o = x(r, a, u); return o ? (st(r, t, 1), G(t, o), H(t, -2, 1), 2) : (B(t), 1); }, getmetatable: function (t) { return ct(t, 1), b(t, 1) || B(t), 1; }, getregistry: function (t) { return K(t, i), 1; }, getupvalue: function (t) { return St(t, 1); }, getuservalue: function (t) { return nt(t, 1) !== p ? B(t) : E(t, 1), 1; }, sethook: function (t) { var e, r, n, a, _ = mt(t), p = _.thread, v = _.arg; if (R(t, v + 1))
                    Z(t, v + 1), n = null, e = 0, r = 0;
                else {
                    var h = _t(t, v + 2);
                    pt(t, v + 1, c), r = dt(t, v + 3, 0), n = Pt, e = function (t, e) { var r = 0; return kt(t, 99) > -1 && (r |= u), kt(t, 114) > -1 && (r |= l), kt(t, 108) > -1 && (r |= o), e > 0 && (r |= s), r; }(h, r);
                } F(t, i, It) === f ? (a = new WeakMap, D(t, a), j(t, i, It)) : a = rt(t, -1); var L = $(t, v + 1); return a.set(p, L), z(p, n, e, r), 0; }, setlocal: function (t) { var e = mt(t), r = e.thread, n = e.arg, a = new v, u = ft(t, n + 1), s = ft(t, n + 2); if (!k(r, u, a))
                    return it(t, n + 1, "level out of range"); ct(t, n + 3), Z(t, n + 3), Et(t, r, 1), st(t, r, 1); var o = Y(r, a, s); return null === o && I(r, 1), G(t, o), 1; }, setmetatable: function (t) { var e = nt(t, 2); return lt(t, e == f || e == _, 2, "nil or table expected"), Z(t, 2), J(t, 1), 1; }, setupvalue: function (t) { return ct(t, 3), St(t, 0); }, setuservalue: function (t) { return pt(t, 1, p), ct(t, 2), Z(t, 2), W(t, 1), 1; }, traceback: function (t) { var e = mt(t), r = e.thread, n = e.arg, a = tt(t, n + 1); if (null !== a || R(t, n + 1)) {
                    var u = dt(t, n + 2, t === r ? 1 : 0);
                    gt(t, r, a, u);
                }
                else
                    K(t, n + 1); return 1; }, upvalueid: function (t) { var e = wt(t, 1, 2); return D(t, at(t, 1, e)), 1; }, upvaluejoin: function (t) { var e = wt(t, 1, 2), r = wt(t, 3, 4); return lt(t, !U(t, 1), 1, "Lua function expected"), lt(t, !U(t, 3), 3, "Lua function expected"), ut(t, 1, e, 3, r), 0; } };
            "undefined" != typeof window && (n = function () { var t = prompt("lua_debug>", ""); return null !== t ? t : ""; }), n && (Ct.debug = function (t) { for (;;) {
                var e = n();
                if ("cont" === e)
                    return 0;
                if (0 !== e.length) {
                    var r = Ot(e);
                    (ht(t, r, r.length, Ot("=(debug command)", !0)) || w(t, 0, 0, 0)) && Tt(Q(t, -1), "\n"), Z(t, 0);
                }
            } });
            t.exports.luaopen_debug = function (t) { return Lt(t, Ct), 1; };
        }, function (t, e, r) {
            "use strict";
            function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; })(t); }
            var a, u = r(3), s = u.LUA_DIRSEP, o = u.LUA_EXEC_DIR, l = u.LUA_JSPATH_DEFAULT, i = u.LUA_PATH_DEFAULT, c = u.LUA_PATH_MARK, f = u.LUA_PATH_SEP, _ = r(2), p = _.LUA_OK, v = _.LUA_REGISTRYINDEX, h = _.LUA_TNIL, L = _.LUA_TTABLE, d = _.lua_callk, A = _.lua_createtable, g = _.lua_getfield, T = _.lua_insert, x = _.lua_isfunction, b = _.lua_isnil, k = _.lua_isstring, O = _.lua_newtable, E = _.lua_pop, m = _.lua_pushboolean, U = _.lua_pushcclosure, N = _.lua_pushcfunction, R = _.lua_pushfstring, y = _.lua_pushglobaltable, S = _.lua_pushlightuserdata, w = _.lua_pushliteral, I = _.lua_pushlstring, M = _.lua_pushnil, P = _.lua_pushstring, C = _.lua_pushvalue, D = _.lua_rawgeti, V = _.lua_rawgetp, B = _.lua_rawseti, G = _.lua_rawsetp, K = _.lua_remove, F = _.lua_setfield, j = _.lua_setmetatable, H = _.lua_settop, X = _.lua_toboolean, z = _.lua_tostring, Y = _.lua_touserdata, J = _.lua_upvalueindex, Z = r(7), q = Z.LUA_LOADED_TABLE, W = Z.LUA_PRELOAD_TABLE, Q = Z.luaL_Buffer, $ = Z.luaL_addvalue, tt = Z.luaL_buffinit, et = Z.luaL_checkstring, rt = Z.luaL_error, nt = Z.luaL_getsubtable, at = Z.luaL_gsub, ut = Z.luaL_len, st = Z.luaL_loadfile, ot = Z.luaL_newlib, lt = Z.luaL_optstring, it = Z.luaL_pushresult, ct = Z.luaL_setfuncs, ft = r(17), _t = r(5), pt = _t.luastring_indexOf, vt = _t.to_jsstring, ht = _t.to_luastring, Lt = _t.to_uristring, dt = r(0), At = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : (0, eval)("this"), gt = ht("__JSLIBS__"), Tt = s, xt = s, bt = ht("luaopen_"), kt = ht("_"), Ot = ht("");
            a = function (t, e, r) { e = Lt(e); var a = new XMLHttpRequest; if (a.open("GET", e, !1), a.send(), a.status < 200 || a.status >= 300)
                return P(t, ht("".concat(a.status, ": ").concat(a.statusText))), null; var u, s = a.response; /\/\/[#@] sourceURL=/.test(s) || (s += " //# sourceURL=" + e); try {
                u = Function("fengari", s);
            }
            catch (e) {
                return P(t, ht("".concat(e.name, ": ").concat(e.message))), null;
            } var o = u(dt); return "function" == typeof o || "object" === n(o) && null !== o ? o : void 0 === o ? At : (P(t, ht("library returned unexpected type (".concat(n(o), ")"))), null); };
            var Et;
            Et = function (t) { t = Lt(t); var e = new XMLHttpRequest; return e.open("GET", t, !1), e.send(), e.status >= 200 && e.status <= 299; };
            var mt = function (t, e, r) { var n = Rt(t, e); if (null === n) {
                if (null === (n = a(t, e, r[0] === "*".charCodeAt(0))))
                    return 1;
                yt(t, e, n);
            } if (r[0] === "*".charCodeAt(0))
                return m(t, 1), 0; var u = function (t, e, r) { var n = e[vt(r)]; return n && "function" == typeof n ? n : (R(t, ht("undefined symbol: %s"), r), null); }(t, n, r); return null === u ? 2 : (N(t, u), 0); }, Ut = At, Nt = function (t, e, r, n) { var a = "".concat(r).concat(ft.LUA_VERSUFFIX); P(t, ht(a)); var u = Ut[a]; void 0 === u && (u = Ut[r]), void 0 === u || function (t) { g(t, v, ht("LUA_NOENV")); var e = X(t, -1); return E(t, 1), e; }(t) ? P(t, n) : (u = at(t, ht(u), ht(f + f, !0), ht(f + vt(Ot) + f, !0)), at(t, u, Ot, n), K(t, -2)), F(t, -3, e), E(t, 1); }, Rt = function (t, e) { V(t, v, gt), g(t, -1, e); var r = Y(t, -1); return E(t, 2), r; }, yt = function (t, e, r) { V(t, v, gt), S(t, r), C(t, -1), F(t, -3, e), B(t, -2, ut(t, -2) + 1), E(t, 1); }, St = function (t, e) { for (; e[0] === f.charCodeAt(0);)
                e = e.subarray(1); if (0 === e.length)
                return null; var r = pt(e, f.charCodeAt(0)); return r < 0 && (r = e.length), I(t, e, r), e.subarray(r); }, wt = function (t, e, r, n, a) { var u = new Q; for (tt(t, u), 0 !== n[0] && (e = at(t, e, n, a)); null !== (r = St(t, r));) {
                var s = at(t, z(t, -1), ht(c, !0), e);
                if (K(t, -2), Et(s))
                    return s;
                R(t, ht("\n\tno file '%s'"), s), K(t, -2), $(u);
            } return it(u), null; }, It = function (t, e, r, n) { g(t, J(1), r); var a = z(t, -1); return null === a && rt(t, ht("'package.%s' must be a string"), r), wt(t, e, a, ht("."), n); }, Mt = function (t, e, r) { return e ? (P(t, r), 2) : rt(t, ht("error loading module '%s' from file '%s':\n\t%s"), z(t, 1), r, z(t, -1)); }, Pt = function (t) { var e = et(t, 1), r = It(t, e, ht("path", !0), ht(xt, !0)); return null === r ? 1 : Mt(t, st(t, r) === p, r); }, Ct = function (t, e, r) { var n; r = at(t, r, ht("."), kt); var a = pt(r, "-".charCodeAt(0)); if (a >= 0) {
                n = I(t, r, a), n = R(t, ht("%s%s"), bt, n);
                var u = mt(t, e, n);
                if (2 !== u)
                    return u;
                r = a + 1;
            } return n = R(t, ht("%s%s"), bt, r), mt(t, e, n); }, Dt = function (t) { var e = et(t, 1), r = It(t, e, ht("jspath", !0), ht(Tt, !0)); return null === r ? 1 : Mt(t, 0 === Ct(t, r, e), r); }, Vt = function (t) { var e, r = et(t, 1), n = pt(r, ".".charCodeAt(0)); if (n < 0)
                return 0; I(t, r, n); var a = It(t, z(t, -1), ht("jspath", !0), ht(Tt, !0)); return null === a ? 1 : 0 !== (e = Ct(t, a, r)) ? 2 != e ? Mt(t, 0, a) : (P(t, ht("\n\tno module '%s' in file '%s'"), r, a), 1) : (P(t, a), 2); }, Bt = function (t) { var e = et(t, 1); return g(t, v, W), g(t, -1, e) === h && R(t, ht("\n\tno field package.preload['%s']"), e), 1; }, Gt = function t(e, r, n) { for (; r === p ? (D(e, 3, n.i) === h && (E(e, 1), it(n.msg), rt(e, ht("module '%s' not found:%s"), n.name, z(e, -1))), P(e, n.name), d(e, 1, 2, n, t)) : r = p, !x(e, -2); n.i++)
                k(e, -2) ? (E(e, 1), $(n.msg)) : E(e, 2); return n.k(e, p, n.ctx); }, Kt = function (t, e, r) { return P(t, r), T(t, -2), d(t, 2, 1, r, Ft), Ft(t, p, r); }, Ft = function (t, e, r) { var n = r; return b(t, -1) || F(t, 2, n), g(t, 2, n) == h && (m(t, 1), C(t, -1), F(t, 2, n)), 1; }, jt = { loadlib: function (t) { var e = et(t, 1), r = et(t, 2), n = mt(t, e, r); return 0 === n ? 1 : (M(t), T(t, -2), w(t, 1 === n ? "open" : "init"), 3); }, searchpath: function (t) { return null !== wt(t, et(t, 1), et(t, 2), lt(t, 3, "."), lt(t, 4, s)) ? 1 : (M(t), T(t, -2), 2); } }, Ht = { require: function (t) { var e = et(t, 1); return H(t, 1), g(t, v, q), g(t, 2, e), X(t, -1) ? 1 : (E(t, 1), function (t, e, r, n) { var a = new Q; return tt(t, a), g(t, J(1), ht("searchers", !0)) !== L && rt(t, ht("'package.searchers' must be a table")), Gt(t, p, { name: e, i: 1, msg: a, ctx: r, k: n }); }(t, e, e, Kt)); } };
            t.exports.luaopen_package = function (t) { return function (t) { O(t), A(t, 0, 1), j(t, -2), G(t, v, gt); }(t), ot(t, jt), function (t) { var e = [Bt, Pt, Dt, Vt, null]; A(t); for (var r = 0; e[r]; r++)
                C(t, -2), U(t, e[r], 1), B(t, -2, r + 1); F(t, -2, ht("searchers", !0)); }(t), Nt(t, ht("path", !0), "LUA_PATH", i), Nt(t, ht("jspath", !0), "LUA_JSPATH", l), w(t, s + "\n" + f + "\n" + c + "\n" + o + "\n-\n"), F(t, -2, ht("config", !0)), nt(t, v, q), F(t, -2, ht("loaded", !0)), nt(t, v, W), F(t, -2, ht("preload", !0)), y(t), C(t, -2), ct(t, Ht, 1), E(t, 1), 1; };
        }, function (t, e, r) { var n = r(2), a = n.lua_pushinteger, u = n.lua_pushliteral, s = n.lua_setfield, o = r(7).luaL_newlib, l = r(5), i = l.FENGARI_AUTHORS, c = l.FENGARI_COPYRIGHT, f = l.FENGARI_RELEASE, _ = l.FENGARI_VERSION, p = l.FENGARI_VERSION_MAJOR, v = l.FENGARI_VERSION_MINOR, h = l.FENGARI_VERSION_NUM, L = l.FENGARI_VERSION_RELEASE, d = l.to_luastring; t.exports.luaopen_fengari = function (t) { return o(t, {}), u(t, i), s(t, -2, d("AUTHORS")), u(t, c), s(t, -2, d("COPYRIGHT")), u(t, f), s(t, -2, d("RELEASE")), u(t, _), s(t, -2, d("VERSION")), u(t, p), s(t, -2, d("VERSION_MAJOR")), u(t, v), s(t, -2, d("VERSION_MINOR")), a(t, h), s(t, -2, d("VERSION_NUM")), u(t, L), s(t, -2, d("VERSION_RELEASE")), 1; }; }, function (t, e, r) {
            "use strict";
            r.r(e), r.d(e, "L", function () { return R; }), r.d(e, "load", function () { return y; });
            var n = r(0);
            r.d(e, "FENGARI_AUTHORS", function () { return n.FENGARI_AUTHORS; }), r.d(e, "FENGARI_COPYRIGHT", function () { return n.FENGARI_COPYRIGHT; }), r.d(e, "FENGARI_RELEASE", function () { return n.FENGARI_RELEASE; }), r.d(e, "FENGARI_VERSION", function () { return n.FENGARI_VERSION; }), r.d(e, "FENGARI_VERSION_MAJOR", function () { return n.FENGARI_VERSION_MAJOR; }), r.d(e, "FENGARI_VERSION_MINOR", function () { return n.FENGARI_VERSION_MINOR; }), r.d(e, "FENGARI_VERSION_NUM", function () { return n.FENGARI_VERSION_NUM; }), r.d(e, "FENGARI_VERSION_RELEASE", function () { return n.FENGARI_VERSION_RELEASE; }), r.d(e, "luastring_eq", function () { return n.luastring_eq; }), r.d(e, "luastring_indexOf", function () { return n.luastring_indexOf; }), r.d(e, "luastring_of", function () { return n.luastring_of; }), r.d(e, "to_jsstring", function () { return n.to_jsstring; }), r.d(e, "to_luastring", function () { return n.to_luastring; }), r.d(e, "to_uristring", function () { return n.to_uristring; }), r.d(e, "lua", function () { return n.lua; }), r.d(e, "lauxlib", function () { return n.lauxlib; }), r.d(e, "lualib", function () { return n.lualib; });
            var a = r(18);
            r.d(e, "interop", function () { return a; });
            var u = n.lua.LUA_ERRRUN, s = n.lua.LUA_ERRSYNTAX, o = n.lua.LUA_OK, l = n.lua.LUA_VERSION_MAJOR, i = n.lua.LUA_VERSION_MINOR, c = n.lua.lua_Debug, f = n.lua.lua_getinfo, _ = n.lua.lua_getstack, p = n.lua.lua_gettop, v = n.lua.lua_insert, h = n.lua.lua_pcall, L = n.lua.lua_pop, d = n.lua.lua_pushcfunction, A = n.lua.lua_pushstring, g = n.lua.lua_remove, T = n.lua.lua_setglobal, x = n.lua.lua_tojsstring, b = n.lauxlib.luaL_loadbuffer, k = n.lauxlib.luaL_newstate, O = n.lauxlib.luaL_requiref, E = a.checkjs, m = a.luaopen_js, U = a.push, N = a.tojs, R = k();
            function y(t, e) { if ("string" == typeof t)
                t = Object(n.to_luastring)(t);
            else if (!(t instanceof Uint8Array))
                throw new TypeError("expects an array of bytes or javascript string"); e = e ? Object(n.to_luastring)(e) : null; var r, a = b(R, t, null, e); if (r = a === s ? new SyntaxError(x(R, -1)) : N(R, -1), L(R, 1), a !== o)
                throw r; return r; }
            if (n.lualib.luaL_openlibs(R), O(R, Object(n.to_luastring)("js"), m, 1), L(R, 1), A(R, Object(n.to_luastring)(n.FENGARI_COPYRIGHT)), T(R, Object(n.to_luastring)("_COPYRIGHT")), "undefined" != typeof document && document instanceof HTMLDocument) {
                var S = function (t) { var e = new c; return _(t, 2, e) && f(t, Object(n.to_luastring)("Sl"), e), U(t, new ErrorEvent("error", { bubbles: !0, cancelable: !0, message: x(t, 1), error: N(t, 1), filename: e.short_src ? Object(n.to_jsstring)(e.short_src) : void 0, lineno: e.currentline > 0 ? e.currentline : void 0 })), 1; }, w = function (t, e, r) { var n, a = b(R, e, null, r); if (a === s) {
                    var l = x(R, -1), i = t.src ? t.src : document.location, c = new SyntaxError(l, i, void 0);
                    n = new ErrorEvent("error", { message: l, error: c, filename: i, lineno: void 0 });
                }
                else if (a === o) {
                    var f = p(R);
                    d(R, S), v(R, f), Object.defineProperty(document, "currentScript", { value: t, configurable: !0 }), a = h(R, 0, 0, f), delete document.currentScript, g(R, f), a === u && (n = E(R, -1));
                } a !== o && (void 0 === n && (n = new ErrorEvent("error", { message: x(R, -1), error: N(R, -1) })), L(R, 1), window.dispatchEvent(n) && console.error("uncaught exception", n.error)); }, I = function (t, e, r) { if (t.status >= 200 && t.status < 300) {
                    var a = t.response;
                    a = "string" == typeof a ? Object(n.to_luastring)(t.response) : new Uint8Array(a), w(e, a, r);
                }
                else
                    e.dispatchEvent(new Event("error")); }, M = /^(.*?\/.*?)([\t ]*;.*)?$/, P = /^(\d+)\.(\d+)$/, C = function (t) { if ("SCRIPT" === t.tagName) {
                    var e = M.exec(t.type);
                    if (e) {
                        var r = e[1];
                        if ("application/lua" === r || "text/lua" === r) {
                            if (t.hasAttribute("lua-version")) {
                                var a = P.exec(t.getAttribute("lua-version"));
                                if (!a || a[1] !== l || a[2] !== i)
                                    return;
                            }
                            !function (t) { if (t.src) {
                                var e = Object(n.to_luastring)("@" + t.src);
                                if ("complete" === document.readyState || t.async)
                                    if ("function" == typeof fetch)
                                        fetch(t.src, { method: "GET", credentials: function (t) { switch (t) {
                                                case "anonymous": return "omit";
                                                case "use-credentials": return "include";
                                                default: return "same-origin";
                                            } }(t.crossorigin), redirect: "follow", integrity: t.integrity }).then(function (t) { if (t.ok)
                                            return t.arrayBuffer(); throw new Error("unable to fetch"); }).then(function (r) { var n = new Uint8Array(r); w(t, n, e); }).catch(function (e) { t.dispatchEvent(new Event("error")); });
                                    else {
                                        var r = new XMLHttpRequest;
                                        r.open("GET", t.src, !0), r.responseType = "arraybuffer", r.onreadystatechange = function () { 4 === r.readyState && I(r, t, e); }, r.send();
                                    }
                                else {
                                    var a = new XMLHttpRequest;
                                    a.open("GET", t.src, !1), a.send(), I(a, t, e);
                                }
                            }
                            else {
                                var u = Object(n.to_luastring)(t.innerHTML), s = t.id ? Object(n.to_luastring)("=" + t.id) : u;
                                w(t, u, s);
                            } }(t);
                        }
                    }
                } };
                "undefined" != typeof MutationObserver ? new MutationObserver(function (t, e) { for (var r = 0; r < t.length; r++)
                    for (var n = t[r], a = 0; a < n.addedNodes.length; a++)
                        C(n.addedNodes[a]); }).observe(document, { childList: !0, subtree: !0 }) : console.warn && console.warn("fengari-web: MutationObserver not found; lua script tags will not be run when inserted");
                Array.prototype.forEach.call(document.querySelectorAll('script[type^="application/lua"], script[type^="text/lua"]'), C);
            }
        }, function (t, e, r) {
            "use strict";
            var n = r(1), a = n.LUA_MULTRET, u = n.LUA_OPADD, s = n.LUA_OPBAND, o = n.LUA_OPBNOT, l = n.LUA_OPBOR, i = n.LUA_OPBXOR, c = n.LUA_OPDIV, f = n.LUA_OPIDIV, _ = n.LUA_OPMOD, p = n.LUA_OPSHL, v = n.LUA_OPSHR, h = n.LUA_OPUNM, L = n.constant_types, d = L.LUA_TBOOLEAN, A = L.LUA_TLIGHTUSERDATA, g = L.LUA_TLNGSTR, T = L.LUA_TNIL, x = L.LUA_TNUMFLT, b = L.LUA_TNUMINT, k = L.LUA_TTABLE, O = n.to_luastring, E = r(4).lua_assert, m = r(21), U = r(6), N = r(16), R = r(23), y = r(9), S = r(15), w = N.OpCodesI, I = U.TValue, M = { OPR_ADD: 0, OPR_SUB: 1, OPR_MUL: 2, OPR_MOD: 3, OPR_POW: 4, OPR_DIV: 5, OPR_IDIV: 6, OPR_BAND: 7, OPR_BOR: 8, OPR_BXOR: 9, OPR_SHL: 10, OPR_SHR: 11, OPR_CONCAT: 12, OPR_EQ: 13, OPR_LT: 14, OPR_LE: 15, OPR_NE: 16, OPR_GT: 17, OPR_GE: 18, OPR_AND: 19, OPR_OR: 20, OPR_NOBINOPR: 21 }, P = { OPR_MINUS: 0, OPR_BNOT: 1, OPR_NOT: 2, OPR_LEN: 3, OPR_NOUNOPR: 4 }, C = function (t) { return t.t !== t.f; }, D = function (t, e) { var r = R.expkind; if (C(t))
                return !1; switch (t.k) {
                case r.VKINT: return !e || new I(b, t.u.ival);
                case r.VKFLT: return !e || new I(x, t.u.nval);
                default: return !1;
            } }, V = function (t, e, r) { var n, a = e + r - 1; if (t.pc > t.lasttarget && (n = t.f.code[t.pc - 1]).opcode === w.OP_LOADNIL) {
                var u = n.A, s = u + n.B;
                if (u <= e && e <= s + 1 || e <= u && u <= a + 1)
                    return u < e && (e = u), s > a && (a = s), N.SETARG_A(n, e), void N.SETARG_B(n, a - e);
            } tt(t, w.OP_LOADNIL, e, r - 1, 0); }, B = function (t, e) { return t.f.code[e.u.info]; }, G = function (t, e) { var r = t.f.code[e].sBx; return -1 === r ? -1 : e + 1 + r; }, K = function (t, e, r) { var n = t.f.code[e], a = r - (e + 1); E(-1 !== r), Math.abs(a) > N.MAXARG_sBx && m.luaX_syntaxerror(t.ls, O("control structure too long", !0)), N.SETARG_sBx(n, a); }, F = function (t, e, r) { if (-1 === r)
                return e; if (-1 === e)
                e = r;
            else {
                for (var n = e, a = G(t, n); -1 !== a;)
                    a = G(t, n = a);
                K(t, n, r);
            } return e; }, j = function (t) { var e = t.jpc; t.jpc = -1; var r = rt(t, w.OP_JMP, 0, -1); return r = F(t, r, e); }, H = function (t, e, r, n, a) { return tt(t, e, r, n, a), j(t); }, X = function (t) { return t.lasttarget = t.pc, t.pc; }, z = function (t, e) { return e >= 1 && N.testTMode(t.f.code[e - 1].opcode) ? e - 1 : e; }, Y = function (t, e) { return t.f.code[z(t, e)]; }, J = function (t, e, r) { var n = z(t, e), a = t.f.code[n]; return a.opcode === w.OP_TESTSET && (r !== N.NO_REG && r !== a.B ? N.SETARG_A(a, r) : t.f.code[n] = N.CREATE_ABC(w.OP_TEST, a.B, 0, a.C), !0); }, Z = function (t, e) { for (; -1 !== e; e = G(t, e))
                J(t, e, N.NO_REG); }, q = function (t, e, r, n, a) { for (; -1 !== e;) {
                var u = G(t, e);
                J(t, e, n) ? K(t, e, r) : K(t, e, a), e = u;
            } }, W = function (t, e) { X(t), t.jpc = F(t, t.jpc, e); }, Q = function (t, e, r) { r === t.pc ? W(t, e) : (E(r < t.pc), q(t, e, r, N.NO_REG, r)); }, $ = function (t, e) { var r = t.f; return function (t) { q(t, t.jpc, t.pc, N.NO_REG, t.pc), t.jpc = -1; }(t), r.code[t.pc] = e, r.lineinfo[t.pc] = t.ls.lastline, t.pc++; }, tt = function (t, e, r, n, a) { return E(N.getOpMode(e) === N.iABC), E(N.getBMode(e) !== N.OpArgN || 0 === n), E(N.getCMode(e) !== N.OpArgN || 0 === a), E(r <= N.MAXARG_A && n <= N.MAXARG_B && a <= N.MAXARG_C), $(t, N.CREATE_ABC(e, r, n, a)); }, et = function (t, e, r, n) { return E(N.getOpMode(e) === N.iABx || N.getOpMode(e) === N.iAsBx), E(N.getCMode(e) === N.OpArgN), E(r <= N.MAXARG_A && n <= N.MAXARG_Bx), $(t, N.CREATE_ABx(e, r, n)); }, rt = function (t, e, r, n) { return et(t, e, r, n + N.MAXARG_sBx); }, nt = function (t, e) { return E(e <= N.MAXARG_Ax), $(t, N.CREATE_Ax(w.OP_EXTRAARG, e)); }, at = function (t, e, r) { if (r <= N.MAXARG_Bx)
                return et(t, w.OP_LOADK, e, r); var n = et(t, w.OP_LOADKX, e, 0); return nt(t, r), n; }, ut = function (t, e) { var r = t.freereg + e; r > t.f.maxstacksize && (r >= 255 && m.luaX_syntaxerror(t.ls, O("function or expression needs too many registers", !0)), t.f.maxstacksize = r); }, st = function (t, e) { ut(t, e), t.freereg += e; }, ot = function (t, e) { !N.ISK(e) && e >= t.nactvar && (t.freereg--, E(e === t.freereg)); }, lt = function (t, e) { e.k === R.expkind.VNONRELOC && ot(t, e.u.info); }, it = function (t, e, r) { var n = e.k === R.expkind.VNONRELOC ? e.u.info : -1, a = r.k === R.expkind.VNONRELOC ? r.u.info : -1; n > a ? (ot(t, n), ot(t, a)) : (ot(t, a), ot(t, n)); }, ct = function (t, e, r) { var n = t.f, a = y.luaH_get(t.L, t.ls.h, e); if (a.ttisinteger()) {
                var u = a.value;
                if (u < t.nk && n.k[u].ttype() === r.ttype() && n.k[u].value === r.value)
                    return u;
            } var s = t.nk; return y.luaH_setfrom(t.L, t.ls.h, e, new U.TValue(b, s)), n.k[s] = r, t.nk++, s; }, ft = function (t, e) { var r = new I(A, e), n = new I(b, e); return ct(t, r, n); }, _t = function (t, e) { var r = new I(x, e); return ct(t, r, r); }, pt = function (t, e) { var r = new I(d, e); return ct(t, r, r); }, vt = function (t, e, r) { var n = R.expkind; if (e.k === n.VCALL)
                N.SETARG_C(B(t, e), r + 1);
            else if (e.k === n.VVARARG) {
                var u = B(t, e);
                N.SETARG_B(u, r + 1), N.SETARG_A(u, t.freereg), st(t, 1);
            }
            else
                E(r === a); }, ht = function (t, e) { var r = R.expkind; e.k === r.VCALL ? (E(2 === B(t, e).C), e.k = r.VNONRELOC, e.u.info = B(t, e).A) : e.k === r.VVARARG && (N.SETARG_B(B(t, e), 2), e.k = r.VRELOCABLE); }, Lt = function (t, e) { var r = R.expkind; switch (e.k) {
                case r.VLOCAL:
                    e.k = r.VNONRELOC;
                    break;
                case r.VUPVAL:
                    e.u.info = tt(t, w.OP_GETUPVAL, 0, e.u.info, 0), e.k = r.VRELOCABLE;
                    break;
                case r.VINDEXED:
                    var n;
                    ot(t, e.u.ind.idx), e.u.ind.vt === r.VLOCAL ? (ot(t, e.u.ind.t), n = w.OP_GETTABLE) : (E(e.u.ind.vt === r.VUPVAL), n = w.OP_GETTABUP), e.u.info = tt(t, n, 0, e.u.ind.t, e.u.ind.idx), e.k = r.VRELOCABLE;
                    break;
                case r.VVARARG:
                case r.VCALL: ht(t, e);
            } }, dt = function (t, e, r, n) { return X(t), tt(t, w.OP_LOADBOOL, e, r, n); }, At = function (t, e, r) { var n = R.expkind; switch ((Lt(t, e), e.k)) {
                case n.VNIL:
                    V(t, r, 1);
                    break;
                case n.VFALSE:
                case n.VTRUE:
                    tt(t, w.OP_LOADBOOL, r, e.k === n.VTRUE, 0);
                    break;
                case n.VK:
                    at(t, r, e.u.info);
                    break;
                case n.VKFLT:
                    at(t, r, _t(t, e.u.nval));
                    break;
                case n.VKINT:
                    at(t, r, ft(t, e.u.ival));
                    break;
                case n.VRELOCABLE:
                    var a = B(t, e);
                    N.SETARG_A(a, r);
                    break;
                case n.VNONRELOC:
                    r !== e.u.info && tt(t, w.OP_MOVE, r, e.u.info, 0);
                    break;
                default: return void E(e.k === n.VJMP);
            } e.u.info = r, e.k = n.VNONRELOC; }, gt = function (t, e) { e.k !== R.expkind.VNONRELOC && (st(t, 1), At(t, e, t.freereg - 1)); }, Tt = function (t, e) { for (; -1 !== e; e = G(t, e)) {
                if (Y(t, e).opcode !== w.OP_TESTSET)
                    return !0;
            } return !1; }, xt = function (t, e, r) { var n = R.expkind; if (At(t, e, r), e.k === n.VJMP && (e.t = F(t, e.t, e.u.info)), C(e)) {
                var a, u = -1, s = -1;
                if (Tt(t, e.t) || Tt(t, e.f)) {
                    var o = e.k === n.VJMP ? -1 : j(t);
                    u = dt(t, r, 0, 1), s = dt(t, r, 1, 0), W(t, o);
                }
                a = X(t), q(t, e.f, a, r, u), q(t, e.t, a, r, s);
            } e.f = e.t = -1, e.u.info = r, e.k = n.VNONRELOC; }, bt = function (t, e) { Lt(t, e), lt(t, e), st(t, 1), xt(t, e, t.freereg - 1); }, kt = function (t, e) { if (Lt(t, e), e.k === R.expkind.VNONRELOC) {
                if (!C(e))
                    return e.u.info;
                if (e.u.info >= t.nactvar)
                    return xt(t, e, e.u.info), e.u.info;
            } return bt(t, e), e.u.info; }, Ot = function (t, e) { C(e) ? kt(t, e) : Lt(t, e); }, Et = function (t, e) { var r = R.expkind, n = !1; switch ((Ot(t, e), e.k)) {
                case r.VTRUE:
                    e.u.info = pt(t, !0), n = !0;
                    break;
                case r.VFALSE:
                    e.u.info = pt(t, !1), n = !0;
                    break;
                case r.VNIL:
                    e.u.info = function (t) { var e = new I(T, null), r = new I(k, t.ls.h); return ct(t, r, e); }(t), n = !0;
                    break;
                case r.VKINT:
                    e.u.info = ft(t, e.u.ival), n = !0;
                    break;
                case r.VKFLT:
                    e.u.info = _t(t, e.u.nval), n = !0;
                    break;
                case r.VK: n = !0;
            } return n && (e.k = r.VK, e.u.info <= N.MAXINDEXRK) ? N.RKASK(e.u.info) : kt(t, e); }, mt = function (t, e) { var r = Y(t, e.u.info); E(N.testTMode(r.opcode) && r.opcode !== w.OP_TESTSET && r.opcode !== w.OP_TEST), N.SETARG_A(r, !r.A); }, Ut = function (t, e, r) { if (e.k === R.expkind.VRELOCABLE) {
                var n = B(t, e);
                if (n.opcode === w.OP_NOT)
                    return t.pc--, H(t, w.OP_TEST, n.B, 0, !r);
            } return gt(t, e), lt(t, e), H(t, w.OP_TESTSET, N.NO_REG, e.u.info, r); }, Nt = function (t, e) { var r, n = R.expkind; switch (Lt(t, e), e.k) {
                case n.VJMP:
                    mt(t, e), r = e.u.info;
                    break;
                case n.VK:
                case n.VKFLT:
                case n.VKINT:
                case n.VTRUE:
                    r = -1;
                    break;
                default: r = Ut(t, e, 0);
            } e.f = F(t, e.f, r), W(t, e.t), e.t = -1; }, Rt = function (t, e) { var r, n = R.expkind; switch (Lt(t, e), e.k) {
                case n.VJMP:
                    r = e.u.info;
                    break;
                case n.VNIL:
                case n.VFALSE:
                    r = -1;
                    break;
                default: r = Ut(t, e, 1);
            } e.t = F(t, e.t, r), W(t, e.f), e.f = -1; }, yt = function (t, e, r) { var n, a, u = R.expkind; if (!(n = D(e, !0)) || !(a = D(r, !0)) || !function (t, e, r) { switch (t) {
                case s:
                case l:
                case i:
                case p:
                case v:
                case o: return !1 !== S.tointeger(e) && !1 !== S.tointeger(r);
                case c:
                case f:
                case _: return 0 !== r.value;
                default: return 1;
            } }(t, n, a))
                return 0; var h = new I; if (U.luaO_arith(null, t, n, a, h), h.ttisinteger())
                e.k = u.VKINT, e.u.ival = h.value;
            else {
                var L = h.value;
                if (isNaN(L) || 0 === L)
                    return !1;
                e.k = u.VKFLT, e.u.nval = L;
            } return !0; }, St = function (t, e, r, n, a) { var u = Et(t, n), s = Et(t, r); it(t, r, n), r.u.info = tt(t, e, 0, s, u), r.k = R.expkind.VRELOCABLE, wt(t, a); }, wt = function (t, e) { t.f.lineinfo[t.pc - 1] = e; };
            t.exports.BinOpr = M, t.exports.NO_JUMP = -1, t.exports.UnOpr = P, t.exports.getinstruction = B, t.exports.luaK_checkstack = ut, t.exports.luaK_code = $, t.exports.luaK_codeABC = tt, t.exports.luaK_codeABx = et, t.exports.luaK_codeAsBx = rt, t.exports.luaK_codek = at, t.exports.luaK_concat = F, t.exports.luaK_dischargevars = Lt, t.exports.luaK_exp2RK = Et, t.exports.luaK_exp2anyreg = kt, t.exports.luaK_exp2anyregup = function (t, e) { (e.k !== R.expkind.VUPVAL || C(e)) && kt(t, e); }, t.exports.luaK_exp2nextreg = bt, t.exports.luaK_exp2val = Ot, t.exports.luaK_fixline = wt, t.exports.luaK_getlabel = X, t.exports.luaK_goiffalse = Rt, t.exports.luaK_goiftrue = Nt, t.exports.luaK_indexed = function (t, e, r) { var n = R.expkind; E(!C(e) && (R.vkisinreg(e.k) || e.k === n.VUPVAL)), e.u.ind.t = e.u.info, e.u.ind.idx = Et(t, r), e.u.ind.vt = e.k === n.VUPVAL ? n.VUPVAL : n.VLOCAL, e.k = n.VINDEXED; }, t.exports.luaK_infix = function (t, e, r) { switch (e) {
                case M.OPR_AND:
                    Nt(t, r);
                    break;
                case M.OPR_OR:
                    Rt(t, r);
                    break;
                case M.OPR_CONCAT:
                    bt(t, r);
                    break;
                case M.OPR_ADD:
                case M.OPR_SUB:
                case M.OPR_MUL:
                case M.OPR_DIV:
                case M.OPR_IDIV:
                case M.OPR_MOD:
                case M.OPR_POW:
                case M.OPR_BAND:
                case M.OPR_BOR:
                case M.OPR_BXOR:
                case M.OPR_SHL:
                case M.OPR_SHR:
                    D(r, !1) || Et(t, r);
                    break;
                default: Et(t, r);
            } }, t.exports.luaK_intK = ft, t.exports.luaK_jump = j, t.exports.luaK_jumpto = function (t, e) { return Q(t, j(t), e); }, t.exports.luaK_nil = V, t.exports.luaK_numberK = _t, t.exports.luaK_patchclose = function (t, e, r) { for (r++; -1 !== e; e = G(t, e)) {
                var n = t.f.code[e];
                E(n.opcode === w.OP_JMP && (0 === n.A || n.A >= r)), N.SETARG_A(n, r);
            } }, t.exports.luaK_patchlist = Q, t.exports.luaK_patchtohere = W, t.exports.luaK_posfix = function (t, e, r, n, a) { var s = R.expkind; switch (e) {
                case M.OPR_AND:
                    E(-1 === r.t), Lt(t, n), n.f = F(t, n.f, r.f), r.to(n);
                    break;
                case M.OPR_OR:
                    E(-1 === r.f), Lt(t, n), n.t = F(t, n.t, r.t), r.to(n);
                    break;
                case M.OPR_CONCAT:
                    Ot(t, n);
                    var o = B(t, n);
                    n.k === s.VRELOCABLE && o.opcode === w.OP_CONCAT ? (E(r.u.info === o.B - 1), lt(t, r), N.SETARG_B(o, r.u.info), r.k = s.VRELOCABLE, r.u.info = n.u.info) : (bt(t, n), St(t, w.OP_CONCAT, r, n, a));
                    break;
                case M.OPR_ADD:
                case M.OPR_SUB:
                case M.OPR_MUL:
                case M.OPR_DIV:
                case M.OPR_IDIV:
                case M.OPR_MOD:
                case M.OPR_POW:
                case M.OPR_BAND:
                case M.OPR_BOR:
                case M.OPR_BXOR:
                case M.OPR_SHL:
                case M.OPR_SHR:
                    yt(e + u, r, n) || St(t, e + w.OP_ADD, r, n, a);
                    break;
                case M.OPR_EQ:
                case M.OPR_LT:
                case M.OPR_LE:
                case M.OPR_NE:
                case M.OPR_GT:
                case M.OPR_GE: !function (t, e, r, n) { var a, u = R.expkind; r.k === u.VK ? a = N.RKASK(r.u.info) : (E(r.k === u.VNONRELOC), a = r.u.info); var s = Et(t, n); switch ((it(t, r, n), e)) {
                    case M.OPR_NE:
                        r.u.info = H(t, w.OP_EQ, 0, a, s);
                        break;
                    case M.OPR_GT:
                    case M.OPR_GE:
                        var o = e - M.OPR_NE + w.OP_EQ;
                        r.u.info = H(t, o, 1, s, a);
                        break;
                    default:
                        var l = e - M.OPR_EQ + w.OP_EQ;
                        r.u.info = H(t, l, 1, a, s);
                } r.k = u.VJMP; }(t, e, r, n);
            } return r; }, t.exports.luaK_prefix = function (t, e, r, n) { var a = new R.expdesc; switch ((a.k = R.expkind.VKINT, a.u.ival = a.u.nval = a.u.info = 0, a.t = -1, a.f = -1, e)) {
                case P.OPR_MINUS:
                case P.OPR_BNOT: if (yt(e + h, r, a))
                    break;
                case P.OPR_LEN:
                    !function (t, e, r, n) { var a = kt(t, r); lt(t, r), r.u.info = tt(t, e, 0, a, 0), r.k = R.expkind.VRELOCABLE, wt(t, n); }(t, e + w.OP_UNM, r, n);
                    break;
                case P.OPR_NOT: !function (t, e) { var r = R.expkind; switch (Lt(t, e), e.k) {
                    case r.VNIL:
                    case r.VFALSE:
                        e.k = r.VTRUE;
                        break;
                    case r.VK:
                    case r.VKFLT:
                    case r.VKINT:
                    case r.VTRUE:
                        e.k = r.VFALSE;
                        break;
                    case r.VJMP:
                        mt(t, e);
                        break;
                    case r.VRELOCABLE:
                    case r.VNONRELOC: gt(t, e), lt(t, e), e.u.info = tt(t, w.OP_NOT, 0, e.u.info, 0), e.k = r.VRELOCABLE;
                } var n = e.f; e.f = e.t, e.t = n, Z(t, e.f), Z(t, e.t); }(t, r);
            } }, t.exports.luaK_reserveregs = st, t.exports.luaK_ret = function (t, e, r) { tt(t, w.OP_RETURN, e, r + 1, 0); }, t.exports.luaK_self = function (t, e, r) { kt(t, e); var n = e.u.info; lt(t, e), e.u.info = t.freereg, e.k = R.expkind.VNONRELOC, st(t, 2), tt(t, w.OP_SELF, e.u.info, n, Et(t, r)), lt(t, r); }, t.exports.luaK_setlist = function (t, e, r, n) { var u = (r - 1) / N.LFIELDS_PER_FLUSH + 1, s = n === a ? 0 : n; E(0 !== n && n <= N.LFIELDS_PER_FLUSH), u <= N.MAXARG_C ? tt(t, w.OP_SETLIST, e, s, u) : u <= N.MAXARG_Ax ? (tt(t, w.OP_SETLIST, e, s, 0), nt(t, u)) : m.luaX_syntaxerror(t.ls, O("constructor too long", !0)), t.freereg = e + 1; }, t.exports.luaK_setmultret = function (t, e) { vt(t, e, a); }, t.exports.luaK_setoneret = ht, t.exports.luaK_setreturns = vt, t.exports.luaK_storevar = function (t, e, r) { var n = R.expkind; switch (e.k) {
                case n.VLOCAL: return lt(t, r), void xt(t, r, e.u.info);
                case n.VUPVAL:
                    var a = kt(t, r);
                    tt(t, w.OP_SETUPVAL, a, e.u.info, 0);
                    break;
                case n.VINDEXED:
                    var u = e.u.ind.vt === n.VLOCAL ? w.OP_SETTABLE : w.OP_SETTABUP, s = Et(t, r);
                    tt(t, u, e.u.ind.t, e.u.ind.idx, s);
            } lt(t, r); }, t.exports.luaK_stringK = function (t, e) { var r = new I(g, e); return ct(t, r, r); };
        }, function (t, e, r) {
            "use strict";
            function n(t, e) { for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            } }
            var a = r(1), u = a.LUA_SIGNATURE, s = a.constant_types, o = s.LUA_TBOOLEAN, l = s.LUA_TLNGSTR, i = s.LUA_TNIL, c = s.LUA_TNUMFLT, f = s.LUA_TNUMINT, _ = s.LUA_TSHRSTR, p = a.thread_status.LUA_ERRSYNTAX, v = a.is_luastring, h = a.luastring_eq, L = a.to_luastring, d = r(8), A = r(13), g = r(6), T = r(16), x = T.MAXARG_sBx, b = T.POS_A, k = T.POS_Ax, O = T.POS_B, E = T.POS_Bx, m = T.POS_C, U = T.POS_OP, N = T.SIZE_A, R = T.SIZE_Ax, y = T.SIZE_B, S = T.SIZE_Bx, w = T.SIZE_C, I = T.SIZE_OP, M = r(4).lua_assert, P = r(10).luaS_bless, C = r(20), D = C.luaZ_read, V = C.ZIO, B = [25, 147, 13, 10, 26, 10], G = function () { function t(e, r, n) { !function (t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }(this, t), this.intSize = 4, this.size_tSize = 4, this.instructionSize = 4, this.integerSize = 4, this.numberSize = 8, M(r instanceof V, "BytecodeParser only operates on a ZIO"), M(v(n)), 64 === n[0] || 61 === n[0] ? this.name = n.subarray(1) : n[0] == u[0] ? this.name = L("binary string", !0) : this.name = n, this.L = e, this.Z = r, this.arraybuffer = new ArrayBuffer(Math.max(this.intSize, this.size_tSize, this.instructionSize, this.integerSize, this.numberSize)), this.dv = new DataView(this.arraybuffer), this.u8 = new Uint8Array(this.arraybuffer); } return function (t, e, r) { e && n(t.prototype, e), r && n(t, r); }(t, [{ key: "read", value: function (t) { var e = new Uint8Array(t); return 0 !== D(this.Z, e, 0, t) && this.error("truncated"), e; } }, { key: "LoadByte", value: function () { return 0 !== D(this.Z, this.u8, 0, 1) && this.error("truncated"), this.u8[0]; } }, { key: "LoadInt", value: function () { return 0 !== D(this.Z, this.u8, 0, this.intSize) && this.error("truncated"), this.dv.getInt32(0, !0); } }, { key: "LoadNumber", value: function () { return 0 !== D(this.Z, this.u8, 0, this.numberSize) && this.error("truncated"), this.dv.getFloat64(0, !0); } }, { key: "LoadInteger", value: function () { return 0 !== D(this.Z, this.u8, 0, this.integerSize) && this.error("truncated"), this.dv.getInt32(0, !0); } }, { key: "LoadSize_t", value: function () { return this.LoadInteger(); } }, { key: "LoadString", value: function () { var t = this.LoadByte(); return 255 === t && (t = this.LoadSize_t()), 0 === t ? null : P(this.L, this.read(t - 1)); } }, { key: "LoadCode", value: function (e) { for (var r = this.LoadInt(), n = t, a = 0; a < r; a++) {
                        0 !== D(this.Z, this.u8, 0, this.instructionSize) && this.error("truncated");
                        var u = this.dv.getUint32(0, !0);
                        e.code[a] = { code: u, opcode: u >> U & n.MASK1(I, 0), A: u >> b & n.MASK1(N, 0), B: u >> O & n.MASK1(y, 0), C: u >> m & n.MASK1(w, 0), Bx: u >> E & n.MASK1(S, 0), Ax: u >> k & n.MASK1(R, 0), sBx: (u >> E & n.MASK1(S, 0)) - x };
                    } } }, { key: "LoadConstants", value: function (t) { for (var e = this.LoadInt(), r = 0; r < e; r++) {
                        var n = this.LoadByte();
                        switch (n) {
                            case i:
                                t.k.push(new g.TValue(i, null));
                                break;
                            case o:
                                t.k.push(new g.TValue(o, 0 !== this.LoadByte()));
                                break;
                            case c:
                                t.k.push(new g.TValue(c, this.LoadNumber()));
                                break;
                            case f:
                                t.k.push(new g.TValue(f, this.LoadInteger()));
                                break;
                            case _:
                            case l:
                                t.k.push(new g.TValue(l, this.LoadString()));
                                break;
                            default: this.error("unrecognized constant '".concat(n, "'"));
                        }
                    } } }, { key: "LoadProtos", value: function (t) { for (var e = this.LoadInt(), r = 0; r < e; r++)
                        t.p[r] = new A.Proto(this.L), this.LoadFunction(t.p[r], t.source); } }, { key: "LoadUpvalues", value: function (t) { for (var e = this.LoadInt(), r = 0; r < e; r++)
                        t.upvalues[r] = { name: null, instack: this.LoadByte(), idx: this.LoadByte() }; } }, { key: "LoadDebug", value: function (t) { for (var e = this.LoadInt(), r = 0; r < e; r++)
                        t.lineinfo[r] = this.LoadInt(); e = this.LoadInt(); for (var n = 0; n < e; n++)
                        t.locvars[n] = { varname: this.LoadString(), startpc: this.LoadInt(), endpc: this.LoadInt() }; e = this.LoadInt(); for (var a = 0; a < e; a++)
                        t.upvalues[a].name = this.LoadString(); } }, { key: "LoadFunction", value: function (t, e) { t.source = this.LoadString(), null === t.source && (t.source = e), t.linedefined = this.LoadInt(), t.lastlinedefined = this.LoadInt(), t.numparams = this.LoadByte(), t.is_vararg = 0 !== this.LoadByte(), t.maxstacksize = this.LoadByte(), this.LoadCode(t), this.LoadConstants(t), this.LoadUpvalues(t), this.LoadProtos(t), this.LoadDebug(t); } }, { key: "checkliteral", value: function (t, e) { var r = this.read(t.length); h(r, t) || this.error(e); } }, { key: "checkHeader", value: function () { this.checkliteral(u.subarray(1), "not a"), 83 !== this.LoadByte() && this.error("version mismatch in"), 0 !== this.LoadByte() && this.error("format mismatch in"), this.checkliteral(B, "corrupted"), this.intSize = this.LoadByte(), this.size_tSize = this.LoadByte(), this.instructionSize = this.LoadByte(), this.integerSize = this.LoadByte(), this.numberSize = this.LoadByte(), this.checksize(this.intSize, 4, "int"), this.checksize(this.size_tSize, 4, "size_t"), this.checksize(this.instructionSize, 4, "instruction"), this.checksize(this.integerSize, 4, "integer"), this.checksize(this.numberSize, 8, "number"), 22136 !== this.LoadInteger() && this.error("endianness mismatch in"), 370.5 !== this.LoadNumber() && this.error("float format mismatch in"); } }, { key: "error", value: function (t) { g.luaO_pushfstring(this.L, L("%s: %s precompiled chunk"), this.name, L(t)), d.luaD_throw(this.L, p); } }, { key: "checksize", value: function (t, e, r) { t !== e && this.error("".concat(r, " size mismatch in")); } }], [{ key: "MASK1", value: function (t, e) { return ~(-1 << t) << e; } }]), t; }();
            t.exports.luaU_undump = function (t, e, r) { var n = new G(t, e, r); n.checkHeader(); var a = A.luaF_newLclosure(t, n.LoadByte()); return d.luaD_inctop(t), t.stack[t.top - 1].setclLvalue(a), a.p = new A.Proto(t), n.LoadFunction(a.p, null), M(a.nupvalues === a.p.upvalues.length), a; };
        }, function (t, e, r) {
            "use strict";
            var n = r(1), a = n.LUA_SIGNATURE, u = n.LUA_VERSION_MAJOR, s = n.LUA_VERSION_MINOR, o = n.constant_types, l = o.LUA_TBOOLEAN, i = o.LUA_TLNGSTR, c = o.LUA_TNIL, f = o.LUA_TNUMFLT, _ = o.LUA_TNUMINT, p = o.LUA_TSHRSTR, v = n.luastring_of, h = v(25, 147, 13, 10, 26, 10), L = 16 * Number(u) + Number(s), d = function t() { !function (t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }(this, t), this.L = null, this.write = null, this.data = null, this.strip = NaN, this.status = NaN; }, A = function (t, e, r) { 0 === r.status && e > 0 && (r.status = r.writer(r.L, t, e, r.data)); }, g = function (t, e) { A(v(t), 1, e); }, T = function (t, e) { var r = new ArrayBuffer(4); new DataView(r).setInt32(0, t, !0); var n = new Uint8Array(r); A(n, 4, e); }, x = function (t, e) { var r = new ArrayBuffer(4); new DataView(r).setInt32(0, t, !0); var n = new Uint8Array(r); A(n, 4, e); }, b = function (t, e) { var r = new ArrayBuffer(8); new DataView(r).setFloat64(0, t, !0); var n = new Uint8Array(r); A(n, 8, e); }, k = function (t, e) { if (null === t)
                g(0, e);
            else {
                var r = t.tsslen() + 1, n = t.getstr();
                r < 255 ? g(r, e) : (g(255, e), x(r, e)), A(n, r - 1, e);
            } }, O = function (t, e) { var r = t.p.length; T(r, e); for (var n = 0; n < r; n++)
                E(t.p[n], t.source, e); }, E = function (t, e, r) { r.strip || t.source === e ? k(null, r) : k(t.source, r), T(t.linedefined, r), T(t.lastlinedefined, r), g(t.numparams, r), g(t.is_vararg ? 1 : 0, r), g(t.maxstacksize, r), function (t, e) { var r = t.code.map(function (t) { return t.code; }); T(r.length, e); for (var n = 0; n < r.length; n++)
                T(r[n], e); }(t, r), function (t, e) { var r = t.k.length; T(r, e); for (var n = 0; n < r; n++) {
                var a = t.k[n];
                switch (g(a.ttype(), e), a.ttype()) {
                    case c: break;
                    case l:
                        g(a.value ? 1 : 0, e);
                        break;
                    case f:
                        b(a.value, e);
                        break;
                    case _:
                        x(a.value, e);
                        break;
                    case p:
                    case i: k(a.tsvalue(), e);
                }
            } }(t, r), function (t, e) { var r = t.upvalues.length; T(r, e); for (var n = 0; n < r; n++)
                g(t.upvalues[n].instack ? 1 : 0, e), g(t.upvalues[n].idx, e); }(t, r), O(t, r), function (t, e) { var r = e.strip ? 0 : t.lineinfo.length; T(r, e); for (var n = 0; n < r; n++)
                T(t.lineinfo[n], e); r = e.strip ? 0 : t.locvars.length, T(r, e); for (var a = 0; a < r; a++)
                k(t.locvars[a].varname, e), T(t.locvars[a].startpc, e), T(t.locvars[a].endpc, e); r = e.strip ? 0 : t.upvalues.length, T(r, e); for (var u = 0; u < r; u++)
                k(t.upvalues[u].name, e); }(t, r); };
            t.exports.luaU_dump = function (t, e, r, n, u) { var s = new d; return s.L = t, s.writer = r, s.data = n, s.strip = u, s.status = 0, function (t) { A(a, a.length, t), g(L, t), g(0, t), A(h, h.length, t), g(4, t), g(4, t), g(4, t), g(4, t), g(8, t), x(22136, t), b(370.5, t); }(s), g(e.upvalues.length, s), E(e, null, s), s.status; };
        }, function (t, e, r) { var n; !function () {
            "use strict";
            var a = { not_string: /[^s]/, not_bool: /[^t]/, not_type: /[^T]/, not_primitive: /[^v]/, number: /[diefg]/, numeric_arg: /[bcdiefguxX]/, json: /[j]/, not_json: /[^j]/, text: /^[^\x25]+/, modulo: /^\x25{2}/, placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/, key: /^([a-z_][a-z_\d]*)/i, key_access: /^\.([a-z_][a-z_\d]*)/i, index_access: /^\[(\d+)\]/, sign: /^[\+\-]/ };
            function u(t) { return function (t, e) { var r, n, s, o, l, i, c, f, _, p = 1, v = t.length, h = ""; for (n = 0; n < v; n++)
                if ("string" == typeof t[n])
                    h += t[n];
                else if (Array.isArray(t[n])) {
                    if ((o = t[n])[2])
                        for (r = e[p], s = 0; s < o[2].length; s++) {
                            if (!r.hasOwnProperty(o[2][s]))
                                throw new Error(u('[sprintf] property "%s" does not exist', o[2][s]));
                            r = r[o[2][s]];
                        }
                    else
                        r = o[1] ? e[o[1]] : e[p++];
                    if (a.not_type.test(o[8]) && a.not_primitive.test(o[8]) && r instanceof Function && (r = r()), a.numeric_arg.test(o[8]) && "number" != typeof r && isNaN(r))
                        throw new TypeError(u("[sprintf] expecting number but found %T", r));
                    switch (a.number.test(o[8]) && (f = r >= 0), o[8]) {
                        case "b":
                            r = parseInt(r, 10).toString(2);
                            break;
                        case "c":
                            r = String.fromCharCode(parseInt(r, 10));
                            break;
                        case "d":
                        case "i":
                            r = parseInt(r, 10);
                            break;
                        case "j":
                            r = JSON.stringify(r, null, o[6] ? parseInt(o[6]) : 0);
                            break;
                        case "e":
                            r = o[7] ? parseFloat(r).toExponential(o[7]) : parseFloat(r).toExponential();
                            break;
                        case "f":
                            r = o[7] ? parseFloat(r).toFixed(o[7]) : parseFloat(r);
                            break;
                        case "g":
                            r = o[7] ? String(Number(r.toPrecision(o[7]))) : parseFloat(r);
                            break;
                        case "o":
                            r = (parseInt(r, 10) >>> 0).toString(8);
                            break;
                        case "s":
                            r = String(r), r = o[7] ? r.substring(0, o[7]) : r;
                            break;
                        case "t":
                            r = String(!!r), r = o[7] ? r.substring(0, o[7]) : r;
                            break;
                        case "T":
                            r = Object.prototype.toString.call(r).slice(8, -1).toLowerCase(), r = o[7] ? r.substring(0, o[7]) : r;
                            break;
                        case "u":
                            r = parseInt(r, 10) >>> 0;
                            break;
                        case "v":
                            r = r.valueOf(), r = o[7] ? r.substring(0, o[7]) : r;
                            break;
                        case "x":
                            r = (parseInt(r, 10) >>> 0).toString(16);
                            break;
                        case "X": r = (parseInt(r, 10) >>> 0).toString(16).toUpperCase();
                    }
                    a.json.test(o[8]) ? h += r : (!a.number.test(o[8]) || f && !o[3] ? _ = "" : (_ = f ? "+" : "-", r = r.toString().replace(a.sign, "")), i = o[4] ? "0" === o[4] ? "0" : o[4].charAt(1) : " ", c = o[6] - (_ + r).length, l = o[6] && c > 0 ? i.repeat(c) : "", h += o[5] ? _ + r + l : "0" === i ? _ + l + r : l + _ + r);
                } return h; }(function (t) { if (o[t])
                return o[t]; var e, r = t, n = [], u = 0; for (; r;) {
                if (null !== (e = a.text.exec(r)))
                    n.push(e[0]);
                else if (null !== (e = a.modulo.exec(r)))
                    n.push("%");
                else {
                    if (null === (e = a.placeholder.exec(r)))
                        throw new SyntaxError("[sprintf] unexpected placeholder");
                    if (e[2]) {
                        u |= 1;
                        var s = [], l = e[2], i = [];
                        if (null === (i = a.key.exec(l)))
                            throw new SyntaxError("[sprintf] failed to parse named argument key");
                        for (s.push(i[1]); "" !== (l = l.substring(i[0].length));)
                            if (null !== (i = a.key_access.exec(l)))
                                s.push(i[1]);
                            else {
                                if (null === (i = a.index_access.exec(l)))
                                    throw new SyntaxError("[sprintf] failed to parse named argument key");
                                s.push(i[1]);
                            }
                        e[2] = s;
                    }
                    else
                        u |= 2;
                    if (3 === u)
                        throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                    n.push(e);
                }
                r = r.substring(e[0].length);
            } return o[t] = n; }(t), arguments); }
            function s(t, e) { return u.apply(null, [t].concat(e || [])); }
            var o = Object.create(null);
            e.sprintf = u, e.vsprintf = s, "undefined" != typeof window && (window.sprintf = u, window.vsprintf = s, void 0 === (n = function () { return { sprintf: u, vsprintf: s }; }.call(e, r, e, t)) || (t.exports = n));
        }(); }, function (t, e, r) {
            "use strict";
            var n = r(2).lua_pop, a = r(7).luaL_requiref, u = r(5).to_luastring, s = {};
            t.exports.luaL_openlibs = function (t) { for (var e in s)
                a(t, u(e), s[e], 1), n(t, 1); };
            var o = r(17), l = r(24).luaopen_base, i = r(25).luaopen_coroutine, c = r(31).luaopen_debug, f = r(30).luaopen_math, _ = r(32).luaopen_package, p = r(27).luaopen_os, v = r(28).luaopen_string, h = r(26).luaopen_table, L = r(29).luaopen_utf8;
            s._G = l, s[o.LUA_LOADLIBNAME] = _, s[o.LUA_COLIBNAME] = i, s[o.LUA_TABLIBNAME] = h, s[o.LUA_OSLIBNAME] = p, s[o.LUA_STRLIBNAME] = v, s[o.LUA_MATHLIBNAME] = f, s[o.LUA_UTF8LIBNAME] = L, s[o.LUA_DBLIBNAME] = c;
            var d = r(33).luaopen_fengari;
            s[o.LUA_FENGARILIBNAME] = d;
        }]);
});


/***/ })

},[[65,3]]]);