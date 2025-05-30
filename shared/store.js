let data = {};
const listeners = [];

export const setData = (newData) => {
  data = { ...data, ...newData };
  listeners.forEach((fn) => fn(data));
};

export const getData = () => data;

export const subscribe = (fn) => {
  listeners.push(fn);
  return () => {
    const index = listeners.indexOf(fn);
    if (index > -1) listeners.splice(index, 1);
  };
};
