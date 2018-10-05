import React from "react"

import Header from "./header"
import Hero from "./hero"
import CourseOverview from "./course-overview"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <CourseOverview />
      </div>
    )

  }

}

export default App
