import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil
              ad nobis earum, inventore debitis maxime reprehenderit aperiam
              delectus quidem cum aspernatur velit itaque asperiores nulla
              eligendi sapiente exercitationem voluptas iste ipsa? Eaque velit,
              voluptates provident, natus optio consequuntur facere amet dolores
              voluptatibus incidunt aperiam pariatur quis quasi sequi magnam.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
