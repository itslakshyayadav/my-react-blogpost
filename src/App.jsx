import Home from "./Home.jsx";
import AddNumber from "./components/AddNumber";
import SubtractNumber from "./components/SubtractNumber";
import Users from "./components/Users.jsx";
import Products from "./components/Products.jsx";
import Portfolio from "./components/Portfolio.jsx";
import lakshyaDp from "./assets/lakshya-dp.jpg";
import vishalDp from "./assets/vishal-dp.png";

// import Photos from "./components/Photos.jsx";
// import Books from "./components/Book.jsx";
function App() {
  return (
    <>
      <div className="container mx-auto">
        {/* <Books>lakshya</Books> */}
        {/* <Photos></Photos> */}
        <Portfolio
          fullName="Lakshya Yadav"
          address="Kota, RJ"
          dp={lakshyaDp}
          skills={["UI/UX", "Front EndDeveloper", "HTML"]}
          subSkills={["javaScript", "Bootstrap", "WAS"]}
          intro="I am Frontend Developer in Fyndster"
        ></Portfolio>
        <Portfolio
          fullName="Vishal Yadav"
          address="Noida, UP"
          dp={vishalDp}
          skills={["UI/UX", "Full Stack Developer", "VueJs"]}
          subSkills={["CSS", "Azure", "Excel"]}
          intro="I am Fullstack Developer in R-System"
        ></Portfolio>
        <Portfolio
          fullName="Hitesh Yadav"
          address="Mansgav, Ladpura"
          dp={vishalDp}
          skills={["Python", "Backend Developer", "mongoDB"]}
          subSkills={["HTML", "CSS", "JavaScript"]}
          intro="I am Backend Developer in CRM-Next"
        ></Portfolio>

        <Products></Products>
        <Users></Users>
        <AddNumber></AddNumber>
        <br />
        <SubtractNumber></SubtractNumber>
      </div>
    </>
  );
}

export default App;
