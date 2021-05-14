import React from 'react'
import convo2 from "../assets/convo2.jpg"
import supplies from "../assets/suppliesLTN.jpg"
import convo1 from "../assets/convo1.jpg"
import ltnSocks from "../assets/ltnSocks.jpeg"
import walkingUp from "../assets/walkingUp.jpg"
import crew from "../assets/crewLTN.jpg"
import instapost1 from "../assets/decideToGive2.png"
import oldBG from "../assets/ltnHomelessPage.jpg"
import sad from "../assets/ltnSadSleepingFloor.jpg"
import seeking from "../assets/unsplash-homeless.jpg"
import box from "../assets/boxOfHelp.jpg"
import handOut from "../assets/handOut.jpg"
import handOut2 from "../assets/handout2.jpg"
import shave from "../assets/shave.jpg"


const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img
          src={supplies}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img
          src={convo1}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img
          src={convo2}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img
          src={ltnSocks}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img
          src={walkingUp}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img
          src={crew}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img
          src={instapost1}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img
          src={oldBG}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img
          src={sad}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img
          src={seeking}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img
          src={handOut2}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img
          src={shave}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img
          src={handOut}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img
          src={box}
          alt="Conversation with homeless person"
          className="gallery__image"
        />
      </figure>
    </div>
  )
}

export default Gallery
