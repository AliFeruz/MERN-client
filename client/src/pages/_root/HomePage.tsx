import { Button } from '@/components/ui/button'
import { useUserContext } from '@/context/authContext'


const HomePage = () => {
  const { Logout } = useUserContext()
  return (
    <div>
      <Button onClick={Logout}
      className='flex justify-center items-center'>
        Logout
      </Button>
    </div>
  )
}

export default HomePage
