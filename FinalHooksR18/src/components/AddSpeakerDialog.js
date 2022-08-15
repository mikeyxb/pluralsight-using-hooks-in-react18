import React, { useContext } from "react";
import { SpeakerModalContext } from "../contexts/SpeakerModalContext";
import SpeakerModal from "./SpeakersModal/SpeakerModal";

export default function AddSpeakerDialog() {
  const {
    setModalShow,
    modalShow,
    modalSpeakerId,
    setModalSpeakerId,
    modalSpeakerFirstName,
    setModalSpeakerFirstName,
    modalSpeakerLastName,
    setModalSpeakerLastName,
    modalSpeakerImageUrl,
    setModalSpeakerImageUrl,
  } = useContext(SpeakerModalContext);

  return (
    <>
      <SpeakerModal />
      <button
        onClick={() => {
          setModalSpeakerId(0);
          setModalSpeakerImageUrl("/images/Speaker-New.jpg");
          setModalShow(true);
        }}
      >
        Add Speaker <i className="fa fa-plus" />
      </button>
    </>
  );
}
