(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ExactSolutions/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ExactSolutions/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ExactSolutions/portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navLinks = [
    {
        href: "#home",
        label: "Home"
    },
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#lab",
        label: "Lab"
    }
];
function Navigation() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const onScroll = {
                "Navigation.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["Navigation.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll);
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(scrolled ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.05]" : "bg-transparent"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-1.5 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-bold text-xl tracking-tight group-hover:text-[#c5ff41] transition-colors",
                                children: "WA"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#c5ff41] text-2xl font-bold leading-none",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-full px-2 py-1.5",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "px-4 py-1.5 text-sm text-[#888] hover:text-white transition-colors rounded-full hover:bg-white/[0.06]",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-[#c5ff41] animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#888] text-xs",
                                        children: "Available for work"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden text-[#888] hover:text-white transition-colors",
                                onClick: ()=>setMobileOpen(!mobileOpen),
                                "aria-label": "Toggle menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-[#0f0f0f] border-b border-white/[0.06] px-6 pb-4",
                children: [
                    navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: ()=>setMobileOpen(false),
                            className: "block py-3 text-sm text-[#888] hover:text-white transition-colors border-b border-white/[0.04] last:border-0",
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-[#c5ff41] animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#888] text-xs",
                                children: "Available for work"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/Navigation.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Navigation, "moUcU2J4YHazgmQMN2Ea+ACEGYM=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ExactSolutions/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ExactSolutions/portfolio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ExactSolutions/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const roles = [
    "Full Stack Developer",
    "Backend Systems Engineer",
    "API Architect"
];
function HeroSection() {
    _s();
    const [roleIndex, setRoleIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [charIndex, setCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const current = roles[roleIndex];
            let timeout;
            if (!deleting && charIndex < current.length) {
                timeout = setTimeout({
                    "HeroSection.useEffect": ()=>setCharIndex({
                            "HeroSection.useEffect": (i)=>i + 1
                        }["HeroSection.useEffect"])
                }["HeroSection.useEffect"], 60);
            } else if (!deleting && charIndex === current.length) {
                timeout = setTimeout({
                    "HeroSection.useEffect": ()=>setDeleting(true)
                }["HeroSection.useEffect"], 2000);
            } else if (deleting && charIndex > 0) {
                timeout = setTimeout({
                    "HeroSection.useEffect": ()=>setCharIndex({
                            "HeroSection.useEffect": (i)=>i - 1
                        }["HeroSection.useEffect"])
                }["HeroSection.useEffect"], 30);
            } else if (deleting && charIndex === 0) {
                setDeleting(false);
                setRoleIndex({
                    "HeroSection.useEffect": (i)=>(i + 1) % roles.length
                }["HeroSection.useEffect"]);
            }
            setDisplayed(current.slice(0, charIndex));
            return ({
                "HeroSection.useEffect": ()=>clearTimeout(timeout)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        charIndex,
        deleting,
        roleIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative min-h-screen flex items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[20%] right-[15%] w-[600px] h-[600px] bg-[#c5ff41]/[0.04] rounded-full blur-[120px] animate-pulse-glow"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-[#00e5ff]/[0.03] rounded-full blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-[#c5ff41]/[0.03] rounded-full blur-[80px]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-[0.015]",
                style: {
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-2 lg:order-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 bg-[#c5ff41]/10 border border-[#c5ff41]/20 rounded-full px-4 py-1.5 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-[#c5ff41]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#c5ff41] text-xs font-medium tracking-wide uppercase",
                                            children: "Available for new opportunities"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-4",
                                    children: [
                                        "Hello! I Am",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#c5ff41]",
                                            children: "Hassan"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        "Tariq"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 h-8 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#888] text-lg font-medium",
                                        children: [
                                            displayed,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block w-0.5 h-5 bg-[#c5ff41] ml-0.5 animate-pulse align-middle"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#555] text-sm max-w-sm mb-10 leading-relaxed italic",
                                    children: "Full Stack Developer building reliable web applications, APIs, and business workflows for real-world products."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-3 mb-14",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#lab",
                                            className: "px-7 py-3 bg-[#c5ff41] text-[#080808] font-semibold text-sm rounded-full hover:bg-[#d4ff6a] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,255,65,0.25)]",
                                            children: "My Portfolio →"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "px-7 py-3 border border-white/10 text-[#999] text-sm rounded-full hover:border-white/20 hover:text-white hover:bg-white/[0.04] transition-all",
                                            children: "Contact Me"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-8",
                                    children: [
                                        {
                                            value: "4+",
                                            label: "Years Exp."
                                        },
                                        {
                                            value: "5+",
                                            label: "Projects"
                                        },
                                        {
                                            value: "4",
                                            label: "Companies"
                                        }
                                    ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6",
                                            children: [
                                                i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-px h-8 bg-white/[0.08]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-white",
                                                            children: stat.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[#555] text-xs mt-0.5",
                                                            children: stat.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-1 lg:order-2 relative flex justify-center items-center min-h-[380px] sm:min-h-[480px] px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-[#c5ff41]/10 animate-spin-slow"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full bg-[#c5ff41]/[0.07] blur-[60px] animate-pulse-glow"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full bg-[#00e5ff]/[0.05] blur-[50px]"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 w-full max-w-[500px] h-auto py-8 sm:h-[400px] sm:py-0 rounded-[24px] overflow-hidden border border-white/[0.08] bg-gradient-to-br from-[#141414] to-[#0a0a0a] flex flex-col items-center justify-center animate-float shadow-[0_32px_64px_rgba(0,0,0,0.5)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-43 h-42 rounded-full overflow-hidden border-2 border-[#c5ff41]/30 mb-5 shadow-[0_0_30px_rgba(197,255,65,0.15)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/hassan-tariq.png",
                                                alt: "Hassan Tariq",
                                                width: 132,
                                                height: 132,
                                                className: "w-full h-full object-cover",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white font-bold text-lg mb-1",
                                            children: "Hassan Tariq"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#666] text-sm mb-6",
                                            children: "Full Stack Developer"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 justify-center px-6",
                                            children: [
                                                "Node.js",
                                                "Next.js",
                                                "TypeScript",
                                                "APIs"
                                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-[#888] bg-white/[0.05] border border-white/[0.06] rounded-full px-2.5 py-1",
                                                    children: t
                                                }, t, false, {
                                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute z-20 bottom-5 right-6 bg-[#0f0f0f] border border-white/[0.08] rounded-xl px-3 py-1 text-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[#c5ff41] font-semibold",
                                                children: "🇵🇰 Pakistan"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs tracking-widest uppercase",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ExactSolutions$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-8 bg-gradient-to-b from-[#444] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/ExactSolutions/portfolio/src/components/HeroSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "bOqO202HYS0cx0Pme7NWfNMKNq0=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_ExactSolutions_portfolio_src_components_fe2349e7._.js.map