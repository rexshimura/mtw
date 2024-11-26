import React from 'react'

const Home = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-white">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.pinimg.com/736x/62/f5/da/62f5dafdcb9a4414b85486d8f5b986d2.jpg"
                className="max-w-sm rounded-lg" />

              <div>
                <h1 className="text-5xl font-bold">Welcome!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home