import Home from "./components/TextAnalyzer.jsx";
// import AddNumber from "./components/AddNumber";
// import Users from "./components/Users.jsx";
// import Products from "./components/Products.jsx";
// import Portfolio from "./components/Portfolio.jsx";
// import lakshyaDp from "./assets/lakshya-dp.jpg";
// import vishalDp from "./assets/vishal-dp.png";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Home
          name="Lakshya yadav"
          heading="Enter the text to analyze below"
        ></Home>
        {/* <Portfolio
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
        ></Portfolio> */}

        {/* <Products></Products> */}
        {/* <Users></Users> */}
        {/* <br />
        <AddNumber>laksjya</AddNumber>
        <br /> */}
      </div>
      <footer className="bg-amber-300 text-center	">Contact : 9929209856</footer>
    </>
  );
}

export default App;
