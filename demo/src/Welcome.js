
import React from 'react'
function Welcome(props) {
  console.log(props);
  const { name } = props;
  return <h1 className="foo">Hello, {name}</h1>
}
Welcome.defaultProps = {
  name: 'Stranger'
}
export default Welcome;