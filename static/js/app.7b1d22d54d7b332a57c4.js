webpackJsonp(
  [1],
  {
    "Hv/b": function (e, t) {},
    NHnr: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("7+uW"),
        a = {
          render: function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t("div", { attrs: { id: "app" } }, [t("router-view")], 1);
          },
          staticRenderFns: [],
        };
      var i = n("VU/8")(
          { name: "App" },
          a,
          !1,
          function (e) {
            n("Hv/b");
          },
          null,
          null
        ).exports,
        s = n("/ocq"),
        o = n("//Fk"),
        u = n.n(o),
        h = n("Zrlr"),
        c = n.n(h),
        l = n("wxAW"),
        m = n.n(l),
        f = {
          mounted: function () {
            var e = [
                `Hello ${localStorage.getItem("user") || ":))"}`,
                "My name is Vu Duc Hai (작은 바다)",
                "You're in my homepage",
                "written in pure HTML",
                "Now you can try",
                "Open 'View Page Source'",
                "And see the magic :D",
              ],
              t = new ((function () {
                function e(t) {
                  c()(this, e),
                    (this.el = t),
                    (this.chars = "!<>-_\\/[]{}—=+*^?#________"),
                    (this.update = this.update.bind(this));
                }
                return (
                  m()(e, [
                    {
                      key: "setText",
                      value: function (e) {
                        var t = this,
                          n = this.el.innerText,
                          r = Math.max(n.length, e.length),
                          a = new u.a(function (e) {
                            return (t.resolve = e);
                          });
                        this.queue = [];
                        for (var i = 0; i < r; i++) {
                          var s = n[i] || "",
                            o = e[i] || "",
                            h = Math.floor(40 * Math.random()),
                            c = h + Math.floor(40 * Math.random());
                          this.queue.push({ from: s, to: o, start: h, end: c });
                        }
                        return (
                          cancelAnimationFrame(this.frameRequest),
                          (this.frame = 0),
                          this.update(),
                          a
                        );
                      },
                    },
                    {
                      key: "update",
                      value: function () {
                        for (
                          var e = "", t = 0, n = 0, r = this.queue.length;
                          n < r;
                          n++
                        ) {
                          var a = this.queue[n],
                            i = a.from,
                            s = a.to,
                            o = a.start,
                            u = a.end,
                            h = a.char;
                          this.frame >= u
                            ? (t++, (e += s))
                            : this.frame >= o
                            ? ((!h || Math.random() < 0.28) &&
                                ((h = this.randomChar()),
                                (this.queue[n].char = h)),
                              (e += '<span class="dud">' + h + "</span>"))
                            : (e += i);
                        }
                        (this.el.innerHTML = e),
                          t === this.queue.length
                            ? this.resolve()
                            : ((this.frameRequest = requestAnimationFrame(
                                this.update
                              )),
                              this.frame++);
                      },
                    },
                    {
                      key: "randomChar",
                      value: function () {
                        return this.chars[
                          Math.floor(Math.random() * this.chars.length)
                        ];
                      },
                    },
                  ]),
                  e
                );
              })())(document.querySelector(".text")),
              n = 0;
            !(function r() {
              t.setText(e[n]).then(function () {
                setTimeout(r, 2e3);
              }),
                (n = (n + 1) % e.length);
            })();
          },
        },
        p = {
          render: function () {
            this.$createElement;
            this._self._c;
            return this._m(0);
          },
          staticRenderFns: [
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", { staticClass: "container" }, [
                t("div", { staticClass: "description" }, [
                  this._v(
                    "\n    This is my demo project of how to prevents user from View Page Source.\n  "
                  ),
                ]),
                this._v(" "),
                t("div", { staticClass: "text" }),
              ]);
            },
          ],
        };
      var d = n("VU/8")(
        f,
        p,
        !1,
        function (e) {
          n("f4ID");
        },
        null,
        null
      ).exports;
      r.a.use(s.a);
      var v = new s.a({
        mode: "history",
        routes: [
          { path: "/", name: "Home", component: d, meta: { requiresAuth: !0 } },
          { path: "*", redirect: "/" },
        ],
      });
      (r.a.config.productionTip = !1),
        new r.a({
          el: "#app",
          router: v,
          components: { App: i },
          template: "<App/>",
        });
    },
    f4ID: function (e, t) {},
  },
  ["NHnr"]
);
//# sourceMappingURL=app.7b1d22d54d7b332a57c4.js.map
