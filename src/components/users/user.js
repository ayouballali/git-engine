import React from 'react'

export default function User(props) {

    const {avatar_url,login,html_url,repos_url} = props.user

  return (
    <div className="card mt-2">
    <img className="card-img-top" src={avatar_url} alt="" />
    <div className="card-body">
      <h4 className="card-title">{login}</h4>
      <p className="card-text">
        <a className="btn btn-success" href={html_url} role="button">
          Show more
        </a>
        <a
          className="btn btn-warning"
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
