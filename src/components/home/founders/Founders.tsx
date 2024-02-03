import Image from 'next/image'
import Style from './Founders.module.css'
import Araujo from '~/../public/assets/home/foto-matheus.png'
import Julio from '~/../public/assets/home/foto-julio.png'

export const Founders: React.FC = () => {
  return (
    <div className={Style.container}>
      <p className={Style.headline}>Os realizadores</p>
      <div className={Style.flex}>
        <div className={Style.flexItem}>
          <p className={Style.name}>
            Matheus <br />
            Araújo
          </p>
          <p className={Style.paragraph}>
            Matheus Araújo atua como professor de literatura há 7 anos. Também é contista, leitor
            crítico e ghostwriter.
          </p>

          <p className={Style.paragraph}>
            Foi aluno da Oficina Literária de Raimundo Carrero. Deu aulas e palestras em locais como
            o Instituto Veraz (SP), o Instituto do Bem Comum (PR) e a Faculdade de Ciências Humanas
            de Olinda (PE). Trabalha como Coordenador Pedagógico da Academia Literária do Clube de
            Literatura Clássica. Lecionou o curso “Como Escrever um Livro”, para a plataforma Caudex
            Publishing. Dirigiu o documentário “A Morte da Literatura”. Seu “Curso Online de
            Literatura” existe há quatro anos e já contou com mais de mil alunos.
          </p>

          <p className={Style.paragraph}>
            Reúne cerca de 50 mil seguidores em suas redes sociais, onde ensina sobre literatura
            clássica, poesia, mitologia e técnicas de escrita literária.
          </p>
        </div>
        <div className={Style.flexItem}>
          <div className={Style.flexImage}>
            <Image src={Araujo} alt='Matheus Araújo' fill />
          </div>
        </div>
      </div>

      <div className={Style.flex}>
        <div className={Style.flexItem}>
          <p className={Style.name}>
            Julio
            <br />
            Muzzi
          </p>
          <p className={Style.paragraph}>
            Músico, arranjador, produtor, compositor, dublador, diretor de dublagem e narrador,
            Julio Muzzi é graduado em produção sonora pela UFPR e estuda áudio e música desde 1995.
          </p>

          <p className={Style.paragraph}>
            Regente de coros, é multi-instrumentista e compôs trilhas sonoras para filmes, desenhos
            animados e séries, como o documentário “A Morte da Literatura” e vídeos educativos da
            plataforma internacional “TED Ed”. Participou de projetos com artistas como Hermeto
            Pascoal, Blindagem, Alexandre Kassin, Guilherme Arantes e outros da cena musical
            paranaense.
          </p>

          <p className={Style.paragraph}>
            Trabalha com direção de dublagem e narração há quase dez anos, e colaborou com séries e
            filmes tais quais “Hernán - O Grande Conquistador Espanhol”, “A Grande Aventura dos
            Lunnis e o Livro Mágico” e “Max Rose”. Dirigiu e tem sua voz em audiobooks como “A
            Princesa Naselda”, de Ingrid Osternack (Insight), “Uma Rua de Todas as Cores”, de
            Priscila Prado (Insight).
          </p>

          <p className={Style.paragraph}>
            Prestando serviços para os maiores estúdios de Curitiba, tem seus trabalhos de edição,
            trilha sonora, narração, dublagem, direção de dublagem, composição, mixagem, sound
            designer e demais atribuições dentro do universo audiovisual em plataformas como HBO
            Max, Apple TV, Amazon Prime, Netflix, History Channel, Cartoon Network, Disney XD, TV
            Cultura e Youtube.
          </p>
        </div>
        <div className={Style.flexItem}>
          <div className={Style.flexImage}>
            <Image src={Julio} alt='Julio Muzzi' fill />
          </div>
        </div>
      </div>
    </div>
  )
}
