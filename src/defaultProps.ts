import { mapValues, without } from "lodash-es"

export const commonDefaultProps = {
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
export const textDefaultProps = {
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

export const isEditingProp = {
  isEditing: {
    type: Boolean,
    default: false
  }
}

export const textStylePropNames = without(Object.keys(textDefaultProps), "actionType", "url", "text")

export const tranformToComponentProps = <T extends {[key: string]: any}>(props: T) => {
    const mapProps = mapValues(props, item=>{
        return {
            type: item.constructor,
            default: item
        }
    })
    return {...mapProps, ...isEditingProp}
}
