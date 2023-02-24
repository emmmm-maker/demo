function formatMsgTime (timespan:string):string {
    const dateTime = new Date(timespan) // 将传进来的字符串或者毫秒转为标准时间
    console.log('dateTime',dateTime);
    
    const year = dateTime.getFullYear()
    const month = dateTime.getMonth() + 1
    const day = dateTime.getDate()
    const hour = dateTime.getHours()
    const minute = dateTime.getMinutes()
    // const second = dateTime.getSeconds()
    const millisecond = dateTime.getTime() // 将当前编辑的时间转换为毫秒
    const now = new Date() // 获取本机当前的时间
    const nowNew = now.getTime() // 将本机的时间转换为毫秒
    let milliseconds:number = 0
    let timeSpanStr
    milliseconds = nowNew - millisecond
    console.log('milliseconds',milliseconds);
    
    if (milliseconds <= 1000 * 60 * 1) { // 小于一分钟展示为刚刚
      timeSpanStr = '刚刚'
    } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) { // 大于一分钟小于一小时展示为分钟
      timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前'
    } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) { // 大于一小时小于一天展示为小时
      timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前'
    } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) { // 大于一天小于十五天展示位天
      timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
    } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year === now.getFullYear()) {
      timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute
    } else {
      timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
    }
    return timeSpanStr
  }
  export default formatMsgTime