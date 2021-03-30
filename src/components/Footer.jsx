import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <section className="row">
            <article className="col-md-9 mx-auto">
              <section className="d-flex justify-content-between">
                {["Feed", "Post", "Share"].map((prefix) => (
                  <article className="footer-links">
                    {["back", "up", "bush", "all"].map((suffix) => (
                      <p>
                        {prefix}
                        {suffix}
                      </p>
                    ))}
                  </article>
                ))}
              </section>
            </article>
          </section>
        </div>
      </footer>
    </>
  );
}
