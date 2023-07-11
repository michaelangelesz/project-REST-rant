const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def title='Restaurant Details'>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
        </Def>
    )
}

module.exports = show
