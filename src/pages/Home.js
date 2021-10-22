import React from "react";

export default function Home() {
  return (
    <div className="" id="home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
              <a className="navbar-brand" href="#">
                <i className="fas fa-3x fa-tachometer-alt tm-site-icon"></i>
                <h1 className="tm-site-title mb-0">Dashboard</h1>
              </a>
              <button
                className="navbar-toggler ml-auto mr-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Dashboard
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Reports
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">
                        Daily Report
                      </a>
                      <a className="dropdown-item" href="#">
                        Weekly Report
                      </a>
                      <a className="dropdown-item" href="#">
                        Yearly Report
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="products.html">
                      Products
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="accounts.html">
                      Accounts
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Settings
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        Billing
                      </a>
                      <a className="dropdown-item" href="#">
                        Customize
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link d-flex" href="login.html">
                      <i className="far fa-user mr-2 tm-logout-icon"></i>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row tm-content-row tm-mt-big">
          <div className="tm-col tm-col-big">
            <div className="bg-white tm-block h-100">
              <h2 className="tm-block-title">Latest Hits</h2>
              <canvas id="lineChart"></canvas>
            </div>
          </div>
          <div className="tm-col tm-col-big">
            <div className="bg-white tm-block h-100">
              <h2 className="tm-block-title">Performance</h2>
              <canvas id="barChart"></canvas>
            </div>
          </div>
          <div className="tm-col tm-col-small">
            <div className="bg-white tm-block h-100">
              <canvas id="pieChart" className="chartjs-render-monitor"></canvas>
            </div>
          </div>

          <div className="tm-col tm-col-big">
            <div className="bg-white tm-block h-100">
              <div className="row">
                <div className="col-8">
                  <h2 className="tm-block-title d-inline-block">
                    Top Product List
                  </h2>
                </div>
                <div className="col-4 text-right">
                  <a href="products.html" className="tm-link-black">
                    View All
                  </a>
                </div>
              </div>
              <ol className="tm-list-group tm-list-group-alternate-color tm-list-group-pad-big">
                <li className="tm-list-group-item">Donec eget libero</li>
                <li className="tm-list-group-item">
                  Nunc luctus suscipit elementum
                </li>
                <li className="tm-list-group-item">Maecenas eu justo maximus</li>
                <li className="tm-list-group-item">
                  Pellentesque auctor urna nunc
                </li>
                <li className="tm-list-group-item">
                  Sit amet aliquam lorem efficitur
                </li>
                <li className="tm-list-group-item">
                  Pellentesque auctor urna nunc
                </li>
                <li className="tm-list-group-item">
                  Sit amet aliquam lorem efficitur
                </li>
              </ol>
            </div>
          </div>
          <div className="tm-col tm-col-big">
            <div className="bg-white tm-block h-100">
              <h2 className="tm-block-title">Calendar</h2>
              <div id="calendar"></div>
              <div className="row mt-4">
                <div className="col-12 text-right">
                  <a href="#" className="tm-link-black">
                    View Schedules
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tm-col tm-col-small">
            <div className="bg-white tm-block h-100">
              <h2 className="tm-block-title">Upcoming Tasks</h2>
              <ol className="tm-list-group">
                <li className="tm-list-group-item">List of tasks</li>
                <li className="tm-list-group-item">Lorem ipsum doloe</li>
                <li className="tm-list-group-item">Read reports</li>
                <li className="tm-list-group-item">Write email</li>

                <li className="tm-list-group-item">Call customers</li>
                <li className="tm-list-group-item">Go to meeting</li>
                <li className="tm-list-group-item">Weekly plan</li>
                <li className="tm-list-group-item">Ask for feedback</li>

                <li className="tm-list-group-item">Meet Supervisor</li>
                <li className="tm-list-group-item">Company trip</li>
              </ol>
            </div>
          </div>
        </div>
        <footer className="row tm-mt-small">
          <div className="col-12 font-weight-light">
            <p className="d-inline-block tm-bg-black text-white py-2 px-4">
              Copyright &copy; 2018 Admin Dashboard . Created by
              <a
                rel="nofollow"
                href="https://www.tooplate.com"
                className="text-white tm-footer-link"
              >
                Tooplate
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
