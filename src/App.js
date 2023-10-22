import { faCodeCompare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

import Routes from "./Routes/Routes";
library.add(faCodeCompare, faHeart);


function App() {
  return <Routes />
}

export default App;
