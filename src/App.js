import './App.css';
import NavBar from "./components/NavBar";
import Suggestions from "./components/Suggestions";
import Saved from "./components/Saved";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  const [savedSuggestions, setSavedSuggestions] = useState([]);
  const [disable]= useState(false);
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      name: "Jim",
      photo: "https://www.cheatsheet.com/wp-content/uploads/2021/02/John-Krasinski-in-The-Office.jpg",
      about:
        "I am charming, and not in a creepy way. I am a great guy: funny, kind, mild-mannered. I could probably be a heartbreaker if I wanted to, but I'm looking for the right girl.",
      interests: "Pranks",
      saved: false,
      interested: true,
      number: "442-242-5195",
    },
    {
      id: 2,
      name: "Dwight",
      photo: "https://www.cheatsheet.com/wp-content/uploads/2021/02/Dwight-Schrute-The-Office.jpg",
      about:
        "I am ambitious, cutthroat, a bit clueless, and geeky. The only thing I value more than Dunder Mifflin's success is my own success – by any means necessary. As I once said, “Would I ever leave this company? Look, I'm all about loyalty.",
      interests: "Martial arts, beets",
      saved: false,
      interested: true,
      number: "443-820-7732",
    },
    {
      id: 3,
      name: "Michael",
      photo: "https://www.nydailynews.com/resizer/liR7HvlCt4IThEeIR9nkhp7keGY=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/KM3WAEGAQ7OUC2BK57DMWPT26I.jpg",
      about:
        "I am extremely extroverted. I enjoy talking to others and I'm not very concerned about what others may think. I am outgoing and I try to make everyone I meet smile",
      interests: "Jokes, ladies",
      saved: false,
      interested: true,
      number: "309-405-7570",
    },
    {
      id: 4,
      name: "Stanley", 
      photo: "https://www.cheatsheet.com/wp-content/uploads/2020/07/Leslie-David-Baker-as-Stanley-1-1200x900.jpg",
      about:
        "I am a fairly successful salesman, I am serious and hard-working. I like spending my evening at home, drinking wine and doing crossword puzzles",
      interests: "Chocolate cake, wine, crossword puzzles",
      saved: false,
      interested: true,
      number: "251-417-5567",
    },
    {
      id: 5,
      name: "Mose",
      photo: "http://2.bp.blogspot.com/-FKq4MjRk8N4/UwjqurnLKBI/AAAAAAAAB7M/KZP_5mvTRAE/s1600/1190_mose.jpg",
      about:
      "I am enigmatic beet farmer who possesses a love of ping pong, bedtime stories, running, manure, and Jurassic Park pajamas.",
      interests: "Scarecrows, bedtime stories",
      saved: false,
      interested: true,
      number: "704-208-0386",
    },
    {
      id: 6,
      name: "Ryan",
      photo: "https://media.gettyimages.com/photos/season-3-pictured-bj-novak-as-ryan-howard-picture-id138412849",
      about:
        "People keep calling me a 'wunderkind'. It makes sense, but it's a weird word...",
      interests: "Parties, success",
      saved: false,
      interested: true,
      number: "662-470-8004",
    },
    {
      id: 7,
      name: "Toby",
      photo: "https://productplacementblog.com/wp-content/uploads/2019/06/HP-Monitor-Used-by-Paul-Lieberstein-Toby-Flenderson-in-The-Office-%E2%80%93-Season-4-2.jpg",
      about:
        "I am the Human Resources Representative at the Scranton branch of Dunder Mifflin/Sabre. I am generally soft-spoken and mild-mannered.",
      interests: "Pam, surfing",
      saved: false,
      interested: true,
      number: "843-597-5195",
    },
    
  ]);
function refreshSaved(){
  let suggs = savedSuggestions.filter((post)=> post.saved===true);
  setSavedSuggestions(suggs);
}

const updateCart = (suggest) => {
  setSavedSuggestions([...savedSuggestions, suggest]);
};

function saveSuggestion(id){
  suggestions.forEach((post) => {
    if (post.id === id) {
      post.saved=true;
      post.interested=false;
      updateCart(post);
      console.log("id:", post.id, "saved:", post.saved);
    }
  });
  refreshSuggestions();
}
function removeSuggestion(id){
  savedSuggestions.forEach((post) => {
    if (post.id === id) {
      post.saved=false;
      console.log("id:", post.id, "saved:", post.saved);
    }
  });
    refreshSaved();
}

function removeSuggestion2(id){
  suggestions.forEach((post) => {
    if (post.id === id) {
      post.interested=false;
      console.log("id:", post.id, "interesting:", post.interested);
    }
  });
  refreshSuggestions();
}
function refreshSuggestions(){
  let suggs = suggestions.filter((post)=> post.interested===true);
  setSuggestions(suggs);
}
  return (
    <BrowserRouter className="App">
    <NavBar></NavBar>
    <Routes>
      <Route
        path="/"
        element={<Suggestions suggestions={suggestions} saveSuggestion={saveSuggestion} removeSuggestion2={removeSuggestion2}/>}
      />
       <Route path="/saved" element={<Saved suggestions={savedSuggestions}  removeSuggestion={removeSuggestion}/>} />
    </Routes>   
  </BrowserRouter>
  );
}

export default App;
