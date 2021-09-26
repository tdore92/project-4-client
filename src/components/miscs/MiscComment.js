import React from 'react'
import { getComments, submitComment } from '../../lib/api'
import { useParams } from 'react-router-dom'

function Comments() {
  const { id } = useParams()
  const [comments, setComments] = React.useState(null)
  const [text, setText] = React.useState('')
  console.log(comments)

  React.useEffect(() => {
    const getData = async () => {
      const response = await getComments(id)
      console.log(response.data.comments)
      setComments(response.data.comments)
    }
    getData()
  }, [id])

  const handleSubmit = async (err) => {
    err.preventDefault()
    console.log(err)
    try {
      await submitComment(id, { text })
      const response = await getComments(id)
      setComments(response.data.comments)
      setText('')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (err) => {
    setText(err.target.value)
  }

  return (
    <>
      {comments ?
        <form onSubmit={handleSubmit}>
          {comments.map(comment => {
            return <p key={comment.id}>{comment.content}</p>
          })}
          <textarea className="comment-textarea" value={text} onChange={handleChange} placeholder="Leave a comment..." name="comments" />
          <button className="is-pulled-right">Add Comment</button>
        </form>
        :
        <div>loading comments...</div>}
    </>
  )
}

export default Comments