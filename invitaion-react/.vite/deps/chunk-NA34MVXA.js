import {
  useButton
} from "./chunk-Q4LNWEAQ.js";
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
  require_prop_types
} from "./chunk-FAXPGAJV.js";
import {
  __toESM,
  require_react
} from "./chunk-BHZAVQOK.js";

// node_modules/@mui/base/Button/Button.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/base/Button/buttonClasses.js
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "active", "disabled", "focusVisible"]);

// node_modules/@mui/base/Button/Button.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["action", "children", "disabled", "focusableWhenDisabled", "onFocusVisible", "slotProps", "slots"];
var useUtilityClasses = (ownerState) => {
  const {
    active,
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active"]
  };
  return composeClasses(slots, useClassNamesOverride(getButtonUtilityClass));
};
var Button = React.forwardRef(function Button2(props, forwardedRef) {
  var _slots$root;
  const {
    action,
    children,
    focusableWhenDisabled = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const buttonRef = React.useRef();
  const {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    focusableWhenDisabled
  }));
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    active,
    focusableWhenDisabled,
    focusVisible
  });
  const classes = useUtilityClasses(ownerState);
  const defaultElement = other.href || other.to ? "a" : "button";
  const Root = (_slots$root = slots.root) != null ? _slots$root : defaultElement;
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
  return (0, import_jsx_runtime.jsx)(Root, _extends({}, rootProps, {
    children
  }));
});
true ? Button.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({
    current: import_prop_types.default.shape({
      focusVisible: import_prop_types.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, allows a disabled button to receive focus.
   * @default false
   */
  focusableWhenDisabled: import_prop_types.default.bool,
  /**
   * @ignore
   */
  href: import_prop_types.default.string,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types.default.func,
  /**
   * The props used for each slot inside the Button.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside the Button.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * @ignore
   */
  to: import_prop_types.default.string
} : void 0;

export {
  getButtonUtilityClass,
  buttonClasses,
  Button
};
//# sourceMappingURL=chunk-NA34MVXA.js.map
