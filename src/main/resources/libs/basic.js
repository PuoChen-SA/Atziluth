const Bukkit = Packages.org.bukkit.Bukkit
const ItemStack = Packages.org.bukkit.inventory.ItemStack
const Material = Packages.org.bukkit.inventory.Material
const Reflex = Packages.me.mkbaka.atziluth.internal.utils.ReflexUtil.INSTANCE

const logger = Bukkit.getLogger()

/**
 * 向后台输出消息
 * @param any
 */
const info = function (any) {
    logger.info(any)
}

/**
 * 向后台输出警告
 * @param any
 */
const warn = function (any) {
    logger.warning(any)
}

/**
 * 向后台输出错误
 * @param any
 */
const error = function (any) {
    logger.severe(any)
}

/**
 * 将js数组转换为ArrayList
 * @param array 数组
 * @returns java.util.ArrayList
 */
const toList = function (array) {
    const newList = new java.util.ArrayList()
    for (let i in array) {
        newList.add(array[i])
    }
    return newList
}

/**
 * 将多个参数变为List集合
 * @param {...any} any 参数列表
 * @returns java.util.ArrayList
 */
const listOf = function () {
    const array = new java.util.ArrayList()
    for (let i in arguments) {
        array.add(arguments[i])
    }
    return array
}

/**
 * 初始化全局变量
 * 省掉this关键字 且支持所有函数内直接调用 不必再挨个传参
 * 如果你不知道该函数有什么作用
 * 请不要 调用 或 修改 甚至是 删除
 */
function initGlobalVariables() {
    Adapter = this.Attr
    Attr = Adapter.inst
    attacker = this.attacker
    entity = this.entity
}