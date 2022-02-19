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
    description: 'Type of protection',
    type: String,
    value: 'blur',
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
    value: {
      general: true,
      image: true,
      name: true,
      message: true,
    },
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
    value: 'hover',
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
      'List of chat will be hidden. One hidden chat id per line.<br/>- How to get:<br/>https://www.messenger.com/t/<b>1xxxxxxxxxxxxxx</b><br/>=> 1xxxxxxxxxxxxxx',
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
