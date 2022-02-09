/**
 * Default storage value
 */
export const default_sync_storage = {
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
        description: 'Left sidebar name, chatter name, right sidebar name, etc',
        type: Boolean,
        value: true,
      },
      message: {
        name: 'message',
        label: 'Message',
        description: 'Left sidebar message, call block, chatter message, etc',
        type: Boolean,
        value: true,
      },
      chatbox: {
        name: 'chatbox',
        label: 'Chatbox',
        description: 'Chatbox',
        type: Boolean,
        value: false,
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
export const default_local_storage = {
  filter_update_interval: {
    name: 'filter_update_interval',
    label: 'Filter update interval',
    description: 'Filter update interval',
    type: 'daily', // ['daily', 'weekly', 'monthly', 'never','manual']
  },
}

/**
 * Convert object to key-value only
 * @param {*} object
 * @returns
 */
function objectToKeyValueOnly(object) {
  if (typeof object === 'object') {
    Object.entries(object).forEach(([key, value]) => {
      value = value.value
      value = typeof value === 'object' ? objectToKeyValueOnly(value) : value
      object[key] = value
    })
  }
  return object
}
/**
 * Get a value from config
 */
function mergeStorageObject(default_storage_value, current_value) {
  default_storage_value = objectToKeyValueOnly(default_storage_value)
  let new_storage = default_storage_value
  if (current_value !== null) {
    Object.entries(current_value).forEach(([key, value]) => {
      if (Object.prototype.hasOwnProperty.call(default_storage_value, key)) {
        new_storage[key] = value
      }
    })
  }
  return new_storage
}
/**
 * Merge current storage with default storage
 */
export function mergeStorage(storage) {
  switch (storage) {
    case 'sync':
      chrome.storage.sync.get(null, (result) => {
        let newStorage = mergeStorageObject(default_sync_storage, result)
        chrome.storage.sync.set(newStorage)
      })
      return true
    case 'local':
      chrome.storage.local.get(null, (result) => {
        let newStorage = mergeStorageObject(default_local_storage, result)
        chrome.storage.local.set(newStorage)
      })
      return true
    default:
      return false
  }
}
