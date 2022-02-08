class Configs {
  constructor() {
    this.defaultConfigs = {
      protect_status: {
        name: 'protect_status',
        label: 'Protect status',
        description: 'Protect status',
        type: Boolean,
        value: true,
      },
      protect_type: {
        name: 'protect_type',
        label: 'Protect type',
        description: 'Protect type',
        type: String,
        value: 'blur',
      },
      protect_items: {
        name: 'protect_items',
        label: 'Protect items',
        description: 'Protect items',
        type: Object,
        value: {
          general: {
            name: 'general',
            label: 'General items',
            description: 'Tooltip, etc',
            type: Boolean,
            value: true,
          },
          image: {
            name: 'image',
            label: 'Image',
            description:
              'Avatar, icon message, seen avatar icon, seen avatar icon in group, video, chatter avatar, etc',
            type: Boolean,
            value: true,
          },
          name: {
            name: 'name',
            label: 'Name',
            description:
              'Left sidebar name, chatter name, right sidebar name, etc',
            type: Boolean,
            value: true,
          },
          message: {
            name: 'message',
            label: 'Message',
            description:
              'Left sidebar message, call block, chatter message, etc',
            type: String,
            value: true,
          },
        },
      },
      protect_level: {
        name: 'protect_level',
        label: 'Protect level',
        description: 'Protect level',
        type: Number,
        value: 8,
      },
      display_type: {
        name: 'display_type',
        label: 'Display type',
        description: 'Display type',
        type: String,
        value: 'hover',
      },
    }
  }
  /**
   * Convert object to key-value only
   * @param {*} object
   * @returns
   */
  toKeyValueOnly(object) {
    return Object.entries(object).map(([key, value]) => {
      value = typeof value === 'object' ? this.toKeyValueOnly(value) : value
      return {
        key,
        value,
      }
    })
  }
  /**
   * Get a value from config
   */
  merge(configs = null) {
    if (configs) {
      let configsObject = this.defaultConfigs
      Object.entries(configs).forEach(([key, value]) => {
        if (Object.prototype.hasOwnProperty.call(this.defaultConfigs, key)) {
          configsObject[key].value = value
        }
      })
    }
    return this.defaultConfigs
  }
  /**
   * Object comes last will overwrite any property with the same key before it.
   * @param {*} defaultObject
   * @param {*} overwriteObject
   * @returns
   */
  mergeForContent(configs = null) {
    return this.toKeyValueOnly(this.merge(configs))
  }
}

export default new Configs()
