
/**
 * linxueqing
 * 2020-7-29
 * 通过创建*.d.ts文件，兼容TS理解.vue文件
 */
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
