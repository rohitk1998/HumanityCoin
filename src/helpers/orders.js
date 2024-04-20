export const insertOrUpdate = (list, order) => {
  const { state, id } = order;
  switch (state) {
    case "wait":
      // eslint-disable-next-line no-case-declarations
      const index = list.findIndex((value) => value.id === id);

      if (index === -1) {
        list.unshift({ ...order });
        return list;
      }

      return list.map((item) => {
        if (item.id === order.id) {
          return { ...order };
        }

        return item;
      });

    default:
      return list.reduce((memo, item) => {
        if (id !== item.id) {
          memo.push(item);
        }

        return memo;
      }, []);
  }
};

export const insertIfNotExisted = (list, order) => {
  const index = list.findIndex((value) => value.id === order.id);

  return index === -1 ? list.concat({ ...order }) : [...list];
};

export const insertOrUpdateHistory = (list, order) => {
  const { state, id } = order;

  // if (state === "wait") {
  //   return list;
  // } else {
  // eslint-disable-next-line no-case-declarations
  const index = list.findIndex((value) => value.id === id);

  if (index === -1) {
    list.unshift({ ...order });
    return list;
  }

  return list.map((item) => {
    if (item.id === order.id) {
      return { ...order };
    }

    return item;
  });
  // }
};
