var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// app/db.server.js
var require_db_server = __commonJS({
  "app/db.server.js"(exports, module2) {
    "use strict";
    var { PrismaClient } = require("@prisma/client");
    global.prisma || (global.prisma = new PrismaClient());
    global.prisma.$connect();
    module2.exports = { prisma: global.prisma };
  }
});

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
var tailwind_default = "/build/_assets/tailwind-3CD2E7NQ.css";

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
          userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "md:ml-8 md:my-0 my-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { asChild: !0, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/products", children: "Admin" }, void 0, !1, {
            fileName: "app/components/Navigation.jsx",
            lineNumber: 56,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Navigation.jsx",
            lineNumber: 55,
            columnNumber: 15
          }, this) }, void 0, !1, {
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

// @/components/ui/sonner.jsx
var import_next_themes = require("next-themes"), import_sonner = require("sonner"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Toaster = ({
  ...props
}) => {
  let { theme = "system" } = (0, import_next_themes.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_sonner.Toaster,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    },
    void 0,
    !1,
    {
      fileName: "@/components/ui/sonner.jsx",
      lineNumber: 11,
      columnNumber: 6
    },
    this
  );
};

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Navigation_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Toaster, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/products_.$productId.edit.jsx
var products_productId_edit_exports = {};
__export(products_productId_edit_exports, {
  action: () => action,
  default: () => EditProduct,
  loader: () => loader2
});

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

// app/routes/products_.$productId.edit.jsx
var import_db3 = __toESM(require_db_server()), import_node5 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/ui/switch.jsx
var React3 = __toESM(require("react")), SwitchPrimitives = __toESM(require("@radix-ui/react-switch"));
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Switch = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Textarea = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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

// app/routes/products_.$productId.edit.jsx
var import_react9 = require("react");

// app/components/ui/select.jsx
var React5 = __toESM(require("react")), SelectPrimitive = __toESM(require("@radix-ui/react-select")), import_lucide_react = require("lucide-react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_lucide_react.ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
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
var SelectContent = React5.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
var SelectLabel = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
var SelectItem = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_lucide_react.Check, { className: "h-4 w-4" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SelectPrimitive.ItemText, { children }, void 0, !1, {
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
var SelectSeparator = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label2 = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }, void 0, !1, {
  fileName: "app/components/ui/label.jsx",
  lineNumber: 14,
  columnNumber: 3
}, this));
Label2.displayName = LabelPrimitive.Root.displayName;

// app/components/ui/input.jsx
var React7 = __toESM(require("react"));
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Input = React7.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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

// app/components/AdminVariants.jsx
var import_react6 = require("@remix-run/react");

// app/components/ui/dialog.jsx
var React8 = __toESM(require("react")), DialogPrimitive = __toESM(require("@radix-ui/react-dialog")), import_lucide_react2 = require("lucide-react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), Dialog = DialogPrimitive.Root, DialogTrigger = DialogPrimitive.Trigger, DialogPortal = DialogPrimitive.Portal, DialogClose = DialogPrimitive.Close, DialogOverlay = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.jsx",
    lineNumber: 18,
    columnNumber: 3
  },
  this
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React8.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogOverlay, {}, void 0, !1, {
    fileName: "app/components/ui/dialog.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          DialogPrimitive.Close,
          {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_lucide_react2.X, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/components/ui/dialog.jsx",
                lineNumber: 41,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, !1, {
                fileName: "app/components/ui/dialog.jsx",
                lineNumber: 42,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ui/dialog.jsx",
            lineNumber: 39,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/dialog.jsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 29,
  columnNumber: 3
}, this));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  "div",
  {
    className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.jsx",
    lineNumber: 53,
    columnNumber: 3
  },
  this
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.jsx",
    lineNumber: 63,
    columnNumber: 3
  },
  this
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.jsx",
    lineNumber: 70,
    columnNumber: 3
  },
  this
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.jsx",
    lineNumber: 78,
    columnNumber: 3
  },
  this
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// app/components/AdminVariants.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AdminVariants({ variants }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "my-4 rounded-lg bg-white shadow-lg p-4", children: variants.map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { className: "m-2", variant: "outline", children: variant.name }, void 0, !1, {
      fileName: "app/components/AdminVariants.jsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/AdminVariants.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DialogTitle, { children: [
        "Rediger ",
        variant.name
      ] }, void 0, !0, {
        fileName: "app/components/AdminVariants.jsx",
        lineNumber: 25,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react6.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "variantId", value: variant.id }, void 0, !1, {
          fileName: "app/components/AdminVariants.jsx",
          lineNumber: 27,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Label2, { htmlFor: `name-${variant.id}`, children: "Navn/V\xE6gt" }, void 0, !1, {
            fileName: "app/components/AdminVariants.jsx",
            lineNumber: 29,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            Input,
            {
              type: "text",
              name: "name",
              id: `name-${variant.id}`,
              defaultValue: variant.name,
              className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminVariants.jsx",
              lineNumber: 30,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AdminVariants.jsx",
          lineNumber: 28,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Label2, { htmlFor: `price-${variant.id}`, children: "Pris (kr/kg)" }, void 0, !1, {
            fileName: "app/components/AdminVariants.jsx",
            lineNumber: 40,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            Input,
            {
              type: "number",
              name: "price",
              id: `price-${variant.id}`,
              defaultValue: variant.price,
              className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminVariants.jsx",
              lineNumber: 41,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AdminVariants.jsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Label2, { htmlFor: `weight-${variant.id}`, children: "Lager" }, void 0, !1, {
            fileName: "app/components/AdminVariants.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            Input,
            {
              type: "number",
              name: "stock",
              id: `stock-${variant.id}`,
              defaultValue: variant.stock,
              className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminVariants.jsx",
              lineNumber: 52,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AdminVariants.jsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DialogClose, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex justify-between gap-4 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            Button,
            {
              type: "submit",
              name: "actionType",
              value: "updateVariant",
              className: "bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600",
              children: "Gem"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminVariants.jsx",
              lineNumber: 62,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            Button,
            {
              type: "submit",
              name: "intent",
              value: "deleteVariant",
              variant: "outline",
              children: [
                "Slet ",
                variant.name
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/AdminVariants.jsx",
              lineNumber: 70,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AdminVariants.jsx",
          lineNumber: 61,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/AdminVariants.jsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)
      ] }, variant.id, !0, {
        fileName: "app/components/AdminVariants.jsx",
        lineNumber: 26,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AdminVariants.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this)
  ] }, variant.id, !0, {
    fileName: "app/components/AdminVariants.jsx",
    lineNumber: 18,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/AdminVariants.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/ui/alert-dialog.jsx
var React10 = __toESM(require("react")), AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"));

// @/components/ui/button.jsx
var React9 = __toESM(require("react")), import_react_slot2 = require("@radix-ui/react-slot"), import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), buttonVariants2 = (0, import_class_variance_authority3.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
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
), Button2 = React9.forwardRef(({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  asChild ? import_react_slot2.Slot : "button",
  {
    className: cn(buttonVariants2({ variant, size, className })),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "@/components/ui/button.jsx",
    lineNumber: 39,
    columnNumber: 6
  },
  this
));
Button2.displayName = "Button";

// app/components/ui/alert-dialog.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), AlertDialog = AlertDialogPrimitive.Root, AlertDialogTrigger = AlertDialogPrimitive.Trigger, AlertDialogPortal = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AlertDialogPrimitive.Portal, { className: cn(className), ...props }, void 0, !1, {
  fileName: "app/components/ui/alert-dialog.jsx",
  lineNumber: 14,
  columnNumber: 3
}, this);
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;
var AlertDialogOverlay = React10.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    AlertDialogPrimitive.Overlay,
    {
      className: cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      ...props,
      ref
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/alert-dialog.jsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  )
);
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AlertDialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AlertDialogOverlay, {}, void 0, !1, {
    fileName: "app/components/ui/alert-dialog.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/alert-dialog.jsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/alert-dialog.jsx",
  lineNumber: 33,
  columnNumber: 3
}, this));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.jsx",
    lineNumber: 48,
    columnNumber: 3
  },
  this
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.jsx",
    lineNumber: 59,
    columnNumber: 3
  },
  this
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.jsx",
    lineNumber: 70,
    columnNumber: 3
  },
  this
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React10.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    AlertDialogPrimitive.Description,
    {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/alert-dialog.jsx",
      lineNumber: 80,
      columnNumber: 5
    },
    this
  )
);
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants2(), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.jsx",
    lineNumber: 91,
    columnNumber: 3
  },
  this
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants2({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.jsx",
    lineNumber: 100,
    columnNumber: 3
  },
  this
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// app/routes/products_.$productId.edit.jsx
var import_react10 = require("react");

// app/components/ui/tabs.jsx
var React11 = __toESM(require("react")), TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), Tabs = TabsPrimitive.Root, TabsList = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tabs.jsx",
    lineNumber: 11,
    columnNumber: 3
  },
  this
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tabs.jsx",
    lineNumber: 22,
    columnNumber: 3
  },
  this
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tabs.jsx",
    lineNumber: 33,
    columnNumber: 3
  },
  this
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// app/components/AdminVariantNew.jsx
var import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function AdminVariantNew() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Button, { className: "m-2", variant: "outline", children: "+ Tilf\xF8j variant" }, void 0, !1, {
      fileName: "app/components/AdminVariantNew.jsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/AdminVariantNew.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DialogTitle, { children: "Tilf\xF8j ny variant" }, void 0, !1, {
        fileName: "app/components/AdminVariantNew.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react7.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Label2, { htmlFor: "name", children: "Navn/V\xE6gt" }, void 0, !1, {
            fileName: "app/components/AdminVariantNew.jsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            Input,
            {
              type: "text",
              name: "name",
              id: "name",
              className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminVariantNew.jsx",
              lineNumber: 27,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AdminVariantNew.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Label2, { htmlFor: "name", className: "block text-gray-600 mb-2", children: "Pris" }, void 0, !1, {
            fileName: "app/components/AdminVariantNew.jsx",
            lineNumber: 35,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            Input,
            {
              type: "number",
              name: "price",
              id: "price",
              className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminVariantNew.jsx",
              lineNumber: 39,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AdminVariantNew.jsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Label2, { htmlFor: "stock", className: "block text-gray-600 mb-2", children: "Lager" }, void 0, !1, {
            fileName: "app/components/AdminVariantNew.jsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            Input,
            {
              type: "number",
              name: "stock",
              id: "stock",
              className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminVariantNew.jsx",
              lineNumber: 52,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/AdminVariantNew.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DialogClose, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          Button,
          {
            type: "submit",
            name: "actionType",
            value: "newVariant",
            className: "bg-orange-400 text-white py-2 px-4 mt-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600",
            children: "Gem"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AdminVariantNew.jsx",
            lineNumber: 61,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/AdminVariantNew.jsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AdminVariantNew.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AdminVariantNew.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AdminVariantNew.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/AdminVariantNew.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/backendFunctions/deleteFunctions.jsx
var import_db = __toESM(require_db_server());
async function deleteCategory(categoryId) {
  return import_db.prisma.$transaction(async (prisma10) => {
    let productsInCategory = await prisma10.product.findMany({
      where: {
        categoryId
      },
      select: {
        id: !0
      }
    });
    for (let product of productsInCategory)
      await prisma10.ProductVariant.deleteMany({
        where: {
          productId: product.id
        }
      });
    await prisma10.Product.deleteMany({
      where: {
        categoryId
      }
    }), await prisma10.Category.delete({
      where: {
        id: categoryId
      }
    });
  });
}
async function deleteProduct(productId2) {
  return await import_db.prisma.$transaction(async (prisma10) => {
    (await prisma10.productVariant.findMany({
      where: { productId: productId2 }
    })).length > 0 && await prisma10.productVariant.deleteMany({
      where: { productId: productId2 }
    }), await prisma10.product.delete({
      where: { id: productId2 }
    });
  });
}
async function deleteVariant(variantId) {
  return await import_db.prisma.productVariant.delete({
    where: { id: variantId }
  });
}

// app/routes/products_.$productId.edit.jsx
var import_sonner3 = require("sonner");

// app/components/backendFunctions/createFunctions.jsx
var import_db2 = __toESM(require_db_server());
async function newCategory(form) {
  await import_db2.prisma.Category.create({
    data: {
      name: form.get("name")
    }
  });
}
async function newVariant(form, productId2) {
  await import_db2.prisma.ProductVariant.create({
    data: {
      name: form.get("name"),
      price: parseInt(form.get("price"), 10),
      stock: parseInt(form.get("stock"), 10),
      product: {
        connect: { id: productId2 }
      }
    }
  });
}

// app/routes/products_.$productId.edit.jsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
async function loader2({ params, request }) {
  await requireUserSession(request), productId = parseInt(params.productId, 10);
  let product = await import_db3.prisma.product.findUnique({
    where: { id: productId },
    include: {
      variants: !0
    }
  });
  console.log(product);
  let category = await import_db3.prisma.category.findUnique({
    where: { id: product.categoryId }
  }), categories = await import_db3.prisma.category.findMany();
  if (!product)
    throw new Response(`Dette produkt findes ikke: ${params.productId}`, {
      status: 404
    });
  return (0, import_node5.json)({ product, category, categories, productId });
}
async function action({ request, params }) {
  let form = await request.formData(), formValues = Object.fromEntries(form), productId2 = parseInt(params.productId, 10);
  console.log(form), console.log(formValues);
  try {
    let intent = form.get("intent") || "", actionType = form.get("actionType") || "";
    if (intent)
      switch (intent) {
        case "deleteProduct":
          try {
            return await deleteProduct(productId2), (0, import_node5.redirect)("/products?deleted=true");
          } catch (error) {
            return console.error(error), (0, import_node5.json)(
              {
                status: "error",
                message: "Fejl ved sletning af produkt"
              },
              { status: 500 }
            );
          }
        case "deleteVariant":
          try {
            let variantId = parseInt(form.get("variantId"), 10);
            return await deleteVariant(variantId), (0, import_node5.json)({
              status: "success",
              message: "Variant blev slettet"
            });
          } catch (error) {
            return console.error(error), (0, import_node5.json)(
              {
                status: "error",
                message: "Fejl ved sletning af variant"
              },
              { status: 500 }
            );
          }
      }
    if (actionType)
      switch (actionType) {
        case "updateProduct":
          let name = form.get("name").trim();
          if (name) {
            let categoryName = form.get("category"), newCategory2 = await import_db3.prisma.category.findFirst({
              where: {
                name: categoryName
              }
            });
            return await import_db3.prisma.product.update({
              where: {
                id: productId2
              },
              data: {
                name,
                stock: form.has("stock") ? parseInt(form.get("stock"), 10) : 0,
                price: form.has("price") ? parseInt(form.get("price"), 10) : 0,
                weight: form.has("weight") ? parseInt(form.get("weight"), 10) : 0,
                description: form.get("description"),
                show: form.get("show") === "on",
                recommended: form.get("recommended") === "on",
                category: {
                  connect: { id: newCategory2.id }
                }
              }
            }), (0, import_node5.redirect)("/products");
          } else
            return (0, import_node5.json)(
              { errorMessage: "Navn skal udfyldes", values: formValues },
              { status: 400 }
            );
        case "updateVariant":
          let variantId = parseInt(form.get("variantId"), 10);
          await import_db3.prisma.ProductVariant.update({
            where: {
              id: variantId
            },
            data: {
              name: form.get("name"),
              price: parseInt(form.get("price"), 10),
              stock: parseInt(form.get("stock"), 10)
            }
          });
          break;
        case "newVariant":
          try {
            return await newVariant(form, productId2), (0, import_node5.json)({
              status: "success",
              message: "Variant blev oprettet"
            });
          } catch {
            return (0, import_node5.json)(
              {
                status: "error",
                message: "Fejl ved oprettelse af variant"
              },
              { status: 500 }
            );
          }
      }
    return null;
  } catch (error) {
    return console.log(error), (0, import_node5.json)({ errors: error.errors, values: formValues }, { status: 400 });
  }
}
function EditProduct() {
  let { product, category, categories } = (0, import_react8.useLoaderData)(), actionData = (0, import_react8.useActionData)(), [activeShow, setActiveShow] = (0, import_react9.useState)(product.show), [activeRec, setActiveRec] = (0, import_react9.useState)(product.recommended), [selectedValue, setSelectedValue] = (0, import_react9.useState)(category.id), deleteBtn = (0, import_react10.useRef)(null), [searchParams] = (0, import_react8.useSearchParams)(), success = searchParams.get("success");
  return (0, import_react9.useEffect)(() => {
    (actionData == null ? void 0 : actionData.status) === "success" ? import_sonner3.toast.success(actionData.message) : (actionData == null ? void 0 : actionData.status) === "error" && import_sonner3.toast.error(actionData.message);
  }, [actionData]), (0, import_react9.useEffect)(() => {
    success === "true" && import_sonner3.toast.success("Produktet blev oprettet");
  }, [success]), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "max-w-lg container mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(BackButton, {}, void 0, !1, {
      fileName: "app/routes/products_.$productId.edit.jsx",
      lineNumber: 232,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Tabs, { defaultValue: "product", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TabsList, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TabsTrigger, { value: "product", children: [
          "Redig\xE9r ",
          product.name
        ] }, void 0, !0, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TabsTrigger, { value: "variant", children: "Varianter" }, void 0, !1, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 236,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products_.$productId.edit.jsx",
        lineNumber: 234,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TabsContent, { value: "product", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react8.Form, { method: "post", className: "mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: (actionData == null ? void 0 : actionData.errorMessage) && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mb-3 rounded border border-red-500 bg-red-50 p-2 text-red-900", children: actionData == null ? void 0 : actionData.errorMessage }, void 0, !1, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 242,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 240,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Input, { type: "hidden", name: "actionType", value: "updateProduct" }, void 0, !1, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 247,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label2, { htmlFor: "name", className: "block text-gray-600 mb-2", children: "Navn" }, void 0, !1, {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 249,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            Input,
            {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Navn",
              defaultValue: product == null ? void 0 : product.name,
              className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 253,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label2, { htmlFor: "description", className: "block text-gray-600 mb-2", children: "Beskrivelse" }, void 0, !1, {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 264,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            Textarea,
            {
              type: "text",
              name: "description",
              id: "description",
              placeholder: "Beskrivelse",
              defaultValue: product == null ? void 0 : product.description,
              className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 267,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 263,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mb-4 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-1/2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label2, { htmlFor: "category", className: "block text-gray-600 mb-2", children: "Kategori" }, void 0, !1, {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 278,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              Select,
              {
                onValueChange: (newValue) => setSelectedValue(newValue),
                name: "category",
                defaultValue: category.name,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SelectValue, { placeholder: "V\xE6lg kategori" }, void 0, !1, {
                    fileName: "app/routes/products_.$productId.edit.jsx",
                    lineNumber: 287,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/products_.$productId.edit.jsx",
                    lineNumber: 286,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SelectContent, { children: categories.map((category2) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SelectItem, { value: category2.name, children: category2.name }, category2.id, !1, {
                    fileName: "app/routes/products_.$productId.edit.jsx",
                    lineNumber: 291,
                    columnNumber: 23
                  }, this)) }, void 0, !1, {
                    fileName: "app/routes/products_.$productId.edit.jsx",
                    lineNumber: 289,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 281,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 277,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-1/2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label2, { htmlFor: "stock", className: "block text-gray-600 mb-2", children: "Lagerbeholdning" }, void 0, !1, {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 299,
              columnNumber: 17
            }, this),
            product.variants.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              Input,
              {
                type: "number",
                name: "stock",
                id: "stock",
                placeholder: "Lagerbeholdning",
                defaultValue: product == null ? void 0 : product.stock,
                className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 303,
                columnNumber: 19
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-sm text-gray-400", children: "\xC6ndre lager p\xE5 individuelle varianter" }, void 0, !1, {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 312,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 298,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 276,
          columnNumber: 13
        }, this),
        product.variants.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mb-4 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-1/2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label2, { htmlFor: "price", className: "block text-gray-600 mb-2", children: "Pris" }, void 0, !1, {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 321,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              Input,
              {
                type: "number",
                name: "price",
                id: "price",
                placeholder: "Pris",
                defaultValue: product == null ? void 0 : product.price,
                className: "w-[180px] border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 324,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 320,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-1/2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label2, { htmlFor: "stock", className: "block text-gray-600 mb-2", children: "V\xE6gt (g)" }, void 0, !1, {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 334,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              Input,
              {
                type: "number",
                name: "weight",
                id: "weight",
                placeholder: "Lagerbeholdning",
                defaultValue: product == null ? void 0 : product.weight,
                className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 338,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 333,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 319,
          columnNumber: 15
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mb-4 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-1/2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label2, { htmlFor: "show", className: "block text-gray-600 mb-2", children: "Skal den vises?" }, void 0, !1, {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 351,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 354,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              "input",
              {
                type: "hidden",
                name: "show",
                value: activeShow ? "on" : "off"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 361,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 350,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              Label2,
              {
                htmlFor: "recommended",
                className: "block text-gray-600 mb-2",
                children: "Anbefales p\xE5 forsiden?"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 369,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 375,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              "input",
              {
                type: "hidden",
                name: "recommended",
                value: activeRec ? "on" : "off"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 382,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 368,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 349,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex justify-between gap-4 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            Button,
            {
              ref: deleteBtn,
              name: "intent",
              value: "",
              type: "submit",
              className: "bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600",
              children: "Gem"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 391,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AlertDialog, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AlertDialogTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Button, { variant: "outline", children: "Slet produkt" }, void 0, !1, {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 403,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 402,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AlertDialogContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AlertDialogHeader, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AlertDialogTitle, { children: [
                  "Er du sikker p\xE5 at du vil slette ",
                  product.name,
                  "?"
                ] }, void 0, !0, {
                  fileName: "app/routes/products_.$productId.edit.jsx",
                  lineNumber: 407,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AlertDialogDescription, { children: "Dette fjerner produktet og tilh\xF8rende varianter permanent" }, void 0, !1, {
                  fileName: "app/routes/products_.$productId.edit.jsx",
                  lineNumber: 410,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 406,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AlertDialogFooter, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AlertDialogCancel, { children: "Annull\xE9r" }, void 0, !1, {
                  fileName: "app/routes/products_.$productId.edit.jsx",
                  lineNumber: 415,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AlertDialogAction, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                  Button,
                  {
                    onClick: () => {
                      deleteBtn.current.value = "deleteProduct", deleteBtn.current.click();
                    },
                    variant: "outline",
                    children: "Bekr\xE6ft"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/products_.$productId.edit.jsx",
                    lineNumber: 417,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/products_.$productId.edit.jsx",
                  lineNumber: 416,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/products_.$productId.edit.jsx",
                lineNumber: 414,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/products_.$productId.edit.jsx",
              lineNumber: 405,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 401,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 390,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products_.$productId.edit.jsx",
        lineNumber: 239,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/products_.$productId.edit.jsx",
        lineNumber: 238,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TabsContent, { value: "variant", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
        product.variants && product.variants.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          AdminVariants,
          {
            variants: product.variants,
            productId: product.id
          },
          void 0,
          !1,
          {
            fileName: "app/routes/products_.$productId.edit.jsx",
            lineNumber: 436,
            columnNumber: 15
          },
          this
        ) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AdminVariantNew, {}, void 0, !1, {
          fileName: "app/routes/products_.$productId.edit.jsx",
          lineNumber: 442,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products_.$productId.edit.jsx",
        lineNumber: 434,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/products_.$productId.edit.jsx",
        lineNumber: 433,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products_.$productId.edit.jsx",
      lineNumber: 233,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products_.$productId.edit.jsx",
    lineNumber: 231,
    columnNumber: 5
  }, this);
}

// app/routes/produkter_.$productId.jsx
var produkter_productId_exports = {};
__export(produkter_productId_exports, {
  default: () => ProductPage,
  loader: () => loader3
});
var import_react12 = require("@remix-run/react"), import_node6 = require("@remix-run/node"), import_db4 = __toESM(require_db_server());

// app/components/MobilMenu.jsx
var import_react_scroll = require("react-scroll");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function MobilMenu({ category, active }) {
  let variant = active && "id" in active && active.id === category.id ? "outlineLunds" : "ghostNav";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_react_scroll.Link,
    {
      to: category.id.toString(),
      spy: !0,
      smooth: !0,
      duration: 600,
      offset: -130,
      className: `whitespace-nowrap hover:cursor-pointer m-2 justify-center border w-32 p-2 ${buttonVariants(
        {
          variant
        }
      )}`,
      children: category.name
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
var import_react11 = require("@remix-run/react");

// app/components/Stock.jsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Stock({ stock }) {
  let stockStatus = "", stockColor = "";
  return stock === 0 ? (stockStatus = "Ikke p\xE5 lager", stockColor = "rounded-full  bg-red-400 w-2.5 h-2.5") : stock >= 1 && stock <= 4 ? (stockStatus = "F\xE5 p\xE5 lager", stockColor = "rounded-full  bg-yellow-400 w-2.5 h-2.5") : (stockStatus = "P\xE5 lager", stockColor = "rounded-full bg-green-400 w-2.5 h-2.5"), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex  items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: stockColor }, void 0, !1, {
      fileName: "app/components/Stock.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "ml-1 text-xl", children: stockStatus }, void 0, !1, {
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

// app/components/ProductCardsInfo.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ProductCardsInfo({ product }) {
  return product.variants.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col items-start flex-basis-45 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "font-extrabold text-gray-800 font-sans text-lg  md:text-3xl lg:text-3xl xl:text-3xl", children: product.name }, void 0, !1, {
      fileName: "app/components/ProductCardsInfo.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-300", children: [
      product.price,
      " kr/kg"
    ] }, void 0, !0, {
      fileName: "app/components/ProductCardsInfo.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-600", children: [
      "Ca. ",
      product.weight,
      " g"
    ] }, void 0, !0, {
      fileName: "app/components/ProductCardsInfo.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "py-4 text-xl", children: [
      "Fra ",
      product.price,
      " kr,-"
    ] }, void 0, !0, {
      fileName: "app/components/ProductCardsInfo.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-16 flex flex-row justify-between w-full h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Stock, { stock: product.stock }, void 0, !1, {
        fileName: "app/components/ProductCardsInfo.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "img",
        {
          src: pil_default,
          className: "w-6 h-6 my-auto",
          alt: "Navigations pil"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ProductCardsInfo.jsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ProductCardsInfo.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProductCardsInfo.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { class: "flex flex-col items-start p-4 h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "font-extrabold text-gray-800 font-sans text-lg  md:text-3xl lg:text-3xl xl:text-3xl", children: product.name }, void 0, !1, {
      fileName: "app/components/ProductCardsInfo.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-gray-600 break-words", children: product.description }, void 0, !1, {
      fileName: "app/components/ProductCardsInfo.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { class: "w-full flex flex-row justify-end mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "img",
      {
        src: pil_default,
        className: "w-6 h-6 my-auto",
        alt: "Navigations pil"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductCardsInfo.jsx",
        lineNumber: 34,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ProductCardsInfo.jsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProductCardsInfo.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this);
}

// app/components/ProductCategory.jsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
global.Buffer = global.Buffer || require("buffer").Buffer;
function ProductCategory({ products, category }) {
  let filteredProducts = products.filter(
    (product) => product.categoryId === category.id
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col md:m-8 lg:m-2 sm:m-16 m-4 lg:mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-5xl font-black", id: category.id.toString(), children: category.name }, void 0, !1, {
      fileName: "app/components/ProductCategory.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-1 gap-10 sm:w-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 auto-rows-[600px,auto] max-w-[800px]", children: filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "article",
      {
        className: "list-decimal mb-4 overflow-hidden rounded w-full shadow-lg cursor-pointer hover:shadow-xl",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react11.Link, { to: `${product.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "bg-red object-cover rounded-t-md h-2/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
              lineNumber: 29,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/ProductCategory.jsx",
            lineNumber: 28,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ProductCardsInfo, { product }, void 0, !1, {
            fileName: "app/components/ProductCategory.jsx",
            lineNumber: 35,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ProductCategory.jsx",
          lineNumber: 27,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/ProductCategory.jsx",
          lineNumber: 26,
          columnNumber: 15
        }, this)
      },
      product.id,
      !1,
      {
        fileName: "app/components/ProductCategory.jsx",
        lineNumber: 22,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/ProductCategory.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProductCategory.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/ProductCardInfo.jsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function ProductCardInfo({ product }) {
  return (product == null ? void 0 : product.variants.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col flex-wrap my-10", children: product.variants.map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "border-t border-gray-300 pt-5 mt-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex w-full flex-row justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-xl", children: product.name }, void 0, !1, {
        fileName: "app/components/ProductCardInfo.jsx",
        lineNumber: 10,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-xl", children: [
        variant.price,
        " kr,-"
      ] }, void 0, !0, {
        fileName: "app/components/ProductCardInfo.jsx",
        lineNumber: 11,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductCardInfo.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "w-full flex justify-start mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Stock, { stock: variant.stock }, void 0, !1, {
      fileName: "app/components/ProductCardInfo.jsx",
      lineNumber: 14,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/ProductCardInfo.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, variant.id, !0, {
    fileName: "app/components/ProductCardInfo.jsx",
    lineNumber: 8,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/ProductCardInfo.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "info my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "info flex flex-row text-start flex-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex-none w-1/2 mt-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-base text-gray-500", children: "Kilopris" }, void 0, !1, {
        fileName: "app/components/ProductCardInfo.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-xl", children: [
        product.price,
        " kr/kg"
      ] }, void 0, !0, {
        fileName: "app/components/ProductCardInfo.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductCardInfo.jsx",
      lineNumber: 24,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex-none w-1/2 mt-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-base text-gray-500", children: "Generel V\xE6gt" }, void 0, !1, {
        fileName: "app/components/ProductCardInfo.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-xl", children: [
        "Ca. ",
        product.weight,
        " g"
      ] }, void 0, !0, {
        fileName: "app/components/ProductCardInfo.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductCardInfo.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex-none w-1/2 mt-auto ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-base text-gray-500 mt-6", children: "Fra" }, void 0, !1, {
        fileName: "app/components/ProductCardInfo.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-xl", children: [
        (product == null ? void 0 : product.weight) / 1e3 * product.price,
        " kr,-"
      ] }, void 0, !0, {
        fileName: "app/components/ProductCardInfo.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductCardInfo.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex-none w-1/2 mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Stock, { stock: product.stock }, void 0, !1, {
      fileName: "app/components/ProductCardInfo.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ProductCardInfo.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProductCardInfo.jsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ProductCardInfo.jsx",
    lineNumber: 22,
    columnNumber: 7
  }, this);
}

// app/routes/produkter_.$productId.jsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
async function loader3({ request, params }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get("userId");
  productId = parseInt(params.productId, 10), console.log(productId);
  let product = await import_db4.prisma.Product.findUnique({
    where: { id: productId },
    include: {
      variants: !0
    }
  });
  return console.log(product), (0, import_node6.json)({ product, userId });
}
function ProductPage() {
  let { product } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full md:flex-row flex flex-col-reverse", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col md:max-w-[50%] w-full sm:min-h-[calc(100vh-83px)] h-full p-8 sm:p-0 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "h-full m-auto w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "my-4 block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(BackButton, {}, void 0, !1, {
        fileName: "app/routes/produkter_.$productId.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/produkter_.$productId.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { className: "text-5xl", children: product.name }, void 0, !1, {
          fileName: "app/routes/produkter_.$productId.jsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-sm sm:text-lg break-words", children: product.description }, void 0, !1, {
          fileName: "app/routes/produkter_.$productId.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/produkter_.$productId.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ProductCardInfo, { product }, void 0, !1, {
        fileName: "app/routes/produkter_.$productId.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/produkter_.$productId.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/produkter_.$productId.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "md:max-w-[50%] w-full sm:h-[calc(100vh-83px)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full bg-white hidden sticky top-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(BackButton, { className: "w-full p-16" }, void 0, !1, {
        fileName: "app/routes/produkter_.$productId.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/produkter_.$productId.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "img",
        {
          className: "object-cover sm:h-full w-full",
          src: product.image,
          alt: product.name
        },
        void 0,
        !1,
        {
          fileName: "app/routes/produkter_.$productId.jsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/produkter_.$productId.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/produkter_.$productId.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/products_.new.jsx
var products_new_exports = {};
__export(products_new_exports, {
  action: () => action2,
  default: () => NewProduct,
  loader: () => loader4
});
var import_db5 = __toESM(require_db_server()), import_node7 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_react14 = require("react");

// app/components/ui/checkbox.jsx
var React12 = __toESM(require("react")), CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox")), import_lucide_react3 = require("lucide-react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), Checkbox = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_lucide_react3.Check, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/checkbox.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/checkbox.jsx",
      lineNumber: 17,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/checkbox.jsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// app/components/NewProductVariant.jsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function NewProductVariant() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex-col justify-center w-full h-full mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Label2, { htmlFor: "price", className: "block text-gray-600 mb-2", children: "Pris (Kilopris)" }, void 0, !1, {
        fileName: "app/components/NewProductVariant.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        Input,
        {
          type: "number",
          name: "price",
          id: "price",
          className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewProductVariant.jsx",
          lineNumber: 12,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NewProductVariant.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Label2, { htmlFor: "weight", className: "block text-gray-600 mb-2", children: "V\xE6gt (Generel v\xE6gt i gram)" }, void 0, !1, {
        fileName: "app/components/NewProductVariant.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        Input,
        {
          type: "number",
          name: "weight",
          id: "weight",
          className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewProductVariant.jsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NewProductVariant.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Label2, { htmlFor: "stock", className: "block text-gray-600 mb-2", children: "Lager" }, void 0, !1, {
        fileName: "app/components/NewProductVariant.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        Input,
        {
          type: "number",
          name: "stock",
          id: "stock",
          className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewProductVariant.jsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NewProductVariant.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewProductVariant.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/products_.new.jsx
var import_sonner4 = require("sonner"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  await requireUserSession(request);
  let categories = await import_db5.prisma.category.findMany();
  return (0, import_node7.json)({ categories });
}
async function action2({ request }) {
  let session = await requireUserSession(request), form = await request.formData(), formValues = Object.fromEntries(form);
  console.log(form.get("image")), console.log(formValues);
  let stockValue = form.get("stock"), stock = stockValue === null ? 0 : parseInt(stockValue, 10);
  console.log(form.get("category"));
  try {
    let categoryName = form.get("category");
    console.log(categoryName);
    let name = form.get("name"), price = form.get("price"), weight = form.get("weight");
    if (!name)
      return (0, import_node7.json)(
        { errorMessage: "Udfyld navn", values: formValues },
        { status: 400 }
      );
    let categoryId = await import_db5.prisma.category.findFirst({
      where: {
        name: categoryName
      },
      select: {
        id: !0
      }
    });
    if (!categoryId)
      return (0, import_node7.json)(
        { errorMessage: "V\xE6lg kategori", values: formValues },
        { status: 400 }
      );
    let isCheckboxChecked = form.get("moreVariants") === "on";
    if (!isCheckboxChecked) {
      if (!price)
        return (0, import_node7.json)(
          { errorMessage: "Udfyld pris", values: formValues },
          { status: 400 }
        );
      if (!weight)
        return (0, import_node7.json)(
          { errorMessage: "Udfyld v\xE6gt", values: formValues },
          { status: 400 }
        );
    }
    let productData = {
      weight: parseInt(form.get("weight"), 10),
      price: parseInt(form.get("price"), 10),
      name: form.get("name"),
      description: form.get("description"),
      show: form.get("show") === "on",
      recommended: form.get("recommended") === "on",
      image: form.get("image"),
      categoryId: Number(categoryId.id)
    }, stockValue2 = form.get("stock");
    stockValue2 ? productData.stock = parseInt(stockValue2, 10) : productData.stock = 0;
    let product = await import_db5.prisma.product.create({
      data: productData
    });
    return isCheckboxChecked ? (0, import_node7.redirect)(`/products/${product.id}/edit?success=true`) : (0, import_node7.redirect)("/products?success=true");
  } catch (error) {
    return console.error("Fejl ved oprettelse af produkt:", error), (0, import_node7.json)({ errors: error.errors, values: formValues }, { status: 400 });
  }
}
function NewProduct() {
  var _a, _b;
  let actionData = (0, import_react13.useActionData)(), [activeShow, setActiveShow] = (0, import_react14.useState)(""), [activeRec, setActiveRec] = (0, import_react14.useState)(""), [selectedValue, setSelectedValue] = (0, import_react14.useState)(""), [isVariantChecked, setIsVariantChecked] = (0, import_react14.useState)(!1), test = (0, import_react14.useRef)(null), { categories } = (0, import_react13.useLoaderData)(), handleCheckboxChange = (checked) => {
    setIsVariantChecked(checked);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "max-w-lg container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(BackButton, {}, void 0, !1, {
      fileName: "app/routes/products_.new.jsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react13.Form, { method: "post", className: " mx-auto", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h1", { className: "text-2xl font-semibold mb-4", children: "Tilf\xF8j produkt" }, void 0, !1, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
          fileName: "app/routes/products_.new.jsx",
          lineNumber: 149,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "hidden", name: "image", ref: test }, void 0, !1, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 170,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Label2, { htmlFor: "name", className: "block text-gray-600 mb-2", children: "Navn" }, void 0, !1, {
          fileName: "app/routes/products_.new.jsx",
          lineNumber: 172,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 176,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Label2, { htmlFor: "description", className: "block text-gray-600 mb-2", children: "Beskrivelse" }, void 0, !1, {
          fileName: "app/routes/products_.new.jsx",
          lineNumber: 187,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 190,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Label2, { htmlFor: "category", className: "block text-gray-600 mb-2", children: "Kategori" }, void 0, !1, {
          fileName: "app/routes/products_.new.jsx",
          lineNumber: 201,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Select, { name: "category", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SelectValue, { placeholder: "V\xE6lg kategori" }, void 0, !1, {
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 206,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 205,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SelectContent, { children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SelectItem, { value: category.name, children: category.name }, category.id, !1, {
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 210,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 208,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products_.new.jsx",
          lineNumber: 204,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 200,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mb-4 flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Label2, { htmlFor: "show", className: "block text-gray-600 mb-2", children: "Skal den vises?" }, void 0, !1, {
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 219,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
              fileName: "app/routes/products_.new.jsx",
              lineNumber: 222,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/products_.new.jsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Label2, { htmlFor: "recommended", className: "block text-gray-600 mb-2", children: "Anbefales p\xE5 forsiden?" }, void 0, !1, {
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 232,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
              fileName: "app/routes/products_.new.jsx",
              lineNumber: 235,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/products_.new.jsx",
          lineNumber: 231,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 217,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "items-top flex space-x-2 mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          Checkbox,
          {
            id: "moreVariants",
            name: "moreVariants",
            onCheckedChange: handleCheckboxChange
          },
          void 0,
          !1,
          {
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 245,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grid gap-1.5 leading-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
            "label",
            {
              htmlFor: "terms",
              className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              children: "Har dette produkt flere under-varianter?"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/products_.new.jsx",
              lineNumber: 251,
              columnNumber: 13
            },
            this
          ),
          isVariantChecked && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: 'Tilf\xF8j varianter p\xE5 rediger-produkt siden, efter at have trykket "Gem"' }, void 0, !1, {
            fileName: "app/routes/products_.new.jsx",
            lineNumber: 258,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products_.new.jsx",
          lineNumber: 250,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 244,
        columnNumber: 9
      }, this),
      !isVariantChecked && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(NewProductVariant, {}, void 0, !1, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 266,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: (actionData == null ? void 0 : actionData.errorMessage) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "mb-3 rounded border border-red-500 bg-red-50 p-2 text-red-900", children: actionData == null ? void 0 : actionData.errorMessage }, void 0, !1, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 269,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 267,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex justify-between gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        Button,
        {
          type: "submit",
          className: "bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600",
          children: "Gem"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/products_.new.jsx",
          lineNumber: 275,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/products_.new.jsx",
        lineNumber: 274,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products_.new.jsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products_.new.jsx",
    lineNumber: 144,
    columnNumber: 5
  }, this);
}

// app/routes/produkter.jsx
var produkter_exports = {};
__export(produkter_exports, {
  default: () => ProductPage2,
  loader: () => loader5
});
var import_react15 = require("@remix-run/react"), import_node8 = require("@remix-run/node"), import_db6 = __toESM(require_db_server());

// app/components/ComMenu.jsx
var import_react_scroll2 = require("react-scroll");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function ComMenu({ category, active }) {
  let variant = active && "id" in active && active.id === category.id ? "outlineLunds" : "ghostNav";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    import_react_scroll2.Link,
    {
      to: category.id.toString(),
      spy: !0,
      smooth: !0,
      duration: 600,
      offset: -16,
      className: `whitespace-nowrap hover:cursor-pointer w-full ${buttonVariants(
        {
          variant
        }
      )}`,
      children: category.name
    },
    void 0,
    !1,
    {
      fileName: "app/components/ComMenu.jsx",
      lineNumber: 9,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ComMenu.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/produkter.jsx
var import_react_intersection_observer = require("react-intersection-observer"), import_react16 = require("react"), import_core = require("@react-hooks-library/core"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
async function loader5({ request }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get("userId"), products = await import_db6.prisma.product.findMany({
    where: {
      show: !0
    },
    include: {
      variants: !0
    }
  }), categories = await import_db6.prisma.category.findMany({
    select: {
      id: !0,
      name: !0
    }
  });
  return console.log(products, categories), (0, import_node8.json)({ products, categories });
}
function ProductPage2() {
  let { products, categories } = (0, import_react15.useLoaderData)(), [active, setActive] = (0, import_react16.useState)(categories[0] || null), categoryWrapper = (0, import_react16.useRef)(null);
  return (0, import_react16.useEffect)(() => {
    let handleScroll = (event) => {
      console.log(categoryWrapper.current.children);
      var list = Array.from(categoryWrapper.current.children);
      list.forEach((element) => {
        if (console.log(
          "Element ID:",
          element.id,
          "Position:",
          element.getBoundingClientRect().top
        ), element.getBoundingClientRect().top + scrollY - 250 < scrollY) {
          console.log("Setting active category to:", element.id);
          let activeCategory = categories.find(
            (c) => c.id.toString() === element.id
          );
          activeCategory && setActive(activeCategory);
        }
      });
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: " mx-auto flex flex-col md:flex-row place-content-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "sticky top-0  md:hidden bg-white pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "text-gray-700 font-bold text-3xl md:ml-8 lg:ml-2 sm:ml-16 ml-4", children: "Kategorier" }, void 0, !1, {
        fileName: "app/routes/produkter.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "no-scrollbar overflow-x-auto whitespace-nowrap p-2", children: categories == null ? void 0 : categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        MobilMenu,
        {
          category,
          active
        },
        category.id,
        !1,
        {
          fileName: "app/routes/produkter.jsx",
          lineNumber: 84,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/produkter.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/produkter.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "hidden md:block mx-10 min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "sticky top-[calc(50vh-83px)]", children: categories == null ? void 0 : categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(ComMenu, { category, active }, category.id, !1, {
      fileName: "app/routes/produkter.jsx",
      lineNumber: 97,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/produkter.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/produkter.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { ref: categoryWrapper, children: categories == null ? void 0 : categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { id: category.id.toString(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      ProductCategory,
      {
        products,
        category
      },
      category.id,
      !1,
      {
        fileName: "app/routes/produkter.jsx",
        lineNumber: 107,
        columnNumber: 15
      },
      this
    ) }, category.id, !1, {
      fileName: "app/routes/produkter.jsx",
      lineNumber: 106,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/produkter.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/produkter.jsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

// app/routes/products.jsx
var products_exports = {};
__export(products_exports, {
  action: () => action3,
  default: () => AdminPage,
  loader: () => loader6
});
var import_react19 = require("@remix-run/react"), import_node9 = require("@remix-run/node"), import_db7 = __toESM(require_db_server());

// app/components/ProductCategoryAdmin.jsx
var import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function ProductCategoryAdmin({ products, category, id }) {
  let filteredProducts = products.filter(
    (product) => product.categoryId === id
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "list-decimal mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "w-full flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { children: category.name }, void 0, !1, {
        fileName: "app/components/ProductCategoryAdmin.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex justify-between gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlertDialog, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlertDialogTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Button, { variant: "link", children: "Slet" }, void 0, !1, {
          fileName: "app/components/ProductCategoryAdmin.jsx",
          lineNumber: 27,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/ProductCategoryAdmin.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlertDialogContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlertDialogHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlertDialogTitle, { children: [
              "Er du sikker p\xE5 at du vil slette ",
              category.name,
              " og alle dets produkter og varianter?"
            ] }, void 0, !0, {
              fileName: "app/components/ProductCategoryAdmin.jsx",
              lineNumber: 31,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlertDialogDescription, { children: "Dette er permanent" }, void 0, !1, {
              fileName: "app/components/ProductCategoryAdmin.jsx",
              lineNumber: 35,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ProductCategoryAdmin.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlertDialogFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlertDialogCancel, { children: "Annull\xE9r" }, void 0, !1, {
              fileName: "app/components/ProductCategoryAdmin.jsx",
              lineNumber: 40,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlertDialogAction, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react17.Form, { method: "post", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "hidden", name: "category", value: id }, void 0, !1, {
                fileName: "app/components/ProductCategoryAdmin.jsx",
                lineNumber: 43,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "actionType",
                  value: "deleteCategory"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProductCategoryAdmin.jsx",
                  lineNumber: 44,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { type: "submit", children: [
                "Slet ",
                category.name
              ] }, void 0, !0, {
                fileName: "app/components/ProductCategoryAdmin.jsx",
                lineNumber: 49,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ProductCategoryAdmin.jsx",
              lineNumber: 42,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/ProductCategoryAdmin.jsx",
              lineNumber: 41,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ProductCategoryAdmin.jsx",
            lineNumber: 39,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ProductCategoryAdmin.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProductCategoryAdmin.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/ProductCategoryAdmin.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductCategoryAdmin.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      import_react17.Link,
      {
        to: `${product.id}/edit`,
        className: `m-2 ${buttonVariants({ variant: "outline" })}`,
        children: product.name
      },
      product.id,
      !1,
      {
        fileName: "app/components/ProductCategoryAdmin.jsx",
        lineNumber: 58,
        columnNumber: 9
      },
      this
    ))
  ] }, void 0, !0, {
    fileName: "app/components/ProductCategoryAdmin.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/AdminCategoryNew.jsx
var import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function AdminCategoryNew({}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Button, { className: "m-2", variant: "outline", children: "+ Tilf\xF8j kategori" }, void 0, !1, {
      fileName: "app/components/AdminCategoryNew.jsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/AdminCategoryNew.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(DialogTitle, { children: "Tilf\xF8j ny kategori" }, void 0, !1, {
        fileName: "app/components/AdminCategoryNew.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react18.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("input", { type: "hidden", name: "actionType", value: "newCategory" }, void 0, !1, {
          fileName: "app/components/AdminCategoryNew.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          Input,
          {
            type: "text",
            name: "name",
            className: "w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AdminCategoryNew.jsx",
            lineNumber: 27,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/AdminCategoryNew.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(DialogClose, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          Button,
          {
            type: "submit",
            className: "bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600",
            children: "Gem"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AdminCategoryNew.jsx",
            lineNumber: 35,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/AdminCategoryNew.jsx",
          lineNumber: 34,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AdminCategoryNew.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AdminCategoryNew.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AdminCategoryNew.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/AdminCategoryNew.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/products.jsx
var import_sonner5 = require("sonner");
var import_react20 = require("react"), import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  await requireUserSession(request);
  let products = await import_db7.prisma.product.findMany({}), categories = await import_db7.prisma.category.findMany({});
  return (0, import_node9.json)({ products, categories });
}
async function action3({ request }) {
  let form = await request.formData(), formValues = Object.fromEntries(form), actionType = form.get("actionType"), categoryId = parseInt(form.get("category"), 10);
  switch (console.log(form), console.log(formValues), actionType) {
    case "newCategory":
      try {
        return await newCategory(form), (0, import_node9.json)({ status: "success", message: "Kategorien blev oprettet" });
      } catch (error) {
        return console.error(error), (0, import_node9.json)(
          { status: "error", message: "Fejl ved oprettelse af kategori" },
          { status: 500 }
        );
      }
    case "deleteCategory":
      try {
        return await deleteCategory(categoryId), (0, import_node9.json)({ status: "success", message: "Kategorien blev slettet" });
      } catch (error) {
        return console.error(error), (0, import_node9.json)(
          { status: "error", message: "Fejl ved sletning af kategori" },
          { status: 500 }
        );
      }
  }
  return null;
}
function AdminPage() {
  let { products, categories } = (0, import_react19.useLoaderData)(), actionData = (0, import_react19.useActionData)(), [searchParams] = (0, import_react19.useSearchParams)(), deleted = searchParams.get("deleted"), success = searchParams.get("success");
  return console.log(success), (0, import_react20.useEffect)(() => {
    success === "true" && import_sonner5.toast.success("Produktet blev oprettet");
  }, [success]), (0, import_react20.useEffect)(() => {
    (actionData == null ? void 0 : actionData.status) === "success" ? import_sonner5.toast.success(actionData.message) : (actionData == null ? void 0 : actionData.status) === "error" && import_sonner5.toast.error(actionData.message);
  }, [actionData]), (0, import_react20.useEffect)(() => {
    deleted === "true" && import_sonner5.toast.success("Produktet blev slettet");
  }, [deleted]), /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "max-w-lg mx-auto mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: " flex flex-row justify-end w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(AdminCategoryNew, {}, void 0, !1, {
        fileName: "app/routes/products.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        import_react19.Link,
        {
          to: "/products/new",
          className: "bg-orange-400 m-2 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600",
          children: "Opret produkt"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/products.jsx",
          lineNumber: 103,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("form", { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { className: "m-2", variant: "ghost", children: "Log ud" }, void 0, !1, {
        fileName: "app/routes/products.jsx",
        lineNumber: 110,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/products.jsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: categories == null ? void 0 : categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      ProductCategoryAdmin,
      {
        products,
        category,
        id: category.id
      },
      category.id,
      !1,
      {
        fileName: "app/routes/products.jsx",
        lineNumber: 124,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/products.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.jsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h1", { children: "Lundsbjerggaaard" }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/logout.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action4,
  loader: () => loader7
});
var import_node10 = require("@remix-run/node");
function loader7() {
  return (0, import_node10.redirect)("/login");
}
async function action4({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node10.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/routes/lager.jsx
var lager_exports = {};
__export(lager_exports, {
  action: () => action5,
  default: () => Lager,
  loader: () => loader8
});
var import_db8 = __toESM(require_db_server());

// app/components/ui/table.jsx
var React13 = __toESM(require("react"));
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), Table = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.jsx",
    lineNumber: 7,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/table.jsx",
  lineNumber: 6,
  columnNumber: 3
}, this));
Table.displayName = "Table";
var TableHeader = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/table.jsx",
  lineNumber: 16,
  columnNumber: 3
}, this));
TableHeader.displayName = "TableHeader";
var TableBody = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.jsx",
    lineNumber: 21,
    columnNumber: 3
  },
  this
));
TableBody.displayName = "TableBody";
var TableFooter = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.jsx",
    lineNumber: 29,
    columnNumber: 3
  },
  this
));
TableFooter.displayName = "TableFooter";
var TableRow = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.jsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
TableRow.displayName = "TableRow";
var TableHead = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.jsx",
    lineNumber: 48,
    columnNumber: 3
  },
  this
));
TableHead.displayName = "TableHead";
var TableCell = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.jsx",
    lineNumber: 59,
    columnNumber: 3
  },
  this
));
TableCell.displayName = "TableCell";
var TableCaption = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.jsx",
    lineNumber: 67,
    columnNumber: 3
  },
  this
));
TableCaption.displayName = "TableCaption";

// app/routes/lager.jsx
var import_node11 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_react22 = __toESM(require("react"));
var import_sonner6 = require("sonner"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
async function loader8({ request }) {
  await requireUserSession(request);
  let products = await import_db8.prisma.product.findMany({
    include: {
      variants: !0
    }
  });
  return console.log(products), (0, import_node11.json)({ products });
}
async function action5({ request }) {
  let form = await request.formData();
  try {
    for (let [key, value] of form.entries())
      if (key.startsWith("product-stock-")) {
        let id = parseInt(key.split("-")[2], 10), stock = parseInt(value, 10);
        await import_db8.prisma.product.update({
          where: { id },
          data: { stock }
        });
      } else if (key.startsWith("variant-stock-")) {
        let id = parseInt(key.split("-")[2], 10), stock = parseInt(value, 10);
        await import_db8.prisma.productVariant.update({
          where: { id },
          data: { stock }
        });
      }
    return (0, import_node11.json)({
      status: "success",
      message: "Lagerbeholdning blev opdateret"
    });
  } catch {
    return (0, import_node11.json)(
      {
        status: "error",
        message: "Der skete en fejl"
      },
      { status: 500 }
    );
  }
}
function Lager() {
  let { products } = (0, import_react21.useLoaderData)(), actionData = (0, import_react21.useActionData)(), { params } = (0, import_react21.useParams)(), [searchTerm, setSearchTerm] = (0, import_react22.useState)(""), [filteredProducts, setFilteredProducts] = (0, import_react22.useState)(products);
  console.log(params == null ? void 0 : params.status), (0, import_react22.useEffect)(() => {
    let filtered = products.filter((product) => {
      let hasMatchingProduct = (product.name ? product.name.toLowerCase() : "").includes(searchTerm.toLowerCase()), hasMatchingVariant = product.variants.some((variant) => (variant.name ? variant.name.toLowerCase() : "").includes(searchTerm.toLowerCase()));
      return hasMatchingProduct || hasMatchingVariant;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, products]);
  let handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (0, import_react22.useEffect)(() => {
    (actionData == null ? void 0 : actionData.status) === "success" ? import_sonner6.toast.success(actionData.message) : (actionData == null ? void 0 : actionData.status) === "error" && import_sonner6.toast.error(actionData.message);
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "list-decimal mx-auto mt-4 mb-16 max-w-[800px] overflow-hidden rounded-lg bg-white shadow-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "m-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      Input,
      {
        className: "max-w-[200px]",
        type: "text",
        placeholder: "S\xF8g i produkter...",
        value: searchTerm,
        onChange: handleSearchChange
      },
      void 0,
      !1,
      {
        fileName: "app/routes/lager.jsx",
        lineNumber: 114,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/lager.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react21.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Table, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableCell, { children: "Produkt" }, void 0, !1, {
            fileName: "app/routes/lager.jsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableCell, { children: "Variant" }, void 0, !1, {
            fileName: "app/routes/lager.jsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableCell, { children: "Lagerbeholdning" }, void 0, !1, {
            fileName: "app/routes/lager.jsx",
            lineNumber: 128,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/lager.jsx",
          lineNumber: 125,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/lager.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableBody, { children: filteredProducts.map((product, index) => {
          let bgColorClass = index % 2 === 0 ? "bg-gray-100" : "bg-white";
          return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react22.default.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableRow, { className: bgColorClass, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableCell, { className: "p-4 align-middle", children: product.name }, void 0, !1, {
                fileName: "app/routes/lager.jsx",
                lineNumber: 137,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableCell, { className: "p-4 align-middle", children: "\u2014" }, void 0, !1, {
                fileName: "app/routes/lager.jsx",
                lineNumber: 140,
                columnNumber: 21
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableCell, { className: "p-4 align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                Input,
                {
                  type: "number",
                  name: `product-stock-${product.id}`,
                  defaultValue: product.stock,
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/lager.jsx",
                  lineNumber: 143,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/lager.jsx",
                lineNumber: 142,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/lager.jsx",
              lineNumber: 136,
              columnNumber: 19
            }, this),
            product.variants.map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableRow, { className: bgColorClass, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableCell, { className: "p-4 align-middle" }, void 0, !1, {
                fileName: "app/routes/lager.jsx",
                lineNumber: 153,
                columnNumber: 23
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableCell, { className: "p-4 align-middle", children: variant.name }, void 0, !1, {
                fileName: "app/routes/lager.jsx",
                lineNumber: 155,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TableCell, { className: "p-4 align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                Input,
                {
                  type: "number",
                  name: `variant-stock-${variant.id}`,
                  defaultValue: variant.stock,
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/lager.jsx",
                  lineNumber: 159,
                  columnNumber: 25
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/lager.jsx",
                lineNumber: 158,
                columnNumber: 23
              }, this)
            ] }, variant.id, !0, {
              fileName: "app/routes/lager.jsx",
              lineNumber: 152,
              columnNumber: 21
            }, this))
          ] }, product.id, !0, {
            fileName: "app/routes/lager.jsx",
            lineNumber: 135,
            columnNumber: 17
          }, this);
        }) }, void 0, !1, {
          fileName: "app/routes/lager.jsx",
          lineNumber: 131,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/lager.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Button, { className: "m-4", type: "submit", variant: "outlineLunds", children: "Opdater" }, void 0, !1, {
        fileName: "app/routes/lager.jsx",
        lineNumber: 174,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/lager.jsx",
        lineNumber: 173,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/lager.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/lager.jsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => Login,
  loader: () => loader9
});
var import_node12 = require("@remix-run/node"), import_bcryptjs = __toESM(require("bcryptjs")), import_react23 = require("@remix-run/react"), import_db9 = __toESM(require_db_server());
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
async function loader9({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node12.json)({ userId: session.get("userId") });
}
function Login() {
  var _a, _b;
  let actionData = (0, import_react23.useActionData)(), { userId } = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "my-16 p-4 max-w-lg h-full m-auto overflow-hidden rounded-lg bg-white shadow-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: "Logo.svg", alt: "Logo", className: "max-w-lg m-auto my-2" }, void 0, !1, {
      fileName: "app/routes/login.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h1", { className: "mb-1 text-lg font-bold", children: "Login" }, void 0, !1, {
      fileName: "app/routes/login.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    (actionData == null ? void 0 : actionData.errorMessage) && /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "mb-3 rounded border border-red-500 bg-red-50 p-2 text-red-900", children: actionData == null ? void 0 : actionData.errorMessage }, void 0, !1, {
      fileName: "app/routes/login.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { children: [
        "Du allerede logget ind; g\xE5 til",
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button, { asChild: !0, className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react23.Link, { to: "/products", children: "Products" }, void 0, !1, {
          fileName: "app/routes/login.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.jsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("form", { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button, { variant: "outline", children: "Log ud" }, void 0, !1, {
        fileName: "app/routes/login.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label2, { htmlFor: "phoneNumber", children: "Telefonnummer" }, void 0, !1, {
        fileName: "app/routes/login.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        Input,
        {
          type: "text",
          name: "phoneNumber",
          id: "phoneNumber",
          placeholder: "Telefonnummer",
          defaultValue: (_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.phoneNumber
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.jsx",
          lineNumber: 42,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label2, { htmlFor: "password", children: "Kodeord" }, void 0, !1, {
        fileName: "app/routes/login.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
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
          fileName: "app/routes/login.jsx",
          lineNumber: 50,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/login.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button, { variant: "outline", children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
async function action6({ request }) {
  let formData = await request.formData(), formDataObject = Object.fromEntries(formData), session = await getSession(request.headers.get("Cookie")), phoneNumber = formData.get("phoneNumber").trim(), user = await import_db9.prisma.user.findUnique({
    where: {
      phoneNumber
    },
    include: {
      password: !0
    }
  });
  return user ? await import_bcryptjs.default.compare(
    formData.get("password").trim(),
    user.password.password
  ) ? (session.set("userId", user.id), (0, import_node12.redirect)("/products", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : (0, import_node12.json)(
    { errorMessage: "Invalid password", values: formDataObject },
    { status: 401 }
  ) : (0, import_node12.json)(
    { errorMessage: "Bruger ikke fundet", values: formDataObject },
    { status: 404 }
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JR5EB3OU.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-2UIWU3DG.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-MPR3XBMG.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FSZKTZZ4.js", imports: ["/build/_shared/chunk-YN5RPP4O.js", "/build/_shared/chunk-YQMVL4AD.js", "/build/_shared/chunk-D3XMRPGK.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-RAH6YEIA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lager": { id: "routes/lager", parentId: "root", path: "lager", index: void 0, caseSensitive: void 0, module: "/build/routes/lager-DSFYV6OX.js", imports: ["/build/_shared/chunk-76CPQDYC.js", "/build/_shared/chunk-E6F6QD6W.js", "/build/_shared/chunk-63W34KY2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-PCTSSQTB.js", imports: ["/build/_shared/chunk-DUDHNOXS.js", "/build/_shared/chunk-5AAGE7JK.js", "/build/_shared/chunk-E6F6QD6W.js", "/build/_shared/chunk-63W34KY2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-4R65K2YN.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-V425Y467.js", imports: ["/build/_shared/chunk-VWJV5QD2.js", "/build/_shared/chunk-63QMBH3W.js", "/build/_shared/chunk-5AAGE7JK.js", "/build/_shared/chunk-E6F6QD6W.js", "/build/_shared/chunk-63W34KY2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products_.$productId.edit": { id: "routes/products_.$productId.edit", parentId: "root", path: "products/:productId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/products_.$productId.edit-EJLYVINL.js", imports: ["/build/_shared/chunk-KVQUN7TA.js", "/build/_shared/chunk-76CPQDYC.js", "/build/_shared/chunk-DUDHNOXS.js", "/build/_shared/chunk-NP725YJF.js", "/build/_shared/chunk-LSI5DTKS.js", "/build/_shared/chunk-VWJV5QD2.js", "/build/_shared/chunk-63QMBH3W.js", "/build/_shared/chunk-5AAGE7JK.js", "/build/_shared/chunk-E6F6QD6W.js", "/build/_shared/chunk-63W34KY2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products_.new": { id: "routes/products_.new", parentId: "root", path: "products/new", index: void 0, caseSensitive: void 0, module: "/build/routes/products_.new-WDUJP2DD.js", imports: ["/build/_shared/chunk-KVQUN7TA.js", "/build/_shared/chunk-76CPQDYC.js", "/build/_shared/chunk-DUDHNOXS.js", "/build/_shared/chunk-NP725YJF.js", "/build/_shared/chunk-LSI5DTKS.js", "/build/_shared/chunk-63QMBH3W.js", "/build/_shared/chunk-5AAGE7JK.js", "/build/_shared/chunk-E6F6QD6W.js", "/build/_shared/chunk-63W34KY2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/produkter": { id: "routes/produkter", parentId: "root", path: "produkter", index: void 0, caseSensitive: void 0, module: "/build/routes/produkter-BSPQS2CI.js", imports: ["/build/_shared/chunk-77VCLNKN.js", "/build/_shared/chunk-LSI5DTKS.js", "/build/_shared/chunk-63W34KY2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/produkter_.$productId": { id: "routes/produkter_.$productId", parentId: "root", path: "produkter/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/produkter_.$productId-T3FYNR24.js", imports: ["/build/_shared/chunk-NP725YJF.js", "/build/_shared/chunk-77VCLNKN.js", "/build/_shared/chunk-LSI5DTKS.js", "/build/_shared/chunk-63W34KY2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "d68b0b8d", hmr: { runtime: "/build/_shared/chunk-MPR3XBMG.js", timestamp: 1706607569868 }, url: "/build/manifest-D68B0B8D.js" };

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
  "routes/products_.$productId.edit": {
    id: "routes/products_.$productId.edit",
    parentId: "root",
    path: "products/:productId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: products_productId_edit_exports
  },
  "routes/produkter_.$productId": {
    id: "routes/produkter_.$productId",
    parentId: "root",
    path: "produkter/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: produkter_productId_exports
  },
  "routes/products_.new": {
    id: "routes/products_.new",
    parentId: "root",
    path: "products/new",
    index: void 0,
    caseSensitive: void 0,
    module: products_new_exports
  },
  "routes/produkter": {
    id: "routes/produkter",
    parentId: "root",
    path: "produkter",
    index: void 0,
    caseSensitive: void 0,
    module: produkter_exports
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/lager": {
    id: "routes/lager",
    parentId: "root",
    path: "lager",
    index: void 0,
    caseSensitive: void 0,
    module: lager_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
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
