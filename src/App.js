import logo from './logo.svg';
import './App.css';
import { User } from './User';

// App component (view+logic) - decleration
function App() {
  const person = [
    {
      name: "love Today 🤩✌",
      rating: "⭐⭐⭐⭐",
      pic: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/love-today-et00343241-1667476540.jpg",
      about: "Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S."
    },
    {
      name: "Beast 😍💖",
      rating: "⭐⭐⭐",
      pic: "https://lotoo.xyz/wp-content/uploads/2022/03/Beast-movie-2022-lotoo.jpg",
      about: "Beast is a 2022 Indian Tamil-language action film written and directed by Nelson. The film stars Vijay, Pooja Hegde and Selvaraghavan."
    },
    {
      name: "VIKRAM 🌹🎉",
      rating: "⭐⭐⭐⭐",
      pic: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/06/vikram-movie-review-out-02.jpg",
      about: "Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International."
    }
  ];
  return (
    <div className="App">

      {/* To loop all the values using map function */}

      {person.map((psn) => (<User name={psn.name}
        pic={psn.pic} about={psn.about} rating={psn.rating}
      />))}

    </div>
  );
}

export default App;   // default export