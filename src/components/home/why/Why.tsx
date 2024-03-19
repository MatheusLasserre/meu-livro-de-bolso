import Image from 'next/image'
import Style from './Why.module.css'
import NewsImage from '~/../public/assets/home/news.png'

export const Why: React.FC = () => {
  return (
    <div className={Style.containerWrapper + ' ' + 'topright'}>
      <div className={Style.container}>
        <p className={Style.headline}>Por que ter um audiobook?</p>
        <div className={Style.flex}>
          <div className={Style.flexItem}>
            <p className={Style.paragraph}>
              O mercado de audiobooks cresceu exponencialmente no Brasil ao longo dos últimos anos.
              Atualmente,{' '}
              <strong>
                as maiores editoras do país disponibilizam seus livros em formato de áudio aos
                leitores
              </strong>
              , seja em plataformas próprias, seja através de vendas em outras plataformas.
            </p>

            <p className={Style.paragraph}>
              Em paralelo, o consumo de audiobooks vem crescendo em aceitação pelo público leitor.
              Cada vez mais pessoas aderem a este hábito.
            </p>

            <p className={Style.paragraph}>
              O audiobook é uma ferramenta simples e de fácil acesso. Com isso, o leitor pode
              carregar toda sua biblioteca no bolso.{' '}
              <em>
                A partir disso, muitas editoras e autores quebram a objeção de muitos que não lêem:
                “estou sem tempo”
              </em>
              . Através do audiobook, pode-se ler no trânsito, na faxina, no trabalho ou na
              academia.
            </p>

            <p className={Style.paragraph}>
              Porém, a ideia da <strong>Meu Livro de Bolso</strong> não é tornar o audiobook somente
              uma alternativa ao livro físico:{' '}
              <em>
                é criar uma experiência tão imersiva e fascinante, através de narrações
                dramatizadas, sound effects e trilhas sonoras
              </em>
              , que ouvir um livro se torne tão ou mais prazeroso que a leitura convencional.
            </p>

            <p className={Style.paragraph}>
              Não basta somente gravar uma leitura. É preciso pensar em{' '}
              <em>novos livros para novos tempos.</em>
            </p>
          </div>
          <div className={Style.flexItem}>
            <div className={Style.imageContainer}>
              <Image src={NewsImage} fill alt='Notícias' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
