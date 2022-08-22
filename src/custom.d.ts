

type RecordItem = {
    tags: Tag[]
    notes: string
    type: string
    amount: number  //数据类型
    createdAt?: string //表示时间。类,object细分为不同的类，?表示createdAt可以不存在
};
type RootState = {
    recordList: RecordItem[],
    createRecordError: Error | null,
    createTagError: Error | null,
    tagList: Tag[],
    currentTag?: Tag
};


type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' //success 表示成功，duplicated表示文件名重复，联合类型，字符串的子类型
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}

interface Window {

}