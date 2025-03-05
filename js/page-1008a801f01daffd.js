(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[61], {
    1803 : function(e, s, t) {
      Promise.resolve().then(t.bind(t, 8534))
    },
    8534 : function(e, s, t) {
      "use strict";
      t.r(s),
      t.d(s, {
      default:
        function() {
          return et
        }
      });
      var a = t(7437),
      i = t(6648),
      l = t(2265),
      n = t(1572),
      r = t(7776),
      o = t(1097),
      c = t(8087);
      let d = ()=>{
        let e = (0, l.useRef)(),
        [s, t] = (0, l.useState)(""),
        i = (0, c.useTranslations)("Cta"),
        d = a =>{
          a.preventDefault();
          let l = e.current.message.value;
          if (! (0, o.G)(s)) {
            r.A.error(i("email_field"), {
              position: "bottom-center",
              duration: 4e3
            });
            return
          }
          if ("" === l.trim()) {
            r.A.error(i("message_field"), {
              position: "bottom-center",
              duration: 4e3
            });
            return
          }
          n.ZP.sendForm("service_dlgsppw", "template_7o9zlq5", e.current, {
            publicKey: "ZdnViU2mPuLEqMXzX"
          }).then(()=>{},
          e =>{}),
          e.current.reset(),
          t(""),
          r.A.success(i("sent"), {
            position: "bottom-center",
            duration: 1e4
          })
        };
        return (0, a.jsxs)("form", {
          ref: e,
          onSubmit: d,
          className: "flex flex-col gap-7  dark:bg-[#12121285] bg-slate-100 rounded-[37px] p-3 outline-1 outline-offset-4 outline  outline-black/20 dark:outline-white/20",
          children: [(0, a.jsxs)("div", {
            className: "flex flex-col gap-4 py-4",
            children: [(0, a.jsx)("h2", {
              className: "text-4xl sm:text-2xl xs:text-xl whitespace-pre-line",
              children: i("title")
            }), (0, a.jsx)("h6", {
              className: "text-xs sm:text-[10px] xs:text-[9px] whitespace-pre-line font-light text-comment-grey dark:text-[#c0c0c0] subpixel-antialiased",
              children: i("subtitle")
            })]
          }), (0, a.jsxs)("fieldset", {
            className: "flex  gap-2 flex-col sm:text-xs  xs:text-[10px",
            children: [(0, a.jsxs)("label", {
              className: "text-nowrap",
              htmlFor: "email",
              children: [(0, a.jsx)("span", {
                className: "text-pink-500",
                children: "const"
              }), " email =", " "]
            }), (0, a.jsx)("input", {
              value: s,
              onChange: e =>t(e.target.value),
              id: "email",
              name: "user_email",
              className: "dark:bg-white/5  bg-black/10 border-none outline-none w-full rounded"
            })]
          }), (0, a.jsxs)("fieldset", {
            className: "flex gap-2 flex-col sm:text-xs xs:text-[10px]",
            children: [(0, a.jsxs)("span", {
              className: "text-nowrap",
              htmlFor: "message",
              children: [(0, a.jsx)("span", {
                className: "text-pink-500",
                children: "const"
              }), " ", i("message"), " ="]
            }), (0, a.jsx)("textarea", {
              name: "message",
              id: "message",
              className: "dark:bg-white/5 bg-black/10 border-none outline-none textarea resize-none w-full rounded",
              rows: 5
            })]
          }), (0, a.jsxs)("a", {
            onClick: e =>d(e),
            className: "w-[50%] bg-[#cccccc24] dark:bg-[#00000024] shadow-md shadow-[#ffffff33] outline outline-1 2xl:w-[66%] xl:w-[98%] xl:mx-auto mx-auto pr-2 py-2 cursor-pointer group items-center flex relative text-center rounded-full hover:opacity-80 h-full align-middle",
            children: [(0, a.jsx)("span", {
              className: "mx-auto ml-8",
              children: i("send")
            }), (0, a.jsx)("div", {
              className: "dark:bg-white bg-black  rounded-full h-6 w-14 flex items-center justify-end px-2",
              children: (0, a.jsx)("div", {
                className: "svgMask betterhover:group-hover:translate-x-1 transition-all group-active:!translate-x-2 cursor-pointer size-6 rotate-180  dark:bg-black bg-white",
                style: {
                  maskImage: 'url("images/apache_spark.png")'
                  
                }
              })
            })]
          })]
        })
      };
      var x = t(1516),
      m = t.n(x);
      function p() {
        let[e, s] = (0, l.useState)(),
        [t, i] = (0, l.useState)(),
        n = (0, c.useTranslations)("Cta");
        return (0, a.jsx)("section", {
          id: "contact",
          children: (0, a.jsxs)("div", {
            className: "grid mt-24 xl:grid-cols-1 xl:grid-rows-1 justify-stretch grid-cols-7 grid-rows-2 gap-8  rounded-[64px]",
            children: [(0, a.jsx)("div", {
              className: "row-span-2 xl:row-span-1 col-span-3 xl:col-span-1",
              children: (0, a.jsx)(d, {})
            }), (0, a.jsxs)("div", {
              className: "dark:bg-[#12121285] bg-slate-100 xl:col-span-1 col-span-4 rounded-[40px] flex flex-col justify-between py-5 px-5 outline-1 outline outline-offset-4 outline-black/20 dark:outline-white/20 ",
              children: [(0, a.jsxs)("span", {
                className: "text-3xl sm:text-2xl xs:text-xl leading-snug xl:mb-8",
                children: [n("place1"), " ", (0, a.jsx)("br", {}), n("place2"), " \uD83E\uDD19\uD83C\uDFFE"]
              })
              , 
              (0, a.jsxs)("div", {
                className: "flex gap-4",
                children: [(0, a.jsx)("a", {
                  href: "mailto:yeshwanthgowdsreerama@gmail.com",
                  target: "_blank",
                  className: "size-[80%]  duration-300  bg-[black] transition-all hover:betterhover:opacity-70  outline rounded-[40px] p-4 justify-center",
                  children: (0, a.jsx)("img", {
                    src: "images/gmail_222.png",
                    alt: "Whatsapp",
                    className: "w-10 h-10 mx-auto opacity-50"
                  })
                })
                // , 
                // (0, a.jsx)("a", {
                //   href: "tel:+55(71) 98188-6126",
                //   className: "size-9 w-20 group rounded-full  duration-500 p-1 bg-[#a64ca6]  hover:betterhover:opacity-70",
                //   children: (0, a.jsx)("div", {
                //     style: {
                //       maskImage: 'url("images/phone.svg")',
                //       maskSize: "auto"
                //     },
                //     className: "block size-full bg-white svgMask"
                //   })
                // })
                , 
                (0, a.jsx)("a", {
                  href: "https://wa.me/7373730226",
                  target: "_blank",
                  className: "size-[80%]  duration-300  bg-[rgb(58, 126, 99)] transition-all hover:betterhover:opacity-70  outline rounded-[40px] p-4 justify-center",
                  children: (0, a.jsx)("img", {
                    src: "images/whatsapp.svg",
                    alt: "Whatsapp",
                    className: "w-10 h-10 mx-auto opacity-50"
                  })
                })
                // , 
                // (0, a.jsx)("a", {
                //   href: "https://wa.me/5571981886126",
                //   target: "_blank",
                //   className: "size-9 w-20 transition-all duration-500 bg-[#25d366]  hover:betterhover:opacity-70 rounded-full p-1 group cursor-pointer",
                //   children: (0, a.jsx)("div", {
                //     style: {
                //       maskImage: 'url("images/zap.svg")',
                //       maskSize: "auto"
                //     },
                //     className: "block size-full bg-white svgMask"
                //   })
                // })
              
              ]
              })]
            }), (0, a.jsxs)("div", {
              className: "dark:bg-[#12121285] bg-slate-100 text-2xl p-5 size-full col-span-3 xl:col-span-1 rounded-[40px] outline-1 outline outline-offset-4 outline-black/20 dark:outline-white/20",
              children: [(0, a.jsxs)("span", {
                className: "sm:text-2xl xs:text-xl",
                children: [n("find"), ":"]
              }), (0, a.jsxs)("div", {
                className: "flex gap-6 size-full py-4 justify-center",
                children: [(0, a.jsx)("a", {
                  href: "https://www.linkedin.com/in/yeshwanth-sreerama/",
                  target: "_blank",
                  className: "size-[80%]  duration-500  bg-[black] transition-all hover:betterhover:opacity-70  outline rounded-[40px] p-4",
                  children: (0, a.jsx)("img", {
                    src: "images/linkedin-icon.svg",
                    alt: "LinkedIn",
                    className: "w-20 h-20 mx-auto opacity-50"
                  })
                })
                // , (0, a.jsx)("a", 
                //   {
                //     href: "https://www.linkedin.com/in/yeshwanth-sreerama/",
                //     target: "_blank",
                //     className: "size-[80%]  duration-300  bg-[rgb(10,102,194)] transition-all hover:betterhover:opacity-70  outline rounded-[40px] p-4",
                //     children: (0, a.jsx)("img", {
                //       src: "images/angular.png",
                //       alt: "LinkedIn",
                //       className: "w-30 h-20"  
                //   })
                // })
              ]
              })]
            }), (0, a.jsx)("div", {
              style: {
                backgroundImage: 'url("images/clouds.gif")'
              },
              className: "".concat(m().neon_effect, " xl:hidden")
            })]
          })
        })
      }
      function u(e) {
        let {
          img: s,
          skill: t
        } = e;
        return (0, a.jsxs)("div", {
          className: "bg-comment-grey/10 outline outline-1  text-comment-grey rounded-[9px] w-fit gap-3 capitalize  flex items-center  font-semibold px-3 py-1 dark:shadow-white/5 shadow-inner",
          children: [(0, a.jsx)(i.
        default, {
            src: s,
            width: 12,
            height: 12,
            alt: t
          }), t]
        })
      }
      var g = e =>{
        let {
          title: s,
          company: t,
          date: i,
          obligations: l,
          achievements: n,
        } = e,
        o = (0, c.useTranslations)("Experience");
        return (0, a.jsxs)("div", {
          className: "outline outline-1 outline-black dark:outline-white p-[6px] rounded-[30px] bg-black/5 dark:bg-[#ffffff07]",
          children: [(0, a.jsxs)("div", {
            className: "flex items-start justify-between rounded-t-3xl rounded-b-xl  pb-3 pt-1 px-4 bg-black/80 dark:bg-white/90 text-white dark:text-black",
            children: [(0, a.jsxs)("span", {
              className: "flex flex-col",
              children: [(0, a.jsxs)("span", {
                className: "text-xl lg:text-sm leading-5",
                children: [s, " ", (0, a.jsxs)("span", {
                  className: "invisible md:visible text-[10px]",
                  children: ["(", i, ")"]
                })]
              }), (0, a.jsx)("span", {
                className: "text-comment-grey text-xs",
                children: t
              })]
            }), (0, a.jsx)("span", {
              className: "md:hidden",
              children: i
            })]
          }), (0, a.jsxs)("div", {
            className: "text-sm lg:text-xs xxs:text-[10px] ",
            children: [
              (0, a.jsxs)("span", {
                children: ["\uD83C\uDF31 ", o("Responsibilities.title")]
              }), (0, a.jsx)("ul", {
                className: "list-disc pl-5 space-y-2 my-2",
                children: l.map((e, s) =>(0, a.jsxs)("li", {
                  className: "flex items-start",
                  children: [(0, a.jsx)("span", {
                    className: "mr-2",
                    children: "◉"
                  }), (0, a.jsx)("span", {
                    children: e
                  })]
                },
                s))
              }), n && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("span", {
                  children: ["✨ ", o("Achievements.title")]
                }), (0, a.jsx)("ul", {
                  className: "list-disc pl-5 space-y-2 my-2 ",
                  children: n.map((e, s) =>(0, a.jsxs)("li", {
                    className: "flex items-start",
                    children: [(0, a.jsx)("span", {
                      className: "mr-2",
                      children: "◉"
                    }), (0, a.jsx)("span", {
                      children: e
                    })]
                  },
                  s))
                })]
              })]
          })]
        })
      };
      function h() {
        let e = (0, c.useTranslations)("Experience"),
        s = {
          title: e("Front.title"),
          company: "Avventis Tech",
          date: e("date.current"),
          obligations: [e("Responsibilities.point1"), e("Responsibilities.point2"), e("Responsibilities.point3")],
          achievements: [e("Achievements.point1"), e("Achievements.point2"), e("Achievements.point3")],
        },
        u = {
            title: e("Front_2.title"),
            company:  "Siliconbricks Technologies",
            date: "Apr 2019 / Nov 2021",
            obligations: [e("Responsibilities.point6"), e("Responsibilities.point7"), e("Responsibilities.point8")],
            achievements: [e("Achievements.point6"), e("Achievements.point7"), e("Achievements.point8")],
          },
        t = {
          title: e("Intern.title"),
          company: "Texas State University",
          date: e("date.intern"),
          obligations: [e("Responsibilities.point4"), e("Responsibilities.point5")],
        };
        return (0, a.jsxs)("section", {
          className: "relative scroll-mt-16 ",
          id: "experience",
          children: [(0, a.jsx)("div", {
            className: "mb-7 flex gap-2 flex-col",
            children: (0, a.jsx)("h2", {
              className: "text-4xl lg:text-3xl text-center  sm:text-2xl font-light text-wrap leading-tight",
              children: e("title")
            })
          }), (0, a.jsxs)("div", {
            className: "flex flex-col divide-y-[1px] gap-6",
            children: [(0, a.jsx)(g, {...s
            }), (0, a.jsx)(g, {...t
            }), (0, a.jsx)(g, {...u
            })]
          })]
        })
      }
      function b() {
        let e = (0, c.useTranslations)("Footer");
        return (0, a.jsxs)("footer", {
          className: "text-comment-grey",
          children: [(0, a.jsxs)("div", {
            className: "flex justify-between mb-8",
            children: [(0, a.jsxs)("div", {
              className: "sm:text-xs",
              children: [(0, a.jsxs)("span", {
                children: ["//", " ", e("developed")]
              }), (0, a.jsxs)("span", {
                className: "text-function animate-pulse",
                children: [" " + e("thanks"), "();"]
              })]
            }), (0, a.jsx)("div", {
              onClick: ()=>{
                window.scrollTo(0, 0)
              },
              className: "bg-accent-orange text-white dark:text-black dark:bg-white hover:opacity-85 rounded-full w-fit px-1 cursor-pointer shadow-lg shadow-accent-orange/30 dark:shadow-white/10 min-h-10",
              children: "^"
            })]
          }), (0, a.jsxs)("p", {
            className: "mb-[-30px] flex items-center gap-2 sm:text-xs",
            children: [(0, a.jsx)("span", {
              className: "leading-[1px]",
              children: "\xa9"
            }), " 2025 Yeshwanth Gowd Sreerama. ", e("rights"), "."]
          })]
        })
      }
      var f = t(9321),
      v = t(9512);
      function j() {
        let[e, s] = (0, l.useState)(!1); (0, l.useEffect)(()=>s(!0), []);
        let {
          setTheme: t,
          resolvedTheme: i
        } = (0, v.F)();
        return (0, c.useTranslations)("Hero"),
        (0, a.jsxs)("a", {
          className: "group",
          onClick: ()=>t("dark" === i ? "light": "dark"),
          children: [(0, a.jsx)("span", {
            style: {
              maskImage: "url(".concat(e ? "dark" === i ? "images/sun.svg": "images/moon.svg": "images/sun.svg", ")")
              
            },
            className: "block mx-auto size-[18px] bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"
          }), " "]
        })
      }
      var k = t(4839),
      w = t(6463);
      let {
        Link: y,
        getPathname: N,
        redirect: _,
        usePathname: z,
        useRouter: E
      } = (0, t(5758).QZ)({
        locales: ["en", "pt-BR"],
        pathnames: {
          "/": "/",
          "/pathnames": {
            en: "/pathnames",
            de: "/pfadnamen"
          }
        },
        localePrefix: void 0
      });
      function C(e) {
        let {
          children: s,
          defaultValue: t,
          label: i
        } = e,
        n = E(),
        [r, o] = (0, l.useTransition)(),
        c = z(),
        d = (0, w.useParams)(),
        x = (0, l.useRef)(null);
        return (0, a.jsxs)("label", {
          className: (0, k.Z)("relative  flex items-center align-middle cursor-pointer hover:opacity-80 group", r && "transition-opacity [&:disabled]:opacity-30"),
          children: [(0, a.jsx)("p", {
            className: "sr-only",
            children: i
          }), (0, a.jsx)("div", {
            style: {
              maskImage: 'url("'.concat("/_next/static/media/globe.9e07f575.svg", '")')
            },
            className: "block size-5 group-hover:opacity-80 bg-black dark:bg-white svgMask absolute top-[2px]"
          }), (0, a.jsx)("select", {
            ref: x,
            style: {
              direction: "rtl"
            },
            className: "inline-flex items-center justify-center appearance-none cursor-pointer bg-transparent rounded-xl  pl-6 focus-visible:outline-none direc z-10",
            defaultValue: t,
            disabled: r,
            onChange: function(e) {
              let s = e.target.value;
              o(() =>{
                n.replace({
                  pathname: c,
                  params: d
                },
                {
                  locale: s.replace("_", "-")
                })
              })
            },
            children: s
          })]
        })
      }
      function S() {
        let e = (0, c.useTranslations)("LocaleSwitcher"),
        s = (0, c.useLocale)();
        return (0, a.jsx)(C, {
          defaultValue: s.replace("-", "_"),
          label: e("label"),
          children: ["en", "pt_BR"].map(s =>(0, a.jsx)("option", {
            value: s,
            className: "bg-black text-white text-center",
            children: e("locale", {
              locale: s
            })
          },
          s))
        })
      }
      var F = t(750);
      let M = () =>{ (0, c.useTranslations)("");
        let[e, s] = (0, l.useState)({
          left: 0,
          width: 0,
          opacity: 0
        });
        return (0, a.jsxs)("ul", {
          onMouseLeave: () =>{
            s(e =>({...e,
              opacity: 0
            }))
          },
          className: "z-20 mx-auto flex w-fit rounded-full relative outline-[1px] outline outline-offset-2 bg-black/5 outline-black/20 dark:bg-white/5 p-1 dark:outline-white/20",
          children: [(0, a.jsx)(I, {
            setPosition: s,
            children: "home"
          }), (0, a.jsx)(I, {
            setPosition: s,
            children: "certifications" // changed from "projects" to "certifications"
          }), (0, a.jsx)(I, {
            setPosition: s,
            children: "stack"
          }), (0, a.jsx)(I, {
            setPosition: s,
            children: "experience"
          }), (0, a.jsx)(I, {
            setPosition: s,
            children: "contact"
          }), (0, a.jsx)(R, {
            position: e
          })]
        })
      },
      I = e =>{
        let {
          children: s,
          setPosition: t
        } = e,
        i = (0, l.useRef)(null)
        ,
        n = (0, c.useTranslations)("");
        // n = (0, c.useTranslations)("Header");
        return (0, a.jsx)("li", {
          ref: i,
          onMouseEnter: () =>{
            if (! (null == i ? void 0 : i.current)) return;
            let {
              width: e
            } = i.current.getBoundingClientRect();
            t({
              left: i.current.offsetLeft,
              width: e,
              opacity: 1
            })
          },
          className: "relative z-10 block cursor-pointer text-xs uppercase",
          children: (0, a.jsx)("a", {
            className: "px-3 py-1.5 block ",
            href: "#".concat(s),
            children: n(s)
          })
        })
      },
      R = e =>{
        let {
          position: s
        } = e;
        return (0, a.jsx)(f.E.li, {
          animate: {...s
          },
          className: "absolute z-0 h-7 rounded-full bg-white dark:bg.black"
        })
      };
      var A = () =>{
        let e = (0, l.useRef)(),
        s = (0, l.useRef)(),
        t = (0, c.useTranslations)("Header"),
        i = t =>{
          var a; (null == s ? void 0 : null === (a = s.current) || void 0 === a ? void 0 : a.contains(t.target)) || !(window.innerWidth <= 767) || e.current.classList.add("hidden")
        };
        return (0, l.useEffect)(() =>{
          let s = window.addEventListener("resize", () =>{
            e.current && e.current.classList.add("hidden")
          });
          return () =>window.removeEventListener("resize", s)
        },
        []),
        (0, F.t$)(e, i),
        (0, a.jsx)(f.E.header, {
          initial: {
            y: -50
          },
          animate: {
            y: 0
          },
          className: "fixed top-0 w-full p-2 px-5 z-50  backdrop-blur-sm mx-[-130px] xl:mx-[-30px] xs:-mx-2",
          children: (0, a.jsxs)("nav", {
            className: "flex justify-between  items-center",
            children: [(0, a.jsx)("a", {
              href: "#home",
              className: "hover:opacity-80 transform scale-x-[-1] text-xl bg-black text-white dark:bg.white dark:text-black px-4 rounded-full",
              children: "\xc6"
            }), (0, a.jsx)(f.E.div, {
              className: "md:hidden",
              children: (0, a.jsx)(M, {})
            }), (0, a.jsxs)("ul", {
              className: "flex gap-3 items-center",
              children: [(0, a.jsx)("li", {
                className: "cursor-pointer",
                children: (0, a.jsx)(S, {})
              }), (0, a.jsx)("li", {
                children: (0, a.jsx)(j, {})
              }), (0, a.jsx)("button", {
                ref: s,
                onClick: () =>{
                  let s = e.current.classList;
                  s.contains("hidden") ? s.remove("hidden") : s.add("hidden")
                },
                style: {
                  maskImage: 'url("images/menu.svg")'
                },
                className: "w-6 h-6 bg-black dark:bg.white hover:opacity-60 svgMask cursor-pointer hidden md:block"
              })]
            }), (0, a.jsx)("li", {
              ref: e,
              className: "absolute hidden right-2 top-12 list-none",
              children: (0, a.jsx)("ul", {
                className: "flex flex-col dark:bg.black bg.white py-4 rounded-md outline outline-1 outline-comment-grey gap-3 items-center",
                children: ["home", "certifications", "stack", "experience", "contact"].map(e =>(0, a.jsx)("li", {
                  className: "w-full text-center",
                  children: (0, a.jsx)("a", {
                    onClick: i,
                    href: "#".concat(e),
                    className: "hover:opacity-80 w-full block px-4",
                    children: t(e)
                  })
                },
                e))
              })
            })]
          })
        })
      },
      T = t(9805),
      D = t(4446);
      let L = ["images/kashi-os.png", "images/discord_clone.png", "images/apache_spark.png"];
      var B = () =>{
        let[e, s] = (0, l.useState)(0),
        t = (0, l.useRef)(null),
        i = (0, l.useRef)(null); (0, T._)();
        let n = (0, l.useRef)(null),
        r = () =>{
          clearInterval(t.current),
          t.current = setInterval(() =>{
            s(e =>(e + 1) % L.length)
          },
          3e3)
        }; (0, l.useEffect)(() =>(r(), () =>{
          clearInterval(t.current)
        }), []),
        (0, l.useEffect)(() =>{
          let e = () =>{
            document.hidden ? clearInterval(t.current) : (s(e =>(e + 1) % L.length), r())
          };
          return document.addEventListener("visibilitychange", e),
          () =>{
            document.removeEventListener("visibilitychange", e),
            clearInterval(t.current)
          }
        },
        []);
        let o = () =>{
          s(e =>(e + 1) % L.length),
          clearInterval(t.current),
          clearTimeout(i.current),
          i.current = setTimeout(() =>{
            r()
          },
          1e3)
        };
        return (0, a.jsx)("div", {
          className: "cursor-pointer select-none",
          ref: n,
          children: (0, a.jsx)(D.M, {
            initial: !1,
            children: L.map((s, t) =>t === e && (0, a.jsx)(f.E.img, {
              src: s,
              alt: "Slide ".concat(t),
              initial: {
                y: "100%"
              },
              animate: {
                y: "0%"
              },
              exit: {
                y: "-100%"
              },
              transition: {
                duration: .5
              },
              onClick: o,
              style: {
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "left"
              }
            },
            s))
          })
        })
      };
      function P(e) {
        let {
          src: s
        } = e;
        return (0, a.jsx)("div", {
          style: s ? {
            backgroundImage: 'url("'.concat(s, '")')
          }: {},
          className: "size-20 border-4 xs:border-2 border-black dark:border-white rounded-full bg-white  min-w-[104px] bg-center bg-cover relative overflow-hidden lg:size-14 lg:min-w-[80px] sm:size-12 sm:min-w-16 xs:size-7 xs:min-w-11",
          children: !s && (0, a.jsx)(B, {})
        })
      }
      var O = t(2022);
      let X = {
        "pt-BR": "https://pub-23b2bdccea9b4dd0aa82eeba1d9c6805.r2.dev/curriculo/Eric%20Augusto%20Dev%20Front%20End%20-%20Curr%C3%ADculo.pdf",
        en: "https://pub-23b2bdccea9b4dd0aa82eeba1d9c6805.r2.dev/curriculo/Eric%20Augusto%20Front%20End%20Dev%2-%20Resume.pdf"
      };
      var Y = t(6164);
      function H() {
        for (var e = arguments.length,
        s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
        return (0, Y.m6)((0, k.W)(s))
      }
      l.forwardRef((e, s) =>{
        let {
          parentRef: t,
          containerRef: i,
          beamOptions: n = {}
        } = e,
        r = (0, l.useRef)(null),
        [o, c] = (0, l.useState)({
          detected: !1,
          coordinates: null
        }),
        [d, x] = (0, l.useState)(0),
        [m, p] = (0, l.useState)(!1);
        return (0, l.useEffect)(() =>{
          let e = setInterval(() =>{
            if (r.current && i.current && t.current && !m) {
              let e = r.current.getBoundingClientRect(),
              s = i.current.getBoundingClientRect(),
              a = t.current.getBoundingClientRect();
              e.bottom >= s.top && (c({
                detected: !0,
                coordinates: {
                  x: e.left - a.left + e.width / 2,
                  y: e.bottom - a.top
                }
              }), p(!0))
            }
          },
          50);
          return () =>clearInterval(e)
        },
        [m, i]),
        (0, l.useEffect)(() =>{
          o.detected && o.coordinates && (setTimeout(() =>{
            c({
              detected: !1,
              coordinates: null
            }),
            p(!1)
          },
          2e3), setTimeout(() =>{
            x(e =>e + 1)
          },
          2e3))
        },
        [o]),
        (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.E.div, {
            ref: r,
            animate: "animate",
            initial: {
              translateY: n.initialY || "-200px",
              translateX: n.initialX || "0px",
              rotate: n.rotate || 0
            },
            variants: {
              animate: {
                translateY: n.translateY || "1800px",
                translateX: n.translateX || "0px",
                rotate: n.rotate || 0
              }
            },
            transition: {
              duration: n.duration || 8,
              repeat: 1 / 0,
              repeatType: "loop",
              ease: "linear",
              delay: n.delay || 0,
              repeatDelay: n.repeatDelay || 0
            },
            className: H("absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent", n.className)
          },
          d), (0, a.jsx)(D.M, {
            children: o.detected && o.coordinates && (0, a.jsx)(J, {
              className: "",
              style: {
                left: "".concat(o.coordinates.x, "px"),
                top: "".concat(o.coordinates.y, "px"),
                transform: "translate(-50%, -50%)"
              }
            },
            "".concat(o.coordinates.x, "-").concat(o.coordinates.y))
          })]
        })
      }).displayName = "CollisionMechanism";
      let J = e =>{
        let {...s
        } = e,
        t = Array.from({
          length: 20
        },
        (e, s) =>({
          id: s,
          initialX: 0,
          initialY: 0,
          directionX: Math.floor(80 * Math.random() - 40),
          directionY: Math.floor( - 50 * Math.random() - 10)
        }));
        return (0, a.jsxs)("div", {...s,
          className: H("absolute z-50 h-2 w-2", s.className),
          children: [(0, a.jsx)(f.E.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            transition: {
              duration: 1.5,
              ease: "easeOut"
            },
            className: "absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
          }), t.map(e =>(0, a.jsx)(f.E.span, {
            initial: {
              x: e.initialX,
              y: e.initialY,
              opacity: 1
            },
            animate: {
              x: e.directionX,
              y: e.directionY,
              opacity: 0
            },
            transition: {
              duration: 1.5 * Math.random() + .5,
              ease: "easeOut"
            },
            className: "absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
          },
          e.id))]
        })
      },
      V = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: .1
          }
        }
      },
      W = {
        hidden: {
          y: 10,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1
        }
      };
      var Z = () =>{
        let e = (0, c.useLocale)(),
        s = (0, c.useTranslations)("Hero"),
        {
          ref: t,
          replay: i
        } = (0, O.b)({
          text: "フロントエンドデベロッパー",
          speed: .5
        }),
        {
          ref: l,
          replay: n
        } = (0, O.b)({
          text: s("front"),
          speed: .5
        });
        return (0, a.jsxs)("section", {
          id: "hero",
          className: "mb-[120px] md:mb-[100px]",
          children: [(0, a.jsxs)("div", {
            className: "text-nowrap text-center font-thin uppercase text-lg font-martian text-comment-grey-darker lg:text-sm xs:text-xs sm:hidden",
            children: [(0, a.jsx)("span", {
              style: {
                textOrientation: "upright",
                writingMode: "vertical-rl"
              },
              ref: l,
              onMouseOver: n,
              onFocus: n,
              className: "absolute left-3  xl:-left-1   bottom-5 "
            }), (0, a.jsx)("span", {
              style: {
                textOrientation: "upright",
                writingMode: "vertical-rl"
              },
              ref: t,
              onMouseOver: i,
              onFocus: i,
              className: "absolute right-3 xs:-right-2 lg:-right-1   top-14 tracking-[0.4rem]"
            })]
          }), (0, a.jsxs)(f.E.div, {
            initial: "hidden",
            animate: "visible",
            variants: V,
            className: "mb-3 justify-center items-center text-center flex flex-col relative",
            children: [(0, a.jsxs)("h1", {
              className: "text-5xl sm:text-4xl xs:text-2xl xxs:text-xl font-bold flex items-center flex-col justify-center  leading-[84px] text-nowrap text-comment-grey w-fit",
              children: [(0, a.jsxs)(f.E.div, {
                variants: W,
                className: "flex items-center gap-6 lg:gap-4 xs:gap-3 relative",
                children: [s("iAm"), " ", (0, a.jsx)("span", {
                  className: "gradient_hero",
                  children: "Yeshwanth Gowd Sreerama"
                }), (0, a.jsx)(P, {
                  src: "images/profile_3.gif"
                }), (0, a.jsx)("span", {
                  className: "absolute -right-6 xs:-right-3",
                  children: ","
                })]
              }), (0, a.jsxs)(f.E.div, {
                variants: W,
                className: "flex items-center gap-6 lg:gap-4 xs:gap-3",
                children: [(0, a.jsx)("span", {
                  className: "gradient_hero",
                  children: s("Data")
                }), (0, a.jsx)(P, {}), " ", s("Engineer")]
              }), "pt-BR" != e && (0, a.jsxs)(f.E.div, {
                variants: W,
                className: "flex items-center gap-6 lg:gap-4 xs:gap-3",
                children: [s("basedIn"), " ", (0, a.jsx)("span", {
                  className: "gradient_hero",
                  children: "USA"
                }), (0, a.jsx)(P, {
                  src: "images/city.png"
                })]
              })]
            }), (0, a.jsx)(f.E.h6, {
              variants: W,
              className: "px-9 text-comment-grey pt-3 pb-8 max-w-[53rem] lg:text-sm sm:text-xs xs:text-[10px] xxs:text-[8px]",
              children: s("hello")
            }), (0, a.jsxs)(f.E.div, {
              variants: W,
              className: "flex justify-center w-full items-center gap-4 mt-3 lg:text-sm sm:text-xs xs:text-[10px] xxs:text-[8px] md:flex-col xs:justify-center xs:gap-1",
              children: [(0, a.jsx)("a", {
                href: "#contact",
                className: " dark:bg-black bg-white p-2 xxs:p-1 px-9 outline-1 outline-black/10 dark:outline-white/10 outline outline-offset-2 rounded-full hover:opacity-80 w-fit md:w-full h-full align-middle shadow-inner shadow-black/15 dark:shadow-white/20",
                children: s("idea")
              })
              
              ,(0, a.jsxs)("div", {
                className: "flex items-center gap-4 xs:gap-2",
                children: [(0, a.jsx)("a", {
                  onClick: () =>{
                    window.open(X[e])
                  }
                  // ,
                  // className: "h-full  p-2 rounded-md hover:border-zinc-700 w-fit cursor-pointer transition-all hover:scale-105"
                })
                // , 
                // (0, a.jsxs)("a", {
                //   href: "https://www.linkedin.com/in/eric-augusto-775245a9/",
                //   target: "_blank",
                //   className: "group",
                //   children: [(0, a.jsx)("span", {
                //     style: {
                //       maskImage: 'url("images/linkedin-icon.svg")'
                //     },
                //     className: "block size-[18px]  xs:size-3 sm:size-4 bg-black  dark:bg.white svgMask group-hover:opacity-80 cursor-pointer"
                //   }), " "]
                // })
                // , 
                // (0, a.jsxs)("a", {
                //   href: "https://wa.me/5571981886126",
                //   target: "_blank",
                //   className: "group",
                //   children: [(0, a.jsx)("span", {
                //       maskImage: 'url("images/zap.svg")'
                //     },
                //     className: "block size-[18px] sm:size-4  xs:size-3 bg-black  dark:bg.white svgMask group-hover:opacity-80 cursor-pointer"
                //   }), " "]
                // })
              ]
              })]
            })]
          })]
        })
      };
      let q = {
        angular: {
          name: "Python",
          image: "images/py.webp",
          color: "#FE38BA",
          exp: "5+"
        },
        react: {
          name: "SQL",
          image: "images/database.svg",
          color: "#61DAFB",
          exp: "5+"
        },
        next: {
          name: "Databricks",
          image: "images/Databricks_icon.png",
          color: "#aeb2ba",
          exp: "5+"
        },
        tailwind: {
          name: "Azure Data Factory",
          image: "images/Azure_Data_Factory_4.png",
          color: "#38B2AC",
          exp: "5+"
        },
        ts: {
          name: "Apache Spark",
          image: "images/spark_2.png",
          color: "#3178C6",
          exp: "5+"
        },
        py: {
          name: "Git",
          image: "images/git.png",
          color: "#3776AB",
          exp: "5+"
        },
        scss: {
          name: "Jira",
          image: "images/Jira.png",
          color: "#CD6799",
          exp: "5+"
        },
        html: {
          name: "Apache Kafka",
          image: "images/kafka_2.png",
          color: "#E34F26",
          exp: "5+"
        },
        git: {
          name: "AWS",
          image: "images/AWS.png",
          color: "#F05032",
          exp: "4+"
        },
        figma: {
          name: "Google Cloud",
          image: "images/GCP.png",
          color: "#F24E1E",
          exp: "3+"
        }
      };
      var G = t(4148),
      K = t.n(G);
      function Q(e) {
        let {
          img: s,
          gif: t,
          name: l,
          description: n,
          skills: r,
          link: o,
          subtitle: d,
          isOnline: x
        } = e,
        m = (0, c.useTranslations)("Projects");
        return (0, a.jsxs)("a", {
          href: o,
          target: "_blank",
          style: {
            "--img-project": "url('".concat(s, "')"),
            "--gif-project": "url('".concat(null != t ? t: s, "')")
          },
          className: "shadow-[0_0_10px_#00000040] dark:shadow-[0_0_20px_#ffffff30] relative z-10 transition-all overflow-visible p-4 cursor-pointer border-solid border-[1px] rounded-[30px] h-[500px] lg:h-[350px] flex flex-col gradient group ".concat(K().box),
          children: [(0, a.jsx)("span", {
            className: "absolute inset-0 bg-box-gradient opacity-0 -z-10 transition-opacity duration-300 ease-in-out rounded-[30px] group-hover:opacity-100"
          }), (0, a.jsx)("div", {
            className: "bg-white rounded-t-3xl overflow-hidden rounded-b-xl h-[300px] lg:h-[150px]  w-full bg-cover bg-no-repeat ".concat(K().box_img)
          }), (0, a.jsxs)("div", {
            className: "mt-6 font-code",
            children: [(0, a.jsx)("span", {
              className: "text-3xl lg:text-2xl sm:text-xl font-bold",
              children: l
            }), d && (0, a.jsxs)("span", {
              className: "text-xs",
              children: [" (", d, ")"]
            }), (0, a.jsx)("br", {}), (0, a.jsx)("label", {
              className: "text-xs sm:text-[10px] bg-white dark:bg-black text-[#7a7a7a] dark:text-[#C9C9C9]",
              children: n
            }), (0, a.jsx)("div", {
              className: "flex items-center absolute bottom-3 ",
              children: r.map((e, s) =>(0, a.jsx)("div", {
                className: "",
                style: {
                  transform: "translateX(-".concat(2 + 5 * s, "px)")
                },
                children: (0, a.jsx)(i.
              default, {
                  width: 0,
                  height: 0,
                  alt: "icon".concat(s + 1),
                  className: "p-2"
                })
              },
              s))
            })]
          }), (0, a.jsxs)("div", {
            className: "dark:bg-black lg:invisible bg-white px-1 text-[10px] gap-2 flex items-center rounded-full absolute bottom-3 right-5",
            children: [m("status"), ": ", x ? "online": "online", " ", (0, a.jsx)("div", {
              style: {
                backgroundColor: x ? "#34d399": " #34d399"
              },
              className: "size-2 rounded-full animate-pulse"
            })]
          })]
        })
      }
      let U = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: .2
          }
        }
      },
      $ = {
        hidden: {
          y: 10,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1
        }
      };
      function ee() {
        let e = (0, c.useTranslations)("Projects"),
        s = [{
          name: "Databricks",
          isOnline: !0,
          link: "https://credentials.databricks.com/fd64c120-851c-44d8-8982-1bd27766ad43#acc.JX83NS2D",
          img: "images/databricks_4.png",
          gif: "images/databricks_gif.gif",
          description: e("os"),
          skills: ["react", "ts", "scss", "figma"]
        },
        {
          name: "Google Cloud",
          isOnline: !0,
          img: "images/gcp_8.png",
          gif: "images/discourse.gif",
          link: "https://www.credly.com/badges/e879bce1-0a8d-4b6a-929c-4cb276420cf2/linked_in_profile",
          description: e("disc"),
          skills: ["next", "tailwind", "ts"]
        },
        {
          name: "Azure",
          subtitle: "Microsoft Certified",
          img: "images/azure-6.png",
          link: "https://learn.microsoft.com/api/credentials/share/en-us/YESHWANTHGOWDSREERAMA-2846/6BBFEF31D9BBC071?sharingId",
          description: e("jdm"),
          skills: ["angular", "ts", "html", "scss", "figma"]
        }];
        return (0, a.jsxs)(f.E.section, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          className: "scroll-mt-16",
          id: "certifications", // changed from "projects" to "certifications"
          children: [(0, a.jsxs)("div", {
            className: "flex flex-col gap-1 items-center",
            children: [(0, a.jsx)("h2", {
              className: "text-4xl sm:text-3xl xs:text-xl xxs:text-xl mb-3 lg:mb-1 sm:mb-0",
              children: e("title")
            }), (0, a.jsx)("label", {
              className: "dark:bg-white/95 px-7 rounded-full text-center w-fit bg-accent-orange text-white dark:text-black/90 h-min flex-grow-0 lg:text-[10px] sm:text-[8px]",
              children: e("description")
            })]
          }), (0, a.jsx)(f.E.ul, {
            variants: U,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              once: !0
            },
            className: "grid grid-cols-3 gap-[60px] md:gap-9 lg:gap-2 my-[40px] dots md:grid-cols-1",
            children: s.map(e =>(0, a.jsx)(f.E.li, {
              variants: $,
              children: (0, a.jsx)(Q, {...e
              })
            },
            e.name))
          })]
        })
      }
      function es() {
        var e;
        let s;
        let[t, n] = (0, l.useState)(),
        r = (0, c.useTranslations)("Stack"),
        o = (0, c.useLocale)();
        s = window.matchMedia("(hover: hover)").matches;
        let d = e =>{
          s && n(() =>e)
        },
        [x, m] = (0, l.useState)(),
        p = () =>{
          let e = setTimeout(() =>{},
          500);
          n(() =>null),
          m(e)
        };
        return (0, l.useEffect)(() =>{ (() =>{
            let e = document.querySelector(".animate-text-slide");
            e && (e.classList.remove("animate-text-slide"), e.offsetWidth, e.classList.add("animate-text-slide"))
          })()
        },
        [t]),
        (0, a.jsx)("section", {
          className: "relative  scroll-mt-52",
          id: "stack",
          children: (0, a.jsxs)("div", {
            className: "grid grid-rows-2 gap-2  grid-cols-7 md:grid-cols-4 xs:grid-cols-3 xs:grid-rows-5 md:grid-rows-4 md:px-2 my-[80px]",
            children: [(0, a.jsxs)("div", {
              className: "col-span-3 p-4 md:col-span-4 xs:col-span-3 font-light text-2xl 2xl:text-xl xs:text-sm   min-h-24 xs:min-h-14 bg-black/5 border-black/20 dark:bg-[#0b0b0b65] dark:border-[hsl(0,0%,9%)] border-[1px] rounded-3xl relative",
              children: [(0, a.jsxs)("div", {
                className: "absolute md:hidden top-[14px] left-[17px] flex items-center gap-1",
                children: [(0, a.jsx)("div", {
                  className: "size-2 px-6 md:px-9 xs:px-6 bg-black dark:bg.white rounded-full"
                }), (0, a.jsx)("div", {
                  className: "size-2 px-3 md:px-6 xs:px-3 bg-black/50 dark:bg.white/50 rounded-full"
                }), (0, a.jsx)("div", {
                  className: "size-2 px-1 bg-black/20 dark:bg.white/20 rounded-full"
                })]
              }), t && (0, a.jsxs)("span", {
                style: {
                  outlineColor: t && (null == t ? void 0 : t.color)
                },
                className: "xs:text-[8px] xs:leading-[8px] xs:px-2  md:text-[11px]  absolute transition-all top-[14px] right-[17px] text-xs outline-[1px] outline-black bg-black text-white dark:outline-white outline dark:bg.white dark:text-black outline-offset-2 rounded-full px-5  leading-[10px]",
                children: [null !== (e = null == t ? void 0 : t.exp) && void 0 !== e ? e: "4+", " ", r("years"), " ", (0, a.jsxs)("span", {
                  children: [!t && r("coding"), " ", ("pt-BR" !== o || t) && "exp."]
                })]
              }), (0, a.jsxs)("h2", {
                className: "mt-3 md:m-0 leading-snug md:text-center xs:text-wrap text-nowrap dark:mix-blend-difference relative",
                children: [r("solving"), (0, a.jsx)("br", {}), !t && (0, a.jsx)("span", {
                  className: "animate-text-slide",
                  children: r("stack")
                }), t && (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsx)("span", {
                    style: {
                      color: t.color
                    },
                    className: "animate-text-slide inline-block font-bold",
                    children: t.name
                  })
                })]
              })]
            })
            // , (0, a.jsx)("div", {
            //   className: "",
            //   children: (0, a.jsx)(i.
            // default, {
            //     className: "xs:size-16",
            //     src: "images/angular.png",
            //     width: 96,
            //     height: 96,
            //     alt: "new one"
            //   })
            // })
            , Object.keys(q).map(e =>(0, a.jsx)("div", {
              style: {
                backgroundImage: "url(".concat(q[e].image, ")")
              },
              onMouseLeave: () =>p(),
              onMouseOver: () =>d(q[e]),
              className: "bg-center bg-no-repeat bg-contain rounded-3xl border-black/20  dark:border-[hsl(0,0%,9%)] border-[1px]  saturate-0 bg-origin-content transition-all  betterhover:hover:saturate-100 md:saturate-100 flex-grow-0  flex items-center justify-items-center p-6 sm:p-3"
            },
            e))]
          })
        })
      }
      function et() {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "min-h-full min-w-full px-[130px] py-[40px] xl:px-[30px] xs:px-2 overflow-x-hidden",
            id: "home",
            children: [(0, a.jsx)("div", {
              style: {
                height: "100%",
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1
              },
              children: (0, a.jsx)("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  backgroundSize: "128px",
                  backgroundRepeat: "repeat",
                  backgroundImage: "url('images/noise.png')",
                  opacity: "0.06",
                  borderRadius: "0px"
                }
              })
            }), (0, a.jsx)(A, {}), (0, a.jsxs)("main", {
              className: "my-32 lg:my-10",
              children: [(0, a.jsx)(Z, {}), (0, a.jsx)(ee, {}), (0, a.jsx)(es, {}), (0, a.jsx)(h, {}), (0, a.jsx)(p, {})]
            }), (0, a.jsx)(b, {})]
          })
        })
      }
      t(3054),
      t(8184)
    },
    3054 : function() {},
    1516 : function(e) {
      e.exports = {
        "bg-transition": "Cta_bg-transition__JbHbp",
        neon_effect: "Cta_neon_effect__AKE2y",
        pulsate: "Cta_pulsate__8zsJI"
      }
    },
    4148 : function(e) {
      e.exports = {
        box: "Box_box__Ok91C",
        box_img: "Box_box_img__8tZdx"
      }
    }
  },
  function(e) {
    e.O(0, [684, 231, 560, 657, 971, 526, 744],
    function() {
      return e(e.s = 1803)
    }),
    _N_E = e.O()
  }]);