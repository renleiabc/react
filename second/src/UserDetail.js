import React from 'react'
function UserDetail(props) {
  return (
    <div>
      {props.currentUser ? (
        <div>
          <div>姓名： {props.currentUser.project_name}</div>
          <div>创建时间： {props.currentUser.create_time}</div>
          <div>描述： {props.currentUser.project_description}</div>
          <div>网址： {props.currentUser.project_file}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
export default UserDetail
