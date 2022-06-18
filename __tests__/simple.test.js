import request from 'umi-request'
// const debug = require('debug')('simpleTest')

describe('ajaxTest', () => {
    it('test fetch api', async () => {
        const response = await request.post(
            'http://www.ycrxbm.cn:8080/sys/config/countryList'
        )
        expect(response.cityCode).toBe('6403')
    })
})
