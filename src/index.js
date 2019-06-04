class GraphqlWxRequest {
    constructor() {
        if (!wx || !wx.request) {
            throw new Error("Not in weixin!")
        }
    }

    request(url, params, headers = {}) {
        if (headers && headers.Referer) {
            console.log("cannot set referer")
        }

        return new Promise((resolve, reject) => {
            let req = wx.request({
                url,
                data: params,
                header: headers,
                method: "POST",
                success: (res) => {
                    console.log(res)
                }
            })
        })
    }
}