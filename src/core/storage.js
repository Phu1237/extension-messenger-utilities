/**
 * Default storage value
 */
export const default_sync_storage = {
  protect_status: {
    name: 'protect_status',
    label: 'Protect status',
    description: 'Protect status',
    type: Boolean,
  },
  protect_type: {
    name: 'protect_type',
    label: 'Protect type',
    description: 'Type of protection',
    type: String,
    options: {
      none: {
        name: 'none',
        label: 'None',
        description: 'None',
        type: String,
      },
      blur: {
        name: 'blur',
        label: 'Blur',
        description: 'Blur the content',
        type: String,
      },
      reverse: {
        name: 'reverse',
        label: 'Reverse',
        description: 'Reverse the content',
        type: String,
      },
    },
  },
  protect_items: {
    name: 'protect_items',
    label: 'Protect items',
    description: 'Items to protect',
    type: Object,
    options: {
      general: {
        name: 'general',
        label: 'General items',
        description: 'Tooltip, etc',
        type: Boolean,
      },
      image: {
        name: 'image',
        label: 'Image',
        description:
          'Avatar, icon message, seen avatar icon, seen avatar icon in group, video, chatter avatar, etc',
        type: Boolean,
      },
      name: {
        name: 'name',
        label: 'Name',
        description: 'Left sidebar name, chatter name, right sidebar name, etc',
        type: Boolean,
      },
      message: {
        name: 'message',
        label: 'Message',
        description: 'Left sidebar message, call block, chatter message, etc',
        type: Boolean,
      },
      chatbox: {
        name: 'chatbox',
        label: 'Chatbox',
        description: 'Chatbox',
        type: Boolean,
      },
    },
  },
  protect_level: {
    name: 'protect_level',
    label: 'Protect level',
    description: 'Level of protection',
    type: Number,
    value: 8,
  },
  display_type: {
    name: 'display_type',
    label: 'Display type',
    description: 'Type of display event to unprotect',
    type: String,
    options: {
      none: {
        name: 'none',
        label: 'None',
        description: 'None',
        type: String,
      },
      hover: {
        name: 'hover',
        label: 'Hover',
        description: 'Hover the content',
        type: String,
      },
    },
  },
  hide_status: {
    name: 'hide_status',
    label: 'Hide status',
    description: 'Hide status',
    type: Boolean,
    value: true,
  },
  hide_list: {
    name: 'hide_list',
    label: 'Hide list',
    description:
      'List of chat will be hidden. One hidden chat id per line.<br/>- How to get:<br/>https://www.messenger.com/t/1xxxxxxxxxxxxxx<br/>=> 1xxxxxxxxxxxxxx',
    placeholder: '1xxxxxxxxxxxxxx\n1xxxxxxxxxxxxxx',
    type: String,
    value: '',
  },
}
export const default_local_storage = {
  update_interval: {
    name: 'update_interval',
    label: 'Update interval',
    description: 'Update interval',
    type: String,
    value: 'startup', // ['daily', 'weekly', 'monthly', 'startup','manual']
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
      value = value.value ?? value
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
  console.log('mergeStorageObject', default_storage_value, current_value)
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
