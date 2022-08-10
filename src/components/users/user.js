import React from 'react'
import { Link } from 'react-router-dom'

export default function User(props) {

    const {avatar_url,login,html_url,repos_url} = props.user

  return (
    <div className="card mt-2">
    <img className="card-img-top" src={avatar_url} alt="" />
    <div className="card-body">
      <h4 className="card-title">{login}</h4>
      <p className="card-text">
        <Link className="btn btn-primary" to={'/users/'+login} role="button">
          Show more
        </Link>
        <a
          className="btn btn-primary-alt"
          href={repos_url}
          role="button"
        >
          Repositories
        </a>
      </p>
    </div>
  </div>
  )
}
