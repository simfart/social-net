import ReactTimeAgo from 'react-time-ago'

export const useTimeAgo = (time: string) => {
  const dt = new Date(time)

  return <ReactTimeAgo date={dt} />
}
