let dependencies = {
  'messenger-utilities': '1.2.0',
}
let notification = {
  message:
    'New version is released with many new changes. Please update your extension to the latest version.',
  url: '',
  time: Date.now(),
}
/**
 * Protect privacy
 */
// facebook.com
let protect_privacy_facebook_data = {
  general: {
    name: 'General',
    selector: [
      'div[data-pagelet=RightRail] > div[data-visualcompletion=ignore-dynamic]',
    ],
  },
}
// messenger.com
let protect_privacy_messenger_parent_selectors = {
  left_sidebar: 'div[data-pagelet=MWThreadList]',
  main: 'div[class~=rq0escxv][class~=du4w35lb][class~=d2edcug0][class~=hpfvmrgz][class~=rj1gh0hx][class~=buofh1pr][class~=g5gj957u][class~=j83agx80][class~=cbu4d94t][class~=l9j0dhe7][class~=ni8dbmo4][class~=stjgntxs]',
  right_sidebar:
    'div[class~=rq0escxv][class~=l9j0dhe7][class~=du4w35lb][class~=j83agx80][class~=cbu4d94t][class~=kuivcneq][class~=g5gj957u][class~=f4tghd1a][class~=ifue306u][class~=t63ysoy8]',
}
let protect_privacy_messenger_data = {
  general: {
    name: 'General',
    selector: [
      'span[role=tooltip]>div>div>span[dir=auto]', // tooltip
    ],
  },
  name: {
    name: 'name',
    selector: [
      protect_privacy_messenger_parent_selectors.left_sidebar +
        ' span[class~=d2edcug0][class~=hpfvmrgz][class~=qv66sw1b][class~=c1et5uql][class~=lr9zc1uh][class~=a8c37x1j][class~=keod5gw0][class~=nxhoafnm][class~=aigsh9s9][class~=fe6kdd0r][class~=mau55g9w][class~=c8b282yb][class~=d3f4x2em][class~=iv3no6db][class~=jq4qci2q][class~=a3bd9o3v][class~=oo9gr5id]', // left sidebar name ([class~=ekzkrbhg] for seen) ([class~=lrazzd5p] for unseen)
      protect_privacy_messenger_parent_selectors.main +
        ' span[class~=a8c37x1j][class~=ni8dbmo4][class~=stjgntxs][class~=l9j0dhe7][class~=ltmttdrg][class~=g0qnabr5][class~=ojkyduve]', // main chat name & online status
      protect_privacy_messenger_parent_selectors.main +
        ' div[data-testid=mw_message_sender_name]', // name in group chat
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=hyh9befq][class~=pipptul6][class~=sq6gx45u]', // quote name
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=r9r71o1u][class~=m9osqain][class~=fsrhnwul][class~=d0szoon8][class~=r8blr3vg][class~=qjjbsfad]', // message chat name
      protect_privacy_messenger_parent_selectors.right_sidebar +
        ' span[class~=d2edcug0][class~=hpfvmrgz][class~=qv66sw1b][class~=c1et5uql][class~=lr9zc1uh][class~=a8c37x1j][class~=keod5gw0][class~=nxhoafnm][class~=aigsh9s9][class~=fe6kdd0r][class~=mau55g9w][class~=c8b282yb][class~=d3f4x2em][class~=mdeji52x][class~=a5q79mjw][class~=g1cxx5fr][class~=lrazzd5p][class~=oo9gr5id][class~=oqcyycmt]', // right sidebar name
    ],
  },
  image: {
    selector: [
      protect_privacy_messenger_parent_selectors.left_sidebar +
        ' img[class~=a8c37x1j][class~=d2edcug0][class~=sn7ne77z][class~=bixrwtb6]', // avatar
      protect_privacy_messenger_parent_selectors.main + " img[width='32']", // icon message
      protect_privacy_messenger_parent_selectors.main + " img[width='14px']", // seen avatar icon
      protect_privacy_messenger_parent_selectors.main +
        ' img[class~=sf5mxxl7][class~=gab7stmx][class~=i4qgphn6][class~=s45kfl79][class~=emlxlaya][class~=bkmhp75w][class~=spb7xbtv][class~=abpf7j7b][class~=exrn9cbp]', // seen avatar icon in group
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=k4urcfbm][class~=hwddc3l5][class~=datstx6m]', // video
      // start duplicate selector
      protect_privacy_messenger_parent_selectors.main +
        ' img[class~=k4urcfbm][class~=bixrwtb6][class~=datstx6m][class~=q9uorilb]', // chat avatar
      protect_privacy_messenger_parent_selectors.main +
        ' img[class~=k4urcfbm][class~=datstx6m][class~=s45kfl79][class~=emlxlaya][class~=bkmhp75w][class~=spb7xbtv][class~=pzggbiyp][class~=bixrwtb6]', // chat avatar when typing
      protect_privacy_messenger_parent_selectors.right_sidebar +
        ' img[class~=k4urcfbm][class~=bixrwtb6][class~=datstx6m][class~=q9uorilb]', // right avatar
      // end duplicate selector
      protect_privacy_messenger_parent_selectors.main +
        ' img[class~=a8c37x1j][class~=d2edcug0][class~=datstx6m][class~=k4urcfbm]', // message img
      protect_privacy_messenger_parent_selectors.main +
        ' img[class~=a8c37x1j][class~=d2edcug0][class~=sn7ne77z][class~=bixrwtb6]', // main img
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=d2edcug0][class~=l9j0dhe7][class~=tkr6xdv7] > div', // sticker img
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=k4urcfbm][class~=j83agx80][class~=l9j0dhe7] > img', // link img
      protect_privacy_messenger_parent_selectors.right_sidebar +
        ' div[class~=gs1a9yip][class~=ow4ym5g4][class~=auili1gw][class~=j83agx80][class~=cbu4d94t][class~=buofh1pr][class~=g5gj957u][class~=i1fnvgqd][class~=oygrvhab][class~=cxmmr5t8][class~=hcukyx3x][class~=kvgmc6g5][class~=tgvbjcpo][class~=hpfvmrgz][class~=qt6c0cv9][class~=rz4wbd8a][class~=a8nywdso][class~=jb3vyjys][class~=du4w35lb][class~=i09qtzwb][class~=rq0escxv][class~=n7fi1qx3][class~=pmk7jnqg][class~=j9ispegn][class~=kr520xx4]', // right avatar
      // "img:not([width='16'])", // emoji icon
      // "img:not([width='30'])", // emoji icon
    ],
  },
  message: {
    selector: [
      protect_privacy_messenger_parent_selectors.left_sidebar +
        ' div[class~=bp9cbjyn][class~=j83agx80][class~=m9osqain]', // left sidebar message
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=buofh1pr][class~=j83agx80][class~=btwxx1t3][class~=cgat1ltu][class~=a8nywdso][class~=rz4wbd8a]', // call block
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=oo9gr5id][class~=ii04i59q][class~=jq4qci2q][class~=g9io39s2]', // their message
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=ljqsnud1][class~=ii04i59q][class~=jq4qci2q][class~=g9io39s2]', // your message
      protect_privacy_messenger_parent_selectors.main +
        ' blockquote[class~=av1wybal][class~=mk2mc5f4][class~=peup4ujy][class~=hv4rvrfc][class~=dati1w0a][class~=ii04i59q][class~=c1et5uql][class~=e9vueds3][class~=j5wam9gi][class~=aahdfvyu][class~=cxmmr5t8][class~=tvmbv18p][class~=hcukyx3x][class~=ilywhbp3]', // forward message
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=jm1wdb64][class~=f10w8fjw][class~=e9vueds3][class~=mty21rlj][class~=m9osqain]', // quoted message
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=jktsbyx5][class~=rv4hoivh][class~=osnr6wyh][class~=h4z51re5][class~=d2edcug0][class~=e72ty7fz][class~=qmr60zad][class~=qlfml3jp][class~=inkptoze][class~=l6v480f0][class~=maa8sdkg][class~=s1tcr66n][class~=aypy0576][class~=erlsw9ld][class~=qv66sw1b]', // unsend message
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=j83agx80][class~=taijpn5t][class~=cbu4d94t][class~=buofh1pr][class~=cehpxlet][class~=n1l5q3vz][class~=tvfksri0][class~=n851cfcs][class~=ozuftl9m]', // link title
    ],
  },
  chatbox: {
    selector: [
      protect_privacy_messenger_parent_selectors.main +
        ' div[class~=j83agx80][class~=buofh1pr][class~=nhadk0th][class~=ozuftl9m][class~=aov4n071][class~=bi6gxh9e][class~=hpfvmrgz][class~=l9j0dhe7]',
    ],
  },
}

/**
 * Hide chat
 */
let hide_chat_facebook = ''
let hide_chat_messenger =
  "div[data-testid=mwthreadlist-item-open] a[href='/t/{id}/']"

export default {
  version: Date.now(),
  dependencies: dependencies,
  notification: notification,
  data: {
    protect_privacy: {
      'facebook.com': protect_privacy_facebook_data,
      'messenger.com': protect_privacy_messenger_data,
    },
    hide_chat: {
      'facebook.com': hide_chat_facebook,
      'messenger.com': hide_chat_messenger,
    },
  },
}
