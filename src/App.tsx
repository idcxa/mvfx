
import React, { useState, useRef, FC } from 'react'

import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'

import { withKnobs, button, number } from '@storybook/addon-knobs'

import { shuffle } from './helpers'

import { InternalItem } from './types'

import { Gallery, CustomGallery, Item, DefaultLayout, useGallery } from '.'

import 'photoswipe/dist/photoswipe.css'

import 'photoswipe/dist/default-skin/default-skin.css'


export default { title: 'Gallery', decorators: [withKnobs] }


const createItem = (index: number): InternalItem => ({

  original: `https://placekitten.com/1024/768?image=${index}`,

  thumbnail: `https://placekitten.com/160/120?image=${index}`,

  width: 1024,

  height: 768,

  title: `kitty #${index}`,

})


const items = Array.from({ length: 3 }, (_, i) => createItem(i + 1))


const ImageItem: FC<InternalItem> = ({

  original,

  thumbnail,

  width,

  height,

  title,

  id,

}) => {

  const [fullTitle, setFullTitle] = useState(title)

  return (

    <Item

      original={original}

      thumbnail={thumbnail}

      width={width}

      height={height}

      title={fullTitle}

      id={id}

    >

      {({ ref, open }) => (

        <div style={{ display: 'inline-block', margin: 5 }}>

          <img

            onClick={open}

            src={thumbnail}

            ref={ref as React.MutableRefObject<HTMLImageElement>}

            style={{ display: 'block', cursor: 'pointer', marginBottom: 5 }}

          />

          <input

            type="text"

            value={fullTitle}

            onChange={(e) => setFullTitle(e.target.value)}

            style={{ width: '100%', boxSizing: 'border-box' }}

          />

        </div>

      )}

    </Item>

  )

}


export const simple = () => {

  const smallItemStyles: React.CSSProperties = {

    cursor: 'pointer',

    objectFit: 'cover',

    width: '100%',

    maxHeight: '100%',

  }

  return (

    <Gallery id="simple-gallery">

      <div

        style={{

          display: 'grid',

          gridTemplateColumns: '240px 171px 171px',

          gridTemplateRows: '114px 114px',

          gridGap: 12,

        }}

      >

        <Item

          original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"

          thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"

          width="1600"

          height="1600"

          title="Author: Folkert Gorter"

          id="so-first"

        >

          {({ ref, open }) => (

            <img

              style={{ cursor: 'pointer' }}

              src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"

              ref={ref as React.MutableRefObject<HTMLImageElement>}

              onClick={open}

            />

          )}

        </Item>

        <Item

          original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"

          thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"

          width="1600"

          height="1068"

          title="Author: Samuel Rohl"

        >

          {({ ref, open }) => (

            <img

              style={smallItemStyles}

              src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"

              ref={ref as React.MutableRefObject<HTMLImageElement>}

              onClick={open}

            />

          )}

        </Item>

        <Item

          original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"

          thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"

          width="1600"

          height="1066"

          title="Author: Ales Krivec"

        >

          {({ ref, open }) => (

            <img

              style={smallItemStyles}

              src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"

              ref={ref as React.MutableRefObject<HTMLImageElement>}

              onClick={open}

            />

          )}

        </Item>

        <Item

          original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"

          thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"

          width="1600"

          height="1066"

          title="Author: Michael Hull"

        >

          {({ ref, open }) => (

            <img

              style={{ ...smallItemStyles, gridColumnStart: 2 }}

              src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"

              ref={ref as React.MutableRefObject<HTMLImageElement>}

              onClick={open}

            />

          )}

        </Item>

        <Item

          original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"

          thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"

          width="1600"

          height="1066"

          title="Author: Thomas Lefebvre"

        >

          {({ ref, open }) => (

            <img

              style={smallItemStyles}

              src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"

              ref={ref as React.MutableRefObject<HTMLImageElement>}

              onClick={open}

            />

          )}

        </Item>

      </div>

    </Gallery>

  )

}


const Kittens = () => {

  const [photos, setPhotos] = useState(items)

  button('add', () => setPhotos([createItem(photos.length + 1), ...photos]))

  button('remove', () => setPhotos(photos.slice(1)))

  button('swap first two', () =>

    setPhotos([photos[1], photos[0], ...photos.slice(2)]),

  )

  button('swap last two', () =>

    setPhotos([

      ...photos.slice(0, photos.length - 2),

      photos[photos.length - 1],

      photos[photos.length - 2],

    ]),

  )

  button('shuffle', () => setPhotos([...shuffle(photos)]))

  const currentItem = number('current item', 0)

  const { open } = useGallery()


  return (

    <>

      {photos.map((props) => (

        <ImageItem {...props} key={props.original} />

      ))}

      <div>

        <button type="button" onClick={() => open(currentItem)}>

          {`Show kitty #${currentItem + 1}`}

        </button>

      </div>

    </>

  )

}

