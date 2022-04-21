import LText from "@/components/LText";
import { shallowMount } from '@vue/test-utils'

describe('LText.vue', ()=>{
    const msg = 'test'
    const { location } = window
    beforeEach(()=>{
        Object.defineProperty(window, 'location', {
            writable: true,
            value: {href: ""}
        })
    })
    afterEach(()=>{
        window.location = location
    })
    it('should contain some styles', ()=>{
        const wrapper = shallowMount(LText, {
            props: {
                text: msg
            }
        })
        console.log(wrapper.html())
        expect(wrapper.text()).toBe(msg)
        expect(wrapper.element.tagName).toBe('DIV')
        const style = wrapper.attributes().style
        expect(style.includes('font-size')).toBeTruthy()
        expect(style.includes('url')).toBeFalsy()
    })

    it('LText with actionType and URL should trigger location href change', async ()=>{
        const props = {
            actionType: 'url',
            url: 'http://dummy.url',
            tag: 'h2'
        }
        const wrapper = shallowMount(LText, {
            props
        })
        console.log(wrapper.html())
        await wrapper.trigger('click')
        expect(window.location.href).toBe('http://dummy.url')
    })
})