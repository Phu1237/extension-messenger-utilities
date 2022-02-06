class Helpers {
    // Declare variable
    inDebugMode;


    constructor() {
        this.inDebugMode = process.env.VITE_APP_DEBUG === 'true'
    }

    /**
     * Print log
     *
     * @param {*} data
     * @param {Boolean} force
     * @returns
     */
    log(data, force = false) {
        if (force === true) {
            console.log(data)
            return true;
        } else if (this.inDebugMode === true) {
            console.log(data)
            return true;
        }
        return false;
    }

    /**
     * Push alert
     */
    pushAlert(message) {
        let alert = document.getElementById('alert');
        if (alert) {
            alert.innerText = message;
            alert.classList.remove('hidden');
            return true
        }
        return false;
    }

    /**
     * Set a storage item value
     *
     * @param {String} key
     * @param {*} value
     */
    setStorage(key, value) {
        this.log('Storage: set ' + key + '=' + value);
        chrome.storage.sync.set({ [key]: value });
    }

    /**
     * Combine selector with value to a string of selector
     */
    combineSelectorValue(selector, value = "") {
        if (value != "") {
            return selector + '[value=' + value + ']';
        }
        return selector;
    }

    /**
     * Convert a string to html querySelector
     *
     * @param {String|Array} selector
     * @param {String} value
     * @returns {Element}
     */
    selectorToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.log('Found selector: ' + selector);
        } else {
            this.log('Not found selector: ' + selector);
        }
        return element;
    }

    /**
     *
     * @param {*} selector
     * @param {*} all
     * @returns
     */
    getSelectorValue(selector) {
        let element = this.selectorToElement(selector);
        if (element) {
            let type = element.getAttribute('type');
            if (type === 'checkbox') {
                element = document.querySelectorAll(selector + ':checked');
                return Array.from(element).map((item) => {
                    return item.getAttribute('value');
                });
            } else if (type === 'radio') {
                element = document.querySelector(selector + ':checked');
                return element.getAttribute('value');
            } else {
                return element.getAttribute('value');
            }
        }
        return null;
    }

    /**
     * Set value to a HTML element
     *
     * @param {String} selector HTML Selector
     * @param {*} value Value from chrome storage
     */
    setSelectorValue(selector, value) {
        const element = this.selectorToElement(selector, value);
        if (element) {
            const type = element.getAttribute('type');
            if (type === 'radio' || type === 'checkbox') {
                element.setAttribute('checked', true);
            } else {
                element.setAttribute('value', value)
            }
            this.log('Set value to ' + value);
        }
    }

    /**
     * Handle configs
     */
    handleConfig(config, value = null) {
        // let name = config.name;
        let selector = config.selector;
        value = value != null ? value : config.value;
        selector = this.selectorToElement(selector, value);
        this.setSelectorValue(selector, value);
    }
    handleConfigs(configs) {
        console.group('ALl configs')
        this.log(configs)
        console.groupEnd();
        console.group('Handle configs')
        chrome.storage.sync.get(null, (result) => {
            // Foreach in configs variable
            configs.forEach((config) => {
                // configs[...]
                let name = config['name'];
                let selector = config['selector'];
                let value = result[name] ? result[name] : config['value'];
                if (name === 'protect_status') this.updateProtectStatusBox(value);
                console.groupCollapsed(name)
                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        let itemSelector = this.combineSelectorValue(selector, item);
                        this.setSelectorValue(itemSelector, item);
                    });
                } else {
                    if (config['selectorWithValue'] === false) {
                        selector = this.combineSelectorValue(selector);
                    } else {
                        selector = this.combineSelectorValue(selector, value);
                    }
                    this.setSelectorValue(selector, value);
                }
                console.groupEnd();
            });
            console.groupEnd();
        })
    }

    updateProtectStatusBox(protect_status) {
        let box = document.getElementById('protect_status_box');
        if (protect_status == "enable") {
            box.classList.remove('bg-gray-300');
            box.classList.add('bg-green-300');
            box.querySelector('img').src = '../icons/svgs/eye-with-line.svg';
        } else {
            box.classList.remove('bg-green-300');
            box.classList.add('bg-gray-300');
            box.querySelector('img').src = '../icons/svgs/eye.svg';
        }
    }

    /**
     * Save configs to chrome storage
     */
    saveChanges() {
        configs.forEach((config) => {
            // config[x]
            let name = config['name'];
            let selector = config['selector'];
            let value = this.getSelectorValue(selector);
            if (value) {
                if (name === 'protect_status') this.updateProtectStatusBox(value);
                this.setStorage(name, value);
            }
        });
        // Show alert
        this.pushAlert('Saved! If nothing happens, please refresh the page for the changes to take effect!');
        // Update changes to opened tabs
        this.reinject();
    }

    /**
     * Find tab(s) and re-inject the code
     */
    reinject() {
        chrome.tabs.query({
            url: [
                "*://*.messenger.com/*"
            ]
        }, (tabs) => {
            if (tabs.length > 0) {
                for (var i = 0; i < tabs.length; ++i) {
                    this.log(tabs[i].url);
                    if (tabs[i].url.includes('messenger.com')) {
                        chrome.tabs.sendMessage(tabs[i].id, { action: "reinject" }, (response) => {
                            this.log(response);
                        });
                    }
                }
            } else {
                this.log('Not found any tab that match with query!');
            }
        });
    }

    /**
     * Get a value from config
     */
    configs(configs) {
        let keys = configs.map((config) => {
            return config.name;
        });
        let values = configs.map((config) => {
            return config.value;
        });
        let result = {}
        keys.forEach((key, i) => result[key] = values[i]);
        return result
    }
}

const helpers = new Helpers();

/**
 * config = {name, selector, value}
 * config.value: string or array (of config)
 */
let configs = [
    {
        name: 'protect_status',
        selector: 'input[name=protect_status]',
        selectorWithValue: true,
        value: 'enable'
    },
    {
        name: 'protect_type',
        selector: 'input[name=protect_type]',
        selectorWithValue: true,
        value: 'blur'
    },
    {
        name: 'protect_items',
        selector: 'input[name=protect_items]',
        selectorWithValue: true,
        value: [
            'general',
            'image',
            'message',
            'name'
        ]
    },
    {
        name: 'protect_level',
        selector: 'input[name=protect_level]',
        selectorWithValue: false,
        value: '8'
    },
    {
        name: 'display_type',
        selector: 'input[name=display_type]',
        selectorWithValue: true,
        value: 'hover'
    },
];

module.exports = {
    configs,
    helpers
}