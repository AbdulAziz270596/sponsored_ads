
import "./App.css";
import ReviewItem from "./Reviews";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);
library.add(faTag);
library.add(faShareSquare);

function App() {
  return (
    <div className="menu">
      <ReviewItem />
    </div>
  );
}

export default App;
