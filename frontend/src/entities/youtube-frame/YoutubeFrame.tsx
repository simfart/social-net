import { FC, PropsWithChildren, useCallback } from 'react'

interface IVideo extends PropsWithChildren {
  videoURL: string
}

export const YoutubeFrame: FC<IVideo> = ({ videoURL }) => {
  const getId = useCallback((url: string) => {
    const regex =
      /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/
    const match = url.match(regex)
    if (match !== null) {
      return match[3]
    }
  }, [])

  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/ ${getId(videoURL)}`}
      title="YouTube video player"
      srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}
    img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
    </style>
    <a href=https://www.youtube.com/embed/${getId(videoURL)}?autoplay=1>
    <img src=https://img.youtube.com/vi/${getId(
      videoURL,
    )}/hqdefault.jpg alt='Img'>
    <span>▶</span>
    </a>`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}
