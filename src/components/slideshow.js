import { Suspense, useState } from 'react'

const imgCache = {
  __cache: {},
  read(src) {
    if (!src) {
      return
    }

    if (!this.__cache[src]) {
      this.__cache[src] = new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          this.__cache[src] = true
          resolve(this.__cache[src])
        }
        img.src = src
        setTimeout(() => resolve({}), 7000)
      }).then((img) => {
        this.__cache[src] = true
      })
    }

    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src]
    }
    return this.__cache[src]
  },
  clearImg: (src) => {
    delete this.__cache[src]
  },
}

export default function Slideshow(props) {
  const [current, setCurrent] = useState(0)

  let images = props.images

  const interval = setInterval(function () {
    nextImage()
  }, 3000)

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
    clearInterval(interval)
  }

  return (
    <section className='slideshow'>
      <img src={images[current].src} alt='' />
    </section>
  )
}
