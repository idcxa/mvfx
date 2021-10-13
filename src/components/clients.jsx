import '../css/clients.scss'
import '../css/index.scss'
export const clients = [
  {
    url: 'https://uk.burberry.com/',
    image: 'images/logos/BERBERRY_LOGO.png',
  },
  {
    url: 'https://cbd-one.co.uk/',
    image: 'images/logos/CBD_ONE.png',
  },
  {
    url: 'https://www.danone.co.uk/',
    image: 'images/logos/DANONE_LOGO.png',
  },
  {
    url: 'https://shop.neos.co.uk/',
    image: 'images/logos/NEOS_LOGO.png',
  },
  {
    url: 'https://www.casewarehouse.com/',
    image: 'images/logos/CW_LOGO.png',
  },
  {
    url: 'https://greenssteel.com/',
    image: 'images/logos/GREENS_LOGO.png',
  },
  {
    url: 'https://capsuleskateboards.com/skateboards',
    image: 'images/logos/CAP_LOGO.png',
  },
  {
    url: 'https://www.iconnutrition.com/',
    image: 'images/logos/ICON_LOGO.png',
  },
  {
    url: 'https://shop.levooil.com/products/levo-ii',
    image: 'images/logos/LEVO_LOGO.png',
  },
  {
    url: 'https://www.lighthubdirect.com/collections/hall-corridor-lights/products/lighthub-half-moon-modern-up-gypsum-plaster-indoor-paintable-wall-washer-uplight-e14-ses-sconce-light-fitting-led-ready-white',
    image: 'images/logos/LIGHTHUB_LOGO.png',
  },
  {
    url: 'https://www.nordicsupplements.com/',
    image: 'images/logos/NS_LOGO.png',
  },
  {
    url: 'https://www.rockoil.co.uk/cm/',
    image: 'images/logos/ROCK_OIL_LOGO.png',
  },
  {
    url: 'https://simpleealoe.com/',
    image: 'images/logos/SA_LOGO.png',
  },
  {
    url: 'images/logos/SPRING_LOGO.png',
    image: 'images/logos/SPRING_LOGO.png',
  },
  {
    url: 'https://theturmeric.co/',
    image: 'images/logos/TTC_LOGO.png',
  },
  {
    url: 'images/logos/WATT_LOGO.png',
    image: 'images/logos/WATT_LOGO.png',
  },
]

export default function Clients() {
  return (
    <div className='clients'>
      <h2> CLIENTS </h2>
      <h4> client satisfaction is our goal </h4>
      <div className='flex'>
        {clients.map((x) => {
          return (
            <a href={x.url}>
              <img src={x.image} alt={x.image}></img>
            </a>
          )
        })}
      </div>
    </div>
  )
}
