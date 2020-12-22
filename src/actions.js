export const ACTION_NAMES = {
    START_FETCH: "START_FETCH",
    FAIL_FETCH: "FAIL_FETCH",
    FINISH_FETCH: "FINISH_FETCH"
  };
export const startFetchBox = () => ({
    type: ACTION_NAMES.START_FETCH
  });
export const failFetchBox = error => ({
    type: ACTION_NAMES.FAIL_FETCH,
    payload: error
  });
export const finishFetchBox = data => ({
    type: ACTION_NAMES.FINISH_FETCH,
    payload: data
  });