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
    error: null,
    dimensions: {
      length: 50,
      width: 50,
      height: 50
    }
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_NAMES.START_FETCH:
      return { ...state, isFetching: true };
    case ACTION_NAMES.FINISH_FETCH:
      return { ...state, isFetching: false, box: action.payload.boxData, error: null };
    case ACTION_NAMES.FAIL_FETCH:
      return { ...state, isFetching: false, error: action.payload };
    case ACTION_NAMES.UPDATE_LENGTH:
      return { ...state, dimensions: {...state.dimensions, length: action.value} }
    case ACTION_NAMES.UPDATE_WIDTH:
      return { ...state, dimensions: {...state.dimensions, width: action.value} }
    case ACTION_NAMES.UPDATE_HEIGHT:
      return { ...state, dimensions: {...state.dimensions, height: action.value} }
    default:
      return state;
  }
};
