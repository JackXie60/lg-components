<template>
  <component :is="tag" :style="styleProps" class="l-text-component" @click="handleClick">
      {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { textDefaultProps, tranformToComponentProps, textStylePropNames } from "../../defaultProps"
import useComponentCommon from "../../hooks/useComponentCommon"
const defaultProps = tranformToComponentProps(textDefaultProps)
export default defineComponent({
    name: "LText",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        ...defaultProps
    },
    setup(props) {
        const {styleProps, handleClick} = useComponentCommon(props, textStylePropNames)

        return {
            styleProps,
            handleClick
        }
    }
})
</script>

<style scoped>
.l-text-component {
    box-sizing: border-box;
    white-space: pre-wrap;
    position: relative!important;
}
</style>
