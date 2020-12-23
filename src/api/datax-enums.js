import request from '@/utils/request'

export function charWmsOrgList(params) {
  return request({
    url: '/api/enums/charWmsOrgList',
    method: 'get',
    params
  })
}


export function charErpOrgList(params) {
  return request({
    url: '/api/enums/charErpOrgList',
    method: 'get',
    params
  })
}

export function charTeamList(params) {
  return request({
    url: '/api/enums/charTeamList',
    method: 'get',
    params
  })
}



export function charVersionList(params) {
  return request({
    url: '/api/enums/charVersionList',
    method: 'get',
    params
  })
}


export function charJobStatusList(params) {
  return request({
    url: '/api/enums/charJobStatusList',
    method: 'get',
    params
  })
}

