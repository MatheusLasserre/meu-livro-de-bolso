import Image from 'next/image'
import Style from './Hero.module.css'
import Logo from '~/../public/assets/home/hero-logo.png'
import Link from 'next/link'
import HeroArtImage from '~/../public/assets/home/hero-art.png'
export const Hero: React.FC = () => {
  const buttonLink = 'https://forms.gle/XQM8etSLkb1Y3ezQ9'
  return (
    <div className={Style.container}>
      <div className={Style.box}>
        <div className={Style.boxImage}>
          <Image src={Logo} fill alt='Hero Logo' />
        </div>
        <h1 className={Style.headline}>
          Novos Tempos.
          <br />
          Novos Livros.
        </h1>
        <h2 className={Style.paragraph}>
          Transforme seu livro em uma <span className={Style.redBold}>experiência auditiva</span> e{' '}
          <span className={Style.redBold}>imersiva</span> para as novas gerações.
        </h2>
        <Link href={buttonLink} className={Style.button}>
          Quero Transformar meu livro em audiobook
        </Link>
      </div>
      <HeroArt />
    </div>
  )
}

const HeroArt: React.FC = () => {
  return (
    <div className={Style.artContainer}>
      <Image src={HeroArtImage} alt='Hero Art' fill />
    </div>
  )
}
