import { computed, defineComponent, openBlock, createBlock, resolveDynamicComponent, normalizeStyle, withCtx, createTextVNode, toDisplayString } from 'vue';
import { without, mapValues, pick } from 'lodash-es';

const commonDefaultProps = {
    // actions
    actionType: "",
    url: "",
    // size
    height: "",
    width: "",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingTop: "0px",
    paddingBottom: "0px",
    // border type
    borderStyle: "none",
    borderColor: "#000",
    borderWidth: "0",
    borderRadius: "0",
    // shadow and opacity
    boxShadow: "0 0 0 #000000",
    opacity: 1,
    // position and x,y
    position: "absolute",
    left: "0",
    top: "0",
    right: "0",
};
const textDefaultProps = {
    // basic props - font styles
    text: "默认文本",
    fontSize: "14px",
    fontFamily: "",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    lineHeight: "1",
    textAlign: "center",
    color: "#000000",
    backgroundColor: "",
    ...commonDefaultProps,
    width: "318px",
};
const isEditingProp = {
    isEditing: {
        type: Boolean,
        default: false
    }
};
const textStylePropNames = without(Object.keys(textDefaultProps), "actionType", "url", "text");
const tranformToComponentProps = (props) => {
    const mapProps = mapValues(props, item => {
        return {
            type: item.constructor,
            default: item
        };
    });
    return { ...mapProps, ...isEditingProp };
};

// import { pick } from 'lodash-es'
const useComponentCommon = (props, picks) => {
    const styleProps = computed(() => pick(props, picks));
    const handleClick = () => {
        if (props.actionType === "url" && props.url) {
            window.location.href = props.url;
        }
    };
    return {
        styleProps,
        handleClick
    };
};

const defaultProps = tranformToComponentProps(textDefaultProps);
var script = defineComponent({
    name: "LText",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        ...defaultProps
    },
    setup(props) {
        const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
        return {
            styleProps,
            handleClick
        };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-text-component",
    onClick: _ctx.handleClick
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.text), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["style", "onClick"]))
}

script.render = render;
script.__scopeId = "data-v-6bf95b7a";
script.__file = "src/components/LText/LText.vue";

script.install = (app) => {
    app.component(script.name, script);
};

const components = [
    script
];
const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};

export { script as LText, install as default, install };
