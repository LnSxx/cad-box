import { ACTION_NAMES } from "../actions";
const initialState = {
    box: [
        [ [ 0, 0, '50' ], [ 0, '50', '50' ], [ 0, '50', 0 ] ],
        [ [ 0, 0, '50' ], [ 0, '50', 0 ], [ 0, 0, 0 ] ],
        [ [ 0, '50', 0 ], [ 0, '50', '50' ], [ '50', '50', '50' ] ],
        [ [ 0, '50', 0 ], [ '50', '50', '50' ], [ '50', '50', 0 ] ],
        [ [ 0, 0, 0 ], [ 0, '50', 0 ], [ '50', '50', 0 ] ],
        [ [ 0, 0, 0 ], [ '50', '50', 0 ], [ '50', 0, 0 ] ],
        [ [ 0, 0, '50' ], [ 0, 0, 0 ], [ '50', 0, 0 ] ],
        [ [ 0, 0, '50' ], [ '50', 0, 0 ], [ '50', 0, '50' ] ],
        [ [ 0, '50', '50' ], [ 0, 0, '50' ], [ '50', 0, '50' ] ],
        [ [ 0, '50', '50' ], [ '50', 0, '50' ], [ '50', '50', '50' ] ],
        [ [ '50', '50', 0 ], [ '50', '50', '50' ], [ '50', 0, '50' ] ],
        [ [ '50', '50', 0 ], [ '50', 0, '50' ], [ '50', 0, 0 ] ]
      ],
    isFetching: false,
    error: null
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_NAMES.START_FETCH:
      return { ...state, isFetching: true };
    case ACTION_NAMES.FINISH_FETCH:
      return { isFetching: false, box: action.payload.boxData, error: null };
    case ACTION_NAMES.FAIL_FETCH:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
