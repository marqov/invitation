import { Screen } from "@/components/screen";
import { Audio } from 'ts-audio';

//let audio = require("./rihane.mp3")
//let audio = Audio({file:'rihane.mp3',loop: true, volume: 0.2});

function Sound() {
	return (
	<div>
  	  <audio src="rihane.mp3" autoPlay loop/>
  	</div>
	);
}

export default function Home() {
  return (
  	<div>
  	<Sound />
  	<Screen />
  	</div>
  );
}
