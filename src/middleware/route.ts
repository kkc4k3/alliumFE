import Cookies from 'universal-cookie'
import axios from 'axios'

export default async () => {
  // const cookies = new Cookies()
  // console.log('=======================================')
  // console.log('クッキーを取得')
  // console.log('=======================================')
  // console.group()
  // let cookie = cookies.get('allium_fe_client')
  // console.log('取得したクッキー')
  // console.group()
  // console.log(cookie)
  // console.groupEnd()
  // // クッキーにアプリケーションの情報が入ってない時だけ発行
  // if (!cookie) {
  //   const appToken = await axios.post(
  //     `${process.env.PLEROMA_URL}/api/v1/apps`,
  //     {
  //       client_name: 'alliumFE',
  //       redirect_uris: 'urn:ietf:wg:oauth:2.0:oob',
  //       scopes: 'write',
  //     }
  //   )
  //   const appObj: object = appToken.data
  //   cookies.set('allium_fe_client', JSON.stringify(appObj))
  //   console.log('アプリケーションを登録しました')
  // } else {
  //   console.log('アプリケーション登録済み')
  // }
  // cookie = cookies.get('allium_fe_client')
  // console.log('現在格納されているクッキー')
  // console.group()
  // console.log(cookie)
  // console.groupEnd()
  // console.groupEnd()
}
