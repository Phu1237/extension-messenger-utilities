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
    value: {
      blur: {
        name: 'blur',
        label: 'Blur',
        description: 'Blur',
        type: String,
        value: 'blur',
      },
      reverse: {
        name: 'reverse',
        label: 'Reverse',
        description: 'Reverse',
        type: String,
        value: 'reverse',
      },
    },
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
    value: {
      hover: {
        name: 'hover',
        label: 'Hover',
        description: 'Hover',
        type: String,
        value: 'hover',
      },
    },
  },
}
export const default_local_storage = {
  filter_update_interval: {
    name: 'filter_update_interval',
    label: 'Filter update interval',
    description: 'Filter update interval',
    type: String,
    value: 'daily', // ['daily', 'weekly', 'monthly', 'startup','manual']
  },
}
