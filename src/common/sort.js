const { Navi, SortNavi, FilterNavi } = window.Config;

export function Sort (monitors = []) {
  if (SortNavi && FilterNavi) {
    return sortAndFilter(monitors);
  }

   // 如果启用了排序
  if (SortNavi) {
    return sort(monitors);
  }

  // 如果启用了过滤
  if (FilterNavi) {
    return filter(monitors);
  }

  // 如果都没有启用，则直接返回 monitors
  return monitors;
}

const sort = (monitors = []) => {
  const urlIndexMap = new Map(Navi.map((navItem, index) => [navItem.url, index]));

  monitors.sort((a, b) => {
    const indexA = urlIndexMap.get(a.url);
    const indexB = urlIndexMap.get(b.url);
    return (indexA !== undefined && indexB !== undefined) ? indexA - indexB : (indexA !== undefined) ? -1 : (indexB !== undefined) ? 1 : 0;
  });

  return monitors;
}

const filter = (monitors = []) => {
  return monitors.filter(item => Navi.some(navItem => navItem.url === item.url));
};

const sortAndFilter = (monitors = []) => {
  return sort(filter(monitors));
};
