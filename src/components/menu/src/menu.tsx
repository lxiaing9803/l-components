import {defineComponent, PropType, useAttrs} from 'vue'
import {MenuItem} from "@/components/menu/src/types";
import * as Icons from '@element-plus/icons-vue'
import './styles/index.scss'

export default defineComponent({
    props: {
        /**导航数据 */
        data: {
            type: Array as PropType<MenuItem[]>,
            default: () => [],
        },
        /**默认激活的导航项 */
        defaultActive: {
            type: String,
            default: "",
        },
        /**是否是路由模式 */
        router: {type: Boolean, default: false},
        /**菜单标题键名 */
        name: {
            type: String,
            default: 'name'
        },
        /**菜单标识键名 */
        index: {
            type: String,
            default: 'index'
        },
        /**菜单图标键名 */
        icon: {
            type: String,
            default: 'icon'
        },
        /**菜单子菜单键名 */
        children: {
            type: String,
            default: 'children'
        },
    },
    setup(props, ctx) {

        /** 渲染无限层级 */
        const renderMenu = (data: any[]) => {
            return data.map((item) => {
                // 每个菜单的图标
                item.i = (Icons as any)[item[props.icon]!]
                console.log(item.i)
                // 处理插槽
                const slots = {
                    title: () => {
                        return (
                            <>
                                <item.i/>
                                <span>{item[props.name]}</span>
                            </>
                        )
                    }
                }
                // 递归渲染children
                if (item[props.children] && item[props.children].length) {
                    return (
                        <el-sub-menu index={item[props.index]} v-slots={slots}>
                            {renderMenu(item[props.children])}
                        </el-sub-menu>
                    )
                }
                // 直接渲染无children的菜单
                return <el-menu-item index={item[props.index]}>
                    <item.i/>
                    <span>{item[props.name]}</span>
                </el-menu-item>
            })
        }

        const attrs = useAttrs()

        return () => {
            return (
                <el-menu class='menu-icon-svg ' default-active={props.defaultActive} router={props.router} {...attrs}>
                    {renderMenu(props.data)}
                </el-menu>
            )
        }
    }
})