/*import { inject } from "vue";*/

import { inject } from "vue"
import { API } from "./api"

export default ({$axios}, inject) => {
  inject('getMakes', async (params) => await $axios.get(API.makes, params))
  inject('getModels', async (params) => await $axios.get(API.models, params))
  inject('getTrims', async (params) => await $axios.get(API.trims, params))
  inject('getBodies', async (params) => await $axios.get(API.bodies, params))
  inject('getEgnines', async (params) => await $axios.get(API.egnines, params))
  inject('getExteriorColors', async (params) => await $axios.get(API.colors.exterior, params))
  inject('getInteriorColors', async (params) => await $axios.get(API.colors.interior, params))
  inject('getMileages', async (params) => await $axios.get(API.mileages, params))
}