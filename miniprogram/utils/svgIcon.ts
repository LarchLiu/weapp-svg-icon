// svg-icon
import MdiLight from '@iconify-json/mdi-light';
import type { IconifyJSON, IconifyInfo, IconifyMetaData, IconifyChars } from '@iconify/types';
let ICONIFY_API = ''

interface IconifyData {
  icons: IconifyJSON;
  info: IconifyInfo;
  metadata: IconifyMetaData;
  chars: IconifyChars;
}

const iconifyPresets: Record<string, IconifyData> = {
  MdiLight
}
const customerSvg: Record<string, string> = {
  EmojioneMonotoneMotorcycle: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="currentColor" d="M13.895 39.35h-2.52c-1.754.23 1.685 1.96 1.685 1.96s1.685-1.239 1.685-1.614c-.001-.375-.85-.346-.85-.346m12.871 11.809c-.466.269-.93.875-1.03 1.346l-.19.894c-.1.472.009 1.028.241 1.236c.232.209.545 0 .694-.461l.86-2.661c.151-.464-.109-.624-.575-.354m12.117-1.016c-.465.271-.93.875-1.029 1.348l-.191.892c-.1.472.01 1.028.242 1.238c.232.208.545.001.695-.463l.859-2.659c.148-.466-.111-.625-.576-.356"></path><path fill="currentColor" d="M52.625 43.558a9.41 9.41 0 0 0-7.074 3.182l-.646-.286c.207-.189.43-.385.689-.59c.41-.322.566-.688.574-1.051l12.426-5.883a3.774 3.774 0 0 0-.602-2.211c1.729-2.172 1.758-4.762 1.758-4.904V30.34h-1.5c-2.23 0-3.977.048-6.145.673c-1.482.428-2.537.888-3.318 1.386c.221-1.014.082-2.19-.785-3.442c0 0-5.709-5.956-12.273-7.799c1.965-1.562 2.613-3.287 2.613-6.885C38.342 7.505 32.745 2 25.865 2c-6.879 0-12.476 5.505-12.476 12.272c0 .49.032.925.087 1.322l-.017.006c-1.198.428 1.03 6.574 2.308 6.636c1.832 4.296 4.56 5.27 6.648 5.27c1.069 0 2.205-.282 3.319-.792l.342 4.041l-2.033 1.078l-.094-.084l-1.413-1.268l-.43-.387h-.581c-4.539 0-8.794 2.188-11.383 5.851l-.205.288c-1.218 1.707-2 2.915-1.781 4.1c.097.521.391.97.83 1.263c.401.27.97.646 1.618 1.074a10.353 10.353 0 0 0-5.775 2.272l1.386.142C3.676 46.732 2 49.563 2 52.779C2 57.873 6.197 62 11.375 62c4.079 0 7.539-2.565 8.829-6.143l.002.089a2.721 2.721 0 0 0 2.74 2.747c.087 0 .176-.003.267-.012l.038-.002l.038-.006l18.366-2.505l1.428-.194l-.141-1.41c-.014-.135-.016-.27-.02-.406a8.956 8.956 0 0 0-.037-.672a15.023 15.023 0 0 1-.061-1.934l.486.201a9.372 9.372 0 0 0-.061 1.025c0 5.094 4.197 9.221 9.375 9.221S62 57.873 62 52.779s-4.197-9.221-9.375-9.221m-7.756-4.788c4.592-2.287 1.193-4.477 7.658-6.342c1.986-.572 3.58-.613 5.723-.613c0 0 0 3.746-3.215 5.475c-6.537 3.516-11.785 3.834-11.785 3.834s-.059-1.519 1.619-2.354m-6.668 5.592a3.665 3.665 0 0 1 1.186 1.915c-1.242.205-1.855 1.041-2.24 1.568c-.012.018-.02.025-.031.041l1.085-3.524M25.382 24.699c-1.012.548-2.037.839-2.968.839c-2.376 0-3.855-1.9-4.767-3.986c3.711-1.563 8.254-4.11 10.052-5.979a2 2 0 0 0 .55.085c1.102 0 1.994-.879 1.994-1.961c0-1.083-.893-1.961-1.994-1.961c-.928 0-1.7.625-1.923 1.47c-2.677-.134-7.309.712-10.907 1.764a7.877 7.877 0 0 1-.031-.697c0-5.682 4.7-10.305 10.476-10.305c5.777 0 10.477 4.623 10.477 10.305c0 4.682-.797 5.097-6.999 8.33a255.278 255.278 0 0 0-3.96 2.096m-1.009 12.437c.09-.222.136-.438.153-.657l6.07-2.73a1.667 1.667 0 0 0 .843-1.848h.01l-.145-1.701l4.137 3.615c-.129-.018-.256-.045-.387-.045c-.252 0-.498.033-.73.1c-1.014.289-2.478.854-3.895 1.4c-.784.303-1.525.588-2.074.781c-1.199.418-1.977 1.377-1.977 2.44v.188a70.492 70.492 0 0 0-2.756-.568c.343-.269.587-.575.751-.975m9.621-1.613l-1.04 4.082l-1.77.416a45.073 45.073 0 0 0-3.307-.979v-.552c0-.466.461-.87.981-1.052c1.309-.458 3.564-1.384 5.136-1.915M19.677 32.92l.743-.311c.142-.061.288-.088.433-.088c.413 0 .803.23.975.619l.641 1.473c.953 2.183.953 2.183-1.975 3.409c-.401.169-.75.237-1.053.237c-1.194 0-1.661-1.07-1.761-1.301c-.771-1.76.375-2.646 1.335-3.128c.024-.383.268-.746.662-.91m-3.614 19.859c0 .212-.035.414-.063.619l1.913-.126a6.314 6.314 0 0 1-.625 2.294l-1.578-1.039a4.58 4.58 0 0 1-.643 1.063l1.723.834a6.56 6.56 0 0 1-1.71 1.682l-.847-1.695a4.64 4.64 0 0 1-1.033.617l1.071 1.537a6.625 6.625 0 0 1-2.394.645l.128-1.882c-.208.028-.414.062-.629.062c-.199 0-.388-.033-.581-.057l.147 1.88a6.625 6.625 0 0 1-2.401-.618l1.057-1.553a4.645 4.645 0 0 1-1.081-.631l-.847 1.695a6.576 6.576 0 0 1-1.71-1.682l1.723-.833a4.6 4.6 0 0 1-.643-1.063l-1.578 1.039a6.314 6.314 0 0 1-.625-2.294l1.913.126c-.028-.205-.063-.407-.063-.619c0-.197.035-.383.059-.572l-1.912.145a6.313 6.313 0 0 1 .628-2.359l1.578 1.039c.155-.371.367-.71.61-1.025l-1.73-.818a6.54 6.54 0 0 1 1.749-1.737l.848 1.695a4.617 4.617 0 0 1 1.081-.633l-1.057-1.553a6.578 6.578 0 0 1 2.333-.614l-.128 1.882c.208-.027.414-.063.629-.063s.421.035.629.063l-.127-1.882a6.594 6.594 0 0 1 1.859.417l-1.659 3.344a2.85 2.85 0 0 0-.701-.098c-1.554 0-2.813 1.238-2.813 2.768s1.259 2.766 2.813 2.766c1.553 0 2.813-1.236 2.813-2.766c0-.8-.349-1.514-.899-2.019l2.145-3.017c.514.401.984.855 1.357 1.391l-1.723.834c.247.313.468.645.627 1.015l1.563-1.054c.361.721.59 1.514.655 2.355l-1.913-.125c.026.205.062.407.062.62m25.33.864c.039.357.021.715.057 1.064l-18.368 2.506a1.581 1.581 0 0 1-.136.006c-.8 0-1.24-.633-1.24-1.295c0 0-.098-6.318-.956-7.871c-.439-.795-2.773-2.322-2.809-2.346c0 0-6.095-3.979-8.11-5.331c-.745-.499.669-2.354 1.543-3.589a12.35 12.35 0 0 1 7.092-4.842c-.31.248-.563.553-.725.908c-1.137.729-1.61 1.592-1.756 2.402c-.291.262-.58.545-.86.867c-.392.448-1.699 2.363 0 2.363c.332 0 .986.044 1.861.133a3.202 3.202 0 0 0 2.455 1.117c.527 0 1.08-.121 1.643-.357l.363-.152c3.213.525 7.029 1.342 10.084 2.486c.297.111.564.219.806.324l-1.556 6.113l-.705-.174a3.614 3.614 0 0 0-1.471-.056c.09-.108.033-.271-.223-.461l-6.418-4.747c-.441-.326-.803-.229-.803.217s.359 1.078.797 1.408l4.144 3.115c.439.33 1.249.6 1.8.6h.156c-1.08.357-1.948 1.215-2.232 2.365l8.163 2.017c.947.233 1.898-.312 2.123-1.224l.307-1.228c2.166-.263 1.76-2.276 3.551-2.276c.691 0 1.299.103 1.83.244c-.427 1.42-.599 3.889-.407 5.694m-.651-9.03l-.652-.287l3.65-1.768a25.284 25.284 0 0 0 2.982-.524l-1.502.937c-.199-.209-.352-.336-.352-.336l-4.126 1.978m8.178 2.84l.496.994l-1.109-.49c.199-.174.392-.355.613-.504m8.393 5.326c0 .212-.035.414-.063.619l1.912-.126a6.314 6.314 0 0 1-.625 2.294l-1.578-1.039a4.546 4.546 0 0 1-.643 1.063l1.723.833a6.525 6.525 0 0 1-1.709 1.682l-.848-1.694c-.318.242-.656.46-1.031.616l1.07 1.537a6.624 6.624 0 0 1-2.395.645l.127-1.882c-.207.028-.414.062-.629.062c-.199 0-.389-.033-.58-.057l.146 1.88a6.62 6.62 0 0 1-2.4-.618l1.057-1.553a4.652 4.652 0 0 1-1.082-.631l-.846 1.695a6.525 6.525 0 0 1-1.709-1.682l1.723-.834a4.559 4.559 0 0 1-.643-1.063l-1.578 1.039a6.294 6.294 0 0 1-.625-2.294l1.057.069l3.623 1.5a2.815 2.815 0 0 0 1.857.703c1.553 0 2.813-1.236 2.813-2.766c0-1.385-1.035-2.521-2.385-2.725l-2.799-1.237c.189-.114.387-.218.594-.302L49.79 46.96a6.59 6.59 0 0 1 2.332-.614l-.127 1.882c.207-.027.414-.063.629-.063s.422.035.629.063l-.127-1.882a6.61 6.61 0 0 1 2.332.614l-1.057 1.553c.377.152.721.361 1.043.601l.828-1.702a6.537 6.537 0 0 1 1.768 1.721l-1.723.833c.246.313.467.646.627 1.016l1.563-1.054c.361.721.59 1.514.654 2.355l-1.911-.123c.027.204.063.406.063.619"></path></svg>',
  EmojioneMonotoneSportsMedal: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="currentColor" d="m32.001 27.927l-3.246 9.989H18.251l8.498 6.174l-3.248 9.988l8.5-6.172l8.498 6.172l-3.248-9.988l8.498-6.174H35.245l-3.244-9.989m2.838 15.12l1.752 5.396l-4.59-3.336l-4.594 3.336l1.756-5.396l-4.592-3.336h5.676l1.754-5.396l1.754 5.396h5.674l-4.59 3.336"></path><path fill="currentColor" d="M44.657 26.519v-8.698c0-.364-.199-.67-.481-.86L54 2H35.165l-3.164 4.746L28.837 2H10l9.823 14.96a1.04 1.04 0 0 0-.48.861v8.698C14.862 30.187 12 35.758 12 42c0 11.045 8.955 20 20 20h.001c.681 0 1.354-.035 2.017-.102C44.115 60.887 52 52.365 52 42c0-6.242-2.862-11.813-7.343-15.481M40.826 3h6.328l-8.825 13.239l-3.164-4.746L40.826 3m.667 17.985l.973-1.458c.052.125.082.261.082.404v4.219a.994.994 0 0 1-.297.7C39.251 23.052 35.752 22 32 22a19.87 19.87 0 0 0-10.251 2.851a.996.996 0 0 1-.297-.701v-4.219c0-.143.03-.28.082-.404l.973 1.459h18.986zM16.846 3h6.328l11.324 16.985H28.17L16.846 3M32 59c-9.388 0-17-7.611-17-17s7.612-17 17-17s17 7.611 17 17s-7.612 17-17 17"></path></svg>',
}
const iconifyPreload: string[] = [
  'carbon:portfolio',
]

function svgNameSwtich(id: string){
  return id.split(/:|-|_/).filter(Boolean).map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join('')
}

function encodeSvg(svg: string) {
  return svg.replace('<svg', (~svg.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"'))
    .replace(/"/g, '\'')
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
}

function getDataUri(data: string) {
  return `url("data:image/svg+xml;utf8,${data}")`;
}

function presetsIconify(id: string) {
  let parts = id.split(':');
  let prefix = ''
  let icon = ''
  if (parts.length === 2) {
    // prefix:icon.svg
    prefix = svgNameSwtich(parts[0])
    icon = parts[1]
  }
  if (parts.length === 1) {
    parts = parts[0].split('-');
    if (parts.length > 1) {
      // prefix-icon.svg
      prefix = svgNameSwtich(parts.shift() as string)
      icon = parts.join('-')
    }
  }
  const setData = iconifyPresets[prefix] ? iconifyPresets[prefix].icons : null
  const width = setData && setData.width ? setData.width : 32
  const height = setData && setData.height ? setData.height : 32
  const iconData = setData && setData.icons && setData.icons[icon] ? setData.icons[icon] : null
  if (!iconData) {
    return ''
  }
  const renderData = {
    attributes: {
      width: '1em',
      height: '1em',
      preserveAspectRatio: 'xMidYMid meet',
      viewBox: `0 0 ${width} ${height}`
    },
    body: iconData.body
  }
  const svgAttributes = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    ...renderData.attributes,
  };
  const svgAttributesStr = Object.keys(svgAttributes)
      .map(
        (attr) => `${attr}="${svgAttributes[attr as keyof typeof svgAttributes]}"`
      )
      .join(' ');
  
  // Generate SVG
  return `<svg ${svgAttributesStr}>${renderData.body}</svg>`;
}

export function getLocalSVG(id: string) {
  const name =  svgNameSwtich(id)
  let data = customerSvg[name]
  if (data) {
    return getDataUri(encodeSvg(data));
  } else {
    data = presetsIconify(id)
    if (data) {
      return getDataUri(encodeSvg(data));
    } else {
      data = wx.getStorageSync(name)
      if (data) {
        return getDataUri(data);
      }
      return ''
    }
  }
}

function iconifyApi(id: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (ICONIFY_API) {
      wx.request({
        url: `${ICONIFY_API}/${id}.svg`,
        success: (res) =>  {
          if (res.statusCode === 200)
            resolve(res.data as string)
          else
            reject(res.errMsg)
        },
        fail: (err) => {
          reject(err)
        }
      })
    } else {
      reject('no ICONIFY_API')
    }
  })
}

export function getIconifySVG(id: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const name = svgNameSwtich(id)
    iconifyApi(id).then(r => {
      const data = encodeSvg(r)
      wx.setStorage({
        key: name,
        data: data,
        success(_) {
          resolve(getDataUri(data))
        },
        fail(err) {
          reject(err)
        }
      })
    }).catch(e => {
      reject(e)
    })
  })
}

export function iconifySetup(api: string) {
  if (api) {
    ICONIFY_API = api
    for (const id of iconifyPreload) {
      const name = svgNameSwtich(id)
      console.log(name)
      const data = wx.getStorageSync(name)
      if (!data) {
        getIconifySVG(id).catch(e => {
          console.error(e)
        })
      }
    }
  }
}

export default {
  getLocalSVG: getLocalSVG,
  getIconifySVG: getIconifySVG,
  iconifySetup: iconifySetup
}
