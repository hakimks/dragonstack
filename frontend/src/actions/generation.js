import { GENERATION_ACTION_TYPE} from './types'

export const generationActionCreater = (payload) => {
    return{
        type: GENERATION_ACTION_TYPE,
        generation: payload
    };
}