import {
  useCompoundItem,
  useTabsContext
} from "./chunk-VWTFQWJK.js";
import {
  useClassNamesOverride,
  useSlotProps
} from "./chunk-YRGXRI36.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types,
  useForkRef,
  useId
} from "./chunk-FAXPGAJV.js";
import {
  __toESM,
  require_react
} from "./chunk-BHZAVQOK.js";

// node_modules/@mui/base/TabPanel/TabPanel.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/base/TabPanel/tabPanelClasses.js
function getTabPanelUtilityClass(slot) {
  return generateUtilityClass("MuiTabPanel", slot);
}
var tabPanelClasses = generateUtilityClasses("MuiTabPanel", ["root", "hidden"]);

// node_modules/@mui/base/useTabPanel/useTabPanel.js
var React = __toESM(require_react());
function tabPanelValueGenerator(otherTabPanelValues) {
  return otherTabPanelValues.size;
}
function useTabPanel(parameters) {
  const {
    value: valueParam,
    id: idParam,
    rootRef: externalRef
  } = parameters;
  const context = useTabsContext();
  if (context === null) {
    throw new Error("No TabContext provided");
  }
  const {
    value: selectedTabValue,
    getTabId
  } = context;
  const id = useId(idParam);
  const ref = React.useRef(null);
  const handleRef = useForkRef(ref, externalRef);
  const metadata = React.useMemo(() => ({
    id,
    ref
  }), [id]);
  const {
    id: value
  } = useCompoundItem(valueParam != null ? valueParam : tabPanelValueGenerator, metadata);
  const hidden = value !== selectedTabValue;
  const correspondingTabId = value !== void 0 ? getTabId(value) : void 0;
  const getRootProps = (externalProps = {}) => {
    return _extends({
      "aria-labelledby": correspondingTabId != null ? correspondingTabId : void 0,
      hidden,
      id: id != null ? id : void 0
    }, externalProps, {
      ref: handleRef
    });
  };
  return {
    hidden,
    getRootProps,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/TabPanel/TabPanel.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "value", "slotProps", "slots"];
var useUtilityClasses = (ownerState) => {
  const {
    hidden
  } = ownerState;
  const slots = {
    root: ["root", hidden && "hidden"]
  };
  return composeClasses(slots, useClassNamesOverride(getTabPanelUtilityClass));
};
var TabPanel = React2.forwardRef(function TabPanel2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    hidden,
    getRootProps
  } = useTabPanel(props);
  const ownerState = _extends({}, props, {
    hidden
  });
  const classes = useUtilityClasses(ownerState);
  const TabPanelRoot = (_slots$root = slots.root) != null ? _slots$root : "div";
  const tabPanelRootProps = useSlotProps({
    elementType: TabPanelRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tabpanel",
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime.jsx)(TabPanelRoot, _extends({}, tabPanelRootProps, {
    children: !hidden && children
  }));
});
true ? TabPanel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The props used for each slot inside the TabPanel.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside the TabPanel.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The value of the TabPanel. It will be shown when the Tab with the corresponding value is selected.
   * If not provided, it will fall back to the index of the panel.
   * It is recommended to explicitly provide it, as it's required for the tab panel to be rendered on the server.
   */
  value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string])
} : void 0;

export {
  getTabPanelUtilityClass,
  tabPanelClasses,
  TabPanel
};
//# sourceMappingURL=chunk-KMRTALQX.js.map
