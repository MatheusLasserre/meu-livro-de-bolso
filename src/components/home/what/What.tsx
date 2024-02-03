import Style from './What.module.css'

export const What: React.FC = () => {
  return (
    <div className={Style.container}>
      <LogoIcon />
      <div className={Style.flex}>
        <div className={Style.flexItem}></div>
        <div className={Style.flexItem}>
          <p className={Style.headline}>O que é a Meu Livro de Bolso?</p>
          <p className={Style.paragraph}>
            A <strong>Meu Livro de Bolso</strong> foi criada para levar os livros aos ouvidos do
            brasileiro. Em tempos onde a leitura torna-se cada vez mais difícil, devido ao cotidiano
            atarefado e a vida agitada que levamos, o audiobook surge como uma importante e
            divertida saída para aqueles que são aficionados por ler e continuam cultivando esse
            hábito saudável.
          </p>
          <p className={Style.paragraph}>
            Para muitos, a leitura no papel é insubstituível. Porém, a nossa proposta é tornar a
            escuta dos livros uma atividade tão ou mais prazerosa e imersiva que a forma
            tradicional, sem perder o exercício da imaginação, da criatividade e o aprendizado.
          </p>
          <p className={Style.paragraph}>
            Produzidos com carinho, mantemos o rigor da qualidade e prezamos pela atenção ao
            detalhes da obra e da narração, assim como o profissionalismo das gravações, nossos
            audiobooks são confeccionados pensando no leitor contemporâneo — permitindo uma
            experiência encantadora e completa a uma nova geração de apaixonados pela leitura.
          </p>
        </div>
      </div>
    </div>
  )
}

const LogoIcon: React.FC = () => {
  return (
    <svg
      width='113'
      height='136'
      viewBox='0 0 113 136'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M113 56.2454C113 93.3006 89.744 124.57 56.5011 136V112.755C25.2954 112.755 0 87.5145 0 56.3786C0 25.2428 25.2954 0 56.5011 0C87.7068 0 113 25.2428 113 56.3786M56.709 43.7758C45.8709 29.1206 29.1379 35.7517 29.1379 35.7517V93.543C47.7002 90.591 54.5208 101.349 56.5011 112.757C59.2735 99.0191 73.6149 88.4534 93.9891 88.4534V22.0768C75.6083 22.0768 62.3545 29.5725 57.4464 41.2911C57.1164 42.09 56.8686 42.9203 56.7068 43.7693L56.709 43.7758Z'
        fill='#FFFF9C'
      />
    </svg>
  )
}
