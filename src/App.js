import './App.css';
import NavBar from "./components/NavBar";
import Suggestions from "./components/Suggestions";
import Saved from "./components/Saved";
import Messages from "./components/Messages";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//<img src={logo} className="App-logo" alt="logo" />
function App() {
  const [savedSuggestions, setSavedSuggestions] = useState([]);
  const [suggestions] = useState([
    {
      id: 1,
      name: "Jim",
      photo: "https://www.cheatsheet.com/wp-content/uploads/2021/02/John-Krasinski-in-The-Office.jpg",
      about:
        "I am charming, and not in a creepy way. I am a great guy: funny, kind, mild-mannered. I could probably be a heartbreaker if I wanted to, but I'm looking for the right girl.",
      interests: "Soccer, jokes",
      saved: false,
    },
    {
      id: 2,
      name: "Dwight",
      photo: "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/01/dwight-schrute-office-featured.jpg",
      about:
        "I am ambitious, cutthroat, a bit clueless, and geeky. The only thing I value more than Dunder Mifflin's success is my own success – by any means necessary. As I once said, “Would I ever leave this company? Look, I'm all about loyalty.",
      interests: "Martial arts, beets",
      saved: false,
    },
    {
      id: 3,
      name: "Stanley",
      photo: "https://static.wikia.nocookie.net/theoffice/images/2/23/Stanley_Hudson.jpg/revision/latest?cb=20170701085445",
      about:
        "I am a fairly successful salesman, I am serious and hard-working. I like spending my evening at home, drinking wine and doing crossword puzzles",
      interests: "Chocolate cake, wine, crossword puzzles",
      saved: false,
    },
    {
      id: 4,
      name: "Mose",
      photo: "https://helios-i.mashable.com/imagery/articles/03UDTPKYwYPYQ1tsSYfFJXr/hero-image.fill.size_1248x702.v1643233129.jpg",
      about:
      "I am enigmatic beet farmer who possesses a love of ping pong, bedtime stories, running, manure, and Jurassic Park pajamas.",
      interests: "Scarecrows, bedtime stories",
      saved: false,
    },
    {
      id: 5,
      name: "Michael",
      photo: "https://ca-times.brightspotcdn.com/dims4/default/4113434/2147483647/strip/true/crop/750x422+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fwww.trbimg.com%2Fimg-5436b8c6%2Fturbine%2Fzap-the-office-michaels-worst-moments-pics-012",
      about:
        "I am extremely extroverted. I enjoy talking to others and I'm not very concerned about what others may think. I am outgoing and I try to make everyone I meet smile",
      interests: "Jokes, ladies",
      saved: false,
    },
    {
      id: 6,
      name: "Danny",
      photo: "https://www.theatermania.com/dyn/photos/theatermania/v1finw2400x0y0w1200h1741/justified-star-timothy-olyphant-will-star-in-kenneth-110898.jpg",
      about:
        "I am a very successful traveling salesman, I am stunningly goodlooking",
      interests: "Suits, cocktails",
      saved: false,
    },
    {
      id: 7,
      name: "Toby",
      photo: "https://external-preview.redd.it/F9lcHjaFDmE57yq-ESZhzOEBulySkiwtYz1f7kBD7kI.png?auto=webp&s=084ca9991d689182c48bf8281da018e96c671a4b",
      about:
        "I am the Human Resources Representative at the Scranton branch of Dunder Mifflin/Sabre. I am generally soft-spoken and mild-mannered.",
      interests: "Pam, surfing",
      saved: false,
    },
  ]);
function refreshSaved(){
  let suggs = suggestions.filter((post)=> post.saved=true);
  setSavedSuggestions(suggs);
}
function saveSuggestion(id){
  suggestions.forEach((post) => {
    if (post.id === id) {
      post.saved=true;
    }
  });
  refreshSaved();
}
function removeSuggestion(id){
  suggestions.forEach((post) => {
    if (post.id === id) {
      post.saved=false;
    }
  });
    refreshSaved();
}
  return (
    <BrowserRouter className="App">
    <NavBar></NavBar>
    <Routes>
      <Route
        path="/"
        element={<Suggestions suggestions={suggestions} saveSuggestion={saveSuggestion} removeSuggestion={removeSuggestion}/>}
      />
      <Route path="/saved" element={<Saved suggestions={savedSuggestions} />} />
    </Routes>
    <Route
        path="/messages"
        element={<Messages/>}
      />
  </BrowserRouter>
  );
}

export default App;
