let dependencies = {
  'messenger-utilities': '1.6.0',
}
let notification = {
  message:
    'Protect privacy for specific users is released! Clicking the "More options" button to try it!',
  url: '',
  time: Date.now(), // Date.now()
  color: 'primary',
}
/**
 * Protect privacy
 */
// facebook.com
let protect_privacy_facebook_parent_selectors = {
  right_sidebar: 'div[class~=cxgpxx05][class~=sj5x9vvc]',
  chat_tabs:
    'div[class~=pmk7jnqg][class~=lfi1tu6t][class~=cypi58rs][class~=tmrshh9y]',
  chat_info:
    'div[class~=rq0escxv][class~=l9j0dhe7][class~=du4w35lb][class~=j83agx80][class~=pfnyh3mw][class~=jifvfom9][class~=bp9cbjyn][class~=owycx6da][class~=btwxx1t3][class~=jb3vyjys]',
  chatbox: 'div[data-testid=mwchat-tab]',
  inside_chatbox:
    'div[class~=buofh1pr][class~=j83agx80][class~=cbu4d94t][class~=d2edcug0][class~=l9j0dhe7][class~=tgvbjcpo]',
  chat_dropdown: 'div[data-testid=MWJewelThreadListContainer]',
}
let protect_privacy_facebook_data = {
  general: {
    name: 'General',
    selector: [],
  },
  image: {
    name: 'Image',
    selector: [
      protect_privacy_facebook_parent_selectors.right_sidebar +
      ' div[class~=q9uorilb][class~=l9j0dhe7][class~=pzggbiyp][class~=du4w35lb] svg[class=pzggbiyp]', // right sidebar avatar
      protect_privacy_facebook_parent_selectors.chat_tabs +
      ' img[class~=k4urcfbm][class~=datstx6m][class~=s45kfl79][class~=emlxlaya][class~=bkmhp75w][class~=spb7xbtv][class~=pzggbiyp][class~=bixrwtb6]', // avatar in chat tabs
      protect_privacy_facebook_parent_selectors.chat_tabs +
      ' div[class~=j83agx80][class~=l9j0dhe7] > img', // avatar in chat tabs (group)
      protect_privacy_facebook_parent_selectors.chat_info + ' image', // avatar in chat info popup
      protect_privacy_facebook_parent_selectors.chatbox +
      ' img[class~=a8c37x1j][class~=d2edcug0][class~=sn7ne77z][class~=bixrwtb6]', // chatbox avatar
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' img[class~=k4urcfbm][class~=bixrwtb6][class~=datstx6m][class~=q9uorilb]', // inside chatbox avatar
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' img[class~=a8c37x1j][class~=d2edcug0][class~=datstx6m][class~=k4urcfbm]', // image message
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      " img[width='32']", // icon message
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      " img[width='14px']", // seen avatar icon float
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' div[class~=d2edcug0][class~=l9j0dhe7][class~=tkr6xdv7] div', // sticker image
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' img[class~=sf5mxxl7][class~=gab7stmx][class~=i4qgphn6][class~=s45kfl79][class~=emlxlaya][class~=bkmhp75w][class~=spb7xbtv][class~=abpf7j7b][class~=exrn9cbp]', // seen avatar icon
      protect_privacy_facebook_parent_selectors.chat_dropdown + ' img', // avatar in chat dropdown
      protect_privacy_facebook_parent_selectors.chat_dropdown + ' image', // seen avatar in chat dropdown
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      " span[class~=pq6dq46d][class~=tbxw36s4][class~=knj5qynh][class~=kvgmc6g5][class~=ditlmg2l][class~=oygrvhab][class~=nvdbi5me][class~=sf5mxxl7][class~=jnigpg78][class~=odw8uiq3] > img[height='20']", // send icon
    ],
  },
  name: {
    name: 'Name',
    selector: [
      protect_privacy_facebook_parent_selectors.right_sidebar +
      ' span[class~=d2edcug0][class~=hpfvmrgz][class~=qv66sw1b][class~=c1et5uql][class~=lr9zc1uh][class~=a8c37x1j][class~=fe6kdd0r][class~=mau55g9w][class~=c8b282yb][class~=keod5gw0][class~=nxhoafnm][class~=aigsh9s9][class~=d3f4x2em][class~=iv3no6db][class~=jq4qci2q][class~=a3bd9o3v][class~=ekzkrbhg][class~=oo9gr5id][class~=hzawbc8m]',
      protect_privacy_facebook_parent_selectors.chatbox +
      ' span[class~=d2edcug0][class~=hpfvmrgz][class~=qv66sw1b][class~=c1et5uql][class~=lr9zc1uh][class~=a8c37x1j][class~=keod5gw0][class~=nxhoafnm][class~=aigsh9s9][class~=fe6kdd0r][class~=mau55g9w][class~=c8b282yb][class~=d3f4x2em][class~=iv3no6db][class~=jq4qci2q][class~=a3bd9o3v][class~=lrazzd5p][class~=oo9gr5id][class~=oqcyycmt]', // name of chat seen
      protect_privacy_facebook_parent_selectors.chatbox +
      ' span[class~=a8c37x1j][class~=ni8dbmo4][class~=stjgntxs][class~=l9j0dhe7][class~=ltmttdrg][class~=g0qnabr5]', // name of chat not seen
      protect_privacy_facebook_parent_selectors.chat_info +
      ' span[class~=d2edcug0][class~=hpfvmrgz][class~=qv66sw1b][class~=c1et5uql][class~=lr9zc1uh][class~=a8c37x1j][class~=fe6kdd0r][class~=mau55g9w][class~=c8b282yb][class~=keod5gw0][class~=nxhoafnm][class~=aigsh9s9][class~=ns63r2gh][class~=iv3no6db][class~=o3w64lxj][class~=b2s5l15y][class~=hnhda86s][class~=oo9gr5id][class~=hzawbc8m]', // name in chat info popup
      'div[data-testid=mw_chat_head_flyout] span.oo9gr5id > span[class~=a8c37x1j][class~=ni8dbmo4][class~=stjgntxs][class~=l9j0dhe7][class~=ltmttdrg][class~=g0qnabr5]', // name in chat head flyout (hover) (oo9gr5id: name, m9osqain: message)
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' span[class~=d2edcug0][class~=hpfvmrgz][class~=qv66sw1b][class~=c1et5uql][class~=lr9zc1uh][class~=a8c37x1j][class~=keod5gw0][class~=nxhoafnm][class~=aigsh9s9][class~=fe6kdd0r][class~=mau55g9w][class~=c8b282yb][class~=d3f4x2em][class~=mdeji52x][class~=a5q79mjw][class~=g1cxx5fr][class~=lrazzd5p][class~=oo9gr5id][class~=oqcyycmt]', // name at header of chat
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' div[data-testid=mw_message_sender_name]', // name of sender
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' div[class~=hyh9befq][class~=pipptul6][class~=sq6gx45u]', // quote name
      protect_privacy_facebook_parent_selectors.chat_dropdown +
      ' span[class~=a8c37x1j][class~=ni8dbmo4][class~=stjgntxs][class~=l9j0dhe7][class~=ltmttdrg][class~=g0qnabr5]', // name in chat dropdown
    ],
  },
  message: {
    name: 'Message',
    selector: [
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' div[class~=ii04i59q][class~=jq4qci2q][class~=g9io39s2][class~=oo9gr5id]', // chat message (they)
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' div[class~=ii04i59q][class~=jq4qci2q][class~=g9io39s2][class~=ljqsnud1]', // chat message (you)
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' div[class~=m9osqain][class~=ii04i59q]', // quote message
    ],
  },
  chatbox: {
    name: 'Chatbox',
    selector: [
      protect_privacy_facebook_parent_selectors.inside_chatbox +
      ' div[class~=oo9gr5id][class~=lzcic4wl][class~=l9j0dhe7][class~=gsox5hk5][class~=buofh1pr][class~=tw4czcav][class~=cehpxlet][class~=hpfvmrgz][class~=eg9m0zos][class~=notranslate] > p', // chatbox
    ],
  },
}
// messenger.com
// t_ is when specific chat is selected
let protect_privacy_messenger_parent_selectors = {
  t_left_sidebar: 'div[role="gridcell"] a[href="/t/{id}/"]',
  t_left_sidebar_e2ee: 'div[role="gridcell"] a[href="/e2ee/t/{id}/"]',
  left_sidebar: 'div[role="navigation"]',
  main: 'div[role="main"] div[class="x9f619 x1ja2u2z x78zum5 x1n2onr6 x1r8uery x1iyjqo2 xs83m0k xeuugli x1qughib x1qjc9v5 xozqiw3 x1q0g3np xexx8yu x85a59c x1odjw0f"]',
  right_sidebar: 'div[role="main"] div[class="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x1iyjqo2 xs83m0k x8mqhxd x6ikm8r x10wlt62 xcrg951 xm0m39n xzhurro x6gs93r xpyiiip x88v6c3 x1qpj6lr xdhzj85 x1bc3s5a xczebs5 x4pn7vq xe95u6g"]',
}
let protect_privacy_messenger_main_selectors = {
  name: [
    protect_privacy_messenger_parent_selectors.main + ' h1 span>span[class~=x1lliihq][class~=x193iq5w][class~=x6ikm8r][class~=xlyipyv][class~=xuxw1ft][class~=x1j85h84]', // main chat name & online status
    protect_privacy_messenger_parent_selectors.main + ' span[class~=x1lliihq][class~=x1plvlek][class~=xryxfnj][class~=x1n2onr6][class~=x193iq5w][class~=xeuugli][class~=x13faqbe][class~=x1vvkbs][class~=x1s928wv][class~=xhkezso][class~=x1gmr53x][class~=x1cpjm7i][class~=x1fgarty][class~=x1943h6x][class~=x1xmvt09][class~=x1nxh6w3][class~=x1fcty0u][class~=xi81zsa][class~=x2b8uid][class~=x4zkp8e][class~=x3x7a5m][class~=xq9mrsl]', // main chat name & online status
    protect_privacy_messenger_parent_selectors.main + ' div[role="button"] div[class="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w xl56j7k xlup9mm"]:first-child span[class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft x1j85h84"]', // noter name
    protect_privacy_messenger_parent_selectors.main + ' span[class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft x1j85h84"]',
    protect_privacy_messenger_parent_selectors.main + ' span[class="html-span xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs"]', // name in group chat
    protect_privacy_messenger_parent_selectors.main + ' div[class~=x1h0ha7o]', // quote name
    protect_privacy_messenger_parent_selectors.main + ' span[class~=x193iq5w][class~=xeuugli][class~=x13faqbe][class~=x1vvkbs][class~=xt0psk2][class~=x1xmvt09][class~=x6prxxf][class~=xk50ysn][class~=xzsf02u][class~=xq9mrsl]', // quote name in chatbot
  ],
  image: [
    protect_privacy_messenger_parent_selectors.main + ' div[class="html-div x1qjc9v5 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x1ey2m1c x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k xds687c x17qophe x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x10l6tqk x13vifvy x1ja2u2z"]', // avatar in main chat
    protect_privacy_messenger_parent_selectors.main + " img[width='32']", // icon message
    protect_privacy_messenger_parent_selectors.main + " img[height='14']", // seen avatar icon
    protect_privacy_messenger_parent_selectors.main + ' img[class~=xz74otr][class~=x1rcc7c0][class~=xbtbmw4][class~=x1lie4ck][class~=x16hxpj1][class~=x1v9usgg][class~=x19um543][class~=x1m6msm][class~=xxymvpz][class~=x6jxa94]', // seen avatar icon in group
    protect_privacy_messenger_parent_selectors.main + ' div[class~=mfclru0v][class~=h4m39qi9][class~=pytsy3co]', // video
    protect_privacy_messenger_parent_selectors.main + ' img[class~=xh8yej3][class~=xl1xv1r][class~=x5yr21d][class~=x1rg5ohu]', // chatter avatar
    protect_privacy_messenger_parent_selectors.main + ' div[class~=x1rg5ohu][class~=x1n2onr6][class~=x3ajldb][class~=x1ja2u2z] image', // chat avatar when typing
    protect_privacy_messenger_parent_selectors.main + ' img[class~=xz74otr][class~=xmz0i5r][class~=x193iq5w]', // message img
    protect_privacy_messenger_parent_selectors.main + ' div[class~=x193iq5w][class~=x1n2onr6][class~=x1vjfegm] div[role=img]', // sticker img
    // protect_privacy_messenger_parent_selectors.main + ' div[class~=mfclru0v][class~=alzwoclg][class~=om3e55n1] > img', // link img
  ],
  message: [
    protect_privacy_messenger_parent_selectors.main + ' div[role="button"] div[class="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w xl56j7k xlup9mm"]:last-child span[class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft x1j85h84"]', // noter message
    protect_privacy_messenger_parent_selectors.main + ' div[class~=buofh1pr][class~=j83agx80][class~=btwxx1t3][class~=cgat1ltu][class~=a8nywdso][class~=rz4wbd8a]', // call block
    protect_privacy_messenger_parent_selectors.main + ' div[class~=x1gslohp][class~=x11i5rnm][class~=x12nagc][class~=x1mh8g0r][class~=x1yc453h][class~=x126k92a]', // their message
    protect_privacy_messenger_parent_selectors.main + ' div[class~=x1gn5b1j][class~=x230xth][class~=x8cjs6t][class~=x1ch86jh][class~=x80vd3b][class~=xckqwgs][class~=x13fuv20][class~=xu3j5b3][class~=x1q0q8m5][class~=x26u7qi][class~=x1g8br2z][class~=x1tlxs6b][class~=x178xt8z][class~=xm81vs4][class~=xso031l][class~=xy80clv][class~=x1dntmbh][class~=x193iq5w][class~=x889kno][class~=x1iji9kk][class~=x1a8lsjc][class~=x1sln4lm][class~=x13faqbe]',
    protect_privacy_messenger_parent_selectors.main + ' blockquote[class~=x26u7qi][class~=x7g060r][class~=x1nxh6w3][class~=x1sibtaa][class~=x1gslohp][class~=x11i5rnm][class~=x12nagc][class~=x1mh8g0r][class~=x1swvt13][class~=x1pi30zi][class~=x126k92a][class~=x1vvkbs][class~=x16b4vue][class~=xkxfvhb]', // forward message
    protect_privacy_messenger_parent_selectors.main + ' div[class~=xi81zsa]', // quoted message
    protect_privacy_messenger_parent_selectors.main + ' span[class~=x1lliihq][class~=x1plvlek][class~=xryxfnj][class~=x1n2onr6][class~=x193iq5w][class~=xeuugli][class~=x13faqbe][class~=x1vvkbs][class~=x1s928wv][class~=xhkezso][class~=x1gmr53x][class~=x1cpjm7i][class~=x1fgarty][class~=x1943h6x][class~=x1xmvt09][class~=x1nxh6w3][class~=x1fcty0u][class~=xi81zsa][class~=x1yc453h][class~=x4zkp8e][class~=x676frb][class~=xq9mrsl]', // quote message in chatbox
    protect_privacy_messenger_parent_selectors.main + ' a[class~=x1i10hfl][class~=xjbqb8w][class~=x1ejq31n][class~=xd10rxx][class~=x1sy0etr][class~=x17r0tee][class~=x972fbf][class~=xcfux6l][class~=x1qhh985][class~=xm0m39n][class~=x9f619][class~=x1ypdohk][class~=xt0psk2][class~=xe8uvvx][class~=xdj266r][class~=x11i5rnm][class~=xat24cr][class~=x1mh8g0r][class~=xexx8yu][class~=x4uap5][class~=x18d9i69][class~=xkhd6sd][class~=x16tdsg8][class~=x1hl2dhg][class~=xggy1nq][class~=x1a2a7pz][class~=x1heor9g][class~=x1lku1pv]', // share message block
  ],
  chatbox: [
    protect_privacy_messenger_parent_selectors.main + ' div[role=textbox]',
  ],
}
let protect_privacy_messenger_right_sidebar_selectors = {
  name: [
    protect_privacy_messenger_parent_selectors.right_sidebar + ' h2', // right sidebar name
  ],
  image: [
    protect_privacy_messenger_parent_selectors.right_sidebar + ' div[class="html-div xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x4uap5 x18d9i69 xkhd6sd xqtp20y x1n2onr6 xh8yej3 xbobb8a"]', // personal avatar
    protect_privacy_messenger_parent_selectors.right_sidebar + ' div[class="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z"]', // group chat avatar type svg
    protect_privacy_messenger_parent_selectors.right_sidebar + ' div[class="html-div x1qjc9v5 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x1ey2m1c x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k xds687c x17qophe x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x10l6tqk x13vifvy x1ja2u2z"]', // group chat avatar type image
  ],
}

let protect_privacy_messenger_main_right_sidebar_data = {
  general: {
    name: 'General',
    selector: [
      'div[role=tooltip] span', // tooltip
    ],
  },
  name: {
    name: 'name',
    selector: [
      ...protect_privacy_messenger_main_selectors.name,
      ...protect_privacy_messenger_right_sidebar_selectors.name,
    ],
  },
  image: {
    name: 'image',
    selector: [
      ...protect_privacy_messenger_main_selectors.image,
      ...protect_privacy_messenger_right_sidebar_selectors.image,
    ],
  },
  message: {
    name: 'message',
    selector: [...protect_privacy_messenger_main_selectors.message],
  },
  chatbox: {
    selector: [...protect_privacy_messenger_main_selectors.chatbox],
  },
}
// inject to all chat
let protect_privacy_messenger_data = {
  general: {
    name: 'General',
    selector: [
      'div[role=tooltip] span', // tooltip
    ],
  },
  name: {
    name: 'name',
    selector: [
      protect_privacy_messenger_parent_selectors.left_sidebar + ' span[class~=x1lliihq][class~=x193iq5w][class~=x6ikm8r][class~=xlyipyv][class~=xuxw1ft]', // left sidebar name ([class~=x1j85h84] for seen)
    ],
  },
  image: {
    name: 'image',
    selector: [
      protect_privacy_messenger_parent_selectors.left_sidebar + ' div[class="html-div x1qjc9v5 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x1ey2m1c x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k xds687c x17qophe x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x10l6tqk x13vifvy x1ja2u2z"]', // avatar in left sidebar
      protect_privacy_messenger_parent_selectors.left_sidebar + ' image[preserveAspectRatio~=xMidYMid][preserveAspectRatio~=slice]', // seen avatar
    ],
  },
  message: {
    name: 'message',
    selector: [
      protect_privacy_messenger_parent_selectors.left_sidebar + ' span[class~=x1lliihq][class~=x6ikm8r][class~=x10wlt62][class~=x1n2onr6][class~=xlyipyv][class~=xuxw1ft][class~=x1j85h84]', // left sidebar message
    ],
  },
}
// inject to specific chat
let protect_privacy_messenger_t_data = {
  name: {
    name: 'name',
    selector: [
      // left sidebar name ([class~=x1j85h84] for seen)
      protect_privacy_messenger_parent_selectors.t_left_sidebar + ' span[class~=x1lliihq][class~=x193iq5w][class~=x6ikm8r][class~=xlyipyv][class~=xuxw1ft]',
      protect_privacy_messenger_parent_selectors.t_left_sidebar_e2ee + ' span[class~=x1lliihq][class~=x193iq5w][class~=x6ikm8r][class~=xlyipyv][class~=xuxw1ft]',
    ],
  },
  image: {
    name: 'image',
    selector: [
      // avatar in left sidebar
      protect_privacy_messenger_parent_selectors.t_left_sidebar + ' div[class="html-div xe8uvvx x1qjc9v5 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x1ey2m1c x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k xds687c x17qophe x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x10l6tqk x13vifvy x1ja2u2z"]',
      protect_privacy_messenger_parent_selectors.t_left_sidebar_e2ee + ' div[class="html-div xe8uvvx x1qjc9v5 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x1ey2m1c x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k xds687c x17qophe x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x10l6tqk x13vifvy x1ja2u2z"]',
      // seen avatar
      protect_privacy_messenger_parent_selectors.t_left_sidebar + ' image[preserveAspectRatio~=xMidYMid][preserveAspectRatio~=slice]',
      protect_privacy_messenger_parent_selectors.t_left_sidebar_e2ee + ' image[preserveAspectRatio~=xMidYMid][preserveAspectRatio~=slice]',
    ],
  },
  message: {
    name: 'message',
    selector: [
      // left sidebar message
      protect_privacy_messenger_parent_selectors.t_left_sidebar + ' span[class~=x1lliihq][class~=x6ikm8r][class~=x10wlt62][class~=x1n2onr6][class~=xlyipyv][class~=xuxw1ft][class~=x1j85h84]',
      protect_privacy_messenger_parent_selectors.t_left_sidebar_e2ee + ' span[class~=x1lliihq][class~=x6ikm8r][class~=x10wlt62][class~=x1n2onr6][class~=xlyipyv][class~=xuxw1ft][class~=x1j85h84]',
    ],
  },
}

/**
 * Hide chat
 */
let hide_chat_facebook = "a[href='/messages/t/{id}/']"
let hide_chat_facebook_e2ee = "a[href='/messages/e2ee/t/{id}/']"
let hide_chat_messenger = protect_privacy_messenger_parent_selectors.t_left_sidebar
let hide_chat_messenger_e2ee = protect_privacy_messenger_parent_selectors.t_left_sidebar_e2ee

export default {
  version: Date.now(),
  dependencies: dependencies,
  notification: notification,
  data: {
    protect_privacy: {
      'messenger.com': mergeFilters(
        protect_privacy_messenger_data,
        protect_privacy_messenger_main_right_sidebar_data
      ),
      'messenger.com/t': protect_privacy_messenger_t_data,
      'messenger.com/t/id': protect_privacy_messenger_main_right_sidebar_data,
      'facebook.com': mergeFilters(
        protect_privacy_messenger_data,
        protect_privacy_facebook_data
      ),
      'facebook.com/t': mergeFilters({}, protect_privacy_messenger_t_data),
      'facebook.com/t/id': mergeFilters(
        {},
        protect_privacy_messenger_main_right_sidebar_data
      ),
    },
    hide_chat: {
      'facebook.com': hide_chat_facebook,
      'facebook.com_e2ee': hide_chat_facebook_e2ee,
      'messenger.com': hide_chat_messenger,
      'messenger.com_e2ee': hide_chat_messenger_e2ee,
    },
  },
}

function mergeFilters(to, from) {
  let filter = { ...to }
  Object.entries(from).forEach(([key]) => {
    if (Object.prototype.hasOwnProperty.call(filter, key)) {
      if (Array.isArray(filter[key].selector)) {
        filter[key].selector = filter[key].selector.concat(from[key].selector)
      }
    } else {
      filter[key] = {
        ...from[key],
      }
    }
  })
  return filter
}
