const localStorageKeyName = 'recordList'
const recordListModel = {
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];//as...强制指定为一个类型
    },
    save(data: RecordItem[]) { window.localStorage.setItem(localStorageKeyName, JSON.stringify(data)) }
}

export default recordListModel