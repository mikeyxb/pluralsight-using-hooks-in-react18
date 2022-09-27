import Header from "./Header";
import AppMenu from "./AppMenu";
import SpeakerModal from "../speakerModal/SpeakerModal";
import Speakers from "../speakers/Speakers";
import About from "../about/About";
import Speaker from "../speakers/Speaker";
import SpeakerList from "../speakers/SpeakerList";
import {ThemeProvider} from "../contexts/ThemeContext";
import {SpeakersDataProvider} from "../contexts/SpeakersDataContext";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout({ url }) {
  const speakerId = parseInt(url.substring(9).replace("#", ""));

  return (
    <ThemeProvider>
      <Header />
      <AppMenu />
      {url === "/about" && <About />}
      {url === "/" && (
        <SpeakersDataProvider>
          <Speakers />
        </SpeakersDataProvider>
      )}
      {url.startsWith("/speaker/") && <Speaker id={speakerId} />}
      {url.startsWith("/speakerlist") && (
        <SpeakersDataProvider>
          <SpeakerList />
        </SpeakersDataProvider>
      )}
      {url.startsWith("/speakerpopup") && <SpeakerModal modalShow={true} />}
    </ThemeProvider>
  );
}
