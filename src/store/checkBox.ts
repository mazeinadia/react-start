const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export interface ICheckBoxState {
  checked: boolean
}

export const initialState: ICheckBoxState = { checked: false };

export const toggleCheckbox = () => ({
    type: TOGGLE_CHECKBOX,
});

type ActionTypes = ReturnType<typeof toggleCheckbox>;

export default (state: ICheckBoxState = initialState, action: ActionTypes) => {
  const { type } = action;
  switch (type) {
      case TOGGLE_CHECKBOX:
        return { checked: !state.checked };
      default: return state;
  }
}