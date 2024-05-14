
import { SET_MENU } from './menu_action';

const initialState = {
    menu: "전체보기"
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU:
            return {
                ...state,
                menu: action.data
            };
        default:
            return state;
    }
};

export { menuReducer };