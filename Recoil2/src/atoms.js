import {atom, selector} from 'recoil';

export const netWorkAtom = atom({
    key: 'network',
    default: 102
})

export const jobsAtom = atom({
    key: 'jobs',
    default: 0
})

export const notificationAtom = atom({
    key: 'notification',
    default: 0
})

export const messagingAtom = atom({
    key: 'messaging',
    default: 12
})

export const totalNotificationSelector = selector({
    key: 'totalNotification',
    get: ({get}) => {
        return get(netWorkAtom) + get(jobsAtom) + get(notificationAtom) + get(messagingAtom);
    }
})