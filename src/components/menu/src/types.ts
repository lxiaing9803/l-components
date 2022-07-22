export interface MenuItem {
    /**导航名称 */
    name: string
    /**导航标识 */
    index: string
    /**导航图标 */
    icon?: any
    /**处理之后的图标 */
    i?: string;
    /**子菜单 */
    children?: MenuItem[]
}
