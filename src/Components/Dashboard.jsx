import React from 'react'
import Logo from './Icons/Logo'
import { logout } from './User/Auth/authService';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.href = "/";
  }
  return (
    <article className="container">
      <hgroup className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <section className="card o-hidden border-0 shadow-lg my-5">
            <main className="card-body p-0">
              <section className="row">
                <figure className="col-lg-6 m-0 d-none d-lg-block bg-login-image"></figure>
                <section className="col-lg-6 p-5">
                  <hgroup className="d-flex justify-content-center user-heading">
                    <Logo width={60} height={60} className="me-3 fill-orange" />
                    <h1 className="text-center  h1">ADUDU</h1>
                  </hgroup>

                  <header className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Welcome Come Back!
                    </h1>
                  </header>

                  <button
                    className="btn btn-primary btn-user btn-block"
                    type="submit"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                </section>
              </section>
            </main>
          </section>
        </div>
      </hgroup>
    </article>
  )
}

export default Dashboard