import Style from './Showcase.module.css'

export const Showcase = () => {
  return (
    <div className={Style.container}>
      <p className={Style.headline}>Confira nossos trabalhos:</p>
      <div className={Style.embedList}>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/9_Can73VVsE?si=INWwyumGaySKLMhW'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>

        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/cdIJk1kRt0Y?si=pkbDx0iN6h2tKRIr'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>

        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/qDbEPX4ysVE?si=1CCG433EmkFn5_aH'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>

        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/CF6rDZyJ-rU?si=mkwgh9_eInOrgjvx'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
