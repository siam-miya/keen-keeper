import React from 'react'
import useFrinedsHook from '../hooks/useFrinedsHook'
import { useParams } from 'react-router'

const FriendsDetails = () => {
    const {id} = useParams()
    console.log(id) 
    const {friends, loading} = useFrinedsHook
    console.log(friends, loading)
    const expectedFriend =  friends.find((friend)=> String(friend.id) === id)
  return (
    <div>
      details
    </div>
  )
}

export default FriendsDetails
