function getActiveElement(rects: DOMRect[]) {
  if (rects.every((value) => Number(value) === 1)) {
    return 0;
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < Math.abs(item.y)) {
        return acc;
      }

      return {
        index,
        position: item.y,
      };
    },
    { index: 0, position: rects[0].y }
  );

  return closest.index;
}

export default getActiveElement;
