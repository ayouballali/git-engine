import { useState } from "react";

function Users(params) {
  const [users, setUsers] = useState([
    {
      login: "defunkt",
      id: 2,
      node_id: "MDQ6VXNlcjI=",
      avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/defunkt",
      html_url: "https://github.com/defunkt",
      followers_url: "https://api.github.com/users/defunkt/followers",
      following_url:
        "https://api.github.com/users/defunkt/following{/other_user}",
      gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
      organizations_url: "https://api.github.com/users/defunkt/orgs",
      repos_url: "https://api.github.com/users/defunkt/repos",
      events_url: "https://api.github.com/users/defunkt/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/defunkt/received_events",
      type: "User",
      site_admin: false,
    },
    {
      login: "defunkt",
      id: 3,
      node_id: "MDQ6VXNlcjI=",
      avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/defunkt",
      html_url: "https://github.com/defunkt",
      followers_url: "https://api.github.com/users/defunkt/followers",
      following_url:
        "https://api.github.com/users/defunkt/following{/other_user}",
      gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
      organizations_url: "https://api.github.com/users/defunkt/orgs",
      repos_url: "https://api.github.com/users/defunkt/repos",
      events_url: "https://api.github.com/users/defunkt/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/defunkt/received_events",
      type: "User",
      site_admin: false,
    },
  ]);

  return (
    <div>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4">
            <div class="card">
              <img class="card-img-top" src={user.avatar_url} alt="" />
              <div class="card-body">
                <h4 class="card-title">{user.login}</h4>
                <p class="card-text">
                  <a class="btn btn-success" href={user.html_url} role="button">
                    Show more
                  </a>
                  <a
                    class="btn btn-warning"
                    href={user.repos_url}
                    role="button"
                  >
                    Repositories
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
