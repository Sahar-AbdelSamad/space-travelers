const TOGGLE_MOBILE_NAVIGATION_MENU = 'TOGGLE_MOBILE_NAVIGATION_MENU';

const initialState = {
  visibleMobileMenu: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_NAVIGATION_MENU:
      return { visibleMobileMenu: !action.payload };
    default:
      return state;
  }
};
export default reducer;

export const handleToggle = (payload) => ({
  type: TOGGLE_MOBILE_NAVIGATION_MENU,
  payload,
});
