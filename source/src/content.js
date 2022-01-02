import { configs, helpers } from '../global'

let delay = 100; // Time in ms

// Get the storage and inject protect css to page
function handleInject() {
    chrome.storage.sync.get(null, (result) => {
        let defaultConfigs = helpers.configs(configs);
        let injectConfigs = Object.assign(defaultConfigs, result);
        inject(injectConfigs);
    });
}

function init() {
    handleInject();
}
init();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'reinject') {
        reinject();
        sendResponse({ result: 'reinjected' });
    }
    return true;
});

function reinject() {
    handleInject();
}

/**
 * Inject protect css to page
 */
function inject(configs) {
    let e_id = 'messenger-utilities';
    setTimeout(function () {
        if (configs.protect_status == 'enable') {
            let css = '';
            let protect_css = '';
            let display_css = '';

            /**
             * Add css to string
             * @param {*} css_add
             */
            function addCSS(css_add) {
                protect_css += css_add;
                display_css += css_add;
                if (css_add !== ',') {
                    if (configs.display_type === 'hover') {
                        display_css += ':hover';
                    }
                }
            }
            function handleCSS(css_add) {
                // if item.selector attribute is an array
                if (Array.isArray(css_add)) {
                    css_add.forEach((item) => {
                        handleCSS(item);
                    });
                } else {
                    // if css_add is text (plain text, text from item.selector)
                    // If protect_css/display_css is not empty then and , to the end of it
                    if (protect_css !== '') {
                        addCSS(',');
                    }
                    //
                    addCSS(css_add);
                }
            }

            /**
             * Add properties to css
             * @param {*} level Protect level
             * @returns
             */
            function addCSSProperties(level = 0) {
                let output = '{';
                if (level != 0) {
                    if (configs.protect_type === 'blur') {
                        output += 'filter: blur(' + level + 'px)';
                    }
                    if (configs.protect_type === 'reverse') {
                        output += `-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);-ms-transform:rotateY(180deg);unicode-bidi:bidi-override;direction:rtl;`;
                    }
                } else {
                    if (configs.protect_type === 'blur') {
                        output += 'filter: blur(0)';
                    }
                    if (configs.protect_type === 'reverse') {
                        output += `-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-o-transform:rotateY(0deg);-ms-transform:rotateY(0deg);unicode-bidi:normal;direction:ltr;`;
                    }
                }

                output += '}';
                return output;
            }

            /**
             * Combine protect_css amd display_css into one
             */
            function combineCSS() {
                css = protect_css;
                css += addCSSProperties(configs.protect_level);
                if (configs.display_type != 'none') {
                    css += display_css;
                    css += addCSSProperties(0);
                }
            }

            /**
             * Array that contains all selectors for css
             */
            let parent_selectors = {
                "left_sidebar": "div[data-pagelet=MWThreadList]",
                "main": "div[class~=rq0escxv][class~=du4w35lb][class~=d2edcug0][class~=hpfvmrgz][class~=rj1gh0hx][class~=buofh1pr][class~=g5gj957u][class~=j83agx80][class~=cbu4d94t][class~=l9j0dhe7][class~=ni8dbmo4][class~=stjgntxs]",
                "right_sidebar": "div[class~=rq0escxv][class~=l9j0dhe7][class~=du4w35lb][class~=j83agx80][class~=cbu4d94t][class~=kuivcneq][class~=g5gj957u][class~=f4tghd1a][class~=ifue306u][class~=t63ysoy8]"
            };
            let filter = {
                general: {
                    name: "General",
                    selector: [
                        "span[role=tooltip]>div>div>span[dir=auto]", // tooltip
                    ]
                },
                name: {
                    name: "name",
                    selector: [
                        parent_selectors.left_sidebar + " span[class~=d2edcug0][class~=hpfvmrgz][class~=qv66sw1b][class~=c1et5uql][class~=lr9zc1uh][class~=a8c37x1j][class~=keod5gw0][class~=nxhoafnm][class~=aigsh9s9][class~=fe6kdd0r][class~=mau55g9w][class~=c8b282yb][class~=d3f4x2em][class~=iv3no6db][class~=jq4qci2q][class~=a3bd9o3v][class~=oo9gr5id][class~=hzawbc8m]", // left sidebar name ([class~=ekzkrbhg] for seen) ([class~=lrazzd5p] for unseen)
                        parent_selectors.main + " span[class~=a8c37x1j][class~=ni8dbmo4][class~=stjgntxs][class~=l9j0dhe7][class~=ltmttdrg][class~=g0qnabr5][class~=ojkyduve]", // main chat name & online status
                        parent_selectors.main + " div[class~=hyh9befq][class~=pipptul6][class~=sq6gx45u]", // quote name
                        parent_selectors.main + " div[class~=r9r71o1u][class~=m9osqain][class~=fsrhnwul][class~=d0szoon8][class~=r8blr3vg][class~=qjjbsfad]", // message chat name
                        parent_selectors.right_sidebar + " span[class~=d2edcug0][class~=hpfvmrgz][class~=qv66sw1b][class~=c1et5uql][class~=lr9zc1uh][class~=a8c37x1j][class~=keod5gw0][class~=nxhoafnm][class~=aigsh9s9][class~=fe6kdd0r][class~=mau55g9w][class~=c8b282yb][class~=d3f4x2em][class~=mdeji52x][class~=a5q79mjw][class~=g1cxx5fr][class~=lrazzd5p][class~=oo9gr5id][class~=oqcyycmt]" // right sidebar name
                    ],
                },
                image: {
                    selector: [
                        "image", // avatar
                        parent_selectors.main + " img[width='32']", // icon message
                        // start duplicate selector
                        parent_selectors.main + " img[class~=k4urcfbm][class~=bixrwtb6][class~=datstx6m][class~=q9uorilb]", // chat avatar
                        parent_selectors.right_sidebar + " img[class~=k4urcfbm][class~=bixrwtb6][class~=datstx6m][class~=q9uorilb]", // right avatar
                        // end duplicate selector
                        parent_selectors.main + " img[class~=a8c37x1j][class~=d2edcug0][class~=datstx6m][class~=k4urcfbm]", // message img
                        parent_selectors.main + " img[class~=a8c37x1j][class~=d2edcug0][class~=sn7ne77z][class~=bixrwtb6]", // main img
                        parent_selectors.main + " div[class~=d2edcug0][class~=l9j0dhe7][class~=tkr6xdv7] > div", // sticker img
                        parent_selectors.main + " div[class~=k4urcfbm][class~=j83agx80][class~=l9j0dhe7] > img", // link img
                        // "img:not([width='16'])", // emoji icon
                        // "img:not([width='30'])", // emoji icon
                    ]
                },
                message: {
                    selector: [
                        parent_selectors.left_sidebar + " div[class~=bp9cbjyn][class~=j83agx80][class~=m9osqain]", // left sidebar message
                        parent_selectors.main + " div[class~=buofh1pr][class~=j83agx80][class~=btwxx1t3][class~=cgat1ltu][class~=a8nywdso][class~=rz4wbd8a]", // call block
                        parent_selectors.main + " div[class~=oo9gr5id][class~=ii04i59q][class~=jq4qci2q][class~=g9io39s2]", // their message
                        parent_selectors.main + " div[class~=ljqsnud1][class~=ii04i59q][class~=jq4qci2q][class~=g9io39s2]", // your message
                        parent_selectors.main + " div[class~=jm1wdb64][class~=f10w8fjw][class~=e9vueds3][class~=mty21rlj][class~=m9osqain]", // quoted message
                        parent_selectors.main + " div[class~=jktsbyx5][class~=rv4hoivh][class~=osnr6wyh][class~=h4z51re5][class~=d2edcug0][class~=e72ty7fz][class~=qmr60zad][class~=qlfml3jp][class~=inkptoze][class~=l6v480f0][class~=maa8sdkg][class~=s1tcr66n][class~=aypy0576][class~=erlsw9ld][class~=qv66sw1b]", // unsend message
                        parent_selectors.main + " div[class~=j83agx80][class~=taijpn5t][class~=cbu4d94t][class~=buofh1pr][class~=cehpxlet][class~=n1l5q3vz][class~=tvfksri0][class~=n851cfcs][class~=ozuftl9m]", // link title
                    ]
                },
                chatbox: {
                    selector: [
                        parent_selectors.main + " div[class~=ecm0bbzt][class~=e5nlhep0][class~=buofh1pr][class~=jq4qci2q][class~=a3bd9o3v][class~=iko8p5ub][class~=eg9m0zos][class~=ni8dbmo4][class~=rq0escxv][class~=lexh0w6q]",
                    ]
                }
            };

            // Handle & Combine
            helpers.log(filter);
            for (element in filter) {
                if (configs.protect_items.includes(element)) {
                    var element = filter[element];
                    handleCSS(element.selector);
                }
            };
            combineCSS();
            // add z-index to img to fix some bugs
            css += 'img{ z-index: 999999999 }';

            // Inject css into page
            let find = document.getElementById(e_id);
            // If not found existed element, create new
            // If found, update existed element
            if (find == null) {
                helpers.log('Creating new element...');
                let div = document.createElement('div');
                div.id = e_id;
                let style = document.createElement('style');
                style.textContent = css;
                div.appendChild(style);
                document.querySelector('body').append(div);
            } else {
                helpers.log('Updating existed element...');
                helpers.log(find.querySelector('style'));
                find.querySelector('style').textContent = css;
            }
            // log(css);
            helpers.log('Injected!')
        } else {
            helpers.log('Not inject with protect_status(' + configs.protect_status + '), protect_type(' + configs.protect_type + '), protect_level(' + configs.protect_level + '), display type(' + configs.display_type + ')');
            let find = document.getElementById(e_id);
            if (find != null) find.remove();
        }
        return true;
    }, delay);
}
