export const loadFromLocalStorage = (key: string, initialState: any): any => {
  if (typeof window === 'undefined') {
    // We are in server side, return initial state
    return initialState;
  }

  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn(`Failed to load ${key} from local storage:`, err);
    return initialState;
  }
};

export const saveToLocalStorage = (key: string, state: any): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.warn(`Failed to save ${key} to local storage:`, err);
  }
};
