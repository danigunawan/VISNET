var Kodhus = function(e) {
    "use strict";
    var t, n, i, r, o = (t = document.querySelectorAll("[data-dialog]"), n = document.querySelectorAll(".cdt-dialog-container"), t.forEach(function(e) {
            e.addEventListener("click", function() {
                document.querySelector(e.dataset.dialog).classList.remove("hide")
            })
        }), void n.forEach(function(t) {
            return t.querySelectorAll("[data-close='true']").forEach(function(e) {
                return e.addEventListener("click", function() {
                    return t.classList.add("hide")
                })
            })
        })),
        a = void document.querySelectorAll(".cdt-notification").forEach(function(e) {
            var t = e.querySelector(".close") || e.querySelector("[data-close='true']");
            t && t.addEventListener("click", function() {
                e.classList.add("hide")
            })
        }),
        g = {
            tabletPhoneBreakpoint: 768,
            desktopBreakPoint: 1024
        },
        l = function() {
            var t = document.querySelector(".cdt-top-nav"),
                e = document.querySelector(".cdt-top-nav .mobile-trigger"),
                i = document.querySelectorAll(".cdt-top-nav .navigations"),
                o = document.querySelector(".cdt-second-nav"),
                n = document.querySelectorAll(".cdt-nav > li"),
                a = [],
                l = [],
                s = !1,
                r = !1,
                c = document.createElement("div");
            c.classList.add("mobile-navigation");
            var d = function() {
                var e = document.createElement("nav");
                e.classList.add("cdt-list", "cdt-secondary");
                var n = document.createElement("ul");
                if (e.appendChild(n), window.innerWidth <= g.desktopBreakPoint) {
                    var r = document.querySelectorAll(".cdt-nav-responsive");
                    r.forEach(function(e) {
                        a.push(e.cloneNode(!0)), l.push(e.parentElement)
                    }), s || (i.forEach(function(e) {
                        e.querySelectorAll("nav").forEach(function(e) {
                            e.classList.contains("no-responsive") || (c.appendChild(e.cloneNode(!0)), e.classList.toggle("hide"))
                        })
                    }), t.appendChild(c), c.style.top = t.offsetHeight + "px", r.forEach(function(e, t) {
                        e.querySelectorAll(":scope > ul > li").forEach(function(e) {
                            n.appendChild(e)
                        }), l[t].removeChild(r[t])
                    }), c.appendChild(e), c.classList.add("navigations"), s = !0)
                } else o && (t.style.height = document.querySelectorAll(".navigations")[0].offsetHeight + "px"), s && (l.map(function(e, t) {
                    return e.appendChild(a[t])
                }), a.length = 0, l.length = 0), c && c.classList.remove("open")
            };
            i && t && (window.addEventListener("resize", function() {
                d()
            }), d()), e && e.addEventListener("click", function() {
                c.classList.toggle("open"), r = !r
            }), n.forEach(function(e) {
                var t = document.querySelectorAll(".cdt-nav li ul");
                e.addEventListener("click", function() {
                    t.forEach(function(e) {
                        e.classList.add("hide")
                    }), e.querySelector("ul").classList.remove("hide")
                })
            });
            var u = document.querySelectorAll(".cdt-list li ul .cdt-list-item");
            u.forEach(function(e) {
                e.addEventListener("click", function() {
                    u.forEach(function(e) {
                        e.classList.remove("selected")
                    }), e.classList.add("selected")
                })
            });
            var f = document.querySelector(".cdt-top-nav.hide-on-scroll");
            if (f) {
                var y = !0,
                    h = 0,
                    v = !1,
                    m = 0;
                r || window.addEventListener("scroll", function() {
                    h = window.scrollY, v || (window.requestAnimationFrame(function() {
                        var e;
                        m < (e = h) ? y && "60" < e && (y = !1, f.style.transition = "transform 400ms ease-out", f.style.transform = "translateY(-100%)") : y || (f.style.transition = "transform 400ms ease-out", f.style.transform = "translateY(0)", y = !0), m = e, v = !1
                    }), v = !0)
                })
            }
        }(),
        s = function() {
            var e = document.querySelectorAll(".drop-toggle");
            if (e) {
                e.forEach(function(i) {
                    var o = i.nextElementSibling;
                    o.querySelectorAll("li").forEach(function(e) {
                        e.addEventListener("click", function() {
                            o.classList.toggle("open")
                        })
                    }), i.addEventListener("click", function(e) {
                        e.stopImmediatePropagation();
                        var t = i.getBoundingClientRect(),
                            n = void 0,
                            r = void 0;
                        n = o.offsetHeight + t.bottom + 4 < window.innerHeight ? i.offsetHeight + 4 : -(o.offsetHeight + 4), r = o.offsetWidth + t.left < window.innerWidth ? 0 : -o.offsetWidth + i.offsetWidth, o.style.transform = "translate3d(" + r + "px, " + n + "px, 0)", o.classList.toggle("open")
                    })
                }), document.addEventListener("click", function() {
                    e.forEach(function(e) {
                        e.nextElementSibling.classList.remove("open")
                    })
                })
            }
        }(),
        c = function() {
            var e = document.querySelectorAll("[data-aiv]"),
                i = function(e, t, n, r, i) {
                    var o = e.offsetHeight,
                        a = e.offsetTop;
                    t + window.innerHeight > a + o && (e.style.transition = "all " + n + "ms " + i + "ms " + r, e.style.transform = "translateY(0) scale(1)", e.style.opacity = "1")
                },
                t = [];
            e.forEach(
                function(e){
                    t.push(
                        {
                            element: e,
                            duration: e.getAttribute("data-duration") || 1e3,
                            timingFunction: e.getAttribute("data-timing-function") || "",
                            delay: e.getAttribute("data-delay") ? parseInt(e.getAttribute("data-delay")) : 0,
                            elementHeight: e.offsetHeight,
                            elementTop: e.offsetTop,
                            onChildren: !!e.getAttribute("data-aiv-children") && e.getAttribute("data-aiv-children"),
                            childrenDelay: e.getAttribute("data-children-delay") || 0
                        });
                });
            var n = function(r) {
                t.forEach(function(n) {
                    n.onChildren ? ( n.element.querySelectorAll(":scope > *").forEach(function(e, t) {
                        e.style.transform = "translateY(100px) scale(1)", e.style.opacity = "0", e.style.transformOrigin = "50% 100%", i(e, r, n.duration, n.timingFunction, n.delay + t * n.childrenDelay)
                    })) : (n.element.style.transform = "translateY(100px) scale(1)", n.element.style.opacity = "0", n.element.style.transformOrigin = "50% 100%", i(n.element, r, n.duration, n.timingFunction, n.delay))
                })
            };
            if (e.length) {
                var r = 0,
                    o = !1;
                window.addEventListener("scroll", function(e) {
                    r = window.scrollY, o || (window.requestAnimationFrame(function() {
                        n(r), o = !1
                    }), o = !0)
                }), n(r)
            }
        }(),
        d = function() {
            var t = document.querySelectorAll("[data-bg-parallax]"),
                e = !1,
                n = 0,
                l = function(e) {
                    e ? e.style.backgroundPosition = "center 0" : t.forEach(function(e) {
                        e.style.backgroundPosition = "center 0"
                    })
                };
            l();
            window.addEventListener("scroll", function() {
                n = window.scrollY, e || (window.requestAnimationFrame(function() {
                    var a;
                    a = n, t.forEach(function(e) {
                        if (a > e.offsetTop - window.innerHeight / 2) {
                            var t = e.offsetTop < window.innerHeight / 2 ? e.offsetTop : e.offsetTop - window.innerHeight / 2,
                                n = t + e.offsetHeight,
                                r = (a - (i = t)) * (-50 - (o = 0)) / (n - i) + o;
                            e.style.backgroundPosition = "center " + r + "px"
                        } else l(e);
                        var i, o
                    }), e = !1
                }), e = !0)
            })
        }(),
        u = function() {
            var t, n, r, i = !1,
                o = (t = document.createElement("fake"), n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    transition: "transitionend"
                }, r = "transitionend", Object.keys(n).forEach(function(e) {
                    void 0 !== t.style[e] && (r = n[e])
                }), r),
                e = document.querySelector(".cdt-carousel");
            if (e) {
                var a = e.getAttribute("data-carousel-type"),
                    l = !1;
                l = "true" === e.getAttribute("data-auto-slide");
                var s = e.getAttribute("data-slide-delay"),
                    c = !1;
                c = "true" === e.getAttribute("data-infinite");
                var d = e.querySelectorAll(".controls li"),
                    u = e.querySelector(".arrow.left"),
                    f = e.querySelector(".arrow.right"),
                    y = e.querySelectorAll("section"),
                    h = y.length,
                    v = "fade" === a ? e.getAttribute("data-opacity-duration") : 0,
                    m = document.createElement("div"),
                    g = 0,
                    p = function() {
                        "slide-sense" === a && (m.classList.add("slideSense-container"), e.prepend(m)), y.forEach(function(e, t) {
                            "fade" === a ? (e.style.zIndex = 0, e.style.opacity = 0, e.style.transition = "opacity " + v + "ms") : "overlay" === a || "slide" === a ? t !== g && (e.style.zIndex = 0) : "slide-sense" === a && (e.style.position = "relative", m.appendChild(e))
                        })
                    },
                    E = function(n, e) {
                        i || (f.style.display = c || n !== h - 1 ? "block" : "none", u.style.display = c || 0 !== n ? "block" : "none", "slide-sense" !== a && p(), "slide-sense" === a && (m.style.transition = "transform 1s", m.style.transform = "translateX(" + 25 * -n + "%)", g = n), "slide" === a ? y[n].style.zIndex = 5 : "overlay" === a && (y[g].style.zIndex = 7, y[n].style.zIndex = 6), "overlay" !== a && "slide" !== a || (y[n].style.transform = c ? g < n && n !== h - 1 || e && "right" === e ? "translateX(100%)" : "translateX(-100%)" : g < n ? "translateX(100%)" : "translateX(-100%)"), d.length && d.forEach(function(e) {
                            e.classList.remove("selected")
                        }), setTimeout(function() {
                            if (i = !0, "slide-sense" === a) d.length && d[n].classList.add("selected"), m.addEventListener(o, function() {
                                g = n, i = !1
                            });
                            else {
                                y[g].style.transition = "transform 1s", "fade" === a && (y[n].style.zIndex = 6, y[n].style.opacity = 1, g = n, i = !1), "slide" === a && (y[n].style.transition = "transform 1s"), "overlay" !== a && "slide" !== a || (y[g].style.transform = c ? g < n && n !== h - 1 || e && "right" === e ? "translateX(-100%)" : "translateX(100%)" : g < n ? "translateX(-100%)" : "translateX(100%)", y[n].style.transform = "translateX(0)", y[n].style.transform = "translateX(0)"), d.length && d[n].classList.add("selected");
                                var t = 0;
                                y[g].addEventListener(o, function(e) {
                                    1 === (t += 1) && "transform" === e.propertyName && (y[g].style.transform = "", y[g].style.transition = "", y[n].style.transform = "", y[n].style.transition = "", "overlay" === a ? (y[g].style.zIndex = 6, y[n].style.zIndex = 7) : "slide" === a && (p(), y[g].style.zIndex = 5, y[n].style.zIndex = 6), g = n, i = !1)
                                })
                            }
                        }, 0))
                    };
                l && (c = !0, setInterval(function() {
                    E(h <= g + 1 ? c ? 0 : h - 1 : g + 1)
                }, s)), u && u.addEventListener("click", function() {
                    if (0 !== g || c) {
                        E(g - 1 < 0 ? c ? h - 1 : 0 : g - 1, "left")
                    }
                }), f && f.addEventListener("click", function() {
                    if (g !== h - 1 || c) {
                        E(h <= g + 1 ? c ? 0 : h - 1 : g + 1, "right")
                    }
                });
                p(), y[g].style.zIndex = 6, "fade" === a && (y[g].style.opacity = 1), d.length && d[g].classList.add("selected"), d.forEach(function(e, t) {
                    e.addEventListener("click", function() {
                        t !== g && E(t)
                    })
                })
            }
        }(),
        f = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        y = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        }(),
        h = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !r && l.return && l.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        v = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        },
        m = function() {
            function s() {
                f(this, s)
            }
            return y(s, [{
                key: "init",
                value: function(e) {
                    var n = this;
                    this.windowHeight = window.innerHeight, this.options = e, document.querySelector("body").style.height = this.frameToScreen(this.findEndingFrame()) + this.windowHeight + "px", this.scrollables = [], e.items.forEach(function(e) {
                        var t = {
                            el: document.querySelector(e.selector),
                            story: s.createStory(e.frames)
                        };
                        n.scrollables.push(t)
                    }), this.initializePositions(), this.initEventHandlers(), this.start = 0
                }
            }, {
                key: "findEndingFrame",
                value: function() {
                    var n = -9999999,
                        r = {};
                    return this.options.items.map(function(e) {
                        return e.frames
                    }).reduce(function(e, t) {
                        return [].concat(v(e), v(t))
                    }, []).forEach(function(e) {
                        var t = s.getDigitValue(e.scrollPosition);
                        n < t && (n = t, r = e)
                    }), r.scrollPosition
                }
            }, {
                key: "initializePositions",
                value: function() {
                    this.scrollables.forEach(function(t) {
                        var n = t.story.initialStyles;
                        Object.keys(n).forEach(function(e) {
                            t.el.style[e] = n[e]
                        })
                    })
                }
            }, {
                key: "frameToScreen",
                value: function(e) {
                    var t = s.getDigitValue(e);
                    return "%" === e.charAt(e.length - 1) ? t / 100 * this.windowHeight : t
                }
            }, {
                key: "scroll",
                value: function(l) {
                    var e = this;
                    this.scrollables.forEach(function(a) {
                        var r = a.story.frames[0],
                            i = a.story.frames[a.story.frames.length - 1];
                        l < e.frameToScreen(r.start) ? Object.keys(r.styles).forEach(function(e) {
                            var t = -1,
                                n = r.styles[e].beginProp[0].replace(/\$/g, function() {
                                    return t += 1, r.styles[e].beginProp[1][t]
                                });
                            a.el.style[e] = n
                        }) : l > e.frameToScreen(i.end) ? Object.keys(i.styles).forEach(function(e) {
                            var t = -1,
                                n = i.styles[e].beginProp[0].replace(/\$/g, function() {
                                    return t += 1, i.styles[e].endProp[1][t]
                                });
                            a.el.style[e] = n
                        }) : a.story.frames.forEach(function(r) {
                            var i = e.frameToScreen(r.start),
                                o = e.frameToScreen(r.end);
                            s.between(i, o, l) && Object.keys(r.styles).forEach(function(e) {
                                var t = -1,
                                    n = r.styles[e].beginProp[0].replace(/\$/g, function() {
                                        return t += 1, s.calculateRangeValue(i, o, r.styles[e].beginProp[1][t], r.styles[e].endProp[1][t], l)
                                    });
                                a.el.style[e] = n
                            })
                        })
                    })
                }
            }, {
                key: "initEventHandlers",
                value: function() {
                    var e = this,
                        t = 0,
                        n = !1;
                    window.addEventListener("scroll", function() {
                        t = window.scrollY, n || (window.requestAnimationFrame(function() {
                            e.scroll(t), n = !1
                        }), n = !0)
                    })
                }
            }], [{
                key: "createStory",
                value: function(n) {
                    var t = (n = n.map(function(e, t) {
                            return "" === e.styles && 0 !== t && (e.styles = n[t - 1].styles), e
                        })).length,
                        s = /[+-]?\d+/g;
                    return n.reduce(function(o, e, a) {
                        if (a < t - 1) {
                            var l = {
                                start: e.scrollPosition,
                                end: n[a + 1].scrollPosition,
                                styles: {}
                            };
                            e.styles.split(";").forEach(function(e) {
                                if ("" !== e) {
                                    var t = e.split(":");
                                    if (0 === a) {
                                        var n = h(t, 2),
                                            r = n[0],
                                            i = n[1];
                                        o.initialStyles[r] = i
                                    }
                                    l.styles[t[0]] = {
                                        beginProp: [t[1].replace(s, "$"), t[1].match(s).map(function(e) {
                                            return +e
                                        })]
                                    }
                                }
                            }), n[a + 1].styles.split(";").forEach(function(e) {
                                if ("" !== e) {
                                    var t = e.split(":");
                                    l.styles[t[0]].endProp = [t[1].replace(s, "$"), t[1].match(s).map(function(e) {
                                        return +e
                                    })]
                                }
                            }), o.frames = [].concat(v(o.frames), [l])
                        }
                        return o
                    }, {
                        initialStyles: {},
                        frames: []
                    })
                }
            }, {
                key: "calculateRangeValue",
                value: function(e, t, n, r, i) {
                    var o = (i - e) * (r - n) / (t - e) + n;
                    return Math.ceil(o)
                }
            }, {
                key: "between",
                value: function(e, t, n) {
                    var r = Math.min.apply(Math, [e, t]),
                        i = Math.max.apply(Math, [e, t]);
                    return r <= n && n <= i
                }
            }, {
                key: "getDigitValue",
                value: function(e) {
                    return +e.match(/\d+/)
                }
            }]), s
        }(),
        p = (i = 0, r = document.querySelectorAll(".cdt-tab"), void r.forEach(function(r) {
            r.querySelector("ul").querySelectorAll("li").forEach(function(t, n) {
                t.classList.contains("selected") && (i = n, r.querySelector(".tabs-content").children[i].classList.add("show")), t.addEventListener("click", function(e) {
                    e.stopPropagation(), e.preventDefault(), i = n, r.querySelectorAll("li").forEach(function(e) {
                        return e.classList.remove("selected")
                    }), Array.from(r.querySelector(".tabs-content").children).forEach(function(e, t) {
                        t === i ? e.classList.add("show") : e.classList.remove("show")
                    }), t.classList.add("selected")
                })
            })
        })),
        E = function() {
            function e() {
                f(this, e)
            }
            return y(e, [{
                key: "init",
                value: function(e) {
                    var t = e.defaultColor,
                        n = void 0 === t ? "#999" : t,
                        r = e.activeIndex,
                        i = void 0 === r ? 0 : r;
                    this.defaultColor = n, this.element = document.querySelector(".cdt-step-progressbar");
                    var o = Array.from(this.element.children);
                    this.element.classList.contains("horizontal") && this.element.querySelectorAll("li").forEach(function(e) {
                        e.style.width = 100 / (o.length - 1) + "%"
                    }), this.setActiveIndex(i)
                }
            }, {
                key: "fixActive",
                value: function() {
                    this.element.querySelectorAll("li.active").forEach(function(e) {
                        return e.classList.remove("fix-last-active")
                    }), Array.from(this.element.querySelectorAll("li.active")).slice(-1)[0].classList.add("fix-last-active")
                }
            }, {
                key: "setActiveIndex",
                value: function(n) {
                    this.element.querySelectorAll("li").forEach(function(e) {
                        return e.classList.remove("active")
                    }), Array.from(this.element.children).filter(function(e, t) {
                        return t <= n
                    }).forEach(function(e) {
                        return e.classList.add("active")
                    }), this.fixActive()
                }
            }]), e
        }();
    return document.querySelectorAll("pre code").forEach(function(e) {
        hljs && hljs.highlightBlock(e)
    }), e.Dialog = o, e.Notification = a, e.Navigation = l, e.Aiv = c, e.BGParallax = d, e.Carousel = u, e.KScroll = m, e.Tab = p, e.StepProgressBar = E, e.Dropdown = s, e
}({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29kaHVzLTAuMS4wLm1pbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2pzL2RpYWxvZy5qcyIsIi4uL3NyYy9qcy90YWIuanMiLCIuLi9zcmMvanMvbm90aWZpY2F0aW9uLmpzIiwiLi4vc3JjL2pzL3V0aWxzLmpzIiwiLi4vc3JjL2pzL25hdmlnYXRpb24uanMiLCIuLi9zcmMvanMvZHJvcGRvd24uanMiLCIuLi9zcmMvanMvYWl2LmpzIiwiLi4vc3JjL2pzL2JnLXBhcmFsbGF4LmpzIiwiLi4vc3JjL2pzL2Nhcm91c2VsLmpzIiwiLi4vc3JjL2pzL3Njcm9sbC1zdG9yeS5qcyIsIi4uL3NyYy9qcy9zdGVwLXByb2dyZXNzYmFyLmpzIiwiLi4vc3JjL2pzL2tvZGh1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEaWFsb2cgPSAoKCkgPT4ge1xuICBjb25zdCBkaWFsb2dUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRpYWxvZ10nKTtcbiAgY29uc3QgZGlhbG9ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZHQtZGlhbG9nLWNvbnRhaW5lcicpO1xuXG4gIGRpYWxvZ1RyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0cmlnZ2VyLmRhdGFzZXQuZGlhbG9nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRpYWxvZ3MuZm9yRWFjaChkaWFsb2cgPT4gZGlhbG9nLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jbG9zZT0ndHJ1ZSddXCIpXG4gICAgLmZvckVhY2goY2xvc2VUcmlnZ2VyID0+IGNsb3NlVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpYWxvZy5jbGFzc0xpc3QuYWRkKCdoaWRlJykpKSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG4iLCJjb25zdCBUYWIgPSAoKCkgPT4ge1xuICBsZXQgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2R0LXRhYicpO1xuICBjb25zb2xlLmxvZygndGFicyEnLCB0YWJzKTtcbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICB0YWIucXVlcnlTZWxlY3RvcigndWwnKS5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIHRhYi5xdWVyeVNlbGVjdG9yKCcudGFicy1jb250ZW50JykuY2hpbGRyZW5bc2VsZWN0ZWRJbmRleF1cbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIHRhYi5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLmZvckVhY2goaXQgPT4gaXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgQXJyYXkuZnJvbSh0YWIucXVlcnlTZWxlY3RvcignLnRhYnMtY29udGVudCcpLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUYWI7XG4iLCJjb25zdCBOb3RpZmljYXRpb24gPSAoKCkgPT4ge1xuICBjb25zdCBub3RpZmljYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNkdC1ub3RpZmljYXRpb24nKTtcbiAgbm90aWZpY2F0aW9ucy5mb3JFYWNoKChub3RpZmljYXRpb24pID0+IHtcbiAgICBjb25zdCBjbG9zZUJ0biA9IG5vdGlmaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKSB8fCBub3RpZmljYXRpb24ucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsb3NlPSd0cnVlJ11cIik7XG4gICAgaWYgKGNsb3NlQnRuKSB7XG4gICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG4iLCJjb25zdCBVdGlscyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhYmxldFBob25lQnJlYWtwb2ludCA9IDc2ODtcbiAgY29uc3QgZGVza3RvcEJyZWFrUG9pbnQgPSAxMDI0O1xuICByZXR1cm4ge1xuICAgIHRhYmxldFBob25lQnJlYWtwb2ludCxcbiAgICBkZXNrdG9wQnJlYWtQb2ludCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzO1xuIiwiaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgdG9wTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkdC10b3AtbmF2Jyk7XG4gIGNvbnN0IG1vYmlsZVRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2R0LXRvcC1uYXYgLm1vYmlsZS10cmlnZ2VyJyk7XG4gIGNvbnN0IHRvcE5hdmlnYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNkdC10b3AtbmF2IC5uYXZpZ2F0aW9ucycpO1xuICBjb25zdCBzZWNvbmRhcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2R0LXNlY29uZC1uYXYnKTtcblxuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZHQtbmF2ID4gbGknKTtcbiAgY29uc3QgYWxsT3RoZXJOYXZzQ2xvbmVkID0gW107XG4gIGNvbnN0IGFsbE90aGVyTmF2c1BhcmVudCA9IFtdO1xuICBsZXQgc2Vjb25kYXJ5TmF2Q3JlYXRlZCA9IGZhbHNlO1xuXG4gIGxldCBtZW51T3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0IG1vYmlsZU5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbmF2aWdhdGlvbicpO1xuICAvLyBjb25zdCBtb2JpbGVOYXZpZ2F0aW9uTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIC8vIG1vYmlsZU5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobW9iaWxlTmF2aWdhdGlvbk5hdik7XG5cbiAgLyogSW5pdGlhbCBoaWRpbmcgb2YgY2R0LW5hdiBjaGlsZHJlbiAqL1xuICBjb25zdCBuYXZDaGlsZHJlblZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgLy8gY29uc3QgY2xzID0gKHN0YXRlKSA/ICdzaG93JyA6ICdoaWRlJztcbiAgICAvLyBjb25zdCBuYXZDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZHQtbmF2IGxpIHVsJyk7XG4gICAgLy8gbmF2Q2hpbGRyZW4uZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAvLyAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAvLyB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRSZXNwb25zaXZlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBzZWNvbmRhcnlNb2JpbGVOYXZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgc2Vjb25kYXJ5TW9iaWxlTmF2cy5jbGFzc0xpc3QuYWRkKCdjZHQtbGlzdCcsICdjZHQtc2Vjb25kYXJ5Jyk7XG4gICAgY29uc3Qgc2Vjb25kYXJ5TW9iaWxlTmF2c1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzZWNvbmRhcnlNb2JpbGVOYXZzLmFwcGVuZENoaWxkKHNlY29uZGFyeU1vYmlsZU5hdnNVbCk7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IFV0aWxzLmRlc2t0b3BCcmVha1BvaW50KSB7XG4gICAgICAvLyBuYXZDaGlsZHJlblZpc2liaWxpdHkoZmFsc2UpO1xuICAgICAgY29uc3QgYWxsT3RoZXJOYXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNkdC1uYXYtcmVzcG9uc2l2ZScpO1xuICAgICAgYWxsT3RoZXJOYXZzLmZvckVhY2goKG5hdikgPT4ge1xuICAgICAgICBhbGxPdGhlck5hdnNDbG9uZWQucHVzaChuYXYuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgLy8gbGV0IHBhcmVudEVsZW1lbnQgPSBuYXYucGFyZW50RWxlbWVudDtcbiAgICAgICAgYWxsT3RoZXJOYXZzUGFyZW50LnB1c2gobmF2LnBhcmVudEVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghc2Vjb25kYXJ5TmF2Q3JlYXRlZCkge1xuICAgICAgICB0b3BOYXZpZ2F0aW9ucy5mb3JFYWNoKChuYXZpZ2F0aW9uKSA9PiB7XG4gICAgICAgICAgbmF2aWdhdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCduYXYnKS5mb3JFYWNoKChuYXYpID0+IHtcbiAgICAgICAgICAgIGlmICghbmF2LmNsYXNzTGlzdC5jb250YWlucygnbm8tcmVzcG9uc2l2ZScpKSB7XG4gICAgICAgICAgICAgIG1vYmlsZU5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobmF2LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0b3BOYXYuYXBwZW5kQ2hpbGQobW9iaWxlTmF2aWdhdGlvbik7XG4gICAgICAgIG1vYmlsZU5hdmlnYXRpb24uc3R5bGUudG9wID0gYCR7dG9wTmF2Lm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIGFsbE90aGVyTmF2cy5mb3JFYWNoKChuYXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IHVsID4gbGknKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzZWNvbmRhcnlNb2JpbGVOYXZzVWwuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYWxsT3RoZXJOYXZzUGFyZW50W2luZGV4XS5yZW1vdmVDaGlsZChhbGxPdGhlck5hdnNbaW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1vYmlsZU5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5TW9iaWxlTmF2cyk7XG4gICAgICAgIG1vYmlsZU5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbnMnKTtcbiAgICAgICAgc2Vjb25kYXJ5TmF2Q3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzZWNvbmRhcnlOYXYpIHtcbiAgICAgICAgdG9wTmF2LnN0eWxlLmhlaWdodCA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9ucycpWzBdLm9mZnNldEhlaWdodH1weGA7XG4gICAgICB9XG4gICAgICBpZiAoc2Vjb25kYXJ5TmF2Q3JlYXRlZCkge1xuICAgICAgICBuYXZDaGlsZHJlblZpc2liaWxpdHkodHJ1ZSk7XG4gICAgICAgIGFsbE90aGVyTmF2c1BhcmVudC5tYXAoKHBhcmVudCwgaW5kZXgpID0+IHBhcmVudC5hcHBlbmRDaGlsZChhbGxPdGhlck5hdnNDbG9uZWRbaW5kZXhdKSk7XG4gICAgICAgIC8vIHNlY29uZGFyeU1vYmlsZU5hdnMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzZWNvbmRhcnlNb2JpbGVOYXZzKTtcbiAgICAgICAgLy8gc2Vjb25kYXJ5TW9iaWxlTmF2cyA9IG51bGw7XG4gICAgICAgIC8vIHNlY29uZGFyeU5hdkNyZWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgYWxsT3RoZXJOYXZzQ2xvbmVkLmxlbmd0aCA9IDA7XG4gICAgICAgIGFsbE90aGVyTmF2c1BhcmVudC5sZW5ndGggPSAwO1xuICAgICAgfVxuICAgICAgaWYgKG1vYmlsZU5hdmlnYXRpb24pIHtcbiAgICAgICAgbW9iaWxlTmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICB9XG4gICAgICAvLyB0b3BOYXZpZ2F0aW9ucy5mb3JFYWNoKChuYXZpZ2F0aW9uKSA9PiB7XG4gICAgICAvLyAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgLy8gfSk7XG4gICAgICAvLyBpZiAoc2Vjb25kVG9wTmF2KSB7XG4gICAgICAvLyAgIHNlY29uZFRvcE5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAvLyB9XG4gICAgfVxuICB9O1xuICBpZiAodG9wTmF2aWdhdGlvbnMgJiYgdG9wTmF2KSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHNldFJlc3BvbnNpdmVNZW51KCk7XG4gICAgfSk7XG4gICAgc2V0UmVzcG9uc2l2ZU1lbnUoKTtcbiAgfVxuXG4gIGlmIChtb2JpbGVUcmlnZ2VyKSB7XG4gICAgbW9iaWxlVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vYmlsZU5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgLy8gdG9wTmF2aWdhdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgbWVudU9wZW4gPSAhbWVudU9wZW47XG4gICAgfSk7XG4gIH1cblxuICBuYXZJdGVtcy5mb3JFYWNoKChsaXN0SXRlbSkgPT4ge1xuICAgIGNvbnN0IG5hdkNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNkdC1uYXYgbGkgdWwnKTtcbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG5hdkNoaWxkcmVuLmZvckVhY2goKGxzSXRlbSkgPT4ge1xuICAgICAgICBsc0l0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgfSk7XG4gICAgICBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCd1bCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyogY2R0LW5hdiBsaXN0IHVsIGNoaWxkIHNlbGVjdGVkICovXG4gIGNvbnN0IGNoaWxkTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNkdC1saXN0IGxpIHVsIC5jZHQtbGlzdC1pdGVtJyk7XG4gIGNoaWxkTGlzdEl0ZW1zLmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjaGlsZExpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgIH0pO1xuICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gY29uc3QgdG9wTmF2SGlkZUhlaWdodCA9IHRvcE5hdlNjcm9sbEhpZGUub2Zmc2V0SGVpZ2h0O1xuICAvLyBsZXQgY2FsY3VsYXRlZFRvcE5hdkhlaWdodCA9IHRvcE5hdkhpZGVIZWlnaHQ7XG4gIC8vIEhpZGUgb24gU2Nyb2xsXG4gIGNvbnN0IHRvcE5hdlNjcm9sbEhpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2R0LXRvcC1uYXYuaGlkZS1vbi1zY3JvbGwnKTtcbiAgaWYgKHRvcE5hdlNjcm9sbEhpZGUpIHtcbiAgICBjb25zdCBoaWRlT25TY3JvbGxPZmZzZXRUb3AgPSAnNjAnO1xuICAgIGxldCBpc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgbGV0IGxhc3RLbm93blNjcm9sbFBvc2l0aW9uID0gMDtcbiAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xuICAgIGxldCBwcmV2aW91c1Njcm9sbFkgPSAwO1xuXG4gICAgY29uc3Qgc2hvd0hpZGVOYXYgPSAoc2Nyb2xsUG9zKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsUG9zID4gcHJldmlvdXNTY3JvbGxZKSB7XG4gICAgICAgIGlmIChpc1Zpc2libGUgJiYgc2Nyb2xsUG9zID4gaGlkZU9uU2Nyb2xsT2Zmc2V0VG9wKSB7XG4gICAgICAgICAgaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgdG9wTmF2U2Nyb2xsSGlkZS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSA0MDBtcyBlYXNlLW91dCc7XG4gICAgICAgICAgdG9wTmF2U2Nyb2xsSGlkZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTAwJSknO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc1Zpc2libGUpIHtcbiAgICAgICAgdG9wTmF2U2Nyb2xsSGlkZS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSA0MDBtcyBlYXNlLW91dCc7XG4gICAgICAgIHRvcE5hdlNjcm9sbEhpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCknO1xuICAgICAgICBpc1Zpc2libGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcHJldmlvdXNTY3JvbGxZID0gc2Nyb2xsUG9zO1xuICAgIH07XG4gICAgaWYgKCFtZW51T3Blbikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgbGFzdEtub3duU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgaWYgKCF0aWNraW5nKSB7XG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBzaG93SGlkZU5hdihsYXN0S25vd25TY3JvbGxQb3NpdGlvbik7XG4gICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiIsImNvbnN0IERyb3Bkb3duID0gKCgpID0+IHtcbiAgY29uc3QgZHJvcFRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcC10b2dnbGUnKTtcbiAgaWYgKGRyb3BUb2dnbGVzKSB7XG4gICAgY29uc3QgZHJvcERvd25QYWRkaW5nID0gNDtcbiAgICBkcm9wVG9nZ2xlcy5mb3JFYWNoKChkcm9wVG9nZ2xlKSA9PiB7XG4gICAgICBjb25zdCBkcm9wRG93biA9IGRyb3BUb2dnbGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgZHJvcERvd24ucXVlcnlTZWxlY3RvckFsbCgnbGknKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgZHJvcERvd24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgZHJvcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGRyb3BUb2dnbGVSZWN0ID0gZHJvcFRvZ2dsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHRvcFBvc2l0aW9uO1xuICAgICAgICBsZXQgbGVmdFBvc2l0aW9uO1xuICAgICAgICBpZiAoZHJvcERvd24ub2Zmc2V0SGVpZ2h0ICsgZHJvcFRvZ2dsZVJlY3QuYm90dG9tICsgZHJvcERvd25QYWRkaW5nIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgdG9wUG9zaXRpb24gPSBkcm9wVG9nZ2xlLm9mZnNldEhlaWdodCArIGRyb3BEb3duUGFkZGluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3BQb3NpdGlvbiA9IC0oZHJvcERvd24ub2Zmc2V0SGVpZ2h0ICsgZHJvcERvd25QYWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHJvcERvd24ub2Zmc2V0V2lkdGggKyBkcm9wVG9nZ2xlUmVjdC5sZWZ0IDwgd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IC1kcm9wRG93bi5vZmZzZXRXaWR0aCArIGRyb3BUb2dnbGUub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgZHJvcERvd24uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7bGVmdFBvc2l0aW9ufXB4LCAke3RvcFBvc2l0aW9ufXB4LCAwKWA7XG4gICAgICAgIGRyb3BEb3duLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGNsb3NlIGRyb3Bkb3ducyBpZiBjbGlja2VkIG91dHNpZGVcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRyb3BUb2dnbGVzLmZvckVhY2goKGRyb3BUb2dnbGUpID0+IHtcbiAgICAgICAgZHJvcFRvZ2dsZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsImNvbnN0IEFpdiA9ICgoKSA9PiB7XG4gIGNvbnN0IHJldmVhbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWl2XScpO1xuXG4gIGNvbnN0IHJldmVhbEVsZW1lbnQgPSAoZWxlbWVudCwgc2Nyb2xsX3BvcywgZHVyYXRpb24sIHRpbWluZ0Z1bmN0aW9uLCBkZWxheSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgZWxlbWVudFRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgXG4gICAgICAvLyBpZiAoc2Nyb2xsX3BvcyArIHdpbmRvdy5pbm5lckhlaWdodCA+IGVsZW1lbnRUb3AgKyBlbGVtZW50SGVpZ2h0ICogLjQpIHtcbiAgICAgIGlmIChzY3JvbGxfcG9zICsgd2luZG93LmlubmVySGVpZ2h0ID4gZWxlbWVudFRvcCArIGVsZW1lbnRIZWlnaHQpIHtcbiAgICAgICAgXG4gICAgICAgICAgLy8gZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4yLCAwLjEsIDEpXCI7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgXCIgKyBkdXJhdGlvbiArIFwibXMgXCIgKyBkZWxheSArIFwibXMgXCIgKyAgdGltaW5nRnVuY3Rpb247XG4gICAgICAgICAgLy9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMCkgc2NhbGUoMSlcIjtcbiAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgLy99LCAwKTtcbiAgICAgIH1cbiAgfVxuICAvLyBjYWNoZSBlbGVtZW50IHByb3BlcnRpZXNcbiAgY29uc3QgcmV2ZWFsRWxlbWVudHNDYWNoZWQgPSBbXTtcbiAgcmV2ZWFsRWxlbWVudHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgcmV2ZWFsRWxlbWVudHNDYWNoZWQucHVzaCh7XG4gICAgICAgICAgZWxlbWVudDogZWxlbSxcbiAgICAgICAgICBkdXJhdGlvbjogZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZHVyYXRpb24nKSB8fCAxMDAwLFxuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10aW1pbmctZnVuY3Rpb24nKSB8fCAnJyxcbiAgICAgICAgICBkZWxheTogZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVsYXknKSA/IHBhcnNlSW50KGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWRlbGF5JykpIDogMCxcbiAgICAgICAgICBlbGVtZW50SGVpZ2h0OiBlbGVtLm9mZnNldEhlaWdodCxcbiAgICAgICAgICBlbGVtZW50VG9wOiBlbGVtLm9mZnNldFRvcCxcbiAgICAgICAgICBvbkNoaWxkcmVuOiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1haXYtY2hpbGRyZW4nKSA/IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFpdi1jaGlsZHJlbicpIDogZmFsc2UsXG4gICAgICAgICAgY2hpbGRyZW5EZWxheTogZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hpbGRyZW4tZGVsYXknKSB8fCAwXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJldmVhbEVsZW1lbnRzQ2FjaGVkLm9uQ2hpbGRyZW4pO1xuICAgICAgXG4gIH0pO1xuICBjb25zdCByZXZlYWwgPSAoc2Nyb2xsX3BvcykgPT4ge1xuICAgICAgcmV2ZWFsRWxlbWVudHNDYWNoZWQuZm9yRWFjaCgoZWxlbWVudE9iaikgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50T2JqLm9uQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3llcyBjaGlsZHJlbicpO1xuICAgICAgICAgICAgICBlbGVtZW50T2JqLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gKicpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoXCIgKyAxMDAgKyBcInB4KSBzY2FsZSgxKVwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCI1MCUgMTAwJVwiO1xuICAgICAgICAgICAgICAgICAgcmV2ZWFsRWxlbWVudChlbGVtZW50LCBzY3JvbGxfcG9zLCBlbGVtZW50T2JqLmR1cmF0aW9uLCBlbGVtZW50T2JqLnRpbWluZ0Z1bmN0aW9uLCBlbGVtZW50T2JqLmRlbGF5ICsgaW5kZXggKiBlbGVtZW50T2JqLmNoaWxkcmVuRGVsYXkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudE9iai5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWShcIiArIDEwMCArIFwicHgpIHNjYWxlKDEpXCI7XG4gICAgICAgICAgICBlbGVtZW50T2JqLmVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgZWxlbWVudE9iai5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IFwiNTAlIDEwMCVcIjtcbiAgICAgICAgICAgICAgcmV2ZWFsRWxlbWVudChlbGVtZW50T2JqLmVsZW1lbnQsIHNjcm9sbF9wb3MsIGVsZW1lbnRPYmouZHVyYXRpb24sIGVsZW1lbnRPYmoudGltaW5nRnVuY3Rpb24sIGVsZW1lbnRPYmouZGVsYXkpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIFxuICBpZiAocmV2ZWFsRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBsZXQgbGFzdF9rbm93bl9zY3JvbGxfcG9zaXRpb24gPSAwO1xuICAgICAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xuICAgICAgICAgIGxhc3Rfa25vd25fc2Nyb2xsX3Bvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgaWYgKCF0aWNraW5nKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV2ZWFsKGxhc3Rfa25vd25fc2Nyb2xsX3Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV2ZWFsKGxhc3Rfa25vd25fc2Nyb2xsX3Bvc2l0aW9uKTtcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQWl2OyIsImNvbnN0IEJHUGFyYWxsYXggPSAoKCkgPT4ge1xuICBjb25zdCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmctcGFyYWxsYXhdJyk7XG4gIGxldCB0aWNraW5nID0gZmFsc2U7XG4gIGxldCBsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA9IDA7XG4gIGNvbnN0IHJlc2V0UGFyYWxsYXggPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtKSBpdGVtLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXIgMCc7XG4gICAgZWxzZSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xuICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlciAwJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXNldFBhcmFsbGF4KCk7XG5cbiAgY29uc3QgY2FsY3VsYXRlUmFuZ2VWYWx1ZSA9IChvbGRNaW4sIG9sZE1heCwgbmV3TWluLCBuZXdNYXgsIG9sZFZhbHVlKSA9PiB7XG4gICAgY29uc3Qgb2xkUmFuZ2UgPSAob2xkTWF4IC0gb2xkTWluKTtcbiAgICBjb25zdCBuZXdSYW5nZSA9IChuZXdNYXggLSBuZXdNaW4pO1xuICAgIHJldHVybiAoKChvbGRWYWx1ZSAtIG9sZE1pbikgKiBuZXdSYW5nZSkgLyBvbGRSYW5nZSkgKyBuZXdNaW47XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsID0gKHNjcm9sbFBvcykgPT4ge1xuICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsUG9zID4gaGVhZGVyLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHtcbiAgICAgICAgY29uc3Qgb2xkTWluID0gKGhlYWRlci5vZmZzZXRUb3ApIDwgKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpID8gaGVhZGVyLm9mZnNldFRvcFxuICAgICAgICAgIDogaGVhZGVyLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IG9sZE1heCA9IG9sZE1pbiArIGhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHlQb3NpdGlvbiA9IGNhbGN1bGF0ZVJhbmdlVmFsdWUob2xkTWluLCBvbGRNYXgsIDAsIC01MCwgc2Nyb2xsUG9zKTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGBjZW50ZXIgJHt5UG9zaXRpb259cHhgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRQYXJhbGxheChoZWFkZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgbGFzdEtub3duU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzY3JvbGwobGFzdEtub3duU2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCR1BhcmFsbGF4O1xuIiwiXG5jb25zdCBDYXJvdXNlbCA9ICgoKSA9PiB7XG4gIGNvbnN0IHdoaWNoVHJhbnNpdGlvbkV2ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZScpO1xuICAgIGNvbnN0IHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgIE1velRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB9O1xuICAgIGxldCB0cmFuc2l0aW9uRXZlbnQgPSAndHJhbnNpdGlvbmVuZCc7XG4gICAgT2JqZWN0LmtleXModHJhbnNFbmRFdmVudE5hbWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChlbC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHJhbnNpdGlvbkV2ZW50ID0gdHJhbnNFbmRFdmVudE5hbWVzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25FdmVudDtcbiAgfTtcblxuICBsZXQgaW5UcmFuc2l0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHJhbnNFbmRFdmVudE5hbWUgPSB3aGljaFRyYW5zaXRpb25FdmVudCgpO1xuXG4gIGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkdC1jYXJvdXNlbCcpO1xuICBpZiAoY2Fyb3VzZWwpIHtcbiAgICBjb25zdCBjYXJvdXNlbFR5cGUgPSBjYXJvdXNlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2Fyb3VzZWwtdHlwZScpO1xuICAgIGxldCBhdXRvU2xpZGUgPSBmYWxzZTtcbiAgICBpZiAoY2Fyb3VzZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWF1dG8tc2xpZGUnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBhdXRvU2xpZGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdXRvU2xpZGUgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVEZWxheSA9IGNhcm91c2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS1kZWxheScpO1xuXG4gICAgbGV0IGluZmluaXRlID0gZmFsc2U7XG4gICAgaWYgKGNhcm91c2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmZpbml0ZScpID09PSAndHJ1ZScpIHtcbiAgICAgIGluZmluaXRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5maW5pdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbHMgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udHJvbHMgbGknKTtcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cubGVmdCcpO1xuICAgIGNvbnN0IGFycm93UmlnaHQgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cucmlnaHQnKTtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBudW1FbGVtZW50cyA9IHNlY3Rpb25zLmxlbmd0aDtcblxuICAgIGNvbnN0IG9wYWNpdHlEdXJhdGlvbiA9IGNhcm91c2VsVHlwZSA9PT0gJ2ZhZGUnID8gY2Fyb3VzZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9wYWNpdHktZHVyYXRpb24nKSA6IDA7XG5cbiAgICBjb25zdCBjYXJvdXNlbFNsaWRlU2Vuc2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBzZWxlY3RlZCA9IDA7XG5cbiAgICBjb25zdCByZXNldFNlY3Rpb25zID0gKCkgPT4ge1xuICAgICAgaWYgKGNhcm91c2VsVHlwZSA9PT0gJ3NsaWRlLXNlbnNlJykge1xuICAgICAgICBjYXJvdXNlbFNsaWRlU2Vuc2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVTZW5zZS1jb250YWluZXInKTtcbiAgICAgICAgY2Fyb3VzZWwucHJlcGVuZChjYXJvdXNlbFNsaWRlU2Vuc2VDb250YWluZXIpO1xuICAgICAgfVxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNhcm91c2VsVHlwZSA9PT0gJ2ZhZGUnKSB7XG4gICAgICAgICAgc2VjdGlvbi5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgICAgIHNlY3Rpb24uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgc2VjdGlvbi5zdHlsZS50cmFuc2l0aW9uID0gYG9wYWNpdHkgJHtvcGFjaXR5RHVyYXRpb259bXNgO1xuICAgICAgICB9IGVsc2UgaWYgKGNhcm91c2VsVHlwZSA9PT0gJ292ZXJsYXknIHx8IGNhcm91c2VsVHlwZSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgIGlmIChpbmRleCAhPT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlY3Rpb24uc3R5bGUuekluZGV4ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2Fyb3VzZWxUeXBlID09PSAnc2xpZGUtc2Vuc2UnKSB7XG4gICAgICAgICAgc2VjdGlvbi5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgY2Fyb3VzZWxTbGlkZVNlbnNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcnVuQ2Fyb3VzZWwgPSAoaW5kZXgsIGRpcikgPT4ge1xuICAgICAgaWYgKGluVHJhbnNpdGlvbikgcmV0dXJuO1xuICAgICAgaWYgKCFpbmZpbml0ZSAmJiBpbmRleCA9PT0gbnVtRWxlbWVudHMgLSAxKSB7XG4gICAgICAgIGFycm93UmlnaHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycm93UmlnaHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgICBpZiAoIWluZmluaXRlICYmIGluZGV4ID09PSAwKSB7XG4gICAgICAgIGFycm93TGVmdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyb3dMZWZ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgICAgLyogc2V0dGluZyB6LWluZGV4IG9mIGFsbCB0byAwICovXG4gICAgICBpZiAoY2Fyb3VzZWxUeXBlICE9PSAnc2xpZGUtc2Vuc2UnKSB7XG4gICAgICAgIHJlc2V0U2VjdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYXJvdXNlbFR5cGUgPT09ICdzbGlkZS1zZW5zZScpIHtcbiAgICAgICAgY2Fyb3VzZWxTbGlkZVNlbnNlQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDFzJztcbiAgICAgICAgY2Fyb3VzZWxTbGlkZVNlbnNlQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LWluZGV4ICogMjV9JSlgO1xuICAgICAgICBzZWxlY3RlZCA9IGluZGV4O1xuICAgICAgfVxuXG4gICAgICBpZiAoY2Fyb3VzZWxUeXBlID09PSAnc2xpZGUnKSB7XG4gICAgICAgIHNlY3Rpb25zW2luZGV4XS5zdHlsZS56SW5kZXggPSA1O1xuICAgICAgfSBlbHNlIGlmIChjYXJvdXNlbFR5cGUgPT09ICdvdmVybGF5Jykge1xuICAgICAgICBzZWN0aW9uc1tzZWxlY3RlZF0uc3R5bGUuekluZGV4ID0gNztcbiAgICAgICAgc2VjdGlvbnNbaW5kZXhdLnN0eWxlLnpJbmRleCA9IDY7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYXJvdXNlbFR5cGUgPT09ICdvdmVybGF5JyB8fCBjYXJvdXNlbFR5cGUgPT09ICdzbGlkZScpIHtcbiAgICAgICAgaWYgKGluZmluaXRlKSB7XG4gICAgICAgICAgaWYgKChpbmRleCA+IHNlbGVjdGVkICYmIChpbmRleCAhPT0gbnVtRWxlbWVudHMgLSAxKSkgfHwgKGRpciAmJiBkaXIgPT09ICdyaWdodCcpKSB7XG4gICAgICAgICAgICBzZWN0aW9uc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMTAwJSknO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWN0aW9uc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiBzZWxlY3RlZCkge1xuICAgICAgICAgIHNlY3Rpb25zW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDAlKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VjdGlvbnNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRyb2xzLmxlbmd0aCkge1xuICAgICAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgICAgY29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGluVHJhbnNpdGlvbiA9IHRydWU7XG4gICAgICAgIGlmIChjYXJvdXNlbFR5cGUgPT09ICdzbGlkZS1zZW5zZScpIHtcbiAgICAgICAgICBpZiAoY29udHJvbHMubGVuZ3RoKSBjb250cm9sc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBjYXJvdXNlbFNsaWRlU2Vuc2VDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc0VuZEV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0ZWQgPSBpbmRleDtcbiAgICAgICAgICAgIGluVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlY3Rpb25zW3NlbGVjdGVkXS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAxcyc7XG4gICAgICAgICAgaWYgKGNhcm91c2VsVHlwZSA9PT0gJ2ZhZGUnKSB7XG4gICAgICAgICAgICBzZWN0aW9uc1tpbmRleF0uc3R5bGUuekluZGV4ID0gNjtcbiAgICAgICAgICAgIHNlY3Rpb25zW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gaW5kZXg7XG4gICAgICAgICAgICBpblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNhcm91c2VsVHlwZSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgc2VjdGlvbnNbaW5kZXhdLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDFzJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2Fyb3VzZWxUeXBlID09PSAnb3ZlcmxheScgfHwgY2Fyb3VzZWxUeXBlID09PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICBpZiAoaW5maW5pdGUpIHtcbiAgICAgICAgICAgICAgaWYgKChpbmRleCA+IHNlbGVjdGVkICYmIChpbmRleCAhPT0gbnVtRWxlbWVudHMgLSAxKSkgfHwgKGRpciAmJiBkaXIgPT09ICdyaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbc2VsZWN0ZWRdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbc2VsZWN0ZWRdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDEwMCUpJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgIHNlY3Rpb25zW3NlbGVjdGVkXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VjdGlvbnNbc2VsZWN0ZWRdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDEwMCUpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlY3Rpb25zW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XG4gICAgICAgICAgICBzZWN0aW9uc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29udHJvbHMubGVuZ3RoKSBjb250cm9sc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBsZXQgdHJhbnNpdGlvbkNvdW50ZXIgPSAwO1xuICAgICAgICAgIHNlY3Rpb25zW3NlbGVjdGVkXS5hZGRFdmVudExpc3RlbmVyKHRyYW5zRW5kRXZlbnROYW1lLCAoZSkgPT4ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbkNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uQ291bnRlciA9PT0gMSAmJiBlLnByb3BlcnR5TmFtZSA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgICAgICAgICAgc2VjdGlvbnNbc2VsZWN0ZWRdLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgICAgICBzZWN0aW9uc1tzZWxlY3RlZF0uc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICAgICAgICBzZWN0aW9uc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICAgIHNlY3Rpb25zW2luZGV4XS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgICAgICAgIGlmIChjYXJvdXNlbFR5cGUgPT09ICdvdmVybGF5Jykge1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zW3NlbGVjdGVkXS5zdHlsZS56SW5kZXggPSA2O1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zW2luZGV4XS5zdHlsZS56SW5kZXggPSA3O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhcm91c2VsVHlwZSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgICAgIHJlc2V0U2VjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tzZWxlY3RlZF0uc3R5bGUuekluZGV4ID0gNTtcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tpbmRleF0uc3R5bGUuekluZGV4ID0gNjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWxlY3RlZCA9IGluZGV4O1xuICAgICAgICAgICAgICBpblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNsaWRlID0gKCkgPT4ge1xuICAgICAgaW5maW5pdGUgPSB0cnVlO1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgKyAxID49IG51bUVsZW1lbnRzKSB7XG4gICAgICAgICAgaWYgKGluZmluaXRlKSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbnVtRWxlbWVudHMgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRleCA9IHNlbGVjdGVkICsgMTtcbiAgICAgICAgfVxuICAgICAgICBydW5DYXJvdXNlbChpbmRleCk7XG4gICAgICB9LCBzbGlkZURlbGF5KTtcbiAgICB9O1xuICAgIGlmIChhdXRvU2xpZGUpIHtcbiAgICAgIHNsaWRlKCk7XG4gICAgfVxuICAgIGlmIChhcnJvd0xlZnQpIHtcbiAgICAgIGFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSAwICYmICFpbmZpbml0ZSkgcmV0dXJuO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgLSAxIDwgMCkge1xuICAgICAgICAgIGlmIChpbmZpbml0ZSkge1xuICAgICAgICAgICAgaW5kZXggPSBudW1FbGVtZW50cyAtIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5kZXggPSBzZWxlY3RlZCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcnVuQ2Fyb3VzZWwoaW5kZXgsICdsZWZ0Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFycm93UmlnaHQpIHtcbiAgICAgIGFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gbnVtRWxlbWVudHMgLSAxICYmICFpbmZpbml0ZSkgcmV0dXJuO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgKyAxID49IG51bUVsZW1lbnRzKSB7XG4gICAgICAgICAgaWYgKGluZmluaXRlKSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbnVtRWxlbWVudHMgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRleCA9IHNlbGVjdGVkICsgMTtcbiAgICAgICAgfVxuICAgICAgICBydW5DYXJvdXNlbChpbmRleCwgJ3JpZ2h0Jyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0Q2Fyb3VzZWwgPSAoKSA9PiB7XG4gICAgICByZXNldFNlY3Rpb25zKCk7XG4gICAgICBzZWN0aW9uc1tzZWxlY3RlZF0uc3R5bGUuekluZGV4ID0gNjtcbiAgICAgIGlmIChjYXJvdXNlbFR5cGUgPT09ICdmYWRlJykge1xuICAgICAgICBzZWN0aW9uc1tzZWxlY3RlZF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9XG4gICAgICBpZiAoY29udHJvbHMubGVuZ3RoKSBjb250cm9sc1tzZWxlY3RlZF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IHNlbGVjdGVkKSByZXR1cm47XG4gICAgICAgICAgcnVuQ2Fyb3VzZWwoaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbml0Q2Fyb3VzZWwoKTtcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iLCJjbGFzcyBLU2Nyb2xsIHtcbiAgaW5pdChvcHRpb25zKSB7XG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5mcmFtZVRvU2NyZWVuKHRoaXMuZmluZEVuZGluZ0ZyYW1lKCkpICsgdGhpcy53aW5kb3dIZWlnaHR9cHhgO1xuICAgIHRoaXMuc2Nyb2xsYWJsZXMgPSBbXTtcbiAgICBvcHRpb25zLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVJbmZvID0ge1xuICAgICAgICBlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpdGVtLnNlbGVjdG9yKSxcbiAgICAgICAgc3Rvcnk6IEtTY3JvbGwuY3JlYXRlU3RvcnkoaXRlbS5mcmFtZXMpLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2Nyb2xsYWJsZXMucHVzaChlSW5mbyk7XG4gICAgfSk7XG4gICAgdGhpcy5pbml0aWFsaXplUG9zaXRpb25zKCk7XG4gICAgdGhpcy5pbml0RXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuc3RhcnQgPSAwO1xuICB9XG5cbiAgZmluZEVuZGluZ0ZyYW1lKCkge1xuICAgIGxldCBtYXggPSAtOTk5OTk5OTtcbiAgICBsZXQgbWF4RnJhbWUgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5mcmFtZXMpXG4gICAgICAucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IFsuLi5hY2MsIC4uLmN1cnJlbnRdLCBbXSlcbiAgICAgIC5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpZ2l0VmFsID0gS1Njcm9sbC5nZXREaWdpdFZhbHVlKGYuc2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICBpZiAoZGlnaXRWYWwgPiBtYXgpIHtcbiAgICAgICAgICBtYXggPSBkaWdpdFZhbDtcbiAgICAgICAgICBtYXhGcmFtZSA9IGY7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBtYXhGcmFtZS5zY3JvbGxQb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVTdG9yeShmcmFtZXMpIHtcbiAgICAvLyBuZWVkIHRvIGJlIGNoZWNrZWQgaWYgdGhlIGZpcnN0IGZyYW1lJ3Mgc3R5bGVzIGlzIGVtcHR5XG4gICAgZnJhbWVzID0gZnJhbWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtLnN0eWxlcyA9PT0gJycgJiYgaW5kZXggIT09IDApIHtcbiAgICAgICAgaXRlbS5zdHlsZXMgPSBmcmFtZXNbaW5kZXggLSAxXS5zdHlsZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcbiAgICBjb25zdCBtYXhJbmRleCA9IGZyYW1lcy5sZW5ndGg7XG4gICAgY29uc3QgZGlnaXRSZWdleCA9IC9bKy1dP1xcZCsvZztcbiAgICBjb25zdCBzdG9yeSA9IGZyYW1lcy5yZWR1Y2UoKGFjYywgY3VycmVudCwgY3VycmVudEluZGV4KSA9PiB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgbWF4SW5kZXggLSAxKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0ge1xuICAgICAgICAgIHN0YXJ0OiBjdXJyZW50LnNjcm9sbFBvc2l0aW9uLFxuICAgICAgICAgIGVuZDogZnJhbWVzW2N1cnJlbnRJbmRleCArIDFdLnNjcm9sbFBvc2l0aW9uLFxuICAgICAgICAgIHN0eWxlczoge30sXG4gICAgICAgIH07XG4gICAgICAgIGN1cnJlbnQuc3R5bGVzLnNwbGl0KCc7JykuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICBpZiAoc3R5bGUgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZVByb3BzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIC8vIGluaXRpYXRlIGluaXRpYWwgc3R5bGVzXG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHN0eWxlUHJvcHM7XG4gICAgICAgICAgICAgIGFjYy5pbml0aWFsU3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyYW1lLnN0eWxlc1tzdHlsZVByb3BzWzBdXSA9IHtcbiAgICAgICAgICAgIC8vIGluaXRpYWxTdGF0ZTogc3R5bGVQcm9wc1sxXSxcbiAgICAgICAgICAgICAgYmVnaW5Qcm9wOiBbXG4gICAgICAgICAgICAgICAgc3R5bGVQcm9wc1sxXS5yZXBsYWNlKGRpZ2l0UmVnZXgsICckJyksXG4gICAgICAgICAgICAgICAgc3R5bGVQcm9wc1sxXS5tYXRjaChkaWdpdFJlZ2V4KS5tYXAoZGlnaXQgPT4gK2RpZ2l0KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZnJhbWVzW2N1cnJlbnRJbmRleCArIDFdLnN0eWxlcy5zcGxpdCgnOycpLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgaWYgKHN0eWxlICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVQcm9wcyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBmcmFtZS5zdHlsZXNbc3R5bGVQcm9wc1swXV0uZW5kUHJvcCA9IFtcbiAgICAgICAgICAgICAgc3R5bGVQcm9wc1sxXS5yZXBsYWNlKGRpZ2l0UmVnZXgsICckJyksXG4gICAgICAgICAgICAgIHN0eWxlUHJvcHNbMV0ubWF0Y2goZGlnaXRSZWdleCkubWFwKGRpZ2l0ID0+ICtkaWdpdCksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFjYy5mcmFtZXMgPSBbLi4uYWNjLmZyYW1lcywgZnJhbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7IGluaXRpYWxTdHlsZXM6IHt9LCBmcmFtZXM6IFtdIH0pO1xuICAgIHJldHVybiBzdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBjYWxjdWxhdGVSYW5nZVZhbHVlKG9sZE1pbiwgb2xkTWF4LCBuZXdNaW4sIG5ld01heCwgb2xkVmFsdWUpIHtcbiAgICBjb25zdCBvbGRSYW5nZSA9IChvbGRNYXggLSBvbGRNaW4pO1xuICAgIGNvbnN0IG5ld1JhbmdlID0gKG5ld01heCAtIG5ld01pbik7XG4gICAgY29uc3QgbmV3VmFsID0gKCgob2xkVmFsdWUgLSBvbGRNaW4pICogbmV3UmFuZ2UpIC8gb2xkUmFuZ2UpICsgbmV3TWluO1xuICAgIHJldHVybiBNYXRoLmNlaWwobmV3VmFsKTtcbiAgfVxuXG4gIGluaXRpYWxpemVQb3NpdGlvbnMoKSB7XG4gICAgLyogYWRkIGluaXRpYWwgc3R5bGUgKi9cbiAgICB0aGlzLnNjcm9sbGFibGVzLmZvckVhY2goKHNjcm9sbGFibGUpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHNjcm9sbGFibGUuc3RvcnkuaW5pdGlhbFN0eWxlcztcbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHNjcm9sbGFibGUuZWwuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYmV0d2VlbihhLCBiLCBjKSB7XG4gICAgY29uc3QgbWluID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgW2EsIGJdKTtcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heC5hcHBseShNYXRoLCBbYSwgYl0pO1xuICAgIHJldHVybiBjID49IG1pbiAmJiBjIDw9IG1heDtcbiAgfVxuXG4gIHN0YXRpYyBnZXREaWdpdFZhbHVlKGFtb3VudCkge1xuICAgIHJldHVybiArKGFtb3VudC5tYXRjaCgvXFxkKy8pKTtcbiAgfVxuXG4gIGZyYW1lVG9TY3JlZW4oYW1vdW50KSB7XG4gICAgY29uc3QgbnVtID0gS1Njcm9sbC5nZXREaWdpdFZhbHVlKGFtb3VudCk7XG4gICAgaWYgKGFtb3VudC5jaGFyQXQoYW1vdW50Lmxlbmd0aCAtIDEpID09PSAnJScpIHtcbiAgICAgIHJldHVybiAobnVtIC8gMTAwKSAqIHRoaXMud2luZG93SGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgc2Nyb2xsKHNjcm9sbFBvcykge1xuICAgIGxldCBuZXdWYWwgPSAwO1xuICAgIHRoaXMuc2Nyb2xsYWJsZXMuZm9yRWFjaCgoc2Nyb2xsYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IHNjcm9sbGFibGUuc3RvcnkuZnJhbWVzWzBdO1xuICAgICAgY29uc3QgbGFzdEZyYW1lID0gc2Nyb2xsYWJsZS5zdG9yeS5mcmFtZXNbc2Nyb2xsYWJsZS5zdG9yeS5mcmFtZXMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoc2Nyb2xsUG9zIDwgdGhpcy5mcmFtZVRvU2NyZWVuKGZpcnN0RnJhbWUuc3RhcnQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGZpcnN0RnJhbWUuc3R5bGVzKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgY29uc3QgaW50ZXJQb2xhdGVkID0gZmlyc3RGcmFtZS5zdHlsZXNbc3R5bGVdLmJlZ2luUHJvcFswXS5yZXBsYWNlKC9cXCQvZywgKCkgPT4ge1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgbmV3VmFsID0gZmlyc3RGcmFtZS5zdHlsZXNbc3R5bGVdLmJlZ2luUHJvcFsxXVtpXTtcbiAgICAgICAgICAgIHJldHVybiBuZXdWYWw7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2Nyb2xsYWJsZS5lbC5zdHlsZVtzdHlsZV0gPSBpbnRlclBvbGF0ZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPiB0aGlzLmZyYW1lVG9TY3JlZW4obGFzdEZyYW1lLmVuZCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXMobGFzdEZyYW1lLnN0eWxlcykuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgIGNvbnN0IGludGVyUG9sYXRlZCA9IGxhc3RGcmFtZS5zdHlsZXNbc3R5bGVdLmJlZ2luUHJvcFswXS5yZXBsYWNlKC9cXCQvZywgKCkgPT4ge1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgbmV3VmFsID0gbGFzdEZyYW1lLnN0eWxlc1tzdHlsZV0uZW5kUHJvcFsxXVtpXTtcbiAgICAgICAgICAgIHJldHVybiBuZXdWYWw7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2Nyb2xsYWJsZS5lbC5zdHlsZVtzdHlsZV0gPSBpbnRlclBvbGF0ZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZS5zdG9yeS5mcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydEZyYW1lID0gdGhpcy5mcmFtZVRvU2NyZWVuKGZyYW1lLnN0YXJ0KTtcbiAgICAgICAgICBjb25zdCBlbmRGcmFtZSA9IHRoaXMuZnJhbWVUb1NjcmVlbihmcmFtZS5lbmQpO1xuICAgICAgICAgIGlmIChLU2Nyb2xsLmJldHdlZW4oc3RhcnRGcmFtZSwgZW5kRnJhbWUsIHNjcm9sbFBvcykpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZyYW1lLnN0eWxlcykuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgICAgY29uc3QgaW50ZXJQb2xhdGVkID0gZnJhbWUuc3R5bGVzW3N0eWxlXS5iZWdpblByb3BbMF0ucmVwbGFjZSgvXFwkL2csICgpID0+IHtcbiAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgbmV3VmFsID0gS1Njcm9sbC5jYWxjdWxhdGVSYW5nZVZhbHVlKHN0YXJ0RnJhbWUsIGVuZEZyYW1lLFxuICAgICAgICAgICAgICAgICAgZnJhbWUuc3R5bGVzW3N0eWxlXS5iZWdpblByb3BbMV1baV0sXG4gICAgICAgICAgICAgICAgICBmcmFtZS5zdHlsZXNbc3R5bGVdLmVuZFByb3BbMV1baV0sIHNjcm9sbFBvcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHNjcm9sbGFibGUuZWwuc3R5bGVbc3R5bGVdID0gaW50ZXJQb2xhdGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRFdmVudEhhbmRsZXJzKCkge1xuICAgIGxldCBsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgbGFzdEtub3duU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGlmICghdGlja2luZykge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbChsYXN0S25vd25TY3JvbGxQb3NpdGlvbik7XG4gICAgICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS1Njcm9sbDtcbiIsImNsYXNzIFN0ZXBQcm9ncmVzc0JhciB7XG4gIGluaXQoeyBkZWZhdWx0Q29sb3IgPSAnIzk5OScsIGFjdGl2ZUluZGV4ID0gMCB9KSB7XG4gICAgdGhpcy5kZWZhdWx0Q29sb3IgPSBkZWZhdWx0Q29sb3I7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkdC1zdGVwLXByb2dyZXNzYmFyJyk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5jaGlsZHJlbik7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gYCR7MTAwIC8gKGNoaWxkcmVuLmxlbmd0aCAtIDEpfSVgO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0QWN0aXZlSW5kZXgoYWN0aXZlSW5kZXgpO1xuICB9XG5cbiAgZml4QWN0aXZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5hY3RpdmUnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdmaXgtbGFzdC1hY3RpdmUnKSk7XG4gICAgQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkuYWN0aXZlJykpLnNsaWNlKC0xKVswXS5jbGFzc0xpc3QuYWRkKCdmaXgtbGFzdC1hY3RpdmUnKTtcbiAgfVxuXG4gIHNldEFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4KSB7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4IDw9IGFjdGl2ZUluZGV4KVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcbiAgICB0aGlzLmZpeEFjdGl2ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBQcm9ncmVzc0JhcjtcbiIsImltcG9ydCBEaWFsb2cgZnJvbSAnLi9kaWFsb2cnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24nO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IEFpdiBmcm9tICcuL2Fpdic7XG5pbXBvcnQgQkdQYXJhbGxheCBmcm9tICcuL2JnLXBhcmFsbGF4JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCBLU2Nyb2xsIGZyb20gJy4vc2Nyb2xsLXN0b3J5JztcbmltcG9ydCBUYWIgZnJvbSAnLi90YWInO1xuaW1wb3J0IFN0ZXBQcm9ncmVzc0JhciBmcm9tICcuL3N0ZXAtcHJvZ3Jlc3NiYXInO1xuXG4oKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgaWYgKGhsanMpIHtcbiAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuXG5leHBvcnQge1xuICBEaWFsb2csIE5vdGlmaWNhdGlvbiwgTmF2aWdhdGlvbiwgQWl2LCBCR1BhcmFsbGF4LCBDYXJvdXNlbCwgS1Njcm9sbCwgVGFiLCBTdGVwUHJvZ3Jlc3NCYXIsXG4gIERyb3Bkb3duLFxufTtcbiJdLCJuYW1lcyI6WyJkaWFsb2dUcmlnZ2VycyIsImRpYWxvZ3MiLCJzZWxlY3RlZEluZGV4IiwidGFicyIsIkRpYWxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0cmlnZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwiZGlhbG9nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY2xvc2VUcmlnZ2VyIiwiYWRkIiwiTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uIiwiY2xvc2VCdG4iLCJVdGlscyIsIk5hdmlnYXRpb24iLCJ0b3BOYXYiLCJtb2JpbGVUcmlnZ2VyIiwidG9wTmF2aWdhdGlvbnMiLCJzZWNvbmRhcnlOYXYiLCJuYXZJdGVtcyIsImFsbE90aGVyTmF2c0Nsb25lZCIsImFsbE90aGVyTmF2c1BhcmVudCIsInNlY29uZGFyeU5hdkNyZWF0ZWQiLCJtZW51T3BlbiIsIm1vYmlsZU5hdmlnYXRpb24iLCJjcmVhdGVFbGVtZW50Iiwic2V0UmVzcG9uc2l2ZU1lbnUiLCJzZWNvbmRhcnlNb2JpbGVOYXZzIiwic2Vjb25kYXJ5TW9iaWxlTmF2c1VsIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZGVza3RvcEJyZWFrUG9pbnQiLCJhbGxPdGhlck5hdnMiLCJuYXYiLCJwdXNoIiwiY2xvbmVOb2RlIiwicGFyZW50RWxlbWVudCIsIm5hdmlnYXRpb24iLCJjb250YWlucyIsInRvZ2dsZSIsInN0eWxlIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwiaW5kZXgiLCJpdGVtIiwicmVtb3ZlQ2hpbGQiLCJoZWlnaHQiLCJtYXAiLCJwYXJlbnQiLCJsZW5ndGgiLCJsaXN0SXRlbSIsIm5hdkNoaWxkcmVuIiwibHNJdGVtIiwiY2hpbGRMaXN0SXRlbXMiLCJ0b3BOYXZTY3JvbGxIaWRlIiwiaXNWaXNpYmxlIiwibGFzdEtub3duU2Nyb2xsUG9zaXRpb24iLCJ0aWNraW5nIiwicHJldmlvdXNTY3JvbGxZIiwic2Nyb2xsWSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFBvcyIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJEcm9wZG93biIsImRyb3BUb2dnbGVzIiwiZHJvcFRvZ2dsZSIsImRyb3BEb3duIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImRyb3BUb2dnbGVSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wUG9zaXRpb24iLCJsZWZ0UG9zaXRpb24iLCJib3R0b20iLCJpbm5lckhlaWdodCIsIm9mZnNldFdpZHRoIiwibGVmdCIsIkFpdiIsInJldmVhbEVsZW1lbnRzIiwicmV2ZWFsRWxlbWVudCIsImVsZW1lbnQiLCJzY3JvbGxfcG9zIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlbGF5IiwiZWxlbWVudEhlaWdodCIsImVsZW1lbnRUb3AiLCJvZmZzZXRUb3AiLCJvcGFjaXR5IiwicmV2ZWFsRWxlbWVudHNDYWNoZWQiLCJlbGVtIiwiZ2V0QXR0cmlidXRlIiwicGFyc2VJbnQiLCJsb2ciLCJvbkNoaWxkcmVuIiwicmV2ZWFsIiwiZWxlbWVudE9iaiIsInRyYW5zZm9ybU9yaWdpbiIsImNoaWxkcmVuRGVsYXkiLCJsYXN0X2tub3duX3Njcm9sbF9wb3NpdGlvbiIsIkJHUGFyYWxsYXgiLCJoZWFkZXJzIiwicmVzZXRQYXJhbGxheCIsImJhY2tncm91bmRQb3NpdGlvbiIsImhlYWRlciIsIm9sZE1pbiIsIm9sZE1heCIsInlQb3NpdGlvbiIsIm5ld01pbiIsIkNhcm91c2VsIiwiZWwiLCJ0cmFuc0VuZEV2ZW50TmFtZXMiLCJ0cmFuc2l0aW9uRXZlbnQiLCJpblRyYW5zaXRpb24iLCJ0cmFuc0VuZEV2ZW50TmFtZSIsImtleXMiLCJrZXkiLCJ1bmRlZmluZWQiLCJjYXJvdXNlbCIsImNhcm91c2VsVHlwZSIsImF1dG9TbGlkZSIsInNsaWRlRGVsYXkiLCJpbmZpbml0ZSIsImNvbnRyb2xzIiwiYXJyb3dMZWZ0IiwiYXJyb3dSaWdodCIsInNlY3Rpb25zIiwibnVtRWxlbWVudHMiLCJvcGFjaXR5RHVyYXRpb24iLCJjYXJvdXNlbFNsaWRlU2Vuc2VDb250YWluZXIiLCJzZWxlY3RlZCIsInJlc2V0U2VjdGlvbnMiLCJwcmVwZW5kIiwic2VjdGlvbiIsInpJbmRleCIsInBvc2l0aW9uIiwicnVuQ2Fyb3VzZWwiLCJkaXIiLCJkaXNwbGF5IiwiY29udHJvbCIsInRyYW5zaXRpb25Db3VudGVyIiwicHJvcGVydHlOYW1lIiwiS1Njcm9sbCIsIm9wdGlvbnMiLCJ3aW5kb3dIZWlnaHQiLCJ0aGlzIiwiZnJhbWVUb1NjcmVlbiIsImZpbmRFbmRpbmdGcmFtZSIsInNjcm9sbGFibGVzIiwiaXRlbXMiLCJlSW5mbyIsInNlbGVjdG9yIiwiY3JlYXRlU3RvcnkiLCJmcmFtZXMiLCJpbml0aWFsaXplUG9zaXRpb25zIiwiaW5pdEV2ZW50SGFuZGxlcnMiLCJzdGFydCIsIm1heCIsIm1heEZyYW1lIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudCIsImYiLCJkaWdpdFZhbCIsImdldERpZ2l0VmFsdWUiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbGFibGUiLCJzdHlsZXMiLCJzdG9yeSIsImluaXRpYWxTdHlsZXMiLCJhbW91bnQiLCJudW0iLCJjaGFyQXQiLCJmaXJzdEZyYW1lIiwibGFzdEZyYW1lIiwiX3RoaXMyIiwiaSIsImludGVyUG9sYXRlZCIsImJlZ2luUHJvcCIsInJlcGxhY2UiLCJlbmQiLCJlbmRQcm9wIiwiZnJhbWUiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJiZXR3ZWVuIiwiY2FsY3VsYXRlUmFuZ2VWYWx1ZSIsInNjcm9sbCIsIm1heEluZGV4IiwiZGlnaXRSZWdleCIsImN1cnJlbnRJbmRleCIsInNwbGl0Iiwic3R5bGVQcm9wcyIsInZhbHVlIiwibWF0Y2giLCJkaWdpdCIsIm5ld01heCIsIm9sZFZhbHVlIiwibmV3VmFsIiwiTWF0aCIsImNlaWwiLCJhIiwiYiIsImMiLCJtaW4iLCJhcHBseSIsIlRhYiIsInRhYiIsImNoaWxkcmVuIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJpdCIsImZyb20iLCJjaGlsZCIsIlN0ZXBQcm9ncmVzc0JhciIsImRlZmF1bHRDb2xvciIsImFjdGl2ZUluZGV4IiwiQXJyYXkiLCJ3aWR0aCIsInNldEFjdGl2ZUluZGV4Iiwic2xpY2UiLCJmaWx0ZXIiLCJmaXhBY3RpdmUiLCJibG9jayIsImhsanMiLCJoaWdobGlnaHRCbG9jayJdLCJtYXBwaW5ncyI6Im9DQUFB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