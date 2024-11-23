import { useRouter } from "next/router"

export default function Comment() {
  const router = useRouter()
  const { id, commentId } = router.query
  return (
    <div>
      <h1>Post Id {id}</h1>
      <h1>Comment Id {commentId}</h1>
    </div>
  )
}