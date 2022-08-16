type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number  //数据类型
    createdAt?: Date //表示时间。类,object细分为不同的类，?表示createdAt可以不存在
};