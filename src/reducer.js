export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    discover_weekly: null,
    item: [],
      /* token: "BQA4EKjTw067WGeyi7O-S7n2MN3jxnYJgsicXN8JKM9JeHoCkmNmDVvH_r95DEADcQqHJw1IY6BLGH8n0R-sJPYYovGcUVsQbKBdY_x4S2ekZt59dF4SrswEUy0_eONUdftSk4Q9zh5Ryf_bHeuKL54ks-4ZPqBQYs8MweBGOekNW1J3", */
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            }
        default:
            return state;
    }
}

export default reducer;