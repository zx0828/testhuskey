import { createApp } from 'vue'
import App from '@/App.vue'
//国际化引入
//忽略ts的检查
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//element-plus完整使用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
//国际化配置
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
//输出环境中的值
console.log(import.meta.env)
