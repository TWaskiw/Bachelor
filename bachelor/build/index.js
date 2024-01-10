var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-GE5VPXMK.css";

// app/root.jsx
var import_react4 = require("@remix-run/react");

// app/sessions.server.js
var import_node3 = require("@remix-run/node");

// app/cookie.server.js
var import_node2 = require("@remix-run/node"), sessionCookie = (0, import_node2.createCookie)("__session", {
  httpOnly: !0,
  maxAge: 60 * 60 * 24 * 1e3,
  // 1 day
  secrets: [process.env.COOKIE_SECRET]
});

// app/sessions.server.js
var { getSession, commitSession, destroySession } = (0, import_node3.createCookieSessionStorage)({
  cookie: sessionCookie
});
async function requireUserSession(request) {
  let cookie = request.headers.get("Cookie"), session = await getSession(cookie);
  if (!session.has("userId"))
    throw (0, import_node3.redirect)("/login");
  return session;
}

// app/root.jsx
var import_node4 = require("@remix-run/node");

// app/components/Navigation.jsx
var import_react2 = require("@remix-run/react"), import_react3 = __toESM(require("react"));

// app/components/ui/button.jsx
var React = __toESM(require("react")), import_react_slot = require("@radix-ui/react-slot"), import_class_variance_authority = require("class-variance-authority");

// @/lib/utils.js
var import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/components/ui/button.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary  justify-center text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive  justify-center text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input  justify-center bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary  justify-center text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent  justify-center hover:text-accent-foreground",
        ghostNav: " hover:text-lunds justify-start",
        link: "text-primary  justify-center underline-offset-4 hover:underline decoration-lunds",
        outlineLunds: " text-white  justify-start bg-lunds"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    asChild ? import_react_slot.Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.jsx",
      lineNumber: 43,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// public/Logo.svg
var Logo_default = "/build/_assets/Logo-WL3JBX6N.svg";

// app/components/Navigation.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
var Navigation = () => {
  let { userId } = (0, import_react2.useLoaderData)(), Links2 = [
    { name: "Produkter", link: "/produkter" },
    // { name: "Hjem", link: "/" },
    { name: "G\xE5rden", link: "/om-gaarden" },
    { name: "Ismejeri", link: "/ismejeri" }
  ], [open, setOpen] = import_react3.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "shadow-md w-full  top-0 left-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:flex items-center justify-between bg-white py-4 md:px-10 px-7", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex font-bold text-2xl cursor-pointer text-gray-800 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: Logo_default, alt: "Logo" }, void 0, !1, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 28,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { onClick: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "p",
      {
        name: "{open ? 'close' : 'menu'}",
        className: "text-3xl absolute right-8 top-6 cursor-pointer md:hidden",
        children: "x"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navigation.jsx",
        lineNumber: 33,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "ul",
      {
        className: `md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] 
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20" : "top-[-100%]"}`,
        children: [
          Links2.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "md:ml-8 md:my-0 my-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { asChild: !0, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: link.link, children: link.name }, void 0, !1, {
            fileName: "app/components/Navigation.jsx",
            lineNumber: 49,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Navigation.jsx",
            lineNumber: 48,
            columnNumber: 15
          }, this) }, link.name, !1, {
            fileName: "app/components/Navigation.jsx",
            lineNumber: 47,
            columnNumber: 13
          }, this)),
          userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { asChild: !0, variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_react2.Link,
            {
              to: "/products",
              className: "md:ml-8 md:my-0 my-7 text-blue-500",
              children: "Admin"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Navigation.jsx",
              lineNumber: 55,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Navigation.jsx",
            lineNumber: 54,
            columnNumber: 13
          }, this) : ""
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Navigation.jsx",
        lineNumber: 40,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Navigation.jsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Navigation.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}, Navigation_default = Navigation;

// app/root.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
async function loader({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node4.json)({ userId: session.get("userId") });
}
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navigation_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/_disabled_produkter_.$productId.jsx
var disabled_produkter_productId_exports = {};
__export(disabled_produkter_productId_exports, {
  default: () => ProductPage,
  loader: () => loader2
});
var import_react7 = require("@remix-run/react"), import_node5 = require("@remix-run/node"), import_connectDb_server = __toESM(require("~/db/connectDb.server.js"));

// app/components/Stock.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Stock({ stock }) {
  let stockStatus = "", stockColor = "";
  return stock === 1 ? (stockStatus = " P\xE5 lager", stockColor = "rounded-full bg-green-400 w-2.5 h-2.5") : stock === 2 ? (stockStatus = " F\xE5 p\xE5 lager", stockColor = "rounded-full  bg-yellow-400 w-2.5 h-2.5") : stock === 3 && (stockStatus = " Ikke p\xE5 lager", stockColor = "rounded-full  bg-red-400 w-2.5 h-2.5"), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: stockColor }, void 0, !1, {
      fileName: "app/components/Stock.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "ml-1", children: stockStatus }, void 0, !1, {
      fileName: "app/components/Stock.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Stock.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/BackButton.jsx
var import_react5 = require("@remix-run/react");

// public/pil.svg
var pil_default = "/build/_assets/pil-FZ5BIZKF.svg";

// app/components/BackButton.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), handleGoBack = () => {
  window.history.back();
};
function BackButton({ children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Link, { to: "#", onClick: handleGoBack, className: "flex flex-row py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: pil_default, className: "w-6 h-6 rotate-180", alt: "Navigations pil" }, void 0, !1, {
      fileName: "app/components/BackButton.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-black pl-2", children: "Tilbage" }, void 0, !1, {
      fileName: "app/components/BackButton.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BackButton.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/MobilMenu.jsx
var import_react_scroll = require("react-scroll");

// app/components/formatCategoryName.jsx
function formatCategoryName(category) {
  return category === "boffersteaks" ? "B\xF8ffer/Steaks" : category === "spegepolse" ? "Spegep\xF8lse" : category === "helestege" ? "Hele stege" : category === "is" ? "Is" : category === "hakket" ? "Hakket oksek\xF8d" : category.toUpperCase();
}

// app/components/MobilMenu.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function MobilMenu({ category, active }) {
  let formattedCategory = formatCategoryName(category);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react_scroll.Link,
    {
      to: category,
      spy: !0,
      smooth: !0,
      duration: 600,
      offset: -130,
      className: `whitespace-nowrap hover:cursor-pointer m-2 justify-center border w-32 p-2 ${buttonVariants(
        {
          variant: category === active ? "outlineLunds" : "ghostNav"
        }
      )}`,
      children: formattedCategory
    },
    void 0,
    !1,
    {
      fileName: "app/components/MobilMenu.jsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// app/components/ProductCategory.jsx
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
global.Buffer = global.Buffer || require("buffer").Buffer;
function ProductCategory({ products, category }) {
  let filteredProducts = products.filter(
    (product) => product.category === category
  ), formattedCategory = formatCategoryName(category);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col md:m-8 lg:m-2 sm:m-16 m-4 lg:mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-5xl font-black", id: category, children: formattedCategory }, void 0, !1, {
      fileName: "app/components/ProductCategory.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid grid-cols-1 gap-10 sm:w-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 auto-rows-[600px,auto] max-w-[800px]", children: filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "div",
      {
        className: "list-decimal mb-4 overflow-hidden rounded w-full shadow-lg cursor-pointer hover:shadow-xl",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { to: `${product._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("article", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-red object-cover rounded-t-md h-2/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "img",
            {
              src: product.image,
              className: "h-full w-full object-cover max-h-96",
              alt: product.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProductCategory.jsx",
              lineNumber: 31,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/ProductCategory.jsx",
            lineNumber: 30,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col items-start flex-basis-45 p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "font-extrabold text-gray-800 font-sans text-lg  md:text-3xl lg:text-3xl xl:text-3xl", children: product.name }, void 0, !1, {
              fileName: "app/components/ProductCategory.jsx",
              lineNumber: 38,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-gray-300", children: [
              product.inventory[0].price,
              " kr/kg"
            ] }, void 0, !0, {
              fileName: "app/components/ProductCategory.jsx",
              lineNumber: 41,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-gray-600", children: [
              "Ca. ",
              product.inventory[0].weight,
              " g"
            ] }, void 0, !0, {
              fileName: "app/components/ProductCategory.jsx",
              lineNumber: 44,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "py-4 text-xl", children: [
              "Fra ",
              product.inventory[0].price,
              " kr,-"
            ] }, void 0, !0, {
              fileName: "app/components/ProductCategory.jsx",
              lineNumber: 47,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-16 flex flex-row justify-between w-full h-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Stock, { stock: product.inventory[0].stock }, void 0, !1, {
                fileName: "app/components/ProductCategory.jsx",
                lineNumber: 51,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "img",
                {
                  src: pil_default,
                  className: "w-6 h-6 my-auto",
                  alt: "Navigations pil"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProductCategory.jsx",
                  lineNumber: 52,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ProductCategory.jsx",
              lineNumber: 50,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ProductCategory.jsx",
            lineNumber: 37,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ProductCategory.jsx",
          lineNumber: 29,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/ProductCategory.jsx",
          lineNumber: 28,
          columnNumber: 15
        }, this)
      },
      product._id,
      !1,
      {
        fileName: "app/components/ProductCategory.jsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/ProductCategory.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProductCategory.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/components/extractCategories.jsx
function extractCategories({ products }) {
  let categories = /* @__PURE__ */ new Set();
  return products.forEach((product) => {
    categories.add(product.category);
  }), Array.from(categories);
}

// app/routes/_disabled_produkter_.$productId.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader2({ request, params }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get("userId"), product = await (await (0, import_connectDb_server.default)()).models.Product.findById(params.productId);
  return (0, import_node5.json)(product, userId);
}
function ProductPage() {
  let product = (0, import_react7.useLoaderData)(), userId = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full md:flex-row flex flex-col-reverse", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col md:max-w-[50%] w-full   sm:min-h-[calc(100vh-83px)] h-full p-8 sm:p-0 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-full m-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "my-4 block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BackButton, {}, void 0, !1, {
        fileName: "app/routes/_disabled_produkter_.$productId.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_disabled_produkter_.$productId.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "navne", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-5xl", children: product.name }, void 0, !1, {
          fileName: "app/routes/_disabled_produkter_.$productId.jsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-sm sm:text-lg", children: product.description }, void 0, !1, {
          fileName: "app/routes/_disabled_produkter_.$productId.jsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_disabled_produkter_.$productId.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "info my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "info flex flex-row text-start flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-none w-1/2 mt-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-base text-gray-500", children: "Kilopris" }, void 0, !1, {
            fileName: "app/routes/_disabled_produkter_.$productId.jsx",
            lineNumber: 41,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xl", children: [
            product.inventory[0].price,
            " kr/kg"
          ] }, void 0, !0, {
            fileName: "app/routes/_disabled_produkter_.$productId.jsx",
            lineNumber: 42,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_disabled_produkter_.$productId.jsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-none w-1/2 mt-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-base text-gray-500", children: "Generel V\xE6gt" }, void 0, !1, {
            fileName: "app/routes/_disabled_produkter_.$productId.jsx",
            lineNumber: 45,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xl", children: [
            "Ca. ",
            product.inventory[0].weight,
            " g"
          ] }, void 0, !0, {
            fileName: "app/routes/_disabled_produkter_.$productId.jsx",
            lineNumber: 46,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_disabled_produkter_.$productId.jsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-none w-1/2 mt-auto ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-base text-gray-500 mt-6", children: "Fra" }, void 0, !1, {
            fileName: "app/routes/_disabled_produkter_.$productId.jsx",
            lineNumber: 50,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xl", children: [
            product.inventory[0].weight / 1e3 * product.inventory[0].price,
            " ",
            "kr,-"
          ] }, void 0, !0, {
            fileName: "app/routes/_disabled_produkter_.$productId.jsx",
            lineNumber: 51,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_disabled_produkter_.$productId.jsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-none w-1/2 mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Stock, { className: "mt-6", stock: product.inventory[0].stock }, void 0, !1, {
          fileName: "app/routes/_disabled_produkter_.$productId.jsx",
          lineNumber: 58,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_disabled_produkter_.$productId.jsx",
          lineNumber: 57,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_disabled_produkter_.$productId.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_disabled_produkter_.$productId.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_disabled_produkter_.$productId.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_disabled_produkter_.$productId.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "md:max-w-[50%] w-full sm:h-[calc(100vh-83px)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "img",
      {
        className: "object-cover sm:h-full w-full",
        src: product.image,
        alt: product.name
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_disabled_produkter_.$productId.jsx",
        lineNumber: 68,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_disabled_produkter_.$productId.jsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_disabled_produkter_.$productId.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/_disabled_products_.new.jsx
var disabled_products_new_exports = {};
__export(disabled_products_new_exports, {
  action: () => action,
  default: () => NewProduct,
  loader: () => loader3
});
var import_connectDb_server2 = __toESM(require("~/db/connectDb.server.js")), import_node6 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/ui/switch.jsx
var React3 = __toESM(require("react")), SwitchPrimitives = __toESM(require("@radix-ui/react-switch"));
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Switch = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/switch.jsx",
        lineNumber: 16,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/switch.jsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Switch.displayName = SwitchPrimitives.Root.displayName;

// app/components/ui/textarea.jsx
var React4 = __toESM(require("react"));
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Textarea = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  "textarea",
  {
    className: cn(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/textarea.jsx",
    lineNumber: 7,
    columnNumber: 6
  },
  this
));
Textarea.displayName = "Textarea";

// app/routes/_disabled_products_.new.jsx
var import_react9 = require("react");

// app/components/ui/select.jsx
var React5 = __toESM(require("react")), SelectPrimitive = __toESM(require("@radix-ui/react-select")), import_lucide_react = require("lucide-react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_lucide_react.ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
        fileName: "app/components/ui/select.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.jsx",
        lineNumber: 24,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.jsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React5.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      SelectPrimitive.Viewport,
      {
        className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/select.jsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.jsx",
    lineNumber: 33,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/select.jsx",
  lineNumber: 32,
  columnNumber: 3
}, this));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.jsx",
    lineNumber: 54,
    columnNumber: 3
  },
  this
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_lucide_react.Check, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/select.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.jsx",
        lineNumber: 70,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.jsx",
        lineNumber: 69,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SelectPrimitive.ItemText, { children }, void 0, !1, {
        fileName: "app/components/ui/select.jsx",
        lineNumber: 75,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.jsx",
    lineNumber: 62,
    columnNumber: 3
  },
  this
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.jsx",
    lineNumber: 81,
    columnNumber: 3
  },
  this
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// app/components/ui/label.jsx
var React6 = __toESM(require("react")), LabelPrimitive = __toESM(require("@radix-ui/react-label")), import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label2 = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }, void 0, !1, {
  fileName: "app/components/ui/label.jsx",
  lineNumber: 14,
  columnNumber: 3
}, this));
Label2.displayName = LabelPrimitive.Root.displayName;

// app/components/ui/input.jsx
var React7 = __toESM(require("react"));
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Input = React7.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "input",
  {
    type,
    className: cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/input.jsx",
    lineNumber: 7,
    columnNumber: 6
  },
  this
));
Input.displayName = "Input";

// app/components/ui/radio-group.jsx
var React8 = __toESM(require("react")), RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group")), import_lucide_react2 = require("lucide-react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), RadioGroup = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref }, void 0, !1, {
  fileName: "app/components/ui/radio-group.jsx",
  lineNumber: 10,
  columnNumber: 11
}, this));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React8.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: cn(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_lucide_react2.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }, void 0, !1, {
      fileName: "app/components/ui/radio-group.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/radio-group.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/radio-group.jsx",
    lineNumber: 16,
    columnNumber: 6
  },
  this
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// app/components/InventoryNew.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function InventoryNew({ actionData, product, idx }) {
  var _a, _b;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Label2, { className: "block text-gray-600 mb-2", children: product ? `Lagerstatus for ${product.weight} ml/L` : "Lagerstatus" }, void 0, !1, {
      fileName: "app/components/InventoryNew.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RadioGroup, { name: "stock" + idx, defaultValue: (product == null ? void 0 : product.stock) || "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RadioGroupItem, { value: 1, id: "1" }, void 0, !1, {
          fileName: "app/components/InventoryNew.jsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Label2, { htmlFor: "1", children: "P\xE5 lager" }, void 0, !1, {
          fileName: "app/components/InventoryNew.jsx",
          lineNumber: 14,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InventoryNew.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RadioGroupItem, { value: 2, id: "2" }, void 0, !1, {
          fileName: "app/components/InventoryNew.jsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Label2, { htmlFor: "2", children: "F\xE5 p\xE5 lager" }, void 0, !1, {
          fileName: "app/components/InventoryNew.jsx",
          lineNumber: 18,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InventoryNew.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RadioGroupItem, { value: 3, id: "3" }, void 0, !1, {
          fileName: "app/components/InventoryNew.jsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Label2, { htmlFor: "3", children: "Ikke p\xE5 lager" }, void 0, !1, {
          fileName: "app/components/InventoryNew.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/InventoryNew.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/InventoryNew.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Label2, { htmlFor: "name", className: "block text-gray-600 mb-2", children: "Kilopris" }, void 0, !1, {
        fileName: "app/components/InventoryNew.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        Input,
        {
          type: "number",
          name: "price" + idx,
          id: "price",
          placeholder: "Pris",
          defaultValue: ((_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.price) || (product == null ? void 0 : product.price),
          className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InventoryNew.jsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InventoryNew.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Label2, { htmlFor: "weight", className: "block text-gray-600 mb-2", children: "V\xE6gt (g)" }, void 0, !1, {
        fileName: "app/components/InventoryNew.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        Input,
        {
          type: "number",
          name: "weight" + idx,
          id: "weight",
          placeholder: "V\xE6gt (g)",
          defaultValue: ((_b = actionData == null ? void 0 : actionData.values) == null ? void 0 : _b.weight) || (product == null ? void 0 : product.weight),
          className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/InventoryNew.jsx",
          lineNumber: 45,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/InventoryNew.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/InventoryNew.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_disabled_products_.new.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  return await requireUserSession(request), null;
}
async function action({ request }) {
  let session = await requireUserSession(request), form = await request.formData(), formValues = Object.fromEntries(form), db = await (0, import_connectDb_server2.default)();
  console.log(form.get("image")), console.log(formValues);
  try {
    return await new db.models.Product({
      name: form.get("name"),
      description: form.get("description"),
      category: form.get("category"),
      show: Boolean(form.get("show")),
      recommended: Boolean(form.get("recommended")),
      image: form.get("image"),
      inventory: form.get("stock1") ? [
        {
          stock: form.get("stock0"),
          weight: form.get("weight0"),
          price: form.get("price0")
        },
        {
          stock: form.get("stock1"),
          weight: form.get("weight1"),
          price: form.get("price1")
        },
        {
          stock: form.get("stock2"),
          weight: form.get("weight2"),
          price: form.get("price2")
        }
      ] : [
        {
          stock: form.get("stock0"),
          weight: form.get("weight0"),
          price: form.get("price0")
        }
      ]
    }).save(), (0, import_node6.redirect)("/products");
  } catch (error) {
    return console.error("Fejl ved oprettelse af produkt:", error), (0, import_node6.json)({ errors: error.errors, values: formValues }, { status: 400 });
  }
}
function NewProduct() {
  var _a, _b;
  let actionData = (0, import_react8.useActionData)(), [activeShow, setActiveShow] = (0, import_react9.useState)(""), [activeRec, setActiveRec] = (0, import_react9.useState)(""), [selectedValue, setSelectedValue] = (0, import_react9.useState)(""), test = (0, import_react9.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "max-w-lg container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(BackButton, {}, void 0, !1, {
      fileName: "app/routes/_disabled_products_.new.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react8.Form, { method: "post", className: " mx-auto", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "text-2xl font-semibold mb-4", children: "Tilf\xF8j produkt" }, void 0, !1, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "input",
        {
          type: "file",
          accept: "image/*",
          onChange: (e) => {
            let file = e.target.files[0], reader = new FileReader();
            reader.addEventListener(
              "load",
              () => {
                test.current.value = reader.result, console.log(test.current.value);
              },
              !1
            ), file && reader.readAsDataURL(file);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 89,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "hidden", name: "image", ref: test }, void 0, !1, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Label2, { htmlFor: "name", className: "block text-gray-600 mb-2", children: "Navn" }, void 0, !1, {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          Input,
          {
            type: "text",
            name: "name",
            id: "name",
            placeholder: "Navn",
            defaultValue: (_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.name,
            className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_disabled_products_.new.jsx",
            lineNumber: 116,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Label2, { htmlFor: "description", className: "block text-gray-600 mb-2", children: "Beskrivelse" }, void 0, !1, {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          Textarea,
          {
            type: "text",
            name: "description",
            id: "description",
            placeholder: "Beskrivelse",
            defaultValue: (_b = actionData == null ? void 0 : actionData.values) == null ? void 0 : _b.description,
            className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_disabled_products_.new.jsx",
            lineNumber: 130,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Label2, { htmlFor: "category", className: "block text-gray-600 mb-2", children: "Kategori" }, void 0, !1, {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          Select,
          {
            onValueChange: (newValue) => setSelectedValue(newValue),
            name: "category",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectValue, { placeholder: "V\xE6lg kategori" }, void 0, !1, {
                fileName: "app/routes/_disabled_products_.new.jsx",
                lineNumber: 150,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/_disabled_products_.new.jsx",
                lineNumber: 149,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectItem, { value: "boffersteaks", children: "B\xF8ffer/Steaks" }, void 0, !1, {
                  fileName: "app/routes/_disabled_products_.new.jsx",
                  lineNumber: 153,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectItem, { value: "hakket", children: "Hakket oksek\xF8d" }, void 0, !1, {
                  fileName: "app/routes/_disabled_products_.new.jsx",
                  lineNumber: 154,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectItem, { value: "helestege", children: "Hele Stege" }, void 0, !1, {
                  fileName: "app/routes/_disabled_products_.new.jsx",
                  lineNumber: 155,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectItem, { value: "spegepolse", children: "Spegep\xF8lse" }, void 0, !1, {
                  fileName: "app/routes/_disabled_products_.new.jsx",
                  lineNumber: 156,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectItem, { value: "is", children: "Is" }, void 0, !1, {
                  fileName: "app/routes/_disabled_products_.new.jsx",
                  lineNumber: 157,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_disabled_products_.new.jsx",
                lineNumber: 152,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_disabled_products_.new.jsx",
            lineNumber: 145,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mb-4 flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Label2, { htmlFor: "show", className: "block text-gray-600 mb-2", children: "Skal den vises?" }, void 0, !1, {
            fileName: "app/routes/_disabled_products_.new.jsx",
            lineNumber: 163,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            Switch,
            {
              onCheckedChange: () => {
                setActiveShow(!activeShow);
              },
              checked: activeShow,
              name: "show"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_disabled_products_.new.jsx",
              lineNumber: 166,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Label2, { htmlFor: "recommended", className: "block text-gray-600 mb-2", children: "Anbefales p\xE5 forsiden?" }, void 0, !1, {
            fileName: "app/routes/_disabled_products_.new.jsx",
            lineNumber: 176,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            Switch,
            {
              onCheckedChange: () => {
                setActiveRec(!activeRec);
              },
              checked: activeRec,
              name: "recommended"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_disabled_products_.new.jsx",
              lineNumber: 179,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 175,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mb-4", children: selectedValue === "is" ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full ml-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InventoryNew, { idx: 0, actionData }, void 0, !1, {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 192,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InventoryNew, { idx: 1, actionData }, void 0, !1, {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 193,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InventoryNew, { idx: 2, actionData }, void 0, !1, {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 194,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 191,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InventoryNew, { idx: 0, actionData }, void 0, !1, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 197,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex justify-between gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        Button,
        {
          type: "submit",
          className: "bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600",
          children: "Gem"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_disabled_products_.new.jsx",
          lineNumber: 202,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_disabled_products_.new.jsx",
        lineNumber: 201,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_disabled_products_.new.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_disabled_products_.new.jsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/_disabled_produkter.jsx
var disabled_produkter_exports = {};
__export(disabled_produkter_exports, {
  default: () => ProductPage2,
  loader: () => loader4
});
var import_react10 = require("@remix-run/react"), import_node7 = require("@remix-run/node"), import_connectDb_server3 = __toESM(require("~/db/connectDb.server.js"));

// app/components/ComMenu.jsx
var import_react_scroll2 = require("react-scroll");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function ComMenu({ category, active }) {
  let formattedCategory = formatCategoryName(category);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_react_scroll2.Link,
    {
      to: category,
      spy: !0,
      smooth: !0,
      duration: 600,
      offset: -16,
      className: `whitespace-nowrap hover:cursor-pointer w-full ${buttonVariants(
        {
          variant: category === active ? "outlineLunds" : "ghostNav"
        }
      )}`,
      children: formattedCategory
    },
    void 0,
    !1,
    {
      fileName: "app/components/ComMenu.jsx",
      lineNumber: 10,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ComMenu.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/_disabled_produkter.jsx
var import_react_intersection_observer = require("react-intersection-observer"), import_react11 = require("react"), import_core = require("@react-hooks-library/core"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get("userId"), products = await (await (0, import_connectDb_server3.default)()).models.Product.find({ show: !0 });
  return (0, import_node7.json)(products);
}
function ProductPage2() {
  let products = (0, import_react10.useLoaderData)(), uniqueCategories = extractCategories({ products }), [active, setActive] = (0, import_react11.useState)(uniqueCategories[0]), categoryWrapper = (0, import_react11.useRef)(null);
  return (0, import_react11.useEffect)(() => {
    let handleScroll = (event) => {
      var list = Array.from(categoryWrapper.current.children);
      list.forEach((element) => {
        element.getBoundingClientRect().top + scrollY - 250 < scrollY && setActive(element.id);
      });
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: " mx-auto flex flex-col md:flex-row place-content-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sticky top-0  md:hidden bg-white pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-gray-700 font-bold text-3xl md:ml-8 lg:ml-2 sm:ml-16 ml-4", children: "Kategorier" }, void 0, !1, {
        fileName: "app/routes/_disabled_produkter.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "no-scrollbar overflow-x-auto whitespace-nowrap p-2", children: uniqueCategories == null ? void 0 : uniqueCategories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(MobilMenu, { category, active }, category, !1, {
        fileName: "app/routes/_disabled_produkter.jsx",
        lineNumber: 58,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/_disabled_produkter.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_disabled_produkter.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "hidden md:block mx-10 min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sticky top-[calc(50vh-83px)]", children: uniqueCategories == null ? void 0 : uniqueCategories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ComMenu, { category, active }, category, !1, {
      fileName: "app/routes/_disabled_produkter.jsx",
      lineNumber: 67,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_disabled_produkter.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_disabled_produkter.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { ref: categoryWrapper, children: uniqueCategories == null ? void 0 : uniqueCategories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { id: category, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      ProductCategory,
      {
        products,
        category
      },
      category,
      !1,
      {
        fileName: "app/routes/_disabled_produkter.jsx",
        lineNumber: 77,
        columnNumber: 15
      },
      this
    ) }, category, !1, {
      fileName: "app/routes/_disabled_produkter.jsx",
      lineNumber: 76,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_disabled_produkter.jsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_disabled_produkter.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/_disabled_products.jsx
var disabled_products_exports = {};
__export(disabled_products_exports, {
  default: () => AdminPage,
  loader: () => loader5
});
var import_react13 = require("@remix-run/react"), import_node8 = require("@remix-run/node"), import_connectDb_server4 = __toESM(require("~/db/connectDb.server.js"));

// app/components/ProductCategoryAdmin.jsx
var import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ProductCategoryAdmin({ products, category }) {
  let filteredProducts = products.filter(
    (product) => product.category === category
  ), formattedCategory = formatCategoryName(category);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "list-decimal mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { id: category, children: formattedCategory }, void 0, !1, {
      fileName: "app/components/ProductCategoryAdmin.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_react12.Link,
      {
        to: `${product._id}/edit`,
        className: `m-2 ${buttonVariants({ variant: "outline" })}`,
        children: product.name
      },
      product._id,
      !1,
      {
        fileName: "app/components/ProductCategoryAdmin.jsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    ))
  ] }, void 0, !0, {
    fileName: "app/components/ProductCategoryAdmin.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/_disabled_products.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
async function loader5({ request }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get("userId");
  await requireUserSession(request);
  let db = await (0, import_connectDb_server4.default)(), user = await db.models.User.findById(userId), products = await db.models.Product.find();
  if (!user)
    throw new Response(`Couldn't find course with id ${userId}`, {
      status: 404
    });
  return (0, import_node8.json)(products);
}
function AdminPage() {
  let products = (0, import_react13.useLoaderData)();
  console.log(products.map((product) => product._id));
  let uniqueCategories = extractCategories({ products });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "max-w-lg mx-auto mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: " flex flex-row justify-end w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react13.Link,
        {
          to: "/products/new",
          className: "bg-orange-400 m-2 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600",
          children: "Opret produkt"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_disabled_products.jsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("form", { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Button, { className: "m-2", variant: "ghost", children: "Log ud" }, void 0, !1, {
        fileName: "app/routes/_disabled_products.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_disabled_products.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_disabled_products.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "overflow-x-auto whitespace-nowrap", children: uniqueCategories == null ? void 0 : uniqueCategories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(MobilMenu, { category }, category, !1, {
      fileName: "app/routes/_disabled_products.jsx",
      lineNumber: 53,
      columnNumber: 18
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_disabled_products.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: uniqueCategories == null ? void 0 : uniqueCategories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      ProductCategoryAdmin,
      {
        products,
        category
      },
      category,
      !1,
      {
        fileName: "app/routes/_disabled_products.jsx",
        lineNumber: 60,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/_disabled_products.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_disabled_products.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/_disabled_logout.jsx
var disabled_logout_exports = {};
__export(disabled_logout_exports, {
  action: () => action2,
  loader: () => loader6
});
var import_node9 = require("@remix-run/node");
function loader6() {
  return (0, import_node9.redirect)("/login");
}
async function action2({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node9.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/routes/_disabled_login.jsx
var disabled_login_exports = {};
__export(disabled_login_exports, {
  action: () => action3,
  default: () => Login,
  loader: () => loader7
});
var import_node10 = require("@remix-run/node"), import_bcryptjs = __toESM(require("bcryptjs")), import_react14 = require("@remix-run/react"), import_connectDb = __toESM(require("~/db/connectDb.server"));
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
async function loader7({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node10.json)({ userId: session.get("userId") });
}
function Login() {
  var _a, _b;
  let actionData = (0, import_react14.useActionData)();
  console.log(actionData);
  let { userId } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "my-16 p-4 max-w-lg h-full m-auto overflow-hidden rounded-lg bg-white shadow-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "Logo.svg", alt: "Logo", className: "max-w-lg m-auto my-2" }, void 0, !1, {
      fileName: "app/routes/_disabled_login.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "mb-1 text-lg font-bold", children: "Login" }, void 0, !1, {
      fileName: "app/routes/_disabled_login.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    (actionData == null ? void 0 : actionData.errorMessage) && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "mb-3 rounded border border-red-500 bg-red-50 p-2 text-red-900", children: actionData == null ? void 0 : actionData.errorMessage }, void 0, !1, {
      fileName: "app/routes/_disabled_login.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: [
        "Du allerede logget ind; g\xE5 til",
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { asChild: !0, className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react14.Link, { to: "/products", children: "Products" }, void 0, !1, {
          fileName: "app/routes/_disabled_login.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_disabled_login.jsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_disabled_login.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("form", { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { variant: "outline", children: "Log ud" }, void 0, !1, {
        fileName: "app/routes/_disabled_login.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_disabled_login.jsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_disabled_login.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("form", { method: "post", reloadDocument: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label2, { htmlFor: "email", children: "E-mail" }, void 0, !1, {
        fileName: "app/routes/_disabled_login.jsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          type: "text",
          name: "email",
          id: "email",
          placeholder: "E-mail",
          defaultValue: (_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.email
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_disabled_login.jsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label2, { htmlFor: "password", children: "Kodeord" }, void 0, !1, {
        fileName: "app/routes/_disabled_login.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          type: "password",
          name: "password",
          id: "password",
          placeholder: "Kodeord",
          defaultValue: (_b = actionData == null ? void 0 : actionData.values) == null ? void 0 : _b.password
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_disabled_login.jsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/_disabled_login.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { variant: "outline", children: "Login" }, void 0, !1, {
        fileName: "app/routes/_disabled_login.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_disabled_login.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_disabled_login.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
async function action3({ request }) {
  let formData = await request.formData(), formDataObject = Object.fromEntries(formData), session = await getSession(request.headers.get("Cookie")), user = await (0, import_connectDb.default)().models.User.findOne({
    email: formData.get("email").trim()
  });
  return console.log(user), user ? await import_bcryptjs.default.compare(
    formData.get("password").trim(),
    user.password
  ) ? (session.set("userId", user._id), (0, import_node10.redirect)("/products", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : (0, import_node10.json)(
    { errorMessage: "Invalid password", values: formDataObject },
    { status: 401 }
  ) : (0, import_node10.json)(
    { errorMessage: "Bruger ikke fundet", values: formDataObject },
    { status: 404 }
  );
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta
});
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { children: "Lundsbjerggaaard" }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OKGJAFQC.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-XTVTOEXJ.js", "/build/_shared/chunk-CSUKIVD2.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IYYPKIAA.js", imports: ["/build/_shared/chunk-YQMVL4AD.js", "/build/_shared/chunk-OKXJPIFP.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_disabled_login": { id: "routes/_disabled_login", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_disabled_login-DBB6RKZH.js", imports: ["/build/_shared/chunk-MELWEADC.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_disabled_logout": { id: "routes/_disabled_logout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_disabled_logout-TFFD67ID.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_disabled_products": { id: "routes/_disabled_products", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_disabled_products-PVMTO75N.js", imports: ["/build/_shared/chunk-VQPX7G2X.js", "/build/_shared/chunk-FVT2CTIW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_disabled_products_.new": { id: "routes/_disabled_products_.new", parentId: "root", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/_disabled_products_.new-BBOMIOPP.js", imports: ["/build/_shared/chunk-7NSGCPKV.js", "/build/_shared/chunk-LSI5DTKS.js", "/build/_shared/chunk-FVT2CTIW.js", "/build/_shared/chunk-MELWEADC.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_disabled_produkter": { id: "routes/_disabled_produkter", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_disabled_produkter-JPGTRJ4O.js", imports: ["/build/_shared/chunk-KP7MP7K7.js", "/build/_shared/chunk-LSI5DTKS.js", "/build/_shared/chunk-VQPX7G2X.js", "/build/_shared/chunk-FVT2CTIW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_disabled_produkter_.$productId": { id: "routes/_disabled_produkter_.$productId", parentId: "root", path: ":productId", index: void 0, caseSensitive: void 0, module: "/build/routes/_disabled_produkter_.$productId-WUZEDVSD.js", imports: ["/build/_shared/chunk-7NSGCPKV.js", "/build/_shared/chunk-KP7MP7K7.js", "/build/_shared/chunk-LSI5DTKS.js", "/build/_shared/chunk-FVT2CTIW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-FPIQXROP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "cf006633", hmr: { runtime: "/build/_shared/chunk-CSUKIVD2.js", timestamp: 1704929535720 }, url: "/build/manifest-CF006633.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_disabled_produkter_.$productId": {
    id: "routes/_disabled_produkter_.$productId",
    parentId: "root",
    path: ":productId",
    index: void 0,
    caseSensitive: void 0,
    module: disabled_produkter_productId_exports
  },
  "routes/_disabled_products_.new": {
    id: "routes/_disabled_products_.new",
    parentId: "root",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: disabled_products_new_exports
  },
  "routes/_disabled_produkter": {
    id: "routes/_disabled_produkter",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: disabled_produkter_exports
  },
  "routes/_disabled_products": {
    id: "routes/_disabled_products",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: disabled_products_exports
  },
  "routes/_disabled_logout": {
    id: "routes/_disabled_logout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: disabled_logout_exports
  },
  "routes/_disabled_login": {
    id: "routes/_disabled_login",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: disabled_login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
