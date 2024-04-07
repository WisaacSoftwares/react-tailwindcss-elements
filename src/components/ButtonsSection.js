import React from 'react'
import { Bs2CircleFill, BsArrowRight, BsBookmarkPlus, BsBookmarkPlusFill } from "react-icons/bs";
import { FaArrowRight } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import { mixClasses } from '../GeneralTools';

const ButtonsSection = ({ darkTheme }) => {

  return (
    <>
      <h2>Buttons</h2>
      <div className="inline-flex flex-wrap gap-2">
        <button className="btn" href="#">Primary</button>
        <button className="btn btn-outline" href="#">Primary</button>
        <button className="btn btn-secondary" href="#">Secondary</button>
        <button className="btn btn-outline-secondary" href="#">Secondary</button>
        <button className="btn btn-danger" href="#">Danger</button>
        <button className="btn btn-outline-danger" href="#">Danger</button>
        <button className="btn btn-info" href="#">Info</button>
        <button className="btn btn-outline-info" href="#">Info</button>
        <button className="btn btn-dark" href="#">Dark</button>
        <button className="btn btn-outline-dark" href="#">Dark</button>
        <button className="btn btn-light" href="#">Light</button>
        <button className="btn btn-outline-light" href="#">Light</button>
        <button className="btn btn-link" href="#">Link</button>
      </div>
      <h2>Disabled Buttons</h2>
      <div className="inline-flex flex-wrap gap-2">
        <button className="btn" href="#" disabled>Primary</button>
        <button className="btn btn-outline" href="#" disabled>Primary</button>
        <button className="btn btn-secondary" href="#" disabled>Secondary</button>
        <button className="btn btn-outline-secondary" href="#" disabled>Secondary</button>
        <button className="btn btn-danger" href="#" disabled>Danger</button>
        <button className="btn btn-outline-danger" href="#" disabled>Danger</button>
        <button className="btn btn-info" href="#" disabled>Info</button>
        <button className="btn btn-outline-info" href="#" disabled>Info</button>
        <button className="btn btn-dark" href="#" disabled>Dark</button>
        <button className="btn btn-outline-dark" href="#" disabled>Dark</button>
        <button className="btn btn-light" href="#" disabled>Light</button>
        <button className="btn btn-outline-light" href="#" disabled>Light</button>
        <button className="btn btn-link" href="#" disabled>Link</button>
      </div>
      <h2>Small Buttons</h2>
      <div className="inline-flex flex-wrap gap-2">
        <button className="btn btn-sm" href="#">Primary</button>
        <button className="btn btn-sm btn-outline" href="#">Primary</button>
        <button className="btn btn-sm btn-secondary" href="#">Secondary</button>
        <button className="btn btn-sm btn-outline-secondary" href="#">Secondary</button>
        <button className="btn btn-sm btn-danger" href="#">Danger</button>
        <button className="btn btn-sm btn-outline-danger" href="#">Danger</button>
        <button className="btn btn-sm btn-info" href="#">Info</button>
        <button className="btn btn-sm btn-outline-info" href="#">Info</button>
        <button className="btn btn-sm btn-dark" href="#">Dark</button>
        <button className="btn btn-sm btn-outline-dark" href="#">Dark</button>
        <button className="btn btn-sm btn-light" href="#">Light</button>
        <button className="btn btn-sm btn-outline-light" href="#">Light</button>
        <button className="btn btn-sm btn-link" href="#">Link</button>
      </div>
      <h2>Buttons with Icons</h2>
      <div className="inline-flex flex-wrap gap-2">
        <button className="btn btn-danger" href="#">You have new messages<Bs2CircleFill /></button>
        <button className="btn btn-outline" href="#">Continue <FaArrowRight /></button>
        <button className="btn" href="#"><BsBookmarkPlusFill /></button>
        <button className="btn btn-outline-light" href="#"><IoMdCheckmark />Request sent</button>
      </div>
      <h2>Custom Buttons</h2>
      <div className="inline-flex flex-wrap gap-2">
        <button className="btn btn-custom" href="#">Gray Button</button>
        <button className="btn btn-custom bg-green-600 hover:bg-green-700" href="#">Green Button</button>
      </div>
    </>
  )
}

export default ButtonsSection