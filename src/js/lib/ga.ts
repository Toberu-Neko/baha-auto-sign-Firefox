import { getConfig } from './config'
import { setStorageData } from './storage'

type Event = {

}

const sendEvents = async (events: Event[]) => {
  // 直接回傳，不執行任何動作
  return Promise.resolve();
}

const pageView = async () =>
  await sendEvents([
    {
      name: 'page_view',
      params: {
        page_location: location.origin + '/background',
      },
    },
  ])

const event = async (category, action, label) =>
  await sendEvents([
    {
      name: category,
      params: {
        [action]: label,
      },
    },
  ])

event('extension', 'language', chrome.i18n.getUILanguage())

export { pageView, event }
