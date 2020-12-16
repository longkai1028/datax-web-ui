import request from '@/utils/request'



export function loadParamById(id) {
  return request({
    url: '/api/param/loadParamById?id=' + id,
    method: 'post'
  })
}
