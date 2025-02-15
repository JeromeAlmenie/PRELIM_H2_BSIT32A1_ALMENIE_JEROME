import "./styles.css";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <h1>CURRICULUM VITAE.</h1>
      <h3>ABOUT ME.</h3>
      <div class="image">
        <image class="profile" src="Portrait.png"></image>
      </div>
      <p>
        {" "}
        I AM JEROME GABRIEL N. ALMENIE, 20 YEARS OLD AND CURRENTLY LIVING IN SAN
        PEDRO LAGUNA, I AM A 3RD YEAR COLLEGE AT LYCEUM OF ALABANG AND I AM
        CURRENTLY TAKING THE BSIT COURSE AND MY ACADEMIC INTEREST IS ABOUT PARTS
        OF A COMPUTER SYSTEM AND HOW IT AFFECTS THE COMPUTER.
      </p>
      <a href="#" button onclick="myFunction1()" class="h-1">
        EDUCATION: CURRENT SCHOOL (LYCEUM OF ALABANG), LOYALTY AWARDEE (SAN
        FRANCISCO DE SALES SCHOOL)
      </a>
      <a href="#" button onclick="myFunction2()" class="h-2">
        SCHOOL ACTIVITIES: NSTP-CWTS (LYCEUM OF ALABANG), ENVIRONMENTAL CAMP
        (SAN FRANCISCO DE SALES SCHOOL)
      </a>
      <a href="#" button onclick="myFunction3()" class="h-3">
        SKILLS: COOKING, ESPORTS, SPORTS
      </a>
      <a href="#" button onclick="myFunction4()" class="h-4">
        CONTACT FORM: FIRST NAME: JEROME GABRIEL / LAST NAME: ALMENIE / EMAIL:
        jeromegabrielalmenie26@gmail.com
      </a>
    </div>
  );
}
