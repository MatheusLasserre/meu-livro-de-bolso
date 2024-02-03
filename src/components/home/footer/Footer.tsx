import Style from './Footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className={Style.container}>
      <p className={Style.disclaimer}>Meu Livro de Bolso © 2024.</p>
    </footer>
  )
}
