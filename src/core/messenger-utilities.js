let dependencies = {
  'messenger-utilities': '1.2.0',
}
let notification = {
  message: '',
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
let protect_privacy_messenger_parent_selectors = {
  left_sidebar: 'div[class~=x78zum5][class~=xdt5ytf][class~=x1iyjqo2][class~=xs83m0k][class~=x1xzczws][class~=x6ikm8r][class~=x1rife3k][class~=x1n2onr6][class~=xh8yej3]',
  main: 'div[class~=x9f619][class~=x1ja2u2z][class~=x193iq5w][class~=xeuugli][class~=x1r8uery][class~=x1iyjqo2][class~=xs83m0k][class~=x78zum5][class~=xdt5ytf][class~=x1n2onr6][class~=x6ikm8r][class~=x10wlt62]',
  right_sidebar: 'div[class~=x9f619][class~=x1n2onr6][class~=x1ja2u2z][class~=x78zum5][class~=xdt5ytf][class~=x1yu6fn4][class~=xs83m0k][class~=x1dt7z5j][class~=x2ixbly][class~=x4xrfw5]',
}
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
      protect_privacy_messenger_parent_selectors.main + ' h1 span>span[class~=x1lliihq][class~=x193iq5w][class~=x6ikm8r][class~=xlyipyv][class~=xuxw1ft][class~=x1j85h84]', // main chat name & online status
      protect_privacy_messenger_parent_selectors.main + ' span[class~=x1lliihq][class~=x1plvlek][class~=xryxfnj][class~=x1n2onr6][class~=x193iq5w][class~=xeuugli][class~=x13faqbe][class~=x1vvkbs][class~=x1s928wv][class~=xhkezso][class~=x1gmr53x][class~=x1cpjm7i][class~=x1fgarty][class~=x1943h6x][class~=x1xmvt09][class~=x1nxh6w3][class~=x1fcty0u][class~=xi81zsa][class~=x2b8uid][class~=x4zkp8e][class~=x3x7a5m][class~=xq9mrsl]', // main chat name & online status
      protect_privacy_messenger_parent_selectors.main + ' div[data-testid=mw_message_sender_name]', // name in group chat
      protect_privacy_messenger_parent_selectors.main + ' div[class~=x1h0ha7o][class~=x12scifz][class~=x1pg5gke]', // quote name
      protect_privacy_messenger_parent_selectors.right_sidebar + ' span[class~=x1lliihq][class~=x1plvlek][class~=xryxfnj][class~=x1n2onr6][class~=x193iq5w][class~=xeuugli][class~=x13faqbe][class~=x1vvkbs][class~=x1s928wv][class~=xhkezso][class~=x1gmr53x][class~=x1cpjm7i][class~=x1fgarty][class~=x1943h6x][class~=x1xmvt09][class~=x1lkfr7t][class~=x1s688f][class~=xzsf02u][class~=x2b8uid][class~=xudqn12][class~=x676frb][class~=xq9mrsl]', // right sidebar name
    ],
  },
  image: {
    selector: [
      protect_privacy_messenger_parent_selectors.left_sidebar + ' img[class~=x1lliihq][class~=x193iq5w][class~=x1us19tq][class~=xl1xv1r]', // avatar in left sidebar
      protect_privacy_messenger_parent_selectors.left_sidebar + ' image[preserveAspectRatio~=xMidYMid][preserveAspectRatio~=slice]', // seen avatar
      protect_privacy_messenger_parent_selectors.main + ' img[class~=x1lliihq][class~=x193iq5w][class~=x1us19tq][class~=xl1xv1r]', // avatar in main chat
      protect_privacy_messenger_parent_selectors.main + " img[width='32']", // icon message
      protect_privacy_messenger_parent_selectors.main + " img[width='14px']", // seen avatar icon
      protect_privacy_messenger_parent_selectors.main + ' img[class~=xxymvpz][class~=x6jxa94][class~=x1v9usgg][class~=x14yjl9h][class~=xudhj91][class~=x18nykt9][class~=xww2gxu][class~=x1m6msm][class~=x19um543]', // seen avatar icon in group
      protect_privacy_messenger_parent_selectors.main + ' div[class~=mfclru0v][class~=h4m39qi9][class~=pytsy3co]', // video
      protect_privacy_messenger_parent_selectors.main + ' img[class~=xh8yej3][class~=xl1xv1r][class~=x5yr21d][class~=x1rg5ohu]', // chatter avatar
      /* FIX: need fix */
      protect_privacy_messenger_parent_selectors.main +
      ' img[class~=k4urcfbm][class~=datstx6m][class~=s45kfl79][class~=emlxlaya][class~=bkmhp75w][class~=spb7xbtv][class~=pzggbiyp][class~=bixrwtb6]', // chat avatar when typing
      protect_privacy_messenger_parent_selectors.main + ' img[class~=x1lliihq][class~=x193iq5w][class~=x5yr21d][class~=xh8yej3]', // message img
      protect_privacy_messenger_parent_selectors.main + ' div[class~=x193iq5w][class~=x1n2onr6][class~=x1vjfegm] div[role=img]', // sticker img
      // protect_privacy_messenger_parent_selectors.main + ' div[class~=mfclru0v][class~=alzwoclg][class~=om3e55n1] > img', // link img
      protect_privacy_messenger_parent_selectors.right_sidebar + ' img[class~=x1lliihq][class~=x193iq5w][class~=x1us19tq][class~=xl1xv1r]', // right avatar
      // "img:not([width='16'])", // emoji icon
      // "img:not([width='30'])", // emoji icon
    ],
  },
  message: {
    selector: [
      protect_privacy_messenger_parent_selectors.left_sidebar + ' span[class~=x1lliihq][class~=x6ikm8r][class~=x10wlt62][class~=x1n2onr6][class~=xlyipyv][class~=xuxw1ft][class~=x1j85h84]', // left sidebar message
      // protect_privacy_messenger_parent_selectors.left_sidebar + ' span[class~=b6ax4al1][class~=i54nktwv][class~=z2vv26z9][class~=om3e55n1][class~=gvxzyvdx][class~=aeinzg81][class~=t7p7dqev][class~=gh25dzvf][class~=gem102v4][class~=ncib64c9][class~=mrvwc6qr][class~=sx8pxkcf][class~=f597kf1v][class~=cpcgwwas][class~=exr7barw][class~=nfkogyam][class~=o48pnaf2][class~=pbevjfx6][class~=f5mw3jnl][class~=szxhu1pg][class~=qc5lal2y]', // left sidebar group message
      protect_privacy_messenger_parent_selectors.main + ' div[class~=buofh1pr][class~=j83agx80][class~=btwxx1t3][class~=cgat1ltu][class~=a8nywdso][class~=rz4wbd8a]', // call block
      protect_privacy_messenger_parent_selectors.main + ' div[data-testid=solid-message-bubble] div', // their message
      protect_privacy_messenger_parent_selectors.main + ' div[class~=ztn2w49o][class~=n3t5jt4f][class~=k1z55t6l][class~=ne6e0wym][class~=qsbzbi57]', // your message
      protect_privacy_messenger_parent_selectors.main + ' blockquote[class~=av1wybal][class~=mk2mc5f4][class~=peup4ujy][class~=hv4rvrfc][class~=dati1w0a][class~=ii04i59q][class~=c1et5uql][class~=e9vueds3][class~=j5wam9gi][class~=aahdfvyu][class~=cxmmr5t8][class~=tvmbv18p][class~=hcukyx3x][class~=ilywhbp3]', // forward message
      protect_privacy_messenger_parent_selectors.main + ' div[data-testid=reply-to-content] div', // quoted message
      protect_privacy_messenger_parent_selectors.main + ' div[class~=jroqu855][class~=nthtkgg5] span div', // quote message in chatbox
      // protect_privacy_messenger_parent_selectors.main + ' div[class~=jktsbyx5][class~=rv4hoivh][class~=osnr6wyh][class~=h4z51re5][class~=d2edcug0][class~=e72ty7fz][class~=qmr60zad][class~=qlfml3jp][class~=inkptoze][class~=l6v480f0][class~=maa8sdkg][class~=s1tcr66n][class~=aypy0576][class~=erlsw9ld][class~=qv66sw1b]', // unsend message
      // protect_privacy_messenger_parent_selectors.main + ' div[class~=xh8yej3][class~=x78zum5][class~=x1n2onr6]', // link thumbnail
      protect_privacy_messenger_parent_selectors.main + ' span[class~=x1lliihq][class~=x193iq5w][class~=x6ikm8r][class~=x10wlt62]', // link title
      protect_privacy_messenger_parent_selectors.main + ' div[class~=cgu29s5g][class~=alzwoclg][class~=jl2a5g8c][class~=b7mnygb8][class~=nch0832m][class~=oxkhqvkx]', // link title (group link)
    ],
  },
  chatbox: {
    selector: [
      protect_privacy_messenger_parent_selectors.main + ' div[role=textbox]',
    ],
  },
}

/**
 * Hide chat
 */
let hide_chat_facebook = "a[href='/messages/t/{id}/']"
let hide_chat_messenger = "div[data-testid=mwthreadlist-item-open] a[href='/t/{id}/']"

export default {
  version: Date.now(),
  dependencies: dependencies,
  notification: notification,
  data: {
    protect_privacy: {
      'messenger.com': protect_privacy_messenger_data,
      'facebook.com': mergeFilters(
        protect_privacy_messenger_data,
        protect_privacy_facebook_data
      ),
    },
    hide_chat: {
      'facebook.com': hide_chat_facebook,
      'messenger.com': hide_chat_messenger,
    },
  },
}

function mergeFilters(to, from) {
  Object.entries(from).forEach(([key]) => {
    if (Object.prototype.hasOwnProperty.call(to, key)) {
      if (Array.isArray(to[key].selector)) {
        to[key].selector = to[key].selector.concat(from[key].selector)
      }
    } else {
      to[key] = {
        ...from[key],
      }
    }
  })
  return to
}
