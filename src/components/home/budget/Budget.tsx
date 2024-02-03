import Link from 'next/link'
import Style from './Budget.module.css'

export const Budget: React.FC = () => {
  const linkURL = '#'
  return (
    <div className={Style.container}>
      <div className={Style.flex}>
        <p className={Style.headline}>Faça um orçamento gratuito</p>
        <p className={Style.paragraph}>
          Clique no botão abaixo e preencha o formulário a seguir. Transforme o seu livro em uma
          experiência auditiva e imersiva para as novas gerações.
        </p>
        <Link href={linkURL} className={Style.button}>
          Quero Meu Audiobook
        </Link>
      </div>
      <BudgetIcon />
    </div>
  )
}

const BudgetIcon: React.FC = () => {
  return (
    <svg
      width='803'
      height='386'
      viewBox='0 0 803 386'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={Style.icon}
    >
      <g clip-path='url(#clip0_39_1055)'>
        <path
          d='M313.565 211.667C312.585 210.246 311.305 209.056 309.816 208.183C308.326 207.31 306.663 206.774 304.944 206.613C303.225 206.451 301.491 206.669 299.865 207.251C298.239 207.832 296.761 208.763 295.533 209.977L270.645 199.533L260.61 213.11L295.964 227.365C298.141 229.291 300.949 230.352 303.856 230.347C306.763 230.341 309.567 229.269 311.737 227.334C313.907 225.399 315.291 222.736 315.628 219.848C315.965 216.961 315.231 214.05 313.565 211.667Z'
          fill='#A0616A'
        />
        <path
          d='M242.406 175.105L292.644 203.571L283.754 226.239C283.754 226.239 252.802 211.323 250.768 212.377C248.735 213.432 242.406 175.105 242.406 175.105Z'
          fill='#DEED4F'
        />
        <path
          d='M185.756 260.742L174.303 369.544L139.944 494.997L168.576 499.578L251.037 324.878L236.149 230.964L210.952 221.802L185.756 260.742Z'
          fill='#1E2118'
        />
        <path
          d='M167.431 259.596C167.431 259.596 196.067 276.419 205.405 309.105C215.405 344.105 233.858 398.177 233.858 398.177L259.054 500.723L289.977 492.706L253.328 259.596L222.405 233.255L182.32 228.673L167.431 259.596Z'
          fill='#1E2118'
        />
        <path
          d='M238.008 80.4007C252.556 80.4007 264.349 68.6072 264.349 54.059C264.349 39.5109 252.556 27.7173 238.008 27.7173C223.46 27.7173 211.666 39.5109 211.666 54.059C211.666 68.6072 223.46 80.4007 238.008 80.4007Z'
          fill='#A0616A'
        />
        <path
          d='M240.352 104.982C240.352 104.982 221.437 84.1816 206.548 84.1816C201.763 84.1816 168.453 121.297 167.406 148.105L156.746 266.468C156.746 266.468 259.822 272.195 260.967 267.613C262.113 263.032 240.352 104.982 240.352 104.982Z'
          fill='#DEED4F'
        />
        <path
          d='M224.885 65.5739C226.998 65.4478 229.061 66.1619 231.16 66.4405C234.937 66.8219 238.726 65.8373 241.84 63.6651C244.954 61.493 247.187 58.2771 248.134 54.6003C248.267 53.6162 248.56 52.6607 249.002 51.7715C250.158 49.8851 252.789 49.5255 254.958 49.9593C257.127 50.393 259.183 51.4083 261.392 51.5242C263.106 51.5306 264.791 51.0902 266.282 50.2462C267.774 49.4022 269.019 48.184 269.895 46.7117C271.613 43.7285 272.344 40.2786 271.982 36.8553L270.347 38.5714C269.683 37.1658 269.426 35.6019 269.607 34.0576C268.74 33.8269 267.829 33.8224 266.961 34.0447C266.092 34.267 265.295 34.7085 264.646 35.3271C263.204 35.4806 264.292 32.6529 263.221 31.6756C262.7 31.3556 262.079 31.2394 261.478 31.3495C258.41 31.3791 255.929 29.033 253.512 27.1445C249.324 23.8795 244.427 21.6457 239.216 20.6235C235.761 19.804 232.145 19.9793 228.785 21.1291C226.133 22.3194 223.74 24.017 221.741 26.1261C216.598 31.0709 212.044 36.8809 209.905 43.6867C208.166 49.2612 208.117 55.2259 209.763 60.8284C210.625 63.7379 213.224 73.7022 217.027 73.9343C221.806 74.2258 218.937 65.9288 224.885 65.5739Z'
          fill='#1E2118'
        />
        <path
          opacity='0.1'
          d='M218.047 133.571L191.073 173.132L182.447 265.027L218.047 133.571Z'
          fill='black'
        />
        <path
          d='M178.898 300.722C180.067 299.451 180.943 297.939 181.465 296.293C181.986 294.647 182.14 292.906 181.916 291.194C181.692 289.482 181.096 287.84 180.168 286.383C179.241 284.927 178.006 283.691 176.549 282.764L181.216 256.18L165.753 249.403L159.689 287.038C158.293 289.588 157.881 292.561 158.531 295.395C159.181 298.228 160.848 300.725 163.216 302.412C165.584 304.098 168.488 304.858 171.378 304.547C174.269 304.235 176.944 302.874 178.898 300.722Z'
          fill='#A0616A'
        />
        <path
          d='M193.602 96.3657L166.049 185.749C166.049 185.749 155.816 242.707 160.397 251.87C164.978 261.032 155.978 279.066 155.978 279.066L182.32 281.357L195.125 187.749L217.824 116.434C217.824 116.434 226.816 90.6393 193.602 96.3657Z'
          fill='#DEED4F'
        />
        <path
          d='M250 51.4065C250 59.5795 244.854 66.4763 237.5 69V63.8708C230.596 63.8708 225 58.3033 225 51.4354C225 44.5675 230.596 39 237.5 39C244.404 39 250 44.5675 250 51.4354M237.548 48.6564C235.152 45.4248 231.448 46.8889 231.448 46.8889V59.6373C235.554 58.9872 237.064 61.3567 237.5 63.8756C238.11 60.8462 241.286 58.5152 245.793 58.5152V43.874C241.726 43.874 238.793 45.5259 237.708 48.1122C237.636 48.2856 237.582 48.4686 237.548 48.6564Z'
          fill='#FF1B03'
        />
        <path
          d='M237.379 48.0212C234.873 44.6282 231 46.1654 231 46.1654V59.5502C235.293 58.8676 236.872 61.3554 237.328 64C237.966 60.8194 241.287 58.372 246 58.372V43C241.748 43 238.68 44.7344 237.546 47.4498C237.47 47.6318 237.414 47.824 237.379 48.0212Z'
          fill='#FFFF9C'
        />
        <path
          d='M247.793 23.0257L239 40.0037L245.724 43L254 27.0205C254 23.4252 249.862 22.8592 247.793 23.0257Z'
          fill='#FF1B03'
        />
      </g>
      <defs>
        <clipPath id='clip0_39_1055'>
          <rect width='818.406' height='529.105' fill='white' transform='translate(-16)' />
        </clipPath>
      </defs>
    </svg>
  )
}