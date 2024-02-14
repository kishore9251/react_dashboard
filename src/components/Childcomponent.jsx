import PropTypes from "prop-types"

export const Childcomponent = (props) => {
  return (
    <div>{props.children}</div>
  )
}

Childcomponent.PropTypes={
    children: PropTypes.array,
}