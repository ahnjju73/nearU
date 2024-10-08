// const { data, fetchNextPage, refetch, remove } = useInfiniteQuery(
//   ['getUsers'],
//   async ({pageParam}) => getUsers(pageParam).then(res => res?.data),
//   {
//     retry: 0,
//     select: d => {
//       const temp = d?.pages?.at(-1);
//       const tempList = [...temp?.items || []];
//       return ({
//         pages: [...(data?.pages || []), ...tempList],
//         pageParams: [temp.nextToken, temp.total],
//     })},
//   getNextPageParam: (lastPage: any) => lastPage?.nextToken === 'D' ? undefined : 'lastPage?.nextToken',
//   onError: ()=> {}
// });
export const a = 1;
