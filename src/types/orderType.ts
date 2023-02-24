export interface orderType {
    introduce: string
    orderNo: string
    payTime: string
    totalAmount: string
    refundStatus:boolean
}
export interface billType {
    faceName: string
    faceUid: string
    landZfbUserId: string
    dayAmount: number
    monthAmount: number
    payTime: string
    providerId: string
    dayRecords?: Array<orderType>
    monthRecords?: Array<orderType>
    schoolId: string
    facultyId?: string
    schoolName:string
}

export interface orderMsg {
    faceUid:string
    orderId:string
    payTime:string
}

interface goods {
    goodsName:string
    goodsImageUrl:string
    goodsId:string
    [propname:string]:any
}
export interface orderDetails {
    id:string // 订单编号
    createTime:string //刷脸时间
    tradePrice:number //订单金额
    outTradeNo:string // 交易流水号
    payTime:string //支付时间
    details:Array<goods>
    machineName:string
    [propname:string]:any
}

export interface model {
    certNo:string
    certType:string
    operatorUserId:string
    outUserId:string
    parentPhone?:string
    schoolStdCode:string
    studentName:string
    subCode:string
}