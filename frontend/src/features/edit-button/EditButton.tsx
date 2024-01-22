import { FC } from 'react'
import { Button } from 'shared/ui/button'

import { useNavigate } from 'react-router-dom'

export const EditButton: FC = () => {
  const navigate = useNavigate()

  const onEdit = () => navigate('/edit-profile')
  return (
    <Button view="editProfile" onClick={onEdit}>
      Edit Profile
    </Button>
  )
}
