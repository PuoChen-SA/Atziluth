package me.mkbaka.atziluth.internal.register.impl.attributeplus

import me.mkbaka.atziluth.internal.register.AttributeFactory
import me.mkbaka.atziluth.internal.register.AttributeType
import org.serverct.ersha.AttributePlus

object AttributePlusImpl : AttributeFactory<AttributePlusAdapter>() {

    private val manager by lazy { AttributePlus.attributeManager }
    private val attrScriptManager by lazy { AttributePlus.attrScriptManager }

    override fun registerAttribute(customAttribute: AttributePlusAdapter) {
        manager.registerAttribute(customAttribute.inst)
    }

    override fun reload() {
        manager.reload()
        attrScriptManager.registerScriptAttribute()
    }

    override fun buildAttribute(
        priority: Int,
        name: String,
        placeholder: String,
        combatPower: Double,
        type: AttributeType
    ): AttributePlusAdapter {
        return AttributePlusAdapter(priority, name, placeholder, combatPower, type)
    }

    override fun isAttribute(name: String): Boolean {
        return manager.attributeNameList.containsKey(name)
    }

    override fun getAllAttributeNames(): Collection<String> {
        return manager.attributeNameList.map { it.key }
    }

}