const React = require('react')
const Default = require('./layouts/Default')

function error404 ({error404}) {
  return (
    <Default>
      <p>404 ERROR</p>
      <li><a href="/breads">GO HOME</a></li>
    </Default>
  )
}

module.exports = error404
