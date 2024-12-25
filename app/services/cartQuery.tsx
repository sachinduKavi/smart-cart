import { domain, header } from "./axios_config";


const cartInitializeQuery = async (code: string) => {
    return await domain.get(`cart/initialize/${code}`, header)
}

export {
    cartInitializeQuery
}