import {
  combineHooksSlotProps
} from "./chunk-L3KKMIWX.js";
import {
  ListActionTypes,
  ListContext,
  handleItemSelection,
  listReducer,
  moveHighlight,
  useControllableReducer,
  useList,
  useListItem
} from "./chunk-LRUAMMCE.js";
import {
  useButton
} from "./chunk-Q4LNWEAQ.js";
import {
  require_react_dom
} from "./chunk-X6XVNPPU.js";
import {
  defaultTheme_default,
  getOverlayAlpha_default,
  identifier_default,
  rootShouldForwardProp,
  slotShouldForwardProp,
  styled_default,
  useTheme,
  useThemeProps
} from "./chunk-LZMUEID7.js";
import {
  GlobalStyles_default,
  alpha
} from "./chunk-GLXB6OKM.js";
import {
  CompoundComponentContext,
  useCompoundItem,
  useCompoundParent
} from "./chunk-VWTFQWJK.js";
import {
  areArraysEqual,
  extractEventHandlers,
  isHostComponent,
  resolveComponentProps,
  useClassNamesOverride,
  useSlotProps
} from "./chunk-YRGXRI36.js";
import {
  HTMLElementType,
  _extends,
  _objectWithoutPropertiesLoose,
  capitalize,
  chainPropTypes,
  clsx_default,
  composeClasses,
  createChainedFunction,
  debounce,
  deepmerge,
  elementAcceptingRef_default,
  elementTypeAcceptingRef_default,
  exactProp,
  generateUtilityClass,
  generateUtilityClasses,
  getScrollbarSize,
  integerPropType_default,
  isMuiElement,
  ownerDocument,
  ownerWindow,
  refType_default,
  require_jsx_runtime,
  require_prop_types,
  setRef,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useId,
  useIsFocusVisible,
  usePreviousProps_default,
  visuallyHidden_default
} from "./chunk-FAXPGAJV.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-BHZAVQOK.js";

// node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment13 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement3(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment4(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment13;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement3;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment4;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/@mui/material/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/@mui/material/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/@mui/material/TextField/TextField.js
var React86 = __toESM(require_react());
var import_prop_types55 = __toESM(require_prop_types());

// node_modules/@mui/material/Input/Input.js
var React56 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());

// node_modules/@mui/material/InputBase/InputBase.js
var React55 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());

// node_modules/@mui/base/Badge/Badge.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/base/useBadge/useBadge.js
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = usePreviousProps_default({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max: max3 = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max3 ? `${max3}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max: max3,
    displayValue
  };
}

// node_modules/@mui/base/Badge/badgeClasses.js
function getBadgeUtilityClass(slot) {
  return generateUtilityClass("MuiBadge", slot);
}
var badgeClasses = generateUtilityClasses("MuiBadge", ["root", "badge", "invisible"]);

// node_modules/@mui/base/Badge/Badge.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["badgeContent", "children", "invisible", "max", "slotProps", "slots", "showZero"];
var useUtilityClasses = (ownerState) => {
  const {
    invisible
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", invisible && "invisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getBadgeUtilityClass));
};
var Badge = React.forwardRef(function Badge2(props, forwardedRef) {
  var _slots$root, _slots$badge;
  const {
    children: children2,
    max: maxProp = 99,
    slotProps = {},
    slots = {},
    showZero = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    badgeContent,
    max: max3,
    displayValue,
    invisible
  } = useBadge(_extends({}, props, {
    max: maxProp
  }));
  const ownerState = _extends({}, props, {
    badgeContent,
    invisible,
    max: max3,
    showZero
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const BadgeComponent = (_slots$badge = slots.badge) != null ? _slots$badge : "span";
  const badgeProps = useSlotProps({
    elementType: BadgeComponent,
    externalSlotProps: slotProps.badge,
    ownerState,
    className: classes.badge
  });
  return (0, import_jsx_runtime2.jsxs)(Root, _extends({}, rootProps, {
    children: [children2, (0, import_jsx_runtime.jsx)(BadgeComponent, _extends({}, badgeProps, {
      children: displayValue
    }))]
  }));
});
true ? Badge.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content rendered within the badge.
   */
  badgeContent: import_prop_types.default.node,
  /**
   * The badge will be added relative to this node.
   */
  children: import_prop_types.default.node,
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: import_prop_types.default.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: import_prop_types.default.number,
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: import_prop_types.default.bool,
  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    badge: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    badge: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType
  })
} : void 0;

// node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
var React2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children: children2,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = React2.useRef(false);
  const nodeRef = React2.useRef(null);
  const activatedRef = React2.useRef(false);
  const syntheticEventRef = React2.useRef(false);
  React2.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(
    // @ts-expect-error TODO upstream fix
    children2.ref,
    nodeRef
  );
  const handleClickAway = useEventCallback_default((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children2.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React2.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React2.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return (0, import_jsx_runtime3.jsx)(React2.Fragment, {
    children: React2.cloneElement(children2, childrenProps)
  });
}
true ? ClickAwayListener.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: import_prop_types2.default.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: import_prop_types2.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: import_prop_types2.default.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: import_prop_types2.default.oneOf(["onTouchEnd", "onTouchStart", false])
} : void 0;
if (true) {
  ClickAwayListener["propTypes"] = exactProp(ClickAwayListener.propTypes);
}

// node_modules/@mui/base/Dropdown/Dropdown.js
var React5 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/base/useDropdown/DropdownContext.js
var React3 = __toESM(require_react());
var DropdownContext = React3.createContext(null);

// node_modules/@mui/base/useDropdown/useDropdown.js
var React4 = __toESM(require_react());

// node_modules/@mui/base/useDropdown/useDropdown.types.js
var DropdownActionTypes = {
  blur: "dropdown:blur",
  escapeKeyDown: "dropdown:escapeKeyDown",
  toggle: "dropdown:toggle",
  open: "dropdown:open",
  close: "dropdown:close"
};

// node_modules/@mui/base/useDropdown/dropdownReducer.js
function dropdownReducer(state, action) {
  switch (action.type) {
    case DropdownActionTypes.blur:
      return {
        open: false
      };
    case DropdownActionTypes.escapeKeyDown:
      return {
        open: false
      };
    case DropdownActionTypes.toggle:
      return {
        open: !state.open
      };
    case DropdownActionTypes.open:
      return {
        open: true
      };
    case DropdownActionTypes.close:
      return {
        open: false
      };
    default:
      throw new Error(`Unhandled action`);
  }
}

// node_modules/@mui/base/useDropdown/useDropdown.js
function useDropdown(parameters = {}) {
  const {
    defaultOpen,
    onOpenChange,
    open: openProp,
    componentName = "useDropdown"
  } = parameters;
  const [popupId, setPopupId] = React4.useState("");
  const [triggerElement, setTriggerElement] = React4.useState(null);
  const lastActionType = React4.useRef(null);
  const handleStateChange = React4.useCallback((event, field, value, reason) => {
    if (field === "open") {
      onOpenChange == null || onOpenChange(event, value);
    }
    lastActionType.current = reason;
  }, [onOpenChange]);
  const controlledProps = React4.useMemo(() => openProp !== void 0 ? {
    open: openProp
  } : {}, [openProp]);
  const [state, dispatch] = useControllableReducer({
    controlledProps,
    initialState: defaultOpen ? {
      open: true
    } : {
      open: false
    },
    onStateChange: handleStateChange,
    reducer: dropdownReducer,
    componentName
  });
  React4.useEffect(() => {
    if (!state.open && lastActionType.current !== null && lastActionType.current !== DropdownActionTypes.blur) {
      triggerElement == null || triggerElement.focus();
    }
  }, [state.open, triggerElement]);
  const contextValue = {
    state,
    dispatch,
    popupId,
    registerPopup: setPopupId,
    registerTrigger: setTriggerElement,
    triggerElement
  };
  return {
    contextValue,
    open: state.open
  };
}

// node_modules/@mui/base/Dropdown/Dropdown.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function Dropdown(props) {
  const {
    children: children2,
    open,
    defaultOpen,
    onOpenChange
  } = props;
  const {
    contextValue
  } = useDropdown({
    defaultOpen,
    onOpenChange,
    open
  });
  return (0, import_jsx_runtime4.jsx)(DropdownContext.Provider, {
    value: contextValue,
    children: children2
  });
}
true ? Dropdown.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types3.default.node,
  /**
   * If `true`, the dropdown is initially open.
   */
  defaultOpen: import_prop_types3.default.bool,
  /**
   * Callback fired when the component requests to be opened or closed.
   */
  onOpenChange: import_prop_types3.default.func,
  /**
   * Allows to control whether the dropdown is open.
   * This is a controlled counterpart of `defaultOpen`.
   */
  open: import_prop_types3.default.bool
} : void 0;
if (true) {
  Dropdown["propTypes"] = exactProp(Dropdown.propTypes);
}

// node_modules/@mui/base/FocusTrap/FocusTrap.js
var React6 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio") {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children: children2,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React6.useRef(false);
  const sentinelStart = React6.useRef(null);
  const sentinelEnd = React6.useRef(null);
  const nodeToRestore = React6.useRef(null);
  const reactFocusEventTarget = React6.useRef(null);
  const activated = React6.useRef(false);
  const rootRef = React6.useRef(null);
  const handleRef = useForkRef(children2.ref, rootRef);
  const lastKeydown = React6.useRef(null);
  React6.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React6.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (true) {
          console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n"));
        }
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  React6.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootElement.contains(doc.activeElement)) {
        return;
      }
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }
      if (tabbable.length > 0) {
        var _lastKeydown$current, _lastKeydown$current2;
        const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children2.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return (0, import_jsx_runtime6.jsxs)(React6.Fragment, {
    children: [(0, import_jsx_runtime5.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), React6.cloneElement(children2, {
      ref: handleRef,
      onFocus
    }), (0, import_jsx_runtime5.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
true ? FocusTrap.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types4.default.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types4.default.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types4.default.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: import_prop_types4.default.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: import_prop_types4.default.func,
  /**
   * If `true`, focus is locked.
   */
  open: import_prop_types4.default.bool.isRequired
} : void 0;
if (true) {
  FocusTrap["propTypes"] = exactProp(FocusTrap.propTypes);
}

// node_modules/@mui/base/FormControl/FormControl.js
var React8 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/base/FormControl/FormControlContext.js
var React7 = __toESM(require_react());
var FormControlContext = React7.createContext(void 0);
if (true) {
  FormControlContext.displayName = "FormControlContext";
}

// node_modules/@mui/base/FormControl/formControlClasses.js
function getFormControlUtilityClass(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses = generateUtilityClasses("MuiFormControl", ["root", "disabled", "error", "filled", "focused", "required"]);

// node_modules/@mui/base/FormControl/FormControl.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded2 = ["defaultValue", "children", "disabled", "error", "onChange", "required", "slotProps", "slots", "value"];
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== "";
}
function useUtilityClasses2(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focused && "focused", error && "error", filled && "filled", required && "required"]
  };
  return composeClasses(slots, useClassNamesOverride(getFormControlUtilityClass));
}
var FormControl = React8.forwardRef(function FormControl2(props, forwardedRef) {
  var _slots$root;
  const {
    defaultValue,
    children: children2,
    disabled = false,
    error = false,
    onChange,
    required = false,
    slotProps = {},
    slots = {},
    value: incomingValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const [value, setValue] = useControlled({
    controlled: incomingValue,
    default: defaultValue,
    name: "FormControl",
    state: "value"
  });
  const filled = hasValue(value);
  const [focusedState, setFocused] = React8.useState(false);
  const focused = focusedState && !disabled;
  React8.useEffect(() => setFocused((isFocused) => disabled ? false : isFocused), [disabled]);
  const ownerState = _extends({}, props, {
    disabled,
    error,
    filled,
    focused,
    required
  });
  const childContext = React8.useMemo(() => {
    return {
      disabled,
      error,
      filled,
      focused,
      onBlur: () => {
        setFocused(false);
      },
      onChange: (event) => {
        setValue(event.target.value);
        onChange == null || onChange(event);
      },
      onFocus: () => {
        setFocused(true);
      },
      required,
      value: value != null ? value : ""
    };
  }, [disabled, error, filled, focused, onChange, required, setValue, value]);
  const classes = useUtilityClasses2(ownerState);
  const renderChildren = () => {
    if (typeof children2 === "function") {
      return children2(childContext);
    }
    return children2;
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      children: renderChildren()
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime7.jsx)(FormControlContext.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime7.jsx)(Root, _extends({}, rootProps))
  });
});
true ? FormControl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types5.default.oneOfType([import_prop_types5.default.node, import_prop_types5.default.func]),
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types5.default.string,
  /**
   * @ignore
   */
  defaultValue: import_prop_types5.default.any,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: import_prop_types5.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: import_prop_types5.default.bool,
  /**
   * Callback fired when the form element's value is modified.
   */
  onChange: import_prop_types5.default.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types5.default.bool,
  /**
   * The props used for each slot inside the FormControl.
   * @default {}
   */
  slotProps: import_prop_types5.default.shape({
    root: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object])
  }),
  /**
   * The components used for each slot inside the FormControl.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types5.default.shape({
    root: import_prop_types5.default.elementType
  }),
  /**
   * The value of the form element.
   */
  value: import_prop_types5.default.any
} : void 0;

// node_modules/@mui/base/FormControl/useFormControlContext.js
var React9 = __toESM(require_react());
function useFormControlContext() {
  return React9.useContext(FormControlContext);
}

// node_modules/@mui/base/Input/Input.js
var React11 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/base/Input/inputClasses.js
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
var inputClasses = generateUtilityClasses("MuiInput", ["root", "formControl", "focused", "disabled", "error", "multiline", "input", "inputMultiline", "inputTypeSearch", "adornedStart", "adornedEnd"]);

// node_modules/@mui/base/useInput/useInput.js
var React10 = __toESM(require_react());
function useInput(parameters = {}) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp,
    inputRef: inputRefProp
  } = parameters;
  const formControlContext = useFormControlContext();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;
  if (formControlContext) {
    var _formControlContext$d, _formControlContext$e, _formControlContext$r;
    defaultValue = void 0;
    disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
    error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
    required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
    value = formControlContext.value;
    if (true) {
      const definedLocalProps = ["defaultValue", "disabled", "error", "required", "value"].filter((prop) => parameters[prop] !== void 0);
      if (definedLocalProps.length > 0) {
        console.warn(["MUI: You have set props on an input that is inside a FormControl.", "Set these props on a FormControl instead. Otherwise they will be ignored.", `Ignored props: ${definedLocalProps.join(", ")}`].join("\n"));
      }
    }
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }
  const {
    current: isControlled
  } = React10.useRef(value != null);
  const handleInputRefWarning = React10.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React10.useRef(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
  const [focused, setFocused] = React10.useState(false);
  React10.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false);
      onBlur == null || onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);
  const handleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null || (_formControlContext$o = formControlContext.onFocus) == null || _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };
  const handleChange = (otherHandlers) => (event, ...args) => {
    var _formControlContext$o2, _otherHandlers$onChan;
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`slots.input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
      }
    }
    formControlContext == null || (_formControlContext$o2 = formControlContext.onChange) == null || _formControlContext$o2.call(formControlContext, event);
    (_otherHandlers$onChan = otherHandlers.onChange) == null || _otherHandlers$onChan.call(otherHandlers, event, ...args);
  };
  const handleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters, ["onBlur", "onChange", "onFocus"]);
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    return _extends({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    const mergedEventHandlers = _extends({}, externalEventHandlers, {
      onBlur: handleBlur(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });
    return _extends({}, mergedEventHandlers, {
      "aria-invalid": error || void 0,
      defaultValue,
      value,
      required,
      disabled
    }, externalProps, {
      ref: handleInputRef
    }, mergedEventHandlers);
  };
  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    inputRef: handleInputRef,
    required,
    value
  };
}

// node_modules/@mui/base/Input/Input.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded3 = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "endAdornment", "error", "id", "multiline", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "startAdornment", "value", "type", "rows", "slotProps", "slots", "minRows", "maxRows"];
var useUtilityClasses3 = (ownerState) => {
  const {
    disabled,
    error,
    focused,
    formControlContext,
    multiline,
    startAdornment,
    endAdornment
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", focused && "focused", Boolean(formControlContext) && "formControl", multiline && "multiline", Boolean(startAdornment) && "adornedStart", Boolean(endAdornment) && "adornedEnd"],
    input: ["input", disabled && "disabled", multiline && "multiline"]
  };
  return composeClasses(slots, useClassNamesOverride(getInputUtilityClass));
};
var Input = React11.forwardRef(function Input2(props, forwardedRef) {
  var _slots$root, _slots$textarea, _slots$input;
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    multiline = false,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    startAdornment,
    value,
    type: typeProp,
    rows,
    slotProps = {},
    slots = {},
    minRows,
    maxRows
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState
  } = useInput({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value
  });
  const type = !multiline ? typeProp != null ? typeProp : "text" : void 0;
  const ownerState = _extends({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type
  });
  const classes = useUtilityClasses3(ownerState);
  const propsToForward = {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [classes.root, className]
  });
  const InputComponent = multiline ? (_slots$textarea = slots.textarea) != null ? _slots$textarea : "textarea" : (_slots$input = slots.input) != null ? _slots$input : "input";
  const inputProps = useSlotProps({
    elementType: InputComponent,
    getSlotProps: (otherHandlers) => {
      return getInputProps(_extends({}, propsToForward, otherHandlers));
    },
    externalSlotProps: slotProps.input,
    additionalProps: _extends({
      rows: multiline ? rows : void 0
    }, multiline && !isHostComponent(InputComponent) && {
      minRows: rows || minRows,
      maxRows: rows || maxRows
    }),
    ownerState,
    className: classes.input
  });
  if (true) {
    if (multiline) {
      if (rows) {
        if (minRows || maxRows) {
          console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.");
        }
      }
    }
  }
  return (0, import_jsx_runtime9.jsxs)(Root, _extends({}, rootProps, {
    children: [startAdornment, (0, import_jsx_runtime8.jsx)(InputComponent, _extends({}, inputProps)), endAdornment]
  }));
});
true ? Input.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types6.default.string,
  /**
   * @ignore
   */
  "aria-label": import_prop_types6.default.string,
  /**
   * @ignore
   */
  "aria-labelledby": import_prop_types6.default.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types6.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types6.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types6.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types6.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types6.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endAdornment: import_prop_types6.default.node,
  /**
   * If `true`, the `input` will indicate an error by setting the `aria-invalid` attribute on the input and the `Mui-error` class on the root element.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types6.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types6.default.string,
  /**
   * @ignore
   */
  inputRef: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.shape({
    current: import_prop_types6.default.object
  })]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types6.default.number,
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types6.default.number,
  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: import_prop_types6.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types6.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onChange: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types6.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types6.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types6.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types6.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types6.default.number,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types6.default.shape({
    input: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object]),
    root: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object])
  }),
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types6.default.shape({
    input: import_prop_types6.default.elementType,
    root: import_prop_types6.default.elementType,
    textarea: import_prop_types6.default.elementType
  }),
  /**
   * Leading adornment for this input.
   */
  startAdornment: import_prop_types6.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types6.default.oneOf(["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"]),
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types6.default.any
} : void 0;

// node_modules/@mui/base/Menu/Menu.js
var React16 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/base/Menu/menuClasses.js
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
var menuClasses = generateUtilityClasses("MuiMenu", ["root", "listbox", "expanded"]);

// node_modules/@mui/base/useMenu/useMenu.js
var React12 = __toESM(require_react());

// node_modules/@mui/base/useMenu/menuReducer.js
function menuReducer(state, action) {
  if (action.type === ListActionTypes.itemHover) {
    return state;
  }
  const newState = listReducer(state, action);
  if (newState.highlightedValue === null && action.context.items.length > 0) {
    return _extends({}, newState, {
      highlightedValue: action.context.items[0]
    });
  }
  if (action.type === ListActionTypes.keyDown) {
    if (action.event.key === "Escape") {
      return _extends({}, newState, {
        open: false
      });
    }
  }
  if (action.type === ListActionTypes.blur) {
    var _action$context$listb;
    if (!((_action$context$listb = action.context.listboxRef.current) != null && _action$context$listb.contains(action.event.relatedTarget))) {
      var _action$context$listb2, _action$event$related;
      const listboxId = (_action$context$listb2 = action.context.listboxRef.current) == null ? void 0 : _action$context$listb2.getAttribute("id");
      const controlledBy = (_action$event$related = action.event.relatedTarget) == null ? void 0 : _action$event$related.getAttribute("aria-controls");
      if (listboxId && controlledBy && listboxId === controlledBy) {
        return newState;
      }
      return _extends({}, newState, {
        open: false,
        highlightedValue: action.context.items[0]
      });
    }
  }
  return newState;
}

// node_modules/@mui/base/useMenu/useMenu.js
var FALLBACK_MENU_CONTEXT = {
  dispatch: () => {
  },
  popupId: "",
  registerPopup: () => {
  },
  registerTrigger: () => {
  },
  state: {
    open: true
  },
  triggerElement: null
};
function useMenu(parameters = {}) {
  var _useId, _React$useContext;
  const {
    listboxRef: listboxRefProp,
    onItemsChange,
    id: idParam,
    disabledItemsFocusable = true,
    disableListWrap = false,
    autoFocus = true,
    componentName = "useMenu"
  } = parameters;
  const rootRef = React12.useRef(null);
  const handleRef = useForkRef(rootRef, listboxRefProp);
  const listboxId = (_useId = useId(idParam)) != null ? _useId : "";
  const {
    state: {
      open
    },
    dispatch: menuDispatch,
    triggerElement,
    registerPopup
  } = (_React$useContext = React12.useContext(DropdownContext)) != null ? _React$useContext : FALLBACK_MENU_CONTEXT;
  const isInitiallyOpen = React12.useRef(open);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const subitemKeys = React12.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getItemDomElement = React12.useCallback((itemId) => {
    var _subitems$get$ref$cur, _subitems$get;
    if (itemId == null) {
      return null;
    }
    return (_subitems$get$ref$cur = (_subitems$get = subitems.get(itemId)) == null ? void 0 : _subitems$get.ref.current) != null ? _subitems$get$ref$cur : null;
  }, [subitems]);
  const isItemDisabled = React12.useCallback((id) => {
    var _subitems$get2;
    return (subitems == null || (_subitems$get2 = subitems.get(id)) == null ? void 0 : _subitems$get2.disabled) || false;
  }, [subitems]);
  const getItemAsString = React12.useCallback((id) => {
    var _subitems$get3, _subitems$get4;
    return ((_subitems$get3 = subitems.get(id)) == null ? void 0 : _subitems$get3.label) || ((_subitems$get4 = subitems.get(id)) == null || (_subitems$get4 = _subitems$get4.ref.current) == null ? void 0 : _subitems$get4.innerText);
  }, [subitems]);
  const reducerActionContext = React12.useMemo(() => ({
    listboxRef: rootRef
  }), [rootRef]);
  const {
    dispatch: listDispatch,
    getRootProps: getListRootProps,
    contextValue: listContextValue,
    state: {
      highlightedValue
    },
    rootRef: mergedListRef
  } = useList({
    disabledItemsFocusable,
    disableListWrap,
    focusManagement: "DOM",
    getItemDomElement,
    getInitialState: () => ({
      selectedValues: [],
      highlightedValue: null
    }),
    isItemDisabled,
    items: subitemKeys,
    getItemAsString,
    rootRef: handleRef,
    onItemsChange,
    reducerActionContext,
    selectionMode: "none",
    stateReducer: menuReducer,
    componentName
  });
  useEnhancedEffect_default(() => {
    registerPopup(listboxId);
  }, [listboxId, registerPopup]);
  React12.useEffect(() => {
    if (open && autoFocus && highlightedValue && !isInitiallyOpen.current) {
      var _subitems$get5;
      (_subitems$get5 = subitems.get(highlightedValue)) == null || (_subitems$get5 = _subitems$get5.ref) == null || (_subitems$get5 = _subitems$get5.current) == null || _subitems$get5.focus();
    }
  }, [open, autoFocus, highlightedValue, subitems, subitemKeys]);
  React12.useEffect(() => {
    var _rootRef$current;
    if ((_rootRef$current = rootRef.current) != null && _rootRef$current.contains(document.activeElement) && highlightedValue !== null) {
      var _subitems$get6;
      subitems == null || (_subitems$get6 = subitems.get(highlightedValue)) == null || (_subitems$get6 = _subitems$get6.ref.current) == null || _subitems$get6.focus();
    }
  }, [highlightedValue, subitems]);
  const createHandleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur, _rootRef$current2;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ((_rootRef$current2 = rootRef.current) != null && _rootRef$current2.contains(event.relatedTarget) || event.relatedTarget === triggerElement) {
      return;
    }
    menuDispatch({
      type: DropdownActionTypes.blur,
      event
    });
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === "Escape") {
      menuDispatch({
        type: DropdownActionTypes.escapeKeyDown,
        event
      });
    }
  };
  const getOwnListboxHandlers = (otherHandlers = {}) => ({
    onBlur: createHandleBlur(otherHandlers),
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  const getListboxProps = (externalProps = {}) => {
    const getCombinedRootProps = combineHooksSlotProps(getOwnListboxHandlers, getListRootProps);
    const externalEventHandlers = extractEventHandlers(externalProps);
    return _extends({}, externalProps, externalEventHandlers, getCombinedRootProps(externalEventHandlers), {
      id: listboxId,
      role: "menu"
    });
  };
  React12.useDebugValue({
    subitems,
    highlightedValue
  });
  return {
    contextValue: _extends({}, compoundComponentContextValue, listContextValue),
    dispatch: listDispatch,
    getListboxProps,
    highlightedValue,
    listboxRef: mergedListRef,
    menuItems: subitems,
    open,
    triggerElement
  };
}

// node_modules/@mui/base/useMenu/MenuProvider.js
var React13 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
function MenuProvider(props) {
  const {
    value,
    children: children2
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React13.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex
  }), [dispatch, getItemIndex, getItemState]);
  const compoundComponentContextValue = React13.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime10.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime10.jsx)(ListContext.Provider, {
      value: listContextValue,
      children: children2
    })
  });
}

// node_modules/@mui/base/Popper/Popper.js
var React15 = __toESM(require_react());

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument2 = node.ownerDocument;
    return ownerDocument2 ? ownerDocument2.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min3, value, max3) {
  return max(min3, min(value, max3));
}
function withinMaxClamp(min3, value, max3) {
  var v = within(min3, value, max3);
  return v > max3 ? max3 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min3 = paddingObject[minProp];
  var max3 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset3 = within(min3, center, max3);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset3, _state$modifiersData$.centerOffset = offset3 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset3 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset3[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements3 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements3.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements3;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements3 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements3[0];
  for (var i = 0; i < placements3.length; i++) {
    var placement = placements3[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements3.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset3) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset3 === "function" ? offset3(Object.assign({}, rects, {
    placement
  })) : offset3, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset3 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset3);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset3 = popperOffsets2[mainAxis];
    var min3 = offset3 + overflow[mainSide];
    var max3 = offset3 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset3 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset3 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min3, tetherMin) : min3, offset3, tether ? max(max3, tetherMax) : max3);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset3;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce2(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce2(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@mui/base/Popper/Popper.js
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/base/Portal/Portal.js
var React14 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var import_prop_types7 = __toESM(require_prop_types());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
var Portal = React14.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children: children2,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React14.useState(null);
  const handleRef = useForkRef(React14.isValidElement(children2) ? children2.ref : null, forwardedRef);
  useEnhancedEffect_default(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (React14.isValidElement(children2)) {
      const newProps = {
        ref: handleRef
      };
      return React14.cloneElement(children2, newProps);
    }
    return (0, import_jsx_runtime11.jsx)(React14.Fragment, {
      children: children2
    });
  }
  return (0, import_jsx_runtime11.jsx)(React14.Fragment, {
    children: mountNode ? ReactDOM.createPortal(children2, mountNode) : mountNode
  });
});
true ? Portal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types7.default.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types7.default.oneOfType([HTMLElementType, import_prop_types7.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types7.default.bool
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}

// node_modules/@mui/base/Popper/popperClasses.js
function getPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPopper", slot);
}
var popperClasses = generateUtilityClasses("MuiPopper", ["root"]);

// node_modules/@mui/base/Popper/Popper.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded4 = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"];
var _excluded22 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function flipPlacement(placement, direction) {
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
function isHTMLElement2(element) {
  return element.nodeType !== void 0;
}
function isVirtualElement(element) {
  return !isHTMLElement2(element);
}
var useUtilityClasses4 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, useClassNamesOverride(getPopperUtilityClass));
};
var defaultPopperOptions = {};
var PopperTooltip = React15.forwardRef(function PopperTooltip2(props, forwardedRef) {
  var _slots$root;
  const {
    anchorEl,
    children: children2,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const tooltipRef = React15.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = React15.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React15.useRef(handlePopperRef);
  useEnhancedEffect_default(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React15.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  const [placement, setPlacement] = React15.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React15.useState(resolveAnchorEl(anchorEl));
  React15.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React15.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect_default(() => {
    if (!resolvedAnchorElement || !open) {
      return void 0;
    }
    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    if (true) {
      if (resolvedAnchorElement && isHTMLElement2(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
        const box = resolvedAnchorElement.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: true,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper2 = createPopper3(resolvedAnchorElement, tooltipRef.current, _extends({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper2);
    return () => {
      popper2.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses4();
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return (0, import_jsx_runtime12.jsx)(Root, _extends({}, rootProps, {
    children: typeof children2 === "function" ? children2(childProps) : children2
  }));
});
var Popper = React15.forwardRef(function Popper2(props, forwardedRef) {
  const {
    anchorEl,
    children: children2,
    container: containerProp,
    direction = "ltr",
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded22);
  const [exited, setExited] = React15.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? "none" : void 0;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : void 0;
  return (0, import_jsx_runtime12.jsx)(Portal, {
    disablePortal,
    container,
    children: (0, import_jsx_runtime12.jsx)(PopperTooltip, _extends({
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef,
      slotProps,
      slots
    }, other, {
      style: _extends({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display
      }, style),
      TransitionProps: transitionProps,
      children: children2
    }))
  });
});
true ? Popper.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes(import_prop_types8.default.oneOfType([HTMLElementType, import_prop_types8.default.object, import_prop_types8.default.func]), (props) => {
    if (props.open) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== "function" || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join("\n"));
      }
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: import_prop_types8.default.oneOfType([import_prop_types8.default.node, import_prop_types8.default.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types8.default.oneOfType([HTMLElementType, import_prop_types8.default.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types8.default.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types8.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types8.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types8.default.arrayOf(import_prop_types8.default.shape({
    data: import_prop_types8.default.object,
    effect: import_prop_types8.default.func,
    enabled: import_prop_types8.default.bool,
    fn: import_prop_types8.default.func,
    name: import_prop_types8.default.any,
    options: import_prop_types8.default.object,
    phase: import_prop_types8.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types8.default.arrayOf(import_prop_types8.default.string),
    requiresIfExists: import_prop_types8.default.arrayOf(import_prop_types8.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types8.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types8.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types8.default.shape({
    modifiers: import_prop_types8.default.array,
    onFirstUpdate: import_prop_types8.default.func,
    placement: import_prop_types8.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types8.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types8.default.shape({
    root: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types8.default.shape({
    root: import_prop_types8.default.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types8.default.bool
} : void 0;

// node_modules/@mui/base/Menu/Menu.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded5 = ["actions", "anchor", "children", "onItemsChange", "slotProps", "slots"];
function useUtilityClasses5(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ["root", open && "expanded"],
    listbox: ["listbox", open && "expanded"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuUtilityClass));
}
var Menu = React16.forwardRef(function Menu2(props, forwardedRef) {
  var _slots$root, _slots$listbox;
  const {
    actions,
    anchor: anchorProp,
    children: children2,
    onItemsChange,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const {
    contextValue,
    getListboxProps,
    dispatch,
    open,
    triggerElement
  } = useMenu({
    onItemsChange,
    componentName: "Menu"
  });
  const anchor = anchorProp != null ? anchorProp : triggerElement;
  React16.useImperativeHandle(actions, () => ({
    dispatch,
    resetHighlight: () => dispatch({
      type: ListActionTypes.resetHighlight,
      event: null
    })
  }), [dispatch]);
  const ownerState = _extends({}, props, {
    open
  });
  const classes = useUtilityClasses5(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      role: void 0
    },
    className: classes.root,
    ownerState
  });
  const Listbox = (_slots$listbox = slots.listbox) != null ? _slots$listbox : "ul";
  const listboxProps = useSlotProps({
    elementType: Listbox,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    className: classes.listbox,
    ownerState
  });
  if (open === true && anchor == null) {
    return (0, import_jsx_runtime13.jsx)(Root, _extends({}, rootProps, {
      children: (0, import_jsx_runtime13.jsx)(Listbox, _extends({}, listboxProps, {
        children: (0, import_jsx_runtime13.jsx)(MenuProvider, {
          value: contextValue,
          children: children2
        })
      }))
    }));
  }
  return (0, import_jsx_runtime13.jsx)(Popper, _extends({}, rootProps, {
    open,
    anchorEl: anchor,
    slots: {
      root: Root
    },
    children: (0, import_jsx_runtime13.jsx)(Listbox, _extends({}, listboxProps, {
      children: (0, import_jsx_runtime13.jsx)(MenuProvider, {
        value: contextValue,
        children: children2
      })
    }))
  }));
});
true ? Menu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref with imperative actions that can be performed on the menu.
   */
  actions: refType_default,
  /**
   * The element based on which the menu is positioned.
   */
  anchor: import_prop_types9.default.oneOfType([HTMLElementType, import_prop_types9.default.object, import_prop_types9.default.func]),
  /**
   * @ignore
   */
  children: import_prop_types9.default.node,
  /**
   * @ignore
   */
  className: import_prop_types9.default.string,
  /**
   * Function called when the items displayed in the menu change.
   */
  onItemsChange: import_prop_types9.default.func,
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: import_prop_types9.default.shape({
    listbox: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object]),
    root: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object])
  }),
  /**
   * The components used for each slot inside the Menu.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types9.default.shape({
    listbox: import_prop_types9.default.elementType,
    root: import_prop_types9.default.elementType
  })
} : void 0;

// node_modules/@mui/base/MenuButton/MenuButton.js
var React18 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/base/useMenuButton/useMenuButton.js
var React17 = __toESM(require_react());
function useMenuButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    rootRef: externalRef
  } = parameters;
  const menuContext = React17.useContext(DropdownContext);
  if (menuContext === null) {
    throw new Error("useMenuButton: no menu context available.");
  }
  const {
    state,
    dispatch,
    registerTrigger,
    popupId
  } = menuContext;
  const {
    getRootProps: getButtonRootProps,
    rootRef: buttonRootRef,
    active
  } = useButton({
    disabled,
    focusableWhenDisabled,
    rootRef: externalRef
  });
  const handleRef = useForkRef(buttonRootRef, registerTrigger);
  const createHandleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    dispatch({
      type: DropdownActionTypes.toggle,
      event
    });
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      dispatch({
        type: DropdownActionTypes.open,
        event
      });
    }
  };
  const getOwnRootProps = (otherHandlers = {}) => ({
    onClick: createHandleClick(otherHandlers),
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const getCombinedProps = combineHooksSlotProps(getButtonRootProps, getOwnRootProps);
    return _extends({
      "aria-haspopup": "menu",
      "aria-expanded": state.open,
      "aria-controls": popupId
    }, externalProps, externalEventHandlers, getCombinedProps(externalEventHandlers), {
      tabIndex: 0,
      // this is needed to make the button focused after click in Safari
      ref: handleRef
    });
  };
  return {
    active,
    getRootProps,
    open: state.open,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/MenuButton/menuButtonClasses.js
function getMenuButtonUtilityClass(slot) {
  return generateUtilityClass("MuiMenuButton", slot);
}
var menuButtonClasses = generateUtilityClasses("MuiMenuButton", ["root", "active", "disabled", "expanded"]);

// node_modules/@mui/base/MenuButton/MenuButton.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded6 = ["children", "disabled", "label", "slots", "slotProps", "focusableWhenDisabled"];
var useUtilityClasses6 = (ownerState) => {
  const {
    active,
    disabled,
    open
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", active && "active", open && "expanded"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuButtonUtilityClass));
};
var MenuButton = React18.forwardRef(function MenuButton2(props, forwardedRef) {
  const {
    children: children2,
    disabled = false,
    slots = {},
    slotProps = {},
    focusableWhenDisabled = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const {
    getRootProps,
    open,
    active
  } = useMenuButton({
    disabled,
    focusableWhenDisabled,
    rootRef: forwardedRef
  });
  const ownerState = _extends({}, props, {
    open,
    active,
    disabled,
    focusableWhenDisabled
  });
  const classes = useUtilityClasses6(ownerState);
  const Root = slots.root || "button";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef,
      type: "button"
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime14.jsx)(Root, _extends({}, rootProps, {
    children: children2
  }));
});
true ? MenuButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types10.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types10.default.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types10.default.bool,
  /**
   * If `true`, allows a disabled button to receive focus.
   * @default false
   */
  focusableWhenDisabled: import_prop_types10.default.bool,
  /**
   * Label of the button
   */
  label: import_prop_types10.default.string,
  /**
   * The components used for each slot inside the MenuButton.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slotProps: import_prop_types10.default.shape({
    root: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object])
  }),
  /**
   * The props used for each slot inside the MenuButton.
   * @default {}
   */
  slots: import_prop_types10.default.shape({
    root: import_prop_types10.default.elementType
  })
} : void 0;

// node_modules/@mui/base/MenuItem/MenuItem.js
var React21 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());

// node_modules/@mui/base/MenuItem/menuItemClasses.js
function getMenuItemUtilityClass(slot) {
  return generateUtilityClass("MuiMenuItem", slot);
}
var menuItemClasses = generateUtilityClasses("MuiMenuItem", ["root", "disabled", "focusVisible"]);

// node_modules/@mui/base/useMenuItem/useMenuItem.js
var React19 = __toESM(require_react());
function idGenerator(existingKeys) {
  return `menu-item-${existingKeys.size}`;
}
var FALLBACK_MENU_CONTEXT2 = {
  dispatch: () => {
  },
  popupId: "",
  registerPopup: () => {
  },
  registerTrigger: () => {
  },
  state: {
    open: true
  },
  triggerElement: null
};
function useMenuItem(params) {
  var _React$useContext;
  const {
    disabled = false,
    id: idParam,
    rootRef: externalRef,
    label
  } = params;
  const id = useId(idParam);
  const itemRef = React19.useRef(null);
  const itemMetadata = React19.useMemo(() => ({
    disabled,
    id: id != null ? id : "",
    label,
    ref: itemRef
  }), [disabled, id, label]);
  const {
    dispatch
  } = (_React$useContext = React19.useContext(DropdownContext)) != null ? _React$useContext : FALLBACK_MENU_CONTEXT2;
  const {
    getRootProps: getListRootProps,
    highlighted
  } = useListItem({
    item: id
  });
  const {
    index: index2,
    totalItemCount
  } = useCompoundItem(id != null ? id : idGenerator, itemMetadata);
  const {
    getRootProps: getButtonProps,
    focusVisible,
    rootRef: buttonRefHandler
  } = useButton({
    disabled,
    focusableWhenDisabled: true
  });
  const handleRef = useForkRef(buttonRefHandler, externalRef, itemRef);
  React19.useDebugValue({
    id,
    highlighted,
    disabled,
    label
  });
  const createHandleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    dispatch({
      type: DropdownActionTypes.close,
      event
    });
  };
  const getOwnHandlers = (otherHandlers = {}) => _extends({}, otherHandlers, {
    onClick: createHandleClick(otherHandlers)
  });
  function getRootProps(externalProps = {}) {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const getCombinedRootProps = combineHooksSlotProps(getOwnHandlers, combineHooksSlotProps(getButtonProps, getListRootProps));
    return _extends({}, externalProps, externalEventHandlers, getCombinedRootProps(externalEventHandlers), {
      id,
      ref: handleRef,
      role: "menuitem"
    });
  }
  if (id === void 0) {
    return {
      getRootProps,
      disabled: false,
      focusVisible,
      highlighted: false,
      index: -1,
      totalItemCount: 0,
      rootRef: handleRef
    };
  }
  return {
    getRootProps,
    disabled,
    focusVisible,
    highlighted,
    index: index2,
    totalItemCount,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/useMenuItem/useMenuItemContextStabilizer.js
var React20 = __toESM(require_react());
function useMenuItemContextStabilizer(id) {
  const listContext = React20.useContext(ListContext);
  if (!listContext) {
    throw new Error("MenuItem: ListContext was not found.");
  }
  const itemId = useId(id);
  const {
    getItemState,
    dispatch
  } = listContext;
  let itemState;
  if (itemId != null) {
    itemState = getItemState(itemId);
  } else {
    itemState = {
      focusable: true,
      highlighted: false,
      selected: false
    };
  }
  const {
    highlighted,
    selected,
    focusable
  } = itemState;
  const localGetItemState = React20.useCallback((itemValue) => {
    if (itemValue !== itemId) {
      throw new Error(["Base UI MenuItem: Tried to access the state of another MenuItem.", `itemValue: ${itemValue} | id: ${itemId}`, "This is unsupported when the MenuItem uses the MenuItemContextStabilizer as a performance optimization."].join("/n"));
    }
    return {
      highlighted,
      selected,
      focusable
    };
  }, [highlighted, selected, focusable, itemId]);
  const localContextValue = React20.useMemo(() => ({
    dispatch,
    getItemState: localGetItemState
  }), [dispatch, localGetItemState]);
  return {
    contextValue: localContextValue,
    id: itemId
  };
}

// node_modules/@mui/base/MenuItem/MenuItem.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded7 = ["children", "disabled", "label", "id", "slotProps", "slots"];
function useUtilityClasses7(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuItemUtilityClass));
}
var InnerMenuItem = React21.memo(React21.forwardRef(function MenuItem(props, forwardedRef) {
  var _slots$root;
  const {
    children: children2,
    disabled: disabledProp = false,
    label,
    id,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const {
    getRootProps,
    disabled,
    focusVisible,
    highlighted
  } = useMenuItem({
    id,
    disabled: disabledProp,
    rootRef: forwardedRef,
    label
  });
  const ownerState = _extends({}, props, {
    disabled,
    focusVisible,
    highlighted
  });
  const classes = useUtilityClasses7(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "li";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime15.jsx)(Root, _extends({}, rootProps, {
    children: children2
  }));
}));
var MenuItem2 = React21.forwardRef(function MenuItem3(props, ref) {
  const {
    id: idProp
  } = props;
  const {
    contextValue,
    id
  } = useMenuItemContextStabilizer(idProp);
  return (0, import_jsx_runtime15.jsx)(ListContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime15.jsx)(InnerMenuItem, _extends({}, props, {
      id,
      ref
    }))
  });
});
true ? MenuItem2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types11.default.node,
  /**
   * @ignore
   */
  className: import_prop_types11.default.string,
  /**
   * If `true`, the menu item will be disabled.
   * @default false
   */
  disabled: import_prop_types11.default.bool,
  /**
   * A text representation of the menu item's content.
   * Used for keyboard text navigation matching.
   */
  label: import_prop_types11.default.string,
  /**
   * @ignore
   */
  onClick: import_prop_types11.default.func,
  /**
   * The props used for each slot inside the MenuItem.
   * @default {}
   */
  slotProps: import_prop_types11.default.shape({
    root: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object])
  }),
  /**
   * The components used for each slot inside the MenuItem.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types11.default.shape({
    root: import_prop_types11.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Modal/Modal.js
var React23 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@mui/base/unstable_useModal/useModal.js
var React22 = __toESM(require_react());

// node_modules/@mui/base/unstable_useModal/ModalManager.js
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index2) => {
    if (callback(item)) {
      idx = index2;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
var ModalManager = class {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
};

// node_modules/@mui/base/unstable_useModal/useModal.js
function getContainer2(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(children2) {
  return children2 ? children2.props.hasOwnProperty("in") : false;
}
var defaultManager = new ModalManager();
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager = defaultManager,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children: children2,
    onClose,
    open,
    rootRef
  } = parameters;
  const modal = React22.useRef({});
  const mountNodeRef = React22.useRef(null);
  const modalRef = React22.useRef(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = React22.useState(!open);
  const hasTransition = getHasTransition(children2);
  let ariaHiddenProp = true;
  if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback_default(() => {
    const resolvedContainer = getContainer2(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = React22.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback_default((node) => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React22.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  React22.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React22.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.key !== "Escape" || event.which === 229 || // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const createHandleBackdropClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    return _extends({
      role: "presentation"
    }, externalEventHandlers, {
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    });
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return _extends({
      "aria-hidden": true
    }, externalEventHandlers, {
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    });
  };
  const getTransitionProps2 = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction(handleEnter, children2 == null ? void 0 : children2.props.onEnter),
      onExited: createChainedFunction(handleExited, children2 == null ? void 0 : children2.props.onExited)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}

// node_modules/@mui/base/Modal/modalClasses.js
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
var modalClasses = generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);

// node_modules/@mui/base/Modal/Modal.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded8 = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
var useUtilityClasses8 = (ownerState) => {
  const {
    open,
    exited
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, useClassNamesOverride(getModalUtilityClass));
};
var Modal = React23.forwardRef(function Modal2(props, forwardedRef) {
  var _slots$root;
  const {
    children: children2,
    closeAfterTransition = false,
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onBackdropClick,
    open,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const propsWithDefaults = _extends({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal(_extends({}, propsWithDefaults, {
    rootRef: forwardedRef
  }));
  const ownerState = _extends({}, propsWithDefaults, {
    exited,
    hasTransition
  });
  const classes = useUtilityClasses8(ownerState);
  const childProps = {};
  if (children2.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps2();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    className: classes.root,
    ownerState
  });
  const BackdropComponent = slots.backdrop;
  const backdropProps = useSlotProps({
    elementType: BackdropComponent,
    externalSlotProps: slotProps.backdrop,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps(_extends({}, otherHandlers, {
        onClick: (e) => {
          if (onBackdropClick) {
            onBackdropClick(e);
          }
          if (otherHandlers != null && otherHandlers.onClick) {
            otherHandlers.onClick(e);
          }
        }
      }));
    },
    className: classes.backdrop,
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return (0, import_jsx_runtime16.jsx)(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: (0, import_jsx_runtime17.jsxs)(Root, _extends({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? (0, import_jsx_runtime16.jsx)(BackdropComponent, _extends({}, backdropProps)) : null, (0, import_jsx_runtime16.jsx)(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: React23.cloneElement(children2, childProps)
      })]
    }))
  });
});
true ? Modal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: import_prop_types12.default.bool,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types12.default.oneOfType([HTMLElementType, import_prop_types12.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types12.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types12.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types12.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types12.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types12.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types12.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types12.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: import_prop_types12.default.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: import_prop_types12.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types12.default.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: import_prop_types12.default.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: import_prop_types12.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types12.default.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: import_prop_types12.default.shape({
    backdrop: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object]),
    root: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types12.default.shape({
    backdrop: import_prop_types12.default.elementType,
    root: import_prop_types12.default.elementType
  })
} : void 0;

// node_modules/@mui/base/NoSsr/NoSsr.js
var React24 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
function NoSsr(props) {
  const {
    children: children2,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = React24.useState(false);
  useEnhancedEffect_default(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React24.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);
  return (0, import_jsx_runtime18.jsx)(React24.Fragment, {
    children: mountedState ? children2 : fallback
  });
}
true ? NoSsr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: import_prop_types13.default.node,
  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   * @default false
   */
  defer: import_prop_types13.default.bool,
  /**
   * The fallback content to display.
   * @default null
   */
  fallback: import_prop_types13.default.node
} : void 0;
if (true) {
  NoSsr["propTypes"] = exactProp(NoSsr.propTypes);
}

// node_modules/@mui/base/Unstable_NumberInput/NumberInput.js
var React26 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/@mui/base/Unstable_NumberInput/numberInputClasses.js
function getNumberInputUtilityClass(slot) {
  return generateUtilityClass("MuiNumberInput", slot);
}
var numberInputClasses = generateUtilityClasses("MuiNumberInput", ["root", "formControl", "focused", "disabled", "readOnly", "error", "input", "incrementButton", "decrementButton", "adornedStart", "adornedEnd"]);

// node_modules/@mui/base/unstable_useNumberInput/useNumberInput.js
var React25 = __toESM(require_react());

// node_modules/@mui/base/unstable_useNumberInput/utils.js
function simpleClamp(val, min3 = Number.MIN_SAFE_INTEGER, max3 = Number.MAX_SAFE_INTEGER) {
  return Math.max(min3, Math.min(val, max3));
}
function clamp(val, min3 = Number.MIN_SAFE_INTEGER, max3 = Number.MAX_SAFE_INTEGER, stepProp = NaN) {
  if (Number.isNaN(stepProp)) {
    return simpleClamp(val, min3, max3);
  }
  const step = stepProp || 1;
  const remainder = val % step;
  const positivity = Math.sign(remainder);
  if (Math.abs(remainder) > step / 2) {
    return simpleClamp(val + positivity * (step - Math.abs(remainder)), min3, max3);
  }
  return simpleClamp(val - positivity * Math.abs(remainder), min3, max3);
}
function isNumber(val) {
  return typeof val === "number" && !Number.isNaN(val) && Number.isFinite(val);
}

// node_modules/@mui/base/unstable_useNumberInput/useNumberInput.js
var STEP_KEYS = ["ArrowUp", "ArrowDown", "PageUp", "PageDown"];
var SUPPORTED_KEYS = [...STEP_KEYS, "Home", "End"];
function getInputValueAsString(v) {
  return v ? String(v.trim()) : String(v);
}
function useNumberInput(parameters) {
  const {
    min: min3,
    max: max3,
    step,
    shiftMultiplier = 10,
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onInputChange,
    onFocus,
    onChange,
    required: requiredProp = false,
    readOnly: readOnlyProp = false,
    value: valueProp,
    inputRef: inputRefProp,
    inputId: inputIdProp
  } = parameters;
  const formControlContext = useFormControlContext();
  const {
    current: isControlled
  } = React25.useRef(valueProp != null);
  const handleInputRefWarning = React25.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React25.useRef(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
  const inputId = useId(inputIdProp);
  const [focused, setFocused] = React25.useState(false);
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValueProp,
    name: "NumberInput"
  });
  const [dirtyValue, setDirtyValue] = React25.useState(value ? String(value) : void 0);
  React25.useEffect(() => {
    if (!formControlContext && disabledProp && focused) {
      setFocused(false);
      onBlur == null || onBlur();
    }
  }, [formControlContext, disabledProp, focused, onBlur]);
  const createHandleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null || (_formControlContext$o = formControlContext.onFocus) == null || _formControlContext$o.call(formControlContext);
    }
    setFocused(true);
  };
  const handleValueChange = () => (event, val) => {
    let newValue;
    if (val === void 0) {
      newValue = val;
      setDirtyValue("");
    } else {
      newValue = clamp(val, min3, max3, step);
      setDirtyValue(String(newValue));
    }
    setValue(newValue);
    if (isNumber(newValue)) {
      onChange == null || onChange(event, newValue);
    } else {
      onChange == null || onChange(event, void 0);
    }
  };
  const createHandleInputChange = (otherHandlers) => (event) => {
    var _formControlContext$o2, _otherHandlers$onInpu;
    if (!isControlled && event.target === null) {
      throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`slots.input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
    }
    formControlContext == null || (_formControlContext$o2 = formControlContext.onChange) == null || _formControlContext$o2.call(formControlContext, event);
    (_otherHandlers$onInpu = otherHandlers.onInputChange) == null || _otherHandlers$onInpu.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    const val = getInputValueAsString(event.currentTarget.value);
    if (val === "" || val === "-") {
      setDirtyValue(val);
      setValue(void 0);
    }
    if (val.match(/^-?\d+?$/)) {
      setDirtyValue(val);
      setValue(parseInt(val, 10));
    }
  };
  const createHandleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    const val = getInputValueAsString(event.currentTarget.value);
    if (val === "" || val === "-") {
      handleValueChange()(event, void 0);
    } else {
      handleValueChange()(event, parseInt(val, 10));
    }
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    }
    setFocused(false);
  };
  const createHandleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
  };
  const handleStep = (direction) => (event) => {
    let newValue;
    if (isNumber(value)) {
      const multiplier = event.shiftKey || event.key === "PageUp" || event.key === "PageDown" ? shiftMultiplier : 1;
      newValue = {
        up: value + (step != null ? step : 1) * multiplier,
        down: value - (step != null ? step : 1) * multiplier
      }[direction];
    } else {
      newValue = {
        up: min3 != null ? min3 : 0,
        down: max3 != null ? max3 : 0
      }[direction];
    }
    handleValueChange()(event, newValue);
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (SUPPORTED_KEYS.includes(event.key)) {
      event.preventDefault();
    }
    if (STEP_KEYS.includes(event.key)) {
      const direction = {
        ArrowUp: "up",
        ArrowDown: "down",
        PageUp: "up",
        PageDown: "down"
      }[event.key];
      handleStep(direction)(event);
    }
    if (event.key === "Home" && isNumber(max3)) {
      handleValueChange()(event, max3);
    }
    if (event.key === "End" && isNumber(min3)) {
      handleValueChange()(event, min3);
    }
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters, [
      // these are handled by the input slot
      "onBlur",
      "onInputChange",
      "onFocus",
      "onChange"
    ]);
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    return _extends({}, externalProps, externalEventHandlers, {
      onClick: createHandleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    var _ref;
    const propsEventHandlers = {
      onBlur,
      onFocus,
      // onChange from normal props is the custom onChange so we ignore it here
      onChange: onInputChange
    };
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps, [
      // onClick is handled by the root slot
      "onClick"
      // do not ignore 'onInputChange', we want slotProps.input.onInputChange to enter the DOM and throw
    ]));
    const mergedEventHandlers = _extends({}, externalEventHandlers, {
      onFocus: createHandleFocus(externalEventHandlers),
      // slotProps.onChange is renamed to onInputChange and passed to createHandleInputChange
      onChange: createHandleInputChange(_extends({}, externalEventHandlers, {
        onInputChange: externalEventHandlers.onChange
      })),
      onBlur: createHandleBlur(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers)
    });
    const displayValue = (_ref = focused ? dirtyValue : value) != null ? _ref : "";
    delete externalProps.onInputChange;
    return _extends({
      type: "text",
      id: inputId,
      "aria-invalid": errorProp || void 0,
      defaultValue: void 0,
      value: displayValue,
      "aria-valuenow": displayValue,
      "aria-valuetext": String(displayValue),
      "aria-valuemin": min3,
      "aria-valuemax": max3,
      autoComplete: "off",
      autoCorrect: "off",
      spellCheck: "false",
      required: requiredProp,
      readOnly: readOnlyProp,
      "aria-disabled": disabledProp,
      disabled: disabledProp
    }, externalProps, {
      ref: handleInputRef
    }, mergedEventHandlers);
  };
  const handleStepperButtonMouseDown = (event) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const stepperButtonCommonProps = {
    "aria-controls": inputId,
    tabIndex: -1
  };
  const isIncrementDisabled = disabledProp || (isNumber(value) ? value >= (max3 != null ? max3 : Number.MAX_SAFE_INTEGER) : false);
  const getIncrementButtonProps = (externalProps = {}) => {
    return _extends({}, externalProps, stepperButtonCommonProps, {
      disabled: isIncrementDisabled,
      "aria-disabled": isIncrementDisabled,
      onMouseDown: handleStepperButtonMouseDown,
      onClick: handleStep("up")
    });
  };
  const isDecrementDisabled = disabledProp || (isNumber(value) ? value <= (min3 != null ? min3 : Number.MIN_SAFE_INTEGER) : false);
  const getDecrementButtonProps = (externalProps = {}) => {
    return _extends({}, externalProps, stepperButtonCommonProps, {
      disabled: isDecrementDisabled,
      "aria-disabled": isDecrementDisabled,
      onMouseDown: handleStepperButtonMouseDown,
      onClick: handleStep("down")
    });
  };
  return {
    disabled: disabledProp,
    error: errorProp,
    focused,
    formControlContext,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    getRootProps,
    required: requiredProp,
    value: focused ? dirtyValue : value,
    isIncrementDisabled,
    isDecrementDisabled,
    inputValue: dirtyValue
  };
}

// node_modules/@mui/base/Unstable_NumberInput/NumberInput.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var _excluded9 = ["className", "defaultValue", "disabled", "endAdornment", "error", "id", "max", "min", "onBlur", "onInputChange", "onFocus", "onChange", "placeholder", "required", "readOnly", "shiftMultiplier", "startAdornment", "step", "value", "slotProps", "slots"];
var useUtilityClasses9 = (ownerState) => {
  const {
    disabled,
    error,
    focused,
    readOnly,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled,
    startAdornment,
    endAdornment
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", focused && "focused", readOnly && "readOnly", Boolean(formControlContext) && "formControl", Boolean(startAdornment) && "adornedStart", Boolean(endAdornment) && "adornedEnd"],
    input: ["input", disabled && "disabled", readOnly && "readOnly"],
    incrementButton: ["incrementButton", isIncrementDisabled && "disabled"],
    decrementButton: ["decrementButton", isDecrementDisabled && "disabled"]
  };
  return composeClasses(slots, useClassNamesOverride(getNumberInputUtilityClass));
};
var NumberInput = React26.forwardRef(function NumberInput2(props, forwardedRef) {
  var _slots$root, _slots$input, _slots$incrementButto, _slots$decrementButto;
  const {
    className,
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    max: max3,
    min: min3,
    onBlur,
    onInputChange,
    onFocus,
    onChange,
    placeholder,
    required,
    readOnly = false,
    shiftMultiplier,
    startAdornment,
    step,
    value,
    slotProps = {},
    slots = {}
  } = props, rest = _objectWithoutPropertiesLoose(props, _excluded9);
  const {
    getRootProps,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    focused,
    error: errorState,
    disabled: disabledState,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled
  } = useNumberInput({
    min: min3,
    max: max3,
    step,
    shiftMultiplier,
    defaultValue,
    disabled,
    error,
    onFocus,
    onInputChange,
    onBlur,
    onChange,
    required,
    readOnly,
    value,
    inputId: id
  });
  const ownerState = _extends({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    readOnly,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled
  });
  const classes = useUtilityClasses9(ownerState);
  const propsForwardedToInputSlot = {
    placeholder
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: rest,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [classes.root, className]
  });
  const Input5 = (_slots$input = slots.input) != null ? _slots$input : "input";
  const inputProps = useSlotProps({
    elementType: Input5,
    getSlotProps: (otherHandlers) => getInputProps(_extends({}, propsForwardedToInputSlot, otherHandlers)),
    externalSlotProps: slotProps.input,
    ownerState,
    className: classes.input
  });
  const IncrementButton = (_slots$incrementButto = slots.incrementButton) != null ? _slots$incrementButto : "button";
  const incrementButtonProps = useSlotProps({
    elementType: IncrementButton,
    getSlotProps: getIncrementButtonProps,
    externalSlotProps: slotProps.incrementButton,
    ownerState,
    className: classes.incrementButton
  });
  const DecrementButton = (_slots$decrementButto = slots.decrementButton) != null ? _slots$decrementButto : "button";
  const decrementButtonProps = useSlotProps({
    elementType: DecrementButton,
    getSlotProps: getDecrementButtonProps,
    externalSlotProps: slotProps.decrementButton,
    ownerState,
    className: classes.decrementButton
  });
  return (0, import_jsx_runtime20.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime19.jsx)(DecrementButton, _extends({}, decrementButtonProps)), (0, import_jsx_runtime19.jsx)(IncrementButton, _extends({}, incrementButtonProps)), startAdornment, (0, import_jsx_runtime19.jsx)(Input5, _extends({}, inputProps)), endAdornment]
  }));
});
true ? NumberInput.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types14.default.node,
  /**
   * @ignore
   */
  className: import_prop_types14.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types14.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types14.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endAdornment: import_prop_types14.default.node,
  /**
   * If `true`, the `input` will indicate an error by setting the `aria-invalid` attribute on the input and the `Mui-error` class on the root element.
   */
  error: import_prop_types14.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types14.default.string,
  /**
   * The maximum value.
   */
  max: import_prop_types14.default.number,
  /**
   * The minimum value.
   */
  min: import_prop_types14.default.number,
  /**
   * @ignore
   */
  onBlur: import_prop_types14.default.func,
  /**
   * Callback fired after the value is clamped and changes - when the `input` is blurred or when
   * the stepper buttons are triggered.
   * Called with `undefined` when the value is unset.
   *
   * @param {React.FocusEvent<HTMLInputElement>|React.PointerEvent|React.KeyboardEvent} event The event source of the callback
   * @param {number|undefined} value The new value of the component
   */
  onChange: import_prop_types14.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types14.default.func,
  /**
   * Callback fired when the `input` value changes after each keypress, before clamping is applied.
   * Note that `event.target.value` may contain values that fall outside of `min` and `max` or
   * are otherwise "invalid".
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   */
  onInputChange: import_prop_types14.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types14.default.string,
  /**
   * If `true`, the `input` element becomes read-only. The stepper buttons remain active,
   * with the addition that they are now keyboard focusable.
   * @default false
   */
  readOnly: import_prop_types14.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types14.default.bool,
  /**
   * Multiplier applied to `step` if the shift key is held while incrementing
   * or decrementing the value. Defaults to `10`.
   */
  shiftMultiplier: import_prop_types14.default.number,
  /**
   * The props used for each slot inside the NumberInput.
   * @default {}
   */
  slotProps: import_prop_types14.default.shape({
    decrementButton: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object]),
    incrementButton: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object]),
    input: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object]),
    root: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object])
  }),
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types14.default.shape({
    decrementButton: import_prop_types14.default.elementType,
    incrementButton: import_prop_types14.default.elementType,
    input: import_prop_types14.default.elementType,
    root: import_prop_types14.default.elementType
  }),
  /**
   * Leading adornment for this input.
   */
  startAdornment: import_prop_types14.default.node,
  /**
   * The amount that the value changes on each increment or decrement.
   */
  step: import_prop_types14.default.number,
  /**
   * The current value. Use when the component is controlled.
   */
  value: import_prop_types14.default.number
} : void 0;

// node_modules/@mui/base/OptionGroup/OptionGroup.js
var React27 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// node_modules/@mui/base/OptionGroup/optionGroupClasses.js
function getOptionGroupUtilityClass(slot) {
  return generateUtilityClass("MuiOptionGroup", slot);
}
var optionGroupClasses = generateUtilityClasses("MuiOptionGroup", ["root", "disabled", "label", "list"]);

// node_modules/@mui/base/OptionGroup/OptionGroup.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var _excluded10 = ["disabled", "slotProps", "slots"];
function useUtilityClasses10(disabled) {
  const slots = {
    root: ["root", disabled && "disabled"],
    label: ["label"],
    list: ["list"]
  };
  return composeClasses(slots, useClassNamesOverride(getOptionGroupUtilityClass));
}
var OptionGroup = React27.forwardRef(function OptionGroup2(props, forwardedRef) {
  const {
    disabled = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const Root = (slots == null ? void 0 : slots.root) || "li";
  const Label = (slots == null ? void 0 : slots.label) || "span";
  const List3 = (slots == null ? void 0 : slots.list) || "ul";
  const classes = useUtilityClasses10(disabled);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState: props,
    className: classes.root
  });
  const labelProps = useSlotProps({
    elementType: Label,
    externalSlotProps: slotProps.label,
    ownerState: props,
    className: classes.label
  });
  const listProps = useSlotProps({
    elementType: List3,
    externalSlotProps: slotProps.list,
    ownerState: props,
    className: classes.list
  });
  return (0, import_jsx_runtime22.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime21.jsx)(Label, _extends({}, labelProps, {
      children: props.label
    })), (0, import_jsx_runtime21.jsx)(List3, _extends({}, listProps, {
      children: props.children
    }))]
  }));
});
true ? OptionGroup.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types15.default.node,
  /**
   * @ignore
   */
  className: import_prop_types15.default.string,
  /**
   * If `true` all the options in the group will be disabled.
   * @default false
   */
  disabled: import_prop_types15.default.bool,
  /**
   * The human-readable description of the group.
   */
  label: import_prop_types15.default.node,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types15.default.shape({
    label: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object]),
    list: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object]),
    root: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object])
  }),
  /**
   * The components used for each slot inside the OptionGroup.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types15.default.shape({
    label: import_prop_types15.default.elementType,
    list: import_prop_types15.default.elementType,
    root: import_prop_types15.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Option/Option.js
var React30 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());

// node_modules/@mui/base/Option/optionClasses.js
function getOptionUtilityClass(slot) {
  return generateUtilityClass("MuiOption", slot);
}
var optionClasses = generateUtilityClasses("MuiOption", ["root", "disabled", "selected", "highlighted"]);

// node_modules/@mui/base/useOption/useOption.js
var React28 = __toESM(require_react());
function useOption(params) {
  const {
    value,
    label,
    disabled,
    rootRef: optionRefParam,
    id: idParam
  } = params;
  const {
    getRootProps: getListItemProps,
    highlighted,
    selected
  } = useListItem({
    item: value
  });
  const {
    getRootProps: getButtonProps,
    rootRef: buttonRefHandler
  } = useButton({
    disabled,
    focusableWhenDisabled: true
  });
  const id = useId(idParam);
  const optionRef = React28.useRef(null);
  const selectOption = React28.useMemo(() => ({
    disabled,
    label,
    value,
    ref: optionRef,
    id
  }), [disabled, label, value, id]);
  const {
    index: index2
  } = useCompoundItem(value, selectOption);
  const handleRef = useForkRef(optionRefParam, optionRef, buttonRefHandler);
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ([" ", "Enter"].includes(event.key)) {
      event.defaultMuiPrevented = true;
    }
  };
  const getOwnHandlers = (otherHandlers = {}) => ({
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  return {
    getRootProps: (externalProps = {}) => {
      const externalEventHandlers = extractEventHandlers(externalProps);
      const getCombinedRootProps = combineHooksSlotProps(getListItemProps, combineHooksSlotProps(getButtonProps, getOwnHandlers));
      return _extends({}, externalProps, externalEventHandlers, getCombinedRootProps(externalEventHandlers), {
        id,
        ref: handleRef,
        role: "option",
        "aria-selected": selected
      });
    },
    highlighted,
    index: index2,
    selected,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/useOption/useOptionContextStabilizer.js
var React29 = __toESM(require_react());
function useOptionContextStabilizer(value) {
  const listContext = React29.useContext(ListContext);
  if (!listContext) {
    throw new Error("Option: ListContext was not found.");
  }
  const {
    getItemState,
    dispatch
  } = listContext;
  const {
    highlighted,
    selected,
    focusable
  } = getItemState(value);
  const localGetItemState = React29.useCallback((itemValue) => {
    if (itemValue !== value) {
      throw new Error(["Base UI Option: Tried to access the state of another Option.", "This is unsupported when the Option uses the OptionContextStabilizer as a performance optimization."].join("/n"));
    }
    return {
      highlighted,
      selected,
      focusable
    };
  }, [highlighted, selected, focusable, value]);
  const localContextValue = React29.useMemo(() => ({
    dispatch,
    getItemState: localGetItemState
  }), [dispatch, localGetItemState]);
  return {
    contextValue: localContextValue
  };
}

// node_modules/@mui/base/Option/Option.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var _excluded11 = ["children", "disabled", "label", "slotProps", "slots", "value"];
function useUtilityClasses11(ownerState) {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", highlighted && "highlighted", selected && "selected"]
  };
  return composeClasses(slots, useClassNamesOverride(getOptionUtilityClass));
}
var InnerOption = React30.memo(React30.forwardRef(function Option(props, forwardedRef) {
  var _slots$root, _optionRef$current;
  const {
    children: children2,
    disabled = false,
    label,
    slotProps = {},
    slots = {},
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "li";
  const optionRef = React30.useRef(null);
  const combinedRef = useForkRef(optionRef, forwardedRef);
  const computedLabel = label != null ? label : typeof children2 === "string" ? children2 : (_optionRef$current = optionRef.current) == null ? void 0 : _optionRef$current.innerText;
  const {
    getRootProps,
    selected,
    highlighted,
    index: index2
  } = useOption({
    disabled,
    label: computedLabel,
    rootRef: combinedRef,
    value
  });
  const ownerState = _extends({}, props, {
    disabled,
    highlighted,
    index: index2,
    selected
  });
  const classes = useUtilityClasses11(ownerState);
  const rootProps = useSlotProps({
    getSlotProps: getRootProps,
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime23.jsx)(Root, _extends({}, rootProps, {
    children: children2
  }));
}));
var Option2 = React30.forwardRef(function Option3(props, ref) {
  const {
    value
  } = props;
  const {
    contextValue
  } = useOptionContextStabilizer(value);
  return (0, import_jsx_runtime23.jsx)(ListContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime23.jsx)(InnerOption, _extends({}, props, {
      ref
    }))
  });
});
true ? Option2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types16.default.node,
  /**
   * @ignore
   */
  className: import_prop_types16.default.string,
  /**
   * If `true`, the option will be disabled.
   * @default false
   */
  disabled: import_prop_types16.default.bool,
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label: import_prop_types16.default.string,
  /**
   * The props used for each slot inside the Option.
   * @default {}
   */
  slotProps: import_prop_types16.default.shape({
    root: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object])
  }),
  /**
   * The components used for each slot inside the Option.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types16.default.shape({
    root: import_prop_types16.default.elementType
  }),
  /**
   * The value of the option.
   */
  value: import_prop_types16.default.any.isRequired
} : void 0;

// node_modules/@mui/base/Unstable_Popup/Popup.js
var React36 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements2 = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min2 = Math.min;
var max2 = Math.max;
var round2 = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp2(start2, value, end2) {
  return max2(start2, min2(value, end2));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement2(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement2(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement2(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement2(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect2(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference: reference2,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference2.x + reference2.width / 2 - floating.width / 2;
  const commonY = reference2.y + reference2.height / 2 - floating.height / 2;
  const commonAlign = reference2[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference2.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case "right":
      coords = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference2.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference2.x,
        y: reference2.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference2, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference: reference2,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn: fn2
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn2({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference: reference2,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference: reference2,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow2(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect2(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect2(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement2(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements3 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow2(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements3[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset2 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow2(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp2(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp2(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName2(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow2(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement2(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow2(value).Node;
}
function isElement2(value) {
  return value instanceof Element || value instanceof getWindow2(value).Element;
}
function isHTMLElement3(value) {
  return value instanceof HTMLElement || value instanceof getWindow2(value).HTMLElement;
}
function isShadowRoot2(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow2(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement2(element) {
  return ["table", "td", "th"].includes(getNodeName2(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock2(element) {
  let currentNode = getParentNode2(element);
  while (isHTMLElement3(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode2(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName2(node));
}
function getComputedStyle2(element) {
  return getWindow2(element).getComputedStyle(element);
}
function getNodeScroll2(element) {
  if (isElement2(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode2(node) {
  if (getNodeName2(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot2(node) && node.host || // Fallback.
    getDocumentElement2(node)
  );
  return isShadowRoot2(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode2(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement3(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow2(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement3(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round2(width) !== offsetWidth || round2(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement2(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement3(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round2(rect.width) : rect.width) / width;
  let y = ($ ? round2(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow2(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow2(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect2(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement2(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow2(domElement);
    const offsetWin = offsetParent && isElement2(offsetParent) ? getWindow2(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left2 = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top2 = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left2;
      y += top2;
      currentIFrame = getWindow2(currentIFrame).frameElement;
    }
  }
  return rectToClientRect2({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement3(offsetParent);
  const documentElement = getDocumentElement2(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName2(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll2(offsetParent);
    }
    if (isHTMLElement3(offsetParent)) {
      const offsetRect = getBoundingClientRect2(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX2(element) {
  return getBoundingClientRect2(getDocumentElement2(element)).left + getNodeScroll2(element).scrollLeft;
}
function getDocumentRect2(element) {
  const html = getDocumentElement2(element);
  const scroll = getNodeScroll2(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX2(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect2(element, strategy) {
  const win = getWindow2(element);
  const html = getDocumentElement2(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect2(element, strategy) {
  const clientRect = getBoundingClientRect2(element, true, strategy === "fixed");
  const top2 = clientRect.top + element.clientTop;
  const left2 = clientRect.left + element.clientLeft;
  const scale = isHTMLElement3(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left2 * scale.x;
  const y = top2 * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect2(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect2(getDocumentElement2(element));
  } else if (isElement2(clippingAncestor)) {
    rect = getInnerBoundingClientRect2(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect2(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode2(element);
  if (parentNode === stopNode || !isElement2(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement2(el) && getNodeName2(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode2(element) : element;
  while (isElement2(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode2(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect2(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement3(offsetParent);
  const documentElement = getDocumentElement2(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect2(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName2(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll2(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect2(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX2(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent2(element, polyfill) {
  if (!isHTMLElement3(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent2(element, polyfill) {
  const window2 = getWindow2(element);
  if (!isHTMLElement3(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent2(element, polyfill);
  while (offsetParent && isTableElement2(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent2(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName2(offsetParent) === "html" || getNodeName2(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock2(element) || window2;
}
var getElementRects = async function(_ref) {
  let {
    reference: reference2,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent2;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference2, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: getDocumentElement2,
  getClippingRect: getClippingRect2,
  getOffsetParent: getOffsetParent2,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: isElement2,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement2(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left: left2,
      top: top2,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top2);
    const insetRight = floor(root.clientWidth - (left2 + width));
    const insetBottom = floor(root.clientHeight - (top2 + height));
    const insetLeft = floor(left2);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference2, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference2);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect2(reference2) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect2(reference2);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var shift2 = shift;
var flip3 = flip2;
var computePosition2 = (reference2, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference2, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React31 = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React31.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React31.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React31.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React31.useState(null);
  const [_floating, _setFloating] = React31.useState(null);
  const setReference = React31.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React31.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React31.useRef(null);
  const floatingRef = React31.useRef(null);
  const dataRef = React31.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React31.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM2.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React31.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React31.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React31.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React31.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React31.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

// node_modules/@mui/base/Unstable_Popup/popupClasses.js
function getPopupUtilityClass(slot) {
  return generateUtilityClass("MuiPopup", slot);
}
var popupClasses = generateUtilityClasses("MuiPopup", ["root", "open"]);

// node_modules/@mui/base/useTransition/useTransitionStateManager.js
var React33 = __toESM(require_react());

// node_modules/@mui/base/useTransition/TransitionContext.js
var React32 = __toESM(require_react());
var TransitionContext = React32.createContext(null);

// node_modules/@mui/base/useTransition/useTransitionStateManager.js
function useTransitionStateManager() {
  const transitionContext = React33.useContext(TransitionContext);
  if (!transitionContext) {
    throw new Error("Missing transition context");
  }
  const {
    registerTransition,
    requestedEnter,
    onEntering,
    onEntered,
    onExiting,
    onExited
  } = transitionContext;
  React33.useEffect(() => {
    return registerTransition();
  }, [registerTransition]);
  return {
    onEntering,
    onEntered,
    onExiting,
    onExited,
    requestedEnter
  };
}

// node_modules/@mui/base/useTransition/useTransitionTrigger.js
var React34 = __toESM(require_react());
function useTransitionTrigger(requestEnter) {
  const [state, dispatch] = React34.useReducer(transitionStateReducer, {
    elementExited: !requestEnter,
    inProgress: false
  });
  const hasTransition = React34.useRef(false);
  const handleEntering = React34.useCallback(() => {
    dispatch("entering");
  }, []);
  const handleEntered = React34.useCallback(() => {
    dispatch("entered");
  }, []);
  const handleExiting = React34.useCallback(() => {
    dispatch("exiting");
  }, []);
  const handleExited = React34.useCallback(() => {
    dispatch("exited");
  }, []);
  React34.useEffect(() => {
    if (!hasTransition.current) {
      if (requestEnter) {
        dispatch("entered");
      } else {
        dispatch("exited");
      }
    }
  }, [requestEnter]);
  const registerTransition = React34.useCallback(() => {
    hasTransition.current = true;
    return () => {
      hasTransition.current = false;
    };
  }, []);
  const contextValue = React34.useMemo(() => ({
    requestedEnter: requestEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExiting: handleExiting,
    onExited: handleExited,
    registerTransition,
    hasExited: state.elementExited
  }), [handleEntering, handleEntered, handleExiting, handleExited, requestEnter, registerTransition, state.elementExited]);
  return {
    contextValue,
    hasExited: state.elementExited,
    transitionInProgress: state.inProgress
  };
}
function transitionStateReducer(_, action) {
  switch (action) {
    case "entering":
      return {
        elementExited: false,
        inProgress: true
      };
    case "entered":
      return {
        elementExited: false,
        inProgress: false
      };
    case "exiting":
      return {
        elementExited: false,
        inProgress: true
      };
    case "exited":
      return {
        elementExited: true,
        inProgress: false
      };
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
}

// node_modules/@mui/base/Unstable_Popup/PopupContext.js
var React35 = __toESM(require_react());
var PopupContext = React35.createContext(null);

// node_modules/@mui/base/Unstable_Popup/Popup.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var _excluded12 = ["anchor", "children", "container", "disablePortal", "keepMounted", "middleware", "offset", "open", "placement", "slotProps", "slots", "strategy", "withTransition"];
function useUtilityClasses12(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ["root", open && "open"]
  };
  return composeClasses(slots, useClassNamesOverride(getPopupUtilityClass));
}
function resolveAnchor(anchor) {
  return typeof anchor === "function" ? anchor() : anchor;
}
var Popup = React36.forwardRef(function Popup2(props, forwardedRef) {
  var _slots$root;
  const {
    anchor: anchorProp,
    children: children2,
    container,
    disablePortal = false,
    keepMounted = false,
    middleware,
    offset: offsetProp = 0,
    open = false,
    placement = "bottom",
    slotProps = {},
    slots = {},
    strategy = "absolute",
    withTransition = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const {
    refs,
    elements,
    floatingStyles,
    update,
    placement: finalPlacement
  } = useFloating({
    elements: {
      reference: resolveAnchor(anchorProp)
    },
    open,
    middleware: middleware != null ? middleware : [offset2(offsetProp != null ? offsetProp : 0), flip3(), shift2()],
    placement,
    strategy,
    whileElementsMounted: !keepMounted ? autoUpdate : void 0
  });
  const handleRef = useForkRef(refs.setFloating, forwardedRef);
  useEnhancedEffect_default(() => {
    if (keepMounted && open && elements.reference && elements.floating) {
      const cleanup = autoUpdate(elements.reference, elements.floating, update);
      return cleanup;
    }
    return void 0;
  }, [keepMounted, open, elements, update]);
  const ownerState = _extends({}, props, {
    disablePortal,
    keepMounted,
    offset: offset2,
    open,
    placement,
    finalPlacement,
    strategy,
    withTransition
  });
  const {
    contextValue,
    hasExited: hasTransitionExited
  } = useTransitionTrigger(open);
  const visibility = keepMounted && hasTransitionExited ? "hidden" : void 0;
  const classes = useUtilityClasses12(ownerState);
  const Root = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root,
    additionalProps: {
      ref: handleRef,
      role: "tooltip",
      style: _extends({}, floatingStyles, {
        visibility
      })
    }
  });
  const popupContextValue = React36.useMemo(() => ({
    placement: finalPlacement
  }), [finalPlacement]);
  const shouldRender = keepMounted || !hasTransitionExited;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime24.jsx)(Portal, {
    disablePortal,
    container,
    children: (0, import_jsx_runtime24.jsx)(PopupContext.Provider, {
      value: popupContextValue,
      children: (0, import_jsx_runtime24.jsx)(TransitionContext.Provider, {
        value: contextValue,
        children: (0, import_jsx_runtime24.jsx)(Root, _extends({}, rootProps, {
          children: children2
        }))
      })
    })
  });
});
true ? Popup.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtual element](https://floating-ui.com/docs/virtual-elements),
   * or a function that returns either.
   * It's used to set the position of the popup.
   */
  anchor: import_prop_types17.default.oneOfType([HTMLElementType, import_prop_types17.default.object, import_prop_types17.default.func]),
  /**
   * @ignore
   */
  children: import_prop_types17.default.oneOfType([import_prop_types17.default.node, import_prop_types17.default.func]),
  /**
   * An HTML element or function that returns one. The container will have the portal children appended to it.
   * By default, it uses the body of the top-level document object, so it's `document.body` in these cases.
   */
  container: import_prop_types17.default.oneOfType([HTMLElementType, import_prop_types17.default.func]),
  /**
   * If `true`, the popup will be rendered where it is defined, without the use of portals.
   * @default false
   */
  disablePortal: import_prop_types17.default.bool,
  /**
   * If `true`, the popup will exist in the DOM even if it's closed.
   * Its visibility will be controlled by the `display` CSS property.
   *
   * Otherwise, a closed popup will be removed from the DOM.
   *
   * @default false
   */
  keepMounted: import_prop_types17.default.bool,
  /**
   * Collection of Floating UI middleware to use when positioning the popup.
   * If not provided, the [`offset`](https://floating-ui.com/docs/offset)
   * and [`flip`](https://floating-ui.com/docs/flip) functions will be used.
   *
   * @see https://floating-ui.com/docs/computePosition#middleware
   */
  middleware: import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf([false]), import_prop_types17.default.shape({
    fn: import_prop_types17.default.func.isRequired,
    name: import_prop_types17.default.string.isRequired,
    options: import_prop_types17.default.any
  })])),
  /**
   * Distance between a popup and the trigger element.
   * This prop is ignored when custom `middleware` is provided.
   *
   * @default 0
   * @see https://floating-ui.com/docs/offset
   */
  offset: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.number, import_prop_types17.default.shape({
    alignmentAxis: import_prop_types17.default.number,
    crossAxis: import_prop_types17.default.number,
    mainAxis: import_prop_types17.default.number
  })]),
  /**
   * If `true`, the popup is visible.
   *
   * @default false
   */
  open: import_prop_types17.default.bool,
  /**
   * Determines where to place the popup relative to the trigger element.
   *
   * @default 'bottom'
   * @see https://floating-ui.com/docs/computePosition#placement
   */
  placement: import_prop_types17.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The props used for each slot inside the Popup.
   *
   * @default {}
   */
  slotProps: import_prop_types17.default.shape({
    root: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object])
  }),
  /**
   * The components used for each slot inside the Popup.
   * Either a string to use a HTML element or a component.
   *
   * @default {}
   */
  slots: import_prop_types17.default.shape({
    root: import_prop_types17.default.elementType
  }),
  /**
   * The type of CSS position property to use (absolute or fixed).
   *
   * @default 'absolute'
   * @see https://floating-ui.com/docs/computePosition#strategy
   */
  strategy: import_prop_types17.default.oneOf(["absolute", "fixed"]),
  /**
   * If `true`, the popup will not disappear immediately when it needs to be closed
   * but wait until the exit transition has finished.
   * In such a case, a function form of `children` must be used and `onExited`
   * callback function must be called when the transition or animation finish.
   *
   * @default false
   */
  withTransition: import_prop_types17.default.bool
} : void 0;

// node_modules/@mui/base/Select/Select.js
var React39 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());

// node_modules/@mui/base/useSelect/useSelect.js
var React37 = __toESM(require_react());

// node_modules/@mui/base/useSelect/useSelect.types.js
var SelectActionTypes = {
  buttonClick: "buttonClick",
  browserAutoFill: "browserAutoFill"
};

// node_modules/@mui/base/useSelect/defaultOptionStringifier.js
var defaultOptionStringifier = (option) => {
  const {
    label,
    value
  } = option;
  if (typeof label === "string") {
    return label;
  }
  if (typeof value === "string") {
    return value;
  }
  return String(option);
};

// node_modules/@mui/base/useSelect/selectReducer.js
function selectReducer(state, action) {
  const {
    open
  } = state;
  const {
    context: {
      selectionMode
    }
  } = action;
  if (action.type === SelectActionTypes.buttonClick) {
    var _state$selectedValues;
    const itemToHighlight = (_state$selectedValues = state.selectedValues[0]) != null ? _state$selectedValues : moveHighlight(null, "start", action.context);
    return _extends({}, state, {
      open: !open,
      highlightedValue: !open ? itemToHighlight : null
    });
  }
  if (action.type === SelectActionTypes.browserAutoFill) {
    return handleItemSelection(action.item, state, action.context);
  }
  const newState = listReducer(state, action);
  switch (action.type) {
    case ListActionTypes.keyDown:
      if (state.open) {
        if (action.event.key === "Escape") {
          return _extends({}, newState, {
            open: false
          });
        }
      } else {
        if (action.event.key === "ArrowDown") {
          var _state$selectedValues2;
          return _extends({}, state, {
            open: true,
            highlightedValue: (_state$selectedValues2 = state.selectedValues[0]) != null ? _state$selectedValues2 : moveHighlight(null, "start", action.context)
          });
        }
        if (action.event.key === "ArrowUp") {
          var _state$selectedValues3;
          return _extends({}, state, {
            open: true,
            highlightedValue: (_state$selectedValues3 = state.selectedValues[0]) != null ? _state$selectedValues3 : moveHighlight(null, "end", action.context)
          });
        }
      }
      break;
    case ListActionTypes.itemClick:
      if (selectionMode === "single") {
        return _extends({}, newState, {
          open: false
        });
      }
      break;
    case ListActionTypes.blur:
      return _extends({}, newState, {
        open: false
      });
    default:
      return newState;
  }
  return newState;
}

// node_modules/@mui/base/useSelect/useSelect.js
var visuallyHiddenStyle = {
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "inset(50%)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  left: "50%",
  bottom: 0
  // to display the native browser validation error at the bottom of the Select.
};
function defaultFormValueProvider(selectedOption) {
  if (Array.isArray(selectedOption)) {
    if (selectedOption.length === 0) {
      return "";
    }
    return JSON.stringify(selectedOption.map((o) => o.value));
  }
  if ((selectedOption == null ? void 0 : selectedOption.value) == null) {
    return "";
  }
  if (typeof selectedOption.value === "string" || typeof selectedOption.value === "number") {
    return selectedOption.value;
  }
  return JSON.stringify(selectedOption.value);
}
function useSelect(props) {
  const {
    areOptionsEqual,
    buttonRef: buttonRefProp,
    defaultOpen = false,
    defaultValue: defaultValueProp,
    disabled = false,
    listboxId: listboxIdProp,
    listboxRef: listboxRefProp,
    multiple = false,
    name,
    required,
    onChange,
    onHighlightChange,
    onOpenChange,
    open: openProp,
    options: optionsParam,
    getOptionAsString = defaultOptionStringifier,
    getSerializedValue = defaultFormValueProvider,
    value: valueProp,
    componentName = "useSelect"
  } = props;
  const buttonRef = React37.useRef(null);
  const handleButtonRef = useForkRef(buttonRefProp, buttonRef);
  const listboxRef = React37.useRef(null);
  const listboxId = useId(listboxIdProp);
  let defaultValue;
  if (valueProp === void 0 && defaultValueProp === void 0) {
    defaultValue = [];
  } else if (defaultValueProp !== void 0) {
    if (multiple) {
      defaultValue = defaultValueProp;
    } else {
      defaultValue = defaultValueProp == null ? [] : [defaultValueProp];
    }
  }
  const value = React37.useMemo(() => {
    if (valueProp !== void 0) {
      if (multiple) {
        return valueProp;
      }
      return valueProp == null ? [] : [valueProp];
    }
    return void 0;
  }, [valueProp, multiple]);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const options = React37.useMemo(() => {
    if (optionsParam != null) {
      return new Map(optionsParam.map((option, index2) => [option.value, {
        value: option.value,
        label: option.label,
        disabled: option.disabled,
        ref: React37.createRef(),
        id: `${listboxId}_${index2}`
      }]));
    }
    return subitems;
  }, [optionsParam, subitems, listboxId]);
  const handleListboxRef = useForkRef(listboxRefProp, listboxRef);
  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible,
    rootRef: mergedButtonRef
  } = useButton({
    disabled,
    rootRef: handleButtonRef
  });
  const optionValues = React37.useMemo(() => Array.from(options.keys()), [options]);
  const getOptionByValue = React37.useCallback((valueToGet) => {
    if (areOptionsEqual !== void 0) {
      const similarValue = optionValues.find((optionValue) => areOptionsEqual(optionValue, valueToGet));
      return options.get(similarValue);
    }
    return options.get(valueToGet);
  }, [options, areOptionsEqual, optionValues]);
  const isItemDisabled = React37.useCallback((valueToCheck) => {
    var _option$disabled;
    const option = getOptionByValue(valueToCheck);
    return (_option$disabled = option == null ? void 0 : option.disabled) != null ? _option$disabled : false;
  }, [getOptionByValue]);
  const stringifyOption = React37.useCallback((valueToCheck) => {
    const option = getOptionByValue(valueToCheck);
    if (!option) {
      return "";
    }
    return getOptionAsString(option);
  }, [getOptionByValue, getOptionAsString]);
  const controlledState = React37.useMemo(() => ({
    selectedValues: value,
    open: openProp
  }), [value, openProp]);
  const getItemId = React37.useCallback((itemValue) => {
    var _options$get;
    return (_options$get = options.get(itemValue)) == null ? void 0 : _options$get.id;
  }, [options]);
  const handleSelectionChange = React37.useCallback((event, newValues) => {
    if (multiple) {
      onChange == null || onChange(event, newValues);
    } else {
      var _newValues$;
      onChange == null || onChange(event, (_newValues$ = newValues[0]) != null ? _newValues$ : null);
    }
  }, [multiple, onChange]);
  const handleHighlightChange = React37.useCallback((event, newValue) => {
    onHighlightChange == null || onHighlightChange(event, newValue != null ? newValue : null);
  }, [onHighlightChange]);
  const handleStateChange = React37.useCallback((event, field, fieldValue) => {
    if (field === "open") {
      onOpenChange == null || onOpenChange(fieldValue);
      if (fieldValue === false && (event == null ? void 0 : event.type) !== "blur") {
        var _buttonRef$current;
        (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
      }
    }
  }, [onOpenChange]);
  const getItemDomElement = React37.useCallback((itemId) => {
    var _subitems$get$ref$cur, _subitems$get;
    if (itemId == null) {
      return null;
    }
    return (_subitems$get$ref$cur = (_subitems$get = subitems.get(itemId)) == null ? void 0 : _subitems$get.ref.current) != null ? _subitems$get$ref$cur : null;
  }, [subitems]);
  const useListParameters = {
    getInitialState: () => {
      var _defaultValue;
      return {
        highlightedValue: null,
        selectedValues: (_defaultValue = defaultValue) != null ? _defaultValue : [],
        open: defaultOpen
      };
    },
    getItemId,
    controlledProps: controlledState,
    focusManagement: "DOM",
    getItemDomElement,
    itemComparer: areOptionsEqual,
    isItemDisabled,
    rootRef: handleListboxRef,
    onChange: handleSelectionChange,
    onHighlightChange: handleHighlightChange,
    onStateChange: handleStateChange,
    reducerActionContext: React37.useMemo(() => ({
      multiple
    }), [multiple]),
    items: optionValues,
    getItemAsString: stringifyOption,
    selectionMode: multiple ? "multiple" : "single",
    stateReducer: selectReducer,
    componentName
  };
  const {
    dispatch,
    getRootProps: getListboxRootProps,
    contextValue: listContextValue,
    state: {
      open,
      highlightedValue: highlightedOption,
      selectedValues: selectedOptions
    },
    rootRef: mergedListRootRef
  } = useList(useListParameters);
  const isInitiallyOpen = React37.useRef(open);
  useEnhancedEffect_default(() => {
    if (open && highlightedOption !== null) {
      var _getOptionByValue;
      const optionRef = (_getOptionByValue = getOptionByValue(highlightedOption)) == null ? void 0 : _getOptionByValue.ref;
      if (!listboxRef.current || !(optionRef != null && optionRef.current)) {
        return;
      }
      if (!isInitiallyOpen.current) {
        optionRef.current.focus({
          preventScroll: true
        });
      }
      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();
      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [open, highlightedOption, getOptionByValue]);
  const getOptionMetadata = React37.useCallback((optionValue) => getOptionByValue(optionValue), [getOptionByValue]);
  const createHandleButtonClick = (externalEventHandlers) => (event) => {
    var _externalEventHandler;
    externalEventHandlers == null || (_externalEventHandler = externalEventHandlers.onClick) == null || _externalEventHandler.call(externalEventHandlers, event);
    if (!event.defaultMuiPrevented) {
      const action = {
        type: SelectActionTypes.buttonClick,
        event
      };
      dispatch(action);
    }
  };
  const createHandleButtonKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      dispatch({
        type: ListActionTypes.keyDown,
        key: event.key,
        event
      });
    }
  };
  const getButtonOwnRootProps = (otherHandlers = {}) => ({
    onClick: createHandleButtonClick(otherHandlers),
    onKeyDown: createHandleButtonKeyDown(otherHandlers)
  });
  const getSelectTriggerProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, getButtonOwnRootProps(otherHandlers), {
      role: "combobox",
      "aria-expanded": open,
      "aria-controls": listboxId
    });
  };
  const getButtonProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const combinedProps = combineHooksSlotProps(getButtonRootProps, getSelectTriggerProps);
    return _extends({}, externalProps, combinedProps(externalEventHandlers));
  };
  const createListboxHandleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur, _listboxRef$current;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ((_listboxRef$current = listboxRef.current) != null && _listboxRef$current.contains(event.relatedTarget) || event.relatedTarget === buttonRef.current) {
      event.defaultMuiPrevented = true;
    }
  };
  const getOwnListboxHandlers = (otherHandlers = {}) => ({
    onBlur: createListboxHandleBlur(otherHandlers)
  });
  const getListboxProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const getCombinedRootProps = combineHooksSlotProps(getOwnListboxHandlers, getListboxRootProps);
    return _extends({
      id: listboxId,
      role: "listbox",
      "aria-multiselectable": multiple ? "true" : void 0
    }, externalProps, getCombinedRootProps(externalEventHandlers));
  };
  React37.useDebugValue({
    selectedOptions,
    highlightedOption,
    open
  });
  const contextValue = React37.useMemo(() => _extends({}, listContextValue, compoundComponentContextValue), [listContextValue, compoundComponentContextValue]);
  let selectValue;
  if (props.multiple) {
    selectValue = selectedOptions;
  } else {
    selectValue = selectedOptions.length > 0 ? selectedOptions[0] : null;
  }
  let selectedOptionsMetadata;
  if (multiple) {
    selectedOptionsMetadata = selectValue.map((v) => getOptionMetadata(v)).filter((o) => o !== void 0);
  } else {
    var _getOptionMetadata;
    selectedOptionsMetadata = (_getOptionMetadata = getOptionMetadata(selectValue)) != null ? _getOptionMetadata : null;
  }
  const createHandleHiddenInputChange = (externalEventHandlers) => (event) => {
    var _externalEventHandler2;
    externalEventHandlers == null || (_externalEventHandler2 = externalEventHandlers.onChange) == null || _externalEventHandler2.call(externalEventHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    const option = options.get(event.target.value);
    if (event.target.value === "") {
      dispatch({
        type: ListActionTypes.clearSelection
      });
    } else if (option !== void 0) {
      dispatch({
        type: SelectActionTypes.browserAutoFill,
        item: option.value,
        event
      });
    }
  };
  const getHiddenInputProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    return _extends({
      name,
      tabIndex: -1,
      "aria-hidden": true,
      required: required ? true : void 0,
      value: getSerializedValue(selectedOptionsMetadata),
      style: visuallyHiddenStyle
    }, externalProps, {
      onChange: createHandleHiddenInputChange(externalEventHandlers)
    });
  };
  return {
    buttonActive,
    buttonFocusVisible,
    buttonRef: mergedButtonRef,
    contextValue,
    disabled,
    dispatch,
    getButtonProps,
    getHiddenInputProps,
    getListboxProps,
    getOptionMetadata,
    listboxRef: mergedListRootRef,
    open,
    options: optionValues,
    value: selectValue,
    highlightedOption
  };
}

// node_modules/@mui/base/useSelect/SelectProvider.js
var React38 = __toESM(require_react());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
function SelectProvider(props) {
  const {
    value,
    children: children2
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React38.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex
  }), [dispatch, getItemIndex, getItemState]);
  const compoundComponentContextValue = React38.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime25.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime25.jsx)(ListContext.Provider, {
      value: listContextValue,
      children: children2
    })
  });
}

// node_modules/@mui/base/Select/selectClasses.js
function getSelectUtilityClass(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
var selectClasses = generateUtilityClasses("MuiSelect", ["root", "button", "listbox", "popper", "active", "expanded", "disabled", "focusVisible"]);

// node_modules/@mui/base/Select/Select.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var _span;
var _excluded13 = ["areOptionsEqual", "autoComplete", "autoFocus", "children", "defaultValue", "defaultListboxOpen", "disabled", "getSerializedValue", "listboxId", "listboxOpen", "multiple", "name", "required", "onChange", "onListboxOpenChange", "getOptionAsString", "renderValue", "placeholder", "slotProps", "slots", "value"];
function defaultRenderValue(selectedOptions) {
  var _selectedOptions$labe;
  if (Array.isArray(selectedOptions)) {
    return (0, import_jsx_runtime26.jsx)(React39.Fragment, {
      children: selectedOptions.map((o) => o.label).join(", ")
    });
  }
  return (_selectedOptions$labe = selectedOptions == null ? void 0 : selectedOptions.label) != null ? _selectedOptions$labe : null;
}
function useUtilityClasses13(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active", open && "expanded"],
    listbox: ["listbox", disabled && "disabled"],
    popper: ["popper"]
  };
  return composeClasses(slots, useClassNamesOverride(getSelectUtilityClass));
}
var Select = React39.forwardRef(function Select2(props, forwardedRef) {
  var _slots$root, _slots$listbox, _slots$popper, _ref, _renderValue;
  const {
    areOptionsEqual,
    autoComplete,
    autoFocus,
    children: children2,
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledProp,
    getSerializedValue,
    listboxId,
    listboxOpen: listboxOpenProp,
    multiple = false,
    name,
    required = false,
    onChange,
    onListboxOpenChange,
    getOptionAsString = defaultOptionStringifier,
    renderValue: renderValueProp,
    placeholder,
    slotProps = {},
    slots = {},
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderValue;
  const [buttonDefined, setButtonDefined] = React39.useState(false);
  const buttonRef = React39.useRef(null);
  const listboxRef = React39.useRef(null);
  const Button = (_slots$root = slots.root) != null ? _slots$root : "button";
  const ListboxRoot = (_slots$listbox = slots.listbox) != null ? _slots$listbox : "ul";
  const PopperComponent = (_slots$popper = slots.popper) != null ? _slots$popper : Popper;
  const handleButtonRefChange = React39.useCallback((element) => {
    setButtonDefined(element != null);
  }, []);
  const handleButtonRef = useForkRef(forwardedRef, buttonRef, handleButtonRefChange);
  React39.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const {
    buttonActive,
    buttonFocusVisible,
    contextValue,
    disabled,
    getButtonProps,
    getListboxProps,
    getHiddenInputProps,
    getOptionMetadata,
    value,
    open
  } = useSelect({
    name,
    required,
    getSerializedValue,
    areOptionsEqual,
    buttonRef: handleButtonRef,
    defaultOpen: defaultListboxOpen,
    defaultValue,
    disabled: disabledProp,
    listboxId,
    multiple,
    open: listboxOpenProp,
    onChange,
    onOpenChange: onListboxOpenChange,
    getOptionAsString,
    value: valueProp,
    componentName: "Select"
  });
  const ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open,
    multiple,
    renderValue,
    value
  });
  const classes = useUtilityClasses13(ownerState);
  const buttonProps = useSlotProps({
    elementType: Button,
    getSlotProps: getButtonProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const listboxProps = useSlotProps({
    elementType: ListboxRoot,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    additionalProps: {
      ref: listboxRef
    },
    ownerState,
    className: classes.listbox
  });
  const popperProps = useSlotProps({
    elementType: PopperComponent,
    externalSlotProps: slotProps.popper,
    additionalProps: {
      anchorEl: buttonRef.current,
      keepMounted: true,
      open,
      placement: "bottom-start",
      role: void 0
    },
    ownerState,
    className: classes.popper
  });
  let selectedOptionsMetadata;
  if (multiple) {
    selectedOptionsMetadata = value.map((v) => getOptionMetadata(v)).filter((o) => o !== void 0);
  } else {
    var _getOptionMetadata;
    selectedOptionsMetadata = (_getOptionMetadata = getOptionMetadata(value)) != null ? _getOptionMetadata : null;
  }
  return (0, import_jsx_runtime27.jsxs)(React39.Fragment, {
    children: [(0, import_jsx_runtime26.jsx)(Button, _extends({}, buttonProps, {
      children: (_ref = (_renderValue = renderValue(selectedOptionsMetadata)) != null ? _renderValue : placeholder) != null ? _ref : (
        // fall back to a zero-width space to prevent layout shift
        // from https://github.com/mui/material-ui/pull/24563
        _span || (_span = (0, import_jsx_runtime26.jsx)("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })), buttonDefined && (0, import_jsx_runtime26.jsx)(PopperComponent, _extends({}, popperProps, {
      children: (0, import_jsx_runtime26.jsx)(ListboxRoot, _extends({}, listboxProps, {
        children: (0, import_jsx_runtime26.jsx)(SelectProvider, {
          value: contextValue,
          children: children2
        })
      }))
    })), (0, import_jsx_runtime26.jsx)("input", _extends({}, getHiddenInputProps(), {
      autoComplete
    }))]
  });
});
true ? Select.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A function used to determine if two options' values are equal.
   * By default, reference equality is used.
   *
   * There is a performance impact when using the `areOptionsEqual` prop (proportional to the number of options).
   * Therefore, it's recommented to use the default reference equality comparison whenever possible.
   */
  areOptionsEqual: import_prop_types18.default.func,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types18.default.string,
  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: import_prop_types18.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types18.default.node,
  /**
   * @ignore
   */
  className: import_prop_types18.default.string,
  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: import_prop_types18.default.bool,
  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types18.default.any,
  /**
   * If `true`, the select is disabled.
   * @default false
   */
  disabled: import_prop_types18.default.bool,
  /**
   * A function used to convert the option label to a string.
   * It's useful when labels are elements and need to be converted to plain text
   * to enable navigation using character keys on a keyboard.
   *
   * @default defaultOptionStringifier
   */
  getOptionAsString: import_prop_types18.default.func,
  /**
   * A function to convert the currently selected value to a string.
   * Used to set a value of a hidden input associated with the select,
   * so that the selected value can be posted with a form.
   */
  getSerializedValue: import_prop_types18.default.func,
  /**
   * `id` attribute of the listbox element.
   */
  listboxId: import_prop_types18.default.string,
  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: import_prop_types18.default.bool,
  /**
   * If `true`, selecting multiple values is allowed.
   * This affects the type of the `value`, `defaultValue`, and `onChange` props.
   *
   * @default false
   */
  multiple: import_prop_types18.default.bool,
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: import_prop_types18.default.string,
  /**
   * Callback fired when an option is selected.
   */
  onChange: import_prop_types18.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: import_prop_types18.default.func,
  /**
   * Text to show when there is no selected value.
   */
  placeholder: import_prop_types18.default.node,
  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: import_prop_types18.default.func,
  /**
   * If `true`, the Select cannot be empty when submitting form.
   * @default false
   */
  required: import_prop_types18.default.bool,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types18.default.shape({
    listbox: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    popper: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    root: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object])
  }),
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types18.default.shape({
    listbox: import_prop_types18.default.elementType,
    popper: import_prop_types18.default.elementType,
    root: import_prop_types18.default.elementType
  }),
  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: import_prop_types18.default.any
} : void 0;

// node_modules/@mui/base/Slider/Slider.js
var React41 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());

// node_modules/@mui/base/Slider/sliderClasses.js
function getSliderUtilityClass(slot) {
  return generateUtilityClass("MuiSlider", slot);
}
var sliderClasses = generateUtilityClasses("MuiSlider", ["root", "active", "focusVisible", "disabled", "dragging", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "markLabelActive", "thumb"]);

// node_modules/@mui/base/useSlider/useSlider.js
var React40 = __toESM(require_react());
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a, b) {
  return a - b;
}
function clamp3(value, min3, max3) {
  if (value == null) {
    return min3;
  }
  return Math.min(Math.max(min3, value), max3);
}
function findClosest(values2, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values2.reduce((acc, value, index2) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index: index2
      };
    }
    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min3, max3) {
  return (value - min3) * 100 / (max3 - min3);
}
function percentToValue(percent, min3, max3) {
  return (max3 - min3) * percent + min3;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min3) {
  const nearest = Math.round((value - min3) / step) * step + min3;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values: values2,
  newValue,
  index: index2
}) {
  const output = values2.slice();
  output[index2] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;
  const doc = ownerDocument(sliderRef.current);
  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null || (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute("data-index")) !== activeIndex) {
    var _sliderRef$current2;
    (_sliderRef$current2 = sliderRef.current) == null || _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return newValue === oldValue;
  }
  if (typeof newValue === "object" && typeof oldValue === "object") {
    return areArraysEqual(newValue, oldValue);
  }
  return false;
}
var axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  "horizontal-reverse": {
    offset: (percent) => ({
      right: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`
    }),
    leap: (percent) => ({
      height: `${percent}%`
    })
  }
};
var Identity = (x) => x;
var cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === void 0) {
    if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
      cachedSupportsTouchActionNone = CSS.supports("touch-action", "none");
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
function useSlider(parameters) {
  const {
    "aria-labelledby": ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max: max3 = 100,
    min: min3 = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    rootRef: ref,
    scale = Identity,
    step = 1,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React40.useRef();
  const [active, setActive] = React40.useState(-1);
  const [open, setOpen] = React40.useState(-1);
  const [dragging, setDragging] = React40.useState(false);
  const moveCount = React40.useRef(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min3,
    name: "Slider"
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values2 = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values2 = values2.map((value) => clamp3(value, min3, max3));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max3 - min3) / step) + 1)].map((_, index2) => ({
    value: min3 + step * index2
  })) : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusedThumbIndex, setFocusedThumbIndex] = React40.useState(-1);
  const sliderRef = React40.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);
  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    const index2 = Number(event.currentTarget.getAttribute("data-index"));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusedThumbIndex(index2);
    }
    setOpen(index2);
    otherHandlers == null || (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers == null || (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
  };
  useEnhancedEffect_default(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;
      (_document$activeEleme = document.activeElement) == null || _document$activeEleme.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    var _otherHandlers$onChan;
    (_otherHandlers$onChan = otherHandlers.onChange) == null || _otherHandlers$onChan.call(otherHandlers, event);
    const index2 = Number(event.currentTarget.getAttribute("data-index"));
    const value = values2[index2];
    const marksIndex = marksValues.indexOf(value);
    let newValue = event.target.valueAsNumber;
    if (marks && step == null) {
      const maxMarksValue = marksValues[marksValues.length - 1];
      if (newValue > maxMarksValue) {
        newValue = maxMarksValue;
      } else if (newValue < marksValues[0]) {
        newValue = marksValues[0];
      } else {
        newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
      }
    }
    newValue = clamp3(newValue, min3, max3);
    if (range) {
      if (disableSwap) {
        newValue = clamp3(newValue, values2[index2 - 1] || -Infinity, values2[index2 + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        newValue,
        index: index2
      });
      let activeIndex = index2;
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index2);
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index2);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const previousIndex = React40.useRef();
  let axis = orientation;
  if (isRtl && orientation === "horizontal") {
    axis += "-reverse";
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom: bottom2,
      left: left2
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.indexOf("vertical") === 0) {
      percent = (bottom2 - finger.y) / height;
    } else {
      percent = (finger.x - left2) / width;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min3, max3);
    if (step) {
      newValue = roundValueToStep(newValue, step, min3);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp3(newValue, min3, max3);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      if (disableSwap) {
        newValue = clamp3(newValue, values2[activeIndex - 1] || -Infinity, values2[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        newValue,
        index: activeIndex
      });
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = void 0;
    stopListening();
  });
  const handleTouchStart = useEventCallback_default((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("touchend", handleTouchEnd, {
      passive: true
    });
  });
  const stopListening = React40.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React40.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener("touchstart", handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React40.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null || _otherHandlers$onMous.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("mouseup", handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values2[0] : min3, min3, max3);
  const trackLeap = valueToPercent(values2[values2.length - 1], min3, max3) - trackOffset;
  const getRootProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers(externalProps);
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(externalHandlers || {})
    };
    const mergedEventHandlers = _extends({}, externalHandlers, ownEventHandlers);
    return _extends({}, externalProps, {
      ref: handleRef
    }, mergedEventHandlers);
  };
  const createHandleMouseOver = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null || _otherHandlers$onMous2.call(otherHandlers, event);
    const index2 = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index2);
  };
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;
    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null || _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers(externalProps);
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(externalHandlers || {}),
      onMouseLeave: createHandleMouseLeave(externalHandlers || {})
    };
    return _extends({}, externalProps, externalHandlers, ownEventHandlers);
  };
  const getThumbStyle = (index2) => {
    return {
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: active !== -1 && active !== index2 ? "none" : void 0
    };
  };
  const getHiddenInputProps = (externalProps = {}) => {
    var _parameters$step;
    const externalHandlers = extractEventHandlers(externalProps);
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(externalHandlers || {}),
      onFocus: createHandleHiddenInputFocus(externalHandlers || {}),
      onBlur: createHandleHiddenInputBlur(externalHandlers || {})
    };
    const mergedEventHandlers = _extends({}, externalHandlers, ownEventHandlers);
    return _extends({
      tabIndex,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max3),
      "aria-valuemin": scale(min3),
      name,
      type: "range",
      min: parameters.min,
      max: parameters.max,
      step: parameters.step === null && parameters.marks ? "any" : (_parameters$step = parameters.step) != null ? _parameters$step : void 0,
      disabled
    }, externalProps, mergedEventHandlers, {
      style: _extends({}, visuallyHidden_default, {
        direction: isRtl ? "rtl" : "ltr",
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: "100%",
        height: "100%"
      })
    });
  };
  return {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks,
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values: values2,
    getThumbStyle
  };
}

// node_modules/@mui/base/Slider/Slider.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var _excluded14 = ["aria-label", "aria-valuetext", "aria-labelledby", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelFormat", "isRtl", "defaultValue", "slotProps", "slots"];
function Identity2(x) {
  return x;
}
var useUtilityClasses14 = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse"],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled"],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getSliderUtilityClass));
};
var Slider = React41.forwardRef(function Slider2(props, forwardedRef) {
  var _slots$root, _slots$rail, _slots$track, _slots$thumb, _slots$mark, _slots$markLabel;
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    "aria-labelledby": ariaLabelledby,
    className,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max: max3 = 100,
    min: min3 = 0,
    orientation = "horizontal",
    scale = Identity2,
    step = 1,
    track = "normal",
    valueLabelFormat = Identity2,
    isRtl = false,
    defaultValue,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const partialOwnerState = _extends({}, props, {
    marks: marksProp,
    disabled,
    disableSwap,
    isRtl,
    defaultValue,
    max: max3,
    min: min3,
    orientation,
    scale,
    step,
    track,
    valueLabelFormat
  });
  const {
    axisProps: axisProps2,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    active,
    axis,
    range,
    focusedThumbIndex,
    dragging,
    marks,
    values: values2,
    trackOffset,
    trackLeap,
    getThumbStyle
  } = useSlider(_extends({}, partialOwnerState, {
    rootRef: forwardedRef
  }));
  const ownerState = _extends({}, partialOwnerState, {
    marked: marks.length > 0 && marks.some((mark) => mark.label),
    dragging,
    focusedThumbIndex,
    activeThumbIndex: active
  });
  const classes = useUtilityClasses14(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: [classes.root, className]
  });
  const Rail = (_slots$rail = slots.rail) != null ? _slots$rail : "span";
  const railProps = useSlotProps({
    elementType: Rail,
    externalSlotProps: slotProps.rail,
    ownerState,
    className: classes.rail
  });
  const Track = (_slots$track = slots.track) != null ? _slots$track : "span";
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: slotProps.track,
    additionalProps: {
      style: _extends({}, axisProps2[axis].offset(trackOffset), axisProps2[axis].leap(trackLeap))
    },
    ownerState,
    className: classes.track
  });
  const Thumb = (_slots$thumb = slots.thumb) != null ? _slots$thumb : "span";
  const thumbProps = useSlotProps({
    elementType: Thumb,
    getSlotProps: getThumbProps,
    externalSlotProps: slotProps.thumb,
    ownerState,
    skipResolvingSlotProps: true
  });
  const ValueLabel = slots.valueLabel;
  const valueLabelProps = useSlotProps({
    elementType: ValueLabel,
    externalSlotProps: slotProps.valueLabel,
    ownerState
  });
  const Mark = (_slots$mark = slots.mark) != null ? _slots$mark : "span";
  const markProps = useSlotProps({
    elementType: Mark,
    externalSlotProps: slotProps.mark,
    ownerState,
    className: classes.mark
  });
  const MarkLabel = (_slots$markLabel = slots.markLabel) != null ? _slots$markLabel : "span";
  const markLabelProps = useSlotProps({
    elementType: MarkLabel,
    externalSlotProps: slotProps.markLabel,
    ownerState
  });
  const Input5 = slots.input || "input";
  const inputProps = useSlotProps({
    elementType: Input5,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: slotProps.input,
    ownerState
  });
  return (0, import_jsx_runtime29.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime28.jsx)(Rail, _extends({}, railProps)), (0, import_jsx_runtime28.jsx)(Track, _extends({}, trackProps)), marks.filter((mark) => mark.value >= min3 && mark.value <= max3).map((mark, index2) => {
      const percent = valueToPercent(mark.value, min3, max3);
      const style = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values2.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values2[0] && mark.value <= values2[values2.length - 1] : mark.value <= values2[0]) || track === "inverted" && (range ? mark.value <= values2[0] || mark.value >= values2[values2.length - 1] : mark.value >= values2[0]);
      }
      return (0, import_jsx_runtime29.jsxs)(React41.Fragment, {
        children: [(0, import_jsx_runtime28.jsx)(Mark, _extends({
          "data-index": index2
        }, markProps, !isHostComponent(Mark) && {
          markActive
        }, {
          style: _extends({}, style, markProps.style),
          className: clsx_default(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? (0, import_jsx_runtime28.jsx)(MarkLabel, _extends({
          "aria-hidden": true,
          "data-index": index2
        }, markLabelProps, !isHostComponent(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: _extends({}, style, markLabelProps.style),
          className: clsx_default(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, index2);
    }), values2.map((value, index2) => {
      const percent = valueToPercent(value, min3, max3);
      const style = axisProps2[axis].offset(percent);
      const resolvedSlotProps = resolveComponentProps(slotProps.thumb, ownerState, {
        index: index2,
        focused: focusedThumbIndex === index2,
        active: active === index2
      });
      return (0, import_jsx_runtime29.jsxs)(Thumb, _extends({
        "data-index": index2
      }, thumbProps, resolvedSlotProps, {
        className: clsx_default(classes.thumb, thumbProps.className, resolvedSlotProps == null ? void 0 : resolvedSlotProps.className, active === index2 && classes.active, focusedThumbIndex === index2 && classes.focusVisible),
        style: _extends({}, style, getThumbStyle(index2), thumbProps.style, resolvedSlotProps == null ? void 0 : resolvedSlotProps.style),
        children: [(0, import_jsx_runtime28.jsx)(Input5, _extends({
          "data-index": index2,
          "aria-label": getAriaLabel ? getAriaLabel(index2) : ariaLabel,
          "aria-valuenow": scale(value),
          "aria-labelledby": ariaLabelledby,
          "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index2) : ariaValuetext,
          value: values2[index2]
        }, inputProps)), ValueLabel ? (0, import_jsx_runtime28.jsx)(ValueLabel, _extends({}, !isHostComponent(ValueLabel) && {
          valueLabelFormat,
          index: index2,
          disabled
        }, valueLabelProps, {
          children: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index2) : valueLabelFormat
        })) : null]
      }), index2);
    })]
  }));
});
true ? Slider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The label of the slider.
   */
  "aria-label": chainPropTypes(import_prop_types19.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": import_prop_types19.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": chainPropTypes(import_prop_types19.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.number), import_prop_types19.default.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types19.default.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: import_prop_types19.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types19.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types19.default.func,
  /**
   * If `true` the Slider will be rendered right-to-left (with the lowest value on the right-hand side).
   * @default false
   */
  isRtl: import_prop_types19.default.bool,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.shape({
    label: import_prop_types19.default.node,
    value: import_prop_types19.default.number.isRequired
  })), import_prop_types19.default.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: import_prop_types19.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: import_prop_types19.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types19.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: import_prop_types19.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: import_prop_types19.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types19.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: import_prop_types19.default.func,
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  slotProps: import_prop_types19.default.shape({
    input: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    mark: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    markLabel: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    rail: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    root: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    thumb: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    track: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    valueLabel: import_prop_types19.default.oneOfType([import_prop_types19.default.any, import_prop_types19.default.func])
  }),
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types19.default.shape({
    input: import_prop_types19.default.elementType,
    mark: import_prop_types19.default.elementType,
    markLabel: import_prop_types19.default.elementType,
    rail: import_prop_types19.default.elementType,
    root: import_prop_types19.default.elementType,
    thumb: import_prop_types19.default.elementType,
    track: import_prop_types19.default.elementType,
    valueLabel: import_prop_types19.default.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: import_prop_types19.default.number,
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: import_prop_types19.default.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: import_prop_types19.default.oneOf(["inverted", "normal", false]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.number), import_prop_types19.default.number]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  valueLabelFormat: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.string])
} : void 0;

// node_modules/@mui/base/Snackbar/Snackbar.js
var React43 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());

// node_modules/@mui/base/Snackbar/snackbarClasses.js
function getSnackbarUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbar", slot);
}
var snackbarClasses = generateUtilityClasses("MuiSnackbar", ["root"]);

// node_modules/@mui/base/useSnackbar/useSnackbar.js
var React42 = __toESM(require_react());
function useSnackbar(parameters = {}) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = React42.useRef();
  React42.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
          onClose == null || onClose(nativeEvent, "escapeKeyDown");
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);
  const handleClose = useEventCallback_default((event, reason) => {
    onClose == null || onClose(event, reason);
  });
  const setAutoHideTimer = useEventCallback_default((autoHideDurationParam) => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(() => {
      handleClose(null, "timeout");
    }, autoHideDurationParam);
  });
  React42.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  const handleClickAway = (event) => {
    onClose == null || onClose(event, "clickaway");
  };
  const handlePause = () => {
    clearTimeout(timerAutoHide.current);
  };
  const handleResume = React42.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = (otherHandlers) => (event) => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback == null || onBlurCallback(event);
    handleResume();
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback == null || onFocusCallback(event);
    handlePause();
  };
  const createMouseEnter = (otherHandlers) => (event) => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback == null || onMouseEnterCallback(event);
    handlePause();
  };
  const createMouseLeave = (otherHandlers) => (event) => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback == null || onMouseLeaveCallback(event);
    handleResume();
  };
  React42.useEffect(() => {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, handleResume, open]);
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = _extends({}, extractEventHandlers(parameters), extractEventHandlers(externalProps));
    return _extends({
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: "presentation"
    }, externalProps, externalEventHandlers, {
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    });
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}

// node_modules/@mui/base/Snackbar/Snackbar.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var _excluded15 = ["autoHideDuration", "children", "disableWindowBlurListener", "exited", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "slotProps", "slots"];
var useUtilityClasses15 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, useClassNamesOverride(getSnackbarUtilityClass));
};
var Snackbar = React43.forwardRef(function Snackbar2(props, forwardedRef) {
  const {
    autoHideDuration = null,
    children: children2,
    disableWindowBlurListener = false,
    exited = true,
    onClose,
    open,
    resumeHideDuration,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const classes = useUtilityClasses15();
  const {
    getRootProps,
    onClickAway
  } = useSnackbar(_extends({}, props, {
    autoHideDuration,
    disableWindowBlurListener,
    onClose,
    open,
    resumeHideDuration
  }));
  const ownerState = props;
  const Root = slots.root || "div";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const clickAwayListenerProps = useSlotProps({
    elementType: ClickAwayListener,
    externalSlotProps: slotProps.clickAwayListener,
    additionalProps: {
      onClickAway
    },
    ownerState
  });
  delete clickAwayListenerProps.ownerState;
  if (!open && exited) {
    return null;
  }
  return (0, import_jsx_runtime30.jsx)(ClickAwayListener, _extends({}, clickAwayListenerProps, {
    children: (0, import_jsx_runtime30.jsx)(Root, _extends({}, rootProps, {
      children: children2
    }))
  }));
});
true ? Snackbar.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: import_prop_types20.default.number,
  /**
   * @ignore
   */
  children: import_prop_types20.default.node,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: import_prop_types20.default.bool,
  /**
   * The prop used to handle exited transition and unmount the component.
   * @default true
   */
  exited: import_prop_types20.default.bool,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: import_prop_types20.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types20.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: import_prop_types20.default.number,
  /**
   * The props used for each slot inside the Snackbar.
   * @default {}
   */
  slotProps: import_prop_types20.default.shape({
    clickAwayListener: import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.shape({
      children: import_prop_types20.default.element.isRequired,
      disableReactTree: import_prop_types20.default.bool,
      mouseEvent: import_prop_types20.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
      onClickAway: import_prop_types20.default.func,
      touchEvent: import_prop_types20.default.oneOf(["onTouchEnd", "onTouchStart", false])
    })]),
    root: import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object])
  }),
  /**
   * The components used for each slot inside the Snackbar.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types20.default.shape({
    root: import_prop_types20.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Switch/Switch.js
var React45 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());

// node_modules/@mui/base/useSwitch/useSwitch.js
var React44 = __toESM(require_react());
function useSwitch(props) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "Switch",
    state: "checked"
  });
  const createHandleInputChange = (otherProps) => (event) => {
    var _otherProps$onChange;
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    setCheckedState(event.target.checked);
    onChange == null || onChange(event);
    (_otherProps$onChange = otherProps.onChange) == null || _otherProps$onChange.call(otherProps, event);
  };
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React44.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React44.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const inputRef = React44.useRef(null);
  const createHandleFocus = (otherProps) => (event) => {
    var _otherProps$onFocus;
    if (!inputRef.current) {
      inputRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      onFocusVisible == null || onFocusVisible(event);
    }
    onFocus == null || onFocus(event);
    (_otherProps$onFocus = otherProps.onFocus) == null || _otherProps$onFocus.call(otherProps, event);
  };
  const createHandleBlur = (otherProps) => (event) => {
    var _otherProps$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    onBlur == null || onBlur(event);
    (_otherProps$onBlur = otherProps.onBlur) == null || _otherProps$onBlur.call(otherProps, event);
  };
  const handleInputRef = useForkRef(focusVisibleRef, inputRef);
  const getInputProps = (otherProps = {}) => _extends({
    checked: checkedProp,
    defaultChecked,
    disabled,
    readOnly,
    ref: handleInputRef,
    required,
    type: "checkbox"
  }, otherProps, {
    onChange: createHandleInputChange(otherProps),
    onFocus: createHandleFocus(otherProps),
    onBlur: createHandleBlur(otherProps)
  });
  return {
    checked,
    disabled: Boolean(disabled),
    focusVisible,
    getInputProps,
    inputRef: handleInputRef,
    readOnly: Boolean(readOnly)
  };
}

// node_modules/@mui/base/Switch/switchClasses.js
function getSwitchUtilityClass(slot) {
  return generateUtilityClass("MuiSwitch", slot);
}
var switchClasses = generateUtilityClasses("MuiSwitch", ["root", "input", "track", "thumb", "checked", "disabled", "focusVisible", "readOnly"]);

// node_modules/@mui/base/Switch/Switch.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var _excluded16 = ["checked", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "slotProps", "slots"];
var useUtilityClasses16 = (ownerState) => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", readOnly && "readOnly"],
    thumb: ["thumb"],
    input: ["input"],
    track: ["track"]
  };
  return composeClasses(slots, useClassNamesOverride(getSwitchUtilityClass));
};
var Switch = React45.forwardRef(function Switch2(props, forwardedRef) {
  var _slots$root, _slots$thumb, _slots$input, _slots$track;
  const {
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = useSwitch(props);
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly
  });
  const classes = useUtilityClasses16(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Thumb = (_slots$thumb = slots.thumb) != null ? _slots$thumb : "span";
  const thumbProps = useSlotProps({
    elementType: Thumb,
    externalSlotProps: slotProps.thumb,
    ownerState,
    className: classes.thumb
  });
  const Input5 = (_slots$input = slots.input) != null ? _slots$input : "input";
  const inputProps = useSlotProps({
    elementType: Input5,
    getSlotProps: getInputProps,
    externalSlotProps: slotProps.input,
    ownerState,
    className: classes.input
  });
  const Track = slots.track === null ? () => null : (_slots$track = slots.track) != null ? _slots$track : "span";
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: slotProps.track,
    ownerState,
    className: classes.track
  });
  return (0, import_jsx_runtime32.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime31.jsx)(Track, _extends({}, trackProps)), (0, import_jsx_runtime31.jsx)(Thumb, _extends({}, thumbProps)), (0, import_jsx_runtime31.jsx)(Input5, _extends({}, inputProps))]
  }));
});
true ? Switch.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types21.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types21.default.string,
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types21.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types21.default.bool,
  /**
   * @ignore
   */
  onBlur: import_prop_types21.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types21.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types21.default.func,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types21.default.func,
  /**
   * If `true`, the component is read only.
   */
  readOnly: import_prop_types21.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types21.default.bool,
  /**
   * The props used for each slot inside the Switch.
   * @default {}
   */
  slotProps: import_prop_types21.default.shape({
    input: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    root: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    thumb: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    track: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object])
  }),
  /**
   * The components used for each slot inside the Switch.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types21.default.shape({
    input: import_prop_types21.default.elementType,
    root: import_prop_types21.default.elementType,
    thumb: import_prop_types21.default.elementType,
    track: import_prop_types21.default.oneOfType([import_prop_types21.default.elementType, import_prop_types21.default.oneOf([null])])
  })
} : void 0;

// node_modules/@mui/base/TablePagination/TablePagination.js
var React47 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());

// node_modules/@mui/base/TablePagination/TablePaginationActions.js
var React46 = __toESM(require_react());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var _excluded17 = ["count", "getItemAriaLabel", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "direction", "ownerState", "slotProps", "slots"];
var _span2;
var _span22;
var _span3;
var _span4;
function LastPageIconDefault() {
  return _span2 || (_span2 = (0, import_jsx_runtime33.jsx)("span", {
    children: "⇾|"
  }));
}
function FirstPageIconDefault() {
  return _span22 || (_span22 = (0, import_jsx_runtime33.jsx)("span", {
    children: "|⇽"
  }));
}
function NextPageIconDefault() {
  return _span3 || (_span3 = (0, import_jsx_runtime33.jsx)("span", {
    children: "⇾"
  }));
}
function BackPageIconDefault() {
  return _span4 || (_span4 = (0, import_jsx_runtime33.jsx)("span", {
    children: "⇽"
  }));
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
var TablePaginationActions = React46.forwardRef(function TablePaginationActions2(props, forwardedRef) {
  var _slots$root, _slots$firstButton, _slots$lastButton, _slots$nextButton, _slots$backButton, _slots$lastPageIcon, _slots$firstPageIcon, _slots$nextPageIcon, _slots$backPageIcon;
  const {
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton = false,
    showLastButton = false,
    direction,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const ownerState = props;
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState
  });
  const FirstButton = (_slots$firstButton = slots.firstButton) != null ? _slots$firstButton : "button";
  const firstButtonProps = useSlotProps({
    elementType: FirstButton,
    externalSlotProps: slotProps.firstButton,
    additionalProps: {
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel("first", page),
      title: getItemAriaLabel("first", page)
    },
    ownerState
  });
  const LastButton = (_slots$lastButton = slots.lastButton) != null ? _slots$lastButton : "button";
  const lastButtonProps = useSlotProps({
    elementType: LastButton,
    externalSlotProps: slotProps.lastButton,
    additionalProps: {
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel("last", page),
      title: getItemAriaLabel("last", page)
    },
    ownerState
  });
  const NextButton = (_slots$nextButton = slots.nextButton) != null ? _slots$nextButton : "button";
  const nextButtonProps = useSlotProps({
    elementType: NextButton,
    externalSlotProps: slotProps.nextButton,
    additionalProps: {
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      "aria-label": getItemAriaLabel("next", page),
      title: getItemAriaLabel("next", page)
    },
    ownerState
  });
  const BackButton = (_slots$backButton = slots.backButton) != null ? _slots$backButton : "button";
  const backButtonProps = useSlotProps({
    elementType: BackButton,
    externalSlotProps: slotProps.backButton,
    additionalProps: {
      onClick: handleBackButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel("previous", page),
      title: getItemAriaLabel("previous", page)
    },
    ownerState
  });
  const LastPageIcon = (_slots$lastPageIcon = slots.lastPageIcon) != null ? _slots$lastPageIcon : LastPageIconDefault;
  const FirstPageIcon = (_slots$firstPageIcon = slots.firstPageIcon) != null ? _slots$firstPageIcon : FirstPageIconDefault;
  const NextPageIcon = (_slots$nextPageIcon = slots.nextPageIcon) != null ? _slots$nextPageIcon : NextPageIconDefault;
  const BackPageIcon = (_slots$backPageIcon = slots.backPageIcon) != null ? _slots$backPageIcon : BackPageIconDefault;
  return (0, import_jsx_runtime34.jsxs)(Root, _extends({}, rootProps, {
    children: [showFirstButton && (0, import_jsx_runtime33.jsx)(FirstButton, _extends({}, firstButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime33.jsx)(LastPageIcon, {}) : (0, import_jsx_runtime33.jsx)(FirstPageIcon, {})
    })), (0, import_jsx_runtime33.jsx)(BackButton, _extends({}, backButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime33.jsx)(NextPageIcon, {}) : (0, import_jsx_runtime33.jsx)(BackPageIcon, {})
    })), (0, import_jsx_runtime33.jsx)(NextButton, _extends({}, nextButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime33.jsx)(BackPageIcon, {}) : (0, import_jsx_runtime33.jsx)(NextPageIcon, {})
    })), showLastButton && (0, import_jsx_runtime33.jsx)(LastButton, _extends({}, lastButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime33.jsx)(FirstPageIcon, {}) : (0, import_jsx_runtime33.jsx)(LastPageIcon, {})
    }))]
  }));
});

// node_modules/@mui/base/TablePagination/tablePaginationClasses.js
function getTablePaginationUtilityClass(slot) {
  return generateUtilityClass("MuiTablePagination", slot);
}
var tablePaginationClasses = generateUtilityClasses("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);

// node_modules/@mui/base/TablePagination/TablePagination.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var _excluded18 = ["colSpan", "count", "getItemAriaLabel", "labelDisplayedRows", "labelId", "labelRowsPerPage", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "selectId", "slotProps", "slots"];
function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}
function defaultGetAriaLabel2(type) {
  return `Go to ${type} page`;
}
var useUtilityClasses17 = () => {
  const slots = {
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  };
  return composeClasses(slots, useClassNamesOverride(getTablePaginationUtilityClass));
};
var TablePagination = React47.forwardRef(function TablePagination2(props, forwardedRef) {
  var _slots$root, _slots$select, _slots$actions, _slots$menuItem, _slots$selectLabel, _slots$displayedRows, _slots$toolbar, _slots$spacer;
  const {
    colSpan: colSpanProp,
    count,
    getItemAriaLabel = defaultGetAriaLabel2,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelId: labelIdProp,
    labelRowsPerPage = "Rows per page:",
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    selectId: selectIdProp,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const ownerState = props;
  const classes = useUtilityClasses17();
  let colSpan;
  const Root = (_slots$root = slots.root) != null ? _slots$root : "td";
  if (Root === "td" || !isHostComponent(Root)) {
    colSpan = colSpanProp || 1e3;
  }
  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };
  const selectId = useId(selectIdProp);
  const labelId = useId(labelIdProp);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      colSpan,
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Select5 = (_slots$select = slots.select) != null ? _slots$select : "select";
  const selectProps = useSlotProps({
    elementType: Select5,
    externalSlotProps: slotProps.select,
    additionalProps: {
      value: rowsPerPage,
      id: selectId,
      onChange: (event) => onRowsPerPageChange && onRowsPerPageChange(event),
      "aria-label": rowsPerPage.toString(),
      "aria-labelledby": [labelId, selectId].filter(Boolean).join(" ") || void 0
    },
    ownerState,
    className: classes.select
  });
  const Actions = (_slots$actions = slots.actions) != null ? _slots$actions : TablePaginationActions;
  const actionsProps = useSlotProps({
    elementType: Actions,
    externalSlotProps: slotProps.actions,
    additionalProps: {
      page,
      rowsPerPage,
      count,
      onPageChange,
      getItemAriaLabel
    },
    ownerState,
    className: classes.actions
  });
  const MenuItem4 = (_slots$menuItem = slots.menuItem) != null ? _slots$menuItem : "option";
  const menuItemProps = useSlotProps({
    elementType: MenuItem4,
    externalSlotProps: slotProps.menuItem,
    additionalProps: {
      value: void 0
    },
    ownerState,
    className: classes.menuItem
  });
  const SelectLabel = (_slots$selectLabel = slots.selectLabel) != null ? _slots$selectLabel : "p";
  const selectLabelProps = useSlotProps({
    elementType: SelectLabel,
    externalSlotProps: slotProps.selectLabel,
    additionalProps: {
      id: labelId
    },
    ownerState,
    className: classes.selectLabel
  });
  const DisplayedRows = (_slots$displayedRows = slots.displayedRows) != null ? _slots$displayedRows : "p";
  const displayedRowsProps = useSlotProps({
    elementType: DisplayedRows,
    externalSlotProps: slotProps.displayedRows,
    ownerState,
    className: classes.displayedRows
  });
  const Toolbar = (_slots$toolbar = slots.toolbar) != null ? _slots$toolbar : "div";
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps.toolbar,
    ownerState,
    className: classes.toolbar
  });
  const Spacer = (_slots$spacer = slots.spacer) != null ? _slots$spacer : "div";
  const spacerProps = useSlotProps({
    elementType: Spacer,
    externalSlotProps: slotProps.spacer,
    ownerState,
    className: classes.spacer
  });
  return (0, import_jsx_runtime35.jsx)(Root, _extends({}, rootProps, {
    children: (0, import_jsx_runtime36.jsxs)(Toolbar, _extends({}, toolbarProps, {
      children: [(0, import_jsx_runtime35.jsx)(Spacer, _extends({}, spacerProps)), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime35.jsx)(SelectLabel, _extends({}, selectLabelProps, {
        children: labelRowsPerPage
      })), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime35.jsx)(Select5, _extends({}, selectProps, {
        children: rowsPerPageOptions.map((rowsPerPageOption) => (0, import_react2.createElement)(MenuItem4, _extends({}, menuItemProps, {
          key: typeof rowsPerPageOption !== "number" && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: typeof rowsPerPageOption !== "number" && rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }), typeof rowsPerPageOption !== "number" && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      })), (0, import_jsx_runtime35.jsx)(DisplayedRows, _extends({}, displayedRowsProps, {
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      })), (0, import_jsx_runtime35.jsx)(Actions, _extends({}, actionsProps))]
    }))
  }));
});
true ? TablePagination.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  colSpan: import_prop_types22.default.number,
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: import_prop_types22.default.number.isRequired,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type: ItemAriaLabelType) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: import_prop_types22.default.func,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }: LabelDisplayedRowsArgs) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: import_prop_types22.default.func,
  /**
   * Id of the label element within the pagination.
   */
  labelId: import_prop_types22.default.string,
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: import_prop_types22.default.node,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: import_prop_types22.default.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: import_prop_types22.default.func,
  /**
   * The zero-based index of the current page.
   */
  page: chainPropTypes(integerPropType_default.isRequired, (props) => {
    const {
      count,
      page,
      rowsPerPage
    } = props;
    if (count === -1) {
      return null;
    }
    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
    if (page < 0 || page > newLastPage) {
      return new Error(`MUI: The page prop of a TablePagination is out of range (0 to ${newLastPage}, but page is ${page}).`);
    }
    return null;
  }),
  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: integerPropType_default.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: import_prop_types22.default.arrayOf(import_prop_types22.default.oneOfType([import_prop_types22.default.number, import_prop_types22.default.shape({
    label: import_prop_types22.default.string.isRequired,
    value: import_prop_types22.default.number.isRequired
  })]).isRequired),
  /**
   * Id of the select element within the pagination.
   */
  selectId: import_prop_types22.default.string,
  /**
   * The props used for each slot inside the TablePagination.
   * @default {}
   */
  slotProps: import_prop_types22.default.shape({
    actions: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    displayedRows: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    menuItem: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    root: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    select: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    selectLabel: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    spacer: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    toolbar: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object])
  }),
  /**
   * The components used for each slot inside the TablePagination.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types22.default.shape({
    actions: import_prop_types22.default.elementType,
    displayedRows: import_prop_types22.default.elementType,
    menuItem: import_prop_types22.default.elementType,
    root: import_prop_types22.default.elementType,
    select: import_prop_types22.default.elementType,
    selectLabel: import_prop_types22.default.elementType,
    spacer: import_prop_types22.default.elementType,
    toolbar: import_prop_types22.default.elementType
  })
} : void 0;

// node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js
var React48 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
var ReactDOM3 = __toESM(require_react_dom());
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var _excluded19 = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
var styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
}
var TextareaAutosize = React48.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
  const {
    current: isControlled
  } = React48.useRef(value != null);
  const inputRef = React48.useRef(null);
  const handleRef = useForkRef(forwardedRef, inputRef);
  const shadowRef = React48.useRef(null);
  const renders = React48.useRef(0);
  const [state, setState] = React48.useState({
    outerHeightStyle: 0
  });
  const getUpdatedState = React48.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflow
    };
  }, [maxRows, minRows, props.placeholder]);
  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow
    } = newState;
    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
      renders.current += 1;
      return {
        overflow,
        outerHeightStyle
      };
    }
    if (true) {
      if (renders.current === 20) {
        console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join("\n"));
      }
    }
    return prevState;
  };
  const syncHeight = React48.useCallback(() => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }
    setState((prevState) => updateState(prevState, newState));
  }, [getUpdatedState]);
  useEnhancedEffect_default(() => {
    const syncHeightWithFlushSync = () => {
      const newState = getUpdatedState();
      if (isEmpty(newState)) {
        return;
      }
      ReactDOM3.flushSync(() => {
        setState((prevState) => updateState(prevState, newState));
      });
    };
    const handleResize = () => {
      renders.current = 0;
      syncHeightWithFlushSync();
    };
    let rAF;
    const rAFHandleResize = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        handleResize();
      });
    };
    const debounceHandleResize = debounce(handleResize);
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    containerWindow.addEventListener("resize", debounceHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(false ? rAFHandleResize : handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      debounceHandleResize.clear();
      cancelAnimationFrame(rAF);
      containerWindow.removeEventListener("resize", debounceHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [getUpdatedState]);
  useEnhancedEffect_default(() => {
    syncHeight();
  });
  React48.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = (event) => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return (0, import_jsx_runtime38.jsxs)(React48.Fragment, {
    children: [(0, import_jsx_runtime37.jsx)("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? "hidden" : void 0
      }, style)
    }, other)), (0, import_jsx_runtime37.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles.shadow, style, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
true ? TextareaAutosize.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: import_prop_types23.default.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types23.default.oneOfType([import_prop_types23.default.number, import_prop_types23.default.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: import_prop_types23.default.oneOfType([import_prop_types23.default.number, import_prop_types23.default.string]),
  /**
   * @ignore
   */
  onChange: import_prop_types23.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types23.default.string,
  /**
   * @ignore
   */
  style: import_prop_types23.default.object,
  /**
   * @ignore
   */
  value: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.string), import_prop_types23.default.number, import_prop_types23.default.string])
} : void 0;

// node_modules/@mui/base/Transitions/CssAnimation.js
var React49 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var _excluded20 = ["children", "className", "enterAnimationName", "enterClassName", "exitAnimationName", "exitClassName"];
function CssAnimation(props) {
  const {
    children: children2,
    className,
    enterAnimationName,
    enterClassName,
    exitAnimationName,
    exitClassName
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const {
    requestedEnter,
    onEntering,
    onEntered,
    onExiting,
    onExited
  } = useTransitionStateManager();
  const hasExited = React49.useRef(true);
  React49.useEffect(() => {
    if (requestedEnter && hasExited.current) {
      onEntering();
      hasExited.current = false;
    } else if (!requestedEnter && !hasExited.current) {
      onExiting();
    }
  }, [onEntering, onExiting, requestedEnter]);
  const handleAnimationEnd = React49.useCallback((event) => {
    if (event.animationName === exitAnimationName) {
      onExited();
      hasExited.current = true;
    } else if (event.animationName === enterAnimationName) {
      onEntered();
      hasExited.current = false;
    }
  }, [onExited, onEntered, exitAnimationName, enterAnimationName]);
  return (0, import_jsx_runtime39.jsx)("div", _extends({
    onAnimationEnd: handleAnimationEnd,
    className: clsx_default(className, requestedEnter ? enterClassName : exitClassName)
  }, other, {
    children: children2
  }));
}
true ? CssAnimation.propTypes = {
  children: import_prop_types24.default.node,
  className: import_prop_types24.default.string,
  enterAnimationName: import_prop_types24.default.string,
  enterClassName: import_prop_types24.default.string,
  exitAnimationName: import_prop_types24.default.string,
  exitClassName: import_prop_types24.default.string
} : void 0;

// node_modules/@mui/base/Transitions/CssTransition.js
var React50 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var _excluded21 = ["children", "className", "lastTransitionedPropertyOnEnter", "lastTransitionedPropertyOnExit", "enterClassName", "exitClassName"];
function CssTransition(props) {
  const {
    children: children2,
    className,
    lastTransitionedPropertyOnEnter,
    lastTransitionedPropertyOnExit,
    enterClassName,
    exitClassName
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const {
    requestedEnter,
    onEntering,
    onEntered,
    onExiting,
    onExited
  } = useTransitionStateManager();
  const [isEntering, setIsEntering] = React50.useState(!requestedEnter);
  React50.useEffect(() => {
    if (requestedEnter) {
      requestAnimationFrame(() => {
        setIsEntering(true);
      });
    } else {
      requestAnimationFrame(() => {
        setIsEntering(false);
      });
    }
  });
  React50.useEffect(() => {
    if (requestedEnter) {
      onEntering();
    } else {
      onExiting();
    }
  }, [requestedEnter, onEntering, onExiting]);
  const handleTransitionEnd = React50.useCallback((event) => {
    if (requestedEnter) {
      if (lastTransitionedPropertyOnEnter == null || event.propertyName === lastTransitionedPropertyOnEnter) {
        onEntered();
      }
    } else if (lastTransitionedPropertyOnExit == null || event.propertyName === lastTransitionedPropertyOnExit) {
      onExited();
    }
  }, [onExited, onEntered, requestedEnter, lastTransitionedPropertyOnEnter, lastTransitionedPropertyOnExit]);
  return (0, import_jsx_runtime40.jsx)("div", _extends({
    onTransitionEnd: handleTransitionEnd,
    className: clsx_default(className, isEntering ? enterClassName : exitClassName)
  }, other, {
    children: children2
  }));
}
true ? CssTransition.propTypes = {
  children: import_prop_types25.default.node,
  className: import_prop_types25.default.string,
  enterClassName: import_prop_types25.default.string,
  exitClassName: import_prop_types25.default.string,
  lastTransitionedPropertyOnEnter: import_prop_types25.default.string,
  lastTransitionedPropertyOnExit: import_prop_types25.default.string
} : void 0;

// node_modules/@mui/base/useAutocomplete/useAutocomplete.js
var React51 = __toESM(require_react());
function stripDiacritics(string) {
  return typeof string.normalize !== "undefined" ? string.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : string;
}
function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = "any",
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;
    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }
    const filteredOptions = !input ? options : options.filter((option) => {
      let candidate = (stringify || getOptionLabel)(option);
      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === "start" ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}
function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }
  return -1;
}
var defaultFilterOptions = createFilterOptions();
var pageSize = 5;
var defaultIsActiveElementInListbox = (listboxRef) => {
  var _listboxRef$current$p;
  return listboxRef.current !== null && ((_listboxRef$current$p = listboxRef.current.parentElement) == null ? void 0 : _listboxRef$current$p.contains(document.activeElement));
};
function useAutocomplete(props) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox = defaultIsActiveElementInListbox,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix = "Mui",
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    componentName = "useAutocomplete",
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled: disabledProp,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionKey,
    getOptionLabel: getOptionLabelProp = (option) => {
      var _option$label;
      return (_option$label = option.label) != null ? _option$label : option;
    },
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    isOptionEqualToValue = (option, value2) => option === value2,
    multiple = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    readOnly = false,
    selectOnFocus = !props.freeSolo,
    value: valueProp
  } = props;
  const id = useId(idProp);
  let getOptionLabel = getOptionLabelProp;
  getOptionLabel = (option) => {
    const optionLabel = getOptionLabelProp(option);
    if (typeof optionLabel !== "string") {
      if (true) {
        const erroneousReturn = optionLabel === void 0 ? "undefined" : `${typeof optionLabel} (${optionLabel})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${componentName} returned ${erroneousReturn} instead of a string for ${JSON.stringify(option)}.`);
      }
      return String(optionLabel);
    }
    return optionLabel;
  };
  const ignoreFocus = React51.useRef(false);
  const firstFocus = React51.useRef(true);
  const inputRef = React51.useRef(null);
  const listboxRef = React51.useRef(null);
  const [anchorEl, setAnchorEl] = React51.useState(null);
  const [focusedTag, setFocusedTag] = React51.useState(-1);
  const defaultHighlighted = autoHighlight ? 0 : -1;
  const highlightedIndexRef = React51.useRef(defaultHighlighted);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  });
  const [inputValue, setInputValueState] = useControlled({
    controlled: inputValueProp,
    default: "",
    name: componentName,
    state: "inputValue"
  });
  const [focused, setFocused] = React51.useState(false);
  const resetInputValue = React51.useCallback((event, newValue) => {
    const isOptionSelected = multiple ? value.length < newValue.length : newValue !== null;
    if (!isOptionSelected && !clearOnBlur) {
      return;
    }
    let newInputValue;
    if (multiple) {
      newInputValue = "";
    } else if (newValue == null) {
      newInputValue = "";
    } else {
      const optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === "string" ? optionLabel : "";
    }
    if (inputValue === newInputValue) {
      return;
    }
    setInputValueState(newInputValue);
    if (onInputChange) {
      onInputChange(event, newInputValue, "reset");
    }
  }, [getOptionLabel, inputValue, multiple, onInputChange, setInputValueState, clearOnBlur, value]);
  const [open, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: componentName,
    state: "open"
  });
  const [inputPristine, setInputPristine] = React51.useState(true);
  const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  const popupOpen = open && !readOnly;
  const filteredOptions = popupOpen ? filterOptions(
    options.filter((option) => {
      if (filterSelectedOptions && (multiple ? value : [value]).some((value2) => value2 !== null && isOptionEqualToValue(option, value2))) {
        return false;
      }
      return true;
    }),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: inputValueIsSelectedValue && inputPristine ? "" : inputValue,
      getOptionLabel
    }
  ) : [];
  const previousProps = usePreviousProps_default({
    filteredOptions,
    value,
    inputValue
  });
  React51.useEffect(() => {
    const valueChange = value !== previousProps.value;
    if (focused && !valueChange) {
      return;
    }
    if (freeSolo && !valueChange) {
      return;
    }
    resetInputValue(null, value);
  }, [value, resetInputValue, focused, previousProps.value, freeSolo]);
  const listboxAvailable = open && filteredOptions.length > 0 && !readOnly;
  if (true) {
    if (value !== null && !freeSolo && options.length > 0) {
      const missingValue = (multiple ? value : [value]).filter((value2) => !options.some((option) => isOptionEqualToValue(option, value2)));
      if (missingValue.length > 0) {
        console.warn([`MUI: The value provided to ${componentName} is invalid.`, `None of the options match with \`${missingValue.length > 1 ? JSON.stringify(missingValue) : JSON.stringify(missingValue[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join("\n"));
      }
    }
  }
  const focusTag = useEventCallback_default((tagToFocus) => {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
    }
  });
  React51.useEffect(() => {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);
  function validOptionIndex(index2, direction) {
    if (!listboxRef.current || index2 < 0 || index2 >= filteredOptions.length) {
      return -1;
    }
    let nextFocus = index2;
    while (true) {
      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`);
      const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute("aria-disabled") === "true";
      if (option && option.hasAttribute("tabindex") && !nextFocusDisabled) {
        return nextFocus;
      }
      if (direction === "next") {
        nextFocus = (nextFocus + 1) % filteredOptions.length;
      } else {
        nextFocus = (nextFocus - 1 + filteredOptions.length) % filteredOptions.length;
      }
      if (nextFocus === index2) {
        return -1;
      }
    }
  }
  const setHighlightedIndex = useEventCallback_default(({
    event,
    index: index2,
    reason = "auto"
  }) => {
    highlightedIndexRef.current = index2;
    if (index2 === -1) {
      inputRef.current.removeAttribute("aria-activedescendant");
    } else {
      inputRef.current.setAttribute("aria-activedescendant", `${id}-option-${index2}`);
    }
    if (onHighlightChange) {
      onHighlightChange(event, index2 === -1 ? null : filteredOptions[index2], reason);
    }
    if (!listboxRef.current) {
      return;
    }
    const prev = listboxRef.current.querySelector(`[role="option"].${unstable_classNamePrefix}-focused`);
    if (prev) {
      prev.classList.remove(`${unstable_classNamePrefix}-focused`);
      prev.classList.remove(`${unstable_classNamePrefix}-focusVisible`);
    }
    let listboxNode = listboxRef.current;
    if (listboxRef.current.getAttribute("role") !== "listbox") {
      listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]');
    }
    if (!listboxNode) {
      return;
    }
    if (index2 === -1) {
      listboxNode.scrollTop = 0;
      return;
    }
    const option = listboxRef.current.querySelector(`[data-option-index="${index2}"]`);
    if (!option) {
      return;
    }
    option.classList.add(`${unstable_classNamePrefix}-focused`);
    if (reason === "keyboard") {
      option.classList.add(`${unstable_classNamePrefix}-focusVisible`);
    }
    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== "mouse" && reason !== "touch") {
      const element = option;
      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;
      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  const changeHighlightedIndex = useEventCallback_default(({
    event,
    diff,
    direction = "next",
    reason = "auto"
  }) => {
    if (!popupOpen) {
      return;
    }
    const getNextIndex = () => {
      const maxIndex = filteredOptions.length - 1;
      if (diff === "reset") {
        return defaultHighlighted;
      }
      if (diff === "start") {
        return 0;
      }
      if (diff === "end") {
        return maxIndex;
      }
      const newIndex = highlightedIndexRef.current + diff;
      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }
        return maxIndex;
      }
      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }
        return 0;
      }
      return newIndex;
    };
    const nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason,
      event
    });
    if (autoComplete && diff !== "reset") {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        const option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option;
        const index2 = option.toLowerCase().indexOf(inputValue.toLowerCase());
        if (index2 === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  const checkHighlightedOptionExists = () => {
    const isSameValue = (value1, value2) => {
      const label1 = value1 ? getOptionLabel(value1) : "";
      const label2 = value2 ? getOptionLabel(value2) : "";
      return label1 === label2;
    };
    if (highlightedIndexRef.current !== -1 && previousProps.filteredOptions && previousProps.filteredOptions.length !== filteredOptions.length && previousProps.inputValue === inputValue && (multiple ? value.length === previousProps.value.length && previousProps.value.every((val, i) => getOptionLabel(value[i]) === getOptionLabel(val)) : isSameValue(previousProps.value, value))) {
      const previousHighlightedOption = previousProps.filteredOptions[highlightedIndexRef.current];
      if (previousHighlightedOption) {
        const previousHighlightedOptionExists = filteredOptions.some((option) => {
          return getOptionLabel(option) === getOptionLabel(previousHighlightedOption);
        });
        if (previousHighlightedOptionExists) {
          return true;
        }
      }
    }
    return false;
  };
  const syncHighlightedIndex = React51.useCallback(() => {
    if (!popupOpen) {
      return;
    }
    if (checkHighlightedOptionExists()) {
      return;
    }
    const valueItem = multiple ? value[0] : value;
    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: "reset"
      });
      return;
    }
    if (!listboxRef.current) {
      return;
    }
    if (valueItem != null) {
      const currentOption = filteredOptions[highlightedIndexRef.current];
      if (multiple && currentOption && findIndex(value, (val) => isOptionEqualToValue(currentOption, val)) !== -1) {
        return;
      }
      const itemIndex = findIndex(filteredOptions, (optionItem) => isOptionEqualToValue(optionItem, valueItem));
      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: "reset"
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }
      return;
    }
    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    }
    setHighlightedIndex({
      index: highlightedIndexRef.current
    });
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    filteredOptions.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    multiple ? false : value,
    filterSelectedOptions,
    changeHighlightedIndex,
    setHighlightedIndex,
    popupOpen,
    inputValue,
    multiple
  ]);
  const handleListboxRef = useEventCallback_default((node) => {
    setRef(listboxRef, node);
    if (!node) {
      return;
    }
    syncHighlightedIndex();
  });
  if (true) {
    React51.useEffect(() => {
      if (!inputRef.current || inputRef.current.nodeName !== "INPUT") {
        if (inputRef.current && inputRef.current.nodeName === "TEXTAREA") {
          console.warn([`A textarea element was provided to ${componentName} where input was expected.`, `This is not a supported scenario but it may work under certain conditions.`, `A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).`, `Make sure to test keyboard navigation and add custom event handlers if necessary.`].join("\n"));
        } else {
          console.error([`MUI: Unable to find the input element. It was resolved to ${inputRef.current} while an HTMLInputElement was expected.`, `Instead, ${componentName} expects an input element.`, "", componentName === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join("\n"));
        }
      }
    }, [componentName]);
  }
  React51.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);
  const handleOpen = (event) => {
    if (open) {
      return;
    }
    setOpenState(true);
    setInputPristine(true);
    if (onOpen) {
      onOpen(event);
    }
  };
  const handleClose = (event, reason) => {
    if (!open) {
      return;
    }
    setOpenState(false);
    if (onClose) {
      onClose(event, reason);
    }
  };
  const handleValue = (event, newValue, reason, details) => {
    if (multiple) {
      if (value.length === newValue.length && value.every((val, i) => val === newValue[i])) {
        return;
      }
    } else if (value === newValue) {
      return;
    }
    if (onChange) {
      onChange(event, newValue, reason, details);
    }
    setValueState(newValue);
  };
  const isTouch = React51.useRef(false);
  const selectNewValue = (event, option, reasonProp = "selectOption", origin = "options") => {
    let reason = reasonProp;
    let newValue = option;
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      if (true) {
        const matches = newValue.filter((val) => isOptionEqualToValue(option, val));
        if (matches.length > 1) {
          console.error([`MUI: The \`isOptionEqualToValue\` method of ${componentName} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${matches.length} matches.`].join("\n"));
        }
      }
      const itemIndex = findIndex(newValue, (valueItem) => isOptionEqualToValue(option, valueItem));
      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== "freeSolo") {
        newValue.splice(itemIndex, 1);
        reason = "removeOption";
      }
    }
    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option
    });
    if (!disableCloseOnSelect && (!event || !event.ctrlKey && !event.metaKey)) {
      handleClose(event, reason);
    }
    if (blurOnSelect === true || blurOnSelect === "touch" && isTouch.current || blurOnSelect === "mouse" && !isTouch.current) {
      inputRef.current.blur();
    }
  };
  function validTagIndex(index2, direction) {
    if (index2 === -1) {
      return -1;
    }
    let nextFocus = index2;
    while (true) {
      if (direction === "next" && nextFocus === value.length || direction === "previous" && nextFocus === -1) {
        return -1;
      }
      const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`);
      if (!option || !option.hasAttribute("tabindex") || option.disabled || option.getAttribute("aria-disabled") === "true") {
        nextFocus += direction === "next" ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }
  const handleFocusTag = (event, direction) => {
    if (!multiple) {
      return;
    }
    if (inputValue === "") {
      handleClose(event, "toggleInput");
    }
    let nextTag = focusedTag;
    if (focusedTag === -1) {
      if (inputValue === "" && direction === "previous") {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === "next" ? 1 : -1;
      if (nextTag < 0) {
        nextTag = 0;
      }
      if (nextTag === value.length) {
        nextTag = -1;
      }
    }
    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };
  const handleClear = (event) => {
    ignoreFocus.current = true;
    setInputValueState("");
    if (onInputChange) {
      onInputChange(event, "", "clear");
    }
    handleValue(event, multiple ? [] : null, "clear");
  };
  const handleKeyDown = (other) => (event) => {
    if (other.onKeyDown) {
      other.onKeyDown(event);
    }
    if (event.defaultMuiPrevented) {
      return;
    }
    if (focusedTag !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(event.key) === -1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
    if (event.which !== 229) {
      switch (event.key) {
        case "Home":
          if (popupOpen && handleHomeEndKeys) {
            event.preventDefault();
            changeHighlightedIndex({
              diff: "start",
              direction: "next",
              reason: "keyboard",
              event
            });
          }
          break;
        case "End":
          if (popupOpen && handleHomeEndKeys) {
            event.preventDefault();
            changeHighlightedIndex({
              diff: "end",
              direction: "previous",
              reason: "keyboard",
              event
            });
          }
          break;
        case "PageUp":
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: "previous",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "PageDown":
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: "next",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowDown":
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowUp":
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowLeft":
          handleFocusTag(event, "previous");
          break;
        case "ArrowRight":
          handleFocusTag(event, "next");
          break;
        case "Enter":
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            const option = filteredOptions[highlightedIndexRef.current];
            const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
            event.preventDefault();
            if (disabled) {
              return;
            }
            selectNewValue(event, option, "selectOption");
            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== "" && inputValueIsSelectedValue === false) {
            if (multiple) {
              event.preventDefault();
            }
            selectNewValue(event, inputValue, "createOption", "freeSolo");
          }
          break;
        case "Escape":
          if (popupOpen) {
            event.preventDefault();
            event.stopPropagation();
            handleClose(event, "escape");
          } else if (clearOnEscape && (inputValue !== "" || multiple && value.length > 0)) {
            event.preventDefault();
            event.stopPropagation();
            handleClear(event);
          }
          break;
        case "Backspace":
          if (multiple && !readOnly && inputValue === "" && value.length > 0) {
            const index2 = focusedTag === -1 ? value.length - 1 : focusedTag;
            const newValue = value.slice();
            newValue.splice(index2, 1);
            handleValue(event, newValue, "removeOption", {
              option: value[index2]
            });
          }
          break;
        case "Delete":
          if (multiple && !readOnly && inputValue === "" && value.length > 0 && focusedTag !== -1) {
            const index2 = focusedTag;
            const newValue = value.slice();
            newValue.splice(index2, 1);
            handleValue(event, newValue, "removeOption", {
              option: value[index2]
            });
          }
          break;
        default:
      }
    }
  };
  const handleFocus = (event) => {
    setFocused(true);
    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };
  const handleBlur = (event) => {
    if (unstable_isActiveElementInListbox(listboxRef)) {
      inputRef.current.focus();
      return;
    }
    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;
    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], "blur");
    } else if (autoSelect && freeSolo && inputValue !== "") {
      selectNewValue(event, inputValue, "blur", "freeSolo");
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }
    handleClose(event, "blur");
  };
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (inputValue !== newValue) {
      setInputValueState(newValue);
      setInputPristine(false);
      if (onInputChange) {
        onInputChange(event, newValue, "input");
      }
    }
    if (newValue === "") {
      if (!disableClearable && !multiple) {
        handleValue(event, null, "clear");
      }
    } else {
      handleOpen(event);
    }
  };
  const handleOptionMouseMove = (event) => {
    const index2 = Number(event.currentTarget.getAttribute("data-option-index"));
    if (highlightedIndexRef.current !== index2) {
      setHighlightedIndex({
        event,
        index: index2,
        reason: "mouse"
      });
    }
  };
  const handleOptionTouchStart = (event) => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    });
    isTouch.current = true;
  };
  const handleOptionClick = (event) => {
    const index2 = Number(event.currentTarget.getAttribute("data-option-index"));
    selectNewValue(event, filteredOptions[index2], "selectOption");
    isTouch.current = false;
  };
  const handleTagDelete = (index2) => (event) => {
    const newValue = value.slice();
    newValue.splice(index2, 1);
    handleValue(event, newValue, "removeOption", {
      option: value[index2]
    });
  };
  const handlePopupIndicator = (event) => {
    if (open) {
      handleClose(event, "toggleInput");
    } else {
      handleOpen(event);
    }
  };
  const handleMouseDown = (event) => {
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    if (event.target.getAttribute("id") !== id) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    inputRef.current.focus();
    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }
    firstFocus.current = false;
  };
  const handleInputMouseDown = (event) => {
    if (!disabledProp && (inputValue === "" || !open)) {
      handlePopupIndicator(event);
    }
  };
  let dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  let groupedOptions = filteredOptions;
  if (groupBy) {
    const indexBy = /* @__PURE__ */ new Map();
    let warn = false;
    groupedOptions = filteredOptions.reduce((acc, option, index2) => {
      const group = groupBy(option);
      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (true) {
          if (indexBy.get(group) && !warn) {
            console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${componentName} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`.");
            warn = true;
          }
          indexBy.set(group, true);
        }
        acc.push({
          key: index2,
          index: index2,
          group,
          options: [option]
        });
      }
      return acc;
    }, []);
  }
  if (disabledProp && focused) {
    handleBlur();
  }
  return {
    getRootProps: (other = {}) => _extends({
      "aria-owns": listboxAvailable ? `${id}-listbox` : null
    }, other, {
      onKeyDown: handleKeyDown(other),
      onMouseDown: handleMouseDown,
      onClick: handleClick
    }),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": popupOpen ? "" : null,
      "aria-autocomplete": autoComplete ? "both" : "list",
      "aria-controls": listboxAvailable ? `${id}-listbox` : void 0,
      "aria-expanded": listboxAvailable,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: inputRef,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: disabledProp
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: handleClear
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: handlePopupIndicator
    }),
    getTagProps: ({
      index: index2
    }) => _extends({
      key: index2,
      "data-tag-index": index2,
      tabIndex: -1
    }, !readOnly && {
      onDelete: handleTagDelete(index2)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${id}-listbox`,
      "aria-labelledby": `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }),
    getOptionProps: ({
      index: index2,
      option
    }) => {
      var _getOptionKey;
      const selected = (multiple ? value : [value]).some((value2) => value2 != null && isOptionEqualToValue(option, value2));
      const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: (_getOptionKey = getOptionKey == null ? void 0 : getOptionKey(option)) != null ? _getOptionKey : getOptionLabel(option),
        tabIndex: -1,
        role: "option",
        id: `${id}-option-${index2}`,
        onMouseMove: handleOptionMouseMove,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        "data-option-index": index2,
        "aria-disabled": disabled,
        "aria-selected": selected
      };
    },
    id,
    inputValue,
    value,
    dirty,
    expanded: popupOpen && anchorEl,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions
  };
}

// node_modules/@mui/material/FormControl/formControlState.js
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}

// node_modules/@mui/material/FormControl/FormControlContext.js
var React52 = __toESM(require_react());
var FormControlContext2 = React52.createContext(void 0);
if (true) {
  FormControlContext2.displayName = "FormControlContext";
}
var FormControlContext_default = FormControlContext2;

// node_modules/@mui/material/FormControl/useFormControl.js
var React53 = __toESM(require_react());
function useFormControl() {
  return React53.useContext(FormControlContext_default);
}

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default = capitalize;

// node_modules/@mui/material/utils/useForkRef.js
var useForkRef_default = useForkRef;

// node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect_default2 = useEnhancedEffect_default;

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
var React54 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
function GlobalStyles(props) {
  return (0, import_jsx_runtime41.jsx)(GlobalStyles_default, _extends({}, props, {
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  }));
}
true ? GlobalStyles.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: import_prop_types26.default.oneOfType([import_prop_types26.default.array, import_prop_types26.default.func, import_prop_types26.default.number, import_prop_types26.default.object, import_prop_types26.default.string, import_prop_types26.default.bool])
} : void 0;
var GlobalStyles_default2 = GlobalStyles;

// node_modules/@mui/material/InputBase/utils.js
function hasValue2(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue2(obj.value) && obj.value !== "" || SSR && hasValue2(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}

// node_modules/@mui/material/InputBase/inputBaseClasses.js
function getInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiInputBase", slot);
}
var inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var inputBaseClasses_default = inputBaseClasses;

// node_modules/@mui/material/InputBase/InputBase.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var _excluded23 = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];
var rootOverridesResolver = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.root, ownerState.formControl && styles4.formControl, ownerState.startAdornment && styles4.adornedStart, ownerState.endAdornment && styles4.adornedEnd, ownerState.error && styles4.error, ownerState.size === "small" && styles4.sizeSmall, ownerState.multiline && styles4.multiline, ownerState.color && styles4[`color${capitalize_default(ownerState.color)}`], ownerState.fullWidth && styles4.fullWidth, ownerState.hiddenLabel && styles4.hiddenLabel];
};
var inputOverridesResolver = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.input, ownerState.size === "small" && styles4.inputSizeSmall, ownerState.multiline && styles4.inputMultiline, ownerState.type === "search" && styles4.inputTypeSearch, ownerState.startAdornment && styles4.inputAdornedStart, ownerState.endAdornment && styles4.inputAdornedEnd, ownerState.hiddenLabel && styles4.inputHiddenLabel];
};
var useUtilityClasses18 = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size: size3,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size3 && size3 !== "medium" && `size${capitalize_default(size3)}`, multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size3 === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
var InputBaseRoot = styled_default("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: "default"
  }
}, ownerState.multiline && _extends({
  padding: "4px 0 5px"
}, ownerState.size === "small" && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: "100%"
}));
var InputBaseComponent = styled_default("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === "light";
  const placeholder = _extends({
    color: "currentColor"
  }, theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  }, {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  });
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  };
  return _extends({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    // Firefox 19+
    "&:-ms-input-placeholder": placeholder,
    // IE11
    "&::-ms-input-placeholder": placeholder,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses_default.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      // Firefox 19+
      "&:-ms-input-placeholder": placeholderHidden,
      // IE11
      "&::-ms-input-placeholder": placeholderHidden,
      // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": placeholderVisible,
      // IE11
      "&:focus::-ms-input-placeholder": placeholderVisible
      // Edge
    },
    [`&.${inputBaseClasses_default.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, ownerState.size === "small" && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, ownerState.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
});
var inputGlobalStyles = (0, import_jsx_runtime42.jsx)(GlobalStyles_default2, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
});
var InputBase = React55.forwardRef(function InputBase2(inProps, ref) {
  var _slotProps$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    fullWidth = false,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded23);
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = React55.useRef(value != null);
  const inputRef = React55.useRef();
  const handleInputRefWarning = React55.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const handleInputRef = useForkRef_default(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = React55.useState(false);
  const muiFormControl = useFormControl();
  if (true) {
    React55.useEffect(() => {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }
      return void 0;
    }, [muiFormControl]);
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  React55.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = React55.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect_default2(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`inputComponent\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  React55.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      if (true) {
        if (minRows || maxRows) {
          console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.");
        }
      }
      inputProps = _extends({
        type: void 0,
        minRows: rows,
        maxRows: rows
      }, inputProps);
    } else {
      inputProps = _extends({
        type: void 0,
        maxRows,
        minRows
      }, inputProps);
    }
    InputComponent = TextareaAutosize;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React55.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  });
  const classes = useUtilityClasses18(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input5 = slots.input || components.Input || InputBaseComponent;
  inputProps = _extends({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
  return (0, import_jsx_runtime43.jsxs)(React55.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, (0, import_jsx_runtime43.jsxs)(Root, _extends({}, rootProps, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState)
    }, {
      ref,
      onClick: handleClick
    }, other, {
      className: clsx_default(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, (0, import_jsx_runtime42.jsx)(FormControlContext_default.Provider, {
        value: null,
        children: (0, import_jsx_runtime42.jsx)(Input5, _extends({
          ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id,
          onAnimationStart: handleAutoFill,
          name,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type
        }, inputProps, !isHostComponent(Input5) && {
          as: InputComponent,
          ownerState: _extends({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: clsx_default(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
true ? InputBase.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types27.default.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types27.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types27.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types27.default.object,
  /**
   * @ignore
   */
  className: import_prop_types27.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types27.default.oneOfType([import_prop_types27.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types27.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types27.default.shape({
    Input: import_prop_types27.default.elementType,
    Root: import_prop_types27.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types27.default.shape({
    input: import_prop_types27.default.object,
    root: import_prop_types27.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types27.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types27.default.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: import_prop_types27.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types27.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types27.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types27.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types27.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: elementTypeAcceptingRef_default,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types27.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types27.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types27.default.oneOfType([import_prop_types27.default.number, import_prop_types27.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types27.default.oneOfType([import_prop_types27.default.number, import_prop_types27.default.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types27.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types27.default.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: import_prop_types27.default.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types27.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types27.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types27.default.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: import_prop_types27.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types27.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types27.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types27.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types27.default.bool,
  /**
   * @ignore
   */
  renderSuffix: import_prop_types27.default.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types27.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types27.default.oneOfType([import_prop_types27.default.number, import_prop_types27.default.string]),
  /**
   * The size of the component.
   */
  size: import_prop_types27.default.oneOfType([import_prop_types27.default.oneOf(["medium", "small"]), import_prop_types27.default.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types27.default.shape({
    input: import_prop_types27.default.object,
    root: import_prop_types27.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types27.default.shape({
    input: import_prop_types27.default.elementType,
    root: import_prop_types27.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types27.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types27.default.oneOfType([import_prop_types27.default.arrayOf(import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object, import_prop_types27.default.bool])), import_prop_types27.default.func, import_prop_types27.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types27.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types27.default.any
} : void 0;
var InputBase_default = InputBase;

// node_modules/@mui/material/Input/inputClasses.js
function getInputUtilityClass2(slot) {
  return generateUtilityClass("MuiInput", slot);
}
var inputClasses2 = _extends({}, inputBaseClasses_default, generateUtilityClasses("MuiInput", ["root", "underline", "input"]));
var inputClasses_default = inputClasses2;

// node_modules/@mui/material/Input/Input.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var _excluded24 = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];
var useUtilityClasses19 = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass2, classes);
  return _extends({}, classes, composedClasses);
};
var InputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles4), !ownerState.disableUnderline && styles4.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === "light";
  let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return _extends({
    position: "relative"
  }, ownerState.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${inputClasses_default.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${inputClasses_default.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${inputClasses_default.disabled}, .${inputClasses_default.error}):before`]: {
      borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${inputClasses_default.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
});
var InputInput = styled_default(InputBaseComponent, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
var Input3 = React56.forwardRef(function Input4(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded24);
  const classes = useUtilityClasses19(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return (0, import_jsx_runtime44.jsx)(InputBase_default, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
true ? Input3.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types28.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types28.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types28.default.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types28.default.oneOfType([import_prop_types28.default.oneOf(["primary", "secondary"]), import_prop_types28.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types28.default.shape({
    Input: import_prop_types28.default.elementType,
    Root: import_prop_types28.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types28.default.shape({
    input: import_prop_types28.default.object,
    root: import_prop_types28.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types28.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types28.default.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: import_prop_types28.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types28.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types28.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types28.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types28.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: import_prop_types28.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types28.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types28.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types28.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types28.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types28.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types28.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types28.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types28.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types28.default.shape({
    input: import_prop_types28.default.object,
    root: import_prop_types28.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types28.default.shape({
    input: import_prop_types28.default.elementType,
    root: import_prop_types28.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types28.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types28.default.oneOfType([import_prop_types28.default.arrayOf(import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object, import_prop_types28.default.bool])), import_prop_types28.default.func, import_prop_types28.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types28.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types28.default.any
} : void 0;
Input3.muiName = "Input";
var Input_default = Input3;

// node_modules/@mui/material/FilledInput/FilledInput.js
var React57 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());

// node_modules/@mui/material/FilledInput/filledInputClasses.js
function getFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiFilledInput", slot);
}
var filledInputClasses = _extends({}, inputBaseClasses_default, generateUtilityClasses("MuiFilledInput", ["root", "underline", "input"]));
var filledInputClasses_default = filledInputClasses;

// node_modules/@mui/material/FilledInput/FilledInput.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var _excluded25 = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];
var useUtilityClasses20 = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var FilledInputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles4), !ownerState.disableUnderline && styles4.underline];
  }
})(({
  theme,
  ownerState
}) => {
  var _palette;
  const light = theme.palette.mode === "light";
  const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return _extends({
    position: "relative",
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${filledInputClasses_default.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${filledInputClasses_default.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    }
  }, !ownerState.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(_palette = (theme.vars || theme).palette[ownerState.color || "primary"]) == null ? void 0 : _palette.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${filledInputClasses_default.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${filledInputClasses_default.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${filledInputClasses_default.disabled}, .${filledInputClasses_default.error}):before`]: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
    },
    [`&.${filledInputClasses_default.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && _extends({
    padding: "25px 12px 8px"
  }, ownerState.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, ownerState.hiddenLabel && ownerState.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
});
var FilledInputInput = styled_default(InputBaseComponent, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}));
var FilledInput = React57.forwardRef(function FilledInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    // declare here to prevent spreading to DOM
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded25);
  const ownerState = _extends({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  });
  const classes = useUtilityClasses20(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(filledInputComponentsProps, slotProps != null ? slotProps : componentsPropsProp) : filledInputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
  return (0, import_jsx_runtime45.jsx)(InputBase_default, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
true ? FilledInput.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types29.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types29.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types29.default.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types29.default.oneOfType([import_prop_types29.default.oneOf(["primary", "secondary"]), import_prop_types29.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types29.default.shape({
    Input: import_prop_types29.default.elementType,
    Root: import_prop_types29.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types29.default.shape({
    input: import_prop_types29.default.object,
    root: import_prop_types29.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types29.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types29.default.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: import_prop_types29.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types29.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types29.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types29.default.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types29.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types29.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: import_prop_types29.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types29.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types29.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types29.default.oneOfType([import_prop_types29.default.number, import_prop_types29.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types29.default.oneOfType([import_prop_types29.default.number, import_prop_types29.default.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types29.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types29.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types29.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types29.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types29.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types29.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types29.default.oneOfType([import_prop_types29.default.number, import_prop_types29.default.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types29.default.shape({
    input: import_prop_types29.default.object,
    root: import_prop_types29.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types29.default.shape({
    input: import_prop_types29.default.elementType,
    root: import_prop_types29.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types29.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types29.default.oneOfType([import_prop_types29.default.arrayOf(import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object, import_prop_types29.default.bool])), import_prop_types29.default.func, import_prop_types29.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types29.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types29.default.any
} : void 0;
FilledInput.muiName = "Input";
var FilledInput_default = FilledInput;

// node_modules/@mui/material/OutlinedInput/OutlinedInput.js
var React59 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());

// node_modules/@mui/material/OutlinedInput/NotchedOutline.js
var React58 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var _span5;
var _excluded26 = ["children", "classes", "className", "label", "notched"];
var NotchedOutlineRoot = styled_default("fieldset", {
  shouldForwardProp: rootShouldForwardProp
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
var NotchedOutlineLegend = styled_default("legend", {
  shouldForwardProp: rootShouldForwardProp
})(({
  ownerState,
  theme
}) => _extends({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !ownerState.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: theme.transitions.create("width", {
    duration: 150,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.withLabel && _extends({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: theme.transitions.create("max-width", {
    duration: 50,
    easing: theme.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, ownerState.notched && {
  maxWidth: "100%",
  transition: theme.transitions.create("max-width", {
    duration: 100,
    easing: theme.transitions.easing.easeOut,
    delay: 50
  })
})));
function NotchedOutline(props) {
  const {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded26);
  const withLabel = label != null && label !== "";
  const ownerState = _extends({}, props, {
    notched,
    withLabel
  });
  return (0, import_jsx_runtime46.jsx)(NotchedOutlineRoot, _extends({
    "aria-hidden": true,
    className,
    ownerState
  }, other, {
    children: (0, import_jsx_runtime46.jsx)(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? (0, import_jsx_runtime46.jsx)("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span5 || (_span5 = (0, import_jsx_runtime46.jsx)("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types30.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types30.default.object,
  /**
   * @ignore
   */
  className: import_prop_types30.default.string,
  /**
   * The label.
   */
  label: import_prop_types30.default.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types30.default.bool.isRequired,
  /**
   * @ignore
   */
  style: import_prop_types30.default.object
} : void 0;

// node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js
function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiOutlinedInput", slot);
}
var outlinedInputClasses = _extends({}, inputBaseClasses_default, generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
var outlinedInputClasses_default = outlinedInputClasses;

// node_modules/@mui/material/OutlinedInput/OutlinedInput.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var _excluded27 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];
var useUtilityClasses21 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var OutlinedInputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return _extends({
    position: "relative",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses_default.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${outlinedInputClasses_default.focused} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette[ownerState.color].main,
      borderWidth: 2
    },
    [`&.${outlinedInputClasses_default.error} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    [`&.${outlinedInputClasses_default.disabled} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && _extends({
    padding: "16.5px 14px"
  }, ownerState.size === "small" && {
    padding: "8.5px 14px"
  }));
});
var NotchedOutlineRoot2 = styled_default(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles4) => styles4.notchedOutline
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
});
var OutlinedInputInput = styled_default(InputBaseComponent, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  padding: "16.5px 14px"
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  padding: "8.5px 14px"
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}));
var OutlinedInput = React59.forwardRef(function OutlinedInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
  const props = useThemeProps({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label,
    multiline = false,
    notched,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded27);
  const classes = useUtilityClasses21(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  });
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
  return (0, import_jsx_runtime48.jsx)(InputBase_default, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    renderSuffix: (state) => (0, import_jsx_runtime48.jsx)(NotchedOutlineRoot2, {
      ownerState,
      className: classes.notchedOutline,
      label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = (0, import_jsx_runtime47.jsxs)(React59.Fragment, {
        children: [label, " ", "*"]
      })) : label,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes: _extends({}, classes, {
      notchedOutline: null
    })
  }));
});
true ? OutlinedInput.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types31.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types31.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types31.default.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types31.default.oneOfType([import_prop_types31.default.oneOf(["primary", "secondary"]), import_prop_types31.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types31.default.shape({
    Input: import_prop_types31.default.elementType,
    Root: import_prop_types31.default.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types31.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types31.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types31.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types31.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types31.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types31.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: import_prop_types31.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types31.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: import_prop_types31.default.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types31.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types31.default.oneOfType([import_prop_types31.default.number, import_prop_types31.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types31.default.oneOfType([import_prop_types31.default.number, import_prop_types31.default.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types31.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types31.default.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types31.default.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types31.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types31.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types31.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types31.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types31.default.oneOfType([import_prop_types31.default.number, import_prop_types31.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types31.default.shape({
    input: import_prop_types31.default.elementType,
    root: import_prop_types31.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types31.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types31.default.oneOfType([import_prop_types31.default.arrayOf(import_prop_types31.default.oneOfType([import_prop_types31.default.func, import_prop_types31.default.object, import_prop_types31.default.bool])), import_prop_types31.default.func, import_prop_types31.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types31.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types31.default.any
} : void 0;
OutlinedInput.muiName = "Input";
var OutlinedInput_default = OutlinedInput;

// node_modules/@mui/material/InputLabel/InputLabel.js
var React61 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());

// node_modules/@mui/material/FormLabel/FormLabel.js
var React60 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());

// node_modules/@mui/material/FormLabel/formLabelClasses.js
function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
var formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
var formLabelClasses_default = formLabelClasses;

// node_modules/@mui/material/FormLabel/FormLabel.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var _excluded28 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];
var useUtilityClasses22 = (ownerState) => {
  const {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
var FormLabelRoot = styled_default("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles4) => {
    return _extends({}, styles4.root, ownerState.color === "secondary" && styles4.colorSecondary, ownerState.filled && styles4.filled);
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${formLabelClasses_default.focused}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${formLabelClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
var AsteriskComponent = styled_default("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles4) => styles4.asterisk
})(({
  theme
}) => ({
  [`&.${formLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
var FormLabel = React60.forwardRef(function FormLabel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children: children2,
    className,
    component = "label"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses22(ownerState);
  return (0, import_jsx_runtime49.jsxs)(FormLabelRoot, _extends({
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  }, other, {
    children: [children2, fcs.required && (0, import_jsx_runtime49.jsxs)(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: [" ", "*"]
    })]
  }));
});
true ? FormLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types32.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types32.default.object,
  /**
   * @ignore
   */
  className: import_prop_types32.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: import_prop_types32.default.oneOfType([import_prop_types32.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), import_prop_types32.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types32.default.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: import_prop_types32.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: import_prop_types32.default.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: import_prop_types32.default.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: import_prop_types32.default.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: import_prop_types32.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types32.default.oneOfType([import_prop_types32.default.arrayOf(import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object, import_prop_types32.default.bool])), import_prop_types32.default.func, import_prop_types32.default.object])
} : void 0;
var FormLabel_default = FormLabel;

// node_modules/@mui/material/InputLabel/inputLabelClasses.js
function getInputLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiInputLabel", slot);
}
var inputLabelClasses = generateUtilityClasses("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
var inputLabelClasses_default = inputLabelClasses;

// node_modules/@mui/material/InputLabel/InputLabel.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var _excluded29 = ["disableAnimation", "margin", "shrink", "variant", "className"];
var useUtilityClasses23 = (ownerState) => {
  const {
    classes,
    formControl,
    size: size3,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size3 && size3 !== "normal" && `size${capitalize_default(size3)}`, variant],
    asterisk: [required && "asterisk"]
  };
  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
  return _extends({}, classes, composedClasses);
};
var InputLabelRoot = styled_default(FormLabel_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses_default.asterisk}`]: styles4.asterisk
    }, styles4.root, ownerState.formControl && styles4.formControl, ownerState.size === "small" && styles4.sizeSmall, ownerState.shrink && styles4.shrink, !ownerState.disableAnimation && styles4.animated, ownerState.focused && styles4.focused, styles4[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, ownerState.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, ownerState.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, ownerState.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !ownerState.disableAnimation && {
  transition: theme.transitions.create(["color", "transform", "max-width"], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.variant === "filled" && _extends({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, ownerState.shrink && _extends({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), ownerState.variant === "outlined" && _extends({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, ownerState.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
})));
var InputLabel = React61.forwardRef(function InputLabel2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiInputLabel",
    props: inProps
  });
  const {
    disableAnimation = false,
    shrink: shrinkProp,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded29);
  const muiFormControl = useFormControl();
  let shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required", "focused"]
  });
  const ownerState = _extends({}, props, {
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  });
  const classes = useUtilityClasses23(ownerState);
  return (0, import_jsx_runtime50.jsx)(InputLabelRoot, _extends({
    "data-shrink": shrink,
    ownerState,
    ref,
    className: clsx_default(classes.root, className)
  }, other, {
    classes
  }));
});
true ? InputLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types33.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types33.default.object,
  /**
   * @ignore
   */
  className: import_prop_types33.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: import_prop_types33.default.oneOfType([import_prop_types33.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), import_prop_types33.default.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: import_prop_types33.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types33.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: import_prop_types33.default.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: import_prop_types33.default.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types33.default.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: import_prop_types33.default.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: import_prop_types33.default.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: import_prop_types33.default.oneOfType([import_prop_types33.default.oneOf(["normal", "small"]), import_prop_types33.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types33.default.oneOfType([import_prop_types33.default.arrayOf(import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object, import_prop_types33.default.bool])), import_prop_types33.default.func, import_prop_types33.default.object]),
  /**
   * The variant to use.
   */
  variant: import_prop_types33.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var InputLabel_default = InputLabel;

// node_modules/@mui/material/FormControl/FormControl.js
var React62 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());

// node_modules/@mui/material/utils/isMuiElement.js
var isMuiElement_default = isMuiElement;

// node_modules/@mui/material/FormControl/formControlClasses.js
function getFormControlUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses2 = generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
var formControlClasses_default = formControlClasses2;

// node_modules/@mui/material/FormControl/FormControl.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var _excluded30 = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
var useUtilityClasses24 = (ownerState) => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin !== "none" && `margin${capitalize_default(margin)}`, fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
var FormControlRoot = styled_default("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles4) => {
    return _extends({}, styles4.root, styles4[`margin${capitalize_default(ownerState.margin)}`], ownerState.fullWidth && styles4.fullWidth);
  }
})(({
  ownerState
}) => _extends({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, ownerState.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: "100%"
}));
var FormControl3 = React62.forwardRef(function FormControl4(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children: children2,
    className,
    color = "primary",
    component = "div",
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = "none",
    required = false,
    size: size3 = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded30);
  const ownerState = _extends({}, props, {
    color,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size: size3,
    variant
  });
  const classes = useUtilityClasses24(ownerState);
  const [adornedStart, setAdornedStart] = React62.useState(() => {
    let initialAdornedStart = false;
    if (children2) {
      React62.Children.forEach(children2, (child) => {
        if (!isMuiElement_default(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement_default(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = React62.useState(() => {
    let initialFilled = false;
    if (children2) {
      React62.Children.forEach(children2, (child) => {
        if (!isMuiElement_default(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = React62.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  if (true) {
    const registeredInput = React62.useRef(false);
    registerEffect = () => {
      if (registeredInput.current) {
        console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join("\n"));
      }
      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }
  const childContext = React62.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size: size3,
      onBlur: () => {
        setFocused(false);
      },
      onEmpty: () => {
        setFilled(false);
      },
      onFilled: () => {
        setFilled(true);
      },
      onFocus: () => {
        setFocused(true);
      },
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size3, variant]);
  return (0, import_jsx_runtime51.jsx)(FormControlContext_default.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime51.jsx)(FormControlRoot, _extends({
      as: component,
      ownerState,
      className: clsx_default(classes.root, className),
      ref
    }, other, {
      children: children2
    }))
  });
});
true ? FormControl3.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types34.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types34.default.object,
  /**
   * @ignore
   */
  className: import_prop_types34.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types34.default.oneOfType([import_prop_types34.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types34.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types34.default.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: import_prop_types34.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: import_prop_types34.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types34.default.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types34.default.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types34.default.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types34.default.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types34.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types34.default.oneOfType([import_prop_types34.default.oneOf(["medium", "small"]), import_prop_types34.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object, import_prop_types34.default.bool])), import_prop_types34.default.func, import_prop_types34.default.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types34.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var FormControl_default = FormControl3;

// node_modules/@mui/material/FormHelperText/FormHelperText.js
var React63 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());

// node_modules/@mui/material/FormHelperText/formHelperTextClasses.js
function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass("MuiFormHelperText", slot);
}
var formHelperTextClasses = generateUtilityClasses("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var formHelperTextClasses_default = formHelperTextClasses;

// node_modules/@mui/material/FormHelperText/FormHelperText.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var _span6;
var _excluded31 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];
var useUtilityClasses25 = (ownerState) => {
  const {
    classes,
    contained,
    size: size3,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", size3 && `size${capitalize_default(size3)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
  };
  return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};
var FormHelperTextRoot = styled_default("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.size && styles4[`size${capitalize_default(ownerState.size)}`], ownerState.contained && styles4.contained, ownerState.filled && styles4.filled];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formHelperTextClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}, ownerState.size === "small" && {
  marginTop: 4
}, ownerState.contained && {
  marginLeft: 14,
  marginRight: 14
}));
var FormHelperText = React63.forwardRef(function FormHelperText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormHelperText"
  });
  const {
    children: children2,
    className,
    component = "p"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded31);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  });
  const ownerState = _extends({}, props, {
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses25(ownerState);
  return (0, import_jsx_runtime52.jsx)(FormHelperTextRoot, _extends({
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  }, other, {
    children: children2 === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      _span6 || (_span6 = (0, import_jsx_runtime52.jsx)("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : children2
  }));
});
true ? FormHelperText.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: import_prop_types35.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types35.default.object,
  /**
   * @ignore
   */
  className: import_prop_types35.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types35.default.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: import_prop_types35.default.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: import_prop_types35.default.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: import_prop_types35.default.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: import_prop_types35.default.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types35.default.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: import_prop_types35.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types35.default.oneOfType([import_prop_types35.default.arrayOf(import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object, import_prop_types35.default.bool])), import_prop_types35.default.func, import_prop_types35.default.object]),
  /**
   * The variant to use.
   */
  variant: import_prop_types35.default.oneOfType([import_prop_types35.default.oneOf(["filled", "outlined", "standard"]), import_prop_types35.default.string])
} : void 0;
var FormHelperText_default = FormHelperText;

// node_modules/@mui/material/Select/Select.js
var React85 = __toESM(require_react());
var import_prop_types54 = __toESM(require_prop_types());

// node_modules/@mui/material/Select/SelectInput.js
var React81 = __toESM(require_react());
var import_react_is3 = __toESM(require_react_is());
var import_prop_types52 = __toESM(require_prop_types());

// node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument_default = ownerDocument;

// node_modules/@mui/material/Menu/Menu.js
var React79 = __toESM(require_react());
var import_react_is2 = __toESM(require_react_is());
var import_prop_types50 = __toESM(require_prop_types());

// node_modules/@mui/material/MenuList/MenuList.js
var React66 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
var import_prop_types37 = __toESM(require_prop_types());

// node_modules/@mui/material/List/List.js
var React65 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());

// node_modules/@mui/material/List/ListContext.js
var React64 = __toESM(require_react());
var ListContext2 = React64.createContext({});
if (true) {
  ListContext2.displayName = "ListContext";
}
var ListContext_default = ListContext2;

// node_modules/@mui/material/List/listClasses.js
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
var listClasses = generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);
var listClasses_default = listClasses;

// node_modules/@mui/material/List/List.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var _excluded32 = ["children", "className", "component", "dense", "disablePadding", "subheader"];
var useUtilityClasses26 = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
var ListRoot = styled_default("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, !ownerState.disablePadding && styles4.padding, ownerState.dense && styles4.dense, ownerState.subheader && styles4.subheader];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
var List = React65.forwardRef(function List2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiList"
  });
  const {
    children: children2,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded32);
  const context = React65.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = _extends({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = useUtilityClasses26(ownerState);
  return (0, import_jsx_runtime54.jsx)(ListContext_default.Provider, {
    value: context,
    children: (0, import_jsx_runtime53.jsxs)(ListRoot, _extends({
      as: component,
      className: clsx_default(classes.root, className),
      ref,
      ownerState
    }, other, {
      children: [subheader, children2]
    }))
  });
});
true ? List.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types36.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types36.default.object,
  /**
   * @ignore
   */
  className: import_prop_types36.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types36.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: import_prop_types36.default.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: import_prop_types36.default.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types36.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types36.default.oneOfType([import_prop_types36.default.arrayOf(import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object, import_prop_types36.default.bool])), import_prop_types36.default.func, import_prop_types36.default.object])
} : void 0;
var List_default = List;

// node_modules/@mui/material/utils/getScrollbarSize.js
var getScrollbarSize_default = getScrollbarSize;

// node_modules/@mui/material/MenuList/MenuList.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var _excluded33 = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
var MenuList = React66.forwardRef(function MenuList2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children: children2,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded33);
  const listRef = React66.useRef(null);
  const textCriteriaRef = React66.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect_default2(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  React66.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, theme) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize_default(ownerDocument_default(containerElement))}px`;
        listRef.current.style[theme.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown = (event) => {
    const list = listRef.current;
    const key = event.key;
    const currentFocus = ownerDocument_default(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef_default(listRef, ref);
  let activeItemIndex = -1;
  React66.Children.forEach(children2, (child, index2) => {
    if (!React66.isValidElement(child)) {
      if (activeItemIndex === index2) {
        activeItemIndex += 1;
        if (activeItemIndex >= children2.length) {
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index2;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index2;
      }
    }
    if (activeItemIndex === index2 && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
      activeItemIndex += 1;
      if (activeItemIndex >= children2.length) {
        activeItemIndex = -1;
      }
    }
  });
  const items = React66.Children.map(children2, (child, index2) => {
    if (index2 === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return React66.cloneElement(child, newChildProps);
    }
    return child;
  });
  return (0, import_jsx_runtime55.jsx)(List_default, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
true ? MenuList.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: import_prop_types37.default.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: import_prop_types37.default.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: import_prop_types37.default.node,
  /**
   * @ignore
   */
  className: import_prop_types37.default.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: import_prop_types37.default.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: import_prop_types37.default.bool,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types37.default.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: import_prop_types37.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var MenuList_default = MenuList;

// node_modules/@mui/material/Popover/Popover.js
var React78 = __toESM(require_react());
var import_prop_types49 = __toESM(require_prop_types());

// node_modules/@mui/material/utils/debounce.js
var debounce_default = debounce;

// node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow_default = ownerWindow;

// node_modules/@mui/material/Grow/Grow.js
var React73 = __toESM(require_react());
var import_prop_types44 = __toESM(require_prop_types());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types40 = __toESM(require_prop_types());

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_react5 = __toESM(require_react());

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types39 = __toESM(require_prop_types());
var import_react4 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types38 = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types38.default.oneOfType([import_prop_types38.default.number, import_prop_types38.default.shape({
  enter: import_prop_types38.default.number,
  exit: import_prop_types38.default.number,
  appear: import_prop_types38.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types38.default.oneOfType([import_prop_types38.default.string, import_prop_types38.default.shape({
  enter: import_prop_types38.default.string,
  exit: import_prop_types38.default.string,
  active: import_prop_types38.default.string
}), import_prop_types38.default.shape({
  enter: import_prop_types38.default.string,
  enterDone: import_prop_types38.default.string,
  enterActive: import_prop_types38.default.string,
  exit: import_prop_types38.default.string,
  exitDone: import_prop_types38.default.string,
  exitActive: import_prop_types38.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react3 = __toESM(require_react());
var TransitionGroupContext_default = import_react3.default.createContext(null);

// node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom2.default.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom2.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom2.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom2.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children2 = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      import_react4.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children2 === "function" ? children2(status, childProps) : import_react4.default.cloneElement(import_react4.default.Children.only(children2), childProps))
    );
  };
  return Transition2;
}(import_react4.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types39.default.shape({
    current: typeof Element === "undefined" ? import_prop_types39.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types39.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types39.default.oneOfType([import_prop_types39.default.func.isRequired, import_prop_types39.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types39.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types39.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types39.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types39.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types39.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types39.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types39.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types39.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types39.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types39.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types39.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types39.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types39.default.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass2 = function removeClass3(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass(node, c);
  });
};
var CSSTransition = function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === "string";
      var prefix = isStringClassNames && classNames ? classNames + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass3(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node)
        forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, _ = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return import_react5.default.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react5.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types40.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types40.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types40.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types40.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types40.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types40.default.func
}) : {};

// node_modules/react-transition-group/esm/ReplaceTransition.js
var import_prop_types42 = __toESM(require_prop_types());
var import_react8 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types41 = __toESM(require_prop_types());
var import_react7 = __toESM(require_react());

// node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react6 = __toESM(require_react());
function getChildMapping(children2, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react6.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children2)
    import_react6.Children.map(children2, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react6.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children2 = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children2).forEach(function(key) {
    var child = children2[key];
    if (!(0, import_react6.isValidElement)(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react6.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children2[key] = (0, import_react6.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children2[key] = (0, import_react6.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react6.isValidElement)(prevChild)) {
      children2[key] = (0, import_react6.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children2;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children2 = _extends({}, state.children);
        delete children2[child.key];
        return {
          children: children2
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children2 = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return import_react7.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children2);
    }
    return import_react7.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, import_react7.default.createElement(Component, props, children2));
  };
  return TransitionGroup2;
}(import_react7.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types41.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types41.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types41.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types41.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types41.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types41.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/react-transition-group/esm/ReplaceTransition.js
var ReplaceTransition = function(_React$Component) {
  _inheritsLoose(ReplaceTransition2, _React$Component);
  function ReplaceTransition2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.handleEnter = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _this.handleLifecycle("onEnter", 0, args);
    };
    _this.handleEntering = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _this.handleLifecycle("onEntering", 0, args);
    };
    _this.handleEntered = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return _this.handleLifecycle("onEntered", 0, args);
    };
    _this.handleExit = function() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return _this.handleLifecycle("onExit", 1, args);
    };
    _this.handleExiting = function() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return _this.handleLifecycle("onExiting", 1, args);
    };
    _this.handleExited = function() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return _this.handleLifecycle("onExited", 1, args);
    };
    return _this;
  }
  var _proto = ReplaceTransition2.prototype;
  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;
    var children2 = this.props.children;
    var child = import_react8.default.Children.toArray(children2)[idx];
    if (child.props[handler])
      (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? void 0 : import_react_dom3.default.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);
    var _React$Children$toArr = import_react8.default.Children.toArray(children2), first = _React$Children$toArr[0], second = _React$Children$toArr[1];
    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return import_react8.default.createElement(TransitionGroup_default, props, inProp ? import_react8.default.cloneElement(first, {
      key: "first",
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : import_react8.default.cloneElement(second, {
      key: "second",
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };
  return ReplaceTransition2;
}(import_react8.default.Component);
ReplaceTransition.propTypes = true ? {
  in: import_prop_types42.default.bool.isRequired,
  children: function children(props, propName) {
    if (import_react8.default.Children.count(props[propName]) !== 2)
      return new Error('"' + propName + '" must be exactly two transition components.');
    return null;
  }
} : {};

// node_modules/react-transition-group/esm/SwitchTransition.js
var import_react9 = __toESM(require_react());
var import_prop_types43 = __toESM(require_prop_types());
var _leaveRenders;
var _enterRenders;
function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren)
    return false;
  if (import_react9.default.isValidElement(oldChildren) && import_react9.default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }
  return true;
}
var modes = {
  out: "out-in",
  in: "in-out"
};
var callHook = function callHook2(element, name, cb) {
  return function() {
    var _element$props;
    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};
var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function(_ref) {
  var current = _ref.current, changeState = _ref.changeState;
  return import_react9.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function(_ref2) {
  var current = _ref2.current, changeState = _ref2.changeState, children2 = _ref2.children;
  return [current, import_react9.default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function(_ref3) {
  var children2 = _ref3.children, changeState = _ref3.changeState;
  return import_react9.default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERED, import_react9.default.cloneElement(children2, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function(_ref4) {
  var current = _ref4.current, children2 = _ref4.children, changeState = _ref4.changeState;
  return [import_react9.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERED, import_react9.default.cloneElement(children2, {
        in: true
      }));
    })
  }), import_react9.default.cloneElement(children2, {
    in: true
  })];
}, _enterRenders);
var SwitchTransition = function(_React$Component) {
  _inheritsLoose(SwitchTransition2, _React$Component);
  function SwitchTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;
    _this.changeState = function(status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }
      _this.setState({
        status,
        current
      });
    };
    return _this;
  }
  var _proto = SwitchTransition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };
  SwitchTransition2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }
    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }
    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }
    return {
      current: import_react9.default.cloneElement(props.children, {
        in: true
      })
    };
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, mode = _this$props.mode, _this$state = this.state, status = _this$state.status, current = _this$state.current;
    var data = {
      children: children2,
      current,
      changeState: this.changeState,
      status
    };
    var component;
    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;
      case EXITING:
        component = leaveRenders[mode](data);
        break;
      case ENTERED:
        component = current;
    }
    return import_react9.default.createElement(TransitionGroupContext_default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };
  return SwitchTransition2;
}(import_react9.default.Component);
SwitchTransition.propTypes = true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: import_prop_types43.default.oneOf([modes.in, modes.out]),
  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: import_prop_types43.default.oneOfType([import_prop_types43.default.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

// node_modules/@mui/material/transitions/utils.js
var reflow = (node) => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout: timeout2,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout2 === "number" ? timeout2 : timeout2[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === "object" ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}

// node_modules/@mui/material/Grow/Grow.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var _excluded34 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getScale2(value) {
  return `scale(${value}, ${value ** 2})`;
}
var styles2 = {
  entering: {
    opacity: 1,
    transform: getScale2(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
var Grow = React73.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children: children2,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout: timeout2 = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition_default
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded34);
  const timer = React73.useRef();
  const autoTimeout = React73.useRef();
  const theme = useTheme();
  const nodeRef = React73.useRef(null);
  const handleRef = useForkRef_default(nodeRef, children2.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout: timeout2,
      easing
    }, {
      mode: "enter"
    });
    let duration;
    if (timeout2 === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout: timeout2,
      easing
    }, {
      mode: "exit"
    });
    let duration;
    if (timeout2 === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node.style.opacity = 0;
    node.style.transform = getScale2(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (timeout2 === "auto") {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  React73.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  return (0, import_jsx_runtime56.jsx)(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout2 === "auto" ? null : timeout2
  }, other, {
    children: (state, childProps) => {
      return React73.cloneElement(children2, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale2(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles2[state], style, children2.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
true ? Grow.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: import_prop_types44.default.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: import_prop_types44.default.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: import_prop_types44.default.oneOfType([import_prop_types44.default.shape({
    enter: import_prop_types44.default.string,
    exit: import_prop_types44.default.string
  }), import_prop_types44.default.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types44.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types44.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types44.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types44.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types44.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types44.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types44.default.func,
  /**
   * @ignore
   */
  style: import_prop_types44.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: import_prop_types44.default.oneOfType([import_prop_types44.default.oneOf(["auto"]), import_prop_types44.default.number, import_prop_types44.default.shape({
    appear: import_prop_types44.default.number,
    enter: import_prop_types44.default.number,
    exit: import_prop_types44.default.number
  })])
} : void 0;
Grow.muiSupportAuto = true;
var Grow_default = Grow;

// node_modules/@mui/material/Modal/Modal.js
var React76 = __toESM(require_react());
var import_prop_types47 = __toESM(require_prop_types());

// node_modules/@mui/material/Backdrop/Backdrop.js
var React75 = __toESM(require_react());
var import_prop_types46 = __toESM(require_prop_types());

// node_modules/@mui/material/Fade/Fade.js
var React74 = __toESM(require_react());
var import_prop_types45 = __toESM(require_prop_types());
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var _excluded35 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
var styles3 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var Fade = React74.forwardRef(function Fade2(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children: children2,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout: timeout2 = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition_default
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded35);
  const enableStrictModeCompat = true;
  const nodeRef = React74.useRef(null);
  const handleRef = useForkRef_default(nodeRef, children2.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const transitionProps = getTransitionProps({
      style,
      timeout: timeout2,
      easing
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      style,
      timeout: timeout2,
      easing
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return (0, import_jsx_runtime57.jsx)(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout2
  }, other, {
    children: (state, childProps) => {
      return React74.cloneElement(children2, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles3[state], style, children2.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
true ? Fade.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: import_prop_types45.default.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: import_prop_types45.default.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: import_prop_types45.default.oneOfType([import_prop_types45.default.shape({
    enter: import_prop_types45.default.string,
    exit: import_prop_types45.default.string
  }), import_prop_types45.default.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types45.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types45.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types45.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types45.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types45.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types45.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types45.default.func,
  /**
   * @ignore
   */
  style: import_prop_types45.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: import_prop_types45.default.oneOfType([import_prop_types45.default.number, import_prop_types45.default.shape({
    appear: import_prop_types45.default.number,
    enter: import_prop_types45.default.number,
    exit: import_prop_types45.default.number
  })])
} : void 0;
var Fade_default = Fade;

// node_modules/@mui/material/Backdrop/backdropClasses.js
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
var backdropClasses = generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
var backdropClasses_default = backdropClasses;

// node_modules/@mui/material/Backdrop/Backdrop.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var _excluded36 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
var useUtilityClasses27 = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
var BackdropRoot = styled_default("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.invisible && styles4.invisible];
  }
})(({
  ownerState
}) => _extends({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, ownerState.invisible && {
  backgroundColor: "transparent"
}));
var Backdrop = React75.forwardRef(function Backdrop2(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = useThemeProps({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children: children2,
    className,
    component = "div",
    components = {},
    componentsProps = {},
    invisible = false,
    open,
    slotProps = {},
    slots = {},
    TransitionComponent = Fade_default,
    transitionDuration
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded36);
  const ownerState = _extends({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses27(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return (0, import_jsx_runtime58.jsx)(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: (0, import_jsx_runtime58.jsx)(BackdropRoot, _extends({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: clsx_default(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes,
      ref,
      children: children2
    }))
  }));
});
true ? Backdrop.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types46.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types46.default.object,
  /**
   * @ignore
   */
  className: import_prop_types46.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types46.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types46.default.shape({
    Root: import_prop_types46.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types46.default.shape({
    root: import_prop_types46.default.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: import_prop_types46.default.bool,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types46.default.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types46.default.shape({
    root: import_prop_types46.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types46.default.shape({
    root: import_prop_types46.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types46.default.oneOfType([import_prop_types46.default.arrayOf(import_prop_types46.default.oneOfType([import_prop_types46.default.func, import_prop_types46.default.object, import_prop_types46.default.bool])), import_prop_types46.default.func, import_prop_types46.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: import_prop_types46.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.shape({
    appear: import_prop_types46.default.number,
    enter: import_prop_types46.default.number,
    exit: import_prop_types46.default.number
  })])
} : void 0;
var Backdrop_default = Backdrop;

// node_modules/@mui/material/Modal/modalClasses.js
function getModalUtilityClass2(slot) {
  return generateUtilityClass("MuiModal", slot);
}
var modalClasses2 = generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);
var modalClasses_default = modalClasses2;

// node_modules/@mui/material/Modal/Modal.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var _excluded37 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"];
var useUtilityClasses28 = (ownerState) => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass2, classes);
};
var ModalRoot = styled_default("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, !ownerState.open && ownerState.exited && styles4.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "fixed",
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: "hidden"
}));
var ModalBackdrop = styled_default(Backdrop_default, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles4) => {
    return styles4.backdrop;
  }
})({
  zIndex: -1
});
var Modal3 = React76.forwardRef(function Modal4(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = useThemeProps({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    className,
    closeAfterTransition = false,
    children: children2,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onBackdropClick,
    open,
    slotProps,
    slots
    // eslint-disable-next-line react/prop-types
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded37);
  const propsWithDefaults = _extends({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal(_extends({}, propsWithDefaults, {
    rootRef: ref
  }));
  const ownerState = _extends({}, propsWithDefaults, {
    exited
  });
  const classes = useUtilityClasses28(ownerState);
  const childProps = {};
  if (children2.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps2();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  const rootProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: clsx_default(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
  });
  const backdropProps = useSlotProps({
    elementType: BackdropSlot,
    externalSlotProps: backdropSlotProps,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps(_extends({}, otherHandlers, {
        onClick: (e) => {
          if (onBackdropClick) {
            onBackdropClick(e);
          }
          if (otherHandlers != null && otherHandlers.onClick) {
            otherHandlers.onClick(e);
          }
        }
      }));
    },
    className: clsx_default(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return (0, import_jsx_runtime59.jsx)(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: (0, import_jsx_runtime60.jsxs)(RootSlot, _extends({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? (0, import_jsx_runtime59.jsx)(BackdropSlot, _extends({}, backdropProps)) : null, (0, import_jsx_runtime59.jsx)(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: React76.cloneElement(children2, childProps)
      })]
    }))
  });
});
true ? Modal3.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: import_prop_types47.default.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: import_prop_types47.default.object,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types47.default.object,
  /**
   * @ignore
   */
  className: import_prop_types47.default.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: import_prop_types47.default.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types47.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types47.default.shape({
    Backdrop: import_prop_types47.default.elementType,
    Root: import_prop_types47.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types47.default.shape({
    backdrop: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object]),
    root: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types47.default.oneOfType([HTMLElementType, import_prop_types47.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types47.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types47.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types47.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types47.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types47.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types47.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types47.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: import_prop_types47.default.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: import_prop_types47.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types47.default.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: import_prop_types47.default.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: import_prop_types47.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types47.default.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: import_prop_types47.default.shape({
    backdrop: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object]),
    root: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types47.default.shape({
    backdrop: import_prop_types47.default.elementType,
    root: import_prop_types47.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types47.default.oneOfType([import_prop_types47.default.arrayOf(import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object, import_prop_types47.default.bool])), import_prop_types47.default.func, import_prop_types47.default.object])
} : void 0;
var Modal_default = Modal3;

// node_modules/@mui/material/Paper/Paper.js
var React77 = __toESM(require_react());
var import_prop_types48 = __toESM(require_prop_types());

// node_modules/@mui/material/Paper/paperClasses.js
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
var paperClasses_default = paperClasses;

// node_modules/@mui/material/Paper/Paper.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var _excluded38 = ["className", "component", "elevation", "square", "variant"];
var useUtilityClasses29 = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
var PaperRoot = styled_default("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], !ownerState.square && styles4.rounded, ownerState.variant === "elevation" && styles4[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
var Paper = React77.forwardRef(function Paper2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPaper"
  });
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses29(ownerState);
  if (true) {
    const theme = useTheme();
    if (theme.shadows[elevation] === void 0) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
    }
  }
  return (0, import_jsx_runtime61.jsx)(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  }, other));
});
true ? Paper.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types48.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types48.default.object,
  /**
   * @ignore
   */
  className: import_prop_types48.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types48.default.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: chainPropTypes(integerPropType_default, (props) => {
    const {
      elevation,
      variant
    } = props;
    if (elevation > 0 && variant === "outlined") {
      return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
    }
    return null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: import_prop_types48.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types48.default.oneOfType([import_prop_types48.default.arrayOf(import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.object, import_prop_types48.default.bool])), import_prop_types48.default.func, import_prop_types48.default.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: import_prop_types48.default.oneOfType([import_prop_types48.default.oneOf(["elevation", "outlined"]), import_prop_types48.default.string])
} : void 0;
var Paper_default = Paper;

// node_modules/@mui/material/Popover/popoverClasses.js
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
var popoverClasses = generateUtilityClasses("MuiPopover", ["root", "paper"]);
var popoverClasses_default = popoverClasses;

// node_modules/@mui/material/Popover/Popover.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var _excluded39 = ["onEntering"];
var _excluded210 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"];
var _excluded310 = ["slotProps"];
function getOffsetTop(rect, vertical) {
  let offset3 = 0;
  if (typeof vertical === "number") {
    offset3 = vertical;
  } else if (vertical === "center") {
    offset3 = rect.height / 2;
  } else if (vertical === "bottom") {
    offset3 = rect.height;
  }
  return offset3;
}
function getOffsetLeft(rect, horizontal) {
  let offset3 = 0;
  if (typeof horizontal === "number") {
    offset3 = horizontal;
  } else if (horizontal === "center") {
    offset3 = rect.width / 2;
  } else if (horizontal === "right") {
    offset3 = rect.width;
  }
  return offset3;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n) => typeof n === "number" ? `${n}px` : n).join(" ");
}
function resolveAnchorEl2(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var useUtilityClasses30 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
var PopoverRoot = styled_default(Modal_default, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({});
var PopoverPaper = styled_default(Paper_default, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles4) => styles4.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
var Popover = React78.forwardRef(function Popover2(inProps, ref) {
  var _slotProps$paper, _slots$root, _slots$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children: children2,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    slots,
    slotProps,
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent = Grow_default,
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps: {
      onEntering
    } = {},
    disableScrollLock = false
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded39), other = _objectWithoutPropertiesLoose(props, _excluded210);
  const externalPaperSlotProps = (_slotProps$paper = slotProps == null ? void 0 : slotProps.paper) != null ? _slotProps$paper : PaperPropsProp;
  const paperRef = React78.useRef();
  const handlePaperRef = useForkRef_default(paperRef, externalPaperSlotProps.ref);
  const ownerState = _extends({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    externalPaperSlotProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  });
  const classes = useUtilityClasses30(ownerState);
  const getAnchorOffset = React78.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      if (true) {
        if (!anchorPosition) {
          console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.');
        }
      }
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl2(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument_default(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    if (true) {
      const box = anchorElement.getBoundingClientRect();
      if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
      }
    }
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = React78.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = React78.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top2 = anchorOffset.top - elemTransformOrigin.vertical;
    let left2 = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom2 = top2 + elemRect.height;
    const right2 = left2 + elemRect.width;
    const containerWindow = ownerWindow_default(resolveAnchorEl2(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (marginThreshold !== null && top2 < marginThreshold) {
      const diff = top2 - marginThreshold;
      top2 -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom2 > heightThreshold) {
      const diff = bottom2 - heightThreshold;
      top2 -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${elemRect.height - heightThreshold}px).`, "Please consider adding a `max-height` to improve the user-experience."].join("\n"));
      }
    }
    if (marginThreshold !== null && left2 < marginThreshold) {
      const diff = left2 - marginThreshold;
      left2 -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right2 > widthThreshold) {
      const diff = right2 - widthThreshold;
      left2 -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top2)}px`,
      left: `${Math.round(left2)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = React78.useState(open);
  const setPositioningStyles = React78.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  React78.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener("scroll", setPositioningStyles);
    }
    return () => window.removeEventListener("scroll", setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  React78.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  React78.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  React78.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce_default(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow_default(anchorEl);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container = containerProp || (anchorEl ? ownerDocument_default(resolveAnchorEl2(anchorEl)).body : void 0);
  const RootSlot = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : PopoverRoot;
  const PaperSlot = (_slots$paper = slots == null ? void 0 : slots.paper) != null ? _slots$paper : PopoverPaper;
  const paperProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: _extends({}, externalPaperSlotProps, {
      style: isPositioned ? externalPaperSlotProps.style : _extends({}, externalPaperSlotProps.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation,
      ref: handlePaperRef
    },
    ownerState,
    className: clsx_default(classes.paper, externalPaperSlotProps == null ? void 0 : externalPaperSlotProps.className)
  });
  const _useSlotProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: (slotProps == null ? void 0 : slotProps.root) || {},
    externalForwardedProps: other,
    additionalProps: {
      ref,
      slotProps: {
        backdrop: {
          invisible: true
        }
      },
      container,
      open
    },
    ownerState,
    className: clsx_default(classes.root, className)
  }), {
    slotProps: rootSlotPropsProp
  } = _useSlotProps, rootProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded310);
  return (0, import_jsx_runtime62.jsx)(RootSlot, _extends({}, rootProps, !isHostComponent(RootSlot) && {
    slotProps: rootSlotPropsProp,
    disableScrollLock
  }, {
    children: (0, import_jsx_runtime62.jsx)(TransitionComponent, _extends({
      appear: true,
      in: open,
      onEntering: handleEntering,
      onExited: handleExited,
      timeout: transitionDuration
    }, TransitionProps, {
      children: (0, import_jsx_runtime62.jsx)(PaperSlot, _extends({}, paperProps, {
        children: children2
      }))
    }))
  }));
});
true ? Popover.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: refType_default,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: chainPropTypes(import_prop_types49.default.oneOfType([HTMLElementType, import_prop_types49.default.func]), (props) => {
    if (props.open && (!props.anchorReference || props.anchorReference === "anchorEl")) {
      const resolvedAnchorEl = resolveAnchorEl2(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${resolvedAnchorEl}\` instead.`].join("\n"));
      }
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: import_prop_types49.default.shape({
    horizontal: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["center", "left", "right"]), import_prop_types49.default.number]).isRequired,
    vertical: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["bottom", "center", "top"]), import_prop_types49.default.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: import_prop_types49.default.shape({
    left: import_prop_types49.default.number.isRequired,
    top: import_prop_types49.default.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: import_prop_types49.default.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: import_prop_types49.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types49.default.object,
  /**
   * @ignore
   */
  className: import_prop_types49.default.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types49.default.oneOfType([HTMLElementType, import_prop_types49.default.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types49.default.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: integerPropType_default,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: import_prop_types49.default.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: import_prop_types49.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types49.default.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: import_prop_types49.default.shape({
    component: elementTypeAcceptingRef_default
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: import_prop_types49.default.shape({
    paper: import_prop_types49.default.oneOfType([import_prop_types49.default.func, import_prop_types49.default.object]),
    root: import_prop_types49.default.oneOfType([import_prop_types49.default.func, import_prop_types49.default.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types49.default.shape({
    paper: import_prop_types49.default.elementType,
    root: import_prop_types49.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types49.default.oneOfType([import_prop_types49.default.arrayOf(import_prop_types49.default.oneOfType([import_prop_types49.default.func, import_prop_types49.default.object, import_prop_types49.default.bool])), import_prop_types49.default.func, import_prop_types49.default.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: import_prop_types49.default.shape({
    horizontal: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["center", "left", "right"]), import_prop_types49.default.number]).isRequired,
    vertical: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["bottom", "center", "top"]), import_prop_types49.default.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: import_prop_types49.default.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["auto"]), import_prop_types49.default.number, import_prop_types49.default.shape({
    appear: import_prop_types49.default.number,
    enter: import_prop_types49.default.number,
    exit: import_prop_types49.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: import_prop_types49.default.object
} : void 0;
var Popover_default = Popover;

// node_modules/@mui/material/Menu/menuClasses.js
function getMenuUtilityClass2(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
var menuClasses2 = generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);
var menuClasses_default = menuClasses2;

// node_modules/@mui/material/Menu/Menu.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var _excluded40 = ["onEntering"];
var _excluded211 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"];
var RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
var LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
var useUtilityClasses31 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass2, classes);
};
var MenuRoot = styled_default(Popover_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({});
var MenuPaper = styled_default(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles4) => styles4.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
});
var MenuMenuList = styled_default(MenuList_default, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles4) => styles4.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
var Menu3 = React79.forwardRef(function Menu4(inProps, ref) {
  var _slots$paper, _slotProps$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children: children2,
    className,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering
    } = {},
    variant = "selectedMenu",
    slots = {},
    slotProps = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded40), other = _objectWithoutPropertiesLoose(props, _excluded211);
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const ownerState = _extends({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  });
  const classes = useUtilityClasses31(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = React79.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  React79.Children.map(children2, (child, index2) => {
    if (!React79.isValidElement(child)) {
      return;
    }
    if (true) {
      if ((0, import_react_is2.isFragment)(child)) {
        console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index2;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index2;
      }
    }
  });
  const PaperSlot = (_slots$paper = slots.paper) != null ? _slots$paper : MenuPaper;
  const paperExternalSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : PaperProps;
  const rootSlotProps = useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  });
  const paperSlotProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: paperExternalSlotProps,
    ownerState,
    className: classes.paper
  });
  return (0, import_jsx_runtime63.jsx)(MenuRoot, _extends({
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      paper: PaperSlot,
      root: slots.root
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps
    },
    open,
    ref,
    transitionDuration,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState
  }, other, {
    classes: PopoverClasses,
    children: (0, import_jsx_runtime63.jsx)(MenuMenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant
    }, MenuListProps, {
      className: clsx_default(classes.list, MenuListProps.className),
      children: children2
    }))
  }));
});
true ? Menu3.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: import_prop_types50.default.oneOfType([HTMLElementType, import_prop_types50.default.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: import_prop_types50.default.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: import_prop_types50.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types50.default.object,
  /**
   * @ignore
   */
  className: import_prop_types50.default.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: import_prop_types50.default.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: import_prop_types50.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: import_prop_types50.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types50.default.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: import_prop_types50.default.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: import_prop_types50.default.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: import_prop_types50.default.shape({
    paper: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object]),
    root: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types50.default.shape({
    paper: import_prop_types50.default.elementType,
    root: import_prop_types50.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types50.default.oneOfType([import_prop_types50.default.arrayOf(import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object, import_prop_types50.default.bool])), import_prop_types50.default.func, import_prop_types50.default.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: import_prop_types50.default.oneOfType([import_prop_types50.default.oneOf(["auto"]), import_prop_types50.default.number, import_prop_types50.default.shape({
    appear: import_prop_types50.default.number,
    enter: import_prop_types50.default.number,
    exit: import_prop_types50.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: import_prop_types50.default.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: import_prop_types50.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var Menu_default = Menu3;

// node_modules/@mui/material/NativeSelect/NativeSelectInput.js
var React80 = __toESM(require_react());
var import_prop_types51 = __toESM(require_prop_types());

// node_modules/@mui/material/NativeSelect/nativeSelectClasses.js
function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiNativeSelect", slot);
}
var nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var nativeSelectClasses_default = nativeSelectClasses;

// node_modules/@mui/material/NativeSelect/NativeSelectInput.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var _excluded41 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"];
var useUtilityClasses32 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize_default(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
var nativeSelectSelectStyles = ({
  ownerState,
  theme
}) => _extends({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": _extends({}, theme.vars ? {
    backgroundColor: `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${nativeSelectClasses_default.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, ownerState.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, ownerState.variant === "outlined" && {
  borderRadius: (theme.vars || theme).shape.borderRadius,
  "&:focus": {
    borderRadius: (theme.vars || theme).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
});
var NativeSelectSelect = styled_default("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.select, styles4[ownerState.variant], ownerState.error && styles4.error, {
      [`&.${nativeSelectClasses_default.multiple}`]: styles4.multiple
    }];
  }
})(nativeSelectSelectStyles);
var nativeSelectIconStyles = ({
  ownerState,
  theme
}) => _extends({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (theme.vars || theme).palette.action.active,
  [`&.${nativeSelectClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}, ownerState.open && {
  transform: "rotate(180deg)"
}, ownerState.variant === "filled" && {
  right: 7
}, ownerState.variant === "outlined" && {
  right: 7
});
var NativeSelectIcon = styled_default("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.icon, ownerState.variant && styles4[`icon${capitalize_default(ownerState.variant)}`], ownerState.open && styles4.iconOpen];
  }
})(nativeSelectIconStyles);
var NativeSelectInput = React80.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    error,
    IconComponent,
    inputRef,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded41);
  const ownerState = _extends({}, props, {
    disabled,
    variant,
    error
  });
  const classes = useUtilityClasses32(ownerState);
  return (0, import_jsx_runtime65.jsxs)(React80.Fragment, {
    children: [(0, import_jsx_runtime64.jsx)(NativeSelectSelect, _extends({
      ownerState,
      className: clsx_default(classes.select, className),
      disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : (0, import_jsx_runtime64.jsx)(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: import_prop_types51.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types51.default.object,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types51.default.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: import_prop_types51.default.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: import_prop_types51.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types51.default.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: refType_default,
  /**
   * @ignore
   */
  multiple: import_prop_types51.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types51.default.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types51.default.func,
  /**
   * The input value.
   */
  value: import_prop_types51.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types51.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var NativeSelectInput_default = NativeSelectInput;

// node_modules/@mui/material/utils/useControlled.js
var useControlled_default = useControlled;

// node_modules/@mui/material/Select/selectClasses.js
function getSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
var selectClasses2 = generateUtilityClasses("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var selectClasses_default = selectClasses2;

// node_modules/@mui/material/Select/SelectInput.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var _span7;
var _excluded42 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
var SelectSelect = styled_default("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [
      // Win specificity over the input base
      {
        [`&.${selectClasses_default.select}`]: styles4.select
      },
      {
        [`&.${selectClasses_default.select}`]: styles4[ownerState.variant]
      },
      {
        [`&.${selectClasses_default.error}`]: styles4.error
      },
      {
        [`&.${selectClasses_default.multiple}`]: styles4.multiple
      }
    ];
  }
})(nativeSelectSelectStyles, {
  // Win specificity over the input base
  [`&.${selectClasses_default.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
var SelectIcon = styled_default("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.icon, ownerState.variant && styles4[`icon${capitalize_default(ownerState.variant)}`], ownerState.open && styles4.iconOpen];
  }
})(nativeSelectIconStyles);
var SelectNativeInput = styled_default("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles4) => styles4.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
function isEmpty2(display) {
  return display == null || typeof display === "string" && !display.trim();
}
var useUtilityClasses33 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize_default(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
var SelectInput = React81.forwardRef(function SelectInput2(props, ref) {
  var _MenuProps$slotProps;
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children: children2,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    error = false,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded42);
  const [value, setValueState] = useControlled_default({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled_default({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = React81.useRef(null);
  const displayRef = React81.useRef(null);
  const [displayNode, setDisplayNode] = React81.useState(null);
  const {
    current: isOpenControlled
  } = React81.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = React81.useState();
  const handleRef = useForkRef_default(ref, inputRefProp);
  const handleDisplayRef = React81.useCallback((node) => {
    displayRef.current = node;
    if (node) {
      setDisplayNode(node);
    }
  }, []);
  const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
  React81.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  React81.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  React81.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  React81.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label = ownerDocument_default(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", handler);
      return () => {
        label.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = React81.Children.toArray(children2);
  const handleChange = (event) => {
    const child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
    if (child === void 0) {
      return;
    }
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on macOS, but it's recommended by
        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  let foundMatch = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child) => {
    if (!React81.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is3.isFragment)(child)) {
        console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(true ? `MUI: The \`value\` prop must be an array when using the \`Select\` component with \`multiple\`.` : formatMuiErrorMessage(2));
      }
      selected = value.some((v) => areEqualValues(v, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    if (selected) {
      foundMatch = true;
    }
    return React81.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (true) {
    React81.useEffect(() => {
      if (!foundMatch && !multiple && value !== "") {
        const values2 = childrenArray.map((child) => child.props.value);
        console.warn([`MUI: You have provided an out-of-range value \`${value}\` for the select ${name ? `(name="${name}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${values2.filter((x) => x != null).map((x) => `\`${x}\``).join(", ") || '""'}.`].join("\n"));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index2) => {
          output.push(child);
          if (index2 < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0);
  const ownerState = _extends({}, props, {
    variant,
    value,
    open,
    error
  });
  const classes = useUtilityClasses33(ownerState);
  const paperProps = _extends({}, MenuProps.PaperProps, (_MenuProps$slotProps = MenuProps.slotProps) == null ? void 0 : _MenuProps$slotProps.paper);
  const listboxId = useId();
  return (0, import_jsx_runtime67.jsxs)(React81.Fragment, {
    children: [(0, import_jsx_runtime66.jsx)(SelectSelect, _extends({
      ref: handleDisplayRef,
      tabIndex,
      role: "combobox",
      "aria-controls": listboxId,
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus
    }, SelectDisplayProps, {
      ownerState,
      className: clsx_default(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty2(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span7 || (_span7 = (0, import_jsx_runtime66.jsx)("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : display
    })), (0, import_jsx_runtime66.jsx)(SelectNativeInput, _extends({
      "aria-invalid": error,
      value: Array.isArray(value) ? value.join(",") : value,
      name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      ownerState
    }, other)), (0, import_jsx_runtime66.jsx)(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), (0, import_jsx_runtime66.jsx)(Menu_default, _extends({
      id: `menu-${name || ""}`,
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, MenuProps, {
      MenuListProps: _extends({
        "aria-labelledby": labelId,
        role: "listbox",
        "aria-multiselectable": multiple ? "true" : void 0,
        disableListWrap: true,
        id: listboxId
      }, MenuProps.MenuListProps),
      slotProps: _extends({}, MenuProps.slotProps, {
        paper: _extends({}, paperProps, {
          style: _extends({
            minWidth: menuMinWidth
          }, paperProps != null ? paperProps.style : null)
        })
      }),
      children: items
    }))]
  });
});
true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types52.default.string,
  /**
   * @ignore
   */
  "aria-label": import_prop_types52.default.string,
  /**
   * @ignore
   */
  autoFocus: import_prop_types52.default.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: import_prop_types52.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: import_prop_types52.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types52.default.object,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types52.default.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: import_prop_types52.default.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types52.default.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: import_prop_types52.default.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: import_prop_types52.default.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: import_prop_types52.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types52.default.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: refType_default,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types52.default.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: import_prop_types52.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: import_prop_types52.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types52.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types52.default.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: import_prop_types52.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types52.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types52.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types52.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types52.default.bool,
  /**
   * @ignore
   */
  readOnly: import_prop_types52.default.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types52.default.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types52.default.object,
  /**
   * @ignore
   */
  tabIndex: import_prop_types52.default.oneOfType([import_prop_types52.default.number, import_prop_types52.default.string]),
  /**
   * @ignore
   */
  type: import_prop_types52.default.any,
  /**
   * The input value.
   */
  value: import_prop_types52.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types52.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var SelectInput_default = SelectInput;

// node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
var React84 = __toESM(require_react());

// node_modules/@mui/material/utils/createSvgIcon.js
var React83 = __toESM(require_react());

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var React82 = __toESM(require_react());
var import_prop_types53 = __toESM(require_prop_types());

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
var svgIconClasses_default = svgIconClasses;

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var _excluded43 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
var useUtilityClasses34 = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.color !== "inherit" && styles4[`color${capitalize_default(ownerState.color)}`], styles4[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
var SvgIcon = React82.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children: children2,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded43);
  const hasSvgAsChild = React82.isValidElement(children2) && children2.type === "svg";
  const ownerState = _extends({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses34(ownerState);
  return (0, import_jsx_runtime69.jsxs)(SvgIconRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children2.props, {
    ownerState,
    children: [hasSvgAsChild ? children2.props.children : children2, titleAccess ? (0, import_jsx_runtime68.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types53.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types53.default.object,
  /**
   * @ignore
   */
  className: import_prop_types53.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: import_prop_types53.default.oneOfType([import_prop_types53.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types53.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types53.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: import_prop_types53.default.oneOfType([import_prop_types53.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types53.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types53.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types53.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types53.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types53.default.oneOfType([import_prop_types53.default.arrayOf(import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object, import_prop_types53.default.bool])), import_prop_types53.default.func, import_prop_types53.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types53.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types53.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/utils/createSvgIcon.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime70.jsx)(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React83.memo(React83.forwardRef(Component));
}

// node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var ArrowDropDown_default = createSvgIcon((0, import_jsx_runtime71.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");

// node_modules/@mui/material/Select/Select.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var _excluded44 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"];
var _excluded212 = ["root"];
var useUtilityClasses35 = (ownerState) => {
  const {
    classes
  } = ownerState;
  return classes;
};
var styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles4) => styles4.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
};
var StyledInput = styled_default(Input_default, styledRootConfig)("");
var StyledOutlinedInput = styled_default(OutlinedInput_default, styledRootConfig)("");
var StyledFilledInput = styled_default(FilledInput_default, styledRootConfig)("");
var Select3 = React85.forwardRef(function Select4(inProps, ref) {
  const props = useThemeProps({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children: children2,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDown_default,
    id,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded44);
  const inputComponent = native ? NativeSelectInput_default : SelectInput_default;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  });
  const variant = fcs.variant || variantProp;
  const ownerState = _extends({}, props, {
    variant,
    classes: classesProp
  });
  const classes = useUtilityClasses35(ownerState);
  const restOfClasses = _objectWithoutPropertiesLoose(classes, _excluded212);
  const InputComponent = input || {
    standard: (0, import_jsx_runtime72.jsx)(StyledInput, {
      ownerState
    }),
    outlined: (0, import_jsx_runtime72.jsx)(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: (0, import_jsx_runtime72.jsx)(StyledFilledInput, {
      ownerState
    })
  }[variant];
  const inputComponentRef = useForkRef_default(ref, InputComponent.ref);
  return (0, import_jsx_runtime72.jsx)(React85.Fragment, {
    children: React85.cloneElement(InputComponent, _extends({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: _extends({
        children: children2,
        error: fcs.error,
        IconComponent,
        variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple
      }, native ? {
        id
      } : {
        autoWidth,
        defaultOpen,
        displayEmpty,
        labelId,
        MenuProps,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps: _extends({
          id
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? deepmerge(restOfClasses, inputProps.classes) : restOfClasses
      }, input ? input.props.inputProps : {})
    }, multiple && native && variant === "outlined" ? {
      notched: true
    } : {}, {
      ref: inputComponentRef,
      className: clsx_default(InputComponent.props.className, className, classes.root)
    }, !input && {
      variant
    }, other))
  });
});
true ? Select3.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: import_prop_types54.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: import_prop_types54.default.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: import_prop_types54.default.object,
  /**
   * @ignore
   */
  className: import_prop_types54.default.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: import_prop_types54.default.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types54.default.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: import_prop_types54.default.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: import_prop_types54.default.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: import_prop_types54.default.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: import_prop_types54.default.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: import_prop_types54.default.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: import_prop_types54.default.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types54.default.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: import_prop_types54.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: import_prop_types54.default.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: import_prop_types54.default.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: import_prop_types54.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types54.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types54.default.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: import_prop_types54.default.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types54.default.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types54.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types54.default.oneOfType([import_prop_types54.default.arrayOf(import_prop_types54.default.oneOfType([import_prop_types54.default.func, import_prop_types54.default.object, import_prop_types54.default.bool])), import_prop_types54.default.func, import_prop_types54.default.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: import_prop_types54.default.oneOfType([import_prop_types54.default.oneOf([""]), import_prop_types54.default.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types54.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
Select3.muiName = "Select";
var Select_default = Select3;

// node_modules/@mui/material/TextField/textFieldClasses.js
function getTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiTextField", slot);
}
var textFieldClasses = generateUtilityClasses("MuiTextField", ["root"]);
var textFieldClasses_default = textFieldClasses;

// node_modules/@mui/material/TextField/TextField.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var _excluded45 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
var variantComponent = {
  standard: Input_default,
  filled: FilledInput_default,
  outlined: OutlinedInput_default
};
var useUtilityClasses36 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTextFieldUtilityClass, classes);
};
var TextFieldRoot = styled_default(FormControl_default, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({});
var TextField = React86.forwardRef(function TextField2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTextField"
  });
  const {
    autoComplete,
    autoFocus = false,
    children: children2,
    className,
    color = "primary",
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps,
    type,
    value,
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded45);
  const ownerState = _extends({}, props, {
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = useUtilityClasses36(ownerState);
  if (true) {
    if (select && !children2) {
      console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
    }
  }
  const InputMore = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }
  if (select) {
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = void 0;
    }
    InputMore["aria-describedby"] = void 0;
  }
  const id = useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label && id ? `${id}-label` : void 0;
  const InputComponent = variantComponent[variant];
  const InputElement = (0, import_jsx_runtime73.jsx)(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    maxRows,
    minRows,
    type,
    value,
    id,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps
  }, InputMore, InputProps));
  return (0, import_jsx_runtime74.jsxs)(TextFieldRoot, _extends({
    className: clsx_default(classes.root, className),
    disabled,
    error,
    fullWidth,
    ref,
    required,
    color,
    variant,
    ownerState
  }, other, {
    children: [label != null && label !== "" && (0, import_jsx_runtime73.jsx)(InputLabel_default, _extends({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? (0, import_jsx_runtime73.jsx)(Select_default, _extends({
      "aria-describedby": helperTextId,
      id,
      labelId: inputLabelId,
      value,
      input: InputElement
    }, SelectProps, {
      children: children2
    })) : InputElement, helperText && (0, import_jsx_runtime73.jsx)(FormHelperText_default, _extends({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
true ? TextField.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types55.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types55.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types55.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types55.default.object,
  /**
   * @ignore
   */
  className: import_prop_types55.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types55.default.oneOfType([import_prop_types55.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types55.default.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types55.default.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types55.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: import_prop_types55.default.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types55.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types55.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types55.default.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types55.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types55.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types55.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types55.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types55.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types55.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: import_prop_types55.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types55.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types55.default.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types55.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types55.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types55.default.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types55.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: import_prop_types55.default.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: import_prop_types55.default.object,
  /**
   * The size of the component.
   */
  size: import_prop_types55.default.oneOfType([import_prop_types55.default.oneOf(["medium", "small"]), import_prop_types55.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types55.default.oneOfType([import_prop_types55.default.arrayOf(import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object, import_prop_types55.default.bool])), import_prop_types55.default.func, import_prop_types55.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types55.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types55.default.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types55.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var TextField_default = TextField;

export {
  capitalize_default,
  getSvgIconUtilityClass,
  svgIconClasses_default,
  SvgIcon_default,
  createSvgIcon,
  debounce_default,
  isMuiElement_default,
  ownerDocument_default,
  ownerWindow_default,
  useEnhancedEffect_default2 as useEnhancedEffect_default,
  useControlled_default,
  useForkRef_default,
  require_react_is,
  Transition_default,
  TransitionGroup_default,
  reflow,
  getTransitionProps,
  getPaperUtilityClass,
  paperClasses_default,
  Paper_default,
  useBadge,
  ClickAwayListener,
  FocusTrap,
  Portal,
  Popper,
  ModalManager,
  NoSsr,
  valueToPercent,
  useSlider,
  useSnackbar,
  TextareaAutosize,
  createFilterOptions,
  useAutocomplete,
  formControlState,
  FormControlContext_default,
  useFormControl,
  GlobalStyles_default2 as GlobalStyles_default,
  getInputBaseUtilityClass,
  inputBaseClasses_default,
  InputBase_default,
  getInputUtilityClass2 as getInputUtilityClass,
  inputClasses_default,
  getOutlinedInputUtilityClass,
  outlinedInputClasses_default,
  getFilledInputUtilityClass,
  filledInputClasses_default,
  ArrowDropDown_default,
  Fade_default,
  getBackdropUtilityClass,
  backdropClasses_default,
  Backdrop_default,
  getModalUtilityClass2 as getModalUtilityClass,
  modalClasses_default,
  Modal_default,
  FilledInput_default,
  getFormControlUtilityClasses,
  formControlClasses_default,
  FormControl_default,
  getFormHelperTextUtilityClasses,
  formHelperTextClasses_default,
  FormHelperText_default,
  getFormLabelUtilityClasses,
  formLabelClasses_default,
  FormLabelRoot,
  FormLabel_default,
  Grow_default,
  Input_default,
  getInputLabelUtilityClasses,
  inputLabelClasses_default,
  InputLabel_default,
  ListContext_default,
  getListUtilityClass,
  listClasses_default,
  List_default,
  MenuList_default,
  getPopoverUtilityClass,
  popoverClasses_default,
  getOffsetTop,
  getOffsetLeft,
  PopoverRoot,
  PopoverPaper,
  Popover_default,
  getMenuUtilityClass2 as getMenuUtilityClass,
  menuClasses_default,
  Menu_default,
  getNativeSelectUtilityClasses,
  nativeSelectClasses_default,
  NativeSelectInput_default,
  OutlinedInput_default,
  getSelectUtilityClasses,
  selectClasses_default,
  Select_default,
  getTextFieldUtilityClass,
  textFieldClasses_default,
  TextField_default
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/base/index.js:
  (**
   * @mui/base v5.0.0-beta.31
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-LM2QDEYC.js.map
