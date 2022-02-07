class Configs {
  constructor() {
    this.defaultConfigs = [
      {
        name: 'protect_status',
        value: 'enable',
      },
      {
        name: 'protect_type',
        value: 'blur',
      },
      {
        name: 'protect_items',
        value: ['general', 'image', 'message', 'name'],
      },
      {
        name: 'protect_level',
        value: '8',
      },
      {
        name: 'display_type',
        value: 'hover',
      },
    ]
  }
  configsKeyValue() {
    let keys = this.defaultConfigs.map((config) => {
      return config.name
    })
    let values = this.defaultConfigs.map((config) => {
      return config.value
    })
    let configs = {}
    keys.forEach((key, i) => (configs[key] = values[i]))
    return configs
  }
  /**
   * Get a value from config
   */
  merge(configs = null) {
    return Object.assign(this.configsKeyValue(this.defaultConfigs), configs)
  }
}

export default new Configs()
