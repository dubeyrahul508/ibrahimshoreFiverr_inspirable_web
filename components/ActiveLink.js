import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, {Children, useEffect} from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { pathname } = useRouter()
  const child = Children.only(children)
  useEffect(()=>{
    window.scroll(0,0);
  },[]);

  const className =
    pathname === props.href
      ? `${child.props.className} ${activeClassName}`
      : child.props.className

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired
}

export default ActiveLink