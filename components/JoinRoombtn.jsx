import React from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid'; 
import { Button } from './ui/button';
function JoinRoombtn() {
  const router = useRouter();

  const createRoom = () => {
    const newRoomId = uuidv4(); 
    router.push(`/editor/${newRoomId}`); 
  };

  return (
    <div>
      <Button className='flex p-3 rounded-lg items-center dark:bg-gray-800 dark:hover:bg-gray-900 text-slate-100 bg-slate-800 hover:bg-slate-900' onClick={createRoom}>
            Create Room
        </Button>
    </div>
  );
}

export default JoinRoombtn;
